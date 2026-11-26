# Tâche : le cadre d'un chapitre

Toutes les leçons du chapitre sont écrites et relues. Tu écris maintenant ce qui les entoure :
objectifs, prérequis, « Pourquoi », erreurs fréquentes, résumé, vocabulaire. Les leçons seront
insérées automatiquement à la place du repère `{/* NOTIONS */}`.

<<contexte>>

## Matière disponible

Les leçons du chapitre, dans l'ordre (lis-les en entier) :
<<lecons>>

Leurs dossiers contiennent aussi `sources.yaml` (les seuls faits permis) et `journal.md`.
Modèle : `templates/cours.mdx`. Règles : `docs/guide-pedagogique.md` § 1 et § 4.

## Fichier à écrire : `<<dossier>>/cadre.mdx`

````mdx
---
id: "<<module_id>>"
chapitre: <<chapitre>>
titre: "<<chapitre_titre>>"
parcours: "<<parcours>>"
objectifs: [O1, O2]
prerequis: []
statut: brouillon
version: 1
mise_a_jour: <<date>>
licence: CC-BY-SA-4.0
---

<Objectifs>

À la fin de ce chapitre, tu sais :

- **O1** — …

</Objectifs>

<Prerequis>

- …

</Prerequis>

<Pourquoi>

Situation du fil rouge, 100 à 250 mots.

</Pourquoi>

{/* NOTIONS */}

## Erreurs fréquentes

<Erreur titre="Message ou symptôme exact">

**Symptôme** : …

**Cause** : …

**Correction** : …

</Erreur>

<Resume>

- 5 à 10 points

</Resume>

<Vocabulaire>

| Terme | Se dit aussi | Définition courte | Prononciation |
| --- | --- | --- | --- |

</Vocabulaire>
````

## Liste de contrôle

- Objectifs : ceux de la fiche que ce chapitre enseigne, avec leurs identifiants.
- 3 à 6 erreurs fréquentes **réelles**, avec le message exact. Un message d'erreur cité doit
  venir d'une source ou d'une exécution réelle, avec son renvoi `[^id]` si c'est une source.
- Le vocabulaire reprend tous les termes introduits par les leçons, conformes à `docs/glossaire.md`.
- Aucun fait nouveau sans source. Une source citée a sa définition en bas du cadre, avec un lien Markdown.
- Ajoute la partie « Chapitre » à `<<dossier>>/journal.md`.

Après toi, le pilote assemble le chapitre dans `<<cours>>`, le contrôle, exécute son code et
l'affiche dans la plateforme sur un téléphone et un ordinateur (tests visuels).
