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
| O1 | Expliquer le fonctionnement d'un RAG et ses points faibles. | ex01 à ex03, exercice clé (ex21), ex37 à ex39, qcm |
| O2 | Préparer des documents, y compris PDF et tableaux, et les découper. | ex04 à ex06, ex07 à ex10, exercice clé (ex21), ex22 à ex24, ex37 à ex39, qcm |
| O3 | Améliorer la recherche par reformulation et reranking. | ex11 à ex15, exercice clé (ex21), qcm |
| O4 | Générer des réponses qui citent leurs sources et refusent hors sujet. | ex16 à ex20, exercice clé (ex21), ex22 à ex24, ex37 à ex39, qcm |
| O5 | Construire un RAG multilingue. | ex34 à ex36, qcm |
| O6 | Choisir une architecture RAG avancée (hiérarchique, adaptative, correctrice, multi-sauts, visuelle, graphe) selon le type de question, et prouver son apport face au RAG simple. | ex25 à ex29, ex30 à ex33, qcm |

## Chapitres

| Chapitre | Titre | Exercices |
| --- | --- | --- |
| 1 | Le principe | 3 |
| 2 | Extraire le texte | 3 |
| 3 | Découper et indexer | 4 |
| 4 | Mieux chercher | 5 |
| 5 | Bien répondre | 6 |
| 6 | Le RAG avancé | 3 |
| 7 | Les familles d'architectures RAG | 5 |
| 8 | GraphRAG en profondeur | 4 |
| 9 | Plusieurs langues | 3 |
| 10 | Un RAG en service | 3 |

## Notions, dans l'ordre

| Chapitre | Id de la notion | Notion | Objectif |
| --- | --- | --- | --- |
| 1 | `pourquoi-rag` | Pourquoi le RAG : un LLM qui lit tes documents | O1 |
| 1 | `chaine-rag` | La chaîne complète : indexer, chercher, répondre | O1 |
| 1 | `premier-rag` | Ton premier RAG en local | O1 |
| 1 | `rag-ou-contexte-long` | RAG ou long contexte ? | O1 |
| 1 | `anatomie-echec-rag` | Pourquoi un RAG se trompe : les points de rupture | O1 |
| 2 | `extraire-pdf` | Extraire le texte d'un PDF | O2 |
| 2 | `autres-formats-rag` | Word, HTML et pages web : les autres formats | O2 |
| 2 | `tableaux` | Garder les tableaux lisibles | O2 |
| 2 | `ocr` | Les documents scannés : l'OCR | O2 |
| 2 | `nettoyer-extraction` | Nettoyer le texte extrait : en-têtes, pieds de page, césures | O2 |
| 3 | `chunking` | Découper en morceaux : le chunking | O2 |
| 3 | `taille-chevauchement` | La taille des morceaux et leur chevauchement | O2 |
| 3 | `chunking-structure` | Découper selon la structure : titres, articles, paragraphes | O2 |
| 3 | `contexte-chunks` | Ajouter du contexte à chaque morceau | O2 |
| 3 | `metadonnees-docs` | Garder la source : les métadonnées | O2 |
| 3 | `indexer-corpus` | Indexer tout un corpus | O2 |
| 4 | `reformulation` | Reformuler la question | O3 |
| 4 | `multi-requetes` | Chercher avec plusieurs reformulations | O3 |
| 4 | `hyde` | Chercher avec une réponse imaginée : HyDE | O3 |
| 4 | `reranking` | Reclasser les résultats : le reranking | O3 |
| 4 | `nombre-passages` | Combien de passages donner au modèle | O3 |
| 4 | `compresser-contexte` | Ne garder que l'utile : compresser les passages | O3 |
| 4 | `routage-requetes` | Envoyer la question au bon index | O3 |
| 5 | `prompt-rag` | Le prompt du RAG | O4 |
| 5 | `citations` | Citer ses sources | O4 |
| 5 | `je-ne-sais-pas` | Savoir dire « je ne sais pas » | O4 |
| 5 | `hors-sujet` | Refuser les questions hors sujet | O4 |
| 5 | `synthese-sources` | Faire la synthèse de plusieurs sources | O4 |
| 5 | `verifier-fondement` | Vérifier que la réponse s'appuie vraiment sur les sources | O4 |
| 5 | `forme-reponse` | Répondre sous la bonne forme : courte, détaillée, en liste | O4 |
| 6 | `rag-conversation` | Un RAG qui suit la conversation | O4 |
| 6 | `texte-vers-sql` | Interroger des chiffres : du texte au SQL | O4 |
| 6 | `rag-multimodal` | Des documents avec images et schémas | O2 |
| 6 | `droits-acces-rag` | Chacun ne voit que ses documents | O4 |
| 6 | `rag-agentique` | Un RAG qui décide quand et quoi chercher | O4 |
| 7 | `rag-hierarchique` | Résumer par niveaux pour les questions larges : RAPTOR | O6 |
| 7 | `late-chunking` | Encoder le document avant de découper : le late chunking | O6 |
| 7 | `rag-adaptatif` | Décider de chercher et critiquer sa réponse : Self-RAG | O6 |
| 7 | `rag-correctif` | Juger les passages trouvés et corriger la recherche : CRAG | O6 |
| 7 | `multi-sauts` | Les questions en plusieurs sauts | O6 |
| 7 | `pages-visuelles` | Chercher directement dans les images de pages : ColPali | O6 |
| 7 | `besoins-architectures` | Ce que chaque architecture demande : entraînement, appels, index | O6 |
| 7 | `partir-du-simple` | Partir du RAG simple, ne changer qu'avec une mesure | O6 |
| 8 | `graph-rag` | Quand un graphe apporte quelque chose | O6 |
| 8 | `extraire-graphe` | Extraire entités et relations avec un LLM | O6 |
| 8 | `resumes-communautes` | Les communautés et leurs résumés : répondre aux questions globales | O6 |
| 8 | `erreurs-graphe` | Les erreurs d'extraction et leur propagation | O6 |
| 8 | `maj-graphe` | Mettre le graphe à jour quand les documents changent | O6 |
| 8 | `cout-graphrag` | Le coût d'indexation d'un GraphRAG, comparé au RAG simple | O6 |
| 9 | `rag-multilingue` | Un RAG multilingue | O5 |
| 9 | `traduire-ou-pas` | Traduire la question ou les documents ? | O5 |
| 9 | `embeddings-multilingues-rag` | Des embeddings qui relient les langues | O5 |
| 9 | `documents-bilingues` | Des documents en français et en anglais | O5 |
| 9 | `repondre-langue-question` | Répondre dans la langue de la question | O5 |
| 10 | `latence-cout-rag` | Ce que coûte une question : latence et argent | O1 |
| 10 | `cache-rag` | Mettre en cache les recherches et les réponses | O1 |
| 10 | `fraicheur-index` | Des documents qui changent : garder l'index à jour | O2 |
| 10 | `questions-sans-reponse` | Apprendre des questions restées sans réponse | O4 |
| 10 | `documents-pieges` | Les documents piégés : l'injection indirecte dans un RAG | O4 |

## Vocabulaire du module

| Terme | Catégorie (A anglais / B transparent) | Notion où il apparaît |
| --- | --- | --- |
| RAG (retrieval-augmented generation) | A | `pourquoi-rag` |
| chunk, chunking | A | `chunking` |
| OCR | A | `ocr` |
| reranking, cross-encoder | A | `reranking` |
| citation, source | B | `citations` |
| hors périmètre (out of scope) | A | `hors-sujet` |
| chevauchement (overlap) | A | `taille-chevauchement` |
| indexation | B | `indexer-corpus` |
| compression du contexte | B | `compresser-contexte` |
| ancrage dans les sources (groundedness) | A | `verifier-fondement` |
| HyDE | A | `hyde` |
| GraphRAG | A | `graph-rag` |
| texte vers SQL (text-to-SQL) | A | `texte-vers-sql` |
| injection indirecte | B | `documents-pieges` |
| RAPTOR (RAG hiérarchique) | A | `rag-hierarchique` |
| late chunking | A | `late-chunking` |
| Self-RAG, CRAG | A | `rag-adaptatif` |
| question multi-sauts (multi-hop) | A | `multi-sauts` |
| ColPali | A | `pages-visuelles` |
| communauté (graphe), résumé de communauté | B | `resumes-communautes` |

## Fil rouge et ancrage local

- **Situation** : une association de défense des travailleurs de Bafoussam reçoit chaque jour les mêmes questions sur le code du travail. Ton assistant répond à partir des textes officiels, cite l'article exact et dit quand il ne sait pas.
- **Personnages** : Awa (persona apprenante), bénévole de l'association, et les travailleurs qui posent leurs questions.
- **Données utilisées** : le code du travail camerounais et des textes d'application (PDF officiels, statut juridique TODO(vérifier)).

## Exercices prévus

| Id | Titre | Objectif | Difficulté (1–3) | Livrable non testable ? |
| --- | --- | --- | --- | --- |
| 3.4-ex01 à ex03 | Le principe | O1 | 1 | non |
| 3.4-ex04 à ex06 | Extraire le texte | O2 | 1 | non |
| 3.4-ex07 à ex10 | Découper et indexer | O2 | 1 | non |
| 3.4-ex11 à ex15 | Mieux chercher | O3 | 2 | non |
| 3.4-ex16 à ex20 | Bien répondre | O4 | 2 | non |
| 3.4-ex21 | Exercice clé : un assistant qui cite ses sources et refuse de répondre hors sujet | O1 à O4 | 3 | non |
| 3.4-ex22 à ex24 | Le RAG avancé | O2, O4 | 2 | non |
| 3.4-ex25 à ex29 | Les familles d'architectures RAG | O6 | 2–3 | non |
| 3.4-ex30 à ex33 | GraphRAG en profondeur | O6 | 2–3 | non |
| 3.4-ex34 à ex36 | Plusieurs langues | O5 | 2–3 | non |
| 3.4-ex37 à ex39 | Un RAG en service | O1, O2, O4 | 2–3 | non |

## Épreuve de niveau expert

**Épreuve** : sur un même corpus, comparer le RAG simple, un RAG correctif et un GraphRAG sur trois types de questions (factuelles, multi-sauts, globales), puis montrer où chaque architecture gagne, où elle perd et ce qu'elle coûte à l'indexation et à chaque question.

| Niveau démontré | Preuve attendue |
| --- | --- |
| Implémenter | Les trois RAG sur le même corpus, relançables |
| Diagnostiquer | Chaque échec rattaché à son étape : extraction, recherche, génération, graphe |
| Comparer | Un tableau par type de question, avec coûts d'indexation et par question |
| Choisir | L'architecture retenue, ou le refus d'en changer, justifié par la mesure |

**Statut des méthodes enseignées**

| Méthode | Statut | Pratique |
| --- | --- | --- |
| RAG simple, hybride, reranking, citations | établie | autonome, en local |
| CRAG, multi-sauts, late chunking | établie | autonome sur un petit corpus |
| RAPTOR, GraphRAG | établie, coûteuse à l'indexation | expérience réduite sur quelques dizaines de documents |
| Self-RAG (modèle entraîné à critiquer) | coûteuse | analyse des résultats publiés, imitation par prompts |
| ColPali | établie, coûteuse en mémoire | expérience réduite sur quelques pages |

## Ressources matérielles

- **RAM maximale** : 4 à 6 Go (petit modèle local et index).
- **Téléchargements** : un reranker léger (environ 100 à 500 Mo), outils d'extraction PDF, TODO(vérifier).
- **Temps de calcul le plus long** : quelques secondes par question sur 4 cœurs, TODO(vérifier).
- **Dépendances nouvelles** : pypdf ou pdfplumber, un moteur d'OCR (Tesseract), sentence-transformers.
- **API payante** : facultative.

## Point de contrôle sécurité et éthique

Point de contrôle du projet 3 : refus des questions hors périmètre, tests d'injection de prompt par les documents. Un conseil juridique erroné a des conséquences réelles : l'assistant renvoie vers un professionnel quand il le faut.

## Ressources externes gratuites

| Ressource | Langue | Type | Licence ou accès | Pourquoi |
| --- | --- | --- | --- | --- |
| [Cookbook de Hugging Face](https://huggingface.co/learn/cookbook) | anglais | recettes | Apache 2.0 | Des RAG complets avec des modèles ouverts. |
| [Contextual Retrieval (Anthropic)](https://www.anthropic.com/news/contextual-retrieval) | anglais | article | accès libre | Ajouter du contexte aux morceaux pour mieux chercher. |
| [Patterns for Building LLM-based Systems (Eugene Yan)](https://eugeneyan.com/writing/llm-patterns/) | anglais | article | accès libre | Les grands schémas d'un système à base de LLM. |
| [Documentation de LlamaIndex](https://docs.llamaindex.ai/) | anglais | documentation | MIT | Un framework pour construire des RAG. |
| [GraphRAG (Microsoft)](https://microsoft.github.io/graphrag/) | anglais | documentation | MIT | Relier les informations dans un graphe. |
| [RAPTOR](https://arxiv.org/abs/2401.18059) | anglais | article | accès libre | Le RAG par arbre de résumés. |
| [Late Chunking](https://arxiv.org/abs/2409.04701) | anglais | article | accès libre | Garder le contexte du document dans chaque morceau. |
| [Self-RAG](https://arxiv.org/abs/2310.11511) | anglais | article | accès libre | Un modèle qui décide de chercher et critique sa réponse. |
| [Corrective RAG (CRAG)](https://arxiv.org/abs/2401.15884) | anglais | article | accès libre | Évaluer les passages et corriger la recherche. |
| [ColPali](https://arxiv.org/abs/2407.01449) | anglais | article | accès libre | La recherche sur des images de pages. |
| [From Local to Global: A Graph RAG Approach](https://arxiv.org/abs/2404.16130) | anglais | article | accès libre | L'article fondateur de GraphRAG et ses questions globales. |

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
- TODO(vérifier) : compléter le vocabulaire des notions ajoutées par la seconde passe d'audit (25/11/2026), en vérifiant chaque terme dans docs/glossaire.md.
