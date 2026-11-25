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
| O1 | Expliquer ce qu'est un conteneur et installer Docker. | ex01 à ex02, qcm |
| O2 | Écrire un Dockerfile pour une application Python. | ex03 à ex04, exercice clé (ex12), qcm |
| O3 | Produire des images légères et sûres. | ex05 à ex07, qcm |
| O4 | Assembler plusieurs services avec docker-compose. | ex08 à ex09, exercice clé (ex12), qcm |
| O5 | Gérer secrets et variables d'environnement. | ex10 à ex11, exercice clé (ex12), qcm |

## Chapitres

| Chapitre | Titre | Exercices |
| --- | --- | --- |
| 1 | Les conteneurs | 2 |
| 2 | Le Dockerfile | 2 |
| 3 | Des images légères et sûres | 3 |
| 4 | Plusieurs services | 2 |
| 5 | Configuration et secrets | 3 |

## Notions, dans l'ordre

| Chapitre | Id de la notion | Notion | Objectif |
| --- | --- | --- | --- |
| 1 | `pourquoi-conteneurs` | Pourquoi des conteneurs | O1 |
| 1 | `installer-docker` | Installer Docker, avec WSL sous Windows | O1 |
| 1 | `images-conteneurs` | Images et conteneurs | O1 |
| 2 | `dockerfile` | Ton premier Dockerfile | O2 |
| 2 | `couches` | Les couches et le cache | O2 |
| 2 | `volumes` | Garder des données : les volumes | O2 |
| 3 | `images-legeres` | Des images légères | O3 |
| 3 | `multi-stage` | Les builds en plusieurs étapes | O3 |
| 3 | `non-root` | Ne pas tourner en root | O3 |
| 3 | `scanner-images` | Scanner une image | O3 |
| 4 | `docker-compose` | docker-compose | O4 |
| 4 | `reseaux-docker` | Faire parler les conteneurs entre eux | O4 |
| 4 | `llm-conteneur` | Un modèle local dans un conteneur | O4 |
| 5 | `env-docker` | Les variables d'environnement | O5 |
| 5 | `secrets-docker` | Les secrets | O5 |

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
| 4.3-ex01 à ex02 | Les conteneurs | O1 | 1–2 | non |
| 4.3-ex03 à ex04 | Le Dockerfile | O2 | 2 | non |
| 4.3-ex05 à ex07 | Des images légères et sûres | O3 | 2 | non |
| 4.3-ex08 à ex09 | Plusieurs services | O4 | 2 | non |
| 4.3-ex10 à ex11 | Configuration et secrets | O5 | 2–3 | non |
| 4.3-ex12 | Exercice clé : lancer toute l'application en une commande | O2, O4, O5 | 3 | non |

## Ressources matérielles

- **RAM maximale** : 2 à 6 Go selon les services (le modèle local est le plus gourmand).
- **Téléchargements** : Docker (environ 500 Mo à 1 Go) et des images de base (100 à 500 Mo), TODO(vérifier).
- **Temps de calcul le plus long** : quelques minutes pour construire les images.
- **Dépendances nouvelles** : Docker (programme).
- **API payante** : aucune.

## Point de contrôle sécurité et éthique

Aucun secret dans une image ou dans le dépôt ; images scannées ; conteneurs qui ne tournent pas en root.

## Ressources externes gratuites

| Ressource | Langue | Durée ou taille | Licence | Pourquoi |
| --- | --- | --- | --- | --- |
| [Bien démarrer avec Docker](https://docs.docker.com/get-started/) | anglais | guide | gratuit en ligne | Le guide officiel, du premier conteneur à docker-compose. |

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
