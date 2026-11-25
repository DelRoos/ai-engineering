---
id: "7.3"
titre: "Scraper à grande échelle"
parcours: "07-collecte-automatisation"
promesse: "Passer d'un script à une collecte industrielle : Scrapy, asynchrone, politesse, crawl incrémental, planification, surveillance, jusqu'au web ouvert et aux corpus de millions de pages."
question_saut: "Tu as déjà fait tourner une collecte planifiée de dizaines de milliers de pages, surveillée en production ?"
qcm: true
prerequis: ["7.2", "4.3", "4.5"]
statut: brouillon
version: 1
mise_a_jour: 2026-11-25
---

# Fiche du module 7.3 — Scraper à grande échelle

## Extrait du programme

- **Contenu** : Scrapy, asynchrone et concurrence, politesse, stratégies de crawl, crawl incrémental, conteneurs et planification, surveillance, Common Crawl et corpus
- **Exercice clé** : Un crawler planifié qui suit chaque jour 50 000 pages de petites annonces, poliment, avec surveillance et alertes

## Objectifs vérifiables

| Id | À la fin, l'apprenant sait… | Évalué par |
| --- | --- | --- |
| O1 | Construire une collecte avec Scrapy : spiders, items, pipelines, middlewares, réglages. | ex01 à ex05, ex06 à ex08, qcm |
| O2 | Accélérer une collecte par l'asynchrone sans saturer ni la machine ni les sites. | ex09 à ex11, qcm |
| O3 | Collecter poliment : débit adaptatif, robots.txt, cache, contact. | ex12 à ex16, qcm |
| O4 | Concevoir une stratégie de crawl : frontière, canonicalisation, pièges, crawl incrémental. | ex17 à ex20, qcm |
| O5 | Conteneuriser, planifier, répartir et reprendre une collecte. | ex21 à ex23, qcm |
| O6 | Surveiller une collecte en production et réagir à ses dégradations. | ex24 à ex27, exercice clé (ex28), qcm |
| O7 | Exploiter le web déjà collecté et construire un corpus de texte propre. | ex29 à ex31, qcm |

## Chapitres

| Chapitre | Titre | Exercices |
| --- | --- | --- |
| 1 | Scrapy | 5 |
| 2 | L'architecture moderne d'une collecte | 3 |
| 3 | L'asynchrone et la concurrence | 3 |
| 4 | Collecter poliment | 5 |
| 5 | Crawler | 4 |
| 6 | Conteneuriser et planifier | 3 |
| 7 | Surveiller en production | 5 |
| 8 | Le web déjà collecté | 3 |

## Notions, dans l'ordre

| Chapitre | Id de la notion | Notion | Objectif |
| --- | --- | --- | --- |
| 1 | `pourquoi-scrapy` | Pourquoi un framework : ce que Scrapy fait pour toi | O1 |
| 1 | `premier-spider` | Un premier spider | O1 |
| 1 | `items-loaders` | Items et item loaders | O1 |
| 1 | `crawlspider` | Suivre les liens : CrawlSpider et ses règles | O1 |
| 1 | `pipelines-scrapy` | Les pipelines : nettoyer, valider, stocker | O1 |
| 1 | `middlewares-scrapy` | Les middlewares : en-têtes, réessais, cache | O1 |
| 1 | `reglages-scrapy` | Les réglages qui comptent | O1 |
| 2 | `page-objects` | Séparer récupération et extraction : web-poet et scrapy-poet | O1 |
| 2 | `scrapy-playwright` | Le rendu JavaScript ciblé dans Scrapy : scrapy-playwright | O1 |
| 2 | `crawlee-python` | Crawlee pour Python : l'alternative asynchrone moderne | O1 |
| 2 | `crawlers-ia-first` | Les crawlers conçus pour l'IA : Crawl4AI, Firecrawl, Jina Reader | O1 |
| 2 | `choisir-framework-collecte` | Choisir son outil de collecte : un tableau de décision | O1 |
| 3 | `asynchrone-collecte` | Pourquoi l'asynchrone accélère la collecte | O2 |
| 3 | `asyncio-httpx` | asyncio et httpx en pratique | O2 |
| 3 | `concurrence-par-domaine` | Limiter la concurrence par domaine | O2 |
| 3 | `file-urls` | Une file d'URL avec priorités | O2 |
| 3 | `memoire-crawl` | La mémoire d'un grand crawl | O2 |
| 4 | `politesse` | La politesse : délais, horaires, charge | O3 |
| 4 | `autothrottle` | Adapter sa vitesse aux réponses du site | O3 |
| 4 | `robots-txt-code` | Lire robots.txt dans le code : la RFC 9309 | O3 |
| 4 | `cache-http-collecte` | Ne pas redemander ce qu'on a déjà | O3 |
| 4 | `contact-site` | Prévenir le site et laisser un contact | O3 |
| 4 | `mesurer-impact-site` | Mesurer l'impact de ton robot | O3 |
| 4 | `ratelimit-adapter` | Adapter son débit aux en-têtes RateLimit | O3 |
| 5 | `strategie-crawl` | Largeur ou profondeur : la stratégie de crawl | O4 |
| 5 | `frontiere-urls` | La frontière : quelles URL visiter ensuite | O4 |
| 5 | `canonicaliser` | Canonicaliser les URL : paramètres, ancres, doublons | O4 |
| 5 | `pieges-crawl` | Les pièges : calendriers infinis, filtres combinés | O4 |
| 5 | `crawl-incremental` | Le crawl incrémental : ne revisiter que ce qui change | O4 |
| 5 | `crawl-cible` | Le crawl ciblé : rester sur le sujet | O4 |
| 6 | `planifier-collecte` | Planifier une collecte quotidienne | O5 |
| 6 | `conteneuriser-scraper` | Mettre un scraper dans un conteneur | O5 |
| 6 | `repartir-machines` | Répartir le travail entre plusieurs machines | O5 |
| 6 | `reprendre-crawl` | Reprendre un crawl interrompu | O5 |
| 6 | `cout-collecte` | Le coût d'une collecte : machines, réseau, stockage | O5 |
| 7 | `metriques-collecte` | Les métriques d'une collecte : pages, erreurs, items | O6 |
| 7 | `alertes-collecte` | Alerter quand la collecte se dégrade | O6 |
| 7 | `qualite-collecte` | Mesurer la qualité des données collectées | O6 |
| 7 | `absorber-changement` | Détecter et absorber un changement de site | O6 |
| 7 | `tableau-collectes` | Un tableau de bord de toutes les collectes | O6 |
| 7 | `opentelemetry-collecte` | Tracer une collecte de bout en bout avec OpenTelemetry | O6 |
| 8 | `common-crawl` | Common Crawl : le web déjà collecté | O7 |
| 8 | `extraire-texte-masse` | Extraire le texte de millions de pages | O7 |
| 8 | `dedoublonner-masse` | Dédoublonner à grande échelle : MinHash | O7 |
| 8 | `filtrer-langue-qualite` | Filtrer par langue et par qualité | O7 |
| 8 | `corpus-langues-africaines` | Construire un corpus en langues africaines | O7 |

## Vocabulaire du module

| Terme | Catégorie (A anglais / B transparent) | Notion où il apparaît |
| --- | --- | --- |
| spider | A | `premier-spider` |
| pipeline (Scrapy) | A | `pipelines-scrapy` |
| middleware | A | `middlewares-scrapy` |
| AutoThrottle | A | `autothrottle` |
| frontière de crawl (crawl frontier) | B | `frontiere-urls` |
| URL canonique | B | `canonicaliser` |
| MinHash | A | `dedoublonner-masse` |
| Common Crawl | A | `common-crawl` |
| page object | A | `page-objects` |
| OpenTelemetry | A | `opentelemetry-collecte` |

## Fil rouge et ancrage local

- **Situation** : Une start-up de Dakar veut un tableau de bord du marché immobilier à partir des petites annonces en ligne. Il faut suivre 50 000 pages chaque jour, sans gêner les sites.
- **Personnages** : Ndèye, fondatrice de la start-up ; Moussa, son développeur.
- **Données utilisées** : un site d'annonces de démonstration servi en local (plusieurs milliers de pages générées), et des pages enregistrées.

## Exercices prévus

| Id | Titre | Objectif | Difficulté (1–3) | Livrable non testable ? |
| --- | --- | --- | --- | --- |
| 7.3-ex01 à ex05 | Scrapy | O1 | 1 | non |
| 7.3-ex06 à ex08 | L'architecture moderne d'une collecte | O1 | 1 | non |
| 7.3-ex09 à ex11 | L'asynchrone et la concurrence | O2 | 2 | non |
| 7.3-ex12 à ex16 | Collecter poliment | O3 | 2 | non |
| 7.3-ex17 à ex20 | Crawler | O4 | 2 | non |
| 7.3-ex21 à ex23 | Conteneuriser et planifier | O5 | 2–3 | non |
| 7.3-ex24 à ex27 | Surveiller en production | O6 | 2–3 | non |
| 7.3-ex28 | Exercice clé : un crawler planifié qui suit chaque jour 50 000 pages de petites annonces, poliment, avec surveillance et alertes | O6 | 3 | non |
| 7.3-ex29 à ex31 | Le web déjà collecté | O7 | 2–3 | non |

## Épreuve de niveau expert

**Épreuve** : collecter le même site de démonstration avec trois outils (Scrapy avec scrapy-poet, Crawlee, un crawler conçu pour l'IA), à débit égal et sous les mêmes règles de politesse, puis recommander un outil selon la fiabilité, le coût, la maintenance et la qualité des données.

| Niveau démontré | Preuve attendue |
| --- | --- |
| Implémenter | Les trois collectes, planifiées et relançables |
| Diagnostiquer | Les erreurs et les changements de site, repérés par la surveillance |
| Comparer | Un tableau débit, erreurs, mémoire, qualité, sur le même site |
| Maintenir | Les extracteurs testés hors ligne et archivés en WARC |

**Statut des méthodes enseignées**

| Méthode | Statut | Pratique |
| --- | --- | --- |
| Scrapy, asynchrone, politesse, crawl incrémental | établie | autonome, sur un site de démonstration local |
| web-poet et scrapy-poet, scrapy-playwright, Crawlee | établie | autonome |
| Crawlers conçus pour l'IA (Crawl4AI, Firecrawl, Jina Reader) | récente | autonome en local, versions et licences à vérifier au moment du cours |
| En-têtes RateLimit | norme en cours (brouillon IETF) | lecture et adaptation du débit quand le serveur les envoie |
| Traçage OpenTelemetry d'une collecte | établie | autonome |

## Ressources matérielles

- **RAM maximale** : moins de 2 Go
- **Téléchargements** : quelques centaines de Mo (pages de démonstration, extrait de Common Crawl)
- **Temps de calcul le plus long** : quelques minutes pour un crawl de démonstration
- **Dépendances nouvelles** : scrapy, httpx, datasketch, Docker
- **API payante** : aucune

## Point de contrôle sécurité et éthique

- Débit plafonné par domaine, respect de robots.txt, User-Agent avec contact, sur chaque collecte.
- Les crawls des exercices tournent contre un site de démonstration servi en local.
- Un corpus publié garde ses sources et leurs licences (module 7.7).

## Ressources externes gratuites

| Ressource | Langue | Type | Licence ou accès | Pourquoi |
| --- | --- | --- | --- | --- |
| [Documentation de Scrapy](https://docs.scrapy.org/) | anglais | documentation | BSD | Le framework de référence pour la collecte à grande échelle. |
| [RFC 9309 : le protocole robots.txt](https://www.rfc-editor.org/rfc/rfc9309) | anglais | norme | libre | Ce que robots.txt dit vraiment. |
| [Common Crawl](https://commoncrawl.org/) | anglais | jeux de données | conditions d'utilisation du site | Des milliards de pages déjà collectées. |
| [Crawlee pour Python](https://crawlee.dev/python/) | anglais | documentation | Apache 2.0 | L'alternative asynchrone moderne à Scrapy, avec file persistante et navigateur adaptatif. |
| [web-poet](https://web-poet.readthedocs.io/) | anglais | documentation | BSD | Des extracteurs réutilisables et testables, séparés du réseau. |
| [scrapy-playwright](https://github.com/scrapy-plugins/scrapy-playwright) | anglais | dépôt | BSD | Un navigateur seulement pour les pages qui en ont besoin. |
| [Crawl4AI](https://docs.crawl4ai.com/) | anglais | documentation | Apache 2.0 | Un crawler pensé pour produire du Markdown et des données pour l'IA. |
| [Firecrawl](https://github.com/firecrawl/firecrawl) | anglais | dépôt | AGPL | Un crawler et une API qui rendent des pages prêtes pour les LLM. |
| [Jina Reader](https://github.com/jina-ai/reader) | anglais | dépôt | Apache 2.0 | Lire une page sous forme de texte propre pour un modèle. |
| [OpenTelemetry pour Python](https://opentelemetry.io/docs/languages/python/) | anglais | documentation | Apache 2.0 | Tracer requêtes, rendu et appels de modèle dans une même vue. |
| [datatrove](https://github.com/huggingface/datatrove) | anglais | dépôt | Apache 2.0 | Filtrer et dédoublonner du texte à grande échelle. |

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
