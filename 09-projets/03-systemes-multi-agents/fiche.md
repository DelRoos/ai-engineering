---
id: "9.3"
titre: "Systèmes multi-agents"
parcours: "09-projets"
nature: projets
promesse: "Quatre systèmes où plusieurs agents coopèrent : une équipe de recherche, un support à plusieurs spécialistes, une centrale d'achat qui négocie, et une rédaction d'appels d'offres. Chaque fois, prouver que plusieurs agents font mieux qu'un seul, à coût mesuré."
question_saut: "Tu as déjà comparé, mesures à l'appui, un système multi-agents à un agent seul ?"
qcm: false
prerequis: ["3.5", "3.6", "4.7", "4.8"]
statut: brouillon
version: 1
mise_a_jour: 2026-11-25
---

# 9.3 — Systèmes multi-agents

## Extrait du programme

- **Exercice clé** : Livrer de bout en bout au moins un projet de la famille, avec la comparaison chiffrée face à un agent seul

## Objectifs vérifiables

| Id | À la fin, l'apprenant sait… | Évalué par |
| --- | --- | --- |
| O1 | Livrer une équipe d'agents de recherche qui produit des notes sourcées et vérifiées. | projet 1 |
| O2 | Organiser un support client où des agents spécialisés se passent le relais sans perdre le contexte. | projet 2 |
| O3 | Faire négocier un agent acheteur avec plusieurs fournisseurs, dans des limites strictes. | projet 3 |
| O4 | Décider entre un agent seul et plusieurs agents par une expérience contrôlée. | projet 4 |

## Chapitres

| Chapitre | Titre | Exercices |
| --- | --- | --- |
| 1 | Une équipe de recherche pour un cabinet de conseil | 0 |
| 2 | Le support d'un opérateur, à plusieurs spécialistes | 0 |
| 3 | Une centrale d'achat qui consulte et négocie | 0 |
| 4 | Répondre aux appels d'offres : un agent ou plusieurs ? | 0 |

## Notions, dans l'ordre

| Chapitre | Id de la notion | Notion | Objectif |
| --- | --- | --- | --- |
| 1 | `note-de-marche` | Ce qu'est une bonne note de marché, vue par le client | O1 |
| 1 | `planificateur` | Le planificateur : découper la question en pistes | O1 |
| 1 | `chercheurs-paralleles` | Des chercheurs en parallèle, chacun avec son contexte | O1 |
| 1 | `memoire-partagee` | Ce que les agents partagent, et ce qu'ils gardent pour eux | O1 |
| 1 | `verificateur-sources` | Un vérificateur qui contrôle chaque chiffre et chaque source | O1 |
| 1 | `redacteur` | Le rédacteur : une note claire, sourcée, en français | O1 |
| 1 | `cout-equipe` | Le coût d'une note : appels, tokens, durée | O1 |
| 1 | `comparer-agent-seul-recherche` | La même note par un agent seul : comparer | O1 |
| 2 | `motifs-contact` | Les motifs de contact : ce que disent un million de messages | O2 |
| 2 | `agent-accueil` | L'agent d'accueil : comprendre et orienter | O2 |
| 2 | `specialistes` | Des spécialistes : facturation, réseau, mobile money | O2 |
| 2 | `passage-relais` | Passer le relais sans perdre le contexte | O2 |
| 2 | `boucles-relais` | Éviter les boucles et les renvois sans fin | O2 |
| 2 | `vers-humain` | Passer à un humain, au bon moment | O2 |
| 2 | `mesurer-resolution` | Mesurer la résolution au premier contact | O2 |
| 3 | `besoin-achat` | Le besoin d'achat : quantités, délais, qualité, budget | O3 |
| 3 | `agents-fournisseurs` | Un agent par fournisseur, et ce qu'il a le droit de dire | O3 |
| 3 | `protocole-negociation` | Un protocole de négociation : offres, contre-offres, clôture | O3 |
| 3 | `limites-acheteur` | Les limites de l'acheteur, vérifiées par du code | O3 |
| 3 | `comparer-offres` | Comparer des offres qui ne se ressemblent pas | O3 |
| 3 | `fournisseur-simule` | Tester contre des fournisseurs simulés, dont des tricheurs | O3 |
| 3 | `decision-pharmacien` | Laisser la décision au pharmacien | O3 |
| 4 | `anatomie-appel-offres` | L'anatomie d'une réponse à un appel d'offres | O4 |
| 4 | `version-agent-seul` | La version à un seul agent | O4 |
| 4 | `version-equipe` | La version en équipe : technique, financier, conformité | O4 |
| 4 | `protocole-comparaison` | Un protocole de comparaison à budget égal | O4 |
| 4 | `juger-dossiers` | Juger les dossiers : grille et évaluateurs | O4 |
| 4 | `analyser-ecarts` | Analyser où chaque version gagne et perd | O4 |
| 4 | `choisir-architecture` | Choisir, et l'écrire dans un document de décision | O4 |

## Comparatif des projets

| Projet | Le problème | L'approche | Le point dur | Coût d'exploitation |
| --- | --- | --- | --- | --- |
| Équipe de recherche | Une question large, beaucoup de sources | Planificateur, chercheurs en parallèle, vérificateur, rédacteur | Chiffres faux, sources inventées | Élevé par note |
| Support à spécialistes | Des demandes très différentes | Accueil puis spécialistes, relais avec contexte | Boucles, perte de contexte | Moyen, gros volume |
| Centrale d'achat | Plusieurs fournisseurs, des offres différentes | Agents par fournisseur, protocole, limites en code | Limites, fournisseurs tricheurs | Moyen |
| Appels d'offres | Un dossier long et multidisciplinaire | Comparaison agent seul contre équipe | Mesurer la qualité d'un dossier | Élevé par dossier |

## Les projets

### 1. Une équipe de recherche pour un cabinet de conseil

- **Le client** : un cabinet de conseil d'Abidjan qui vend des notes de marché (« le marché des panneaux solaires au Burkina Faso ») à des investisseurs.
- **Le problème** : une note demande trois jours à un consultant junior, et les chiffres doivent être sourcés. Le cabinet veut un premier jet sourcé en une heure, que le consultant vérifie et enrichit.
- **Pourquoi ce cas est différent** : la question est large et se découpe naturellement en pistes indépendantes. C'est le cas où plusieurs agents en parallèle peuvent battre un agent seul, à condition de vérifier chaque chiffre.
- **L'approche de l'expert** : un planificateur qui découpe la question, des chercheurs en parallèle avec leurs propres contextes, une mémoire partagée limitée aux faits sourcés, un vérificateur qui rouvre chaque source, un rédacteur, et une comparaison mesurée avec un agent seul.
- **Alternatives écartées** : un agent seul qui enchaîne toutes les recherches (contexte saturé, plus lent) ; laisser les agents discuter librement entre eux (coût qui explose, conclusions non vérifiées).
- **Ce qui se vend** : le cabinet vend plus de notes avec la même équipe, ou propose des notes express moins chères. Le coût en tokens d'une note doit rester très inférieur à une heure de consultant.
- **Contraintes réelles** : peu de données publiques fiables sur certains marchés, sources en français et en anglais, réputation du cabinet en jeu à chaque chiffre.
- **L'imprévu** : une source clé se contredit d'une année sur l'autre ; le système doit le signaler, pas choisir au hasard.
- **C'est réussi quand** :
  - Chaque chiffre de la note renvoie à une source qui le contient, vérifié automatiquement.
  - Un consultant juge la note utilisable comme premier jet sur un échantillon.
  - L'équipe d'agents bat l'agent seul en qualité, à coût mesuré, ou l'on conclut honnêtement le contraire.
- **À revoir** : `3.6/orchestrateur-executants`, `3.6/parallelisation`, `3.6/multi-agents`, `3.6/roles-agents`, `3.4/verifier-fondement`, `3.5/affirmations`, `3.6/mono-ou-multi-mesure`, `4.8/cout-requete`
- **Pour ton portfolio** : une note produite et ses sources, la trace de l'équipe, la comparaison avec l'agent seul.

### 2. Le support d'un opérateur, à plusieurs spécialistes

- **Le client** : un opérateur de téléphonie mobile au Cameroun, avec 8 millions d'abonnés et un service client saturé sur WhatsApp.
- **Le problème** : les demandes vont de la facturation au réseau en passant par le mobile money. Un seul assistant généraliste répond mal à tout ; les clients sont renvoyés de service en service.
- **Pourquoi ce cas est différent** : le volume est énorme et les domaines très différents, avec des outils et des règles propres à chacun. Le risque est la boucle et la perte du contexte entre spécialistes.
- **L'approche de l'expert** : analyser un échantillon de vrais messages pour définir les motifs, un agent d'accueil qui oriente, des spécialistes avec leurs outils et leurs règles, un relais qui transmet un résumé structuré, une limite au nombre de relais, et un passage à un humain avec tout le dossier.
- **Alternatives écartées** : un seul agent avec tous les outils (confusions entre domaines, prompt ingérable) ; un menu à choix fixes (les clients ne savent pas dans quelle case est leur problème).
- **Ce qui se vend** : un projet facturé à l'opérateur, puis une redevance au volume de conversations. Le retour : moins de conseillers sur les demandes simples, une meilleure satisfaction.
- **Contraintes réelles** : messages en français, en anglais et en pidgin, données d'abonnés sensibles, règles de l'autorité de régulation des télécommunications, pics de trafic lors des pannes.
- **L'imprévu** : une panne réseau régionale multiplie par dix les messages en une heure.
- **C'est réussi quand** :
  - La résolution au premier contact est mesurée et dépasse celle de l'assistant généraliste.
  - Aucun client ne subit plus de deux relais, sur les scénarios de test.
  - Le passage à un humain transmet un résumé jugé suffisant par les conseillers.
- **À revoir** : `3.6/aiguillage`, `3.6/communication-agents`, `3.6/memoire-travail`, `3.6/limiter-boucles`, `3.6/humain-boucle`, `3.9/alternance-codique`, `4.8/mode-degrade`, `3.5/echantillon-production`
- **Pour ton portfolio** : le schéma des relais, les scénarios et leurs résultats, la mesure de résolution.

### 3. Une centrale d'achat qui consulte et négocie

- **Le client** : un groupement de 25 pharmacies à Ouagadougou qui achète auprès de quatre grossistes.
- **Le problème** : chaque pharmacien appelle les grossistes un par un, compare de tête des offres aux conditions différentes (remises, délais, franco de port) et rate des promotions.
- **Pourquoi ce cas est différent** : plusieurs agents représentent des intérêts opposés. L'agent acheteur ne doit jamais dépasser ses limites, même face à un fournisseur habile ou malhonnête.
- **L'approche de l'expert** : un agent acheteur et un agent par fournisseur (branché sur le catalogue ou les messages du grossiste), un protocole de négociation explicite, des limites vérifiées par du code, une comparaison des offres en coût total, des fournisseurs simulés dont certains tentent de tricher, et une décision finale laissée au pharmacien.
- **Alternatives écartées** : un agent unique qui joue tous les rôles (aucune séparation des intérêts) ; une négociation libre sans protocole (impossible à tester et à auditer).
- **Ce qui se vend** : un abonnement du groupement, ou une commission sur les économies réalisées. L'argument : des achats moins chers et moins de ruptures de stock.
- **Contraintes réelles** : réglementation des produits pharmaceutiques, médicaments sous ordonnance exclus, catalogues des grossistes dans des formats différents.
- **L'imprévu** : un grossiste annonce une rupture sur un produit après avoir accepté la commande.
- **C'est réussi quand** :
  - Aucune offre acceptée hors des limites, y compris face aux fournisseurs tricheurs.
  - Le coût total des commandes simulées baisse par rapport à l'achat sans négociation.
  - Chaque proposition finale montre le détail de la comparaison au pharmacien.
- **À revoir** : `3.6/protocoles-agents`, `3.6/roles-agents`, `3.6/garde-fous`, `3.6/validation-actions`, `5.1/injection-indirecte`, `3.6/environnements-agents`, `3.6/humain-boucle`
- **Pour ton portfolio** : une négociation complète rejouable, les tests contre les tricheurs, les économies simulées.

### 4. Répondre aux appels d'offres : un agent ou plusieurs ?

- **Le client** : un bureau d'études en ingénierie de Kinshasa qui répond à 40 appels d'offres par an, chaque dossier mobilisant un technicien, un financier et un juriste.
- **Le problème** : préparer un premier jet de dossier prend deux semaines. La direction veut un outil, mais hésite entre un assistant simple et un système d'agents plus coûteux.
- **Pourquoi ce cas est différent** : la vraie question est une décision d'architecture. Le livrable principal est une expérience contrôlée qui tranche, et un document de décision.
- **L'approche de l'expert** : construire les deux versions sur les mêmes outils et les mêmes données, à budget égal, faire juger les dossiers par une grille et des évaluateurs, analyser où chaque version gagne, puis écrire la décision.
- **Alternatives écartées** : choisir le multi-agents parce que c'est à la mode ; choisir sur trois exemples sans protocole.
- **Ce qui se vend** : un outil qui fait gagner une semaine par dossier, et surtout une décision argumentée que la direction peut défendre.
- **Contraintes réelles** : dossiers longs (100 pages), exigences de conformité strictes, pièces administratives à jour obligatoires.
- **L'imprévu** : un appel d'offres impose un format de réponse inhabituel ; les deux versions doivent s'adapter.
- **C'est réussi quand** :
  - Les deux versions sont comparées sur au moins 10 dossiers, à budget égal.
  - Les évaluateurs jugent avec une grille commune, et leur accord est mesuré.
  - Le document de décision dit ce que la mesure permet d'affirmer, et rien de plus.
- **À revoir** : `3.6/mono-ou-multi-mesure`, `3.5/budget-fixe`, `3.5/significativite`, `3.5/accord-evaluateurs`, `3.5/ablation`, `4.1/adr`
- **Pour ton portfolio** : le protocole, les résultats et le document de décision.

## Fil rouge et ancrage local

- **Situation** : quatre organisations (cabinet de conseil, opérateur mobile, groupement de pharmacies, bureau d'études) où plusieurs agents doivent coopérer, et où il faut prouver que cela vaut le coût.

## Circuit

- [ ] 1. Fiche validée par le mainteneur
- [ ] 2. Données fictives réalistes et solution de référence
- [ ] 3. Énoncés des étapes
- [ ] 4. Tests et grilles
- [ ] 5. Relecture élève
- [ ] 6. Relecture expert
