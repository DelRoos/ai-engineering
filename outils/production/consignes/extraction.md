# Tâche : extraire les faits des sources

Le pilote a lu les pages que tu avais choisies. Leur **texte exact** est dans des fichiers.
Tu lis ces fichiers et tu en extrais les faits dont la leçon a besoin, chacun avec la phrase
qui le prouve. Tu ne rédiges **pas** la leçon.

<<contexte>>

## Matière disponible

- `<<dossier>>/candidats.yaml` : tes questions et tes pages candidates.
- `<<dossier>>/pages.yaml` : pour chaque URL, le fichier qui contient son texte exact, ou
  l'erreur si la page n'a pas pu être lue.
- Les pages lues :
<<pages>>

Lis chaque page utile **dans son fichier** (par morceaux si elle est longue). Seul ce texte
compte : ni ta mémoire, ni le résumé de la recherche web.

## Fichier à écrire : `<<dossier>>/sources.yaml`

```yaml
lecon: "<<module_id>>/<<notion_id>>"
date_recherche: <<date>>
questions:
  - "Reprises de candidats.yaml, complétées si besoin"
sources:
  - id: python-doc-windows          # minuscules, chiffres, tirets ; sert de renvoi [^id] dans la leçon
    url: https://...                # l'URL exacte de pages.yaml
    titre: "Titre exact de la page"
    editeur: "Organisation ou auteur"
    type: documentation-officielle  # documentation-officielle | norme | loi | article-scientifique | donnees | livre | cours | blog-expert | presse | autre
    langue: anglais
    date_publication: "2026-10-01"  # si la page l'indique, sinon "inconnue"
    date_consultation: <<date>>
    licence: "Licence de la page, ou « tous droits réservés », ou « inconnue »"
faits:
  - id: f1
    affirmation: "Le fait, reformulé en une phrase simple en français."
    source: python-doc-windows
    repond_a: [1]                   # numéros des questions
    citation: "La phrase exacte du fichier de la page, recopiée sans rien changer (15 à 600 caractères)."
questions_sans_source: []           # numéros des questions qu'aucune page lue ne couvre
```

## Une question sans source ?

Ne la laisse pas tomber. Ajoute dans `candidats.yaml` de nouvelles pages candidates qui y
répondent (trouvées avec `search_web`), et indique son numéro dans `questions_sans_source`.
Le pilote lira ces nouvelles pages et te les donnera au tour suivant, dans son rapport.

## Liste de contrôle

- Chaque citation est recopiée **mot pour mot** depuis le fichier de la page : le contrôle la
  cherche dans ce texte et refuse toute citation reformulée.
- Ne liste que des sources de `pages.yaml` qui ont été lues, et que tu as ouvertes.
- Au moins un fait par question ; une question sans réponse dans les pages va dans le journal
  (partie « Doutes »), avec ce qu'il faudrait chercher.
- Si deux pages se contredisent, garde les deux faits et explique la contradiction dans le journal.
- `journal.md` contient la partie « Extraction » (décisions, écarté, doutes).
