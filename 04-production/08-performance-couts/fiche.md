---
id: "4.8"
titre: "Performance et coûts"
parcours: "04-production"
promesse: "Servir plus de monde pour moins cher, même avec un réseau faible : mesurer, mettre en cache, router entre modèles et prévoir un mode dégradé."
question_saut: "Tu sais déjà réduire le coût et la latence d'un service d'IA ?"
qcm: true
prerequis: ["4.7"]
statut: brouillon
version: 1
mise_a_jour: 2026-11-25
---

# Fiche du module 4.8 — Performance et coûts

## Extrait du programme

- **Contenu** : Cache, batching, routage entre modèles (local ou cloud selon la tâche), limites de débit, mode dégradé, fonctionnement hors ligne et faible bande passante
- **Exercice clé** : Diviser par 2 le coût par requête sans perte de qualité

## Objectifs vérifiables

| Id | À la fin, l'apprenant sait… | Évalué par |
| --- | --- | --- |
| O1 | Mesurer le coût et la latence par requête, et trouver le goulet d'étranglement. | ex01 à ex03, ex08 à ex09, exercice clé (ex12), qcm |
| O2 | Réduire les coûts par le cache, le batching et des prompts plus courts. | ex04 à ex07, exercice clé (ex12), qcm |
| O3 | Router les requêtes entre modèles locaux et distants. | ex10 à ex11, exercice clé (ex12), qcm |
| O4 | Garder le service utilisable : limites de débit, mode dégradé, faible bande passante. | ex08 à ex09, ex13 à ex15, qcm |
| O5 | Faire fonctionner un service hors ligne et le resynchroniser. | ex16 à ex17, qcm |

## Chapitres

| Chapitre | Titre | Exercices |
| --- | --- | --- |
| 1 | Mesurer | 3 |
| 2 | Moins calculer | 4 |
| 3 | Répondre plus vite | 2 |
| 4 | Router | 3 |
| 5 | Tenir dans les mauvaises conditions | 3 |
| 6 | Hors ligne | 2 |

## Notions, dans l'ordre

| Chapitre | Id de la notion | Notion | Objectif |
| --- | --- | --- | --- |
| 1 | `cout-requete` | Le coût par requête | O1 |
| 1 | `latence` | D'où vient la latence | O1 |
| 1 | `goulet` | Trouver le goulet d'étranglement | O1 |
| 1 | `test-charge` | Tester la montée en charge : les tests de charge | O1 |
| 2 | `cache-reponses` | Le cache des réponses | O2 |
| 2 | `cache-semantique` | Le cache sémantique | O2 |
| 2 | `cache-prompt` | Le cache de prompt des fournisseurs | O2 |
| 2 | `batching` | Regrouper les requêtes : le batching | O2 |
| 2 | `prompts-courts` | Des prompts plus courts | O2 |
| 2 | `modele-plus-petit` | Un modèle plus petit pour les tâches simples | O2 |
| 3 | `latence-ressentie` | La latence ressentie : afficher au fil de l'eau | O1 |
| 3 | `delais-relances` | Délais, relances et abandon | O4 |
| 3 | `inference-cpu` | Accélérer l'inférence sur processeur | O1 |
| 4 | `routage` | Le routage entre modèles | O3 |
| 4 | `cascade` | Commencer petit, monter si besoin : la cascade | O3 |
| 5 | `limites-debit` | Les limites de débit | O4 |
| 5 | `mode-degrade` | Le mode dégradé | O4 |
| 5 | `faible-bande` | Servir avec une faible bande passante | O4 |
| 5 | `compresser` | Envoyer moins d'octets : compression et formats légers | O4 |
| 5 | `sms-ussd` | Quand il n'y a pas Internet : SMS et USSD | O4 |
| 6 | `hors-ligne-service` | Un service qui marche sans connexion | O5 |
| 6 | `synchronisation` | Synchroniser au retour du réseau | O5 |

## Vocabulaire du module

| Terme | Catégorie (A anglais / B transparent) | Notion où il apparaît |
| --- | --- | --- |
| coût par requête | B | `cout-requete` |
| latence, goulet d'étranglement (bottleneck) | A | `goulet` |
| cache sémantique | A | `cache-semantique` |
| batching | A | `batching` |
| routage (routing), cascade | A | `routage` |
| limite de débit (rate limiting) | A | `limites-debit` |
| mode dégradé (graceful degradation) | A | `mode-degrade` |
| synchronisation | B | `synchronisation` |

## Fil rouge et ancrage local

- **Situation** : l'assistant de Bafoussam a du succès : les requêtes ont triplé et le coût aussi. Beaucoup d'utilisateurs ont une connexion 2G. Il faut servir tout le monde, mieux, pour moitié prix.
- **Personnages** : Awa et le trésorier de l'association.
- **Données utilisées** : un journal de requêtes fictif mais réaliste (questions répétées, heures de pointe), et le jeu d'évaluation du module 3.5.

## Exercices prévus

| Id | Titre | Objectif | Difficulté (1–3) | Livrable non testable ? |
| --- | --- | --- | --- | --- |
| 4.8-ex01 à ex03 | Mesurer | O1 | 1 | non |
| 4.8-ex04 à ex07 | Moins calculer | O2 | 1 | non |
| 4.8-ex08 à ex09 | Répondre plus vite | O1, O4 | 2 | non |
| 4.8-ex10 à ex11 | Router | O3 | 2 | non |
| 4.8-ex12 | Exercice clé : diviser par 2 le coût par requête sans perte de qualité | O1 à O3 | 3 | non |
| 4.8-ex13 à ex15 | Tenir dans les mauvaises conditions | O4 | 2–3 | non |
| 4.8-ex16 à ex17 | Hors ligne | O5 | 2–3 | non |

## Ressources matérielles

- **RAM maximale** : 2 à 6 Go.
- **Téléchargements** : aucun nouveau modèle obligatoire.
- **Temps de calcul le plus long** : quelques minutes pour rejouer le journal de requêtes.
- **Dépendances nouvelles** : aucune nouvelle dépendance lourde.
- **API payante** : facultative ; les calculs de coût utilisent des prix datés à la rédaction, TODO(vérifier).

## Point de contrôle sécurité et éthique

Un cache peut servir la réponse d'un utilisateur à un autre : ne jamais mettre en cache des réponses qui contiennent des données personnelles.

## Ressources externes gratuites

| Ressource | Langue | Durée ou taille | Licence | Pourquoi |
| --- | --- | --- | --- | --- |
| [Made With ML](https://madewithml.com/) | anglais | cours | gratuit en ligne | Mettre en production un système de ML, de bout en bout. |

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
