# Guide pédagogique

Ce guide dit **comment écrire** un cours, un exercice, des indices et un QCM. Le format technique des fichiers (front matter, composants MDX) est décrit dans `docs/format-contenu.md`. Les contraintes générales et les interdits sont dans `AGENTS.md`.

Rappel du contexte : l'apprenant est **seul**, sur un PC modeste, souvent avec une connexion lente. Le cours doit répondre à ses questions **avant** qu'il se les pose.

---

## 1. Structure obligatoire d'un cours

Chaque fichier de cours (`cours.mdx` ou `cours/NN-slug.mdx`) contient ces sections, dans cet ordre (les sections 1 à 7 sont obligatoires) :

| # | Section | Composant MDX | Contenu |
| --- | --- | --- | --- |
| 1 | Objectifs | `<Objectifs>` | 3 à 6 objectifs vérifiables (voir § 1.1) |
| 2 | Prérequis | `<Prerequis>` | Ce qu'il faut savoir avant, avec un lien vers le module concerné |
| 3 | Pourquoi | `<Pourquoi>` | Le problème concret que ce cours permet de résoudre |
| 4 | Notions | `<Notion>` (une par notion) | Explication → exemple → mini-exercice |
| 5 | Erreurs fréquentes | `<Erreur>` (une par erreur) | Symptôme, cause, correction |
| 6 | Résumé | `<Resume>` | 5 à 10 points à retenir |
| 7 | Vocabulaire | `<Vocabulaire>` | Les termes techniques introduits dans le cours (§ 3.1) |
| 8 | Pour aller plus loin | (titre `##` simple) | Facultatif : 1 à 3 ressources gratuites, avec leur langue et leur durée |

La plateforme ajoute elle-même le lien vers le QCM et les exercices : ne les recopie pas dans le cours.

### 1.1 Objectifs vérifiables

Un objectif décrit ce que l'apprenant **saura faire**, avec un verbe d'action observable.

- Verbes autorisés : écrire, calculer, coder, choisir, justifier, expliquer, comparer, corriger, mesurer, déployer, repérer, tester.
- Verbes interdits : comprendre, connaître, savoir, découvrir, se familiariser, appréhender (on ne peut pas les vérifier).
- Chaque objectif a un identifiant (`O1`, `O2`…) et est évalué par au moins un exercice ou une question de QCM. La fiche du module contient la table de correspondance.

| ❌ Mauvais | ✅ Bon |
| --- | --- |
| Comprendre les dictionnaires | Écrire une fonction qui compte les ventes par produit avec un dictionnaire |
| Connaître le RAG | Expliquer en 3 phrases pourquoi un RAG cite ses sources, et coder un RAG qui refuse une question hors sujet |

### 1.2 Prérequis

- Liste courte. Chaque prérequis renvoie vers le module où il est enseigné (`voir module 0.3`).
- Si un prérequis est très ancien (plus de 2 étapes avant), ajoute un rappel de 2 ou 3 lignes au lieu d'un simple renvoi.

### 1.3 Le pourquoi avant le comment

Commence par une situation concrète, ancrée en Afrique francophone, où l'apprenant **ressent le besoin** de la notion avant de la voir.

> *Mauvais départ :* « Une liste est une structure de données ordonnée et mutable. »
>
> *Bon départ :* « Fatou vend des beignets au marché de Sandaga. Chaque soir, elle note ses ventes de la journée. Au bout d'un mois, elle a 30 nombres. Comment les ranger dans un programme pour calculer sa meilleure journée ? »

### 1.4 Une notion à la fois

Chaque `<Notion>` suit toujours ce rythme :

1. **Explication** : l'idée, en langage simple, avec une analogie si elle aide. Introduis le terme technique **après** l'idée, en gras, selon sa catégorie (§ 3.1) : « un **dataset** (en français : jeu de données) » ou « une **liste** (*list*) ».
2. **Exemple** (`<Exemple>`) : un code ou un calcul complet, court (15 lignes au plus de préférence), exécutable tel quel, avec sa sortie affichée. Il reprend le fil rouge du cours si possible.
3. **Mini-exercice** (`<MiniExercice>`) : une petite tâche de 2 à 10 minutes, faisable dans la tête, sur papier ou dans un terminal Python, suivie de sa correction repliée (`<Solution>`).

Règles :

- **Une seule idée nouvelle par notion.** Si l'exemple utilise une idée pas encore vue, réordonne les notions.
- **5 à 8 notions** par fichier de cours (un chapitre).
- Pour une notion abstraite (maths, attention, gradient), montre d'abord un calcul à la main sur de petits nombres, puis le code NumPy.

### 1.5 Erreurs fréquentes

Liste les 3 à 6 erreurs que fait vraiment un débutant sur ce sujet. Pour chacune :

- **Symptôme** : ce que l'apprenant voit (message d'erreur exact, résultat faux).
- **Cause** : pourquoi ça arrive.
- **Correction** : quoi changer, avec le code corrigé.

Les relectures (étapes 7 et 8 du circuit) enrichissent cette section et la `faq.md` du module.

### 1.6 Résumé

5 à 10 puces courtes. Chaque puce se lit seule. Pas de notion nouvelle dans le résumé.

---

## 2. Longueur

La longueur suit la connaissance à transmettre, pas un temps fixé : un chapitre est un thème cohérent, et un module a autant de chapitres que son sujet l'exige.

| Élément | Longueur cible |
| --- | --- |
| Fichier de cours (un chapitre) | 6 000 mots au plus, mini-exercices compris |
| Notion | 300 à 800 mots |
| Pourquoi | 100 à 250 mots |
| Exemple de code | 15 lignes au plus de préférence, 40 au maximum |
| Phrase | 20 mots au plus |
| Paragraphe | 5 phrases au plus |

Un module de plusieurs chapitres a un fichier par chapitre dans `cours/` (voir `AGENTS.md` § 8). Si un fichier dépasse 6 000 mots ou 8 notions, découpe-le en deux chapitres.

---

## 3. Niveau de langue

- **Niveau B1** : un francophone qui n'a pas fait d'études supérieures doit comprendre sans dictionnaire.
- **Tutoiement** partout.
- Phrases au présent, à la voix active. Sujet, verbe, complément.
- Pas d'idiomes ni d'expressions familières régionales (« c'est du gâteau », « avoir un coup de mou »).
- Pas de jargon non défini. Chaque terme technique est défini à sa première apparition dans le fichier, même s'il l'a été dans un module précédent (rappel en une phrase).
- Le vocabulaire technique suit le § 3.1 : l'anglais d'abord.
- Évite les longues listes de mises en garde. Une `<Attention>` par notion au plus.
- Chiffres : espace fine ou espace pour les milliers (`1 000`), virgule décimale dans le texte (`0,5`), point décimal dans le code (`0.5`).

### 3.1 Vocabulaire technique : l'anglais d'abord

Le métier se pratique en anglais : documentation, messages d'erreur, offres d'emploi, entretiens, équipes à distance. Un apprenant qui part à l'international doit **reconnaître et employer les mots du métier**, même s'il parle mal anglais. Le cours utilise donc les termes techniques anglais tels que les professionnels les disent, **dans des phrases françaises**.

**Trois catégories de mots**, fixées une fois pour toutes dans `docs/glossaire.md` :

| Catégorie | Quand | Comment l'écrire à la première apparition | Ensuite |
| --- | --- | --- | --- |
| **A. Terme anglais** | Le mot du métier est anglais, même chez les développeurs francophones (*dataset*, *prompt*, *commit*, *bug*, *overfitting*) | En gras, puis définition en français simple. Équivalent français entre parenthèses seulement s'il est réellement utilisé : « un **dataset** (en français : jeu de données) est… » | Le terme anglais, en texte normal, sans traduction |
| **B. Mot transparent** | Le mot français ressemble au mot anglais ou est d'usage courant (*fonction*, *variable*, *classe*, *bibliothèque*, *dépôt*) | En gras en français, l'anglais en italique entre parenthèses : « une **fonction** (*function*) » | Le mot français |
| **C. Mot courant** | Mot de la vie de tous les jours, non technique | En français | En français |

Règles :

- **Consulte et complète `docs/glossaire.md`** avant d'écrire. Un même terme a toujours la même catégorie et le même genre dans toute la formation (*le* dataset, *la* pull request).
- **Grammaire française, mots anglais.** Seuls les noms techniques sont en anglais. Pas de phrases en franglais (« on va checker si le run est OK »).
- **Les actions** : une tournure française avec le nom anglais (« faire un commit », « lancer le build », « faire un push »). Pas de verbe inventé (« commiter »), sauf ceux listés dans le glossaire.
- **Pluriel** : on ajoute un *s* (des prompts, des datasets), sauf aux mots déjà terminés par *s* ou *x*.
- **Pas plus de 3 termes anglais nouveaux par notion**, pour ne pas noyer le débutant.
- **Chaque cours se termine par un encadré `<Vocabulaire>`** (voir `docs/format-contenu.md`) qui liste les termes de catégorie A et B introduits, avec leur définition courte. Il sert de mémo et de révision pour les entretiens.
- **Prononciation** : pour les mots que les francophones prononcent souvent mal (*cache*, *epoch*), le glossaire donne une prononciation approchée. Reprends-la dans l'encadré `<Vocabulaire>`.

---

## 4. Ancrage local

- Chaque cours a un **fil rouge** : une situation concrète qui revient dans plusieurs notions (une coopérative de cacao, une pharmacie de quartier, un service de mobile money, une gare routière…).
- Varie les pays, les villes, les prénoms, les genres et les métiers d'un cours à l'autre.
- Utilise des ordres de grandeur réalistes (prix en FCFA, populations, rendements agricoles). Si tu cites un chiffre réel, donne la source et l'année. Sinon, précise qu'il est inventé pour l'exemple.
- Montre des personnes compétentes dans des situations normales. Pas de misérabilisme, pas de clichés.

---

## 5. Exercices

Un exercice est un dossier `exercices/NN-nom/` (modèle : `templates/exercice/`).

### 5.1 Règles

1. **Un objectif principal par exercice**, indiqué dans l'énoncé (`Objectif évalué : O2`).
2. **Progression** : les exercices d'un module vont du plus guidé au plus libre. Le premier se réussit en recopiant presque un exemple du cours, et le dernier demande de combiner plusieurs notions.
3. **Énoncé autonome** : on doit pouvoir réussir avec le cours et l'énoncé seulement. Donne la signature exacte des fonctions, les formats d'entrée et de sortie, et au moins un exemple d'appel avec le résultat attendu.
4. **Difficulté** indiquée (1 à 3), sans durée : chacun avance à son rythme.
5. **Tests qui enseignent** : chaque assertion a un message en français qui dit ce qui était attendu, ce qui a été obtenu et, si possible, une piste (`« Pour [3, 5], la moyenne attendue est 4, tu as renvoyé 8. As-tu divisé par le nombre d'éléments ? »`).
6. **Tests robustes** : teste plusieurs cas, dont les cas limites (liste vide, valeur manquante, texte avec accents). Utilise des valeurs différentes de celles de l'énoncé pour qu'on ne puisse pas les coder en dur.
7. **Ressources** : moins de 30 secondes et moins de 1 Go de RAM par exécution des tests, sans réseau (voir `AGENTS.md` § 10).
8. **Starter** : il contient les signatures, les docstrings et `raise NotImplementedError("À toi de jouer : …")`. Il s'exécute sans erreur de syntaxe.
9. **Solution** : simple et lisible, au niveau du module (n'utilise pas une notion des modules suivants). Elle sert de modèle de style.

### 5.2 Exercice clé

L'« exercice clé » du programme est le dernier exercice du module. Il reprend exactement la consigne du programme. S'il a un livrable non testable (rapport, vidéo, protocole de collecte), il a aussi une `GRILLE.md`.

---

## 6. Indices progressifs

Chaque exercice a un fichier `indices.md` avec **3 niveaux**, repliés par défaut :

| Niveau | Rôle | Exemple (calcul d'une moyenne) |
| --- | --- | --- |
| 1 — Piste | Rappelle la notion utile ou pose une question qui débloque | « Quelles sont les deux informations dont tu as besoin pour calculer une moyenne ? » |
| 2 — Méthode | Décrit les étapes en français, sans code | « 1. Additionne tous les éléments. 2. Compte-les. 3. Divise la somme par le nombre. Pense au cas de la liste vide. » |
| 3 — Presque la solution | Donne un squelette avec des trous, ou une ligne clé | « `total = sum(...)` puis vérifie `if len(...) == 0` avant de diviser. » |

Règles :

- Jamais le code complet de la solution.
- Chaque niveau est utile seul : ne renvoie pas à un niveau précédent.
- Ajoute un indice sur l'erreur la plus fréquente si la relecture élève l'a révélée (« Si tu obtiens `ZeroDivisionError`… »).

---

## 7. QCM

Format : `qcm.yaml`, validé par `templates/qcm.schema.json`. Corrigé automatiquement par `outils/qcm.py` et par la plateforme.

### 7.1 Règles générales

- **Seuil** : 80 % de bonnes réponses. Nombre de tentatives illimité, avec des questions tirées au hasard.
- **Banque** : au moins **2 fois** le nombre de questions tirées (`tirage`), pour que deux tentatives se ressemblent peu. Exemple : 10 questions tirées dans une banque de 20 à 30.
- **Couverture** : chaque objectif du cours a au moins 2 questions dans la banque.
- **Difficulté** : environ 30 % de niveau 1 (rappel), 50 % de niveau 2 (application), 20 % de niveau 3 (analyse d'un code ou d'une situation).

### 7.2 Écrire une bonne question

- **Une seule notion** par question.
- Question courte, sans double négation, sans piège sur la formulation.
- Privilégie les questions qui demandent de **raisonner** : « Que va afficher ce code ? », « Quelle métrique choisir pour ce cas ? », « Où est la fuite de données ? ».
- 3 à 5 choix, de longueur comparable.
- **Distracteurs plausibles**, tirés des erreurs fréquentes du cours. Un mauvais choix absurde n'évalue rien.
- Interdits : « toutes les réponses ci-dessus », « aucune des réponses », « A et B », questions sur un détail par cœur (numéro de version, date) sauf si c'est un objectif du cours.
- Type `multiple` (plusieurs bonnes réponses) : à utiliser avec parcimonie, et l'énoncé le dit (« Coche toutes les bonnes réponses »).

### 7.3 Explications

Chaque choix a une **explication** d'une ou deux phrases, affichée après la réponse :

- pour une bonne réponse : pourquoi c'est juste ;
- pour une mauvaise : pourquoi c'est faux et quelle confusion elle révèle, avec un renvoi à la notion du cours (identifiant `notion`).

L'explication est la vraie correction : c'est elle qui fait apprendre l'apprenant seul.

---

## 8. Grilles de l'agent correcteur

Format : `GRILLE.md` (modèle : `templates/GRILLE.md`).

- Note sur 20, validation à **14/20**.
- Critères observables : l'agent doit pouvoir dire « présent / absent » ou citer une ligne de code. Pas de critère du type « code élégant ».
- Ne note pas ce que les tests vérifient déjà : la grille porte sur la lisibilité, les choix techniques, la documentation, le point de contrôle sécurité et éthique, et les livrables non testables.
- Banque de **15 questions d'oral** au moins, dont l'agent tire 5 à 10. Validation à **70 %**. Langue selon le palier d'anglais de l'étape.

---

## 9. Liste de contrôle avant la relecture

- [ ] Objectifs vérifiables, tous reliés à une évaluation.
- [ ] Structure du § 1 respectée, dans l'ordre.
- [ ] Une idée nouvelle par notion ; chaque notion a explication, exemple et mini-exercice.
- [ ] Tous les exemples de code ont été exécutés ; les sorties affichées sont les vraies sorties.
- [ ] Longueur dans les cibles du § 2.
- [ ] Phrases courtes, tutoiement.
- [ ] Termes techniques conformes à `docs/glossaire.md` (catégorie, genre) ; nouveaux termes ajoutés au glossaire ; encadré `<Vocabulaire>` présent.
- [ ] Fil rouge ancré en Afrique francophone, sans cliché.
- [ ] Aucun interdit d'`AGENTS.md` § 6.
- [ ] Format conforme à `docs/format-contenu.md`.
