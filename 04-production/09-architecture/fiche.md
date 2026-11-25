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
| O1 | Mener une démarche de conception : exigences et estimations. | ex01 à ex02, exercice clé (ex12), qcm |
| O2 | Choisir les briques : bases de données, files de tâches, cache, stockage. | ex03 à ex05, exercice clé (ex12), qcm |
| O3 | Concevoir la montée en charge. | ex06 à ex07, exercice clé (ex12), qcm |
| O4 | Concevoir la fiabilité : pannes, redondance, sauvegardes. | ex08 à ex09, exercice clé (ex12), qcm |
| O5 | Rédiger un dossier d'architecture et justifier ses compromis. | ex10 à ex11, exercice clé (ex12), qcm |

## Chapitres

| Chapitre | Titre | Exercices |
| --- | --- | --- |
| 1 | La démarche | 2 |
| 2 | Les briques | 3 |
| 3 | Monter en charge | 2 |
| 4 | Être fiable | 2 |
| 5 | Décider et documenter | 3 |

## Notions, dans l'ordre

| Chapitre | Id de la notion | Notion | Objectif |
| --- | --- | --- | --- |
| 1 | `system-design` | Concevoir un système : la démarche | O1 |
| 1 | `exigences` | Les exigences fonctionnelles et non fonctionnelles | O1 |
| 1 | `estimations` | Les estimations au dos d'une enveloppe | O1 |
| 2 | `choisir-base` | Choisir une base de données | O2 |
| 2 | `files-taches` | Les files de tâches | O2 |
| 2 | `cache-distribue` | Le cache distribué | O2 |
| 2 | `stockage-objets` | Le stockage d'objets | O2 |
| 3 | `scalabilite` | Monter en charge : vertical et horizontal | O3 |
| 3 | `repartition-charge` | La répartition de charge | O3 |
| 3 | `gpu-partages` | Partager des GPU entre utilisateurs | O3 |
| 4 | `pannes` | Prévoir les pannes | O4 |
| 4 | `redondance` | La redondance | O4 |
| 4 | `sauvegardes` | Sauvegarder et restaurer | O4 |
| 5 | `compromis` | Les compromis : coût, latence, qualité | O5 |
| 5 | `dossier-architecture` | Le dossier d'architecture | O5 |
| 5 | `schema-architecture` | Dessiner une architecture | O5 |

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
| 4.9-ex01 à ex02 | La démarche | O1 | 1–2 | non |
| 4.9-ex03 à ex05 | Les briques | O2 | 2 | non |
| 4.9-ex06 à ex07 | Monter en charge | O3 | 2 | non |
| 4.9-ex08 à ex09 | Être fiable | O4 | 2 | non |
| 4.9-ex10 à ex11 | Décider et documenter | O5 | 2–3 | non |
| 4.9-ex12 | Exercice clé : le dossier d'architecture d'un système pour 100 000 utilisateurs | O1 à O5 | 3 | oui → GRILLE.md (dossier d'architecture) |

## Ressources matérielles

- **RAM maximale** : négligeable.
- **Téléchargements** : un outil gratuit de schémas (draw.io ou Excalidraw, facultatif).
- **Temps de calcul le plus long** : négligeable.
- **Dépendances nouvelles** : aucune.
- **API payante** : aucune.

## Point de contrôle sécurité et éthique

L'architecture inclut la protection des données des producteurs (chiffrement, accès, localisation) : c'est un critère de la grille.

## Ressources externes gratuites

| Ressource | Langue | Durée ou taille | Licence | Pourquoi |
| --- | --- | --- | --- | --- |
| [System Design Primer](https://github.com/donnemartin/system-design-primer) | anglais | guide | CC BY 4.0 | Les briques et les compromis de la conception de systèmes. |

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
