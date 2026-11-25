---
id: "7.6"
titre: "IA locale et embarquée"
parcours: "07-projets"
nature: projets
promesse: "Quatre projets où l'IA tourne chez l'utilisateur et pas dans le cloud : un assistant confidentiel sur un PC, un diagnostic sur téléphone sans réseau, un serveur pour toute une PME, et des centaines d'appareils dispersés à tenir à jour."
question_saut: "Tu as déjà déployé un modèle sur la machine d'un client, avec ses mises à jour ?"
qcm: false
prerequis: ["2.5", "3.4", "3.8", "4.3", "4.8"]
statut: brouillon
version: 1
mise_a_jour: 2026-11-25
---

# 7.6 — IA locale et embarquée

## Extrait du programme

- **Exercice clé** : Livrer de bout en bout au moins un projet de la famille, mesuré sur la machine cible

## Objectifs vérifiables

| Id | À la fin, l'apprenant sait… | Évalué par |
| --- | --- | --- |
| O1 | Livrer un assistant entièrement local, installable par un non-informaticien. | projet 1 |
| O2 | Faire tourner un diagnostic par l'image et un conseil sur un téléphone d'entrée de gamme, sans réseau. | projet 2 |
| O3 | Servir un modèle à toute une PME sur un seul serveur, et le comparer au cloud. | projet 3 |
| O4 | Déployer et mettre à jour des modèles sur des centaines d'appareils dispersés. | projet 4 |

## Chapitres

| Chapitre | Titre | Exercices |
| --- | --- | --- |
| 1 | L'assistant confidentiel d'un office notarial | 0 |
| 2 | Un diagnostic des cultures sur téléphone, sans réseau | 0 |
| 3 | Un serveur d'IA pour une PME de 30 personnes | 0 |
| 4 | 200 tablettes d'école à tenir à jour | 0 |

## Notions, dans l'ordre

| Chapitre | Id de la notion | Notion | Objectif |
| --- | --- | --- | --- |
| 1 | `pourquoi-pas-cloud` | Pourquoi ce client refuse le cloud, et ce que ça impose | O1 |
| 1 | `budget-machine` | Le budget de la machine : mémoire, processeur, disque | O1 |
| 1 | `choisir-quantifier-notaire` | Choisir et quantifier le modèle, mesures à l'appui | O1 |
| 1 | `rag-actes` | Un RAG local sur les actes et la doctrine | O1 |
| 1 | `installateur` | Un installateur en un clic pour Windows | O1 |
| 1 | `chiffrement-local` | Chiffrer les données sur le disque | O1 |
| 1 | `mise-a-jour-modele-local` | Mettre à jour le modèle sans perdre les données | O1 |
| 1 | `support-a-distance` | Diagnostiquer un problème sans voir la machine | O1 |
| 2 | `telephones-terrain` | Les téléphones du terrain : mémoire, batterie, Android ancien | O2 |
| 2 | `classifieur-feuilles` | Un classifieur de feuilles léger, par transfert | O2 |
| 2 | `quantifier-mobile` | Quantifier et exporter pour le téléphone | O2 |
| 2 | `photos-reelles` | Les vraies photos : flou, contre-jour, plusieurs feuilles | O2 |
| 2 | `incertitude-diagnostic` | Dire « je ne suis pas sûr » et proposer de reprendre la photo | O2 |
| 2 | `conseil-vocal` | Le conseil en langue locale, à l'oral | O2 |
| 2 | `mesurer-sur-telephone` | Mesurer vitesse, mémoire et batterie sur le téléphone | O2 |
| 3 | `besoins-pme` | Les usages et le nombre d'utilisateurs simultanés | O3 |
| 3 | `materiel-serveur` | Choisir le matériel : CPU, petit GPU, mémoire | O3 |
| 3 | `moteur-service` | Choisir le moteur : llama.cpp, vLLM ou autre | O3 |
| 3 | `charge-pme` | Tester la charge : temps du premier token selon les utilisateurs | O3 |
| 3 | `prefixe-commun` | Gagner du temps avec le préfixe commun en cache | O3 |
| 3 | `acces-equipe` | Comptes, quotas et journal pour l'équipe | O3 |
| 3 | `cout-local-cloud` | Comparer le coût sur trois ans avec une API | O3 |
| 4 | `parc-appareils` | Le parc : 200 tablettes, 40 écoles, connexion une fois par semaine | O4 |
| 4 | `modele-embarque-ecole` | Le modèle embarqué et sa taille | O4 |
| 4 | `paquets-signes` | Des mises à jour en paquets signés et versionnés | O4 |
| 4 | `deploiement-progressif-parc` | Déployer progressivement, revenir en arrière | O4 |
| 4 | `remonter-mesures` | Faire remonter des mesures sans données personnelles | O4 |
| 4 | `synchro-conflits` | Synchroniser et résoudre les conflits | O4 |
| 4 | `tableau-parc` | Le tableau de bord du parc | O4 |

## Comparatif des projets

| Projet | Le problème | L'approche | Le point dur | Coût d'exploitation |
| --- | --- | --- | --- | --- |
| Office notarial | Confidentialité absolue | Tout sur le PC : modèle, index, chiffrement | Installation, support | Matériel une fois |
| Téléphone sans réseau | Pas de connexion au champ | Petit modèle de vision quantifié, conseil vocal | Photos réelles, batterie | Presque nul |
| Serveur de PME | Plusieurs utilisateurs, données internes | Un serveur, un moteur de service, quotas | Concurrence, latence | Électricité et maintenance |
| Tablettes d'école | Appareils dispersés, rarement connectés | Paquets signés, déploiement progressif, télémétrie anonyme | Mises à jour, retour arrière | Logistique |

## Les projets

### 1. L'assistant confidentiel d'un office notarial

- **Le client** : un office notarial de Yaoundé, huit personnes, qui manipule des actes de vente, des successions et des données d'état civil.
- **Le problème** : les clercs passent des heures à retrouver des clauses types et des actes similaires. Le notaire refuse que le moindre document sorte du cabinet.
- **Pourquoi ce cas est différent** : le cloud est exclu par principe. Toute la valeur doit tenir sur un PC de bureau, installé et maintenu par des personnes qui ne sont pas informaticiennes.
- **L'approche de l'expert** : mesurer la machine, choisir et quantifier le modèle sur des tâches du cabinet, un RAG local sur les actes, un installateur en un clic, le chiffrement du disque des données, des mises à jour qui préservent l'index, et un outil de diagnostic pour le support à distance.
- **Alternatives écartées** : une API « avec garanties de confidentialité » (refus du client, secret professionnel) ; un serveur dans le cabinet (personne pour l'administrer).
- **Ce qui se vend** : une licence par poste et un contrat de maintenance annuel. Le marché : les offices notariaux, cabinets d'avocats et d'expertise comptable qui ont les mêmes contraintes.
- **Contraintes réelles** : PC Windows de 16 Go sans carte graphique, coupures de courant, secret professionnel, aucun informaticien sur place.
- **L'imprévu** : une coupure de courant pendant la mise à jour du modèle.
- **C'est réussi quand** :
  - L'installation réussit sur une machine vierge, sans aide, en suivant un guide d'une page.
  - Aucune connexion sortante pendant l'usage, vérifié par une capture réseau.
  - Une mise à jour interrompue ne casse ni le modèle ni l'index.
  - La latence est mesurée sur la machine cible.
- **À revoir** : `3.8/memoire-modele`, `3.8/niveaux-quantification`, `3.8/mesurer-qualite-quant`, `3.8/rag-local`, `3.8/sans-connexion`, `5.3/securite-donnees`, `4.4/retour-arriere`, `1.1/secrets-assistant`
- **Pour ton portfolio** : la vidéo d'installation sur une machine vierge, la capture réseau, la mesure de latence.

### 2. Un diagnostic des cultures sur téléphone, sans réseau

- **Le client** : une coopérative de producteurs de manioc et de maïs au Bénin, dont les conseillers agricoles visitent des champs sans couverture réseau.
- **Le problème** : les maladies (mosaïque du manioc, striure brune, chenille légionnaire) se repèrent trop tard. Les conseillers sont peu nombreux et les producteurs lisent peu.
- **Pourquoi ce cas est différent** : tout tourne sur un téléphone d'entrée de gamme, sans réseau, avec une batterie qui doit tenir la journée, et le conseil doit être compris à l'oral.
- **L'approche de l'expert** : mesurer les téléphones réels, un classifieur léger obtenu par transfert, quantifié et exporté pour le téléphone, un jeu de test de vraies photos de terrain, un seuil d'incertitude qui demande une nouvelle photo, un conseil court en langue locale lu par une synthèse vocale embarquée, et des mesures sur l'appareil.
- **Alternatives écartées** : une application qui envoie la photo à un serveur (pas de réseau au champ) ; un grand modèle de vision généraliste (trop lourd pour le téléphone).
- **Ce qui se vend** : un service vendu à la coopérative ou financé par un programme agricole, par conseiller équipé. La valeur : des pertes de récolte évitées.
- **Contraintes réelles** : téléphones Android anciens avec 2 Go de mémoire, soleil fort, photos floues, langues fon et yoruba, validation agronomique des conseils.
- **L'imprévu** : une nouvelle maladie apparaît, absente du jeu d'entraînement.
- **C'est réussi quand** :
  - La précision est mesurée sur des photos de terrain, pas seulement sur un jeu public.
  - L'application tourne sans réseau sur le téléphone cible, avec des mesures de vitesse et de batterie.
  - Une photo inconnue ou trop floue déclenche une demande de nouvelle photo.
  - Les conseils sont validés par un agronome.
- **À revoir** : `2.3/transfer-learning`, `2.3/modeles-legers`, `2.5/quantification`, `2.5/formats-mobile`, `2.5/mesurer-telephone`, `1.4/donnees-hors-distribution`, `3.10/voix-locales`, `3.10/peu-alphabetises`
- **Pour ton portfolio** : la vidéo au champ, les mesures sur le téléphone, la matrice de confusion sur photos réelles.

### 3. Un serveur d'IA pour une PME de 30 personnes

- **Le client** : une société de services informatiques d'Abidjan, 30 salariés, qui utilise des API de LLM pour rédiger, résumer et coder, et veut garder ses données de clients chez elle.
- **Le problème** : la facture des API grimpe et les clients demandent où vont leurs données. La direction envisage un serveur interne, sans savoir s'il tiendra la charge.
- **Pourquoi ce cas est différent** : la question est d'abord économique et d'infrastructure : combien d'utilisateurs simultanés, quel matériel, quel moteur, et à quel coût sur trois ans face aux API.
- **L'approche de l'expert** : mesurer les usages réels, choisir le matériel, comparer les moteurs de service, tester la charge (temps avant le premier token, débit), activer le cache de préfixe pour les consignes communes, mettre comptes, quotas et journal, puis comparer le coût total sur trois ans.
- **Alternatives écartées** : un PC puissant par salarié (cher et sous-utilisé) ; rester sur les API sans mesure (la décision serait prise à l'aveugle).
- **Ce qui se vend** : l'installation du serveur et un contrat d'infogérance, une offre reproductible pour d'autres PME.
- **Contraintes réelles** : électricité chère et instable (onduleur nécessaire), importation de matériel, pas d'administrateur système à plein temps.
- **L'imprévu** : le lundi matin, 15 personnes envoient en même temps de longs documents.
- **C'est réussi quand** :
  - Le temps avant le premier token reste dans la cible avec le nombre d'utilisateurs prévu.
  - Chaque salarié a un quota et ses appels sont journalisés.
  - Le coût sur trois ans est comparé aux API, avec ses hypothèses écrites.
- **À revoir** : `3.8/prefill-decode`, `3.8/batching-continu`, `3.8/prefix-caching`, `3.8/charge-serveur`, `3.8/moteurs-inference`, `4.8/test-charge`, `4.2/limiter-debit-api`, `4.4/estimer-couts`
- **Pour ton portfolio** : la courbe de latence selon la charge, le comparatif de coût sur trois ans.

### 4. 200 tablettes d'école à tenir à jour

- **Le client** : un programme d'éducation qui a équipé 40 écoles rurales au Niger de 200 tablettes avec un tuteur de lecture et de calcul en français et en haoussa.
- **Le problème** : les tablettes ne se connectent qu'une fois par semaine, quand l'inspecteur passe avec un point d'accès. Mettre à jour le modèle ou les contenus est un casse-tête, et personne ne sait quelles tablettes fonctionnent.
- **Pourquoi ce cas est différent** : le défi n'est pas le modèle mais le parc. Déployer, mettre à jour, revenir en arrière et mesurer sur des appareils presque toujours hors ligne.
- **L'approche de l'expert** : un inventaire du parc, un modèle embarqué adapté, des paquets de mise à jour signés et versionnés, un déploiement progressif (quelques écoles d'abord) avec retour arrière, des mesures anonymes qui remontent à la synchronisation, la résolution des conflits, et un tableau de bord du parc.
- **Alternatives écartées** : remplacer les tablettes à chaque version (coût) ; des mises à jour par Internet (pas de connexion).
- **Ce qui se vend** : un contrat avec le programme ou le ministère : déploiement, maintenance du parc, rapports d'usage. La même plateforme sert ensuite à d'autres programmes.
- **Contraintes réelles** : données d'enfants (protection renforcée), chaleur et poussière, tablettes perdues ou volées, budget public annuel.
- **L'imprévu** : une mise à jour fait planter le tuteur sur un modèle de tablette ancien.
- **C'est réussi quand** :
  - Une mise à jour invalide ou non signée est refusée par la tablette.
  - Le retour arrière fonctionne sur les tablettes touchées, à la synchronisation suivante.
  - Les mesures remontées ne contiennent aucune donnée personnelle d'enfant.
  - Le tableau de bord montre l'état de chaque école.
- **À revoir** : `3.8/mettre-a-jour-appareils`, `3.8/modeles-embarques`, `4.6/deploiement-progressif`, `4.6/signer-releases`, `4.8/synchronisation`, `4.8/conflits-synchro`, `5.3/donnees-sensibles`, `4.7/tableau-bord`
- **Pour ton portfolio** : la simulation d'un parc avec une mise à jour ratée et son retour arrière, le tableau de bord.

## Fil rouge et ancrage local

- **Situation** : quatre clients (notaire, coopérative, PME de services, programme d'éducation) pour qui le cloud n'est pas une option, par principe, par coût ou par absence de réseau.

## Circuit

- [ ] 1. Fiche validée par le mainteneur
- [ ] 2. Données fictives réalistes et solution de référence
- [ ] 3. Énoncés des étapes
- [ ] 4. Tests et grilles
- [ ] 5. Relecture élève
- [ ] 6. Relecture expert
