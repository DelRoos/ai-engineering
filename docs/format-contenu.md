# Format du contenu

Ce document est le **contrat** entre le contenu de la formation et la plateforme Next.js (`plateforme/`). La plateforme ne doit rien deviner : tout ce dont elle a besoin est décrit ici. Si un besoin n'est pas couvert, on modifie d'abord ce document, puis la plateforme, puis le contenu.

Deux règles guident tout le reste :

1. **Le dépôt suffit.** Un apprenant hors ligne qui ouvre un fichier dans VS Code doit pouvoir le lire et le comprendre sans la plateforme.
2. **La plateforme embellit.** Elle transforme les mêmes fichiers en pages interactives (indices dépliables, QCM cliquable, progression), sans contenu supplémentaire.

---

## 1. Types de fichiers

| Fichier | Format | Rendu par la plateforme |
| --- | --- | --- |
| `cours.mdx`, `cours/NN-slug.mdx` | MDX avec front matter YAML | Oui, avec les composants du § 4 |
| `fiche.md` | Markdown avec front matter YAML | Oui : la page du module et de ses chapitres en est tirée |
| `09-projets/*/fiche.md` | Markdown avec front matter YAML (`templates/projet.md`) | Oui : la page de la famille et une page par projet (§ 4 bis) |
| `exercices/*/ENONCE.md`, `projet/ENONCE.md` | Markdown avec front matter YAML | Oui, en Markdown simple (pas de composants) |
| `exercices/*/indices.md` | Markdown avec `<details>` | Oui, chaque `<details>` devient un indice dépliable |
| `qcm.yaml`, `qcm/NN-slug.yaml` | YAML, validé par `templates/qcm.schema.json` | Oui, en QCM interactif |
| `GRILLE.md` | Markdown | Non (lu par l'agent correcteur) |
| `faq.md` | Markdown | Oui, en Markdown simple |
| `<etape>/README.md` | Markdown avec front matter YAML | Oui, comme page de présentation de l'étape |

Pourquoi `.md` et non `.mdx` hors des cours : ces fichiers sont aussi lus par des agents et dans le terminal. Ils restent en Markdown pur, compilé par la plateforme avec l'option `format: "md"`.

---

## 2. Front matter

Tous les fichiers rendus commencent par un bloc YAML entre `---`. La plateforme rejette un fichier dont le front matter est invalide.

### 2.1 Cours (`cours.mdx` ou `cours/NN-slug.mdx`)

```yaml
---
id: "0.1"                  # identifiant du module (programme)
chapitre: 1                # 1 si cours.mdx ; numéro du chapitre si cours/NN-slug.mdx
titre: "Python pour l'ingénieur : types et variables"
parcours: "00-fondations"
objectifs: [O1, O2, O3]    # identifiants définis dans fiche.md
prerequis: []              # identifiants de modules, ex. ["0.1", "0.3"]
statut: brouillon          # brouillon | relu | publie
version: 1                 # entier, +1 à chaque modification de fond
mise_a_jour: 2026-11-24
licence: CC-BY-SA-4.0
---
```

### 2.2 Énoncé (`ENONCE.md`)

```yaml
---
id: "0.1-ex07"             # ou "projet-0", "projet-3"
titre: "Compter les ventes par produit"
module: "0.1"              # absent pour un projet d'étape
objectifs: [O2]
difficulte: 2              # 1 à 3
type: exercice             # exercice | exercice-cle | projet
statut: brouillon
version: 1
mise_a_jour: 2026-11-24
---
```

### 2.3 Fiche (`fiche.md`) et README d'étape

Voir `templates/fiche.md` et les `README.md` des dossiers d'étape.

---

## 3. Markdown autorisé

- Titres : **pas de `#`** dans le corps d'un cours (le titre vient du front matter). Les `<Notion>` produisent les titres de niveau 2. À l'intérieur d'une notion, utilise `###` au plus.
- Listes, tableaux (format GitHub), gras, italique, liens, code en ligne.
- Blocs de code avec langage obligatoire, et nom de fichier facultatif :

  ````
  ```python title="ventes.py"
  sales = [1500, 2000, 1750]
  ```
  ````

  Langages courants : `python`, `bash`, `powershell`, `yaml`, `json`, `sql`, `text` (sortie de programme), `dockerfile`.
- Pour montrer une commande et sa sortie, utilise deux blocs : `bash` pour la commande, `text` pour la sortie.
- **Maths** : syntaxe KaTeX, `$x^2$` en ligne et `$$ ... $$` en bloc sur des lignes séparées. Garde les formules simples ; donne toujours une phrase qui les lit en français.
- **Images** : `![texte alternatif obligatoire](./assets/nom.webp)`. Formats `webp`, `png` ou `svg`, **200 Ko au plus** par image. Pas d'image de texte ou de code : écris-les en texte.
- **Liens internes** : chemins relatifs vers le fichier (`../03-qualite/cours.mdx`). La plateforme les convertit en URL.
- **Liens externes** : toujours avec la langue et, pour une vidéo, la durée : `[Documentation Python (anglais)](https://docs.python.org/3/)`.

### 3.1 Sources et renvois

Le cours est écrit **à partir de sources lues**, pas de mémoire. Chaque fait vérifiable (commande, option, version, chiffre, date, comportement d'un outil, article de loi, résultat de recherche) porte un **renvoi** vers sa source, en note de bas de page GitHub (`remark-gfm`, déjà utilisé par la plateforme) :

```mdx
Sous Windows, Python s'installe avec le Python install manager[^python-doc-windows].

[^python-doc-windows]: Python Software Foundation, [« Using Python on Windows »](https://docs.python.org/3/using/windows.html) (anglais), consultée le 25 novembre 2026.
```

- L'identifiant du renvoi est celui de la source dans `sources.yaml` (minuscules, chiffres, tirets). Une même source peut être citée plusieurs fois avec le même renvoi.
- Les définitions sont groupées **en bas du fichier**. La plateforme les affiche en fin de page ; dans VS Code, elles restent lisibles en bas du fichier.
- Une définition contient : l'éditeur ou l'auteur, un **lien Markdown** vers la page (jamais une URL nue : elle déborde de l'écran d'un téléphone), la langue et la date de consultation.
- Un code exécuté et sa sortie n'ont pas besoin de renvoi : le contrôle les exécute.

Le dossier de recherche de chaque leçon (`sources.yaml` : sources, faits et citations exactes) est gardé dans le dépôt de fabrication, avec toute la trace de production (voir `outils/production/README.md`).

---

## 4. Composants MDX

Les composants sont fournis globalement par la plateforme, à la compilation (`plateforme/src/lib/mdx.tsx`). **Aucun `import` ni `export`** dans les fichiers de contenu. Un exemple complet qui utilise chaque composant se trouve dans `plateforme/demo/00-demo/cours/01-listes.mdx`.

Règle de conception : le contenu d'un composant est **toujours du Markdown placé entre la balise ouvrante et la balise fermante**, jamais une propriété JavaScript. Ainsi, le fichier brut reste lisible. Les propriétés ne servent qu'à des métadonnées courtes (identifiant, titre).

| Composant | Propriétés | Rôle | Rendu brut (VS Code) |
| --- | --- | --- | --- |
| `<Objectifs>` | — | Liste des objectifs, éléments préfixés par l'identifiant (`**O1** — …`) | Liste lisible |
| `<Prerequis>` | — | Liste des prérequis avec liens | Liste lisible |
| `<Pourquoi>` | — | Situation de départ | Texte |
| `<Notion id="…" titre="…">` | `id` (stable, minuscules, tirets), `titre` | Une notion ; produit un titre `##` avec l'ancre `#id` | Balise + texte |
| `<Exemple titre="…">` | `titre` facultatif | Exemple commenté (texte + code + sortie) | Texte + code |
| `<MiniExercice id="…">` | `id` unique dans le fichier | Consigne du mini-exercice | Texte |
| `<Solution>` | — | Correction, placée **dans** `<MiniExercice>`, repliée par défaut | Texte (visible) |
| `<Note>` | — | Information utile | Texte |
| `<Astuce>` | — | Conseil pratique | Texte |
| `<Attention>` | — | Piège ou risque (sécurité, coût, perte de données) | Texte |
| `<Erreur titre="…">` | `titre` : le symptôme court | Erreur fréquente : symptôme, cause, correction | Texte |
| `<Resume>` | — | Points à retenir | Liste |
| `<Vocabulaire>` | — | **Obligatoire**, après `<Resume>`. Tableau des termes techniques introduits dans le cours, colonnes : Terme, Se dit aussi (équivalent français ou anglais), Définition courte, Prononciation (si utile). Conforme à `docs/glossaire.md` | Tableau |
| `<Video url="…" titre="…" duree="…" poids="…">` | toutes obligatoires | Vidéo facultative, jamais nécessaire pour suivre le cours | Balise seule (le texte du cours doit suffire) |

Exemple :

````mdx
<Notion id="listes" titre="Ranger plusieurs valeurs : les listes">

Fatou note ses ventes chaque soir. Elle a besoin de garder **plusieurs nombres dans une seule variable**.
C'est le rôle d'une **liste** (*list*).

<Exemple titre="Les ventes de la semaine">

```python
sales = [12500, 9800, 15000]
print(sales[0])
```

```text
12500
```

</Exemple>

<MiniExercice id="liste-1">

Crée une liste `prices` avec trois prix en FCFA, puis affiche le dernier.

<Solution>

```python
prices = [500, 750, 1000]
print(prices[-1])
```

</Solution>
</MiniExercice>

</Notion>
````

Ajouter un composant : propose-le dans ce document (nom, propriétés, rôle, rendu brut), fais-le valider, implémente-le dans `plateforme/`, puis utilise-le.

---

## 4 bis. Famille de grands projets

Les grands projets forment la section finale du parcours (section 9, dossier `09-projets/`). Ils sont rangés par **familles**, et une famille se lit exactement comme un module :

| Module | Famille de projets |
| --- | --- |
| Le module (`9.1`, `9.2`…) | Une famille : Assistants documentaires, Agents opérationnels… |
| Un chapitre | **Un projet** : un client réel, un problème, une approche différente des autres projets de la famille |
| Une leçon | **Une étape d'expert**, propre à ce projet et vérifiable |

La fiche (`09-projets/<NN-famille>/fiche.md`, modèle `templates/projet.md`) reprend le format d'une fiche de module, avec `nature: projets` dans le front matter et `Exercices` à 0 dans le tableau des chapitres. Elle ajoute deux sections :

- `## Comparatif des projets` : un tableau, une ligne par projet (le problème, l'approche, le point dur, le coût). Il apprend à choisir l'approche selon le problème.
- `## Les projets` : une sous-section `### N. Titre` par projet, numérotée comme son chapitre, avec exactement ces libellés : `**Le client**`, `**Le problème**`, `**Pourquoi ce cas est différent**`, `**L'approche de l'expert**`, `**Alternatives écartées**`, `**Ce qui se vend**`, `**Contraintes réelles**`, `**L'imprévu**`, `**C'est réussi quand**` (sous-liste), `**À revoir**`, `**Pour ton portfolio**`.

**Les leçons à revoir** s'écrivent `module/id-de-la-leçon` (`3.4/citations`). Le build vérifie que chacune existe, puis crée les liens dans les deux sens : la page du projet affiche « Pour réussir, revois », et la page du chapitre de la leçon affiche « À appliquer dans un projet ».

**Les pages** : `/modules/<famille>` (la famille, son comparatif, ses projets) et `/modules/<famille>/<projet>` (le projet), tirées de la fiche ; `/projets` présente toutes les familles puis le projet de chaque étape.

**La commande de vérification** d'un projet est `python outils/check.py 09-projets/<NN-famille>/<NN-titre-du-projet-en-slug>`.

---

## 5. Pièges de syntaxe MDX (à vérifier dans chaque `.mdx`)

MDX est plus strict que Markdown. Ces erreurs cassent la compilation de la page.

| Piège | Problème | Correction |
| --- | --- | --- |
| `<` dans le texte | Lu comme le début d'une balise : `si x < 3` | Mets-le en code : `` `x < 3` ``, ou écris « inférieur à » |
| `{` et `}` dans le texte | Lus comme une expression JavaScript | Mets-les en code (`` `{"nom": "Awa"}` ``) ou échappe-les : `\{` |
| Commentaire HTML `<!-- … -->` | Interdit en MDX | Utilise `{/* commentaire */}` |
| Lien automatique `<https://…>` | Lu comme une balise | Utilise `[texte](https://…)` |
| Pas de ligne vide autour du Markdown dans un composant | Le Markdown n'est pas interprété | Laisse une ligne vide après la balise ouvrante et avant la balise fermante |
| Balise non fermée ou mal imbriquée | Erreur de compilation | Chaque `<X>` a son `</X>` ; `<Solution>` est dans `<MiniExercice>`, pas l'inverse |
| `import` / `export` | Interdit dans le contenu | Les composants sont globaux |

Les blocs de code (entre ```` ``` ````) et le code en ligne sont protégés : `<` et `{` y sont autorisés.

---

## 6. QCM

Format décrit par `templates/qcm.schema.json` et illustré par `templates/qcm.yaml`. La plateforme et `outils/qcm.py` :

- tirent `tirage` questions au hasard dans la banque ;
- mélangent l'ordre des choix ;
- affichent l'explication de chaque choix après la réponse ;
- valident à partir de `seuil` (0,8).

Le texte des questions, des choix et des explications est du **Markdown simple** (code en ligne et blocs de code autorisés, pas de composants).

---

## 7. Médias et poids

- Image : 200 Ko au plus. Total des `assets/` d'un module : 2 Mo au plus.
- Vidéo : jamais dans le dépôt. Lien externe, avec durée et poids, et une version compressée (480p) recommandée.
- Jeu de données : dans le dépôt seulement s'il fait moins de 5 Mo ; sinon, script de téléchargement documenté avec la taille et une somme de contrôle.

---

## 8. Validation automatique

| Commande | Ce qu'elle vérifie |
| --- | --- |
| `python outils/contenu.py <module>` | La fiche (objectifs, notions, exercices, sections), puis chaque cours : front matter, sections et leur ordre, notions conformes à la fiche, pièges MDX, **compilation avec la configuration de la plateforme**, rédaction (phrases, tutoiement, interdits, prix sans date). Avec `--executer` : chaque bloc Python est exécuté et sa sortie comparée au bloc `text` qui suit. |
| `python outils/qcm.py <module> --valider` | Le schéma, la banque (2 fois le tirage), 2 questions par objectif, notions et objectifs existants, identifiants uniques, clé cohérente avec les explications, biais de position et de longueur. |
| `python outils/check.py <chemin> --production` | Voir `outils/README.md`. |
| `python outils/production/visuel.py <module>` | **Tests visuels** : le site est construit (`next build`), chaque chapitre est ouvert dans Chrome sur un téléphone (360 × 740) et un ordinateur : erreurs de rendu, formules, débordement en largeur, ancres, sources en bas de page, images, poids de la page. Captures gardées pour la relecture. |

Un bloc Python qui ne peut pas tourner seul (il lit un fichier, il attend une saisie) commence par la ligne `# ne pas exécuter : <raison>`.
