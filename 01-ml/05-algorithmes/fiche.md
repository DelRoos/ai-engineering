---
id: "1.5"
titre: "Algorithmes essentiels"
parcours: "01-ml"
promesse: "Connaître de l'intérieur les algorithmes qui font tourner la plupart des projets de ML : modèles linéaires, arbres, forêts, gradient boosting, k-means, PCA et recommandation."
question_saut: "Tu sais déjà choisir et régler ces algorithmes ?"
qcm: true
prerequis: ["1.4"]
statut: brouillon
version: 1
mise_a_jour: 2026-11-25
---

# Fiche du module 1.5 — Algorithmes essentiels

## Extrait du programme

- **Contenu** : Régression linéaire et logistique, arbres, random forest, gradient boosting (XGBoost, LightGBM), k-means, PCA, introduction aux systèmes de recommandation
- **Exercice clé** : Régression linéaire codée de zéro, puis avec scikit-learn

## Objectifs vérifiables

| Id | À la fin, l'apprenant sait… | Évalué par |
| --- | --- | --- |
| O1 | Coder une régression linéaire de zéro et la retrouver avec scikit-learn. | ex01 à ex05, exercice clé (ex06), qcm |
| O2 | Entraîner et régulariser des modèles linéaires, pour prédire un nombre ou une classe. | ex01 à ex05, ex07 à ex11, qcm |
| O3 | Expliquer et utiliser les arbres, les forêts aléatoires et le gradient boosting. | ex12 à ex13, ex14 à ex16, qcm |
| O4 | Regrouper des données sans étiquette avec k-means et réduire leurs dimensions avec PCA. | ex17 à ex20, ex21 à ex23, qcm |
| O5 | Construire une recommandation simple à partir de voisins. | ex07 à ex11, ex24 à ex26, qcm |
| O6 | Choisir un algorithme adapté à un problème et à ses contraintes. | ex24 à ex26, qcm |

## Chapitres

| Chapitre | Titre | Exercices |
| --- | --- | --- |
| 1 | La régression linéaire | 6 |
| 2 | Classer | 5 |
| 3 | Les arbres | 2 |
| 4 | Les ensembles | 3 |
| 5 | Regrouper sans étiquette | 4 |
| 6 | Réduire et détecter | 3 |
| 7 | Recommander et choisir | 3 |

## Notions, dans l'ordre

| Chapitre | Id de la notion | Notion | Objectif |
| --- | --- | --- | --- |
| 1 | `regression-zero` | La régression linéaire, de zéro | O1 |
| 1 | `regression-sklearn` | La régression linéaire avec scikit-learn | O1 |
| 1 | `interpreter-coefficients` | Lire les coefficients d'un modèle | O1 |
| 1 | `polynomiale` | Des courbes avec un modèle linéaire : la régression polynomiale | O2 |
| 1 | `regularisation` | Régulariser : Ridge et Lasso | O2 |
| 1 | `elastic-net` | Combiner Ridge et Lasso : Elastic Net | O2 |
| 1 | `regression-robuste` | Résister aux valeurs aberrantes : la régression robuste | O2 |
| 2 | `logistique` | La régression logistique, pour classer | O2 |
| 2 | `multiclasse` | Plus de deux classes | O2 |
| 2 | `multilabel` | Plusieurs étiquettes à la fois | O2 |
| 2 | `knn` | Les k plus proches voisins | O5 |
| 2 | `naive-bayes` | Naive Bayes : classer avec le théorème de Bayes | O2 |
| 2 | `svm` | Les machines à vecteurs de support (SVM) | O2 |
| 2 | `noyaux` | L'astuce du noyau | O2 |
| 3 | `arbres` | Les arbres de décision | O3 |
| 3 | `elagage` | Élaguer un arbre | O3 |
| 3 | `importance-arbres` | Ce que les arbres jugent important | O3 |
| 4 | `bagging` | Le bagging | O3 |
| 4 | `random-forest` | Random forest : la force du nombre | O3 |
| 4 | `adaboost` | Le boosting, d'AdaBoost au gradient boosting | O3 |
| 4 | `gradient-boosting` | Le gradient boosting : XGBoost et LightGBM | O3 |
| 4 | `stacking` | Voter et empiler : voting et stacking | O3 |
| 5 | `kmeans` | Regrouper sans étiquette : k-means | O4 |
| 5 | `nombre-groupes` | Choisir le nombre de groupes | O4 |
| 5 | `hierarchique` | Le clustering hiérarchique | O4 |
| 5 | `dbscan` | Des groupes de toutes les formes : DBSCAN | O4 |
| 5 | `melanges-gaussiens` | Les mélanges gaussiens | O4 |
| 5 | `evaluer-clusters` | Évaluer des groupes sans étiquette | O4 |
| 6 | `pca` | Réduire les dimensions : la PCA | O4 |
| 6 | `visualiser-2d` | Voir des données à beaucoup de colonnes en 2D | O4 |
| 6 | `nmf-sujets` | Trouver des sujets dans des textes : NMF | O4 |
| 6 | `anomalies` | Repérer l'inhabituel : la détection d'anomalies | O4 |
| 7 | `recommandation` | Premiers pas en recommandation | O5 |
| 7 | `factorisation-matrices` | La factorisation de matrices | O5 |
| 7 | `reco-contenu` | Recommander à partir du contenu | O5 |
| 7 | `reco-evaluer` | Évaluer une recommandation | O5 |
| 7 | `choisir-algorithme` | Choisir un algorithme | O6 |

## Vocabulaire du module

| Terme | Catégorie (A anglais / B transparent) | Notion où il apparaît |
| --- | --- | --- |
| coefficient, intercept | A | `regression-zero` |
| régularisation, Ridge, Lasso | A | `regularisation` |
| régression logistique, probabilité | B | `logistique` |
| arbre de décision (decision tree), profondeur | A | `arbres` |
| random forest, ensemble | A | `random-forest` |
| gradient boosting | A | `gradient-boosting` |
| k-means, centroïde | A | `kmeans` |
| PCA, composante principale | A | `pca` |
| k plus proches voisins (k-NN) | A | `knn` |
| système de recommandation, filtrage collaboratif | A | `recommandation` |
| régression polynomiale | B | `polynomiale` |
| multiclasse, one-vs-rest | A | `multiclasse` |
| Naive Bayes | A | `naive-bayes` |
| SVM, noyau (kernel), marge | A | `svm` |
| DBSCAN, densité | A | `dbscan` |
| détection d'anomalies, Isolation Forest | A | `anomalies` |
| recommandation basée sur le contenu | B | `reco-contenu` |
| précision@k (precision at k) | A | `reco-evaluer` |

## Fil rouge et ancrage local

- **Situation** : une plateforme de vente de produits agricoles en ligne, à Douala, veut prédire les prix de la semaine, repérer les commandes qui risquent d'être annulées, regrouper ses clients et recommander des produits. Chaque algorithme répond à une de ses questions.
- **Personnages** : Ngo, responsable des données de la plateforme, et les clients (restaurants, ménages, revendeurs).
- **Données utilisées** : un jeu de données fictif et réaliste de commandes, de clients et de prix, créé pour le cours, moins de 5 Mo.

## Exercices prévus

| Id | Titre | Objectif | Difficulté (1–3) | Livrable non testable ? |
| --- | --- | --- | --- | --- |
| 1.5-ex01 à ex05 | La régression linéaire | O1, O2 | 1 | non |
| 1.5-ex06 | Exercice clé : régression linéaire codée de zéro, puis avec scikit-learn | O1 | 3 | non |
| 1.5-ex07 à ex11 | Classer | O2, O5 | 1 | non |
| 1.5-ex12 à ex13 | Les arbres | O3 | 2 | non |
| 1.5-ex14 à ex16 | Les ensembles | O3 | 2 | non |
| 1.5-ex17 à ex20 | Regrouper sans étiquette | O4 | 2–3 | non |
| 1.5-ex21 à ex23 | Réduire et détecter | O4 | 2–3 | non |
| 1.5-ex24 à ex26 | Recommander et choisir | O5, O6 | 2–3 | non |

## Ressources matérielles

- **RAM maximale** : moins de 1,5 Go.
- **Téléchargements** : XGBoost et LightGBM, environ 150 Mo installés. TODO(vérifier).
- **Temps de calcul le plus long** : moins d'une minute pour un gradient boosting sur 50 000 lignes, sur 4 cœurs. TODO(vérifier).
- **Dépendances nouvelles** : xgboost, lightgbm.
- **API payante** : aucune.

## Point de contrôle sécurité et éthique

Une recommandation enferme parfois les clients dans les mêmes produits et favorise les gros vendeurs : la notion `recommandation` en parle en quelques lignes. Pas d'autre point.

## Ressources externes gratuites

| Ressource | Langue | Durée ou taille | Licence | Pourquoi |
| --- | --- | --- | --- | --- |
| [Guide utilisateur de scikit-learn](https://scikit-learn.org/stable/user_guide.html) | anglais | référence | BSD | Chaque algorithme du module, avec ses paramètres et des exemples. |
| [An Introduction to Statistical Learning, version Python](https://www.statlearning.com/) | anglais | livre | gratuit en ligne | Chapitres 3, 4, 8 et 12 pour ce module. |

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

- TODO(vérifier) : tailles et temps d'entraînement de XGBoost et LightGBM sur la machine minimale.
- TODO(vérifier) : les k plus proches voisins ne sont pas cités par le programme ; ils sont ajoutés comme base de la recommandation, à valider par le mainteneur.
- TODO(vérifier) : compléter le vocabulaire des notions ajoutées par la seconde passe d'audit (25/11/2026), en vérifiant chaque terme dans docs/glossaire.md.
