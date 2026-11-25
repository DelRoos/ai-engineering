---
id: "0.1"
titre: "Python pour l'ingénieur"
parcours: "00-fondations"
promesse: "Écrire des programmes Python propres, lisibles et testables. C'est la base de tout le reste du parcours."
question_saut: "Tu sais déjà coder en Python ?"
qcm: true
prerequis: ["0.0"]
statut: brouillon
version: 1
mise_a_jour: 2026-11-25
---

# Fiche du module 0.1 — Python pour l'ingénieur

## Extrait du programme

- **Contenu** : Types, fonctions, classes, modules, fichiers, exceptions, environnements virtuels, typage, style PEP 8
- **Exercice clé** : 60 exercices progressifs corrigés automatiquement

## Objectifs vérifiables

| Id | À la fin, l'apprenant sait… | Évalué par |
| --- | --- | --- |
| O1 | Écrire un script qui manipule des nombres, du texte et des valeurs saisies par l'utilisateur. | ex01 à ex05, ex06 à ex10, qcm |
| O2 | Contrôler un programme avec des conditions et des boucles. | ex11 à ex15, ex16 à ex20, ex21 à ex26, qcm |
| O3 | Choisir la bonne collection (liste, tuple, dictionnaire, ensemble) et la parcourir. | ex21 à ex26, ex27 à ex32, qcm |
| O4 | Découper un programme en fonctions typées et documentées. | ex33 à ex38, ex39 à ex42, qcm |
| O5 | Lire et écrire des fichiers texte et CSV, et gérer les erreurs avec des exceptions. | ex43 à ex46, ex47 à ex50, qcm |
| O6 | Représenter un problème avec des classes et organiser son code en modules. | ex51 à ex55, ex56 à ex60, qcm |
| O7 | Isoler un projet dans un environnement virtuel et écrire du code conforme à PEP 8. | ex56 à ex60, qcm |

## Chapitres

| Chapitre | Titre | Exercices |
| --- | --- | --- |
| 1 | Premiers pas | 5 |
| 2 | Nombres et texte | 5 |
| 3 | Décider | 5 |
| 4 | Répéter | 5 |
| 5 | Les listes | 6 |
| 6 | Tuples, dictionnaires et ensembles | 6 |
| 7 | Les fonctions | 6 |
| 8 | Aller plus loin avec les fonctions | 4 |
| 9 | Les fichiers | 4 |
| 10 | Les erreurs | 4 |
| 11 | Les classes | 5 |
| 12 | Modules, projet et outils | 5 |

## Notions, dans l'ordre

| Chapitre | Id de la notion | Notion | Objectif |
| --- | --- | --- | --- |
| 1 | `premier-programme` | Ton premier programme avec print | O1 |
| 1 | `mode-interactif` | Python comme calculatrice : le mode interactif | O1 |
| 1 | `variables` | Ranger une valeur : les variables | O1 |
| 1 | `commentaires` | Commenter ton code | O1 |
| 1 | `aide` | Chercher de l'aide : help() et la documentation officielle | O1 |
| 2 | `nombres` | Nombres entiers et nombres décimaux | O1 |
| 2 | `operateurs` | Division entière, reste et puissance : les opérateurs | O1 |
| 2 | `chaines` | Le texte : les chaînes de caractères | O1 |
| 2 | `methodes-chaines` | Les méthodes des chaînes : upper, split, replace | O1 |
| 2 | `f-strings` | Mettre en forme un affichage avec les f-strings | O1 |
| 2 | `input` | Demander une valeur et convertir son type | O1 |
| 3 | `booleens` | Vrai ou faux : booléens et comparaisons | O2 |
| 3 | `none` | Rien du tout : la valeur None | O2 |
| 3 | `if` | Prendre une décision avec if, elif et else | O2 |
| 3 | `and-or-not` | Combiner des conditions : and, or, not | O2 |
| 3 | `match` | Choisir parmi plusieurs cas avec match | O2 |
| 4 | `while` | Répéter tant que : la boucle while | O2 |
| 4 | `for` | Répéter avec for | O2 |
| 4 | `range` | Compter avec range | O2 |
| 4 | `break-continue` | Sortir d'une boucle : break et continue | O2 |
| 4 | `boucles-imbriquees` | Des boucles dans des boucles | O2 |
| 5 | `listes` | Ranger plusieurs valeurs : les listes | O2 |
| 5 | `slicing` | Découper une liste et une chaîne | O3 |
| 5 | `methodes-listes` | Ajouter et retirer des éléments : les méthodes de liste | O3 |
| 5 | `copie-listes` | Deux noms pour une même liste : copier sans surprise | O3 |
| 5 | `enumerate-zip` | Parcourir avec enumerate et zip | O3 |
| 5 | `trier` | Trier avec sorted et une clé | O3 |
| 5 | `comprehensions` | Construire une liste en une ligne : les compréhensions | O3 |
| 6 | `tuples` | Des valeurs qui ne changent pas : les tuples | O3 |
| 6 | `unpacking` | Déballer plusieurs valeurs d'un coup | O3 |
| 6 | `dictionnaires` | Associer des clés et des valeurs : les dictionnaires | O3 |
| 6 | `parcourir-dict` | Parcourir un dictionnaire | O3 |
| 6 | `comprehensions-dict` | Les compréhensions de dictionnaire et d'ensemble | O3 |
| 6 | `donnees-imbriquees` | Des données imbriquées : listes de dictionnaires | O3 |
| 6 | `ensembles` | Sans doublons : les ensembles | O3 |
| 7 | `pourquoi-fonctions` | Pourquoi écrire des fonctions | O4 |
| 7 | `def` | Définir une fonction et ses paramètres | O4 |
| 7 | `return` | Renvoyer un résultat avec return | O4 |
| 7 | `arguments` | Valeurs par défaut et arguments nommés | O4 |
| 7 | `portee` | La portée des variables | O4 |
| 7 | `decouper` | Découper un problème en petites fonctions | O4 |
| 8 | `args-kwargs` | Un nombre variable d'arguments : *args et **kwargs | O4 |
| 8 | `lambda` | Les fonctions anonymes : lambda | O4 |
| 8 | `fonction-argument` | Passer une fonction à une autre fonction | O4 |
| 8 | `decorateurs` | Les décorateurs : comprendre le @ devant une fonction | O4 |
| 8 | `generateurs` | Produire des valeurs une à une : les générateurs et yield | O4 |
| 8 | `annotations` | Annoter les types | O4 |
| 8 | `docstrings` | Documenter avec une docstring | O4 |
| 9 | `lire-fichier` | Lire un fichier texte | O5 |
| 9 | `with` | Ouvrir proprement avec with | O5 |
| 9 | `encodage` | Les accents dans les fichiers : l'encodage UTF-8 | O5 |
| 9 | `ecrire-fichier` | Écrire dans un fichier | O5 |
| 9 | `pathlib` | Désigner un fichier avec pathlib | O5 |
| 9 | `csv` | Lire et écrire un fichier CSV | O5 |
| 10 | `lire-erreur` | Quand ça plante : lire un message d'erreur | O5 |
| 10 | `try-except` | Attraper une erreur avec try et except | O5 |
| 10 | `else-finally` | Les blocs else et finally | O5 |
| 10 | `raise` | Lever ta propre exception | O5 |
| 10 | `exceptions-perso` | Créer tes propres exceptions | O5 |
| 11 | `classes` | Créer une classe et ses objets | O6 |
| 11 | `methodes` | Attributs et méthodes | O6 |
| 11 | `methodes-speciales` | Les méthodes spéciales : __str__ et __eq__ | O6 |
| 11 | `heritage` | L'héritage | O6 |
| 11 | `composition` | Assembler des objets : la composition | O6 |
| 11 | `dataclasses` | Des classes de données en une ligne : dataclass | O6 |
| 12 | `import` | Importer un module de la bibliothèque standard | O6 |
| 12 | `bibliotheque-standard` | La bibliothèque standard : math, random, datetime | O6 |
| 12 | `plusieurs-fichiers` | Découper ton code en plusieurs fichiers | O6 |
| 12 | `main` | Lancer un script : if __name__ == "__main__" | O6 |
| 12 | `argparse` | Lire les arguments de la ligne de commande | O7 |
| 12 | `venv-pip` | Environnement virtuel et pip | O7 |
| 12 | `requirements` | Noter ses dépendances : requirements.txt | O7 |
| 12 | `pep8-ruff` | Le style PEP 8, vérifié par ruff | O7 |

## Vocabulaire du module

| Terme | Catégorie (A anglais / B transparent) | Notion où il apparaît |
| --- | --- | --- |
| script, programme | B | `premier-programme` |
| variable | B | `variables` |
| int, float, str, bool | A | `nombres`, `chaines`, `booleens` |
| f-string | A | `f-strings` |
| boucle (loop) | A | `while` |
| liste, tuple, dictionnaire, ensemble (set) | A | chapitre 3 |
| slicing | A | `slicing` |
| compréhension de liste | B | `comprehensions` |
| fonction, paramètre, argument | B | `def`, `arguments` |
| return | A | `return` |
| type hint | A | `annotations` |
| docstring | A | `docstrings` |
| CSV | A | `csv` |
| exception, traceback | A | `lire-erreur` |
| classe, objet, méthode, attribut | B | `classes`, `methodes` |
| dataclass | A | `dataclasses` |
| module, package, import | A | `import` |
| pip, venv | A | `venv-pip` |
| PEP 8, linter | A | `pep8-ruff` |
| help(), documentation | B | `aide` |
| opérateur, modulo | B | `operateurs` |
| None | A | `none` |
| match, case | A | `match` |
| break, continue | A | `break-continue` |
| enumerate, zip | A | `enumerate-zip` |
| copie superficielle (shallow copy) | A | `copie-listes` |
| clé de tri (key) | A | `trier` |
| unpacking | A | `unpacking` |
| *args, **kwargs | A | `args-kwargs` |
| lambda | A | `lambda` |
| décorateur (decorator) | A | `decorateurs` |
| générateur (generator), yield | A | `generateurs` |
| encodage, UTF-8 | A | `encodage` |
| héritage (inheritance) | A | `heritage` |
| composition | B | `composition` |
| argparse, argument de ligne de commande | A | `argparse` |
| requirements.txt, dépendance | A | `requirements` |

## Fil rouge et ancrage local

- **Situation** : Fatou vend des beignets au marché de Sandaga, à Dakar. Tout au long du module, tu écris les programmes qui l'aident à suivre ses ventes, ses stocks et ses prix.
- **Personnages** : Fatou (vendeuse), son neveu Ibrahima qui tient le cahier des comptes.
- **Données utilisées** : un petit fichier CSV de ventes fictives sur un mois (prix en francs CFA), créé pour le cours, moins de 10 Ko.

## Exercices prévus

| Id | Titre | Objectif | Difficulté (1–3) | Livrable non testable ? |
| --- | --- | --- | --- | --- |
| 0.1-ex01 à ex05 | Premiers pas | O1 | 1 | non |
| 0.1-ex06 à ex10 | Nombres et texte | O1 | 1 | non |
| 0.1-ex11 à ex15 | Décider | O2 | 1 | non |
| 0.1-ex16 à ex20 | Répéter | O2 | 1 | non |
| 0.1-ex21 à ex26 | Les listes | O2, O3 | 2 | non |
| 0.1-ex27 à ex32 | Tuples, dictionnaires et ensembles | O3 | 2 | non |
| 0.1-ex33 à ex38 | Les fonctions | O4 | 2 | non |
| 0.1-ex39 à ex42 | Aller plus loin avec les fonctions | O4 | 2 | non |
| 0.1-ex43 à ex46 | Les fichiers | O5 | 2–3 | non |
| 0.1-ex47 à ex50 | Les erreurs | O5 | 2–3 | non |
| 0.1-ex51 à ex55 | Les classes | O6 | 2–3 | non |
| 0.1-ex56 à ex60 | Modules, projet et outils | O6, O7 | 2–3 | non |

Exercice clé : les 60 exercices, tous validés par `python outils/check.py`.

## Ressources matérielles

- **RAM maximale** : moins de 200 Mo.
- **Téléchargements** : aucun en dehors de la formation.
- **Temps de calcul le plus long** : moins d'une seconde par exercice.
- **Dépendances nouvelles** : aucune (bibliothèque standard uniquement ; ruff et pytest viennent du module 0.0).
- **API payante** : aucune.

## Point de contrôle sécurité et éthique

Sans objet. Une seule règle, rappelée dans la notion `input` : ne jamais utiliser `eval()` sur une saisie de l'utilisateur.

## Ressources externes gratuites

| Ressource | Langue | Durée ou taille | Licence | Pourquoi |
| --- | --- | --- | --- | --- |
| [Le tutoriel officiel de Python](https://docs.python.org/fr/3/tutorial/) | français | 10 h environ | PSF | La référence, traduite en français, pour revoir chaque notion. |

## Circuit

- [ ] 1. Fiche validée par le mainteneur — date :
- [ ] 2. Solution et tests (passent sur solution, échouent sur starter) — date :
- [ ] 3. Cours — date :
- [ ] 4. Exercices (énoncés, indices, starters) — date :
- [ ] 5. QCM (valide contre le schéma) — date :
- [ ] 6. Grille — sans objet
- [ ] 7. Relecture élève — date :
- [ ] 8. Relecture expert — date :

## Journal des relectures

| Date | Étape | Fichier et ligne | Problème | Correction |
| --- | --- | --- | --- | --- |
| | | | | |

## Points à vérifier

- TODO(vérifier) : version minimale de Python visée par les exemples (syntaxe des annotations `list[int]`, `X | None`).
