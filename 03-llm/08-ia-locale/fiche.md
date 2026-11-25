---
id: "3.8"
titre: "IA en local et sur appareil"
parcours: "03-llm"
promesse: "Faire tourner l'IA là où sont les utilisateurs, même sans connexion : choisir le bon modèle pour le bon matériel, le quantifier et tout faire fonctionner hors ligne."
question_saut: "Tu fais déjà tourner des LLM entièrement en local ?"
qcm: true
prerequis: ["3.4"]
statut: brouillon
version: 1
mise_a_jour: 2026-11-25
---

# Fiche du module 3.8 — IA en local et sur appareil

## Extrait du programme

- **Contenu** : Choisir un modèle selon le matériel (CPU, petit GPU, téléphone), formats et quantification (GGUF, 4 et 8 bits) et leur impact sur la qualité, Ollama, llama.cpp, LM Studio, notions de vLLM pour servir plusieurs utilisateurs sur un serveur, RAG 100 % local, edge (Raspberry Pi, mobile), comparatif local contre cloud
- **Exercice clé** : Faire tourner l'assistant RAG entièrement hors ligne sur un portable ordinaire

## Objectifs vérifiables

| Id | À la fin, l'apprenant sait… | Évalué par |
| --- | --- | --- |
| O1 | Choisir un modèle selon le matériel disponible. | ex01 à ex03, ex04 à ex06, exercice clé (ex13), qcm |
| O2 | Choisir un format et un niveau de quantification en mesurant l'effet sur la qualité. | ex04 à ex06, exercice clé (ex13), qcm |
| O3 | Faire tourner des modèles avec Ollama, llama.cpp et LM Studio. | ex07 à ex09, qcm |
| O4 | Construire un RAG entièrement local et hors ligne. | ex10 à ex12, exercice clé (ex13), qcm |
| O5 | Servir plusieurs utilisateurs et comparer local et cloud. | ex14 à ex16, qcm |
| O6 | Viser les petits appareils : Raspberry Pi et téléphone. | ex17 à ex19, qcm |

## Chapitres

| Chapitre | Titre | Exercices |
| --- | --- | --- |
| 1 | Le matériel | 3 |
| 2 | Formats et quantification | 3 |
| 3 | Les outils | 3 |
| 4 | Tout en local | 4 |
| 5 | Servir et comparer | 3 |
| 6 | Les petits appareils | 3 |

## Notions, dans l'ordre

| Chapitre | Id de la notion | Notion | Objectif |
| --- | --- | --- | --- |
| 1 | `memoire-modele` | Combien de mémoire pour un modèle | O1 |
| 1 | `memoire-contexte` | La mémoire prise par le contexte | O1 |
| 1 | `cpu-gpu` | Processeur, petit GPU, téléphone | O1 |
| 1 | `mesurer-vitesse` | Mesurer la vitesse : les tokens par seconde | O1 |
| 1 | `energie` | Consommer peu : batterie et énergie solaire | O1 |
| 2 | `gguf` | Le format GGUF | O2 |
| 2 | `niveaux-quantification` | 4 bits, 8 bits : ce qu'on perd vraiment | O2 |
| 2 | `mesurer-qualite-quant` | Mesurer l'effet sur la qualité | O2 |
| 2 | `petits-modeles` | Les petits modèles et leurs forces | O1 |
| 2 | `quantifier-soi-meme` | Quantifier un modèle toi-même | O2 |
| 3 | `ollama-avance` | Ollama en profondeur | O3 |
| 3 | `llama-cpp` | llama.cpp | O3 |
| 3 | `lm-studio` | LM Studio | O3 |
| 3 | `api-locale` | Une API compatible OpenAI, en local | O3 |
| 3 | `modelfile` | Personnaliser un modèle : le Modelfile | O3 |
| 4 | `rag-local` | Un RAG 100 % local | O4 |
| 4 | `embeddings-locaux` | Des embeddings en local | O4 |
| 4 | `sans-connexion` | Fonctionner sans aucune connexion | O4 |
| 4 | `distribuer-hors-ligne` | Installer et mettre à jour sans Internet | O4 |
| 4 | `agent-local` | Un agent avec un modèle local | O4 |
| 5 | `vllm` | Servir plusieurs utilisateurs : notions de vLLM | O5 |
| 5 | `decodage-speculatif` | Accélérer la génération : le décodage spéculatif | O5 |
| 5 | `local-cloud` | Local ou cloud : le comparatif | O5 |
| 5 | `concurrence-local` | Plusieurs utilisateurs sur une seule machine | O5 |
| 5 | `cout-local` | Calculer le coût réel du local | O5 |
| 6 | `raspberry-pi` | Sur un Raspberry Pi | O6 |
| 6 | `telephone-llm` | Sur un téléphone | O6 |
| 6 | `choisir-appareil` | Choisir un appareil pour l'IA embarquée | O6 |
| 6 | `modeles-embarques` | Des modèles pensés pour l'embarqué | O6 |
| 6 | `mettre-a-jour-appareils` | Mettre à jour des appareils dispersés | O6 |

## Vocabulaire du module

| Terme | Catégorie (A anglais / B transparent) | Notion où il apparaît |
| --- | --- | --- |
| inférence locale | B | `memoire-modele` |
| tokens par seconde | B | `mesurer-vitesse` |
| GGUF | A | `gguf` |
| quantification 4 bits, 8 bits | A | `niveaux-quantification` |
| llama.cpp, LM Studio | A | `llama-cpp` |
| vLLM, serveur d'inférence | A | `vllm` |
| edge, embarqué | A | `raspberry-pi` |

## Fil rouge et ancrage local

- **Situation** : un centre de santé de N'Djamena perd souvent sa connexion. L'assistant qui répond aux questions des soignants sur les protocoles de soins doit tourner entièrement sur le portable du centre.
- **Personnages** : Dr Mahamat, médecin-chef, et l'équipe de garde de nuit.
- **Données utilisées** : des protocoles de soins publics (guides de santé, statut juridique TODO(vérifier)).

## Exercices prévus

| Id | Titre | Objectif | Difficulté (1–3) | Livrable non testable ? |
| --- | --- | --- | --- | --- |
| 3.8-ex01 à ex03 | Le matériel | O1 | 1 | non |
| 3.8-ex04 à ex06 | Formats et quantification | O1, O2 | 1 | non |
| 3.8-ex07 à ex09 | Les outils | O3 | 2 | non |
| 3.8-ex10 à ex12 | Tout en local | O4 | 2 | non |
| 3.8-ex13 | Exercice clé : l'assistant RAG entièrement hors ligne sur un portable ordinaire | O1, O2, O4 | 3 | non |
| 3.8-ex14 à ex16 | Servir et comparer | O5 | 2–3 | non |
| 3.8-ex17 à ex19 | Les petits appareils | O6 | 2–3 | non |

## Ressources matérielles

- **RAM maximale** : 6 à 8 Go pour le RAG complet en local (c'est la limite de la machine minimale).
- **Téléchargements** : llama.cpp et un modèle GGUF (1 à 2 Go), LM Studio facultatif, TODO(vérifier).
- **Temps de calcul le plus long** : quelques secondes par réponse sur 4 cœurs, TODO(vérifier).
- **Dépendances nouvelles** : llama-cpp-python (facultatif).
- **API payante** : aucune : c'est le principe du module.

## Point de contrôle sécurité et éthique

Un assistant médical hors ligne ne remplace jamais un soignant : afficher clairement ses limites et ses sources.

## Ressources externes gratuites

| Ressource | Langue | Type | Licence ou accès | Pourquoi |
| --- | --- | --- | --- | --- |
| [llama.cpp](https://github.com/ggml-org/llama.cpp) | anglais | documentation | MIT | Faire tourner des modèles quantifiés sur processeur. |
| [Documentation d'Ollama](https://github.com/ollama/ollama) | anglais | documentation | MIT | Servir un modèle local simplement. |
| [Documentation de LM Studio](https://lmstudio.ai/docs) | anglais | documentation | gratuit | Une interface pour tester des modèles locaux. |
| [Le format GGUF (Hugging Face)](https://huggingface.co/docs/hub/gguf) | anglais | documentation | Apache 2.0 | Trouver et comprendre les modèles GGUF. |
| [Documentation de vLLM](https://docs.vllm.ai/) | anglais | documentation | Apache 2.0 | Servir plusieurs utilisateurs sur un serveur. |

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

- TODO(vérifier) : vérifier que le RAG complet tient dans 8 Go de RAM avec le système et le navigateur ouverts.
- TODO(vérifier) : Raspberry Pi et téléphone : matériel facultatif, prévoir une démonstration vidéo pour ceux qui n'en ont pas.
- TODO(vérifier) : compléter le vocabulaire des notions ajoutées par la seconde passe d'audit (25/11/2026), en vérifiant chaque terme dans docs/glossaire.md.
