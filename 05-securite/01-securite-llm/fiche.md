---
id: "5.1"
titre: "Sécurité des applications LLM"
parcours: "05-securite"
promesse: "Protéger tes applications à base de LLM contre les attaques qui leur sont propres : injection de prompt, fuite de données, outils détournés."
question_saut: "Tu sais déjà protéger une application LLM contre l'injection de prompt ?"
qcm: true
prerequis: ["3.6", "4.2"]
statut: brouillon
version: 1
mise_a_jour: 2026-11-25
---

# Fiche du module 5.1 — Sécurité des applications LLM

## Extrait du programme

- **Contenu** : OWASP Top 10 pour les applications LLM : injection de prompt, fuite de données, outils dangereux, permissions minimales, red teaming défensif
- **Exercice clé** : Durcir l'agent du projet 3 et documenter chaque protection

## Objectifs vérifiables

| Id | À la fin, l'apprenant sait… | Évalué par |
| --- | --- | --- |
| O1 | Expliquer les risques du Top 10 OWASP pour les applications LLM et construire un modèle de menace. | ex01 à ex02, qcm |
| O2 | Tester et contrer l'injection de prompt, directe et indirecte. | ex03 à ex04, exercice clé (ex12), qcm |
| O3 | Empêcher la fuite de données et du prompt système. | ex05 à ex06, exercice clé (ex12), qcm |
| O4 | Limiter les permissions et les actions des outils. | ex07 à ex09, exercice clé (ex12), qcm |
| O5 | Mener un red teaming défensif et documenter les protections. | ex10 à ex11, exercice clé (ex12), qcm |

## Chapitres

| Chapitre | Titre | Exercices |
| --- | --- | --- |
| 1 | Les menaces | 2 |
| 2 | L'injection de prompt | 2 |
| 3 | Les fuites | 2 |
| 4 | Les outils dangereux | 3 |
| 5 | Tester et documenter | 3 |

## Notions, dans l'ordre

| Chapitre | Id de la notion | Notion | Objectif |
| --- | --- | --- | --- |
| 1 | `owasp-llm` | Le Top 10 OWASP pour les applications LLM | O1 |
| 1 | `modele-menace` | Construire un modèle de menace | O1 |
| 2 | `injection-directe` | L'injection de prompt directe | O2 |
| 2 | `injection-indirecte` | L'injection indirecte : par les documents et les outils | O2 |
| 2 | `defenses-injection` | Se défendre : séparer, filtrer, vérifier | O2 |
| 3 | `fuite-donnees` | La fuite de données | O3 |
| 3 | `fuite-prompt` | La fuite du prompt système | O3 |
| 3 | `donnees-perso-llm` | Les données personnelles dans les prompts et les logs | O3 |
| 4 | `outils-dangereux` | Les outils dangereux | O4 |
| 4 | `moindre-privilege` | Le moindre privilège | O4 |
| 4 | `bac-a-sable` | Exécuter du code dans un bac à sable | O4 |
| 4 | `confirmation` | Demander confirmation avant d'agir | O4 |
| 5 | `red-teaming` | Le red teaming défensif | O5 |
| 5 | `tests-securite` | Des tests de sécurité automatiques | O5 |
| 5 | `documenter-protections` | Documenter chaque protection | O5 |

## Vocabulaire du module

| Terme | Catégorie (A anglais / B transparent) | Notion où il apparaît |
| --- | --- | --- |
| OWASP | A | `owasp-llm` |
| modèle de menace (threat model) | A | `modele-menace` |
| injection de prompt (prompt injection) | A | `injection-directe` |
| injection indirecte | A | `injection-indirecte` |
| jailbreak | A | `defenses-injection` |
| moindre privilège (least privilege) | A | `moindre-privilege` |
| bac à sable (sandbox) | A | `bac-a-sable` |
| red teaming | A | `red-teaming` |

## Fil rouge et ancrage local

- **Situation** : un document piégé glissé dans la base de l'agent agricole de Korhogo (module 3.6) lui fait recommander un traitement dangereux. Tu trouves comment, puis tu durcis l'agent pour que cela ne puisse plus arriver.
- **Personnages** : Yacouba, conseiller agricole, qui a failli diffuser le mauvais conseil.
- **Données utilisées** : un jeu d'attaques fourni (prompts et documents piégés), utilisé uniquement en local, contre son propre agent.

## Exercices prévus

| Id | Titre | Objectif | Difficulté (1–3) | Livrable non testable ? |
| --- | --- | --- | --- | --- |
| 5.1-ex01 à ex02 | Les menaces | O1 | 1–2 | non |
| 5.1-ex03 à ex04 | L'injection de prompt | O2 | 2 | non |
| 5.1-ex05 à ex06 | Les fuites | O3 | 2 | non |
| 5.1-ex07 à ex09 | Les outils dangereux | O4 | 2 | non |
| 5.1-ex10 à ex11 | Tester et documenter | O5 | 2–3 | non |
| 5.1-ex12 | Exercice clé : durcir l'agent du projet 3 et documenter chaque protection | O2 à O5 | 3 | non |

## Ressources matérielles

- **RAM maximale** : 4 à 6 Go.
- **Téléchargements** : aucun nouveau modèle obligatoire.
- **Temps de calcul le plus long** : quelques minutes pour rejouer le jeu d'attaques.
- **Dépendances nouvelles** : aucune obligatoire.
- **API payante** : aucune.

## Point de contrôle sécurité et éthique

Red teaming strictement défensif : uniquement contre son propre système, en local. Ne jamais tester un service sans autorisation écrite de son propriétaire.

## Ressources externes gratuites

| Ressource | Langue | Durée ou taille | Licence | Pourquoi |
| --- | --- | --- | --- | --- |
| [OWASP Top 10 for LLM Applications](https://genai.owasp.org/llm-top-10/) | anglais | guide | CC BY-SA 4.0 | La liste de référence des risques des applications LLM. |

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

- TODO(vérifier) : version du Top 10 OWASP à jour à la rédaction.
