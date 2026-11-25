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
| O1 | Construire une API avec FastAPI et y servir un modèle. | ex01 à ex03, ex04 à ex06, ex07 à ex09, exercice clé (ex19), qcm |
| O2 | Valider les entrées et les sorties, et renvoyer des erreurs claires. | ex01 à ex03, ex04 à ex06, exercice clé (ex19), qcm |
| O3 | Protéger une API par authentification. | ex07 à ex09, ex10 à ex12, exercice clé (ex19), qcm |
| O4 | Gérer les requêtes longues : asynchrone et streaming. | ex13 à ex15, exercice clé (ex19), qcm |
| O5 | Documenter, tester et faire évoluer une API. | ex07 à ex09, ex16 à ex18, exercice clé (ex19), qcm |

## Chapitres

| Chapitre | Titre | Exercices |
| --- | --- | --- |
| 1 | Une API côté serveur | 3 |
| 2 | Valider et servir | 3 |
| 3 | Organiser l'application | 3 |
| 4 | Sécuriser | 3 |
| 5 | Le temps de réponse | 3 |
| 6 | Documenter et tester | 4 |

## Notions, dans l'ordre

| Chapitre | Id de la notion | Notion | Objectif |
| --- | --- | --- | --- |
| 1 | `api-serveur` | Une API vue du serveur | O1 |
| 1 | `fastapi` | Ta première API avec FastAPI | O1 |
| 1 | `routes` | Routes, paramètres et méthodes | O1 |
| 1 | `corps-requete` | Le corps d'une requête et les modèles imbriqués | O1 |
| 1 | `modele-reponse` | Le modèle de réponse et les codes de statut | O2 |
| 2 | `valider-entrees` | Valider les entrées avec Pydantic | O2 |
| 2 | `erreurs-api` | Renvoyer des erreurs claires | O2 |
| 2 | `recevoir-fichier` | Recevoir un fichier : l'envoi d'images | O1 |
| 2 | `charger-modele-demarrage` | Charger le modèle une seule fois au démarrage | O1 |
| 2 | `servir-modele` | Servir un modèle de ML | O1 |
| 3 | `dependances-fastapi` | L'injection de dépendances | O1 |
| 3 | `base-donnees-api` | Une base de données derrière l'API | O1 |
| 3 | `grandes-applications` | Une application en plusieurs fichiers | O5 |
| 3 | `reglages` | Les réglages et les variables d'environnement | O3 |
| 3 | `middleware` | Les middlewares | O3 |
| 4 | `cle-api-serveur` | L'authentification par clé d'API | O3 |
| 4 | `jetons` | Les jetons : notions de JWT et OAuth | O3 |
| 4 | `cors` | CORS : qui a le droit d'appeler ton API | O3 |
| 4 | `limiter-debit-api` | Limiter le débit d'une API | O3 |
| 5 | `async` | L'asynchrone : async et await | O4 |
| 5 | `streaming` | Envoyer la réponse au fil de l'eau : le streaming | O4 |
| 5 | `taches-fond` | Les tâches de fond | O4 |
| 5 | `websockets` | Les WebSockets | O4 |
| 6 | `openapi` | La documentation automatique : OpenAPI | O5 |
| 6 | `tester-api` | Tester une API | O5 |
| 6 | `versionner-api` | Faire évoluer une API sans casser ses clients | O5 |
| 6 | `lancer-production` | Lancer l'API en production : serveur et workers | O5 |

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
| 4.2-ex01 à ex03 | Une API côté serveur | O1, O2 | 1 | non |
| 4.2-ex04 à ex06 | Valider et servir | O1, O2 | 1 | non |
| 4.2-ex07 à ex09 | Organiser l'application | O1, O3, O5 | 2 | non |
| 4.2-ex10 à ex12 | Sécuriser | O3 | 2 | non |
| 4.2-ex13 à ex15 | Le temps de réponse | O4 | 2–3 | non |
| 4.2-ex16 à ex18 | Documenter et tester | O5 | 2–3 | non |
| 4.2-ex19 | Exercice clé : exposer le modèle du projet 2 en API | O1 à O5 | 3 | non |

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
- TODO(vérifier) : compléter le vocabulaire des notions ajoutées par la seconde passe d'audit (25/11/2026), en vérifiant chaque terme dans docs/glossaire.md.
