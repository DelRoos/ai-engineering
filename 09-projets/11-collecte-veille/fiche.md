---
id: "9.11"
titre: "Collecte et veille"
parcours: "09-projets"
nature: projets
promesse: "Cinq projets de collecte de données qui alimentent de vraies décisions : un observatoire des prix, un agrégateur d'annonces immobilières, une veille de l'emploi, une veille concurrentielle et un corpus en langues africaines. Collectés à grande échelle, proprement et dans les règles."
question_saut: "Tu as déjà livré une collecte planifiée, surveillée et juridiquement validée, utilisée par un client ?"
qcm: false
prerequis: ["7.2", "7.3", "7.4", "7.5", "7.7", "7.8"]
statut: brouillon
version: 1
mise_a_jour: 2026-11-25
---

# 9.11 — Collecte et veille

## Extrait du programme

- **Exercice clé** : Livrer de bout en bout au moins un projet de la famille, planifié, surveillé, documenté par sa fiche de données

## Objectifs vérifiables

| Id | À la fin, l'apprenant sait… | Évalué par |
| --- | --- | --- |
| O1 | Livrer un observatoire des prix qui combine collecte en ligne et collecte de terrain. | projet 1 |
| O2 | Agréger des annonces de plusieurs sites, dédoublonnées et vérifiées, dans le respect des sources. | projet 2 |
| O3 | Construire une veille de l'emploi qui extrait les compétences demandées avec un LLM. | projet 3 |
| O4 | Livrer une veille concurrentielle quotidienne et ses alertes. | projet 4 |
| O5 | Construire et publier un corpus de texte en langues africaines, propre et documenté. | projet 5 |

## Chapitres

| Chapitre | Titre | Exercices |
| --- | --- | --- |
| 1 | Un observatoire des prix des produits de base | 0 |
| 2 | Un agrégateur d'annonces immobilières à Abidjan | 0 |
| 3 | Une veille de l'emploi en Afrique francophone | 0 |
| 4 | La veille concurrentielle d'une boutique en ligne | 0 |
| 5 | Un corpus de textes en wolof et en haoussa | 0 |

## Notions, dans l'ordre

| Chapitre | Id de la notion | Notion | Objectif |
| --- | --- | --- | --- |
| 1 | `panier-produits` | Le panier de produits et les questions des décideurs | O1 |
| 1 | `sources-prix` | Les sources : sites marchands, journaux, relevés de terrain | O1 |
| 1 | `collecte-prix-en-ligne` | La collecte en ligne, site par site | O1 |
| 1 | `releves-terrain` | Les relevés de terrain avec KoboToolbox | O1 |
| 1 | `rapprocher-produits` | Rapprocher les mêmes produits malgré des noms différents | O1 |
| 1 | `unites-conditionnements` | Unités et conditionnements : le prix au kilo | O1 |
| 1 | `indices-tendances` | Calculer des indices et des tendances | O1 |
| 1 | `tableau-alertes-prix` | Le tableau de bord et les alertes de hausse | O1 |
| 2 | `droits-agreger` | Ce qu'un agrégateur a le droit de reprendre | O2 |
| 2 | `connecteurs-sites` | Un connecteur par site, un format commun | O2 |
| 2 | `annonces-dynamiques` | Les sites dynamiques et leurs API cachées | O2 |
| 2 | `extraction-llm-annonces` | Extraire surface, quartier et prix avec un LLM, vérifiés | O2 |
| 2 | `doublons-annonces` | La même annonce sur cinq sites : dédoublonner | O2 |
| 2 | `annonces-suspectes` | Repérer les annonces suspectes | O2 |
| 2 | `fraicheur-annonces` | Retirer les annonces disparues | O2 |
| 2 | `prix-m2-quartier` | Le prix au mètre carré par quartier | O2 |
| 3 | `sources-emploi` | Les sources d'offres, et celles qu'on exclut | O3 |
| 3 | `crawl-offres` | Un crawl planifié des offres | O3 |
| 3 | `referentiel-competences` | Un référentiel de métiers et de compétences | O3 |
| 3 | `extraire-competences` | Extraire les compétences avec un LLM, évaluées | O3 |
| 3 | `normaliser-offres` | Normaliser intitulés, salaires, lieux, contrats | O3 |
| 3 | `tendances-emploi` | Les tendances : métiers, compétences, villes | O3 |
| 3 | `rapport-emploi` | Le rapport trimestriel pour les écoles | O3 |
| 4 | `concurrents-produits` | Les concurrents et les produits à suivre | O4 |
| 4 | `apparier-produits` | Apparier ses produits à ceux des concurrents | O4 |
| 4 | `collecte-quotidienne` | La collecte quotidienne, polie et surveillée | O4 |
| 4 | `promotions-ruptures` | Repérer promotions et ruptures | O4 |
| 4 | `alertes-prix-concurrents` | Des alertes utiles, pas du bruit | O4 |
| 4 | `recommander-prix` | Recommander un prix, sans guerre des prix | O4 |
| 4 | `cout-veille` | Le coût mensuel de la veille | O4 |
| 5 | `sources-langues` | Les sources : médias, ONG, administrations, et leurs licences | O5 |
| 5 | `crawl-cible-langue` | Un crawl ciblé sur une langue | O5 |
| 5 | `identifier-langue-pages` | Identifier la langue de chaque page | O5 |
| 5 | `nettoyer-corpus` | Nettoyer : menus, publicités, textes mêlés | O5 |
| 5 | `dedoublonner-corpus` | Dédoublonner avec MinHash | O5 |
| 5 | `qualite-locuteurs` | Faire juger la qualité par des locuteurs | O5 |
| 5 | `publier-corpus` | Publier le corpus avec sa fiche de données | O5 |

## Comparatif des projets

| Projet | Le problème | L'approche | Le point dur | Coût d'exploitation |
| --- | --- | --- | --- | --- |
| Observatoire des prix | Des prix connus avec des semaines de retard | Collecte en ligne et de terrain, rapprochement des produits | Produits et unités hétérogènes | Faible |
| Agrégateur immobilier | Des annonces éparpillées, en double, parfois fausses | Connecteurs par site, extraction par LLM vérifiée, dédoublonnage | Droit de reprise, doublons | Moyen |
| Veille de l'emploi | Les écoles forment sans connaître la demande | Crawl planifié, extraction de compétences, référentiel | Qualité de l'extraction | Faible à moyen |
| Veille concurrentielle | Des prix fixés à l'aveugle | Collecte quotidienne, appariement, alertes | Appariement des produits | Faible |
| Corpus en langues | Trop peu de textes pour les modèles | Crawl ciblé, identification de langue, nettoyage | Licences, qualité | Moyen une fois |

## Les projets

### 1. Un observatoire des prix des produits de base

- **Le client** : une organisation de consommateurs du Burkina Faso, soutenue par un bailleur, qui veut publier chaque semaine les prix du riz, de l'huile, du sucre, du gaz et du ciment dans dix villes.
- **Le problème** : les prix officiels paraissent avec des semaines de retard ; les hausses brutales sont découvertes quand les ménages les subissent déjà.
- **Pourquoi ce cas est différent** : une partie des prix est en ligne, l'autre seulement sur les marchés. Il faut combiner collecte web et collecte de terrain, et rapprocher des produits vendus sous des noms et des conditionnements différents.
- **L'approche de l'expert** : définir le panier avec les décideurs, collecter les sites marchands, équiper des enquêteurs de KoboToolbox pour les marchés, rapprocher les produits, ramener tout au prix au kilo ou au litre, calculer des indices, publier un tableau de bord et des alertes de hausse.
- **Alternatives écartées** : ne collecter que le web (absent des marchés où achètent la plupart des ménages) ; tout relever à la main (trop lent et trop cher).
- **Ce qui se vend** : un contrat avec l'organisation ou le bailleur, puis un abonnement pour les médias et les commerçants qui veulent les données.
- **Contraintes réelles** : enquêteurs avec des téléphones simples, connexion intermittente, sites marchands peu nombreux, données publiées et citées par la presse.
- **L'imprévu** : un site marchand change de structure la semaine où le prix du gaz bondit.
- **C'est réussi quand** :
  - Le même produit est rapproché sur toutes les sources, vérifié sur un échantillon.
  - Les prix sont ramenés à une unité commune sans erreur sur les tests.
  - Une hausse brutale simulée déclenche une alerte le jour même.
  - La fiche de données dit d'où vient chaque prix.
- **À revoir** : `7.2/normaliser-prix`, `7.2/historiser`, `8.5/kobotoolbox`, `7.3/planifier-collecte`, `7.3/alertes-collecte`, `1.2/merge`, `7.7/fiche-donnees-collecte`, `1.8/concevoir-tableau-bord`
- **Pour ton portfolio** : le tableau de bord public, la fiche de données, une alerte de hausse rejouée.

### 2. Un agrégateur d'annonces immobilières à Abidjan

- **Le client** : une start-up qui veut devenir le site de référence pour chercher un logement à Abidjan, en rassemblant les annonces de douze sites et groupes.
- **Le problème** : les chercheurs de logement visitent dix sites, voient la même annonce cinq fois, et tombent sur de fausses annonces qui demandent une avance.
- **Pourquoi ce cas est différent** : les sources sont nombreuses, hétérogènes et changeantes, et l'agrégateur doit respecter les droits des sites dont il reprend les annonces.
- **L'approche de l'expert** : vérifier pour chaque source ce qu'on a le droit de reprendre (extrait et lien plutôt que copie complète), un connecteur par site vers un format commun, l'API cachée quand elle existe, l'extraction par LLM vérifiée pour les annonces en texte libre, le dédoublonnage, un score d'annonce suspecte, et le retrait des annonces disparues.
- **Alternatives écartées** : copier les annonces complètes (risque juridique et conflit avec les sites) ; un seul scraper générique (casse partout à la fois).
- **Ce qui se vend** : les annonces mises en avant par les agences, et un abonnement pour les agences qui veulent leurs statistiques de marché.
- **Contraintes réelles** : quartiers écrits de dix façons, prix parfois « à débattre », photos réutilisées d'une annonce à l'autre, droits des sites.
- **L'imprévu** : un des sites demande par courriel d'arrêter la reprise de ses annonces.
- **C'est réussi quand** :
  - Le taux de doublons restants est mesuré sur un échantillon vérifié.
  - Les annonces disparues de leur source sont retirées sous 24 heures.
  - Les annonces suspectes sont signalées avec leurs raisons.
  - La demande de retrait du site est traitée en un réglage, sans casser le reste.
- **À revoir** : `7.7/droit-bases-donnees`, `7.7/cgu-collecte`, `7.8/accords-donnees`, `7.8/taux-blocage`, `7.1/api-cachees`, `7.5/extraction-hybride`, `7.5/verifier-dans-source`, `7.2/dedoublonner-collecte`, `7.5/doublons-semantiques-collecte`, `7.3/crawl-incremental`
- **Pour ton portfolio** : le tableau des sources et de leurs droits, la mesure des doublons, le prix au mètre carré par quartier.

### 3. Une veille de l'emploi en Afrique francophone

- **Le client** : un réseau d'écoles professionnelles qui veut adapter ses formations à ce que demandent réellement les employeurs.
- **Le problème** : les programmes changent tous les cinq ans, sur des intuitions ; les diplômés découvrent en cherchant un emploi que leurs compétences ne sont pas celles demandées.
- **Pourquoi ce cas est différent** : la valeur n'est pas dans la collecte mais dans ce qu'on en tire : des compétences comparables entre des offres écrites de mille façons.
- **L'approche de l'expert** : choisir les sources autorisées (et exclure celles dont les conditions l'interdisent), un crawl planifié, un référentiel de métiers et de compétences, l'extraction des compétences par LLM évaluée sur un jeu annoté, la normalisation des intitulés et des lieux, puis des tendances et un rapport trimestriel.
- **Alternatives écartées** : compter des mots-clés (rate les compétences formulées autrement) ; collecter les grands réseaux sociaux professionnels (conditions d'utilisation qui l'interdisent).
- **Ce qui se vend** : un rapport trimestriel aux écoles et aux ministères, et un accès aux tendances pour les cabinets de recrutement.
- **Contraintes réelles** : offres en français et en anglais, intitulés fantaisistes, salaires rarement indiqués, sites d'emploi aux conditions variées.
- **L'imprévu** : un nouveau métier (« prompt engineer ») apparaît, absent du référentiel.
- **C'est réussi quand** :
  - L'extraction des compétences est évaluée sur un jeu annoté, avec sa précision et son rappel.
  - Les sources collectées respectent toutes leurs conditions, documentées.
  - Un métier nouveau est détecté et proposé pour le référentiel.
- **À revoir** : `7.7/cgu-collecte`, `7.3/crawl-cible`, `7.5/schema-extraction`, `7.5/evaluer-extraction-champs`, `7.5/classer-collecte`, `1.6/precision-rappel`, `1.8/resume-decideur`
- **Pour ton portfolio** : le rapport trimestriel, l'évaluation de l'extraction, la liste des sources et de leurs conditions.

### 4. La veille concurrentielle d'une boutique en ligne

- **Le client** : une boutique en ligne d'électronique de Douala qui affronte trois concurrents plus gros.
- **Le problème** : la boutique fixe ses prix sans savoir ceux des autres, perd des ventes quand elle est trop chère et de la marge quand elle baisse sans raison.
- **Pourquoi ce cas est différent** : la difficulté est d'apparier exactement les mêmes produits (même modèle, même capacité, même couleur) entre des catalogues qui les décrivent différemment.
- **L'approche de l'expert** : choisir les produits à suivre, les apparier par règles puis par embeddings et LLM avec vérification, collecter chaque jour poliment, repérer promotions et ruptures, envoyer des alertes utiles, et proposer un prix sans déclencher une guerre des prix.
- **Alternatives écartées** : comparer par nom de produit seul (appariements faux) ; baisser automatiquement les prix (décision qui revient au commerçant).
- **Ce qui se vend** : un abonnement mensuel pour les commerçants en ligne, vendu avec le tableau de bord et les alertes.
- **Contraintes réelles** : petits budgets, sites concurrents qui affichent les prix en JavaScript, produits reconditionnés mélangés aux neufs.
- **L'imprévu** : un concurrent lance une promotion de 48 heures sur les téléphones les plus vendus.
- **C'est réussi quand** :
  - La précision de l'appariement est mesurée sur un échantillon vérifié.
  - La promotion est détectée dans la journée.
  - Le coût mensuel de la veille est chiffré et reste sous l'abonnement visé.
- **À revoir** : `7.4/intercepter-reseau`, `7.8/faible-empreinte`, `7.5/doublons-semantiques-collecte`, `3.3/similarite-textes`, `7.3/politesse`, `7.5/alertes-pertinentes`, `7.2/historiser`, `6.1/fixer-prix`
- **Pour ton portfolio** : le tableau de bord des prix, la mesure d'appariement, une alerte de promotion.

### 5. Un corpus de textes en wolof et en haoussa

- **Le client** : un laboratoire de recherche en traitement des langues africaines qui manque de textes pour entraîner et évaluer ses modèles.
- **Le problème** : les textes en wolof et en haoussa existent en ligne, mais dispersés, mêlés au français et à l'anglais, de qualité très variable et sous des licences diverses.
- **Pourquoi ce cas est différent** : le livrable est un jeu de données public. Sa valeur dépend de sa propreté, de la justesse de l'identification des langues et de la clarté de ses licences.
- **L'approche de l'expert** : recenser les sources et leurs licences, un crawl ciblé, l'identification de la langue de chaque page et de chaque paragraphe, le nettoyage, le dédoublonnage par MinHash, un contrôle de qualité par des locuteurs, puis la publication avec une fiche de données complète.
- **Alternatives écartées** : filtrer Common Crawl seul (trop peu de textes dans ces langues) ; publier sans vérifier les licences (corpus inutilisable par les autres chercheurs).
- **Ce qui se vend** : un contrat de recherche ou une subvention, et la réputation du laboratoire. Le corpus sert ensuite à des produits commerciaux en langues locales.
- **Contraintes réelles** : orthographes non uniformes, textes religieux surreprésentés, pages mêlant plusieurs langues.
- **L'imprévu** : les locuteurs signalent qu'une partie du « wolof » est en réalité du sérère.
- **C'est réussi quand** :
  - L'identification de la langue est évaluée par des locuteurs sur un échantillon.
  - Le taux de doublons est mesuré avant et après.
  - Chaque document a sa source, sa date et sa licence.
  - Le corpus est publié avec une fiche de données honnête sur ses biais.
- **À revoir** : `7.3/crawl-cible`, `7.3/filtrer-langue-qualite`, `7.3/dedoublonner-masse`, `7.3/corpus-langues-africaines`, `3.9/identifier-langue`, `3.9/locuteurs-natifs`, `7.7/licences-livraison`
- **Pour ton portfolio** : le corpus publié sur Hugging Face avec sa fiche de données.

## Fil rouge et ancrage local

- **Situation** : cinq clients (organisation de consommateurs, start-up immobilière, réseau d'écoles, boutique en ligne, laboratoire de recherche) dont les décisions dépendent de données que personne ne collecte encore pour eux.

## Circuit

- [ ] 1. Fiche validée par le mainteneur
- [ ] 2. Données fictives réalistes et solution de référence
- [ ] 3. Énoncés des étapes
- [ ] 4. Tests et grilles
- [ ] 5. Relecture élève
- [ ] 6. Relecture expert
