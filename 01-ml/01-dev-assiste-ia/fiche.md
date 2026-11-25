---
id: "1.1"
titre: "Développement assisté par IA"
parcours: "01-ml"
promesse: "Coder plus vite avec un assistant IA sans perdre le contrôle : bien lui décrire la tâche, relire et tester ce qu'il produit, et savoir quand ne pas lui faire confiance."
question_saut: "Tu codes déjà avec un assistant IA ?"
qcm: true
prerequis: ["0.3"]
statut: brouillon
version: 1
mise_a_jour: 2026-11-25
---

# Fiche du module 1.1 — Développement assisté par IA

## Extrait du programme

- **Contenu** : Assistants de code (Claude Code, GitHub Copilot, Cursor) et options gratuites ou locales (offre gratuite de Copilot, Aider ou Continue avec un modèle local), bien décrire une tâche, relire et tester le code généré, repérer les erreurs et les failles, limites et risques (licences, secrets, dépendance)
- **Exercice clé** : Réaliser la même fonctionnalité avec et sans assistant, puis comparer temps, qualité et bugs

## Objectifs vérifiables

| Id | À la fin, l'apprenant sait… | Évalué par |
| --- | --- | --- |
| O1 | Expliquer ce qu'un assistant de code sait faire et ce qu'il ne sait pas faire. | ex01 à ex03, qcm |
| O2 | Installer et utiliser un assistant gratuit dans VS Code. | ex01 à ex03, ex04 à ex06, qcm |
| O3 | Décrire une tâche avec son contexte, ses contraintes et un exemple attendu. | ex07 à ex09, ex10 à ex11, exercice clé (ex19), qcm |
| O4 | Relire et tester le code généré, et y trouver les erreurs et les failles. | ex10 à ex11, ex12 à ex15, exercice clé (ex19), qcm |
| O5 | Identifier les risques : licence du code, fuite de secrets, dépendance à l'outil. | ex16 à ex18, exercice clé (ex19), qcm |

## Chapitres

| Chapitre | Titre | Exercices |
| --- | --- | --- |
| 1 | Comprendre les assistants de code | 3 |
| 2 | T'équiper | 3 |
| 3 | Bien demander | 3 |
| 4 | Faire travailler l'assistant | 2 |
| 5 | Vérifier ce qui est produit | 4 |
| 6 | Travailler avec méthode | 4 |

## Notions, dans l'ordre

| Chapitre | Id de la notion | Notion | Objectif |
| --- | --- | --- | --- |
| 1 | `assistant-code` | Ce qu'est un assistant de code, et ce qu'il n'est pas | O1 |
| 1 | `comment-ca-marche` | Comment un assistant prédit du code | O1 |
| 1 | `modes-assistant` | Complétion, chat, agent : trois façons de travailler | O1 |
| 1 | `options` | Copilot, Claude Code, Cursor et les options gratuites ou locales | O2 |
| 2 | `installer-assistant` | Installer un assistant gratuit dans VS Code | O2 |
| 2 | `modele-local` | Un assistant avec un modèle local, sans Internet | O2 |
| 2 | `assistant-terminal` | Un assistant dans le terminal | O2 |
| 2 | `agents-code` | Les agents de code : confier une tâche entière, sous contrôle | O2 |
| 3 | `decrire-tache` | Bien décrire une tâche : contexte, contraintes, exemple | O3 |
| 3 | `contexte-projet` | Donner le bon contexte : fichiers et règles du projet | O3 |
| 3 | `planifier-avant` | Faire planifier avant de faire coder | O3 |
| 3 | `iterer` | Corriger le tir : avancer par petites demandes | O3 |
| 3 | `expliquer-code` | Faire expliquer un code que tu ne connais pas | O3 |
| 4 | `refactoriser-assistant` | Refactoriser avec l'assistant | O3 |
| 4 | `documenter-assistant` | Faire écrire la documentation | O3 |
| 4 | `revue-assistant` | Faire relire ton code par l'assistant | O4 |
| 5 | `relire` | Relire le code généré ligne à ligne | O4 |
| 5 | `tester-genere` | Tester avant de faire confiance | O4 |
| 5 | `tests-assistant` | Faire écrire des tests, et les vérifier | O4 |
| 5 | `deboguer-assistant` | Déboguer avec l'assistant sans perdre le fil | O4 |
| 5 | `erreurs-failles` | Les erreurs fréquentes du code généré | O4 |
| 5 | `failles` | Les failles de sécurité du code généré | O4 |
| 6 | `risques` | Le code généré et les licences | O5 |
| 6 | `secrets-assistant` | Ne jamais confier un secret à un assistant | O5 |
| 6 | `dependance` | Garder tes compétences : le risque de dépendance | O5 |
| 6 | `mesurer-gain` | Mesurer ce que l'assistant te fait vraiment gagner | O5 |
| 6 | `quand-pas` | Quand ne pas utiliser l'assistant | O5 |

## Vocabulaire du module

| Terme | Catégorie (A anglais / B transparent) | Notion où il apparaît |
| --- | --- | --- |
| assistant de code (coding assistant) | A | `assistant-code` |
| complétion (completion) | A | `assistant-code` |
| prompt | A | `decrire-tache` |
| contexte | B | `decrire-tache` |
| hallucination | B | `erreurs-failles` |
| agent de code | B | `options` |
| modèle local | B | `options` |
| injection, faille | A | `erreurs-failles` |
| licence, secret | B | `risques` |
| modèle de langage (LLM), token | A | `comment-ca-marche` |
| Ollama, modèle local | A | `modele-local` |
| fichier de règles (AGENTS.md, CLAUDE.md) | A | `contexte-projet` |
| itérer | B | `iterer` |
| dette technique | B | `dependance` |

## Fil rouge et ancrage local

- **Situation** : Kader, développeur freelance à Abidjan, doit livrer en une semaine un petit outil de facturation pour un maquis de Yopougon. Il essaie un assistant IA pour aller plus vite, et découvre ce qu'il gagne et ce qu'il risque.
- **Personnages** : Kader (développeur), Tantie Rose, la gérante du maquis.
- **Données utilisées** : un petit projet Python fourni (facturation, moins de 300 lignes), avec des bugs et une faille volontaires.

## Exercices prévus

| Id | Titre | Objectif | Difficulté (1–3) | Livrable non testable ? |
| --- | --- | --- | --- | --- |
| 1.1-ex01 à ex03 | Comprendre les assistants de code | O1, O2 | 1 | non |
| 1.1-ex04 à ex06 | T'équiper | O2 | 1 | non |
| 1.1-ex07 à ex09 | Bien demander | O3 | 2 | non |
| 1.1-ex10 à ex11 | Faire travailler l'assistant | O3, O4 | 2 | non |
| 1.1-ex12 à ex15 | Vérifier ce qui est produit | O4 | 2–3 | non |
| 1.1-ex16 à ex18 | Travailler avec méthode | O5 | 2–3 | non |
| 1.1-ex19 | Exercice clé : la même fonctionnalité avec et sans assistant, puis un rapport qui compare temps, qualité et bugs | O3 à O5 | 3 | oui → GRILLE.md (le rapport) |

## Ressources matérielles

- **RAM maximale** : moins de 500 Mo avec un assistant en ligne. Avec un modèle local (Ollama), 4 à 6 Go : possible sur la machine minimale avec un petit modèle de code, plus lent.
- **Téléchargements** : extension VS Code (quelques Mo) ; modèle local facultatif, 1 à 2 Go.
- **Temps de calcul le plus long** : quelques secondes par réponse avec un modèle local sur 4 cœurs. TODO(vérifier).
- **Dépendances nouvelles** : une extension d'assistant (Copilot ou Continue), Aider facultatif.
- **API payante** : aucune obligatoire. GitHub Copilot Free (2 000 complétions par mois, conditions lues le 25/11/2026), Copilot gratuit pour les étudiants vérifiés, ou un modèle local gratuit.

## Point de contrôle sécurité et éthique

- Ne jamais coller un secret (mot de passe, clé d'API, données de clients) dans une demande à un assistant en ligne.
- Tout code généré est relu et testé avant d'être gardé ; le correcteur IA vérifie cette revue dans l'exercice clé.
- Vérifier la licence d'un code proposé quand il ressemble à un projet existant.

## Ressources externes gratuites

| Ressource | Langue | Durée ou taille | Licence | Pourquoi |
| --- | --- | --- | --- | --- |
| [Documentation d'Aider](https://aider.chat/docs/) | anglais | référence | Apache 2.0 | L'assistant open source en ligne de commande, utilisable avec un modèle local. |
| [Documentation de Continue](https://docs.continue.dev/) | anglais | référence | Apache 2.0 | L'extension open source de VS Code, branchée sur un modèle local via Ollama. |

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

- TODO(vérifier) : offres gratuites des assistants (Copilot Free, étudiants), qui changent souvent ; revoir à chaque mise à jour trimestrielle.
- TODO(vérifier) : le petit modèle de code local recommandé et sa vitesse sur la machine minimale.
- TODO(vérifier) : les exercices ex01 à ex07 doivent rester vérifiables par des tests même si chacun utilise un assistant différent.
- TODO(vérifier) : compléter le vocabulaire des notions ajoutées par la seconde passe d'audit (25/11/2026), en vérifiant chaque terme dans docs/glossaire.md.
