# Plateforme

Application **Next.js** qui affiche le contenu de la formation (cours MDX, énoncés, indices, QCM interactifs, progression).

> **État** : la landing page (`/`) et la page de lecture des cours (`/cours/<module>/<chapitre>`) sont en place. Aucun vrai cours n'existe encore : la page est testée avec le module de démonstration `demo/` (`/cours/demo/1`).

## Démarrer

Prérequis : Node.js 20 ou plus récent.

```bash
cd plateforme
npm install
npm run dev      # http://localhost:3000, rechargement automatique
npm run lint     # vérification du code
npm run build    # site statique complet dans out/, hébergeable gratuitement partout
```

## Organisation

| Chemin | Rôle |
| --- | --- |
| `src/content/site.ts` | Nom du site (provisoire), URL du dépôt GitHub (`githubUrl`, à renseigner), licences |
| `src/content/landing.ts` | Tous les textes de la landing page. Chaque chiffre doit venir de `docs/programme.md` |
| `src/components/landing/` | Une section de la landing page par fichier |
| `src/components/ui.tsx` | Briques communes : conteneur, sections (`tone="raised"` pour alterner les fonds), boutons, logo, motif bogolan |
| `src/app/globals.css` | Design system : couleurs (thème sombre, accent ambre → terre cuite), grille de fond, animations, typographie de lecture des cours (`.cours`) |
| `src/lib/fiches.ts` | Lit les `fiche.md` des modules au build et construit les pages `/modules/<slug>` (slug = nom du dossier sans numéro : `01-python` → `python`). Une fiche mal remplie (tableau manquant, durée illisible, plus de 8 notions par chapitre, slug en double) fait échouer le build |
| `src/lib/content.ts` | Lit les cours au build : `../0X-etape/<module>/cours.mdx` ou `cours/*.mdx`, `fiche.md`, et le module `demo/`. Construit le sommaire de chaque chapitre |
| `src/lib/mdx.tsx` | Compile un chapitre MDX au build : tableaux (GFM), formules (KaTeX), code coloré (Shiki via rehype-pretty-code) |
| `src/components/course/mdx-components.tsx` | Les composants pédagogiques de `docs/format-contenu.md` § 4 (`Objectifs`, `Notion`, `Exemple`, `MiniExercice`, `Solution`, `Erreur`, `Resume`, `Vocabulaire`…) |
| `src/components/course/` | En-tête des cours, bloc de code avec « Copier », suivi des chapitres terminés, sommaire « Dans ce chapitre » |
| `src/app/cours/[moduleId]/` | Page d'un module (sommaire) et page d'un chapitre (`[chapitre]/`) |
| `demo/00-demo/` | Module de démonstration : utilise chaque composant au moins une fois. **Ce n'est pas un cours de la formation.** |

Choix techniques : Next.js 16 (App Router) avec `output: "export"` (site 100 % statique), Tailwind CSS 4, icônes `lucide-react`, polices Geist (texte) et Bricolage Grotesque (titres). Le MDX est compilé au build avec `@mdx-js/mdx` (pas de JavaScript envoyé au navigateur pour afficher un cours). Composants client limités : menu mobile, déclencheur d'animations (`reveal.tsx`), bouton « Copier », suivi des chapitres, sommaire actif. La FAQ et les solutions utilisent `<details>`. KaTeX n'est chargé que sur les pages de cours. La version de `katex` est forcée (`overrides` dans `package.json`) pour éviter une ancienne version vulnérable embarquée par `rehype-katex`.

Le suivi « chapitre terminé » est stocké dans le navigateur (`localStorage`) : c'est une aide de confort. La progression officielle sera celle de `outils/progression.py`, dans le dépôt de l'apprenant.

Hébergement : l'export produit `cours/demo/1.html`. Les hébergeurs statiques courants (GitHub Pages, Cloudflare Pages, Netlify) le servent à l'adresse `/cours/demo/1`.

Règles de design à respecter (inspirées des skills `frontend-design` d'Anthropic et UI UX Pro Max) :

- **Hiérarchie** : `SectionHeader size="xl"` pour les sections clés (métier, méthode, parcours, projets, public), `md` pour les sections d'appui. Pas d'étiquette au-dessus des titres, pas de points médians, pas de libellés en police mono hors du code.
- **Une seule couleur d'accent** (ambre). Le vert est réservé au sens « validé ». Fond sombre mais chaud (crème, gris chauds).
- **Pas de cartes identiques partout** : lignes et filets quand c'est possible, cartes seulement pour les objets (projets, parcours d'entrée), et `ring-gradient` pour l'élément mis en avant.
- **Animations qui expliquent quelque chose**, pas de fondu générique sur chaque section :
  - un seul moment orchestré au chargement : le terminal du haut de page ;
  - à l'entrée à l'écran, **jouées une fois en entier** (jamais liées à la position de défilement, sinon elles restent à moitié finies quand on s'arrête ou qu'on arrive par un lien du menu) : compteurs des chiffres clés, ligne des 5 étapes, barre 70/20/10, barre des 72 semaines, dépôts du portfolio. Mécanisme : un conteneur `data-reveal`, des enfants `reveal-draw`, `reveal-draw-y`, `reveal-rise`, `reveal-light` ou `count`, et `src/components/reveal.tsx` qui ajoute `.is-in` une seule fois ;
  - pour une séquence (ligne + pastilles), une seule horloge : la ligne avance à vitesse constante (`--ease: linear`) et chaque élément a un `--delay` calculé sur sa durée ;
  - réponses aux actions : survol durable des boutons (lueur, relief, couleur), reflet du bouton principal, ouverture de la FAQ, flèches au survol des liens, section en cours signalée dans le menu.
- **Tout est visible sans animation** : sans JavaScript (la classe `.js` est retirée au bout de 3 s si la page ne démarre pas), ou si l'utilisateur demande moins de mouvement, la page s'affiche statique et complète.
- **Mobile** : sections compactes, frise verticale pour la méthode, carrousel horizontal pour les projets secondaires, action principale dans le menu.
- **Animer seulement `transform`, `opacity`, `clip-path` ou les couleurs**, jamais la largeur ou la hauteur (recalcul de mise en page).
- **Ni le titre ni le sous-titre du haut de page ne sont animés** : l'un ou l'autre est l'élément mesuré pour le temps d'affichage (LCP).
- **Boutons honnêtes** : tant que `githubUrl` vaut `null`, aucun bouton ne promet GitHub (voir `withRepo` / `withoutRepo` dans `landing.ts`).
- **Accessibilité** : textes de 12 px minimum, contraste de 4,5:1 minimum, focus visible, curseur main sur tout ce qui est cliquable.

Derniers audits Lighthouse (mobile simulé, serveur avec gzip, 24/11/2026) :

- landing (5 passages) : performance 92–95 (un passage à 73 dû au démarrage de Chrome, travail « non attribuable »), accessibilité 100, bonnes pratiques 100, SEO 100. Contenu principal affiché en 0,9 à 1 s ;
- page de cours `/cours/demo/1` (3 passages) : performance 93–95, accessibilité 100, bonnes pratiques 100, SEO 100. Contenu principal affiché en 1,1 s, 337 Ko au total.

Règles propres aux pages de cours :

- **Lecture longue d'abord** : colonne de 44rem au plus, texte de 17 à 18 px, interligne 1,8, couleur crème atténuée (pas de blanc pur).
- **Les styles de lecture (`.cours`) sont dans `@layer components`** : les classes utilitaires des composants doivent pouvoir les surcharger.
- **Code** : les blocs de code ont un bouton « Copier » ; les sorties de programme (bloc `text`) n'en ont pas et s'affichent en pointillé.
- **Solutions repliées** par défaut, avec « Essaie d'abord ! ».

Règle de contenu : pas de faux témoignages, de faux chiffres d'inscrits ni de logos de partenaires. Les aperçus (terminal, portfolio) sont présentés comme des illustrations.

## Principes

- **Le contenu est la source.** La plateforme lit les dossiers `00-fondations/` à `06-capstone/` à la compilation. Elle n'ajoute aucun contenu pédagogique : tout ce qu'elle affiche existe dans le dépôt, lisible sans elle.
- **Le contrat** est `docs/format-contenu.md` : front matter, composants MDX, règles des QCM et des médias. Tout composant utilisé par le contenu y est décrit avant d'être codé ici.
- **Composants globaux.** Les composants MDX (`Notion`, `Exemple`, `MiniExercice`, `Solution`, `Erreur`…) sont fournis à la compilation (`src/lib/mdx.tsx`) : les fichiers de contenu ne contiennent ni `import` ni `export`.
- **Légèreté.** Pages statiques autant que possible, peu de JavaScript côté client, images optimisées : beaucoup d'apprenants ont une connexion lente et un téléphone ou un PC modeste.
- **Apprenant isolé.** L'apprenant qui clone le dépôt n'a pas besoin d'installer la plateforme pour suivre la formation. Les dépendances de `plateforme/` (Node.js, `node_modules`) ne sont jamais requises pour les exercices et les projets.

## Prévu

- QCM interactifs à partir des `qcm.yaml`.
- Indices dépliables un par un à partir des `indices.md`.
- Validation du contenu au build (front matter, compilation MDX, schéma des QCM).
