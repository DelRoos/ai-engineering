---
id: "0.1"
titre: "Python pour l'ingénieur"
parcours: "00-fondations"
semaines: "1–6"
duree_estimee: "15 h par semaine"
promesse: "Écrire des programmes Python propres, lisibles et testables. C'est la base de tout le reste du parcours."
question_saut: "Tu sais déjà coder en Python ?"
qcm: true
prerequis: ["0.0"]
statut: brouillon
version: 1
mise_a_jour: 2026-11-24
---

# Fiche du module 0.1 — Python pour l'ingénieur

## Extrait du programme

- **Contenu** : Types, fonctions, classes, modules, fichiers, exceptions, environnements virtuels, typage, style PEP 8
- **Exercice clé** : 60 exercices progressifs corrigés automatiquement

## Objectifs vérifiables

| Id | À la fin, l'apprenant sait… | Évalué par |
| --- | --- | --- |
| O1 | Écrire un script qui manipule des nombres, du texte et des valeurs saisies par l'utilisateur. | ex01 à ex10, qcm |
| O2 | Contrôler un programme avec des conditions et des boucles. | ex11 à ex20, qcm |
| O3 | Choisir la bonne collection (liste, tuple, dictionnaire, ensemble) et la parcourir. | ex21 à ex30, qcm |
| O4 | Découper un programme en fonctions typées et documentées. | ex31 à ex40, qcm |
| O5 | Lire et écrire des fichiers texte et CSV, et gérer les erreurs avec des exceptions. | ex41 à ex50, qcm |
| O6 | Représenter un problème avec des classes et organiser son code en modules. | ex51 à ex56, qcm |
| O7 | Isoler un projet dans un environnement virtuel et écrire du code conforme à PEP 8. | ex57 à ex60, qcm |

## Chapitres

| Chapitre | Titre | Semaine | Exercices |
| --- | --- | --- | --- |
| 1 | Tes premiers programmes | Semaine 1 | 10 |
| 2 | Décider et répéter | Semaine 2 | 10 |
| 3 | Les collections | Semaine 3 | 10 |
| 4 | Les fonctions | Semaine 4 | 10 |
| 5 | Fichiers et erreurs | Semaine 5 | 10 |
| 6 | Classes, modules et projet propre | Semaine 6 | 10 |

## Notions, dans l'ordre

| Chapitre | Id de la notion | Notion | Durée | Objectif |
| --- | --- | --- | --- | --- |
| 1 | `premier-programme` | Ton premier programme avec print | 20 min | O1 |
| 1 | `mode-interactif` | Python comme calculatrice : le mode interactif | 20 min | O1 |
| 1 | `variables` | Ranger une valeur : les variables | 25 min | O1 |
| 1 | `nombres` | Nombres entiers et nombres décimaux | 25 min | O1 |
| 1 | `chaines` | Le texte : les chaînes de caractères | 30 min | O1 |
| 1 | `f-strings` | Mettre en forme un affichage avec les f-strings | 25 min | O1 |
| 1 | `input` | Demander une valeur et convertir son type | 30 min | O1 |
| 2 | `booleens` | Vrai ou faux : booléens et comparaisons | 25 min | O2 |
| 2 | `if` | Prendre une décision avec if, elif et else | 30 min | O2 |
| 2 | `and-or-not` | Combiner des conditions : and, or, not | 20 min | O2 |
| 2 | `while` | Répéter tant que : la boucle while | 25 min | O2 |
| 2 | `listes` | Ranger plusieurs valeurs : les listes | 30 min | O2 |
| 2 | `for` | Parcourir une liste avec for | 25 min | O2 |
| 2 | `range` | Compter avec range | 20 min | O2 |
| 3 | `slicing` | Découper une liste et une chaîne | 25 min | O3 |
| 3 | `methodes-listes` | Ajouter, retirer, trier : les méthodes de liste | 25 min | O3 |
| 3 | `tuples` | Des valeurs qui ne changent pas : les tuples | 20 min | O3 |
| 3 | `dictionnaires` | Associer des clés et des valeurs : les dictionnaires | 30 min | O3 |
| 3 | `parcourir-dict` | Parcourir un dictionnaire | 20 min | O3 |
| 3 | `ensembles` | Sans doublons : les ensembles | 20 min | O3 |
| 3 | `comprehensions` | Construire une liste en une ligne : les compréhensions | 30 min | O3 |
| 4 | `pourquoi-fonctions` | Pourquoi écrire des fonctions | 15 min | O4 |
| 4 | `def` | Définir une fonction et ses paramètres | 25 min | O4 |
| 4 | `return` | Renvoyer un résultat avec return | 25 min | O4 |
| 4 | `arguments` | Valeurs par défaut et arguments nommés | 25 min | O4 |
| 4 | `portee` | La portée des variables | 25 min | O4 |
| 4 | `annotations` | Annoter les types | 25 min | O4 |
| 4 | `docstrings` | Documenter avec une docstring | 20 min | O4 |
| 4 | `decouper` | Découper un problème en petites fonctions | 25 min | O4 |
| 5 | `lire-fichier` | Lire un fichier texte | 25 min | O5 |
| 5 | `with` | Ouvrir proprement avec with | 15 min | O5 |
| 5 | `ecrire-fichier` | Écrire dans un fichier | 20 min | O5 |
| 5 | `csv` | Lire et écrire un fichier CSV | 30 min | O5 |
| 5 | `pathlib` | Désigner un fichier avec pathlib | 20 min | O5 |
| 5 | `lire-erreur` | Quand ça plante : lire un message d'erreur | 25 min | O5 |
| 5 | `try-except` | Attraper une erreur avec try et except | 25 min | O5 |
| 5 | `raise` | Lever ta propre exception | 20 min | O5 |
| 6 | `classes` | Créer une classe et ses objets | 30 min | O6 |
| 6 | `methodes` | Attributs et méthodes | 25 min | O6 |
| 6 | `dataclasses` | Des classes de données en une ligne : dataclass | 20 min | O6 |
| 6 | `import` | Importer un module de la bibliothèque standard | 20 min | O6 |
| 6 | `plusieurs-fichiers` | Découper ton code en plusieurs fichiers | 25 min | O6 |
| 6 | `main` | Lancer un script : if __name__ == "__main__" | 15 min | O6 |
| 6 | `venv-pip` | Environnement virtuel et pip | 30 min | O7 |
| 6 | `pep8-ruff` | Le style PEP 8, vérifié par ruff | 25 min | O7 |

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

## Fil rouge et ancrage local

- **Situation** : Fatou vend des beignets au marché de Sandaga, à Dakar. Tout au long du module, tu écris les programmes qui l'aident à suivre ses ventes, ses stocks et ses prix.
- **Personnages** : Fatou (vendeuse), son neveu Ibrahima qui tient le cahier des comptes.
- **Données utilisées** : un petit fichier CSV de ventes fictives sur un mois (prix en francs CFA), créé pour le cours, moins de 10 Ko.

## Exercices prévus

| Id | Titre | Objectif | Difficulté (1–3) | Durée | Livrable non testable ? |
| --- | --- | --- | --- | --- | --- |
| 0.1-ex01 à ex10 | Chapitre 1 : calculs de ventes, affichages, saisies | O1 | 1 | 15–30 min | non |
| 0.1-ex11 à ex20 | Chapitre 2 : remises, stocks, boucles de caisse | O2 | 1–2 | 15–30 min | non |
| 0.1-ex21 à ex30 | Chapitre 3 : catalogue des produits, clients, doublons | O3 | 2 | 20–40 min | non |
| 0.1-ex31 à ex40 | Chapitre 4 : fonctions de caisse typées et documentées | O4 | 2 | 20–40 min | non |
| 0.1-ex41 à ex50 | Chapitre 5 : lire le cahier des ventes en CSV sans planter | O5 | 2–3 | 30–45 min | non |
| 0.1-ex51 à ex60 | Chapitre 6 : la petite application de gestion de Fatou | O6, O7 | 3 | 30 min–1 h | non |

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
