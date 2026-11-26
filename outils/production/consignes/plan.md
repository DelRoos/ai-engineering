# Tâche : le plan d'une leçon

Tu ne rédiges **pas** encore la leçon. Tu décides de son contenu, en quelques lignes. Une
erreur de direction coûte une ligne ici, et une leçon entière plus tard.

<<contexte>>

## Matière disponible

Le dossier de recherche `<<dossier>>/sources.yaml` est la **seule** source de faits. Lis-le en
entier. S'il manque un fait indispensable, dis-le dans le journal (partie « Doutes ») au lieu
de l'inventer.

## Fichier à écrire : `<<dossier>>/plan.yaml`

```yaml
lecon: "<<module_id>>/<<notion_id>>"
objectif: "Ce qu'Awa saura faire à la fin, avec un verbe d'action observable (écrire, calculer, choisir, expliquer…)"
probleme_de_depart: "La situation concrète du fil rouge qui fait ressentir le besoin, en 1 ou 2 phrases"
idee_cle: "L'idée nouvelle, une seule, en 1 ou 2 phrases"
explication:
  - "Étape 1 du raisonnement"
  - "Étape 2…"
analogie: "Une analogie tirée de la vie quotidienne, ou « aucune »"
exemple:
  description: "Ce que montre l'exemple, tiré du fil rouge"
  langage: python          # python | bash | aucun
  executable: true         # le code tourne tel quel et sa sortie sera montrée
mini_exercice:
  consigne: "La petite tâche (2 à 10 minutes)"
  reponse: "La réponse attendue, brièvement"
pieges:
  - "Erreur fréquente que la leçon doit prévenir"
notions_prealables: []     # identifiants de notions DÉJÀ enseignées (liste fournie plus haut) ; rien d'autre
termes_nouveaux:           # 3 au plus, conformes à docs/glossaire.md
  - terme: "dataset"
    categorie: A           # A : reste en anglais ; B : mot transparent
faits_utilises: [f1, f2]   # identifiants des faits de sources.yaml
resume: "Ce que la leçon enseigne, en une phrase : il sera donné aux leçons suivantes"
```

## Liste de contrôle

- Une seule idée nouvelle. Si la notion en contient deux, dis-le dans le journal.
- Rien qui dépende d'une notion non enseignée (seule la liste « déjà enseigné » compte).
- Chaque fait de l'explication et de l'exemple vient de `faits_utilises`.
- L'exemple reprend le fil rouge du module et reste court (15 lignes de code de préférence).
- `journal.md` contient la partie « Plan » (décisions, écarté, doutes).
