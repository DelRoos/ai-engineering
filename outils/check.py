"""Vérifie un exercice, tous les exercices d'un module, ou un projet.

Pour l'apprenant :
    python outils/check.py <exercice, module ou projet>
    → lance les tests sur ton code (dossier starter/) et te dit quoi faire ensuite.

Pour les auteurs et la CI :
    python outils/check.py <chemin> --production
    → la solution passe, le starter échoue proprement, les tests attrapent les erreurs
      (tests par mutation), moins de 30 s et 1 Go, sans réseau, sans secret, sans fuite
      de la solution dans l'énoncé ou les indices, documentation présente.
"""

from __future__ import annotations

import argparse
import ast
import copy
import os
import re
import shutil
import subprocess
import sys
import tempfile
import time
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))
from _commun import RACINE, Rapport, lire_front_matter  # noqa: E402

LIMITE_SECONDES = 30
LIMITE_OCTETS = 1024 ** 3
MAX_MUTANTS = 40
SECRETS = [
    (r"sk-[A-Za-z0-9_-]{20,}", "clé d'API (sk-…)"),
    (r"AIza[0-9A-Za-z_-]{35}", "clé d'API Google"),
    (r"gh[pousr]_[A-Za-z0-9]{36,}", "jeton GitHub"),
    (r"AKIA[0-9A-Z]{16}", "clé AWS"),
    (r"-----BEGIN [A-Z ]*PRIVATE KEY-----", "clé privée"),
    (r"xox[baprs]-[A-Za-z0-9-]{10,}", "jeton Slack"),
]


# --------------------------------------------------------------------------- exécution mesurée

def _memoire_max_windows(proc: subprocess.Popen) -> int | None:
    try:
        import ctypes
        from ctypes import wintypes

        class Compteurs(ctypes.Structure):
            _fields_ = [("cb", wintypes.DWORD), ("PageFaultCount", wintypes.DWORD)] + [
                (nom, ctypes.c_size_t) for nom in (
                    "PeakWorkingSetSize", "WorkingSetSize", "QuotaPeakPagedPoolUsage", "QuotaPagedPoolUsage",
                    "QuotaPeakNonPagedPoolUsage", "QuotaNonPagedPoolUsage", "PagefileUsage", "PeakPagefileUsage")
            ]

        compteurs = Compteurs()
        compteurs.cb = ctypes.sizeof(compteurs)
        ok = ctypes.windll.psapi.GetProcessMemoryInfo(int(proc._handle), ctypes.byref(compteurs), compteurs.cb)
        return compteurs.PeakWorkingSetSize if ok else None
    except Exception:  # noqa: BLE001
        return None


def executer(cmd: list[str], cwd: Path, env: dict, timeout: int = 120) -> tuple[int, str, float, int | None]:
    """Lance une commande ; renvoie code de sortie, sortie, durée, mémoire maximale (octets)."""
    debut = time.perf_counter()
    proc = subprocess.Popen(cmd, cwd=cwd, env=env, stdout=subprocess.PIPE, stderr=subprocess.STDOUT,
                            text=True, encoding="utf-8", errors="replace")
    try:
        sortie, _ = proc.communicate(timeout=timeout)
    except subprocess.TimeoutExpired:
        proc.kill()
        sortie, _ = proc.communicate()
        return -1, sortie + f"\n[arrêté après {timeout} s]", time.perf_counter() - debut, None
    duree = time.perf_counter() - debut
    memoire = None
    if os.name == "nt":
        memoire = _memoire_max_windows(proc)
    else:
        import resource
        memoire = resource.getrusage(resource.RUSAGE_CHILDREN).ru_maxrss * 1024
    return proc.returncode, sortie, duree, memoire


def pytest(dossier: Path, cible: str, extra: list[str] | None = None, timeout: int = 120):
    env = dict(os.environ, CHECK_TARGET=cible, PYTHONDONTWRITEBYTECODE="1", PYTHONIOENCODING="utf-8",
               PYTHONPATH=os.pathsep.join([str(RACINE / "outils"), os.environ.get("PYTHONPATH", "")]))
    cmd = [sys.executable, "-m", "pytest", "tests", "-q", "-p", "no:cacheprovider", "-p", "_bloquer_reseau",
           "--color=no", *(extra or [])]
    return executer(cmd, dossier, env, timeout)


def resume_pytest(sortie: str) -> str:
    lignes = [ligne for ligne in sortie.strip().splitlines() if ligne.strip()]
    return lignes[-1] if lignes else "aucune sortie"


# --------------------------------------------------------------------------- mutants

class _Mutateur(ast.NodeTransformer):
    """Produit la mutation numéro `cible` ; compte les sites possibles dans `self.total`."""

    ECHANGES = {
        ast.Lt: ast.LtE, ast.LtE: ast.Lt, ast.Gt: ast.GtE, ast.GtE: ast.Gt, ast.Eq: ast.NotEq,
        ast.NotEq: ast.Eq, ast.In: ast.NotIn, ast.NotIn: ast.In, ast.Is: ast.IsNot, ast.IsNot: ast.Is,
        ast.Add: ast.Sub, ast.Sub: ast.Add, ast.Mult: ast.Add, ast.Div: ast.Mult, ast.FloorDiv: ast.Div,
        ast.Mod: ast.FloorDiv, ast.Pow: ast.Mult, ast.And: ast.Or, ast.Or: ast.And,
    }

    def __init__(self, cible: int):
        self.cible, self.total, self.description, self.ligne = cible, 0, "", 0

    def _site(self, noeud, description) -> bool:
        actif = self.total == self.cible
        if actif:
            self.description, self.ligne = description, getattr(noeud, "lineno", 0)
        self.total += 1
        return actif

    def visit_Expr(self, noeud):  # docstrings : on ne les mute pas
        if isinstance(noeud.value, ast.Constant) and isinstance(noeud.value.value, str):
            return noeud
        return self.generic_visit(noeud)

    def visit_Compare(self, noeud):
        self.generic_visit(noeud)
        for i, op in enumerate(noeud.ops):
            if type(op) in self.ECHANGES and self._site(noeud, f"{type(op).__name__} → {self.ECHANGES[type(op)].__name__}"):
                noeud.ops[i] = self.ECHANGES[type(op)]()
        return noeud

    def visit_BinOp(self, noeud):
        self.generic_visit(noeud)
        if type(noeud.op) in self.ECHANGES and self._site(noeud, f"{type(noeud.op).__name__} → {self.ECHANGES[type(noeud.op)].__name__}"):
            noeud.op = self.ECHANGES[type(noeud.op)]()
        return noeud

    def visit_AugAssign(self, noeud):
        self.generic_visit(noeud)
        if type(noeud.op) in self.ECHANGES and self._site(noeud, f"{type(noeud.op).__name__}= → {self.ECHANGES[type(noeud.op)].__name__}="):
            noeud.op = self.ECHANGES[type(noeud.op)]()
        return noeud

    def visit_BoolOp(self, noeud):
        self.generic_visit(noeud)
        if self._site(noeud, f"{type(noeud.op).__name__} → {self.ECHANGES[type(noeud.op)].__name__}"):
            noeud.op = self.ECHANGES[type(noeud.op)]()
        return noeud

    def visit_UnaryOp(self, noeud):
        self.generic_visit(noeud)
        if isinstance(noeud.op, ast.Not) and self._site(noeud, "suppression du not"):
            return noeud.operand
        return noeud

    def visit_Constant(self, noeud):
        if isinstance(noeud.value, bool):
            if self._site(noeud, f"{noeud.value} → {not noeud.value}"):
                return ast.copy_location(ast.Constant(not noeud.value), noeud)
        elif isinstance(noeud.value, (int, float)):
            if self._site(noeud, f"{noeud.value} → {noeud.value + 1}"):
                return ast.copy_location(ast.Constant(noeud.value + 1), noeud)
        return noeud

    def visit_If(self, noeud):
        self.generic_visit(noeud)
        if self._site(noeud, "condition inversée"):
            noeud.test = ast.UnaryOp(ast.Not(), noeud.test)
        return noeud

    def visit_Return(self, noeud):
        self.generic_visit(noeud)
        if noeud.value is not None and self._site(noeud, "return None (réponse vide)"):
            noeud.value = ast.Constant(None)
        return noeud

    def visit_Raise(self, noeud):
        if self._site(noeud, "raise supprimé"):
            return ast.copy_location(ast.Pass(), noeud)
        return noeud


def mutants(source: str) -> list[tuple[str, str, int]]:
    arbre = ast.parse(source)
    compteur = _Mutateur(-1)
    compteur.visit(copy.deepcopy(arbre))
    total = compteur.total
    choisis = range(total) if total <= MAX_MUTANTS else sorted({round(i * (total - 1) / (MAX_MUTANTS - 1)) for i in range(MAX_MUTANTS)})
    resultat = []
    for i in choisis:
        m = _Mutateur(i)
        nouveau = ast.fix_missing_locations(m.visit(copy.deepcopy(arbre)))
        resultat.append((ast.unparse(nouveau), m.description, m.ligne))
    return resultat


REPONSES_BIDON = ["None", "0", "0.0", "1", "1.0", "''", "[]", "{}", "()", "False", "True"]


def tricheries(source: str) -> list[tuple[str, str]]:
    """Versions où une fonction publique renvoie une réponse bidon, sans rien calculer."""
    arbre = ast.parse(source)
    resultat = []
    for i, noeud in enumerate(arbre.body):
        if not isinstance(noeud, ast.FunctionDef) or noeud.name.startswith("_"):
            continue
        reponses = list(REPONSES_BIDON)
        if noeud.args.args:
            reponses.append(noeud.args.args[0].arg)
        for reponse in reponses:
            copie = copy.deepcopy(arbre)
            copie.body[i].body = [ast.Return(ast.parse(reponse, mode="eval").body)]
            resultat.append((ast.unparse(ast.fix_missing_locations(copie)), f"{noeud.name} renvoie toujours {reponse}"))
    return resultat


def tester_tricheries(exercice: Path, rapport: Rapport) -> None:
    passent = []
    with tempfile.TemporaryDirectory() as tmp:
        copie = Path(tmp) / "exercice"
        shutil.copytree(exercice, copie, ignore=shutil.ignore_patterns("__pycache__", ".pytest_cache"))
        for f in (exercice / "solution").rglob("*.py"):
            relatif = f.relative_to(exercice)
            original = f.read_text(encoding="utf-8")
            for code, description in tricheries(original):
                (copie / relatif).write_text(code, encoding="utf-8")
                retour, _, _, _ = pytest(copie, "solution", ["-x"], timeout=LIMITE_SECONDES)
                if retour == 0:
                    passent.append(description)
            (copie / relatif).write_text(original, encoding="utf-8")
    if passent:
        rapport.bloquant("tests-contournables", "les tests acceptent une réponse qui ne calcule rien : " + " ; ".join(passent[:5]))


def tester_mutants(exercice: Path, rapport: Rapport) -> None:
    fichiers = [f for f in (exercice / "solution").rglob("*.py") if f.name != "__init__.py"]
    tues, survivants, total = 0, [], 0
    with tempfile.TemporaryDirectory() as tmp:
        copie = Path(tmp) / "exercice"
        shutil.copytree(exercice, copie, ignore=shutil.ignore_patterns("__pycache__", ".pytest_cache"))
        for f in fichiers:
            relatif = f.relative_to(exercice)
            original = f.read_text(encoding="utf-8")
            for code, description, ligne in mutants(original):
                total += 1
                (copie / relatif).write_text(code, encoding="utf-8")
                retour, _, _, _ = pytest(copie, "solution", ["-x"], timeout=LIMITE_SECONDES)
                if retour == 0:
                    survivants.append(f"{relatif.as_posix()}:{ligne} {description}")
                else:
                    tues += 1
            (copie / relatif).write_text(original, encoding="utf-8")
    if total == 0:
        rapport.alerte("mutants", "aucune mutation possible : la solution est-elle vide ?")
        return
    score = tues / total
    message = f"{tues}/{total} versions fausses de la solution détectées par les tests ({score:.0%})"
    if score < 0.6:
        rapport.bloquant("tests-faibles", message + ". Survivantes : " + " ; ".join(survivants[:8]))
    elif score < 0.8:
        rapport.alerte("tests-faibles", message + ". Survivantes : " + " ; ".join(survivants[:8]))
    else:
        rapport.info("tests-solides", message + (". Survivantes : " + " ; ".join(survivants[:5]) if survivants else ""))


# --------------------------------------------------------------------------- contrôles statiques

def lignes_significatives(code: str) -> set[str]:
    lignes = set()
    for ligne in code.splitlines():
        ligne = " ".join(ligne.split())
        if len(ligne) >= 15 and not ligne.startswith(("#", "def ", "class ", '"""', "'''", "import ", "from ")):
            lignes.add(ligne)
    return lignes


def fuite_solution(exercice: Path, rapport: Rapport) -> None:
    solution = set()
    for f in (exercice / "solution").rglob("*.py"):
        arbre = ast.parse(f.read_text(encoding="utf-8"))
        for noeud in ast.walk(arbre):
            if isinstance(noeud, (ast.FunctionDef, ast.AsyncFunctionDef, ast.ClassDef, ast.Module)):
                corps = noeud.body
                if corps and isinstance(corps[0], ast.Expr) and isinstance(getattr(corps[0], "value", None), ast.Constant):
                    corps[0] = ast.Pass()
        solution |= lignes_significatives(ast.unparse(arbre))
    if not solution:
        return
    for nom in ("ENONCE.md", "indices.md"):
        f = exercice / nom
        if not f.exists():
            continue
        code = "\n".join(re.findall(r"```\w*\n(.*?)```", f.read_text(encoding="utf-8"), flags=re.S))
        communes = solution & lignes_significatives(code)
        part = len(communes) / len(solution)
        if part > 0.5:
            rapport.bloquant("fuite-solution", f"{nom} contient {part:.0%} des lignes de la solution", nom)
        elif communes:
            rapport.alerte("fuite-solution", f"{nom} contient {len(communes)} ligne(s) de la solution : {sorted(communes)[0][:80]}", nom)


def assertions_sans_message(exercice: Path, rapport: Rapport) -> None:
    for f in (exercice / "tests").glob("test_*.py"):
        for noeud in ast.walk(ast.parse(f.read_text(encoding="utf-8"))):
            if isinstance(noeud, ast.Assert) and noeud.msg is None:
                rapport.alerte("assert-sans-message", "assert sans message en français pour l'apprenant", f"{f.name}:{noeud.lineno}")


def secrets(dossier: Path, rapport: Rapport) -> None:
    for f in dossier.rglob("*"):
        if f.is_file() and f.suffix in (".py", ".md", ".yaml", ".yml", ".json", ".toml", ".txt", ".env", ".cfg", ".ini"):
            texte = f.read_text(encoding="utf-8", errors="ignore")
            for motif, nom in SECRETS:
                if re.search(motif, texte):
                    rapport.bloquant("secret", f"{nom} trouvée", f.relative_to(dossier).as_posix())
        if f.name == ".env":
            rapport.bloquant("secret", "fichier .env dans le dépôt", f.relative_to(dossier).as_posix())


def documentation(exercice: Path, rapport: Rapport) -> None:
    enonce = exercice / "ENONCE.md"
    if not enonce.exists():
        rapport.bloquant("enonce-absent", "ENONCE.md manque")
    else:
        texte = enonce.read_text(encoding="utf-8")
        try:
            meta, _ = lire_front_matter(texte)
        except ValueError as err:
            meta = None
            rapport.bloquant("enonce-front-matter", str(err), "ENONCE.md")
        for champ in ("id", "titre", "objectifs", "difficulte", "type", "statut", "version", "mise_a_jour"):
            if not meta or champ not in meta:
                rapport.bloquant("enonce-front-matter", f"champ « {champ} » manquant", "ENONCE.md")
        if "CONSIGNE" in texte:
            rapport.bloquant("consigne-restante", "commentaires CONSIGNE restants", "ENONCE.md")
    indices = exercice / "indices.md"
    if exercice.parent.name == "exercices":
        if not indices.exists():
            rapport.bloquant("indices-absents", "indices.md manque")
        else:
            texte = indices.read_text(encoding="utf-8")
            if texte.count("<details>") < 3:
                rapport.bloquant("indices", f"{texte.count('<details>')} indice(s) dépliable(s), 3 au moins")
            if "CONSIGNE" in texte:
                rapport.bloquant("consigne-restante", "commentaires CONSIGNE restants", "indices.md")


def ruff(exercice: Path, rapport: Rapport) -> None:
    commande = [shutil.which("ruff")] if shutil.which("ruff") else None
    if commande is None:
        try:
            subprocess.run([sys.executable, "-m", "ruff", "--version"], capture_output=True, check=True)
            commande = [sys.executable, "-m", "ruff"]
        except (subprocess.CalledProcessError, FileNotFoundError):
            rapport.alerte("ruff-absent", "ruff n'est pas installé (pip install -r outils/requirements.txt) : lint non vérifié")
            return
    proc = subprocess.run([*commande, "check", "--quiet", "solution", "tests"], cwd=exercice,
                          capture_output=True, text=True, encoding="utf-8", errors="replace")
    if proc.returncode != 0:
        rapport.bloquant("lint", f"ruff signale des problèmes : {proc.stdout.strip()[:300]}")


# --------------------------------------------------------------------------- modes

def production(exercice: Path) -> Rapport:
    rapport = Rapport(f"Production — {exercice.relative_to(RACINE).as_posix() if exercice.is_relative_to(RACINE) else exercice.name}")
    for dossier in ("solution", "starter", "tests"):
        if not (exercice / dossier).is_dir():
            rapport.bloquant("dossier-absent", f"{dossier}/ manque")
    if not rapport.ok:
        return rapport
    retour, sortie, duree, memoire = pytest(exercice, "solution", timeout=LIMITE_SECONDES * 3)
    if retour != 0:
        rapport.bloquant("solution-echoue", f"les tests échouent sur la solution : {resume_pytest(sortie)}")
        return rapport
    rapport.info("solution", f"tests au vert en {duree:.1f} s" + (f", {memoire / 1024 ** 2:.0f} Mo au plus" if memoire else ""))
    if duree > LIMITE_SECONDES:
        rapport.bloquant("trop-long", f"{duree:.1f} s, limite {LIMITE_SECONDES} s (AGENTS.md § 10)")
    if memoire and memoire > LIMITE_OCTETS:
        rapport.bloquant("trop-de-memoire", f"{memoire / 1024 ** 2:.0f} Mo, limite 1 Go (AGENTS.md § 10)")
    if memoire is None:
        rapport.info("memoire", "mémoire non mesurée sur ce système")
    retour, sortie, _, _ = pytest(exercice, "starter", ["-rA"])
    if retour == 0:
        rapport.bloquant("starter-passe", "tous les tests passent sur le starter : l'exercice est déjà résolu")
    else:
        if re.search(r"ERROR collecting|SyntaxError|IndentationError|ImportError|ModuleNotFoundError", sortie):
            rapport.bloquant("starter-plante", "le starter plante au chargement (erreur de syntaxe ou d'import) : l'apprenant verra une trace incompréhensible")
        passes = re.findall(r"^PASSED (\S+)", sortie, flags=re.M)
        if passes:
            rapport.alerte("tests-non-discriminants", f"{len(passes)} test(s) passent déjà sur le starter : {', '.join(passes[:4])}")
    assertions_sans_message(exercice, rapport)
    fuite_solution(exercice, rapport)
    documentation(exercice, rapport)
    secrets(exercice, rapport)
    ruff(exercice, rapport)
    tester_tricheries(exercice, rapport)
    tester_mutants(exercice, rapport)
    return rapport


def apprenant(exercice: Path, cible: str) -> bool:
    nom = exercice.relative_to(RACINE).as_posix() if exercice.is_relative_to(RACINE) else exercice.name
    retour, sortie, duree, _ = pytest(exercice, cible, ["--tb=short"])
    if retour == 0:
        print(f"✓ {nom} : tous les tests passent ({duree:.1f} s). Bravo !")
        return True
    print(f"✗ {nom} : {resume_pytest(sortie)}")
    messages = list(dict.fromkeys(re.findall(r"^E\s+(?:AssertionError: )?(.+)$", sortie, flags=re.M)))
    for m in messages[:5]:
        print(f"   → {m}")
    if "NotImplementedError" in sortie:
        print("   → La fonction n'est pas encore écrite : complète le fichier dans starter/.")
    print("   Lis le premier message, corrige, puis relance la même commande. Bloqué ? Ouvre indices.md, un indice à la fois.")
    return False


def exercices(chemin: Path) -> list[Path]:
    if (chemin / "tests").is_dir():
        return [chemin]
    if (chemin / "exercices").is_dir():
        return sorted(p for p in (chemin / "exercices").iterdir() if (p / "tests").is_dir())
    return sorted(p.parent for p in chemin.rglob("tests") if p.is_dir() and (p.parent / "solution").is_dir())


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    parser.add_argument("chemin")
    parser.add_argument("--production", action="store_true", help="contrôles complets pour les auteurs et la CI")
    parser.add_argument("--cible", choices=["starter", "solution"], default=os.environ.get("CHECK_TARGET", "starter"))
    parser.add_argument("--details", action="store_true")
    args = parser.parse_args()
    chemin = Path(args.chemin)
    chemin = (chemin if chemin.is_absolute() else Path.cwd() / chemin).resolve()
    liste = exercices(chemin)
    if not liste:
        print(f"Aucun exercice trouvé dans {args.chemin} (il faut un dossier tests/).")
        return 2
    if args.production:
        rapports = [production(e) for e in liste]
        for r in rapports:
            r.afficher(args.details)
        return 0 if all(r.ok for r in rapports) else 1
    resultats = [apprenant(e, args.cible) for e in liste]
    if len(resultats) > 1:
        print(f"\n{sum(resultats)}/{len(resultats)} exercice(s) réussi(s).")
    return 0 if all(resultats) else 1


if __name__ == "__main__":
    sys.exit(main())
