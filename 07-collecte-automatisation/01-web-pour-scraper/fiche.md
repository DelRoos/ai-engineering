---
id: "7.1"
titre: "Le web vu par un scraper"
parcours: "07-collecte-automatisation"
promesse: "Comprendre comment une page arrive à l'écran, où se cachent ses données et comment un site voit ton robot, pour choisir à chaque fois la bonne façon de collecter."
question_saut: "Tu sais déjà trouver l'API cachée d'un site et dire en une minute s'il faut un navigateur pour le collecter ?"
qcm: true
prerequis: ["0.5", "0.2"]
statut: brouillon
version: 1
mise_a_jour: 2026-11-25
---

# Fiche du module 7.1 — Le web vu par un scraper

## Extrait du programme

- **Contenu** : HTTP en profondeur, HTML et DOM, sélecteurs CSS et XPath, outils du développeur, API cachées, rendu serveur et client, comment les sites voient les robots
- **Exercice clé** : Cartographier un site réel : comment ses pages sont construites, où sont ses données, et quel outil utiliser pour les collecter

## Objectifs vérifiables

| Id | À la fin, l'apprenant sait… | Évalué par |
| --- | --- | --- |
| O1 | Décrire le trajet d'une requête HTTP et lire ce que disent en-têtes, codes de statut, cookies et cache. | ex01 à ex05, qcm |
| O2 | Lire la structure d'une page, distinguer le code source du DOM et retrouver les données structurées cachées. | ex06 à ex09, qcm |
| O3 | Écrire des sélecteurs CSS et XPath précis et robustes. | ex10 à ex13, qcm |
| O4 | Utiliser les outils du développeur pour trouver et rejouer les requêtes qui portent les données. | ex14 à ex18, qcm |
| O5 | Reconnaître comment une page est construite et choisir l'outil de collecte adapté. | ex19 à ex22, exercice clé (ex23), qcm |
| O6 | Expliquer comment un site détecte un robot et collecter de façon identifiable et respectueuse. | ex24 à ex28, qcm |
| O7 | Choisir le canal le plus propre qu'offre un site aux agents : API, MCP, WebMCP, Markdown ou HTML. | ex29 à ex32, qcm |

## Chapitres

| Chapitre | Titre | Exercices |
| --- | --- | --- |
| 1 | Comment une page arrive à l'écran | 5 |
| 2 | Le HTML et le DOM | 4 |
| 3 | Sélectionner un élément | 4 |
| 4 | Les outils du développeur | 5 |
| 5 | Pages statiques, pages dynamiques | 5 |
| 6 | Comment les sites voient les robots | 5 |
| 7 | Le web prêt pour les agents | 4 |

## Notions, dans l'ordre

| Chapitre | Id de la notion | Notion | Objectif |
| --- | --- | --- | --- |
| 1 | `requete-reponse` | Le trajet d'une requête : DNS, TCP, TLS, HTTP | O1 |
| 1 | `en-tetes-http-scraper` | Les en-têtes qui comptent pour un scraper | O1 |
| 1 | `codes-statut-scraper` | Lire les codes de statut : 200, 301, 403, 429, 503 | O1 |
| 1 | `versions-http` | HTTP/1.1, HTTP/2, HTTP/3 : ce qui change pour toi | O1 |
| 1 | `cookies-sessions` | Cookies et sessions : comment un site se souvient de toi | O1 |
| 1 | `cache-etag` | Le cache : ETag, Last-Modified et requêtes conditionnelles | O1 |
| 1 | `compression` | La compression : gzip, brotli et les octets réellement transférés | O1 |
| 2 | `html-structure-scraper` | La structure d'une page : balises, attributs, arbre | O2 |
| 2 | `dom-vs-source` | Le DOM n'est pas le code source | O2 |
| 2 | `html-mal-forme` | Les pages mal formées, et comment les parseurs les réparent | O2 |
| 2 | `encodages-web` | Les encodages : UTF-8, Latin-1 et les accents cassés | O2 |
| 2 | `donnees-structurees` | Les données structurées cachées : JSON-LD, microdonnées, Open Graph | O2 |
| 2 | `iframes-shadow-dom` | Iframes et Shadow DOM : le contenu rangé ailleurs | O2 |
| 3 | `selecteurs-css-avances` | Les sélecteurs CSS en profondeur | O3 |
| 3 | `xpath` | XPath : naviguer dans l'arbre | O3 |
| 3 | `xpath-ou-css` | XPath ou CSS : choisir | O3 |
| 3 | `selecteurs-robustes` | Des sélecteurs qui survivent aux changements de la page | O3 |
| 3 | `tester-selecteurs` | Tester ses sélecteurs dans la console du navigateur | O3 |
| 3 | `textes-attributs` | Extraire textes, attributs et liens absolus | O3 |
| 4 | `devtools-elements` | L'onglet Éléments : inspecter sans se tromper | O4 |
| 4 | `onglet-reseau` | L'onglet Réseau : voir chaque requête | O4 |
| 4 | `requete-en-curl` | Copier une requête en cURL et la rejouer en Python | O4 |
| 4 | `api-cachees` | Trouver l'API cachée derrière une page | O4 |
| 4 | `graphql` | Les API GraphQL : lire et rejouer une requête | O4 |
| 4 | `websockets-sse` | WebSockets et flux d'événements : les données en direct | O4 |
| 4 | `protocoles-modernes` | Reconnaître tRPC, HTMX, gRPC-Web et les autres protocoles des sites récents | O4 |
| 5 | `rendu-serveur-client` | Rendu côté serveur, côté client, hydratation | O5 |
| 5 | `detecter-rendu` | Reconnaître en une minute comment une page est construite | O5 |
| 5 | `defilement-infini` | Le défilement infini et le chargement à la demande | O5 |
| 5 | `spa-routes` | Les applications à page unique et leurs routes | O5 |
| 5 | `payloads-rsc` | Les React Server Components : le flux RSC des sites Next.js récents | O5 |
| 5 | `choisir-outil-collecte` | Choisir l'outil : requête simple, API cachée ou navigateur | O5 |
| 6 | `identifier-robot` | Le User-Agent : s'identifier honnêtement | O6 |
| 6 | `limites-debit-sites` | Les limites de débit et le code 429 | O6 |
| 6 | `entetes-ratelimit` | Lire les en-têtes RateLimit avant de recevoir un 429 | O6 |
| 6 | `detection-robots` | Comment un site détecte un robot, pour le comprendre et rester correct | O6 |
| 6 | `captcha-refus` | Un captcha est un refus : s'arrêter et demander un accès | O6 |
| 6 | `pages-connexion` | Les pages derrière une connexion : ce qui est permis | O6 |
| 6 | `cout-robot-site` | Ce que ton robot coûte au site visité | O6 |
| 7 | `web-agent-ready` | Le web « prêt pour les agents » : ce qui change pour la collecte | O7 |
| 7 | `markdown-pour-agents` | Demander du Markdown au serveur : Accept: text/markdown | O7 |
| 7 | `webmcp` | WebMCP : des outils exposés par la page elle-même | O7 |
| 7 | `mcp-sites` | Les serveurs MCP des sites et des boutiques | O7 |
| 7 | `llms-txt-realite` | llms.txt : ce qu'il est vraiment, et son adoption réelle | O7 |
| 7 | `choisir-canal-agent` | Choisir le canal : API, MCP, WebMCP, Markdown ou HTML | O7 |

## Vocabulaire du module

| Terme | Catégorie (A anglais / B transparent) | Notion où il apparaît |
| --- | --- | --- |
| User-Agent | A | `identifier-robot` |
| DOM (Document Object Model) | A | `dom-vs-source` |
| XPath | A | `xpath` |
| JSON-LD | A | `donnees-structurees` |
| hydratation (hydration) | B | `rendu-serveur-client` |
| rate limiting, code 429 | A | `limites-debit-sites` |
| Shadow DOM | A | `iframes-shadow-dom` |
| React Server Components (RSC), flux Flight | A | `payloads-rsc` |
| WebMCP | A | `webmcp` |
| négociation de contenu (Accept) | B | `markdown-pour-agents` |

## Fil rouge et ancrage local

- **Situation** : Aïcha veut suivre les prix des téléphones vendus en ligne à Abidjan. Avant d'écrire la moindre ligne de scraper, tu démontes trois sites de vente pour comprendre comment ils fonctionnent.
- **Personnages** : Aïcha, revendeuse de téléphones au Plateau ; son cousin Koffi, développeur web.
- **Données utilisées** : des pages de sites de démonstration conçus pour l'entraînement au scraping, et des pages enregistrées dans le dépôt. Les tests n'accèdent jamais au réseau.

## Exercices prévus

| Id | Titre | Objectif | Difficulté (1–3) | Livrable non testable ? |
| --- | --- | --- | --- | --- |
| 7.1-ex01 à ex05 | Comment une page arrive à l'écran | O1 | 1 | non |
| 7.1-ex06 à ex09 | Le HTML et le DOM | O2 | 1 | non |
| 7.1-ex10 à ex13 | Sélectionner un élément | O3 | 2 | non |
| 7.1-ex14 à ex18 | Les outils du développeur | O4 | 2 | non |
| 7.1-ex19 à ex22 | Pages statiques, pages dynamiques | O5 | 2–3 | non |
| 7.1-ex23 | Exercice clé : cartographier un site réel : comment ses pages sont construites, où sont ses données, et quel outil utiliser pour les collecter | O5 | 3 | non |
| 7.1-ex24 à ex28 | Comment les sites voient les robots | O6 | 2–3 | non |
| 7.1-ex29 à ex32 | Le web prêt pour les agents | O7 | 2–3 | non |

## Ressources matérielles

- **RAM maximale** : moins de 300 Mo
- **Téléchargements** : quelques Mo de pages enregistrées
- **Temps de calcul le plus long** : moins d'une seconde
- **Dépendances nouvelles** : httpx, beautifulsoup4, lxml (moins de 10 Mo)
- **API payante** : aucune

## Point de contrôle sécurité et éthique

- On ne collecte que des sites qui l'autorisent ou des sites d'entraînement ; les exercices utilisent des pages enregistrées.
- Un captcha ou un blocage est un refus du site : on s'arrête, on ne cherche pas à le contourner.
- On s'identifie honnêtement (User-Agent avec un contact) et on limite son débit.

## Ressources externes gratuites

| Ressource | Langue | Type | Licence ou accès | Pourquoi |
| --- | --- | --- | --- | --- |
| [HTTP (MDN)](https://developer.mozilla.org/fr/docs/Web/HTTP) | français | documentation | CC BY-SA 2.5 | La référence sur HTTP : méthodes, en-têtes, cache, cookies. |
| [Le DOM (MDN)](https://developer.mozilla.org/fr/docs/Web/API/Document_Object_Model) | français | documentation | CC BY-SA 2.5 | Comprendre l'arbre que manipule le navigateur. |
| [Les sélecteurs CSS (MDN)](https://developer.mozilla.org/fr/docs/Web/CSS/CSS_selectors) | français | documentation | CC BY-SA 2.5 | Tous les sélecteurs, avec des exemples. |
| [Chrome DevTools, l'onglet Réseau](https://developer.chrome.com/docs/devtools/network) | anglais | documentation | accès libre | Inspecter et rejouer les requêtes d'une page. |
| [Books to Scrape](https://books.toscrape.com/) | anglais | site d'entraînement | libre | Un site fait pour s'entraîner au scraping, sans risque. |
| [Quotes to Scrape](https://quotes.toscrape.com/) | anglais | site d'entraînement | libre | Des variantes : pagination, connexion, JavaScript, défilement infini. |
| [Markdown for Agents (Cloudflare)](https://developers.cloudflare.com/fundamentals/reference/markdown-for-agents/) | anglais | documentation | accès libre | Demander du Markdown au lieu du HTML, avec l'estimation des tokens. |
| [WebMCP chez Commerce.com et Cloudflare](https://blog.cloudflare.com/webmcp-commerce/) | anglais | article | accès libre | Le premier déploiement à grande échelle d'outils exposés aux agents par la page (standard encore expérimental). |
| [Étude Ahrefs sur llms.txt](https://ahrefs.com/blog/llmstxt-study/) | anglais | étude | accès libre | Ce que llms.txt devient réellement : peu adopté, presque jamais lu. |
| [En-têtes RateLimit (IETF, brouillon)](https://datatracker.ietf.org/doc/draft-ietf-httpapi-ratelimit-headers/) | anglais | norme en cours | libre | Connaître sa limite avant de la dépasser. |
| [rsc-parser](https://github.com/alvarlagerlof/rsc-parser) | anglais | dépôt | MIT | Lire un flux React Server Components. |

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
