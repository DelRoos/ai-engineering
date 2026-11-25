# AGENTS.md — Formation AI Engineer (open source)

Ce fichier s'adresse à tout agent IA (Claude Code, Codex, Aider, Cursor…) et à tout humain qui produit du contenu pour ce dépôt. Lis-le en entier avant de créer ou de modifier un fichier.

## 1. Sources de vérité

| Fichier | Rôle | Priorité |
| --- | --- | --- |
| `docs/programme.md` | Le programme : parcours, modules, projets, règles d'évaluation | 1 (fait foi) |
| `AGENTS.md` (ce fichier) | Contexte, contraintes, interdits, circuit de production | 2 |
| `docs/guide-pedagogique.md` | Comment écrire un cours, un exercice, un QCM | 3 |
| `docs/format-contenu.md` | Format technique des fichiers (MDX, front matter, composants) lu par la plateforme | 3 |
| `docs/glossaire.md` | Termes techniques : anglais ou français, genre, définition, prononciation | 3 |
| `templates/` | Modèles à copier pour chaque nouveau fichier | 4 |

En cas de contradiction, le fichier de priorité la plus haute l'emporte. Ne modifie jamais `docs/programme.md` sans demande explicite du mainteneur ; signale plutôt l'incohérence.

## 2. La formation en bref

- **Un seul parcours, du débutant à l'expert** : 7 étapes (0 à 6) et deux pauses de consolidation, sans durée imposée : la connaissance décide du découpage, et chacun avance à son rythme. On saute un module qu'on maîtrise déjà en réussissant son QCM (80 %) et son exercice clé (tests au vert).
- **Objectif de sortie** : concevoir, déployer et maintenir des solutions d'IA en production, prouvé par 6 projets publics dont les tests passent, chacun validé par un examen oral mené par une IA.
- **Rendu** : le contenu est lu directement dans le dépôt (VS Code, terminal, GitHub) **et** affiché par une plateforme Next.js située dans `plateforme/`. Le dépôt seul doit toujours suffire pour suivre toute la formation.

## 3. Public

- **Débutant** : bachelier motivé, aucune expérience en code. Il ne connaît pas le vocabulaire technique. Il lit peut-être sur un écran petit ou fatigué, avec une connexion lente et chère.
- **Développeur ou étudiant en informatique** : il suit le même parcours, mais saute les modules qu'il maîtrise déjà après avoir réussi leur QCM et leur exercice clé.
- **Dans tous les cas** : l'apprenant est **seul**. Personne ne répondra à ses questions. Chaque blocage non anticipé dans le contenu peut provoquer un abandon.

Persona de référence pour les relectures : **Awa, 19 ans, à Bafoussam**, bac scientifique, PC portable Core i3 de 8 Go de RAM sans carte graphique, Windows 10 avec WSL, forfait mobile de 2 Go par semaine partagé en connexion.

## 4. Contraintes non négociables

1. **Autonomie totale.** Aucun mentor, aucune cohorte, aucun correcteur humain. Tout ce qui est évalué l'est par un QCM, un test automatique ou l'agent correcteur IA guidé par une grille.
2. **PC d'entrée de gamme.** Tout doit tourner sur un processeur 64 bits 4 cœurs, **8 Go de RAM**, **sans GPU**, 40 Go de disque (4 Go de RAM pour les étapes 0 et 1). Colab et Kaggle sont une option pour aller plus vite, jamais une obligation.
3. **Coût zéro par défaut.** Outils gratuits et modèles locaux partout. Une API payante n'est proposée que si elle apporte vraiment quelque chose, toujours en option, toujours avec une alternative locale gratuite, avec un budget maximum chiffré et daté.
4. **Français simple.** Cours en français, niveau B1, tutoiement. L'anglais monte par paliers (voir § 7).
5. **Ancrage en Afrique francophone.** Exemples, données et projets tirés de situations réelles : agriculture, santé, mobile money, marchés, transport, administration, langues locales.
6. **Faible connexion.** Tout le contenu est dans le dépôt. Les vidéos sont facultatives. Chaque téléchargement (modèle, jeu de données) est annoncé avec sa taille et ne se fait qu'une fois.
7. **Licences.** Contenus sous CC BY-SA 4.0, code sous MIT. Toute ressource externe intégrée doit avoir une licence compatible, indiquée à côté.

## 5. Règles de rédaction (résumé)

Le détail est dans `docs/guide-pedagogique.md`. L'essentiel :

- **Le pourquoi avant le comment.** Chaque notion commence par le problème concret qu'elle résout.
- **Une notion à la fois** : explication, puis exemple, puis mini-exercice.
- **Objectifs vérifiables** : chaque objectif du cours est évalué par au moins un exercice ou une question de QCM.
- **Phrases courtes** (20 mots au plus), chaque terme technique défini à sa première apparition.
- **Vocabulaire du métier en anglais.** Les termes techniques que les professionnels disent en anglais restent en anglais, sans traduction forcée (*dataset*, *prompt*, *commit*, *pull request*, *overfitting*), dans des phrases à la grammaire française. Objectif : un apprenant qui part à l'international reconnaît les mots du métier même s'il parle mal anglais. Catégories, genre et prononciation de chaque terme : `docs/glossaire.md` (à consulter et compléter). Règles : `docs/guide-pedagogique.md` § 3.1.
- **Tutoiement** partout. Pas d'écriture inclusive avec point médian (lisibilité) ; varie plutôt les prénoms et les genres dans les exemples.
- **Code** : Python 3.11+, style PEP 8, noms de variables et de fonctions en anglais dès l'étape 0. Commentaires en français à l'étape 0, en anglais dès l'étape 1. Les messages d'erreur des tests destinés à l'apprenant sont toujours en français.
- **Contexte local** : prix en FCFA (XAF ou XOF) ou dans la monnaie du pays, villes et prénoms variés de plusieurs pays (Cameroun, Sénégal, Côte d'Ivoire, RDC, Bénin, Burkina Faso, Mali, Togo, Gabon, Madagascar, Maroc, Tunisie…). Montre des situations normales et professionnelles, jamais misérabilistes ni caricaturales.
- **Format** : respecte `docs/format-contenu.md` (front matter, composants MDX, pièges de syntaxe).

## 6. Interdits

- Renvoyer vers un mentor, un formateur, « ton professeur » ou toute aide humaine obligatoire. Seuls GitHub Discussions (entraide facultative) et l'agent IA sont mentionnables.
- Exiger un GPU, une carte bancaire, un abonnement ou une dépense, même petite.
- Proposer une API payante sans alternative locale gratuite décrite dans le même document.
- Citer un prix, une version de modèle, un classement ou une offre gratuite **sans date** (`(prix relevé en novembre 2026)`).
- Inventer une référence, un article de loi, un jeu de données, une URL, une fonction de bibliothèque ou un résultat chiffré. Si tu n'es pas sûr, écris `TODO(vérifier): …` et signale-le.
- Recommander un assistant de code IA pendant l'**étape 0** : le débutant doit d'abord apprendre à écrire et à lire du code seul. Les assistants sont enseignés à partir du module 1.1.
- Écrire un test qui se contourne trivialement (vérifier seulement le type de retour, un `print`, ou une valeur codée en dur dans l'énoncé).
- Donner le code complet de la solution dans un énoncé ou un indice. Les solutions vivent uniquement dans les dossiers `solution/`.
- Utiliser des exemples hors contexte par défaut : neige, dollars US, baseball, prénoms exclusivement occidentaux, villes européennes ou américaines comme seul décor.
- Introduire une dépendance lourde (plus de 500 Mo installée) ou un modèle qui dépasse 6 Go de RAM à l'exécution sans le signaler et sans alternative plus légère.
- Mettre un secret, une clé d'API ou des données personnelles réelles dans le dépôt.
- Mettre du contenu réservé à la plateforme : tout ce que la plateforme affiche doit exister dans le dépôt, lisible sans elle.

## 7. Paliers d'anglais

Dès l'étape 0, chaque cours emploie le vocabulaire technique en anglais et se termine par un encadré `<Vocabulaire>`. Ce qui monte par paliers, c'est la part d'anglais dans ce que l'apprenant **produit** :

| Étape | Langue du cours | Code et documentation produits par l'apprenant |
| --- | --- | --- |
| Étape 0 | Français avec les termes techniques en anglais ; liens vers la documentation officielle en anglais | Noms en anglais, commentaires et README en français |
| Étapes 1–2 | Français avec les termes techniques en anglais | README et commentaires en anglais |
| Étapes 3–4 | Français avec les termes techniques en anglais | Rapports en anglais, examen oral à moitié en anglais |
| Étapes 5–6 | Français, extraits et consignes en anglais | Examens oraux, vidéos et entretiens simulés en anglais |

## 8. Organisation du dépôt

```
ai-engineer/
├── AGENTS.md, CLAUDE.md
├── docs/                      # programme, guide pédagogique, format du contenu
├── templates/                 # modèles à copier
├── 00-fondations/ … 06-capstone/   # un dossier par étape
├── outils/                    # qcm.py, check.py, progression.py, correcteur-ia/
└── plateforme/                # application Next.js qui affiche le contenu
```

Dossiers d'étape : `00-fondations`, `01-ml`, `02-deep-learning`, `03-llm`, `04-production`, `05-securite`, `06-capstone`. Les grands projets, section finale du parcours, sont dans `07-projets`.

### Structure d'un module

```
<etape>/<NN-nom-court>/
├── fiche.md                   # fiche du module (étape 1 du circuit)
├── cours.mdx                  # le cours (module d'un seul chapitre)
├── cours/                     # OU un fichier par chapitre (un chapitre = un thème) si le module en a plusieurs
│   ├── 01-<slug>.mdx
│   └── 02-<slug>.mdx
├── assets/                    # images du cours (légères, texte alternatif obligatoire)
├── qcm.yaml                   # QCM du module (ou qcm/01-<slug>.yaml, un par chapitre)
├── faq.md                     # erreurs fréquentes remontées par les relectures (facultatif)
└── exercices/
    └── <NN-nom-court>/
        ├── ENONCE.md
        ├── indices.md
        ├── starter/           # code de départ donné à l'apprenant
        ├── solution/          # solution de référence (ne pas ouvrir avant d'avoir essayé)
        └── tests/             # tests pytest
```

### Structure d'un projet d'étape

```
<etape>/projet/
├── ENONCE.md                  # cahier des charges
├── GRILLE.md                  # grille de l'agent correcteur et banque de questions d'oral
├── starter/
├── solution/                  # solution de référence, pour valider les tests en CI
└── tests/
```

### Structure d'une famille de grands projets

Les grands projets (étape 7) sont rangés par familles. Une famille se construit comme un module : sa fiche (`templates/projet.md`, `nature: projets`) liste ses projets comme des chapitres, et les étapes de chaque projet comme des leçons. Chaque projet a ensuite son dossier.

```
07-projets/<NN-famille>/
├── fiche.md                   # projets, comparatif, client, approche, ce qui se vend, critères, leçons à revoir
└── <NN-titre-du-projet>/
    ├── ENONCE.md              # cahier des charges détaillé, étape par étape
    ├── indices.md
    ├── donnees/               # données fictives réalistes (catalogue, scénarios, documents)
    ├── starter/
    ├── tests/                 # dont les tests qui rejouent l'imprévu
    ├── GRILLE.md              # grille de l'agent correcteur et banque de questions d'oral
    └── solution/
```

Le module 0.0 « Préparer son PC » se trouve dans `00-fondations/00-preparer-son-pc/`.

### Identifiants

- Module : numéro du programme (`0.1`, `3.4`). Dossier : `NN-nom-court` en minuscules, sans accents, mots séparés par des tirets (`04-rag`).
- Objectif : `O1`, `O2`… unique dans le module. Notion : identifiant court en minuscules (`dictionnaires`).
- Exercice : `<module>-exNN` (`0.1-ex07`). Question de QCM : `<module>-qNN` (`3.4-q12`).
- Les identifiants publiés ne changent plus : la plateforme et `progression.py` s'en servent.

## 9. Circuit de production d'un module

Un module passe par 8 étapes, **dans l'ordre**. On ne commence pas une étape tant que la précédente n'a pas atteint son critère de fin. L'avancement est coché dans `fiche.md` (section « Circuit »).

| # | Étape | Entrée | Sortie | Critère de fin |
| --- | --- | --- | --- | --- |
| 1 | **Fiche** | `docs/programme.md` | `fiche.md` (depuis `templates/fiche.md`) | Objectifs vérifiables, notions ordonnées, chaque objectif relié à au moins une évaluation prévue, ressources matérielles estimées. **Validée par le mainteneur.** |
| 2 | **Solution et tests** | fiche | `exercices/*/solution/`, `exercices/*/tests/`, code des exemples du cours | Les tests passent sur la solution, échouent sur le starter, et respectent les limites de temps et de mémoire (§ 10). |
| 3 | **Cours** | fiche, solutions | `cours.mdx` ou `cours/*.mdx` (depuis `templates/cours.mdx`) | Structure du guide pédagogique respectée, chaque objectif couvert, tous les exemples de code exécutés et vérifiés. |
| 4 | **Exercices** | cours, tests | `ENONCE.md`, `indices.md`, `starter/` pour chaque exercice | L'énoncé suffit pour réussir sans voir la solution ; 3 niveaux d'indices ; messages d'échec des tests compréhensibles. |
| 5 | **QCM** | cours | `qcm.yaml` (depuis `templates/qcm.yaml`) | Valide contre `templates/qcm.schema.json` ; banque d'au moins 2 fois le nombre de questions tirées ; chaque objectif évalué. |
| 6 | **Grille** | fiche, exercices | `GRILLE.md` | Obligatoire pour un projet d'étape. Pour un module : seulement si un exercice a un livrable non vérifiable par tests (rapport, vidéo, protocole) ; sinon cocher « sans objet ». |
| 7 | **Relecture élève** | tout le module | Corrections, et `faq.md` si besoin | Un relecteur qui joue la persona Awa (§ 3) suit le cours de bout en bout, fait les exercices sans ouvrir `solution/` et note chaque blocage. Plus aucun blocage non résolu. |
| 8 | **Relecture expert** | tout le module | Corrections, statut `relu` dans les front matter | Exactitude technique, versions et prix datés, sécurité, licences, conformité à `docs/format-contenu.md` et à `docs/glossaire.md`, toutes les vérifications automatiques au vert. |

Après l'étape 8, seul le mainteneur passe le statut à `publie`.

Les projets d'étape suivent le même circuit : la fiche est remplacée par `ENONCE.md` en brouillon, et l'étape 6 (grille) est obligatoire.

## 10. Exigences techniques des exercices et projets

- Tests avec **pytest**, lint avec **ruff**. Lancement : `python outils/check.py <chemin>`.
- Chaque test d'exercice tourne en **moins de 30 secondes** et sous **1 Go de RAM** sur la machine minimale, sauf exception justifiée dans la fiche (entraînement de modèle : limite indiquée dans l'énoncé).
- Pas d'accès réseau pendant les tests : les données nécessaires sont dans le dépôt (petits fichiers) ou téléchargées une fois par une commande documentée.
- Dépendances épinglées (`requirements.txt` ou `pyproject.toml`) ; PyTorch en version CPU.
- Le starter doit s'exécuter sans erreur de syntaxe et faire échouer les tests avec un message utile, pas avec une trace incompréhensible.
- Chaque projet contient son point de contrôle sécurité et éthique (voir le tableau de l'étape 5 dans le programme).

## 11. Avant de terminer une tâche

- [ ] Les fichiers créés suivent le modèle de `templates/` correspondant.
- [ ] Aucun interdit du § 6 n'est enfreint.
- [ ] Les tests passent sur `solution/` et échouent sur `starter/`.
- [ ] Les `TODO(vérifier)` restants sont listés dans ton compte rendu.
- [ ] La case de l'étape du circuit est cochée dans `fiche.md`.
