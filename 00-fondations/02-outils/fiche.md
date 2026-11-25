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
| O1 | Se déplacer dans les dossiers et gérer des fichiers au terminal. | ex01 à ex05, ex10 à ex14, ex15 à ex18, qcm |
| O2 | Chercher dans des fichiers et enchaîner des commandes. | ex01 à ex05, ex06 à ex09, ex15 à ex18, qcm |
| O3 | Utiliser VS Code et écrire un README en Markdown. | ex19 à ex21, qcm |
| O4 | Enregistrer l'historique d'un projet avec Git et revenir en arrière. | ex22 à ex26, ex32 à ex34, qcm |
| O5 | Travailler sur une branche, fusionner et résoudre un conflit. | ex27 à ex31, qcm |
| O6 | Publier son code sur GitHub, ouvrir une pull request et lire le résultat de GitHub Actions. | ex35 à ex39, ex40 à ex42, exercice clé (ex43), qcm |

## Chapitres

| Chapitre | Titre | Exercices |
| --- | --- | --- |
| 1 | Le terminal | 5 |
| 2 | Traiter du texte au terminal | 4 |
| 3 | Le système Linux | 5 |
| 4 | Scripts shell | 4 |
| 5 | VS Code et Markdown | 3 |
| 6 | Git sur ton PC | 5 |
| 7 | Les branches | 5 |
| 8 | Enquêter avec Git | 3 |
| 9 | GitHub | 5 |
| 10 | Automatiser avec GitHub | 4 |

## Notions, dans l'ordre

| Chapitre | Id de la notion | Notion | Objectif |
| --- | --- | --- | --- |
| 1 | `se-reperer` | Se repérer : dossiers et chemins | O1 |
| 1 | `gerer-fichiers` | Créer, copier, déplacer et supprimer | O1 |
| 1 | `jokers` | Agir sur plusieurs fichiers : les jokers | O1 |
| 1 | `trouver-fichiers` | Retrouver un fichier : find | O1 |
| 1 | `lire-chercher` | Lire un fichier et chercher dedans avec grep | O2 |
| 1 | `redirections` | Envoyer la sortie dans un fichier : les redirections | O2 |
| 1 | `pipes` | Enchaîner des commandes avec | O2 |
| 2 | `compter-trier` | Compter et trier : wc, sort, uniq | O2 |
| 2 | `couper-colonnes` | Extraire des colonnes : cut | O2 |
| 2 | `sed` | Remplacer du texte : sed | O2 |
| 2 | `awk` | Calculer sur des colonnes : les bases d'awk | O2 |
| 2 | `tr-head-tail` | Transformer et parcourir : tr, head, tail | O2 |
| 2 | `jq` | Lire du JSON au terminal : jq | O2 |
| 3 | `droits` | Les droits sur les fichiers | O1 |
| 3 | `sudo-apt` | Installer des logiciels avec sudo et apt | O1 |
| 3 | `path` | Variables d'environnement et PATH | O1 |
| 3 | `alias-config` | Personnaliser ton terminal : alias et .bashrc | O1 |
| 3 | `processus` | Voir et arrêter un programme : les processus | O1 |
| 3 | `nano` | Modifier un fichier sans quitter le terminal : nano | O1 |
| 3 | `archives` | Télécharger et décompresser : curl, zip et tar | O1 |
| 4 | `script-shell` | Ton premier script shell | O2 |
| 4 | `variables-shell` | Variables et arguments dans un script | O2 |
| 4 | `conditions-shell` | Conditions et boucles en shell | O2 |
| 4 | `ssh-distant` | Travailler sur une machine distante : ssh | O1 |
| 4 | `fonctions-shell` | Des fonctions dans un script | O2 |
| 4 | `planifier-cron` | Lancer un script à heure fixe : cron | O1 |
| 5 | `vscode` | VS Code au quotidien : projet, terminal intégré, raccourcis | O3 |
| 5 | `vscode-extensions` | Les extensions et réglages utiles de VS Code | O3 |
| 5 | `vscode-git` | Git dans VS Code | O3 |
| 5 | `markdown` | Écrire en Markdown | O3 |
| 5 | `markdown-avance` | Markdown : tableaux, liens, images et code | O3 |
| 6 | `pourquoi-git` | Pourquoi versionner son code | O4 |
| 6 | `config-git` | Configurer Git | O4 |
| 6 | `premier-commit` | Ton premier dépôt : init, add, commit | O4 |
| 6 | `historique` | Lire l'historique : status, log, diff | O4 |
| 6 | `annuler` | Revenir en arrière sans rien casser | O4 |
| 6 | `reset` | Comprendre reset : soft, mixed, hard | O4 |
| 6 | `gitignore` | Ignorer des fichiers : .gitignore | O4 |
| 6 | `tags` | Marquer une version : les tags | O4 |
| 7 | `branches` | Travailler sur une branche | O5 |
| 7 | `fusionner` | Fusionner deux branches | O5 |
| 7 | `conflits` | Résoudre un conflit | O5 |
| 7 | `rebase` | Réécrire l'histoire proprement : rebase | O5 |
| 7 | `cherry-pick` | Récupérer un seul commit : cherry-pick | O5 |
| 7 | `stash` | Mettre ton travail de côté : git stash | O5 |
| 7 | `messages-commit` | Écrire de bons messages de commit | O5 |
| 7 | `workflows-branches` | Les façons de travailler avec des branches | O5 |
| 8 | `blame` | Qui a écrit cette ligne ? git blame | O4 |
| 8 | `bisect` | Trouver le commit qui a tout cassé : git bisect | O4 |
| 8 | `reflog` | Récupérer un travail perdu : reflog | O4 |
| 8 | `git-log-avance` | Fouiller l'historique : log, show et les filtres | O4 |
| 8 | `git-grep` | Chercher dans tout un dépôt : git grep | O4 |
| 9 | `compte-github` | Créer et sécuriser ton compte GitHub | O6 |
| 9 | `cle-ssh` | Se connecter à GitHub avec une clé SSH | O6 |
| 9 | `github` | Envoyer et récupérer ton travail : push et pull | O6 |
| 9 | `branches-distantes` | Les branches distantes | O6 |
| 9 | `fork-pr` | Fork et pull request | O6 |
| 9 | `revue-pr` | Relire une pull request sur GitHub | O6 |
| 9 | `upstream` | Garder ton fork à jour avec le dépôt d'origine | O6 |
| 9 | `issues` | Les issues : signaler et suivre un problème | O6 |
| 10 | `github-actions` | GitHub Actions et le badge vert | O6 |
| 10 | `github-pages` | Publier un site gratuit : GitHub Pages | O6 |
| 10 | `proteger-depot` | Protéger ton dépôt : branche protégée et secrets | O6 |
| 10 | `workflow-tests` | Lancer tes tests à chaque push avec GitHub Actions | O6 |
| 10 | `dependabot` | Tenir ses dépendances à jour : Dependabot | O6 |

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
| joker (wildcard) | A | `jokers` |
| redirection, sortie standard (stdout) | A | `redirections` |
| droits (permissions), chmod | A | `droits` |
| processus, PID | A | `processus` |
| nano, éditeur | A | `nano` |
| archive, curl | A | `archives` |
| script shell, bash | A | `script-shell` |
| .gitignore | A | `gitignore` |
| merge, fusion | A | `fusionner` |
| stash | A | `stash` |
| message de commit | B | `messages-commit` |
| authentification à deux facteurs (2FA) | A | `compte-github` |
| clé SSH | A | `cle-ssh` |
| revue de code (code review) | A | `revue-pr` |
| upstream | A | `upstream` |
| issue | A | `issues` |
| workflow, badge | A | `github-actions` |

## Fil rouge et ancrage local

- **Situation** : Koffi et Aïcha, deux développeurs à Lomé, construisent ensemble le petit site d'une coopérative de karité de Kara. Le jour où Aïcha écrase par erreur le travail de Koffi, ils passent à Git.
- **Personnages** : Koffi et Aïcha (Lomé), la présidente de la coopérative, qui lit leur README.
- **Données utilisées** : un dossier de projet fourni (pages Markdown, petit script Python), moins de 100 Ko.

## Exercices prévus

| Id | Titre | Objectif | Difficulté (1–3) | Livrable non testable ? |
| --- | --- | --- | --- | --- |
| 0.2-ex01 à ex05 | Le terminal | O1, O2 | 1 | non |
| 0.2-ex06 à ex09 | Traiter du texte au terminal | O2 | 1 | non |
| 0.2-ex10 à ex14 | Le système Linux | O1 | 1 | non |
| 0.2-ex15 à ex18 | Scripts shell | O1, O2 | 2 | non |
| 0.2-ex19 à ex21 | VS Code et Markdown | O3 | 2 | non |
| 0.2-ex22 à ex26 | Git sur ton PC | O4 | 2 | non |
| 0.2-ex27 à ex31 | Les branches | O5 | 2–3 | non |
| 0.2-ex32 à ex34 | Enquêter avec Git | O4 | 2–3 | non |
| 0.2-ex35 à ex39 | GitHub | O6 | 2–3 | non |
| 0.2-ex40 à ex42 | Automatiser avec GitHub | O6 | 2–3 | non |
| 0.2-ex43 | Exercice clé : forker le dépôt, y pousser ses exercices et obtenir un premier badge vert | O6 | 3 | non |

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

| Ressource | Langue | Type | Licence ou accès | Pourquoi |
| --- | --- | --- | --- | --- |
| [Pro Git, le livre](https://git-scm.com/book/fr/v2) | français | livre en ligne | CC BY-NC-SA 3.0 | Toute la théorie et la pratique de Git. |
| [Learn Git Branching](https://learngitbranching.js.org/?locale=fr_FR) | français | exercices interactifs | MIT | Comprendre les branches en jouant. |
| [The Linux Command Line](https://linuxcommand.org/tlcl.php) | anglais | livre en PDF | CC BY-NC-ND | Le livre de référence sur le terminal Linux. |
| [The Missing Semester](https://missing.csail.mit.edu/) | anglais | cours en vidéo | CC BY-NC-SA 4.0 | Le terminal, les scripts, Git et les outils du quotidien, par le MIT. |
| [GitHub Skills](https://skills.github.com/) | anglais | cours interactifs | gratuit | Des exercices guidés directement sur GitHub. |
| [Écrire sur GitHub (Markdown)](https://docs.github.com/fr/get-started/writing-on-github) | français | documentation | CC BY 4.0 | La syntaxe Markdown de GitHub. |

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
- TODO(vérifier) : compléter le vocabulaire des notions ajoutées par la seconde passe d'audit (25/11/2026), en vérifiant chaque terme dans docs/glossaire.md.
