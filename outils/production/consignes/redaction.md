# Tâche : rédiger une leçon

<<contexte>>

## Matière disponible

- `<<dossier>>/plan.yaml` : ce que la leçon doit contenir. Suis-le.
- `<<dossier>>/sources.yaml` : les **seuls** faits que tu peux affirmer. Tu peux en ajouter un
  tiré d'une page déjà lue (dossier `<<dossier>>/pages/`), avec sa citation exacte. Il te
  manque un fait que ces pages ne donnent pas ? Ne l'écris pas : note-le dans le journal.
- `docs/guide-pedagogique.md` § 1.4 (le rythme d'une notion), § 3 (langue) ;
  `docs/format-contenu.md` § 3 à 5 (Markdown, composants, pièges MDX). Lis-les.

## Fichier à écrire : `<<dossier>>/lecon.mdx`

Une seule notion, sans front matter, exactement sous cette forme :

````mdx
<Notion id="<<notion_id>>" titre="<<notion_titre>>">

Explication : part du problème concret, puis l'idée, puis le terme technique en gras.
Chaque fait vérifiable porte son renvoi vers la source[^id-de-la-source].

<Exemple titre="…">

```python title="nom.py"
# code complet, qui tourne tel quel
```

```text
la sortie exacte de ce code
```

</Exemple>

<MiniExercice id="<<notion_id>>-1">

La consigne.

<Solution>

La correction.

</Solution>
</MiniExercice>

</Notion>

[^id-de-la-source]: Éditeur, [« Titre exact »](URL exacte de sources.yaml) (langue), consultée le <<date_longue>>.
````

## Règles de rédaction

- Tutoiement. Phrases de 20 mots au plus. Français simple (niveau B1).
- 300 à 800 mots. Une seule idée nouvelle. Explication, puis exemple, puis mini-exercice.
- Termes techniques selon `docs/glossaire.md` : « un **dataset** (en français : jeu de
  données) » pour un terme anglais ; « une **liste** (*list*) » pour un mot transparent.
- Prénoms, villes, prix (FCFA) et situations d'Afrique francophone, variés et réalistes.
- Code : Python 3.11+, PEP 8, noms en anglais<<regle_commentaires>>.
- **Le code doit tourner** : le pilote exécute chaque bloc `python` et compare sa sortie au
  bloc `text` qui le suit. Écris la sortie que tu attends ; si elle diffère, le rapport te
  donnera la vraie. Chaque bloc doit tourner **seul**, sans dépendre d'un bloc précédent. Si un
  bloc ne peut pas tourner seul (il lit un fichier, il demande une saisie), sa première ligne est
  `# ne pas exécuter : <raison>`. Une **erreur volontaire** (pour montrer un message d'erreur) n'est
  pas marquée ainsi : écris dans le bloc `text` suivant la dernière ligne du message
  (`NameError: name 'Dakar' is not defined`) ; le pilote l'exécute et vérifie cette ligne.
- **Sources** : chaque fait vérifiable a un renvoi `[^id]`, mais la leçon doit rester agréable
  à lire. Place le renvoi à la fin de la phrase ou du paragraphe qui s'appuie sur la source ;
  ne répète pas le même renvoi dans un même paragraphe ; pas de renvoi sur une consigne
  pédagogique, un exemple du fil rouge ou une phrase de liaison. En bas, une définition par
  source citée, avec un **lien Markdown** (jamais une URL nue, elle déborde sur un téléphone).
- **L'objectif d'abord** : la leçon doit permettre l'objectif de la fiche. Si une source
  parle d'un outil précis (par exemple la configuration minimale d'un éditeur), ne la confonds
  pas avec ce que la formation exige (section « La machine de l'apprenant » du contexte).
- Chaque terme technique est expliqué à sa première apparition, avec des mots qu'Awa connaît.
- Ne recopie pas les sources : reformule avec tes mots (12 mots consécutifs identiques à une
  source sont refusés). Une citation courte entre « » est permise si elle est utile.
- Pièges MDX : pas de `<` ni de `{` dans le texte hors du code, pas de commentaire `<!-- -->`,
  une ligne vide avant et après chaque balise de composant.

## Défauts que les relecteurs trouvent le plus souvent (relis ta leçon contre cette liste)

1. **Renvoi qui ne prouve pas la phrase** : la page citée parle d'autre chose (le système au
   lieu du processeur, un autre pays, un autre outil). Relis la citation du fait avant de poser
   le renvoi.
2. **Condition perdue** : la source dit « si… », « en général », « peut », « aux États-Unis »,
   « nécessaire » (et non « suffisant ») ; ta phrase doit garder cette nuance.
3. **Déduction présentée comme un fait** : ce que tu déduis s'écrit sans renvoi, comme une
   déduction, ou avec `TODO(vérifier)`.
4. **Doute caché** : un doute du journal sur une phrase de la leçon doit être dans la leçon
   (`TODO(vérifier)`). Un libellé vérifié pour une version (Windows 10) ne vaut pas pour une
   autre (Windows 11) sans preuve.
5. **Cas sans verdict** : pour chaque situation que la leçon envisage, la lectrice doit savoir
   quoi conclure et quoi faire (prête, pas prête, quelle leçon suivre). Aucune situation laissée
   sans réponse.
6. **Risque pour l'apprenant** : perte de fichiers, de licence, d'argent ou de forfait. Dis
   l'ordre sûr (sauvegarder d'abord, vérifier que la copie s'ouvre, puis seulement supprimer),
   et annonce chaque téléchargement avec sa taille, avec une connexion qui n'utilise pas son
   forfait.
7. **Jargon non défini** : chaque terme est défini **avant ou à** sa première apparition, pas
   après.
8. **Longueur** : 800 mots au plus (le pilote mesure, et c'est bloquant). Si l'objectif ne tient
   pas, ne compresse pas en style télégraphique : écris au journal qu'il faut couper la notion.

## Table des affirmations (obligatoire dans le journal)

Dans la partie « Rédaction » de `journal.md`, ajoute une table : chaque phrase de la leçon qui
affirme un fait vérifiable, avec l'identifiant du fait qui la prouve (`f12`), ou la mention
« règle de la formation ». Le renvoi `[^id]` de la phrase doit être la source de ce fait. Une
phrase sans fait ni règle doit être retirée, ou porter un `TODO(vérifier)`. Une règle de la
formation n'a pas de renvoi.

```markdown
| Phrase (début) | Fait ou règle |
| --- | --- |
| « Sous Windows, ouvre Paramètres avec… » | f27 |
| « Il faut 40 Go libres… » | règle de la formation |
```

## Après toi

Le pilote contrôle la leçon (format, MDX, rédaction, code exécuté, sources, copie) et analyse
ta trace. Ajoute la partie « Rédaction » à `journal.md` : tes décisions (structure, exemple,
analogie), ce que tu as écarté, tes doutes.
