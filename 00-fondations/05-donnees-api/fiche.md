---
id: "0.5"
titre: "Données et API"
parcours: "00-fondations"
semaines: "17–18"
duree_estimee: "15 h par semaine"
promesse: "Aller chercher des données sur Internet avec une API, les lire en JSON et en CSV, puis les ranger et les interroger dans une base SQL."
question_saut: "Tu sais déjà appeler une API et écrire du SQL ?"
qcm: true
prerequis: ["0.1", "0.3"]
statut: brouillon
version: 1
mise_a_jour: 2026-11-24
---

# Fiche du module 0.5 — Données et API

## Extrait du programme

- **Contenu** : JSON, CSV, appels HTTP, SQL de base (SELECT, JOIN, GROUP BY)
- **Exercice clé** : Récupérer des données d'une API publique et les stocker en SQLite

## Objectifs vérifiables

| Id | À la fin, l'apprenant sait… | Évalué par |
| --- | --- | --- |
| O1 | Lire et écrire des données JSON et CSV en Python, sans se faire piéger par les encodages et les séparateurs. | ex01 à ex04, qcm |
| O2 | Appeler une API HTTP, lire sa réponse et gérer les erreurs réseau. | ex05 à ex08, qcm |
| O3 | Respecter les limites d'une API et éviter de la rappeler inutilement. | ex09, ex10, qcm |
| O4 | Créer une base SQLite et interroger ses données avec SELECT, WHERE, ORDER BY et GROUP BY. | ex11 à ex15, qcm |
| O5 | Relier deux tables avec JOIN. | ex16, ex17, qcm |
| O6 | Utiliser SQLite depuis Python avec des requêtes paramétrées. | ex18, ex19, exercice clé (ex20), qcm |

## Chapitres

| Chapitre | Titre | Semaine | Exercices |
| --- | --- | --- | --- |
| 1 | Formats de données et API | Semaine 17 | 10 |
| 2 | Le SQL avec SQLite | Semaine 18 | 10 |

## Notions, dans l'ordre

| Chapitre | Id de la notion | Notion | Durée | Objectif |
| --- | --- | --- | --- | --- |
| 1 | `json` | Le format JSON | 20 min | O1 |
| 1 | `json-python` | Lire et écrire du JSON en Python | 25 min | O1 |
| 1 | `csv-pieges` | Les pièges du CSV : séparateurs, encodages, accents | 25 min | O1 |
| 1 | `http` | Comment marche le web : requêtes et réponses HTTP | 25 min | O2 |
| 1 | `requests` | Appeler une API avec requests | 30 min | O2 |
| 1 | `statut-erreurs` | Paramètres, codes de statut et erreurs réseau | 25 min | O2 |
| 1 | `limites-cache` | Respecter une API : limites, clés et cache | 25 min | O3 |
| 2 | `pourquoi-bdd` | Pourquoi une base de données | 15 min | O4 |
| 2 | `create-insert` | Créer une table et y insérer des lignes | 30 min | O4 |
| 2 | `select-where` | Lire avec SELECT et filtrer avec WHERE | 25 min | O4 |
| 2 | `order-limit` | Trier et limiter : ORDER BY et LIMIT | 15 min | O4 |
| 2 | `group-by` | Regrouper et compter : GROUP BY | 30 min | O4 |
| 2 | `join` | Relier deux tables : JOIN | 30 min | O5 |
| 2 | `sqlite-python` | SQLite depuis Python, sans injection SQL | 30 min | O6 |

## Vocabulaire du module

| Terme | Catégorie (A anglais / B transparent) | Notion où il apparaît |
| --- | --- | --- |
| JSON | A | `json` |
| encodage (encoding), UTF-8 | A | `csv-pieges` |
| API, endpoint | A | `http` |
| requête, réponse (request, response) | A | `http` |
| code de statut (status code) | A | `statut-erreurs` |
| timeout | A | `statut-erreurs` |
| rate limit, clé d'API, cache | A | `limites-cache` |
| base de données, table, ligne, colonne | B | `pourquoi-bdd` |
| SQL, SQLite | A | `pourquoi-bdd` |
| requête SQL (query) | A | `select-where` |
| jointure (JOIN) | A | `join` |
| injection SQL, requête paramétrée | A | `sqlite-python` |

## Fil rouge et ancrage local

- **Situation** : Salif vend des céréales au grand marché de Ouagadougou. Il veut savoir si la pluie annoncée va faire bouger ses prix. Tu récupères la météo de la ville par une API gratuite, tu la croises avec son cahier de prix, et tu ranges le tout dans une base SQLite qu'il peut interroger.
- **Personnages** : Salif (commerçant), sa fille Rasmata qui note les prix chaque semaine.
- **Données utilisées** : l'API Open-Meteo (gratuite pour un usage non commercial, sans clé, données sous licence CC BY 4.0) ; un fichier CSV de prix fictifs créé pour le cours (moins de 50 Ko). Les tests n'appellent jamais l'API : ils utilisent des réponses enregistrées dans le dépôt.

## Exercices prévus

| Id | Titre | Objectif | Difficulté (1–3) | Durée | Livrable non testable ? |
| --- | --- | --- | --- | --- | --- |
| 0.5-ex01 à ex10 | Chapitre 1 : lire les réponses de l'API météo, gérer ses erreurs, mettre en cache | O1 à O3 | 1–2 | 20–40 min | non |
| 0.5-ex11 à ex19 | Chapitre 2 : la base des prix de Salif, en SQL puis depuis Python | O4 à O6 | 2 | 20–40 min | non |
| 0.5-ex20 | Exercice clé : récupérer des données d'une API publique et les stocker en SQLite | O2, O6 | 3 | 2 h | non |

## Ressources matérielles

- **RAM maximale** : moins de 200 Mo.
- **Téléchargements** : quelques centaines de Ko de réponses d'API pendant les exercices (les tests n'en ont pas besoin).
- **Temps de calcul le plus long** : moins d'une seconde.
- **Dépendances nouvelles** : requests (moins de 1 Mo). SQLite est déjà inclus dans Python.
- **API payante** : aucune. Open-Meteo : 10 000 appels par jour au plus en usage gratuit (conditions lues le 24/11/2026).

## Point de contrôle sécurité et éthique

- Injection SQL : toujours des requêtes paramétrées (notion `sqlite-python`).
- Une clé d'API ne s'écrit jamais dans le code ni sur GitHub : variable d'environnement (notion `limites-cache`).
- Respecter les conditions d'utilisation et la licence des données : citer la source (CC BY 4.0).

## Ressources externes gratuites

| Ressource | Langue | Durée ou taille | Licence | Pourquoi |
| --- | --- | --- | --- | --- |
| [Documentation de l'API Open-Meteo](https://open-meteo.com/en/docs) | anglais | référence | données CC BY 4.0 | Construire tes propres requêtes météo. |
| [Le langage SQL de SQLite](https://www.sqlite.org/lang.html) | anglais | référence | domaine public | Toutes les commandes SQL comprises par SQLite. |

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

- TODO(vérifier) : format exact d'attribution demandé par Open-Meteo pour la licence CC BY 4.0.
- TODO(vérifier) : prix des céréales réalistes au marché de Ouagadougou, pour le fichier fictif.
