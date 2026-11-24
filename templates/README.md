# Modèles

Copie ces modèles pour créer un nouveau fichier. Ne les modifie pas directement, sauf pour améliorer le modèle lui-même (dans ce cas, mets aussi à jour `docs/guide-pedagogique.md` ou `docs/format-contenu.md` si la règle change).

| Modèle | Copier vers | Étape du circuit (`AGENTS.md` § 9) |
| --- | --- | --- |
| `fiche.md` | `<etape>/<module>/fiche.md` | 1 — Fiche |
| `exercice/` (dossier entier) | `<etape>/<module>/exercices/NN-nom/` | 2 — Solution et tests, puis 4 — Exercices |
| `cours.mdx` | `<etape>/<module>/cours.mdx` ou `cours/NN-slug.mdx` | 3 — Cours |
| `qcm.yaml` | `<etape>/<module>/qcm.yaml` ou `qcm/NN-slug.yaml` | 5 — QCM |
| `qcm.schema.json` | (ne pas copier) schéma de validation des QCM | 5 — QCM |
| `GRILLE.md` | `<etape>/projet/GRILLE.md` ou dans un exercice clé | 6 — Grille |
| `ENONCE.md` | `<etape>/projet/ENONCE.md` | Projet d'étape |

Les commentaires de consigne des modèles commencent par `CONSIGNE`. Supprime-les tous dans le fichier final :

- dans un `.md` ou un `.yaml` : lignes `<!-- CONSIGNE … -->` ou `# CONSIGNE …` ;
- dans un `.mdx` : `{/* CONSIGNE … */}` (les commentaires HTML sont interdits en MDX).

## Le modèle d'exercice

`exercice/` est un exercice complet et fonctionnel (moyenne des ventes d'une commerçante). Il sert d'exemple de référence :

```bash
# Les tests échouent sur le starter (normal : c'est à l'apprenant de coder)
python -m pytest templates/exercice/tests

# Les tests passent sur la solution
CHECK_TARGET=solution python -m pytest templates/exercice/tests
```

Sous PowerShell : `$env:CHECK_TARGET = "solution"; python -m pytest templates/exercice/tests`.

Le fichier `tests/conftest.py` choisit le dossier testé grâce à la variable `CHECK_TARGET` (`starter` par défaut). `outils/check.py` utilisera ce même mécanisme.
