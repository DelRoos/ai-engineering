---
id: "7.4"
titre: "Automatiser un navigateur"
parcours: "07-collecte-automatisation"
promesse: "Piloter un vrai navigateur avec Playwright pour collecter les sites très dynamiques, automatiser des démarches répétitives sur des portails, et tester ou surveiller des sites, de façon robuste."
question_saut: "Tu sais déjà automatiser un parcours complet avec Playwright, avec reprise et traces ?"
qcm: true
prerequis: ["7.2", "4.3"]
statut: brouillon
version: 1
mise_a_jour: 2026-11-25
---

# Fiche du module 7.4 — Automatiser un navigateur

## Extrait du programme

- **Contenu** : Playwright, sites dynamiques et interception réseau, sessions et fichiers, robustesse, démarches sur des portails, tests de bout en bout et surveillance, navigateurs en production
- **Exercice clé** : Automatiser une démarche répétitive sur un portail web à partir d'un tableur, avec reprise après erreur et preuve de chaque saisie

## Objectifs vérifiables

| Id | À la fin, l'apprenant sait… | Évalué par |
| --- | --- | --- |
| O1 | Piloter un navigateur avec Playwright : locators, attentes automatiques, actions, enregistrement. | ex01 à ex05, qcm |
| O2 | Collecter les sites dynamiques en interceptant le réseau plutôt qu'en lisant l'écran. | ex06 à ex09, qcm |
| O3 | Gérer sessions, connexions avec ses propres accès, téléchargements, envois et captures. | ex10 à ex13, qcm |
| O4 | Rendre une automatisation de navigateur robuste et débogable. | ex14 à ex16, qcm |
| O5 | Automatiser une démarche sur un portail, avec vérification et preuve de chaque action. | ex17 à ex19, exercice clé (ex20), qcm |
| O6 | Tester et surveiller un site automatiquement. | ex21 à ex23, qcm |
| O7 | Faire tourner des navigateurs en production à coût maîtrisé. | ex24 à ex26, qcm |

## Chapitres

| Chapitre | Titre | Exercices |
| --- | --- | --- |
| 1 | Playwright | 5 |
| 2 | Les sites dynamiques | 4 |
| 3 | Sessions et fichiers | 4 |
| 4 | Robustesse | 3 |
| 5 | Automatiser des démarches | 4 |
| 6 | Tester et surveiller des sites | 3 |
| 7 | Le navigateur en production | 3 |

## Notions, dans l'ordre

| Chapitre | Id de la notion | Notion | Objectif |
| --- | --- | --- | --- |
| 1 | `pourquoi-navigateur` | Quand il faut un vrai navigateur | O1 |
| 1 | `installer-playwright` | Installer Playwright et ses navigateurs | O1 |
| 1 | `page-locators` | Pages et locators | O1 |
| 1 | `attentes-auto` | Les attentes automatiques, et pourquoi sleep est un piège | O1 |
| 1 | `actions-utilisateur` | Cliquer, taper, choisir, faire défiler | O1 |
| 1 | `codegen` | Enregistrer un parcours avec codegen | O1 |
| 1 | `sync-async-playwright` | Synchrone ou asynchrone | O1 |
| 2 | `attendre-donnees` | Attendre les données, pas le temps | O2 |
| 2 | `intercepter-reseau` | Intercepter les réponses réseau plutôt que lire le DOM | O2 |
| 2 | `bloquer-ressources` | Bloquer images et polices pour aller plus vite | O2 |
| 2 | `defilement-navigateur` | Le défilement infini avec un navigateur | O2 |
| 2 | `frames-popups` | Frames, fenêtres et pop-ups | O2 |
| 2 | `evaluer-js` | Exécuter du JavaScript dans la page | O2 |
| 3 | `etat-session` | Sauvegarder et réutiliser une session | O3 |
| 3 | `connexion-ses-acces` | Se connecter avec ses propres accès, sans les écrire dans le code | O3 |
| 3 | `double-authentification` | La double authentification : l'humain reste dans la boucle | O3 |
| 3 | `telechargements-navigateur` | Les téléchargements | O3 |
| 3 | `envoi-fichiers` | Envoyer des fichiers dans un formulaire | O3 |
| 3 | `captures-pdf` | Captures d'écran et PDF de pages | O3 |
| 4 | `selecteurs-role` | Des sélecteurs par rôle et par texte | O4 |
| 4 | `erreurs-navigateur` | Gérer les erreurs et les délais | O4 |
| 4 | `reprendre-parcours` | Reprendre un parcours interrompu | O4 |
| 4 | `traces-playwright` | Déboguer avec les traces de Playwright | O4 |
| 4 | `changements-interface` | Résister aux changements d'interface | O4 |
| 5 | `formulaires-serie` | Remplir des formulaires en série à partir d'un tableur | O5 |
| 5 | `portails-sans-api` | Travailler avec un portail sans API | O5 |
| 5 | `verifier-saisie` | Vérifier chaque saisie avant de valider | O5 |
| 5 | `preuve-actions` | Garder la preuve de chaque action | O5 |
| 5 | `quand-ne-pas-automatiser` | Quand il ne faut pas automatiser une démarche | O5 |
| 6 | `tests-bout-en-bout` | Les tests de bout en bout | O6 |
| 6 | `surveillance-synthetique` | La surveillance synthétique : tester un site toutes les heures | O6 |
| 6 | `comparer-captures` | Comparer des captures pour voir ce qui a changé | O6 |
| 6 | `accessibilite-auto` | Vérifier l'accessibilité automatiquement | O6 |
| 6 | `selenium-puppeteer` | Selenium et Puppeteer : ce qu'il faut savoir | O6 |
| 7 | `navigateurs-conteneur` | Des navigateurs dans un conteneur | O7 |
| 7 | `paralleliser-navigateurs` | Paralléliser les navigateurs sans saturer la machine | O7 |
| 7 | `memoire-navigateur` | La mémoire d'un navigateur sans tête | O7 |
| 7 | `navigateurs-distants` | Les navigateurs distants et leur coût | O7 |
| 7 | `cout-page-navigateur` | Le coût d'une page, avec ou sans navigateur | O7 |

## Vocabulaire du module

| Terme | Catégorie (A anglais / B transparent) | Notion où il apparaît |
| --- | --- | --- |
| navigateur sans tête (headless) | A | `memoire-navigateur` |
| locator | A | `page-locators` |
| test de bout en bout (end-to-end) | A | `tests-bout-en-bout` |
| surveillance synthétique (synthetic monitoring) | B | `surveillance-synthetique` |
| trace (Playwright) | A | `traces-playwright` |
| RPA | A | `quand-ne-pas-automatiser` |

## Fil rouge et ancrage local

- **Situation** : Le cabinet comptable de M. Hounkpatin télécharge chaque mois les relevés de 80 clients sur un portail sans API, et y saisit des déclarations à la main. Tu automatises ces démarches, avec ses accès et sous son contrôle.
- **Personnages** : M. Hounkpatin, expert-comptable à Cotonou ; Fifamè, son assistante.
- **Données utilisées** : un portail de démonstration servi en local (connexion, formulaires, téléchargements), et un tableur de saisies fictives.

## Exercices prévus

| Id | Titre | Objectif | Difficulté (1–3) | Livrable non testable ? |
| --- | --- | --- | --- | --- |
| 7.4-ex01 à ex05 | Playwright | O1 | 1 | non |
| 7.4-ex06 à ex09 | Les sites dynamiques | O2 | 1 | non |
| 7.4-ex10 à ex13 | Sessions et fichiers | O3 | 2 | non |
| 7.4-ex14 à ex16 | Robustesse | O4 | 2 | non |
| 7.4-ex17 à ex19 | Automatiser des démarches | O5 | 2–3 | non |
| 7.4-ex20 | Exercice clé : automatiser une démarche répétitive sur un portail web à partir d'un tableur, avec reprise après erreur et preuve de chaque saisie | O5 | 3 | non |
| 7.4-ex21 à ex23 | Tester et surveiller des sites | O6 | 2–3 | non |
| 7.4-ex24 à ex26 | Le navigateur en production | O7 | 2–3 | non |

## Ressources matérielles

- **RAM maximale** : moins de 2 Go (un navigateur sans tête)
- **Téléchargements** : environ 300 Mo pour les navigateurs de Playwright
- **Temps de calcul le plus long** : quelques secondes par parcours
- **Dépendances nouvelles** : playwright, openpyxl
- **API payante** : aucune

## Point de contrôle sécurité et éthique

- Les accès de l'utilisateur ne sont jamais écrits dans le code ; la double authentification reste faite par un humain.
- On n'automatise que des démarches qu'on a le droit de faire soi-même, sur ses propres comptes ou avec l'accord écrit du titulaire.
- Chaque action automatisée garde une preuve (capture, journal) et peut être vérifiée.

## Ressources externes gratuites

| Ressource | Langue | Type | Licence ou accès | Pourquoi |
| --- | --- | --- | --- | --- |
| [Documentation de Playwright pour Python](https://playwright.dev/python/) | anglais | documentation | Apache 2.0 | La référence : locators, attentes, réseau, traces. |
| [Playwright, les bonnes pratiques](https://playwright.dev/docs/best-practices) | anglais | documentation | Apache 2.0 | Des tests et des automatisations qui tiennent. |
| [Documentation de Selenium](https://www.selenium.dev/documentation/) | anglais | documentation | Apache 2.0 | L'outil historique, encore très présent en entreprise. |
| [Quotes to Scrape, version JavaScript](https://quotes.toscrape.com/js/) | anglais | site d'entraînement | libre | S'entraîner sur une page rendue par JavaScript. |

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

- Les versions des outils et les conditions d'utilisation des services cités, au moment de rédiger le cours.
