---
id: "1.7"
titre: "Feature engineering, pipelines et séries temporelles"
parcours: "01-ml"
promesse: "Préparer les données comme un professionnel : de bonnes features, un pipeline reproductible de bout en bout, des prévisions dans le temps et un modèle que l'on sait expliquer."
question_saut: "Tu construis déjà des pipelines scikit-learn ?"
qcm: true
prerequis: ["1.6"]
statut: brouillon
version: 1
mise_a_jour: 2026-11-25
---

# Fiche du module 1.7 — Feature engineering, pipelines et séries temporelles

## Extrait du programme

- **Contenu** : Encodage, normalisation, pipelines scikit-learn, séries temporelles (saisonnalité, prévision, validation dans le temps), interprétabilité (SHAP)
- **Exercice clé** : Pipeline reproductible de bout en bout

## Objectifs vérifiables

| Id | À la fin, l'apprenant sait… | Évalué par |
| --- | --- | --- |
| O1 | Encoder des catégories et mettre des valeurs à la même échelle. | ex01 à ex04, qcm |
| O2 | Créer des features utiles à partir de la connaissance du métier. | ex05 à ex08, qcm |
| O3 | Assembler un pipeline scikit-learn reproductible, de la donnée brute à la prédiction. | ex09 à ex13, exercice clé (ex26), qcm |
| O4 | Prévoir une série temporelle et la valider dans le temps. | ex14 à ex16, ex17 à ex21, exercice clé (ex26), qcm |
| O5 | Expliquer les prédictions d'un modèle avec SHAP. | ex22 à ex25, qcm |

## Chapitres

| Chapitre | Titre | Exercices |
| --- | --- | --- |
| 1 | Encoder et mettre à l'échelle | 4 |
| 2 | Créer des features | 4 |
| 3 | Des pipelines reproductibles | 5 |
| 4 | Comprendre une série temporelle | 3 |
| 5 | Prévoir | 5 |
| 6 | Expliquer un modèle | 5 |

## Notions, dans l'ordre

| Chapitre | Id de la notion | Notion | Objectif |
| --- | --- | --- | --- |
| 1 | `encoder` | Encoder des catégories | O1 |
| 1 | `encodage-cible` | Beaucoup de catégories : target encoding et hashing | O1 |
| 1 | `normaliser` | Normaliser et standardiser | O1 |
| 1 | `transformations-non-lineaires` | Redresser une distribution : le logarithme et les autres transformations | O1 |
| 1 | `discretiser` | Découper en tranches : la discrétisation | O1 |
| 1 | `imputer` | Compléter les valeurs manquantes dans un pipeline | O1 |
| 2 | `creer-features` | Créer de bonnes features | O2 |
| 2 | `croisements` | Combiner des features : les croisements | O2 |
| 2 | `features-dates` | Des features tirées des dates | O2 |
| 2 | `texte-tfidf` | Transformer du texte en nombres : sac de mots et TF-IDF | O2 |
| 2 | `selection-univariee` | Sélectionner les features : tests univariés et élimination récursive | O2 |
| 2 | `selection-features` | Garder les features utiles | O2 |
| 3 | `pipelines` | Les pipelines de scikit-learn | O3 |
| 3 | `column-transformer` | Traiter chaque type de colonne : ColumnTransformer | O3 |
| 3 | `transformateur-maison` | Écrire ton propre transformateur | O3 |
| 3 | `transformer-cible` | Transformer la cible | O3 |
| 3 | `reproductibilite` | Un résultat reproductible : graines aléatoires et versions | O3 |
| 3 | `script-entrainement` | Entraîner en une commande : le script d'entraînement | O3 |
| 3 | `sauvegarder` | Sauvegarder et recharger un pipeline | O3 |
| 4 | `series-temporelles` | Les séries temporelles : tendance et saisonnalité | O4 |
| 4 | `decomposition` | Décomposer une série : tendance, saison, résidu | O4 |
| 4 | `stationnarite` | La stationnarité | O4 |
| 4 | `autocorrelation` | L'autocorrélation | O4 |
| 4 | `baseline-temps` | Les prévisions naïves à battre | O4 |
| 5 | `features-temps` | Des features tirées du temps : décalages et moyennes mobiles | O4 |
| 5 | `prevoir` | Prévoir une série avec un modèle de ML | O4 |
| 5 | `validation-temps` | Valider dans le temps : la validation glissante | O4 |
| 5 | `lissage-exponentiel` | Le lissage exponentiel | O4 |
| 5 | `arima` | Le modèle ARIMA | O4 |
| 5 | `variables-externes` | Ajouter des variables externes : pluie, prix, fêtes | O4 |
| 5 | `horizon` | Prévoir plusieurs mois à l'avance | O4 |
| 6 | `importance-permutation` | L'importance des features par permutation | O5 |
| 6 | `dependance-partielle` | L'effet d'une feature : la dépendance partielle | O5 |
| 6 | `ice` | L'effet pour chaque individu : les courbes ICE | O5 |
| 6 | `shap` | Expliquer un modèle avec SHAP | O5 |
| 6 | `explications-locales` | Expliquer une seule prédiction | O5 |
| 6 | `limites-explication` | Ce qu'une explication ne dit pas | O5 |

## Vocabulaire du module

| Terme | Catégorie (A anglais / B transparent) | Notion où il apparaît |
| --- | --- | --- |
| encodage one-hot (one-hot encoding) | A | `encoder` |
| standardisation (scaling) | A | `normaliser` |
| feature engineering | A | `creer-features` |
| pipeline, transformer | A | `pipelines` |
| série temporelle (time series) | A | `series-temporelles` |
| tendance (trend), saisonnalité | A | `series-temporelles` |
| lag, moyenne mobile | A | `prevoir` |
| validation dans le temps (time series split) | A | `prevoir` |
| interprétabilité, valeurs SHAP | A | `shap` |
| imputation, SimpleImputer | A | `imputer` |
| sac de mots (bag of words), TF-IDF | A | `texte-tfidf` |
| sélection de features | A | `selection-features` |
| ColumnTransformer | A | `column-transformer` |
| graine aléatoire (random seed) | A | `reproductibilite` |
| prévision naïve, saisonnière | B | `baseline-temps` |
| lissage exponentiel | B | `lissage-exponentiel` |
| ARIMA | A | `arima` |
| horizon de prévision | B | `horizon` |
| importance par permutation | A | `importance-permutation` |
| dépendance partielle (partial dependence) | A | `dependance-partielle` |

## Fil rouge et ancrage local

- **Situation** : une ONG de Niamey veut anticiper la hausse du prix du mil pendant la période de soudure, pour prévoir ses distributions. Tu construis un pipeline qui prévoit les prix des mois suivants et explique ce qui les fait monter.
- **Personnages** : Issoufou, chargé de programme de l'ONG, qui doit convaincre ses financeurs.
- **Données utilisées** : les prix mensuels des céréales du Programme alimentaire mondial (WFP) pour le Niger, publiés sur HDX, et des données de pluie. Copie figée de quelques Mo dans le dépôt.

## Exercices prévus

| Id | Titre | Objectif | Difficulté (1–3) | Livrable non testable ? |
| --- | --- | --- | --- | --- |
| 1.7-ex01 à ex04 | Encoder et mettre à l'échelle | O1 | 1 | non |
| 1.7-ex05 à ex08 | Créer des features | O2 | 1 | non |
| 1.7-ex09 à ex13 | Des pipelines reproductibles | O3 | 2 | non |
| 1.7-ex14 à ex16 | Comprendre une série temporelle | O4 | 2 | non |
| 1.7-ex17 à ex21 | Prévoir | O4 | 2–3 | non |
| 1.7-ex22 à ex25 | Expliquer un modèle | O5 | 2–3 | non |
| 1.7-ex26 | Exercice clé : pipeline reproductible de bout en bout (une commande, mêmes résultats sur un autre PC) | O3, O4 | 3 | non |

## Ressources matérielles

- **RAM maximale** : moins de 2 Go (SHAP sur un échantillon).
- **Téléchargements** : shap et joblib, environ 50 Mo installés. TODO(vérifier). Données : quelques Mo, dans le dépôt.
- **Temps de calcul le plus long** : 1 à 2 minutes pour les valeurs SHAP d'un gradient boosting sur 1 000 lignes. TODO(vérifier).
- **Dépendances nouvelles** : shap, et statsmodels pour le lissage exponentiel et ARIMA (environ 40 Mo installés, TODO(vérifier)).
- **API payante** : aucune.

## Point de contrôle sécurité et éthique

Ne jamais charger un fichier de modèle (pickle, joblib) reçu d'une source inconnue : il peut exécuter du code. Expliqué dans la notion `sauvegarder`.

## Ressources externes gratuites

| Ressource | Langue | Durée ou taille | Licence | Pourquoi |
| --- | --- | --- | --- | --- |
| [scikit-learn : pipelines et transformations](https://scikit-learn.org/stable/modules/compose.html) | anglais | référence | BSD | Pipeline, ColumnTransformer et leurs pièges. |
| [Forecasting: Principles and Practice](https://otexts.com/fpp3/) | anglais | livre | gratuit en ligne | La référence pour comprendre la prévision des séries temporelles. |
| [Documentation de SHAP](https://shap.readthedocs.io/) | anglais | référence | MIT | Lire et tracer les explications d'un modèle. |

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

- TODO(vérifier) : couverture des prix WFP pour le Niger (marchés, mil, années) et source de pluie libre et légère.
- TODO(vérifier) : le livre FPP3 utilise R ; garder seulement les chapitres de concepts et le signaler aux apprenants.
- TODO(vérifier) : compléter le vocabulaire des notions ajoutées par la seconde passe d'audit (25/11/2026), en vérifiant chaque terme dans docs/glossaire.md.
