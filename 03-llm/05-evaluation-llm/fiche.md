---
id: "3.5"
titre: "Évaluation des systèmes LLM"
parcours: "03-llm"
promesse: "Prouver qu'un système à base de LLM marche, et qu'il ne régresse pas : jeux de test, métriques, LLM juge et évaluation humaine."
question_saut: "Tu évalues déjà tes systèmes LLM avec un jeu de test ?"
qcm: true
prerequis: ["3.4"]
statut: brouillon
version: 1
mise_a_jour: 2026-11-25
---

# Fiche du module 3.5 — Évaluation des systèmes LLM

## Extrait du programme

- **Contenu** : Jeux de test, métriques (fidélité, pertinence), LLM-as-a-judge, évaluation humaine, tests de non-régression
- **Exercice clé** : Créer un jeu d'évaluation de 50 questions et mesurer 3 variantes du RAG

## Objectifs vérifiables

| Id | À la fin, l'apprenant sait… | Évalué par |
| --- | --- | --- |
| O1 | Construire un jeu de test représentatif, avec ses cas difficiles. | ex01 à ex05, exercice clé (ex24), ex30 à ex32, qcm |
| O2 | Mesurer la fidélité et la pertinence des réponses. | ex06 à ex10, exercice clé (ex24), qcm |
| O3 | Utiliser un LLM comme juge en connaissant ses biais. | ex11 à ex15, qcm |
| O4 | Organiser une évaluation humaine. | ex16 à ex19, ex30 à ex32, qcm |
| O5 | Automatiser des tests de non-régression et comparer des variantes. | ex20 à ex23, exercice clé (ex24), ex30 à ex32, qcm |
| O6 | Prouver qu'une amélioration vient bien du changement annoncé : évaluation par affirmation, ablation, contrefactuel, budget fixé, méta-évaluation. | ex25 à ex29, qcm |

## Chapitres

| Chapitre | Titre | Exercices |
| --- | --- | --- |
| 1 | Pourquoi évaluer | 5 |
| 2 | Les métriques | 5 |
| 3 | Le LLM juge | 5 |
| 4 | Les humains | 4 |
| 5 | Ne pas régresser | 5 |
| 6 | Le diagnostic scientifique | 5 |
| 7 | Évaluer en production | 3 |

## Notions, dans l'ordre

| Chapitre | Id de la notion | Notion | Objectif |
| --- | --- | --- | --- |
| 1 | `evaluer-llm` | Pourquoi « ça a l'air bien » ne suffit pas | O1 |
| 1 | `criteres-succes` | Définir ce qu'est une bonne réponse pour ta tâche | O1 |
| 1 | `analyse-erreurs-llm` | Lire les réponses ratées avant de mesurer | O1 |
| 1 | `jeu-test-llm` | Construire un jeu de test | O1 |
| 1 | `taille-jeu-test` | Combien de questions faut-il ? | O1 |
| 1 | `cas-difficiles` | Les cas difficiles et les questions pièges | O1 |
| 1 | `generer-tests` | Générer des questions de test, et les vérifier | O1 |
| 1 | `jeu-test-vivant` | Faire vivre le jeu de test avec les cas réels | O1 |
| 2 | `correspondance-exacte` | Les tâches à réponse unique : la correspondance exacte | O2 |
| 2 | `verifications-code` | Vérifier le format et les règles avec du code | O2 |
| 2 | `evaluer-extraction` | Évaluer une extraction champ par champ | O2 |
| 2 | `fidelite` | La fidélité aux sources | O2 |
| 2 | `pertinence` | La pertinence de la réponse | O2 |
| 2 | `recherche-et-reponse` | Évaluer séparément la recherche et la réponse | O2 |
| 2 | `metriques-texte` | Les métriques automatiques classiques et leurs limites | O2 |
| 2 | `evaluer-securite` | Évaluer la sécurité et les refus | O2 |
| 3 | `llm-juge` | Un LLM comme juge | O3 |
| 3 | `grille-juge` | Écrire la grille du juge | O3 |
| 3 | `juge-reference` | Juger avec une réponse de référence | O3 |
| 3 | `comparaison-paires` | Comparer deux réponses plutôt que noter | O3 |
| 3 | `biais-juge` | Les biais du juge, et comment les vérifier | O3 |
| 3 | `calibrer-juge` | Vérifier et ajuster le juge | O3 |
| 3 | `juge-local` | Un juge local et gratuit | O3 |
| 4 | `evaluation-humaine` | L'évaluation humaine | O4 |
| 4 | `consignes-annotateurs-eval` | Des consignes claires pour les évaluateurs | O4 |
| 4 | `plateforme-annotation-eval` | Organiser une campagne d'évaluation | O4 |
| 4 | `accord-evaluateurs` | Mesurer l'accord entre évaluateurs | O4 |
| 4 | `juge-humain` | Le juge est-il d'accord avec les humains ? | O4 |
| 4 | `retours-utilisateurs-eval` | Les retours des utilisateurs comme évaluation | O4 |
| 5 | `non-regression` | Les tests de non-régression | O5 |
| 5 | `comparer-variantes` | Comparer plusieurs variantes d'un système | O5 |
| 5 | `significativite` | Une différence est-elle réelle ? | O5 |
| 5 | `cout-latence-eval` | Mesurer aussi le coût et la latence | O5 |
| 5 | `automatiser-eval` | Automatiser l'évaluation | O5 |
| 5 | `presenter-resultats-eval` | Présenter les résultats d'une évaluation | O5 |
| 6 | `affirmations` | Évaluer affirmation par affirmation | O6 |
| 6 | `ragchecker` | Diagnostiquer un RAG étape par étape : RAGChecker | O6 |
| 6 | `ablation` | L'ablation : retirer une pièce pour mesurer son rôle | O6 |
| 6 | `contrefactuel` | Les tests contrefactuels : changer un détail, observer la réponse | O6 |
| 6 | `budget-fixe` | Comparer à budget fixé : même coût, même nombre d'appels | O6 |
| 6 | `contamination-tests` | Les tests contaminés : quand le modèle a déjà vu les questions | O6 |
| 6 | `meta-evaluation` | Évaluer l'évaluation : la méta-évaluation | O6 |
| 6 | `attribuer-progres` | Attribuer un progrès à sa vraie cause | O6 |
| 7 | `echantillon-production` | Évaluer un échantillon des vraies conversations | O5 |
| 7 | `signaux-implicites` | Les signaux implicites : reformulations et abandons | O4 |
| 7 | `test-ab-llm` | Tester une nouvelle version sur une partie des utilisateurs | O5 |
| 7 | `boucle-amelioration` | De l'erreur repérée au jeu de test : la boucle d'amélioration | O1 |
| 7 | `qualite-dans-le-temps` | Surveiller la qualité dans le temps | O5 |

## Vocabulaire du module

| Terme | Catégorie (A anglais / B transparent) | Notion où il apparaît |
| --- | --- | --- |
| jeu d'évaluation (eval set) | A | `jeu-test-llm` |
| fidélité (faithfulness) | A | `fidelite` |
| pertinence (relevance) | A | `pertinence` |
| LLM-as-a-judge | A | `llm-juge` |
| grille d'évaluation (rubric) | A | `grille-juge` |
| non-régression | B | `non-regression` |
| variante, A/B | A | `comparer-variantes` |
| critère de succès | B | `criteres-succes` |
| vérification par code (assertion) | A | `verifications-code` |
| réponse de référence (ground truth) | A | `juge-reference` |
| signal implicite | B | `signaux-implicites` |
| boucle d'amélioration (data flywheel) | A | `boucle-amelioration` |
| évaluation par affirmation (claim-level) | A | `affirmations` |
| ablation | A | `ablation` |
| test contrefactuel | A | `contrefactuel` |
| contamination (des données de test) | A | `contamination-tests` |
| méta-évaluation | A | `meta-evaluation` |

## Fil rouge et ancrage local

- **Situation** : l'assistant juridique de Bafoussam (module 3.4) a l'air de bien répondre. Mais l'association veut une preuve chiffrée avant de le confier aux travailleurs, et l'assurance qu'une mise à jour ne le rendra pas moins bon.
- **Personnages** : Awa, bénévole, et deux juristes qui acceptent de noter des réponses.
- **Données utilisées** : le jeu de 50 questions construit par l'apprenant, plus un jeu d'exemple fourni.

## Exercices prévus

| Id | Titre | Objectif | Difficulté (1–3) | Livrable non testable ? |
| --- | --- | --- | --- | --- |
| 3.5-ex01 à ex05 | Pourquoi évaluer | O1 | 1 | non |
| 3.5-ex06 à ex10 | Les métriques | O2 | 1 | non |
| 3.5-ex11 à ex15 | Le LLM juge | O3 | 2 | non |
| 3.5-ex16 à ex19 | Les humains | O4 | 2 | non |
| 3.5-ex20 à ex23 | Ne pas régresser | O5 | 2–3 | non |
| 3.5-ex24 | Exercice clé : un jeu d'évaluation de 50 questions, et la mesure de 3 variantes du RAG | O1, O2, O5 | 3 | oui → GRILLE.md (analyse des résultats) |
| 3.5-ex25 à ex29 | Le diagnostic scientifique | O6 | 2–3 | non |
| 3.5-ex30 à ex32 | Évaluer en production | O1, O4, O5 | 2–3 | non |

## Épreuve de niveau expert

**Épreuve** : une variante de ton RAG semble meilleure de quelques points. Montrer si l'amélioration survit au contrôle du protocole : même budget, ablation de chaque changement, intervalle de confiance, vérification du juge contre des annotations humaines.

| Niveau démontré | Preuve attendue |
| --- | --- |
| Diagnostiquer | Les erreurs classées par affirmation et par étape |
| Comparer | Une comparaison à budget fixé, avec intervalle de confiance |
| Choisir | Une conclusion qui dit ce que la mesure permet d'affirmer, et rien de plus |
| Maintenir | Le protocole automatisé, relancé à chaque version |

**Statut des méthodes enseignées**

| Méthode | Statut | Pratique |
| --- | --- | --- |
| Jeu de test, vérifications par code, non-régression | établie | autonome |
| LLM juge calibré sur des annotations humaines | établie | autonome avec un juge local |
| Évaluation par affirmation, ablation, contrefactuel | établie | autonome sur un petit jeu |
| Méta-évaluation d'un juge ou d'une métrique | établie | autonome, quelques dizaines d'annotations |

## Ressources matérielles

- **RAM maximale** : 4 à 6 Go.
- **Téléchargements** : aucun nouveau modèle obligatoire.
- **Temps de calcul le plus long** : quelques minutes pour évaluer une variante sur 50 questions en local, TODO(vérifier).
- **Dépendances nouvelles** : une bibliothèque d'évaluation (Ragas ou équivalent), facultative.
- **API payante** : facultative pour le juge, avec un budget maximum dans l'énoncé.

## Point de contrôle sécurité et éthique

Le jeu de test inclut des tentatives d'injection et des questions hors périmètre : la sécurité se mesure comme la qualité.

## Ressources externes gratuites

| Ressource | Langue | Type | Licence ou accès | Pourquoi |
| --- | --- | --- | --- | --- |
| [Your AI Product Needs Evals (Hamel Husain)](https://hamel.dev/blog/posts/evals/) | anglais | article | accès libre | Une méthode concrète pour évaluer un produit. |
| [Documentation de Ragas](https://docs.ragas.io/) | anglais | documentation | Apache 2.0 | Des métriques prêtes pour évaluer un RAG. |
| [Patterns for Building LLM-based Systems (Eugene Yan)](https://eugeneyan.com/writing/llm-patterns/) | anglais | article | accès libre | La partie « Evals » et les retours utilisateurs. |
| [RAGChecker](https://arxiv.org/abs/2408.08067) | anglais | article | accès libre | Des métriques par affirmation qui séparent recherche et génération. |
| [Test-Time Scaling in Reasoning LLMs (2026)](https://arxiv.org/abs/2608.04001) | anglais | article | accès libre | Un exemple de protocole qui compare des méthodes à budget égal. |

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

- TODO(vérifier) : bibliothèque d'évaluation recommandée selon l'état des outils à la rédaction.
- TODO(vérifier) : compléter le vocabulaire des notions ajoutées par la seconde passe d'audit (25/11/2026), en vérifiant chaque terme dans docs/glossaire.md.
