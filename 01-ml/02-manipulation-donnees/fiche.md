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
| O1 | Charger un jeu de données avec pandas et en décrire le contenu. | ex01 à ex05, ex49 à ex51, qcm |
| O2 | Sélectionner, filtrer et convertir les colonnes d'un tableau. | ex06 à ex10, ex11 à ex15, qcm |
| O3 | Traiter les valeurs manquantes, les doublons et les valeurs aberrantes, en justifiant chaque choix. | ex16 à ex20, ex21 à ex23, exercice clé (ex57), qcm |
| O4 | Combiner et résumer des tables : groupby, merge, pivot. | ex24 à ex28, ex29 à ex31, ex32 à ex34, exercice clé (ex57), qcm |
| O5 | Choisir et construire le bon graphique pour une question. | ex40 à ex43, ex44 à ex48, exercice clé (ex57), qcm |
| O6 | Mener une analyse exploratoire complète et en tirer des conclusions. | ex52 à ex56, exercice clé (ex57), qcm |
| O7 | Manipuler des données datées : lire des dates, choisir une période, comparer, rééchantillonner. | ex35 à ex39, exercice clé (ex57), qcm |

## Chapitres

| Chapitre | Titre | Exercices |
| --- | --- | --- |
| 1 | Jupyter et pandas | 5 |
| 2 | Sélectionner et filtrer | 5 |
| 3 | Transformer des colonnes | 5 |
| 4 | Nettoyer les valeurs | 5 |
| 5 | Nettoyer le texte et les unités | 3 |
| 6 | Combiner des tables | 5 |
| 7 | Résumer | 3 |
| 8 | Remodeler | 3 |
| 9 | Les données dans le temps | 5 |
| 10 | Les bases d'un graphique | 4 |
| 11 | Montrer les données | 5 |
| 12 | Les gros fichiers | 3 |
| 13 | L'analyse exploratoire | 6 |

## Notions, dans l'ordre

| Chapitre | Id de la notion | Notion | Objectif |
| --- | --- | --- | --- |
| 1 | `notebooks` | Les notebooks Jupyter dans VS Code | O1 |
| 1 | `dataframe` | Series et DataFrame : les deux objets de pandas | O1 |
| 1 | `lire-csv` | Charger un CSV : séparateur, virgule décimale, encodage | O1 |
| 1 | `lire-formats` | Lire un fichier Excel, JSON ou une base SQL | O1 |
| 1 | `explorer` | Explorer un tableau : head, info, describe | O1 |
| 1 | `statistiques-colonne` | Les statistiques d'une colonne : moyenne, médiane, écart type | O1 |
| 1 | `value-counts` | Compter les valeurs : value_counts | O1 |
| 1 | `trier-pandas` | Trier un tableau | O1 |
| 2 | `selectionner` | Sélectionner des colonnes et des lignes : loc et iloc | O2 |
| 2 | `filtrer` | Filtrer des lignes avec une condition | O2 |
| 2 | `query-isin` | Filtrer autrement : query et isin | O2 |
| 2 | `renommer-supprimer` | Renommer, réordonner et supprimer des colonnes | O2 |
| 2 | `copie-vue` | Modifier sans surprise : copie et vue | O2 |
| 2 | `types-colonnes` | Les types de colonnes et leurs conversions | O2 |
| 2 | `categories` | Les données catégorielles | O2 |
| 3 | `nouvelles-colonnes` | Créer de nouvelles colonnes | O2 |
| 3 | `colonnes-conditionnelles` | Des colonnes selon des conditions : where et select | O2 |
| 3 | `recoder` | Recoder des valeurs : map et replace | O2 |
| 3 | `decouper-classes` | Découper en classes : cut et qcut | O2 |
| 3 | `apply` | Appliquer une fonction à une colonne | O2 |
| 3 | `vectoriser-pandas` | Calculer vite : éviter les boucles avec pandas | O2 |
| 3 | `chainage-methodes` | Enchaîner les étapes proprement : assign et pipe | O2 |
| 4 | `valeurs-manquantes` | Les valeurs manquantes : les trouver et comprendre pourquoi | O3 |
| 4 | `remplir-manquants` | Remplir les valeurs manquantes : fillna et interpolation | O3 |
| 4 | `doublons-aberrantes` | Repérer et supprimer les doublons | O3 |
| 4 | `incoherences` | Corriger les fautes de saisie et les valeurs incohérentes | O3 |
| 4 | `aberrantes` | Les valeurs aberrantes : erreur ou vrai cas rare ? | O3 |
| 4 | `valider-tableau` | Vérifier un tableau automatiquement : règles et assertions | O3 |
| 4 | `journal-nettoyage` | Garder une trace de chaque décision de nettoyage | O3 |
| 5 | `nettoyer-texte` | Nettoyer du texte : casse, espaces, accents | O3 |
| 5 | `str-pandas` | Les méthodes de texte de pandas : .str | O3 |
| 5 | `extraire-regex` | Extraire une information avec une expression régulière | O3 |
| 5 | `nombres-en-texte` | Des nombres écrits en texte : « 1 250,50 FCFA » | O3 |
| 5 | `harmoniser-unites` | Harmoniser les unités : kilo, sac, tas | O3 |
| 6 | `concat` | Empiler des tableaux : concat | O4 |
| 6 | `merge` | Joindre deux tables avec merge | O4 |
| 6 | `types-jointures` | Les types de jointure : inner, left, right, outer | O4 |
| 6 | `preparer-cles` | Préparer les clés : quand « Cotonou » ne rencontre pas « COTONOU » | O4 |
| 6 | `verifier-jointure` | Vérifier une jointure : lignes perdues et doublons | O4 |
| 6 | `merge-asof` | Joindre sur la date la plus proche : merge_asof | O4 |
| 6 | `comparer-tables` | Comparer deux versions d'un tableau | O4 |
| 7 | `groupby` | Regrouper et agréger avec groupby | O4 |
| 7 | `agregations-nommees` | Plusieurs résumés à la fois : les agrégations nommées | O4 |
| 7 | `groupby-avance` | Aller plus loin avec groupby : transform et filter | O4 |
| 7 | `crosstab` | Croiser deux variables : les tableaux croisés | O4 |
| 7 | `pivot-table` | Le tableau croisé dynamique : pivot_table | O4 |
| 8 | `format-long-large` | Format long ou format large : lequel pour quoi | O4 |
| 8 | `pivot-melt` | Changer la forme d'un tableau : pivot et melt | O4 |
| 8 | `stack-unstack` | Empiler et désempiler : stack et unstack | O4 |
| 8 | `index-pandas` | Comprendre l'index à plusieurs niveaux, et le remettre à plat | O4 |
| 8 | `explode` | Déplier des listes : explode | O4 |
| 9 | `convertir-dates` | Lire des dates écrites de mille façons : to_datetime | O7 |
| 9 | `dates` | Les dates comme index : sélectionner une période | O7 |
| 9 | `composantes-dates` | Extraire le mois, le jour, la saison : l'accesseur .dt | O7 |
| 9 | `decalages-temps` | Comparer à la période précédente : shift et diff | O7 |
| 9 | `reechantillonner` | Regrouper par semaine ou par mois : resample | O7 |
| 9 | `fenetres-glissantes` | Lisser une série : les fenêtres glissantes | O7 |
| 9 | `periodes-manquantes` | Repérer les périodes manquantes dans une série | O7 |
| 9 | `fuseaux` | Fuseaux horaires et décalages | O7 |
| 10 | `choisir-graphique` | Choisir le bon graphique pour sa question | O5 |
| 10 | `matplotlib` | Tracer un graphique avec matplotlib | O5 |
| 10 | `graphiques-pandas` | Tracer directement depuis pandas | O5 |
| 10 | `anatomie-graphique` | Titre, axes, légende, source : l'anatomie d'un graphique | O5 |
| 10 | `couleurs-graphique` | Choisir les couleurs d'un graphique | O5 |
| 10 | `sous-graphiques` | Plusieurs graphiques côte à côte | O5 |
| 11 | `montrer-quantites` | Comparer des quantités : les barres | O5 |
| 11 | `montrer-distributions` | Montrer une distribution : histogramme et boîte | O5 |
| 11 | `montrer-relations` | Montrer une relation : le nuage de points | O5 |
| 11 | `graphiques-temps` | Tracer une série dans le temps | O5 |
| 11 | `montrer-proportions` | Montrer des proportions sans tromper | O5 |
| 11 | `seaborn` | Des graphiques statistiques avec seaborn | O5 |
| 11 | `carte-simple` | Placer des marchés sur une carte | O5 |
| 11 | `graphiques-interactifs` | Des graphiques interactifs avec Plotly | O5 |
| 12 | `memoire-pandas` | Réduire la mémoire d'un tableau | O1 |
| 12 | `morceaux` | Lire un gros fichier par morceaux | O1 |
| 12 | `parquet-pandas` | Un format plus rapide : Parquet | O1 |
| 12 | `duckdb-pandas` | Interroger un gros fichier en SQL avec DuckDB | O1 |
| 12 | `polars` | Une alternative rapide à pandas : Polars | O1 |
| 13 | `questions-analyse` | Commencer par des questions | O6 |
| 13 | `profiler-donnees` | Un rapport automatique pour démarrer une analyse | O6 |
| 13 | `eda` | Mener une analyse exploratoire de bout en bout | O6 |
| 13 | `verifier-intuition` | Vérifier une intuition avec les données | O6 |
| 13 | `notebook-propre` | Un notebook propre et reproductible | O6 |
| 13 | `exporter` | Exporter tes résultats : CSV, Excel, images | O6 |
| 13 | `conclusions` | Rédiger les conclusions d'une analyse | O6 |
| 13 | `limites-analyse` | Dire les limites de son analyse | O6 |

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
| read_csv, séparateur (sep), décimale | A | `lire-csv` |
| copie, vue (copy-on-write) | A | `copie-vue` |
| recodage | B | `recoder` |
| chaînage de méthodes (method chaining) | A | `chainage-methodes` |
| interpolation | B | `remplir-manquants` |
| règle de validation, assertion | B | `valider-tableau` |
| expression régulière (regex) | A | `extraire-regex` |
| unité de mesure | B | `harmoniser-unites` |
| clé de jointure | B | `preparer-cles` |
| concat, merge_asof | A | `concat` |
| tableau croisé dynamique (pivot table) | A | `pivot-table` |
| stack, unstack | A | `stack-unstack` |
| index à plusieurs niveaux (MultiIndex) | A | `index-pandas` |
| accesseur .dt, horodatage (timestamp) | A | `composantes-dates` |
| décalage (shift), différence (diff) | A | `decalages-temps` |
| fenêtre glissante (rolling window) | A | `fenetres-glissantes` |
| histogramme, boîte à moustaches (boxplot) | A | `montrer-distributions` |
| nuage de points (scatter plot) | A | `montrer-relations` |
| Parquet, DuckDB, Polars | A | `parquet-pandas` |
| profilage des données (profiling) | A | `profiler-donnees` |

## Fil rouge et ancrage local

- **Situation** : Afi, journaliste économique à Cotonou, enquête sur la hausse du prix du maïs au marché Dantokpa. Avec elle, tu nettoies de vraies séries de prix alimentaires, tu les croises avec d'autres tables et tu trouves ce qui a vraiment augmenté, où et quand.
- **Personnages** : Afi (journaliste), son rédacteur en chef qui veut « un graphique, pas un tableau ».
- **Données utilisées** : les prix alimentaires du Programme alimentaire mondial (WFP) pour le Bénin, publiés sur la plateforme HDX : données réelles, avec des trous, des unités mélangées et des doublons. Une copie de quelques Mo est figée dans le dépôt.

## Exercices prévus

| Id | Titre | Objectif | Difficulté (1–3) | Livrable non testable ? |
| --- | --- | --- | --- | --- |
| 1.2-ex01 à ex05 | Jupyter et pandas | O1 | 1 | non |
| 1.2-ex06 à ex10 | Sélectionner et filtrer | O2 | 1 | non |
| 1.2-ex11 à ex15 | Transformer des colonnes | O2 | 1 | non |
| 1.2-ex16 à ex20 | Nettoyer les valeurs | O3 | 1 | non |
| 1.2-ex21 à ex23 | Nettoyer le texte et les unités | O3 | 2 | non |
| 1.2-ex24 à ex28 | Combiner des tables | O4 | 2 | non |
| 1.2-ex29 à ex31 | Résumer | O4 | 2 | non |
| 1.2-ex32 à ex34 | Remodeler | O4 | 2 | non |
| 1.2-ex35 à ex39 | Les données dans le temps | O7 | 2–3 | non |
| 1.2-ex40 à ex43 | Les bases d'un graphique | O5 | 2–3 | non |
| 1.2-ex44 à ex48 | Montrer les données | O5 | 2–3 | non |
| 1.2-ex49 à ex51 | Les gros fichiers | O1 | 2–3 | non |
| 1.2-ex52 à ex56 | L'analyse exploratoire | O6 | 2–3 | non |
| 1.2-ex57 | Exercice clé : analyse exploratoire complète d'un jeu de données réel et sale (notebook commenté) | O3 à O7 | 3 | oui → GRILLE.md (conclusions et qualité du notebook) |

## Ressources matérielles

- **RAM maximale** : moins de 1 Go.
- **Téléchargements** : pandas, matplotlib, seaborn et Jupyter, environ 150 Mo installés. TODO(vérifier). Données : quelques Mo, dans le dépôt.
- **Temps de calcul le plus long** : quelques secondes.
- **Dépendances nouvelles** : pandas, seaborn, jupyter (ipykernel), openpyxl (fichiers Excel), plotly (graphiques interactifs et carte), pyarrow (Parquet), duckdb et polars (gros fichiers, chapitre 12).
- **API payante** : aucune.

## Point de contrôle sécurité et éthique

Un graphique peut tromper (axe tronqué, moyenne qui cache les écarts, camembert déformé) : les notions `anatomie-graphique` et `montrer-proportions` montrent comment ne pas tromper son lecteur. Citer la source et la licence des données dans chaque analyse (notion `anatomie-graphique`). Le journal de nettoyage (`journal-nettoyage`) rend chaque décision vérifiable par un tiers.

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
- TODO(vérifier) : vérifier chaque terme du vocabulaire dans docs/glossaire.md (revue manuelle du 25/11/2026).
- TODO(vérifier) : fond de carte libre et léger pour la notion `carte-simple` (fonctionnement hors ligne).
