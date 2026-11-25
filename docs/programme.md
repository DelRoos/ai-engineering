# Programme de formation AI Engineer (open source)

Nov 24, 2026 · @Deutsch Exam

## Vision et objectifs

Le programme est **un seul parcours, du débutant complet à l'expert**, en 7 étapes (0 à 6), sans durée imposée : c'est la connaissance qui fixe le contenu de chaque module, pas un calendrier. Chacun le suit dans l'ordre et saute les modules qu'il maîtrise déjà. À la sortie, l'apprenant sait concevoir, déployer et maintenir des solutions d'IA en production. Il le prouve par 6 projets de portfolio publics (étapes 1 à 6) dont les tests automatiques passent, chacun validé par un examen oral mené par une IA.

**Modèle de la formation : 100 % en ligne et autonome.** L'apprenant clone le dépôt GitHub de la formation et suit tout le parcours seul, sur son propre ordinateur, même d'entrée de gamme. Il n'y a ni mentor, ni cohorte, ni partenaire, ni frais d'inscription. Les QCM sont corrigés automatiquement. Les projets sont validés par des tests automatiques, des contrôles de qualité et, en dernier recours, par un agent de code IA qui suit une grille fournie.

**Profil de sortie.** À la fin, l'apprenant sait :

- transformer un problème métier en solution d'IA mesurable (données, modèle, métrique de succès, coût), ou décider qu'il n'a pas besoin d'IA ;
- collecter, annoter et contrôler des données de terrain, y compris en langues africaines peu dotées ;
- entraîner, évaluer et optimiser des modèles de ML et de deep learning ;
- construire des applications sur les LLM : RAG, agents, outils, fine-tuning, évaluation, dans le cloud comme en local ;
- déployer en production : API, conteneurs, cloud, pipelines de données, monitoring, maîtrise des coûts et de la latence ;
- livrer une IA sûre et responsable : sécurité, biais, vie privée, réglementation (AI Act européen, lois nationales sur les données) ;
- utiliser les assistants de code IA (Claude Code, Copilot, Cursor) avec méthode, en vérifiant tout ce qu'ils produisent ;
- travailler comme un ingénieur international : Git, tickets, auto-revue de code, contribution open source, documentation et communication technique en anglais.

**Public cible.** Tout le monde suit le même parcours, du débutant motivé (bac ou équivalent, aucune expérience en code) au développeur ou à l'étudiant en informatique.

**Sauter un module.** Celui qui maîtrise déjà ce qu'enseigne un module passe son QCM (80 % de bonnes réponses) et son exercice clé (tous les tests au vert), sur son PC. S'ils sont réussis, il passe au module suivant ; sinon, il suit le module. Les 6 projets de portfolio (étapes 1 à 6) ne se sautent pas : ce sont les preuves de niveau. Le projet 0 peut être sauté si tous les modules de l'étape 0 l'ont été.

**Principes pédagogiques.**

1. **Projet d'abord.** Chaque étape se termine par un projet réel, validé par des tests. Les QCM servent seulement à vérifier la compréhension des cours.
2. **70 / 20 / 10.** 70 % de pratique (code, projets), 20 % de théorie ciblée, 10 % d'auto-évaluation (QCM, examen oral avec l'IA).
3. **Ancrage local, standard mondial.** Les projets traitent des problèmes réels d'Afrique et du monde francophone (agriculture, santé, mobile money, langues locales), avec les outils et les exigences de qualité de l'industrie internationale.
4. **Bilingue, avec des paliers mesurés.** Cours en français, documentation et examens oraux de plus en plus en anglais (paliers détaillés dans la section Évaluation).
5. **Conçu pour un PC d'entrée de gamme.** Chaque projet tourne sur une machine sans carte graphique avec 8 Go de RAM. Colab et Kaggle restent une option, jamais une obligation.
6. **Coût zéro par défaut.** Outils gratuits et modèles locaux partout. Quand une API payante apporte vraiment quelque chose, l'énoncé recommande la moins chère et propose toujours une alternative locale gratuite.
7. **Sécurité dès la conception.** Chaque projet passe un point de contrôle sécurité et éthique automatisé (détail en étape 5), pas seulement à la fin.
8. **L'IA comme outil de travail.** Les assistants de code sont autorisés et enseignés dès la étape 1. En contrepartie, chaque projet passe un examen oral avec l'IA pour prouver qu'il est compris.
9. **Open source.** Contenu sous licence CC BY-SA 4.0, code sous licence MIT, contributions ouvertes à la communauté.

## Vue d'ensemble

Le parcours compte 7 étapes et 43 modules, avec deux pauses de consolidation. Chaque étape se termine par un projet et un examen oral avec l'IA. Il faut valider les deux pour passer à l'étape suivante.

| Étape | Thème | Modules | Projet |
| --- | --- | --- | --- |
| Étape 0 | Fondations : préparer son PC, Python, Git, Linux, maths, données | 6 | Projet 0 : outil en ligne de commande qui analyse un jeu de données public local |
| Étape 1 | Développement assisté par IA, données terrain, machine learning classique | 8 | Modèle de prédiction entraîné en partie sur des données collectées par l'apprenant |
| Étape 2 | Deep learning | 5 | Classifieur d'images de maladies des plantes, optimisé pour mobile |
| Consolidation | Rattrapage, révisions, projet libre | — | — |
| Étape 3 | LLM, RAG, agents, IA locale, langues africaines | 10 | Assistant RAG sur des documents officiels + agent avec outils, utilisable hors ligne |
| Étape 4 | Ingénierie de production et pipelines de données | 9 | Mise en production du projet 3 |
| Consolidation | Rattrapage, révisions, projet libre | — | — |
| Étape 5 | Sécurité, éthique, IA responsable | 3 | Audit de sécurité et de biais d'un système existant |
| Étape 6 | Capstone, produit, entrepreneuriat et carrière | 2 + capstone | Solution complète sur un cas réaliste au choix, présentée en anglais en vidéo |

**Rythme** : aucune durée imposée, ni par module ni par étape. Chacun avance à sa vitesse et passe à la suite quand ses exercices, son QCM et son projet sont validés. L'effort suit la règle 70 / 20 / 10 : surtout de la pratique, de la théorie ciblée, un peu d'auto-évaluation.

## Fonctionnement : apprendre seul sur son PC

Tout le parcours tient dans un dépôt GitHub. L'apprenant le clone une fois, puis travaille en local ; une connexion n'est nécessaire que pour télécharger les mises à jour, les jeux de données et les modèles.

**Matériel minimum.**

| Élément | Minimum | Confortable |
| --- | --- | --- |
| Processeur | 64 bits, 4 cœurs | 8 cœurs |
| Mémoire vive | 8 Go (4 Go suffisent pour les étapes 0 et 1) | 16 Go |
| Disque libre | 40 Go | 100 Go, en SSD |
| Carte graphique | Aucune | Aucune nécessaire |
| Système | Linux, Windows (avec WSL) ou macOS | Linux |

**Structure du dépôt.**

```
formation-ai-engineer/
├── README.md               # point de départ et installation
├── 00-fondations/
│   └── 01-python/
│       ├── cours.mdx        # le cours
│       ├── qcm.yaml         # questions corrigées automatiquement
│       ├── exercices/       # exercices avec leurs tests
│       └── projet/
│           ├── ENONCE.md    # cahier des charges
│           ├── starter/     # code de départ
│           ├── tests/       # tests de validation
│           └── GRILLE.md    # grille pour l'agent correcteur IA
├── 01-ml/ ... 06-capstone/
└── outils/
    ├── qcm.py               # passer un QCM dans le terminal
    ├── check.py             # valider un exercice ou un projet
    ├── progression.py       # voir son avancement
    └── correcteur-ia/       # consignes de l'agent correcteur et de l'examen oral
```

**Comment un projet est validé.** Quatre étapes, dans l'ordre :

1. **Tests fonctionnels** : `python outils/check.py <projet>` lance les tests du projet. Tous doivent passer.
2. **Contrôles de qualité** : style et lint (ruff), couverture de tests minimale, absence de secrets dans le code, documentation présente, et contraintes de ressources (temps d'exécution et mémoire maximum, pour rester compatible avec un PC modeste).
3. **Intégration continue** : l'apprenant pousse son code sur son propre dépôt GitHub. GitHub Actions relance gratuitement les mêmes vérifications et affiche un badge vert, preuve publique de réussite.
4. **Correction et examen oral par l'IA** : un agent de code lit le projet avec `GRILLE.md`, donne une note et des conseils, puis pose 5 à 10 questions sur le code. L'apprenant doit répondre correctement pour valider. Cette étape vérifie ce que les tests ne voient pas : la lisibilité, les choix techniques, et la compréhension réelle du code.

Les tests sont publics, comme tout le dépôt. Il est donc possible de tricher en écrivant du code qui contourne les tests. L'examen oral avec l'IA est là pour ça, et l'apprenant qui triche ne trompe que lui-même.

**Agent correcteur et coûts d'IA.** Deux options sont documentées pour chaque projet :

- **Gratuite** : un agent de code open source (par exemple Aider) branché sur un modèle local via Ollama. La correction est plus lente et moins fine, mais ne coûte rien.
- **À bas coût** : le même agent branché sur l'API la moins chère du moment. La liste des API recommandées et de leurs prix est revue chaque trimestre dans le dépôt, car les tarifs changent vite. Chaque énoncé indique le budget maximum attendu.

## Étape 0 — Fondations

Objectif : amener un débutant complet à écrire du code Python propre, versionné et testé, avec les maths dont l'IA a vraiment besoin. Cette étape prend le temps qu'il faut : aller trop vite sur les bases est la première cause d'abandon dans les formations. Ceux qui maîtrisent déjà certains modules les sautent après avoir réussi leur QCM et leur exercice clé.

| Module | Contenu | Exercice clé |
| --- | --- | --- |
| 0.0 Préparer son PC | Installer Python, Git et VS Code (avec WSL sous Windows), cloner le dépôt de la formation, vérifier que tout fonctionne | Vérifier son installation : chaque outil répond avec la version attendue et le dépôt est cloné |
| 0.1 Python pour l'ingénieur | Types, fonctions, classes, modules, fichiers, exceptions, environnements virtuels, typage, style PEP 8 | 84 exercices progressifs corrigés automatiquement |
| 0.2 Outils du développeur | Terminal Linux, Git et GitHub (branches, pull requests), VS Code, Markdown | Forker le dépôt de la formation, y pousser ses exercices et obtenir un premier badge vert |
| 0.3 Code de qualité | Tests avec pytest, débogage, lisibilité, documentation, notions d'algorithmique (complexité, listes, dictionnaires) | Couvrir un module existant à 80 % de tests |
| 0.4 Maths pour l'IA | Algèbre linéaire (vecteurs, matrices, produit scalaire), dérivées et gradient, probabilités et statistiques (moyenne, variance, lois, théorème de Bayes) — toujours avec NumPy | Coder une descente de gradient à la main |
| 0.5 Données et API | JSON, CSV, appels HTTP, SQL de base (SELECT, JOIN, GROUP BY) | Récupérer des données d'une API publique et les stocker en SQLite |
| Projet 0 | Réalisation du projet 0 et examen oral avec l'IA | — |

Les assistants de code IA sont déconseillés pendant l'étape 0 : le débutant doit d'abord apprendre à écrire et à lire du code seul. Ils sont enseignés dès l'étape 1.

**Projet 0 — Analyseur de données en ligne de commande.** Un outil Python qui télécharge un jeu de données public (météo, prix du marché, population), le nettoie et produit un rapport de statistiques. Critères : dépôt GitHub propre, README clair, tests automatisés, installation en une commande.

**Ressources gratuites recommandées** : la documentation officielle de Python, le cours « Mathematics for Machine Learning » (livre gratuit de Deisenroth et al.), les vidéos d'algèbre linéaire de 3Blue1Brown.

## Étape 1 — Développement assisté par IA, données et machine learning classique

Objectif : passer de données brutes à un modèle évalué honnêtement, et savoir expliquer ses résultats à un décideur non technique.

| Module | Contenu | Exercice clé |
| --- | --- | --- |
| 1.1 Développement assisté par IA | Assistants de code (Claude Code, GitHub Copilot, Cursor) et options gratuites ou locales (offre gratuite de Copilot, Aider ou Continue avec un modèle local), bien décrire une tâche, relire et tester le code généré, repérer les erreurs et les failles, limites et risques (licences, secrets, dépendance) | Réaliser la même fonctionnalité avec et sans assistant, puis comparer temps, qualité et bugs |
| 1.2 Manipulation de données | pandas, nettoyage, valeurs manquantes, jointures, agrégations, visualisation (matplotlib, seaborn) | Analyse exploratoire complète d'un jeu de données réel et sale |
| 1.3 Données terrain : collecte et annotation | Concevoir une collecte (formulaires mobiles avec KoboToolbox ou ODK), consentement et anonymisation, annotation (Label Studio), accord entre annotateurs, contrôle qualité, petits jeux de données, données synthétiques | Collecter et annoter seul au moins 200 exemples réels (entourage, marché, sources publiques) avec un protocole documenté |
| 1.4 Fondements du ML | Apprentissage supervisé ou non, surapprentissage, biais/variance, découpage train/validation/test, fuite de données | Repérer et corriger 5 erreurs dans un notebook piégé |
| 1.5 Algorithmes essentiels | Régression linéaire et logistique, arbres, random forest, gradient boosting (XGBoost, LightGBM), k-means, PCA, introduction aux systèmes de recommandation | Régression linéaire codée de zéro, puis avec scikit-learn |
| 1.6 Évaluation et optimisation | Métriques (précision, rappel, F1, AUC, RMSE), validation croisée, recherche d'hyperparamètres, classes déséquilibrées | Choisir et justifier la bonne métrique pour 4 cas métier |
| 1.7 Feature engineering, pipelines et séries temporelles | Encodage, normalisation, pipelines scikit-learn, séries temporelles (saisonnalité, prévision, validation dans le temps), interprétabilité (SHAP) | Pipeline reproductible de bout en bout |
| 1.8 Communiquer les résultats | Rapport d'analyse, tableau de bord simple (Streamlit), présentation à un public non technique | Vidéo de présentation de 5 minutes du projet 1 |

**Projet 1 — Modèle de prédiction à impact local.** Au choix : prédire les prix de produits agricoles sur un marché, ou évaluer le risque de crédit pour la microfinance. Une partie des données doit être collectée et annotée par l'apprenant (module 1.3). Livrables : protocole de collecte, notebook d'analyse, pipeline reproductible, application Streamlit en ligne (hébergement gratuit), rapport de 2 pages. Critères : métrique justifiée, absence de fuite de données, comparaison avec un modèle de référence simple, point de contrôle sécurité et éthique validé.

**Ressources gratuites recommandées** : la documentation et les tutoriels de scikit-learn, les cours gratuits de Kaggle Learn, le livre gratuit « An Introduction to Statistical Learning » (version Python).

## Étape 2 — Deep learning

Objectif : comprendre les réseaux de neurones de l'intérieur et savoir entraîner, adapter et alléger un modèle avec PyTorch, la référence de l'industrie et de la recherche.

| Module | Contenu | Exercice clé |
| --- | --- | --- |
| 2.1 Réseaux de neurones de zéro | Perceptron, couches denses, fonctions d'activation, rétropropagation, fonctions de perte | Mini-réseau en NumPy pur, sans bibliothèque |
| 2.2 PyTorch | Tenseurs, autograd, Dataset et DataLoader, boucle d'entraînement, entraînement efficace sur processeur, GPU gratuit de Colab ou Kaggle en option | Reproduire 2.1 en PyTorch et comparer |
| 2.3 Vision par ordinateur | CNN, augmentation de données, transfer learning avec des modèles légers (MobileNet, EfficientNet-B0), notions de détection d'objets | Fine-tuning d'un modèle pré-entraîné sur 500 images, en moins de 30 minutes sur processeur |
| 2.4 Séquences et Transformers | Embeddings, mécanisme d'attention, architecture Transformer, tokenisation, bibliothèque Hugging Face | Coder un mini-Transformer qui génère du texte (à la manière de nanoGPT), entraîné sur processeur |
| 2.5 Entraîner efficacement | Régularisation, taux d'apprentissage, suivi d'expériences en local (MLflow), quantification, distillation, export ONNX | Réduire la taille d'un modèle de 4 fois en perdant moins de 2 points de précision |

**Projet 2 — Détection de maladies des plantes sur mobile.** Un classifieur d'images de feuilles (manioc, maïs, cacao) entraîné par transfer learning sur processeur en moins d'une heure, puis quantifié pour tourner hors ligne sur un smartphone d'entrée de gamme. Livrables : modèle publié sur Hugging Face, démo en ligne, fiche du modèle (model card). Critères : précision mesurée sur un jeu de test séparé, taille et temps d'inférence documentés.

**Ressources gratuites recommandées** : le cours fast.ai « Practical Deep Learning for Coders », la série « Neural Networks: Zero to Hero » d'Andrej Karpathy, le cours Hugging Face, le livre gratuit « Dive into Deep Learning ».

## Étape 3 — LLM, RAG, agents, IA locale et langues africaines

Objectif : construire des applications fiables sur les grands modèles de langage. C'est le cœur du métier d'AI engineer aujourd'hui, donc l'étape la plus longue du parcours. Tout se fait par défaut avec de petits modèles locaux (1 à 3 milliards de paramètres, quantifiés en 4 bits, via Ollama), qui tournent sur un PC de 8 Go de RAM. Les API payantes restent optionnelles.

| Module | Contenu | Exercice clé |
| --- | --- | --- |
| 3.1 Comprendre les LLM | Pré-entraînement, instruction tuning, RLHF, fenêtre de contexte, tokens, température, coûts ; modèles fermés (API) et ouverts (Llama, Mistral, Qwen, Gemma) ; architectures modernes (Mixture of Experts, attention latente), calcul à l'inférence (raisonnement long, meilleur de N, vérificateurs) comparé à budget égal | Comparer 3 petits modèles locaux (et, en option, une API à bas coût) sur 20 tâches : qualité, coût, latence |
| 3.2 Prompt engineering et sorties structurées | Instructions claires, exemples (few-shot), raisonnement étape par étape, gestion du contexte, sorties JSON validées (Pydantic), function calling ; context engineering (composer, ordonner, compacter le contexte), génération contrainte par grammaire, optimisation automatique des prompts (DSPy, MIPROv2, GEPA) | Extraire des données structurées de 100 factures ou reçus |
| 3.3 Embeddings et recherche vectorielle | Embeddings, similarité, bases vectorielles légères en local (Chroma, sqlite-vec, Qdrant), notions de pgvector, recherche hybride (mots-clés + vecteurs) ; représentations creuses et multi-vecteurs (SPLADE, ColBERTv2, BGE-M3), vecteurs Matryoshka et quantifiés, entraînement d'un retriever avec négatifs difficiles | Moteur de recherche sémantique sur 1 000 documents |
| 3.4 RAG en profondeur | Découpage des documents, reranking, citations des sources, réponses « je ne sais pas », RAG multilingue, gestion des PDF et des tableaux ; familles d'architectures (RAPTOR, late chunking, Self-RAG, CRAG, multi-sauts, ColPali), GraphRAG en profondeur, choix d'architecture par la mesure | Assistant qui cite ses sources et refuse de répondre hors sujet |
| 3.5 Évaluation des systèmes LLM | Jeux de test, métriques (fidélité, pertinence), LLM-as-a-judge, évaluation humaine, tests de non-régression ; diagnostic scientifique : évaluation par affirmation, ablation, tests contrefactuels, comparaison à budget fixé, contamination, méta-évaluation | Créer un jeu d'évaluation de 50 questions et mesurer 3 variantes du RAG |
| 3.6 Agents et outils | Boucle agent (raisonner, agir, observer), appels d'outils, MCP (Model Context Protocol), mémoire, planification, multi-agents, garde-fous, évaluation des agents (taux de réussite des tâches, analyse des trajectoires) ; harness pour les tâches longues (état durable, reprise, points de contrôle), outils en grand nombre (découverte à la demande, orchestration par code), évolution de MCP, environnements simulés (τ²-bench) | Agent qui consulte une API météo et une base de données pour conseiller un agriculteur, évalué sur 30 scénarios |
| 3.7 Fine-tuning | Quand fine-tuner (ou pas), LoRA et QLoRA, préparation des données, évaluation avant et après ; SFT et pré-entraînement continu, variantes de LoRA (DoRA), préférences (DPO), récompenses vérifiables (GRPO, DAPO, Dr. GRPO), distillation on-policy, choix de l'intervention | Fine-tuner avec LoRA un très petit modèle ouvert (environ 0,5 milliard de paramètres) pour un domaine précis, sur processeur ou sur Colab gratuit |
| 3.8 IA en local et sur appareil | Choisir un modèle selon le matériel (CPU, petit GPU, téléphone), formats et quantification (GGUF, 4 et 8 bits) et leur impact sur la qualité, Ollama, llama.cpp, LM Studio, notions de vLLM pour servir plusieurs utilisateurs sur un serveur, RAG 100 % local, edge (Raspberry Pi, mobile), comparatif local contre cloud ; mécanismes de l'inférence (prefill et decode, cache KV, prefix caching, batching continu, décodage spéculatif), moteurs de service et mesure sous charge | Faire tourner l'assistant RAG entièrement hors ligne sur un portable ordinaire |
| 3.9 Langues africaines peu dotées | Pourquoi les modèles échouent sur ces langues, tokenisation, jeux de données existants (Masakhane, AfriSenti, MasakhaNER), traduction, reconnaissance vocale, fine-tuning avec peu de données, évaluation avec des locuteurs natifs ; évaluation multitâche (AfroBench), accents et alternance codique à l'oral (AfriVox, AfriSwitch), adaptation d'un modèle à une langue (tokenizer, transfert, données synthétiques), licences des données | Améliorer et mesurer un modèle sur une langue locale (traduction, classification ou transcription) |
| 3.10 Multimodal, voix et génération d'images | Vision + texte, reconnaissance vocale (Whisper), synthèse vocale, modèles de diffusion pour la génération d'images, cas d'usage pour les populations peu alphabétisées ; vidéo et recherche visuelle dans les documents, architectures vocales (cascade ou modèle intégré, streaming, tours de parole), transformers de diffusion et rectified flow | Assistant vocal simple en français ou en langue locale |

**Niveau expert.** Chaque module de l'étape 3 se termine aussi par une épreuve de niveau expert : une tâche ouverte qui oblige à diagnostiquer, comparer et choisir. Les méthodes trop coûteuses pour un PC de 8 Go s'étudient par une expérience réduite et la lecture critique des résultats publiés : la machine fixe le format des expériences, pas le plafond des connaissances.

**Projet 3 — Assistant intelligent sur des documents réels.** Un assistant RAG qui répond aux questions sur des textes officiels (code du travail, procédures administratives, guides de santé) en citant ses sources, complété par un agent capable d'utiliser au moins 2 outils. Il fonctionne entièrement en local par défaut, avec en option un mode API à bas coût. Livrables : application web, jeu d'évaluation publié, rapport chiffré comparant les deux modes (qualité, coût par requête, latence). Critères : taux de réponses fidèles mesuré, gestion des questions hors sujet, point de contrôle sécurité validé (injection de prompt testée).

**Ressources gratuites recommandées** : le cours LLM de Hugging Face, les guides de prompt engineering publiés par les fournisseurs de modèles (Anthropic, OpenAI, Google), les cours courts de DeepLearning.AI, la documentation de MCP.

## Étape 4 — Ingénierie de production et données

Objectif : faire tourner une solution d'IA de façon fiable, mesurable et rentable chez de vrais utilisateurs. C'est ce qui distingue un AI engineer d'un data scientist de notebook.

| Module | Contenu | Exercice clé |
| --- | --- | --- |
| 4.1 Travailler comme en entreprise | Kanban personnel avec GitHub Issues et Projects, découpage et estimation des tâches, commits et pull requests propres, auto-revue de code, documentation écrite en anglais, contribuer à un projet open source existant | Découper le projet 4 en tickets, puis ouvrir une issue ou une pull request utile sur un projet open source |
| 4.2 Construire une API | FastAPI, validation, authentification, async, streaming des réponses LLM, documentation automatique | Exposer le modèle du projet 2 en API |
| 4.3 Conteneurs | Docker, images légères, docker-compose, gestion des secrets et variables d'environnement | Lancer toute l'application en une commande |
| 4.4 Déploiement cloud | Offres gratuites ou peu chères (Render, Fly.io, Hugging Face Spaces), notions AWS / GCP / Azure, GPU à la demande, serverless | Déployer le même service sur 2 plateformes et comparer les coûts |
| 4.5 Pipelines de données | ETL et ELT, orchestration (Prefect, Dagster ou Airflow), contrôle de qualité des données, formats (Parquet), DuckDB, notions de traitement distribué (Spark) | Pipeline qui met à jour chaque nuit la base documentaire du RAG |
| 4.6 CI/CD et qualité | GitHub Actions, tests automatiques, lint, évaluations LLM dans la CI, versionnage des modèles et des données (DVC) | Pipeline qui bloque un déploiement si le score d'évaluation baisse |
| 4.7 Observabilité | Logs, métriques, traces, suivi des appels LLM (Langfuse ou équivalent open source), dérive des données, alertes | Tableau de bord : latence, erreurs, coût par jour |
| 4.8 Performance et coûts | Cache, batching, routage entre modèles (local ou cloud selon la tâche), limites de débit, mode dégradé, fonctionnement hors ligne et faible bande passante | Diviser par 2 le coût par requête sans perte de qualité |
| 4.9 Architecture de systèmes d'IA | Conception de systèmes (system design) appliquée à l'IA : files de tâches, bases de données, montée en charge, compromis | Dossier d'architecture d'un système pour 100 000 utilisateurs |

**Projet 4 — Mise en production du projet 3.** L'apprenant fait de son assistant du projet 3 un vrai service : API conteneurisée, déployée sur une offre gratuite, alimentée par un pipeline de données, avec CI/CD, évaluations automatiques, monitoring et budget maîtrisé. Critères : URL publique stable, temps de réponse et coût mensuel documentés (objectif : 0 €), procédure de retour arrière testée, travail organisé en tickets visibles sur GitHub, point de contrôle sécurité validé.

**Ressources gratuites recommandées** : le cours « Made With ML », le cours MLOps Zoomcamp de DataTalks.Club, la documentation de FastAPI et de Docker, le livre « Designing Machine Learning Systems » de Chip Huyen (payant, à consulter en bibliothèque).

## Étape 5 — Sécurité, éthique et IA responsable

Objectif : livrer des systèmes dignes de confiance. La sécurité et l'éthique sont traitées dès la étape 1, par un point de contrôle dans chaque projet (tableau ci-dessous). Cette étape approfondit le sujet et se conclut par un audit d'un système existant.

| Module | Contenu | Exercice clé |
| --- | --- | --- |
| 5.1 Sécurité des applications LLM | OWASP Top 10 pour les applications LLM : injection de prompt, fuite de données, outils dangereux, permissions minimales, red teaming défensif | Durcir l'agent du projet 3 et documenter chaque protection |
| 5.2 Biais, équité, fiabilité | Mesurer les biais (genre, langue, région), hallucinations, explicabilité, supervision humaine | Mesurer les écarts de performance d'un modèle entre groupes |
| 5.3 Données, droit et gouvernance | Loi camerounaise n° 2024/017 du 23 décembre 2024 sur la protection des données à caractère personnel (en vigueur depuis le 23 juin 2026), lois équivalentes des autres pays visés, RGPD, AI Act, transferts de données hors du pays, licences des modèles et des données, documentation (model cards, datasheets) | Rédiger la fiche de conformité d'un projet |

**Points de contrôle sécurité et éthique dans chaque étape.** Un projet n'est pas validé sans son point de contrôle.

| Étape | Point de contrôle |
| --- | --- |
| 1 | Consentement et anonymisation des données collectées, aucun secret dans le dépôt Git, revue du code généré par l'assistant |
| 2 | Performance mesurée séparément par région ou type de culture, limites du modèle écrites dans la model card |
| 3 | Tests d'injection de prompt, refus des questions hors périmètre, permissions minimales des outils de l'agent |
| 4 | Gestion des secrets, authentification de l'API, journalisation sans données personnelles, localisation des données conforme à la loi |
| 6 | Fiche de conformité complète publiée avec le capstone |

**Projet 5 — Audit d'un système d'IA.** L'apprenant audite une application LLM open source choisie dans une liste fournie par la formation : tests d'attaque défensifs en local, mesure des biais, revue de la gestion des données. Livrable : rapport d'audit avec risques classés par gravité et correctifs proposés. Il corrige ensuite les 3 risques les plus graves dans sa propre copie (fork) et propose au moins un correctif au projet d'origine par une issue ou une pull request. Des tests automatiques vérifient que les attaques fournies échouent après correction.

**Ressources gratuites recommandées** : le guide OWASP Top 10 for LLM Applications, le texte officiel de l'AI Act sur EUR-Lex, les modèles de model cards de Hugging Face.

## Étape 6 — Capstone, produit, entrepreneuriat et carrière

Objectif : prouver qu'on sait livrer seul une solution complète, de bout en bout et en anglais, puis décrocher un premier poste ou une première mission.

**Projet capstone.** L'apprenant choisit un sujet dans une liste de cas réalistes fournis (avec données, contraintes et critères de succès), ou propose son propre problème, par exemple dans son entourage ou son quartier.

1. **Cadrage** : fiche de cadrage selon le modèle fourni (problème, utilisateurs, métriques de succès, budget, risques), vérifiée par l'agent IA.
2. **Prototype** : première version testée par au moins 3 personnes de l'entourage, avec leurs retours notés.
3. **Industrialisation** : déploiement, évaluations, monitoring, sécurité, documentation.
4. **Livraison** : vidéo de démo de 10 minutes en anglais, dépôt public complet, retour d'expérience écrit.

Critères : tous les tests et contrôles automatiques passent, les métriques de succès sont mesurées, le service tourne sur un PC d'entrée de gamme ou une offre d'hébergement gratuite, et l'examen oral final avec l'IA est réussi.

**Produit et entrepreneuriat.** Beaucoup de diplômés créeront leur propre activité. Ce module leur donne les bases :

- choisir un problème qui vaut la peine et savoir dire « ici, pas besoin d'IA » ;
- concevoir l'expérience utilisateur d'un produit d'IA (gestion des erreurs, confiance, explications) ;
- calculer le coût de revient par utilisateur et fixer un prix ;
- estimer le retour sur investissement pour un client ;
- connaître les financements (incubateurs, subventions, concours) et les modèles économiques (SaaS, service, licence).

Exercice : un dossier d'une page (problème, solution, coûts, prix, marché) pour transformer le capstone en produit.

**Carrière (en fil rouge dès l'étape 3).**

- **Portfolio** : un site personnel et un profil GitHub qui présentent tous les projets avec résultats chiffrés.
- **Anglais technique** : rédaction de README et de rapports, vidéos de présentation, simulations d'entretien en anglais avec l'agent IA.
- **Entretiens techniques** : exercices de code, conception de systèmes d'IA, questions ML et LLM, entretiens comportementaux (méthode STAR).
- **Visibilité** : articles de blog techniques, contributions à des projets open source reconnus, compétitions Kaggle ou Zindi.
- **Stratégies d'emploi** : travail à distance pour des entreprises étrangères, freelance international, création de start-up, postes locaux.
- **Réseau** : GitHub Discussions de la formation, communautés internationales en ligne (Hugging Face, Masakhane pour les langues africaines, Deep Learning Indaba).

## Les grands projets

Après les sept étapes, une grande section de **projets réels**, rangés par **familles**. Le but : donner les prérequis des projets qu'un AI engineer rencontre dans sa carrière, et construire un portfolio qui convainc. Chaque projet est assez réaliste pour qu'une entreprise l'achète et l'utilise : un client crédible, ses contraintes réelles, un modèle économique, des critères mesurables et un imprévu en cours de route.

Une famille se lit comme un module : **chaque projet est un chapitre, chaque étape d'expert une leçon**. Dans une même famille, les projets posent des problèmes différents qui se résolvent différemment ; un tableau comparatif apprend à choisir l'approche. Les fiches sont dans `07-projets/`.

| Famille | Projets | Ce qu'elle couvre |
| --- | --- | --- |
| 7.1 Assistants documentaires | Assistant juridique qui cite l'article · Archives scannées et tableaux · Base de connaissances d'entreprise · Questions globales sur 500 rapports · Chiffres en langage naturel · Santé hors ligne et multilingue | RAG hybride, citations, OCR, ColPali, droits d'accès, GraphRAG, texte vers SQL, IA locale |
| 7.2 Agents opérationnels | Back-office d'une coopérative · Outils d'un transitaire par MCP · 200 dossiers de crédit · Veille sur portails sans API · Analyste en bac à sable | Outils, MCP, harness, reprise, agents navigateur, exécution de code |
| 7.3 Systèmes multi-agents | Équipe de recherche · Support à plusieurs spécialistes · Centrale d'achat qui négocie · Un agent ou plusieurs ? | Orchestration, relais, protocoles, comparaison mesurée |
| 7.4 Commercial et relation client | Commercial virtuel · Support WhatsApp · Recommandation de produits · Qualification de prospects | Agents avec limites, recommandation, scoring, effet sur les ventes |
| 7.5 Modèles sur mesure | Réclamations mobile money · Bons de livraison distillés · Calculateur de cotisations · Ton d'une banque · Recherche médicale · Traduction français-wolof | LoRA, distillation, GRPO, DPO, retriever adapté, langue locale |
| 7.6 IA locale et embarquée | Office notarial confidentiel · Diagnostic sur téléphone · Serveur de PME · Parc de 200 tablettes | Quantification, service local, mobile, mises à jour d'un parc |
| 7.7 Voix, vision et contenu | Studio de contenu · Serveur vocal · Reçus et factures · Comptes rendus de réunions · Visuels marketing | Voix en temps réel, modèles vision-langage, transcription, génération d'images |
| 7.8 Données et prédiction | Demande des pharmacies · Score de crédit · Fraude mobile money · Tri du cacao par la vision | Séries temporelles, scoring équitable, classes rares, détection d'objets |
| 7.9 Plateformes à grande échelle | 100 000 utilisateurs · Passerelle LLM · Évaluation continue · 5 millions de documents · 300 clients sur une plateforme | Mise à l'échelle, routage, repli, observabilité, réindexation, multi-clients |
| 7.10 IA de confiance | Test d'intrusion · Garde-fous · Audit de biais · Mise en conformité | Sécurité, équité, droit des données et de l'IA |

**La mise à l'échelle** est traitée dans les modules 3.8 (service d'un modèle), 4.8 (performance et coûts) et 4.9 (architecture), puis appliquée dans toute la famille 7.9.

**Validation d'un projet** : ses tests, la grille de l'agent correcteur (au moins 14/20) et l'examen oral avec l'IA. Pour un portfolio équilibré, l'apprenant livre des projets dans plusieurs familles.

## Évaluation, certification et organisation open source

**Évaluation.** La progression repose sur des preuves concrètes, pas sur des examens à mémoriser.

Il n'y a pas de note globale : chaque élément est validé ou non, selon des règles automatiques et publiques.

| Élément | Comment il est évalué | Règle de validation |
| --- | --- | --- |
| QCM de fin de cours | Corrigé automatiquement dans le terminal | 80 % de bonnes réponses, nouvelles tentatives illimitées avec des questions tirées au hasard |
| Exercices de code | Tests automatiques | Tous les tests passent |
| Module sauté | QCM et exercice clé du module, passés sur son PC | 80 % au QCM et tous les tests de l'exercice clé au vert |
| Projets d'étape | Tests fonctionnels, contrôles de qualité et de ressources, badge GitHub Actions | Tous les contrôles passent et le badge est vert |
| Correction par l'agent IA | Note sur 20 selon `GRILLE.md` du projet | Au moins 14/20, conseils de l'agent pris en compte |
| Examen oral avec l'IA | 5 à 10 questions sur le code rendu | Au moins 70 % de réponses jugées correctes |

Une étape est validée quand tous ses QCM (ou les modules sautés), son projet et son examen oral le sont. Le script `progression.py` enregistre ces résultats dans un fichier du dépôt de l'apprenant.

**Paliers d'anglais.** L'anglais monte par paliers, avec un niveau B2 visé à la sortie.

| Étape | Attendu |
| --- | --- |
| Étape 0 | Lire la documentation technique en anglais |
| Étapes 1–2 | README et commentaires de code en anglais |
| Étapes 3–4 | Rapports de projet en anglais, examen oral avec l'IA à moitié en anglais |
| Étapes 5–6 | Examens oraux et vidéos entièrement en anglais, entretiens d'embauche simulés avec l'IA |

**Certification.** Aucun humain ne contrôle les résultats, donc la formation ne délivre pas de diplôme officiel. La preuve de niveau est le **portfolio GitHub vérifiable** : chaque projet est public, ses tests passent avec un badge vert, et le rapport de l'agent correcteur y est joint. À la fin du parcours, un script génère une page de portfolio qui liste les étapes validées avec un lien vers chaque projet. Un recruteur peut tout vérifier en quelques minutes, ce qui pèse plus qu'un certificat.

**Apprendre en autonomie.**

- **Suivi de progression** : `progression.py` affiche les modules faits, les suivants, et le temps estimé restant.
- **Aide** : une FAQ par module avec les erreurs fréquentes, des indices progressifs dans chaque exercice, et l'agent IA pour poser des questions sur le cours.
- **Entraide** : GitHub Discussions, gratuit, pour échanger entre apprenants. Il n'y a pas de mentor.
- **Rattrapage** : les deux pauses de consolidation servent à terminer un projet en retard ou à revoir une étape.
- **Rythme libre** : chacun peut faire une pause et reprendre quand il veut, sans rien perdre ; sa progression reste dans son dépôt.

**Organisation open source.**

- **Dépôt GitHub central** : tout le parcours (cours, QCM, exercices, projets, tests, outils de validation), structuré comme décrit dans la section Fonctionnement.
- **Licences** : CC BY-SA 4.0 pour les contenus, MIT pour le code.
- **Contributions** : guide du contributeur, modèles d'issues, chaque ajout relu par un mainteneur et validé par la CI.
- **Mises à jour** : une revue complète chaque année, une revue de la étape 3 et de la liste des API recommandées tous les 3 à 6 mois, car le domaine des LLM et les prix changent très vite.
- **Accès au calcul** : PC de l'apprenant par défaut ; Colab et Kaggle gratuits en option pour aller plus vite ; jamais de dépense obligatoire.
- **Faible connexion** : tout le contenu est dans le dépôt ; les vidéos sont compressées et facultatives ; les modèles et jeux de données se téléchargent une seule fois.
- **Traduction** : contenus en français d'abord, version anglaise ensuite, puis traductions communautaires.

**Décisions prises (24 novembre 2026).**

- **Format** : 100 % en ligne, aucune session en présentiel.
- **Financement** : aucun pour l'instant. Tout est conçu pour fonctionner gratuitement sur un PC d'entrée de gamme ; quand une API payante est utile, on recommande la moins chère.
- **Partenaires** : aucun pour l'instant. Les sujets du capstone sont fournis par la formation ou choisis par l'apprenant.
- **Parcours** : un seul parcours, du débutant à l'expert, en 7 étapes (0 à 6). Plus de Prépa séparée ni de test d'entrée : on saute un module en réussissant son QCM et son exercice clé. Ajout du module 0.0 « Préparer son PC ».
- **Durées (25 novembre 2026)** : aucune durée imposée, ni par leçon, ni par module, ni par étape. Un chapitre est un thème, un module a autant de chapitres et de leçons que son sujet l'exige, et chacun avance à son rythme.
- **Plateforme** : site de partage du savoir, sans compte, sans inscription, sans suivi ; la pratique et la progression restent dans le dépôt de l'apprenant.
- **Mentors** : aucun pour l'instant. L'évaluation repose sur les QCM, les tests automatiques et l'agent IA.
