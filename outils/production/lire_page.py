"""Lit une page web et renvoie son texte exact, puis le garde dans le dépôt de fabrication.

Gemini doit passer par cet outil pour lire une source : son outil web_fetch ne
renvoie qu'un résumé, impossible à citer mot pour mot. Le texte gardé sert
ensuite à sources.py pour vérifier que chaque citation existe vraiment.

Usage :
    python outils/production/lire_page.py <url> [--debut N] [--taille N]
"""

from __future__ import annotations

import argparse
import datetime as dt
import hashlib
import io
import json
import re
import sys
import urllib.error
import urllib.request
from html.parser import HTMLParser
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent.parent))
from _commun import dossier_fabrication  # noqa: E402

AGENT = "Mozilla/5.0 (compatible; formation-ai-engineer-sources/1.0)"
BLOCS = {
    "p", "div", "br", "li", "ul", "ol", "tr", "table", "section", "article", "header",
    "footer", "h1", "h2", "h3", "h4", "h5", "h6", "pre", "blockquote", "dt", "dd", "td", "th",
}
IGNORES = {"script", "style", "noscript", "svg", "template", "iframe"}


class _Texte(HTMLParser):
    def __init__(self) -> None:
        super().__init__(convert_charrefs=True)
        self.morceaux: list[str] = []
        self.ignore = 0
        self.titre = ""
        self._dans_titre = False

    def handle_starttag(self, tag, attrs):
        if tag in IGNORES:
            self.ignore += 1
        elif tag == "title":
            self._dans_titre = True
        elif tag in BLOCS:
            self.morceaux.append("\n")

    def handle_endtag(self, tag):
        if tag in IGNORES and self.ignore:
            self.ignore -= 1
        elif tag == "title":
            self._dans_titre = False
        elif tag in BLOCS:
            self.morceaux.append("\n")

    def handle_data(self, data):
        if self._dans_titre:
            self.titre += data
        elif not self.ignore:
            self.morceaux.append(data)

    def texte(self) -> str:
        brut = "".join(self.morceaux)
        lignes = [re.sub(r"[ \t\r\f\v]+", " ", ligne).strip() for ligne in brut.split("\n")]
        return re.sub(r"\n{3,}", "\n\n", "\n".join(lignes)).strip()


def cle(url: str) -> str:
    return hashlib.sha1(url.encode("utf-8")).hexdigest()[:16]


def chemin_cache(url: str) -> Path:
    return dossier_fabrication() / "pages" / f"{cle(url)}.txt"


def lire_cache(url: str) -> tuple[str, dict] | None:
    txt = chemin_cache(url)
    meta = txt.with_suffix(".json")
    if txt.exists() and meta.exists():
        return txt.read_text(encoding="utf-8"), json.loads(meta.read_text(encoding="utf-8"))
    return None


def telecharger(url: str) -> tuple[str, dict]:
    requete = urllib.request.Request(url, headers={"User-Agent": AGENT, "Accept-Language": "fr,en;q=0.8"})
    with urllib.request.urlopen(requete, timeout=40) as reponse:
        brut = reponse.read(15_000_000)
        type_contenu = reponse.headers.get("Content-Type", "")
        url_finale = reponse.geturl()
        statut = reponse.status
    meta = {
        "url": url,
        "url_finale": url_finale,
        "statut": statut,
        "type": type_contenu,
        "lue_le": dt.datetime.now(dt.timezone.utc).isoformat(timespec="seconds"),
        "titre": "",
    }
    if "pdf" in type_contenu or url_finale.lower().endswith(".pdf"):
        try:
            from pypdf import PdfReader
        except ImportError as err:
            raise SystemExit(
                "Cette source est un PDF et la bibliothèque pypdf n'est pas installée "
                "(pip install pypdf). Cherche une version HTML de la même source, ou signale-le "
                "dans le journal."
            ) from err
        lecteur = PdfReader(io.BytesIO(brut))
        texte = "\n\n".join(f"[page {i + 1}]\n{p.extract_text() or ''}" for i, p in enumerate(lecteur.pages))
        meta["pages_pdf"] = len(lecteur.pages)
        return texte.strip(), meta
    m = re.search(r"charset=([\w-]+)", type_contenu)
    encodage = m.group(1) if m else "utf-8"
    html = brut.decode(encodage, errors="replace")
    if "html" not in type_contenu and not html.lstrip().startswith("<"):
        return html.strip(), meta
    analyseur = _Texte()
    analyseur.feed(html)
    meta["titre"] = analyseur.titre.strip()
    return analyseur.texte(), meta


def lire(url: str, rafraichir: bool = False) -> tuple[str, dict]:
    """Texte exact de la page, depuis le cache si possible."""
    if not rafraichir:
        en_cache = lire_cache(url)
        if en_cache:
            return en_cache
    texte, meta = telecharger(url)
    meta["caracteres"] = len(texte)
    txt = chemin_cache(url)
    txt.parent.mkdir(parents=True, exist_ok=True)
    txt.write_text(texte, encoding="utf-8")
    txt.with_suffix(".json").write_text(json.dumps(meta, ensure_ascii=False, indent=1), encoding="utf-8")
    return texte, meta


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    parser.add_argument("url")
    parser.add_argument("--debut", type=int, default=0, help="premier caractère affiché")
    parser.add_argument("--taille", type=int, default=30000, help="nombre de caractères affichés")
    parser.add_argument("--rafraichir", action="store_true", help="relire la page même si elle est en cache")
    args = parser.parse_args()
    if not re.match(r"^https?://", args.url):
        print("L'adresse doit commencer par http:// ou https://", file=sys.stderr)
        return 2
    try:
        texte, meta = lire(args.url, args.rafraichir)
    except urllib.error.HTTPError as err:
        print(f"ÉCHEC : la page répond {err.code} ({err.reason}). Choisis une autre source.", file=sys.stderr)
        return 1
    except (urllib.error.URLError, TimeoutError, OSError) as err:
        print(f"ÉCHEC : page injoignable ({err}). Choisis une autre source.", file=sys.stderr)
        return 1
    fin = min(len(texte), args.debut + args.taille)
    print(f"URL : {meta['url']}")
    if meta.get("url_finale") and meta["url_finale"] != meta["url"]:
        print(f"Redirigée vers : {meta['url_finale']}")
    print(f"Titre : {meta.get('titre', '')}")
    print(f"Lue le : {meta['lue_le']}")
    print(f"Caractères : {len(texte)} (affichés : {args.debut} à {fin})")
    if fin < len(texte):
        print(f"Suite : python outils/production/lire_page.py {args.url} --debut {fin}")
    print("-" * 60)
    print(texte[args.debut:fin])
    return 0


if __name__ == "__main__":
    sys.exit(main())
