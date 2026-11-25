---
id: "3.6"
titre: "Agents et outils"
parcours: "03-llm"
promesse: "Construire des agents qui agissent : ils raisonnent, utilisent des outils, gardent une mémoire, et restent sous contrôle grâce à des garde-fous et des évaluations."
question_saut: "Tu as déjà construit et évalué un agent avec des outils ?"
qcm: true
prerequis: ["3.2", "3.5"]
statut: brouillon
version: 1
mise_a_jour: 2026-11-25
---

# Fiche du module 3.6 — Agents et outils

## Extrait du programme

- **Contenu** : Boucle agent (raisonner, agir, observer), appels d'outils, MCP (Model Context Protocol), mémoire, planification, multi-agents, garde-fous, évaluation des agents (taux de réussite des tâches, analyse des trajectoires)
- **Exercice clé** : Agent qui consulte une API météo et une base de données pour conseiller un agriculteur, évalué sur 30 scénarios

## Objectifs vérifiables

| Id | À la fin, l'apprenant sait… | Évalué par |
| --- | --- | --- |
| O1 | Construire une boucle agent qui raisonne, agit et observe. | ex01 à ex03, exercice clé (ex15), qcm |
| O2 | Donner des outils à un agent et contrôler leur usage. | ex04 à ex05, exercice clé (ex15), qcm |
| O3 | Utiliser et créer des serveurs MCP. | ex06 à ex07, qcm |
| O4 | Ajouter mémoire, planification et coopération entre agents. | ex08 à ex10, qcm |
| O5 | Encadrer un agent avec des garde-fous. | ex11 à ex12, exercice clé (ex15), qcm |
| O6 | Évaluer un agent sur des scénarios. | ex13 à ex14, exercice clé (ex15), qcm |

## Chapitres

| Chapitre | Titre | Exercices |
| --- | --- | --- |
| 1 | Qu'est-ce qu'un agent | 3 |
| 2 | Les outils | 2 |
| 3 | MCP | 2 |
| 4 | Mémoire et planification | 3 |
| 5 | Des agents sous contrôle | 2 |
| 6 | Évaluer un agent | 3 |

## Notions, dans l'ordre

| Chapitre | Id de la notion | Notion | Objectif |
| --- | --- | --- | --- |
| 1 | `agent-definition` | Qu'est-ce qu'un agent | O1 |
| 1 | `boucle-agent` | La boucle : raisonner, agir, observer | O1 |
| 1 | `agent-zero` | Un agent de zéro, en Python | O1 |
| 1 | `faut-il-agent` | Faut-il vraiment un agent ? | O1 |
| 2 | `outils-agent` | Donner des outils à un agent | O2 |
| 2 | `concevoir-outil` | Concevoir un bon outil | O2 |
| 2 | `erreurs-outils` | Quand un outil échoue | O2 |
| 3 | `mcp` | Le Model Context Protocol | O3 |
| 3 | `serveur-mcp` | Créer un serveur MCP | O3 |
| 3 | `client-mcp` | Brancher un serveur MCP à un agent | O3 |
| 4 | `memoire-travail` | La mémoire de travail | O4 |
| 4 | `memoire-longue` | La mémoire longue | O4 |
| 4 | `planification` | Planifier une tâche en étapes | O4 |
| 4 | `multi-agents` | Plusieurs agents qui coopèrent | O4 |
| 5 | `garde-fous` | Les garde-fous | O5 |
| 5 | `permissions-agent` | Les permissions minimales | O5 |
| 5 | `humain-boucle` | Garder un humain dans la boucle | O5 |
| 6 | `taux-reussite` | Mesurer le taux de réussite des tâches | O6 |
| 6 | `trajectoires` | Analyser les trajectoires | O6 |
| 6 | `scenarios` | Construire des scénarios de test | O6 |

## Vocabulaire du module

| Terme | Catégorie (A anglais / B transparent) | Notion où il apparaît |
| --- | --- | --- |
| agent, boucle agent (agent loop) | A | `boucle-agent` |
| ReAct | A | `boucle-agent` |
| outil (tool), appel d'outil (tool call) | A | `outils-agent` |
| MCP (Model Context Protocol), serveur, client | A | `mcp` |
| mémoire | B | `memoire-longue` |
| planification | B | `planification` |
| multi-agents | A | `multi-agents` |
| garde-fou (guardrail) | A | `garde-fous` |
| trajectoire | B | `trajectoires` |

## Fil rouge et ancrage local

- **Situation** : les producteurs de coton et d'anacarde de Korhogo veulent savoir quand semer, traiter ou récolter. Ton agent consulte la météo et la base de données des cultures, puis donne un conseil qu'il sait justifier.
- **Personnages** : Yacouba, conseiller agricole, et les producteurs de sa coopérative.
- **Données utilisées** : l'API Open-Meteo (gratuite, sans clé, données CC BY 4.0) et une base SQLite fictive des cultures et des parcelles ; les tests utilisent des réponses enregistrées.

## Exercices prévus

| Id | Titre | Objectif | Difficulté (1–3) | Livrable non testable ? |
| --- | --- | --- | --- | --- |
| 3.6-ex01 à ex03 | Qu'est-ce qu'un agent | O1 | 1–2 | non |
| 3.6-ex04 à ex05 | Les outils | O2 | 2 | non |
| 3.6-ex06 à ex07 | MCP | O3 | 2 | non |
| 3.6-ex08 à ex10 | Mémoire et planification | O4 | 2 | non |
| 3.6-ex11 à ex12 | Des agents sous contrôle | O5 | 2 | non |
| 3.6-ex13 à ex14 | Évaluer un agent | O6 | 2–3 | non |
| 3.6-ex15 | Exercice clé : un agent qui consulte une API météo et une base de données pour conseiller un agriculteur, évalué sur 30 scénarios | O1, O2, O5, O6 | 3 | non |

## Ressources matérielles

- **RAM maximale** : 4 à 6 Go.
- **Téléchargements** : un petit modèle local capable d'appeler des outils (1 à 3 Go), TODO(vérifier).
- **Temps de calcul le plus long** : quelques minutes pour les 30 scénarios en local, TODO(vérifier).
- **Dépendances nouvelles** : le SDK Python de MCP.
- **API payante** : facultative.

## Point de contrôle sécurité et éthique

Point de contrôle du projet 3 : permissions minimales des outils de l'agent, aucune action irréversible sans confirmation.

## Ressources externes gratuites

| Ressource | Langue | Durée ou taille | Licence | Pourquoi |
| --- | --- | --- | --- | --- |
| [Documentation de MCP](https://modelcontextprotocol.io/) | anglais | référence | gratuit en ligne | Le protocole pour brancher des outils à un agent. |
| [Building effective agents (Anthropic)](https://www.anthropic.com/engineering/building-effective-agents) | anglais | article | gratuit en ligne | Quand utiliser un agent, et comment le garder simple. |

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

- TODO(vérifier) : petit modèle local recommandé pour l'appel d'outils, et sa fiabilité sur la machine minimale.
