---
id: "7.8"
titre: "Le scraping en 2026 : protections, accès et IA"
parcours: "07-collecte-automatisation"
promesse: "Comprendre en profondeur les protections anti-robots modernes et le web à l'ère de l'IA, savoir lire un blocage, obtenir un accès légitime aux données, collecter sans contourner, et protéger un site contre la collecte abusive."
question_saut: "Tu sais déjà expliquer pourquoi une collecte est bloquée, et obtenir un accès légitime plutôt que forcer ?"
qcm: true
prerequis: ["7.3", "7.4", "7.7"]
statut: brouillon
version: 1
mise_a_jour: 2026-11-25
---

# Fiche du module 7.8 — Le scraping en 2026 : protections, accès et IA

## Extrait du programme

- **Contenu** : systèmes anti-robots (empreintes TLS et HTTP/2, empreinte du navigateur, comportement, réputation des IP, défis), ligne rouge juridique, accès légitimes (API, partenariats, robots vérifiés, Web Bot Auth, paiement à la collecte), robots et agents d'IA, collecte à faible empreinte, protéger un site
- **Exercice clé** : Diagnostiquer une collecte bloquée, obtenir un accès légitime ou une source de remplacement, puis protéger un site de démonstration contre la collecte abusive

## Objectifs vérifiables

| Id | À la fin, l'apprenant sait… | Évalué par |
| --- | --- | --- |
| O1 | Expliquer comment les systèmes anti-robots modernes détectent un robot, et lire un blocage. | ex01 à ex05, qcm |
| O2 | Situer la ligne rouge juridique et éthique du contournement, et en mesurer les risques. | ex06 à ex08, qcm |
| O3 | Obtenir un accès légitime aux données : API, partenariats, fournisseurs, robots vérifiés, requêtes signées. | ex09 à ex12, qcm |
| O4 | Comprendre le web à l'ère de l'IA : robots et agents d'IA, signaux de refus, contenus publiés pour les agents. | ex13 à ex16, qcm |
| O5 | Collecter de façon robuste et sobre sans rien contourner, et savoir s'arrêter. | ex17 à ex19, qcm |
| O6 | Protéger un site contre la collecte abusive en laissant passer les robots légitimes. | ex20 à ex23, exercice clé (ex24), qcm |

## Chapitres

| Chapitre | Titre | Exercices |
| --- | --- | --- |
| 1 | Comment fonctionnent les protections anti-robots | 5 |
| 2 | La ligne rouge | 3 |
| 3 | Obtenir un accès légitime | 4 |
| 4 | Le web à l'ère de l'IA | 4 |
| 5 | Collecter robuste, sans contourner | 3 |
| 6 | L'autre côté : protéger un site | 5 |

## Notions, dans l'ordre

| Chapitre | Id de la notion | Notion | Objectif |
| --- | --- | --- | --- |
| 1 | `paysage-anti-robots` | Le paysage en 2026 : les grands systèmes de gestion des robots | O1 |
| 1 | `empreinte-tls` | L'empreinte TLS et HTTP/2 : JA3, JA4 | O1 |
| 1 | `empreinte-navigateur` | L'empreinte du navigateur : canvas, WebGL, polices, automatisation détectée | O1 |
| 1 | `analyse-comportement` | L'analyse du comportement : souris, rythme, parcours | O1 |
| 1 | `reputation-ip` | La réputation des adresses IP : centres de données, résidentielles, mobiles | O1 |
| 1 | `defis-javascript` | Les défis JavaScript et les jetons de preuve | O1 |
| 1 | `captchas-modernes` | Les captchas modernes et les défis invisibles | O1 |
| 1 | `lire-blocage` | Lire un blocage : quel système, quelle règle, quelle réponse | O1 |
| 2 | `ligne-rouge-contournement` | Pourquoi contourner une protection expose à des poursuites | O2 |
| 2 | `lois-acces-frauduleux` | Les lois sur l'accès frauduleux et les décisions récentes | O2 |
| 2 | `proxies-usages` | Les proxies : usages légitimes et dérives des réseaux résidentiels | O2 |
| 2 | `resolveurs-captchas` | Les services de résolution de captchas : pourquoi un professionnel s'en tient loin | O2 |
| 2 | `risques-client-collecte` | Les risques pour ton client et pour toi | O2 |
| 3 | `negocier-api` | Trouver et négocier une API officielle | O3 |
| 3 | `accords-donnees` | Les partenariats et les accords de données | O3 |
| 3 | `fournisseurs-donnees` | Acheter des données à des fournisseurs licenciés | O3 |
| 3 | `robots-verifies` | Devenir un robot vérifié : les programmes des CDN | O3 |
| 3 | `web-bot-auth` | Signer ses requêtes : Web Bot Auth et les signatures HTTP | O3 |
| 3 | `paiement-collecte` | Le paiement à la collecte (pay per crawl) | O3 |
| 4 | `crawlers-ia` | Les robots des entreprises d'IA et leur poids sur le web | O4 |
| 4 | `signaux-refus-ia` | Refuser l'IA : robots.txt, en-têtes et signaux de contenu | O4 |
| 4 | `agents-identifies` | Les agents d'IA qui naviguent pour un utilisateur : s'identifier | O4 |
| 4 | `publier-pour-agents` | Les sites qui publient pour les agents : llms.txt, API, MCP | O4 |
| 4 | `marche-donnees-ia` | Le marché des données d'entraînement et ses licences | O4 |
| 4 | `surcharge-robots-ia` | Quand les robots d'IA saturent les petits sites | O4 |
| 5 | `faible-empreinte` | Une collecte à faible empreinte : peu de requêtes, au bon moment | O5 |
| 5 | `reutiliser-existant` | Réutiliser ce qui existe : archives, Common Crawl, jeux publiés | O5 |
| 5 | `demande-acces-efficace` | Écrire au site : une demande d'accès qui obtient une réponse | O5 |
| 5 | `plan-b-donnees` | Le plan B quand l'accès est refusé : autres sources, collecte de terrain | O5 |
| 5 | `taux-blocage` | Surveiller ses taux de blocage et s'arrêter à temps | O5 |
| 6 | `proteger-site` | Protéger son site contre la collecte abusive | O6 |
| 6 | `regles-robots` | Configurer une gestion des robots : règles, limites, défis | O6 |
| 6 | `detecter-scrapers` | Repérer les scrapers dans ses journaux | O6 |
| 6 | `proteger-api-collecte` | Protéger une API : clés, quotas, signatures | O6 |
| 6 | `laisser-passer-bons-robots` | Laisser passer les bons robots : moteurs de recherche, partenaires, robots vérifiés | O6 |
| 6 | `vendre-protection` | Vendre la protection contre la collecte abusive | O6 |

## Vocabulaire du module

| Terme | Catégorie (A anglais / B transparent) | Notion où il apparaît |
| --- | --- | --- |
| empreinte TLS (JA3, JA4) | A | `empreinte-tls` |
| empreinte du navigateur (browser fingerprinting) | B | `empreinte-navigateur` |
| gestion des robots (bot management) | B | `paysage-anti-robots` |
| robot vérifié (verified bot) | B | `robots-verifies` |
| Web Bot Auth, signatures de messages HTTP | A | `web-bot-auth` |
| pay per crawl | A | `paiement-collecte` |
| llms.txt | A | `publier-pour-agents` |

## Fil rouge et ancrage local

- **Situation** : L'agence de veille de Mariam voit ses collectes bloquées sur trois sites majeurs. Un concurrent lui propose des « proxies résidentiels et un résolveur de captchas ». Tu lui montres comment s'en sortir sans risque juridique, puis tu protèges son propre site, pillé chaque nuit.
- **Personnages** : Mariam, directrice de l'agence de veille ; Yao, analyste ; Me Diallo, avocate conseil.
- **Données utilisées** : des journaux de serveur et des réponses de blocage enregistrés, un site de démonstration servi en local avec une protection configurable.

## Exercices prévus

| Id | Titre | Objectif | Difficulté (1–3) | Livrable non testable ? |
| --- | --- | --- | --- | --- |
| 7.8-ex01 à ex05 | Comment fonctionnent les protections anti-robots | O1 | 1 | non |
| 7.8-ex06 à ex08 | La ligne rouge | O2 | 1 | non |
| 7.8-ex09 à ex12 | Obtenir un accès légitime | O3 | 2 | non |
| 7.8-ex13 à ex16 | Le web à l'ère de l'IA | O4 | 2 | non |
| 7.8-ex17 à ex19 | Collecter robuste, sans contourner | O5 | 2–3 | non |
| 7.8-ex20 à ex23 | L'autre côté : protéger un site | O6 | 2–3 | non |
| 7.8-ex24 | Exercice clé : diagnostiquer une collecte bloquée, obtenir un accès légitime ou une source de remplacement, puis protéger un site de démonstration contre la collecte abusive | O6 | 3 | non |

## Ressources matérielles

- **RAM maximale** : moins de 1 Go
- **Téléchargements** : quelques Mo de journaux et de réponses enregistrés
- **Temps de calcul le plus long** : quelques secondes
- **Dépendances nouvelles** : httpx, playwright, un serveur de démonstration local
- **API payante** : aucune

## Point de contrôle sécurité et éthique

- Ce module explique les protections pour lire un blocage et protéger un site ; il n'enseigne pas à les contourner (usurpation d'empreinte, rotation de proxies pour échapper aux blocages, résolution de captchas).
- Un blocage est une réponse du site : on s'arrête, on cherche un accès légitime ou une autre source.
- Les exercices tournent sur un site de démonstration local et des journaux enregistrés.

## Ressources externes gratuites

| Ressource | Langue | Type | Licence ou accès | Pourquoi |
| --- | --- | --- | --- | --- |
| [JA4+ (FoxIO)](https://github.com/FoxIO-LLC/ja4) | anglais | dépôt | licences du dépôt | Comprendre les empreintes réseau utilisées par les systèmes anti-robots. |
| [OWASP Automated Threats to Web Applications](https://owasp.org/www-project-automated-threats-to-web-applications/) | anglais | référence | CC BY-SA | La classification des menaces automatisées, vue du défenseur. |
| [Cloudflare, les robots vérifiés](https://developers.cloudflare.com/bots/concepts/bot/verified-bots/) | anglais | documentation | accès libre | Comment un robot légitime se fait reconnaître. |
| [Web Bot Auth (IETF, brouillon)](https://datatracker.ietf.org/doc/draft-meunier-web-bot-auth-architecture/) | anglais | norme en cours | libre | Signer les requêtes d'un robot pour prouver son identité. |
| [RFC 9421 : HTTP Message Signatures](https://www.rfc-editor.org/rfc/rfc9421) | anglais | norme | libre | La signature des messages HTTP, base de Web Bot Auth. |
| [Pay per crawl (Cloudflare)](https://blog.cloudflare.com/introducing-pay-per-crawl/) | anglais | article | accès libre | Payer l'accès aux contenus plutôt que les prendre. |
| [llms.txt](https://llmstxt.org/) | anglais | proposition | libre | Les contenus que les sites publient pour les modèles et les agents. |

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
