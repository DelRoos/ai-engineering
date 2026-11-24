---
id: "etape-5"
titre: "Étape 5 — Sécurité, éthique et IA responsable"
ordre: 5
semaines: 3
statut: brouillon
---

# Étape 5 — Sécurité, éthique et IA responsable (3 semaines)

**Objectif** : livrer des systèmes dignes de confiance. La sécurité et l'éthique sont déjà traitées dans chaque projet depuis l'étape 1 ; cette étape approfondit le sujet et se conclut par l'audit d'un système existant.

## Modules

| Module | Dossier | Semaine | Contenu | Exercice clé |
| --- | --- | --- | --- | --- |
| 5.1 Sécurité des applications LLM | `01-securite-llm/` | 1 | OWASP Top 10 pour les applications LLM : injection de prompt, fuite de données, outils dangereux, permissions minimales, red teaming défensif | Durcir l'agent du projet 3 et documenter chaque protection |
| 5.2 Biais, équité, fiabilité | `02-biais-equite/` | 2 | Mesurer les biais (genre, langue, région), hallucinations, explicabilité, supervision humaine | Mesurer les écarts de performance d'un modèle entre groupes |
| 5.3 Données, droit et gouvernance | `03-droit-gouvernance/` | 3 | Loi camerounaise n° 2024/017 sur les données personnelles, lois équivalentes des autres pays visés, RGPD, AI Act, transferts de données, licences, model cards et datasheets | Rédiger la fiche de conformité d'un projet |

## Points de contrôle dans chaque étape

Un projet n'est pas validé sans son point de contrôle sécurité et éthique.

| Étape | Point de contrôle |
| --- | --- |
| 1 | Consentement et anonymisation des données collectées, aucun secret dans le dépôt Git, revue du code généré par l'assistant |
| 2 | Performance mesurée séparément par région ou type de culture, limites du modèle écrites dans la model card |
| 3 | Tests d'injection de prompt, refus des questions hors périmètre, permissions minimales des outils de l'agent |
| 4 | Gestion des secrets, authentification de l'API, journalisation sans données personnelles, localisation des données conforme à la loi |
| 6 | Fiche de conformité complète publiée avec le capstone |

## Projet 5 — Audit d'un système d'IA (`projet/`)

Tu audites une application LLM open source choisie dans une liste fournie par la formation : tests d'attaque défensifs en local, mesure des biais, revue de la gestion des données.

- **Livrable** : rapport d'audit avec risques classés par gravité et correctifs proposés.
- Tu corriges ensuite les 3 risques les plus graves dans ton fork et proposes au moins un correctif au projet d'origine (issue ou pull request).
- Des tests automatiques vérifient que les attaques fournies échouent après correction.

## Anglais

Examens oraux et vidéos entièrement en anglais.

## Point d'attention pour les rédacteurs

Les textes de loi évoluent. Chaque référence juridique est citée avec son numéro, sa date et sa source officielle, et vérifiée lors de la relecture expert.

## État

Aucun module rédigé pour l'instant.
