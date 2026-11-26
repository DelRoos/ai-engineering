# Tâche : le QCM d'un chapitre

<<contexte>>

## Matière disponible

Les leçons du chapitre (lis-les en entier) : <<lecons>>
Format : `templates/qcm.yaml` et `templates/qcm.schema.json`. Règles : `docs/guide-pedagogique.md` § 7.

## Fichier à écrire : `<<fichier_qcm>>`

- `module: "<<module_id>>"`, `chapitre: <<chapitre>>`, `tirage: 5`, `seuil: 0.8`.
- Une banque d'**au moins 12 questions**, au moins 2 par notion du chapitre.
- Identifiants `<<module_id>>-qNN`, à partir de `<<module_id>>-q<<premier_numero>>` (ils ne
  doivent pas reprendre ceux des autres chapitres).
- Chaque question : `objectif` et `notion` de la fiche, une mise en situation concrète du fil
  rouge, 4 choix. Elle teste la compréhension, pas la mémoire d'une phrase du cours.
- Les mauvaises réponses viennent d'**erreurs réelles et fréquentes** : plausibles pour
  quelqu'un qui a mal compris.
- Chaque choix a une explication qui commence par « Juste. » ou « Faux. », puis dit pourquoi.
- Varie la place de la bonne réponse et sa longueur : elle ne doit pas être souvent la plus longue.
- Aucun fait absent des leçons.

## Après toi

Le pilote valide le fichier (`python outils/qcm.py <<fichier_qcm>> --valider`). Ajoute la partie « QCM chapitre <<chapitre>> » à `<<journal>>`.
