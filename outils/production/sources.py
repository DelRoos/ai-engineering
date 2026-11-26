"""Contrôle les sources d'une leçon et la façon dont la leçon les utilise.

Vérifie :
- sources.yaml est complet (chaque source, chaque fait, chaque citation) ;
- chaque source a vraiment été lue avec lire_page.py ;
- chaque citation se trouve mot pour mot dans le texte de la page lue ;
- chaque renvoi [^id] de la leçon pointe vers une source, et chaque source sert ;
- la leçon ne recopie pas ses sources (plagiat, licence) ;
- les faits datés ou chiffrés de la leçon portent un renvoi.

Usage :
    python outils/production/sources.py <dossier de la leçon dans le dépôt de fabrication>
"""

from __future__ import annotations

import re
import sys
import unicodedata
from difflib import SequenceMatcher
from pathlib import Path
from urllib.parse import urlparse

sys.path.insert(0, str(Path(__file__).resolve().parent.parent))
from _commun import Rapport, lire_yaml  # noqa: E402
from lire_page import lire_cache  # noqa: E402

TYPES = {
    "documentation-officielle": 1, "norme": 1, "loi": 1, "article-scientifique": 1, "donnees": 1,
    "livre": 2, "cours": 2, "blog-expert": 3, "presse": 3, "autre": 3,
}
DOMAINES_INTERDITS = (
    "chatgpt.com", "chat.openai.com", "gemini.google.com", "perplexity.ai", "copilot.microsoft.com",
    "quora.com", "brainly.", "coursehero.com", "scribd.com", "studocu.com", "answers.com",
)
DOMAINES_SECONDAIRES = ("wikipedia.org", "wikiwand.com")
CHAMPS_SOURCE = ("id", "url", "titre", "editeur", "type", "langue", "date_consultation", "licence")
MOTS_COPIE = 12  # au-delà de 12 mots consécutifs identiques à une source, c'est une copie


def normaliser(texte: str) -> str:
    texte = unicodedata.normalize("NFKC", texte)
    texte = texte.replace("’", "'").replace("‘", "'").replace("“", '"').replace("”", '"')
    texte = texte.replace("«", '"').replace("»", '"').replace(" ", " ").replace(" ", " ")
    texte = re.sub(r"[–—]", "-", texte)
    return re.sub(r"\s+", " ", texte).strip().lower()


def prose(mdx: str) -> str:
    """Le texte de la leçon sans le code, les balises ni les définitions de renvois."""
    texte = re.sub(r"```.*?```", " ", mdx, flags=re.S)
    texte = re.sub(r"`[^`\n]*`", " ", texte)
    texte = re.sub(r"^\[\^[^\]]+\]:.*$", " ", texte, flags=re.M)
    texte = re.sub(r"\{/\*.*?\*/\}", " ", texte, flags=re.S)
    texte = re.sub(r"</?[A-Za-z][^>]*>", " ", texte)
    return texte


def mots(texte: str) -> list[str]:
    return re.findall(r"[\w']+", normaliser(texte))


def plus_longue_copie(lecon: list[str], page: list[str]) -> tuple[int, str]:
    """Longueur (en mots) du plus long passage commun, et ce passage."""
    if len(lecon) < MOTS_COPIE or len(page) < MOTS_COPIE:
        return 0, ""
    index: dict[tuple, list[int]] = {}
    n = 6
    for i in range(len(page) - n + 1):
        index.setdefault(tuple(page[i:i + n]), []).append(i)
    meilleur, passage = 0, ""
    i = 0
    while i <= len(lecon) - n:
        positions = index.get(tuple(lecon[i:i + n]))
        if not positions:
            i += 1
            continue
        longueur_max = 0
        for j in positions[:50]:
            k = n
            while i + k < len(lecon) and j + k < len(page) and lecon[i + k] == page[j + k]:
                k += 1
            longueur_max = max(longueur_max, k)
        if longueur_max > meilleur:
            meilleur, passage = longueur_max, " ".join(lecon[i:i + longueur_max])
        i += max(1, longueur_max - n + 1)
    return meilleur, passage


def citation_trouvee(citation: str, page: str) -> float:
    """1.0 si la citation est dans la page mot pour mot, sinon la part retrouvée d'un seul tenant."""
    c, p = normaliser(citation), normaliser(page)
    if c in p:
        return 1.0
    sm = SequenceMatcher(None, c, p, autojunk=False)
    m = sm.find_longest_match(0, len(c), 0, len(p))
    return m.size / max(1, len(c))


def verifier(dossier: Path) -> Rapport:
    rapport = Rapport(f"Sources — {dossier.name}")
    fichier = dossier / "sources.yaml"
    if not fichier.exists():
        rapport.bloquant("sources-absentes", "sources.yaml n'existe pas : la recherche n'a pas été faite.")
        return rapport
    try:
        donnees = lire_yaml(fichier) or {}
    except Exception as err:  # noqa: BLE001
        rapport.bloquant("sources-illisibles", f"sources.yaml n'est pas un YAML valide : {err}")
        return rapport

    sources = donnees.get("sources") or []
    faits = donnees.get("faits") or []
    if not sources:
        rapport.bloquant("aucune-source", "sources.yaml ne liste aucune source.")
    if not faits:
        rapport.bloquant("aucun-fait", "sources.yaml ne liste aucun fait avec sa citation.")

    par_id: dict[str, dict] = {}
    textes: dict[str, str] = {}
    meilleur_rang = 9
    for s in sources:
        sid = str(s.get("id", "?"))
        manquants = [c for c in CHAMPS_SOURCE if not s.get(c)]
        if manquants:
            rapport.bloquant("source-incomplete", f"champs manquants : {', '.join(manquants)}", sid)
        if sid in par_id:
            rapport.bloquant("source-doublon", "deux sources ont le même identifiant", sid)
        par_id[sid] = s
        url = str(s.get("url", ""))
        hote = urlparse(url).netloc.lower()
        if any(d in hote for d in DOMAINES_INTERDITS):
            rapport.bloquant("source-interdite", f"{hote} n'est pas une source acceptable (IA, réponses non vérifiées)", sid)
        elif any(d in hote for d in DOMAINES_SECONDAIRES):
            rapport.alerte("source-secondaire", f"{hote} est une source secondaire : remonte à la source primaire", sid)
        type_source = s.get("type")
        if type_source not in TYPES:
            rapport.bloquant("type-inconnu", f"type « {type_source} » inconnu ; types permis : {', '.join(TYPES)}", sid)
        else:
            meilleur_rang = min(meilleur_rang, TYPES[type_source])
        en_cache = lire_cache(url) if url else None
        if not en_cache:
            rapport.bloquant(
                "source-non-lue",
                "aucune lecture de cette page avec lire_page.py : la source n'a pas été lue (ou elle vient de la mémoire du modèle)",
                sid,
            )
        else:
            textes[sid] = en_cache[0]
    if sources and meilleur_rang > 2:
        rapport.alerte("sources-faibles", "aucune source primaire (documentation officielle, norme, loi, article, données)")

    for f in faits:
        fid = str(f.get("id", "?"))
        sid = str(f.get("source", ""))
        citation = str(f.get("citation", "")).strip()
        if not f.get("affirmation"):
            rapport.bloquant("fait-incomplet", "affirmation manquante", fid)
        if sid not in par_id:
            rapport.bloquant("fait-sans-source", f"la source « {sid} » n'existe pas dans sources", fid)
            continue
        if len(citation) < 15:
            rapport.bloquant("citation-absente", "citation manquante ou trop courte (15 caractères au moins)", fid)
            continue
        if len(citation) > 600:
            rapport.alerte("citation-longue", "citation de plus de 600 caractères : garde la phrase utile", fid)
        if sid in textes:
            part = citation_trouvee(citation, textes[sid])
            if part < 0.9:
                rapport.bloquant(
                    "citation-introuvable",
                    f"la citation n'est pas dans la page lue (seulement {part:.0%} retrouvé d'un seul tenant) : "
                    "elle est reformulée ou inventée",
                    fid,
                )
            elif part < 1.0:
                rapport.alerte("citation-approchee", f"citation retrouvée à {part:.0%} : recopie-la exactement", fid)

    lecon_chemin = dossier / "lecon.mdx"
    if not lecon_chemin.exists():
        return rapport
    lecon = lecon_chemin.read_text(encoding="utf-8")
    renvois = set(re.findall(r"\[\^([^\]\s]+)\](?!:)", lecon))
    definitions = dict(re.findall(r"^\[\^([^\]\s]+)\]:\s*(.+)$", lecon, flags=re.M))
    for r in sorted(renvois - set(par_id)):
        rapport.bloquant("renvoi-inconnu", f"la leçon renvoie à [^{r}], qui n'est pas dans sources.yaml")
    for r in sorted(renvois - set(definitions)):
        rapport.bloquant("renvoi-sans-definition", f"[^{r}] est utilisé mais sa ligne « [^{r}]: … » manque en bas de la leçon")
    for sid, definition in definitions.items():
        s = par_id.get(sid)
        if s and f"]({s.get('url')})" not in definition:
            rapport.bloquant(
                "definition-sans-lien",
                "la définition du renvoi doit contenir un lien Markdown [titre](URL de la source) : "
                "une URL nue déborde de l'écran d'un téléphone",
                sid,
            )
        if "consult" not in definition.lower():
            rapport.alerte("definition-sans-date", "la définition du renvoi n'indique pas la date de consultation", sid)
    for sid in sorted(set(par_id) - renvois):
        rapport.alerte("source-inutilisee", "source listée mais jamais citée dans la leçon", sid)
    if not renvois:
        rapport.bloquant("aucun-renvoi", "la leçon ne cite aucune source")

    mots_lecon = mots(prose(lecon))
    for sid, texte in textes.items():
        longueur, passage = plus_longue_copie(mots_lecon, mots(texte))
        if longueur >= MOTS_COPIE:
            rapport.bloquant(
                "copie-source",
                f"{longueur} mots consécutifs recopiés de la source : « {passage[:160]}… ». Reformule avec tes mots.",
                sid,
            )

    for phrase in re.split(r"(?<=[.!?])\s+", prose(lecon)):
        if "[^" in phrase:
            continue
        if re.search(r"\b(19|20)\d{2}\b|\bversion\s+\d|\b\d+\.\d+\.\d+\b|\d\s?%|\bFCFA\b|\barticle\s+\d", phrase, re.I):
            rapport.alerte("fait-sans-renvoi", f"phrase datée ou chiffrée sans renvoi : « {phrase.strip()[:140]} »")
    return rapport


def main() -> int:
    if len(sys.argv) != 2:
        print(__doc__)
        return 2
    rapport = verifier(Path(sys.argv[1]))
    rapport.afficher(details_info=True)
    return 0 if rapport.ok else 1


if __name__ == "__main__":
    sys.exit(main())
