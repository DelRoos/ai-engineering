---
id: "0.2"
titre: "Outils du développeur"
parcours: "00-fondations"
semaines: "7–8"
duree_estimee: "15 h par semaine"
promesse: "Travailler comme un développeur : te déplacer dans le terminal, versionner ton code avec Git et le publier sur GitHub, avec un premier badge vert."
question_saut: "Tu utilises déjà Git et le terminal ?"
qcm: true
prerequis: ["0.1"]
statut: brouillon
version: 1
mise_a_jour: 2026-11-24
---

# Fiche du module 0.2 — Outils du développeur

## Extrait du programme

- **Contenu** : Terminal Linux, Git et GitHub (branches, pull requests), VS Code, Markdown
- **Exercice clé** : Forker le dépôt de la formation, y pousser ses exercices et obtenir un premier badge vert

## Objectifs vérifiables

| Id | À la fin, l'apprenant sait… | Évalué par |
| --- | --- | --- |
| O1 | Se déplacer dans les dossiers et gérer des fichiers au terminal. | ex01 à ex03, qcm |
| O2 | Chercher dans des fichiers et enchaîner des commandes. | ex04, ex05, qcm |
| O3 | Utiliser VS Code et écrire un README en Markdown. | ex07, ex08, qcm |
| O4 | Enregistrer l'historique d'un projet avec Git et revenir en arrière. | ex09 à ex11, qcm |
| O5 | Travailler sur une branche, fusionner et résoudre un conflit. | ex12, ex13, qcm |
| O6 | Publier son code sur GitHub, ouvrir une pull request et lire le résultat de GitHub Actions. | ex14, ex15, exercice clé (ex16), qcm |

## Chapitres

| Chapitre | Titre | Semaine | Exercices |
| --- | --- | --- | --- |
| 1 | Le terminal, VS Code et Markdown | Semaine 7 | 8 |
| 2 | Git et GitHub | Semaine 8 | 8 |

## Notions, dans l'ordre

| Chapitre | Id de la notion | Notion | Durée | Objectif |
| --- | --- | --- | --- | --- |
| 1 | `se-reperer` | Se repérer : dossiers et chemins | 25 min | O1 |
| 1 | `gerer-fichiers` | Créer, copier, déplacer et supprimer | 25 min | O1 |
| 1 | `lire-chercher` | Lire un fichier et chercher dedans avec grep | 25 min | O2 |
| 1 | `pipes` | Rediriger et enchaîner des commandes | 25 min | O2 |
| 1 | `sudo-apt` | Droits, sudo et installation de logiciels | 20 min | O1 |
| 1 | `path` | Variables d'environnement et PATH | 20 min | O1 |
| 1 | `vscode` | VS Code au quotidien : projet, terminal intégré, raccourcis | 25 min | O3 |
| 1 | `markdown` | Écrire en Markdown | 20 min | O3 |
| 2 | `pourquoi-git` | Pourquoi versionner son code | 15 min | O4 |
| 2 | `premier-commit` | Ton premier dépôt : init, add, commit | 25 min | O4 |
| 2 | `historique` | Lire l'historique : status, log, diff | 20 min | O4 |
| 2 | `annuler` | Revenir en arrière sans rien casser | 20 min | O4 |
| 2 | `branches` | Travailler sur une branche | 25 min | O5 |
| 2 | `conflits` | Fusionner et résoudre un conflit | 30 min | O5 |
| 2 | `github` | GitHub : clé SSH, push et pull | 30 min | O6 |
| 2 | `fork-pr` | Fork, pull request et GitHub Actions | 30 min | O6 |

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

| Id | Titre | Objectif | Difficulté (1–3) | Durée | Livrable non testable ? |
| --- | --- | --- | --- | --- | --- |
| 0.2-ex01 à ex08 | Chapitre 1 : ranger le dossier du projet, chercher dans les fichiers, écrire le README | O1 à O3 | 1–2 | 15–30 min | non |
| 0.2-ex09 à ex15 | Chapitre 2 : historique, branches, conflit, dépôt distant | O4 à O6 | 2 | 20–40 min | non |
| 0.2-ex16 | Exercice clé : forker le dépôt, y pousser ses exercices et obtenir un premier badge vert | O6 | 3 | 1 h | non |

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
