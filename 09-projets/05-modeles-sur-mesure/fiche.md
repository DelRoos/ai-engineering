---
id: "9.5"
titre: "Modèles sur mesure"
parcours: "09-projets"
nature: projets
promesse: "Six projets où l'on entraîne un modèle au lieu de seulement l'appeler : classer, extraire à petit coût, raisonner juste, parler comme une marque, chercher dans un domaine, servir une langue locale. Chaque fois, une intervention différente, choisie et prouvée."
question_saut: "Tu as déjà fine-tuné un modèle qui a battu, mesures à l'appui, un prompt sur un grand modèle ?"
qcm: false
prerequis: ["3.3", "3.5", "3.7", "3.8", "3.9"]
statut: brouillon
version: 1
mise_a_jour: 2026-11-25
---

# 9.5 — Modèles sur mesure

## Extrait du programme

- **Exercice clé** : Livrer de bout en bout au moins un projet de la famille, avec la comparaison chiffrée face à un prompt sur un modèle généraliste

## Objectifs vérifiables

| Id | À la fin, l'apprenant sait… | Évalué par |
| --- | --- | --- |
| O1 | Fine-tuner un petit classifieur avec LoRA et prouver qu'il bat un grand modèle sur la tâche, à coût réduit. | projet 1 |
| O2 | Distiller un grand modèle d'extraction dans un petit modèle local. | projet 2 |
| O3 | Entraîner un petit modèle par récompense vérifiable sur une tâche de calcul. | projet 3 |
| O4 | Aligner un modèle sur le ton d'une marque à partir de préférences. | projet 4 |
| O5 | Adapter un modèle d'embeddings à un domaine et mesurer le gain de recherche. | projet 5 |
| O6 | Adapter un modèle de traduction à une langue locale avec des locuteurs. | projet 6 |

## Chapitres

| Chapitre | Titre | Exercices |
| --- | --- | --- |
| 1 | Trier les réclamations d'un service mobile money | 0 |
| 2 | Extraire les bons de livraison, à petit coût | 0 |
| 3 | Un calculateur de cotisations qui ne se trompe pas | 0 |
| 4 | Répondre avec le ton d'une banque | 0 |
| 5 | Un moteur de recherche médical qui comprend le métier | 0 |
| 6 | Traduire entre le français et le wolof | 0 |

## Notions, dans l'ordre

| Chapitre | Id de la notion | Notion | Objectif |
| --- | --- | --- | --- |
| 1 | `cout-prompt-volume` | Le coût d'un prompt sur 2 millions de messages par mois | O1 |
| 1 | `taxonomie-reclamations` | Une taxonomie de 30 catégories, définie avec le métier | O1 |
| 1 | `annoter-reclamations` | Annoter 5 000 réclamations : guide, accord, désaccords | O1 |
| 1 | `reference-prompt` | La référence : un prompt sur un grand modèle | O1 |
| 1 | `lora-classifieur` | Un petit modèle fine-tuné avec LoRA | O1 |
| 1 | `classes-rares` | Les catégories rares et le seuil de confiance | O1 |
| 1 | `derive-reclamations` | La dérive : quand une nouvelle panne crée une nouvelle catégorie | O1 |
| 1 | `bilan-classifieur` | Le bilan : qualité, coût, latence, face à la référence | O1 |
| 2 | `extraction-maitre` | Un grand modèle maître qui extrait bien, mais cher | O2 |
| 2 | `donnees-distillation` | Générer et filtrer les données d'entraînement de l'élève | O2 |
| 2 | `sft-eleve` | Entraîner l'élève sur les sorties du maître | O2 |
| 2 | `distillation-politique` | Corriger l'élève sur ses propres erreurs : la distillation on-policy | O2 |
| 2 | `champ-par-champ` | Évaluer champ par champ, sur des documents jamais vus | O2 |
| 2 | `servir-eleve` | Servir l'élève en local, en GGUF | O2 |
| 2 | `cout-mille-documents` | Le coût pour mille documents, avant et après | O2 |
| 3 | `tache-verifiable` | Une tâche dont la réponse se vérifie par du code | O3 |
| 3 | `jeu-calculs` | Le jeu de problèmes : barèmes, plafonds, cas limites | O3 |
| 3 | `sft-amorce` | Amorcer par un SFT sur des solutions détaillées | O3 |
| 3 | `recompense-calcul` | La récompense : réponse exacte, format, étapes | O3 |
| 3 | `grpo-petit-budget` | GRPO sur un très petit modèle, à petit budget | O3 |
| 3 | `triche-recompense` | Repérer le modèle qui triche avec la récompense | O3 |
| 3 | `outil-ou-modele` | Ou bien : un modèle qui appelle une calculatrice | O3 |
| 4 | `charte-ton` | La charte du ton de la marque, en exemples | O4 |
| 4 | `collecter-preferences` | Collecter des préférences auprès des conseillers | O4 |
| 4 | `qualite-paires` | Nettoyer les paires : désaccords, longueur, biais | O4 |
| 4 | `dpo-ton` | Entraîner avec DPO | O4 |
| 4 | `ton-sans-perdre-exactitude` | Garder l'exactitude en changeant le ton | O4 |
| 4 | `evaluer-ton` | Évaluer le ton à l'aveugle, avec les conseillers | O4 |
| 5 | `requetes-medecins` | Ce que cherchent les soignants, et avec quels mots | O5 |
| 5 | `paires-medicales` | Construire des paires question-passage dans le domaine | O5 |
| 5 | `negatifs-medicaux` | Les négatifs difficiles : proches mais faux | O5 |
| 5 | `entrainer-retriever-medical` | Entraîner sur CPU avec Sentence Transformers | O5 |
| 5 | `gain-sans-fuite` | Mesurer le gain sans fuite entre entraînement et test | O5 |
| 5 | `reindexer-apres-ft` | Réindexer, et ce que ça coûte | O5 |
| 6 | `etat-traduction-wolof` | Où en sont les modèles sur le wolof | O6 |
| 6 | `corpus-parallele` | Rassembler un corpus parallèle, et ses licences | O6 |
| 6 | `retro-traduire` | Augmenter les données par rétro-traduction | O6 |
| 6 | `adapter-traducteur` | Adapter un modèle de traduction ouvert | O6 |
| 6 | `evaluer-locuteurs-wolof` | Évaluer avec chrF et avec des locuteurs | O6 |
| 6 | `publier-modele-langue` | Publier le modèle et sa fiche pour la communauté | O6 |

## Comparatif des projets

| Projet | Le problème | L'intervention | Le point dur | Pourquoi pas un prompt |
| --- | --- | --- | --- | --- |
| Réclamations | Un volume énorme, 30 catégories | SFT avec LoRA sur un petit modèle | Classes rares, dérive | Coût et latence au volume |
| Bons de livraison | Un bon extracteur trop cher | Distillation, puis on-policy | Généraliser à de nouveaux formats | Coût par document |
| Cotisations | Des calculs qui doivent être justes | SFT puis GRPO, comparé à un outil | Détournement de récompense | Erreurs de calcul du modèle |
| Ton d'une banque | Des réponses justes mais froides | DPO sur préférences | Garder l'exactitude | Le ton se décrit mal en consignes |
| Recherche médicale | Un vocabulaire que les embeddings ignorent | Fine-tuning d'embeddings | Négatifs difficiles, fuite | Le prompt n'agit pas sur la recherche |
| Wolof | Une langue mal servie | Adaptation d'un traducteur ouvert | Données rares, évaluation | Le modèle ne connaît pas assez la langue |

## Les projets

### 1. Trier les réclamations d'un service mobile money

- **Le client** : un service de mobile money en Côte d'Ivoire qui reçoit 2 millions de messages de réclamation par mois (transfert non reçu, retrait bloqué, frais contestés…).
- **Le problème** : chaque réclamation doit partir vers la bonne équipe en quelques secondes. Un grand modèle par API classe bien, mais coûte trop cher et répond trop lentement à ce volume.
- **Pourquoi ce cas est différent** : la tâche est étroite, stable et massive. C'est le cas d'école où un petit modèle spécialisé bat un grand modèle généraliste sur le coût, à qualité égale ou meilleure.
- **L'approche de l'expert** : chiffrer le coût du prompt au volume, définir la taxonomie avec le métier, annoter 5 000 réclamations avec un guide et un accord mesuré, établir la référence (prompt sur un grand modèle), fine-tuner un petit modèle avec LoRA, régler un seuil de confiance qui renvoie les cas douteux à un humain, et surveiller la dérive.
- **Alternatives écartées** : le grand modèle par API en production (coût mensuel élevé, données de clients hors du pays) ; un classifieur TF-IDF (s'effondre sur le nouchi et les fautes d'orthographe).
- **Ce qui se vend** : un projet facturé, puis une maintenance (réentraînement trimestriel). L'économie se calcule directement : coût par réclamation multiplié par 2 millions.
- **Contraintes réelles** : messages en français, nouchi et abréviations SMS, catégories déséquilibrées, données financières sensibles, hébergement local exigé.
- **L'imprévu** : une panne nationale crée en une journée une catégorie qui n'existait pas.
- **C'est réussi quand** :
  - Le petit modèle égale ou dépasse la référence en F1 macro, catégories rares comprises.
  - Le coût et la latence par réclamation sont mesurés et comparés.
  - Les cas sous le seuil de confiance partent vers un humain.
  - La nouvelle catégorie est détectée par la surveillance.
- **À revoir** : `3.7/prompt-rag-finetune`, `1.3/guide-annotation`, `1.3/accord-annotateurs`, `3.7/lora`, `3.7/qlora`, `1.6/metriques-desequilibre`, `4.7/derive-donnees`, `3.7/avant-apres`
- **Pour ton portfolio** : le tableau qualité, coût, latence face au grand modèle, le guide d'annotation, la courbe de dérive.

### 2. Extraire les bons de livraison, à petit coût

- **Le client** : un grossiste alimentaire de Douala qui reçoit 30 000 bons de livraison par mois, de 200 fournisseurs aux formats tous différents.
- **Le problème** : un grand modèle extrait parfaitement les lignes (produit, quantité, prix), mais coûte trop cher à ce volume, et les données ne devraient pas quitter l'entreprise.
- **Pourquoi ce cas est différent** : on a déjà un bon « maître ». L'enjeu est de transférer son savoir dans un petit modèle local, sans perdre la capacité à lire des formats nouveaux.
- **L'approche de l'expert** : utiliser le grand modèle pour produire des données d'entraînement, filtrer ces données par des contrôles automatiques (totaux, formats), entraîner l'élève en SFT, puis le corriger sur ses propres erreurs par distillation on-policy, évaluer champ par champ sur des fournisseurs jamais vus, et servir l'élève en local.
- **Alternatives écartées** : garder le grand modèle (coût et confidentialité) ; des modèles à gabarit par fournisseur (200 gabarits à maintenir).
- **Ce qui se vend** : un logiciel installé chez le grossiste, avec un abonnement de maintenance. Le coût pour mille documents passe d'un montant significatif à presque rien.
- **Contraintes réelles** : bons manuscrits ou photographiés, montants en F CFA avec séparateurs variables, nouveaux fournisseurs chaque mois.
- **L'imprévu** : un nouveau fournisseur envoie des bons dans un format jamais vu.
- **C'est réussi quand** :
  - L'élève atteint une qualité proche du maître, mesurée champ par champ sur des fournisseurs jamais vus.
  - Le coût pour mille documents est mesuré avant et après.
  - L'élève tourne sur la machine du client.
- **À revoir** : `3.7/distiller-llm`, `3.7/distillation-on-policy`, `3.7/donnees-generees`, `3.7/sft`, `3.5/evaluer-extraction`, `3.7/convertir-gguf`, `3.8/cout-local`
- **Pour ton portfolio** : la courbe qualité contre coût (maître, élève SFT, élève on-policy), la démo locale.

### 3. Un calculateur de cotisations qui ne se trompe pas

- **Le client** : un cabinet d'expertise comptable de Libreville qui répond chaque jour à des questions de calcul de cotisations sociales et de retenues sur salaire.
- **Le problème** : les modèles de langage se trompent dans les calculs à plusieurs étapes (plafonds, taux, arrondis). Une erreur sur une fiche de paie se répète chaque mois.
- **Pourquoi ce cas est différent** : la réponse se vérifie par du code. On peut donc entraîner par récompense vérifiable, et comparer honnêtement avec la solution la plus simple : un modèle qui appelle une calculatrice.
- **L'approche de l'expert** : un jeu de problèmes générés à partir des barèmes, avec leurs cas limites ; un SFT d'amorçage sur des solutions détaillées ; une récompense par code (réponse exacte, format) ; GRPO sur un très petit modèle ; la recherche active des tricheries ; et la comparaison avec un modèle qui appelle un outil de calcul.
- **Alternatives écartées** : demander au grand modèle de « bien réfléchir » (erreurs résiduelles impossibles à garantir) ; un fine-tuning supervisé seul (imite le format, pas le raisonnement).
- **Ce qui se vend** : l'outil retenu (modèle entraîné ou modèle avec calculatrice) intégré au logiciel du cabinet. La valeur est la fiabilité : zéro erreur sur les cas du barème.
- **Contraintes réelles** : barèmes qui changent chaque année, cas particuliers (temps partiel, primes exceptionnelles), budget de calcul très limité.
- **L'imprévu** : le barème change au 1er janvier ; il faut réentraîner, ou simplement mettre à jour l'outil.
- **C'est réussi quand** :
  - Le taux de réponses exactes est mesuré avant SFT, après SFT, après GRPO, et avec l'outil.
  - Les cas de détournement de récompense sont montrés et corrigés.
  - Le choix final est justifié par la fiabilité, le coût et la maintenance.
- **À revoir** : `3.7/rl-recompenses`, `3.7/construire-recompenses`, `3.7/grpo`, `3.7/detournement-recompense`, `3.7/rl-petit-budget`, `3.7/choisir-intervention`, `3.6/agent-code`
- **Pour ton portfolio** : les courbes d'apprentissage, les exemples de triche, la comparaison avec l'outil et la décision.

### 4. Répondre avec le ton d'une banque

- **Le client** : une banque panafricaine dont l'assistant client répond juste, mais d'un ton jugé froid et parfois trop familier par la direction de la marque.
- **Le problème** : des pages de consignes sur le ton n'ont pas suffi. Les conseillers savent dire quelle réponse est meilleure, mais pas l'écrire en règles.
- **Pourquoi ce cas est différent** : le critère est une préférence humaine, pas une bonne réponse unique. C'est le terrain de l'apprentissage par préférences.
- **L'approche de l'expert** : une charte du ton faite d'exemples, la collecte de paires (réponse préférée, réponse rejetée) auprès des conseillers, le nettoyage des paires, un entraînement DPO, un contrôle que l'exactitude ne baisse pas, et une évaluation à l'aveugle par les conseillers.
- **Alternatives écartées** : plus de consignes dans le prompt (déjà essayé, résultats instables) ; un SFT sur des réponses réécrites (coûteux à produire, n'apprend pas ce qu'il faut éviter).
- **Ce qui se vend** : une prestation d'alignement de marque, renouvelée quand la charte évolue. La valeur se mesure en satisfaction client et en cohérence de l'image.
- **Contraintes réelles** : réponses réglementées (on ne promet pas un crédit), plusieurs pays et registres de langue, données de clients à exclure des paires.
- **L'imprévu** : les conseillers de deux pays ne préfèrent pas le même ton.
- **C'est réussi quand** :
  - Les conseillers préfèrent le modèle aligné dans une majorité mesurée de comparaisons à l'aveugle.
  - L'exactitude et les refus réglementaires ne baissent pas.
  - Les désaccords entre conseillers sont mesurés et traités.
- **À revoir** : `3.7/paires-preferences`, `3.7/dpo`, `3.7/qualite-preferences`, `3.7/conflits-objectifs`, `3.7/tester-securite-ft`, `3.5/comparaison-paires`, `5.3/pseudonymiser`
- **Pour ton portfolio** : des exemples avant et après, le résultat de l'évaluation à l'aveugle, la preuve que l'exactitude tient.

### 5. Un moteur de recherche médical qui comprend le métier

- **Le client** : un réseau de cliniques à Kinshasa qui veut une recherche dans ses protocoles et ses fiches de médicaments pour les infirmiers et les médecins.
- **Le problème** : les modèles d'embeddings généralistes confondent des termes proches (« paludisme grave » et « paludisme simple ») et ignorent les abréviations locales.
- **Pourquoi ce cas est différent** : le défaut est dans la recherche, pas dans la génération. Aucun prompt ne corrige un mauvais classement des passages : il faut entraîner le retriever.
- **L'approche de l'expert** : recueillir de vraies requêtes de soignants, construire des paires question-passage, extraire des négatifs difficiles (proches mais faux), entraîner sur CPU avec Sentence Transformers, mesurer le gain sans fuite entre entraînement et test, et chiffrer la réindexation.
- **Alternatives écartées** : un plus gros modèle d'embeddings (plus lent et souvent pas meilleur sur ce vocabulaire) ; seulement un reranker (aide, mais ne rattrape pas ce que la recherche n'a pas ramené).
- **Ce qui se vend** : un moteur de recherche installé dans le réseau, avec un contrat de mise à jour des protocoles. La valeur : du temps et de la sécurité au chevet du patient.
- **Contraintes réelles** : responsabilité médicale, abréviations propres à chaque service, données de patients exclues de l'entraînement.
- **L'imprévu** : on découvre que des passages du jeu de test étaient aussi dans les paires d'entraînement.
- **C'est réussi quand** :
  - Le rappel@5 progresse de façon mesurée, sans fuite, face au modèle de départ.
  - Les erreurs restantes sont classées (abréviation, synonyme, ambiguïté).
  - Le coût de réentraînement et de réindexation est chiffré.
- **À revoir** : `3.3/donnees-retriever`, `3.3/negatifs-difficiles`, `3.3/perte-contrastive`, `3.3/entrainer-retriever`, `3.3/evaluer-adaptation`, `1.4/doublons-train-test`, `3.3/metriques-recherche`
- **Pour ton portfolio** : les métriques avant et après, des exemples de requêtes corrigées, la preuve de non-fuite.

### 6. Traduire entre le français et le wolof

- **Le client** : une radio communautaire de Dakar et une ONG d'éducation qui publient des contenus en français et veulent les diffuser en wolof.
- **Le problème** : les traductions automatiques actuelles en wolof sont inégales, et les traducteurs humains ne suffisent pas au volume.
- **Pourquoi ce cas est différent** : les données sont rares et dispersées, leurs licences variées, et la seule évaluation qui compte est celle des locuteurs.
- **L'approche de l'expert** : mesurer l'état des modèles existants, rassembler un corpus parallèle avec ses licences, augmenter les données par rétro-traduction, adapter un modèle de traduction ouvert, évaluer par chrF et par des locuteurs, puis publier le modèle et sa fiche pour la communauté.
- **Alternatives écartées** : un grand LLM généraliste par API (qualité inégale, coût) ; entraîner un modèle de zéro (données très insuffisantes).
- **Ce qui se vend** : un service de traduction assistée (le modèle propose, un traducteur corrige), facturé à la page ou à l'abonnement. Le traducteur double sa production.
- **Contraintes réelles** : orthographe du wolof non uniforme, mélange avec le français, données communautaires qui appartiennent à ceux qui les ont produites.
- **L'imprévu** : les locuteurs jugent les traductions trop « littérales » alors que chrF progresse.
- **C'est réussi quand** :
  - Le modèle adapté progresse en chrF et dans le jugement des locuteurs, face au modèle de départ.
  - Toutes les données utilisées ont une licence compatible, documentée.
  - Le modèle est publié avec une fiche honnête sur ses limites.
- **À revoir** : `3.9/traduction-langues`, `3.9/retro-traduction`, `3.9/adapter-langue`, `3.9/metriques-traduction`, `3.9/locuteurs-natifs`, `3.9/licences-donnees-langues`, `3.7/publier-modele`
- **Pour ton portfolio** : le modèle publié sur Hugging Face avec sa fiche, l'évaluation par les locuteurs.

## Fil rouge et ancrage local

- **Situation** : six organisations (mobile money, grossiste, cabinet comptable, banque, cliniques, radio communautaire) pour lesquelles appeler un modèle généraliste ne suffit plus.

## Circuit

- [ ] 1. Fiche validée par le mainteneur
- [ ] 2. Données fictives réalistes et solution de référence
- [ ] 3. Énoncés des étapes
- [ ] 4. Tests et grilles
- [ ] 5. Relecture élève
- [ ] 6. Relecture expert
