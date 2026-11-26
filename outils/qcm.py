"""QCM d'un module : validation (pour les auteurs et la CI).

Usage :
    python outils/qcm.py <module> --valider
    python outils/qcm.py <fichier qcm.yaml> --valider

Le passage du QCM dans le terminal (pour l'apprenant) n'est pas encore codé.

Vérifie le schéma templates/qcm.schema.json, puis les règles hors schéma :
banque d'au moins 2 fois le tirage, au moins 2 questions par objectif, objectifs et
notions qui existent dans la fiche, identifiants uniques, clé cohérente avec les
explications, et les biais fréquents (bonne réponse toujours à la même place ou
toujours la plus longue).
"""

from __future__ import annotations

import argparse
import json
import sys
from collections import Counter
from pathlib import Path

import yaml

sys.path.insert(0, str(Path(__file__).resolve().parent))
from _commun import RACINE, Rapport, lire_fiche, trouver_module  # noqa: E402

try:
    import jsonschema
except ImportError:  # pragma: no cover
    jsonschema = None


def fichiers_qcm(chemin: Path) -> list[Path]:
    if chemin.is_file():
        return [chemin]
    return ([chemin / "qcm.yaml"] if (chemin / "qcm.yaml").exists() else []) + sorted((chemin / "qcm").glob("*.yaml"))


def valider_fichier(f: Path, fiche, rapport: Rapport, ids_vus: dict[str, str]) -> list[dict]:
    nom = f.relative_to(RACINE).as_posix() if f.is_relative_to(RACINE) else f.name
    try:
        donnees = yaml.safe_load(f.read_text(encoding="utf-8"))
    except yaml.YAMLError as err:
        rapport.bloquant("yaml", f"YAML illisible : {err}", nom)
        return []
    if not isinstance(donnees, dict):
        rapport.bloquant("yaml", "le fichier ne contient pas un QCM", nom)
        return []
    schema = json.loads((RACINE / "templates" / "qcm.schema.json").read_text(encoding="utf-8"))
    if jsonschema is None:
        rapport.alerte("schema", "jsonschema n'est pas installé (pip install jsonschema) : schéma non vérifié", nom)
    else:
        validateur = jsonschema.Draft202012Validator(schema, format_checker=jsonschema.FormatChecker())
        for err in sorted(validateur.iter_errors(donnees), key=lambda e: list(e.path)):
            chemin = "/".join(str(p) for p in err.path) or "racine"
            message = err.message if len(err.message) < 200 else f"règle « {err.validator} » non respectée ({err.validator_value})"
            rapport.bloquant("schema", f"{chemin} : {message}", nom)
    questions = [q for q in donnees.get("questions") or [] if isinstance(q, dict)]
    tirage = donnees.get("tirage") or 0
    if tirage and len(questions) < 2 * tirage:
        rapport.bloquant("banque", f"{len(questions)} questions pour un tirage de {tirage} : il en faut {2 * tirage} au moins", nom)
    module = str(donnees.get("module", ""))
    if fiche and module != fiche.id:
        rapport.bloquant("module", f"module « {module} » différent de la fiche « {fiche.id} »", nom)
    chapitre = donnees.get("chapitre")
    for q in questions:
        qid = str(q.get("id", "?"))
        if qid in ids_vus:
            rapport.bloquant("id-double", f"{qid} existe déjà dans {ids_vus[qid]}", nom)
        ids_vus[qid] = nom
        if not qid.startswith(f"{module}-q"):
            rapport.bloquant("id-prefixe", f"{qid} doit commencer par « {module}-q »", nom)
        if fiche:
            if q.get("objectif") not in fiche.objectifs:
                rapport.bloquant("objectif-inconnu", f"{qid} : {q.get('objectif')} n'existe pas dans la fiche", nom)
            notions = {n.id: n for n in fiche.notions}
            notion = notions.get(q.get("notion"))
            if notion is None:
                rapport.bloquant("notion-inconnue", f"{qid} : la notion « {q.get('notion')} » n'existe pas dans la fiche", nom)
            elif chapitre and notion.chapitre != chapitre:
                rapport.alerte("notion-hors-chapitre", f"{qid} : la notion « {notion.id} » est du chapitre {notion.chapitre}", nom)
        choix = [c for c in q.get("choix") or [] if isinstance(c, dict)]
        ids_choix = [c.get("id") for c in choix]
        if len(set(ids_choix)) != len(ids_choix):
            rapport.bloquant("choix-double", f"{qid} : deux choix ont la même lettre", nom)
        bonnes = q.get("bonnes_reponses") or []
        for b in bonnes:
            if b not in ids_choix:
                rapport.bloquant("cle-inconnue", f"{qid} : la bonne réponse « {b} » n'est pas un choix", nom)
        for c in choix:
            explication = str(c.get("explication", "")).strip().lower()
            juste = c.get("id") in bonnes
            if juste and explication.startswith("faux"):
                rapport.bloquant("cle-contradictoire", f"{qid} : le choix {c.get('id')} est marqué juste mais son explication dit « Faux »", nom)
            if not juste and explication.startswith("juste"):
                rapport.bloquant("cle-contradictoire", f"{qid} : le choix {c.get('id')} est marqué faux mais son explication dit « Juste »", nom)
            if not explication.startswith(("juste", "faux")):
                rapport.alerte("explication", f"{qid} : l'explication du choix {c.get('id')} devrait commencer par « Juste » ou « Faux »", nom)
        textes = [str(c.get("texte", "")).strip().lower() for c in choix]
        if len(set(textes)) != len(textes):
            rapport.bloquant("choix-identiques", f"{qid} : deux choix ont le même texte", nom)
        if q.get("type") == "multiple" and "toutes" not in str(q.get("question", "")).lower():
            rapport.alerte("multiple", f"{qid} : une question à plusieurs réponses doit le dire (« Coche toutes les bonnes réponses »)", nom)
    return questions


def biais(questions: list[dict], rapport: Rapport) -> None:
    uniques = [q for q in questions if q.get("type") == "unique" and q.get("bonnes_reponses")]
    if len(uniques) >= 8:
        positions = Counter(q["bonnes_reponses"][0] for q in uniques)
        lettre, nb = positions.most_common(1)[0]
        if nb / len(uniques) > 0.5:
            rapport.alerte("biais-position", f"la bonne réponse est « {lettre} » dans {nb}/{len(uniques)} questions (l'outil mélange, mais la banque trahit l'auteur)")
        plus_longue = 0
        for q in uniques:
            choix = [c for c in q.get("choix") or [] if isinstance(c, dict)]
            if choix:
                longue = max(choix, key=lambda c: len(str(c.get("texte", ""))))
                plus_longue += longue.get("id") == q["bonnes_reponses"][0]
        if plus_longue / len(uniques) > 0.6:
            rapport.alerte("biais-longueur", f"la bonne réponse est le choix le plus long dans {plus_longue}/{len(uniques)} questions : allonge les distracteurs")
    textes = Counter(" ".join(str(q.get("question", "")).lower().split()) for q in questions)
    for texte, nb in textes.items():
        if nb > 1:
            rapport.alerte("question-double", f"question posée {nb} fois : « {texte[:80]} »")


def valider(chemin: Path) -> Rapport:
    module = chemin if chemin.is_dir() else next((p for p in chemin.parents if (p / "fiche.md").exists()), None)
    fiche = lire_fiche(module / "fiche.md") if module and (module / "fiche.md").exists() else None
    rapport = Rapport(f"QCM {fiche.id if fiche else chemin.name}")
    fichiers = fichiers_qcm(chemin)
    if not fichiers:
        rapport.bloquant("qcm-absent", "aucun qcm.yaml ni dossier qcm/ dans ce module")
        return rapport
    ids_vus: dict[str, str] = {}
    toutes: list[dict] = []
    for f in fichiers:
        toutes += valider_fichier(f, fiche, rapport, ids_vus)
    biais(toutes, rapport)
    if fiche and chemin.is_dir():
        par_objectif = Counter(q.get("objectif") for q in toutes)
        for o in fiche.objectifs:
            if par_objectif.get(o, 0) < 2:
                rapport.bloquant("objectif-peu-evalue", f"{o} : {par_objectif.get(o, 0)} question(s), 2 au moins")
        evaluees = {q.get("notion") for q in toutes}
        absentes = [n.id for n in fiche.notions if n.id not in evaluees]
        if absentes:
            rapport.info("notions-sans-question", f"{len(absentes)} notion(s) sans question : {', '.join(absentes[:10])}")
    rapport.info("bilan", f"{len(toutes)} question(s) dans {len(fichiers)} fichier(s)")
    return rapport


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    parser.add_argument("chemin")
    parser.add_argument("--valider", action="store_true", help="valide le QCM au lieu de le faire passer")
    parser.add_argument("--details", action="store_true")
    args = parser.parse_args()
    if not args.valider:
        print("Le passage du QCM dans le terminal n'est pas encore disponible. Utilise --valider pour contrôler un QCM.")
        return 2
    chemin = Path(args.chemin)
    if not chemin.suffix:
        chemin = trouver_module(args.chemin)
    rapport = valider(chemin.resolve())
    rapport.afficher(args.details)
    return 0 if rapport.ok else 1


if __name__ == "__main__":
    sys.exit(main())
