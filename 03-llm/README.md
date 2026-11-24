---
id: "etape-3"
titre: "Étape 3 — LLM, RAG, agents, IA locale et langues africaines"
ordre: 3
semaines: 12
statut: brouillon
---

# Étape 3 — LLM, RAG, agents, IA locale et langues africaines (12 semaines)

**Objectif** : construire des applications fiables sur les grands modèles de langage. C'est le cœur du métier d'AI engineer, donc l'étape la plus longue.

**Matériel** : tout se fait par défaut avec de petits modèles locaux (1 à 3 milliards de paramètres, quantifiés en 4 bits, via Ollama) qui tournent sur 8 Go de RAM. Les API payantes restent optionnelles, avec un budget annoncé.

## Modules

| Module | Dossier | Semaines | Contenu | Exercice clé |
| --- | --- | --- | --- | --- |
| 3.1 Comprendre les LLM | `01-comprendre-llm/` | 1 | Pré-entraînement, instruction tuning, RLHF, contexte, tokens, température, coûts ; modèles fermés et ouverts | Comparer 3 petits modèles locaux (et, en option, une API à bas coût) sur 20 tâches |
| 3.2 Prompt engineering et sorties structurées | `02-prompts-sorties-structurees/` | 2 | Instructions, few-shot, raisonnement étape par étape, contexte, JSON validé (Pydantic), function calling | Extraire des données structurées de 100 factures ou reçus |
| 3.3 Embeddings et recherche vectorielle | `03-embeddings/` | 3 | Embeddings, similarité, Chroma, sqlite-vec, Qdrant, pgvector, recherche hybride | Moteur de recherche sémantique sur 1 000 documents |
| 3.4 RAG en profondeur | `04-rag/` | 4–5 | Découpage, reranking, citations, « je ne sais pas », RAG multilingue, PDF et tableaux | Assistant qui cite ses sources et refuse de répondre hors sujet |
| 3.5 Évaluation des systèmes LLM | `05-evaluation-llm/` | 6 | Jeux de test, fidélité, pertinence, LLM-as-a-judge, évaluation humaine, non-régression | Jeu d'évaluation de 50 questions et mesure de 3 variantes du RAG |
| 3.6 Agents et outils | `06-agents/` | 7–8 | Boucle agent, appels d'outils, MCP, mémoire, planification, multi-agents, garde-fous, évaluation | Agent qui conseille un agriculteur (API météo + base de données), évalué sur 30 scénarios |
| 3.7 Fine-tuning | `07-fine-tuning/` | 9 | Quand fine-tuner, LoRA et QLoRA, préparation des données, évaluation avant et après | Fine-tuner avec LoRA un modèle d'environ 0,5 milliard de paramètres pour un domaine précis |
| 3.8 IA en local et sur appareil | `08-ia-locale/` | 10 | Choix du modèle selon le matériel, GGUF, quantification, Ollama, llama.cpp, LM Studio, vLLM, edge | Faire tourner l'assistant RAG entièrement hors ligne sur un portable ordinaire |
| 3.9 Langues africaines peu dotées | `09-langues-africaines/` | 11 | Tokenisation, Masakhane, AfriSenti, MasakhaNER, traduction, reconnaissance vocale, peu de données, locuteurs natifs | Améliorer et mesurer un modèle sur une langue locale |
| 3.10 Multimodal, voix et génération d'images | `10-multimodal/` | 12 | Vision + texte, Whisper, synthèse vocale, diffusion, usages pour les populations peu alphabétisées | Assistant vocal simple en français ou en langue locale |

## Projet 3 — Assistant intelligent sur des documents réels (`projet/`)

Un assistant RAG qui répond aux questions sur des textes officiels (code du travail, procédures administratives, guides de santé) en citant ses sources, complété par un agent qui utilise au moins 2 outils. Il fonctionne entièrement en local par défaut, avec un mode API à bas coût en option.

- **Livrables** : application web, jeu d'évaluation publié, rapport chiffré comparant les deux modes (qualité, coût par requête, latence).
- **Critères** : taux de réponses fidèles mesuré, gestion des questions hors sujet.
- **Point de contrôle sécurité et éthique** : tests d'injection de prompt, refus des questions hors périmètre, permissions minimales des outils de l'agent.

## Anglais

Rapports de projet en anglais. Examen oral avec l'IA à moitié en anglais. Les cours ont un encadré de vocabulaire anglais.

## Mise à jour

Cette étape et la liste des API recommandées sont revues tous les 3 à 6 mois : les modèles et les prix changent très vite. Tout prix ou nom de modèle est daté.

## État

Aucun module rédigé pour l'instant.
