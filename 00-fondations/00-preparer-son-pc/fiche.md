---
id: "0.0"
titre: "Préparer son PC"
parcours: "00-fondations"
promesse: "Installer tout ce qu'il faut pour suivre la formation sur ton PC, gratuitement, et vérifier que tout marche avant d'écrire ta première ligne de code."
question_saut: "Ton PC est déjà prêt ?"
qcm: false
prerequis: []
statut: brouillon
version: 1
mise_a_jour: 2026-11-25
---

# Fiche du module 0.0 — Préparer son PC

## Extrait du programme

- **Contenu** : Installer Python, Git et VS Code (avec WSL sous Windows), cloner le dépôt de la formation, vérifier que tout fonctionne
- **Exercice clé** : Vérifier son installation : chaque outil répond avec la version attendue et le dépôt est cloné

## Objectifs vérifiables

| Id | À la fin, l'apprenant sait… | Évalué par |
| --- | --- | --- |
| O1 | Vérifier que son PC a la mémoire, le disque et le système nécessaires. | exercice clé (ex01) |
| O2 | Ouvrir un terminal et y lancer une commande. | exercice clé (ex01) |
| O3 | Installer Python, Git et VS Code, avec WSL et Ubuntu sous Windows. | exercice clé (ex01) |
| O4 | Cloner le dépôt de la formation et installer ses outils dans un environnement virtuel. | exercice clé (ex01) |
| O5 | Lancer la vérification de son installation et lire son résultat. | exercice clé (ex01) |

## Chapitres

| Chapitre | Titre | Exercices |
| --- | --- | --- |
| 1 | Connaître ton PC et ton terminal | 0 |
| 2 | Installer tes outils | 0 |
| 3 | Récupérer la formation | 1 |

## Notions, dans l'ordre

| Chapitre | Id de la notion | Notion | Objectif |
| --- | --- | --- | --- |
| 1 | `pc-pret` | Vérifier que ton PC est prêt | O1 |
| 1 | `a-quoi-sert` | Python, Git, VS Code : à quoi sert chaque outil | O3 |
| 1 | `terminal` | Ouvrir un terminal et taper ta première commande | O2 |
| 2 | `wsl` | Sous Windows : installer WSL et Ubuntu | O3 |
| 2 | `installer-python` | Installer Python | O3 |
| 2 | `installer-git` | Installer Git et te présenter à lui | O3 |
| 2 | `installer-vscode` | Installer VS Code et ses extensions | O3 |
| 3 | `cloner-depot` | Cloner le dépôt de la formation | O4 |
| 3 | `installer-outils` | Installer les outils de la formation dans un environnement virtuel | O4 |
| 3 | `mettre-a-jour` | Mettre à jour la formation avec git pull | O4 |
| 3 | `hors-ligne` | Économiser tes données : tout télécharger une fois, travailler hors ligne | O4 |
| 3 | `verification` | Lancer la vérification finale | O5 |
| 3 | `depanner` | Quand une installation échoue : trouver de l'aide | O5 |

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
| forfait de données, hors ligne (offline) | A | `hors-ligne` |
| mise à jour (update), git pull | A | `mettre-a-jour` |

## Fil rouge et ancrage local

- **Situation** : Moussa, étudiant à Bamako, installe la formation sur un PC portable d'occasion de 8 Go, avec un forfait de données mobiles limité. Chaque téléchargement compte : tu sais à l'avance combien pèse chaque outil.
- **Personnages** : Moussa (Bamako), et Awa, la persona apprenante (AGENTS.md § 3), qui découvre le terminal.
- **Données utilisées** : aucune. Les tailles de téléchargement de chaque outil sont indiquées dans le cours.

## Exercices prévus

| Id | Titre | Objectif | Difficulté (1–3) | Livrable non testable ? |
| --- | --- | --- | --- | --- |
| 0.0-ex01 | Exercice clé : la vérification de ton installation (matériel, Python, Git, VS Code, dépôt, outils) | O1 à O5 | 3 | non |

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
