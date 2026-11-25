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
| O1 | Évaluer une régression avec MAE, RMSE et R², et les interpréter. | ex01 à ex05, qcm |
| O2 | Lire une matrice de confusion et calculer précision, rappel, F1 et AUC. | ex06 à ex10, ex15 à ex17, qcm |
| O3 | Estimer la performance avec une validation croisée. | ex18 à ex22, qcm |
| O4 | Chercher de bons hyperparamètres sans toucher au jeu de test. | ex23 à ex27, qcm |
| O5 | Traiter des classes déséquilibrées. | ex28 à ex31, qcm |
| O6 | Choisir et justifier la métrique qui sert le métier. | ex32 à ex36, exercice clé (ex37), qcm |
| O7 | Évaluer des probabilités : log loss, score de Brier, calibration. | ex11 à ex14, qcm |

## Chapitres

| Chapitre | Titre | Exercices |
| --- | --- | --- |
| 1 | Mesurer une régression | 5 |
| 2 | Mesurer une classification | 5 |
| 3 | Mesurer des probabilités | 4 |
| 4 | Mesurer dans scikit-learn | 3 |
| 5 | Estimer honnêtement | 5 |
| 6 | Optimiser | 5 |
| 7 | Les classes déséquilibrées | 4 |
| 8 | Servir le métier | 6 |

## Notions, dans l'ordre

| Chapitre | Id de la notion | Notion | Objectif |
| --- | --- | --- | --- |
| 1 | `metriques-regression` | L'erreur moyenne et ses unités : MAE et RMSE | O1 |
| 1 | `r2` | Le R² : ce que le modèle explique, et ce qu'il cache | O1 |
| 1 | `reference-regression` | Comparer à un modèle naïf : la moyenne, la dernière valeur | O1 |
| 1 | `mape` | L'erreur en pourcentage : la MAPE et ses pièges | O1 |
| 1 | `metriques-robustes` | Des erreurs robustes aux extrêmes : erreur médiane et quantiles | O1 |
| 1 | `residus` | Lire les erreurs d'un modèle : les résidus | O1 |
| 1 | `erreurs-par-segment` | Mesurer l'erreur par segment | O1 |
| 2 | `matrice-confusion` | La matrice de confusion | O2 |
| 2 | `precision-rappel` | La précision et le rappel | O2 |
| 2 | `f1-fbeta` | Les combiner : F1 et F-bêta | O2 |
| 2 | `taux-erreurs` | Les autres taux : spécificité et taux de faux positifs | O2 |
| 2 | `accuracy-equilibree` | Quand l'accuracy ment : l'accuracy équilibrée | O2 |
| 2 | `roc-auc` | La courbe ROC et l'AUC | O2 |
| 2 | `courbe-pr` | La courbe précision-rappel | O2 |
| 2 | `metriques-multiclasses` | Mesurer avec plus de deux classes : moyennes macro et micro | O2 |
| 3 | `log-loss` | La log loss | O7 |
| 3 | `brier` | Le score de Brier | O7 |
| 3 | `calibration` | Des probabilités fiables : ce qu'est la calibration | O7 |
| 3 | `courbe-calibration` | Lire une courbe de calibration | O7 |
| 3 | `calibrer-modele` | Calibrer un modèle : méthodes de Platt et isotonique | O7 |
| 3 | `probabilites-decision` | Décider avec des probabilités | O7 |
| 4 | `scoring-sklearn` | Les métriques dans scikit-learn : scoring et rapport de classification | O2 |
| 4 | `classifieur-naif` | Comparer à un classifieur naïf | O2 |
| 4 | `metrique-maison` | Écrire ta propre métrique | O2 |
| 4 | `afficher-mesures` | Afficher matrices et courbes avec les outils de scikit-learn | O2 |
| 4 | `metriques-classement` | Mesurer un classement : précision@k et nDCG | O2 |
| 5 | `validation-croisee` | La validation croisée | O3 |
| 5 | `types-validation` | Les variantes : stratifiée, groupée, répétée | O3 |
| 5 | `incertitude-metrique` | Le score a-t-il vraiment progressé ? L'incertitude d'une métrique | O3 |
| 5 | `test-permutation` | Faire mieux que le hasard ? Le test de permutation | O3 |
| 5 | `courbes-validation` | La courbe de validation | O3 |
| 5 | `validation-imbriquee` | La validation imbriquée | O3 |
| 5 | `jeu-test-final` | Le jeu de test : ne l'ouvrir qu'une seule fois | O3 |
| 6 | `hyperparametres` | Chercher sur une grille : GridSearchCV | O4 |
| 6 | `recherche-aleatoire` | La recherche aléatoire | O4 |
| 6 | `optuna` | Chercher plus malin : la recherche bayésienne avec Optuna | O4 |
| 6 | `halving` | Éliminer vite les mauvais réglages : successive halving | O4 |
| 6 | `espace-recherche` | Définir un bon espace de recherche | O4 |
| 6 | `importance-reglages` | Quels réglages comptent vraiment | O4 |
| 6 | `pieges-optimisation` | Les pièges : sur-optimiser la validation | O4 |
| 7 | `desequilibre` | Les classes déséquilibrées | O5 |
| 7 | `metriques-desequilibre` | Les bonnes métriques quand une classe est rare | O5 |
| 7 | `seuil-desequilibre` | Ajuster le seuil plutôt que les données | O5 |
| 7 | `poids-classes` | Donner plus de poids aux classes rares | O5 |
| 7 | `smote` | Rééchantillonner : sous-échantillonnage et SMOTE | O5 |
| 7 | `reechantillonner-sans-fuite` | Rééchantillonner sans fuite : seulement dans l'entraînement | O5 |
| 8 | `cout-erreurs` | Chiffrer le coût des erreurs | O6 |
| 8 | `metrique-metier` | Choisir la métrique qui sert le métier | O6 |
| 8 | `seuil-decision` | Choisir le seuil de décision | O6 |
| 8 | `metriques-groupes` | Mesurer par groupe : un modèle juste pour tous ? | O6 |
| 8 | `analyse-erreurs` | Analyser les erreurs pour savoir quoi améliorer | O6 |
| 8 | `test-vers-terrain` | Du score sur le jeu de test à l'effet réel sur le terrain | O6 |
| 8 | `rapport-evaluation` | Rédiger un rapport d'évaluation honnête | O6 |

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
| coefficient de détermination (R²) | A | `r2` |
| modèle naïf (baseline, dummy) | A | `reference-regression` |
| F-bêta | A | `f1-fbeta` |
| spécificité, taux de faux positifs | B | `taux-erreurs` |
| méthode de Platt, régression isotonique | B | `calibrer-modele` |
| rapport de classification (classification report) | A | `scoring-sklearn` |
| précision@k, nDCG | A | `metriques-classement` |
| test de permutation | B | `test-permutation` |
| GridSearchCV | A | `hyperparametres` |
| recherche bayésienne | B | `optuna` |
| coût d'une erreur, matrice de coûts | B | `cout-erreurs` |

## Fil rouge et ancrage local

- **Situation** : un centre de santé de Bouaké teste un modèle qui aide à décider quels patients orienter vers un test de paludisme. Rater un malade coûte bien plus cher qu'un test de trop : tu apprends à choisir la métrique et le seuil qui reflètent ce choix.
- **Personnages** : le docteur Koné, médecin-chef, et Aya, infirmière qui reçoit les patients.
- **Données utilisées** : un jeu de données fictif de consultations (symptômes, saison, âge, résultat du test), créé pour le cours. Aucune donnée réelle de patient.

## Exercices prévus

| Id | Titre | Objectif | Difficulté (1–3) | Livrable non testable ? |
| --- | --- | --- | --- | --- |
| 1.6-ex01 à ex05 | Mesurer une régression | O1 | 1 | non |
| 1.6-ex06 à ex10 | Mesurer une classification | O2 | 1 | non |
| 1.6-ex11 à ex14 | Mesurer des probabilités | O7 | 2 | non |
| 1.6-ex15 à ex17 | Mesurer dans scikit-learn | O2 | 2 | non |
| 1.6-ex18 à ex22 | Estimer honnêtement | O3 | 2 | non |
| 1.6-ex23 à ex27 | Optimiser | O4 | 2–3 | non |
| 1.6-ex28 à ex31 | Les classes déséquilibrées | O5 | 2–3 | non |
| 1.6-ex32 à ex36 | Servir le métier | O6 | 2–3 | non |
| 1.6-ex37 | Exercice clé : choisir et justifier la bonne métrique pour 4 cas métier | O6 | 3 | oui → GRILLE.md (justifications) ; le choix de métrique vérifié par tests |

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
- TODO(vérifier) : vérifier chaque terme du vocabulaire dans docs/glossaire.md (revue manuelle du 25/11/2026).
