---
id: "3.1"
titre: "Comprendre les LLM"
parcours: "03-llm"
promesse: "Savoir ce qu'est vraiment un grand modèle de langage : comment il naît, ce qu'il coûte, comment il génère, et en faire tourner un sur ton propre PC."
question_saut: "Tu connais déjà le fonctionnement et les coûts des LLM ?"
qcm: true
prerequis: ["2.4"]
statut: brouillon
version: 1
mise_a_jour: 2026-11-25
---

# Fiche du module 3.1 — Comprendre les LLM

## Extrait du programme

- **Contenu** : Pré-entraînement, instruction tuning, RLHF, fenêtre de contexte, tokens, température, coûts ; modèles fermés (API) et ouverts (Llama, Mistral, Qwen, Gemma)
- **Exercice clé** : Comparer 3 petits modèles locaux (et, en option, une API à bas coût) sur 20 tâches : qualité, coût, latence

## Objectifs vérifiables

| Id | À la fin, l'apprenant sait… | Évalué par |
| --- | --- | --- |
| O1 | Expliquer comment un LLM est entraîné : pré-entraînement, instruction tuning, RLHF. | ex01 à ex03, qcm |
| O2 | Raisonner en tokens : contexte, coût et limites. | ex04 à ex06, exercice clé (ex14), qcm |
| O3 | Régler la génération et reconnaître les hallucinations. | ex07 à ex08, qcm |
| O4 | Faire tourner un petit modèle ouvert en local avec Ollama. | ex11 à ex13, exercice clé (ex14), qcm |
| O5 | Comparer des modèles ouverts et fermés sur la qualité, le coût et la latence. | ex09 à ex10, ex11 à ex13, exercice clé (ex14), qcm |

## Chapitres

| Chapitre | Titre | Exercices |
| --- | --- | --- |
| 1 | Comment naît un LLM | 3 |
| 2 | Les tokens | 3 |
| 3 | Générer du texte | 2 |
| 4 | Les modèles | 2 |
| 5 | En local et par API | 4 |

## Notions, dans l'ordre

| Chapitre | Id de la notion | Notion | Objectif |
| --- | --- | --- | --- |
| 1 | `pre-entrainement` | Le pré-entraînement : apprendre à prédire la suite | O1 |
| 1 | `instruction-tuning` | L'instruction tuning : apprendre à suivre des consignes | O1 |
| 1 | `rlhf` | Le RLHF : apprendre des préférences humaines | O1 |
| 1 | `lois-echelle` | Pourquoi plus gros fait mieux, jusqu'à un certain point | O1 |
| 2 | `tokens-llm` | Tout est token | O2 |
| 2 | `fenetre-contexte` | La fenêtre de contexte | O2 |
| 2 | `cout-tokens` | Ce que coûte un token | O2 |
| 2 | `langues-tokens` | Pourquoi certaines langues coûtent plus cher | O2 |
| 3 | `temperature` | La température | O3 |
| 3 | `top-p` | Top-p, top-k et les autres réglages | O3 |
| 3 | `hallucinations` | Pourquoi un LLM invente : les hallucinations | O3 |
| 4 | `ouverts-fermes` | Modèles fermés et modèles ouverts | O5 |
| 4 | `familles` | Les familles de modèles ouverts : Llama, Mistral, Qwen, Gemma | O5 |
| 4 | `licences-modeles` | Les licences des modèles | O5 |
| 5 | `ollama` | Installer Ollama et un petit modèle | O4 |
| 5 | `quantification-llm` | Pourquoi un modèle quantifié tient dans 8 Go | O4 |
| 5 | `api-llm` | Appeler un modèle par API | O5 |
| 5 | `comparer-llm` | Comparer des modèles : qualité, coût, latence | O5 |

## Vocabulaire du module

| Terme | Catégorie (A anglais / B transparent) | Notion où il apparaît |
| --- | --- | --- |
| LLM (grand modèle de langage) | A | `pre-entrainement` |
| pré-entraînement (pre-training) | A | `pre-entrainement` |
| instruction tuning | A | `instruction-tuning` |
| RLHF | A | `rlhf` |
| fenêtre de contexte (context window) | A | `fenetre-contexte` |
| température, top-p | A | `temperature` |
| hallucination | B | `hallucinations` |
| modèle ouvert (open weights) | A | `ouverts-fermes` |
| Ollama, quantification | A | `ollama` |
| latence | B | `comparer-llm` |

## Fil rouge et ancrage local

- **Situation** : un cabinet de juristes de Libreville reçoit chaque jour des questions sur le code du travail. Avant de construire un assistant, il faut choisir le modèle : lequel répond bien, vite, et pour combien ?
- **Personnages** : Maître Nzé, avocate, qui veut des réponses fiables et un budget maîtrisé.
- **Données utilisées** : 20 tâches de test fournies (questions, résumés, extractions), en français.

## Exercices prévus

| Id | Titre | Objectif | Difficulté (1–3) | Livrable non testable ? |
| --- | --- | --- | --- | --- |
| 3.1-ex01 à ex03 | Comment naît un LLM | O1 | 1–2 | non |
| 3.1-ex04 à ex06 | Les tokens | O2 | 2 | non |
| 3.1-ex07 à ex08 | Générer du texte | O3 | 2 | non |
| 3.1-ex09 à ex10 | Les modèles | O5 | 2 | non |
| 3.1-ex11 à ex13 | En local et par API | O4, O5 | 2–3 | non |
| 3.1-ex14 | Exercice clé : comparer 3 petits modèles locaux (et, en option, une API à bas coût) sur 20 tâches | O2, O4, O5 | 3 | oui → GRILLE.md (rapport de comparaison) |

## Ressources matérielles

- **RAM maximale** : 4 à 6 Go avec un modèle de 1 à 3 milliards de paramètres quantifié en 4 bits.
- **Téléchargements** : Ollama (environ 200 Mo) et 3 petits modèles (1 à 2 Go chacun), TODO(vérifier).
- **Temps de calcul le plus long** : quelques secondes par réponse sur 4 cœurs, TODO(vérifier).
- **Dépendances nouvelles** : ollama (programme), le client Python ollama.
- **API payante** : facultative : une API à bas coût pour la comparaison (budget maximum 1 dollar, prix daté à la rédaction, TODO(vérifier)). Tout l'exercice se fait en local sans elle.

## Point de contrôle sécurité et éthique

Ne jamais envoyer de données confidentielles de clients à une API externe sans accord : c'est un argument en faveur du local, comparé dans l'exercice clé.

## Ressources externes gratuites

| Ressource | Langue | Durée ou taille | Licence | Pourquoi |
| --- | --- | --- | --- | --- |
| [Intro to Large Language Models, par Andrej Karpathy](https://www.youtube.com/watch?v=zjkBMFhNj_g) | anglais | vidéo d'une heure | gratuit en ligne | Une vue d'ensemble claire des LLM. |
| [Le cours LLM de Hugging Face](https://huggingface.co/learn/llm-course) | anglais | cours | Apache 2.0 | Approfondir le fonctionnement des modèles. |
| [Documentation d'Ollama](https://github.com/ollama/ollama) | anglais | référence | MIT | Installer et utiliser des modèles en local. |

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

- TODO(vérifier) : modèles recommandés (taille, licence, qualité en français) à revoir à chaque mise à jour trimestrielle.
- TODO(vérifier) : prix des API à bas coût, datés.
