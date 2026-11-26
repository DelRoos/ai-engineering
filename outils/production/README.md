# Production du contenu : Gemini écrit (via Antigravity), Claude contrôle

Ces outils servent aux auteurs, pas à l'apprenant. Principe et ordre de travail : `AGENTS.md` § 9 bis.

## Installer

```bash
pip install -r outils/production/requirements.txt   # playwright (pilote le Chrome installé), pypdf
# Antigravity installé et connecté : son outil en ligne de commande agy (~/.gemini/bin/agy) est utilisé
cd plateforme && npm ci                               # pour la compilation MDX et les tests visuels
```

Le dépôt de fabrication est attendu à côté du dépôt de la formation (`../ai-engineer-fabrication`),
ou à l'endroit indiqué par la variable `AI_ENGINEER_FABRICATION`.

## Fichiers

| Fichier | Rôle |
| --- | --- |
| `produire.py` | Pilote une tâche : consigne, appel à Gemini en session neuve (`agy -p`, sans aucune commande permise), lecture des pages, contrôles, corrections (3 essais), état, trace. `--moteur gemini-cli` reste possible. |
| `consignes/` | Ce que reçoit Gemini : `commun.md` (rôle, règles, journal) puis la tâche (`recherche`, `extraction`, `plan`, `redaction`, `chapitre`, `exercice`, `qcm`) et, en cas d'échec, `correction.md`. |
| `politique-gemini.toml` | Pour le moteur `gemini-cli` seulement : ce que Gemini a le droit de faire : lire et écrire des fichiers, chercher sur le web, lancer `lire_page.py`, les outils de contrôle, pytest et ruff. Tout le reste est refusé, y compris `web_fetch` (il résume au lieu de donner le texte exact). |
| `lire_page.py` | Lit une page (HTML ou PDF) et en garde le texte exact dans `ai-engineer-fabrication/pages/`. |
| `sources.py` | Contrôle `sources.yaml` et son usage : sources lues, citations retrouvées mot pour mot, renvois, plagiat, faits datés sans renvoi. |
| `traces.py` | Analyse le raisonnement de Gemini : pages lues, recherches, commandes refusées, doutes, appels à sa mémoire, contournements, journal, corrections. |
| `visuel.py` | Tests visuels : construit le site, ouvre chaque chapitre sur un téléphone et un ordinateur, vérifie l'affichage et garde des captures. |

## Déroulé d'un module

```bash
python outils/production/produire.py 0.0 suivante          # recherche → plan → rédaction de la leçon suivante
python outils/production/produire.py 0.0 etat              # où en est le module
# relecture de la leçon par Claude (sous-agents relecteur-eleve, relecteur-expert, analyste-raisonnement)
python outils/production/produire.py 0.0 relue <notion>    # la leçon a passé la relecture
python outils/production/produire.py 0.0 chapitre 1        # cadre, assemblage dans cours/, contrôles, tests visuels
python outils/production/produire.py 0.0 exercice 1        # solution, tests, starter, énoncé, indices
python outils/production/produire.py 0.0 qcm 1             # QCM du chapitre
```

`--simuler` écrit la consigne sans appeler Gemini ; `--modele` choisit le modèle ; `--essais` change le nombre d'essais.

## Ce qui est gardé pour chaque leçon

Dans `ai-engineer-fabrication/<étape>/<module>/<NN-chapitre>/<id-leçon>/` :
`candidats.yaml`, `pages.yaml` et `pages/` (texte exact des pages lues), `sources.yaml`, `plan.yaml`,
`journal.md`, `lecon.mdx`, `brouillons/vN.mdx`, `traces/<étape>-<essai>.{consigne.md, stream.jsonl,
conversation.db}` (conversation complète d'Antigravity), `audits/<étape>-<essai>.yaml`.

Limite connue : Antigravity enregistre le nombre de tokens de réflexion, mais pas leur texte.
L'analyse du raisonnement repose donc sur les actes (recherches, pages ouvertes, fichiers écrits,
actions refusées), le journal tenu par Gemini et ses réponses.
Chaque étape est enregistrée par un commit dans ce dépôt.
