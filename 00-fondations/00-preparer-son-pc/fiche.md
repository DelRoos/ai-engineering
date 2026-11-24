---
id: "0.0"
titre: "Préparer son PC"
parcours: "00-fondations"
semaines: "avant la semaine 1"
duree_estimee: "3 h, en une ou deux séances"
promesse: "Installer tout ce qu'il faut pour suivre la formation sur ton PC, gratuitement, et vérifier que tout marche avant d'écrire ta première ligne de code."
question_saut: "Ton PC est déjà prêt ?"
qcm: false
prerequis: []
statut: brouillon
version: 1
mise_a_jour: 2026-11-24
---

# Fiche du module 0.0 — Préparer son PC

## Extrait du programme

- **Contenu** : Installer Python, Git et VS Code (avec WSL sous Windows), cloner le dépôt de la formation, vérifier que tout fonctionne
- **Exercice clé** : Vérifier son installation : chaque outil répond avec la version attendue et le dépôt est cloné

## Objectifs vérifiables

| Id | À la fin, l'apprenant sait… | Évalué par |
| --- | --- | --- |
| O1 | Vérifier que son PC a la mémoire, le disque et le système nécessaires. | 0.0-ex01 (étape « matériel ») |
| O2 | Ouvrir un terminal et y lancer une commande. | 0.0-ex01 (toutes les étapes se lancent au terminal) |
| O3 | Installer Python, Git et VS Code, avec WSL et Ubuntu sous Windows. | 0.0-ex01 (versions attendues) |
| O4 | Cloner le dépôt de la formation et installer ses outils dans un environnement virtuel. | 0.0-ex01 (dépôt et outils présents) |
| O5 | Lancer la vérification de son installation et lire son résultat. | 0.0-ex01 |

## Chapitres

| Chapitre | Titre | Semaine | Exercices |
| --- | --- | --- | --- |
| 1 | Ton poste de travail, prêt en une soirée | Avant la semaine 1 | 1 |

## Notions, dans l'ordre

| Chapitre | Id de la notion | Notion | Durée | Objectif |
| --- | --- | --- | --- | --- |
| 1 | `pc-pret` | Vérifier que ton PC est prêt | 15 min | O1 |
| 1 | `terminal` | Ouvrir un terminal et taper ta première commande | 20 min | O2 |
| 1 | `wsl` | Sous Windows : installer WSL et Ubuntu | 30 min | O3 |
| 1 | `installer-python` | Installer Python | 25 min | O3 |
| 1 | `installer-git` | Installer Git et te présenter à lui | 20 min | O3 |
| 1 | `installer-vscode` | Installer VS Code et ses extensions | 25 min | O3 |
| 1 | `cloner-depot` | Cloner le dépôt et installer les outils de la formation | 30 min | O4 |
| 1 | `verification` | Lancer la vérification finale | 15 min | O5 |

## Vocabulaire du module

| Terme | Catégorie (A anglais / B transparent) | Notion où il apparaît |
| --- | --- | --- |
| terminal | B | `terminal` |
| commande | B | `terminal` |
| WSL (Windows Subsystem for Linux) | A | `wsl` |
| distribution Linux | B | `wsl` |
| version | B | `installer-python` |
| Git | A | `installer-git` |
| VS Code, extension | A | `installer-vscode` |
| dépôt (repository) | A | `cloner-depot` |
| cloner (clone) | A | `cloner-depot` |
| environnement virtuel (venv) | A | `cloner-depot` |

## Fil rouge et ancrage local

- **Situation** : Moussa, étudiant à Bamako, installe la formation sur un PC portable d'occasion de 8 Go, avec un forfait de données mobiles limité. Chaque téléchargement compte : tu sais à l'avance combien pèse chaque outil.
- **Personnages** : Moussa (Bamako), et Awa, la persona apprenante (AGENTS.md § 3), qui découvre le terminal.
- **Données utilisées** : aucune. Les tailles de téléchargement de chaque outil sont indiquées dans le cours.

## Exercices prévus

| Id | Titre | Objectif | Difficulté (1–3) | Durée | Livrable non testable ? |
| --- | --- | --- | --- | --- | --- |
| 0.0-ex01 | Exercice clé : la vérification de ton installation (matériel, Python, Git, VS Code, dépôt, outils) | O1 à O5 | 1 | 15 min | non |

## Ressources matérielles

- **RAM maximale** : 8 Go conseillés sous Windows (WSL et VS Code ouverts ensemble) ; 4 Go suffisent sous Linux.
- **Téléchargements** : environ 1,5 Go sous Windows (WSL et Ubuntu compris), environ 400 Mo sous Linux ou macOS. TODO(vérifier) les tailles exactes au moment de la rédaction.
- **Temps de calcul le plus long** : l'installation de WSL et d'Ubuntu, 10 à 30 minutes selon la connexion.
- **Dépendances nouvelles** : Python, Git, VS Code, puis `requirements.txt` de la formation (pytest, ruff, PyYAML).
- **API payante** : aucune.

## Point de contrôle sécurité et éthique

- Télécharger chaque outil depuis son site officiel uniquement, jamais depuis un site miroir ou un lien reçu par message.
- Ne jamais copier une commande trouvée en ligne sans la comprendre, surtout avec `sudo`.

## Ressources externes gratuites

| Ressource | Langue | Durée ou taille | Licence | Pourquoi |
| --- | --- | --- | --- | --- |
| [Installer WSL (Microsoft Learn)](https://learn.microsoft.com/fr-fr/windows/wsl/install) | français | 10 min | documentation Microsoft | La procédure officielle, à jour, si une étape du cours bloque sous Windows. |
| [VS Code et WSL](https://code.visualstudio.com/docs/remote/wsl-tutorial) | anglais | 15 min | documentation Microsoft | Pas à pas illustré pour ouvrir un projet WSL dans VS Code. |

## Circuit

- [ ] 1. Fiche validée par le mainteneur — date :
- [ ] 2. Solution et tests (passent sur solution, échouent sur starter) — date :
- [ ] 3. Cours — date :
- [ ] 4. Exercices (énoncés, indices, starters) — date :
- [ ] 5. QCM — sans objet (module sans QCM : la vérification suffit)
- [ ] 6. Grille — sans objet
- [ ] 7. Relecture élève — date :
- [ ] 8. Relecture expert — date :

## Journal des relectures

| Date | Étape | Fichier et ligne | Problème | Correction |
| --- | --- | --- | --- | --- |
| | | | | |

## Points à vérifier

- TODO(vérifier) : version de Python à installer (la plus récente prise en charge par toutes les dépendances de la formation) et version fournie par la distribution Ubuntu de WSL.
- TODO(vérifier) : tailles de téléchargement de WSL, Ubuntu, Python, Git et VS Code.
- TODO(vérifier) : la vérification finale (`python outils/check.py 00-fondations/00-preparer-son-pc`) doit fonctionner sur Linux, WSL et macOS.
