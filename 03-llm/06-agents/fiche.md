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
| O1 | Construire une boucle agent qui raisonne, agit et observe. | ex01 à ex05, ex06 à ex09, ex36 à ex38, exercice clé (ex49), ex50 à ex52, qcm |
| O2 | Donner des outils à un agent et contrôler leur usage. | ex10 à ex14, ex15 à ex17, exercice clé (ex49), ex50 à ex52, qcm |
| O3 | Utiliser et créer des serveurs MCP. | ex18 à ex22, qcm |
| O4 | Ajouter mémoire, planification et coopération entre agents. | ex23 à ex27, ex32 à ex35, ex36 à ex38, qcm |
| O5 | Encadrer un agent avec des garde-fous. | ex39 à ex43, exercice clé (ex49), ex50 à ex52, qcm |
| O6 | Évaluer un agent sur des scénarios et des environnements simulés. | ex44 à ex48, exercice clé (ex49), qcm |
| O7 | Concevoir le harness d'un agent pour des tâches longues : état durable, reprise après interruption, points de contrôle, preuve du résultat. | ex28 à ex31, ex50 à ex52, qcm |

## Chapitres

| Chapitre | Titre | Exercices |
| --- | --- | --- |
| 1 | Qu'est-ce qu'un agent | 5 |
| 2 | Les workflows avant les agents | 4 |
| 3 | Les outils | 5 |
| 4 | Des outils en grand nombre | 3 |
| 5 | MCP | 5 |
| 6 | Mémoire et planification | 5 |
| 7 | Le harness d'un agent | 4 |
| 8 | Plusieurs agents | 4 |
| 9 | Les frameworks | 3 |
| 10 | Des agents sous contrôle | 5 |
| 11 | Évaluer un agent | 6 |
| 12 | Des agents dans le monde réel | 3 |

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
| 4 | `cout-descriptions` | Le coût des descriptions d'outils dans le contexte | O2 |
| 4 | `decouverte-outils` | Trop d'outils pour le contexte : la découverte à la demande | O2 |
| 4 | `exemples-outils` | Montrer comment se servir d'un outil : les exemples d'usage | O2 |
| 4 | `orchestration-code` | Appeler les outils depuis du code plutôt qu'un par un | O2 |
| 4 | `procedures-reutilisables` | Des procédures réutilisables chargées au besoin | O2 |
| 5 | `mcp` | Le Model Context Protocol | O3 |
| 5 | `serveurs-mcp-existants` | Utiliser des serveurs MCP existants | O3 |
| 5 | `serveur-mcp` | Créer un serveur MCP | O3 |
| 5 | `ressources-mcp` | Ressources et prompts dans MCP | O3 |
| 5 | `inspecteur-mcp` | Tester un serveur MCP avec l'inspecteur | O3 |
| 5 | `client-mcp` | Brancher un serveur MCP à un agent | O3 |
| 5 | `transports-mcp` | Local ou distant : les transports MCP | O3 |
| 5 | `versions-mcp` | Une spécification qui évolue : lire les versions de MCP | O3 |
| 6 | `memoire-travail` | La mémoire de travail | O4 |
| 6 | `resumer-historique` | Résumer l'historique pour tenir dans le contexte | O4 |
| 6 | `memoire-longue` | La mémoire longue | O4 |
| 6 | `memoire-utilisateurs` | Une mémoire par utilisateur : séparer, oublier, corriger | O4 |
| 6 | `evaluer-memoire` | Évaluer une mémoire : ce qu'elle retient, ce qu'elle invente | O4 |
| 6 | `planification` | Planifier une tâche en étapes | O4 |
| 6 | `replanifier` | Changer de plan quand une étape échoue | O4 |
| 6 | `reflexion` | Se relire et se corriger : la réflexion | O4 |
| 7 | `harness` | Le harness : tout ce qui entoure le modèle | O7 |
| 7 | `etat-durable` | Un état durable : fichiers, notes de progression, journal | O7 |
| 7 | `taches-longues` | Les tâches longues : reprendre là où l'agent s'était arrêté | O7 |
| 7 | `compaction-agent` | Tenir une longue tâche dans le contexte : compaction et notes | O7 |
| 7 | `points-controle` | Points de contrôle et retour en arrière | O7 |
| 7 | `verifier-resultat-agent` | Prouver qu'une tâche est vraiment finie | O7 |
| 8 | `quand-multi-agents` | Quand plusieurs agents valent mieux qu'un | O4 |
| 8 | `multi-agents` | Plusieurs agents qui coopèrent | O4 |
| 8 | `roles-agents` | Répartir les rôles entre agents | O4 |
| 8 | `communication-agents` | Faire communiquer des agents | O4 |
| 8 | `protocoles-agents` | Les protocoles entre agents (A2A) | O4 |
| 8 | `mono-ou-multi-mesure` | Un agent ou plusieurs : trancher par la mesure | O4 |
| 9 | `frameworks-agents` | Les frameworks d'agents : smolagents, LangGraph et les autres | O1 |
| 9 | `graphe-etats` | Un agent comme un graphe d'états | O4 |
| 9 | `smolagents` | Un premier agent avec smolagents | O1 |
| 9 | `langgraph` | Un agent avec LangGraph | O4 |
| 9 | `choisir-framework` | Framework ou code maison ? | O1 |
| 10 | `garde-fous` | Les garde-fous | O5 |
| 10 | `permissions-agent` | Les permissions minimales | O5 |
| 10 | `validation-actions` | Vérifier une action avant de l'exécuter | O5 |
| 10 | `bac-a-sable-agent` | Exécuter le code d'un agent dans un bac à sable | O5 |
| 10 | `limiter-boucles` | Limiter les boucles et les coûts | O5 |
| 10 | `humain-boucle` | Garder un humain dans la boucle | O5 |
| 10 | `journal-actions` | Garder une trace de chaque action | O5 |
| 11 | `taux-reussite` | Mesurer le taux de réussite des tâches | O6 |
| 11 | `scenarios` | Construire des scénarios de test | O6 |
| 11 | `trajectoires` | Analyser les trajectoires | O6 |
| 11 | `evaluer-etapes` | Évaluer chaque étape, pas seulement le résultat | O6 |
| 11 | `observer-agent` | Observer un agent en action : les traces | O6 |
| 11 | `cout-agent` | Mesurer le coût et la durée d'une tâche | O6 |
| 11 | `environnements-agents` | Des environnements simulés avec un utilisateur : τ²-bench | O6 |
| 11 | `benchmarks-agents` | Les bancs d'essai d'agents | O6 |
| 12 | `agents-navigateur` | Les agents qui utilisent un navigateur | O2 |
| 12 | `agents-documents` | Un agent qui traite des documents de bout en bout | O1 |
| 12 | `agents-messagerie` | Un agent sur WhatsApp ou par SMS | O1 |
| 12 | `agent-connexion-instable` | Un agent quand la connexion coupe | O7 |
| 12 | `deployer-agent` | Mettre un agent à la disposition des utilisateurs | O5 |

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
| harness (d'un agent) | A | `harness` |
| point de contrôle (checkpoint) | A | `points-controle` |
| découverte d'outils à la demande (tool search) | A | `decouverte-outils` |
| orchestration par code (programmatic tool calling) | A | `orchestration-code` |
| skill (procédure réutilisable) | A | `procedures-reutilisables` |
| τ²-bench | A | `environnements-agents` |

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
| 3.6-ex15 à ex17 | Des outils en grand nombre | O2 | 1 | non |
| 3.6-ex18 à ex22 | MCP | O3 | 2 | non |
| 3.6-ex23 à ex27 | Mémoire et planification | O4 | 2 | non |
| 3.6-ex28 à ex31 | Le harness d'un agent | O7 | 2 | non |
| 3.6-ex32 à ex35 | Plusieurs agents | O4 | 2 | non |
| 3.6-ex36 à ex38 | Les frameworks | O1, O4 | 2–3 | non |
| 3.6-ex39 à ex43 | Des agents sous contrôle | O5 | 2–3 | non |
| 3.6-ex44 à ex48 | Évaluer un agent | O6 | 2–3 | non |
| 3.6-ex49 | Exercice clé : un agent qui consulte une API météo et une base de données pour conseiller un agriculteur, évalué sur 30 scénarios | O1, O2, O5, O6 | 3 | non |
| 3.6-ex50 à ex52 | Des agents dans le monde réel | O1, O2, O5, O7 | 2–3 | non |

## Épreuve de niveau expert

**Épreuve** : un agent doit traiter un dossier de 50 demandes en plusieurs sessions. On coupe le processus au milieu : l'agent doit reprendre sans refaire ni perdre de travail, respecter ses permissions, et prouver par des vérifications que chaque demande est réellement traitée.

| Niveau démontré | Preuve attendue |
| --- | --- |
| Implémenter | Le harness : état durable, reprise, points de contrôle |
| Diagnostiquer | Les trajectoires ratées, rattachées à leur cause |
| Comparer | Un agent seul et un système à plusieurs agents, sur les mêmes scénarios |
| Maintenir | Les scénarios rejoués à chaque changement de modèle ou d'outil |

**Statut des méthodes enseignées**

| Méthode | Statut | Pratique |
| --- | --- | --- |
| Boucle agent, outils, garde-fous, MCP | établie | autonome, en local |
| Harness, reprise sur plusieurs sessions, points de contrôle | établie, récente | autonome avec un petit modèle local |
| Découverte d'outils, orchestration par code | récente | expérience réduite, à confirmer sur tes propres outils |
| Environnements simulés (τ²-bench) | établie | analyse des résultats publiés et mini-environnement maison |

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
| [Effective harnesses for long-running agents](https://www.anthropic.com/engineering/effective-harnesses-for-long-running-agents) | anglais | article | accès libre | Faire tenir un agent sur plusieurs sessions : état, progression, vérification. |
| [Advanced tool use](https://www.anthropic.com/engineering/advanced-tool-use) | anglais | article | accès libre | Découverte d'outils à la demande, appels depuis du code, exemples d'usage. |
| [Code execution with MCP](https://www.anthropic.com/engineering/code-execution-with-mcp) | anglais | article | accès libre | Réduire le contexte en appelant les outils depuis du code. |
| [MCP, la version 2026-07-28 de la spécification](https://blog.modelcontextprotocol.io/posts/2026-07-28/) | anglais | article | accès libre | Ce qui change dans la dernière version du protocole. |
| [τ²-bench](https://arxiv.org/abs/2506.07982) | anglais | article | accès libre | Évaluer un agent face à un utilisateur simulé qui agit aussi. |

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
