---
id: "7.8"
titre: "Données et prédiction"
parcours: "07-projets"
nature: projets
promesse: "Quatre projets de machine learning et de vision qui pèsent sur des décisions réelles : prévoir la demande, accorder un crédit, arrêter une fraude, trier une récolte. Là où un bon modèle se juge en argent gagné ou perdu."
question_saut: "Tu as déjà mis en production un modèle de prédiction suivi dans le temps ?"
qcm: false
prerequis: ["1.5", "1.6", "1.7", "2.3", "4.7"]
statut: brouillon
version: 1
mise_a_jour: 2026-11-25
---

# 7.8 — Données et prédiction

## Extrait du programme

- **Exercice clé** : Livrer de bout en bout au moins un projet de la famille, avec son effet chiffré sur la décision métier

## Objectifs vérifiables

| Id | À la fin, l'apprenant sait… | Évalué par |
| --- | --- | --- |
| O1 | Prévoir une demande par produit et par point de vente, et en tirer des commandes. | projet 1 |
| O2 | Construire un score de crédit juste, expliqué et conforme. | projet 2 |
| O3 | Détecter la fraude en temps réel en arbitrant entre pertes et clients bloqués. | projet 3 |
| O4 | Trier une récolte par la vision sur une chaîne réelle. | projet 4 |

## Chapitres

| Chapitre | Titre | Exercices |
| --- | --- | --- |
| 1 | Prévoir la demande d'une chaîne de pharmacies | 0 |
| 2 | Le score de crédit d'une microfinance | 0 |
| 3 | Arrêter la fraude au mobile money | 0 |
| 4 | Trier les fèves de cacao par la vision | 0 |

## Notions, dans l'ordre

| Chapitre | Id de la notion | Notion | Objectif |
| --- | --- | --- | --- |
| 1 | `cout-rupture-surstock` | Ce que coûtent une rupture et un surstock | O1 |
| 1 | `historique-ventes` | Nettoyer l'historique : ruptures, promotions, jours fériés | O1 |
| 1 | `reference-saisonniere` | La référence naïve saisonnière | O1 |
| 1 | `features-calendrier` | Le calendrier qui compte : Ramadan, Tabaski, rentrée, paludisme | O1 |
| 1 | `modele-global` | Un modèle pour 3 000 produits et 40 pharmacies | O1 |
| 1 | `valider-dans-le-temps` | Valider dans le temps, sans regarder le futur | O1 |
| 1 | `prevision-vers-commande` | De la prévision à la commande : stock de sécurité | O1 |
| 1 | `suivre-prevision` | Suivre l'erreur de prévision chaque semaine | O1 |
| 2 | `politique-credit` | La politique de crédit et ce que coûte un défaut | O2 |
| 2 | `donnees-alternatives` | Les données mobile money : utiles, et sensibles | O2 |
| 2 | `cible-defaut` | Définir le défaut, et éviter la fuite temporelle | O2 |
| 2 | `modele-interpretable` | Un modèle interprétable face au gradient boosting | O2 |
| 2 | `calibrer-score` | Un score calibré, transformé en grille | O2 |
| 2 | `equite-credit` | Mesurer l'équité entre femmes et hommes, villes et villages | O2 |
| 2 | `expliquer-refus` | Expliquer un refus au client | O2 |
| 2 | `refus-inconnus` | Les refusés dont on ne connaît pas l'issue | O2 |
| 3 | `schemas-fraude` | Les schémas de fraude : SIM swap, faux agents, comptes mules | O3 |
| 3 | `etiquettes-tardives` | Des étiquettes rares et tardives | O3 |
| 3 | `features-temps-reel` | Des features calculées en temps réel | O3 |
| 3 | `modele-desequilibre` | Un modèle pour une classe à 0,1 % | O3 |
| 3 | `seuil-pertes-clients` | Le seuil : pertes évitées contre clients bloqués | O3 |
| 3 | `latence-decision` | Décider en moins de 100 millisecondes | O3 |
| 3 | `fraudeurs-adaptent` | Les fraudeurs s'adaptent : dérive et réentraînement | O3 |
| 4 | `chaine-tri` | La chaîne de tri : caméra, lumière, cadence | O4 |
| 4 | `annoter-feves` | Annoter les défauts avec les agréeurs | O4 |
| 4 | `detecter-feves` | Détecter et classer chaque fève | O4 |
| 4 | `conditions-lumiere` | Tenir face à la poussière et à la lumière qui change | O4 |
| 4 | `vitesse-cpu` | Tenir la cadence sur un mini-PC | O4 |
| 4 | `accord-agreeur` | L'accord avec l'agréeur humain | O4 |
| 4 | `prix-qualite` | Du tri au prix payé au producteur | O4 |

## Comparatif des projets

| Projet | Le problème | L'approche | Le point dur | Coût d'exploitation |
| --- | --- | --- | --- | --- |
| Demande des pharmacies | Ruptures et surstocks | Séries temporelles, modèle global, stock de sécurité | Événements, ruptures passées | Très faible |
| Crédit microfinance | Prêter sans connaître le client | Score calibré, interprétable, équitable | Fuite, équité, refusés | Très faible |
| Fraude mobile money | Des pertes et des clients bloqués | Classe rare, temps réel, seuil économique | Latence, adaptation des fraudeurs | Faible, infrastructure temps réel |
| Tri du cacao | Un tri manuel lent et contesté | Détection d'objets sur une chaîne | Lumière, cadence, accord humain | Matériel une fois |

## Les projets

### 1. Prévoir la demande d'une chaîne de pharmacies

- **Le client** : une chaîne de 40 pharmacies au Sénégal, 3 000 références, réapprovisionnées deux fois par semaine.
- **Le problème** : des ruptures sur les antipaludiques en saison des pluies, des surstocks de produits qui périment. Les commandes se font « au feeling ».
- **Pourquoi ce cas est différent** : la valeur n'est pas la précision de la prévision, mais la qualité des commandes qui en découlent. Les ventes passées sont faussées par les ruptures, et le calendrier local pèse lourd.
- **L'approche de l'expert** : chiffrer le coût d'une rupture et d'un surstock, nettoyer l'historique (une rupture n'est pas une demande nulle), battre une référence saisonnière, ajouter les événements du calendrier, un modèle global pour toutes les séries, une validation dans le temps, un stock de sécurité qui transforme la prévision en commande, et un suivi hebdomadaire.
- **Alternatives écartées** : un modèle ARIMA par produit et par pharmacie (120 000 modèles à maintenir) ; un LLM qui « prévoit » (pas fait pour ça).
- **Ce qui se vend** : un outil de commande vendu par pharmacie, au mois. Le retour se mesure en ruptures évitées et en périmés réduits.
- **Contraintes réelles** : historique de deux ans seulement, nouveaux produits sans passé, épidémies imprévisibles.
- **L'imprévu** : une épidémie de dengue fait exploser la demande de paracétamol en trois semaines.
- **C'est réussi quand** :
  - Le modèle bat la référence saisonnière en validation dans le temps.
  - Une simulation sur l'historique montre moins de ruptures et moins de surstock.
  - L'erreur de prévision est suivie et une alerte signale les écarts anormaux.
- **À revoir** : `1.7/series-temporelles`, `1.7/baseline-temps`, `1.7/features-temps`, `1.7/validation-temps`, `1.4/fuite-temporelle`, `1.6/cout-erreurs`, `4.7/performance-tardive`, `1.2/periodes-manquantes`
- **Pour ton portfolio** : la simulation de commandes sur l'historique, le tableau ruptures et surstocks avant et après.

### 2. Le score de crédit d'une microfinance

- **Le client** : une institution de microfinance de Lomé qui prête à des commerçantes et à de petits artisans, souvent sans historique bancaire.
- **Le problème** : les agents de crédit décident à l'intuition ; le taux de défaut monte et les délais de réponse découragent les bons clients.
- **Pourquoi ce cas est différent** : chaque décision touche une personne. Le modèle doit être juste, explicable, conforme aux règles bancaires, et on ignore ce qui serait arrivé aux clients refusés.
- **L'approche de l'expert** : partir de la politique de crédit et du coût d'un défaut, utiliser des données mobile money avec consentement, définir le défaut sans fuite temporelle, comparer un modèle interprétable au gradient boosting, calibrer et transformer en grille de score, mesurer l'équité entre groupes, expliquer chaque refus, et traiter le biais des refusés.
- **Alternatives écartées** : un modèle boîte noire non expliqué (inacceptable pour le régulateur et les clients) ; garder l'intuition seule (taux de défaut actuel).
- **Ce qui se vend** : un outil de décision intégré au logiciel de l'institution, avec un audit annuel du modèle. Le retour : moins de défauts et des réponses en quelques minutes.
- **Contraintes réelles** : règles de la banque centrale (BCEAO), loi sur les données personnelles, données de revenus informelles, agents de crédit à convaincre.
- **L'imprévu** : l'audit révèle un écart d'acceptation entre zones urbaines et rurales.
- **C'est réussi quand** :
  - Le score est calibré et bat la décision actuelle sur l'historique, à coût de défaut chiffré.
  - Les écarts entre groupes sont mesurés, expliqués et traités.
  - Chaque refus est accompagné de raisons compréhensibles par le client.
- **À revoir** : `1.4/fuite-temporelle`, `1.6/calibration`, `1.6/seuil-decision`, `1.7/shap`, `5.2/ecart-groupes`, `5.2/definitions-equite`, `5.2/expliquer-personnes`, `5.3/haut-risque`
- **Pour ton portfolio** : la grille de score, le rapport d'équité, des exemples d'explications de refus.

### 3. Arrêter la fraude au mobile money

- **Le client** : un opérateur de mobile money en Afrique centrale, 3 millions de transactions par jour.
- **Le problème** : les fraudes (SIM swap, faux agents, comptes mules) coûtent cher et détruisent la confiance ; mais bloquer un client honnête qui envoie de l'argent à sa famille coûte aussi.
- **Pourquoi ce cas est différent** : la fraude est très rare, ses étiquettes arrivent des semaines plus tard, la décision doit tomber en moins de 100 millisecondes, et les fraudeurs changent de méthode dès qu'on les bloque.
- **L'approche de l'expert** : comprendre les schémas de fraude avec l'équipe sécurité, gérer des étiquettes rares et tardives, calculer les features en temps réel, entraîner un modèle pour une classe à 0,1 %, choisir le seuil en comparant pertes évitées et clients bloqués, tenir la latence, et surveiller la dérive.
- **Alternatives écartées** : des règles seules (contournées en quelques semaines) ; optimiser l'accuracy (99,9 % en ne détectant rien).
- **Ce qui se vend** : un moteur de décision facturé à l'opérateur, souvent avec une part des pertes évitées. Le calcul est direct en F CFA.
- **Contraintes réelles** : infrastructure temps réel, données financières très sensibles, équipe de fraude qui doit comprendre chaque blocage.
- **L'imprévu** : un nouveau schéma de fraude apparaît, que le modèle ne connaît pas.
- **C'est réussi quand** :
  - Le seuil est choisi sur une courbe pertes évitées contre clients bloqués, chiffrée.
  - La décision tient sous 100 millisecondes, mesurée.
  - La dérive est détectée et déclenche un réentraînement.
- **À revoir** : `1.6/desequilibre`, `1.6/courbe-pr`, `1.6/cout-erreurs`, `1.5/anomalies`, `1.5/gradient-boosting`, `4.7/derive-donnees`, `4.7/reagir-derive`, `4.5/streaming-kafka`
- **Pour ton portfolio** : la courbe pertes contre clients bloqués, la mesure de latence, la détection d'une dérive simulée.

### 4. Trier les fèves de cacao par la vision

- **Le client** : un exportateur de cacao de San-Pédro qui contrôle la qualité des lots achetés aux coopératives (fèves moisies, ardoisées, germées, mitées).
- **Le problème** : l'« épreuve à la coupe » se fait à la main sur 300 fèves par lot ; elle est lente, et son résultat, qui fixe le prix, est souvent contesté par les producteurs.
- **Pourquoi ce cas est différent** : la vision tourne sur une vraie chaîne, avec poussière, lumière variable et cadence imposée, et son résultat touche le revenu des producteurs : il doit être aussi fiable et transparent qu'un agréeur humain.
- **L'approche de l'expert** : concevoir le poste (caméra, éclairage, cadence), annoter les défauts avec les agréeurs, un détecteur qui classe chaque fève, de l'augmentation pour la lumière et la poussière, un modèle qui tient la cadence sur un mini-PC, la mesure de l'accord avec l'agréeur, et un rapport par lot compréhensible par le producteur.
- **Alternatives écartées** : un classifieur d'image par lot (n'explique pas le résultat fève par fève) ; un grand modèle de vision par API (cadence, coût, pas de réseau fiable à l'entrepôt).
- **Ce qui se vend** : un poste de contrôle vendu ou loué aux exportateurs et aux coopératives, avec la maintenance. La valeur : un contrôle plus rapide et un prix moins contesté.
- **Contraintes réelles** : normes de qualité du cacao, entrepôts chauds et poussiéreux, électricité instable, confiance des producteurs.
- **L'imprévu** : un lot arrive avec une variété de fève plus claire, jamais vue à l'entraînement.
- **C'est réussi quand** :
  - L'accord avec l'agréeur humain est mesuré, défaut par défaut.
  - La cadence de la chaîne est tenue sur le mini-PC.
  - Chaque lot a un rapport avec l'image de chaque fève défectueuse.
- **À revoir** : `2.3/detection-objets`, `2.3/yolo`, `2.3/metriques-detection`, `2.3/annoter-detection`, `2.3/augmentation-images`, `2.5/onnxruntime`, `1.3/accord-annotateurs`, `2.3/biais-images`
- **Pour ton portfolio** : la vidéo du poste en marche, l'accord avec l'agréeur, un rapport de lot.

## Fil rouge et ancrage local

- **Situation** : quatre décisions à fort enjeu (commander, prêter, bloquer, payer un lot) où un modèle se juge en argent gagné ou perdu, et en confiance des personnes touchées.

## Circuit

- [ ] 1. Fiche validée par le mainteneur
- [ ] 2. Données fictives réalistes et solution de référence
- [ ] 3. Énoncés des étapes
- [ ] 4. Tests et grilles
- [ ] 5. Relecture élève
- [ ] 6. Relecture expert
