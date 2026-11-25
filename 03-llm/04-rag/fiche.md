---
id: "3.4"
titre: "RAG en profondeur"
parcours: "03-llm"
promesse: "Construire un assistant qui répond à partir de tes documents, cite ses sources et sait dire « je ne sais pas » : le cœur du projet 3."
question_saut: "Tu as déjà construit un RAG qui cite ses sources ?"
qcm: true
prerequis: ["3.2", "3.3"]
statut: brouillon
version: 1
mise_a_jour: 2026-11-25
---

# Fiche du module 3.4 — RAG en profondeur

## Extrait du programme

- **Contenu** : Découpage des documents, reranking, citations des sources, réponses « je ne sais pas », RAG multilingue, gestion des PDF et des tableaux
- **Exercice clé** : Assistant qui cite ses sources et refuse de répondre hors sujet

## Objectifs vérifiables

| Id | À la fin, l'apprenant sait… | Évalué par |
| --- | --- | --- |
| O1 | Expliquer le fonctionnement d'un RAG et ses points faibles. | ex01 à ex02, exercice clé (ex11), qcm |
| O2 | Préparer des documents, y compris PDF et tableaux, et les découper. | ex03 à ex05, exercice clé (ex11), qcm |
| O3 | Améliorer la recherche par reformulation et reranking. | ex06 à ex07, exercice clé (ex11), qcm |
| O4 | Générer des réponses qui citent leurs sources et refusent hors sujet. | ex08 à ex10, exercice clé (ex11), qcm |
| O5 | Construire un RAG multilingue. | ex12 à ex13, qcm |

## Chapitres

| Chapitre | Titre | Exercices |
| --- | --- | --- |
| 1 | Le principe | 2 |
| 2 | Préparer les documents | 3 |
| 3 | Mieux chercher | 2 |
| 4 | Bien répondre | 4 |
| 5 | Plusieurs langues | 2 |

## Notions, dans l'ordre

| Chapitre | Id de la notion | Notion | Objectif |
| --- | --- | --- | --- |
| 1 | `pourquoi-rag` | Pourquoi le RAG : un LLM qui lit tes documents | O1 |
| 1 | `chaine-rag` | La chaîne complète : indexer, chercher, répondre | O1 |
| 1 | `premier-rag` | Ton premier RAG en local | O1 |
| 2 | `extraire-pdf` | Extraire le texte d'un PDF | O2 |
| 2 | `tableaux` | Garder les tableaux lisibles | O2 |
| 2 | `ocr` | Les documents scannés : l'OCR | O2 |
| 2 | `chunking` | Découper en morceaux : le chunking | O2 |
| 2 | `metadonnees-docs` | Garder la source : les métadonnées | O2 |
| 3 | `reformulation` | Reformuler la question | O3 |
| 3 | `reranking` | Reclasser les résultats : le reranking | O3 |
| 3 | `nombre-passages` | Combien de passages donner au modèle | O3 |
| 4 | `prompt-rag` | Le prompt du RAG | O4 |
| 4 | `citations` | Citer ses sources | O4 |
| 4 | `je-ne-sais-pas` | Savoir dire « je ne sais pas » | O4 |
| 4 | `hors-sujet` | Refuser les questions hors sujet | O4 |
| 5 | `rag-multilingue` | Un RAG multilingue | O5 |
| 5 | `traduire-ou-pas` | Traduire la question ou les documents ? | O5 |

## Vocabulaire du module

| Terme | Catégorie (A anglais / B transparent) | Notion où il apparaît |
| --- | --- | --- |
| RAG (retrieval-augmented generation) | A | `pourquoi-rag` |
| chunk, chunking | A | `chunking` |
| OCR | A | `ocr` |
| reranking, cross-encoder | A | `reranking` |
| citation, source | B | `citations` |
| hors périmètre (out of scope) | A | `hors-sujet` |

## Fil rouge et ancrage local

- **Situation** : une association de défense des travailleurs de Bafoussam reçoit chaque jour les mêmes questions sur le code du travail. Ton assistant répond à partir des textes officiels, cite l'article exact et dit quand il ne sait pas.
- **Personnages** : Awa (persona apprenante), bénévole de l'association, et les travailleurs qui posent leurs questions.
- **Données utilisées** : le code du travail camerounais et des textes d'application (PDF officiels, statut juridique TODO(vérifier)).

## Exercices prévus

| Id | Titre | Objectif | Difficulté (1–3) | Livrable non testable ? |
| --- | --- | --- | --- | --- |
| 3.4-ex01 à ex02 | Le principe | O1 | 1–2 | non |
| 3.4-ex03 à ex05 | Préparer les documents | O2 | 2 | non |
| 3.4-ex06 à ex07 | Mieux chercher | O3 | 2 | non |
| 3.4-ex08 à ex10 | Bien répondre | O4 | 2 | non |
| 3.4-ex11 | Exercice clé : un assistant qui cite ses sources et refuse de répondre hors sujet | O1 à O4 | 3 | non |
| 3.4-ex12 à ex13 | Plusieurs langues | O5 | 2–3 | non |

## Ressources matérielles

- **RAM maximale** : 4 à 6 Go (petit modèle local et index).
- **Téléchargements** : un reranker léger (environ 100 à 500 Mo), outils d'extraction PDF, TODO(vérifier).
- **Temps de calcul le plus long** : quelques secondes par question sur 4 cœurs, TODO(vérifier).
- **Dépendances nouvelles** : pypdf ou pdfplumber, un moteur d'OCR (Tesseract), sentence-transformers.
- **API payante** : facultative.

## Point de contrôle sécurité et éthique

Point de contrôle du projet 3 : refus des questions hors périmètre, tests d'injection de prompt par les documents. Un conseil juridique erroné a des conséquences réelles : l'assistant renvoie vers un professionnel quand il le faut.

## Ressources externes gratuites

| Ressource | Langue | Durée ou taille | Licence | Pourquoi |
| --- | --- | --- | --- | --- |
| [Cookbook de Hugging Face : RAG](https://huggingface.co/learn/cookbook) | anglais | recettes | Apache 2.0 | Des RAG complets, avec des modèles ouverts. |

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

- TODO(vérifier) : statut juridique et source officielle des textes du code du travail camerounais.
- TODO(vérifier) : outil d'OCR recommandé pour les documents scannés en français.
