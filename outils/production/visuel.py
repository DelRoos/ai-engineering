"""Tests visuels : affiche chaque chapitre dans la vraie plateforme et le contrôle.

Construit le site statique (`next build`, ce que verra l'apprenant) et le sert en local
(ou utilise --url pour une plateforme déjà lancée), ouvre chaque chapitre dans le
Chrome installé, sur un téléphone d'entrée de gamme (360 × 740) et sur un ordinateur
(1280 × 800), puis vérifie :
- la page s'affiche sans erreur (statut, erreur de rendu, erreurs de la console) ;
- les formules KaTeX sont valides ;
- rien ne déborde en largeur sur le téléphone (pas de défilement horizontal) ;
- chaque notion de la fiche a son ancre, et les liens internes mènent quelque part ;
- les sources apparaissent en bas de page et chaque renvoi y mène ;
- les images se chargent et ont un texte alternatif ;
- le poids de la page reste raisonnable pour une connexion lente.
Les captures (pleine page et par écran) sont gardées dans le dépôt de fabrication, pour la relecture.

Usage :
    python outils/production/visuel.py <module> [--chapitre N] [--url http://localhost:3000]
"""

from __future__ import annotations

import argparse
import re
import subprocess
import sys
import threading
from functools import partial
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent.parent))
from _commun import RACINE, Rapport, dossier_fabrication, lire_fiche, lire_front_matter, trouver_module  # noqa: E402

ECRANS = {"telephone": (360, 740), "ordinateur": (1280, 800)}
POIDS_MAX = 1_500_000  # octets transférés, au-delà c'est lourd sur un forfait de 2 Go par semaine

VERIFICATIONS_JS = r"""
(notions) => {
  const largeur = window.innerWidth;
  const debordements = [];
  for (const el of document.querySelectorAll('main *')) {
    const r = el.getBoundingClientRect();
    if (r.width === 0 || r.right <= largeur + 1) continue;
    let parent = el.parentElement, defilable = false;
    while (parent) {
      const s = getComputedStyle(parent);
      if (['auto', 'scroll'].includes(s.overflowX)) { defilable = true; break; }
      parent = parent.parentElement;
    }
    if (!defilable) debordements.push(el.tagName.toLowerCase() + (el.className && typeof el.className === 'string' ? '.' + el.className.split(' ')[0] : '') + ' : ' + (el.textContent || '').trim().slice(0, 50));
  }
  const ancresCassees = [];
  for (const a of document.querySelectorAll('a[href^="#"]')) {
    const cible = decodeURIComponent(a.getAttribute('href').slice(1));
    if (cible && !document.getElementById(cible)) ancresCassees.push(cible);
  }
  const images = [...document.querySelectorAll('main img')].map(i => ({src: i.getAttribute('src'), alt: i.getAttribute('alt') || '', ok: i.complete && i.naturalWidth > 0}));
  const poids = performance.getEntriesByType('resource').reduce((s, e) => s + (e.transferSize || 0), 0)
              + (performance.getEntriesByType('navigation')[0]?.transferSize || 0);
  return {
    defilementHorizontal: document.scrollingElement.scrollWidth > largeur + 1,
    debordements: debordements.slice(0, 10),
    katex: [...document.querySelectorAll('.katex-error, .katex mstyle[mathcolor="#cc0000"]')]
      .map(e => e.getAttribute('title') || e.closest('.katex')?.querySelector('annotation')?.textContent || e.textContent).slice(0, 5),
    notionsAbsentes: notions.filter(id => !document.getElementById(id)),
    renvois: document.querySelectorAll('a[data-footnote-ref]').length,
    sectionSources: !!document.querySelector('section[data-footnotes], .footnotes'),
    ancresCassees: [...new Set(ancresCassees)].slice(0, 10),
    images,
    poids,
    erreurNext: !!document.querySelector('nextjs-portal') && /error/i.test(document.body.innerText.slice(0, 2000)),
    texte: document.body.innerText.length,
  };
}
"""


class _Statique(SimpleHTTPRequestHandler):
    """Sert plateforme/out : /cours/0.0/1 → cours/0.0/1.html, comme un hébergeur statique."""

    def translate_path(self, path):
        chemin = Path(super().translate_path(path))
        page = chemin.with_name(chemin.name + ".html")
        if chemin.suffix != ".html" and page.is_file():
            return str(page)  # /cours/0.0/1 → 1.html, même si un dossier 1/ existe
        return str(chemin)

    def log_message(self, *args):
        pass


def construire_et_servir() -> tuple[ThreadingHTTPServer, str]:
    """Construit le site statique (next build), puis le sert sur un port libre."""
    npx = "npx.cmd" if sys.platform == "win32" else "npx"
    proc = subprocess.run([npx, "next", "build"], cwd=RACINE / "plateforme", capture_output=True,
                          text=True, encoding="utf-8", errors="replace", timeout=900)
    if proc.returncode != 0:
        fin = "\n".join(proc.stdout.splitlines()[-25:])
        raise SystemExit(f"La plateforme ne se construit pas (next build) :\n{fin}")
    dossier = RACINE / "plateforme" / "out"
    serveur = ThreadingHTTPServer(("127.0.0.1", 0), partial(_Statique, directory=str(dossier)))
    threading.Thread(target=serveur.serve_forever, daemon=True).start()
    return serveur, f"http://127.0.0.1:{serveur.server_address[1]}"


def verifier(module: Path, url: str, chapitres: list[int] | None) -> Rapport:
    from playwright.sync_api import sync_playwright

    fiche = lire_fiche(module / "fiche.md")
    rapport = Rapport(f"Visuel — module {fiche.id}")
    fichiers = sorted((module / "cours").glob("*.mdx")) or ([module / "cours.mdx"] if (module / "cours.mdx").exists() else [])
    if not fichiers:
        rapport.bloquant("sans-cours", "aucun cours à afficher")
        return rapport
    captures = dossier_fabrication() / fiche.relatif / "visuel"
    captures.mkdir(parents=True, exist_ok=True)
    with sync_playwright() as p:
        navigateur = p.chromium.launch(channel="chrome")
        for f in fichiers:
            meta, corps = lire_front_matter(f.read_text(encoding="utf-8"))
            numero = int((meta or {}).get("chapitre", 1))
            if chapitres and numero not in chapitres:
                continue
            for cible in pages_du_chapitre(url, fiche.id, numero, str((meta or {}).get("titre", "")), corps):
                controler_page(navigateur, rapport, captures, cible)
        navigateur.close()
    return rapport


RE_NOTION = re.compile(r'<Notion\s+id="([^"]+)"\s+titre="([^"]+)"[^>]*>[\s\S]*?</Notion>')
RE_RENVOI = re.compile(r"\[\^([^\]\s]+)\](?!:)")


def pages_du_chapitre(url: str, module_id: str, numero: int, titre: str, corps: str) -> list[dict]:
    """La page d'ouverture du chapitre, puis une page par leçon (bloc <Notion>), comme la plateforme."""
    texte = re.sub(r"^\[\^[^\]\s]+\]:.*$", "", corps, flags=re.M)
    blocs = list(RE_NOTION.finditer(texte))
    if not blocs:
        return [{"adresse": f"{url}/cours/{module_id}/{numero}/lecon", "nom": f"{numero:02d}", "titre": titre,
                 "notions": [], "renvois": len(set(RE_RENVOI.findall(texte))), "lieu": f"chapitre {numero}"}]
    intro, fin = texte[: blocs[0].start()], texte[blocs[-1].end():]
    pages = [{"adresse": f"{url}/cours/{module_id}/{numero}", "nom": f"{numero:02d}-00", "titre": titre,
              "notions": [], "renvois": len(set(RE_RENVOI.findall(intro))), "lieu": f"chapitre {numero}, ouverture"}]
    for k, m in enumerate(blocs, start=1):
        bloc = m.group(0) + (fin if k == len(blocs) else "")
        pages.append({"adresse": f"{url}/cours/{module_id}/{numero}/{m.group(1)}", "nom": f"{numero:02d}-{k:02d}",
                      "titre": m.group(2), "notions": [m.group(1)], "renvois": len(set(RE_RENVOI.findall(bloc))),
                      "lieu": f"leçon {numero}.{k} ({m.group(1)})"})
    return pages


# Le sommaire de droite suit la lecture : après avoir amené une rubrique en haut de l'écran,
# c'est elle qui doit être marquée comme courante.
SOMMAIRE_JS = """
async () => {
  const nav = document.querySelector('nav[aria-label="Dans cette leçon"]');
  if (!nav || !nav.offsetParent) return null;
  const liens = [...nav.querySelectorAll('a[href^="#"]')];
  const fautes = [];
  for (const a of liens.slice(0, -1)) {
    const id = decodeURIComponent(a.getAttribute('href').slice(1));
    const el = document.getElementById(id);
    if (!el) continue;
    window.scrollTo({top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: 'instant'});
    window.dispatchEvent(new Event('scroll'));
    for (let i = 0; i < 3; i++) await new Promise(r => requestAnimationFrame(() => r()));
    await new Promise(r => setTimeout(r, 200));
    const courant = nav.querySelector('a[aria-current]');
    if (!courant || courant !== a) fautes.push(id + ' (courant : ' + (courant ? courant.getAttribute('href') : 'aucun') + ')');
  }
  window.scrollTo(0, 0);
  return {nombre: liens.length, fautes};
}
"""


def controler_page(navigateur, rapport: Rapport, captures: Path, cible: dict) -> None:
    for ecran, (largeur, hauteur) in ECRANS.items():
        lieu = f"{cible['lieu']}, {ecran}"
        nom = f"{cible['nom']}-{ecran}"
        adresse = cible["adresse"]
        page = navigateur.new_page(viewport={"width": largeur, "height": hauteur})
        erreurs_console: list[str] = []
        page.on("console", lambda m, e=erreurs_console: e.append(m.text) if m.type == "error" else None)
        page.on("pageerror", lambda exc, e=erreurs_console: e.append(str(exc)))
        reponse = page.goto(adresse, wait_until="networkidle", timeout=180_000)
        if reponse is None or reponse.status != 200:
            rapport.bloquant("page-absente", f"{adresse} répond {reponse.status if reponse else 'rien'}", lieu)
            page.close()
            continue
        if cible["titre"] and cible["titre"] not in page.inner_text("body"):
            rapport.bloquant("page-inattendue", f"la page servie ne contient pas le titre « {cible['titre']} »", lieu)
            page.close()
            continue
        r = page.evaluate(VERIFICATIONS_JS, cible["notions"])
        page.screenshot(path=str(captures / f"{nom}.png"), full_page=True)
        # Tranches de la hauteur d'un écran : lisibles une à une pendant la relecture.
        hauteur_page = page.evaluate("document.scrollingElement.scrollHeight")
        for ancienne in captures.glob(f"{nom}-*.png"):
            ancienne.unlink()
        for k, y in enumerate(range(0, hauteur_page, hauteur)):
            page.screenshot(path=str(captures / f"{nom}-{k + 1:02d}.png"), full_page=True,
                            clip={"x": 0, "y": y, "width": largeur, "height": min(hauteur, hauteur_page - y)})
        if r["erreurNext"]:
            rapport.bloquant("erreur-rendu", "la plateforme affiche une erreur de rendu", lieu)
        for e in erreurs_console[:5]:
            rapport.alerte("console", e[:200], lieu)
        for k in r["katex"]:
            rapport.bloquant("katex", f"formule invalide : {k[:120]}", lieu)
        if ecran == "telephone" and r["defilementHorizontal"]:
            rapport.bloquant("defilement-horizontal", "la page défile en largeur sur un téléphone", lieu)
        if ecran == "telephone":
            for d in r["debordements"]:
                rapport.alerte("debordement", f"élément plus large que l'écran : {d}", lieu)
        for n in r["notionsAbsentes"]:
            rapport.bloquant("ancre-notion", f"la notion « {n} » n'a pas d'ancre dans la page", lieu)
        for a in r["ancresCassees"]:
            rapport.bloquant("lien-interne", f"lien vers #{a}, qui n'existe pas dans la page", lieu)
        if cible["renvois"] and not r["sectionSources"]:
            rapport.bloquant("sources-invisibles", "la leçon cite des sources, mais la liste n'apparaît pas en bas de page", lieu)
        if cible["renvois"] and r["renvois"] == 0:
            rapport.bloquant("renvois-invisibles", "les renvois vers les sources ne sont pas affichés", lieu)
        for img in r["images"]:
            if not img["ok"]:
                rapport.bloquant("image", f"image non chargée : {img['src']}", lieu)
            if not img["alt"].strip():
                rapport.bloquant("image-alt", f"image sans texte alternatif : {img['src']}", lieu)
        if r["poids"] > POIDS_MAX:
            rapport.alerte("poids", f"{r['poids'] / 1e6:.1f} Mo transférés : lourd pour une connexion mobile", lieu)
        if cible["notions"] and ecran == "ordinateur":
            s = page.evaluate(SOMMAIRE_JS)
            if s is None:
                rapport.bloquant("sommaire-absent", "le sommaire « Dans cette leçon » n'est pas affiché", lieu)
            else:
                for faute in s["fautes"]:
                    rapport.bloquant("sommaire-desynchronise", f"rubrique atteinte mais pas marquée dans le sommaire : {faute}", lieu)
        rapport.info("capture", f"{captures / f'{nom}.png'} ({r['poids'] / 1e3:.0f} Ko)", lieu)
        page.close()


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    parser.add_argument("module")
    parser.add_argument("--chapitre", type=int, action="append")
    parser.add_argument("--url", help="plateforme déjà lancée (sinon le site statique est construit et servi)")
    parser.add_argument("--details", action="store_true")
    args = parser.parse_args()
    module = trouver_module(args.module)
    serveur = None
    url = args.url
    if not url:
        serveur, url = construire_et_servir()
    try:
        rapport = verifier(module, url.rstrip("/"), args.chapitre)
    finally:
        if serveur:
            serveur.shutdown()
    rapport.afficher(args.details)
    return 0 if rapport.ok else 1


if __name__ == "__main__":
    sys.exit(main())
