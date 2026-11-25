---
id: "5.3"
titre: "Données, droit et gouvernance"
parcours: "05-securite"
promesse: "Livrer des systèmes d'IA conformes à la loi : données personnelles, AI Act, transferts de données, licences, et une documentation qui le prouve."
question_saut: "Tu sais déjà rédiger la fiche de conformité d'un système d'IA ?"
qcm: true
prerequis: ["5.2"]
statut: brouillon
version: 1
mise_a_jour: 2026-11-25
---

# Fiche du module 5.3 — Données, droit et gouvernance

## Extrait du programme

- **Contenu** : Loi camerounaise n° 2024/017 du 23 décembre 2024 sur la protection des données à caractère personnel (en vigueur depuis le 23 juin 2026), lois équivalentes des autres pays visés, RGPD, AI Act, transferts de données hors du pays, licences des modèles et des données, documentation (model cards, datasheets)
- **Exercice clé** : Rédiger la fiche de conformité d'un projet

## Objectifs vérifiables

| Id | À la fin, l'apprenant sait… | Évalué par |
| --- | --- | --- |
| O1 | Appliquer les principes des lois sur les données personnelles : Cameroun, autres pays visés, RGPD. | ex01 à ex03, exercice clé (ex12), qcm |
| O2 | Identifier les obligations de l'AI Act selon le niveau de risque. | ex04 à ex05, exercice clé (ex12), qcm |
| O3 | Encadrer les transferts de données hors du pays. | ex06 à ex07, exercice clé (ex12), qcm |
| O4 | Vérifier les licences du code, des modèles et des données. | ex08 à ex09, exercice clé (ex12), qcm |
| O5 | Documenter un système : model card, datasheet et fiche de conformité. | ex10 à ex11, exercice clé (ex12), qcm |

## Chapitres

| Chapitre | Titre | Exercices |
| --- | --- | --- |
| 1 | Les données personnelles | 3 |
| 2 | L'AI Act | 2 |
| 3 | Les transferts | 2 |
| 4 | Les licences | 2 |
| 5 | Documenter | 3 |

## Notions, dans l'ordre

| Chapitre | Id de la notion | Notion | Objectif |
| --- | --- | --- | --- |
| 1 | `donnee-personnelle` | Qu'est-ce qu'une donnée personnelle | O1 |
| 1 | `loi-cameroun` | La loi camerounaise de 2024 | O1 |
| 1 | `lois-afrique` | Les lois des autres pays visés | O1 |
| 1 | `rgpd` | Le RGPD | O1 |
| 1 | `droits-personnes` | Les droits des personnes | O1 |
| 2 | `ai-act` | L'AI Act : une loi par niveau de risque | O2 |
| 2 | `haut-risque` | Les obligations d'un système à haut risque | O2 |
| 2 | `ai-act-afrique` | Pourquoi l'AI Act concerne aussi un développeur africain | O2 |
| 3 | `transferts` | Transférer des données hors du pays | O3 |
| 3 | `hebergement-loi` | Choisir où héberger | O3 |
| 4 | `licences-code` | Les licences de code | O4 |
| 4 | `licences-modeles` | Les licences des modèles | O4 |
| 4 | `licences-donnees` | Les licences des données | O4 |
| 5 | `model-card` | La model card | O5 |
| 5 | `datasheet` | La datasheet | O5 |
| 5 | `fiche-conformite` | La fiche de conformité | O5 |

## Vocabulaire du module

| Terme | Catégorie (A anglais / B transparent) | Notion où il apparaît |
| --- | --- | --- |
| donnée à caractère personnel | B | `donnee-personnelle` |
| responsable de traitement | B | `loi-cameroun` |
| RGPD (GDPR) | A | `rgpd` |
| AI Act, système à haut risque | A | `ai-act` |
| transfert de données | B | `transferts` |
| licence open source, licence permissive | A | `licences-code` |
| model card, datasheet | A | `model-card` |
| conformité (compliance) | A | `fiche-conformite` |

## Fil rouge et ancrage local

- **Situation** : une start-up de Bamenda lance une application de suivi de grossesse qui utilise un modèle d'IA. Avant le lancement, ses investisseurs exigent une fiche de conformité : données, hébergement, licences, risques.
- **Personnages** : Dr Ngwa, sage-femme et cofondatrice, et son associé développeur.
- **Données utilisées** : les textes de loi officiels (Cameroun, autres pays visés, RGPD, AI Act) et le projet de l'apprenant.

## Exercices prévus

| Id | Titre | Objectif | Difficulté (1–3) | Livrable non testable ? |
| --- | --- | --- | --- | --- |
| 5.3-ex01 à ex03 | Les données personnelles | O1 | 1–2 | non |
| 5.3-ex04 à ex05 | L'AI Act | O2 | 2 | non |
| 5.3-ex06 à ex07 | Les transferts | O3 | 2 | non |
| 5.3-ex08 à ex09 | Les licences | O4 | 2 | non |
| 5.3-ex10 à ex11 | Documenter | O5 | 2–3 | non |
| 5.3-ex12 | Exercice clé : rédiger la fiche de conformité d'un projet | O1 à O5 | 3 | oui → GRILLE.md (fiche de conformité) |

## Ressources matérielles

- **RAM maximale** : négligeable.
- **Téléchargements** : aucun.
- **Temps de calcul le plus long** : négligeable.
- **Dépendances nouvelles** : aucune.
- **API payante** : aucune.

## Point de contrôle sécurité et éthique

Ce module est lui-même le point de contrôle : la fiche de conformité est exigée pour le capstone.

## Ressources externes gratuites

| Ressource | Langue | Durée ou taille | Licence | Pourquoi |
| --- | --- | --- | --- | --- |
| [Le texte de l'AI Act sur EUR-Lex](https://eur-lex.europa.eu/eli/reg/2024/1689/oj?locale=fr) | français | règlement | réutilisation libre (EUR-Lex) | Le texte officiel, en français. |
| [Le RGPD expliqué par la CNIL](https://www.cnil.fr/fr/reglement-europeen-protection-donnees) | français | guide | gratuit en ligne | Les principes du RGPD, clairement expliqués. |

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

- TODO(vérifier) : texte officiel de la loi camerounaise n° 2024/017 et ses décrets d'application, avec leur source.
- TODO(vérifier) : lois sur les données personnelles des autres pays visés, avec leur date.
- TODO(vérifier) : faire relire le module par un juriste avant publication.
