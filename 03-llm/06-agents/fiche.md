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
| O1 | Construire une boucle agent qui raisonne, agit et observe. | ex01 à ex05, ex06 à ex09, ex27 à ex29, exercice clé (ex40), ex41 à ex43, qcm |
| O2 | Donner des outils à un agent et contrôler leur usage. | ex10 à ex14, exercice clé (ex40), ex41 à ex43, qcm |
| O3 | Utiliser et créer des serveurs MCP. | ex15 à ex19, qcm |
| O4 | Ajouter mémoire, planification et coopération entre agents. | ex20 à ex23, ex24 à ex26, ex27 à ex29, ex41 à ex43, qcm |
| O5 | Encadrer un agent avec des garde-fous. | ex30 à ex34, exercice clé (ex40), ex41 à ex43, qcm |
| O6 | Évaluer un agent sur des scénarios. | ex35 à ex39, exercice clé (ex40), qcm |

## Chapitres

| Chapitre | Titre | Exercices |
| --- | --- | --- |
| 1 | Qu'est-ce qu'un agent | 5 |
| 2 | Les workflows avant les agents | 4 |
| 3 | Les outils | 5 |
| 4 | MCP | 5 |
| 5 | Mémoire et planification | 4 |
| 6 | Plusieurs agents | 3 |
| 7 | Les frameworks | 3 |
| 8 | Des agents sous contrôle | 5 |
| 9 | Évaluer un agent | 6 |
| 10 | Des agents dans le monde réel | 3 |

## Notions, dans l'ordre

| Chapitre | Id de la notion | Notion | Objectif |
| --- | --- | --- | --- |
| 1 | `agent-definition` | Qu'est-ce qu'un agent | O1 |
| 1 | `boucle-agent` | La boucle : raisonner, agir, observer | O1 |
| 1 | `etat-agent` | L'état d'un agent : objectif, messages, résultats | O1 |
| 1 | `agent-zero` | Un agent de zéro, en Python | O1 |
| 1 | `arret-agent` | Savoir s'arrêter : la condition de fin | O1 |
| 1 | `faut-il-agent` | Faut-il vraiment un agent ? | O1 |
| 1 | `types-agents` | Des assistants aux agents autonomes | O1 |
| 2 | `chainage` | Enchaîner des appels | O1 |
| 2 | `aiguillage` | Aiguiller vers la bonne tâche | O1 |
| 2 | `parallelisation` | Lancer des tâches en parallèle | O1 |
| 2 | `orchestrateur-executants` | Un chef et des exécutants : orchestrateur et travailleurs | O1 |
| 2 | `evaluateur-optimiseur` | Un modèle qui critique, un autre qui corrige | O1 |
| 2 | `choisir-workflow` | Choisir le bon schéma | O1 |
| 3 | `outils-agent` | Donner des outils à un agent | O2 |
| 3 | `concevoir-outil` | Concevoir un bon outil | O2 |
| 3 | `erreurs-outils` | Quand un outil échoue | O2 |
| 3 | `outils-recherche` | Des outils de recherche : web et documents | O2 |
| 3 | `outils-fichiers` | Lire et écrire des fichiers sans danger | O2 |
| 3 | `outils-api` | Une API externe comme outil | O2 |
| 3 | `agent-code` | Un agent qui écrit et exécute du code | O2 |
| 4 | `mcp` | Le Model Context Protocol | O3 |
| 4 | `serveurs-mcp-existants` | Utiliser des serveurs MCP existants | O3 |
| 4 | `serveur-mcp` | Créer un serveur MCP | O3 |
| 4 | `ressources-mcp` | Ressources et prompts dans MCP | O3 |
| 4 | `inspecteur-mcp` | Tester un serveur MCP avec l'inspecteur | O3 |
| 4 | `client-mcp` | Brancher un serveur MCP à un agent | O3 |
| 4 | `transports-mcp` | Local ou distant : les transports MCP | O3 |
| 5 | `memoire-travail` | La mémoire de travail | O4 |
| 5 | `resumer-historique` | Résumer l'historique pour tenir dans le contexte | O4 |
| 5 | `memoire-longue` | La mémoire longue | O4 |
| 5 | `planification` | Planifier une tâche en étapes | O4 |
| 5 | `replanifier` | Changer de plan quand une étape échoue | O4 |
| 5 | `reflexion` | Se relire et se corriger : la réflexion | O4 |
| 6 | `quand-multi-agents` | Quand plusieurs agents valent mieux qu'un | O4 |
| 6 | `multi-agents` | Plusieurs agents qui coopèrent | O4 |
| 6 | `roles-agents` | Répartir les rôles entre agents | O4 |
| 6 | `communication-agents` | Faire communiquer des agents | O4 |
| 6 | `protocoles-agents` | Les protocoles entre agents (A2A) | O4 |
| 7 | `frameworks-agents` | Les frameworks d'agents : smolagents, LangGraph et les autres | O1 |
| 7 | `graphe-etats` | Un agent comme un graphe d'états | O4 |
| 7 | `smolagents` | Un premier agent avec smolagents | O1 |
| 7 | `langgraph` | Un agent avec LangGraph | O4 |
| 7 | `choisir-framework` | Framework ou code maison ? | O1 |
| 8 | `garde-fous` | Les garde-fous | O5 |
| 8 | `permissions-agent` | Les permissions minimales | O5 |
| 8 | `validation-actions` | Vérifier une action avant de l'exécuter | O5 |
| 8 | `bac-a-sable-agent` | Exécuter le code d'un agent dans un bac à sable | O5 |
| 8 | `limiter-boucles` | Limiter les boucles et les coûts | O5 |
| 8 | `humain-boucle` | Garder un humain dans la boucle | O5 |
| 8 | `journal-actions` | Garder une trace de chaque action | O5 |
| 9 | `taux-reussite` | Mesurer le taux de réussite des tâches | O6 |
| 9 | `scenarios` | Construire des scénarios de test | O6 |
| 9 | `trajectoires` | Analyser les trajectoires | O6 |
| 9 | `evaluer-etapes` | Évaluer chaque étape, pas seulement le résultat | O6 |
| 9 | `observer-agent` | Observer un agent en action : les traces | O6 |
| 9 | `cout-agent` | Mesurer le coût et la durée d'une tâche | O6 |
| 9 | `benchmarks-agents` | Les bancs d'essai d'agents | O6 |
| 10 | `agents-navigateur` | Les agents qui utilisent un navigateur | O2 |
| 10 | `agents-documents` | Un agent qui traite des documents de bout en bout | O1 |
| 10 | `agents-messagerie` | Un agent sur WhatsApp ou par SMS | O1 |
| 10 | `taches-longues` | Les tâches longues : reprendre là où l'agent s'était arrêté | O4 |
| 10 | `deployer-agent` | Mettre un agent à la disposition des utilisateurs | O5 |

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
| état (state) | A | `etat-agent` |
| orchestrateur, exécutant (worker) | A | `orchestrateur-executants` |
| inspecteur MCP | A | `inspecteur-mcp` |
| replanification | B | `replanifier` |
| A2A (protocole entre agents) | A | `protocoles-agents` |
| bac à sable (sandbox) | A | `bac-a-sable-agent` |
| agent de navigation (browser agent) | A | `agents-navigateur` |

## Fil rouge et ancrage local

- **Situation** : les producteurs de coton et d'anacarde de Korhogo veulent savoir quand semer, traiter ou récolter. Ton agent consulte la météo et la base de données des cultures, puis donne un conseil qu'il sait justifier.
- **Personnages** : Yacouba, conseiller agricole, et les producteurs de sa coopérative.
- **Données utilisées** : l'API Open-Meteo (gratuite, sans clé, données CC BY 4.0) et une base SQLite fictive des cultures et des parcelles ; les tests utilisent des réponses enregistrées.

## Exercices prévus

| Id | Titre | Objectif | Difficulté (1–3) | Livrable non testable ? |
| --- | --- | --- | --- | --- |
| 3.6-ex01 à ex05 | Qu'est-ce qu'un agent | O1 | 1 | non |
| 3.6-ex06 à ex09 | Les workflows avant les agents | O1 | 1 | non |
| 3.6-ex10 à ex14 | Les outils | O2 | 1 | non |
| 3.6-ex15 à ex19 | MCP | O3 | 2 | non |
| 3.6-ex20 à ex23 | Mémoire et planification | O4 | 2 | non |
| 3.6-ex24 à ex26 | Plusieurs agents | O4 | 2 | non |
| 3.6-ex27 à ex29 | Les frameworks | O1, O4 | 2–3 | non |
| 3.6-ex30 à ex34 | Des agents sous contrôle | O5 | 2–3 | non |
| 3.6-ex35 à ex39 | Évaluer un agent | O6 | 2–3 | non |
| 3.6-ex40 | Exercice clé : un agent qui consulte une API météo et une base de données pour conseiller un agriculteur, évalué sur 30 scénarios | O1, O2, O5, O6 | 3 | non |
| 3.6-ex41 à ex43 | Des agents dans le monde réel | O1, O2, O4, O5 | 2–3 | non |

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
