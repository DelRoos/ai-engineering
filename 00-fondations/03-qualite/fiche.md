---
id: "0.3"
titre: "Code de qualité"
parcours: "00-fondations"
semaines: "9–10"
duree_estimee: "15 h par semaine"
promesse: "Écrire du code qu'on peut croire : testé avec pytest, débogué avec méthode, lisible par les autres, et assez rapide."
question_saut: "Tu écris déjà des tests avec pytest ?"
qcm: true
prerequis: ["0.1", "0.2"]
statut: brouillon
version: 1
mise_a_jour: 2026-11-24
---

# Fiche du module 0.3 — Code de qualité

## Extrait du programme

- **Contenu** : Tests avec pytest, débogage, lisibilité, documentation, notions d'algorithmique (complexité, listes, dictionnaires)
- **Exercice clé** : Couvrir un module existant à 80 % de tests

## Objectifs vérifiables

| Id | À la fin, l'apprenant sait… | Évalué par |
| --- | --- | --- |
| O1 | Écrire des tests pytest qui couvrent les cas normaux, les cas limites et les erreurs. | ex01 à ex05, qcm |
| O2 | Mesurer la couverture de tests d'un module. | ex06, exercice clé (ex20), qcm |
| O3 | Trouver et corriger un bug avec méthode (trace d'erreur, débogueur). | ex07 à ex10, qcm |
| O4 | Rendre un code lisible : noms, fonctions courtes, documentation. | ex11 à ex13, qcm |
| O5 | Estimer la complexité d'un algorithme et choisir la bonne structure de données. | ex14 à ex18, qcm |
| O6 | Modifier un code sans le casser, grâce aux tests. | ex19, exercice clé (ex20), qcm |

## Chapitres

| Chapitre | Titre | Semaine | Exercices |
| --- | --- | --- | --- |
| 1 | Tester et déboguer | Semaine 9 | 10 |
| 2 | Lisible et efficace | Semaine 10 | 10 |

## Notions, dans l'ordre

| Chapitre | Id de la notion | Notion | Durée | Objectif |
| --- | --- | --- | --- | --- |
| 1 | `pourquoi-tester` | Pourquoi tester : le bug qui coûte cher | 15 min | O1 |
| 1 | `premier-test` | Ton premier test avec pytest | 25 min | O1 |
| 1 | `bons-tests` | Cas normaux, cas limites, cas d'erreur | 25 min | O1 |
| 1 | `pytest-raises` | Vérifier qu'une erreur est levée | 20 min | O1 |
| 1 | `fixtures-parametrize` | Fixtures et tests paramétrés | 30 min | O1 |
| 1 | `couverture` | Mesurer la couverture de tests | 20 min | O2 |
| 1 | `trace-erreur` | Lire une trace d'erreur et localiser un bug | 20 min | O3 |
| 1 | `debogueur` | Le débogueur de VS Code : points d'arrêt et pas à pas | 30 min | O3 |
| 2 | `nommer` | Bien nommer variables et fonctions | 20 min | O4 |
| 2 | `fonctions-courtes` | Des fonctions courtes, sans répétition | 25 min | O4 |
| 2 | `documenter` | Documenter : docstrings et README | 25 min | O4 |
| 2 | `mesurer-temps` | Mesurer le temps d'un programme | 20 min | O5 |
| 2 | `complexite` | La complexité : O(1), O(n), O(n²) | 30 min | O5 |
| 2 | `chercher` | Chercher dans une liste ou dans un dictionnaire | 25 min | O5 |
| 2 | `structures` | Trier et choisir la bonne structure de données | 25 min | O5 |
| 2 | `refactoriser` | Refactoriser sans casser grâce aux tests | 25 min | O6 |

## Vocabulaire du module

| Terme | Catégorie (A anglais / B transparent) | Notion où il apparaît |
| --- | --- | --- |
| test unitaire, assert | A | `premier-test` |
| pytest | A | `premier-test` |
| cas limite (edge case) | A | `bons-tests` |
| fixture, paramétrer | A | `fixtures-parametrize` |
| couverture (coverage) | A | `couverture` |
| bug, débogueur (debugger), point d'arrêt (breakpoint) | A | `debogueur` |
| docstring, README | A | `documenter` |
| complexité, notation O | B | `complexite` |
| refactoriser (refactoring) | A | `refactoriser` |

## Fil rouge et ancrage local

- **Situation** : un service de mobile money à Yaoundé calcule les frais de chaque transfert. Une erreur d'arrondi fait payer trop cher certains clients. Tu reprends ce code : tu le testes, tu trouves le bug, tu le rends lisible et rapide.
- **Personnages** : Mireille, développeuse de l'équipe, et les clients qui se plaignent au guichet.
- **Données utilisées** : une grille de frais fictive et un fichier de 10 000 transferts fictifs générés pour le cours (moins de 1 Mo).

## Exercices prévus

| Id | Titre | Objectif | Difficulté (1–3) | Durée | Livrable non testable ? |
| --- | --- | --- | --- | --- | --- |
| 0.3-ex01 à ex10 | Chapitre 1 : tester la grille de frais, trouver le bug d'arrondi | O1 à O3 | 1–2 | 20–45 min | non |
| 0.3-ex11 à ex19 | Chapitre 2 : renommer, découper, accélérer la recherche des transferts | O4 à O6 | 2–3 | 20–45 min | non |
| 0.3-ex20 | Exercice clé : couvrir un module existant à 80 % de tests | O2, O6 | 3 | 2 h | non |

## Ressources matérielles

- **RAM maximale** : moins de 300 Mo.
- **Téléchargements** : aucun en dehors de la formation.
- **Temps de calcul le plus long** : quelques secondes pour comparer deux algorithmes sur 10 000 lignes.
- **Dépendances nouvelles** : pytest-cov (moins de 1 Mo).
- **API payante** : aucune.

## Point de contrôle sécurité et éthique

Un calcul d'argent faux fait du tort à de vraies personnes : la notion `pourquoi-tester` part de ce cas. Pas d'autre point.

## Ressources externes gratuites

| Ressource | Langue | Durée ou taille | Licence | Pourquoi |
| --- | --- | --- | --- | --- |
| [Documentation de pytest](https://docs.pytest.org/) | anglais | référence | MIT | Pour aller plus loin sur les fixtures et la paramétrisation. |

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

- TODO(vérifier) : choisir le « module existant » de l'exercice clé (code du fil rouge, d'environ 150 lignes, sans tests).
