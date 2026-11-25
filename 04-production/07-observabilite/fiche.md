---
id: "4.7"
titre: "Observabilité"
parcours: "04-production"
promesse: "Savoir à tout moment ce qui se passe dans ton service : ce qui est lent, ce qui casse, ce que ça coûte, et quand les données ou les réponses changent."
question_saut: "Tu surveilles déjà un service en production ?"
qcm: true
prerequis: ["4.4"]
statut: brouillon
version: 1
mise_a_jour: 2026-11-25
---

# Fiche du module 4.7 — Observabilité

## Extrait du programme

- **Contenu** : Logs, métriques, traces, suivi des appels LLM (Langfuse ou équivalent open source), dérive des données, alertes
- **Exercice clé** : Tableau de bord : latence, erreurs, coût par jour

## Objectifs vérifiables

| Id | À la fin, l'apprenant sait… | Évalué par |
| --- | --- | --- |
| O1 | Écrire des logs utiles et structurés, sans données personnelles. | ex01 à ex03, qcm |
| O2 | Mesurer avec des métriques et des traces. | ex04 à ex06, exercice clé (ex17), qcm |
| O3 | Suivre les appels de LLM : coût, latence et qualité. | ex09 à ex11, exercice clé (ex17), qcm |
| O4 | Détecter la dérive des données et des réponses. | ex12 à ex14, qcm |
| O5 | Construire des tableaux de bord, des alertes, et gérer un incident. | ex07 à ex08, ex15 à ex16, exercice clé (ex17), qcm |

## Chapitres

| Chapitre | Titre | Exercices |
| --- | --- | --- |
| 1 | Les logs | 3 |
| 2 | Métriques et traces | 3 |
| 3 | Des objectifs de service | 2 |
| 4 | Suivre un LLM | 3 |
| 5 | La dérive | 3 |
| 6 | Voir et réagir | 3 |

## Notions, dans l'ordre

| Chapitre | Id de la notion | Notion | Objectif |
| --- | --- | --- | --- |
| 1 | `logs-structures` | Des logs structurés | O1 |
| 1 | `que-logger` | Que logger, et que ne jamais logger | O1 |
| 1 | `correlation-requetes` | Suivre une requête dans les logs : l'identifiant de corrélation | O1 |
| 1 | `centraliser-logs` | Centraliser ses logs | O1 |
| 2 | `metriques-service` | Les métriques : latence, erreurs, trafic | O2 |
| 2 | `prometheus-grafana` | Prometheus et Grafana | O2 |
| 2 | `traces` | Suivre une requête : les traces | O2 |
| 2 | `opentelemetry` | OpenTelemetry | O2 |
| 3 | `slo` | Fixer des objectifs : SLI et SLO | O5 |
| 3 | `surveiller-dehors` | Surveiller la disponibilité de l'extérieur | O5 |
| 4 | `suivi-llm` | Suivre les appels de LLM | O3 |
| 4 | `langfuse` | Langfuse en local | O3 |
| 4 | `cout-utilisateur` | Suivre le coût par utilisateur | O3 |
| 4 | `evaluation-continue` | Évaluer en continu des réponses réelles | O3 |
| 4 | `retours-utilisateurs` | Recueillir les retours des utilisateurs | O3 |
| 5 | `derive-donnees` | La dérive des données | O4 |
| 5 | `performance-tardive` | Suivre la performance quand la vérité arrive tard | O4 |
| 5 | `derive-reponses` | Quand les réponses changent | O4 |
| 5 | `evidently` | Détecter la dérive avec Evidently | O4 |
| 6 | `tableau-bord` | Un tableau de bord utile | O5 |
| 6 | `alertes` | Des alertes qui sonnent pour de bonnes raisons | O5 |
| 6 | `incidents` | Gérer un incident | O5 |

## Vocabulaire du module

| Terme | Catégorie (A anglais / B transparent) | Notion où il apparaît |
| --- | --- | --- |
| observabilité (observability) | A | `logs-structures` |
| log structuré | A | `logs-structures` |
| métrique, percentile (p95) | A | `metriques-service` |
| trace, span | A | `traces` |
| OpenTelemetry | A | `opentelemetry` |
| dérive (drift) | A | `derive-donnees` |
| alerte, astreinte | B | `alertes` |
| post-mortem | A | `incidents` |

## Fil rouge et ancrage local

- **Situation** : un lundi matin, les travailleurs de Bafoussam se plaignent : l'assistant met une minute à répondre. Sans logs ni métriques, impossible de savoir pourquoi. Tu rends le service observable.
- **Personnages** : Awa, bénévole, qui reçoit les plaintes.
- **Données utilisées** : les traces et les logs produits par le service de l'apprenant, et un scénario d'incident fourni.

## Exercices prévus

| Id | Titre | Objectif | Difficulté (1–3) | Livrable non testable ? |
| --- | --- | --- | --- | --- |
| 4.7-ex01 à ex03 | Les logs | O1 | 1 | non |
| 4.7-ex04 à ex06 | Métriques et traces | O2 | 1 | non |
| 4.7-ex07 à ex08 | Des objectifs de service | O5 | 2 | non |
| 4.7-ex09 à ex11 | Suivre un LLM | O3 | 2 | non |
| 4.7-ex12 à ex14 | La dérive | O4 | 2–3 | non |
| 4.7-ex15 à ex16 | Voir et réagir | O5 | 2–3 | non |
| 4.7-ex17 | Exercice clé : un tableau de bord de la latence, des erreurs et du coût par jour | O2, O3, O5 | 3 | non |

## Ressources matérielles

- **RAM maximale** : 1 à 3 Go (Langfuse en local avec sa base).
- **Téléchargements** : Langfuse en conteneurs (quelques centaines de Mo), TODO(vérifier).
- **Temps de calcul le plus long** : négligeable.
- **Dépendances nouvelles** : opentelemetry, le client langfuse.
- **API payante** : aucune.

## Point de contrôle sécurité et éthique

Point de contrôle du projet 4 : journalisation sans données personnelles. Les prompts et réponses enregistrés sont filtrés avant stockage.

## Ressources externes gratuites

| Ressource | Langue | Durée ou taille | Licence | Pourquoi |
| --- | --- | --- | --- | --- |
| [Documentation de Langfuse](https://langfuse.com/docs) | anglais | référence | MIT (version open source) | Suivre les appels de LLM en local. |
| [Documentation d'OpenTelemetry](https://opentelemetry.io/docs/) | anglais | référence | Apache 2.0 | Le standard des métriques et des traces. |

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

- TODO(vérifier) : consommation mémoire de Langfuse en local sur la machine minimale ; alternative plus légère si besoin.
- TODO(vérifier) : compléter le vocabulaire des notions ajoutées par la seconde passe d'audit (25/11/2026), en vérifiant chaque terme dans docs/glossaire.md.
