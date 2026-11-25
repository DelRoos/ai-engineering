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
| O1 | Appliquer les principes des lois sur les données personnelles : Cameroun, autres pays visés, RGPD. | ex01 à ex05, ex06 à ex08, exercice clé (ex24), qcm |
| O2 | Identifier les obligations de l'AI Act selon le niveau de risque. | ex09 à ex11, exercice clé (ex24), qcm |
| O3 | Encadrer les transferts de données hors du pays. | ex12 à ex14, exercice clé (ex24), qcm |
| O4 | Vérifier les licences du code, des modèles et des données. | ex15 à ex17, exercice clé (ex24), qcm |
| O5 | Documenter un système : model card, datasheet et fiche de conformité. | ex18 à ex20, ex21 à ex23, exercice clé (ex24), qcm |

## Chapitres

| Chapitre | Titre | Exercices |
| --- | --- | --- |
| 1 | Les données personnelles | 5 |
| 2 | Protéger en pratique | 3 |
| 3 | L'AI Act | 3 |
| 4 | Les transferts | 3 |
| 5 | Les licences et le droit d'auteur | 3 |
| 6 | Gouverner | 3 |
| 7 | Documenter | 4 |

## Notions, dans l'ordre

| Chapitre | Id de la notion | Notion | Objectif |
| --- | --- | --- | --- |
| 1 | `donnee-personnelle` | Qu'est-ce qu'une donnée personnelle | O1 |
| 1 | `principes-protection` | Les grands principes : finalité, minimisation, durée de conservation | O1 |
| 1 | `loi-cameroun` | La loi camerounaise de 2024 | O1 |
| 1 | `lois-afrique` | Les lois des autres pays visés | O1 |
| 1 | `convention-malabo` | La convention de l'Union africaine (Malabo) | O1 |
| 1 | `rgpd` | Le RGPD | O1 |
| 1 | `droits-personnes` | Les droits des personnes | O1 |
| 2 | `donnees-sensibles` | Les données sensibles : santé, enfants, biométrie | O1 |
| 2 | `analyse-impact-donnees` | L'analyse d'impact sur la protection des données | O1 |
| 2 | `violation-donnees` | Quand les données fuient : notifier | O1 |
| 2 | `securite-donnees` | Sécuriser les données : chiffrement et accès | O1 |
| 2 | `pseudonymiser` | Pseudonymiser en pratique | O1 |
| 3 | `ai-act` | L'AI Act : une loi par niveau de risque | O2 |
| 3 | `haut-risque` | Les obligations d'un système à haut risque | O2 |
| 3 | `modeles-usage-general` | Les obligations des modèles d'usage général | O2 |
| 3 | `ai-act-afrique` | Pourquoi l'AI Act concerne aussi un développeur africain | O2 |
| 3 | `calendrier-ai-act` | Le calendrier d'application de l'AI Act | O2 |
| 4 | `transferts` | Transférer des données hors du pays | O3 |
| 4 | `hebergement-loi` | Choisir où héberger | O3 |
| 4 | `contrats-fournisseurs` | Lire les conditions d'un fournisseur d'IA | O3 |
| 4 | `clauses-contractuelles` | Encadrer un transfert : les clauses | O3 |
| 4 | `cloud-souverain` | Héberger dans le pays ou dans la région | O3 |
| 5 | `licences-code` | Les licences de code | O4 |
| 5 | `licences-modeles` | Les licences des modèles | O4 |
| 5 | `licences-donnees` | Les licences des données | O4 |
| 5 | `droit-auteur-entrainement` | Le droit d'auteur et l'entraînement des modèles | O4 |
| 5 | `contenus-generes` | À qui appartient un contenu généré ? | O4 |
| 6 | `politique-ia` | Une politique d'usage de l'IA dans une organisation | O5 |
| 6 | `registre-traitements` | Tenir un registre des traitements et des modèles | O5 |
| 6 | `roles-gouvernance` | Qui décide : les rôles de la gouvernance | O5 |
| 6 | `audit-interne` | Préparer un audit | O5 |
| 6 | `incidents-ia` | Gérer un incident d'IA | O5 |
| 7 | `model-card` | La model card | O5 |
| 7 | `datasheet` | La datasheet | O5 |
| 7 | `fiche-conformite` | La fiche de conformité | O5 |
| 7 | `documentation-technique` | La documentation technique exigée | O5 |
| 7 | `tenir-a-jour` | Tenir la documentation à jour | O5 |

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
| 5.3-ex01 à ex05 | Les données personnelles | O1 | 1 | non |
| 5.3-ex06 à ex08 | Protéger en pratique | O1 | 1 | non |
| 5.3-ex09 à ex11 | L'AI Act | O2 | 2 | non |
| 5.3-ex12 à ex14 | Les transferts | O3 | 2 | non |
| 5.3-ex15 à ex17 | Les licences et le droit d'auteur | O4 | 2–3 | non |
| 5.3-ex18 à ex20 | Gouverner | O5 | 2–3 | non |
| 5.3-ex21 à ex23 | Documenter | O5 | 2–3 | non |
| 5.3-ex24 | Exercice clé : rédiger la fiche de conformité d'un projet | O1 à O5 | 3 | oui → GRILLE.md (fiche de conformité) |

## Ressources matérielles

- **RAM maximale** : négligeable.
- **Téléchargements** : aucun.
- **Temps de calcul le plus long** : négligeable.
- **Dépendances nouvelles** : aucune.
- **API payante** : aucune.

## Point de contrôle sécurité et éthique

Ce module est lui-même le point de contrôle : la fiche de conformité est exigée pour le capstone.

## Ressources externes gratuites

| Ressource | Langue | Type | Licence ou accès | Pourquoi |
| --- | --- | --- | --- | --- |
| [Le texte de l'AI Act sur EUR-Lex](https://eur-lex.europa.eu/eli/reg/2024/1689/oj?locale=fr) | français | texte officiel | réutilisation libre | Le règlement européen sur l'IA. |
| [Le RGPD expliqué par la CNIL](https://www.cnil.fr/fr/reglement-europeen-protection-donnees) | français | guide | accès libre | Les principes du RGPD, clairement expliqués. |
| [La protection des données dans le monde (CNIL)](https://www.cnil.fr/fr/la-protection-des-donnees-dans-le-monde) | français | carte | accès libre | Le niveau de protection des données, pays par pays. |
| [Les fiches de modèle (Hugging Face)](https://huggingface.co/docs/hub/model-cards) | anglais | documentation | Apache 2.0 | Rédiger une model card complète. |
| [Choisir une licence](https://choosealicense.com/) | anglais | guide | CC BY 3.0 | Comprendre les licences de code. |

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
- TODO(vérifier) : compléter le vocabulaire des notions ajoutées par la seconde passe d'audit (25/11/2026), en vérifiant chaque terme dans docs/glossaire.md.
