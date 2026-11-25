---
id: "0.5"
titre: "Données et API"
parcours: "00-fondations"
promesse: "Aller chercher des données sur Internet avec une API, les lire en JSON et en CSV, puis les ranger et les interroger dans une base SQL."
question_saut: "Tu sais déjà appeler une API et écrire du SQL ?"
qcm: true
prerequis: ["0.1", "0.3"]
statut: brouillon
version: 1
mise_a_jour: 2026-11-25
---

# Fiche du module 0.5 — Données et API

## Extrait du programme

- **Contenu** : JSON, CSV, appels HTTP, SQL de base (SELECT, JOIN, GROUP BY)
- **Exercice clé** : Récupérer des données d'une API publique et les stocker en SQLite

## Objectifs vérifiables

| Id | À la fin, l'apprenant sait… | Évalué par |
| --- | --- | --- |
| O1 | Lire et écrire des données JSON et CSV en Python, sans se faire piéger par les encodages et les séparateurs. | ex01 à ex04, qcm |
| O2 | Appeler une API HTTP, lire sa réponse et gérer les erreurs réseau. | ex05 à ex09, exercice clé (ex34), qcm |
| O3 | Respecter les limites d'une API et éviter de la rappeler inutilement. | ex10 à ex13, qcm |
| O4 | Créer une base SQLite et interroger ses données avec SELECT, WHERE, ORDER BY et GROUP BY. | ex16 à ex20, ex21 à ex23, ex29 à ex30, qcm |
| O5 | Relier deux tables avec JOIN. | ex24 à ex28, ex29 à ex30, qcm |
| O6 | Utiliser SQLite depuis Python avec des requêtes paramétrées. | ex31 à ex33, exercice clé (ex34), qcm |
| O7 | Récupérer les données d'une page web quand aucune API n'existe, en respectant le droit et le site. | ex14 à ex15, qcm |

## Chapitres

| Chapitre | Titre | Exercices |
| --- | --- | --- |
| 1 | Les formats de données | 4 |
| 2 | Le web et HTTP | 5 |
| 3 | Utiliser une API sérieusement | 4 |
| 4 | Quand il n'y a pas d'API | 2 |
| 5 | Une base de données | 5 |
| 6 | Calculer en SQL | 3 |
| 7 | Interroger plusieurs tables | 5 |
| 8 | SQL pour l'analyse | 2 |
| 9 | Python et SQLite | 4 |

## Notions, dans l'ordre

| Chapitre | Id de la notion | Notion | Objectif |
| --- | --- | --- | --- |
| 1 | `json` | Le format JSON | O1 |
| 1 | `json-python` | Lire et écrire du JSON en Python | O1 |
| 1 | `json-imbrique` | Naviguer dans un JSON imbriqué | O1 |
| 1 | `valider-json` | Vérifier la forme d'un JSON | O1 |
| 1 | `csv-pieges` | Les pièges du CSV : séparateurs, encodages, accents | O1 |
| 1 | `autres-formats` | XML, Excel, Parquet : les autres formats | O1 |
| 2 | `http` | Comment marche le web : requêtes et réponses HTTP | O2 |
| 2 | `url-parametres` | Lire une URL et ses paramètres | O2 |
| 2 | `rest` | Les API REST : ressources et méthodes | O2 |
| 2 | `requests` | Appeler une API avec requests | O2 |
| 2 | `statut-erreurs` | Lire un code de statut HTTP | O2 |
| 2 | `erreurs-reseau` | Les erreurs réseau : délais et nouvelles tentatives | O2 |
| 2 | `post` | Envoyer des données : la méthode POST | O2 |
| 3 | `limites-cache` | Respecter les limites d'une API | O3 |
| 3 | `cache` | Ne pas rappeler l'API pour rien : le cache | O3 |
| 3 | `pagination` | Récupérer beaucoup de données : la pagination | O3 |
| 3 | `en-tetes` | Les en-têtes HTTP et l'authentification | O3 |
| 3 | `cle-secrete` | Garder une clé d'API secrète | O3 |
| 3 | `lire-doc-api` | Lire la documentation d'une API | O3 |
| 4 | `scraping` | Quand il n'y a pas d'API : lire une page web, et le droit de le faire | O7 |
| 4 | `html-structure` | La structure d'une page HTML | O7 |
| 4 | `beautifulsoup` | Extraire des données avec BeautifulSoup | O7 |
| 5 | `pourquoi-bdd` | Pourquoi une base de données | O4 |
| 5 | `create-insert` | Créer une table et y insérer des lignes | O4 |
| 5 | `contraintes` | Des données fiables : les contraintes | O4 |
| 5 | `select-where` | Lire avec SELECT et filtrer avec WHERE | O4 |
| 5 | `filtres-sql` | Filtrer finement : LIKE, IN, BETWEEN | O4 |
| 5 | `null-sql` | Les valeurs manquantes en SQL : NULL | O4 |
| 5 | `order-limit` | Trier et limiter : ORDER BY et LIMIT | O4 |
| 5 | `update-delete` | Modifier et supprimer des lignes | O4 |
| 6 | `expressions-sql` | Calculer dans une requête : expressions et alias | O4 |
| 6 | `distinct-case` | DISTINCT et CASE | O4 |
| 6 | `group-by` | Regrouper et compter : GROUP BY | O4 |
| 6 | `having` | Filtrer des groupes : HAVING | O4 |
| 6 | `ordre-execution` | Dans quel ordre s'exécute une requête | O4 |
| 7 | `concevoir-tables` | Concevoir ses tables : clés et relations | O5 |
| 7 | `join` | Relier deux tables : JOIN | O5 |
| 7 | `left-join` | Garder les lignes sans correspondance : LEFT JOIN | O5 |
| 7 | `sous-requetes` | Une requête dans une requête | O5 |
| 7 | `cte` | Des requêtes lisibles : WITH | O5 |
| 7 | `union` | Assembler des résultats : UNION | O5 |
| 7 | `index` | Accélérer une requête : les index | O5 |
| 8 | `fenetres-sql` | Les fonctions de fenêtre | O5 |
| 8 | `vues` | Les vues | O5 |
| 8 | `modifier-schema` | Modifier une table : ALTER et DROP | O4 |
| 9 | `sqlite-python` | SQLite depuis Python, sans injection SQL | O6 |
| 9 | `transactions` | Tout ou rien : les transactions | O6 |
| 9 | `sql-pandas` | SQL et pandas ensemble | O6 |
| 9 | `api-vers-base` | De l'API à la base : un petit pipeline de données | O6 |

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
| paramètre d'URL (query string) | A | `url-parametres` |
| POST, corps de requête (body) | A | `post` |
| timeout, nouvelle tentative (retry) | A | `erreurs-reseau` |
| cache | A | `cache` |
| pagination | B | `pagination` |
| en-tête (header), jeton (token) | A | `en-tetes` |
| variable d'environnement, .env | A | `cle-secrete` |
| scraping, robots.txt | A | `scraping` |
| NULL | A | `null-sql` |
| UPDATE, DELETE | A | `update-delete` |
| clé primaire, clé étrangère | B | `concevoir-tables` |
| sous-requête (subquery) | A | `sous-requetes` |
| index | B | `index` |
| transaction, commit, rollback | A | `transactions` |

## Fil rouge et ancrage local

- **Situation** : Salif vend des céréales au grand marché de Ouagadougou. Il veut savoir si la pluie annoncée va faire bouger ses prix. Tu récupères la météo de la ville par une API gratuite, tu la croises avec son cahier de prix, et tu ranges le tout dans une base SQLite qu'il peut interroger.
- **Personnages** : Salif (commerçant), sa fille Rasmata qui note les prix chaque semaine.
- **Données utilisées** : l'API Open-Meteo (gratuite pour un usage non commercial, sans clé, données sous licence CC BY 4.0) ; un fichier CSV de prix fictifs créé pour le cours (moins de 50 Ko). Les tests n'appellent jamais l'API : ils utilisent des réponses enregistrées dans le dépôt.

## Exercices prévus

| Id | Titre | Objectif | Difficulté (1–3) | Livrable non testable ? |
| --- | --- | --- | --- | --- |
| 0.5-ex01 à ex04 | Les formats de données | O1 | 1 | non |
| 0.5-ex05 à ex09 | Le web et HTTP | O2 | 1 | non |
| 0.5-ex10 à ex13 | Utiliser une API sérieusement | O3 | 1 | non |
| 0.5-ex14 à ex15 | Quand il n'y a pas d'API | O7 | 2 | non |
| 0.5-ex16 à ex20 | Une base de données | O4 | 2 | non |
| 0.5-ex21 à ex23 | Calculer en SQL | O4 | 2 | non |
| 0.5-ex24 à ex28 | Interroger plusieurs tables | O5 | 2–3 | non |
| 0.5-ex29 à ex30 | SQL pour l'analyse | O4, O5 | 2–3 | non |
| 0.5-ex31 à ex33 | Python et SQLite | O6 | 2–3 | non |
| 0.5-ex34 | Exercice clé : récupérer des données d'une API publique et les stocker en SQLite | O2, O6 | 3 | non |

## Ressources matérielles

- **RAM maximale** : moins de 200 Mo.
- **Téléchargements** : quelques centaines de Ko de réponses d'API pendant les exercices (les tests n'en ont pas besoin).
- **Temps de calcul le plus long** : moins d'une seconde.
- **Dépendances nouvelles** : requests, et beautifulsoup4 pour lire une page web (moins de 1 Mo chacun). SQLite est déjà inclus dans Python.
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
- TODO(vérifier) : compléter le vocabulaire des notions ajoutées par la seconde passe d'audit (25/11/2026), en vérifiant chaque terme dans docs/glossaire.md.
