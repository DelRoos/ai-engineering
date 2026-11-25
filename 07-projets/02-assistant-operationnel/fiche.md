---
id: "P2"
titre: "Un assistant opérationnel pour une coopérative de cacao"
famille: "Assistant opérationnel"
promesse: "Tu construis l'assistant qui aide les gestionnaires d'une coopérative à suivre les collectes, planifier les tournées et préparer les paiements des producteurs, en agissant sur de vrais outils sans jamais dépasser ses droits."
prerequis: ["3.4", "3.6", "4.2", "4.5", "4.7"]
statut: brouillon
version: 1
mise_a_jour: 2026-11-25
---

# P2 — Un assistant opérationnel pour une coopérative de cacao

## Le brief client

- **Le client** : une coopérative fictive de 1 800 producteurs de cacao dans la région de Soubré, en Côte d'Ivoire. Elle collecte les fèves dans 40 villages, les stocke, les vend à un exportateur et paie les producteurs par mobile money.
- **Les utilisateurs** : les quatre gestionnaires de la coopérative, qui passent leurs journées entre tableurs, appels et messages ; le trésorier, seul habilité à valider les paiements.
- **Le problème** : il faut une demi-journée pour répondre à « combien avons-nous collecté à Gnamangui cette semaine ? ». Les tournées sont organisées au téléphone, et les erreurs de paiement (oublis, doublons) coûtent la confiance des producteurs.
- **Le résultat attendu** : un assistant qui répond aux questions sur les données de la coopérative, propose les tournées de collecte, produit le rapport hebdomadaire, et prépare les paiements que le trésorier valide.
- **Hors périmètre** : l'exécution des paiements (toujours validée par un humain), la négociation avec l'exportateur.

## Indicateurs de réussite

| Indicateur | Nature | Cible | Comment le mesurer |
| --- | --- | --- | --- |
| Réponses chiffrées exactes | métier | ≥ 95 % | Comparaison avec les résultats attendus des 40 questions de test |
| Paiements préparés exacts | métier | 100 % | Rapprochement automatique avec les collectes |
| Paiements en double ou sans validation | métier | 0 | Tests d'interruption et rejeu des scénarios |
| Actions hors des droits de l'utilisateur | métier | 0 | Scénarios de permissions |
| Tâches réussies sur les scénarios | technique | ≥ 85 % | Évaluation de la mission 7 |
| Coût et durée par tâche | technique | mesurés et justifiés | Traces |

## Compétences démontrées

| Compétence | Leçons à revoir |
| --- | --- |
| Cartographier des opérations et des droits | `4.9/exigences`, `5.1/moindre-privilege`, `3.6/faut-il-agent` |
| Interroger des données en langage naturel | `3.4/texte-vers-sql`, `5.1/sorties-non-validees` |
| Concevoir des outils et un serveur MCP | `3.6/concevoir-outil`, `3.6/serveur-mcp`, `3.2/valider-arguments` |
| Choisir entre workflow et agent | `3.6/choisir-workflow`, `3.6/chainage`, `4.5/planifier` |
| Agir avec validation humaine | `3.6/humain-boucle`, `3.6/journal-actions`, `5.1/confirmation` |
| Tenir une tâche longue malgré les coupures | `3.6/etat-durable`, `3.6/points-controle`, `4.5/idempotence` |
| Évaluer et observer un agent | `3.6/scenarios`, `3.6/trajectoires`, `4.7/traces` |

## Missions

### 1. Cartographier les opérations

- **Situation** : avant d'automatiser quoi que ce soit, il faut comprendre qui fait quoi, avec quelles données, et qui a le droit de décider.
- **Livrable** : une carte des processus (collecte, stockage, vente, paiement), la liste des données utilisées, une matrice des droits (qui peut lire, proposer, valider), et pour chaque tâche la décision : code simple, workflow ou agent.
- **Critères de réussite** :
  - Chaque tâche confiée à l'assistant a un responsable humain identifié.
  - Chaque décision « agent » est justifiée face à un workflow plus simple.
  - La matrice des droits couvre toutes les actions d'écriture.
- **Étapes conseillées** :
  1. Lire les tableurs et les messages fournis.
  2. Dessiner les processus et repérer les tâches répétitives.
  3. Écrire la matrice des droits et les décisions.
- **Leçons utiles** : `4.9/exigences`, `4.9/questions-clarification`, `3.6/faut-il-agent`, `5.1/moindre-privilege`, `5.1/modele-menace`
- **Vérification** : grille

### 2. Interroger les données

- **Situation** : « Combien de kilos avons-nous reçus de Gnamangui cette semaine, et qui n'a pas encore livré ? »
- **Livrable** : un outil qui traduit une question en requête SQL en lecture seule sur la base des collectes, l'exécute, et répond avec le chiffre et la requête utilisée.
- **Critères de réussite** :
  - Les 40 questions de test reçoivent le bon chiffre.
  - Aucune requête ne peut modifier la base (compte en lecture seule, vérification de la requête).
  - Une question ambiguë déclenche une question de précision.
- **Étapes conseillées** :
  1. Décrire le schéma de la base au modèle.
  2. Générer la requête, la vérifier, l'exécuter en lecture seule.
  3. Mesurer sur les 40 questions et corriger.
- **Leçons utiles** : `3.4/texte-vers-sql`, `5.1/sorties-non-validees`, `3.5/correspondance-exacte`, `3.2/function-calling`
- **Vérification** : tests automatiques

### 3. Donner des outils

- **Situation** : l'assistant doit consulter le stock, la météo des pistes et le calendrier des camions, et proposer des tournées.
- **Livrable** : un serveur MCP qui expose les outils de la coopérative (stock, collectes, camions, météo), avec des schémas précis, des arguments validés et des erreurs utiles.
- **Critères de réussite** :
  - Chaque outil a une description et un schéma qui suffisent à l'utiliser correctement.
  - Des arguments invalides sont refusés avec un message que le modèle sait exploiter.
  - Le serveur est testé avec l'inspecteur MCP.
- **Étapes conseillées** :
  1. Concevoir chaque outil : nom, description, entrées, sorties, erreurs.
  2. Écrire le serveur MCP.
  3. Le tester avec l'inspecteur, puis avec l'agent.
- **Changement imprévu** : l'outil météo change de format de réponse ; l'agent doit échouer proprement, pas inventer.
- **Leçons utiles** : `3.6/concevoir-outil`, `3.6/serveur-mcp`, `3.6/inspecteur-mcp`, `3.2/valider-arguments`, `3.6/erreurs-outils`
- **Vérification** : tests automatiques

### 4. Automatiser le rapport de la semaine

- **Situation** : chaque lundi, un gestionnaire passe trois heures à produire le rapport des collectes.
- **Livrable** : un workflow planifié (pas un agent) qui rassemble les chiffres, les vérifie, rédige le rapport et le dépose, relançable sans risque.
- **Critères de réussite** :
  - Le rapport contient des chiffres recalculés par du code, pas par le modèle.
  - Relancer le workflow ne produit pas de doublon.
  - Un échec à une étape est signalé, avec reprise possible.
- **Étapes conseillées** :
  1. Découper le rapport en étapes simples.
  2. Écrire le workflow et le planifier.
  3. Tester une relance et un échec.
- **Leçons utiles** : `3.6/chainage`, `3.6/choisir-workflow`, `4.5/planifier`, `4.5/echecs-reprises`, `4.5/idempotence`
- **Vérification** : tests automatiques

### 5. Préparer les paiements

- **Situation** : en fin de mois, 1 800 producteurs attendent leur paiement par mobile money.
- **Livrable** : l'assistant prépare le lot de paiements à partir des collectes, le présente au trésorier avec les anomalies repérées, et ne transmet rien sans sa validation explicite ; chaque action est journalisée.
- **Critères de réussite** :
  - Le lot préparé correspond exactement aux collectes de la période.
  - Les anomalies (producteur inconnu, montant inhabituel) sont signalées.
  - Aucune transmission sans validation, et chaque action figure dans le journal.
- **Étapes conseillées** :
  1. Calculer les paiements par du code et les rapprocher des collectes.
  2. Construire l'écran ou le message de validation pour le trésorier.
  3. Journaliser chaque proposition, validation et refus.
- **Leçons utiles** : `3.6/humain-boucle`, `3.6/validation-actions`, `3.6/journal-actions`, `5.1/confirmation`, `6.1/paiement-mobile`
- **Vérification** : tests automatiques

### 6. Tenir malgré les coupures

- **Situation** : la connexion tombe au milieu de la préparation du lot, puis l'électricité. Le lendemain, le gestionnaire relance.
- **Livrable** : un harness qui sauvegarde l'état de la tâche, reprend où il s'était arrêté, et garantit qu'aucun paiement n'est préparé ou transmis deux fois.
- **Critères de réussite** :
  - Sur les tests d'interruption, zéro paiement en double.
  - La reprise repart du dernier point de contrôle, sans refaire le travail fini.
  - L'assistant indique clairement où il en est après une reprise.
- **Étapes conseillées** :
  1. Écrire l'état de la tâche dans un fichier ou une base.
  2. Ajouter des points de contrôle et des clés d'idempotence.
  3. Couper le processus à chaque étape et vérifier la reprise.
- **Changement imprévu** : un producteur est ajouté à la liste pendant la coupure.
- **Leçons utiles** : `3.6/harness`, `3.6/etat-durable`, `3.6/points-controle`, `3.6/agent-connexion-instable`, `4.5/idempotence`
- **Vérification** : tests automatiques

### 7. Évaluer sur des scénarios

- **Situation** : avant de confier l'assistant aux gestionnaires, il faut savoir ce qu'il réussit et où il se trompe.
- **Livrable** : 30 scénarios (questions, tournées, rapport, paiements, tentatives d'action interdite), le taux de réussite, l'analyse des trajectoires ratées, le coût et la durée par tâche.
- **Critères de réussite** :
  - Chaque scénario a un résultat attendu vérifiable par du code.
  - Les échecs sont rattachés à leur cause (outil, raisonnement, contexte, permission).
  - Les scénarios de permissions sont tous réussis.
- **Étapes conseillées** :
  1. Écrire les scénarios, dont les pièges.
  2. Lancer l'évaluation et lire les trajectoires.
  3. Corriger et relancer.
- **Leçons utiles** : `3.6/scenarios`, `3.6/trajectoires`, `3.6/evaluer-etapes`, `3.6/cout-agent`, `3.6/environnements-agents`
- **Vérification** : tests automatiques et grille

### 8. Exploiter et présenter

- **Situation** : la coopérative veut savoir combien l'assistant lui coûte et être prévenue quand il se trompe.
- **Livrable** : des traces pour chaque tâche, un tableau de bord (réussite, coût, durée), une alerte sur les anomalies, et un rapport d'une page pour le conseil d'administration.
- **Critères de réussite** :
  - Chaque tâche peut être suivie de bout en bout dans les traces.
  - L'alerte se déclenche sur les anomalies fournies, pas sur le reste.
  - Le rapport donne les gains, les coûts et les limites.
- **Étapes conseillées** :
  1. Instrumenter l'agent et ses outils.
  2. Construire le tableau de bord et l'alerte.
  3. Rédiger le rapport.
- **Leçons utiles** : `4.7/traces`, `4.7/tableau-bord`, `4.7/alertes`, `4.7/cout-utilisateur`, `6.2/resultats-chiffres`
- **Vérification** : tests automatiques et grille

## Validation

| Contrôle | Comment | Règle |
| --- | --- | --- |
| Tests des missions | `python outils/check.py` sur chaque mission | Tous les tests passent |
| Indicateurs de réussite | Évaluation de la mission 7, relancée par une commande | Cibles atteintes, ou écart expliqué |
| Correction par l'agent IA | `GRILLE.md` du projet | Au moins 14/20 |
| Examen oral avec l'IA | 5 à 10 questions sur ton code et tes choix | Au moins 70 % de réponses jugées correctes |

## Portfolio

- Un README en anglais : le problème, la démonstration, l'architecture en un schéma, les résultats chiffrés.
- La carte des processus et la matrice des droits.
- Le rapport d'évaluation sur les scénarios, avec les trajectoires ratées analysées.
- Une vidéo de démonstration de 3 minutes au plus, avec une reprise après coupure.
- Le badge de la CI au vert et le rapport de l'agent correcteur.

## Données et ressources matérielles

- **Données fournies** : une base fictive de collectes (1 800 producteurs, 40 villages, un an), les tableurs des gestionnaires, un calendrier de camions, des réponses météo simulées, 40 questions de test et 30 scénarios.
- **Modèle** : un petit modèle local (Ollama) qui sait appeler des outils.
- **Machine** : PC de 8 Go de RAM, sans carte graphique.

## Circuit

- [ ] 1. Fiche validée par le mainteneur
- [ ] 2. Solution et tests
- [ ] 3. Énoncés des missions
- [ ] 4. Indices
- [ ] 5. Données
- [ ] 6. Grille
- [ ] 7. Relecture élève
- [ ] 8. Relecture expert
