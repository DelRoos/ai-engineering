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
- **Exercice clé** : 84 exercices progressifs corrigés automatiquement

## Objectifs vérifiables

| Id | À la fin, l'apprenant sait… | Évalué par |
| --- | --- | --- |
| O1 | Écrire un script qui manipule des nombres, du texte et des valeurs saisies par l'utilisateur. | ex01 à ex05, ex06 à ex09, ex10 à ex14, qcm |
| O2 | Contrôler un programme avec des conditions et des boucles. | ex15 à ex19, ex20 à ex24, qcm |
| O3 | Choisir la bonne collection (liste, tuple, dictionnaire, ensemble) et la parcourir. | ex25 à ex29, ex30 à ex34, ex35 à ex37, ex38 à ex41, qcm |
| O4 | Découper un programme en fonctions typées et documentées. | ex42 à ex46, ex47 à ex51, ex52 à ex54, qcm |
| O5 | Lire et écrire des fichiers texte et CSV, et gérer les erreurs avec des exceptions. | ex55 à ex59, ex60 à ex64, qcm |
| O6 | Représenter un problème avec des classes et organiser son code en modules. | ex38 à ex41, ex65 à ex69, ex70 à ex73, ex74 à ex76, ex77 à ex80, qcm |
| O7 | Isoler un projet dans un environnement virtuel et écrire du code conforme à PEP 8. | ex81 à ex84, qcm |

## Chapitres

| Chapitre | Titre | Exercices |
| --- | --- | --- |
| 1 | Premiers pas | 5 |
| 2 | Les nombres | 4 |
| 3 | Le texte | 5 |
| 4 | Décider | 5 |
| 5 | Répéter | 5 |
| 6 | Les listes | 5 |
| 7 | Tuples, dictionnaires et ensembles | 5 |
| 8 | Les compréhensions | 3 |
| 9 | Des collections bien outillées | 4 |
| 10 | Les fonctions | 5 |
| 11 | Aller plus loin avec les fonctions | 5 |
| 12 | Itérateurs et générateurs | 3 |
| 13 | Les fichiers | 5 |
| 14 | Les erreurs | 5 |
| 15 | Les classes | 5 |
| 16 | Concevoir avec des objets | 4 |
| 17 | Modules et paquets | 3 |
| 18 | La bibliothèque standard | 4 |
| 19 | Un vrai projet Python | 4 |

## Notions, dans l'ordre

| Chapitre | Id de la notion | Notion | Objectif |
| --- | --- | --- | --- |
| 1 | `premier-programme` | Ton premier programme avec print | O1 |
| 1 | `executer-script` | Écrire un fichier .py et le lancer | O1 |
| 1 | `mode-interactif` | Python comme calculatrice : le mode interactif | O1 |
| 1 | `variables` | Ranger une valeur : les variables | O1 |
| 1 | `type-isinstance` | Connaître le type d'une valeur : type et isinstance | O1 |
| 1 | `commentaires` | Commenter ton code | O1 |
| 1 | `erreurs-debutant` | Tes premières erreurs : SyntaxError et NameError | O1 |
| 1 | `aide` | Chercher de l'aide : help() et la documentation officielle | O1 |
| 2 | `nombres` | Nombres entiers et nombres décimaux | O1 |
| 2 | `operateurs` | Division entière, reste et puissance : les opérateurs | O1 |
| 2 | `priorite-operateurs` | L'ordre des calculs et les parenthèses | O1 |
| 2 | `flottants` | Pourquoi 0,1 + 0,2 ne donne pas 0,3 | O1 |
| 2 | `arrondir` | Arrondir et valeur absolue : round et abs | O1 |
| 2 | `conversions` | Passer d'un type à l'autre : int, float, str | O1 |
| 3 | `chaines` | Le texte : les chaînes de caractères | O1 |
| 3 | `indices-chaines` | Lire un caractère : les indices et la longueur | O1 |
| 3 | `caracteres-speciaux` | Caractères spéciaux et chaînes sur plusieurs lignes | O1 |
| 3 | `methodes-chaines` | Les méthodes des chaînes : upper, split, replace | O1 |
| 3 | `chercher-texte` | Chercher dans un texte : in, find, count, startswith | O1 |
| 3 | `f-strings` | Mettre en forme un affichage avec les f-strings | O1 |
| 3 | `input` | Demander une valeur à l'utilisateur : input | O1 |
| 4 | `booleens` | Vrai ou faux : booléens et comparaisons | O2 |
| 4 | `none` | Rien du tout : la valeur None | O2 |
| 4 | `indentation` | Les blocs de code et l'indentation | O2 |
| 4 | `if` | Prendre une décision avec if, elif et else | O2 |
| 4 | `pass` | Un bloc qui ne fait rien : pass | O2 |
| 4 | `and-or-not` | Combiner des conditions : and, or, not | O2 |
| 4 | `in-appartenance` | Tester l'appartenance avec in | O2 |
| 4 | `match` | Choisir parmi plusieurs cas avec match | O2 |
| 5 | `while` | Répéter tant que : la boucle while | O2 |
| 5 | `for` | Répéter avec for | O2 |
| 5 | `range` | Compter avec range | O2 |
| 5 | `accumulateurs` | Compter et additionner dans une boucle : les accumulateurs | O2 |
| 5 | `break-continue` | Sortir d'une boucle : break et continue | O2 |
| 5 | `else-boucles` | Le else d'une boucle | O2 |
| 5 | `boucles-imbriquees` | Des boucles dans des boucles | O2 |
| 5 | `valider-saisie` | Redemander tant que la saisie est fausse | O2 |
| 6 | `listes` | Ranger plusieurs valeurs : les listes | O3 |
| 6 | `slicing` | Découper une liste et une chaîne | O3 |
| 6 | `methodes-listes` | Ajouter et retirer des éléments : les méthodes de liste | O3 |
| 6 | `resumer-liste` | Résumer une liste : len, min, max, sum | O3 |
| 6 | `copie-listes` | Deux noms pour une même liste : copier sans surprise | O3 |
| 6 | `enumerate-zip` | Parcourir avec enumerate et zip | O3 |
| 6 | `trier` | Trier avec sorted et une clé | O3 |
| 7 | `tuples` | Des valeurs qui ne changent pas : les tuples | O3 |
| 7 | `unpacking` | Déballer plusieurs valeurs d'un coup | O3 |
| 7 | `dictionnaires` | Associer des clés et des valeurs : les dictionnaires | O3 |
| 7 | `methodes-dict` | Lire sans erreur et mettre à jour : get, setdefault, update | O3 |
| 7 | `parcourir-dict` | Parcourir un dictionnaire | O3 |
| 7 | `donnees-imbriquees` | Des données imbriquées : listes de dictionnaires | O3 |
| 7 | `ensembles` | Sans doublons : les ensembles | O3 |
| 7 | `operations-ensembles` | Union, intersection, différence : opérer sur des ensembles | O3 |
| 8 | `comprehensions` | Construire une liste en une ligne : les compréhensions | O3 |
| 8 | `comprehensions-imbriquees` | Compréhensions imbriquées et filtres | O3 |
| 8 | `comprehensions-dict` | Les compréhensions de dictionnaire et d'ensemble | O3 |
| 8 | `any-all` | Tout ou au moins un : any et all | O3 |
| 8 | `comprehension-ou-boucle` | Compréhension ou boucle : choisir la plus lisible | O3 |
| 9 | `import` | Importer un module de la bibliothèque standard | O6 |
| 9 | `counter` | Compter avec Counter | O3 |
| 9 | `defaultdict` | Des dictionnaires avec une valeur par défaut : defaultdict | O3 |
| 9 | `namedtuple` | Des tuples avec des noms : namedtuple | O3 |
| 9 | `itertools` | Combiner et enchaîner : itertools | O3 |
| 9 | `comparer-sequences` | Comparer des listes et des tuples | O3 |
| 10 | `pourquoi-fonctions` | Pourquoi écrire des fonctions | O4 |
| 10 | `def` | Définir une fonction et ses paramètres | O4 |
| 10 | `return` | Renvoyer un résultat avec return | O4 |
| 10 | `arguments` | Valeurs par défaut et arguments nommés | O4 |
| 10 | `defaut-modifiable` | Le piège des valeurs par défaut modifiables | O4 |
| 10 | `portee` | La portée des variables | O4 |
| 10 | `fonctions-pures` | Des fonctions sans effet de bord | O4 |
| 10 | `decouper` | Découper un problème en petites fonctions | O4 |
| 11 | `args-kwargs` | Un nombre variable d'arguments : *args et **kwargs | O4 |
| 11 | `parametres-speciaux` | Des arguments seulement positionnels ou seulement nommés | O4 |
| 11 | `lambda` | Les fonctions anonymes : lambda | O4 |
| 11 | `fonction-argument` | Passer une fonction à une autre fonction | O4 |
| 11 | `decorateurs` | Les décorateurs : comprendre le @ devant une fonction | O4 |
| 11 | `annotations` | Annoter les types | O4 |
| 11 | `types-avances` | Annoter des listes, des dictionnaires et des valeurs optionnelles | O4 |
| 11 | `docstrings` | Documenter avec une docstring | O4 |
| 12 | `iterateurs` | Comprendre l'itération : iter et next | O4 |
| 12 | `generateurs` | Produire des valeurs une à une : les générateurs et yield | O4 |
| 12 | `expressions-generatrices` | Les expressions génératrices | O4 |
| 12 | `protocole-iteration` | Rendre tes objets parcourables : __iter__ et __next__ | O4 |
| 12 | `pipelines-generateurs` | Enchaîner des générateurs pour traiter de gros fichiers | O4 |
| 13 | `lire-fichier` | Lire un fichier texte | O5 |
| 13 | `with` | Ouvrir proprement avec with | O5 |
| 13 | `encodage` | Les accents dans les fichiers : l'encodage UTF-8 | O5 |
| 13 | `ecrire-fichier` | Écrire dans un fichier | O5 |
| 13 | `pathlib` | Désigner un fichier avec pathlib | O5 |
| 13 | `os-shutil` | Parcourir et organiser des dossiers : os et shutil | O5 |
| 13 | `csv` | Lire et écrire un fichier CSV | O5 |
| 14 | `lire-erreur` | Quand ça plante : lire un message d'erreur | O5 |
| 14 | `try-except` | Attraper une erreur avec try et except | O5 |
| 14 | `plusieurs-exceptions` | Attraper plusieurs sortes d'erreurs | O5 |
| 14 | `else-finally` | Les blocs else et finally | O5 |
| 14 | `raise` | Lever ta propre exception | O5 |
| 14 | `chainer-exceptions` | Enchaîner les erreurs : raise from | O5 |
| 14 | `exceptions-perso` | Créer tes propres exceptions | O5 |
| 14 | `assert` | Vérifier une hypothèse : assert | O5 |
| 15 | `classes` | Créer une classe et ses objets | O6 |
| 15 | `init-self` | Le constructeur __init__ et self | O6 |
| 15 | `methodes` | Attributs et méthodes | O6 |
| 15 | `variables-classe` | Variables de classe et variables d'instance | O6 |
| 15 | `methodes-classe-statiques` | Méthodes de classe et méthodes statiques | O6 |
| 15 | `prive` | Le privé en Python : la convention du _ | O6 |
| 15 | `methodes-speciales` | Les méthodes spéciales : __str__ et __eq__ | O6 |
| 15 | `dataclasses` | Des classes de données en une ligne : dataclass | O6 |
| 16 | `heritage` | L'héritage | O6 |
| 16 | `composition` | Assembler des objets : la composition | O6 |
| 16 | `property` | Des attributs calculés : property | O6 |
| 16 | `classes-abstraites` | Des interfaces : les classes abstraites | O6 |
| 16 | `polymorphisme` | Le polymorphisme : une même méthode, des comportements différents | O6 |
| 16 | `concevoir-classes` | Concevoir ses classes : responsabilités et modélisation | O6 |
| 17 | `plusieurs-fichiers` | Découper ton code en plusieurs fichiers | O6 |
| 17 | `paquets` | Créer un paquet : __init__.py | O6 |
| 17 | `chemin-import` | Où Python cherche les modules | O6 |
| 17 | `main` | Lancer un script : if __name__ == "__main__" | O6 |
| 17 | `installer-paquet-local` | Installer ton propre paquet en mode développement | O6 |
| 18 | `bibliotheque-standard` | La bibliothèque standard : math et random | O6 |
| 18 | `statistics` | Des statistiques simples : statistics | O6 |
| 18 | `dates-heures` | Les dates et les heures : datetime | O6 |
| 18 | `decimal` | Compter l'argent sans erreur : decimal | O6 |
| 18 | `regex` | Chercher des motifs dans du texte : les expressions régulières | O6 |
| 18 | `os-sys` | Parler au système : os et sys | O6 |
| 19 | `argparse` | Lire les arguments de la ligne de commande | O7 |
| 19 | `venv-pip` | Environnement virtuel et pip | O7 |
| 19 | `requirements` | Noter ses dépendances : requirements.txt | O7 |
| 19 | `pep8-ruff` | Le style PEP 8, vérifié par ruff | O7 |
| 19 | `structure-projet` | La structure d'un projet Python : src, tests, docs | O7 |
| 19 | `ruff-format` | Formater automatiquement ton code avec ruff | O7 |

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
| priorité des opérateurs | B | `priorite-operateurs` |
| conversion de type (cast) | A | `conversions` |
| indice (index), longueur | A | `indices-chaines` |
| bloc, indentation | B | `indentation` |
| accumulateur, compteur | B | `accumulateurs` |
| any, all | A | `any-all` |
| valeur par défaut modifiable (mutable default) | A | `defaut-modifiable` |
| Optional, list[int] | A | `types-avances` |
| assert, assertion | A | `assert` |
| constructeur, __init__, self | A | `init-self` |
| méthode de classe, méthode statique | B | `methodes-classe-statiques` |

## Fil rouge et ancrage local

- **Situation** : Fatou vend des beignets au marché de Sandaga, à Dakar. Tout au long du module, tu écris les programmes qui l'aident à suivre ses ventes, ses stocks et ses prix.
- **Personnages** : Fatou (vendeuse), son neveu Ibrahima qui tient le cahier des comptes.
- **Données utilisées** : un petit fichier CSV de ventes fictives sur un mois (prix en francs CFA), créé pour le cours, moins de 10 Ko.

## Exercices prévus

| Id | Titre | Objectif | Difficulté (1–3) | Livrable non testable ? |
| --- | --- | --- | --- | --- |
| 0.1-ex01 à ex05 | Premiers pas | O1 | 1 | non |
| 0.1-ex06 à ex09 | Les nombres | O1 | 1 | non |
| 0.1-ex10 à ex14 | Le texte | O1 | 1 | non |
| 0.1-ex15 à ex19 | Décider | O2 | 1 | non |
| 0.1-ex20 à ex24 | Répéter | O2 | 1 | non |
| 0.1-ex25 à ex29 | Les listes | O3 | 1 | non |
| 0.1-ex30 à ex34 | Tuples, dictionnaires et ensembles | O3 | 2 | non |
| 0.1-ex35 à ex37 | Les compréhensions | O3 | 2 | non |
| 0.1-ex38 à ex41 | Des collections bien outillées | O3, O6 | 2 | non |
| 0.1-ex42 à ex46 | Les fonctions | O4 | 2 | non |
| 0.1-ex47 à ex51 | Aller plus loin avec les fonctions | O4 | 2 | non |
| 0.1-ex52 à ex54 | Itérateurs et générateurs | O4 | 2 | non |
| 0.1-ex55 à ex59 | Les fichiers | O5 | 2–3 | non |
| 0.1-ex60 à ex64 | Les erreurs | O5 | 2–3 | non |
| 0.1-ex65 à ex69 | Les classes | O6 | 2–3 | non |
| 0.1-ex70 à ex73 | Concevoir avec des objets | O6 | 2–3 | non |
| 0.1-ex74 à ex76 | Modules et paquets | O6 | 2–3 | non |
| 0.1-ex77 à ex80 | La bibliothèque standard | O6 | 2–3 | non |
| 0.1-ex81 à ex84 | Un vrai projet Python | O7 | 2–3 | non |

Exercice clé : les 84 exercices, tous validés par `python outils/check.py`.

## Ressources matérielles

- **RAM maximale** : moins de 200 Mo.
- **Téléchargements** : aucun en dehors de la formation.
- **Temps de calcul le plus long** : moins d'une seconde par exercice.
- **Dépendances nouvelles** : aucune (bibliothèque standard uniquement ; ruff et pytest viennent du module 0.0).
- **API payante** : aucune.

## Point de contrôle sécurité et éthique

Sans objet. Une seule règle, rappelée dans la notion `input` : ne jamais utiliser `eval()` sur une saisie de l'utilisateur.

## Ressources externes gratuites

| Ressource | Langue | Type | Licence ou accès | Pourquoi |
| --- | --- | --- | --- | --- |
| [Le tutoriel officiel de Python](https://docs.python.org/fr/3/tutorial/) | français | documentation | PSF | La référence, traduite en français, pour revoir chaque notion. |
| [Think Python, 3e édition](https://allendowney.github.io/ThinkPython/) | anglais | livre en ligne | CC BY-NC-SA 4.0 | Un livre complet et progressif, avec des notebooks à exécuter. |
| [Automate the Boring Stuff with Python](https://automatetheboringstuff.com/) | anglais | livre en ligne | CC BY-NC-SA 3.0 | Python appliqué à des tâches concrètes : fichiers, tableurs, web. |
| [CS50's Introduction to Programming with Python](https://cs50.harvard.edu/python/) | anglais | cours en vidéo | gratuit en ligne | Le cours de Harvard, avec exercices corrigés. |
| [France-IOI](https://www.france-ioi.org/) | français | exercices en ligne | gratuit | Des centaines d'exercices progressifs d'algorithmique en Python. |
| [Python Tutor](https://pythontutor.com/) | anglais | outil en ligne | gratuit | Voir pas à pas ce que fait ton programme en mémoire. |

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
- TODO(vérifier) : compléter le vocabulaire des notions ajoutées par la seconde passe d'audit (25/11/2026), en vérifiant chaque terme dans docs/glossaire.md.
