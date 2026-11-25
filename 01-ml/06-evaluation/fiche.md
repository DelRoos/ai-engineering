---
id: "1.6"
titre: "Évaluation et optimisation"
parcours: "01-ml"
promesse: "Mesurer honnêtement la valeur d'un modèle avec la métrique qui compte pour le métier, puis l'améliorer sans se mentir."
question_saut: "Tu sais déjà choisir une métrique et régler des hyperparamètres ?"
qcm: true
prerequis: ["1.5"]
statut: brouillon
version: 1
mise_a_jour: 2026-11-25
---

# Fiche du module 1.6 — Évaluation et optimisation

## Extrait du programme

- **Contenu** : Métriques (précision, rappel, F1, AUC, RMSE), validation croisée, recherche d'hyperparamètres, classes déséquilibrées
- **Exercice clé** : Choisir et justifier la bonne métrique pour 4 cas métier

## Objectifs vérifiables

| Id | À la fin, l'apprenant sait… | Évalué par |
| --- | --- | --- |
| O1 | Évaluer une régression avec MAE, RMSE et R², et les interpréter. | ex01 à ex03, qcm |
| O2 | Lire une matrice de confusion et calculer précision, rappel, F1 et AUC. | ex04 à ex07, ex08 à ex10, qcm |
| O3 | Estimer la performance avec une validation croisée. | ex11 à ex13, qcm |
| O4 | Chercher de bons hyperparamètres sans toucher au jeu de test. | ex14 à ex16, qcm |
| O5 | Traiter des classes déséquilibrées. | ex17 à ex19, qcm |
| O6 | Choisir et justifier la métrique qui sert le métier. | ex20 à ex22, exercice clé (ex23), qcm |

## Chapitres

| Chapitre | Titre | Exercices |
| --- | --- | --- |
| 1 | Mesurer une régression | 3 |
| 2 | Mesurer une classification | 4 |
| 3 | Mesurer des probabilités | 3 |
| 4 | Estimer honnêtement | 3 |
| 5 | Optimiser | 3 |
| 6 | Les classes déséquilibrées | 3 |
| 7 | Servir le métier | 4 |

## Notions, dans l'ordre

| Chapitre | Id de la notion | Notion | Objectif |
| --- | --- | --- | --- |
| 1 | `metriques-regression` | Évaluer une régression : MAE, RMSE, R² | O1 |
| 1 | `mape` | L'erreur en pourcentage : la MAPE et ses pièges | O1 |
| 1 | `residus` | Lire les erreurs d'un modèle : les résidus | O1 |
| 1 | `metriques-robustes` | Des erreurs moins sensibles aux extrêmes : MAE et médiane | O1 |
| 1 | `erreurs-par-segment` | Mesurer l'erreur par segment | O1 |
| 2 | `matrice-confusion` | La matrice de confusion | O2 |
| 2 | `precision-rappel` | Précision, rappel et F1 | O2 |
| 2 | `accuracy-equilibree` | Quand l'accuracy ment : l'accuracy équilibrée | O2 |
| 2 | `roc-auc` | La courbe ROC et l'AUC | O2 |
| 2 | `courbe-pr` | La courbe précision-rappel | O2 |
| 2 | `metriques-multiclasses` | Mesurer avec plus de deux classes : moyennes macro et micro | O2 |
| 3 | `log-loss` | La log loss | O2 |
| 3 | `brier` | Le score de Brier | O2 |
| 3 | `calibration` | Des probabilités fiables : la calibration | O2 |
| 3 | `courbe-calibration` | Lire une courbe de calibration | O2 |
| 3 | `probabilites-decision` | Décider avec des probabilités | O2 |
| 4 | `validation-croisee` | La validation croisée | O3 |
| 4 | `types-validation` | Les variantes : stratifiée, groupée, répétée | O3 |
| 4 | `validation-imbriquee` | La validation imbriquée | O3 |
| 4 | `incertitude-metrique` | Le score a-t-il vraiment progressé ? L'incertitude d'une métrique | O3 |
| 4 | `courbes-validation` | La courbe de validation | O3 |
| 5 | `hyperparametres` | Chercher les bons hyperparamètres | O4 |
| 5 | `optuna` | Chercher plus malin : recherche aléatoire et Optuna | O4 |
| 5 | `halving` | Éliminer vite les mauvais réglages : successive halving | O4 |
| 5 | `espace-recherche` | Définir un bon espace de recherche | O4 |
| 5 | `pieges-optimisation` | Les pièges : sur-optimiser la validation | O4 |
| 6 | `desequilibre` | Les classes déséquilibrées | O5 |
| 6 | `poids-classes` | Donner plus de poids aux classes rares | O5 |
| 6 | `smote` | Rééchantillonner : sous-échantillonnage et SMOTE | O5 |
| 6 | `metriques-desequilibre` | Les bonnes métriques quand une classe est rare | O5 |
| 6 | `seuil-desequilibre` | Ajuster le seuil plutôt que les données | O5 |
| 7 | `analyse-erreurs` | Analyser les erreurs pour savoir quoi améliorer | O6 |
| 7 | `metriques-groupes` | Mesurer par groupe : un modèle juste pour tous ? | O6 |
| 7 | `cout-erreurs` | Chiffrer le coût des erreurs | O6 |
| 7 | `seuil-decision` | Choisir le seuil de décision | O6 |
| 7 | `metrique-metier` | Choisir la métrique qui sert le métier | O6 |

## Vocabulaire du module

| Terme | Catégorie (A anglais / B transparent) | Notion où il apparaît |
| --- | --- | --- |
| métrique (metric) | A | `metriques-regression` |
| MAE, RMSE, R² | A | `metriques-regression` |
| matrice de confusion, faux positif, faux négatif | A | `matrice-confusion` |
| précision (precision), rappel (recall), F1 | A | `precision-rappel` |
| accuracy | A | `precision-rappel` |
| courbe ROC, AUC, seuil (threshold) | A | `roc-auc` |
| validation croisée (cross-validation), fold | A | `validation-croisee` |
| hyperparamètre, grid search | A | `hyperparametres` |
| classes déséquilibrées (imbalanced), rééchantillonnage | A | `desequilibre` |
| résidu | B | `residus` |
| courbe précision-rappel | A | `courbe-pr` |
| moyenne macro, moyenne micro | A | `metriques-multiclasses` |
| calibration | B | `calibration` |
| bootstrap, intervalle de confiance | A | `incertitude-metrique` |
| recherche aléatoire, Optuna | A | `optuna` |
| analyse d'erreurs (error analysis) | A | `analyse-erreurs` |
| métrique par groupe | B | `metriques-groupes` |

## Fil rouge et ancrage local

- **Situation** : un centre de santé de Bouaké teste un modèle qui aide à décider quels patients orienter vers un test de paludisme. Rater un malade coûte bien plus cher qu'un test de trop : tu apprends à choisir la métrique et le seuil qui reflètent ce choix.
- **Personnages** : le docteur Koné, médecin-chef, et Aya, infirmière qui reçoit les patients.
- **Données utilisées** : un jeu de données fictif de consultations (symptômes, saison, âge, résultat du test), créé pour le cours. Aucune donnée réelle de patient.

## Exercices prévus

| Id | Titre | Objectif | Difficulté (1–3) | Livrable non testable ? |
| --- | --- | --- | --- | --- |
| 1.6-ex01 à ex03 | Mesurer une régression | O1 | 1 | non |
| 1.6-ex04 à ex07 | Mesurer une classification | O2 | 1 | non |
| 1.6-ex08 à ex10 | Mesurer des probabilités | O2 | 2 | non |
| 1.6-ex11 à ex13 | Estimer honnêtement | O3 | 2 | non |
| 1.6-ex14 à ex16 | Optimiser | O4 | 2–3 | non |
| 1.6-ex17 à ex19 | Les classes déséquilibrées | O5 | 2–3 | non |
| 1.6-ex20 à ex22 | Servir le métier | O6 | 2–3 | non |
| 1.6-ex23 | Exercice clé : choisir et justifier la bonne métrique pour 4 cas métier | O6 | 3 | oui → GRILLE.md (justifications) ; le choix de métrique vérifié par tests |

## Ressources matérielles

- **RAM maximale** : moins de 1,5 Go.
- **Téléchargements** : aucun nouveau.
- **Temps de calcul le plus long** : quelques minutes pour une recherche d'hyperparamètres sur 4 cœurs ; les énoncés limitent la grille. TODO(vérifier).
- **Dépendances nouvelles** : optuna (quelques Mo).
- **API payante** : aucune.

## Point de contrôle sécurité et éthique

- Un modèle de santé n'est qu'une aide : la décision reste au soignant. Le cours le dit dès la situation de départ.
- Vérifier les erreurs par groupe (âge, sexe) et pas seulement la moyenne : premier contact avec l'équité, approfondie en étape 5.

## Ressources externes gratuites

| Ressource | Langue | Type | Licence ou accès | Pourquoi |
| --- | --- | --- | --- | --- |
| [scikit-learn : évaluer un modèle](https://scikit-learn.org/stable/modules/model_evaluation.html) | anglais | documentation | BSD | Toutes les métriques, avec leurs pièges. |
| [Machine Learning Crash Course : classification](https://developers.google.com/machine-learning/crash-course/classification?hl=fr) | français | cours | CC BY 4.0 | Précision, rappel et ROC avec des schémas interactifs. |
| [Documentation d'Optuna](https://optuna.readthedocs.io/) | anglais | documentation | MIT | Chercher des hyperparamètres efficacement. |
| [Documentation d'imbalanced-learn](https://imbalanced-learn.org/) | anglais | documentation | MIT | SMOTE et les autres techniques pour les classes rares. |

## Circuit

- [ ] 1. Fiche validée par le mainteneur — date :
- [ ] 2. Solution et tests (passent sur solution, échouent sur starter) — date :
- [ ] 3. Cours — date :
- [ ] 4. Exercices (énoncés, indices, starters) — date :
- [ ] 5. QCM (valide contre le schéma) — date :
- [ ] 6. Grille — date :
- [ ] 7. Relecture élève — date :
- [ ] 8. Relecture expert — date :

## Journal des relectures

| Date | Étape | Fichier et ligne | Problème | Correction |
| --- | --- | --- | --- | --- |
| | | | | |

## Points à vérifier

- TODO(vérifier) : relecture du cas paludisme par un professionnel de santé (vraisemblance des symptômes et des saisons).
- TODO(vérifier) : licence et sous-titres français du Machine Learning Crash Course de Google.
- TODO(vérifier) : compléter le vocabulaire des notions ajoutées par la seconde passe d'audit (25/11/2026), en vérifiant chaque terme dans docs/glossaire.md.
