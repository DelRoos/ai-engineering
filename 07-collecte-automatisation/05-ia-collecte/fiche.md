---
id: "7.5"
titre: "L'IA au service de la collecte"
parcours: "07-collecte-automatisation"
promesse: "Utiliser les LLM, les modèles vision-langage et les agents navigateur pour extraire des données de pages qui changent sans cesse, réparer les scrapers et transformer la collecte en information, en contrôlant la qualité et le coût."
question_saut: "Tu as déjà mesuré la qualité et le coût d'une extraction par LLM sur des dizaines de sites différents ?"
qcm: true
prerequis: ["7.2", "3.2", "3.6"]
statut: brouillon
version: 1
mise_a_jour: 2026-11-25
---

# Fiche du module 7.5 — L'IA au service de la collecte

## Extrait du programme

- **Contenu** : extraction par LLM, schémas, vérification dans la source, scrapers qui se réparent, vision sur captures, agents navigateur, classification et veille
- **Exercice clé** : Extraire avec un LLM les annonces de 30 sites aux structures différentes, avec vérification dans la source, évaluation champ par champ et coût mesuré

## Objectifs vérifiables

| Id | À la fin, l'apprenant sait… | Évalué par |
| --- | --- | --- |
| O1 | Extraire des données structurées avec un LLM à partir de pages préparées, à coût maîtrisé. | ex01 à ex04, qcm |
| O2 | Fiabiliser une extraction par LLM : vérifier dans la source, combiner avec des sélecteurs, évaluer. | ex05 à ex07, exercice clé (ex08), qcm |
| O3 | Faire générer et réparer des sélecteurs par un LLM, sous contrôle. | ex09 à ex11, qcm |
| O4 | Extraire des données à partir de captures d'écran avec un modèle vision-langage. | ex12 à ex14, qcm |
| O5 | Utiliser un agent navigateur borné, et l'évaluer. | ex15 à ex18, qcm |
| O6 | Transformer une collecte en information : classer, extraire des entités, dédoublonner, résumer, alerter. | ex19 à ex21, qcm |

## Chapitres

| Chapitre | Titre | Exercices |
| --- | --- | --- |
| 1 | Extraire avec un LLM | 4 |
| 2 | Fiabiliser l'extraction | 4 |
| 3 | Des scrapers qui se réparent | 3 |
| 4 | Voir la page | 3 |
| 5 | Les agents navigateur | 4 |
| 6 | De la collecte à l'information | 3 |

## Notions, dans l'ordre

| Chapitre | Id de la notion | Notion | Objectif |
| --- | --- | --- | --- |
| 1 | `pourquoi-llm-extraction` | Quand un LLM vaut mieux qu'un sélecteur | O1 |
| 1 | `html-vers-markdown` | Réduire la page avant de l'envoyer : nettoyage et Markdown | O1 |
| 1 | `schema-extraction` | Un schéma Pydantic pour chaque extraction | O1 |
| 1 | `sorties-contraintes-extraction` | Sorties structurées et génération contrainte | O1 |
| 1 | `extraction-modele-local` | Extraire avec un petit modèle local | O1 |
| 1 | `cout-extraction` | Le coût d'une page extraite par LLM | O1 |
| 2 | `valeurs-inventees` | Les valeurs inventées : les détecter | O2 |
| 2 | `verifier-dans-source` | Vérifier que chaque valeur est bien dans la page | O2 |
| 2 | `extraction-hybride` | Sélecteurs pour le stable, LLM pour le variable | O2 |
| 2 | `evaluer-extraction-champs` | Évaluer champ par champ sur un jeu annoté | O2 |
| 2 | `cache-extraction` | Mettre en cache par page et par version | O2 |
| 3 | `generer-selecteurs` | Faire écrire les sélecteurs par un LLM | O3 |
| 3 | `reparer-selecteurs` | Réparer un sélecteur cassé automatiquement | O3 |
| 3 | `valider-reparation` | Valider une réparation avant de la déployer | O3 |
| 3 | `generer-scraper` | Générer un scraper complet à partir d'exemples | O3 |
| 3 | `limites-auto-reparation` | Les limites : quand un humain doit reprendre la main | O3 |
| 4 | `capture-vers-donnees` | Lire une capture d'écran avec un modèle vision-langage | O4 |
| 4 | `pages-ou-dom-ment` | Les pages où le DOM ment : canvas, images de texte | O4 |
| 4 | `documents-scannes-web` | Les documents scannés publiés en ligne | O4 |
| 4 | `cout-vision` | Le coût de la vision, page par page | O4 |
| 4 | `vision-ou-dom` | Vision ou DOM : choisir | O4 |
| 5 | `boucle-agent-navigateur` | La boucle d'un agent navigateur : voir, décider, agir | O5 |
| 5 | `agent-navigateur-ouvert` | Un agent avec une bibliothèque ouverte comme browser-use | O5 |
| 5 | `computer-use` | Le computer use : un agent qui pilote l'écran | O5 |
| 5 | `borner-agent-navigateur` | Borner l'agent : domaines, actions, budget | O5 |
| 5 | `pages-piegees` | Les pages piégées : l'injection indirecte par le web | O5 |
| 5 | `evaluer-agent-navigateur` | Évaluer un agent navigateur sur des tâches | O5 |
| 6 | `classer-collecte` | Classer ce qu'on collecte : catégories, sentiment | O6 |
| 6 | `entites-collecte` | Extraire personnes, lieux et organisations | O6 |
| 6 | `doublons-semantiques-collecte` | Rapprocher les doublons par le sens | O6 |
| 6 | `resumer-veille` | Résumer une veille quotidienne | O6 |
| 6 | `alertes-pertinentes` | Des alertes qui ne sonnent que pour l'important | O6 |

## Vocabulaire du module

| Terme | Catégorie (A anglais / B transparent) | Notion où il apparaît |
| --- | --- | --- |
| extraction structurée | B | `schema-extraction` |
| agent navigateur (browser agent) | B | `boucle-agent-navigateur` |
| computer use | A | `computer-use` |
| auto-réparation (self-healing) | B | `reparer-selecteurs` |
| injection indirecte | B | `pages-piegees` |

## Fil rouge et ancrage local

- **Situation** : Une agence de veille d'Abidjan suit les appels d'offres et les annonces de 30 sites qui ne se ressemblent pas. Écrire un scraper par site est intenable ; tu combines sélecteurs et LLM.
- **Personnages** : Mariam, directrice de l'agence ; Yao, analyste qui vérifie les résultats.
- **Données utilisées** : 30 sites de démonstration aux structures différentes, servis en local, et un jeu annoté de 300 pages.

## Exercices prévus

| Id | Titre | Objectif | Difficulté (1–3) | Livrable non testable ? |
| --- | --- | --- | --- | --- |
| 7.5-ex01 à ex04 | Extraire avec un LLM | O1 | 1 | non |
| 7.5-ex05 à ex07 | Fiabiliser l'extraction | O2 | 1 | non |
| 7.5-ex08 | Exercice clé : extraire avec un LLM les annonces de 30 sites aux structures différentes, avec vérification dans la source, évaluation champ par champ et coût mesuré | O2 | 3 | non |
| 7.5-ex09 à ex11 | Des scrapers qui se réparent | O3 | 2 | non |
| 7.5-ex12 à ex14 | Voir la page | O4 | 2 | non |
| 7.5-ex15 à ex18 | Les agents navigateur | O5 | 2–3 | non |
| 7.5-ex19 à ex21 | De la collecte à l'information | O6 | 2–3 | non |

## Ressources matérielles

- **RAM maximale** : moins de 6 Go (petit modèle local quantifié)
- **Téléchargements** : un petit modèle local (environ 2 Go)
- **Temps de calcul le plus long** : quelques secondes par page en local
- **Dépendances nouvelles** : pydantic, ollama, playwright, trafilatura
- **API payante** : facultative : une API de LLM avec un budget fixé ; tout se fait aussi en local

## Point de contrôle sécurité et éthique

- Une valeur extraite par un LLM n'est livrée que si elle est retrouvée dans la page source.
- Un agent navigateur est borné : domaines autorisés, aucune action d'écriture sans validation, budget plafonné.
- Le contenu des pages est traité comme des données, jamais comme des instructions (injection indirecte).

## Ressources externes gratuites

| Ressource | Langue | Type | Licence ou accès | Pourquoi |
| --- | --- | --- | --- | --- |
| [Pydantic](https://docs.pydantic.dev/) | anglais | documentation | MIT | Décrire et valider ce qu'on extrait. |
| [browser-use](https://github.com/browser-use/browser-use) | anglais | dépôt | MIT | Un agent navigateur ouvert, à étudier et à borner. |
| [Trafilatura](https://trafilatura.readthedocs.io/) | anglais | documentation | Apache 2.0 | Réduire une page à son contenu avant de l'envoyer au modèle. |
| [Ollama](https://github.com/ollama/ollama) | anglais | dépôt | MIT | Extraire en local, sans coût par page. |

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
