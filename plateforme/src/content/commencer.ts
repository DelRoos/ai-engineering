/**
 * Page « Par où commencer » : tous les modules du parcours unique, dans l'ordre.
 * Source de vérité : docs/programme.md (titres et contenus repris du programme).
 * Espaces insécables ( ) avant ? : ! comme en typographie française.
 */

export const intro = {
  title: "Par où commencer ?",
  lead: "Par le début. Un seul parcours, 7 étapes, du premier code jusqu'au métier. Tu maîtrises déjà un module ? Passe son QCM et son exercice clé : s'ils sont réussis, passe au suivant.",
  status: "Les cours sont en cours de rédaction et seront publiés module par module.",
};

export type Module = { id: string; title: string; content: string };

export type Etape = {
  n: number;
  title: string;
  project: string;
  modules: Module[];
};

export const etapes: Etape[] = [
  {
    n: 0,
    title: "Fondations",
    project: "Un outil en ligne de commande qui analyse un dataset public local",
    modules: [
      {
        id: "0.0",
        title: "Préparer son PC",
        content: "Installer Python, Git et VS Code (avec WSL sous Windows), télécharger le dépôt de la formation et vérifier que tout fonctionne.",
      },
      { id: "0.1", title: "Python pour l'ingénieur", content: "Types, fonctions, classes, modules, fichiers, exceptions, environnements virtuels, typage, PEP 8." },
      { id: "0.2", title: "Outils du développeur", content: "Terminal Linux, Git et GitHub, VS Code, Markdown." },
      { id: "0.3", title: "Code de qualité", content: "Tests avec pytest, débogage, lisibilité, documentation, bases d'algorithmique." },
      { id: "0.4", title: "Maths pour l'IA", content: "Vecteurs et matrices, dérivées et gradient, probabilités et statistiques, avec NumPy." },
      { id: "0.5", title: "Données et API", content: "JSON, CSV, appels HTTP, SQL de base." },
    ],
  },
  {
    n: 1,
    title: "Données et machine learning",
    project: "Un modèle de prédiction entraîné en partie sur des données que tu as collectées",
    modules: [
      { id: "1.1", title: "Développement assisté par IA", content: "Assistants de code, décrire une tâche, relire et tester le code généré, limites et risques." },
      { id: "1.2", title: "Manipulation de données", content: "pandas, nettoyage, valeurs manquantes, jointures, agrégations, visualisation." },
      { id: "1.3", title: "Données terrain : collecte et annotation", content: "Formulaires mobiles, consentement, anonymisation, annotation, contrôle qualité." },
      { id: "1.4", title: "Fondements du ML", content: "Supervisé ou non, surapprentissage, biais et variance, découpage des données, fuite de données." },
      { id: "1.5", title: "Algorithmes essentiels", content: "Régressions, arbres, random forest, gradient boosting, k-means, PCA." },
      { id: "1.6", title: "Évaluation et optimisation", content: "Métriques, validation croisée, hyperparamètres, classes déséquilibrées." },
      { id: "1.7", title: "Feature engineering, pipelines et séries temporelles", content: "Encodage, normalisation, pipelines scikit-learn, prévision, SHAP." },
      { id: "1.8", title: "Communiquer les résultats", content: "Rapport d'analyse, tableau de bord Streamlit, présentation non technique." },
    ],
  },
  {
    n: 2,
    title: "Deep learning",
    project: "Un classifieur de maladies des plantes, optimisé pour mobile",
    modules: [
      { id: "2.1", title: "Réseaux de neurones de zéro", content: "Perceptron, couches denses, activations, rétropropagation, fonctions de perte." },
      { id: "2.2", title: "PyTorch", content: "Tenseurs, autograd, Dataset et DataLoader, boucle d'entraînement sur processeur." },
      { id: "2.3", title: "Vision par ordinateur", content: "CNN, augmentation de données, transfer learning avec des modèles légers." },
      { id: "2.4", title: "Séquences et Transformers", content: "Embeddings, attention, architecture Transformer, tokenisation, Hugging Face." },
      { id: "2.5", title: "Entraîner efficacement", content: "Régularisation, suivi d'expériences, quantification, distillation, export ONNX." },
    ],
  },
  {
    n: 3,
    title: "LLM, RAG et agents",
    project: "Un assistant RAG sur des documents officiels et un agent avec outils, utilisables hors ligne",
    modules: [
      { id: "3.1", title: "Comprendre les LLM", content: "Pré-entraînement, tokens, contexte, température, coûts, modèles fermés et ouverts." },
      { id: "3.2", title: "Prompt engineering et sorties structurées", content: "Instructions, exemples, raisonnement, JSON validé, function calling." },
      { id: "3.3", title: "Embeddings et recherche vectorielle", content: "Similarité, bases vectorielles légères en local, recherche hybride." },
      { id: "3.4", title: "RAG en profondeur", content: "Découpage, reranking, citations, réponses « je ne sais pas », PDF et tableaux." },
      { id: "3.5", title: "Évaluation des systèmes LLM", content: "Jeux de test, fidélité, pertinence, LLM-as-a-judge, non-régression." },
      { id: "3.6", title: "Agents et outils", content: "Boucle agent, appels d'outils, MCP, mémoire, garde-fous, évaluation des agents." },
      { id: "3.7", title: "Fine-tuning", content: "Quand fine-tuner, LoRA et QLoRA, préparation des données, évaluation." },
      { id: "3.8", title: "IA en local et sur appareil", content: "Choix du modèle selon le matériel, quantification, Ollama, llama.cpp, RAG 100 % local." },
      { id: "3.9", title: "Langues africaines peu dotées", content: "Tokenisation, jeux de données existants, traduction, reconnaissance vocale, évaluation." },
      { id: "3.10", title: "Multimodal, voix et génération d'images", content: "Vision et texte, reconnaissance et synthèse vocales, génération d'images." },
    ],
  },
  {
    n: 4,
    title: "Production",
    project: "La mise en production de l'assistant de l'étape 3",
    modules: [
      { id: "4.1", title: "Travailler comme en entreprise", content: "Tickets, commits et pull requests propres, auto-revue, contribution open source." },
      { id: "4.2", title: "Construire une API", content: "FastAPI, validation, authentification, async, streaming des réponses LLM." },
      { id: "4.3", title: "Conteneurs", content: "Docker, images légères, docker-compose, secrets et variables d'environnement." },
      { id: "4.4", title: "Déploiement cloud", content: "Offres gratuites ou peu chères, notions AWS, GCP, Azure, serverless." },
      { id: "4.5", title: "Pipelines de données", content: "ETL, orchestration, qualité des données, Parquet, DuckDB." },
      { id: "4.6", title: "CI/CD et qualité", content: "GitHub Actions, tests, évaluations LLM dans la CI, versionnage des modèles." },
      { id: "4.7", title: "Observabilité", content: "Logs, métriques, traces, suivi des appels LLM, dérive, alertes." },
      { id: "4.8", title: "Performance et coûts", content: "Cache, batching, routage entre modèles, mode dégradé, faible bande passante." },
      { id: "4.9", title: "Architecture de systèmes d'IA", content: "Files de tâches, bases de données, montée en charge, compromis." },
    ],
  },
  {
    n: 5,
    title: "Sécurité et éthique",
    project: "L'audit de sécurité et de biais d'un système d'IA existant",
    modules: [
      { id: "5.1", title: "Sécurité des applications LLM", content: "Injection de prompt, fuite de données, outils dangereux, permissions minimales." },
      { id: "5.2", title: "Biais, équité, fiabilité", content: "Mesurer les biais, hallucinations, explicabilité, supervision humaine." },
      { id: "5.3", title: "Données, droit et gouvernance", content: "Lois sur les données personnelles, RGPD, AI Act, licences, model cards." },
    ],
  },
  {
    n: 6,
    title: "Capstone et carrière",
    project: "Ta solution complète sur un cas réel, présentée en anglais en vidéo",
    modules: [
      { id: "C", title: "Projet capstone", content: "Cadrage, prototype testé par de vrais utilisateurs, industrialisation, livraison." },
      { id: "6.1", title: "Produit et entrepreneuriat", content: "Choisir un problème, UX d'un produit d'IA, coût, prix, financements." },
      { id: "6.2", title: "Carrière", content: "Portfolio, anglais technique, entretiens, visibilité, réseau." },
    ],
  },
];

/** Pauses de consolidation, placées après ces étapes (docs/programme.md). */
export const consolidationAfter = [2, 4];
