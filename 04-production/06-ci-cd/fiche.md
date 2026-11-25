---
id: "4.6"
titre: "CI/CD et qualité"
parcours: "04-production"
promesse: "Livrer souvent sans casser : chaque modification est testée, évaluée et déployée automatiquement, et une baisse de qualité bloque la mise en production."
question_saut: "Tu as déjà mis en place une CI/CD avec des évaluations ?"
qcm: true
prerequis: ["0.3", "4.3"]
statut: brouillon
version: 1
mise_a_jour: 2026-11-25
---

# Fiche du module 4.6 — CI/CD et qualité

## Extrait du programme

- **Contenu** : GitHub Actions, tests automatiques, lint, évaluations LLM dans la CI, versionnage des modèles et des données (DVC)
- **Exercice clé** : Pipeline qui bloque un déploiement si le score d'évaluation baisse

## Objectifs vérifiables

| Id | À la fin, l'apprenant sait… | Évalué par |
| --- | --- | --- |
| O1 | Construire un pipeline d'intégration continue complet. | ex01 à ex03, exercice clé (ex10), qcm |
| O2 | Déployer automatiquement et progressivement. | ex04 à ex05, qcm |
| O3 | Intégrer des évaluations de LLM dans la CI en maîtrisant leur coût. | ex06 à ex07, exercice clé (ex10), qcm |
| O4 | Versionner modèles et données avec DVC. | ex08 à ex09, qcm |
| O5 | Bloquer une mise en production qui dégrade la qualité. | ex06 à ex07, exercice clé (ex10), qcm |

## Chapitres

| Chapitre | Titre | Exercices |
| --- | --- | --- |
| 1 | L'intégration continue | 3 |
| 2 | Le déploiement continu | 2 |
| 3 | Évaluer dans la CI | 2 |
| 4 | Versionner modèles et données | 3 |

## Notions, dans l'ordre

| Chapitre | Id de la notion | Notion | Objectif |
| --- | --- | --- | --- |
| 1 | `ci-profondeur` | L'intégration continue, en profondeur | O1 |
| 1 | `workflows` | Écrire des workflows GitHub Actions | O1 |
| 1 | `matrices-ci` | Tester plusieurs versions : les matrices | O1 |
| 1 | `cache-ci` | Accélérer la CI : le cache | O1 |
| 2 | `cd` | Le déploiement continu | O2 |
| 2 | `environnements` | Préproduction et production | O2 |
| 2 | `deploiement-progressif` | Déployer progressivement | O2 |
| 3 | `eval-ci` | Lancer les évaluations dans la CI | O3 |
| 3 | `seuils-qualite` | Fixer des seuils de qualité | O5 |
| 3 | `cout-eval` | Maîtriser le coût des évaluations | O3 |
| 4 | `dvc` | Versionner les données avec DVC | O4 |
| 4 | `registre-modeles` | Versionner les modèles | O4 |
| 4 | `tracabilite` | Savoir quel modèle tourne en production | O4 |

## Vocabulaire du module

| Terme | Catégorie (A anglais / B transparent) | Notion où il apparaît |
| --- | --- | --- |
| CI/CD | A | `ci-profondeur` |
| workflow, job, runner | A | `workflows` |
| déploiement continu (continuous deployment) | A | `cd` |
| préproduction (staging) | A | `environnements` |
| canary, déploiement progressif | A | `deploiement-progressif` |
| seuil de qualité (quality gate) | A | `seuils-qualite` |
| DVC | A | `dvc` |
| registre de modèles (model registry) | A | `registre-modeles` |

## Fil rouge et ancrage local

- **Situation** : une mise à jour du prompt a fait chuter la qualité de l'assistant de Bafoussam sans que personne ne s'en aperçoive. Plus jamais : désormais, une baisse de score bloque la mise en production.
- **Personnages** : Awa, bénévole, et les juristes qui ont signalé les mauvaises réponses.
- **Données utilisées** : le jeu d'évaluation du module 3.5.

## Exercices prévus

| Id | Titre | Objectif | Difficulté (1–3) | Livrable non testable ? |
| --- | --- | --- | --- | --- |
| 4.6-ex01 à ex03 | L'intégration continue | O1 | 1–2 | non |
| 4.6-ex04 à ex05 | Le déploiement continu | O2 | 2 | non |
| 4.6-ex06 à ex07 | Évaluer dans la CI | O3, O5 | 2 | non |
| 4.6-ex08 à ex09 | Versionner modèles et données | O4 | 2–3 | non |
| 4.6-ex10 | Exercice clé : un pipeline qui bloque un déploiement si le score d'évaluation baisse | O1, O3, O5 | 3 | non |

## Ressources matérielles

- **RAM maximale** : dans la CI de GitHub, pas sur le PC.
- **Téléchargements** : DVC (quelques dizaines de Mo).
- **Temps de calcul le plus long** : les évaluations tournent dans GitHub Actions (minutes gratuites limitées pour les dépôts privés, illimitées pour les dépôts publics, TODO(vérifier)).
- **Dépendances nouvelles** : dvc.
- **API payante** : facultative pour le juge, avec un budget maximum par exécution indiqué dans l'énoncé.

## Point de contrôle sécurité et éthique

Les secrets de la CI (clés d'API) sont stockés dans les secrets de GitHub, jamais dans les workflows ; les pull requests externes n'y ont pas accès.

## Ressources externes gratuites

| Ressource | Langue | Durée ou taille | Licence | Pourquoi |
| --- | --- | --- | --- | --- |
| [Documentation de GitHub Actions](https://docs.github.com/en/actions) | anglais | référence | gratuit en ligne | Écrire des workflows de CI/CD. |
| [Documentation de DVC](https://dvc.org/doc) | anglais | référence | Apache 2.0 | Versionner les données et les modèles avec Git. |

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

- TODO(vérifier) : quotas gratuits de GitHub Actions à la rédaction.
