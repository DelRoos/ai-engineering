---
id: "7.7"
titre: "Collecter dans les règles"
parcours: "07-collecte-automatisation"
promesse: "Savoir ce qu'on a le droit de collecter, comment le faire légalement et éthiquement, documenter ses données, et vendre des services de collecte sans exposer ni soi ni ses clients."
question_saut: "Tu as déjà mené l'analyse juridique d'un projet de collecte et rédigé sa fiche de données ?"
qcm: true
prerequis: ["7.1"]
statut: brouillon
version: 1
mise_a_jour: 2026-11-25
---

# Fiche du module 7.7 — Collecter dans les règles

## Extrait du programme

- **Contenu** : conditions d'utilisation, droit d'auteur et bases de données, jurisprudence, données personnelles et lois africaines, robots.txt et signaux d'IA, documentation et provenance, vendre la collecte
- **Exercice clé** : Mener l'audit juridique et éthique d'un projet de collecte réel, avec sa fiche de données et une décision argumentée

## Objectifs vérifiables

| Id | À la fin, l'apprenant sait… | Évalué par |
| --- | --- | --- |
| O1 | Analyser ce que le droit permet sur un projet de collecte : conditions d'utilisation, droit d'auteur, bases de données. | ex01 à ex05, qcm |
| O2 | Appliquer le droit des données personnelles à une collecte, lois africaines comprises. | ex06 à ex10, qcm |
| O3 | Respecter les règles techniques posées par les sites et préférer les accès officiels. | ex11 à ex14, qcm |
| O4 | Documenter la provenance et les licences de données collectées. | ex15 à ex17, exercice clé (ex18), qcm |
| O5 | Vendre une prestation de collecte de façon responsable. | ex19 à ex21, qcm |

## Chapitres

| Chapitre | Titre | Exercices |
| --- | --- | --- |
| 1 | Le droit de la collecte | 5 |
| 2 | Les données personnelles | 5 |
| 3 | Les règles techniques | 4 |
| 4 | Documenter ses données | 4 |
| 5 | Vendre la collecte | 3 |

## Notions, dans l'ordre

| Chapitre | Id de la notion | Notion | Objectif |
| --- | --- | --- | --- |
| 1 | `cgu-collecte` | Lire les conditions d'utilisation d'un site | O1 |
| 1 | `droit-auteur-collecte` | Le droit d'auteur sur les contenus collectés | O1 |
| 1 | `droit-bases-donnees` | Le droit des bases de données | O1 |
| 1 | `jurisprudence-scraping` | Ce que les tribunaux ont jugé sur le scraping : de hiQ à Reddit contre SerpApi et Perplexity | O1 |
| 1 | `jurisprudence-ia` | L'entraînement des IA devant les juges : Thomson Reuters c. Ross, Bartz c. Anthropic, Kadrey c. Meta | O1 |
| 1 | `donnees-ouvertes` | Les données publiques et les licences ouvertes | O1 |
| 1 | `collecte-internationale` | Collecter depuis l'Afrique des sites du monde entier | O1 |
| 2 | `donnee-perso-collectee` | Quand une donnée collectée est personnelle | O2 |
| 2 | `base-legale-collecte` | La base légale d'une collecte | O2 |
| 2 | `minimiser-collecte` | Ne collecter que le nécessaire | O2 |
| 2 | `informer-personnes` | Informer les personnes concernées | O2 |
| 2 | `conserver-supprimer` | Conserver, puis supprimer | O2 |
| 2 | `lois-africaines-collecte` | Les lois africaines appliquées à la collecte : Cameroun (loi n° 2024/017), Nigeria (NDPA et GAID 2025) et les autres | O2 |
| 2 | `cnil-moissonnage` | Les recommandations de la CNIL sur le moissonnage pour l'IA | O2 |
| 3 | `robots-txt-detail` | robots.txt en détail : ce qu'il dit et ce qu'il ne dit pas | O3 |
| 3 | `signaux-ia` | Les nouveaux signaux : refuser l'entraînement des IA | O3 |
| 3 | `ai-act-tdm` | L'AI Act et le droit de refuser la fouille de textes (TDM) | O3 |
| 3 | `preferer-api` | Préférer l'API officielle | O3 |
| 3 | `demander-acces` | Demander un accès ou un partenariat | O3 |
| 3 | `protections-respecter` | Les protections qu'on ne contourne pas | O3 |
| 4 | `provenance` | Tracer la provenance de chaque donnée | O4 |
| 4 | `fiche-donnees-collecte` | La fiche de données d'une collecte | O4 |
| 4 | `licences-livraison` | Les licences des données que tu livres | O4 |
| 4 | `audit-collecte` | Préparer un audit de collecte | O4 |
| 4 | `politique-collecte` | Une politique de collecte pour une entreprise | O4 |
| 5 | `offres-collecte` | Les offres : données, veille, outil, prestation | O5 |
| 5 | `devis-collecte` | Chiffrer une collecte : volume, fréquence, maintenance | O5 |
| 5 | `contrat-collecte` | Le contrat : responsabilités et garanties | O5 |
| 5 | `refuser-mission` | Savoir refuser une mission | O5 |
| 5 | `maintenance-collecte` | La maintenance : quand le site du client change | O5 |

## Vocabulaire du module

| Terme | Catégorie (A anglais / B transparent) | Notion où il apparaît |
| --- | --- | --- |
| conditions générales d'utilisation (CGU) | B | `cgu-collecte` |
| droit sui generis des bases de données | B | `droit-bases-donnees` |
| provenance (data provenance) | B | `provenance` |
| fiche de données (datasheet) | B | `fiche-donnees-collecte` |
| base légale | B | `base-legale-collecte` |

## Fil rouge et ancrage local

- **Situation** : Trois clients te demandent une collecte : un observatoire des prix, un agrégateur d'offres d'emploi, et une entreprise qui veut « tous les numéros des commerçants de la ville ». Tu dois dire oui, oui à certaines conditions, ou non.
- **Personnages** : Me Diallo, avocate conseil ; les trois clients.
- **Données utilisées** : des conditions d'utilisation, des fichiers robots.txt et des extraits de lois reproduits dans le dépôt.

## Exercices prévus

| Id | Titre | Objectif | Difficulté (1–3) | Livrable non testable ? |
| --- | --- | --- | --- | --- |
| 7.7-ex01 à ex05 | Le droit de la collecte | O1 | 1 | non |
| 7.7-ex06 à ex10 | Les données personnelles | O2 | 2 | non |
| 7.7-ex11 à ex14 | Les règles techniques | O3 | 2 | non |
| 7.7-ex15 à ex17 | Documenter ses données | O4 | 2–3 | non |
| 7.7-ex18 | Exercice clé : mener l'audit juridique et éthique d'un projet de collecte réel, avec sa fiche de données et une décision argumentée | O4 | 3 | oui → GRILLE.md |
| 7.7-ex19 à ex21 | Vendre la collecte | O5 | 2–3 | non |

## Ressources matérielles

- **RAM maximale** : moins de 200 Mo
- **Téléchargements** : quelques Mo de textes
- **Temps de calcul le plus long** : moins d'une seconde
- **Dépendances nouvelles** : aucune
- **API payante** : aucune

## Point de contrôle sécurité et éthique

- Ce module ne remplace pas un avocat : il apprend à repérer les risques et à poser les bonnes questions.
- On refuse les collectes de données personnelles sans base légale, et tout contournement de protection.
- Chaque jeu de données livré a sa fiche : sources, dates, licences, données personnelles, limites.

## Ressources externes gratuites

| Ressource | Langue | Type | Licence ou accès | Pourquoi |
| --- | --- | --- | --- | --- |
| [RFC 9309 : le protocole robots.txt](https://www.rfc-editor.org/rfc/rfc9309) | anglais | norme | libre | La norme officielle. |
| [CNIL, la carte des lois sur les données dans le monde](https://www.cnil.fr/fr/la-protection-des-donnees-dans-le-monde) | français | carte | accès libre | Situer les lois des pays africains. |
| [Datasheets for Datasets](https://arxiv.org/abs/1803.09010) | anglais | article | accès libre | Le modèle de fiche de données. |
| [Licences Creative Commons](https://creativecommons.org/licenses/) | français et anglais | référence | libre | Comprendre les licences des contenus réutilisés. |
| [CNIL, l'intérêt légitime et le moissonnage](https://www.cnil.fr/fr/focus-interet-legitime-collecte-par-moissonnage) | français | recommandation | accès libre | Les mesures attendues quand on moissonne des données personnelles pour l'IA. |

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
