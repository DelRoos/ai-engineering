---
id: "0.3"
titre: "Code de qualité"
parcours: "00-fondations"
promesse: "Écrire du code qu'on peut croire : testé avec pytest, débogué avec méthode, lisible par les autres, et assez rapide."
question_saut: "Tu écris déjà des tests avec pytest ?"
qcm: true
prerequis: ["0.1", "0.2"]
statut: brouillon
version: 1
mise_a_jour: 2026-11-25
---

# Fiche du module 0.3 — Code de qualité

## Extrait du programme

- **Contenu** : Tests avec pytest, débogage, lisibilité, documentation, notions d'algorithmique (complexité, listes, dictionnaires)
- **Exercice clé** : Couvrir un module existant à 80 % de tests

## Objectifs vérifiables

| Id | À la fin, l'apprenant sait… | Évalué par |
| --- | --- | --- |
| O1 | Écrire des tests pytest qui couvrent les cas normaux, les cas limites et les erreurs. | ex01 à ex05, ex06 à ex08, qcm |
| O2 | Mesurer la couverture de tests d'un module. | ex06 à ex08, exercice clé (ex23), qcm |
| O3 | Trouver et corriger un bug avec méthode (trace d'erreur, débogueur). | ex09 à ex11, qcm |
| O4 | Rendre un code lisible : noms, fonctions courtes, documentation. | ex12 à ex15, qcm |
| O5 | Estimer la complexité d'un algorithme et choisir la bonne structure de données. | ex16 à ex20, qcm |
| O6 | Modifier un code sans le casser, grâce aux tests. | ex21 à ex22, exercice clé (ex23), qcm |
| O7 | Livrer un projet installable en une commande, vérifié automatiquement à chaque push. | ex24 à ex26, qcm |

## Chapitres

| Chapitre | Titre | Exercices |
| --- | --- | --- |
| 1 | Tester avec pytest | 5 |
| 2 | Des tests utiles | 3 |
| 3 | Déboguer | 3 |
| 4 | Un code lisible | 4 |
| 5 | Algorithmique | 5 |
| 6 | Améliorer sans casser | 3 |
| 7 | Livrer un projet Python | 3 |

## Notions, dans l'ordre

| Chapitre | Id de la notion | Notion | Objectif |
| --- | --- | --- | --- |
| 1 | `pourquoi-tester` | Pourquoi tester : le bug qui coûte cher | O1 |
| 1 | `premier-test` | Ton premier test avec pytest | O1 |
| 1 | `bons-tests` | Cas normaux, cas limites, cas d'erreur | O1 |
| 1 | `pytest-raises` | Vérifier qu'une erreur est levée | O1 |
| 1 | `fixtures-parametrize` | Préparer les données d'un test : les fixtures | O1 |
| 1 | `parametrize` | Un test, plusieurs cas : parametrize | O1 |
| 2 | `couverture` | Mesurer la couverture de tests | O2 |
| 2 | `tester-fichiers` | Tester du code qui lit des fichiers | O1 |
| 2 | `monkeypatch` | Remplacer une dépendance pendant un test | O1 |
| 2 | `tdd` | Écrire le test avant le code | O1 |
| 3 | `trace-erreur` | Lire une trace d'erreur et localiser un bug | O3 |
| 3 | `debogueur` | Le débogueur de VS Code : points d'arrêt et pas à pas | O3 |
| 3 | `logging` | Garder une trace avec logging | O3 |
| 3 | `methode-debogage` | Une méthode pour trouver n'importe quel bug | O3 |
| 4 | `nommer` | Bien nommer variables et fonctions | O4 |
| 4 | `fonctions-courtes` | Des fonctions courtes, sans répétition | O4 |
| 4 | `gerer-erreurs` | Gérer les erreurs : quand lever, quand attraper | O4 |
| 4 | `documenter` | Documenter le code : docstrings et commentaires utiles | O4 |
| 4 | `readme` | Écrire un bon README | O4 |
| 4 | `mypy` | Vérifier les types avec mypy | O4 |
| 5 | `mesurer-temps` | Mesurer le temps d'un programme | O5 |
| 5 | `complexite` | La complexité : O(1), O(n), O(n²) | O5 |
| 5 | `chercher` | Chercher dans une liste ou dans un dictionnaire | O5 |
| 5 | `dichotomie` | Chercher vite dans une liste triée : la dichotomie | O5 |
| 5 | `algos-tri` | Comment trier : les algorithmes de tri | O5 |
| 5 | `recursivite` | La récursivité | O5 |
| 5 | `piles-files` | Les piles et les files | O5 |
| 5 | `structures` | Choisir la bonne structure de données | O5 |
| 6 | `refactoriser` | Refactoriser sans casser grâce aux tests | O6 |
| 6 | `revue-code` | Relire ton code comme un relecteur | O6 |
| 7 | `pyproject` | Décrire ton projet : pyproject.toml | O7 |
| 7 | `point-entree` | Une commande installable en une ligne | O7 |
| 7 | `pre-commit` | Vérifier avant chaque commit : pre-commit | O7 |
| 7 | `ci-tests` | Lancer tes tests à chaque push : l'intégration continue | O7 |
| 7 | `release` | Publier une version : tags et releases | O7 |

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
| paramétrer (parametrize) | A | `parametrize` |
| tmp_path | A | `tester-fichiers` |
| monkeypatch, double de test (mock) | A | `monkeypatch` |
| TDD (développement piloté par les tests) | A | `tdd` |
| logging, niveau de log | A | `logging` |
| mypy, vérification de types | A | `mypy` |
| dichotomie (binary search) | A | `dichotomie` |
| algorithme de tri | B | `algos-tri` |
| récursivité, cas de base | B | `recursivite` |
| pile (stack), file (queue) | A | `piles-files` |
| pyproject.toml, paquet (package) | A | `pyproject` |
| point d'entrée (entry point) | A | `point-entree` |
| pre-commit, hook | A | `pre-commit` |
| intégration continue (CI) | A | `ci-tests` |
| tag, release, version sémantique | A | `release` |

## Fil rouge et ancrage local

- **Situation** : un service de mobile money à Yaoundé calcule les frais de chaque transfert. Une erreur d'arrondi fait payer trop cher certains clients. Tu reprends ce code : tu le testes, tu trouves le bug, tu le rends lisible et rapide.
- **Personnages** : Mireille, développeuse de l'équipe, et les clients qui se plaignent au guichet.
- **Données utilisées** : une grille de frais fictive et un fichier de 10 000 transferts fictifs générés pour le cours (moins de 1 Mo).

## Exercices prévus

| Id | Titre | Objectif | Difficulté (1–3) | Livrable non testable ? |
| --- | --- | --- | --- | --- |
| 0.3-ex01 à ex05 | Tester avec pytest | O1 | 1 | non |
| 0.3-ex06 à ex08 | Des tests utiles | O1, O2 | 1 | non |
| 0.3-ex09 à ex11 | Déboguer | O3 | 2 | non |
| 0.3-ex12 à ex15 | Un code lisible | O4 | 2 | non |
| 0.3-ex16 à ex20 | Algorithmique | O5 | 2–3 | non |
| 0.3-ex21 à ex22 | Améliorer sans casser | O6 | 2–3 | non |
| 0.3-ex23 | Exercice clé : couvrir un module existant à 80 % de tests | O2, O6 | 3 | non |
| 0.3-ex24 à ex26 | Livrer un projet Python | O7 | 2–3 | non |

## Ressources matérielles

- **RAM maximale** : moins de 300 Mo.
- **Téléchargements** : aucun en dehors de la formation.
- **Temps de calcul le plus long** : quelques secondes pour comparer deux algorithmes sur 10 000 lignes.
- **Dépendances nouvelles** : pytest-cov, mypy et pre-commit (quelques Mo en tout).
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
