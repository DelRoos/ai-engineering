---
id: "0.4"
titre: "Maths pour l'IA"
parcours: "00-fondations"
semaines: "11–16"
duree_estimee: "15 h par semaine"
promesse: "Comprendre les maths qui font marcher l'IA : vecteurs et matrices, dérivées et gradient, probabilités et statistiques. Toujours à la main sur de petits nombres, puis avec NumPy."
question_saut: "Tu maîtrises déjà ces maths et NumPy ?"
qcm: true
prerequis: ["0.1"]
statut: brouillon
version: 1
mise_a_jour: 2026-11-24
---

# Fiche du module 0.4 — Maths pour l'IA

## Extrait du programme

- **Contenu** : Algèbre linéaire (vecteurs, matrices, produit scalaire), dérivées et gradient, probabilités et statistiques (moyenne, variance, lois, théorème de Bayes) — toujours avec NumPy
- **Exercice clé** : Coder une descente de gradient à la main

## Objectifs vérifiables

| Id | À la fin, l'apprenant sait… | Évalué par |
| --- | --- | --- |
| O1 | Représenter des données par des vecteurs NumPy et calculer norme, produit scalaire et similarité. | ex01 à ex08, qcm |
| O2 | Manipuler des matrices et calculer un produit matriciel, à la main puis avec NumPy. | ex09 à ex16, qcm |
| O3 | Calculer une dérivée, à la main et numériquement, et l'interpréter comme une pente. | ex17 à ex24, qcm |
| O4 | Calculer un gradient et coder une descente de gradient. | ex25 à ex31, exercice clé (ex32), qcm |
| O5 | Calculer des probabilités, dont des probabilités conditionnelles avec le théorème de Bayes. | ex33 à ex40, qcm |
| O6 | Décrire un jeu de données avec des statistiques et repérer ce qui cloche. | ex41 à ex48, qcm |

## Chapitres

| Chapitre | Titre | Semaine | Exercices |
| --- | --- | --- | --- |
| 1 | Les vecteurs, avec NumPy | Semaine 11 | 8 |
| 2 | Les matrices | Semaine 12 | 8 |
| 3 | Fonctions et dérivées | Semaine 13 | 8 |
| 4 | Le gradient et la descente de gradient | Semaine 14 | 8 |
| 5 | Les probabilités | Semaine 15 | 8 |
| 6 | Les statistiques | Semaine 16 | 8 |

## Notions, dans l'ordre

| Chapitre | Id de la notion | Notion | Durée | Objectif |
| --- | --- | --- | --- | --- |
| 1 | `donnees-nombres` | Des données aux nombres : pourquoi les vecteurs | 20 min | O1 |
| 1 | `numpy-tableaux` | Tes premiers tableaux NumPy | 25 min | O1 |
| 1 | `calcul-vectorise` | Calculer sur tout un tableau d'un coup | 25 min | O1 |
| 1 | `operations-vecteurs` | Additionner des vecteurs, les multiplier par un nombre | 25 min | O1 |
| 1 | `norme` | La longueur d'un vecteur : la norme | 25 min | O1 |
| 1 | `produit-scalaire` | Le produit scalaire | 30 min | O1 |
| 1 | `similarite-cosinus` | Mesurer la ressemblance : la similarité cosinus | 30 min | O1 |
| 2 | `matrice` | Une matrice, c'est un tableau de données | 20 min | O2 |
| 2 | `forme-indices` | Forme, indices et découpage d'une matrice | 25 min | O2 |
| 2 | `broadcasting` | Opérations élément par élément et broadcasting | 30 min | O2 |
| 2 | `matrice-vecteur` | Le produit d'une matrice par un vecteur | 30 min | O2 |
| 2 | `produit-matrices` | Le produit de deux matrices | 30 min | O2 |
| 2 | `transposee` | La transposée | 20 min | O2 |
| 2 | `couche-neurones` | Une couche de neurones, c'est un produit de matrices | 25 min | O2 |
| 3 | `tracer-fonction` | Tracer une fonction avec matplotlib | 25 min | O3 |
| 3 | `pente` | La pente d'une droite | 20 min | O3 |
| 3 | `derivee` | La dérivée : la pente en un point | 30 min | O3 |
| 3 | `regles-derivation` | Les règles de dérivation utiles | 30 min | O3 |
| 3 | `regle-chaine` | Dériver une composition : la règle de la chaîne | 30 min | O3 |
| 3 | `derivee-numerique` | Calculer une dérivée numériquement | 25 min | O3 |
| 3 | `minimum` | Trouver le minimum d'une fonction | 20 min | O3 |
| 4 | `plusieurs-variables` | Les fonctions de plusieurs variables | 25 min | O4 |
| 4 | `derivees-partielles` | Les dérivées partielles | 30 min | O4 |
| 4 | `gradient` | Le gradient : la direction de la plus forte pente | 25 min | O4 |
| 4 | `descente-gradient` | La descente de gradient, pas à pas | 30 min | O4 |
| 4 | `taux-apprentissage` | Le taux d'apprentissage | 25 min | O4 |
| 4 | `fonction-perte` | Mesurer l'erreur : la fonction de perte | 25 min | O4 |
| 4 | `ajuster-droite` | Ajuster une droite aux données par descente de gradient | 30 min | O4 |
| 5 | `probabilite` | Le hasard en chiffres : la probabilité d'un événement | 25 min | O5 |
| 5 | `simuler-hasard` | Simuler le hasard avec NumPy | 25 min | O5 |
| 5 | `probabilite-conditionnelle` | Indépendance et probabilité conditionnelle | 30 min | O5 |
| 5 | `bayes` | Le théorème de Bayes | 30 min | O5 |
| 5 | `esperance` | Variables aléatoires et espérance | 25 min | O5 |
| 5 | `binomiale` | Les lois de Bernoulli et binomiale | 25 min | O5 |
| 5 | `loi-normale` | La loi normale | 25 min | O5 |
| 6 | `moyenne-mediane` | Résumer des données : moyenne, médiane, mode | 25 min | O6 |
| 6 | `variance` | Mesurer la dispersion : variance et écart type | 25 min | O6 |
| 6 | `quantiles` | Quantiles et valeurs aberrantes | 25 min | O6 |
| 6 | `histogrammes` | Histogrammes et distributions | 25 min | O6 |
| 6 | `correlation` | La corrélation entre deux variables | 25 min | O6 |
| 6 | `echantillon` | Échantillon et population | 25 min | O6 |
| 6 | `normaliser` | Mettre les données à la même échelle | 20 min | O6 |

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

| Id | Titre | Objectif | Difficulté (1–3) | Durée | Livrable non testable ? |
| --- | --- | --- | --- | --- | --- |
| 0.4-ex01 à ex08 | Chapitre 1 : comparer des parcelles avec des vecteurs | O1 | 1–2 | 20–40 min | non |
| 0.4-ex09 à ex16 | Chapitre 2 : tableaux de récolte et produits de matrices | O2 | 2 | 20–40 min | non |
| 0.4-ex17 à ex24 | Chapitre 3 : dérivées à la main et numériques | O3 | 2 | 20–40 min | non |
| 0.4-ex25 à ex31 | Chapitre 4 : gradients et pas de descente | O4 | 2–3 | 30–45 min | non |
| 0.4-ex32 | Exercice clé : coder une descente de gradient à la main (sans bibliothèque de ML) | O4 | 3 | 2 h | non |
| 0.4-ex33 à ex40 | Chapitre 5 : risque de maladie, simulations, théorème de Bayes | O5 | 2 | 20–40 min | non |
| 0.4-ex41 à ex48 | Chapitre 6 : décrire les récoltes et repérer les valeurs aberrantes | O6 | 2 | 20–40 min | non |

## Ressources matérielles

- **RAM maximale** : moins de 300 Mo.
- **Téléchargements** : NumPy et matplotlib, environ 60 Mo installés. TODO(vérifier).
- **Temps de calcul le plus long** : quelques secondes (simulations de 100 000 tirages).
- **Dépendances nouvelles** : numpy, matplotlib.
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
