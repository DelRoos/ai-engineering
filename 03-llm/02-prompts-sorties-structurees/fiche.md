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
| O1 | Écrire des instructions claires et vérifiables. | ex01 à ex03, exercice clé (ex13), qcm |
| O2 | Guider un modèle avec des exemples et un raisonnement étape par étape. | ex04 à ex05, qcm |
| O3 | Gérer le contexte d'une conversation. | ex06 à ex07, qcm |
| O4 | Obtenir des sorties JSON validées avec Pydantic. | ex08 à ex10, ex11 à ex12, exercice clé (ex13), qcm |
| O5 | Faire appeler des fonctions par un modèle. | ex11 à ex12, qcm |

## Chapitres

| Chapitre | Titre | Exercices |
| --- | --- | --- |
| 1 | Bien demander | 3 |
| 2 | Exemples et raisonnement | 2 |
| 3 | Le contexte | 2 |
| 4 | Des sorties structurées | 3 |
| 5 | Appeler des fonctions | 3 |

## Notions, dans l'ordre

| Chapitre | Id de la notion | Notion | Objectif |
| --- | --- | --- | --- |
| 1 | `anatomie-prompt` | Anatomie d'un bon prompt | O1 |
| 1 | `message-systeme` | Le message système | O1 |
| 1 | `consignes-verifiables` | Des consignes qu'on peut vérifier | O1 |
| 1 | `ameliorer-prompt` | Améliorer un prompt avec méthode | O1 |
| 2 | `few-shot` | Montrer des exemples : le few-shot | O2 |
| 2 | `raisonnement` | Faire raisonner étape par étape | O2 |
| 2 | `decomposer` | Découper une tâche en plusieurs appels | O2 |
| 3 | `conversation` | Une conversation : l'historique des messages | O3 |
| 3 | `contexte-deborde` | Quand le contexte déborde : résumer et trier | O3 |
| 3 | `gabarits` | Les gabarits de prompts | O3 |
| 4 | `json-llm` | Demander du JSON | O4 |
| 4 | `pydantic` | Valider avec Pydantic | O4 |
| 4 | `reparer-sortie` | Quand la sortie est invalide : réessayer et réparer | O4 |
| 4 | `generation-contrainte` | Forcer le format : la génération contrainte | O4 |
| 5 | `function-calling` | Le function calling | O5 |
| 5 | `schema-outil` | Décrire un outil avec un schéma | O5 |
| 5 | `extraire-documents` | Extraire des données de documents | O4 |

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

## Fil rouge et ancrage local

- **Situation** : un grossiste de Bobo-Dioulasso reçoit des centaines de factures et de reçus, souvent mal photographiés. Ton programme en extrait automatiquement le fournisseur, la date, les articles et le total.
- **Personnages** : Issa, grossiste en produits alimentaires, et sa comptable Mariam.
- **Données utilisées** : 100 factures et reçus fictifs créés pour le cours (texte et images), avec les bonnes réponses pour les tests.

## Exercices prévus

| Id | Titre | Objectif | Difficulté (1–3) | Livrable non testable ? |
| --- | --- | --- | --- | --- |
| 3.2-ex01 à ex03 | Bien demander | O1 | 1–2 | non |
| 3.2-ex04 à ex05 | Exemples et raisonnement | O2 | 2 | non |
| 3.2-ex06 à ex07 | Le contexte | O3 | 2 | non |
| 3.2-ex08 à ex10 | Des sorties structurées | O4 | 2 | non |
| 3.2-ex11 à ex12 | Appeler des fonctions | O4, O5 | 2–3 | non |
| 3.2-ex13 | Exercice clé : extraire des données structurées de 100 factures ou reçus | O1, O4 | 3 | non |

## Ressources matérielles

- **RAM maximale** : 4 à 6 Go avec un petit modèle local.
- **Téléchargements** : aucun nouveau modèle obligatoire.
- **Temps de calcul le plus long** : quelques minutes pour traiter les 100 documents en local, TODO(vérifier).
- **Dépendances nouvelles** : pydantic.
- **API payante** : facultative, avec un budget maximum indiqué dans l'énoncé.

## Point de contrôle sécurité et éthique

Une facture peut contenir une instruction cachée destinée au modèle : premier contact avec l'injection de prompt, approfondie en 5.1.

## Ressources externes gratuites

| Ressource | Langue | Durée ou taille | Licence | Pourquoi |
| --- | --- | --- | --- | --- |
| [Prompt Engineering Guide](https://www.promptingguide.ai/) | anglais | guide | MIT | Les techniques de prompt, avec des exemples. |
| [Documentation de Pydantic](https://docs.pydantic.dev/) | anglais | référence | MIT | Décrire et valider des données structurées. |

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
