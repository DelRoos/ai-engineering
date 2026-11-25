---
id: "0.4"
titre: "Maths pour l'IA"
parcours: "00-fondations"
promesse: "Comprendre les maths qui font marcher l'IA : vecteurs et matrices, dérivées et gradient, probabilités et statistiques. Toujours à la main sur de petits nombres, puis avec NumPy."
question_saut: "Tu maîtrises déjà ces maths et NumPy ?"
qcm: true
prerequis: ["0.1"]
statut: brouillon
version: 1
mise_a_jour: 2026-11-25
---

# Fiche du module 0.4 — Maths pour l'IA

## Extrait du programme

- **Contenu** : Algèbre linéaire (vecteurs, matrices, produit scalaire), dérivées et gradient, probabilités et statistiques (moyenne, variance, lois, théorème de Bayes) — toujours avec NumPy
- **Exercice clé** : Coder une descente de gradient à la main

## Objectifs vérifiables

| Id | À la fin, l'apprenant sait… | Évalué par |
| --- | --- | --- |
| O1 | Représenter des données par des vecteurs NumPy et calculer norme, produit scalaire et similarité. | ex01 à ex04, ex05 à ex08, qcm |
| O2 | Manipuler des matrices et calculer un produit matriciel, à la main puis avec NumPy. | ex01 à ex04, ex09 à ex13, ex14 à ex16, qcm |
| O3 | Calculer une dérivée, à la main et numériquement, et l'interpréter comme une pente. | ex17 à ex21, ex22 à ex25, qcm |
| O4 | Calculer un gradient et coder une descente de gradient. | ex26 à ex29, ex30 à ex33, exercice clé (ex34), qcm |
| O5 | Calculer des probabilités, dont des probabilités conditionnelles avec le théorème de Bayes. | ex35 à ex39, ex40 à ex42, qcm |
| O6 | Décrire un jeu de données avec des statistiques et repérer ce qui cloche. | ex43 à ex45, ex46 à ex50, qcm |

## Chapitres

| Chapitre | Titre | Exercices |
| --- | --- | --- |
| 1 | Les données en nombres, avec NumPy | 4 |
| 2 | Les vecteurs | 4 |
| 3 | Les matrices | 5 |
| 4 | Les matrices au cœur de l'IA | 3 |
| 5 | Fonctions et dérivées | 5 |
| 6 | Composer et chercher un minimum | 4 |
| 7 | Le gradient | 4 |
| 8 | La descente de gradient | 5 |
| 9 | Les probabilités | 5 |
| 10 | Variables aléatoires et lois | 3 |
| 11 | Décrire des données | 3 |
| 12 | Relations et échantillons | 5 |

## Notions, dans l'ordre

| Chapitre | Id de la notion | Notion | Objectif |
| --- | --- | --- | --- |
| 1 | `donnees-nombres` | Des données aux nombres : pourquoi les vecteurs | O1 |
| 1 | `notation-somme` | Lire les formules : indices et notation Σ | O1 |
| 1 | `numpy-tableaux` | Tes premiers tableaux NumPy | O1 |
| 1 | `calcul-vectorise` | Calculer sur tout un tableau d'un coup | O1 |
| 1 | `forme-indices` | Forme, indices et découpage d'une matrice | O2 |
| 2 | `operations-vecteurs` | Additionner des vecteurs, les multiplier par un nombre | O1 |
| 2 | `norme` | La longueur d'un vecteur : la norme | O1 |
| 2 | `produit-scalaire` | Le produit scalaire | O1 |
| 2 | `similarite-cosinus` | Mesurer la ressemblance : la similarité cosinus | O1 |
| 3 | `matrice` | Une matrice, c'est un tableau de données | O2 |
| 3 | `broadcasting` | Opérations élément par élément et broadcasting | O2 |
| 3 | `matrice-vecteur` | Le produit d'une matrice par un vecteur | O2 |
| 3 | `produit-matrices` | Le produit de deux matrices | O2 |
| 3 | `transposee` | La transposée | O2 |
| 3 | `inverse` | Résoudre un système d'équations : l'inverse d'une matrice | O2 |
| 4 | `couche-neurones` | Une couche de neurones, c'est un produit de matrices | O2 |
| 4 | `tenseurs` | Au-delà de 2 dimensions : les tenseurs | O2 |
| 4 | `valeurs-propres` | Valeurs propres et vecteurs propres : l'intuition | O2 |
| 5 | `tracer-fonction` | Tracer une fonction avec matplotlib | O3 |
| 5 | `exp-log` | Exponentielle et logarithme | O3 |
| 5 | `sigmoide` | La sigmoïde : transformer un score en probabilité | O3 |
| 5 | `pente` | La pente d'une droite | O3 |
| 5 | `derivee` | La dérivée : la pente en un point | O3 |
| 5 | `regles-derivation` | Les règles de dérivation utiles | O3 |
| 5 | `derivee-numerique` | Calculer une dérivée numériquement | O3 |
| 6 | `regle-chaine` | Dériver une composition : la règle de la chaîne | O3 |
| 6 | `minimum` | Trouver le minimum d'une fonction | O3 |
| 6 | `minima-locaux` | Minimum local, minimum global | O3 |
| 7 | `plusieurs-variables` | Les fonctions de plusieurs variables | O4 |
| 7 | `derivees-partielles` | Les dérivées partielles | O4 |
| 7 | `gradient` | Le gradient : la direction de la plus forte pente | O4 |
| 8 | `fonction-perte` | Mesurer l'erreur : la fonction de perte | O4 |
| 8 | `descente-gradient` | La descente de gradient, pas à pas | O4 |
| 8 | `taux-apprentissage` | Le taux d'apprentissage | O4 |
| 8 | `gradient-vectorise` | Calculer le gradient de toutes les données d'un coup | O4 |
| 8 | `sgd` | Par petits paquets : la descente de gradient stochastique | O4 |
| 8 | `ajuster-droite` | Ajuster une droite aux données par descente de gradient | O4 |
| 9 | `probabilite` | Le hasard en chiffres : la probabilité d'un événement | O5 |
| 9 | `simuler-hasard` | Simuler le hasard avec NumPy | O5 |
| 9 | `probabilite-conditionnelle` | Indépendance et probabilité conditionnelle | O5 |
| 9 | `bayes` | Le théorème de Bayes | O5 |
| 10 | `esperance` | Variables aléatoires et espérance | O5 |
| 10 | `binomiale` | Les lois de Bernoulli et binomiale | O5 |
| 10 | `densite` | Les lois continues : la densité de probabilité | O5 |
| 10 | `loi-normale` | La loi normale | O5 |
| 10 | `entropie` | Mesurer l'incertitude : l'entropie | O5 |
| 11 | `moyenne-mediane` | Résumer des données : moyenne, médiane, mode | O6 |
| 11 | `variance` | Mesurer la dispersion : variance et écart type | O6 |
| 11 | `quantiles` | Quantiles et valeurs aberrantes | O6 |
| 11 | `histogrammes` | Histogrammes et distributions | O6 |
| 12 | `covariance` | Varier ensemble : la covariance | O6 |
| 12 | `correlation` | La corrélation entre deux variables | O6 |
| 12 | `echantillon` | Échantillon et population | O6 |
| 12 | `tcl` | Pourquoi les moyennes se ressemblent : le théorème central limite | O6 |
| 12 | `marge-erreur` | La marge d'erreur d'une moyenne | O6 |
| 12 | `test-hypothese` | Une différence est-elle due au hasard ? Le test d'hypothèse | O6 |
| 12 | `normaliser` | Mettre les données à la même échelle | O6 |

## Vocabulaire du module

| Terme | Catégorie (A anglais / B transparent) | Notion où il apparaît |
| --- | --- | --- |
| vecteur, matrice | B | `donnees-nombres`, `matrice` |
| NumPy, array | A | `numpy-tableaux` |
| norme, produit scalaire (dot product) | A | `norme`, `produit-scalaire` |
| similarité cosinus (cosine similarity) | A | `similarite-cosinus` |
| shape, broadcasting | A | `forme-indices`, `broadcasting` |
| transposée | B | `transposee` |
| dérivée, pente | B | `derivee` |
| règle de la chaîne (chain rule) | A | `regle-chaine` |
| gradient | B | `gradient` |
| descente de gradient (gradient descent) | A | `descente-gradient` |
| taux d'apprentissage (learning rate) | A | `taux-apprentissage` |
| fonction de perte (loss), MSE | A | `fonction-perte` |
| probabilité conditionnelle | B | `probabilite-conditionnelle` |
| espérance, variance, écart type | B | `esperance`, `variance` |
| loi normale (distribution) | A | `loi-normale` |
| quantile, outlier | A | `quantiles` |
| corrélation | B | `correlation` |
| normalisation, z-score | A | `normaliser` |

## Fil rouge et ancrage local

- **Situation** : une coopérative de cacao de Daloa, en Côte d'Ivoire, veut mieux prévoir ses récoltes. Tu compares des parcelles avec des vecteurs, tu relies la pluie à la récolte avec une droite ajustée par descente de gradient, et tu estimes le risque de pourriture brune des cabosses.
- **Personnages** : Yao, technicien agricole de la coopérative, et les planteurs qui lui confient leurs chiffres.
- **Données utilisées** : un petit jeu de données fictif et réaliste (pluie mensuelle, récolte par parcelle, cas de maladie), créé pour le cours, moins de 50 Ko.

## Exercices prévus

| Id | Titre | Objectif | Difficulté (1–3) | Livrable non testable ? |
| --- | --- | --- | --- | --- |
| 0.4-ex01 à ex04 | Les données en nombres, avec NumPy | O1, O2 | 1 | non |
| 0.4-ex05 à ex08 | Les vecteurs | O1 | 1 | non |
| 0.4-ex09 à ex13 | Les matrices | O2 | 1 | non |
| 0.4-ex14 à ex16 | Les matrices au cœur de l'IA | O2 | 1 | non |
| 0.4-ex17 à ex21 | Fonctions et dérivées | O3 | 2 | non |
| 0.4-ex22 à ex25 | Composer et chercher un minimum | O3 | 2 | non |
| 0.4-ex26 à ex29 | Le gradient | O4 | 2 | non |
| 0.4-ex30 à ex33 | La descente de gradient | O4 | 2 | non |
| 0.4-ex34 | Exercice clé : coder une descente de gradient à la main (sans bibliothèque de ML) | O4 | 3 | non |
| 0.4-ex35 à ex39 | Les probabilités | O5 | 2–3 | non |
| 0.4-ex40 à ex42 | Variables aléatoires et lois | O5 | 2–3 | non |
| 0.4-ex43 à ex45 | Décrire des données | O6 | 2–3 | non |
| 0.4-ex46 à ex50 | Relations et échantillons | O6 | 2–3 | non |

## Ressources matérielles

- **RAM maximale** : moins de 300 Mo.
- **Téléchargements** : NumPy et matplotlib, environ 60 Mo installés. TODO(vérifier).
- **Temps de calcul le plus long** : quelques secondes (simulations de 100 000 tirages).
- **Dépendances nouvelles** : numpy, matplotlib ; scipy, pour le test d'hypothèse (environ 100 Mo installés, TODO(vérifier)).
- **API payante** : aucune.

## Point de contrôle sécurité et éthique

Une moyenne peut cacher des inégalités entre planteurs : la notion `moyenne-mediane` montre qu'une moyenne seule peut tromper. Pas d'autre point.

## Ressources externes gratuites

| Ressource | Langue | Durée ou taille | Licence | Pourquoi |
| --- | --- | --- | --- | --- |
| [Mathematics for Machine Learning](https://mml-book.github.io/) | anglais | livre de 400 pages | gratuit en ligne, droits des auteurs | La référence du programme pour approfondir chaque chapitre. |
| [L'algèbre linéaire en vidéos, par 3Blue1Brown](https://www.3blue1brown.com/topics/linear-algebra) | anglais, sous-titres français | 16 vidéos de 10 à 20 min | gratuit en ligne | Voir les vecteurs et les matrices comme des transformations. |
| [NumPy pour les grands débutants](https://numpy.org/doc/stable/user/absolute_beginners.html) | anglais | 1 h | BSD | La documentation officielle, pas à pas. |

## Circuit

- [ ] 1. Fiche validée par le mainteneur — date :
- [ ] 2. Solution et tests (passent sur solution, échouent sur starter) — date :
- [ ] 3. Cours — date :
- [ ] 4. Exercices (énoncés, indices, starters) — date :
- [ ] 5. QCM (valide contre le schéma) — date :
- [ ] 6. Grille — sans objet
- [ ] 7. Relecture élève — date :
- [ ] 8. Relecture expert — date :

## Journal des relectures

| Date | Étape | Fichier et ligne | Problème | Correction |
| --- | --- | --- | --- | --- |
| | | | | |

## Points à vérifier

- TODO(vérifier) : taille installée de NumPy et matplotlib.
- TODO(vérifier) : disponibilité des sous-titres français des vidéos de 3Blue1Brown.
- TODO(vérifier) : chiffres réalistes de récolte de cacao par hectare dans la région de Daloa, pour le jeu de données fictif.
- TODO(vérifier) : compléter le vocabulaire du module pour les notions ajoutées par l'audit du 25/11/2026 (vérifier chaque terme dans docs/glossaire.md).
