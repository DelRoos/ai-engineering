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
| O1 | Concevoir une collecte : question, population, échantillon, protocole. | ex01 à ex05, exercice clé (ex25), qcm |
| O2 | Construire un formulaire mobile et exporter ses réponses. | ex06 à ex08, ex12 à ex14, exercice clé (ex25), qcm |
| O3 | Recueillir un consentement éclairé et anonymiser des données. | ex09 à ex11, exercice clé (ex25), qcm |
| O4 | Annoter des données avec un guide d'annotation clair. | ex15 à ex18, exercice clé (ex25), qcm |
| O5 | Mesurer l'accord entre annotateurs et contrôler la qualité d'un jeu de données. | ex12 à ex14, ex19 à ex21, ex22 à ex24, exercice clé (ex25), qcm |
| O6 | Savoir quand compléter un petit jeu de données par des données synthétiques, et leurs limites. | ex22 à ex24, qcm |

## Chapitres

| Chapitre | Titre | Exercices |
| --- | --- | --- |
| 1 | Concevoir une collecte | 5 |
| 2 | Construire le formulaire | 3 |
| 3 | Collecter avec éthique | 3 |
| 4 | Sur le terrain | 3 |
| 5 | Annoter | 4 |
| 6 | Contrôler la qualité | 3 |
| 7 | Quand les données sont rares | 4 |

## Notions, dans l'ordre

| Chapitre | Id de la notion | Notion | Objectif |
| --- | --- | --- | --- |
| 1 | `pourquoi-collecter` | Pourquoi collecter tes propres données | O1 |
| 1 | `sources-publiques` | Trouver des données publiques et lire leur licence | O1 |
| 1 | `concevoir-collecte` | Concevoir une collecte : question, population, échantillon | O1 |
| 1 | `echantillonnage` | Choisir qui interroger : les méthodes d'échantillonnage | O1 |
| 1 | `taille-echantillon` | Combien d'exemples faut-il ? | O1 |
| 1 | `questions` | Poser de bonnes questions dans un formulaire | O1 |
| 1 | `biais-collecte` | Les biais de collecte et comment les limiter | O1 |
| 2 | `formulaire-mobile` | Un formulaire mobile avec KoboToolbox | O2 |
| 2 | `logique-formulaire` | Sauts, validations et calculs dans un formulaire | O2 |
| 2 | `odk` | L'alternative ODK | O2 |
| 2 | `photos-audio` | Collecter des photos, des sons et des positions GPS | O2 |
| 2 | `test-pilote` | Tester le formulaire avant la collecte | O2 |
| 3 | `consentement` | Le consentement éclairé | O3 |
| 3 | `anonymisation` | Anonymiser les données | O3 |
| 3 | `stocker-securiser` | Stocker et protéger les données collectées | O3 |
| 3 | `remunerer` | Respecter et rémunérer les personnes qui aident | O3 |
| 3 | `droit-retrait` | Le droit de se retirer et d'effacer ses données | O3 |
| 4 | `qualite-terrain` | Contrôler la qualité pendant la collecte | O5 |
| 4 | `nettoyer-collecte` | Nettoyer et fusionner les données collectées | O5 |
| 4 | `former-enqueteurs` | Former et accompagner des enquêteurs | O5 |
| 4 | `suivre-collecte` | Suivre la collecte au jour le jour | O5 |
| 4 | `collecte-hors-ligne` | Collecter sans réseau et synchroniser | O2 |
| 5 | `label-studio` | Annoter des données avec Label Studio | O4 |
| 5 | `guide-annotation` | Écrire un guide d'annotation | O4 |
| 5 | `annoter-images` | Annoter des images : classes et boîtes | O4 |
| 5 | `annoter-audio` | Transcrire et annoter de l'audio | O4 |
| 5 | `langues-locales` | Annoter du texte en langues locales | O4 |
| 5 | `pre-annotation` | Gagner du temps : faire pré-annoter par un modèle, puis vérifier | O4 |
| 6 | `accord-annotateurs` | Mesurer l'accord entre annotateurs | O5 |
| 6 | `desaccords` | Trancher les désaccords | O5 |
| 6 | `versionner-donnees` | Versionner un jeu de données | O5 |
| 6 | `audit-echantillon` | Vérifier un échantillon à la main | O5 |
| 6 | `erreurs-etiquettes` | Trouver les étiquettes fausses avec un modèle | O5 |
| 7 | `donnees-synthetiques` | Petits jeux de données et données synthétiques | O6 |
| 7 | `augmentation` | Multiplier les exemples : l'augmentation de données | O6 |
| 7 | `fiche-donnees` | Documenter un jeu de données : la fiche de données | O5 |
| 7 | `donnees-llm` | Générer des exemples avec un LLM, et leurs limites | O6 |
| 7 | `transfert-peu-donnees` | Partir d'un modèle déjà entraîné | O6 |

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
| données ouvertes (open data), licence | A | `sources-publiques` |
| question fermée, question ouverte | B | `questions` |
| pré-annotation, apprentissage actif (active learning) | A | `pre-annotation` |
| augmentation de données (data augmentation) | A | `augmentation` |
| fiche de données (datasheet) | A | `fiche-donnees` |

## Fil rouge et ancrage local

- **Situation** : Mariama, étudiante à Conakry, veut prédire le prix du riz importé dans les boutiques de son quartier. Aucune donnée n'existe : elle conçoit un formulaire, relève les prix dans 20 boutiques du marché Madina avec l'accord des commerçants, puis annote les photos d'étiquettes avec une amie pour vérifier qu'elles sont d'accord.
- **Personnages** : Mariama, son amie Fanta (deuxième annotatrice), les commerçants qui acceptent ou refusent.
- **Données utilisées** : un exemple de collecte fictif fourni pour les exercices ; pour l'exercice clé, les données réelles collectées par l'apprenant lui-même.

## Exercices prévus

| Id | Titre | Objectif | Difficulté (1–3) | Livrable non testable ? |
| --- | --- | --- | --- | --- |
| 1.3-ex01 à ex05 | Concevoir une collecte | O1 | 1 | oui → GRILLE.md (protocole) |
| 1.3-ex06 à ex08 | Construire le formulaire | O2 | 1 | non |
| 1.3-ex09 à ex11 | Collecter avec éthique | O3 | 2 | non |
| 1.3-ex12 à ex14 | Sur le terrain | O2, O5 | 2 | non |
| 1.3-ex15 à ex18 | Annoter | O4 | 2–3 | non |
| 1.3-ex19 à ex21 | Contrôler la qualité | O5 | 2–3 | non |
| 1.3-ex22 à ex24 | Quand les données sont rares | O5, O6 | 2–3 | non |
| 1.3-ex25 | Exercice clé : collecter et annoter seul au moins 200 exemples réels avec un protocole documenté | O1 à O5 | 3 | oui → GRILLE.md (protocole, consentement) ; format, nombre d'exemples et anonymisation vérifiés par tests |

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

| Ressource | Langue | Type | Licence ou accès | Pourquoi |
| --- | --- | --- | --- | --- |
| [Centre d'aide de KoboToolbox](https://support.kobotoolbox.org/) | anglais, en partie en français | documentation | gratuit | Construire et déployer un formulaire. |
| [Documentation d'ODK](https://docs.getodk.org/) | anglais | documentation | CC BY 4.0 | L'alternative ODK, très utilisée sur le terrain. |
| [Documentation de Label Studio](https://labelstud.io/guide/) | anglais | documentation | Apache 2.0 | Annoter du texte, des images et de l'audio. |
| [L'anonymisation (CNIL)](https://www.cnil.fr/fr/technologies/lanonymisation-de-donnees-personnelles) | français | guide | accès libre | Anonymiser vraiment, et la différence avec la pseudonymisation. |
| [Humanitarian Data Exchange](https://data.humdata.org/) | anglais | plateforme de données | licences variables | Des milliers de jeux de données ouverts sur l'Afrique. |
| [Datasheets for Datasets](https://arxiv.org/abs/1803.09010) | anglais | article | accès libre | Le modèle de fiche de données, par ses auteurs. |

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
- TODO(vérifier) : compléter le vocabulaire des notions ajoutées par la seconde passe d'audit (25/11/2026), en vérifiant chaque terme dans docs/glossaire.md.
