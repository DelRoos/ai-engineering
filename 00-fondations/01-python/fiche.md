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
- **Exercice clé** : 75 exercices progressifs corrigés automatiquement

## Objectifs vérifiables

| Id | À la fin, l'apprenant sait… | Évalué par |
| --- | --- | --- |
| O1 | Écrire un script qui manipule des nombres, du texte et des valeurs saisies par l'utilisateur. | ex01 à ex05, ex06 à ex10, qcm |
| O2 | Contrôler un programme avec des conditions et des boucles. | ex11 à ex15, ex16 à ex20, ex21 à ex25, qcm |
| O3 | Choisir la bonne collection (liste, tuple, dictionnaire, ensemble) et la parcourir. | ex21 à ex25, ex26 à ex30, ex31 à ex34, qcm |
| O4 | Découper un programme en fonctions typées et documentées. | ex35 à ex39, ex40 à ex44, ex45 à ex47, qcm |
| O5 | Lire et écrire des fichiers texte et CSV, et gérer les erreurs avec des exceptions. | ex48 à ex52, ex53 à ex57, qcm |
| O6 | Représenter un problème avec des classes et organiser son code en modules. | ex31 à ex34, ex58 à ex61, ex62 à ex65, ex66 à ex68, ex69 à ex71, qcm |
| O7 | Isoler un projet dans un environnement virtuel et écrire du code conforme à PEP 8. | ex72 à ex75, qcm |

## Chapitres

| Chapitre | Titre | Exercices |
| --- | --- | --- |
| 1 | Premiers pas | 5 |
| 2 | Nombres et texte | 5 |
| 3 | Décider | 5 |
| 4 | Répéter | 5 |
| 5 | Les listes | 5 |
| 6 | Tuples, dictionnaires et ensembles | 5 |
| 7 | Des collections bien outillées | 4 |
| 8 | Les fonctions | 5 |
| 9 | Aller plus loin avec les fonctions | 5 |
| 10 | Itérateurs et générateurs | 3 |
| 11 | Les fichiers | 5 |
| 12 | Les erreurs | 5 |
| 13 | Les classes | 4 |
| 14 | Concevoir avec des objets | 4 |
| 15 | Modules et paquets | 3 |
| 16 | La bibliothèque standard | 3 |
| 17 | Un vrai projet Python | 4 |

## Notions, dans l'ordre

| Chapitre | Id de la notion | Notion | Objectif |
| --- | --- | --- | --- |
| 1 | `premier-programme` | Ton premier programme avec print | O1 |
| 1 | `mode-interactif` | Python comme calculatrice : le mode interactif | O1 |
| 1 | `variables` | Ranger une valeur : les variables | O1 |
| 1 | `type-isinstance` | Connaître le type d'une valeur : type et isinstance | O1 |
| 1 | `commentaires` | Commenter ton code | O1 |
| 1 | `erreurs-debutant` | Tes premières erreurs : SyntaxError et NameError | O1 |
| 1 | `aide` | Chercher de l'aide : help() et la documentation officielle | O1 |
| 2 | `nombres` | Nombres entiers et nombres décimaux | O1 |
| 2 | `operateurs` | Division entière, reste et puissance : les opérateurs | O1 |
| 2 | `flottants` | Pourquoi 0,1 + 0,2 ne donne pas 0,3 | O1 |
| 2 | `chaines` | Le texte : les chaînes de caractères | O1 |
| 2 | `caracteres-speciaux` | Caractères spéciaux et chaînes sur plusieurs lignes | O1 |
| 2 | `methodes-chaines` | Les méthodes des chaînes : upper, split, replace | O1 |
| 2 | `f-strings` | Mettre en forme un affichage avec les f-strings | O1 |
| 2 | `input` | Demander une valeur et convertir son type | O1 |
| 3 | `booleens` | Vrai ou faux : booléens et comparaisons | O2 |
| 3 | `none` | Rien du tout : la valeur None | O2 |
| 3 | `if` | Prendre une décision avec if, elif et else | O2 |
| 3 | `and-or-not` | Combiner des conditions : and, or, not | O2 |
| 3 | `in-appartenance` | Tester l'appartenance avec in | O2 |
| 3 | `comparaisons-enchainees` | Comparaisons enchaînées | O2 |
| 3 | `pass` | Ne rien faire, proprement : pass | O2 |
| 3 | `match` | Choisir parmi plusieurs cas avec match | O2 |
| 4 | `while` | Répéter tant que : la boucle while | O2 |
| 4 | `for` | Répéter avec for | O2 |
| 4 | `range` | Compter avec range | O2 |
| 4 | `break-continue` | Sortir d'une boucle : break et continue | O2 |
| 4 | `else-boucles` | Le else d'une boucle | O2 |
| 4 | `boucles-imbriquees` | Des boucles dans des boucles | O2 |
| 4 | `valider-saisie` | Redemander tant que la saisie est fausse | O2 |
| 5 | `listes` | Ranger plusieurs valeurs : les listes | O2 |
| 5 | `slicing` | Découper une liste et une chaîne | O3 |
| 5 | `methodes-listes` | Ajouter et retirer des éléments : les méthodes de liste | O3 |
| 5 | `copie-listes` | Deux noms pour une même liste : copier sans surprise | O3 |
| 5 | `enumerate-zip` | Parcourir avec enumerate et zip | O3 |
| 5 | `trier` | Trier avec sorted et une clé | O3 |
| 5 | `comprehensions` | Construire une liste en une ligne : les compréhensions | O3 |
| 5 | `comprehensions-imbriquees` | Compréhensions imbriquées et filtres | O3 |
| 6 | `tuples` | Des valeurs qui ne changent pas : les tuples | O3 |
| 6 | `unpacking` | Déballer plusieurs valeurs d'un coup | O3 |
| 6 | `dictionnaires` | Associer des clés et des valeurs : les dictionnaires | O3 |
| 6 | `parcourir-dict` | Parcourir un dictionnaire | O3 |
| 6 | `comprehensions-dict` | Les compréhensions de dictionnaire et d'ensemble | O3 |
| 6 | `donnees-imbriquees` | Des données imbriquées : listes de dictionnaires | O3 |
| 6 | `ensembles` | Sans doublons : les ensembles | O3 |
| 6 | `operations-ensembles` | Union, intersection, différence : opérer sur des ensembles | O3 |
| 7 | `import` | Importer un module de la bibliothèque standard | O6 |
| 7 | `counter` | Compter avec Counter | O3 |
| 7 | `defaultdict` | Des dictionnaires avec une valeur par défaut : defaultdict | O3 |
| 7 | `namedtuple` | Des tuples avec des noms : namedtuple | O3 |
| 7 | `itertools` | Combiner et enchaîner : itertools | O3 |
| 7 | `comparer-sequences` | Comparer des listes et des tuples | O3 |
| 8 | `pourquoi-fonctions` | Pourquoi écrire des fonctions | O4 |
| 8 | `def` | Définir une fonction et ses paramètres | O4 |
| 8 | `return` | Renvoyer un résultat avec return | O4 |
| 8 | `arguments` | Valeurs par défaut et arguments nommés | O4 |
| 8 | `portee` | La portée des variables | O4 |
| 8 | `fonctions-pures` | Des fonctions sans effet de bord | O4 |
| 8 | `decouper` | Découper un problème en petites fonctions | O4 |
| 9 | `args-kwargs` | Un nombre variable d'arguments : *args et **kwargs | O4 |
| 9 | `parametres-speciaux` | Des arguments seulement positionnels ou seulement nommés | O4 |
| 9 | `lambda` | Les fonctions anonymes : lambda | O4 |
| 9 | `fonction-argument` | Passer une fonction à une autre fonction | O4 |
| 9 | `decorateurs` | Les décorateurs : comprendre le @ devant une fonction | O4 |
| 9 | `annotations` | Annoter les types | O4 |
| 9 | `docstrings` | Documenter avec une docstring | O4 |
| 10 | `iterateurs` | Comprendre l'itération : iter et next | O4 |
| 10 | `generateurs` | Produire des valeurs une à une : les générateurs et yield | O4 |
| 10 | `expressions-generatrices` | Les expressions génératrices | O4 |
| 10 | `protocole-iteration` | Rendre tes objets parcourables : __iter__ et __next__ | O4 |
| 10 | `pipelines-generateurs` | Enchaîner des générateurs pour traiter de gros fichiers | O4 |
| 11 | `lire-fichier` | Lire un fichier texte | O5 |
| 11 | `with` | Ouvrir proprement avec with | O5 |
| 11 | `encodage` | Les accents dans les fichiers : l'encodage UTF-8 | O5 |
| 11 | `ecrire-fichier` | Écrire dans un fichier | O5 |
| 11 | `pathlib` | Désigner un fichier avec pathlib | O5 |
| 11 | `os-shutil` | Parcourir et organiser des dossiers : os et shutil | O5 |
| 11 | `csv` | Lire et écrire un fichier CSV | O5 |
| 12 | `lire-erreur` | Quand ça plante : lire un message d'erreur | O5 |
| 12 | `try-except` | Attraper une erreur avec try et except | O5 |
| 12 | `plusieurs-exceptions` | Attraper plusieurs sortes d'erreurs | O5 |
| 12 | `else-finally` | Les blocs else et finally | O5 |
| 12 | `raise` | Lever ta propre exception | O5 |
| 12 | `chainer-exceptions` | Enchaîner les erreurs : raise from | O5 |
| 12 | `exceptions-perso` | Créer tes propres exceptions | O5 |
| 13 | `classes` | Créer une classe et ses objets | O6 |
| 13 | `methodes` | Attributs et méthodes | O6 |
| 13 | `variables-classe` | Variables de classe et variables d'instance | O6 |
| 13 | `prive` | Le privé en Python : la convention du _ | O6 |
| 13 | `methodes-speciales` | Les méthodes spéciales : __str__ et __eq__ | O6 |
| 13 | `dataclasses` | Des classes de données en une ligne : dataclass | O6 |
| 14 | `heritage` | L'héritage | O6 |
| 14 | `composition` | Assembler des objets : la composition | O6 |
| 14 | `property` | Des attributs calculés : property | O6 |
| 14 | `classes-abstraites` | Des interfaces : les classes abstraites | O6 |
| 14 | `polymorphisme` | Le polymorphisme : une même méthode, des comportements différents | O6 |
| 14 | `concevoir-classes` | Concevoir ses classes : responsabilités et modélisation | O6 |
| 15 | `plusieurs-fichiers` | Découper ton code en plusieurs fichiers | O6 |
| 15 | `paquets` | Créer un paquet : __init__.py | O6 |
| 15 | `chemin-import` | Où Python cherche les modules | O6 |
| 15 | `main` | Lancer un script : if __name__ == "__main__" | O6 |
| 15 | `installer-paquet-local` | Installer ton propre paquet en mode développement | O6 |
| 16 | `bibliotheque-standard` | La bibliothèque standard : math et random | O6 |
| 16 | `dates-heures` | Les dates et les heures : datetime | O6 |
| 16 | `decimal` | Compter l'argent sans erreur : decimal | O6 |
| 16 | `regex` | Chercher des motifs dans du texte : les expressions régulières | O6 |
| 16 | `os-sys` | Parler au système : os et sys | O6 |
| 17 | `argparse` | Lire les arguments de la ligne de commande | O7 |
| 17 | `venv-pip` | Environnement virtuel et pip | O7 |
| 17 | `requirements` | Noter ses dépendances : requirements.txt | O7 |
| 17 | `pep8-ruff` | Le style PEP 8, vérifié par ruff | O7 |
| 17 | `structure-projet` | La structure d'un projet Python : src, tests, docs | O7 |
| 17 | `ruff-format` | Formater automatiquement ton code avec ruff | O7 |

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
| 0.1-ex21 à ex25 | Les listes | O2, O3 | 1 | non |
| 0.1-ex26 à ex30 | Tuples, dictionnaires et ensembles | O3 | 2 | non |
| 0.1-ex31 à ex34 | Des collections bien outillées | O3, O6 | 2 | non |
| 0.1-ex35 à ex39 | Les fonctions | O4 | 2 | non |
| 0.1-ex40 à ex44 | Aller plus loin avec les fonctions | O4 | 2 | non |
| 0.1-ex45 à ex47 | Itérateurs et générateurs | O4 | 2 | non |
| 0.1-ex48 à ex52 | Les fichiers | O5 | 2 | non |
| 0.1-ex53 à ex57 | Les erreurs | O5 | 2–3 | non |
| 0.1-ex58 à ex61 | Les classes | O6 | 2–3 | non |
| 0.1-ex62 à ex65 | Concevoir avec des objets | O6 | 2–3 | non |
| 0.1-ex66 à ex68 | Modules et paquets | O6 | 2–3 | non |
| 0.1-ex69 à ex71 | La bibliothèque standard | O6 | 2–3 | non |
| 0.1-ex72 à ex75 | Un vrai projet Python | O7 | 2–3 | non |

Exercice clé : les 75 exercices, tous validés par `python outils/check.py`.

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
