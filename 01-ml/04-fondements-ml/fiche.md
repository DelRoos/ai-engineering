---
id: "1.4"
titre: "Fondements du ML"
parcours: "01-ml"
promesse: "Comprendre ce que veut dire « apprendre » pour une machine, entraîner un premier modèle, et éviter les pièges qui rendent un bon score mensonger."
question_saut: "Tu connais déjà le surapprentissage et la fuite de données ?"
qcm: true
prerequis: ["1.2"]
statut: brouillon
version: 1
mise_a_jour: 2026-11-25
---

# Fiche du module 1.4 — Fondements du ML

## Extrait du programme

- **Contenu** : Apprentissage supervisé ou non, surapprentissage, biais/variance, découpage train/validation/test, fuite de données
- **Exercice clé** : Repérer et corriger 5 erreurs dans un notebook piégé

## Objectifs vérifiables

| Id | À la fin, l'apprenant sait… | Évalué par |
| --- | --- | --- |
| O1 | Reconnaître le type d'un problème : régression, classification, clustering. | ex01 à ex03, ex04 à ex06, qcm |
| O2 | Entraîner un premier modèle avec scikit-learn et le comparer à un modèle de référence. | ex07 à ex09, qcm |
| O3 | Découper des données en train, validation et test, sans tricher. | ex10 à ex13, exercice clé (ex17), qcm |
| O4 | Diagnostiquer un surapprentissage ou un sous-apprentissage. | ex10 à ex13, ex14 à ex16, exercice clé (ex17), qcm |
| O5 | Repérer et corriger une fuite de données. | ex10 à ex13, ex14 à ex16, exercice clé (ex17), qcm |
| O6 | Repérer un biais dans des données d'entraînement et en mesurer l'effet. | ex14 à ex16, qcm |

## Chapitres

| Chapitre | Titre | Exercices |
| --- | --- | --- |
| 1 | Qu'est-ce qu'apprendre | 3 |
| 2 | Le cycle d'un projet de ML | 3 |
| 3 | Un premier modèle | 3 |
| 4 | Ne pas se mentir | 4 |
| 5 | Quand le monde change | 4 |

## Notions, dans l'ordre

| Chapitre | Id de la notion | Notion | Objectif |
| --- | --- | --- | --- |
| 1 | `apprendre` | Qu'est-ce qu'apprendre, pour une machine | O1 |
| 1 | `faut-il-ml` | Faut-il vraiment du machine learning ? | O1 |
| 1 | `types-problemes` | Supervisé ou non : régression, classification, clustering | O1 |
| 1 | `autres-apprentissages` | Semi-supervisé et par renforcement : un aperçu | O1 |
| 1 | `features-cible` | Les features et la cible | O1 |
| 2 | `cycle-ml` | Les étapes d'un projet de machine learning | O1 |
| 2 | `formuler-probleme` | Formuler un problème de ML | O1 |
| 2 | `metrique-succes` | Définir le succès avant de coder | O1 |
| 2 | `donnees-disponibles` | Faire l'inventaire des données disponibles | O1 |
| 2 | `risques-projet-ml` | Les risques d'un projet de ML | O1 |
| 3 | `premier-modele` | Ton premier modèle avec scikit-learn | O2 |
| 3 | `api-sklearn` | La logique de scikit-learn : fit, predict, transform | O2 |
| 3 | `apprendre-perte` | Comment un modèle apprend : la perte et l'optimisation | O2 |
| 3 | `reference` | Le modèle de référence : faire mieux que le hasard | O2 |
| 3 | `predire-probabilites` | Prédire une classe ou une probabilité | O2 |
| 4 | `decoupage` | Découper les données : train, validation, test | O3 |
| 4 | `decoupage-avance` | Découper quand les données sont groupées ou datées | O3 |
| 4 | `biais-variance` | Surapprentissage et sous-apprentissage | O4 |
| 4 | `compromis-biais-variance` | Le compromis biais-variance | O4 |
| 4 | `courbes-apprentissage` | Lire une courbe d'apprentissage | O4 |
| 4 | `fuite` | La fuite de données | O5 |
| 5 | `derive-distribution` | Quand les données de demain ne ressemblent pas à celles d'hier | O5 |
| 5 | `malediction-dimension` | Trop de colonnes : la malédiction de la dimension | O4 |
| 5 | `biais-donnees` | Quand les données sont injustes : les biais | O6 |
| 5 | `generalisation` | Ce que veut dire généraliser | O4 |
| 5 | `donnees-hors-distribution` | Reconnaître une donnée jamais vue | O5 |

## Vocabulaire du module

| Terme | Catégorie (A anglais / B transparent) | Notion où il apparaît |
| --- | --- | --- |
| machine learning, modèle | A | `apprendre` |
| apprentissage supervisé, non supervisé | A | `types-problemes` |
| régression, classification, clustering | A | `types-problemes` |
| feature, cible (target), étiquette (label) | A | `features-cible` |
| entraîner (fit), prédire (predict) | A | `premier-modele` |
| baseline | A | `reference` |
| train, validation, test | A | `decoupage` |
| surapprentissage (overfitting), sous-apprentissage (underfitting) | A | `biais-variance` |
| biais, variance | B | `biais-variance` |
| fuite de données (data leakage) | A | `fuite` |
| fonction de perte (loss), optimisation | A | `apprendre-perte` |
| découpage stratifié, GroupKFold | A | `decoupage-avance` |
| courbe d'apprentissage (learning curve) | A | `courbes-apprentissage` |
| biais historique, équité (fairness) | A | `biais-donnees` |

## Fil rouge et ancrage local

- **Situation** : une institution de microfinance de Kinshasa veut prévoir quels prêts risquent d'être remboursés en retard. Son premier modèle affiche 99 % de réussite : trop beau pour être vrai. Tu trouves pourquoi.
- **Personnages** : Grâce, analyste de l'institution, et le comité de crédit qui décide des prêts.
- **Données utilisées** : un jeu de données fictif et réaliste de 5 000 prêts (montant, durée, activité, historique, retard), créé pour le cours, moins de 1 Mo.

## Exercices prévus

| Id | Titre | Objectif | Difficulté (1–3) | Livrable non testable ? |
| --- | --- | --- | --- | --- |
| 1.4-ex01 à ex03 | Qu'est-ce qu'apprendre | O1 | 1 | non |
| 1.4-ex04 à ex06 | Le cycle d'un projet de ML | O1 | 2 | non |
| 1.4-ex07 à ex09 | Un premier modèle | O2 | 2 | non |
| 1.4-ex10 à ex13 | Ne pas se mentir | O3, O4, O5 | 2–3 | non |
| 1.4-ex14 à ex16 | Quand le monde change | O4, O5, O6 | 2–3 | non |
| 1.4-ex17 | Exercice clé : repérer et corriger 5 erreurs dans un notebook piégé | O3 à O5 | 3 | non |

## Ressources matérielles

- **RAM maximale** : moins de 1 Go.
- **Téléchargements** : scikit-learn, environ 50 Mo installés. TODO(vérifier).
- **Temps de calcul le plus long** : quelques secondes.
- **Dépendances nouvelles** : scikit-learn.
- **API payante** : aucune.

## Point de contrôle sécurité et éthique

Un modèle de crédit décide de la vie des gens : la notion `reference` montre qu'un score élevé peut cacher des erreurs graves sur certains groupes. Ce point est approfondi en module 1.6 et en étape 5.

## Ressources externes gratuites

| Ressource | Langue | Type | Licence ou accès | Pourquoi |
| --- | --- | --- | --- | --- |
| [MOOC scikit-learn (Inria)](https://inria.github.io/scikit-learn-mooc/) | anglais | cours | CC BY | Le cours des créateurs de scikit-learn, très progressif. |
| [Machine Learning Crash Course (Google)](https://developers.google.com/machine-learning/crash-course?hl=fr) | français | cours | CC BY 4.0 | Les fondements du ML, avec des schémas interactifs. |
| [An Introduction to Statistical Learning](https://www.statlearning.com/) | anglais | livre en PDF | gratuit en ligne | La référence théorique, avec des exercices en Python. |
| [Rules of Machine Learning (Google)](https://developers.google.com/machine-learning/guides/rules-of-ml) | anglais | guide | CC BY 4.0 | 43 règles tirées de projets réels. |
| [Kaggle Learn : Intro to Machine Learning](https://www.kaggle.com/learn/intro-to-machine-learning) | anglais | cours interactif | gratuit | Un premier modèle et sa validation. |

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

- TODO(vérifier) : l'exercice clé est un notebook : prévoir comment les tests vérifient les 5 corrections (fonctions extraites du notebook ou script équivalent).
- TODO(vérifier) : compléter le vocabulaire des notions ajoutées par la seconde passe d'audit (25/11/2026), en vérifiant chaque terme dans docs/glossaire.md.
