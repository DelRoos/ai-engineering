---
id: "1.3"
titre: "Données terrain : collecte et annotation"
parcours: "01-ml"
promesse: "Fabriquer tes propres données quand elles n'existent pas : une collecte bien conçue, avec le consentement des gens, et des annotations dont on peut vérifier la qualité."
question_saut: "Tu as déjà mené une collecte et une annotation de données ?"
qcm: true
prerequis: ["1.2"]
statut: brouillon
version: 1
mise_a_jour: 2026-11-25
---

# Fiche du module 1.3 — Données terrain : collecte et annotation

## Extrait du programme

- **Contenu** : Concevoir une collecte (formulaires mobiles avec KoboToolbox ou ODK), consentement et anonymisation, annotation (Label Studio), accord entre annotateurs, contrôle qualité, petits jeux de données, données synthétiques
- **Exercice clé** : Collecter et annoter seul au moins 200 exemples réels (entourage, marché, sources publiques) avec un protocole documenté

## Objectifs vérifiables

| Id | À la fin, l'apprenant sait… | Évalué par |
| --- | --- | --- |
| O1 | Concevoir une collecte : question, population, échantillon, protocole. | ex01 à ex03, exercice clé (ex11), qcm |
| O2 | Construire un formulaire mobile et exporter ses réponses. | ex04 à ex06, exercice clé (ex11), qcm |
| O3 | Recueillir un consentement éclairé et anonymiser des données. | ex04 à ex06, exercice clé (ex11), qcm |
| O4 | Annoter des données avec un guide d'annotation clair. | ex07 à ex09, exercice clé (ex11), qcm |
| O5 | Mesurer l'accord entre annotateurs et contrôler la qualité d'un jeu de données. | ex04 à ex06, ex07 à ex09, ex10, exercice clé (ex11), qcm |
| O6 | Savoir quand compléter un petit jeu de données par des données synthétiques, et leurs limites. | ex10, qcm |

## Chapitres

| Chapitre | Titre | Exercices |
| --- | --- | --- |
| 1 | Concevoir une collecte | 3 |
| 2 | Collecter sur le terrain | 3 |
| 3 | Annoter | 3 |
| 4 | Quand les données sont rares | 2 |

## Notions, dans l'ordre

| Chapitre | Id de la notion | Notion | Objectif |
| --- | --- | --- | --- |
| 1 | `pourquoi-collecter` | Pourquoi collecter tes propres données | O1 |
| 1 | `sources-publiques` | Trouver des données publiques et lire leur licence | O1 |
| 1 | `concevoir-collecte` | Concevoir une collecte : question, population, échantillon | O1 |
| 1 | `questions` | Poser de bonnes questions dans un formulaire | O1 |
| 1 | `biais-collecte` | Les biais de collecte et comment les limiter | O1 |
| 2 | `formulaire-mobile` | Un formulaire mobile avec KoboToolbox | O2 |
| 2 | `consentement` | Consentement éclairé et anonymisation | O3 |
| 2 | `stocker-securiser` | Stocker et protéger les données collectées | O3 |
| 2 | `qualite-terrain` | Contrôler la qualité pendant la collecte | O5 |
| 3 | `label-studio` | Annoter des données avec Label Studio | O4 |
| 3 | `guide-annotation` | Écrire un guide d'annotation | O4 |
| 3 | `langues-locales` | Annoter du texte en langues locales | O4 |
| 3 | `pre-annotation` | Gagner du temps : faire pré-annoter par un modèle, puis vérifier | O4 |
| 3 | `accord-annotateurs` | Mesurer l'accord entre annotateurs | O5 |
| 4 | `donnees-synthetiques` | Petits jeux de données et données synthétiques | O6 |
| 4 | `augmentation` | Multiplier les exemples : l'augmentation de données | O6 |
| 4 | `fiche-donnees` | Documenter un jeu de données : la fiche de données | O5 |

## Vocabulaire du module

| Terme | Catégorie (A anglais / B transparent) | Notion où il apparaît |
| --- | --- | --- |
| échantillon (sample), biais d'échantillonnage | A | `concevoir-collecte` |
| protocole de collecte | B | `concevoir-collecte` |
| formulaire (form), export | B | `formulaire-mobile` |
| consentement éclairé | B | `consentement` |
| anonymisation, pseudonymisation | B | `consentement` |
| annotation, étiquette (label) | A | `label-studio` |
| guide d'annotation (guidelines) | A | `guide-annotation` |
| accord inter-annotateurs, kappa de Cohen | A | `accord-annotateurs` |
| données synthétiques (synthetic data) | A | `donnees-synthetiques` |

## Fil rouge et ancrage local

- **Situation** : Mariama, étudiante à Conakry, veut prédire le prix du riz importé dans les boutiques de son quartier. Aucune donnée n'existe : elle conçoit un formulaire, relève les prix dans 20 boutiques du marché Madina avec l'accord des commerçants, puis annote les photos d'étiquettes avec une amie pour vérifier qu'elles sont d'accord.
- **Personnages** : Mariama, son amie Fanta (deuxième annotatrice), les commerçants qui acceptent ou refusent.
- **Données utilisées** : un exemple de collecte fictif fourni pour les exercices ; pour l'exercice clé, les données réelles collectées par l'apprenant lui-même.

## Exercices prévus

| Id | Titre | Objectif | Difficulté (1–3) | Livrable non testable ? |
| --- | --- | --- | --- | --- |
| 1.3-ex01 à ex03 | Concevoir une collecte | O1 | 1 | oui → GRILLE.md (protocole) |
| 1.3-ex04 à ex06 | Collecter sur le terrain | O2, O3, O5 | 2 | non |
| 1.3-ex07 à ex09 | Annoter | O4, O5 | 2–3 | non |
| 1.3-ex10 | Quand les données sont rares | O5, O6 | 2–3 | non |
| 1.3-ex11 | Exercice clé : collecter et annoter seul au moins 200 exemples réels avec un protocole documenté | O1 à O5 | 3 | oui → GRILLE.md (protocole, consentement) ; format, nombre d'exemples et anonymisation vérifiés par tests |

## Ressources matérielles

- **RAM maximale** : moins de 1 Go (Label Studio en local).
- **Téléchargements** : Label Studio, environ 300 Mo installés. TODO(vérifier). Application mobile KoboCollect ou ODK Collect sur un téléphone Android.
- **Temps de calcul le plus long** : négligeable ; le temps passé est celui de la collecte sur le terrain.
- **Dépendances nouvelles** : label-studio (dans un environnement virtuel séparé), scikit-learn pour le kappa de Cohen.
- **API payante** : aucune. Compte gratuit KoboToolbox. TODO(vérifier) les limites de l'offre gratuite.

## Point de contrôle sécurité et éthique

- Consentement éclairé obligatoire pour toute donnée sur une personne ; refus respecté sans insister.
- Aucune donnée personnelle (nom, téléphone, visage) dans le dépôt public : anonymisation vérifiée par les tests de l'exercice clé.
- Rappel des lois sur les données personnelles en Afrique francophone (par exemple en Guinée, au Sénégal, en Côte d'Ivoire), approfondies en étape 5.

## Ressources externes gratuites

| Ressource | Langue | Durée ou taille | Licence | Pourquoi |
| --- | --- | --- | --- | --- |
| [Centre d'aide de KoboToolbox](https://support.kobotoolbox.org/) | anglais, en partie en français | référence | gratuit en ligne | Construire et déployer un formulaire pas à pas. |
| [Documentation de Label Studio](https://labelstud.io/guide/) | anglais | référence | Apache 2.0 | Configurer une tâche d'annotation de texte ou d'image. |

## Circuit

- [ ] 1. Fiche validée par le mainteneur — date :
- [ ] 2. Solution et tests (passent sur solution, échouent sur starter) — date :
- [ ] 3. Cours — date :
- [ ] 4. Exercices (énoncés, indices, starters) — date :
- [ ] 5. QCM (valide contre le schéma) — date :
- [ ] 6. Grille — date :
- [ ] 7. Relecture élève — date :
- [ ] 8. Relecture expert — date :

## Journal des relectures

| Date | Étape | Fichier et ligne | Problème | Correction |
| --- | --- | --- | --- | --- |
| | | | | |

## Points à vérifier

- TODO(vérifier) : limites de l'offre gratuite de KoboToolbox (nombre de soumissions par mois, stockage).
- TODO(vérifier) : textes de loi sur les données personnelles cités, et leur date.
- TODO(vérifier) : l'apprenant sans smartphone Android peut-il faire la collecte avec le formulaire web de KoboToolbox ?
- TODO(vérifier) : compléter le vocabulaire du module pour les notions ajoutées par l'audit du 25/11/2026 (vérifier chaque terme dans docs/glossaire.md).
