---
id: "3.3"
titre: "Embeddings et recherche vectorielle"
parcours: "03-llm"
promesse: "Chercher par le sens et non par les mots : transformer des textes en vecteurs, les ranger dans une base vectorielle locale et construire un vrai moteur de recherche."
question_saut: "Tu as déjà construit une recherche sémantique ?"
qcm: true
prerequis: ["3.1"]
statut: brouillon
version: 1
mise_a_jour: 2026-11-25
---

# Fiche du module 3.3 — Embeddings et recherche vectorielle

## Extrait du programme

- **Contenu** : Embeddings, similarité, bases vectorielles légères en local (Chroma, sqlite-vec, Qdrant), notions de pgvector, recherche hybride (mots-clés + vecteurs)
- **Exercice clé** : Moteur de recherche sémantique sur 1 000 documents

## Objectifs vérifiables

| Id | À la fin, l'apprenant sait… | Évalué par |
| --- | --- | --- |
| O1 | Représenter des textes par des embeddings et mesurer leur similarité. | ex01 à ex04, ex17 à ex19, exercice clé (ex25), qcm |
| O2 | Choisir un modèle d'embeddings adapté à la langue, à la taille et au coût. | ex01 à ex04, exercice clé (ex25), qcm |
| O3 | Stocker et interroger des vecteurs dans une base vectorielle locale. | ex05 à ex09, exercice clé (ex25), qcm |
| O4 | Combiner recherche par mots-clés et recherche vectorielle. | ex10 à ex12, exercice clé (ex25), qcm |
| O5 | Mesurer la qualité d'un moteur de recherche. | ex20 à ex24, exercice clé (ex25), qcm |
| O6 | Comparer les représentations denses, creuses et multi-vecteurs, et réduire la taille des vecteurs, sur la qualité, la mémoire et la latence. | ex13 à ex16, qcm |
| O7 | Adapter un modèle d'embeddings à un domaine avec des négatifs difficiles et prouver le gain sans fuite. | ex26 à ex28, qcm |

## Chapitres

| Chapitre | Titre | Exercices |
| --- | --- | --- |
| 1 | Les embeddings de texte | 4 |
| 2 | Les bases vectorielles | 5 |
| 3 | La recherche hybride | 3 |
| 4 | Au-delà d'un vecteur par texte | 4 |
| 5 | D'autres usages des embeddings | 3 |
| 6 | Mesurer la recherche | 6 |
| 7 | Entraîner un retriever | 3 |

## Notions, dans l'ordre

| Chapitre | Id de la notion | Notion | Objectif |
| --- | --- | --- | --- |
| 1 | `embeddings-texte` | Un texte, un vecteur | O1 |
| 1 | `entrainer-embeddings` | Comment on entraîne un modèle d'embeddings | O1 |
| 1 | `similarite-textes` | Mesurer la proximité de deux textes | O1 |
| 1 | `modeles-embeddings` | Choisir un modèle d'embeddings | O2 |
| 1 | `multilingue` | Des embeddings multilingues | O2 |
| 1 | `dimensions-normalisation` | Les dimensions et la normalisation | O2 |
| 2 | `plus-proches-voisins` | Chercher les plus proches voisins | O3 |
| 2 | `index-ann` | Chercher vite : les index approximatifs | O3 |
| 2 | `faiss` | Une bibliothèque de recherche rapide : FAISS | O3 |
| 2 | `chroma` | Une base vectorielle locale : Chroma | O3 |
| 2 | `sqlite-vec` | Des vecteurs dans SQLite : sqlite-vec | O3 |
| 2 | `pgvector-qdrant` | Notions de pgvector et de Qdrant | O3 |
| 2 | `tenir-index` | Ajouter, modifier, supprimer : tenir un index à jour | O3 |
| 3 | `bm25` | La recherche par mots-clés : BM25 | O4 |
| 3 | `hybride` | Combiner mots-clés et vecteurs | O4 |
| 3 | `filtres-metadonnees` | Filtrer par métadonnées | O4 |
| 3 | `fusion-rangs` | Fusionner deux classements : la fusion de rangs | O4 |
| 3 | `recherche-floue` | Tolérer les fautes de frappe | O4 |
| 4 | `sparse-appris` | Des vecteurs creux appris : SPLADE | O6 |
| 4 | `multi-vecteurs` | Un vecteur par token : l'interaction tardive de ColBERTv2 | O6 |
| 4 | `trois-modes` | Dense, creux et multi-vecteurs dans un seul modèle : BGE-M3 | O6 |
| 4 | `matryoshka` | Raccourcir un vecteur sans tout perdre : les embeddings Matryoshka | O6 |
| 4 | `quantifier-embeddings` | Quantifier les vecteurs : int8 et binaire | O6 |
| 4 | `cout-architectures-recherche` | Comparer les architectures : qualité, mémoire, latence | O6 |
| 5 | `doublons-semantiques` | Trouver les doublons par le sens | O1 |
| 5 | `regrouper-textes` | Regrouper des textes par sujet | O1 |
| 5 | `classer-embeddings` | Classer des textes avec des embeddings | O1 |
| 5 | `recommander-embeddings` | Recommander avec des embeddings | O1 |
| 5 | `visualiser-embeddings` | Visualiser un espace d'embeddings | O1 |
| 6 | `metriques-recherche` | Mesurer une recherche : rappel@k et MRR | O5 |
| 6 | `jeu-requetes` | Construire un jeu de requêtes de test | O5 |
| 6 | `ndcg` | Tenir compte de l'ordre : le nDCG | O5 |
| 6 | `requetes-vocabulaire-local` | Les requêtes au vocabulaire local : noms, sigles, mots en langues locales | O5 |
| 6 | `requetes-multi-documents` | Les requêtes dont la réponse est répartie dans plusieurs documents | O5 |
| 6 | `analyser-echecs-recherche` | Analyser les recherches ratées | O5 |
| 6 | `comparer-modeles-embeddings` | Comparer des modèles d'embeddings sur tes données | O5 |
| 7 | `donnees-retriever` | Les données d'entraînement : des paires question-passage | O7 |
| 7 | `negatifs-difficiles` | Les négatifs difficiles : les trouver sans se tromper | O7 |
| 7 | `perte-contrastive` | La perte contrastive et les négatifs pris dans le lot | O7 |
| 7 | `entrainer-retriever` | Adapter un petit modèle d'embeddings sur CPU avec Sentence Transformers | O7 |
| 7 | `evaluer-adaptation` | Prouver le gain : séparer entraînement et test, comparer au modèle de départ | O7 |

## Vocabulaire du module

| Terme | Catégorie (A anglais / B transparent) | Notion où il apparaît |
| --- | --- | --- |
| embedding de phrase | A | `embeddings-texte` |
| similarité cosinus | A | `similarite-textes` |
| base vectorielle (vector database) | A | `chroma` |
| plus proches voisins approximatifs (ANN), HNSW | A | `index-ann` |
| BM25 | A | `bm25` |
| recherche hybride | B | `hybride` |
| métadonnée | B | `filtres-metadonnees` |
| rappel@k (recall@k), MRR | A | `metriques-recherche` |
| SPLADE (vecteur creux appris) | A | `sparse-appris` |
| interaction tardive (late interaction), ColBERT | A | `multi-vecteurs` |
| BGE-M3 | A | `trois-modes` |
| embeddings Matryoshka | A | `matryoshka` |
| quantification binaire | A | `quantifier-embeddings` |
| négatif difficile (hard negative) | A | `negatifs-difficiles` |
| perte contrastive, négatifs dans le lot (in-batch negatives) | A | `perte-contrastive` |

## Fil rouge et ancrage local

- **Situation** : les agents d'une administration d'Antananarivo perdent des heures à retrouver la bonne circulaire parmi des milliers de notes de service. Ton moteur trouve le bon texte même quand la question n'emploie pas les mêmes mots.
- **Personnages** : Hery, agent administratif, et ses collègues du service des usagers.
- **Données utilisées** : 1 000 documents administratifs publics ou fictifs en français (quelques Mo, source et licence TODO(vérifier)).

## Exercices prévus

| Id | Titre | Objectif | Difficulté (1–3) | Livrable non testable ? |
| --- | --- | --- | --- | --- |
| 3.3-ex01 à ex04 | Les embeddings de texte | O1, O2 | 1 | non |
| 3.3-ex05 à ex09 | Les bases vectorielles | O3 | 1 | non |
| 3.3-ex10 à ex12 | La recherche hybride | O4 | 2 | non |
| 3.3-ex13 à ex16 | Au-delà d'un vecteur par texte | O6 | 2 | non |
| 3.3-ex17 à ex19 | D'autres usages des embeddings | O1 | 2–3 | non |
| 3.3-ex20 à ex24 | Mesurer la recherche | O5 | 2–3 | non |
| 3.3-ex25 | Exercice clé : un moteur de recherche sémantique sur 1 000 documents | O1 à O5 | 3 | non |
| 3.3-ex26 à ex28 | Entraîner un retriever | O7 | 2–3 | non |

## Épreuve de niveau expert

**Épreuve** : sur un corpus de documents administratifs, comparer un modèle dense, une recherche hybride, un modèle multi-vecteurs et le même modèle dense adapté au domaine, sur le même jeu de requêtes, avec la qualité, la taille de l'index et la latence.

| Niveau démontré | Preuve attendue |
| --- | --- |
| Implémenter | Les quatre recherches, relançables |
| Diagnostiquer | Les requêtes ratées, classées (vocabulaire local, réponse répartie, ambiguïté) |
| Comparer | Un tableau qualité, mémoire, latence sur le même jeu |
| Choisir | L'architecture retenue pour un PC de 8 Go, justifiée |

**Statut des méthodes enseignées**

| Méthode | Statut | Pratique |
| --- | --- | --- |
| Recherche dense, BM25, hybride, fusion de rangs | établie | autonome, en local |
| Matryoshka, quantification des vecteurs | établie | autonome, en local |
| SPLADE, ColBERTv2, BGE-M3 | établie | autonome sur un petit corpus, en local |
| Adapter un retriever (négatifs difficiles) | établie, coûteuse | expérience réduite sur CPU : petit modèle, quelques milliers de paires |

## Ressources matérielles

- **RAM maximale** : 2 à 4 Go.
- **Téléchargements** : un modèle d'embeddings multilingue (100 à 500 Mo), Chroma et sqlite-vec, TODO(vérifier).
- **Temps de calcul le plus long** : quelques minutes pour indexer 1 000 documents sur 4 cœurs, TODO(vérifier).
- **Dépendances nouvelles** : sentence-transformers, chromadb, sqlite-vec, rank-bm25.
- **API payante** : aucune.

## Point de contrôle sécurité et éthique

Un index contient le texte des documents : ne pas y mettre de données personnelles sans base légale, et contrôler qui peut interroger quoi.

## Ressources externes gratuites

| Ressource | Langue | Type | Licence ou accès | Pourquoi |
| --- | --- | --- | --- | --- |
| [Documentation de Sentence Transformers](https://sbert.net/) | anglais | documentation | Apache 2.0 | Calculer et entraîner des embeddings. |
| [Pinecone Learn](https://www.pinecone.io/learn/) | anglais | articles | accès libre | La recherche vectorielle et ses index, expliqués. |
| [Documentation de Chroma](https://docs.trychroma.com/) | anglais | documentation | Apache 2.0 | La base vectorielle locale du module. |
| [Wiki de FAISS](https://github.com/facebookresearch/faiss/wiki) | anglais | documentation | MIT | La recherche rapide de plus proches voisins. |
| [Classement MTEB](https://huggingface.co/spaces/mteb/leaderboard) | anglais | classement | gratuit | Comparer les modèles d'embeddings, y compris en français. |
| [SPLADE v2](https://arxiv.org/abs/2107.05720) | anglais | article | accès libre | Les vecteurs creux appris. |
| [ColBERTv2](https://arxiv.org/abs/2112.01488) | anglais | article | accès libre | L'interaction tardive, rendue légère. |
| [BGE M3-Embedding](https://arxiv.org/abs/2402.03216) | anglais | article | accès libre | Un modèle multilingue qui fait dense, creux et multi-vecteurs. |
| [Sentence Transformers, Matryoshka](https://sbert.net/examples/sentence_transformer/training/matryoshka/README.html) | anglais | documentation | libre | Entraîner et utiliser des vecteurs raccourcissables. |
| [Sentence Transformers, quantification des embeddings](https://sbert.net/examples/sentence_transformer/applications/embedding-quantization/README.html) | anglais | documentation | libre | int8 et binaire, avec les pertes de qualité mesurées. |
| [Sentence Transformers, entraîner un modèle](https://sbert.net/docs/sentence_transformer/training_overview.html) | anglais | documentation | libre | La référence pour adapter un modèle d'embeddings. |

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

- TODO(vérifier) : corpus de 1 000 documents administratifs : source publique et licence.
- TODO(vérifier) : compléter le vocabulaire des notions ajoutées par la seconde passe d'audit (25/11/2026), en vérifiant chaque terme dans docs/glossaire.md.
