---
id: "1.2"
titre: "Manipulation de données"
parcours: "01-ml"
promesse: "Transformer un fichier de données réel et sale en réponses claires : charger, nettoyer, combiner, résumer et montrer avec pandas et des graphiques."
question_saut: "Tu maîtrises déjà pandas ?"
qcm: true
prerequis: ["0.4", "0.5"]
statut: brouillon
version: 1
mise_a_jour: 2026-11-25
---

# Fiche du module 1.2 — Manipulation de données

## Extrait du programme

- **Contenu** : pandas, nettoyage, valeurs manquantes, jointures, agrégations, visualisation (matplotlib, seaborn)
- **Exercice clé** : Analyse exploratoire complète d'un jeu de données réel et sale

## Objectifs vérifiables

| Id | À la fin, l'apprenant sait… | Évalué par |
| --- | --- | --- |
| O1 | Charger un jeu de données avec pandas et en décrire le contenu. | ex01 à ex03, qcm |
| O2 | Sélectionner, filtrer et convertir les colonnes d'un tableau. | ex04 à ex07, qcm |
| O3 | Traiter les valeurs manquantes, les doublons et les valeurs aberrantes, en justifiant chaque choix. | ex08 à ex10, exercice clé (ex21), qcm |
| O4 | Combiner et résumer des tables : groupby, merge, pivot. | ex04 à ex07, ex11 à ex14, ex15 à ex16, exercice clé (ex21), qcm |
| O5 | Choisir et construire le bon graphique pour une question. | ex17 à ex18, exercice clé (ex21), qcm |
| O6 | Mener une analyse exploratoire complète et en tirer des conclusions. | ex19 à ex20, exercice clé (ex21), qcm |

## Chapitres

| Chapitre | Titre | Exercices |
| --- | --- | --- |
| 1 | Jupyter et pandas | 3 |
| 2 | Sélectionner et transformer | 4 |
| 3 | Nettoyer | 3 |
| 4 | Combiner et résumer | 4 |
| 5 | Les données dans le temps | 2 |
| 6 | Visualiser | 2 |
| 7 | L'analyse exploratoire | 3 |

## Notions, dans l'ordre

| Chapitre | Id de la notion | Notion | Objectif |
| --- | --- | --- | --- |
| 1 | `notebooks` | Les notebooks Jupyter dans VS Code | O1 |
| 1 | `dataframe` | Charger un fichier : DataFrame et Series | O1 |
| 1 | `lire-formats` | Lire un fichier Excel, JSON ou une base SQL | O1 |
| 1 | `explorer` | Explorer un tableau : head, info, describe | O1 |
| 2 | `selectionner` | Sélectionner des lignes et des colonnes | O2 |
| 2 | `types-colonnes` | Les types de colonnes et leurs conversions | O2 |
| 2 | `nouvelles-colonnes` | Créer de nouvelles colonnes | O4 |
| 2 | `apply` | Appliquer une fonction à une colonne | O2 |
| 2 | `vectoriser-pandas` | Calculer vite : éviter les boucles avec pandas | O2 |
| 3 | `valeurs-manquantes` | Valeurs manquantes : les trouver, décider quoi en faire | O3 |
| 3 | `doublons-aberrantes` | Doublons, fautes de saisie et valeurs aberrantes | O3 |
| 3 | `nettoyer-texte` | Nettoyer du texte : casse, espaces, accents | O3 |
| 4 | `groupby` | Regrouper et agréger avec groupby | O4 |
| 4 | `crosstab` | Croiser deux variables : les tableaux croisés | O4 |
| 4 | `merge` | Joindre deux tables avec merge | O4 |
| 4 | `pivot-melt` | Changer la forme d'un tableau : pivot et melt | O4 |
| 4 | `index-pandas` | Comprendre l'index, et le remettre à plat | O4 |
| 5 | `dates` | Travailler avec des dates | O4 |
| 5 | `reechantillonner` | Regrouper par semaine ou par mois, et lisser une série | O4 |
| 6 | `choisir-graphique` | Choisir le bon graphique pour sa question | O5 |
| 6 | `matplotlib` | Tracer un graphique avec matplotlib | O5 |
| 6 | `seaborn` | Des graphiques statistiques avec seaborn | O5 |
| 7 | `eda` | Mener une analyse exploratoire de bout en bout | O6 |
| 7 | `notebook-propre` | Un notebook propre et reproductible | O6 |
| 7 | `exporter` | Exporter tes résultats : CSV, Excel, images | O6 |
| 7 | `conclusions` | Rédiger les conclusions d'une analyse | O6 |

## Vocabulaire du module

| Terme | Catégorie (A anglais / B transparent) | Notion où il apparaît |
| --- | --- | --- |
| notebook, cellule | A | `notebooks` |
| DataFrame, Series, index | A | `dataframe` |
| dtype | A | `types-colonnes` |
| valeur manquante (NaN) | A | `valeurs-manquantes` |
| imputation | B | `valeurs-manquantes` |
| doublon, valeur aberrante (outlier) | A | `doublons-aberrantes` |
| agrégation, groupby | A | `groupby` |
| jointure (merge, join) | A | `merge` |
| format long, format large | B | `pivot-melt` |
| analyse exploratoire (EDA) | A | `eda` |

## Fil rouge et ancrage local

- **Situation** : Afi, journaliste économique à Cotonou, enquête sur la hausse du prix du maïs au marché Dantokpa. Avec elle, tu nettoies de vraies séries de prix alimentaires, tu les croises avec d'autres tables et tu trouves ce qui a vraiment augmenté, où et quand.
- **Personnages** : Afi (journaliste), son rédacteur en chef qui veut « un graphique, pas un tableau ».
- **Données utilisées** : les prix alimentaires du Programme alimentaire mondial (WFP) pour le Bénin, publiés sur la plateforme HDX : données réelles, avec des trous, des unités mélangées et des doublons. Une copie de quelques Mo est figée dans le dépôt.

## Exercices prévus

| Id | Titre | Objectif | Difficulté (1–3) | Livrable non testable ? |
| --- | --- | --- | --- | --- |
| 1.2-ex01 à ex03 | Jupyter et pandas | O1 | 1 | non |
| 1.2-ex04 à ex07 | Sélectionner et transformer | O2, O4 | 1 | non |
| 1.2-ex08 à ex10 | Nettoyer | O3 | 2 | non |
| 1.2-ex11 à ex14 | Combiner et résumer | O4 | 2 | non |
| 1.2-ex15 à ex16 | Les données dans le temps | O4 | 2–3 | non |
| 1.2-ex17 à ex18 | Visualiser | O5 | 2–3 | non |
| 1.2-ex19 à ex20 | L'analyse exploratoire | O6 | 2–3 | non |
| 1.2-ex21 | Exercice clé : analyse exploratoire complète d'un jeu de données réel et sale (notebook commenté) | O3 à O6 | 3 | oui → GRILLE.md (conclusions et qualité du notebook) |

## Ressources matérielles

- **RAM maximale** : moins de 1 Go.
- **Téléchargements** : pandas, matplotlib, seaborn et Jupyter, environ 150 Mo installés. TODO(vérifier). Données : quelques Mo, dans le dépôt.
- **Temps de calcul le plus long** : quelques secondes.
- **Dépendances nouvelles** : pandas, seaborn, jupyter (ipykernel) ; openpyxl, pour lire les fichiers Excel (quelques Mo).
- **API payante** : aucune.

## Point de contrôle sécurité et éthique

Un graphique peut tromper (axe tronqué, moyenne qui cache les écarts) : la notion `matplotlib` montre comment ne pas tromper son lecteur. Citer la source et la licence des données dans chaque analyse.

## Ressources externes gratuites

| Ressource | Langue | Durée ou taille | Licence | Pourquoi |
| --- | --- | --- | --- | --- |
| [Kaggle Learn : Pandas](https://www.kaggle.com/learn/pandas) | anglais | 4 h | gratuit en ligne | Des exercices courts pour pratiquer chaque opération de pandas. |
| [10 minutes pour découvrir pandas](https://pandas.pydata.org/docs/user_guide/10min.html) | anglais | 30 min | BSD | Le tour rapide officiel, à garder sous la main. |

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

- TODO(vérifier) : licence des prix alimentaires du WFP sur HDX et conditions de redistribution d'une copie dans le dépôt.
- TODO(vérifier) : couverture des données pour le Bénin (marchés, produits, années) ; sinon prendre un pays voisin.
- TODO(vérifier) : tailles installées de pandas, seaborn et Jupyter.
- TODO(vérifier) : compléter le vocabulaire du module pour les notions ajoutées par l'audit du 25/11/2026 (vérifier chaque terme dans docs/glossaire.md).
