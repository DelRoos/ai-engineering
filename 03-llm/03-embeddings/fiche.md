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
| O1 | Représenter des textes par des embeddings et mesurer leur similarité. | ex01 à ex04, ex13 à ex15, exercice clé (ex19), qcm |
| O2 | Choisir un modèle d'embeddings adapté à la langue, à la taille et au coût. | ex01 à ex04, exercice clé (ex19), qcm |
| O3 | Stocker et interroger des vecteurs dans une base vectorielle locale. | ex05 à ex09, exercice clé (ex19), qcm |
| O4 | Combiner recherche par mots-clés et recherche vectorielle. | ex10 à ex12, exercice clé (ex19), qcm |
| O5 | Mesurer la qualité d'un moteur de recherche. | ex16 à ex18, exercice clé (ex19), qcm |

## Chapitres

| Chapitre | Titre | Exercices |
| --- | --- | --- |
| 1 | Les embeddings de texte | 4 |
| 2 | Les bases vectorielles | 5 |
| 3 | La recherche hybride | 3 |
| 4 | D'autres usages des embeddings | 3 |
| 5 | Mesurer la recherche | 4 |

## Notions, dans l'ordre

| Chapitre | Id de la notion | Notion | Objectif |
| --- | --- | --- | --- |
| 1 | `embeddings-texte` | Un texte, un vecteur | O1 |
| 1 | `entrainer-embeddings` | Comment on entraîne un modèle d'embeddings | O1 |
| 1 | `similarite-textes` | Mesurer la proximité de deux textes | O1 |
| 1 | `modeles-embeddings` | Choisir un modèle d'embeddings | O2 |
| 1 | `multilingue` | Des embeddings multilingues | O2 |
| 1 | `dimensions-normalisation` | Dimensions, normalisation et compression | O2 |
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
| 4 | `doublons-semantiques` | Trouver les doublons par le sens | O1 |
| 4 | `regrouper-textes` | Regrouper des textes par sujet | O1 |
| 4 | `classer-embeddings` | Classer des textes avec des embeddings | O1 |
| 4 | `recommander-embeddings` | Recommander avec des embeddings | O1 |
| 4 | `visualiser-embeddings` | Visualiser un espace d'embeddings | O1 |
| 5 | `metriques-recherche` | Mesurer une recherche : rappel@k et MRR | O5 |
| 5 | `jeu-requetes` | Construire un jeu de requêtes de test | O5 |
| 5 | `ndcg` | Tenir compte de l'ordre : le nDCG | O5 |
| 5 | `analyser-echecs-recherche` | Analyser les recherches ratées | O5 |
| 5 | `comparer-modeles-embeddings` | Comparer des modèles d'embeddings sur tes données | O5 |

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

## Fil rouge et ancrage local

- **Situation** : les agents d'une administration d'Antananarivo perdent des heures à retrouver la bonne circulaire parmi des milliers de notes de service. Ton moteur trouve le bon texte même quand la question n'emploie pas les mêmes mots.
- **Personnages** : Hery, agent administratif, et ses collègues du service des usagers.
- **Données utilisées** : 1 000 documents administratifs publics ou fictifs en français (quelques Mo, source et licence TODO(vérifier)).

## Exercices prévus

| Id | Titre | Objectif | Difficulté (1–3) | Livrable non testable ? |
| --- | --- | --- | --- | --- |
| 3.3-ex01 à ex04 | Les embeddings de texte | O1, O2 | 1 | non |
| 3.3-ex05 à ex09 | Les bases vectorielles | O3 | 2 | non |
| 3.3-ex10 à ex12 | La recherche hybride | O4 | 2 | non |
| 3.3-ex13 à ex15 | D'autres usages des embeddings | O1 | 2–3 | non |
| 3.3-ex16 à ex18 | Mesurer la recherche | O5 | 2–3 | non |
| 3.3-ex19 | Exercice clé : un moteur de recherche sémantique sur 1 000 documents | O1 à O5 | 3 | non |

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
