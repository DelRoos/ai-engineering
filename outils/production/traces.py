"""Analyse la façon dont Gemini a produit une leçon, à partir de ses traces.

On juge d'abord ce qu'il a fait (recherches, pages lues, fichiers écrits, commandes
refusées), qu'on peut vérifier, puis ce qu'il dit avoir pensé (résumés de réflexion),
qu'on prend comme un indice : doutes, connaissances tirées de sa mémoire, règles
contournées.

Usage :
    python outils/production/traces.py <dossier de la leçon dans le dépôt de fabrication>
"""

from __future__ import annotations

import json
import re
import sys
from dataclasses import dataclass, field
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent.parent))
from _commun import Rapport, lire_yaml  # noqa: E402

DOUTES = [
    r"\bnot (entirely |completely |100% )?sure\b", r"\bi think\b", r"\bprobably\b", r"\bi assume\b",
    r"\bassuming\b", r"\bi believe\b", r"\bunclear\b", r"\buncertain\b", r"\bmight be\b",
    r"\bpas (tout à fait |vraiment )?sûr\b", r"\bje suppose\b", r"\bprobablement\b", r"\bil me semble\b",
    r"\bje crois\b", r"\bincertain",
]
MEMOIRE = [
    r"\bfrom (my )?memory\b", r"\bi recall\b", r"\bi remember\b", r"\bfrom my (own )?knowledge\b",
    r"\bbased on my (training|knowledge)\b", r"\bi already know\b", r"\bwithout (searching|checking|verifying)\b",
    r"\bde mémoire\b", r"\bje sais que\b", r"\bsans (vérifier|chercher)\b",
]
CONTOURNEMENTS = [
    r"\bwork ?around\b", r"\bskip (the|this) (check|test|rule|step)\b", r"\bbypass\b", r"\bignore the (rule|instruction|check)\b",
    r"\b(relax|loosen|weaken|simplify) the (test|assert|check)", r"\bmake (it|the test) pass\b", r"\bmake up\b",
    r"\bfabricate\b", r"\binvent\b", r"\bpretend\b", r"\bcouldn'?t find\b", r"\bcan'?t find\b", r"\bno source\b",
    r"\bcontourner\b", r"\binventer\b", r"\bfaire passer le test\b", r"\bpas trouvé\b",
]


# Noms des outils selon le moteur : Gemini CLI, puis Antigravity (agy).
OUTILS_COMMANDE = {"run_shell_command", "run_command"}
OUTILS_LECTURE = {"read_file", "read_many_files", "view_file"}
OUTILS_ECRITURE = {"write_file", "replace", "edit_file", "write_to_file", "replace_file_content", "multi_replace_file_content"}
OUTILS_RECHERCHE = {"google_web_search", "search_web"}
OUTILS_RESUME_PAGE = {"web_fetch", "read_url_content"}


@dataclass
class Appel:
    outil: str
    arguments: dict
    resultat: str = ""
    statut: str = ""


@dataclass
class Trace:
    appels: list[Appel] = field(default_factory=list)
    reflexions: list[str] = field(default_factory=list)
    messages: list[str] = field(default_factory=list)


def _texte(valeur) -> str:
    if isinstance(valeur, str):
        return valeur
    if isinstance(valeur, list):
        return "\n".join(_texte(v) for v in valeur)
    if isinstance(valeur, dict):
        for cle in ("text", "output", "llmContent", "returnDisplay", "content", "description", "subject"):
            if cle in valeur:
                return _texte(valeur[cle])
        return json.dumps(valeur, ensure_ascii=False)
    return "" if valeur is None else str(valeur)


def _parcourir(obj, trace: Trace) -> None:
    """Extrait appels d'outils, réflexions et messages, quel que soit le format (stream ou session)."""
    if isinstance(obj, list):
        for v in obj:
            _parcourir(v, trace)
        return
    if not isinstance(obj, dict):
        return
    nom = obj.get("name") or obj.get("tool_name") or obj.get("toolName")
    args = obj.get("args") or obj.get("parameters") or obj.get("input")
    if isinstance(nom, str) and isinstance(args, dict):
        statut = str(obj.get("status") or obj.get("state") or "")
        if obj.get("error"):
            statut = f"error {_texte(obj.get('error'))}"
        trace.appels.append(Appel(nom, args, _texte(obj.get("result") or obj.get("output") or ""), statut))
    for cle, valeur in obj.items():
        if cle == "thoughts":
            for t in valeur if isinstance(valeur, list) else [valeur]:
                trace.reflexions.append(_texte(t) if not isinstance(t, dict) else
                                        f"{t.get('subject', '')} : {t.get('description', '')}")
        elif cle == "type" and valeur in ("thought", "thinking"):
            trace.reflexions.append(_texte(obj.get("content") or obj.get("text")))
        elif cle == "type" and valeur in ("gemini", "message") and obj.get("role", "assistant") != "user":
            trace.messages.append(_texte(obj.get("content")))
        elif isinstance(valeur, (dict, list)) and cle not in ("args", "parameters", "input"):
            _parcourir(valeur, trace)


def lignes_transcript(artefacts: Path) -> list[dict]:
    """Transcription complète d'Antigravity (réflexions résumées et appels d'outils).

    Les morceaux de chunks/transcript_full sont coupés au milieu des lignes : on les recolle dans
    l'ordre avant de découper. À défaut, on lit transcript_full.jsonl."""
    logs = artefacts / ".system_generated" / "logs"
    morceaux = sorted((logs / "chunks" / "transcript_full").glob("*.jsonl"))
    if morceaux:
        brut = b"".join(m.read_bytes() for m in morceaux)
    elif (logs / "transcript_full.jsonl").exists():
        brut = (logs / "transcript_full.jsonl").read_bytes()
    else:
        return []
    lignes = []
    for ligne in brut.decode("utf-8", errors="replace").splitlines():
        try:
            lignes.append(json.loads(ligne))
        except json.JSONDecodeError:
            continue
    return lignes


def ajouter_transcript(lignes: list[dict], trace: Trace) -> None:
    for ligne in lignes:
        if ligne.get("type") != "PLANNER_RESPONSE":
            continue
        if ligne.get("thinking"):
            trace.reflexions.append(str(ligne["thinking"]))
        if ligne.get("content"):
            trace.messages.append(str(ligne["content"]))
        for appel in ligne.get("tool_calls") or []:
            if isinstance(appel, dict) and isinstance(appel.get("args"), dict):
                trace.appels.append(Appel(str(appel.get("name", "")), appel["args"]))


def charger(fichiers: list[Path]) -> Trace:
    trace = Trace()
    for f in fichiers:  # transcriptions complètes d'Antigravity, quand elles existent
        artefacts = f.parent / (f.name.split(".")[0] + ".artefacts")
        if artefacts.is_dir():
            ajouter_transcript(lignes_transcript(artefacts), trace)
    for f in fichiers:
        morceaux: dict[tuple, list[str]] = {}  # flux agy : le texte arrive en morceaux (text_delta)
        for ligne in f.read_text(encoding="utf-8", errors="replace").splitlines():
            ligne = ligne.strip()
            if not ligne:
                continue
            try:
                evenement = json.loads(ligne)
            except json.JSONDecodeError:
                continue
            etape = evenement.get("step_update") if isinstance(evenement, dict) else None
            if isinstance(etape, dict) and "text_delta" in etape:
                cle = (etape.get("conversation_id"), etape.get("step_index"), etape.get("step_type"))
                morceaux.setdefault(cle, []).append(str(etape["text_delta"]))
                continue
            resultat = evenement.get("result") if isinstance(evenement, dict) else None
            if isinstance(resultat, dict) and resultat.get("denied_actions"):
                for refus in resultat["denied_actions"]:
                    trace.appels.append(Appel(str(refus.get("display_name", "action")), {"action": refus.get("action")}, "", "denied"))
            _parcourir(evenement, trace)
        for (_, _, type_etape), textes in morceaux.items():
            texte = "".join(textes)
            (trace.reflexions if type_etape in ("thinking", "thought") else trace.messages).append(texte)
    # Le même appel figure plusieurs fois (en cours, puis fini ; flux et session) : on garde la dernière version.
    derniers: dict[tuple, Appel] = {}
    for a in trace.appels:
        derniers[(a.outil, json.dumps(a.arguments, sort_keys=True, ensure_ascii=False))] = a
    trace.appels = list(derniers.values())
    trace.reflexions = list(dict.fromkeys(r for r in trace.reflexions if r.strip()))
    return trace


def _extraits(textes: list[str], motifs: list[str]) -> list[str]:
    trouves = []
    for t in textes:
        for motif in motifs:
            m = re.search(motif, t, re.I)
            if m:
                debut = max(0, m.start() - 80)
                trouves.append(t[debut:m.end() + 80].replace("\n", " ").strip())
                break
    return trouves


def analyser(dossier: Path, etape: str | None = None) -> Rapport:
    rapport = Rapport(f"Raisonnement de Gemini — {dossier.name}" + (f" ({etape})" if etape else ""))
    motif = f"{etape}-*.jsonl" if etape else "*.jsonl"
    fichiers = sorted((dossier / "traces").glob(motif))
    versions = [d for d in (dossier / "versions").glob("v*") if d.is_dir()] if (dossier / "versions").exists() else []
    if versions:  # seulement les sessions de la version en cours
        debut = max(d.stat().st_mtime for d in versions)
        recents = [f for f in fichiers if f.stat().st_mtime >= debut]
        if recents:
            fichiers = recents
    if not fichiers:
        rapport.bloquant("trace-absente", "aucune trace : impossible de savoir comment le contenu a été produit")
        return rapport
    trace = charger(fichiers)

    def arg(a: Appel, *cles: str) -> str:
        for cle in cles:
            if a.arguments.get(cle):
                return str(a.arguments[cle])
        return ""

    commandes = [arg(a, "command", "CommandLine") for a in trace.appels if a.outil in OUTILS_COMMANDE]
    lectures = [arg(a, "file_path", "Path", "AbsolutePath", "TargetFile").replace("\\", "/")
                for a in trace.appels if a.outil in OUTILS_LECTURE]
    ecritures = [arg(a, "file_path", "Path", "TargetFile", "AbsolutePath")
                 for a in trace.appels if a.outil in OUTILS_ECRITURE]
    recherches = [arg(a, "query", "Query") for a in trace.appels if a.outil in OUTILS_RECHERCHE]
    lues = set()
    for a in trace.appels:  # seulement les lectures qui ont réussi
        if a.outil in OUTILS_COMMANDE and not re.search(r"deny|denied|refus|error|cancel", a.statut, re.I):
            for m in re.finditer(r"lire_page\.py\s+['\"]?(https?://[^\s'\"]+)", arg(a, "command", "CommandLine")):
                lues.add(m.group(1))
    pages = dossier / "pages.yaml"
    if pages.exists():  # moteur agy : le pilote lit les pages, Gemini ouvre leur fichier
        try:
            for p in (lire_yaml(pages) or {}).get("pages") or []:
                if p.get("fichier") and any(lu.endswith("/" + p["fichier"]) or lu.endswith(p["fichier"]) for lu in lectures):
                    lues.add(str(p.get("url")))
        except Exception:  # noqa: BLE001
            pass
    refus = [a for a in trace.appels if re.search(r"deny|denied|refus|error|cancel", a.statut, re.I)
             or a.outil in OUTILS_RESUME_PAGE]

    rapport.info("recherches", f"{len(recherches)} recherche(s) : " + " | ".join(recherches[:12]))
    rapport.info("pages-lues", f"{len(lues)} page(s) lue(s) dans leur texte exact")
    rapport.info("reflexions", f"{len(trace.reflexions)} résumé(s) de réflexion enregistré(s)")
    rapport.info("fichiers-ecrits", ", ".join(sorted(set(Path(e.replace('\\', '/')).name for e in ecritures))) or "aucun")
    for c in commandes:
        rapport.alerte("commande-tentee", f"commande tentée alors qu'aucune n'est permise : {c[:120]}")

    if etape in (None, "recherche"):
        if not recherches:
            rapport.alerte("sans-recherche", "aucune recherche web : les sources viennent-elles de sa mémoire ?")
        langues = {"fr" if re.search(r"[éèàùç]|\b(le|la|les|des|du|comment|pourquoi)\b", q, re.I) else "en"
                   for q in recherches}
        if recherches and len(langues) < 2:
            rapport.alerte("recherche-une-langue", "recherches dans une seule langue : cherche en français et en anglais")
    if etape in (None, "extraction"):  # la recherche ne lit aucune page : rien à vérifier avant l'extraction
        fichier_sources = dossier / "sources.yaml"
        if fichier_sources.exists():
            try:
                sources = (lire_yaml(fichier_sources) or {}).get("sources") or []
            except Exception:  # noqa: BLE001
                sources = []
            for s in sources:
                url = str(s.get("url", ""))
                if url and url not in lues:
                    rapport.bloquant(
                        "source-non-lue-dans-trace",
                        f"{url} est citée, mais aucune lecture de cette page n'apparaît dans les traces de cette leçon",
                        str(s.get("id", "")),
                    )

    for a in refus:
        cible = arg(a, "command", "CommandLine", "prompt", "Url", "url", "file_path", "Path", "action")
        rapport.alerte("action-refusee", f"{a.outil} refusé ou en échec : {cible[:120]}")

    if not trace.reflexions:
        rapport.info("sans-reflexion", "le modèle n'a enregistré aucun résumé de réflexion : seuls ses actes sont jugés")
    textes = trace.reflexions + trace.messages
    doutes = _extraits(textes, DOUTES)
    memoire = _extraits(textes, MEMOIRE)
    contournements = _extraits(textes, CONTOURNEMENTS)
    for e in doutes[:8]:
        rapport.alerte("doute", f"« {e} »")
    for e in memoire[:8]:
        rapport.alerte("memoire", f"connaissance tirée de sa mémoire ? « {e} »")
    for e in contournements[:8]:
        rapport.alerte("contournement", f"règle contournée ? « {e} »")
    lecon = dossier / "lecon.mdx"
    if doutes and lecon.exists() and "TODO(vérifier)" not in lecon.read_text(encoding="utf-8"):
        rapport.alerte("doute-disparu", f"{len(doutes)} doute(s) dans les réflexions, mais aucun TODO(vérifier) dans la leçon")

    tests_lances_en_echec = False
    for a in trace.appels:
        cmd = arg(a, "command", "CommandLine")
        if a.outil in OUTILS_COMMANDE and re.search(r"pytest|check\.py", cmd):
            tests_lances_en_echec = bool(re.search(r"\bfailed\b|ÉCHEC|\berror\b", a.resultat, re.I))
        elif a.outil in OUTILS_ECRITURE and tests_lances_en_echec and "/tests/" in arg(
            a, "file_path", "Path", "TargetFile"
        ).replace("\\", "/"):
            rapport.alerte("tests-modifies-apres-echec", f"les tests ont été modifiés juste après un échec : {arg(a, 'file_path', 'Path', 'TargetFile')}")

    journal = dossier / "journal.md"
    if not journal.exists():
        rapport.bloquant("journal-absent", "journal.md manque : les décisions ne sont pas tracées")
    else:
        texte = journal.read_text(encoding="utf-8").lower()
        for titre in ("décisions", "écarté", "doutes"):
            if titre not in texte:
                rapport.bloquant("journal-incomplet", f"journal.md n'a pas de partie « {titre} »")

    brouillons = sorted((dossier / "brouillons").glob("v*.mdx"), key=lambda p: int(re.sub(r"\D", "", p.stem) or 0))
    if len(brouillons) >= 2:
        avant = brouillons[-2].read_text(encoding="utf-8").splitlines()
        apres = brouillons[-1].read_text(encoding="utf-8").splitlines()
        changees = len(set(apres) ^ set(avant))
        rapport.info("correction", f"{brouillons[-2].name} → {brouillons[-1].name} : {changees} ligne(s) changée(s)")
        if changees == 0:
            rapport.bloquant("correction-vide", "la correction n'a rien changé à la leçon")
    return rapport


def main() -> int:
    if len(sys.argv) not in (2, 3):
        print(__doc__)
        return 2
    rapport = analyser(Path(sys.argv[1]), sys.argv[2] if len(sys.argv) == 3 else None)
    rapport.afficher(details_info=True)
    return 0 if rapport.ok else 1


if __name__ == "__main__":
    sys.exit(main())
