---
id: "7.1"
titre: "Assistants documentaires"
parcours: "07-projets"
nature: projets
promesse: "Six assistants qui répondent à partir de documents, chacun face à un problème différent : citer la loi, lire des scans, respecter les droits d'accès, répondre aux questions globales, interroger des chiffres, fonctionner sans connexion."
question_saut: "Tu as déjà mis en production un RAG mesuré et maintenu ?"
qcm: false
prerequis: ["3.3", "3.4", "3.5", "4.2", "4.5"]
statut: brouillon
version: 1
mise_a_jour: 2026-11-25
---

# 7.1 — Assistants documentaires

## Extrait du programme

- **Exercice clé** : Livrer de bout en bout au moins un projet de la famille, mesuré, déployé et présenté dans ton portfolio

## Objectifs vérifiables

| Id | À la fin, l'apprenant sait… | Évalué par |
| --- | --- | --- |
| O1 | Livrer un assistant juridique qui cite l'article exact et ne cite jamais un texte abrogé. | projet 1 |
| O2 | Rendre interrogeables des documents scannés et des tableaux, avec une qualité d'extraction mesurée. | projet 2 |
| O3 | Construire une base de connaissances d'entreprise qui respecte les droits d'accès de chaque document. | projet 3 |
| O4 | Répondre à des questions globales sur un grand corpus avec un graphe, et prouver son apport. | projet 4 |
| O5 | Faire interroger une base de données en langage naturel, avec des réponses chiffrées exactes. | projet 5 |
| O6 | Déployer un assistant multilingue qui fonctionne entièrement sans connexion. | projet 6 |

## Chapitres

| Chapitre | Titre | Exercices |
| --- | --- | --- |
| 1 | Un assistant juridique qui cite l'article | 0 |
| 2 | Des archives scannées et des tableaux | 0 |
| 3 | La base de connaissances d'une entreprise | 0 |
| 4 | Des questions globales sur 500 rapports | 0 |
| 5 | Interroger des chiffres en langage naturel | 0 |
| 6 | Un assistant de santé hors ligne et multilingue | 0 |

## Notions, dans l'ordre

| Chapitre | Id de la notion | Notion | Objectif |
| --- | --- | --- | --- |
| 1 | `lire-questions-reelles` | Lire 100 vraies questions avant d'écrire du code | O1 |
| 1 | `version-naive-juridique` | Une première version naïve, et sa mesure | O1 |
| 1 | `decouper-par-article` | Découper par article et garder les renvois entre articles | O1 |
| 1 | `recherche-juridique` | La recherche hybride sur le vocabulaire juridique | O1 |
| 1 | `citer-article` | Citer l'article exact, vérifié par du code | O1 |
| 1 | `textes-abroges` | Ne plus jamais citer un texte abrogé | O1 |
| 1 | `evaluer-juriste` | Évaluer avec un juriste : protocole et accord | O1 |
| 1 | `echelle-juridique` | Passer à 50 000 questions par mois | O1 |
| 2 | `inventaire-documents` | Faire l'inventaire : qualité des scans, formats, volumes | O2 |
| 2 | `ocr-mise-en-page` | OCR et mise en page : colonnes, titres, tampons | O2 |
| 2 | `tableaux-garanties` | Extraire les tableaux de garanties ligne par ligne | O2 |
| 2 | `recherche-image-page` | Chercher par l'image de la page quand le texte échoue | O2 |
| 2 | `contrats-avenants` | Relier un contrat à ses avenants : la bonne version des faits | O2 |
| 2 | `mesurer-extraction-pages` | Mesurer la qualité d'extraction page par page | O2 |
| 2 | `cout-ingestion` | Le coût d'ingestion de 200 000 pages | O2 |
| 3 | `cartographier-sources` | Cartographier les sources et leurs propriétaires | O3 |
| 3 | `connecteurs-sync` | Des connecteurs qui synchronisent sans tout relire | O3 |
| 3 | `heriter-droits` | Hériter des droits de chaque document | O3 |
| 3 | `filtrer-avant-chercher` | Filtrer avant de chercher, jamais après | O3 |
| 3 | `documents-contradictoires` | Repérer les documents périmés et contradictoires | O3 |
| 3 | `journal-acces` | Journaliser qui a vu quoi | O3 |
| 3 | `mesurer-adoption` | Mesurer l'adoption et les questions sans réponse | O3 |
| 4 | `reconnaitre-question-globale` | Reconnaître une question globale, et pourquoi le RAG simple échoue | O4 |
| 4 | `schema-entites` | Définir le schéma : projets, lieux, partenaires, problèmes | O4 |
| 4 | `extraire-relations` | Extraire entités et relations, et contrôler leur qualité | O4 |
| 4 | `communautes-resumes` | Construire les communautés et leurs résumés | O4 |
| 4 | `router-local-global` | Router entre recherche locale et recherche globale | O4 |
| 4 | `cout-graphe` | Chiffrer l'indexation et la mise à jour du graphe | O4 |
| 4 | `prouver-apport-graphe` | Prouver l'apport face au RAG simple | O4 |
| 5 | `modele-semantique` | Écrire le modèle sémantique : tables, définitions, pièges | O5 |
| 5 | `questions-reference-sql` | Constituer 150 questions avec leur requête de référence | O5 |
| 5 | `generer-valider-sql` | Générer, valider, puis exécuter en lecture seule | O5 |
| 5 | `ambiguites-metier` | Lever les ambiguïtés métier : « vente », « client », « ce mois » | O5 |
| 5 | `repondre-chiffre` | Répondre avec le chiffre, la requête et un graphique | O5 |
| 5 | `evaluer-par-execution` | Évaluer par exécution, pas par comparaison de texte | O5 |
| 5 | `donnees-par-role` | Limiter les données visibles par chaque rôle | O5 |
| 6 | `contraintes-terrain` | Les contraintes du terrain : énergie, connexion, matériel | O6 |
| 6 | `modeles-pour-8go` | Choisir modèles et quantification pour 8 Go | O6 |
| 6 | `index-entre-langues` | Un index qui relie les langues | O6 |
| 6 | `verifier-langue-reponse` | Répondre dans la langue de l'utilisateur, et le vérifier | O6 |
| 6 | `limites-medicales` | Les limites médicales : orienter plutôt que diagnostiquer | O6 |
| 6 | `maj-sans-internet` | Mettre à jour sans Internet : clé USB et paquets signés | O6 |
| 6 | `tester-centre-sante` | Tester dans un vrai centre de santé | O6 |

## Comparatif des projets

| Projet | Le problème | L'approche | Le point dur | Coût d'exploitation |
| --- | --- | --- | --- | --- |
| Assistant juridique | Des réponses sûres et vérifiables | RAG hybride, citations vérifiées par code | Textes abrogés, renvois entre articles | Faible : petit modèle, index modeste |
| Archives scannées | Des documents illisibles pour une machine | OCR avec mise en page, recherche par l'image | Qualité des scans, tableaux | Élevé à l'ingestion, faible ensuite |
| Base d'entreprise | Des sources dispersées et confidentielles | Connecteurs, droits hérités, filtrage préalable | Fuite entre services | Moyen : synchronisation continue |
| Questions globales | « Quels problèmes reviennent ? » | GraphRAG : entités, communautés, résumés | Coût et qualité de l'extraction | Élevé à l'indexation |
| Chiffres en langage naturel | Les décideurs ne savent pas écrire de SQL | Texte vers SQL sur un modèle sémantique | Ambiguïtés métier, exactitude | Faible |
| Santé hors ligne | Pas de connexion, plusieurs langues | Tout en local, index multilingue | Matériel limité, mises à jour | Matériel une fois, presque rien ensuite |

## Les projets

### 1. Un assistant juridique qui cite l'article

- **Le client** : un éditeur de logiciels de paie à Douala veut ajouter un assistant « droit du travail » à son produit, vendu à 400 PME du Cameroun et du Gabon.
- **Le problème** : les responsables RH posent les mêmes questions (préavis, congés, heures supplémentaires, licenciement) et paient un juriste à l'heure pour y répondre. Une réponse fausse peut coûter un procès aux prud'hommes.
- **Pourquoi ce cas est différent** : l'exactitude se vérifie. Chaque affirmation doit renvoyer à un article, et les textes changent : un décret peut remplacer trois articles du jour au lendemain.
- **L'approche de l'expert** : un découpage par article qui garde les renvois, une recherche hybride, une sortie structurée où chaque phrase porte sa citation, une vérification par code que l'article cité existe et dit bien cela, et un index versionné par date de validité.
- **Alternatives écartées** : un long contexte avec tout le code du travail (cher, lent, citations peu fiables) ; un fine-tuning sur le droit (impossible à mettre à jour, aucune citation vérifiable).
- **Ce qui se vend** : une option à 15 000 F CFA par mois et par entreprise, ajoutée au logiciel de paie. Avec un petit modèle hébergé et quelques milliers de questions par mois, le coût de revient reste de l'ordre de quelques centaines de francs par entreprise. L'argument de vente : moins d'heures de juriste et des réponses traçables.
- **Contraintes réelles** : textes officiels publics mais mal numérisés, questions en français et en anglais, avertissement obligatoire (l'assistant informe, il ne remplace pas un avocat), données des salariés à ne jamais journaliser en clair.
- **L'imprévu** : un décret modifie les règles de congés pendant la phase de test ; dès sa publication, plus aucune réponse ne doit citer l'ancien texte.
- **C'est réussi quand** :
  - Au moins 95 % des citations renvoient au bon article, vérifié automatiquement.
  - Les questions sans réponse dans les textes reçoivent « je ne sais pas » et une orientation.
  - Après la mise à jour, aucun article abrogé n'est cité.
  - Un juriste valide l'échantillon d'évaluation, avec un accord mesuré.
- **À revoir** : `3.4/chunking-structure`, `3.3/hybride`, `3.4/citations`, `3.4/je-ne-sais-pas`, `3.4/fraicheur-index`, `3.5/affirmations`, `3.5/accord-evaluateurs`, `4.8/cache-semantique`
- **Pour ton portfolio** : une démo où l'on clique sur chaque citation, le rapport d'évaluation signé avec le juriste, et la preuve avant et après le décret.

### 2. Des archives scannées et des tableaux

- **Le client** : une compagnie d'assurance d'Abidjan dont les gestionnaires de sinistres cherchent, dans 200 000 pages scannées, les garanties d'un contrat et de ses avenants.
- **Le problème** : retrouver « ce contrat couvre-t-il l'incendie d'un entrepôt, et avec quel plafond ? » prend 40 minutes. Les tableaux de garanties sont des images, souvent penchées ou tamponnées.
- **Pourquoi ce cas est différent** : le texte n'existe pas encore. La qualité dépend de l'extraction, pas du modèle de langage, et la bonne réponse peut se trouver dans un avenant plus récent que le contrat.
- **L'approche de l'expert** : un inventaire des documents par qualité, un OCR qui garde la mise en page, une extraction dédiée des tableaux, une recherche par l'image de la page (ColPali) pour les pages où le texte échoue, et une chaîne contrat → avenants qui donne la version en vigueur.
- **Alternatives écartées** : tout envoyer à un grand modèle multimodal par API (coût par page prohibitif sur 200 000 pages, données d'assurés hors du pays) ; un OCR brut sans mise en page (les tableaux deviennent illisibles).
- **Ce qui se vend** : un projet d'intégration facturé une fois (numérisation et ingestion), puis un abonnement mensuel par gestionnaire. La valeur se chiffre en temps de traitement d'un sinistre.
- **Contraintes réelles** : données personnelles et de santé dans certains dossiers, hébergement exigé dans le pays ou la région, scans de qualité très variable, absence de GPU chez le client.
- **L'imprévu** : 15 % des pages sont des photos prises au téléphone, pas des scans ; le taux d'erreur de l'OCR double sur ces pages.
- **C'est réussi quand** :
  - La qualité d'extraction est mesurée par type de page, avec les pages problématiques identifiées.
  - Les plafonds de garantie extraits sont exacts sur un échantillon vérifié à la main.
  - La réponse tient compte du dernier avenant en vigueur.
  - Le coût d'ingestion complet est chiffré et tient sur la machine du client.
- **À revoir** : `3.4/ocr`, `3.4/tableaux`, `3.4/nettoyer-extraction`, `3.3/multi-vecteurs`, `3.10/recherche-visuelle-docs`, `3.5/evaluer-extraction`, `5.3/donnees-sensibles`, `4.5/ingestion-documents`
- **Pour ton portfolio** : un tableau qualité d'extraction par type de page, une démonstration sur des documents fictifs réalistes, le calcul de coût d'ingestion.

### 3. La base de connaissances d'une entreprise

- **Le client** : une banque de 1 200 salariés à Dakar, dont les procédures sont éparpillées entre un intranet, des dossiers partagés, des PDF et des courriels.
- **Le problème** : les agents d'agence appellent le siège pour des procédures qui existent déjà, mais introuvables. Et certains documents (rémunérations, contentieux) ne doivent être vus que par quelques personnes.
- **Pourquoi ce cas est différent** : le risque principal n'est pas une mauvaise réponse, c'est une fuite. Un passage confidentiel cité à la mauvaise personne est un incident grave.
- **L'approche de l'expert** : cartographier les sources et leurs propriétaires, synchroniser par changements, copier les droits de chaque document dans ses métadonnées, filtrer par droits avant la recherche, détecter les doublons et les versions périmées, journaliser chaque accès.
- **Alternatives écartées** : un index unique sans droits, filtré après la recherche (les passages interdits influencent déjà la réponse) ; un index par service (ingérable, documents transverses dupliqués).
- **Ce qui se vend** : une licence annuelle par salarié, ou un forfait par agence. Le retour se mesure en appels évités au siège et en temps de formation des nouveaux agents.
- **Contraintes réelles** : règles de la banque centrale sur l'externalisation, audit de sécurité avant toute mise en production, annuaire d'entreprise comme source des droits, hébergement interne.
- **L'imprévu** : un salarié change de service ; dès le lendemain, il ne doit plus voir les documents de son ancien service.
- **C'est réussi quand** :
  - Zéro passage d'un document interdit dans les réponses, sur un jeu de tests de droits.
  - Un changement de droits est pris en compte au plus tard à la synchronisation suivante.
  - Les documents contradictoires sont signalés au propriétaire.
  - Le taux de questions sans réponse est suivi et baisse d'une version à l'autre.
- **À revoir** : `3.4/droits-acces-rag`, `3.3/filtres-metadonnees`, `4.5/detecter-changements`, `4.5/incremental`, `5.1/fuite-donnees`, `5.1/moindre-privilege`, `4.7/retours-utilisateurs`, `4.2/roles-permissions`
- **Pour ton portfolio** : le jeu de tests de droits (et son résultat), l'architecture de synchronisation, le tableau de bord d'adoption.

### 4. Des questions globales sur 500 rapports

- **Le client** : un bailleur de fonds qui finance des projets d'eau et d'assainissement au Sahel, avec 500 rapports d'évaluation accumulés en dix ans.
- **Le problème** : la direction demande « quels problèmes reviennent dans les projets qui échouent ? » et « quels partenaires réussissent le mieux en zone rurale ? ». Personne n'a lu les 500 rapports.
- **Pourquoi ce cas est différent** : la réponse n'est dans aucun passage. Elle se construit en reliant des centaines de documents. Un RAG qui ramène cinq passages donne une réponse anecdotique.
- **L'approche de l'expert** : un schéma d'entités adapté au métier, une extraction contrôlée sur échantillon, des communautés et leurs résumés pour les questions globales, un routeur qui envoie les questions précises vers le RAG classique, et une comparaison mesurée avec le RAG simple.
- **Alternatives écartées** : résumer chaque rapport puis résumer les résumés (perd les liens entre partenaires, lieux et problèmes) ; tout mettre dans un long contexte (500 rapports ne tiennent pas).
- **Ce qui se vend** : une étude facturée au forfait, puis un outil maintenu pour l'équipe d'évaluation. La valeur : des décisions de financement fondées sur dix ans d'expérience.
- **Contraintes réelles** : rapports en français et en anglais, noms de lieux écrits de plusieurs façons, budget d'indexation limité, résultats qui seront cités dans des documents publics.
- **L'imprévu** : 80 nouveaux rapports arrivent ; il faut mettre le graphe à jour sans tout réextraire.
- **C'est réussi quand** :
  - La qualité d'extraction des entités est mesurée sur un échantillon annoté.
  - Les réponses globales citent les rapports qui les fondent.
  - Le gain face au RAG simple est mesuré sur un jeu de questions globales et précises.
  - Le coût d'indexation et de mise à jour est chiffré.
- **À revoir** : `3.4/graph-rag`, `3.4/extraire-graphe`, `3.4/resumes-communautes`, `3.4/maj-graphe`, `3.4/cout-graphrag`, `3.4/routage-requetes`, `3.5/comparer-variantes`
- **Pour ton portfolio** : une réponse globale avec ses sources, le comparatif chiffré GraphRAG contre RAG simple, le coût par rapport ajouté.

### 5. Interroger des chiffres en langage naturel

- **Le client** : un distributeur de boissons qui couvre la Côte d'Ivoire avec 60 commerciaux et un entrepôt de données des ventes.
- **Le problème** : les directeurs régionaux attendent deux jours un tableau de l'équipe données pour savoir « combien a-t-on vendu de packs à Bouaké ce mois, par rapport au mois dernier ? ».
- **Pourquoi ce cas est différent** : il n'y a pas de document à chercher. La réponse est un calcul, et un chiffre faux présenté avec assurance est pire qu'aucune réponse.
- **L'approche de l'expert** : un modèle sémantique écrit avec le métier (ce que veut dire « vente », « client actif », « ce mois »), 150 questions de référence avec leur requête, une génération de SQL validée puis exécutée en lecture seule, une réponse qui montre le chiffre, la requête et un graphique, et une évaluation qui compare les résultats d'exécution.
- **Alternatives écartées** : donner le schéma brut au modèle (il confond les tables et les définitions) ; un tableau de bord figé (ne répond pas aux questions imprévues).
- **Ce qui se vend** : un abonnement par utilisateur décideur, souvent vendu avec la mise en place du modèle sémantique. Le retour se mesure en demandes évitées à l'équipe données.
- **Contraintes réelles** : données commerciales sensibles, chaque directeur ne voit que sa région, temps de réponse attendu en secondes sur une base de plusieurs millions de lignes.
- **L'imprévu** : la direction change la définition du « client actif » ; toutes les réponses doivent suivre la nouvelle définition.
- **C'est réussi quand** :
  - Au moins 90 % des 150 questions donnent le bon résultat, vérifié par exécution.
  - Une question ambiguë déclenche une précision, pas une supposition.
  - Aucune requête ne peut écrire dans la base ni sortir de la région de l'utilisateur.
  - Le changement de définition s'applique partout en une modification.
- **À revoir** : `3.4/texte-vers-sql`, `3.5/correspondance-exacte`, `5.1/sorties-non-validees`, `4.2/roles-permissions`, `4.5/transformer-sql`, `0.5/group-by`, `3.2/few-shot`
- **Pour ton portfolio** : la démo avec chiffre, requête et graphique, le taux d'exactitude par type de question, le modèle sémantique documenté.

### 6. Un assistant de santé hors ligne et multilingue

- **Le client** : un programme de santé qui équipe 40 centres de santé ruraux d'un mini-PC, sans connexion fiable, avec des agents qui parlent français, anglais et fulfulde.
- **Le problème** : les agents de santé ont des protocoles nationaux de 300 pages et doivent retrouver vite la conduite à tenir, souvent la nuit, sans médecin joignable.
- **Pourquoi ce cas est différent** : tout doit tourner sur place, sur une machine modeste et une énergie limitée, et la moindre erreur a des conséquences sur la santé.
- **L'approche de l'expert** : des modèles locaux choisis et quantifiés pour la machine, un index multilingue, une vérification de la langue de la réponse, des réponses qui citent le protocole et orientent vers une référence quand la situation dépasse le protocole, et des mises à jour par paquets signés transportés sur clé USB.
- **Alternatives écartées** : une API dans le cloud (pas de connexion) ; un modèle plus gros (trop lent et trop gourmand pour la machine et l'énergie disponibles).
- **Ce qui se vend** : un contrat avec le programme de santé ou un bailleur : matériel, déploiement, formation, maintenance annuelle. Le coût par centre doit rester sous le budget d'un équipement médical courant.
- **Contraintes réelles** : coupures de courant, aucun technicien sur place, responsabilité médicale, validation des contenus par le ministère.
- **L'imprévu** : une nouvelle version du protocole paludisme sort ; elle doit arriver dans les 40 centres sans connexion, et chaque centre doit savoir quelle version il utilise.
- **C'est réussi quand** :
  - L'assistant répond en moins de 15 secondes sur la machine cible, sans réseau.
  - Chaque réponse cite la page du protocole.
  - Les situations d'urgence déclenchent toujours une orientation vers une référence.
  - Une mise à jour par clé USB est vérifiée (signature, version) et réversible.
- **À revoir** : `3.8/rag-local`, `3.8/modeles-embarques`, `3.8/distribuer-hors-ligne`, `3.3/multilingue`, `3.4/repondre-langue-question`, `5.2/supervision-humaine`, `4.8/hors-ligne-service`, `3.8/niveaux-quantification`
- **Pour ton portfolio** : une vidéo de l'assistant sans réseau, la mesure de latence sur la machine cible, la procédure de mise à jour signée.

## Fil rouge et ancrage local

- **Situation** : six clients réels d'Afrique francophone (éditeur de paie, assureur, banque, bailleur de fonds, distributeur, programme de santé), chacun avec ses documents, ses utilisateurs et ses contraintes.

## Circuit

- [ ] 1. Fiche validée par le mainteneur
- [ ] 2. Données fictives réalistes et solution de référence
- [ ] 3. Énoncés des étapes
- [ ] 4. Tests et grilles
- [ ] 5. Relecture élève
- [ ] 6. Relecture expert
