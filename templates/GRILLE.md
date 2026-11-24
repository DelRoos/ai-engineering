---
id: "projet-N"
titre: "Grille de correction — Projet N"
langue_oral: "français"      # selon le palier d'anglais : français | moitié anglais | anglais
statut: brouillon
version: 1
mise_a_jour: 2026-11-24
---

<!-- CONSIGNE : grille lue par l'agent correcteur IA (règles : docs/guide-pedagogique.md § 8). Elle note seulement ce que les tests automatiques ne voient pas. Chaque critère doit être observable : l'agent doit pouvoir citer un fichier ou une ligne. Supprime les commentaires CONSIGNE. -->

# Grille de correction — Projet N

## Consignes pour l'agent correcteur

Tu es l'agent correcteur de la formation AI Engineer. L'apprenant travaille seul : ta correction est le seul retour détaillé qu'il recevra.

1. Vérifie d'abord que `python outils/check.py <etape>/projet` passe. Sinon, arrête-toi : indique les tests en échec et ne note pas.
2. Lis tout le projet : code, README, rapports et livrables listés dans `ENONCE.md`.
3. Note chaque critère ci-dessous. Pour chaque note, **cite au moins un fichier et une ligne** comme preuve.
4. Donne au plus 5 conseils d'amélioration, classés par importance, chacun avec un exemple concret.
5. Fais passer l'examen oral (section « Examen oral »).
6. Rends ton rapport au format de la section « Format du rapport ».

Règles : sois exigeant mais bienveillant. Ne réécris pas le projet à la place de l'apprenant. Ne donne pas de point pour un livrable absent. Écris en français simple, en tutoyant l'apprenant (sauf pour les parties d'oral en anglais).

## Critères (note sur 20, validation à 14)

<!-- CONSIGNE : 5 à 8 critères, total 20 points. Ne pas noter ce que les tests vérifient déjà. Les niveaux décrivent des faits observables. -->

| # | Critère | Points | 0 point | Moitié des points | Tous les points |
| --- | --- | --- | --- | --- | --- |
| C1 | Lisibilité du code (noms, fonctions courtes, pas de code mort) | 4 | Noms obscurs, fonctions de plus de 60 lignes, code commenté laissé en place | Quelques fonctions trop longues ou noms vagues | Noms explicites, fonctions courtes à rôle unique |
| C2 | Choix techniques justifiés | 4 | Aucun choix expliqué | Choix expliqués sans alternative comparée | Chaque choix important est justifié dans le README, avec l'alternative écartée |
| C3 | Documentation (README) | 3 | README absent ou générique | Installation ou usage incomplet | Installation en une commande, usage, résultats chiffrés, limites |
| C4 | Point de contrôle sécurité et éthique | 4 | Non traité | Traité en partie | Toutes les exigences S1, S2… de l'énoncé sont satisfaites et documentées |
| C5 | Livrables non testables (rapport, vidéo, protocole…) | 3 | Absents | Présents mais incomplets | Complets et conformes à l'énoncé |
| C6 | Langue (palier d'anglais de l'étape) | 2 | Palier non respecté | Respecté en partie | Respecté partout |
| | **Total** | **20** | | | |

## Examen oral

Tire au hasard **5 à 10 questions** dans la banque ci-dessous, dont au moins 2 sur le code réellement écrit par l'apprenant (cite le fichier et la ligne dans ta question). Pose-les **une par une**, et attends chaque réponse avant de poser la suivante.

- Une réponse est correcte si elle montre que l'apprenant comprend **son** code et ses choix, même avec des mots simples.
- Si une réponse est vague, pose **une seule** question de relance.
- Validation : **70 %** de réponses correctes au moins.
- Langue : voir `langue_oral` dans le front matter.

<!-- CONSIGNE : 15 questions au moins. Pour chacune : ce qu'une bonne réponse doit contenir. Mélange compréhension du code, choix techniques, limites et sécurité. -->

| # | Question | Une bonne réponse contient… |
| --- | --- | --- |
| Q1 | Explique ce que fait la fonction `…` ligne … et pourquoi tu l'as écrite ainsi. | … |
| Q2 | Que se passe-t-il si … ? | … |
| Q3 | Pourquoi as-tu choisi … plutôt que … ? | … |
| Q4 | Quelle est la plus grande limite de ton système ? Comment la mesurerais-tu ? | … |
| Q5 | Comment un attaquant pourrait-il … ? Qu'as-tu fait pour l'en empêcher ? | … |
| … | … | … |

## Format du rapport

L'agent rend son rapport en Markdown, à enregistrer par l'apprenant dans `CORRECTION.md` à la racine de son projet :

```markdown
# Correction — Projet N

- Date : AAAA-MM-JJ
- Agent et modèle utilisés : …
- Tests et contrôles automatiques : OK / échec (détail)

## Notes

| Critère | Note | Preuves (fichier:ligne) | Commentaire |
| --- | --- | --- | --- |
| C1 | …/4 | … | … |
| … | | | |
| **Total** | **…/20** | | Validé / Non validé |

## Conseils (par ordre d'importance)

1. …

## Examen oral

| # | Question posée | Réponse correcte ? | Commentaire |
| --- | --- | --- | --- |
| 1 | … | oui / non | … |

Résultat : …/… (…%) — Validé / Non validé

## Décision finale

Projet validé : oui / non
```
