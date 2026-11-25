---
id: "2.4"
titre: "Séquences et Transformers"
parcours: "02-deep-learning"
promesse: "Comprendre l'architecture qui fait tourner les grands modèles de langage, en codant toi-même un petit modèle qui génère du texte."
question_saut: "Tu sais déjà coder un Transformer ?"
qcm: true
prerequis: ["2.2"]
statut: brouillon
version: 1
mise_a_jour: 2026-11-25
---

# Fiche du module 2.4 — Séquences et Transformers

## Extrait du programme

- **Contenu** : Embeddings, mécanisme d'attention, architecture Transformer, tokenisation, bibliothèque Hugging Face
- **Exercice clé** : Coder un mini-Transformer qui génère du texte (à la manière de nanoGPT), entraîné sur processeur

## Objectifs vérifiables

| Id | À la fin, l'apprenant sait… | Évalué par |
| --- | --- | --- |
| O1 | Transformer du texte en tokens et en embeddings. | ex01 à ex03, exercice clé (ex15), qcm |
| O2 | Expliquer ce qu'est un modèle de langue et pourquoi les réseaux récurrents ont été dépassés. | ex04 à ex06, qcm |
| O3 | Calculer un mécanisme d'attention, à la main puis en code. | ex07 à ex09, exercice clé (ex15), qcm |
| O4 | Assembler un bloc Transformer et un petit modèle génératif. | ex10 à ex14, exercice clé (ex15), ex16 à ex17, qcm |
| O5 | Utiliser des modèles pré-entraînés avec la bibliothèque Hugging Face. | ex18 à ex21, qcm |

## Chapitres

| Chapitre | Titre | Exercices |
| --- | --- | --- |
| 1 | Le texte en nombres | 3 |
| 2 | Les séquences | 3 |
| 3 | L'attention | 3 |
| 4 | Le Transformer | 6 |
| 5 | Pré-entraîner | 2 |
| 6 | Hugging Face | 4 |

## Notions, dans l'ordre

| Chapitre | Id de la notion | Notion | Objectif |
| --- | --- | --- | --- |
| 1 | `tokenisation` | La tokenisation : du texte aux tokens | O1 |
| 1 | `bpe` | Découper en sous-mots : BPE | O1 |
| 1 | `embeddings` | Les embeddings : des mots dans un espace | O1 |
| 1 | `word2vec` | Apprendre des embeddings : word2vec | O1 |
| 2 | `modele-langue` | Prédire le mot suivant : le modèle de langue | O2 |
| 2 | `rnn` | Les réseaux récurrents et leurs limites | O2 |
| 2 | `lstm-gru` | Retenir plus longtemps : LSTM et GRU | O2 |
| 2 | `seq2seq` | Encoder puis décoder : seq2seq | O2 |
| 3 | `attention-intuition` | L'attention : regarder les bons mots | O3 |
| 3 | `requetes-cles-valeurs` | Requêtes, clés et valeurs | O3 |
| 3 | `attention-calcul` | Calculer l'attention, à la main puis en code | O3 |
| 3 | `multi-tetes` | Plusieurs têtes d'attention | O3 |
| 3 | `masque-causal` | Ne pas regarder l'avenir : le masque causal | O3 |
| 4 | `position` | Donner l'ordre des mots : l'encodage de position | O4 |
| 4 | `bloc-transformer` | Un bloc Transformer complet | O4 |
| 4 | `norme-residus` | Normalisation et connexions résiduelles | O4 |
| 4 | `familles-transformers` | Encodeur, décodeur : les familles de modèles | O4 |
| 4 | `mini-gpt` | Un mini-GPT qui génère du texte | O4 |
| 4 | `echantillonnage` | Générer : température et échantillonnage | O4 |
| 4 | `beam-search` | Chercher la meilleure suite : beam search | O4 |
| 4 | `kv-cache` | Générer vite : le cache des clés et des valeurs | O4 |
| 5 | `bert` | BERT : apprendre en devinant les mots cachés | O4 |
| 5 | `gpt-preentrainement` | GPT : apprendre en prédisant la suite | O4 |
| 6 | `hub-hf` | Le Hub de Hugging Face | O5 |
| 6 | `pipelines-hf` | Utiliser un modèle en trois lignes : pipeline | O5 |
| 6 | `tokenizers-hf` | Les tokenizers de Hugging Face | O5 |
| 6 | `datasets-hf` | La bibliothèque datasets | O5 |
| 6 | `adapter-hf` | Adapter un petit modèle à une tâche de texte | O5 |
| 6 | `partager-hf` | Partager ton modèle sur le Hub | O5 |

## Vocabulaire du module

| Terme | Catégorie (A anglais / B transparent) | Notion où il apparaît |
| --- | --- | --- |
| token, tokenisation | A | `tokenisation` |
| BPE (Byte Pair Encoding) | A | `bpe` |
| embedding | A | `embeddings` |
| RNN, LSTM | A | `rnn` |
| attention, requête (query), clé (key), valeur (value) | A | `requetes-cles-valeurs` |
| masque causal | B | `masque-causal` |
| encodage de position (positional encoding) | A | `position` |
| Transformer, encodeur, décodeur | A | `familles-transformers` |
| Hub, pipeline | A | `pipelines-hf` |

## Fil rouge et ancrage local

- **Situation** : une bibliothèque de Saint-Louis numérise des contes africains du domaine public. Tu entraînes un petit modèle qui écrit à leur manière, pour comprendre de l'intérieur comment marchent les grands modèles de langage.
- **Personnages** : Mame Diarra, bibliothécaire, qui veut faire découvrir les contes aux plus jeunes.
- **Données utilisées** : un corpus de contes du domaine public (quelques Mo de texte, source et statut juridique TODO(vérifier)).

## Exercices prévus

| Id | Titre | Objectif | Difficulté (1–3) | Livrable non testable ? |
| --- | --- | --- | --- | --- |
| 2.4-ex01 à ex03 | Le texte en nombres | O1 | 1 | non |
| 2.4-ex04 à ex06 | Les séquences | O2 | 1 | non |
| 2.4-ex07 à ex09 | L'attention | O3 | 2 | non |
| 2.4-ex10 à ex14 | Le Transformer | O4 | 2 | non |
| 2.4-ex15 | Exercice clé : un mini-Transformer qui génère du texte, entraîné sur processeur | O1, O3, O4 | 3 | non |
| 2.4-ex16 à ex17 | Pré-entraîner | O4 | 2–3 | non |
| 2.4-ex18 à ex21 | Hugging Face | O5 | 2–3 | non |

## Ressources matérielles

- **RAM maximale** : 2 Go.
- **Téléchargements** : transformers et tokenizers (environ 100 Mo), un petit modèle pré-entraîné (moins de 500 Mo), TODO(vérifier).
- **Temps de calcul le plus long** : 15 à 45 minutes pour entraîner le mini-GPT sur 4 cœurs, TODO(vérifier).
- **Dépendances nouvelles** : transformers, tokenizers, datasets.
- **API payante** : aucune.

## Point de contrôle sécurité et éthique

Un modèle génératif reproduit ce qu'il a lu : vérifier les droits du corpus d'entraînement (domaine public uniquement).

## Ressources externes gratuites

| Ressource | Langue | Durée ou taille | Licence | Pourquoi |
| --- | --- | --- | --- | --- |
| [Let's build GPT, par Andrej Karpathy](https://karpathy.ai/zero-to-hero.html) | anglais | vidéo | gratuit en ligne | Construire un mini-GPT de zéro, ligne par ligne. |
| [The Illustrated Transformer](https://jalammar.github.io/illustrated-transformer/) | anglais | article | gratuit en ligne | Le Transformer expliqué avec des schémas. |
| [Le cours LLM de Hugging Face](https://huggingface.co/learn/llm-course) | anglais | cours | Apache 2.0 | Utiliser et adapter les modèles du Hub. |

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

- TODO(vérifier) : choix et statut juridique du corpus de contes (domaine public au Sénégal et en France).
- TODO(vérifier) : compléter le vocabulaire des notions ajoutées par la seconde passe d'audit (25/11/2026), en vérifiant chaque terme dans docs/glossaire.md.
