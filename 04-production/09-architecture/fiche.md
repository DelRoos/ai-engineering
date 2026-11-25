---
id: "4.9"
titre: "Architecture de systèmes d'IA"
parcours: "04-production"
promesse: "Concevoir des systèmes d'IA qui tiennent à grande échelle, et savoir défendre tes choix : briques, montée en charge, fiabilité et compromis."
question_saut: "Tu sais déjà concevoir un système pour des dizaines de milliers d'utilisateurs ?"
qcm: true
prerequis: ["4.8"]
statut: brouillon
version: 1
mise_a_jour: 2026-11-25
---

# Fiche du module 4.9 — Architecture de systèmes d'IA

## Extrait du programme

- **Contenu** : Conception de systèmes (system design) appliquée à l'IA : files de tâches, bases de données, montée en charge, compromis
- **Exercice clé** : Dossier d'architecture d'un système pour 100 000 utilisateurs

## Objectifs vérifiables

| Id | À la fin, l'apprenant sait… | Évalué par |
| --- | --- | --- |
| O1 | Mener une démarche de conception : exigences et estimations. | ex01 à ex03, exercice clé (ex23), qcm |
| O2 | Choisir les briques : bases de données, files de tâches, cache, stockage. | ex04 à ex07, ex08 à ex10, exercice clé (ex23), qcm |
| O3 | Concevoir la montée en charge. | ex08 à ex10, ex11 à ex13, exercice clé (ex23), qcm |
| O4 | Concevoir la fiabilité : pannes, redondance, sauvegardes. | ex14 à ex16, exercice clé (ex23), qcm |
| O5 | Rédiger un dossier d'architecture et justifier ses compromis. | ex17 à ex19, ex20 à ex22, exercice clé (ex23), qcm |

## Chapitres

| Chapitre | Titre | Exercices |
| --- | --- | --- |
| 1 | La démarche | 3 |
| 2 | Les briques | 4 |
| 3 | Découper un système | 3 |
| 4 | Monter en charge | 3 |
| 5 | Être fiable | 3 |
| 6 | Études de cas | 3 |
| 7 | Décider et documenter | 4 |

## Notions, dans l'ordre

| Chapitre | Id de la notion | Notion | Objectif |
| --- | --- | --- | --- |
| 1 | `system-design` | Concevoir un système : la démarche | O1 |
| 1 | `exigences` | Les exigences fonctionnelles et non fonctionnelles | O1 |
| 1 | `estimations` | Les estimations au dos d'une enveloppe | O1 |
| 1 | `parcours-requete` | Suivre le parcours d'une requête | O1 |
| 1 | `questions-clarification` | Poser les bonnes questions avant de dessiner | O1 |
| 2 | `choisir-base` | Choisir une base de données | O2 |
| 2 | `files-taches` | Les files de tâches | O2 |
| 2 | `cache-distribue` | Le cache distribué | O2 |
| 2 | `stockage-objets` | Le stockage d'objets | O2 |
| 2 | `passerelle-api` | La passerelle d'API | O2 |
| 2 | `evenements` | Communiquer par événements | O2 |
| 3 | `monolithe-microservices` | Monolithe ou microservices ? | O2 |
| 3 | `asynchrone-grande-echelle` | Traiter plus tard : l'asynchrone à grande échelle | O3 |
| 3 | `frontieres-services` | Où couper : les frontières entre services | O2 |
| 3 | `api-entre-services` | Faire parler les services entre eux | O2 |
| 3 | `donnees-par-service` | À qui appartiennent les données ? | O2 |
| 4 | `scalabilite` | Monter en charge : vertical et horizontal | O3 |
| 4 | `repartition-charge` | La répartition de charge | O3 |
| 4 | `replication-partitionnement` | Répliquer et partitionner une base | O3 |
| 4 | `gpu-partages` | Partager des GPU entre utilisateurs | O3 |
| 4 | `cache-niveaux` | Mettre du cache à chaque niveau | O3 |
| 5 | `pannes` | Prévoir les pannes | O4 |
| 5 | `redondance` | La redondance | O4 |
| 5 | `sauvegardes` | Sauvegarder et restaurer | O4 |
| 5 | `coherence-disponibilite` | Cohérence ou disponibilité : choisir | O4 |
| 5 | `degradation-progressive` | Rester utile quand une partie tombe en panne | O4 |
| 6 | `cas-rag-pays` | Étude de cas : un assistant RAG pour tout un pays | O5 |
| 6 | `cas-recommandation` | Étude de cas : un système de recommandation | O5 |
| 6 | `cas-vocal` | Étude de cas : un service vocal par téléphone | O5 |
| 6 | `cas-detection-mobile` | Étude de cas : un modèle de vision sur des milliers de téléphones | O5 |
| 6 | `cas-pipeline-donnees` | Étude de cas : une plateforme de données agricoles | O5 |
| 7 | `compromis` | Les compromis : coût, latence, qualité | O5 |
| 7 | `cout-architecture` | Chiffrer le coût d'une architecture | O5 |
| 7 | `dossier-architecture` | Le dossier d'architecture | O5 |
| 7 | `schema-architecture` | Dessiner une architecture | O5 |
| 7 | `revue-architecture` | Faire relire son architecture | O5 |

## Vocabulaire du module

| Terme | Catégorie (A anglais / B transparent) | Notion où il apparaît |
| --- | --- | --- |
| conception de systèmes (system design) | A | `system-design` |
| exigence non fonctionnelle | B | `exigences` |
| file de tâches (queue), worker | A | `files-taches` |
| montée en charge (scalability) | A | `scalabilite` |
| répartiteur de charge (load balancer) | A | `repartition-charge` |
| redondance, haute disponibilité | B | `redondance` |
| stockage d'objets (object storage) | A | `stockage-objets` |
| compromis (trade-off) | A | `compromis` |

## Fil rouge et ancrage local

- **Situation** : le ministère de l'Agriculture d'un pays du Sahel veut un service d'information agricole par SMS et par message vocal pour 100 000 producteurs. Tu conçois l'architecture et tu défends tes choix.
- **Personnages** : Fatimata, directrice des systèmes d'information, qui doit présenter le projet à son ministre.
- **Données utilisées** : un cahier des charges fictif (nombre d'utilisateurs, pics de trafic, budget, contraintes réseau).

## Exercices prévus

| Id | Titre | Objectif | Difficulté (1–3) | Livrable non testable ? |
| --- | --- | --- | --- | --- |
| 4.9-ex01 à ex03 | La démarche | O1 | 1 | non |
| 4.9-ex04 à ex07 | Les briques | O2 | 1 | non |
| 4.9-ex08 à ex10 | Découper un système | O2, O3 | 2 | non |
| 4.9-ex11 à ex13 | Monter en charge | O3 | 2 | non |
| 4.9-ex14 à ex16 | Être fiable | O4 | 2–3 | non |
| 4.9-ex17 à ex19 | Études de cas | O5 | 2–3 | non |
| 4.9-ex20 à ex22 | Décider et documenter | O5 | 2–3 | non |
| 4.9-ex23 | Exercice clé : le dossier d'architecture d'un système pour 100 000 utilisateurs | O1 à O5 | 3 | oui → GRILLE.md (dossier d'architecture) |

## Ressources matérielles

- **RAM maximale** : négligeable.
- **Téléchargements** : un outil gratuit de schémas (draw.io ou Excalidraw, facultatif).
- **Temps de calcul le plus long** : négligeable.
- **Dépendances nouvelles** : aucune.
- **API payante** : aucune.

## Point de contrôle sécurité et éthique

L'architecture inclut la protection des données des producteurs (chiffrement, accès, localisation) : c'est un critère de la grille.

## Ressources externes gratuites

| Ressource | Langue | Type | Licence ou accès | Pourquoi |
| --- | --- | --- | --- | --- |
| [System Design Primer](https://github.com/donnemartin/system-design-primer) | anglais | guide | CC BY 4.0 | Les briques et les compromis de la conception de systèmes. |
| [Made With ML : systems design](https://madewithml.com/courses/mlops/systems-design/) | anglais | cours | MIT | La conception d'un système de ML de bout en bout. |
| [Site Reliability Engineering (Google)](https://sre.google/sre-book/table-of-contents/) | anglais | livre en ligne | CC BY-NC-ND 4.0 | La fiabilité à grande échelle. |
| [Microservices (Martin Fowler)](https://martinfowler.com/articles/microservices.html) | anglais | article | accès libre | Ce que sont les microservices, et leurs coûts. |

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

- TODO(vérifier) : le livre « Designing Machine Learning Systems » de Chip Huyen est payant : le citer en lecture facultative, en bibliothèque.
- TODO(vérifier) : compléter le vocabulaire des notions ajoutées par la seconde passe d'audit (25/11/2026), en vérifiant chaque terme dans docs/glossaire.md.
