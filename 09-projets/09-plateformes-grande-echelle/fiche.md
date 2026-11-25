---
id: "9.9"
titre: "Plateformes à grande échelle"
parcours: "09-projets"
nature: projets
promesse: "Cinq projets de mise à l'échelle : faire passer un assistant à 100 000 utilisateurs, construire une passerelle entre fournisseurs de LLM, évaluer et observer en continu, réindexer des millions de documents, et servir plusieurs clients sur une même plateforme sans fuite entre eux."
question_saut: "Tu as déjà fait tenir un service d'IA sous une charge réelle, coûts et incidents compris ?"
qcm: false
prerequis: ["3.8", "4.5", "4.6", "4.7", "4.8", "4.9"]
statut: brouillon
version: 1
mise_a_jour: 2026-11-25
---

# 9.9 — Plateformes à grande échelle

## Extrait du programme

- **Exercice clé** : Livrer de bout en bout au moins un projet de la famille, avec un test de charge, un budget et un incident simulé

## Objectifs vérifiables

| Id | À la fin, l'apprenant sait… | Évalué par |
| --- | --- | --- |
| O1 | Faire passer un assistant de 1 000 à 100 000 utilisateurs en tenant la latence et le budget. | projet 1 |
| O2 | Construire une passerelle LLM : routage, repli, quotas, budgets par équipe. | projet 2 |
| O3 | Mettre en place l'évaluation et l'observabilité continues d'un système LLM en production. | projet 3 |
| O4 | Réindexer des millions de documents de façon incrémentale, sans interrompre le service. | projet 4 |
| O5 | Servir plusieurs clients sur une même plateforme, isolés et facturés séparément. | projet 5 |

## Chapitres

| Chapitre | Titre | Exercices |
| --- | --- | --- |
| 1 | De 1 000 à 100 000 utilisateurs | 0 |
| 2 | La passerelle LLM d'un groupe bancaire | 0 |
| 3 | Évaluer et observer en continu | 0 |
| 4 | Réindexer 5 millions de documents | 0 |
| 5 | Une plateforme pour 300 entreprises clientes | 0 |

## Notions, dans l'ordre

| Chapitre | Id de la notion | Notion | Objectif |
| --- | --- | --- | --- |
| 1 | `estimer-charge` | Estimer la charge : utilisateurs, pics, tokens par requête | O1 |
| 1 | `goulets-assistant` | Trouver les goulets : modèle, recherche, base, réseau | O1 |
| 1 | `cache-niveaux-assistant` | Le cache à chaque niveau, et ce qu'il fait gagner | O1 |
| 1 | `files-pics` | Absorber les pics avec des files et des limites | O1 |
| 1 | `echelle-horizontale` | Monter en charge horizontalement, sans état dans les serveurs | O1 |
| 1 | `routage-cout` | Router les questions simples vers un petit modèle | O1 |
| 1 | `test-charge-assistant` | Le test de charge qui reproduit un vrai pic | O1 |
| 1 | `cout-par-utilisateur` | Le coût par utilisateur actif, mois par mois | O1 |
| 2 | `pourquoi-passerelle` | Pourquoi une passerelle : dix équipes, trois fournisseurs | O2 |
| 2 | `api-unique` | Une API unique, compatible avec les clients existants | O2 |
| 2 | `routage-modeles` | Router par tâche, par coût, par confidentialité | O2 |
| 2 | `repli-fournisseur-passerelle` | Basculer quand un fournisseur tombe | O2 |
| 2 | `quotas-budgets` | Quotas et budgets par équipe | O2 |
| 2 | `filtrer-donnees-sortantes` | Ce qui n'a pas le droit de sortir | O2 |
| 2 | `journal-facturation` | Journaliser et refacturer chaque appel | O2 |
| 3 | `traces-production` | Tracer chaque requête de bout en bout | O3 |
| 3 | `echantillonner-evaluer` | Échantillonner et évaluer les réponses réelles | O3 |
| 3 | `juge-production` | Un juge calibré, surveillé lui aussi | O3 |
| 3 | `eval-dans-ci` | Les évaluations dans la CI, avec des seuils | O3 |
| 3 | `derive-reponses-prod` | Détecter la dérive des réponses | O3 |
| 3 | `alertes-utiles` | Des alertes qui réveillent pour de bonnes raisons | O3 |
| 3 | `incident-post-mortem` | Un incident, puis son post-mortem | O3 |
| 4 | `volumetrie-index` | La volumétrie : documents, morceaux, vecteurs, mémoire | O4 |
| 4 | `pipeline-distribue` | Un pipeline d'ingestion qui se parallélise | O4 |
| 4 | `incremental-grande-echelle` | Ne traiter que ce qui change, à grande échelle | O4 |
| 4 | `index-sans-coupure` | Basculer vers le nouvel index sans coupure | O4 |
| 4 | `compresser-vecteurs` | Réduire la mémoire : quantification et Matryoshka | O4 |
| 4 | `controle-ingestion-masse` | Contrôler la qualité de millions d'ingestions | O4 |
| 4 | `cout-reindexation` | Le coût d'une réindexation complète, et comment l'éviter | O4 |
| 5 | `modeles-multi-clients` | Isoler les clients : base partagée ou base par client | O5 |
| 5 | `isolation-donnees` | Prouver que les données ne fuient pas entre clients | O5 |
| 5 | `config-par-client` | Une configuration par client : modèles, prompts, documents | O5 |
| 5 | `voisin-bruyant` | Le voisin bruyant : limites par client | O5 |
| 5 | `facturer-usage` | Mesurer et facturer l'usage de chaque client | O5 |
| 5 | `deployer-sans-casser` | Déployer pour tous sans casser personne | O5 |
| 5 | `sla-clients` | Les engagements de service et leur suivi | O5 |

## Comparatif des projets

| Projet | Le problème | L'approche | Le point dur | Ce qui se mesure |
| --- | --- | --- | --- | --- |
| 100 000 utilisateurs | La latence et le coût explosent | Cache, files, routage, serveurs sans état | Pics, coût par utilisateur | p95, coût mensuel |
| Passerelle LLM | Dix équipes, trois fournisseurs, aucun contrôle | API unique, routage, repli, quotas | Confidentialité, pannes | Disponibilité, coût par équipe |
| Évaluation continue | La qualité baisse sans que personne le voie | Traces, échantillons, juge, alertes | Juge fiable, fausses alertes | Qualité dans le temps |
| Réindexation | 5 millions de documents qui changent | Pipeline incrémental, bascule sans coupure | Mémoire, coût, contrôle | Débit, fraîcheur, mémoire |
| Multi-clients | 300 clients sur une plateforme | Isolation, limites, facturation | Fuite entre clients | Isolation prouvée, marge |

## Les projets

### 1. De 1 000 à 100 000 utilisateurs

- **Le client** : une start-up d'éducation de Nairobi et Kigali, dont l'assistant de révision du baccalauréat passe de 1 000 utilisateurs en test à 100 000 inscrits en période d'examens.
- **Le problème** : au premier pic, les réponses mettent 40 secondes et la facture du mois triple. Les révisions ne pardonnent pas : un élève qui attend s'en va.
- **Pourquoi ce cas est différent** : rien n'est cassé fonctionnellement ; tout casse sous la charge. Il faut estimer, mesurer, et agir là où se trouve vraiment le goulet.
- **L'approche de l'expert** : estimer la charge et les pics, trouver les goulets par la mesure, mettre du cache à chaque niveau (réponses, sémantique, préfixe), absorber les pics avec des files et des limites, des serveurs sans état qui se multiplient, router les questions simples vers un petit modèle, un test de charge qui reproduit un vrai pic, et le suivi du coût par utilisateur.
- **Alternatives écartées** : acheter un plus gros serveur (ne règle ni le coût ni les pics) ; tout mettre en cache sans mesure (réponses périmées, gain incertain).
- **Ce qui se vend** : la survie du produit. La start-up doit tenir un coût par utilisateur inférieur à ce que paient les familles ou les écoles.
- **Contraintes réelles** : pics prévisibles mais violents (veilles d'examen), utilisateurs sur réseau mobile lent, budget de start-up.
- **L'imprévu** : la veille de l'examen de mathématiques, le trafic est multiplié par 15 en deux heures.
- **C'est réussi quand** :
  - Le p95 de latence reste dans la cible au pic simulé.
  - Le coût par utilisateur actif est mesuré avant et après, avec la part de chaque optimisation.
  - Le système se dégrade proprement au-delà de sa capacité.
- **À revoir** : `4.9/estimations`, `4.8/goulet`, `4.8/cache-semantique`, `4.9/cache-niveaux`, `4.9/files-taches`, `4.9/scalabilite`, `4.8/router-par-difficulte`, `4.8/test-charge`
- **Pour ton portfolio** : les courbes de latence et de coût avant et après, le rapport du test de charge.

### 2. La passerelle LLM d'un groupe bancaire

- **Le client** : un groupe bancaire présent dans douze pays, dont dix équipes utilisent trois fournisseurs de LLM chacune à sa façon.
- **Le problème** : clés d'API partagées dans des fichiers, aucune visibilité sur les coûts, des données de clients envoyées sans contrôle, et une panne de fournisseur qui arrête trois applications.
- **Pourquoi ce cas est différent** : on ne construit pas une application mais l'infrastructure commune à toutes. Elle doit être plus fiable que chacun des fournisseurs, et contrôler ce qui sort de la banque.
- **L'approche de l'expert** : une API unique compatible avec les clients existants, un routage par tâche, coût et niveau de confidentialité, un repli automatique quand un fournisseur tombe, des quotas et budgets par équipe, un filtrage des données sensibles avant l'envoi, et un journal qui permet de refacturer chaque appel.
- **Alternatives écartées** : laisser chaque équipe gérer ses fournisseurs (situation actuelle) ; un seul fournisseur imposé (dépendance totale, pas de repli).
- **Ce qui se vend** : un projet interne qui se justifie par les économies, la sécurité et la continuité de service ; ou un produit vendu à d'autres groupes.
- **Contraintes réelles** : régulateurs bancaires de plusieurs pays, données qui ne peuvent pas quitter certains pays, exigence de disponibilité élevée.
- **L'imprévu** : le fournisseur principal subit une panne de deux heures un jour de clôture mensuelle.
- **C'est réussi quand** :
  - Une panne simulée d'un fournisseur est absorbée par le repli, mesurée.
  - Aucune donnée marquée sensible ne sort vers un fournisseur non autorisé, sur un jeu de tests.
  - Le coût est visible et plafonné par équipe.
- **À revoir** : `4.8/routage`, `4.8/repli-fournisseur`, `4.8/limites-debit`, `4.9/passerelle-api`, `5.1/prevenir-fuites`, `5.3/transferts`, `4.7/cout-utilisateur`, `4.4/budget-alertes`
- **Pour ton portfolio** : l'architecture de la passerelle, le test de panne, le tableau des coûts par équipe.

### 3. Évaluer et observer en continu

- **Le client** : une assurance santé de Casablanca et Dakar dont l'assistant répond chaque jour à 20 000 adhérents sur leurs remboursements.
- **Le problème** : après une mise à jour du modèle par le fournisseur, la qualité a baissé pendant trois semaines sans que personne le remarque, jusqu'aux plaintes.
- **Pourquoi ce cas est différent** : le système fonctionne ; ce qui manque, c'est la capacité à voir qu'il se dégrade. La qualité doit être mesurée en continu, sur les vraies conversations.
- **L'approche de l'expert** : tracer chaque requête, échantillonner et évaluer les réponses réelles, un juge calibré sur des annotations et surveillé, des évaluations dans la CI avec des seuils, la détection de dérive des réponses, des alertes qui sonnent pour de bonnes raisons, et un post-mortem par incident.
- **Alternatives écartées** : évaluer seulement avant chaque version (rate les changements du fournisseur et des usages) ; relire à la main (impossible au volume).
- **Ce qui se vend** : un service d'observabilité et d'évaluation, facturé au volume ou intégré à un contrat d'exploitation.
- **Contraintes réelles** : données de santé, conversations en français et en arabe, budget d'évaluation limité.
- **L'imprévu** : le juge lui-même se met à dériver après une mise à jour de son modèle.
- **C'est réussi quand** :
  - Une baisse de qualité simulée est détectée en moins de 24 heures.
  - Le juge est recalibré et son accord avec les humains suivi.
  - Une version qui fait baisser la qualité est bloquée par la CI.
  - Un post-mortem est écrit pour l'incident simulé.
- **À revoir** : `4.7/traces`, `4.7/evaluation-continue`, `3.5/calibrer-juge`, `4.6/eval-ci`, `4.6/seuils-qualite`, `4.7/derive-reponses`, `4.7/alertes`, `4.7/post-mortem`
- **Pour ton portfolio** : le tableau de bord de qualité, la détection d'une dérive simulée, le post-mortem.

### 4. Réindexer 5 millions de documents

- **Le client** : une plateforme d'information juridique et réglementaire couvrant l'espace OHADA, avec 5 millions de documents (lois, décisions de justice, journaux officiels).
- **Le problème** : chaque jour, des milliers de documents arrivent ou changent ; une réindexation complète prend une semaine et coûte cher ; pendant ce temps, l'index est périmé.
- **Pourquoi ce cas est différent** : à cette échelle, chaque choix (modèle d'embeddings, taille des vecteurs, découpage) se paie en mémoire, en heures et en argent. Et l'index ne doit jamais être indisponible.
- **L'approche de l'expert** : calculer la volumétrie, un pipeline d'ingestion parallélisé, un traitement incrémental des seuls changements, une bascule vers le nouvel index sans coupure, une réduction de la mémoire par quantification et vecteurs Matryoshka, des contrôles de qualité sur l'ingestion, et le chiffrage d'une réindexation complète quand on change de modèle.
- **Alternatives écartées** : réindexer tout chaque semaine (coût et fraîcheur) ; garder des vecteurs pleine précision (mémoire hors budget).
- **Ce qui se vend** : la fraîcheur de l'information est le produit. Un document disponible le jour même vaut un abonnement.
- **Contraintes réelles** : documents scannés anciens, plusieurs langues, budget d'infrastructure fixe.
- **L'imprévu** : on décide de changer de modèle d'embeddings ; il faut réindexer 5 millions de documents sans interrompre le service.
- **C'est réussi quand** :
  - Un document modifié est interrogeable dans le délai cible.
  - La bascule d'index se fait sans erreur visible pour les utilisateurs.
  - La mémoire et la qualité sont mesurées avant et après la quantification.
  - Le coût d'une réindexation complète est chiffré.
- **À revoir** : `4.5/ingestion-documents`, `4.5/reindexer`, `4.5/versionner-index`, `4.5/incremental`, `3.3/matryoshka`, `3.3/quantifier-embeddings`, `4.5/controler-ingestion`, `4.5/quand-distribuer`
- **Pour ton portfolio** : la mesure de fraîcheur, la bascule sans coupure, le compromis mémoire contre qualité.

### 5. Une plateforme pour 300 entreprises clientes

- **Le client** : un éditeur qui vend un assistant documentaire en abonnement à des PME d'Afrique de l'Ouest, chacune avec ses documents et ses utilisateurs.
- **Le problème** : chaque nouveau client se déploie à la main sur son propre serveur ; à 300 clients, c'est intenable. Il faut une plateforme commune, sans jamais mélanger les données.
- **Pourquoi ce cas est différent** : une fuite entre clients tue l'entreprise. L'isolation doit être prouvée, l'usage de chacun mesuré, et une mise à jour ne doit casser personne.
- **L'approche de l'expert** : choisir le modèle d'isolation (base partagée filtrée ou base par client), prouver l'isolation par des tests, une configuration par client, des limites contre le voisin bruyant, la mesure et la facturation de l'usage, un déploiement progressif, et le suivi des engagements de service.
- **Alternatives écartées** : un serveur par client (coûts et maintenance multipliés) ; une base partagée sans tests d'isolation (risque inacceptable).
- **Ce qui se vend** : la marge de l'éditeur. Le coût par client doit baisser à mesure que la plateforme grandit.
- **Contraintes réelles** : clients de tailles très différentes, lois sur les données de plusieurs pays, quelques gros clients qui exigent un hébergement dédié.
- **L'imprévu** : un gros client importe 2 millions de documents un lundi matin et ralentit tous les autres.
- **C'est réussi quand** :
  - Les tests d'isolation prouvent qu'aucun client n'accède aux données d'un autre.
  - Le voisin bruyant est contenu par les limites, mesuré.
  - L'usage de chaque client est facturé à partir des journaux.
  - Une mise à jour est déployée progressivement avec retour arrière.
- **À revoir** : `4.9/donnees-par-service`, `4.2/roles-permissions`, `4.8/limites-debit`, `4.7/cout-utilisateur`, `4.6/deploiement-progressif`, `4.7/slo`, `4.7/sla`, `5.1/fuite-donnees`
- **Pour ton portfolio** : les tests d'isolation, le test du voisin bruyant, le calcul du coût par client.

## Fil rouge et ancrage local

- **Situation** : cinq organisations qui ont réussi un premier service d'IA et doivent maintenant le faire tenir à l'échelle : plus d'utilisateurs, plus d'équipes, plus de documents, plus de clients, sans exploser les coûts ni la confiance.

## Circuit

- [ ] 1. Fiche validée par le mainteneur
- [ ] 2. Données fictives réalistes et solution de référence
- [ ] 3. Énoncés des étapes
- [ ] 4. Tests et grilles
- [ ] 5. Relecture élève
- [ ] 6. Relecture expert
