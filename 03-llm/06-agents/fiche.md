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
| O1 | Construire une boucle agent qui raisonne, agit et observe. | ex01 à ex03, ex04 à ex06, ex16 à ex18, exercice clé (ex25), qcm |
| O2 | Donner des outils à un agent et contrôler leur usage. | ex07 à ex09, exercice clé (ex25), qcm |
| O3 | Utiliser et créer des serveurs MCP. | ex10 à ex12, qcm |
| O4 | Ajouter mémoire, planification et coopération entre agents. | ex13 à ex15, ex16 à ex18, qcm |
| O5 | Encadrer un agent avec des garde-fous. | ex19 à ex21, exercice clé (ex25), qcm |
| O6 | Évaluer un agent sur des scénarios. | ex22 à ex24, exercice clé (ex25), qcm |

## Chapitres

| Chapitre | Titre | Exercices |
| --- | --- | --- |
| 1 | Qu'est-ce qu'un agent | 3 |
| 2 | Les workflows avant les agents | 3 |
| 3 | Les outils | 3 |
| 4 | MCP | 3 |
| 5 | Mémoire et planification | 3 |
| 6 | Les frameworks | 3 |
| 7 | Des agents sous contrôle | 3 |
| 8 | Évaluer un agent | 4 |

## Notions, dans l'ordre

| Chapitre | Id de la notion | Notion | Objectif |
| --- | --- | --- | --- |
| 1 | `agent-definition` | Qu'est-ce qu'un agent | O1 |
| 1 | `boucle-agent` | La boucle : raisonner, agir, observer | O1 |
| 1 | `agent-zero` | Un agent de zéro, en Python | O1 |
| 1 | `faut-il-agent` | Faut-il vraiment un agent ? | O1 |
| 1 | `types-agents` | Des assistants aux agents autonomes | O1 |
| 2 | `chainage` | Enchaîner des appels | O1 |
| 2 | `aiguillage` | Aiguiller vers la bonne tâche | O1 |
| 2 | `parallelisation` | Lancer des tâches en parallèle | O1 |
| 2 | `evaluateur-optimiseur` | Un modèle qui critique, un autre qui corrige | O1 |
| 2 | `choisir-workflow` | Choisir le bon schéma | O1 |
| 3 | `outils-agent` | Donner des outils à un agent | O2 |
| 3 | `concevoir-outil` | Concevoir un bon outil | O2 |
| 3 | `erreurs-outils` | Quand un outil échoue | O2 |
| 3 | `agent-code` | Un agent qui écrit et exécute du code | O2 |
| 3 | `outils-recherche` | Des outils de recherche : web et documents | O2 |
| 4 | `mcp` | Le Model Context Protocol | O3 |
| 4 | `serveur-mcp` | Créer un serveur MCP | O3 |
| 4 | `ressources-mcp` | Ressources et prompts dans MCP | O3 |
| 4 | `client-mcp` | Brancher un serveur MCP à un agent | O3 |
| 4 | `transports-mcp` | Local ou distant : les transports MCP | O3 |
| 5 | `memoire-travail` | La mémoire de travail | O4 |
| 5 | `memoire-longue` | La mémoire longue | O4 |
| 5 | `planification` | Planifier une tâche en étapes | O4 |
| 5 | `multi-agents` | Plusieurs agents qui coopèrent | O4 |
| 5 | `reflexion` | Se relire et se corriger : la réflexion | O4 |
| 6 | `frameworks-agents` | Les frameworks d'agents : smolagents, LangGraph et les autres | O1 |
| 6 | `graphe-etats` | Un agent comme un graphe d'états | O4 |
| 6 | `smolagents` | Un premier agent avec smolagents | O1 |
| 6 | `langgraph` | Un agent avec LangGraph | O4 |
| 6 | `choisir-framework` | Framework ou code maison ? | O1 |
| 7 | `garde-fous` | Les garde-fous | O5 |
| 7 | `permissions-agent` | Les permissions minimales | O5 |
| 7 | `limiter-boucles` | Limiter les boucles et les coûts | O5 |
| 7 | `humain-boucle` | Garder un humain dans la boucle | O5 |
| 7 | `validation-actions` | Vérifier une action avant de l'exécuter | O5 |
| 8 | `taux-reussite` | Mesurer le taux de réussite des tâches | O6 |
| 8 | `trajectoires` | Analyser les trajectoires | O6 |
| 8 | `observer-agent` | Observer un agent en action : les traces | O6 |
| 8 | `scenarios` | Construire des scénarios de test | O6 |
| 8 | `benchmarks-agents` | Les bancs d'essai d'agents | O6 |

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
| 3.6-ex01 à ex03 | Qu'est-ce qu'un agent | O1 | 1 | non |
| 3.6-ex04 à ex06 | Les workflows avant les agents | O1 | 1 | non |
| 3.6-ex07 à ex09 | Les outils | O2 | 2 | non |
| 3.6-ex10 à ex12 | MCP | O3 | 2 | non |
| 3.6-ex13 à ex15 | Mémoire et planification | O4 | 2 | non |
| 3.6-ex16 à ex18 | Les frameworks | O1, O4 | 2–3 | non |
| 3.6-ex19 à ex21 | Des agents sous contrôle | O5 | 2–3 | non |
| 3.6-ex22 à ex24 | Évaluer un agent | O6 | 2–3 | non |
| 3.6-ex25 | Exercice clé : un agent qui consulte une API météo et une base de données pour conseiller un agriculteur, évalué sur 30 scénarios | O1, O2, O5, O6 | 3 | non |

## Ressources matérielles

- **RAM maximale** : 4 à 6 Go.
- **Téléchargements** : un petit modèle local capable d'appeler des outils (1 à 3 Go), TODO(vérifier).
- **Temps de calcul le plus long** : quelques minutes pour les 30 scénarios en local, TODO(vérifier).
- **Dépendances nouvelles** : le SDK Python de MCP.
- **API payante** : facultative.

## Point de contrôle sécurité et éthique

Point de contrôle du projet 3 : permissions minimales des outils de l'agent, aucune action irréversible sans confirmation.

## Ressources externes gratuites

| Ressource | Langue | Type | Licence ou accès | Pourquoi |
| --- | --- | --- | --- | --- |
| [Le cours Agents de Hugging Face](https://huggingface.co/learn/agents-course) | anglais | cours | Apache 2.0 | Des fondamentaux aux frameworks, avec certificat gratuit. |
| [Building effective agents (Anthropic)](https://www.anthropic.com/engineering/building-effective-agents) | anglais | article | accès libre | Workflows et agents : quand et comment. |
| [Documentation de MCP](https://modelcontextprotocol.io/) | anglais | documentation | accès libre | Le protocole pour brancher des outils à un agent. |
| [Documentation de smolagents](https://huggingface.co/docs/smolagents) | anglais | documentation | Apache 2.0 | Un framework d'agents léger. |
| [Documentation de LangGraph](https://langchain-ai.github.io/langgraph/) | anglais | documentation | MIT | Des agents décrits comme des graphes d'états. |

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
- TODO(vérifier) : compléter le vocabulaire des notions ajoutées par la seconde passe d'audit (25/11/2026), en vérifiant chaque terme dans docs/glossaire.md.
