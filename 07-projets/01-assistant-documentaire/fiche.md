---
id: "P1"
titre: "Un assistant documentaire pour une inspection du travail"
famille: "Assistant documentaire"
promesse: "Tu construis l'assistant qui répond aux questions des travailleurs et des employeurs sur le droit du travail, en citant l'article exact, en disant « je ne sais pas » quand il ne sait pas, et qui reste juste quand les textes changent."
prerequis: ["3.3", "3.4", "3.5", "4.2", "4.5"]
statut: brouillon
version: 1
mise_a_jour: 2026-11-25
---

# P1 — Un assistant documentaire pour une inspection du travail

## Le brief client

- **Le client** : l'inspection du travail fictive d'une région du Cameroun. Cinq agents d'accueil reçoivent chaque jour environ 200 questions sur les contrats, les congés, les licenciements et les cotisations sociales.
- **Les utilisateurs** : les agents d'accueil, qui veulent une réponse sûre à donner ; les travailleurs et les employeurs, qui écrivent en français ou en anglais, avec leurs mots à eux.
- **Le problème** : les réponses varient d'un agent à l'autre, les files d'attente s'allongent, et certaines réponses s'appuient sur des textes abrogés.
- **Le résultat attendu** : un assistant qui répond à partir des textes officiels fournis, cite l'article et le document, refuse les questions hors de son domaine, dit « je ne sais pas » quand les textes ne répondent pas, et cesse de citer un texte dès qu'il est remplacé.
- **Hors périmètre** : le conseil juridique personnalisé (l'assistant oriente vers un agent), les litiges en cours.

## Indicateurs de réussite

| Indicateur | Nature | Cible | Comment le mesurer |
| --- | --- | --- | --- |
| Réponses entièrement fondées sur les textes | métier | ≥ 90 % | Évaluation par affirmation sur le jeu de test |
| Citations exactes (bon document, bon article) | métier | ≥ 95 % | Vérification automatique des références |
| « Je ne sais pas » quand la réponse n'est pas dans les textes | métier | ≥ 90 % | Questions sans réponse du jeu de test |
| Texte abrogé cité après une mise à jour | métier | 0 | Test de la mission 5 |
| Rappel@5 de la recherche | technique | ≥ 85 % | Jeu de requêtes annotées |
| Latence sur un PC de 8 Go | technique | mesurée et justifiée | Journal des appels |

## Compétences démontrées

| Compétence | Leçons à revoir |
| --- | --- |
| Cadrer un besoin et construire un jeu de test | `3.5/criteres-succes`, `3.5/jeu-test-llm`, `4.9/exigences` |
| Préparer des documents difficiles | `3.4/extraire-pdf`, `3.4/ocr`, `3.4/tableaux`, `3.4/chunking-structure` |
| Chercher et le mesurer | `3.3/hybride`, `3.4/reranking`, `3.3/metriques-recherche` |
| Répondre avec des preuves | `3.4/citations`, `3.4/je-ne-sais-pas`, `3.4/verifier-fondement` |
| Tenir l'index à jour | `3.4/fraicheur-index`, `4.5/detecter-changements`, `4.5/versionner-index` |
| Évaluer avec rigueur | `3.5/affirmations`, `3.5/calibrer-juge`, `3.5/ablation` |
| Protéger le système | `3.4/documents-pieges`, `5.1/injection-indirecte`, `5.1/donnees-perso-llm` |

## Missions

### 1. Comprendre le besoin

- **Situation** : l'inspection te transmet 100 questions réellement posées à l'accueil, et les textes officiels qu'elle utilise.
- **Livrable** : un cahier des charges d'une page (utilisateurs, types de questions, réponses attendues, hors périmètre, critères de succès) et un jeu de test de 50 questions classées, avec leur réponse et leur article de référence, dont 10 sans réponse dans les textes.
- **Critères de réussite** :
  - Chaque question du jeu de test a une réponse de référence et sa source, ou la mention « hors des textes ».
  - Les types de questions couvrent les 100 questions fournies, dans des proportions proches.
  - Les critères de succès sont mesurables.
- **Étapes conseillées** :
  1. Lire les 100 questions et les regrouper par type.
  2. Écrire le cahier des charges.
  3. Construire le jeu de test, en commençant par les cas difficiles.
- **Leçons utiles** : `3.5/criteres-succes`, `3.5/jeu-test-llm`, `3.5/cas-difficiles`, `4.9/exigences`, `4.9/questions-clarification`
- **Vérification** : tests automatiques (format du jeu de test) et grille

### 2. Préparer le corpus

- **Situation** : une partie des textes est en PDF numérique, une autre est scannée, et les barèmes de cotisation sont dans des tableaux.
- **Livrable** : un pipeline qui extrait, nettoie et découpe tous les documents selon leur structure (titre, chapitre, article), en gardant pour chaque morceau sa source, son article et sa date de validité.
- **Critères de réussite** :
  - Chaque morceau connaît son document, son article et sa date.
  - Les tableaux de barèmes restent lisibles ligne par ligne.
  - Le texte des documents scannés est assez propre pour qu'on retrouve les articles cherchés.
- **Étapes conseillées** :
  1. Extraire les PDF numériques, puis les scannés par OCR.
  2. Nettoyer les en-têtes, pieds de page et césures.
  3. Découper par article et attacher les métadonnées.
- **Leçons utiles** : `3.4/extraire-pdf`, `3.4/ocr`, `3.4/tableaux`, `3.4/nettoyer-extraction`, `3.4/chunking-structure`, `3.4/metadonnees-docs`
- **Vérification** : tests automatiques

### 3. Construire la recherche

- **Situation** : les travailleurs écrivent « on m'a chassé sans rien me payer », les textes disent « licenciement sans indemnité ».
- **Livrable** : une recherche hybride (mots-clés et vecteurs) avec reranking, mesurée sur le jeu de requêtes, et une comparaison avec la recherche vectorielle seule.
- **Critères de réussite** :
  - Le rappel@5 atteint la cible sur le jeu de requêtes.
  - Le gain de l'hybride et du reranking est mesuré, pas supposé.
  - Les requêtes ratées sont analysées par type.
- **Étapes conseillées** :
  1. Indexer les morceaux en local.
  2. Mesurer la recherche vectorielle seule.
  3. Ajouter BM25, la fusion de rangs, puis le reranking, en mesurant chaque étape.
- **Leçons utiles** : `3.3/hybride`, `3.3/bm25`, `3.3/fusion-rangs`, `3.4/reranking`, `3.3/metriques-recherche`, `3.3/requetes-vocabulaire-local`
- **Vérification** : tests automatiques

### 4. Répondre en citant

- **Situation** : un agent d'accueil doit pouvoir vérifier chaque réponse en ouvrant l'article cité.
- **Livrable** : la génération de réponses avec citations structurées (document, article), le refus des questions hors domaine et le « je ne sais pas » quand les passages ne répondent pas.
- **Critères de réussite** :
  - Chaque affirmation de la réponse s'appuie sur un passage cité.
  - Les 10 questions sans réponse reçoivent un « je ne sais pas » qui oriente vers un agent.
  - La réponse est dans la langue de la question.
- **Étapes conseillées** :
  1. Écrire le prompt du RAG et le format de sortie avec citations.
  2. Vérifier automatiquement que chaque citation existe.
  3. Régler le seuil du « je ne sais pas » sur le jeu de test.
- **Leçons utiles** : `3.4/prompt-rag`, `3.4/citations`, `3.4/je-ne-sais-pas`, `3.4/hors-sujet`, `3.4/verifier-fondement`, `3.4/repondre-langue-question`
- **Vérification** : tests automatiques

### 5. Suivre les textes qui changent

- **Situation** : un nouveau décret remplace trois articles sur les congés. Dès sa publication, l'assistant ne doit plus citer les anciens.
- **Livrable** : une mise à jour incrémentale de l'index qui détecte les documents nouveaux ou modifiés, retire les passages abrogés et garde une version de chaque index.
- **Critères de réussite** :
  - Après la mise à jour, aucune réponse ne cite un article abrogé.
  - Seuls les documents modifiés sont réindexés.
  - On peut revenir à la version précédente de l'index.
- **Étapes conseillées** :
  1. Détecter les changements par empreinte des documents.
  2. Réindexer seulement ce qui a changé.
  3. Versionner l'index et tester les questions touchées par le décret.
- **Changement imprévu** : le décret arrive alors que l'assistant est en service ; la mise à jour ne doit pas l'interrompre.
- **Leçons utiles** : `3.4/fraicheur-index`, `4.5/detecter-changements`, `4.5/reindexer`, `4.5/versionner-index`, `4.5/idempotence`
- **Vérification** : tests automatiques

### 6. Évaluer avec rigueur

- **Situation** : tu hésites entre deux tailles de morceaux et deux modèles. Il faut décider sur des preuves.
- **Livrable** : une évaluation automatisée par affirmation, un juge calibré sur des annotations humaines, et une ablation qui montre l'apport de chaque composant (hybride, reranking, vérification des citations).
- **Critères de réussite** :
  - Le juge est d'accord avec les annotations humaines au niveau requis, mesuré.
  - L'apport de chaque composant est mesuré par ablation.
  - Les différences annoncées sont accompagnées de leur intervalle de confiance.
- **Étapes conseillées** :
  1. Annoter 30 réponses à la main.
  2. Calibrer le juge sur ces annotations.
  3. Lancer l'ablation et lire les résultats avec prudence.
- **Leçons utiles** : `3.5/affirmations`, `3.5/calibrer-juge`, `3.5/ablation`, `3.5/significativite`, `3.5/ragchecker`
- **Vérification** : tests automatiques et grille

### 7. Protéger le système

- **Situation** : un document déposé contient une consigne cachée, et des questions contiennent des noms et des numéros de téléphone.
- **Livrable** : des défenses contre l'injection indirecte par les documents, et un traitement des données personnelles (masquage dans les journaux, durée de conservation).
- **Critères de réussite** :
  - Les documents piégés fournis ne changent pas le comportement de l'assistant.
  - Aucune donnée personnelle n'apparaît en clair dans les journaux.
  - Les choix de conservation sont écrits et justifiés.
- **Étapes conseillées** :
  1. Construire un jeu de documents piégés.
  2. Séparer clairement consignes et contenus, et filtrer.
  3. Masquer les données personnelles avant journalisation.
- **Leçons utiles** : `3.4/documents-pieges`, `5.1/injection-indirecte`, `5.1/defenses-injection`, `5.1/donnees-perso-llm`, `5.3/principes-protection`
- **Vérification** : tests automatiques

### 8. Mettre en service et présenter

- **Situation** : l'inspection veut l'essayer à l'accueil pendant un mois.
- **Livrable** : l'assistant derrière une API, dans un conteneur, avec le suivi des appels (qualité, latence, coût), et un rapport d'une page pour la cheffe de service.
- **Critères de réussite** :
  - Le service démarre avec une seule commande et répond sur un PC de 8 Go.
  - Chaque appel est tracé, sans donnée personnelle.
  - Le rapport donne les indicateurs, les limites et les conditions d'usage.
- **Étapes conseillées** :
  1. Exposer l'assistant par une API FastAPI.
  2. Le mettre dans un conteneur avec docker-compose.
  3. Ajouter le suivi des appels.
  4. Rédiger le rapport.
- **Leçons utiles** : `4.2/servir-llm`, `4.3/docker-compose`, `4.7/suivi-llm`, `4.7/logs-structures`, `6.2/resultats-chiffres`
- **Vérification** : tests automatiques et grille

## Validation

| Contrôle | Comment | Règle |
| --- | --- | --- |
| Tests des missions | `python outils/check.py` sur chaque mission | Tous les tests passent |
| Indicateurs de réussite | Évaluation de la mission 6, relancée par une commande | Cibles atteintes, ou écart expliqué |
| Correction par l'agent IA | `GRILLE.md` du projet | Au moins 14/20 |
| Examen oral avec l'IA | 5 à 10 questions sur ton code et tes choix | Au moins 70 % de réponses jugées correctes |

## Portfolio

- Un README en anglais : le problème, la démonstration, l'architecture en un schéma, les résultats chiffrés.
- Le rapport d'évaluation : jeu de test, ablation, juge calibré, erreurs restantes.
- La procédure de mise à jour des textes, avec sa preuve (avant et après le décret).
- Une vidéo de démonstration de 3 minutes au plus.
- Le badge de la CI au vert et le rapport de l'agent correcteur.

## Données et ressources matérielles

- **Données fournies** : un corpus de textes officiels publics (code du travail, décrets, barèmes), 100 questions d'accueil anonymisées, un décret de remplacement fictif, des documents piégés.
- **Modèle** : un petit modèle local (Ollama) et un modèle d'embeddings multilingue local.
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
