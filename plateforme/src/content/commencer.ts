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

/**
 * La section finale du parcours : les grands projets, rangés par familles (09-projets/).
 * Chaque famille est un module, chaque projet un chapitre, chaque étape d'expert une leçon.
 */
export const grandsProjets: Etape = {
  n: 9,
  title: "Les grands projets",
  project: "Ton portfolio : des projets réels dans plusieurs familles",
  modules: [
    { id: "9.1", title: "Assistants documentaires", content: "Citer la loi, lire des scans, respecter les droits d'accès, répondre aux questions globales, interroger des chiffres, fonctionner hors ligne." },
    { id: "9.2", title: "Agents opérationnels", content: "Un back-office, un serveur MCP, des dossiers traités sur plusieurs sessions, un navigateur, un bac à sable de code." },
    { id: "9.3", title: "Systèmes multi-agents", content: "Une équipe de recherche, un support à plusieurs spécialistes, une centrale d'achat qui négocie, un agent ou plusieurs tranché par la mesure." },
    { id: "9.4", title: "Commercial et relation client", content: "Un commercial virtuel, un support WhatsApp, une recommandation de produits, une qualification de prospects." },
    { id: "9.5", title: "Modèles sur mesure", content: "Fine-tuning LoRA, distillation, GRPO, DPO, retriever adapté, traduction en langue locale." },
    { id: "9.6", title: "IA locale et embarquée", content: "Un assistant confidentiel sur PC, un diagnostic sur téléphone sans réseau, un serveur de PME, un parc de tablettes." },
    { id: "9.7", title: "Voix, vision et contenu", content: "Un studio multilingue, un serveur vocal, des reçus lus par la vision, des comptes rendus, des visuels de marque." },
    { id: "9.8", title: "Données et prédiction", content: "Prévoir la demande, scorer un crédit, arrêter la fraude, trier une récolte par la vision." },
    { id: "9.9", title: "Plateformes à grande échelle", content: "100 000 utilisateurs, une passerelle LLM, l'évaluation continue, 5 millions de documents, 300 clients sur une plateforme." },
    { id: "9.10", title: "IA de confiance", content: "Test d'intrusion, garde-fous, audit de biais, mise en conformité." },
    { id: "9.11", title: "Collecte et veille", content: "Un observatoire des prix, un agrégateur immobilier, une veille de l'emploi, une veille concurrentielle, un corpus en langues africaines." },
    { id: "9.12", title: "Automatisation d'entreprise", content: "Une société de livraison, la facturation d'un cabinet, les courriels d'un transitaire, une école, les processus RH." },
  ],
};

/** Grande section 7 : devenir expert en collecte de données, scraping et automatisation, avec l'IA. */
export const collecte: Etape = {
  n: 7,
  title: "Collecte de données et automatisation avec IA",
  project: "Les projets de la famille 9.11 « Collecte et veille »",
  modules: [
    { id: "7.1", title: "Le web vu par un scraper", content: "HTTP, HTML et DOM, sélecteurs CSS et XPath, outils du développeur, API cachées, pages dynamiques, comment les sites voient les robots." },
    { id: "7.2", title: "Extraire proprement", content: "httpx, parseurs, paginations, tableaux, PDF et tableurs, données propres et validées, stockage, historique, tests." },
    { id: "7.3", title: "Scraper à grande échelle", content: "Scrapy, asynchrone, politesse, stratégies de crawl, crawl incrémental, planification, surveillance, Common Crawl et corpus." },
    { id: "7.4", title: "Automatiser un navigateur", content: "Playwright, interception réseau, sessions et fichiers, démarches sur des portails, tests et surveillance de sites." },
    { id: "7.5", title: "L'IA au service de la collecte", content: "Extraction par LLM vérifiée, scrapers qui se réparent, vision sur captures, agents navigateur, veille intelligente." },
    { id: "7.6", title: "Automatiser des tâches", content: "Excel, PDF, courriels, WhatsApp, API et webhooks, paiements mobiles, planification, Prefect, RPA, fiabilité." },
    { id: "7.7", title: "Collecter dans les règles", content: "Conditions d'utilisation, droit d'auteur et bases de données, données personnelles, robots.txt, documentation, vendre la collecte." },
    { id: "7.8", title: "Le scraping en 2026 : protections, accès et IA", content: "Comment les systèmes anti-robots détectent un robot, la ligne rouge juridique, les accès légitimes (robots vérifiés, requêtes signées, paiement à la collecte), les robots et agents d'IA, protéger un site." },
  ],
};

/** Grande section 8 : l'automatisation no code, de l'audit de processus à la vente de services. */
export const noCode: Etape = {
  n: 8,
  title: "Automatisation no code",
  project: "Les projets de la famille 9.12 « Automatisation d'entreprise »",
  modules: [
    { id: "8.1", title: "Penser une automatisation", content: "Processus métier, déclencheurs et actions, données, erreurs et doublons, no code ou code, accès et données personnelles." },
    { id: "8.2", title: "n8n en profondeur", content: "Nœuds et expressions, webhooks, sous-workflows, gestion d'erreurs, auto-hébergement Docker, sauvegardes, versionnage, licence." },
    { id: "8.3", title: "Les autres plateformes", content: "Make, Zapier, Power Automate, Apps Script, outils ouverts, coût selon le volume, recommander une plateforme." },
    { id: "8.4", title: "L'IA dans le no code", content: "Modèles dans un workflow, documents et courriels, agents, MCP, RAG sans code, évaluation et sécurité." },
    { id: "8.5", title: "Les outils d'une PME", content: "Tableurs, bases no code, formulaires et KoboToolbox, CRM, factures, mobile money, WhatsApp Business." },
    { id: "8.6", title: "Vendre de l'automatisation", content: "Trouver des clients, auditer, chiffrer le gain, devis, livraison, maintenance, freelance ou agence." },
  ],
};

/** Les grandes sections qui suivent les 7 étapes du parcours, dans l'ordre. */
export const grandesSections: Etape[] = [collecte, noCode, grandsProjets];

/** Pauses de consolidation, placées après ces étapes (docs/programme.md). */
export const consolidationAfter = [2, 4];
