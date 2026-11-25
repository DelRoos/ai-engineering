---
id: "4.5"
titre: "Pipelines de données"
parcours: "04-production"
promesse: "Alimenter tes systèmes d'IA automatiquement et sans erreur : des pipelines planifiés, qui vérifient la qualité des données et se relancent sans risque."
question_saut: "Tu as déjà construit un pipeline de données planifié ?"
qcm: true
prerequis: ["1.2", "4.3"]
statut: brouillon
version: 1
mise_a_jour: 2026-11-25
---

# Fiche du module 4.5 — Pipelines de données

## Extrait du programme

- **Contenu** : ETL et ELT, orchestration (Prefect, Dagster ou Airflow), contrôle de qualité des données, formats (Parquet), DuckDB, notions de traitement distribué (Spark)
- **Exercice clé** : Pipeline qui met à jour chaque nuit la base documentaire du RAG

## Objectifs vérifiables

| Id | À la fin, l'apprenant sait… | Évalué par |
| --- | --- | --- |
| O1 | Concevoir un pipeline ETL ou ELT qu'on peut relancer sans risque. | ex01 à ex03, ex13 à ex14, exercice clé (ex15), qcm |
| O2 | Orchestrer et planifier des tâches. | ex04 à ex06, exercice clé (ex15), qcm |
| O3 | Contrôler automatiquement la qualité des données. | ex07 à ex09, exercice clé (ex15), qcm |
| O4 | Stocker et interroger efficacement avec Parquet et DuckDB. | ex10 à ex12, qcm |
| O5 | Savoir quand un traitement distribué devient nécessaire. | ex16 à ex17, qcm |

## Chapitres

| Chapitre | Titre | Exercices |
| --- | --- | --- |
| 1 | Les pipelines | 3 |
| 2 | Orchestrer | 3 |
| 3 | La qualité des données | 3 |
| 4 | Stocker et interroger | 3 |
| 5 | Alimenter un RAG | 3 |
| 6 | Passer à l'échelle | 2 |

## Notions, dans l'ordre

| Chapitre | Id de la notion | Notion | Objectif |
| --- | --- | --- | --- |
| 1 | `etl-elt` | ETL et ELT | O1 |
| 1 | `lots-continu` | Par lots ou en continu | O1 |
| 1 | `idempotence` | Un pipeline qu'on peut relancer sans risque | O1 |
| 1 | `incremental` | Ne traiter que le nouveau : l'incrémental | O1 |
| 1 | `backfill` | Rejouer le passé : le backfill | O1 |
| 2 | `orchestrateur` | Pourquoi un orchestrateur | O2 |
| 2 | `prefect` | Un pipeline avec Prefect | O2 |
| 2 | `planifier` | Planifier : toutes les nuits, toutes les heures | O2 |
| 2 | `echecs-reprises` | Gérer les échecs et les reprises | O2 |
| 2 | `parametres-pipeline` | Paramétrer et configurer un pipeline | O2 |
| 3 | `tester-donnees` | Tester les données | O3 |
| 3 | `schema-donnees` | Valider un schéma | O3 |
| 3 | `contrats-donnees` | Les contrats de données | O3 |
| 3 | `alerte-qualite` | Alerter quand les données sont mauvaises | O3 |
| 3 | `lignage` | D'où vient cette donnée ? Le lignage | O3 |
| 4 | `parquet` | Le format Parquet | O4 |
| 4 | `partitionner` | Partitionner des fichiers | O4 |
| 4 | `duckdb` | Analyser vite avec DuckDB | O4 |
| 4 | `transformer-sql` | Transformer en SQL : notions de dbt | O4 |
| 4 | `lac-entrepot` | Lac de données et entrepôt : les notions | O4 |
| 5 | `ingestion-documents` | Un pipeline d'ingestion de documents | O1 |
| 5 | `reindexer` | Mettre à jour l'index sans tout refaire | O1 |
| 6 | `spark` | Notions de traitement distribué : Spark | O5 |
| 6 | `quand-distribuer` | Quand en a-t-on vraiment besoin ? | O5 |

## Vocabulaire du module

| Terme | Catégorie (A anglais / B transparent) | Notion où il apparaît |
| --- | --- | --- |
| ETL, ELT | A | `etl-elt` |
| idempotent | A | `idempotence` |
| orchestrateur, DAG | A | `orchestrateur` |
| planification (scheduling), cron | A | `planifier` |
| qualité des données (data quality) | A | `tester-donnees` |
| Parquet, format colonne | A | `parquet` |
| DuckDB | A | `duckdb` |
| data lake, data warehouse | A | `lac-entrepot` |
| Spark, traitement distribué | A | `spark` |

## Fil rouge et ancrage local

- **Situation** : chaque semaine, de nouveaux textes officiels sont publiés. L'assistant de Bafoussam doit les intégrer seul, chaque nuit, sans jamais casser la base quand un fichier arrive mal formé.
- **Personnages** : Awa, bénévole, qui ne veut plus mettre à jour la base à la main.
- **Données utilisées** : un flux de documents fictifs publiés chaque « jour », fourni pour les tests.

## Exercices prévus

| Id | Titre | Objectif | Difficulté (1–3) | Livrable non testable ? |
| --- | --- | --- | --- | --- |
| 4.5-ex01 à ex03 | Les pipelines | O1 | 1 | non |
| 4.5-ex04 à ex06 | Orchestrer | O2 | 1 | non |
| 4.5-ex07 à ex09 | La qualité des données | O3 | 2 | non |
| 4.5-ex10 à ex12 | Stocker et interroger | O4 | 2 | non |
| 4.5-ex13 à ex14 | Alimenter un RAG | O1 | 2–3 | non |
| 4.5-ex15 | Exercice clé : un pipeline qui met à jour chaque nuit la base documentaire du RAG | O1 à O3 | 3 | non |
| 4.5-ex16 à ex17 | Passer à l'échelle | O5 | 2–3 | non |

## Ressources matérielles

- **RAM maximale** : 1 à 2 Go.
- **Téléchargements** : Prefect et DuckDB (environ 100 Mo), TODO(vérifier).
- **Temps de calcul le plus long** : quelques minutes par exécution.
- **Dépendances nouvelles** : prefect, duckdb, pyarrow, pandera ou équivalent.
- **API payante** : aucune.

## Point de contrôle sécurité et éthique

Un pipeline lit des fichiers venus de l'extérieur : valider leur format et leur taille avant de les traiter, et ne jamais exécuter leur contenu.

## Ressources externes gratuites

| Ressource | Langue | Durée ou taille | Licence | Pourquoi |
| --- | --- | --- | --- | --- |
| [Documentation de Prefect](https://docs.prefect.io/) | anglais | référence | Apache 2.0 | Orchestrer et planifier des pipelines en Python. |
| [Documentation de DuckDB](https://duckdb.org/docs/) | anglais | référence | MIT | Analyser des fichiers Parquet très vite, sans serveur. |

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

- TODO(vérifier) : orchestrateur recommandé (Prefect, Dagster ou Airflow) selon le poids sur la machine minimale.
- TODO(vérifier) : compléter le vocabulaire des notions ajoutées par la seconde passe d'audit (25/11/2026), en vérifiant chaque terme dans docs/glossaire.md.
