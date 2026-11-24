# Outils

Les outils en ligne de commande qui permettent d'apprendre seul : passer les QCM, valider les exercices et les projets, suivre sa progression. Ils tournent sur un PC d'entrée de gamme, sans connexion.

> **État** : aucun outil n'est encore codé. Ce fichier décrit leur rôle prévu ; il sert de cahier des charges.

## Outils prévus

| Outil | Commande | Rôle |
| --- | --- | --- |
| `qcm.py` | `python outils/qcm.py <module>` | Fait passer le QCM d'un module dans le terminal. Tire `tirage` questions au hasard, mélange les choix, affiche l'explication de chaque réponse, valide à 80 %. Enregistre le résultat. |
| `check.py` | `python outils/check.py <exercice, module ou projet>` | Valide un exercice, tous les exercices d'un module (chemin du module, ex. `00-fondations/01-python`) ou un projet : tests pytest, lint ruff, couverture minimale, absence de secrets, présence de la documentation, limites de temps et de mémoire. Affiche un résultat clair en français. |
| `progression.py` | `python outils/progression.py` | Affiche les modules faits, les suivants et le temps estimé restant. Génère la page de portfolio à la fin du parcours. |
| `correcteur-ia/` | (voir son README) | Consignes de l'agent correcteur et de l'examen oral, avec un modèle local (gratuit) ou une API à bas coût. |

## Exigences communes

- Python 3.11+, uniquement la bibliothèque standard plus des dépendances légères et épinglées (PyYAML, pytest, ruff, jsonschema).
- Fonctionnent sous Linux, Windows (WSL et PowerShell) et macOS.
- Messages en français simple. En cas d'échec, l'outil dit quoi faire ensuite.
- Aucun accès réseau nécessaire.
- Les résultats sont enregistrés dans un fichier du dépôt de l'apprenant (par exemple `progression.json`), pour rester entre ses mains et survivre à une pause.

## Conventions déjà fixées

- `check.py` choisit le code testé avec la variable `CHECK_TARGET` (`starter` par défaut, `solution` en CI), comme dans `templates/exercice/tests/conftest.py`. Il lance chaque exercice dans un processus pytest séparé, car tous les exercices utilisent le même nom de module (`exercice`).
- `qcm.py` valide chaque `qcm.yaml` contre `templates/qcm.schema.json`, puis vérifie les règles hors schéma (banque d'au moins 2 fois le tirage, chaque objectif couvert).
- Validation du contenu (MDX, front matter, images) : voir `docs/format-contenu.md` § 8.
