---
id: "7.2"
titre: "Extraire proprement"
parcours: "07-collecte-automatisation"
promesse: "Écrire des scrapers qui récupèrent exactement les bonnes données, propres, validées, historisées et livrées dans le format du client, et qui restent maintenables quand le site change."
question_saut: "Tu as déjà livré un scraper dont les données sont validées et historisées, avec des tests ?"
qcm: true
prerequis: ["7.1", "0.3"]
statut: brouillon
version: 1
mise_a_jour: 2026-11-25
---

# Fiche du module 7.2 — Extraire proprement

## Extrait du programme

- **Contenu** : httpx professionnel, formulaires, parseurs (BeautifulSoup, lxml, selectolax, parsel), structures courantes, fichiers publiés, données propres et validées, stockage, livraison, tests
- **Exercice clé** : Collecter le catalogue complet d'un site de vente (fiches, prix, stock) en données validées, historisées et testées

## Objectifs vérifiables

| Id | À la fin, l'apprenant sait… | Évalué par |
| --- | --- | --- |
| O1 | Envoyer des requêtes HTTP professionnelles : sessions, délais, réessais, formulaires, téléchargements. | ex01 à ex04, qcm |
| O2 | Choisir et utiliser le bon parseur selon la vitesse et la tolérance nécessaires. | ex05 à ex07, qcm |
| O3 | Extraire les structures courantes : listes et fiches, paginations, tableaux, recherches, articles. | ex08 à ex11, qcm |
| O4 | Exploiter les données publiées hors HTML : JSON embarqué, PDF, tableurs, sitemaps et API officielles. | ex12 à ex15, qcm |
| O5 | Produire des données propres et validées dès la collecte. | ex16 à ex19, qcm |
| O6 | Stocker, dédoublonner, historiser et livrer les données au client. | ex20 à ex22, qcm |
| O7 | Écrire un scraper maintenable : configuré, testé, journalisé, qui détecte les changements du site. | ex23 à ex25, exercice clé (ex26), qcm |

## Chapitres

| Chapitre | Titre | Exercices |
| --- | --- | --- |
| 1 | Des requêtes HTTP professionnelles | 4 |
| 2 | Parser vite et bien | 3 |
| 3 | Les structures courantes | 4 |
| 4 | Au-delà du HTML | 4 |
| 5 | Des données propres dès la collecte | 4 |
| 6 | Stocker et livrer | 3 |
| 7 | Un scraper qu'on peut maintenir | 4 |

## Notions, dans l'ordre

| Chapitre | Id de la notion | Notion | Objectif |
| --- | --- | --- | --- |
| 1 | `httpx-client` | httpx : un client, des sessions, des délais | O1 |
| 1 | `reessais` | Réessayer avec un délai croissant | O1 |
| 1 | `en-tetes-requetes` | Envoyer les bons en-têtes | O1 |
| 1 | `formulaires-post` | Soumettre un formulaire : GET, POST, champs cachés | O1 |
| 1 | `jetons-csrf` | Les jetons CSRF et les formulaires protégés | O1 |
| 1 | `telecharger-fichiers` | Télécharger des fichiers lourds par morceaux | O1 |
| 2 | `beautifulsoup-avance` | BeautifulSoup en profondeur | O2 |
| 2 | `lxml` | lxml : la vitesse et XPath | O2 |
| 2 | `selectolax` | selectolax : parser des millions de pages | O2 |
| 2 | `parsel` | parsel : les sélecteurs de Scrapy, utilisables partout | O2 |
| 2 | `comparer-parseurs` | Comparer les parseurs : vitesse, tolérance, mémoire | O2 |
| 3 | `listes-details` | Le schéma liste puis fiche détail | O3 |
| 3 | `pagination-types` | Les paginations : numéros, curseurs, « page suivante » | O3 |
| 3 | `tableaux-html` | Les tableaux HTML, cellules fusionnées comprises | O3 |
| 3 | `recherche-filtres` | Les pages de recherche et leurs filtres | O3 |
| 3 | `contenu-article` | Extraire le texte principal d'un article | O3 |
| 3 | `avis-commentaires` | Les avis et commentaires chargés à part | O3 |
| 4 | `json-embarque` | Le JSON caché dans les balises script | O4 |
| 4 | `pdf-web` | Les PDF publiés : texte, tableaux, scans | O4 |
| 4 | `tableurs-web` | Les fichiers Excel et CSV mis en ligne | O4 |
| 4 | `images-medias` | Les images et médias : télécharger et décrire | O4 |
| 4 | `sitemaps-flux` | Sitemaps et flux RSS : la carte offerte par le site | O4 |
| 4 | `api-officielles` | Les API officielles : toujours vérifier avant de scraper | O4 |
| 5 | `schema-collecte` | Un schéma pour chaque donnée collectée | O5 |
| 5 | `nettoyer-source` | Nettoyer à la source : espaces, unités, monnaies | O5 |
| 5 | `normaliser-prix` | Normaliser les prix : F CFA, séparateurs, promotions | O5 |
| 5 | `dates-relatives` | Les dates relatives : « il y a 3 jours » | O5 |
| 5 | `valider-pydantic-collecte` | Valider chaque enregistrement avec Pydantic | O5 |
| 5 | `garder-brut` | Garder la page brute pour pouvoir rejouer | O5 |
| 6 | `formats-sortie` | JSON Lines, CSV, Parquet : choisir | O6 |
| 6 | `base-collecte` | Une base SQLite ou PostgreSQL pour la collecte | O6 |
| 6 | `dedoublonner-collecte` | Dédoublonner : clés naturelles et empreintes | O6 |
| 6 | `historiser` | Historiser : suivre l'évolution d'un prix | O6 |
| 6 | `livrer-client` | Livrer au client : fichier, tableur, API | O6 |
| 7 | `structure-projet-scraper` | La structure d'un projet de scraping | O7 |
| 7 | `configurer-scraper` | Configurer sans toucher au code | O7 |
| 7 | `tests-scraper` | Tester un scraper sur des pages enregistrées | O7 |
| 7 | `journal-scraper` | Journaliser ce qui a été collecté et ce qui a échoué | O7 |
| 7 | `detecter-casse` | Détecter qu'un site a changé | O7 |

## Vocabulaire du module

| Terme | Catégorie (A anglais / B transparent) | Notion où il apparaît |
| --- | --- | --- |
| backoff exponentiel | A | `reessais` |
| jeton CSRF | A | `jetons-csrf` |
| sitemap | A | `sitemaps-flux` |
| JSON Lines | A | `formats-sortie` |
| empreinte (hash) | B | `dedoublonner-collecte` |
| parseur (parser) | B | `comparer-parseurs` |

## Fil rouge et ancrage local

- **Situation** : Aïcha veut maintenant le catalogue complet de trois boutiques en ligne, mis à jour chaque jour, pour comparer les prix. Il lui faut des données propres, pas des pages HTML.
- **Personnages** : Aïcha ; Koffi, qui relira ton code.
- **Données utilisées** : des sites d'entraînement et des pages enregistrées dans le dépôt, dont des versions « modifiées » pour tester la casse.

## Exercices prévus

| Id | Titre | Objectif | Difficulté (1–3) | Livrable non testable ? |
| --- | --- | --- | --- | --- |
| 7.2-ex01 à ex04 | Des requêtes HTTP professionnelles | O1 | 1 | non |
| 7.2-ex05 à ex07 | Parser vite et bien | O2 | 1 | non |
| 7.2-ex08 à ex11 | Les structures courantes | O3 | 2 | non |
| 7.2-ex12 à ex15 | Au-delà du HTML | O4 | 2 | non |
| 7.2-ex16 à ex19 | Des données propres dès la collecte | O5 | 2–3 | non |
| 7.2-ex20 à ex22 | Stocker et livrer | O6 | 2–3 | non |
| 7.2-ex23 à ex25 | Un scraper qu'on peut maintenir | O7 | 2–3 | non |
| 7.2-ex26 | Exercice clé : collecter le catalogue complet d'un site de vente (fiches, prix, stock) en données validées, historisées et testées | O7 | 3 | non |

## Ressources matérielles

- **RAM maximale** : moins de 500 Mo
- **Téléchargements** : quelques dizaines de Mo de pages enregistrées
- **Temps de calcul le plus long** : quelques secondes
- **Dépendances nouvelles** : httpx, beautifulsoup4, lxml, selectolax, parsel, pydantic, pdfplumber
- **API payante** : aucune

## Point de contrôle sécurité et éthique

- Les données collectées gardent leur source et leur date de collecte.
- Pas de données personnelles collectées sans base légale (module 7.7).
- Les tests tournent sur des pages enregistrées, jamais contre un site réel.

## Ressources externes gratuites

| Ressource | Langue | Type | Licence ou accès | Pourquoi |
| --- | --- | --- | --- | --- |
| [Documentation de httpx](https://www.python-httpx.org/) | anglais | documentation | BSD | Le client HTTP moderne de Python, synchrone et asynchrone. |
| [Documentation de Beautiful Soup](https://www.crummy.com/software/BeautifulSoup/bs4/doc/) | anglais | documentation | MIT | Le parseur le plus tolérant. |
| [lxml](https://lxml.de/) | anglais | documentation | BSD | Parser vite, avec XPath. |
| [selectolax](https://github.com/rushter/selectolax) | anglais | dépôt | MIT | Un parseur très rapide pour les gros volumes. |
| [Trafilatura](https://trafilatura.readthedocs.io/) | anglais | documentation | Apache 2.0 | Extraire le texte principal d'une page. |
| [Web Scraping Sandbox](https://toscrape.com/) | anglais | sites d'entraînement | libre | Des sites conçus pour s'entraîner. |

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

- Les versions des outils et les conditions d'utilisation des services cités, au moment de rédiger le cours.
