---
id: "etape-4"
titre: "Étape 4 — Ingénierie de production et données"
ordre: 4
statut: brouillon
---

# Étape 4 — Ingénierie de production et données

**Objectif** : faire tourner une solution d'IA de façon fiable, mesurable et rentable chez de vrais utilisateurs.

**Matériel** : 8 Go de RAM. Déploiements sur des offres gratuites uniquement ; objectif de coût mensuel : 0 €.

## Modules

| Module | Dossier | Contenu | Exercice clé |
| --- | --- | --- | --- |
| 4.1 Travailler comme en entreprise | `01-travailler-en-entreprise/` | Kanban avec GitHub Issues et Projects, tickets, commits et pull requests propres, auto-revue, documentation en anglais, contribution open source | Découper le projet 4 en tickets, puis ouvrir une issue ou une pull request utile sur un projet open source |
| 4.2 Construire une API | `02-api/` | FastAPI, validation, authentification, async, streaming des réponses LLM | Exposer le modèle du projet 2 en API |
| 4.3 Conteneurs | `03-conteneurs/` | Docker, images légères, docker-compose, secrets et variables d'environnement | Lancer toute l'application en une commande |
| 4.4 Déploiement cloud | `04-deploiement-cloud/` | Render, Fly.io, Hugging Face Spaces, notions AWS / GCP / Azure, GPU à la demande, serverless | Déployer le même service sur 2 plateformes et comparer les coûts |
| 4.5 Pipelines de données | `05-pipelines-donnees/` | ETL et ELT, Prefect, Dagster ou Airflow, qualité des données, Parquet, DuckDB, Spark | Pipeline qui met à jour chaque nuit la base documentaire du RAG |
| 4.6 CI/CD et qualité | `06-ci-cd/` | GitHub Actions, tests, lint, évaluations LLM dans la CI, DVC | Pipeline qui bloque un déploiement si le score d'évaluation baisse |
| 4.7 Observabilité | `07-observabilite/` | Logs, métriques, traces, Langfuse ou équivalent, dérive des données, alertes | Tableau de bord : latence, erreurs, coût par jour |
| 4.8 Performance et coûts | `08-performance-couts/` | Cache, batching, routage entre modèles, limites de débit, mode dégradé, hors ligne et faible bande passante | Diviser par 2 le coût par requête sans perte de qualité |
| 4.9 Architecture de systèmes d'IA | `09-architecture/` | System design appliqué à l'IA : files de tâches, bases de données, montée en charge, compromis | Dossier d'architecture d'un système pour 100 000 utilisateurs |

## Projet 4 — Mise en production du projet 3 (`projet/`)

Ton assistant du projet 3 devient un vrai service : API conteneurisée, déployée sur une offre gratuite, alimentée par un pipeline de données, avec CI/CD, évaluations automatiques, monitoring et budget maîtrisé.

- **Critères** : URL publique stable, temps de réponse et coût mensuel documentés (objectif : 0 €), procédure de retour arrière testée, travail organisé en tickets visibles sur GitHub.
- **Point de contrôle sécurité et éthique** : gestion des secrets, authentification de l'API, journalisation sans données personnelles, localisation des données conforme à la loi.

## Consolidation (après cette étape)

Rattrapage, révisions ou projet libre. Utilise-la pour terminer un projet en retard ou revoir les étapes 3 et 4.

## Anglais

Rapports de projet en anglais. Examen oral avec l'IA à moitié en anglais.

## État

Les fiches des modules 4.1 à 4.9 sont écrites (`fiche.md`, statut brouillon, à valider par le mainteneur) : objectifs, chapitres et leçons. Aucun cours n'est encore rédigé. La plateforme affiche chaque fiche sur `/modules/<slug>`.
