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
| O1 | Charger un jeu de données avec pandas et en décrire le contenu. | ex01 à ex04, ex29 à ex31, qcm |
| O2 | Sélectionner, filtrer et convertir les colonnes d'un tableau. | ex05 à ex09, qcm |
| O3 | Traiter les valeurs manquantes, les doublons et les valeurs aberrantes, en justifiant chaque choix. | ex10 à ex14, exercice clé (ex35), qcm |
| O4 | Combiner et résumer des tables : groupby, merge, pivot. | ex05 à ex09, ex15 à ex17, ex18 à ex21, ex22 à ex24, exercice clé (ex35), qcm |
| O5 | Choisir et construire le bon graphique pour une question. | ex25 à ex28, exercice clé (ex35), qcm |
| O6 | Mener une analyse exploratoire complète et en tirer des conclusions. | ex32 à ex34, exercice clé (ex35), qcm |

## Chapitres

| Chapitre | Titre | Exercices |
| --- | --- | --- |
| 1 | Jupyter et pandas | 4 |
| 2 | Sélectionner et transformer | 5 |
| 3 | Nettoyer | 5 |
| 4 | Combiner | 3 |
| 5 | Résumer et remodeler | 4 |
| 6 | Les données dans le temps | 3 |
| 7 | Visualiser | 4 |
| 8 | Les gros fichiers | 3 |
| 9 | L'analyse exploratoire | 4 |

## Notions, dans l'ordre

| Chapitre | Id de la notion | Notion | Objectif |
| --- | --- | --- | --- |
| 1 | `notebooks` | Les notebooks Jupyter dans VS Code | O1 |
| 1 | `dataframe` | Charger un fichier : DataFrame et Series | O1 |
| 1 | `lire-formats` | Lire un fichier Excel, JSON ou une base SQL | O1 |
| 1 | `explorer` | Explorer un tableau : head, info, describe | O1 |
| 1 | `value-counts` | Compter les valeurs : value_counts | O1 |
| 1 | `trier-pandas` | Trier un tableau | O1 |
| 2 | `selectionner` | Sélectionner des colonnes et des lignes : loc et iloc | O2 |
| 2 | `filtrer` | Filtrer des lignes avec une condition | O2 |
| 2 | `query-isin` | Filtrer autrement : query et isin | O2 |
| 2 | `types-colonnes` | Les types de colonnes et leurs conversions | O2 |
| 2 | `categories` | Les données catégorielles | O2 |
| 2 | `nouvelles-colonnes` | Créer de nouvelles colonnes | O4 |
| 2 | `apply` | Appliquer une fonction à une colonne | O2 |
| 2 | `vectoriser-pandas` | Calculer vite : éviter les boucles avec pandas | O2 |
| 3 | `valeurs-manquantes` | Valeurs manquantes : les trouver, décider quoi en faire | O3 |
| 3 | `doublons-aberrantes` | Repérer et supprimer les doublons | O3 |
| 3 | `incoherences` | Corriger les fautes de saisie et les valeurs incohérentes | O3 |
| 3 | `aberrantes` | Les valeurs aberrantes : erreur ou vrai cas rare ? | O3 |
| 3 | `nettoyer-texte` | Nettoyer du texte : casse, espaces, accents | O3 |
| 3 | `str-pandas` | Les méthodes de texte de pandas : .str | O3 |
| 3 | `decouper-classes` | Découper en classes : cut et qcut | O3 |
| 4 | `concat` | Empiler des tableaux : concat | O4 |
| 4 | `merge` | Joindre deux tables avec merge | O4 |
| 4 | `verifier-jointure` | Vérifier une jointure : lignes perdues et doublons | O4 |
| 4 | `types-jointures` | Les types de jointure : inner, left, right, outer | O4 |
| 4 | `merge-asof` | Joindre sur la date la plus proche : merge_asof | O4 |
| 5 | `groupby` | Regrouper et agréger avec groupby | O4 |
| 5 | `groupby-avance` | Aller plus loin avec groupby : agg, transform, filter | O4 |
| 5 | `crosstab` | Croiser deux variables : les tableaux croisés | O4 |
| 5 | `pivot-melt` | Changer la forme d'un tableau : pivot et melt | O4 |
| 5 | `explode` | Déplier des listes : explode | O4 |
| 5 | `index-pandas` | Comprendre l'index, et le remettre à plat | O4 |
| 6 | `dates` | Travailler avec des dates | O4 |
| 6 | `reechantillonner` | Regrouper par semaine ou par mois, et lisser une série | O4 |
| 6 | `fenetres-glissantes` | Les fenêtres glissantes : rolling | O4 |
| 6 | `fuseaux` | Fuseaux horaires et décalages | O4 |
| 6 | `decalages-temps` | Comparer à la période précédente : shift et diff | O4 |
| 7 | `choisir-graphique` | Choisir le bon graphique pour sa question | O5 |
| 7 | `matplotlib` | Tracer un graphique avec matplotlib | O5 |
| 7 | `sous-graphiques` | Plusieurs graphiques côte à côte | O5 |
| 7 | `seaborn` | Des graphiques statistiques avec seaborn | O5 |
| 7 | `graphiques-temps` | Tracer une série dans le temps | O5 |
| 7 | `graphiques-interactifs` | Des graphiques interactifs avec Plotly | O5 |
| 8 | `memoire-pandas` | Réduire la mémoire d'un tableau | O1 |
| 8 | `morceaux` | Lire un gros fichier par morceaux | O1 |
| 8 | `parquet-pandas` | Un format plus rapide : Parquet | O1 |
| 8 | `duckdb-pandas` | Interroger un gros fichier en SQL avec DuckDB | O1 |
| 8 | `polars` | Une alternative rapide à pandas : Polars | O1 |
| 9 | `eda` | Mener une analyse exploratoire de bout en bout | O6 |
| 9 | `notebook-propre` | Un notebook propre et reproductible | O6 |
| 9 | `exporter` | Exporter tes résultats : CSV, Excel, images | O6 |
| 9 | `conclusions` | Rédiger les conclusions d'une analyse | O6 |
| 9 | `profiler-donnees` | Un rapport automatique pour démarrer une analyse | O6 |

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
| loc, iloc | A | `selectionner` |
| masque booléen (boolean mask) | A | `filtrer` |
| apply | A | `apply` |
| vectorisation | B | `vectoriser-pandas` |
| crosstab | A | `crosstab` |
| index, reset_index | A | `index-pandas` |
| rééchantillonnage (resample), moyenne mobile | A | `reechantillonner` |
| export, Parquet | A | `exporter` |

## Fil rouge et ancrage local

- **Situation** : Afi, journaliste économique à Cotonou, enquête sur la hausse du prix du maïs au marché Dantokpa. Avec elle, tu nettoies de vraies séries de prix alimentaires, tu les croises avec d'autres tables et tu trouves ce qui a vraiment augmenté, où et quand.
- **Personnages** : Afi (journaliste), son rédacteur en chef qui veut « un graphique, pas un tableau ».
- **Données utilisées** : les prix alimentaires du Programme alimentaire mondial (WFP) pour le Bénin, publiés sur la plateforme HDX : données réelles, avec des trous, des unités mélangées et des doublons. Une copie de quelques Mo est figée dans le dépôt.

## Exercices prévus

| Id | Titre | Objectif | Difficulté (1–3) | Livrable non testable ? |
| --- | --- | --- | --- | --- |
| 1.2-ex01 à ex04 | Jupyter et pandas | O1 | 1 | non |
| 1.2-ex05 à ex09 | Sélectionner et transformer | O2, O4 | 1 | non |
| 1.2-ex10 à ex14 | Nettoyer | O3 | 1 | non |
| 1.2-ex15 à ex17 | Combiner | O4 | 2 | non |
| 1.2-ex18 à ex21 | Résumer et remodeler | O4 | 2 | non |
| 1.2-ex22 à ex24 | Les données dans le temps | O4 | 2 | non |
| 1.2-ex25 à ex28 | Visualiser | O5 | 2–3 | non |
| 1.2-ex29 à ex31 | Les gros fichiers | O1 | 2–3 | non |
| 1.2-ex32 à ex34 | L'analyse exploratoire | O6 | 2–3 | non |
| 1.2-ex35 | Exercice clé : analyse exploratoire complète d'un jeu de données réel et sale (notebook commenté) | O3 à O6 | 3 | oui → GRILLE.md (conclusions et qualité du notebook) |

## Ressources matérielles

- **RAM maximale** : moins de 1 Go.
- **Téléchargements** : pandas, matplotlib, seaborn et Jupyter, environ 150 Mo installés. TODO(vérifier). Données : quelques Mo, dans le dépôt.
- **Temps de calcul le plus long** : quelques secondes.
- **Dépendances nouvelles** : pandas, seaborn, jupyter (ipykernel), et openpyxl pour lire les fichiers Excel.
- **API payante** : aucune.

## Point de contrôle sécurité et éthique

Un graphique peut tromper (axe tronqué, moyenne qui cache les écarts) : la notion `matplotlib` montre comment ne pas tromper son lecteur. Citer la source et la licence des données dans chaque analyse.

## Ressources externes gratuites

| Ressource | Langue | Type | Licence ou accès | Pourquoi |
| --- | --- | --- | --- | --- |
| [Python for Data Analysis, 3e édition](https://wesmckinney.com/book/) | anglais | livre en ligne | accès libre | Le livre de l'auteur de pandas, en accès libre. |
| [Kaggle Learn : Pandas et Data Visualization](https://www.kaggle.com/learn) | anglais | cours interactifs | gratuit | Des exercices courts pour chaque opération. |
| [Fundamentals of Data Visualization](https://clauswilke.com/dataviz/) | anglais | livre en ligne | CC BY-NC-ND 4.0 | Choisir et soigner ses graphiques. |
| [Tutoriel de seaborn](https://seaborn.pydata.org/tutorial.html) | anglais | documentation | BSD | Les graphiques statistiques, avec exemples. |
| [Documentation de Plotly](https://plotly.com/python/) | anglais | documentation | MIT | Des graphiques interactifs en Python. |

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
- TODO(vérifier) : compléter le vocabulaire des notions ajoutées par la seconde passe d'audit (25/11/2026), en vérifiant chaque terme dans docs/glossaire.md.
