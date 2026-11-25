---
id: "3.2"
titre: "Prompt engineering et sorties structurées"
parcours: "03-llm"
promesse: "Obtenir d'un modèle exactement ce que tu veux : des consignes claires, des exemples, un raisonnement guidé, et des sorties JSON que ton code peut utiliser sans risque."
question_saut: "Tu sais déjà obtenir des sorties JSON fiables d'un LLM ?"
qcm: true
prerequis: ["3.1"]
statut: brouillon
version: 1
mise_a_jour: 2026-11-25
---

# Fiche du module 3.2 — Prompt engineering et sorties structurées

## Extrait du programme

- **Contenu** : Instructions claires, exemples (few-shot), raisonnement étape par étape, gestion du contexte, sorties JSON validées (Pydantic), function calling
- **Exercice clé** : Extraire des données structurées de 100 factures ou reçus

## Objectifs vérifiables

| Id | À la fin, l'apprenant sait… | Évalué par |
| --- | --- | --- |
| O1 | Écrire des instructions claires et vérifiables. | ex01 à ex05, ex11 à ex15, exercice clé (ex27), qcm |
| O2 | Guider un modèle avec des exemples et un raisonnement étape par étape. | ex06 à ex10, qcm |
| O3 | Gérer le contexte d'une conversation et composer le contexte d'un appel (sources, ordre, budget, compaction). | ex16 à ex18, ex19 à ex22, qcm |
| O4 | Obtenir des sorties JSON validées avec Pydantic ou contraintes pendant la génération, et choisir entre les deux. | ex23 à ex26, exercice clé (ex27), ex28 à ex30, qcm |
| O5 | Faire appeler des fonctions par un modèle. | ex31 à ex34, qcm |
| O6 | Optimiser automatiquement un prompt à partir d'une métrique et prouver que le gain tient sur des données nouvelles. | ex35 à ex38, qcm |

## Chapitres

| Chapitre | Titre | Exercices |
| --- | --- | --- |
| 1 | Bien demander | 5 |
| 2 | Exemples et raisonnement | 5 |
| 3 | Les tâches courantes | 5 |
| 4 | La conversation | 3 |
| 5 | Le context engineering | 4 |
| 6 | Des sorties structurées | 5 |
| 7 | Contraindre la génération | 3 |
| 8 | Appeler des fonctions | 4 |
| 9 | Optimiser les prompts automatiquement | 4 |

## Notions, dans l'ordre

| Chapitre | Id de la notion | Notion | Objectif |
| --- | --- | --- | --- |
| 1 | `anatomie-prompt` | Anatomie d'un bon prompt | O1 |
| 1 | `message-systeme` | Le message système | O1 |
| 1 | `consignes-verifiables` | Des consignes qu'on peut vérifier | O1 |
| 1 | `longueur-format` | Contrôler la longueur et le format | O1 |
| 1 | `delimiteurs` | Séparer les consignes et les données : délimiteurs et balises | O1 |
| 1 | `role-modele` | Donner un rôle au modèle | O1 |
| 1 | `ameliorer-prompt` | Améliorer un prompt avec méthode | O1 |
| 1 | `versionner-prompts` | Versionner et tester ses prompts | O1 |
| 2 | `few-shot` | Montrer des exemples : le few-shot | O2 |
| 2 | `choisir-exemples` | Choisir de bons exemples | O2 |
| 2 | `raisonnement` | Faire raisonner étape par étape | O2 |
| 2 | `auto-coherence` | Voter entre plusieurs réponses : l'auto-cohérence | O2 |
| 2 | `contre-exemples` | Montrer ce qu'il ne faut pas faire : les contre-exemples | O2 |
| 2 | `decomposer` | Découper une tâche en plusieurs appels | O2 |
| 2 | `modeles-raisonnants` | Avec un modèle qui raisonne déjà : demander moins, vérifier plus | O2 |
| 3 | `prompt-classification` | Classer des textes avec un prompt | O1 |
| 3 | `prompt-resume` | Résumer fidèlement | O1 |
| 3 | `prompt-reecriture` | Réécrire et simplifier un texte | O1 |
| 3 | `prompt-traduction` | Traduire et adapter | O1 |
| 3 | `prompt-langues` | Bien demander en français et en langues locales | O1 |
| 3 | `prompt-extraction` | Extraire des informations précises | O1 |
| 3 | `prompt-questions-texte` | Répondre à des questions sur un texte fourni | O1 |
| 3 | `prompt-code` | Faire écrire du code et des requêtes SQL | O1 |
| 4 | `conversation` | Une conversation : l'historique des messages | O3 |
| 4 | `gabarits` | Les gabarits de prompts | O3 |
| 4 | `memoire-conversation` | Garder une mémoire de la conversation | O3 |
| 4 | `contexte-deborde` | Quand le contexte déborde : résumer et trier | O3 |
| 4 | `cache-prompt` | Réutiliser un long début de prompt : le cache de prompt | O3 |
| 5 | `context-engineering` | Du prompt au contexte : le context engineering | O3 |
| 5 | `composer-contexte` | Composer le contexte : consignes, documents, outils, mémoire, historique | O3 |
| 5 | `ordre-contexte` | L'ordre compte : où placer les informations | O3 |
| 5 | `budget-contexte` | Un budget de tokens pour chaque partie du contexte | O3 |
| 5 | `exemples-dynamiques` | Choisir les exemples selon la demande | O3 |
| 5 | `compacter-contexte` | Compacter un contexte long sans perdre l'essentiel | O3 |
| 6 | `json-llm` | Demander du JSON | O4 |
| 6 | `pydantic` | Valider avec Pydantic | O4 |
| 6 | `valeurs-autorisees` | Des valeurs autorisées : listes fermées et contraintes | O4 |
| 6 | `schemas-complexes` | Des schémas imbriqués et des listes | O4 |
| 6 | `reparer-sortie` | Quand la sortie est invalide : réessayer et réparer | O4 |
| 6 | `extraire-documents` | Extraire des données de documents | O4 |
| 7 | `generation-contrainte` | Forcer le format : la génération contrainte | O4 |
| 7 | `grammaires` | Contraindre avec une grammaire ou une expression régulière | O4 |
| 7 | `valider-ou-contraindre` | Valider après coup ou contraindre pendant : choisir | O4 |
| 7 | `sortie-progressive` | Lire une sortie structurée au fil de l'eau | O4 |
| 7 | `contraintes-qualite` | Quand la contrainte dégrade la réponse | O4 |
| 8 | `function-calling` | Le function calling | O5 |
| 8 | `schema-outil` | Décrire un outil avec un schéma | O5 |
| 8 | `boucle-outils` | La boucle complète : appel, exécution, résultat renvoyé au modèle | O5 |
| 8 | `plusieurs-outils` | Plusieurs outils et des appels en parallèle | O5 |
| 8 | `valider-arguments` | Valider les arguments avant d'exécuter | O5 |
| 8 | `erreur-outil` | Renvoyer une erreur d'outil au modèle | O5 |
| 9 | `optimisation-auto` | Optimiser un prompt à partir d'exemples et d'une métrique | O6 |
| 9 | `dspy` | Programmer plutôt qu'écrire des prompts : DSPy | O6 |
| 9 | `optimiseurs-instructions` | Chercher les instructions et les exemples : MIPROv2 | O6 |
| 9 | `optimiseurs-reflexifs` | Faire réfléchir le modèle sur ses erreurs : GEPA | O6 |
| 9 | `surapprentissage-prompt` | Un prompt optimisé peut sur-apprendre : jeux de développement et de test | O6 |
| 9 | `manuel-ou-auto` | Écrire à la main ou optimiser : coût et bénéfice | O6 |

## Vocabulaire du module

| Terme | Catégorie (A anglais / B transparent) | Notion où il apparaît |
| --- | --- | --- |
| prompt, message système (system prompt) | A | `message-systeme` |
| few-shot | A | `few-shot` |
| chain of thought (raisonnement étape par étape) | A | `raisonnement` |
| gabarit (template) | A | `gabarits` |
| JSON, schéma | A | `json-llm` |
| Pydantic, validation | A | `pydantic` |
| génération contrainte (structured outputs) | A | `generation-contrainte` |
| function calling, outil (tool) | A | `function-calling` |
| délimiteur, balise | B | `delimiteurs` |
| contre-exemple | B | `contre-exemples` |
| cache de prompt (prompt caching) | A | `cache-prompt` |
| énumération (enum) | A | `valeurs-autorisees` |
| appel d'outil, résultat d'outil (tool result) | A | `boucle-outils` |
| context engineering | A | `context-engineering` |
| compaction du contexte | A | `compacter-contexte` |
| grammaire (génération contrainte) | B | `grammaires` |
| optimisation de prompts | A | `optimisation-auto` |
| DSPy, signature, module, optimiseur | A | `dspy` |
| MIPROv2, GEPA | A | `optimiseurs-instructions` |

## Fil rouge et ancrage local

- **Situation** : un grossiste de Bobo-Dioulasso reçoit des centaines de factures et de reçus, souvent mal photographiés. Ton programme en extrait automatiquement le fournisseur, la date, les articles et le total.
- **Personnages** : Issa, grossiste en produits alimentaires, et sa comptable Mariam.
- **Données utilisées** : 100 factures et reçus fictifs créés pour le cours (texte et images), avec les bonnes réponses pour les tests.

## Exercices prévus

| Id | Titre | Objectif | Difficulté (1–3) | Livrable non testable ? |
| --- | --- | --- | --- | --- |
| 3.2-ex01 à ex05 | Bien demander | O1 | 1 | non |
| 3.2-ex06 à ex10 | Exemples et raisonnement | O2 | 1 | non |
| 3.2-ex11 à ex15 | Les tâches courantes | O1 | 1 | non |
| 3.2-ex16 à ex18 | La conversation | O3 | 2 | non |
| 3.2-ex19 à ex22 | Le context engineering | O3 | 2 | non |
| 3.2-ex23 à ex26 | Des sorties structurées | O4 | 2 | non |
| 3.2-ex27 | Exercice clé : extraire des données structurées de 100 factures ou reçus | O1, O4 | 3 | non |
| 3.2-ex28 à ex30 | Contraindre la génération | O4 | 2–3 | non |
| 3.2-ex31 à ex34 | Appeler des fonctions | O5 | 2–3 | non |
| 3.2-ex35 à ex38 | Optimiser les prompts automatiquement | O6 | 2–3 | non |

## Épreuve de niveau expert

**Épreuve** : optimiser automatiquement le prompt d'extraction de factures sur un jeu de développement, puis prouver que le gain tient sur des documents jamais vus, avec un coût par document mesuré.

| Niveau démontré | Preuve attendue |
| --- | --- |
| Implémenter | Le pipeline d'extraction et l'optimiseur, relançables |
| Diagnostiquer | Les erreurs qui restent, classées par type |
| Comparer | Prompt manuel, prompt optimisé, génération contrainte, sur le même test |
| Choisir | La version retenue, justifiée par qualité et coût |

**Statut des méthodes enseignées**

| Méthode | Statut | Pratique |
| --- | --- | --- |
| Sorties structurées validées, génération contrainte | établie | autonome, en local |
| Context engineering (composer, compacter, budget) | établie | autonome |
| Optimisation de prompts (DSPy, MIPROv2) | établie | expérience réduite : petit jeu, petit modèle local |
| Optimisation réflexive (GEPA) | récente | expérience réduite, résultats publiés à confirmer sur tes données |

## Ressources matérielles

- **RAM maximale** : 4 à 6 Go avec un petit modèle local.
- **Téléchargements** : aucun nouveau modèle obligatoire.
- **Temps de calcul le plus long** : quelques minutes pour traiter les 100 documents en local, TODO(vérifier).
- **Dépendances nouvelles** : pydantic.
- **API payante** : facultative, avec un budget maximum indiqué dans l'énoncé.

## Point de contrôle sécurité et éthique

Une facture peut contenir une instruction cachée destinée au modèle : premier contact avec l'injection de prompt, approfondie en 5.1.

## Ressources externes gratuites

| Ressource | Langue | Type | Licence ou accès | Pourquoi |
| --- | --- | --- | --- | --- |
| [Prompt Engineering Guide](https://www.promptingguide.ai/fr) | français | guide | MIT | Les techniques de prompt, avec des exemples. |
| [OpenAI Cookbook](https://cookbook.openai.com/) | anglais | recettes | MIT | Des exemples de prompts, de sorties structurées et d'outils. |
| [Documentation de Pydantic](https://docs.pydantic.dev/) | anglais | documentation | MIT | Décrire et valider des données structurées. |
| [Documentation d'Instructor](https://python.useinstructor.com/) | anglais | documentation | MIT | Des sorties structurées validées, avec plusieurs fournisseurs. |
| [Effective context engineering for AI agents](https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents) | anglais | article | accès libre | La discipline qui succède au prompt engineering, expliquée par la pratique. |
| [DSPy, les optimiseurs](https://dspy.ai/learn/optimization/optimizers/) | anglais | documentation | libre | Les optimiseurs de prompts, leurs entrées et leurs coûts. |
| [GEPA: Reflective Prompt Evolution Can Outperform Reinforcement Learning](https://arxiv.org/abs/2507.19457) | anglais | article | accès libre | L'optimisation par réflexion sur les erreurs. |

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

- TODO(vérifier) : ajouter les guides de prompt engineering des fournisseurs (Anthropic, OpenAI, Google) avec leurs adresses à jour.
- TODO(vérifier) : compléter le vocabulaire des notions ajoutées par la seconde passe d'audit (25/11/2026), en vérifiant chaque terme dans docs/glossaire.md.
