# Tâche : trouver les sources d'une leçon

Tu ne rédiges **pas** la leçon, et tu ne cites encore rien. Tu choisis les pages web qui
contiennent les connaissances dont la leçon aura besoin. Le pilote lira ensuite ces pages et
t'en donnera le texte exact, pour une seconde tâche : l'extraction des faits.

<<contexte>>

## Ce que tu dois faire

1. Liste les questions auxquelles la leçon doit répondre pour qu'Awa sache vraiment *faire*
   la chose : le mécanisme (le pourquoi), la pratique (les vraies commandes ou le vrai code),
   les cas où ça échoue, les erreurs fréquentes, les versions actuelles.
2. Cherche avec `search_web`, en français **et** en anglais, plusieurs requêtes par question.
3. Choisis 3 à 12 pages (24 au plus avec les ajouts de l'extraction et de la relecture). Au moins une source primaire (documentation officielle, norme, loi,
   article scientifique, données publiques). Préfère la page la plus précise (la page de la
   documentation qui traite le sujet, pas l'accueil du site) et la version la plus récente.
4. Donne l'URL **exacte**, telle qu'elle apparaît dans les résultats. N'en devine aucune.

## Fichier à écrire : `<<dossier>>/candidats.yaml`

```yaml
lecon: "<<module_id>>/<<notion_id>>"
date_recherche: <<date>>
questions:
  - "Question à laquelle la leçon doit répondre"
recherches:
  - "requête exacte que tu as lancée"
candidats:
  - url: https://...
    type: documentation-officielle  # documentation-officielle | norme | loi | article-scientifique | donnees | livre | cours | blog-expert | presse | autre
    langue: anglais
    repond_a: [1, 3]                 # numéros des questions auxquelles la page répond
    pourquoi: "Ce que cette page apporte que les autres n'apportent pas"
```

## Liste de contrôle

- Chaque question a **au moins deux** pages candidates (`repond_a`) : une page peut être
  introuvable (404) ou illisible, et la question ne doit pas rester sans source.
- Les questions qui portent sur les règles de la formation (machine requise, outils retenus)
  n'ont pas besoin de page : ces règles viennent d'`AGENTS.md` et de la fiche. Ne les liste pas.
- Au moins une source primaire ; aucune page générée par une IA, aucun forum de réponses.
- `journal.md` contient la partie « Recherche » (décisions, écarté, doutes). Dans « Écarté »,
  note les pages vues puis rejetées, et pourquoi.

Le pilote lira les pages. S'il ne peut pas en lire assez, tu recevras un rapport pour en
proposer d'autres.
