"""Pilote la production du contenu par Gemini (via Antigravity), une étape à la fois, et la contrôle.

Chaque appel à Gemini part d'une session neuve et reçoit seulement ce qu'il lui faut. Tout
est gardé dans le dépôt de fabrication : consigne, flux et session brute de Gemini (avec ses
réflexions), fichiers produits, versions successives, rapports de contrôle.

Usage :
    python outils/production/produire.py <module> lecon <id-notion>     recherche, extraction, plan, rédaction
    python outils/production/produire.py <module> suivante              la prochaine leçon dans l'ordre
    python outils/production/produire.py <module> corriger <id-notion> --rapport f.md   corrections des relecteurs
    python outils/production/produire.py <module> relue <id-notion>     après relecture (Claude)
    python outils/production/produire.py <module> chapitre <N>          cadre + assemblage + contrôles + visuel
    python outils/production/produire.py <module> exercice <numéro>     solution, tests, starter, énoncé, indices
    python outils/production/produire.py <module> qcm <N>               QCM du chapitre N
    python outils/production/produire.py <module> etat                  où en est le module
Options :
    --essais N     tentatives avant d'escalader (3 par défaut : 1 production + 2 corrections)
    --moteur M     agy (Antigravity, par défaut) ou gemini-cli
    --modele M     modèle (liste : agy models) ; --effort low|medium|high|xhigh|max
    --simuler      écrit la consigne sans appeler Gemini
"""

from __future__ import annotations

import argparse
import datetime as dt
import json
import re
import shutil
import subprocess
import sys
import time
from pathlib import Path

ICI = Path(__file__).resolve().parent
sys.path.insert(0, str(ICI.parent))
sys.path.insert(0, str(ICI))
from _commun import (  # noqa: E402
    RACINE, Fiche, Rapport, dossier_fabrication, ecrire_yaml, lignes_tableau, lire_fiche, lire_yaml,
    section, trouver_module,
)
import check  # noqa: E402
import contenu  # noqa: E402
import qcm  # noqa: E402
import sources  # noqa: E402
import traces  # noqa: E402

CONSIGNES = ICI / "consignes"
POLITIQUE = ICI / "politique-gemini.toml"
MOIS = ["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre",
        "novembre", "décembre"]



# --------------------------------------------------------------------------- chemins et état

def date_iso() -> str:
    return dt.date.today().isoformat()


def date_longue() -> str:
    d = dt.date.today()
    return f"{d.day} {MOIS[d.month - 1]} {d.year}"


def dossier_module(fiche: Fiche) -> Path:
    return dossier_fabrication() / fiche.relatif


def dossier_chapitre(fiche: Fiche, numero: int) -> Path:
    return dossier_module(fiche) / fiche.chapitre(numero).slug


def dossier_lecon(fiche: Fiche, notion_id: str) -> Path:
    return dossier_chapitre(fiche, fiche.notion(notion_id).chapitre) / notion_id


def lire_etat(fiche: Fiche) -> dict:
    f = dossier_module(fiche) / "etat.yaml"
    etat = lire_yaml(f) if f.exists() else None
    etat = etat or {}
    etat.setdefault("module", fiche.id)
    etat.setdefault("lecons", {})
    etat.setdefault("chapitres", {})
    etat.setdefault("exercices", {})
    etat.setdefault("qcm", {})
    return etat


def ecrire_etat(fiche: Fiche, etat: dict) -> None:
    etat["mise_a_jour"] = dt.datetime.now().isoformat(timespec="seconds")
    ecrire_yaml(dossier_module(fiche) / "etat.yaml", etat)


def enregistrer_fabrication(message: str) -> None:
    """Commit dans le dépôt de fabrication : chaque étape laisse une trace datée."""
    depot = dossier_fabrication()
    if not (depot / ".git").exists():
        return
    subprocess.run(["git", "add", "-A"], cwd=depot, capture_output=True)
    subprocess.run(["git", "commit", "-q", "-m", message], cwd=depot, capture_output=True)


# --------------------------------------------------------------------------- contexte

def contexte(fiche: Fiche, notion_id: str | None = None, chapitre: int | None = None) -> str:
    etape = int(fiche.relatif[:2])
    m = fiche.meta
    lignes = [
        "## Le module",
        f"- Module {fiche.id} — {m.get('titre')} (dossier `{fiche.relatif}`, étape {etape})",
        f"- Promesse : {m.get('promesse', '')}",
        "- Objectifs du module :",
        *[f"  - **{o}** — {t}" for o, t in fiche.objectifs.items()],
        "",
        "### Fil rouge et ancrage local",
        (section(fiche.texte, "Fil rouge et ancrage local") or "").strip(),
        "",
        "### Ressources matérielles du module (fiche)",
        (section(fiche.texte, "Ressources matérielles") or "non précisées").strip(),
        "",
        "### Point de contrôle sécurité et éthique (fiche)",
        (section(fiche.texte, "Point de contrôle sécurité et éthique") or "non précisé").strip(),
        "",
        "### La machine de l'apprenant (AGENTS.md § 4, fait foi pour toute la formation)",
        "Processeur 64 bits, 4 cœurs conseillés (2 cœurs acceptés : étapes 0 et 1 sans problème, entraînements "
        "plus lents ensuite, Colab ou Kaggle en option). 8 Go de RAM pour la formation (4 Go suffisent pour les "
        "étapes 0 et 1). Aucune carte graphique nécessaire. 40 Go de disque libre. Systèmes acceptés : Windows 10 "
        "64 bits (build 19041 ou plus), Windows 11, macOS, Linux ; pour la sécurité, Windows 10 22H2 (build 19045) à jour "
        "est conseillé ; avec 4 Go de RAM, les étapes 0 et 1 se suivent sur tout système, Windows compris ; "
        "ensuite, avec 4 Go : Colab ou Kaggle (gratuits, en ligne, compte requis) ou ajout de RAM si possible, aucune voie "
        "imposée ; Mac trop ancien : essayer les étapes 0 et 1, sinon un autre ordinateur (proche, école) ou un Linux ; "
        "passer à Windows 11 est conseillé, jamais exigé, "
        "et une option payante n'est jamais présentée comme nécessaire. Ce sont les exigences **de la formation** : "
        "quand une leçon parle de ce qu'il faut à l'apprenant, ce sont ces règles qui comptent, pas celles d'un outil isolé.",
        "",
    ]
    notion = fiche.notion(notion_id) if notion_id else None
    numero = notion.chapitre if notion else chapitre
    if numero:
        chap = fiche.chapitre(numero)
        lignes += [f"## Le chapitre {numero} — {chap.titre}", "Notions du chapitre, dans l'ordre :"]
        for n in fiche.notions:
            if n.chapitre == numero:
                repere = "   ← **cette leçon**" if notion and n.id == notion.id else ""
                lignes.append(f"- `{n.id}` — {n.titre} ({n.objectif}){repere}")
        lignes.append("")
    if notion:
        vocabulaire = [ligne for ligne in lignes_tableau(section(fiche.texte, "Vocabulaire du module"))
                       if len(ligne) >= 3 and ligne[2].strip("`") == notion.id]
        lignes += [
            "## La leçon",
            f"- Identifiant : `{notion.id}`",
            f"- Titre : {notion.titre}",
            f"- Objectif : **{notion.objectif}** — {fiche.objectifs.get(notion.objectif, '')}",
            "- Termes prévus par la fiche : " + (", ".join(f"{v[0]} ({v[1]})" for v in vocabulaire) or "aucun"),
            "",
        ]
    lignes += ["## Déjà enseigné : la seule base sur laquelle tu peux t'appuyer",
               f"- Modules prérequis : {', '.join(map(str, m.get('prerequis') or [])) or 'aucun'}"]
    precedentes = []
    for n in fiche.notions:
        if notion and n.id == notion.id:
            break
        if not notion and numero and n.chapitre > numero:
            break
        plan = dossier_lecon(fiche, n.id) / "plan.yaml"
        resume = ""
        if plan.exists():
            try:
                resume = (lire_yaml(plan) or {}).get("resume", "")
            except Exception:  # noqa: BLE001
                resume = ""
        precedentes.append(f"- `{n.id}` — {n.titre}" + (f" : {resume}" if resume else " (pas encore écrite)"))
    lignes += ["- Leçons précédentes de ce module :", *(precedentes or ["  - aucune : c'est la première"]), ""]
    return "\n".join(lignes)


def remplir(modele: str, valeurs: dict) -> str:
    texte = (CONSIGNES / modele).read_text(encoding="utf-8")
    for cle, valeur in valeurs.items():
        texte = texte.replace(f"<<{cle}>>", str(valeur))
    reste = re.findall(r"<<\w+>>", texte)
    if reste:
        raise RuntimeError(f"consigne {modele} : valeurs manquantes {sorted(set(reste))}")
    return texte


def valeurs_communes(fiche: Fiche) -> dict:
    etape = int(fiche.relatif[:2])
    return {
        "module_id": fiche.id,
        "parcours": str(fiche.meta.get("parcours", fiche.relatif.split("/")[0])),
        "date": date_iso(),
        "date_longue": date_longue(),
        "regle_commentaires": ", commentaires en français" if etape == 0 else ", commentaires en anglais",
    }


# --------------------------------------------------------------------------- Gemini

def trouver_session(session_id: str, depuis: float) -> Path | None:
    racine = Path.home() / ".gemini" / "tmp"
    for f in sorted(racine.glob("*/chats/session-*.jsonl"), key=lambda p: p.stat().st_mtime, reverse=True):
        if f.stat().st_mtime < depuis - 5:
            break
        try:
            premiere = f.open(encoding="utf-8").readline()
        except OSError:
            continue
        if session_id and session_id in premiere:
            return f
    return None


def lancer(consigne: str, dossier: Path, prefixe: str, args) -> None:
    traces_dir = dossier / "traces"
    traces_dir.mkdir(parents=True, exist_ok=True)
    if args.simuler:  # ne jamais écraser une vraie trace
        fichier = traces_dir / f"simulation-{prefixe}.consigne.md"
        fichier.write_text(consigne, encoding="utf-8")
        print(f"[simulation] consigne écrite : {fichier}")
        return
    fichier = traces_dir / f"{prefixe}.consigne.md"
    fichier.write_text(consigne, encoding="utf-8")
    if args.moteur == "agy":
        lancer_agy(fichier, traces_dir, prefixe, args)
    else:
        lancer_gemini_cli(consigne, traces_dir, prefixe, args.modele)


def agy_executable() -> str:
    for candidat in (shutil.which("agy"), str(Path.home() / ".gemini" / "bin" / "agy.exe"), str(Path.home() / ".gemini" / "bin" / "agy")):
        if candidat and Path(candidat).exists():
            return candidat
    raise SystemExit("agy (Antigravity) introuvable : installe Antigravity ou ajoute agy au PATH.")


def copier_conversation(conversation_id: str, traces_dir: Path, prefixe: str) -> None:
    """Copie la conversation complète d'Antigravity (base SQLite) et ses artefacts dans la trace."""
    racine = Path.home() / ".gemini" / "antigravity-cli"
    base = racine / "conversations" / f"{conversation_id}.db"
    if base.exists():
        import sqlite3
        source = sqlite3.connect(f"file:{base.as_posix()}?mode=ro", uri=True)
        copie = sqlite3.connect(traces_dir / f"{prefixe}.conversation.db")
        source.backup(copie)  # copie cohérente, journal WAL compris
        copie.close()
        source.close()
    cerveau = racine / "brain" / conversation_id
    if cerveau.is_dir() and any(cerveau.rglob("*")):
        shutil.copytree(cerveau, traces_dir / f"{prefixe}.artefacts", dirs_exist_ok=True)


def lancer_agy(fichier: Path, traces_dir: Path, prefixe: str, args) -> None:
    """Antigravity en mode non interactif : lecture et écriture de fichiers, recherche web, aucune commande."""
    consigne_chemin = fichier.as_posix()
    invite = (f"Lis en entier la consigne du fichier {consigne_chemin} avec ton outil de lecture de fichier, "
              "puis exécute-la du début à la fin. Tu ne lances aucune commande de terminal : le pilote s'en charge.")
    cmd = [agy_executable(), "-p", invite, "--mode", "accept-edits", "--add-dir", str(dossier_fabrication()),
           "--disable-slash-commands", "--output-format", "stream-json", "--print-timeout", "0"]
    if args.modele:
        cmd += ["--model", args.modele]
    if args.effort:
        cmd += ["--effort", args.effort]
    flux = traces_dir / f"{prefixe}.stream.jsonl"
    attentes_quota = 0
    tentative = lancements = 0
    while tentative < 3:
        tentative += 1
        lancements += 1
        if lancements > 1:  # ne jamais écraser la trace d'un essai raté : on la met de côté
            for ancien in traces_dir.glob(f"{prefixe}.*"):
                if ancien.name.endswith(".consigne.md") or ".echec" in ancien.name:
                    continue
                suite = ancien.name[len(prefixe) + 1:]
                ancien.rename(traces_dir / f"{prefixe}.echec{lancements - 1}.{suite}")
        debut = time.time()
        print(f"  → Antigravity : {prefixe} …", flush=True)
        with flux.open("wb") as sortie:
            proc = subprocess.run(cmd, cwd=RACINE, stdout=sortie, stderr=subprocess.PIPE, timeout=3600)
        brut = flux.read_bytes()
        try:
            texte = brut.decode("utf-8")
        except UnicodeDecodeError:
            texte = brut.decode("cp1252", errors="replace")
            flux.write_text(texte, encoding="utf-8")
        resultat = {}
        for ligne in texte.splitlines()[::-1]:
            try:
                evenement = json.loads(ligne)
            except json.JSONDecodeError:
                continue
            if evenement.get("event") == "result":
                resultat = evenement.get("result") or {}
                break
        m = re.search(r'"conversation_id"\s*:\s*"([0-9a-f-]{36})"', texte)
        if m:
            copier_conversation(m.group(1), traces_dir, prefixe)
        erreur = proc.stderr.decode("utf-8", errors="replace")
        print(f"    fini en {time.time() - debut:.0f} s ({resultat.get('status', proc.returncode)})", flush=True)
        if resultat.get("status") == "SUCCESS":
            return
        (traces_dir / f"{prefixe}.erreur.txt").write_text(erreur + "\n" + json.dumps(resultat, ensure_ascii=False), encoding="utf-8")
        # Quota épuisé : attendre la remise à zéro annoncée, puis relancer (sans compter un essai).
        quota = re.search(r"quota reached.*?Resets in (?:(\d+)h)?(?:(\d+)m)?(?:(\d+)s)?",
                          f"{resultat.get('error', '')} {erreur}", re.I | re.S)
        if quota and attentes_quota < 6:
            h, mi, s = (int(x or 0) for x in quota.groups())
            attente = h * 3600 + mi * 60 + s + 180
            attentes_quota += 1
            tentative -= 1
            reprise = dt.datetime.now() + dt.timedelta(seconds=attente)
            print(f"    quota Antigravity épuisé : reprise automatique vers {reprise:%H:%M}", flush=True)
            time.sleep(attente)
            continue
        if '"retryable":true' in erreur.replace(" ", "") and tentative < 3:
            print("    erreur réseau passagère : nouvel essai dans 30 s", flush=True)
            time.sleep(30)
            continue
        message = resultat.get("error") or (erreur.strip().splitlines() or ["?"])[-1]
        raise SystemExit(f"Antigravity s'est arrêté avec une erreur (quota, connexion ?) : {message}\n"
                         f"Détail : {traces_dir / f'{prefixe}.erreur.txt'}")


def lancer_gemini_cli(consigne: str, traces_dir: Path, prefixe: str, modele: str | None) -> None:
    gemini = shutil.which("gemini")
    if not gemini:
        raise SystemExit("Gemini CLI introuvable (npm install -g @google/gemini-cli).")
    cmd = [gemini, "-p", "Exécute la consigne reçue ci-dessus, du début à la fin.", "-o", "stream-json",
           "--approval-mode", "auto_edit", "--policy", str(POLITIQUE), "--skip-trust",
           "--include-directories", str(dossier_fabrication())]
    if modele:
        cmd += ["-m", modele]
    flux = traces_dir / f"{prefixe}.stream.jsonl"
    debut = time.time()
    print(f"  → Gemini : {prefixe} …", flush=True)
    with flux.open("w", encoding="utf-8") as sortie:
        proc = subprocess.run(cmd, input=consigne, cwd=RACINE, stdout=sortie, stderr=subprocess.PIPE,
                              text=True, encoding="utf-8", errors="replace", timeout=3600)
    texte = flux.read_text(encoding="utf-8", errors="replace")
    m = re.search(r'"session_?[iI]d"\s*:\s*"([^"]+)"', texte)
    session = trouver_session(m.group(1) if m else "", debut)
    if session:
        shutil.copy(session, traces_dir / f"{prefixe}.session.jsonl")
    else:
        (traces_dir / f"{prefixe}.session-introuvable.txt").write_text(
            "La session brute de Gemini CLI n'a pas été retrouvée dans ~/.gemini/tmp.", encoding="utf-8")
    print(f"    fini en {time.time() - debut:.0f} s (code {proc.returncode})", flush=True)
    if proc.returncode not in (0, 53):
        (traces_dir / f"{prefixe}.erreur.txt").write_text(proc.stderr, encoding="utf-8")
        derniere = (proc.stderr.strip().splitlines() or ["?"])[-1]
        raise SystemExit(f"Gemini s'est arrêté avec une erreur (quota, connexion ?) : {derniere}\n"
                         f"Détail : {traces_dir / f'{prefixe}.erreur.txt'}")


def boucle(nom: str, dossier: Path, consigne: str, controler, args, apres=None) -> tuple[bool, Rapport]:
    """Production, contrôle, puis corrections jusqu'à réussir ou escalader."""
    commun = (CONSIGNES / "commun.md").read_text(encoding="utf-8")
    rapport = Rapport(nom)
    # Les essais d'une version précédente sont gardés : la numérotation continue à leur suite.
    deja = [int(m.group(1)) for f in (dossier / "traces").glob(f"{nom}-*.consigne.md")
            if (m := re.fullmatch(rf"{re.escape(nom)}-(\d+)\.consigne\.md", f.name))]
    depart = max(deja, default=0)
    for essai in range(1, args.essais + 1):
        texte = commun + "\n\n" + consigne
        if essai > 1:
            correction = (CONSIGNES / "correction.md").read_text(encoding="utf-8")
            texte = commun + "\n\n" + correction.replace("<<essai>>", str(essai - 1)).replace(
                "<<rapport>>", json.dumps(rapport.en_dict(), ensure_ascii=False, indent=1)) + "\n\n" + consigne
        prefixe = f"{nom}-{depart + essai}"
        lancer(texte, dossier, prefixe, args)
        if args.simuler:
            return False, rapport
        if apres:
            apres(essai)
        rapport = controler()
        ecrire_yaml(dossier / "audits" / f"{prefixe}.yaml", rapport.en_dict())
        rapport.afficher()
        enregistrer_fabrication(f"{dossier.relative_to(dossier_fabrication()).as_posix()} : {prefixe} "
                                f"({'réussi' if rapport.ok else 'échec'})")
        if rapport.ok:
            return True, rapport
    return False, rapport


# --------------------------------------------------------------------------- leçon

def controler_plan(dossier: Path, fiche: Fiche, notion_id: str) -> Rapport:
    rapport = Rapport(f"Plan — {notion_id}")
    f = dossier / "plan.yaml"
    if not f.exists():
        rapport.bloquant("plan-absent", "plan.yaml n'existe pas")
        return rapport
    try:
        plan = lire_yaml(f) or {}
    except Exception as err:  # noqa: BLE001
        rapport.bloquant("plan-illisible", str(err))
        return rapport
    for champ in ("objectif", "probleme_de_depart", "idee_cle", "explication", "exemple", "mini_exercice",
                  "notions_prealables", "faits_utilises", "resume"):
        if not plan.get(champ) and plan.get(champ) != []:
            rapport.bloquant("plan-incomplet", f"champ « {champ} » manquant ou vide")
    verbe = str(plan.get("objectif", "")).split()[:1]
    if verbe and verbe[0].lower() in ("comprendre", "connaître", "savoir", "découvrir", "appréhender"):
        rapport.bloquant("objectif-invérifiable", f"verbe « {verbe[0]} » interdit (guide § 1.1)")
    deja = []
    for n in fiche.notions:
        if n.id == notion_id:
            break
        deja.append(n.id)
    for p in plan.get("notions_prealables") or []:
        if p not in deja:
            rapport.bloquant("prealable-non-enseigne", f"« {p} » n'est pas une notion déjà enseignée")
    faits = {str(x.get("id")) for x in (lire_yaml(dossier / "sources.yaml") or {}).get("faits") or []} \
        if (dossier / "sources.yaml").exists() else set()
    for fid in plan.get("faits_utilises") or []:
        if str(fid) not in faits:
            rapport.bloquant("fait-inconnu", f"le fait « {fid} » n'existe pas dans sources.yaml")
    if len(plan.get("termes_nouveaux") or []) > 3:
        rapport.alerte("trop-de-termes", "plus de 3 termes nouveaux (guide § 3.1)")
    return rapport


def recuperer_pages(dossier: Path) -> Rapport:
    """Le pilote lit chaque page candidate et en donne le texte exact à Gemini, dans pages/."""
    from lire_page import cle, lire

    rapport = Rapport("Recherche — pages candidates")
    fichier = dossier / "candidats.yaml"
    if not fichier.exists():
        rapport.bloquant("candidats-absents", "candidats.yaml n'a pas été écrit")
        return rapport
    try:
        candidats = (lire_yaml(fichier) or {}).get("candidats") or []
    except Exception as err:  # noqa: BLE001
        rapport.bloquant("candidats-illisibles", f"candidats.yaml n'est pas un YAML valide : {err}")
        return rapport
    if not 2 <= len(candidats) <= 24:
        rapport.bloquant("nombre-candidats", f"{len(candidats)} page(s) candidate(s) : il en faut 2 à 24. "
                         "Retire une page redondante, jamais la seule source d'un point demandé.")
    (dossier / "pages").mkdir(exist_ok=True)
    pages, lues, primaires = [], 0, 0
    for c in candidats:
        url = str(c.get("url", "")).strip()
        hote = url.split("/")[2].lower() if url.count("/") >= 2 else ""
        if not re.match(r"^https?://", url):
            rapport.bloquant("url-invalide", f"« {url} » n'est pas une URL http(s)")
            continue
        if any(d in hote for d in sources.DOMAINES_INTERDITS):
            rapport.bloquant("source-interdite", f"{hote} n'est pas une source acceptable", url)
            continue
        if c.get("type") not in sources.TYPES:
            rapport.bloquant("type-inconnu", f"type « {c.get('type')} » inconnu ; types : {', '.join(sources.TYPES)}", url)
        try:
            texte, meta = lire(url)
        except SystemExit as err:  # PDF sans pypdf
            pages.append({"url": url, "erreur": str(err)})
            rapport.alerte("page-illisible", str(err)[:160], url)
            continue
        except Exception as err:  # noqa: BLE001
            pages.append({"url": url, "erreur": f"{type(err).__name__} : {err}"[:200]})
            rapport.alerte("page-illisible", f"le pilote n'a pas pu lire cette page ({type(err).__name__}) : propose une autre source", url)
            continue
        if len(texte) < 500:
            rapport.alerte("page-vide", f"seulement {len(texte)} caractères lus (page dynamique ou bloquée ?) : propose une autre source", url)
        nom = f"{cle(url)}.txt"
        (dossier / "pages" / nom).write_text(texte, encoding="utf-8")
        pages.append({"url": url, "fichier": nom, "titre": meta.get("titre", ""), "caracteres": len(texte),
                      "lignes": texte.count("\n") + 1, "lue_le": meta.get("lue_le")})
        lues += 1
        primaires += sources.TYPES.get(c.get("type"), 9) == 1
    ecrire_yaml(dossier / "pages.yaml", {"pages": pages})
    questions = (lire_yaml(fichier) or {}).get("questions") or []
    couvertes = set()
    lues_ok = {p["url"] for p in pages if p.get("fichier")}
    for c in candidats:
        if str(c.get("url", "")).strip() in lues_ok:
            couvertes |= {int(x) for x in (c.get("repond_a") or []) if str(x).isdigit()}
    for i, q in enumerate(questions, start=1):
        if i not in couvertes:
            rapport.bloquant("question-sans-page", f"question {i} sans aucune page lue : « {str(q)[:100]} ». "
                             "Propose d'autres pages candidates qui y répondent.")
    for p in pages:
        if p.get("fichier"):
            rapport.info("page-lue", f"{(dossier / 'pages' / p['fichier']).as_posix()} ← {p['url']}")
    if lues < 2:
        rapport.bloquant("pages-insuffisantes", f"{lues} page(s) lue(s) : il en faut 2 au moins. Propose d'autres URL.")
    if primaires == 0:
        rapport.bloquant("sans-source-primaire", "aucune source primaire lue (documentation officielle, norme, loi, article, données)")
    rapport.info("pages", f"{lues}/{len(candidats)} page(s) lue(s) par le pilote")
    return rapport


def controler_couverture(dossier: Path) -> Rapport:
    """Chaque question de la recherche a au moins un fait sourcé."""
    rapport = Rapport("Couverture des questions")
    f = dossier / "sources.yaml"
    if not f.exists():
        return rapport
    try:
        donnees = lire_yaml(f) or {}
    except Exception:  # noqa: BLE001
        return rapport  # sources.py signale déjà un YAML illisible
    questions = donnees.get("questions") or []
    couvertes = set()
    for fait in donnees.get("faits") or []:
        couvertes |= {int(x) for x in (fait.get("repond_a") or []) if str(x).isdigit()}
    sans = sorted(set(range(1, len(questions) + 1)) - couvertes) or donnees.get("questions_sans_source") or []
    for i in sans:
        texte = questions[i - 1] if isinstance(i, int) and 0 < i <= len(questions) else i
        rapport.bloquant("question-sans-fait", f"question {i} sans fait sourcé : « {str(texte)[:100]} ». Ajoute des "
                         "candidats dans candidats.yaml (le pilote les lira) puis extrais le fait au tour suivant.")
    return rapport


def liste_pages(dossier: Path) -> str:
    f = dossier / "pages.yaml"
    if not f.exists():
        return "(aucune page lue pour l'instant)"
    lignes = []
    for p in (lire_yaml(f) or {}).get("pages") or []:
        if p.get("fichier"):
            lignes.append(f"  - `{(dossier / 'pages' / p['fichier']).as_posix()}` ← {p['url']} "
                          f"({p.get('lignes', '?')} lignes) — {p.get('titre', '')}")
        else:
            lignes.append(f"  - {p['url']} : non lue ({p.get('erreur', '')[:80]})")
    return "\n".join(lignes) or "(aucune page)"


FICHIERS_VERSION = ("candidats.yaml", "pages.yaml", "sources.yaml", "plan.yaml", "lecon.mdx", "journal.md")


def archiver_version(dossier: Path, suivi: dict) -> None:
    """Range les fichiers de la version précédente dans versions/vN/ : Gemini repart d'une page blanche,
    rien n'est perdu (les traces et les brouillons restent en place, numérotés à la suite)."""
    presents = [f for f in FICHIERS_VERSION if (dossier / f).exists()]
    if not presents:
        return
    numero = len([d for d in (dossier / "versions").glob("v*") if d.is_dir()]) + 1 if (dossier / "versions").exists() else 1
    cible = dossier / "versions" / f"v{numero}"
    cible.mkdir(parents=True)
    for f in presents:
        shutil.move(str(dossier / f), str(cible / f))
    for etape in ("recherche", "extraction", "plan", "redaction"):
        if etape in suivi:
            suivi.setdefault("versions", {})[f"v{numero}-{etape}"] = suivi.pop(etape)
    print(f"  Version précédente rangée dans {cible}")


def produire_lecon(fiche: Fiche, notion_id: str, args) -> bool:
    notion = fiche.notion(notion_id)
    dossier = dossier_lecon(fiche, notion_id)
    dossier.mkdir(parents=True, exist_ok=True)
    etat = lire_etat(fiche)
    suivi = etat["lecons"].setdefault(notion_id, {"etat": "a-faire"})
    valeurs = valeurs_communes(fiche) | {
        "contexte": contexte(fiche, notion_id), "dossier": dossier.as_posix(),
        "notion_id": notion_id, "notion_titre": notion.titre,
    }
    if getattr(args, "rapport", None):
        valeurs["contexte"] += ("\n## Relecture d'une version précédente de cette leçon\n"
                                "Une version précédente a été refusée par les relecteurs. Évite chacun de ces défauts "
                                "et couvre chaque point manquant, dès la recherche :\n\n"
                                + args.rapport.read_text(encoding="utf-8"))
    print(f"\n### Leçon {fiche.id}/{notion_id} — {notion.titre}")
    if args.refaire and not args.simuler:
        archiver_version(dossier, suivi)
        ecrire_etat(fiche, etat)

    def fusion(*rapports: Rapport) -> Rapport:
        total = Rapport(rapports[0].titre)
        for r in rapports:
            total.fusionner(r)
        return total

    sous_etapes = [
        ("recherche", "recherche.md",
         lambda: fusion(recuperer_pages(dossier), traces.analyser(dossier, "recherche"))),
        ("extraction", "extraction.md",
         lambda: fusion(recuperer_pages(dossier), controler_couverture(dossier), sources.verifier(dossier),
                        traces.analyser(dossier, "extraction"))),
        ("plan", "plan.md",
         lambda: fusion(controler_plan(dossier, fiche, notion_id), traces.analyser(dossier, "plan"))),
        ("redaction", "redaction.md",
         lambda: fusion(
             contenu.verifier_lecon(dossier / "lecon.mdx", fiche, notion_id, executer=True)
             if (dossier / "lecon.mdx").exists() else _absent("lecon.mdx"),
             sources.verifier(dossier), traces.analyser(dossier, "redaction"))),
    ]
    for nom, modele, controler in sous_etapes:
        if (suivi.get(nom) or {}).get("reussi") and not args.refaire:
            continue  # reprise après une interruption : on ne refait pas une étape réussie
        suivi["etat"] = nom
        ecrire_etat(fiche, etat)

        def instantane(essai: int, nom: str = nom) -> None:  # noqa: ARG001
            if nom == "redaction" and (dossier / "lecon.mdx").exists():
                versions = list((dossier / "brouillons").glob("v*.mdx"))
                (dossier / "brouillons").mkdir(exist_ok=True)
                shutil.copy(dossier / "lecon.mdx", dossier / "brouillons" / f"v{len(versions) + 1}.mdx")

        valeurs["pages"] = liste_pages(dossier)
        ok, rapport = boucle(nom, dossier, remplir(modele, valeurs), controler, args, instantane)
        suivi[nom] = {"reussi": ok, "bloquants": rapport.compter("bloquant"), "alertes": rapport.compter("alerte"),
                      "date": dt.datetime.now().isoformat(timespec="seconds")}
        if args.simuler:
            ecrire_etat(fiche, etat)
            return False
        if not ok:
            suivi["etat"] = "escaladee"
            suivi["escalade"] = f"{nom} : échec après {args.essais} essais, voir {dossier / 'audits'}"
            ecrire_etat(fiche, etat)
            enregistrer_fabrication(f"{fiche.id}/{notion_id} escaladée ({nom})")
            print(f"✗ Leçon escaladée à l'étape {nom}. Rapports : {dossier / 'audits'}")
            return False
    suivi["etat"] = "a-relire"
    ecrire_etat(fiche, etat)
    enregistrer_fabrication(f"{fiche.id}/{notion_id} prête à relire")
    print(f"✓ Leçon prête pour la relecture : {dossier / 'lecon.mdx'}")
    return True


def corriger_lecon(fiche: Fiche, notion_id: str, rapport_relecture: Path, args) -> bool:
    """Renvoie à Gemini les corrections des relecteurs (Claude), puis recontrôle la leçon."""
    notion = fiche.notion(notion_id)
    dossier = dossier_lecon(fiche, notion_id)
    if not (dossier / "lecon.mdx").exists():
        raise SystemExit(f"La leçon {notion_id} n'existe pas encore.")
    # The round number comes from the reviewers' reports kept in audits/ (relecture-N-relecteurs.md),
    # not from the traces: earlier rounds may have been redone with `lecon --refaire`.
    audits = dossier / "audits"
    audits.mkdir(exist_ok=True)
    m = re.fullmatch(r"relecture-(\d+)-relecteurs\.md", rapport_relecture.name)
    if m and rapport_relecture.resolve().parent == audits.resolve():
        tour = int(m.group(1))
    else:
        faits = [int(x.group(1)) for f in audits.glob("relecture-*-relecteurs.md")
                 if (x := re.fullmatch(r"relecture-(\d+)-relecteurs\.md", f.name))]
        tour = max(faits, default=0) + 1
    nom = f"relecture-{tour}"
    if list((dossier / "traces").glob(f"{nom}-*.consigne.md")) and not args.forcer:
        raise SystemExit(f"La correction {nom} a déjà été lancée (traces/{nom}-*). Utilise --forcer pour la refaire.")
    valeurs = valeurs_communes(fiche) | {
        "contexte": contexte(fiche, notion_id), "dossier": dossier.as_posix(), "notion_id": notion_id,
        "notion_titre": notion.titre, "pages": liste_pages(dossier),
    }
    cible = audits / f"{nom}-relecteurs.md"
    if rapport_relecture.resolve() != cible.resolve():
        if cible.exists():
            raise SystemExit(f"{cible} existe déjà : je ne l'écrase pas.")
        shutil.copy(rapport_relecture, cible)
    entete = (CONSIGNES / "correction.md").read_text(encoding="utf-8").replace("<<essai>>", nom).replace(
        "<<rapport>>", rapport_relecture.read_text(encoding="utf-8"))
    entete = entete.replace("Ta production précédente pour cette tâche a été refusée par les contrôles.",
                            "Ta leçon a passé les contrôles automatiques, puis a été relue par une débutante et par un expert. "
                            "Voici leurs corrections. Les « bloquant » et « majeur » sont obligatoires.")

    def instantane(essai: int) -> None:  # noqa: ARG001
        versions = list((dossier / "brouillons").glob("v*.mdx"))
        shutil.copy(dossier / "lecon.mdx", dossier / "brouillons" / f"v{len(versions) + 1}.mdx")

    def controler() -> Rapport:
        total = Rapport(f"Correction {nom}")
        total.fusionner(contenu.verifier_lecon(dossier / "lecon.mdx", fiche, notion_id, executer=True))
        total.fusionner(sources.verifier(dossier))
        total.fusionner(traces.analyser(dossier, nom))
        return total

    ok, rapport = boucle(nom, dossier, entete + "\n\n" + remplir("redaction.md", valeurs), controler, args, instantane)
    etat = lire_etat(fiche)
    suivi = etat["lecons"].setdefault(notion_id, {})
    suivi[nom] = {"reussi": ok, "bloquants": rapport.compter("bloquant"), "alertes": rapport.compter("alerte"),
                  "date": dt.datetime.now().isoformat(timespec="seconds")}
    suivi["etat"] = "a-relire" if ok else "escaladee"
    ecrire_etat(fiche, etat)
    enregistrer_fabrication(f"{fiche.id}/{notion_id} : {nom} ({'réussi' if ok else 'échec'})")
    return ok


def _absent(nom: str) -> Rapport:
    r = Rapport(nom)
    r.bloquant("fichier-absent", f"{nom} n'a pas été écrit")
    return r


# --------------------------------------------------------------------------- chapitre

def assembler(fiche: Fiche, numero: int, rapport: Rapport) -> Path | None:
    dossier = dossier_chapitre(fiche, numero)
    cadre_f = dossier / "cadre.mdx"
    if not cadre_f.exists():
        rapport.bloquant("cadre-absent", "cadre.mdx n'a pas été écrit")
        return None
    cadre = cadre_f.read_text(encoding="utf-8")
    if "{/* NOTIONS */}" not in cadre:
        rapport.bloquant("repere-absent", "le repère {/* NOTIONS */} manque dans cadre.mdx")
        return None
    motif_def = re.compile(r"^\[\^([^\]\s]+)\]:.*$", re.M)
    definitions: dict[str, str] = {}

    def extraire(texte: str, origine: str) -> str:
        for m in motif_def.finditer(texte):
            ancienne = definitions.get(m.group(1))
            if ancienne and ancienne != m.group(0):
                rapport.alerte("source-deux-definitions", f"[^{m.group(1)}] défini différemment dans {origine} : la première est gardée")
            definitions.setdefault(m.group(1), m.group(0))
        return motif_def.sub("", texte).strip()

    blocs = []
    for n in [n for n in fiche.notions if n.chapitre == numero]:
        f = dossier / n.id / "lecon.mdx"
        if not f.exists():
            rapport.bloquant("lecon-absente", f"la leçon « {n.id} » n'est pas écrite")
            continue
        blocs.append(extraire(f.read_text(encoding="utf-8"), n.id))
    corps = extraire(cadre, "cadre.mdx").replace("{/* NOTIONS */}", "\n\n".join(blocs))
    texte = corps.rstrip() + "\n\n" + "\n\n".join(definitions.values()) + "\n"
    cible = fiche.module / "cours" / f"{fiche.chapitre(numero).slug}.mdx"
    cible.parent.mkdir(exist_ok=True)
    cible.write_text(texte, encoding="utf-8")
    return cible


def produire_chapitre(fiche: Fiche, numero: int, args) -> bool:
    etat = lire_etat(fiche)
    notions = [n for n in fiche.notions if n.chapitre == numero]
    pas_prets = [n.id for n in notions if etat["lecons"].get(n.id, {}).get("etat") not in ("relue", "validee")]
    if pas_prets and not args.forcer:
        print(f"Leçons pas encore relues : {', '.join(pas_prets)} (ou --forcer).")
        return False
    dossier = dossier_chapitre(fiche, numero)
    cible = fiche.module / "cours" / f"{fiche.chapitre(numero).slug}.mdx"
    lecons = "\n".join(f"- `{(dossier / n.id / 'lecon.mdx').as_posix()}`" for n in notions)
    valeurs = valeurs_communes(fiche) | {
        "contexte": contexte(fiche, chapitre=numero), "dossier": dossier.as_posix(), "lecons": lecons,
        "chapitre": numero, "chapitre_titre": fiche.chapitre(numero).titre,
        "cours": cible.relative_to(RACINE).as_posix(),
    }

    def controler() -> Rapport:
        rapport = Rapport(f"Chapitre {numero}")
        chemin = assembler(fiche, numero, rapport)
        if chemin:
            rapport.fusionner(contenu.verifier_chapitre(chemin, fiche, executer=True))
            contenu.compiler_mdx([chemin], rapport)
            if not args.sans_visuel and rapport.ok:
                import visuel
                serveur, url = visuel.construire_et_servir()
                try:
                    rapport.fusionner(visuel.verifier(fiche.module, url, [numero]))
                finally:
                    serveur.shutdown()
        rapport.fusionner(traces.analyser(dossier, "chapitre"))
        return rapport

    ok, _ = boucle("chapitre", dossier, remplir("chapitre.md", valeurs), controler, args)
    etat["chapitres"][str(numero)] = {"reussi": ok, "fichier": cible.relative_to(RACINE).as_posix(),
                                      "date": dt.datetime.now().isoformat(timespec="seconds")}
    ecrire_etat(fiche, etat)
    if ok:
        print(f"✓ Chapitre assemblé : {cible}")
    return ok


# --------------------------------------------------------------------------- exercices et QCM

def ligne_exercice(fiche: Fiche, numero: int) -> tuple[str, int | None]:
    """La ligne de « Exercices prévus » qui couvre ce numéro, et le chapitre correspondant."""
    lignes = lignes_tableau(section(fiche.texte, "Exercices prévus"))
    for i, ligne in enumerate(lignes):
        if numero in contenu.plage_exercices(ligne[0]):
            chap = next((c.numero for c in fiche.chapitres if c.titre == ligne[1]), None)
            if chap is None and i < len(fiche.chapitres) and "clé" not in ligne[1].lower():
                chap = fiche.chapitres[i].numero
            return " | ".join(ligne), chap
    raise SystemExit(f"L'exercice {numero} n'est pas prévu dans la fiche (section « Exercices prévus »).")


def produire_exercice(fiche: Fiche, numero: int, args) -> bool:
    texte_ligne, chap = ligne_exercice(fiche, numero)
    exercice_id = f"{fiche.id}-ex{numero:02d}"
    existants = sorted((fiche.module / "exercices").glob(f"{numero:02d}-*"))
    dossier_ex = existants[0] if existants else fiche.module / "exercices" / f"{numero:02d}-<nom-court>"
    dossier = dossier_chapitre(fiche, chap) if chap else dossier_module(fiche) / "exercices"
    dossier.mkdir(parents=True, exist_ok=True)
    notions = [n for n in fiche.notions if n.chapitre == chap] if chap else fiche.notions
    lecons = ", ".join(f"`{(dossier_lecon(fiche, n.id) / 'lecon.mdx').as_posix()}`" for n in notions)
    valeurs = valeurs_communes(fiche) | {
        "contexte": contexte(fiche, chapitre=chap), "exercice_id": exercice_id,
        "dossier_exercice": dossier_ex.relative_to(RACINE).as_posix() + ("  (choisis le nom court, en minuscules et tirets)" if not existants else ""),
        "exercice_ligne": texte_ligne, "lecons": lecons, "journal": (dossier / "journal.md").as_posix(),
    }

    def controler() -> Rapport:
        trouves = sorted((fiche.module / "exercices").glob(f"{numero:02d}-*"))
        rapport = Rapport(f"Exercice {exercice_id}")
        if not trouves:
            rapport.bloquant("exercice-absent", f"aucun dossier exercices/{numero:02d}-… n'a été créé")
        else:
            rapport.fusionner(check.production(trouves[0]))
        rapport.fusionner(traces.analyser(dossier, f"exercice-{numero:02d}"))
        return rapport

    ok, _ = boucle(f"exercice-{numero:02d}", dossier, remplir("exercice.md", valeurs), controler, args)
    etat = lire_etat(fiche)
    etat["exercices"][exercice_id] = {"reussi": ok, "date": dt.datetime.now().isoformat(timespec="seconds")}
    ecrire_etat(fiche, etat)
    return ok


def produire_qcm(fiche: Fiche, numero: int, args) -> bool:
    chap = fiche.chapitre(numero)
    fichier = fiche.module / "qcm" / f"{chap.slug}.yaml"
    dossier = dossier_chapitre(fiche, numero)
    numeros = [0]
    for f in (fiche.module / "qcm").glob("*.yaml"):
        if f != fichier:
            numeros += [int(x) for x in re.findall(rf"{re.escape(fiche.id)}-q(\d+)", f.read_text(encoding="utf-8"))]
    lecons = ", ".join(f"`{(dossier / n.id / 'lecon.mdx').as_posix()}`" for n in fiche.notions if n.chapitre == numero)
    valeurs = valeurs_communes(fiche) | {
        "contexte": contexte(fiche, chapitre=numero), "lecons": lecons, "chapitre": numero,
        "fichier_qcm": fichier.relative_to(RACINE).as_posix(), "premier_numero": f"{max(numeros) + 1:02d}",
        "journal": (dossier / "journal.md").as_posix(),
    }

    def controler() -> Rapport:
        rapport = qcm.valider(fichier) if fichier.exists() else _absent(fichier.name)
        rapport.fusionner(traces.analyser(dossier, f"qcm-{numero:02d}"))
        return rapport

    ok, _ = boucle(f"qcm-{numero:02d}", dossier, remplir("qcm.md", valeurs), controler, args)
    etat = lire_etat(fiche)
    etat["qcm"][str(numero)] = {"reussi": ok, "date": dt.datetime.now().isoformat(timespec="seconds")}
    ecrire_etat(fiche, etat)
    return ok


# --------------------------------------------------------------------------- commandes

def afficher_etat(fiche: Fiche) -> None:
    etat = lire_etat(fiche)
    print(f"Module {fiche.id} — {fiche.meta.get('titre')}")
    compte: dict[str, int] = {}
    for n in fiche.notions:
        e = etat["lecons"].get(n.id, {}).get("etat", "a-faire")
        compte[e] = compte.get(e, 0) + 1
    print("Leçons : " + ", ".join(f"{k} {v}" for k, v in compte.items()))
    for n in fiche.notions:
        e = etat["lecons"].get(n.id, {})
        if e.get("etat") not in (None, "a-faire"):
            print(f"  ch.{n.chapitre} {n.id:<32} {e.get('etat')}" + (f" — {e['escalade']}" if e.get("escalade") else ""))
    for k, v in etat["chapitres"].items():
        print(f"  chapitre {k} : {'assemblé' if v.get('reussi') else 'échec'}")


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    parser.add_argument("module")
    parser.add_argument("commande", choices=["lecon", "suivante", "corriger", "relue", "chapitre", "exercice", "qcm", "etat"])
    parser.add_argument("cible", nargs="?")
    parser.add_argument("--essais", type=int, default=3)
    parser.add_argument("--moteur", choices=["agy", "gemini-cli"], default="agy",
                        help="agy : Antigravity (par défaut) ; gemini-cli : Gemini CLI")
    parser.add_argument("--modele", help="modèle (liste : agy models)")
    parser.add_argument("--effort", choices=["low", "medium", "high", "xhigh", "max"], help="effort de raisonnement (agy)")
    parser.add_argument("--simuler", action="store_true")
    parser.add_argument("--refaire", action="store_true", help="refaire les étapes déjà réussies")
    parser.add_argument("--forcer", action="store_true", help="assembler même si des leçons ne sont pas relues")
    parser.add_argument("--sans-visuel", action="store_true")
    parser.add_argument("--rapport", type=Path, help="corrections des relecteurs (commande corriger)")
    args = parser.parse_args()
    fiche = lire_fiche(trouver_module(args.module) / "fiche.md")
    if args.commande == "etat":
        afficher_etat(fiche)
        return 0
    if args.commande == "suivante":
        etat = lire_etat(fiche)
        for n in fiche.notions:
            if etat["lecons"].get(n.id, {}).get("etat", "a-faire") in ("a-faire", "recherche", "plan", "redaction"):
                return 0 if produire_lecon(fiche, n.id, args) else 1
        print("Toutes les leçons sont produites.")
        return 0
    if not args.cible:
        parser.error("cette commande demande une cible (identifiant de notion ou numéro)")
    if args.commande == "lecon":
        return 0 if produire_lecon(fiche, args.cible, args) else 1
    if args.commande == "corriger":
        if not args.rapport or not args.rapport.exists():
            parser.error("corriger demande --rapport <fichier des corrections des relecteurs>")
        return 0 if corriger_lecon(fiche, args.cible, args.rapport, args) else 1
    if args.commande == "relue":
        etat = lire_etat(fiche)
        etat["lecons"].setdefault(args.cible, {})["etat"] = "relue"
        ecrire_etat(fiche, etat)
        enregistrer_fabrication(f"{fiche.id}/{args.cible} relue")
        return 0
    if args.commande == "chapitre":
        return 0 if produire_chapitre(fiche, int(args.cible), args) else 1
    if args.commande == "exercice":
        return 0 if produire_exercice(fiche, int(args.cible), args) else 1
    if args.commande == "qcm":
        return 0 if produire_qcm(fiche, int(args.cible), args) else 1
    return 2


if __name__ == "__main__":
    sys.exit(main())
