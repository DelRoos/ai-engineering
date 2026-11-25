"""Génère docs/images/parcours.svg : les 7 étapes du parcours en escalier (README)."""
import os
import sys

out = sys.argv[1]
steps = [
    ("0", "Fondations", "6 modules", ["Analyseur de", "données"]),
    ("1", "Données et ML", "8 modules", ["Modèle de", "prédiction"]),
    ("2", "Deep learning", "5 modules", ["Classifieur de", "plantes"]),
    ("3", "LLM, RAG, agents", "10 modules", ["Assistant RAG", "hors ligne"]),
    ("4", "Production", "9 modules", ["Mise en", "production"]),
    ("5", "Sécurité, éthique", "3 modules", ["Audit de", "sécurité et biais"]),
    ("6", "Capstone, carrière", "2 modules + capstone", ["Solution complète,", "pitch en anglais"]),
]
W, H = 1200, 640
base, x0, sw, gap = 556, 44, 152, 8
font = "'Segoe UI', -apple-system, BlinkMacSystemFont, 'Helvetica Neue', Arial, sans-serif"
o = [
    f'<svg xmlns="http://www.w3.org/2000/svg" width="{W}" height="{H}" viewBox="0 0 {W} {H}" role="img" aria-labelledby="t d">',
    "<title id=\"t\">Le parcours de la formation AI Engineer</title>",
    "<desc id=\"d\">Sept étapes en escalier, du débutant à l'expert : 0 Fondations (6 modules), 1 Données et ML (8), "
    "2 Deep learning (5), 3 LLM, RAG et agents (10), 4 Production (9), 5 Sécurité et éthique (3), 6 Capstone et carrière (2 et le capstone). "
    "Chaque étape se termine par un projet. 43 modules au total, deux pauses de consolidation, aucune durée imposée.</desc>",
    """<defs>
<linearGradient id="bg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#1a1410"/><stop offset="1" stop-color="#0d0c0b"/></linearGradient>
<radialGradient id="glow" cx="0.85" cy="0.1" r="0.6"><stop offset="0" stop-color="#f59e42" stop-opacity="0.16"/><stop offset="1" stop-color="#f59e42" stop-opacity="0"/></radialGradient>
<linearGradient id="amber" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#fcd38b"/><stop offset="1" stop-color="#e8794a"/></linearGradient>
</defs>""",
    f'<rect width="{W}" height="{H}" rx="24" fill="url(#bg)"/>',
    f'<rect width="{W}" height="{H}" rx="24" fill="url(#glow)"/>',
    f'<rect x="0.5" y="0.5" width="{W - 1}" height="{H - 1}" rx="23.5" fill="none" stroke="#ffffff" stroke-opacity="0.08"/>',
    f'<g font-family="{font}">',
    '<text x="44" y="68" font-size="30" font-weight="700" fill="#f3ede4" letter-spacing="-0.5">Un seul parcours, <tspan fill="#f5a35a">du premier code au métier</tspan></text>',
    '<text x="44" y="100" font-size="17" fill="#a89f94">7 étapes, 43 modules, à ton rythme. Chaque étape se termine par un projet public, vérifié par des tests.</text>',
]
for i, (n, title, weeks, proj) in enumerate(steps):
    h = 200 + i * 36
    x = x0 + i * (sw + gap)
    y = base - h
    o.append(f'<rect x="{x}" y="{y}" width="{sw}" height="{h}" rx="14" fill="#f59e42" fill-opacity="{0.07 + i * 0.045:.3f}" stroke="#f59e42" stroke-opacity="{0.18 + i * 0.07:.2f}"/>')
    o.append(f'<rect x="{x + 14}" y="{y}" width="{sw - 28}" height="3" rx="1.5" fill="url(#amber)" fill-opacity="{0.35 + i * 0.1:.2f}"/>')
    o.append(f'<text x="{x + 16}" y="{y + 46}" font-size="38" font-weight="800" fill="url(#amber)">{n}</text>')
    o.append(f'<text x="{x + 16}" y="{y + 74}" font-size="14.5" font-weight="700" fill="#f3ede4">{title}</text>')
    o.append(f'<text x="{x + 16}" y="{y + 95}" font-size="13" fill="#a89f94">{weeks}</text>')
    py = y + h - 38
    o.append(f'<text x="{x + 16}" y="{py - 30}" font-size="11" font-weight="600" fill="#a89f94" letter-spacing="0.6">PROJET {n}</text>')
    o.append(f'<line x1="{x + 16}" y1="{py - 22}" x2="{x + sw - 16}" y2="{py - 22}" stroke="#ffffff" stroke-opacity="0.08"/>')
    o.append(f'<text font-size="12.5" fill="#d8cfc4"><tspan x="{x + 16}" y="{py}">{proj[0]}</tspan><tspan x="{x + 16}" dy="17">{proj[1]}</tspan></text>')
o.append(f'<line x1="44" y1="{base + 22}" x2="{W - 44}" y2="{base + 22}" stroke="#ffffff" stroke-opacity="0.1"/>')
o.append(f'<text x="44" y="{base + 54}" font-size="14" fill="#a89f94">Débutant&#160;: aucune expérience demandée</text>')
o.append(f'<text x="{W - 44}" y="{base + 54}" font-size="14" fill="#a89f94" text-anchor="end">+ 2 pauses de consolidation. Expert&#160;: prêt pour le métier</text>')
o.append("</g></svg>")
with open(out, "w", encoding="utf-8", newline="\n") as f:
    f.write("\n".join(o) + "\n")
print(os.path.getsize(out), "octets")
