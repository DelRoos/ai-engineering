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
| O1 | Évaluer une régression avec MAE, RMSE et R², et les interpréter. | ex01 à ex02, qcm |
| O2 | Lire une matrice de confusion et calculer précision, rappel, F1 et AUC. | ex03 à ex06, qcm |
| O3 | Estimer la performance avec une validation croisée. | ex07 à ex09, qcm |
| O4 | Chercher de bons hyperparamètres sans toucher au jeu de test. | ex07 à ex09, qcm |
| O5 | Traiter des classes déséquilibrées. | ex07 à ex09, qcm |
| O6 | Choisir et justifier la métrique qui sert le métier. | ex10 à ex11, exercice clé (ex12), qcm |

## Chapitres

| Chapitre | Titre | Exercices |
| --- | --- | --- |
| 1 | Mesurer une régression | 2 |
| 2 | Mesurer une classification | 4 |
| 3 | Estimer et améliorer honnêtement | 3 |
| 4 | Servir le métier | 3 |

## Notions, dans l'ordre

| Chapitre | Id de la notion | Notion | Objectif |
| --- | --- | --- | --- |
| 1 | `metriques-regression` | Évaluer une régression : MAE, RMSE, R² | O1 |
| 1 | `residus` | Lire les erreurs d'un modèle : les résidus | O1 |
| 2 | `matrice-confusion` | La matrice de confusion | O2 |
| 2 | `precision-rappel` | Précision, rappel et F1 | O2 |
| 2 | `roc-auc` | La courbe ROC et l'AUC | O2 |
| 2 | `courbe-pr` | La courbe précision-rappel | O2 |
| 2 | `metriques-multiclasses` | Mesurer avec plus de deux classes : moyennes macro et micro | O2 |
| 2 | `calibration` | Des probabilités fiables : la calibration | O2 |
| 3 | `validation-croisee` | La validation croisée | O3 |
| 3 | `incertitude-metrique` | Le score a-t-il vraiment progressé ? L'incertitude d'une métrique | O3 |
| 3 | `hyperparametres` | Chercher les bons hyperparamètres | O4 |
| 3 | `optuna` | Chercher plus malin : recherche aléatoire et Optuna | O4 |
| 3 | `desequilibre` | Les classes déséquilibrées | O5 |
| 4 | `analyse-erreurs` | Analyser les erreurs pour savoir quoi améliorer | O6 |
| 4 | `metriques-groupes` | Mesurer par groupe : un modèle juste pour tous ? | O6 |
| 4 | `seuil-decision` | Choisir le seuil de décision | O6 |
| 4 | `metrique-metier` | Choisir la métrique qui sert le métier | O6 |

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
| 1.6-ex01 à ex02 | Mesurer une régression | O1 | 1 | non |
| 1.6-ex03 à ex06 | Mesurer une classification | O2 | 2 | non |
| 1.6-ex07 à ex09 | Estimer et améliorer honnêtement | O3, O4, O5 | 2–3 | non |
| 1.6-ex10 à ex11 | Servir le métier | O6 | 2–3 | non |
| 1.6-ex12 | Exercice clé : choisir et justifier la bonne métrique pour 4 cas métier | O6 | 3 | oui → GRILLE.md (justifications) ; le choix de métrique vérifié par tests |

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

| Ressource | Langue | Durée ou taille | Licence | Pourquoi |
| --- | --- | --- | --- | --- |
| [scikit-learn : évaluer un modèle](https://scikit-learn.org/stable/modules/model_evaluation.html) | anglais | référence | BSD | Toutes les métriques, avec leurs formules et leurs pièges. |
| [Google Machine Learning Crash Course : classification](https://developers.google.com/machine-learning/crash-course/classification) | anglais, sous-titres français | 1 h | CC BY 4.0 | Précision, rappel et ROC expliqués avec des schémas interactifs. |

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
