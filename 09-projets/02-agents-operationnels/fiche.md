---
id: "9.2"
titre: "Agents opérationnels"
parcours: "09-projets"
nature: projets
promesse: "Cinq agents qui agissent sur de vrais outils d'entreprise : un back-office, un serveur MCP, des dossiers traités sur plusieurs jours, un navigateur, un bac à sable de code. Chacun avec ses droits, ses garde-fous et sa preuve de résultat."
question_saut: "Tu as déjà mis en production un agent qui écrit dans un système réel ?"
qcm: false
prerequis: ["3.6", "4.2", "4.5", "4.7", "5.1"]
statut: brouillon
version: 1
mise_a_jour: 2026-11-25
---

# 9.2 — Agents opérationnels

## Extrait du programme

- **Exercice clé** : Livrer de bout en bout au moins un projet de la famille, mesuré sur des scénarios, déployé et présenté dans ton portfolio

## Objectifs vérifiables

| Id | À la fin, l'apprenant sait… | Évalué par |
| --- | --- | --- |
| O1 | Livrer un agent de back-office qui lit et prépare des opérations, validées par un humain. | projet 1 |
| O2 | Exposer les outils internes d'une entreprise par un serveur MCP sûr et maintenable. | projet 2 |
| O3 | Faire traiter des dossiers par un agent sur plusieurs sessions, avec reprise et preuve. | projet 3 |
| O4 | Faire opérer un navigateur par un agent, de façon robuste et légale. | projet 4 |
| O5 | Livrer un agent analyste qui exécute du code dans un bac à sable. | projet 5 |

## Chapitres

| Chapitre | Titre | Exercices |
| --- | --- | --- |
| 1 | Le back-office d'une coopérative | 0 |
| 2 | Les outils d'un transitaire, branchés par MCP | 0 |
| 3 | Instruire 200 dossiers de crédit | 0 |
| 4 | Une veille des appels d'offres sur des portails sans API | 0 |
| 5 | Un analyste de données en bac à sable | 0 |

## Notions, dans l'ordre

| Chapitre | Id de la notion | Notion | Objectif |
| --- | --- | --- | --- |
| 1 | `cartographier-operations` | Cartographier les opérations et la matrice des droits | O1 |
| 1 | `workflow-ou-agent` | Pour chaque tâche : code, workflow ou agent ? | O1 |
| 1 | `outil-sql-lecture` | Un outil SQL en lecture seule | O1 |
| 1 | `rapport-hebdo-workflow` | Le rapport de la semaine en workflow planifié | O1 |
| 1 | `preparer-paiements` | Préparer les paiements, faire valider par le trésorier | O1 |
| 1 | `reprise-sans-doublon` | Reprendre après une coupure sans payer deux fois | O1 |
| 1 | `scenarios-cooperative` | 30 scénarios, dont les actions interdites | O1 |
| 1 | `couts-agent-cooperative` | Ce que l'agent coûte et rapporte à la coopérative | O1 |
| 2 | `inventaire-systemes` | L'inventaire des systèmes : ERP, suivi des conteneurs, douane | O2 |
| 2 | `concevoir-outils-metier` | Concevoir des outils au niveau du métier, pas de l'API | O2 |
| 2 | `serveur-mcp-production` | Un serveur MCP de production : transport, erreurs, journal | O2 |
| 2 | `auth-mcp` | Authentifier l'utilisateur et appliquer ses droits | O2 |
| 2 | `beaucoup-outils` | Quand il y a 80 outils : découverte à la demande | O2 |
| 2 | `tester-mcp-contrat` | Tester le serveur comme un contrat | O2 |
| 2 | `faire-evoluer-mcp` | Faire évoluer le serveur sans casser les clients | O2 |
| 3 | `dossier-credit` | Ce que contient un dossier de crédit, et ce que le comité attend | O3 |
| 3 | `etat-dossier` | L'état de chaque dossier, hors du contexte du modèle | O3 |
| 3 | `controles-pieces` | Contrôler les pièces : cohérence, dates, montants | O3 |
| 3 | `sessions-multiples` | Travailler sur plusieurs sessions : notes de progression | O3 |
| 3 | `prouver-dossier-fini` | Prouver qu'un dossier est réellement instruit | O3 |
| 3 | `escalade-analyste` | Passer la main à l'analyste, avec un résumé utile | O3 |
| 3 | `debit-dossiers` | Mesurer le débit, les erreurs et le coût par dossier | O3 |
| 4 | `api-scraping-agent` | API, scraping ou agent navigateur : choisir | O4 |
| 4 | `legalite-collecte` | Ce qu'on a le droit de collecter : conditions, robots, données | O4 |
| 4 | `boucle-navigateur` | La boucle de l'agent navigateur : voir, agir, vérifier | O4 |
| 4 | `pages-changeantes` | Résister aux pages qui changent | O4 |
| 4 | `extraire-appel-offres` | Extraire un appel d'offres en données structurées | O4 |
| 4 | `prequalifier` | Préqualifier : est-ce pour notre client ? | O4 |
| 4 | `cout-navigation` | Le coût d'une page visitée, et comment le réduire | O4 |
| 5 | `besoin-analyste` | Ce que demandent vraiment les utilisateurs d'un analyste | O5 |
| 5 | `bac-a-sable-code` | Un bac à sable : réseau coupé, mémoire limitée, durée bornée | O5 |
| 5 | `fichiers-sales` | Lire des fichiers Excel réels : fusions, en-têtes, unités | O5 |
| 5 | `verifier-calculs` | Vérifier les calculs avant de les annoncer | O5 |
| 5 | `graphiques-justes` | Produire des graphiques justes et lisibles | O5 |
| 5 | `donnees-confidentielles` | Les données du client ne sortent pas | O5 |
| 5 | `evaluer-analyste` | Évaluer sur 50 questions avec réponses de référence | O5 |

## Comparatif des projets

| Projet | Le problème | L'approche | Le point dur | Coût d'exploitation |
| --- | --- | --- | --- | --- |
| Back-office coopérative | Des opérations manuelles et des erreurs de paiement | Outils, workflow pour le répétitif, validation humaine | Paiements sans doublon | Faible |
| Serveur MCP transitaire | Dix systèmes sans interface commune | Outils métier exposés par MCP, droits par utilisateur | Sécurité, évolution | Faible, maintenance continue |
| Dossiers de crédit | Un travail long, découpé en sessions | Harness : état durable, contrôles, preuve | Reprise, exactitude | Moyen |
| Veille sur portails | Pas d'API, des pages qui changent | Agent navigateur borné, extraction structurée | Robustesse, légalité | Moyen à élevé par page |
| Analyste en bac à sable | Des questions sur des fichiers réels | Agent qui écrit et exécute du code isolé | Calculs justes, isolement | Moyen |

## Les projets

### 1. Le back-office d'une coopérative

- **Le client** : une coopérative de 1 800 producteurs de cacao dans la région de Soubré, qui collecte dans 40 villages et paie par mobile money.
- **Le problème** : une demi-journée pour répondre à « combien avons-nous collecté à Gnamangui cette semaine ? », des tournées organisées au téléphone, des oublis et des doublons de paiement qui coûtent la confiance des producteurs.
- **Pourquoi ce cas est différent** : l'agent touche à l'argent. Il peut préparer, jamais exécuter seul, et doit survivre aux coupures de réseau et d'électricité.
- **L'approche de l'expert** : cartographier les processus et les droits avant de coder, mettre le répétitif en workflow planifié, donner à l'agent des outils en lecture seule plus un outil « préparer un lot » validé par le trésorier, des clés d'idempotence et des points de contrôle sur chaque écriture.
- **Alternatives écartées** : un agent autonome qui paie (risque inacceptable) ; un tableau de bord figé (ne répond pas aux questions du jour).
- **Ce qui se vend** : un abonnement mensuel à la coopérative, ou un service porté par l'exportateur qui y gagne en traçabilité. Le retour se mesure en heures de gestion et en erreurs de paiement évitées.
- **Contraintes réelles** : connexion 3G instable, un seul ordinateur au bureau, traçabilité exigée par les règles européennes sur la déforestation pour l'export, API mobile money avec validation obligatoire.
- **L'imprévu** : la connexion tombe au milieu de la préparation du lot de fin de mois, puis l'électricité.
- **C'est réussi quand** :
  - Les 40 questions de test reçoivent le bon chiffre.
  - Zéro paiement en double ou sans validation, sur les tests d'interruption.
  - Les scénarios d'actions interdites sont tous refusés.
  - Le coût mensuel de l'agent est mesuré et comparé au temps gagné.
- **À revoir** : `3.6/faut-il-agent`, `3.6/choisir-workflow`, `3.4/texte-vers-sql`, `3.6/humain-boucle`, `3.6/points-controle`, `4.5/idempotence`, `3.6/scenarios`, `6.1/paiement-mobile`
- **Pour ton portfolio** : la matrice des droits, une démo de reprise après coupure, le rapport sur 30 scénarios.

### 2. Les outils d'un transitaire, branchés par MCP

- **Le client** : un transitaire du port de Lomé, 90 salariés, qui jongle entre un ERP, un outil de suivi des conteneurs, le portail des douanes et des tableurs.
- **Le problème** : chaque question d'un client (« où est mon conteneur, quels frais restent dus ? ») oblige un agent à ouvrir quatre systèmes. L'entreprise veut que ses assistants IA, quels qu'ils soient, accèdent à ces systèmes de la même façon.
- **Pourquoi ce cas est différent** : le livrable n'est pas un agent, c'est l'interface que tous les agents utiliseront. Elle doit être sûre, documentée et durable.
- **L'approche de l'expert** : des outils pensés au niveau du métier (« situation d'un dossier ») plutôt qu'un outil par appel d'API, un serveur MCP avec authentification et droits par utilisateur, des erreurs exploitables par le modèle, un journal de chaque appel, des tests de contrat, et la découverte d'outils à la demande quand leur nombre grandit.
- **Alternatives écartées** : brancher chaque agent directement sur chaque API (dix intégrations à maintenir par agent) ; tout exposer en lecture et écriture (surface d'attaque énorme).
- **Ce qui se vend** : un projet d'intégration, puis un contrat de maintenance. Le serveur devient un actif réutilisable par tous les futurs assistants de l'entreprise.
- **Contraintes réelles** : le portail des douanes n'a pas d'API documentée, l'ERP est hébergé chez un prestataire, la direction exige de savoir qui a consulté quoi.
- **L'imprévu** : la spécification MCP publie une nouvelle version, et l'ERP change un champ de son API ; les clients existants ne doivent pas casser.
- **C'est réussi quand** :
  - Chaque outil passe ses tests de contrat, erreurs comprises.
  - Un utilisateur ne voit que les dossiers de ses clients.
  - Chaque appel est journalisé avec l'utilisateur et le résultat.
  - Deux clients MCP différents utilisent le serveur sans modification.
- **À revoir** : `3.6/concevoir-outil`, `3.6/serveur-mcp`, `3.6/transports-mcp`, `3.6/versions-mcp`, `3.6/decouverte-outils`, `5.1/securite-mcp`, `4.2/jetons`, `4.7/logs-structures`
- **Pour ton portfolio** : la documentation des outils, les tests de contrat, la démo avec deux clients différents.

### 3. Instruire 200 dossiers de crédit

- **Le client** : une institution de microfinance de Bamako qui reçoit 200 demandes de crédit par semaine, chacune avec une dizaine de pièces (pièce d'identité, relevés mobile money, factures, photos du commerce).
- **Le problème** : les analystes passent leur temps à vérifier la complétude et la cohérence des pièces, pas à juger le risque. Le comité de crédit attend chaque semaine une synthèse par dossier.
- **Pourquoi ce cas est différent** : la tâche est longue et dépasse une session. L'agent doit savoir où il en est, ne jamais déclarer fini un dossier incomplet, et laisser la décision de crédit aux humains.
- **L'approche de l'expert** : un état par dossier stocké hors du modèle, des contrôles écrits en code (dates, montants, cohérence entre pièces), des notes de progression pour reprendre d'une session à l'autre, une vérification finale qui prouve que chaque contrôle a été fait, et une escalade avec résumé quand un doute subsiste.
- **Alternatives écartées** : un seul long appel par dossier (contexte saturé, aucune reprise) ; un modèle qui décide du crédit (décision qui revient au comité, et risque de discrimination).
- **Ce qui se vend** : un prix par dossier instruit, ou un abonnement selon le volume. La valeur : plus de dossiers traités par analyste, des délais de réponse plus courts pour les clients.
- **Contraintes réelles** : réglementation bancaire de la zone UEMOA, données personnelles sensibles, documents photographiés de qualité variable, analystes à former à l'outil.
- **L'imprévu** : une session s'interrompt au dossier 137 ; une autre reprend le lendemain avec un modèle différent.
- **C'est réussi quand** :
  - Aucun dossier marqué « instruit » avec une pièce manquante, sur le jeu de test.
  - La reprise après interruption ne refait ni ne perd aucun dossier.
  - Les analystes jugent les synthèses utiles sur un échantillon noté.
  - Le coût et le délai par dossier sont mesurés.
- **À revoir** : `3.6/harness`, `3.6/etat-durable`, `3.6/taches-longues`, `3.6/verifier-resultat-agent`, `3.2/extraire-documents`, `5.2/supervision-humaine`, `5.3/donnees-sensibles`, `3.6/cout-agent`
- **Pour ton portfolio** : la démo d'une reprise à mi-parcours, le tableau des contrôles par dossier, le coût par dossier.

### 4. Une veille des appels d'offres sur des portails sans API

- **Le client** : un cabinet qui aide des entreprises du BTP à répondre aux appels d'offres publics dans cinq pays, publiés sur 30 portails et journaux en ligne, sans API.
- **Le problème** : deux personnes passent leurs matinées à parcourir les portails ; des appels d'offres pertinents sont découverts trop tard.
- **Pourquoi ce cas est différent** : il n'y a pas d'outil propre à appeler. L'agent doit lire des pages qui changent de structure, et la collecte doit rester légale.
- **L'approche de l'expert** : choisir portail par portail entre API, scraping classique et agent navigateur, vérifier les conditions d'utilisation, limiter l'agent à la lecture, extraire chaque appel d'offres en données structurées, préqualifier selon le profil du client, et réduire le coût par page.
- **Alternatives écartées** : un agent navigateur partout (lent et cher là où un simple scraping suffit) ; du scraping partout (casse à chaque changement de page).
- **Ce qui se vend** : un abonnement mensuel par entreprise cliente, avec alertes quotidiennes. Un seul marché remporté grâce à l'alerte rembourse des années d'abonnement.
- **Contraintes réelles** : portails lents, captchas sur certains sites (qu'on ne contourne pas : on les exclut ou on demande un accès), documents d'appels d'offres en PDF scannés.
- **L'imprévu** : le principal portail change complètement de mise en page un lundi matin.
- **C'est réussi quand** :
  - Le taux de détection est mesuré sur un mois d'appels d'offres connus.
  - Un changement de page est détecté et signalé, pas transformé en données fausses.
  - Aucun site interdit par ses conditions n'est collecté.
  - Le coût par appel d'offres détecté est mesuré.
- **À revoir** : `3.6/agents-navigateur`, `0.5/scraping`, `0.5/robots-txt`, `3.2/extraire-documents`, `3.6/erreurs-outils`, `5.3/licences-donnees`, `4.5/planifier`
- **Pour ton portfolio** : le tableau de décision par portail, la mesure de détection, la démo de l'alerte quotidienne.

### 5. Un analyste de données en bac à sable

- **Le client** : une ONG humanitaire dont les chargés de programme reçoivent chaque mois des fichiers Excel de terrain et doivent répondre aux bailleurs.
- **Le problème** : « Combien de ménages ont reçu un kit dans la région de Diffa, par mois, et quelle part de femmes cheffes de ménage ? » demande une journée de manipulation de fichiers.
- **Pourquoi ce cas est différent** : l'agent écrit et exécute du code. Il faut l'isoler complètement, et vérifier ses calculs avant d'annoncer un chiffre à un bailleur.
- **L'approche de l'expert** : un bac à sable sans réseau, avec mémoire et durée bornées, un agent qui inspecte les fichiers avant de calculer, des vérifications croisées des totaux, des graphiques produits par du code, et une évaluation sur 50 questions dont les réponses sont connues.
- **Alternatives écartées** : laisser le modèle calculer de tête (chiffres inventés) ; exécuter le code sur le poste de l'utilisateur (risque pour ses données et sa machine).
- **Ce qui se vend** : une licence par équipe, ou un service intégré à l'outil de suivi de l'ONG. Le gain : des rapports aux bailleurs en heures au lieu de jours.
- **Contraintes réelles** : fichiers avec cellules fusionnées, colonnes renommées d'un mois à l'autre, données de bénéficiaires vulnérables à protéger.
- **L'imprévu** : le fichier du mois change de structure (deux colonnes fusionnées, une unité différente).
- **C'est réussi quand** :
  - Au moins 90 % des 50 questions reçoivent le bon chiffre.
  - Le code ne peut ni accéder au réseau ni sortir du bac à sable, prouvé par des tests.
  - Un changement de structure est signalé avant le calcul.
  - Chaque chiffre est accompagné du code qui l'a produit.
- **À revoir** : `3.6/agent-code`, `3.6/bac-a-sable-agent`, `5.1/bac-a-sable`, `1.2/valider-tableau`, `1.2/incoherences`, `1.8/graphique-message`, `5.3/pseudonymiser`
- **Pour ton portfolio** : la démo d'une question complète, les tests d'isolement, le taux d'exactitude.

## Fil rouge et ancrage local

- **Situation** : cinq organisations réelles (coopérative, transitaire, microfinance, cabinet d'appels d'offres, ONG) qui veulent qu'un agent agisse pour elles, sans perdre le contrôle.

## Circuit

- [ ] 1. Fiche validée par le mainteneur
- [ ] 2. Données fictives réalistes et solution de référence
- [ ] 3. Énoncés des étapes
- [ ] 4. Tests et grilles
- [ ] 5. Relecture élève
- [ ] 6. Relecture expert
