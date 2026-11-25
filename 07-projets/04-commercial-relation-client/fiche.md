---
id: "7.4"
titre: "Commercial et relation client"
parcours: "07-projets"
nature: projets
promesse: "Quatre produits qui font vendre et fidéliser : un commercial virtuel qui négocie, un support WhatsApp qui règle les commandes, une recommandation de produits, et une qualification de prospects. Chacun mesuré en chiffre d'affaires, pas seulement en qualité de réponse."
question_saut: "Tu as déjà livré un assistant client dont l'effet sur les ventes a été mesuré ?"
qcm: false
prerequis: ["1.5", "3.3", "3.6", "4.2", "6.1"]
statut: brouillon
version: 1
mise_a_jour: 2026-11-25
---

# 7.4 — Commercial et relation client

## Extrait du programme

- **Exercice clé** : Livrer de bout en bout au moins un projet de la famille, avec son effet commercial mesuré ou simulé

## Objectifs vérifiables

| Id | À la fin, l'apprenant sait… | Évalué par |
| --- | --- | --- |
| O1 | Livrer un commercial virtuel qui conseille, établit des devis exacts et négocie dans les limites. | projet 1 |
| O2 | Livrer un support client WhatsApp qui règle les demandes courantes et escalade le reste. | projet 2 |
| O3 | Construire une recommandation de produits et mesurer son effet sur les ventes. | projet 3 |
| O4 | Qualifier et suivre des prospects automatiquement, dans le respect du consentement. | projet 4 |

## Chapitres

| Chapitre | Titre | Exercices |
| --- | --- | --- |
| 1 | Un commercial virtuel pour des kits solaires | 0 |
| 2 | Le support WhatsApp d'une boutique en ligne | 0 |
| 3 | Recommander des produits dans un supermarché en ligne | 0 |
| 4 | Qualifier les prospects d'un éditeur de logiciels | 0 |

## Notions, dans l'ordre

| Chapitre | Id de la notion | Notion | Objectif |
| --- | --- | --- | --- |
| 1 | `qualifier-besoin` | Qualifier le besoin, une question à la fois | O1 |
| 1 | `dimensionner-par-code` | Dimensionner par du code, recommander avec des sources | O1 |
| 1 | `devis-outils` | Un devis dont chaque chiffre vient d'un outil | O1 |
| 1 | `negocier-limites` | Négocier dans les limites, vérifiées hors du modèle | O1 |
| 1 | `changements-client` | Le client revient et change tout : budget, quantité, rupture | O1 |
| 1 | `accord-confirme` | N'enregistrer que l'accord confirmé, sans doublon | O1 |
| 1 | `client-simule` | Un client simulé et 30 scénarios, dont les clients difficiles | O1 |
| 1 | `rapport-directrice` | Le rapport à la directrice : ce que l'assistant peut faire seul | O1 |
| 2 | `motifs-boutique` | Les motifs de contact d'une boutique en ligne | O2 |
| 2 | `regles-whatsapp` | Les règles de WhatsApp Business : fenêtre de 24 heures, modèles | O2 |
| 2 | `suivi-commande` | Suivre une commande avec les outils de la boutique | O2 |
| 2 | `retours-remboursements` | Retours et remboursements : appliquer la politique, pas l'inventer | O2 |
| 2 | `langues-clients` | Répondre en français, en nouchi, en anglais | O2 |
| 2 | `escalade-conseiller` | Escalader vers un conseiller avec le dossier complet | O2 |
| 2 | `satisfaction-cout` | Mesurer la résolution, la satisfaction et le coût par conversation | O2 |
| 3 | `donnees-achats` | Les données d'achats : paniers, catalogue, saisons | O3 |
| 3 | `reference-reco` | La référence simple : les plus vendus et « souvent achetés ensemble » | O3 |
| 3 | `filtrage-collaboratif` | Le filtrage collaboratif sur les paniers | O3 |
| 3 | `produits-nouveaux` | Les produits et clients nouveaux : le démarrage à froid | O3 |
| 3 | `expliquer-reco` | Expliquer une recommandation en une phrase | O3 |
| 3 | `evaluer-hors-ligne` | Évaluer hors ligne : précision@k, couverture, diversité | O3 |
| 3 | `test-ab-reco` | Le test A/B : mesurer le panier moyen | O3 |
| 4 | `profil-client-ideal` | Le profil du client idéal, écrit avec les commerciaux | O4 |
| 4 | `consentement-prospects` | Le consentement : qui a accepté d'être contacté | O4 |
| 4 | `extraire-prospect` | Extraire le prospect d'un formulaire ou d'un message | O4 |
| 4 | `scorer-prospect` | Scorer : règles, modèle, ou les deux | O4 |
| 4 | `relances-personnalisees` | Des relances personnalisées et justes | O4 |
| 4 | `ecrire-crm` | Écrire dans le CRM sans doublon | O4 |
| 4 | `mesurer-conversion` | Mesurer la conversion, prospect par prospect | O4 |

## Comparatif des projets

| Projet | Le problème | L'approche | Le point dur | Coût d'exploitation |
| --- | --- | --- | --- | --- |
| Commercial virtuel | Des demandes le soir, des devis faux | Agent avec outils, limites en code, client simulé | Négociation sûre, changements | Moyen par conversation |
| Support WhatsApp | Des milliers de messages répétitifs | Agent avec outils de commande, politique appliquée | Règles WhatsApp, escalade | Faible par conversation, gros volume |
| Recommandation | Des paniers trop petits | ML classique et embeddings, LLM pour expliquer | Démarrage à froid, mesure réelle | Très faible |
| Qualification | Des prospects perdus | Extraction, scoring, relances, CRM | Consentement, doublons | Faible |

## Les projets

### 1. Un commercial virtuel pour des kits solaires

- **Le client** : un distributeur de kits solaires à Abidjan, 12 personnes, 140 références, des particuliers et une trentaine de revendeurs.
- **Le problème** : 60 % des demandes arrivent le soir et restent sans réponse ; les devis faits à la main contiennent des erreurs de prix ou de stock ; certaines remises dépassent ce que la direction autorise.
- **Pourquoi ce cas est différent** : l'assistant engage l'entreprise. Chaque prix doit venir d'un outil, chaque remise respecter une règle, chaque commande être confirmée, et la conversation peut changer de direction plusieurs fois.
- **L'approche de l'expert** : qualification structurée du besoin, dimensionnement par une fonction testée, recherche dans le catalogue avec filtres, devis produit par des outils puis recalculé, règles commerciales écrites en code entre le modèle et l'envoi, dossier client hors du contexte, enregistrement idempotent après confirmation explicite, et évaluation sur un client simulé.
- **Alternatives écartées** : un chatbot à arbre de décision (incapable de négocier ou de gérer les changements) ; laisser le modèle fixer les prix (erreurs et remises hors limites).
- **Ce qui se vend** : un abonnement mensuel, plus une commission éventuelle sur les ventes conclues la nuit. Le retour se mesure en ventes récupérées et en erreurs de devis évitées.
- **Contraintes réelles** : messages vocaux WhatsApp, paiement en plusieurs fois réservé aux revendeurs, stock mis à jour une fois par jour, clients qui tentent de manipuler l'assistant.
- **L'imprévu** : le fournisseur du modèle tombe en panne une heure un samedi soir ; un produit du devis disparaît entre deux messages.
- **C'est réussi quand** :
  - 100 % des devis exacts sur les scénarios, et aucune remise hors limites.
  - Aucune commande sans confirmation, aucune en double après une coupure.
  - Un commercial juge la recommandation adaptée dans au moins 80 % des cas.
- **À revoir** : `3.2/schemas-complexes`, `3.3/filtres-metadonnees`, `3.6/agent-code`, `3.2/function-calling`, `3.6/garde-fous`, `5.1/injection-directe`, `3.6/memoire-utilisateurs`, `4.5/idempotence`, `3.6/environnements-agents`
- **Pour ton portfolio** : une négociation complète en vidéo, le rapport sur 30 scénarios, le coût par conversation.

### 2. Le support WhatsApp d'une boutique en ligne

- **Le client** : une boutique en ligne d'électroménager et de téléphones à Dakar, 3 000 commandes par mois, livraison et paiement à la livraison ou par mobile money.
- **Le problème** : 70 % des messages demandent « où est ma commande ? » ou « comment me faire rembourser ? ». Les quatre conseillers sont débordés, les clients attendent des heures.
- **Pourquoi ce cas est différent** : le volume est élevé et le canal impose ses règles (fenêtre de 24 heures, modèles de messages approuvés). Les remboursements suivent une politique précise qu'on n'a pas le droit d'improviser.
- **L'approche de l'expert** : classer un échantillon de vrais messages, des outils de suivi de commande et de retour, une politique de remboursement codée et citée, des réponses dans la langue du client, une escalade avec le dossier complet, et la mesure de la résolution et du coût.
- **Alternatives écartées** : un FAQ automatique (ne connaît pas la commande du client) ; laisser l'agent décider des remboursements (pertes et litiges).
- **Ce qui se vend** : un abonnement selon le volume de conversations. Le retour : moins d'heures de conseillers, moins d'abandons, de meilleurs avis.
- **Contraintes réelles** : API WhatsApp Business et ses coûts par conversation, données personnelles des clients, transporteurs qui mettent à jour le suivi avec retard.
- **L'imprévu** : le transporteur principal ne met plus à jour le suivi pendant deux jours.
- **C'est réussi quand** :
  - La part de conversations résolues sans conseiller est mesurée sur un mois simulé.
  - Aucune réponse ne contredit la politique de remboursement.
  - Les messages hors fenêtre de 24 heures utilisent un modèle approuvé.
  - Le coût par conversation résolue est chiffré.
- **À revoir** : `3.6/outils-api`, `3.4/citations`, `3.4/repondre-langue-question`, `3.6/humain-boucle`, `4.8/sms-ussd`, `5.3/principes-protection`, `4.7/cout-utilisateur`
- **Pour ton portfolio** : la démo d'un suivi de commande et d'un retour, les taux de résolution, le coût par conversation.

### 3. Recommander des produits dans un supermarché en ligne

- **Le client** : un supermarché en ligne de Yaoundé, 8 000 références, 40 000 clients, livraisons à domicile.
- **Le problème** : le panier moyen stagne. Les clients rachètent les mêmes produits sans découvrir le reste du catalogue.
- **Pourquoi ce cas est différent** : ce n'est pas un problème de LLM. La base est du machine learning classique ; le LLM ne sert qu'à expliquer. Et la seule mesure qui compte se fait en conditions réelles : le panier moyen.
- **L'approche de l'expert** : une référence simple (les plus vendus, « souvent achetés ensemble »), un filtrage collaboratif, des embeddings de produits pour les nouveautés, une phrase d'explication générée, une évaluation hors ligne puis un test A/B.
- **Alternatives écartées** : demander au LLM de recommander à partir de l'historique (cher, lent, impossible à évaluer à grande échelle) ; un modèle complexe avant d'avoir battu la référence simple.
- **Ce qui se vend** : un module ajouté à la boutique, facturé au forfait ou au pourcentage de la hausse du panier moyen. Le calcul est direct : quelques points de panier moyen sur 40 000 clients.
- **Contraintes réelles** : catalogue mal décrit, produits saisonniers (rentrée scolaire, fêtes), ruptures fréquentes à ne pas recommander.
- **L'imprévu** : 500 nouveaux produits arrivent sans historique de vente.
- **C'est réussi quand** :
  - Le modèle bat la référence simple hors ligne, sur des métriques expliquées.
  - Les produits en rupture ne sont jamais recommandés.
  - Le test A/B est conçu avec sa taille d'échantillon et sa durée, puis simulé ou mené.
- **À revoir** : `1.5/recommandation`, `1.5/factorisation-matrices`, `1.5/reco-contenu`, `1.5/reco-evaluer`, `3.3/recommander-embeddings`, `1.6/metriques-classement`, `3.5/test-ab-llm`
- **Pour ton portfolio** : la comparaison avec la référence, les recommandations expliquées, le plan de test A/B.

### 4. Qualifier les prospects d'un éditeur de logiciels

- **Le client** : un éditeur de logiciel de gestion pour écoles privées, vendu au Bénin, au Togo et au Niger, qui reçoit 600 demandes par mois (formulaire, WhatsApp, salons).
- **Le problème** : les deux commerciaux rappellent dans l'ordre d'arrivée ; les écoles prêtes à acheter attendent pendant qu'ils parlent à des étudiants curieux.
- **Pourquoi ce cas est différent** : le système agit sur des personnes extérieures. Le consentement et la justesse des relances comptent autant que la précision du score.
- **L'approche de l'expert** : un profil du client idéal écrit avec les commerciaux, la vérification du consentement, l'extraction du prospect en données structurées, un score qui combine règles et modèle, des relances personnalisées relues, une écriture dans le CRM sans doublon, et la mesure de la conversion.
- **Alternatives écartées** : un score par le seul LLM (impossible à expliquer aux commerciaux) ; des relances automatiques massives (spam, image de marque abîmée).
- **Ce qui se vend** : un abonnement mensuel. Le retour se mesure en rendez-vous obtenus et en délai de premier contact.
- **Contraintes réelles** : lois sur les données personnelles de trois pays, prospects qui écrivent depuis plusieurs canaux, CRM avec une API limitée.
- **L'imprévu** : la même école écrit trois fois, depuis trois numéros et un formulaire.
- **C'est réussi quand** :
  - Aucun prospect relancé sans consentement.
  - Les doublons sont fusionnés dans le CRM.
  - Les commerciaux jugent le classement meilleur que l'ordre d'arrivée sur un échantillon.
  - La conversion est suivie prospect par prospect.
- **À revoir** : `3.2/extraire-documents`, `1.5/logistique`, `1.6/seuil-decision`, `5.3/donnee-personnelle`, `5.3/droits-personnes`, `4.5/schema-donnees`, `6.1/premiers-clients`
- **Pour ton portfolio** : le score expliqué, la gestion du consentement, le tableau de conversion.

## Fil rouge et ancrage local

- **Situation** : quatre entreprises qui vendent (distributeur solaire, boutique en ligne, supermarché, éditeur de logiciels) et qui jugent l'IA sur une seule question : est-ce que ça rapporte, sans abîmer la relation client ?

## Circuit

- [ ] 1. Fiche validée par le mainteneur
- [ ] 2. Données fictives réalistes et solution de référence
- [ ] 3. Énoncés des étapes
- [ ] 4. Tests et grilles
- [ ] 5. Relecture élève
- [ ] 6. Relecture expert
