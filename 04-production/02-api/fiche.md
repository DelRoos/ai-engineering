---
id: "4.2"
titre: "Construire une API"
parcours: "04-production"
promesse: "Rendre ton modèle utilisable par d'autres applications : une API rapide, validée, sécurisée et documentée avec FastAPI."
question_saut: "Tu construis déjà des API avec FastAPI ?"
qcm: true
prerequis: ["0.5", "2.2"]
statut: brouillon
version: 1
mise_a_jour: 2026-11-25
---

# Fiche du module 4.2 — Construire une API

## Extrait du programme

- **Contenu** : FastAPI, validation, authentification, async, streaming des réponses LLM, documentation automatique
- **Exercice clé** : Exposer le modèle du projet 2 en API

## Objectifs vérifiables

| Id | À la fin, l'apprenant sait… | Évalué par |
| --- | --- | --- |
| O1 | Construire une API avec FastAPI et y servir un modèle. | ex01 à ex02, ex03 à ex04, exercice clé (ex12), qcm |
| O2 | Valider les entrées et les sorties, et renvoyer des erreurs claires. | ex03 à ex04, exercice clé (ex12), qcm |
| O3 | Protéger une API par authentification. | ex05 à ex07, exercice clé (ex12), qcm |
| O4 | Gérer les requêtes longues : asynchrone et streaming. | ex08 à ex09, exercice clé (ex12), qcm |
| O5 | Documenter, tester et faire évoluer une API. | ex10 à ex11, exercice clé (ex12), qcm |

## Chapitres

| Chapitre | Titre | Exercices |
| --- | --- | --- |
| 1 | Une API côté serveur | 2 |
| 2 | Valider et servir | 2 |
| 3 | Sécuriser | 3 |
| 4 | Le temps de réponse | 2 |
| 5 | Documenter et tester | 3 |

## Notions, dans l'ordre

| Chapitre | Id de la notion | Notion | Objectif |
| --- | --- | --- | --- |
| 1 | `api-serveur` | Une API vue du serveur | O1 |
| 1 | `fastapi` | Ta première API avec FastAPI | O1 |
| 1 | `routes` | Routes, paramètres et méthodes | O1 |
| 2 | `valider-entrees` | Valider les entrées avec Pydantic | O2 |
| 2 | `erreurs-api` | Renvoyer des erreurs claires | O2 |
| 2 | `servir-modele` | Servir un modèle de ML | O1 |
| 3 | `cle-api-serveur` | L'authentification par clé d'API | O3 |
| 3 | `jetons` | Les jetons : notions de JWT et OAuth | O3 |
| 3 | `cors` | CORS : qui a le droit d'appeler ton API | O3 |
| 3 | `limiter-debit-api` | Limiter le débit d'une API | O3 |
| 4 | `async` | L'asynchrone : async et await | O4 |
| 4 | `streaming` | Envoyer la réponse au fil de l'eau : le streaming | O4 |
| 4 | `taches-fond` | Les tâches de fond | O4 |
| 5 | `openapi` | La documentation automatique : OpenAPI | O5 |
| 5 | `tester-api` | Tester une API | O5 |
| 5 | `versionner-api` | Faire évoluer une API sans casser ses clients | O5 |

## Vocabulaire du module

| Terme | Catégorie (A anglais / B transparent) | Notion où il apparaît |
| --- | --- | --- |
| API, endpoint, route | A | `routes` |
| FastAPI | A | `fastapi` |
| validation | B | `valider-entrees` |
| authentification, JWT, OAuth | A | `jetons` |
| CORS | A | `cors` |
| asynchrone (async) | A | `async` |
| streaming, SSE | A | `streaming` |
| OpenAPI, Swagger | A | `openapi` |

## Fil rouge et ancrage local

- **Situation** : l'application mobile d'une coopérative de Kisangani doit envoyer la photo d'une feuille de manioc et recevoir le diagnostic du modèle du projet 2. Il lui faut une API fiable.
- **Personnages** : Bienvenu, agronome, et le développeur de l'application mobile.
- **Données utilisées** : le modèle du projet 2 de l'apprenant, et des images de test fournies.

## Exercices prévus

| Id | Titre | Objectif | Difficulté (1–3) | Livrable non testable ? |
| --- | --- | --- | --- | --- |
| 4.2-ex01 à ex02 | Une API côté serveur | O1 | 1–2 | non |
| 4.2-ex03 à ex04 | Valider et servir | O1, O2 | 2 | non |
| 4.2-ex05 à ex07 | Sécuriser | O3 | 2 | non |
| 4.2-ex08 à ex09 | Le temps de réponse | O4 | 2 | non |
| 4.2-ex10 à ex11 | Documenter et tester | O5 | 2–3 | non |
| 4.2-ex12 | Exercice clé : exposer le modèle du projet 2 en API | O1 à O5 | 3 | non |

## Ressources matérielles

- **RAM maximale** : 1 à 2 Go.
- **Téléchargements** : fastapi et uvicorn (quelques Mo).
- **Temps de calcul le plus long** : moins d'une seconde par requête pour un modèle léger.
- **Dépendances nouvelles** : fastapi, uvicorn, httpx (tests).
- **API payante** : aucune.

## Point de contrôle sécurité et éthique

Point de contrôle du projet 4 : authentification de l'API, gestion des secrets, journalisation sans données personnelles.

## Ressources externes gratuites

| Ressource | Langue | Durée ou taille | Licence | Pourquoi |
| --- | --- | --- | --- | --- |
| [Documentation de FastAPI](https://fastapi.tiangolo.com/) | anglais, en partie en français | référence | MIT | Le tutoriel officiel, très progressif. |

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

- TODO(vérifier) : aucun point en suspens à la création de la fiche.
