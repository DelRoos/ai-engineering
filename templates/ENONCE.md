---
id: "projet-N"
titre: "Projet N — Titre (repris du programme)"
objectifs: [P1, P2, P3]
difficulte: 3
duree_estimee: "N semaines (environ N × 9 h de pratique)"
type: projet
statut: brouillon
version: 1
mise_a_jour: 2026-11-24
---

<!-- CONSIGNE : énoncé d'un projet d'étape (dossier <etape>/projet/). Il remplace la fiche à l'étape 1 du circuit, et la GRILLE.md (étape 6) est obligatoire. Reprends fidèlement les livrables et critères du programme (docs/programme.md). Supprime tous les commentaires CONSIGNE. -->

# Projet N — Titre

## En une phrase

<!-- CONSIGNE : ce que l'apprenant va construire et pour qui. -->

…

## Le problème

<!-- CONSIGNE : la situation réelle, ancrée en Afrique francophone : qui a le problème, ce que ça coûte aujourd'hui, ce qui changerait avec la solution. 150 à 300 mots. -->

…

## Ce que tu vas prouver

<!-- CONSIGNE : objectifs du projet, identifiants P1, P2… Verbes d'action observables. -->

| Id | Compétence démontrée | Vérifiée par |
| --- | --- | --- |
| P1 | … | tests (`tests/test_…`) |
| P2 | … | contrôles de qualité |
| P3 | … | GRILLE.md (critère …) et examen oral |

## Livrables

<!-- CONSIGNE : liste exacte et vérifiable. Chaque livrable a un emplacement dans le dépôt de l'apprenant. -->

| Livrable | Emplacement | Format |
| --- | --- | --- |
| Code source | `src/` | Python 3.11+ |
| README en <langue selon le palier> | `README.md` | Markdown |
| … | … | … |

## Exigences

### Fonctionnelles

<!-- CONSIGNE : ce que le système doit faire. Chaque exigence testable porte un identifiant (F1, F2…) repris dans le nom des tests. -->

- **F1** — …
- **F2** — …

### Ressources (PC d'entrée de gamme)

<!-- CONSIGNE : limites vérifiées par check.py. Rappel : 8 Go de RAM, aucun GPU, 4 cœurs. -->

- Mémoire maximale à l'exécution : … Go
- Temps maximal d'entraînement (s'il y en a un) : … sur un processeur 4 cœurs
- Temps de réponse maximal : …
- Téléchargements : … Mo au total

### Coûts

<!-- CONSIGNE : le mode gratuit est toujours le mode par défaut. -->

- **Mode gratuit (par défaut)** : …
- **Mode à bas coût (facultatif)** : … — budget maximum attendu : … (prix relevé en <mois année>)

### Point de contrôle sécurité et éthique

<!-- CONSIGNE : reprends la ligne de l'étape dans le tableau « Points de contrôle » du programme (étape 5), en exigences vérifiables. -->

- **S1** — …
- **S2** — …

## Code de départ

<!-- CONSIGNE : ce que contient starter/ et ce que l'apprenant ne doit pas modifier (par exemple : signatures utilisées par les tests). -->

…

## Étapes conseillées

<!-- CONSIGNE : un découpage en étapes avec une durée indicative, pour qu'un apprenant seul ne se perde pas. Chaque étape se termine par une vérification. -->

1. **Semaine 1 — …** : … Vérification : …
2. **Semaine 2 — …** : … Vérification : …

## Validation

Le projet est validé quand ces quatre étapes sont réussies, dans l'ordre :

1. **Tests fonctionnels** : `python outils/check.py <etape>/projet` — tous les tests passent.
2. **Contrôles de qualité** : lint (ruff), couverture de tests de …% au moins, aucun secret, documentation présente, limites de ressources respectées.
3. **Intégration continue** : ton dépôt GitHub affiche un badge GitHub Actions vert.
4. **Correction et examen oral par l'IA** : l'agent correcteur note ton projet avec `GRILLE.md` (14/20 au moins), puis te pose 5 à 10 questions sur ton code (70 % de bonnes réponses au moins). Mode d'emploi : `outils/correcteur-ia/`.

## Si tu bloques

- Relis les cours des modules … et leurs `faq.md`.
- Pose ta question à l'agent IA en lui donnant ton code et le message d'erreur complet.
- Cherche ou ouvre une discussion sur GitHub Discussions (entraide entre apprenants, facultative).

## Pour aller plus loin (facultatif)

- …
