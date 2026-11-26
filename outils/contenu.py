"""Contrôle le contenu : fiches, cours (chapitres) et leçons isolées.

Usage :
    python outils/contenu.py <module>                 # la fiche et tous les cours du module
    python outils/contenu.py <fichier.mdx>            # un chapitre de cours
    python outils/contenu.py <lecon.mdx> --lecon <module> <id-notion>   # une leçon seule
Options :
    --executer   exécute chaque bloc Python et compare sa sortie au bloc « text » qui suit
    --details    affiche aussi les informations

Voir docs/format-contenu.md (format, pièges MDX) et docs/guide-pedagogique.md (rédaction).
"""

from __future__ import annotations

import argparse
import json
import re
import shutil
import subprocess
import sys
import tempfile
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))
from _commun import (  # noqa: E402
    RACINE, Fiche, Rapport, lignes_tableau, lire_fiche, lire_front_matter, section, trouver_module,
)

COMPOSANTS = {
    "Objectifs", "Prerequis", "Pourquoi", "Notion", "Exemple", "MiniExercice", "Solution", "Note",
    "Astuce", "Attention", "Erreur", "Resume", "Vocabulaire", "Video",
}
HTML_PERMIS = {"details", "summary", "code", "br", "sup", "sub", "kbd"}
CHAMPS_COURS = ("id", "chapitre", "titre", "parcours", "objectifs", "prerequis", "statut", "version", "mise_a_jour", "licence")
INTERDITS = [
    (r"\bmentor", "renvoi vers un mentor (AGENTS.md § 6)"),
    (r"\bformateur", "renvoi vers un formateur (AGENTS.md § 6)"),
    (r"\bton (professeur|prof|enseignant)\b", "renvoi vers un professeur (AGENTS.md § 6)"),
    (r"\bcarte bancaire\b", "carte bancaire exigée ? (AGENTS.md § 6) — vérifie que ce n'est pas une obligation"),
]
ASSISTANTS_IA = r"\b(copilot|chatgpt|claude|cursor|gemini|assistant de code|codeium|tabnine)\b"
NE_PAS_EXECUTER = re.compile(r"^#\s*ne pas exécuter", re.I)


# --------------------------------------------------------------------------- outils de texte

def sans_code(texte: str) -> str:
    """Remplace le code (blocs et en ligne) par des espaces, en gardant les numéros de ligne."""
    def blanc(m: re.Match) -> str:
        return re.sub(r"[^\n]", " ", m.group(0))
    texte = re.sub(r"^([ \t]*)(`{3,}|~{3,})[^\n]*\n.*?^\1\2[ \t]*$", blanc, texte, flags=re.S | re.M)
    texte = re.sub(r"`[^`\n]+`", blanc, texte)
    texte = re.sub(r"\$\$.*?\$\$", blanc, texte, flags=re.S)  # formules KaTeX : accolades permises
    return re.sub(r"(?<![\\\w$])\$[^$\n]+\$(?![\w$])", blanc, texte)


def numero_ligne(texte: str, position: int) -> int:
    return texte.count("\n", 0, position) + 1


def phrases(texte: str) -> list[str]:
    """Phrases de la prose (hors code, balises, tableaux, renvois, commentaires)."""
    t = sans_code(texte)
    t = re.sub(r"\{/\*.*?\*/\}", " ", t, flags=re.S)
    t = re.sub(r"^\[\^[^\]]+\]:.*$", " ", t, flags=re.M)
    t = re.sub(r"^\s*\|.*$", " ", t, flags=re.M)
    t = re.sub(r"</?[A-Za-z][^>]*>", "\n", t)
    t = re.sub(r"\[([^\]]*)\]\([^)]*\)", r"\1", t)
    t = re.sub(r"\[\^[^\]]+\]", "", t)
    morceaux = []
    for bloc in re.split(r"\n\s*\n|\n\s*[-*] |\n\s*\d+\. |\n#+ ", t):
        bloc = " ".join(bloc.split())
        morceaux.extend(p.strip() for p in re.split(r"(?<=[.!?])\s+(?=[A-ZÀ-Ý«])", bloc) if p.strip())
    return morceaux


def nb_mots(texte: str) -> int:
    return len(re.findall(r"[\wÀ-ÿ'’-]+", texte))


# --------------------------------------------------------------------------- MDX

def pieges_mdx(texte: str, rapport: Rapport, fichier: str) -> None:
    corps = sans_code(texte)
    corps_sans_commentaires = re.sub(r"\{/\*.*?\*/\}", lambda m: re.sub(r"[^\n]", " ", m.group(0)), corps, flags=re.S)
    for m in re.finditer(r"<!--", corps):
        rapport.bloquant("mdx-commentaire-html", "commentaire HTML interdit en MDX : utilise {/* … */}", f"{fichier}:{numero_ligne(texte, m.start())}")
    for m in re.finditer(r"<https?://", corps):
        rapport.bloquant("mdx-lien-auto", "lien <https://…> lu comme une balise : écris [texte](https://…)", f"{fichier}:{numero_ligne(texte, m.start())}")
    for m in re.finditer(r"^(import|export)\s", corps, flags=re.M):
        rapport.bloquant("mdx-import", "import et export sont interdits dans le contenu", f"{fichier}:{numero_ligne(texte, m.start())}")
    for m in re.finditer(r"(?<!\\)\{", corps_sans_commentaires):
        rapport.bloquant("mdx-accolade", "« { » hors du code est lu comme du JavaScript : mets-le en code ou écris \\{", f"{fichier}:{numero_ligne(texte, m.start())}")
    for m in re.finditer(r"<(?![A-Za-z/!])", corps):
        rapport.bloquant("mdx-chevron", "« < » hors du code est lu comme une balise : mets-le en code ou écris « inférieur à »", f"{fichier}:{numero_ligne(texte, m.start())}")
    for m in re.finditer(r"</?([A-Za-z][\w.]*)", corps):
        nom = m.group(1)
        if nom[0].isupper() and nom not in COMPOSANTS:
            rapport.bloquant("mdx-composant-inconnu", f"<{nom}> n'est pas un composant de la plateforme", f"{fichier}:{numero_ligne(texte, m.start())}")
        elif nom[0].islower() and nom not in HTML_PERMIS:
            rapport.alerte("mdx-html", f"balise HTML <{nom}> : préfère le Markdown", f"{fichier}:{numero_ligne(texte, m.start())}")
    pile: list[tuple[str, int]] = []
    for m in re.finditer(r"<(/?)([A-Z]\w*)([^>]*?)(/?)>", corps):
        fermante, nom, _, auto = m.group(1), m.group(2), m.group(3), m.group(4)
        ligne = numero_ligne(texte, m.start())
        if auto:
            continue
        if not fermante:
            pile.append((nom, ligne))
        elif not pile or pile[-1][0] != nom:
            attendu = f"</{pile[-1][0]}> (ouvert ligne {pile[-1][1]})" if pile else "aucune balise ouverte"
            rapport.bloquant("mdx-imbrication", f"</{nom}> ferme mal : attendu {attendu}", f"{fichier}:{ligne}")
            if pile and any(n == nom for n, _ in pile):
                while pile and pile[-1][0] != nom:
                    pile.pop()
                pile.pop()
        else:
            pile.pop()
    for nom, ligne in pile:
        rapport.bloquant("mdx-non-ferme", f"<{nom}> n'est jamais fermé", f"{fichier}:{ligne}")
    lignes = corps.splitlines()
    est_balise = re.compile(r"^\s*</?[A-Z]\w*[^>]*>\s*$")
    for i, ligne in enumerate(lignes):
        if re.match(r"^\s*<[A-Z]\w*[^>/]*>\s*$", ligne) and i + 1 < len(lignes):
            suivante = lignes[i + 1]
            if suivante.strip() and not est_balise.match(suivante):
                rapport.bloquant("mdx-ligne-vide", "laisse une ligne vide après la balise ouvrante", f"{fichier}:{i + 1}")
            if i > 0 and lignes[i - 1].strip() and not est_balise.match(lignes[i - 1]):
                rapport.bloquant("mdx-ligne-vide", "laisse une ligne vide avant la balise ouvrante", f"{fichier}:{i + 1}")
        if re.match(r"^\s*</[A-Z]\w*>\s*$", ligne) and i > 0:
            precedente = lignes[i - 1]
            if precedente.strip() and not est_balise.match(precedente):
                rapport.bloquant("mdx-ligne-vide", "laisse une ligne vide avant la balise fermante", f"{fichier}:{i + 1}")
    if re.search(r"^# ", corps, flags=re.M):
        rapport.bloquant("titre-niveau-1", "pas de titre « # » dans un cours : le titre vient du front matter", fichier)
    if "CONSIGNE" in texte:
        rapport.bloquant("consigne-restante", "des commentaires CONSIGNE du modèle restent dans le fichier", fichier)
    ouvertures = re.findall(r"^\s*```(\S*)", texte, flags=re.M)
    for i in range(0, len(ouvertures), 2):
        if ouvertures[i] == "":
            rapport.bloquant("code-sans-langage", "un bloc de code n'indique pas son langage (```python, ```text…)", fichier)
            break


def compiler_mdx(fichiers: list[Path], rapport: Rapport) -> None:
    """Compile avec @mdx-js/mdx, remark-gfm et remark-math, comme la plateforme."""
    noeud = shutil.which("node")
    modules = RACINE / "plateforme" / "node_modules" / "@mdx-js" / "mdx"
    if not noeud or not modules.exists():
        rapport.alerte("compilation-impossible", "node ou plateforme/node_modules absent : compilation MDX non vérifiée (lance npm ci dans plateforme/)")
        return
    script = r"""
import {compile} from '@mdx-js/mdx';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import {readFileSync} from 'node:fs';
const fichiers = JSON.parse(readFileSync(0, 'utf8'));
const resultats = {};
for (const f of fichiers) {
  const brut = readFileSync(f, 'utf8');
  const m = brut.match(/^---\r?\n[\s\S]*?\r?\n---\r?\n?/);
  const decalage = m ? m[0].split('\n').length - 1 : 0;
  try {
    await compile(m ? brut.slice(m[0].length) : brut, {remarkPlugins: [remarkGfm, remarkMath]});
    resultats[f] = null;
  } catch (e) {
    const ligne = e.line ? e.line + decalage : (e.place && e.place.line ? e.place.line + decalage : null);
    resultats[f] = {message: String(e.reason || e.message), ligne};
  }
}
console.log(JSON.stringify(resultats));
"""
    proc = subprocess.run(
        [noeud, "--input-type=module", "-e", script],
        input=json.dumps([str(f) for f in fichiers]), capture_output=True, text=True,
        encoding="utf-8", cwd=RACINE / "plateforme", timeout=180,
    )
    if proc.returncode != 0:
        rapport.alerte("compilation-impossible", f"le compilateur MDX n'a pas pu tourner : {proc.stderr.strip()[:300]}")
        return
    for f, erreur in json.loads(proc.stdout.strip().splitlines()[-1]).items():
        if erreur:
            lieu = Path(f).name + (f":{erreur['ligne']}" if erreur.get("ligne") else "")
            rapport.bloquant("mdx-compilation", f"la plateforme ne pourra pas afficher ce fichier : {erreur['message']}", lieu)


# --------------------------------------------------------------------------- rédaction

def redaction(texte: str, rapport: Rapport, fichier: str, etape: int) -> None:
    longues = []
    for p in phrases(texte):
        n = nb_mots(p)
        if n > 35:
            rapport.bloquant("phrase-tres-longue", f"{n} mots (20 au plus) : « {p[:120]}… »", fichier)
        elif n > 20:
            longues.append((n, p))
    if longues:
        exemples = " | ".join(f"{n} mots : « {p[:70]}… »" for n, p in longues[:5])
        rapport.alerte("phrases-longues", f"{len(longues)} phrase(s) de plus de 20 mots. {exemples}", fichier)
    prose = re.sub(r"«[^»]*»", " ", sans_code(texte))
    # Les définitions des sources et les adresses des liens ne sont pas de la prose (« sauvegarder-votre-pc » dans une URL).
    prose = re.sub(r"^\[\^[^\]]+\]:.*$", lambda m: " " * len(m.group(0)), prose, flags=re.M)
    prose = re.sub(r"\]\([^)]*\)", lambda m: " " * len(m.group(0)), prose)
    for m in re.finditer(r"\b(vous|votre|vos)\b", prose, flags=re.I):
        rapport.bloquant("vouvoiement", "le cours tutoie l'apprenant (« tu »), hors citations entre « »", f"{fichier}:{numero_ligne(texte, m.start())}")
    for m in re.finditer(r"\w·\w", prose):
        rapport.bloquant("point-median", "pas d'écriture inclusive avec point médian", f"{fichier}:{numero_ligne(texte, m.start())}")
    for motif, raison in INTERDITS:
        for m in re.finditer(motif, prose, flags=re.I):
            rapport.bloquant("interdit", raison, f"{fichier}:{numero_ligne(texte, m.start())}")
    if etape == 0:
        for m in re.finditer(ASSISTANTS_IA, prose, flags=re.I):
            rapport.bloquant("assistant-ia-etape-0", "pas d'assistant de code IA à l'étape 0 (AGENTS.md § 6)", f"{fichier}:{numero_ligne(texte, m.start())}")
    for paragraphe in re.split(r"\n\s*\n", prose):
        if re.search(r"\$\s?\d|\d\s?\$|\bUSD\b|€|\beuros?\b|\bdollars?\b", paragraphe) and not re.search(r"relev|\[\^", paragraphe):
            rapport.alerte("prix-sans-date", f"prix sans date de relevé ni source : « {' '.join(paragraphe.split())[:100]} »", fichier)
    n_todo = texte.count("TODO(vérifier)")
    if n_todo:
        rapport.alerte("todo-verifier", f"{n_todo} TODO(vérifier) à lever avant le statut « relu »", fichier)


def executer_code(texte: str, rapport: Rapport, fichier: str) -> None:
    """Exécute chaque bloc Python et compare sa sortie au bloc « text » qui le suit."""
    blocs = list(re.finditer(r"^```(\w+)([^\n]*)\n(.*?)^```\s*$", texte, flags=re.S | re.M))
    for i, bloc in enumerate(blocs):
        langage, code = bloc.group(1), bloc.group(3)
        if langage != "python":
            continue
        ligne = numero_ligne(texte, bloc.start())
        if NE_PAS_EXECUTER.match(code.strip()):
            rapport.info("code-non-execute", code.strip().splitlines()[0], f"{fichier}:{ligne}")
            continue
        with tempfile.TemporaryDirectory() as dossier:
            try:
                proc = subprocess.run(
                    [sys.executable, "-I", "-X", "utf8", "-c", code], capture_output=True, text=True, encoding="utf-8",
                    errors="replace", cwd=dossier, timeout=30, stdin=subprocess.DEVNULL,
                )
            except subprocess.TimeoutExpired:
                rapport.bloquant("code-trop-long", "le bloc tourne plus de 30 secondes", f"{fichier}:{ligne}")
                continue
        attendu = None
        if i + 1 < len(blocs) and blocs[i + 1].group(1) == "text":
            entre = texte[bloc.end():blocs[i + 1].start()]
            if not entre.strip():
                attendu = blocs[i + 1].group(3)
        derniere = (proc.stderr.strip().splitlines() or ["?"])[-1]
        if proc.returncode != 0 and attendu and attendu.strip() and "Traceback" not in attendu:
            # Erreur volontaire montrée par son seul message : la dernière ligne doit être exacte.
            if " ".join(attendu.strip().splitlines()[-1].split()) == " ".join(derniere.split()):
                continue
        if proc.returncode != 0 and not (attendu and "Traceback" in attendu):
            rapport.bloquant(
                "code-en-erreur",
                f"le bloc échoue : {derniere}. S'il ne doit pas tourner seul, commence-le par « # ne pas exécuter : raison »",
                f"{fichier}:{ligne}",
            )
            continue
        if attendu is not None:
            obtenu = (proc.stdout + (proc.stderr if proc.returncode else "")).strip()
            if " ".join(obtenu.split()) != " ".join(attendu.strip().split()):
                rapport.bloquant(
                    "sortie-differente",
                    f"la sortie affichée ne correspond pas à la vraie sortie. Vraie sortie : « {obtenu[:200]} »",
                    f"{fichier}:{ligne}",
                )


# --------------------------------------------------------------------------- structure

def verifier_notion(bloc: str, notion_id: str, rapport: Rapport, fichier: str) -> None:
    if "<Exemple" not in bloc:
        rapport.bloquant("notion-sans-exemple", "la notion n'a pas d'<Exemple>", f"{fichier} #{notion_id}")
    mini = re.findall(r"<MiniExercice[^>]*>(.*?)</MiniExercice>", bloc, flags=re.S)
    if not mini:
        rapport.bloquant("notion-sans-mini-exercice", "la notion n'a pas de <MiniExercice>", f"{fichier} #{notion_id}")
    for contenu in mini:
        if "<Solution>" not in contenu:
            rapport.bloquant("mini-exercice-sans-solution", "<Solution> doit être dans le <MiniExercice>", f"{fichier} #{notion_id}")
    if bloc.find("<Exemple") > bloc.find("<MiniExercice") > -1:
        rapport.alerte("ordre-notion", "ordre attendu : explication, exemple, puis mini-exercice", f"{fichier} #{notion_id}")
    explication = bloc.split("<Exemple")[0]
    if nb_mots(sans_code(explication)) < 40:
        rapport.alerte("explication-courte", "l'explication avant l'exemple est très courte", f"{fichier} #{notion_id}")
    texte_seul = re.sub(r"\[\^[^\]]+\]:.*", "", sans_code(bloc))  # définitions des renvois
    texte_seul = re.sub(r"\[\^[^\]]+\]", "", texte_seul)  # renvois dans le texte
    texte_seul = re.sub(r"</?[A-Za-z][^>]*>", " ", texte_seul)  # balises des composants
    total = nb_mots(texte_seul)
    if total > 800:
        rapport.bloquant("longueur-notion", f"{total} mots : 800 au plus. Coupe ce qui répète, ou signale au journal "
                         "qu'il faut couper la notion en deux (décision du mainteneur)", f"{fichier} #{notion_id}")
    elif total < 300:
        rapport.alerte("longueur-notion", f"{total} mots (300 à 800 attendus)", f"{fichier} #{notion_id}")


def notions_du_texte(texte: str) -> list[tuple[str, str]]:
    return [(m.group(1), m.group(2)) for m in re.finditer(
        r"<Notion\s+id=\"([^\"]+)\"[^>]*>(.*?)</Notion>", texte, flags=re.S)]


def verifier_lecon(chemin: Path, fiche: Fiche, notion_id: str, executer: bool) -> Rapport:
    rapport = Rapport(f"Leçon {fiche.id}/{notion_id}")
    texte = chemin.read_text(encoding="utf-8")
    try:
        notion = fiche.notion(notion_id)
    except KeyError as err:
        rapport.bloquant("notion-inconnue", str(err))
        return rapport
    trouvees = notions_du_texte(texte)
    if len(trouvees) != 1 or trouvees[0][0] != notion_id:
        rapport.bloquant("lecon-une-notion", f"la leçon doit contenir une seule <Notion id=\"{notion_id}\">, trouvé : {[t[0] for t in trouvees]}")
    for _, bloc in trouvees:
        verifier_notion(bloc, notion_id, rapport, chemin.name)
    m = re.search(r"<Notion[^>]*titre=\"([^\"]+)\"", texte)
    if m and m.group(1) != notion.titre:
        rapport.alerte("titre-different", f"titre « {m.group(1)} » différent de la fiche « {notion.titre} »")
    pieges_mdx(texte, rapport, chemin.name)
    compiler_mdx([chemin], rapport)
    redaction(texte, rapport, chemin.name, int(fiche.relatif[:2]))
    if executer:
        executer_code(texte, rapport, chemin.name)
    return rapport


def verifier_chapitre(chemin: Path, fiche: Fiche | None, executer: bool) -> Rapport:
    rapport = Rapport(f"Cours {chemin.relative_to(RACINE).as_posix() if chemin.is_relative_to(RACINE) else chemin}")
    texte = chemin.read_text(encoding="utf-8")
    nom = chemin.name
    try:
        meta, corps = lire_front_matter(texte)
    except ValueError as err:
        rapport.bloquant("front-matter", str(err), nom)
        return rapport
    if meta is None:
        rapport.bloquant("front-matter", "front matter absent", nom)
        meta = {}
    # Remplace le front matter par des lignes vides : les numéros de ligne restent ceux du fichier.
    corps = "\n" * texte[: len(texte) - len(corps)].count("\n") + corps
    for champ in CHAMPS_COURS:
        if champ not in meta:
            rapport.bloquant("front-matter", f"champ « {champ} » manquant", nom)
    if meta.get("statut") not in ("brouillon", "relu", "publie"):
        rapport.bloquant("front-matter", "statut : brouillon, relu ou publie", nom)
    if fiche:
        if str(meta.get("id")) != fiche.id:
            rapport.bloquant("front-matter", f"id « {meta.get('id')} » différent de la fiche « {fiche.id} »", nom)
        for o in meta.get("objectifs") or []:
            if o not in fiche.objectifs:
                rapport.bloquant("objectif-inconnu", f"{o} n'existe pas dans la fiche", nom)
    ordre = ["<Objectifs>", "<Prerequis>", "<Pourquoi>", "<Notion", "<Resume>", "<Vocabulaire>"]
    positions = [corps.find(o) for o in ordre]
    for balise, pos in zip(ordre, positions):
        if pos < 0:
            rapport.bloquant("section-manquante", f"section {balise} absente (guide pédagogique § 1)", nom)
    presentes = [p for p in positions if p >= 0]
    if presentes != sorted(presentes):
        rapport.bloquant("ordre-sections", "ordre attendu : Objectifs, Prérequis, Pourquoi, Notions, Erreurs, Résumé, Vocabulaire", nom)
    erreurs = corps.count("<Erreur")
    if not 3 <= erreurs <= 6:
        rapport.alerte("erreurs-frequentes", f"{erreurs} <Erreur> (3 à 6 attendues)", nom)
    m = re.search(r"<Resume>(.*?)</Resume>", corps, flags=re.S)
    if m:
        points = len(re.findall(r"^\s*[-*] ", m.group(1), flags=re.M))
        if not 5 <= points <= 10:
            rapport.alerte("resume", f"{points} points dans le résumé (5 à 10)", nom)
    m = re.search(r"<Pourquoi>(.*?)</Pourquoi>", corps, flags=re.S)
    if m and not 100 <= nb_mots(m.group(1)) <= 250:
        rapport.alerte("pourquoi", f"{nb_mots(m.group(1))} mots dans « Pourquoi » (100 à 250)", nom)
    trouvees = notions_du_texte(corps)
    for nid, bloc in trouvees:
        verifier_notion(bloc, nid, rapport, nom)
    ids_mini = re.findall(r"<MiniExercice\s+id=\"([^\"]+)\"", corps)
    for double in sorted({i for i in ids_mini if ids_mini.count(i) > 1}):
        rapport.bloquant("id-double", f"MiniExercice id « {double} » utilisé deux fois", nom)
    if fiche and meta.get("chapitre"):
        attendues = [n.id for n in fiche.notions if n.chapitre == meta["chapitre"]]
        obtenues = [t[0] for t in trouvees]
        for nid in attendues:
            if nid not in obtenues:
                rapport.bloquant("notion-manquante", f"la notion « {nid} » de la fiche n'est pas dans ce chapitre", nom)
        for nid in obtenues:
            if nid not in attendues:
                rapport.bloquant("notion-hors-fiche", f"la notion « {nid} » n'est pas prévue dans ce chapitre de la fiche", nom)
        if [n for n in obtenues if n in attendues] != [n for n in attendues if n in obtenues]:
            rapport.alerte("ordre-notions", "les notions ne suivent pas l'ordre de la fiche", nom)
    pieges_mdx(corps, rapport, nom)
    redaction(corps, rapport, nom, int(str(meta.get("parcours", "99"))[:2]) if str(meta.get("parcours", ""))[:2].isdigit() else 99)
    if executer:
        executer_code(corps, rapport, nom)
    return rapport


# --------------------------------------------------------------------------- fiche

def plage_exercices(texte: str) -> set[int]:
    nums: set[int] = set()
    for a, b in re.findall(r"ex(\d+)(?:\s*(?:à|-|–)\s*(?:[\d.]+-)?ex(\d+))?", texte):
        nums.update(range(int(a), int(b or a) + 1))
    return nums


def verifier_fiche(fiche: Fiche) -> Rapport:
    rapport = Rapport(f"Fiche {fiche.id} — {fiche.relatif}")
    t = fiche.texte
    etape = int(fiche.relatif[:2])
    if "CONSIGNE" in t:
        rapport.bloquant("consigne-restante", "des commentaires CONSIGNE du modèle restent dans la fiche")
    if not fiche.objectifs:
        rapport.bloquant("objectifs", "aucun objectif")
    par_chapitre: dict[int, int] = {}
    for n in fiche.notions:
        par_chapitre[n.chapitre] = par_chapitre.get(n.chapitre, 0) + 1
    numeros = [c.numero for c in fiche.chapitres]
    for c in fiche.chapitres:
        nb = par_chapitre.get(c.numero, 0)
        if not 5 <= nb <= 8:
            rapport.bloquant("notions-par-chapitre", f"chapitre {c.numero} : {nb} notions (5 à 8)")
    for num in par_chapitre:
        if num not in numeros:
            rapport.bloquant("chapitre-inconnu", f"des notions sont rangées dans le chapitre {num}, absent du tableau Chapitres")
    ids = [n.id for n in fiche.notions]
    for double in sorted({i for i in ids if ids.count(i) > 1}):
        rapport.bloquant("notion-double", f"l'identifiant de notion « {double} » est utilisé deux fois")
    for n in fiche.notions:
        if not re.fullmatch(r"[a-z0-9]+(-[a-z0-9]+)*", n.id):
            rapport.bloquant("notion-id", f"identifiant « {n.id} » : minuscules, chiffres et tirets seulement")
        if n.objectif not in fiche.objectifs:
            rapport.bloquant("notion-objectif", f"la notion « {n.id} » est reliée à {n.objectif}, qui n'existe pas")
    utilises = {n.objectif for n in fiche.notions}
    for o in fiche.objectifs:
        if o not in utilises:
            rapport.bloquant("objectif-sans-notion", f"{o} n'est enseigné par aucune notion")
        if fiche.meta.get("qcm") and "qcm" not in fiche.evaluations.get(o, "").lower():
            rapport.alerte("objectif-sans-qcm", f"{o} n'est pas évalué par le QCM")
    if not fiche.projets:
        total = sum(c.exercices for c in fiche.chapitres)
        exercices = section(t, "Exercices prévus") or ""
        prevus = set()
        for ligne in lignes_tableau(exercices):
            prevus |= plage_exercices(ligne[0])
        cites = set()
        for ev in fiche.evaluations.values():
            cites |= plage_exercices(ev)
        if prevus and total and len(prevus) not in (total, total + 1):
            rapport.bloquant("exercices-total", f"{total} exercices dans Chapitres, {len(prevus)} dans Exercices prévus")
        if cites - prevus:
            rapport.bloquant("exercices-non-prevus", f"exercices cités par les objectifs mais absents des exercices prévus : {sorted(cites - prevus)}")
        if not re.search(r"[Ee]xercice clé", exercices):
            rapport.bloquant("exercice-cle", "aucune ligne « Exercice clé » dans Exercices prévus")
        epreuve = section(t, "Épreuve de niveau expert")
        if 3 <= etape <= 6 and (epreuve is None or "**Épreuve** : …" in epreuve):
            rapport.bloquant("epreuve-expert", "épreuve de niveau expert attendue dès l'étape 3 (guide § 5.3)")
        elif etape >= 7 and epreuve is None:
            rapport.alerte("epreuve-expert", "pas d'épreuve de niveau expert")
        nb_ressources = len(lignes_tableau(section(t, "Ressources externes gratuites")))
        if not 4 <= nb_ressources <= 7:
            rapport.alerte("ressources", f"{nb_ressources} ressources externes (4 à 7)")
        for titre in ("Vocabulaire du module", "Fil rouge et ancrage local", "Ressources matérielles", "Point de contrôle sécurité et éthique"):
            sec = section(t, titre)
            if sec is None or not sec.strip() or sec.strip() == "…":
                rapport.bloquant("section-vide", f"section « {titre} » absente ou vide")
        glossaire = (RACINE / "docs" / "glossaire.md").read_text(encoding="utf-8").lower()
        absents = [ligne[0] for ligne in lignes_tableau(section(t, "Vocabulaire du module"))
                   if ligne and ligne[0].split("(")[0].split(",")[0].strip().lower() not in glossaire]
        if absents:
            rapport.alerte("glossaire", f"{len(absents)} terme(s) absents de docs/glossaire.md : {', '.join(absents[:8])}{'…' if len(absents) > 8 else ''}")
    else:
        for titre in ("Comparatif des projets", "Les projets", "Fil rouge et ancrage local"):
            if not (section(t, titre) or "").strip():
                rapport.bloquant("section-vide", f"section « {titre} » absente ou vide")
        projets = section(t, "Les projets") or ""
        for c in fiche.chapitres:
            m = re.search(rf"^### {c.numero}\. .*?(?=^### |\Z)", projets, flags=re.M | re.S)
            if not m:
                rapport.bloquant("projet-absent", f"le projet {c.numero} n'a pas de sous-section « ### {c.numero}. »")
                continue
            for libelle in ("Le client", "Le problème", "Pourquoi ce cas est différent", "L'approche de l'expert",
                            "Alternatives écartées", "Ce qui se vend", "Contraintes réelles", "L'imprévu",
                            "C'est réussi quand", "À revoir", "Pour ton portfolio"):
                if f"**{libelle}**" not in m.group(0):
                    rapport.bloquant("projet-libelle", f"projet {c.numero} : libellé « {libelle} » manquant")
    n_todo = t.count("TODO(vérifier)")
    if n_todo:
        gravite = "bloquant" if fiche.meta.get("statut") in ("relu", "publie") else "alerte"
        rapport.ajouter(gravite, "todo-verifier", f"{n_todo} TODO(vérifier) dans la fiche")
    cases = re.findall(r"- \[([ xX])\] (\d)\.", t)
    rapport.info("circuit", f"étapes cochées : {[n for c, n in cases if c.lower() == 'x'] or 'aucune'}")
    return rapport


# --------------------------------------------------------------------------- programme

def verifier_module(module: Path, executer: bool) -> list[Rapport]:
    fiche = lire_fiche(module / "fiche.md")
    rapports = [verifier_fiche(fiche)]
    fichiers = sorted((module / "cours").glob("*.mdx")) + ([module / "cours.mdx"] if (module / "cours.mdx").exists() else [])
    for f in fichiers:
        rapports.append(verifier_chapitre(f, fiche, executer))
    if fichiers:
        compilation = Rapport("Compilation MDX")
        compiler_mdx(fichiers, compilation)
        rapports.append(compilation)
        trouvees = {nid for f in fichiers for nid, _ in notions_du_texte(f.read_text(encoding="utf-8"))}
        manquantes = [n.id for n in fiche.notions if n.id not in trouvees]
        bilan = Rapport("Couverture de la fiche")
        if manquantes:
            bilan.alerte("notions-a-ecrire", f"{len(manquantes)}/{len(fiche.notions)} notions pas encore écrites")
        rapports.append(bilan)
    return rapports


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    parser.add_argument("chemin")
    parser.add_argument("--lecon", nargs=2, metavar=("MODULE", "NOTION"))
    parser.add_argument("--executer", action="store_true")
    parser.add_argument("--details", action="store_true")
    parser.add_argument("--json", action="store_true", help="écrit les rapports en JSON")
    args = parser.parse_args()
    chemin = Path(args.chemin).resolve()
    if args.lecon:
        fiche = lire_fiche(trouver_module(args.lecon[0]) / "fiche.md")
        rapports = [verifier_lecon(chemin, fiche, args.lecon[1], args.executer)]
    elif chemin.suffix == ".mdx":
        module = next((p for p in chemin.parents if (p / "fiche.md").exists()), None)
        fiche = lire_fiche(module / "fiche.md") if module else None
        rapports = [verifier_chapitre(chemin, fiche, args.executer)]
        compiler_mdx([chemin], rapports[0])
    else:
        rapports = verifier_module(trouver_module(args.chemin), args.executer)
    if args.json:
        print(json.dumps([r.en_dict() for r in rapports], ensure_ascii=False, indent=1))
    else:
        for r in rapports:
            r.afficher(args.details)
    return 0 if all(r.ok for r in rapports) else 1


if __name__ == "__main__":
    sys.exit(main())
