---
id: "4.3"
titre: "Conteneurs"
parcours: "04-production"
promesse: "Faire démarrer ton application partout en une commande : images légères et sûres, plusieurs services assemblés, secrets bien gardés."
question_saut: "Tu conteneurises déjà tes applications avec Docker ?"
qcm: true
prerequis: ["4.2"]
statut: brouillon
version: 1
mise_a_jour: 2026-11-25
---

# Fiche du module 4.3 — Conteneurs

## Extrait du programme

- **Contenu** : Docker, images légères, docker-compose, gestion des secrets et variables d'environnement
- **Exercice clé** : Lancer toute l'application en une commande

## Objectifs vérifiables

| Id | À la fin, l'apprenant sait… | Évalué par |
| --- | --- | --- |
| O1 | Expliquer ce qu'est un conteneur et installer Docker. | ex01 à ex03, qcm |
| O2 | Écrire un Dockerfile pour une application Python. | ex04 à ex06, exercice clé (ex19), qcm |
| O3 | Produire des images légères et sûres. | ex07 à ex09, ex13 à ex15, qcm |
| O4 | Assembler plusieurs services avec docker-compose. | ex10 à ex12, ex13 à ex15, exercice clé (ex19), qcm |
| O5 | Gérer secrets et variables d'environnement. | ex16 à ex18, exercice clé (ex19), qcm |

## Chapitres

| Chapitre | Titre | Exercices |
| --- | --- | --- |
| 1 | Les conteneurs | 3 |
| 2 | Le Dockerfile | 3 |
| 3 | Des images légères et sûres | 3 |
| 4 | Plusieurs services | 3 |
| 5 | Partager ses images | 3 |
| 6 | Configuration et secrets | 4 |

## Notions, dans l'ordre

| Chapitre | Id de la notion | Notion | Objectif |
| --- | --- | --- | --- |
| 1 | `pourquoi-conteneurs` | Pourquoi des conteneurs | O1 |
| 1 | `installer-docker` | Installer Docker, avec WSL sous Windows | O1 |
| 1 | `images-conteneurs` | Images et conteneurs | O1 |
| 1 | `commandes-docker` | Les commandes du quotidien : run, ps, logs, exec | O1 |
| 1 | `conteneur-vs-vm` | Conteneur ou machine virtuelle ? | O1 |
| 2 | `dockerfile` | Ton premier Dockerfile | O2 |
| 2 | `couches` | Les couches et le cache | O2 |
| 2 | `dockerignore` | Ne pas tout envoyer : .dockerignore | O2 |
| 2 | `volumes` | Garder des données : les volumes | O2 |
| 2 | `healthcheck` | Vérifier qu'un conteneur va bien : healthcheck | O2 |
| 3 | `images-legeres` | Des images légères | O3 |
| 3 | `multi-stage` | Les builds en plusieurs étapes | O3 |
| 3 | `non-root` | Ne pas tourner en root | O3 |
| 3 | `scanner-images` | Scanner une image | O3 |
| 3 | `limites-ressources` | Limiter la mémoire et le processeur d'un conteneur | O3 |
| 4 | `docker-compose` | docker-compose | O4 |
| 4 | `reseaux-docker` | Faire parler les conteneurs entre eux | O4 |
| 4 | `llm-conteneur` | Un modèle local dans un conteneur | O4 |
| 4 | `dev-prod` | Une configuration pour développer, une autre pour la production | O4 |
| 4 | `base-conteneur` | Une base de données dans un conteneur | O4 |
| 5 | `registres` | Publier une image : les registres | O4 |
| 5 | `versionner-images` | Nommer et versionner ses images | O4 |
| 5 | `ghcr` | Le registre de GitHub | O4 |
| 5 | `images-multi-plateformes` | Des images pour plusieurs processeurs | O4 |
| 5 | `signer-images` | Vérifier l'origine d'une image | O3 |
| 6 | `env-docker` | Les variables d'environnement | O5 |
| 6 | `secrets-docker` | Les secrets | O5 |
| 6 | `fichiers-env` | Les fichiers .env, et pourquoi on ne les publie pas | O5 |
| 6 | `config-12-facteurs` | La configuration selon les 12 facteurs | O5 |
| 6 | `rotation-secrets` | Changer un secret sans tout arrêter | O5 |

## Vocabulaire du module

| Terme | Catégorie (A anglais / B transparent) | Notion où il apparaît |
| --- | --- | --- |
| conteneur (container), image | A | `images-conteneurs` |
| Dockerfile | A | `dockerfile` |
| couche (layer) | A | `couches` |
| volume | A | `volumes` |
| build multi-étapes (multi-stage) | A | `multi-stage` |
| docker-compose, service | A | `docker-compose` |
| secret | B | `secrets-docker` |

## Fil rouge et ancrage local

- **Situation** : « Chez moi, ça marche » : l'équipe de Kigali n'arrive pas à lancer ton assistant du projet 3. Tu le mets en conteneurs, pour qu'il démarre partout en une seule commande.
- **Personnages** : Grace, responsable technique de la start-up de Kigali.
- **Données utilisées** : l'assistant du projet 3 de l'apprenant.

## Exercices prévus

| Id | Titre | Objectif | Difficulté (1–3) | Livrable non testable ? |
| --- | --- | --- | --- | --- |
| 4.3-ex01 à ex03 | Les conteneurs | O1 | 1 | non |
| 4.3-ex04 à ex06 | Le Dockerfile | O2 | 1 | non |
| 4.3-ex07 à ex09 | Des images légères et sûres | O3 | 2 | non |
| 4.3-ex10 à ex12 | Plusieurs services | O4 | 2 | non |
| 4.3-ex13 à ex15 | Partager ses images | O3, O4 | 2–3 | non |
| 4.3-ex16 à ex18 | Configuration et secrets | O5 | 2–3 | non |
| 4.3-ex19 | Exercice clé : lancer toute l'application en une commande | O2, O4, O5 | 3 | non |

## Ressources matérielles

- **RAM maximale** : 2 à 6 Go selon les services (le modèle local est le plus gourmand).
- **Téléchargements** : Docker (environ 500 Mo à 1 Go) et des images de base (100 à 500 Mo), TODO(vérifier).
- **Temps de calcul le plus long** : quelques minutes pour construire les images.
- **Dépendances nouvelles** : Docker (programme).
- **API payante** : aucune.

## Point de contrôle sécurité et éthique

Aucun secret dans une image ou dans le dépôt ; images scannées ; conteneurs qui ne tournent pas en root.

## Ressources externes gratuites

| Ressource | Langue | Type | Licence ou accès | Pourquoi |
| --- | --- | --- | --- | --- |
| [Bien démarrer avec Docker](https://docs.docker.com/get-started/) | anglais | documentation | accès libre | Du premier conteneur à docker-compose. |
| [Bonnes pratiques de construction (Docker)](https://docs.docker.com/build/building/best-practices/) | anglais | documentation | accès libre | Des images légères et sûres. |
| [The Twelve-Factor App](https://12factor.net/fr/) | français | guide | accès libre | Configuration, logs et processus d'une application conteneurisée. |
| [Data Engineering Zoomcamp](https://github.com/DataTalksClub/data-engineering-zoomcamp) | anglais | cours | gratuit | Le module 1 : Docker et Docker Compose en pratique. |

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

- TODO(vérifier) : installation de Docker sous WSL et consommation mémoire sur la machine minimale.
- TODO(vérifier) : compléter le vocabulaire des notions ajoutées par la seconde passe d'audit (25/11/2026), en vérifiant chaque terme dans docs/glossaire.md.
