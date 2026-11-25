---
id: "P4"
titre: "Un studio de contenu pour une ONG de santé communautaire"
famille: "Studio de contenu"
promesse: "Tu construis le studio qui transforme des recommandations de santé validées en messages écrits, illustrés et parlés, dans plusieurs langues, compris par des personnes peu alphabétisées, sans jamais déformer la consigne médicale."
prerequis: ["3.2", "3.4", "3.9", "3.10", "5.2"]
statut: brouillon
version: 1
mise_a_jour: 2026-11-25
---

# P4 — Un studio de contenu pour une ONG de santé communautaire

## Le brief client

- **Le client** : une ONG fictive de santé communautaire dans l'Extrême-Nord du Cameroun. Elle forme 120 relais communautaires et diffuse des messages de prévention (paludisme, vaccination, nutrition) par radio communautaire, WhatsApp et affiches.
- **Les utilisateurs** : la chargée de communication, qui produit les messages ; le médecin référent, qui les valide ; les relais et les familles, qui les reçoivent en français, en fulfulde ou en arabe tchadien, souvent sans savoir lire.
- **Le problème** : produire un message, le traduire, l'illustrer et l'enregistrer prend deux semaines. Les traductions improvisées déforment parfois la consigne, et les images trouvées en ligne ne ressemblent pas aux familles de la région.
- **Le résultat attendu** : un studio qui produit, à partir d'une fiche validée par le médecin, un message court, sa traduction, une illustration et un audio, garde la trace de la source de chaque contenu, et ne publie rien sans validation humaine.
- **Hors périmètre** : la diffusion elle-même, le diagnostic, tout conseil médical personnalisé.

## Indicateurs de réussite

| Indicateur | Nature | Cible | Comment le mesurer |
| --- | --- | --- | --- |
| Messages fidèles à la fiche médicale | métier | 100 % après relecture | Évaluation par affirmation, puis validation du médecin |
| Messages compris par le public visé | métier | ≥ 80 % | Test auprès de 10 personnes, questions de compréhension |
| Traductions jugées correctes par des locuteurs | métier | ≥ 80 % | Évaluation par deux locuteurs par langue |
| Contenus publiés sans validation | métier | 0 | Journal du circuit de validation |
| Contenus retrouvés après un changement de consigne | technique | 100 % | Test de la mission 6 |
| Coût et délai par message complet | technique | mesurés et justifiés | Journal de production |

## Compétences démontrées

| Compétence | Leçons à revoir |
| --- | --- |
| Concevoir pour des personnes peu alphabétisées | `3.10/peu-alphabetises`, `6.1/parler-utilisateurs` |
| Rédiger fidèlement à une source | `3.4/synthese-sources`, `3.4/verifier-fondement`, `3.2/prompt-reecriture` |
| Traduire et évaluer en langue locale | `3.9/traduction-langues`, `3.9/locuteurs-natifs`, `3.9/metriques-traduction` |
| Produire de la voix | `3.10/synthese-vocale`, `3.10/voix-locales`, `3.10/evaluer-voix` |
| Illustrer sans stéréotype ni deepfake | `3.10/generer-image`, `3.10/risques-images`, `5.2/stereotypes` |
| Tracer l'origine de chaque contenu | `4.5/lignage`, `5.3/registre-traitements` |
| Garder l'humain dans la boucle | `5.2/supervision-humaine`, `5.2/transparence`, `5.3/contenus-generes` |

## Missions

### 1. Cadrer la ligne éditoriale

- **Situation** : avant de générer quoi que ce soit, il faut savoir pour qui, sur quel canal, et ce qui est interdit.
- **Livrable** : une charte éditoriale (publics, canaux, longueur, ton, langues, mots à éviter, interdits médicaux et visuels) et une grille de qualité qui servira à toutes les missions.
- **Critères de réussite** :
  - Chaque règle de la charte est vérifiable sur un message.
  - Les interdits médicaux viennent des fiches validées, pas de suppositions.
  - Les parties prenantes et leurs rôles sont identifiés.
- **Étapes conseillées** :
  1. Lire les fiches médicales et les messages déjà diffusés.
  2. Identifier les publics et les canaux.
  3. Écrire la charte et la grille de qualité.
- **Leçons utiles** : `3.10/peu-alphabetises`, `6.1/parler-utilisateurs`, `5.2/parties-prenantes`, `3.5/criteres-succes`, `3.10/canaux-vocaux`
- **Vérification** : grille

### 2. Rédiger à partir des fiches validées

- **Situation** : la fiche du médecin dit « dormir sous une moustiquaire imprégnée toutes les nuits, toute l'année ». Le message doit le dire simplement, sans rien ajouter ni retirer.
- **Livrable** : un générateur qui produit un message court par canal à partir d'une fiche, avec la liste des affirmations et la phrase de la fiche qui fonde chacune.
- **Critères de réussite** :
  - Chaque affirmation du message est fondée sur la fiche, vérifié automatiquement puis par relecture.
  - Le message respecte la charte (longueur, mots simples, ton).
  - Une fiche incomplète produit une alerte, pas un message inventé.
- **Étapes conseillées** :
  1. Écrire le prompt avec des exemples choisis selon le canal.
  2. Extraire les affirmations du message et les rapprocher de la fiche.
  3. Mesurer la fidélité sur 20 fiches.
- **Leçons utiles** : `3.4/synthese-sources`, `3.4/verifier-fondement`, `3.2/prompt-reecriture`, `3.2/exemples-dynamiques`, `3.5/affirmations`
- **Vérification** : tests automatiques

### 3. Adapter aux langues

- **Situation** : le message doit exister en fulfulde et en arabe tchadien, des langues mal couvertes par les modèles.
- **Livrable** : une chaîne de traduction (modèle de traduction ou LLM, glossaire des termes de santé), évaluée par des métriques automatiques et par des locuteurs, avec un circuit de correction.
- **Critères de réussite** :
  - Les termes du glossaire sont respectés dans chaque traduction.
  - Les scores automatiques et les jugements des locuteurs sont rapportés ensemble.
  - Les erreurs qui changent le sens médical sont toutes corrigées avant validation.
- **Étapes conseillées** :
  1. Construire le glossaire avec des locuteurs.
  2. Comparer deux méthodes de traduction sur 20 messages.
  3. Organiser l'évaluation par les locuteurs.
- **Leçons utiles** : `3.9/traduction-langues`, `3.9/metriques-traduction`, `3.9/locuteurs-natifs`, `3.9/eval-humaine-langues`, `3.2/prompt-langues`
- **Vérification** : tests automatiques et grille

### 4. Donner une voix

- **Situation** : à la radio et sur WhatsApp, le message est écouté, pas lu.
- **Livrable** : des audios générés en local dans chaque langue disponible, évalués par des auditeurs, sans clonage de la voix d'une personne réelle sans son accord écrit.
- **Critères de réussite** :
  - Chaque audio est intelligible pour les auditeurs du test.
  - Les langues sans voix de synthèse correcte sont signalées, avec une solution de repli (enregistrement par un relais).
  - Aucune voix réelle n'est clonée sans consentement documenté.
- **Étapes conseillées** :
  1. Tester les voix disponibles par langue.
  2. Générer les audios et les faire écouter.
  3. Documenter les choix et les replis.
- **Leçons utiles** : `3.10/synthese-vocale`, `3.10/voix-locales`, `3.10/evaluer-voix`, `3.10/cloner-voix`, `3.9/synthese-langues`
- **Vérification** : grille

### 5. Illustrer

- **Situation** : les affiches doivent montrer des familles qui ressemblent à celles de la région, dans des scènes justes.
- **Livrable** : des illustrations générées sur un petit PC, revues pour leurs stéréotypes et leur justesse culturelle, sans visage de personne réelle, avec la mention de leur origine.
- **Critères de réussite** :
  - Chaque image est relue avec une grille (stéréotypes, exactitude du geste médical, lisibilité).
  - Aucune image ne représente une personne réelle identifiable.
  - Chaque image porte la mention « illustration générée par IA ».
- **Étapes conseillées** :
  1. Écrire les descriptions d'images à partir du message.
  2. Générer, relire avec la grille, regénérer si besoin.
  3. Ajouter les mentions et les métadonnées.
- **Leçons utiles** : `3.10/generer-image`, `3.10/prompts-images`, `3.10/risques-images`, `5.2/stereotypes`, `5.2/transparence`
- **Vérification** : grille

### 6. Suivre une consigne qui change

- **Situation** : le ministère change la recommandation sur l'âge d'une vaccination. Tous les messages, traductions, images et audios qui en parlent doivent être retrouvés et corrigés.
- **Livrable** : un registre qui relie chaque contenu produit à sa fiche source et à sa version, et une procédure qui retrouve tous les contenus touchés par un changement et les remet dans le circuit de validation.
- **Critères de réussite** :
  - Tous les contenus touchés par le changement fourni sont retrouvés, et aucun autre.
  - Les anciens contenus sont retirés ou marqués.
  - Le registre dit qui a validé quoi, et quand.
- **Étapes conseillées** :
  1. Donner un identifiant et une version à chaque fiche et à chaque contenu.
  2. Écrire la recherche des contenus touchés.
  3. Rejouer le changement de consigne fourni.
- **Changement imprévu** : la nouvelle consigne arrive pendant la production d'un lot de messages.
- **Leçons utiles** : `4.5/lignage`, `5.3/registre-traitements`, `3.4/fraicheur-index`, `4.6/tracabilite`
- **Vérification** : tests automatiques

### 7. Valider et publier en confiance

- **Situation** : rien ne doit partir sans le médecin, et les droits sur chaque élément doivent être clairs.
- **Livrable** : un circuit de validation (brouillon, relu, validé, publié), une page de supervision pour le médecin, et une note sur les droits des contenus générés et des données utilisées.
- **Critères de réussite** :
  - Aucun contenu ne passe à « publié » sans validation enregistrée.
  - La page de supervision montre le message, sa source et ses traductions côte à côte.
  - Les licences des modèles et des données utilisés sont listées.
- **Étapes conseillées** :
  1. Écrire les états du circuit et leurs transitions autorisées.
  2. Construire la page de supervision.
  3. Rédiger la note sur les droits.
- **Leçons utiles** : `5.2/supervision-humaine`, `5.2/concevoir-supervision`, `5.3/contenus-generes`, `5.3/licences-modeles`, `5.3/licences-donnees`
- **Vérification** : tests automatiques et grille

### 8. Mesurer et présenter

- **Situation** : l'ONG veut savoir si le studio fait gagner du temps sans perdre en qualité ni en confiance.
- **Livrable** : un test de compréhension auprès de 10 personnes du public visé, la fidélité mesurée sur tout le lot, le coût et le délai par message, et un rapport pour la direction de l'ONG.
- **Critères de réussite** :
  - Le test de compréhension suit un protocole écrit à l'avance.
  - Les échecs de compréhension sont analysés et rattachés à une cause.
  - Le rapport compare le studio au processus d'avant, chiffres à l'appui.
- **Étapes conseillées** :
  1. Écrire le protocole du test de terrain.
  2. Mener le test et mesurer la fidélité du lot.
  3. Rédiger le rapport.
- **Leçons utiles** : `3.10/tester-terrain`, `3.10/evaluer-multimodal`, `3.5/evaluation-humaine`, `5.2/etude-impact`, `6.2/resultats-chiffres`
- **Vérification** : grille

## Validation

| Contrôle | Comment | Règle |
| --- | --- | --- |
| Tests des missions | `python outils/check.py` sur chaque mission | Tous les tests passent |
| Indicateurs de réussite | Mesures de la mission 8 | Cibles atteintes, ou écart expliqué |
| Correction par l'agent IA | `GRILLE.md` du projet | Au moins 14/20 |
| Examen oral avec l'IA | 5 à 10 questions sur ton code et tes choix | Au moins 70 % de réponses jugées correctes |

## Portfolio

- Un README en anglais : le problème, la démonstration, l'architecture en un schéma, les résultats chiffrés.
- Un exemple complet : une fiche médicale et tous les contenus produits, avec leur traçabilité.
- Le rapport du test de terrain et l'évaluation des traductions.
- Une vidéo de démonstration de 3 minutes au plus.
- Le badge de la CI au vert et le rapport de l'agent correcteur.

## Données et ressources matérielles

- **Données fournies** : 20 fiches de prévention fictives validées, un glossaire de départ, un changement de consigne fictif, des messages déjà diffusés.
- **Modèles** : un petit LLM local, un modèle de traduction ouvert, une synthèse vocale locale, un petit modèle de diffusion d'images (génération lente sur processeur, quelques images par mission).
- **Machine** : PC de 8 Go de RAM, sans carte graphique.
- **Personnes** : deux locuteurs par langue et dix personnes du public visé, recrutés dans ton entourage avec leur accord.

## Circuit

- [ ] 1. Fiche validée par le mainteneur
- [ ] 2. Solution et tests
- [ ] 3. Énoncés des missions
- [ ] 4. Indices
- [ ] 5. Données
- [ ] 6. Grille
- [ ] 7. Relecture élève
- [ ] 8. Relecture expert
