---
id: "0.2"
titre: "Outils du développeur"
parcours: "00-fondations"
promesse: "Travailler comme un développeur : te déplacer dans le terminal, versionner ton code avec Git et le publier sur GitHub, avec un premier badge vert."
question_saut: "Tu utilises déjà Git et le terminal ?"
qcm: true
prerequis: ["0.1"]
statut: brouillon
version: 1
mise_a_jour: 2026-11-25
---

# Fiche du module 0.2 — Outils du développeur

## Extrait du programme

- **Contenu** : Terminal Linux, Git et GitHub (branches, pull requests), VS Code, Markdown
- **Exercice clé** : Forker le dépôt de la formation, y pousser ses exercices et obtenir un premier badge vert

## Objectifs vérifiables

| Id | À la fin, l'apprenant sait… | Évalué par |
| --- | --- | --- |
| O1 | Se déplacer dans les dossiers et gérer des fichiers au terminal. | ex01 à ex04, ex05 à ex08, qcm |
| O2 | Chercher dans des fichiers et enchaîner des commandes. | ex01 à ex04, ex05 à ex08, qcm |
| O3 | Utiliser VS Code et écrire un README en Markdown. | ex09 à ex10, qcm |
| O4 | Enregistrer l'historique d'un projet avec Git et revenir en arrière. | ex11 à ex13, qcm |
| O5 | Travailler sur une branche, fusionner et résoudre un conflit. | ex14 à ex16, qcm |
| O6 | Publier son code sur GitHub, ouvrir une pull request et lire le résultat de GitHub Actions. | ex17 à ex20, exercice clé (ex21), qcm |

## Chapitres

| Chapitre | Titre | Exercices |
| --- | --- | --- |
| 1 | Le terminal | 4 |
| 2 | Le système Linux | 4 |
| 3 | VS Code et Markdown | 2 |
| 4 | Git sur ton PC | 3 |
| 5 | Les branches | 3 |
| 6 | GitHub | 5 |

## Notions, dans l'ordre

| Chapitre | Id de la notion | Notion | Objectif |
| --- | --- | --- | --- |
| 1 | `se-reperer` | Se repérer : dossiers et chemins | O1 |
| 1 | `gerer-fichiers` | Créer, copier, déplacer et supprimer | O1 |
| 1 | `jokers` | Agir sur plusieurs fichiers : les jokers | O1 |
| 1 | `lire-chercher` | Lire un fichier et chercher dedans avec grep | O2 |
| 1 | `pipes` | Rediriger et enchaîner des commandes | O2 |
| 2 | `sudo-apt` | Droits, sudo et installation de logiciels | O1 |
| 2 | `path` | Variables d'environnement et PATH | O1 |
| 2 | `processus` | Voir et arrêter un programme : les processus | O1 |
| 2 | `nano` | Modifier un fichier sans quitter le terminal : nano | O1 |
| 2 | `archives` | Télécharger et décompresser : curl, zip et tar | O1 |
| 2 | `script-shell` | Ton premier script shell | O2 |
| 3 | `vscode` | VS Code au quotidien : projet, terminal intégré, raccourcis | O3 |
| 3 | `markdown` | Écrire en Markdown | O3 |
| 4 | `pourquoi-git` | Pourquoi versionner son code | O4 |
| 4 | `premier-commit` | Ton premier dépôt : init, add, commit | O4 |
| 4 | `historique` | Lire l'historique : status, log, diff | O4 |
| 4 | `annuler` | Revenir en arrière sans rien casser | O4 |
| 4 | `gitignore` | Ignorer des fichiers : .gitignore | O4 |
| 5 | `branches` | Travailler sur une branche | O5 |
| 5 | `conflits` | Fusionner et résoudre un conflit | O5 |
| 5 | `stash` | Mettre ton travail de côté : git stash | O5 |
| 5 | `messages-commit` | Écrire de bons messages de commit | O5 |
| 6 | `compte-github` | Créer et sécuriser ton compte GitHub | O6 |
| 6 | `github` | GitHub : clé SSH, push et pull | O6 |
| 6 | `fork-pr` | Fork et pull request | O6 |
| 6 | `revue-pr` | Relire une pull request sur GitHub | O6 |
| 6 | `upstream` | Garder ton fork à jour avec le dépôt d'origine | O6 |
| 6 | `issues` | Les issues : signaler et suivre un problème | O6 |
| 6 | `github-actions` | GitHub Actions et le badge vert | O6 |

## Vocabulaire du module

| Terme | Catégorie (A anglais / B transparent) | Notion où il apparaît |
| --- | --- | --- |
| chemin (path) | A | `se-reperer` |
| dossier courant | B | `se-reperer` |
| grep | A | `lire-chercher` |
| pipe | A | `pipes` |
| sudo, apt | A | `sudo-apt` |
| variable d'environnement, PATH | A | `path` |
| Markdown, README | A | `markdown` |
| commit, staging area | A | `premier-commit` |
| diff, log | A | `historique` |
| branche (branch), merge | A | `branches` |
| conflit (merge conflict) | A | `conflits` |
| remote, push, pull, clé SSH | A | `github` |
| fork, pull request, GitHub Actions, CI | A | `fork-pr` |

## Fil rouge et ancrage local

- **Situation** : Koffi et Aïcha, deux développeurs à Lomé, construisent ensemble le petit site d'une coopérative de karité de Kara. Le jour où Aïcha écrase par erreur le travail de Koffi, ils passent à Git.
- **Personnages** : Koffi et Aïcha (Lomé), la présidente de la coopérative, qui lit leur README.
- **Données utilisées** : un dossier de projet fourni (pages Markdown, petit script Python), moins de 100 Ko.

## Exercices prévus

| Id | Titre | Objectif | Difficulté (1–3) | Livrable non testable ? |
| --- | --- | --- | --- | --- |
| 0.2-ex01 à ex04 | Le terminal | O1, O2 | 1 | non |
| 0.2-ex05 à ex08 | Le système Linux | O1, O2 | 1 | non |
| 0.2-ex09 à ex10 | VS Code et Markdown | O3 | 2 | non |
| 0.2-ex11 à ex13 | Git sur ton PC | O4 | 2 | non |
| 0.2-ex14 à ex16 | Les branches | O5 | 2–3 | non |
| 0.2-ex17 à ex20 | GitHub | O6 | 2–3 | non |
| 0.2-ex21 | Exercice clé : forker le dépôt, y pousser ses exercices et obtenir un premier badge vert | O6 | 3 | non |

## Ressources matérielles

- **RAM maximale** : moins de 200 Mo en plus de VS Code.
- **Téléchargements** : aucun en dehors de la formation.
- **Temps de calcul le plus long** : le passage de GitHub Actions, quelques minutes, sur les serveurs de GitHub.
- **Dépendances nouvelles** : aucune.
- **API payante** : aucune. Un compte GitHub gratuit est nécessaire pour le chapitre 2.

## Point de contrôle sécurité et éthique

- Ne jamais pousser un secret (mot de passe, clé) sur GitHub : fichier `.gitignore` et vérification de `check.py`, vus dans la notion `github`.
- La clé SSH privée ne quitte jamais le PC.

## Ressources externes gratuites

| Ressource | Langue | Durée ou taille | Licence | Pourquoi |
| --- | --- | --- | --- | --- |
| [Pro Git, le livre](https://git-scm.com/book/fr/v2) | français | livre complet | CC BY-NC-SA 3.0 | Les chapitres 1 à 3 reprennent tout le module, en détail. |
| [The Missing Semester](https://missing.csail.mit.edu/) | anglais | 11 vidéos d'1 h | CC BY-NC-SA 4.0 | Le terminal et Git expliqués par des enseignants du MIT. |

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

- TODO(vérifier) : comment tester automatiquement les exercices de terminal et de Git (état d'un dossier, historique d'un dépôt local) sans accès réseau.
- TODO(vérifier) : l'exercice clé dépend de GitHub ; prévoir une vérification locale du badge (lecture de l'état du workflow) ou une capture.
- TODO(vérifier) : licences de Pro Git et de The Missing Semester.
- TODO(vérifier) : compléter le vocabulaire du module pour les notions ajoutées par l'audit du 25/11/2026 (vérifier chaque terme dans docs/glossaire.md).
