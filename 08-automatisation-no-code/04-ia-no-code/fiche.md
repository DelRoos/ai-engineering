---
id: "8.4"
titre: "L'IA dans le no code"
parcours: "08-automatisation-no-code"
promesse: "Ajouter l'IA aux automatisations sans tout coder : appeler des modèles, traiter des documents, construire des agents et des RAG dans n8n, brancher MCP, puis évaluer et sécuriser ce que l'on a construit."
question_saut: "Tu as déjà livré un agent ou un RAG construit dans n8n, évalué sur des cas de test ?"
qcm: true
prerequis: ["8.2", "3.2"]
statut: brouillon
version: 1
mise_a_jour: 2026-11-25
---

# Fiche du module 8.4 — L'IA dans le no code

## Extrait du programme

- **Contenu** : nœuds LLM et modèles locaux, sorties structurées, documents, courriels, audio, traduction, agents n8n, outils et mémoire, MCP, RAG sans code, évaluation, injection de prompt, données sensibles
- **Exercice clé** : Un assistant WhatsApp sans code qui répond à partir des documents d'une entreprise, agit avec des outils et passe la main à un humain

## Objectifs vérifiables

| Id | À la fin, l'apprenant sait… | Évalué par |
| --- | --- | --- |
| O1 | Appeler des modèles de langage dans un workflow et obtenir des sorties exploitables, à coût suivi. | ex01 à ex03, qcm |
| O2 | Traiter automatiquement documents, courriels, messages vocaux et traductions. | ex04 à ex06, qcm |
| O3 | Construire un agent sans code avec outils, mémoire, MCP et validation humaine. | ex07 à ex09, exercice clé (ex10), qcm |
| O4 | Construire un RAG sans code et en connaître les limites. | ex11 à ex13, qcm |
| O5 | Évaluer, sécuriser et surveiller un workflow d'IA. | ex14 à ex16, qcm |

## Chapitres

| Chapitre | Titre | Exercices |
| --- | --- | --- |
| 1 | Appeler un LLM sans coder | 3 |
| 2 | Traiter des documents et des messages | 3 |
| 3 | Des agents sans coder | 4 |
| 4 | Un RAG sans coder | 3 |
| 5 | Évaluer et sécuriser | 3 |

## Notions, dans l'ordre

| Chapitre | Id de la notion | Notion | Objectif |
| --- | --- | --- | --- |
| 1 | `noeuds-llm` | Les nœuds de modèles : fournisseurs et modèles locaux | O1 |
| 1 | `prompts-workflow` | Écrire et versionner les prompts dans un workflow | O1 |
| 1 | `json-exploitable` | Obtenir un JSON exploitable | O1 |
| 1 | `ollama-n8n` | Brancher un modèle local avec Ollama | O1 |
| 1 | `cout-llm-workflow` | Suivre le coût des appels | O1 |
| 2 | `extraire-facture-nocode` | Extraire les données d'un PDF ou d'une facture | O2 |
| 2 | `classer-courriels` | Classer les courriels et préparer les réponses | O2 |
| 2 | `messages-vocaux` | Transcrire des messages vocaux | O2 |
| 2 | `traduire-verifier` | Traduire automatiquement, et vérifier | O2 |
| 2 | `resumer-documents` | Résumer des documents longs | O2 |
| 3 | `agent-n8n` | Le nœud Agent de n8n | O3 |
| 3 | `outils-agent-nocode` | Donner des outils à un agent | O3 |
| 3 | `memoire-agent-nocode` | La mémoire d'un agent | O3 |
| 3 | `mcp-n8n` | MCP dans n8n : utiliser et exposer des outils | O3 |
| 3 | `humain-agent-nocode` | Garder un humain dans la boucle | O3 |
| 4 | `rag-n8n` | Le RAG dans n8n | O4 |
| 4 | `base-vectorielle-nocode` | Une base vectorielle branchée au workflow | O4 |
| 4 | `ingestion-nocode` | Ingérer et mettre à jour des documents | O4 |
| 4 | `citations-nocode` | Citer les sources dans les réponses | O4 |
| 4 | `limites-rag-nocode` | Les limites du RAG sans code | O4 |
| 5 | `evaluer-workflow-ia` | Évaluer un workflow d'IA sur des cas de test | O5 |
| 5 | `injection-workflow` | L'injection de prompt dans un workflow | O5 |
| 5 | `donnees-sensibles-modeles` | Les données sensibles envoyées aux modèles | O5 |
| 5 | `surveiller-qualite-nocode` | Surveiller la qualité dans le temps | O5 |
| 5 | `passer-au-code-ia` | Quand passer au code | O5 |

## Vocabulaire du module

| Terme | Catégorie (A anglais / B transparent) | Notion où il apparaît |
| --- | --- | --- |
| agent (IA) | B | `agent-n8n` |
| RAG | A | `rag-n8n` |
| MCP (Model Context Protocol) | A | `mcp-n8n` |
| injection de prompt | B | `injection-workflow` |

## Fil rouge et ancrage local

- **Situation** : L'agence de voyages veut un assistant qui répond aux clients sur WhatsApp à partir de ses offres et de ses conditions, prépare les devis et passe la main aux conseillers.
- **Personnages** : Mme Agbeko ; les conseillers ; les clients de l'agence.
- **Données utilisées** : des offres de voyages, des conditions de vente et des conversations fictives.

## Exercices prévus

| Id | Titre | Objectif | Difficulté (1–3) | Livrable non testable ? |
| --- | --- | --- | --- | --- |
| 8.4-ex01 à ex03 | Appeler un LLM sans coder | O1 | 1 | non |
| 8.4-ex04 à ex06 | Traiter des documents et des messages | O2 | 2 | non |
| 8.4-ex07 à ex09 | Des agents sans coder | O3 | 2 | non |
| 8.4-ex10 | Exercice clé : un assistant WhatsApp sans code qui répond à partir des documents d'une entreprise, agit avec des outils et passe la main à un humain | O3 | 3 | non |
| 8.4-ex11 à ex13 | Un RAG sans coder | O4 | 2–3 | non |
| 8.4-ex14 à ex16 | Évaluer et sécuriser | O5 | 2–3 | non |

## Ressources matérielles

- **RAM maximale** : moins de 6 Go (n8n et un petit modèle local)
- **Téléchargements** : un petit modèle local (environ 2 Go)
- **Temps de calcul le plus long** : quelques secondes par message en local
- **Dépendances nouvelles** : n8n, Ollama, une base vectorielle (Qdrant)
- **API payante** : facultative : une API de LLM avec un budget fixé

## Point de contrôle sécurité et éthique

- Le contenu des messages et des documents est traité comme des données, jamais comme des consignes (injection de prompt).
- Un agent qui agit (réserver, payer, envoyer) passe par une validation humaine.
- On sait quelles données partent vers quel fournisseur de modèle, et on peut tout garder en local.

## Ressources externes gratuites

| Ressource | Langue | Type | Licence ou accès | Pourquoi |
| --- | --- | --- | --- | --- |
| [n8n, l'IA avancée](https://docs.n8n.io/advanced-ai/) | anglais | documentation | conditions de n8n | Agents, chaînes, mémoire, bases vectorielles dans n8n. |
| [Model Context Protocol](https://modelcontextprotocol.io/) | anglais | documentation | accès libre | Le protocole pour brancher des outils aux agents. |
| [Ollama](https://github.com/ollama/ollama) | anglais | dépôt | MIT | Faire tourner les modèles en local, sans coût par appel. |

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

- Les versions des outils et les conditions d'utilisation des services cités, au moment de rédiger le cours.
