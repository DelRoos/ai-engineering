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
| O1 | Représenter des textes par des embeddings et mesurer leur similarité. | ex01 à ex03, exercice clé (ex11), qcm |
| O2 | Choisir un modèle d'embeddings adapté à la langue, à la taille et au coût. | ex01 à ex03, exercice clé (ex11), qcm |
| O3 | Stocker et interroger des vecteurs dans une base vectorielle locale. | ex04 à ex06, exercice clé (ex11), qcm |
| O4 | Combiner recherche par mots-clés et recherche vectorielle. | ex07 à ex08, exercice clé (ex11), qcm |
| O5 | Mesurer la qualité d'un moteur de recherche. | ex09 à ex10, exercice clé (ex11), qcm |

## Chapitres

| Chapitre | Titre | Exercices |
| --- | --- | --- |
| 1 | Les embeddings de texte | 3 |
| 2 | Les bases vectorielles | 3 |
| 3 | La recherche hybride | 2 |
| 4 | Mesurer la recherche | 3 |

## Notions, dans l'ordre

| Chapitre | Id de la notion | Notion | Objectif |
| --- | --- | --- | --- |
| 1 | `embeddings-texte` | Un texte, un vecteur | O1 |
| 1 | `similarite-textes` | Mesurer la proximité de deux textes | O1 |
| 1 | `modeles-embeddings` | Choisir un modèle d'embeddings | O2 |
| 1 | `multilingue` | Des embeddings multilingues | O2 |
| 2 | `plus-proches-voisins` | Chercher les plus proches voisins | O3 |
| 2 | `index-ann` | Chercher vite : les index approximatifs | O3 |
| 2 | `chroma` | Une base vectorielle locale : Chroma | O3 |
| 2 | `sqlite-vec` | Des vecteurs dans SQLite : sqlite-vec | O3 |
| 2 | `pgvector-qdrant` | Notions de pgvector et de Qdrant | O3 |
| 3 | `bm25` | La recherche par mots-clés : BM25 | O4 |
| 3 | `hybride` | Combiner mots-clés et vecteurs | O4 |
| 3 | `filtres-metadonnees` | Filtrer par métadonnées | O4 |
| 4 | `metriques-recherche` | Mesurer une recherche : rappel@k et MRR | O5 |
| 4 | `jeu-requetes` | Construire un jeu de requêtes de test | O5 |

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
| 3.3-ex01 à ex03 | Les embeddings de texte | O1, O2 | 1–2 | non |
| 3.3-ex04 à ex06 | Les bases vectorielles | O3 | 2 | non |
| 3.3-ex07 à ex08 | La recherche hybride | O4 | 2 | non |
| 3.3-ex09 à ex10 | Mesurer la recherche | O5 | 2–3 | non |
| 3.3-ex11 | Exercice clé : un moteur de recherche sémantique sur 1 000 documents | O1 à O5 | 3 | non |

## Ressources matérielles

- **RAM maximale** : 2 à 4 Go.
- **Téléchargements** : un modèle d'embeddings multilingue (100 à 500 Mo), Chroma et sqlite-vec, TODO(vérifier).
- **Temps de calcul le plus long** : quelques minutes pour indexer 1 000 documents sur 4 cœurs, TODO(vérifier).
- **Dépendances nouvelles** : sentence-transformers, chromadb, sqlite-vec, rank-bm25.
- **API payante** : aucune.

## Point de contrôle sécurité et éthique

Un index contient le texte des documents : ne pas y mettre de données personnelles sans base légale, et contrôler qui peut interroger quoi.

## Ressources externes gratuites

| Ressource | Langue | Durée ou taille | Licence | Pourquoi |
| --- | --- | --- | --- | --- |
| [Documentation de Chroma](https://docs.trychroma.com/) | anglais | référence | Apache 2.0 | La base vectorielle locale du module. |
| [sqlite-vec](https://github.com/asg017/sqlite-vec) | anglais | référence | MIT et Apache 2.0 | Des vecteurs dans une simple base SQLite. |
| [Classement MTEB des modèles d'embeddings](https://huggingface.co/spaces/mteb/leaderboard) | anglais | tableau | gratuit en ligne | Comparer les modèles d'embeddings, y compris en français. |

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
