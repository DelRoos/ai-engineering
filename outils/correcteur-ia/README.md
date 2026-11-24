# Agent correcteur et examen oral

Ce dossier contiendra les consignes qui transforment un agent de code IA en correcteur de projet et en examinateur oral.

> **État** : vide pour l'instant. Ce fichier décrit ce qui est prévu.

## Rôle

1. **Correction** : l'agent lit le projet de l'apprenant avec la `GRILLE.md` du projet, donne une note sur 20 (validation à 14) et des conseils, en citant des fichiers et des lignes.
2. **Examen oral** : l'agent pose 5 à 10 questions sur le code rendu, une par une. Validation à 70 % de bonnes réponses. La langue suit le palier d'anglais de l'étape.

Le format du rapport est défini dans `templates/GRILLE.md`.

## Deux modes, documentés pour chaque projet

| Mode | Agent | Modèle | Coût |
| --- | --- | --- | --- |
| **Gratuit** (par défaut) | Agent de code open source (par exemple Aider) | Modèle local via Ollama | 0 €, plus lent et moins fin |
| **À bas coût** (facultatif) | Le même agent | API la moins chère du moment | Budget maximum indiqué dans chaque énoncé |

La liste des API recommandées et de leurs prix sera tenue ici, **datée**, et revue chaque trimestre.

## Contenu prévu

- `consignes-correction.md` : rôle, règles et déroulé commun à tous les projets (la grille de chaque projet complète ces consignes).
- `consignes-oral.md` : déroulé de l'examen oral, critères d'une réponse correcte, relances.
- `installation-gratuite.md` : installer l'agent et un modèle local sur 8 Go de RAM.
- `installation-api.md` : brancher l'agent sur une API à bas coût, protéger sa clé.
- `api-recommandees.md` : liste datée des API et de leurs prix.
