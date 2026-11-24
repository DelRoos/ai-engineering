/**
 * Textes de la landing page.
 * Source de vérité : docs/programme.md. Tout chiffre affiché ici doit y figurer.
 * Règles de rédaction : tutoiement, français simple, termes du métier en anglais (docs/glossaire.md).
 */

export const nav = [
  { label: "Le métier", href: "#metier" },
  { label: "Méthode", href: "#methode" },
  { label: "Parcours", href: "#parcours" },
  { label: "Projets", href: "#projets" },
  { label: "FAQ", href: "#faq" },
];

export const hero = {
  eyebrow: "Gratuit, open source et en français",
  titleLine1: "Deviens AI Engineer.",
  /** Coupé en deux lignes volontairement, pour ne jamais laisser « sur » seul en bout de ligne. */
  titleLine2: ["Gratuitement,", "sur ton propre PC."],
  subtitle:
    "Un parcours complet pour apprendre à concevoir, déployer et maintenir des solutions d'IA en production. Pensé pour l'Afrique francophone, aux standards de l'industrie mondiale.",
  /** Libellés quand le dépôt GitHub est public. */
  withRepo: { primary: "Voir le dépôt GitHub", secondary: "Découvrir le parcours" },
  /** Libellés tant que le dépôt n'est pas public : aucune promesse qu'on ne peut pas tenir. */
  withoutRepo: { primary: "Découvrir le parcours", secondary: "C'est quoi, un AI Engineer ?" },
};

/** Exemple illustratif de ce qu'affichera outils/check.py à la validation d'un projet. */
export const terminal = {
  title: "~/formation-ai-engineer",
  command: "python outils/check.py projet-3",
  lines: [
    { label: "Tests du projet", value: "42/42" },
    { label: "Qualité du code", value: "0 erreur" },
    { label: "Code couvert par les tests", value: "87 %" },
    { label: "Mot de passe ou clé oubliés", value: "aucun" },
    { label: "Mémoire utilisée", value: "3,1 / 8 Go" },
    { label: "Correction par l'IA", value: "16/20" },
    { label: "Examen oral", value: "8/10" },
  ],
  result: "Projet 3 validé, badge vert publié",
  caption: "Illustration : chaque projet est vérifié automatiquement, sur ton PC.",
};

export const facts = [
  { value: "72", unit: "semaines", label: "un seul parcours, du premier code au métier" },
  { value: "6", unit: "projets", label: "publics, vérifiés par des tests automatiques" },
  { value: "0", unit: "€", label: "outils gratuits et modèles locaux par défaut" },
  { value: "8", unit: "Go", label: "de RAM suffisent, sans carte graphique" },
];

export const metier = {
  eyebrow: "Le métier",
  title: "AI Engineer : celui qui fait marcher l'IA pour de vrai.",
  intro:
    "Un AI engineer n'invente pas de nouveaux modèles dans un laboratoire. Il prend les modèles qui existent, les adapte à un vrai problème, et les fait tourner de façon fiable chez de vrais utilisateurs.",
  examplesTitle: "Par exemple, tu pourras construire…",
  examples: [
    {
      place: "Pour une coopérative de cacao",
      text: "une application qui reconnaît les maladies sur une photo de feuille, même sans réseau.",
    },
    {
      place: "Pour une institution de microfinance",
      text: "un modèle qui aide à évaluer le risque de crédit, avec des décisions qu'on peut expliquer.",
    },
    {
      place: "Pour les usagers d'une administration",
      text: "un assistant qui explique les démarches et cite les textes officiels qu'il utilise.",
    },
  ],
  jobsTitle: "Où tu pourras travailler",
  jobs: [
    { icon: "globe", text: "À distance, pour des entreprises étrangères" },
    { icon: "laptop", text: "En freelance, pour des clients du monde entier" },
    { icon: "rocket", text: "Dans ta propre start-up" },
    { icon: "building", text: "Dans les entreprises de ton pays" },
  ],
  skillsTitle: "Ce que tu sauras faire à la sortie",
  skills: [
    { title: "Cadrer", text: "Transformer un problème métier en solution d'IA mesurable, ou décider qu'il n'a pas besoin d'IA." },
    { title: "Collecter", text: "Collecter, annoter et contrôler des données de terrain, y compris en langues africaines." },
    { title: "Entraîner", text: "Entraîner, évaluer et optimiser des modèles de machine learning et de deep learning." },
    { title: "Construire avec les LLM", text: "RAG, agents, outils, fine-tuning, en local comme dans le cloud." },
    { title: "Déployer", text: "API, conteneurs, pipelines, monitoring, maîtrise des coûts." },
    { title: "Sécuriser", text: "Sécurité, biais, vie privée, réglementation : une IA sûre et responsable." },
    { title: "Coder avec l'IA", text: "Utiliser les assistants de code avec méthode, en vérifiant tout ce qu'ils produisent." },
    { title: "Travailler à l'international", text: "Git, tickets, code review, documentation et anglais technique." },
  ],
};

export const why = {
  eyebrow: "Pourquoi cette formation",
  title: "Pensée pour là où tu vis vraiment.",
  intro:
    "La plupart des formations en IA supposent une carte bancaire, un GPU puissant et une bonne connexion. Celle-ci part de ta réalité.",
  items: [
    {
      icon: "wallet",
      problem: "« Les formations coûtent trop cher. »",
      answer:
        "Ici, tout est gratuit. Si une API payante apporte vraiment quelque chose, on te donne la moins chère, son budget maximum, et toujours une alternative gratuite.",
    },
    {
      icon: "cpu",
      problem: "« Il me faudrait un ordinateur puissant. »",
      answer:
        "Chaque projet tourne sur un PC d'entrée de gamme, sans carte graphique. Colab et Kaggle restent une option, jamais une obligation.",
    },
    {
      icon: "wifi-off",
      problem: "« Ma connexion est lente et chère. »",
      answer:
        "Tout le contenu est dans le dépôt. Tu télécharges une fois les modèles et les datasets, puis tu travailles hors ligne. Les vidéos sont facultatives.",
    },
    {
      icon: "globe",
      problem: "« Les exemples ne me parlent pas. »",
      answer:
        "Les projets traitent de vrais problèmes : agriculture, santé, mobile money, langues africaines. Avec l'exigence de l'industrie internationale.",
    },
  ],
  specsTitle: "Configuration minimale",
  specs: [
    { label: "Processeur", value: "4 cœurs" },
    { label: "Mémoire", value: "8 Go" },
    { label: "Disque libre", value: "40 Go" },
    { label: "Carte graphique", value: "Aucune" },
    { label: "Système", value: "Linux, Windows ou macOS" },
  ],
  specsNote: "4 Go de RAM suffisent pour les étapes 0 et 1.",
};

export const method = {
  eyebrow: "La méthode",
  title: "Tu apprends en construisant.",
  intro:
    "Pas de cours à mémoriser pour un examen. Tu écris du code, il est vérifié automatiquement, et tu prouves que tu le comprends.",
  steps: [
    {
      title: "Clone le dépôt",
      text: "Une seule fois. Cours, exercices, projets et outils de validation : tout le parcours est dedans.",
      code: "git clone",
    },
    {
      title: "Apprends une notion à la fois",
      text: "Cours en français simple, avec les mots du métier en anglais. Explication, exemple, mini-exercice.",
      code: "cours.mdx",
    },
    {
      title: "Pratique avec des tests",
      text: "Chaque exercice est vérifié automatiquement. Si tu bloques, des indices progressifs t'aident.",
      code: "check.py ✓",
    },
    {
      title: "Construis un vrai projet",
      text: "Chaque étape se termine par un projet réel, publié sur ton GitHub, avec un badge vert.",
      code: "git push ✓",
    },
    {
      title: "Prouve que tu comprends",
      text: "Un agent IA corrige ton projet avec une grille publique, puis te pose des questions sur ton code.",
      code: "oral ≥ 70 %",
    },
  ],
  split: [
    { value: 70, label: "Pratique", detail: "code, exercices, projets" },
    { value: 20, label: "Théorie ciblée", detail: "juste ce qu'il faut, au bon moment" },
    { value: 10, label: "Auto-évaluation", detail: "QCM, examen oral avec l'IA" },
  ],
};

export type EtapeParcours = {
  id: string;
  label: string;
  title: string;
  weeks: number;
  modules: number | null;
  project: string | null;
  kind: "fondations" | "etape" | "consolidation";
};

export const etapesParcours: EtapeParcours[] = [
  {
    id: "fondations",
    label: "Étape 0",
    title: "Fondations : Python, Git, Linux, maths, données",
    weeks: 20,
    modules: 5,
    project: "Outil en ligne de commande qui analyse un dataset public local",
    kind: "fondations",
  },
  {
    id: "p1",
    label: "Étape 1",
    title: "Développement assisté par IA, données terrain, machine learning classique",
    weeks: 10,
    modules: 8,
    project: "Modèle de prédiction entraîné en partie sur des données que tu as collectées",
    kind: "etape",
  },
  {
    id: "p2",
    label: "Étape 2",
    title: "Deep learning avec PyTorch",
    weeks: 6,
    modules: 5,
    project: "Classifieur de maladies des plantes, optimisé pour mobile",
    kind: "etape",
  },
  {
    id: "c1",
    label: "Consolidation",
    title: "Rattrapage, révisions, projet libre",
    weeks: 1,
    modules: null,
    project: null,
    kind: "consolidation",
  },
  {
    id: "p3",
    label: "Étape 3",
    title: "LLM, RAG, agents, IA locale, langues africaines",
    weeks: 12,
    modules: 10,
    project: "Assistant RAG sur des documents officiels + agent avec outils, utilisable hors ligne",
    kind: "etape",
  },
  {
    id: "p4",
    label: "Étape 4",
    title: "Ingénierie de production et pipelines de données",
    weeks: 9,
    modules: 9,
    project: "Mise en production du projet 3",
    kind: "etape",
  },
  {
    id: "c2",
    label: "Consolidation",
    title: "Rattrapage, révisions, projet libre",
    weeks: 1,
    modules: null,
    project: null,
    kind: "consolidation",
  },
  {
    id: "p5",
    label: "Étape 5",
    title: "Sécurité, éthique, IA responsable",
    weeks: 3,
    modules: 3,
    project: "Audit de sécurité et de biais d'un système existant",
    kind: "etape",
  },
  {
    id: "p6",
    label: "Étape 6",
    title: "Capstone, produit, entrepreneuriat et carrière",
    weeks: 10,
    modules: 2,
    project: "Solution complète sur un cas réaliste, présentée en anglais en vidéo",
    kind: "etape",
  },
];

export const parcours = {
  eyebrow: "Le parcours",
  title: "De ta première ligne de Python à l'IA en production.",
  intro:
    "Environ 15 heures par semaine, à ton rythme. Un seul chemin, dans l'ordre. Chaque étape se termine par un projet et un examen oral.",
};

export const projects = {
  eyebrow: "Ton portfolio",
  title: "Six projets réels. Publics. Vérifiables.",
  intro:
    "Pas des exercices jetables : des projets que tu montres à un recruteur ou à un client, ancrés dans des problèmes réels.",
  items: [
    {
      number: "01",
      title: "Prédire à l'échelle locale",
      text: "Prédire le prix des produits agricoles sur un marché, ou le risque de crédit en microfinance. Avec des données que tu collectes toi-même.",
      tags: ["pandas", "scikit-learn", "Streamlit"],
    },
    {
      number: "02",
      title: "Soigner les cultures",
      text: "Détecter les maladies du manioc, du maïs ou du cacao sur une photo de feuille. Hors ligne, sur un smartphone d'entrée de gamme.",
      tags: ["PyTorch", "transfer learning", "ONNX"],
    },
    {
      number: "03",
      title: "Rendre les textes officiels accessibles",
      text: "Un assistant qui répond sur le code du travail ou les démarches administratives, cite ses sources et refuse de répondre hors sujet.",
      tags: ["RAG", "agents", "Ollama"],
    },
    {
      number: "04",
      title: "Passer en production",
      text: "Ton assistant devient un vrai service : API, conteneurs, CI/CD, monitoring. Objectif de coût mensuel : 0 €.",
      tags: ["FastAPI", "Docker", "GitHub Actions"],
    },
    {
      number: "05",
      title: "Auditer une IA",
      text: "Tester la sécurité et les biais d'une application LLM open source, corriger les risques les plus graves et proposer un correctif.",
      tags: ["OWASP LLM", "biais", "red teaming"],
    },
    {
      number: "06",
      title: "Ton capstone",
      text: "Ta propre solution, sur un problème réel de ton entourage. Testée par de vrais utilisateurs, déployée, présentée en anglais.",
      tags: ["produit", "déploiement", "anglais"],
    },
  ],
};

export const proof = {
  eyebrow: "La validation",
  title: "Pas de diplôme. Mieux : des preuves.",
  intro:
    "Aucun humain ne contrôle les résultats, donc la formation ne délivre pas de diplôme. Ta preuve de niveau, c'est ton portfolio GitHub : un recruteur peut tout vérifier en quelques minutes.",
  steps: [
    { title: "Tests fonctionnels", text: "Tous les tests du projet passent." },
    {
      title: "Contrôles de qualité",
      text: "Lint, couverture de tests, aucun secret, documentation, limites de temps et de mémoire.",
    },
    {
      title: "Intégration continue",
      text: "GitHub Actions relance tout sur ton dépôt et affiche un badge vert public.",
    },
    {
      title: "Correction et oral par l'IA",
      text: "Au moins 14/20 avec la grille du projet, puis 70 % de bonnes réponses à l'oral sur ton code.",
    },
  ],
  honesty:
    "Les tests sont publics. Tu pourrais écrire du code qui les contourne : l'examen oral est là pour ça. Celui qui triche ne trompe que lui-même.",
  portfolioNote:
    "À la fin, un script génère ta page de portfolio : étapes validées, lien vers chaque projet, badges et rapports de correction.",
};

export const faq = {
  eyebrow: "Questions fréquentes",
  title: "Tu te poses sûrement ces questions.",
  items: [
    {
      q: "C'est vraiment gratuit ?",
      a: "Oui. Pas de frais d'inscription, pas d'abonnement. Les outils sont gratuits et les modèles tournent en local. Quand une API payante est utile, elle reste facultative : l'énoncé donne la moins chère, son budget maximum, et une alternative gratuite.",
    },
    {
      q: "Je n'ai pas de carte graphique. Je peux suivre ?",
      a: "Oui. Tout le parcours est conçu pour un PC sans GPU, avec 8 Go de RAM (4 Go suffisent pour les étapes 0 et 1). Colab et Kaggle sont proposés en option si tu veux aller plus vite.",
    },
    {
      q: "Je parle mal anglais. C'est un problème ?",
      a: "Non. Les cours sont en français simple. Dès le début, tu apprends les mots du métier en anglais (dataset, commit, prompt…), avec leur prononciation. L'anglais monte ensuite par paliers, jusqu'au niveau B2 visé à la sortie.",
    },
    {
      q: "Si je bloque, qui m'aide ?",
      a: "Chaque exercice a des indices progressifs, chaque module une FAQ des erreurs fréquentes, et tu peux poser tes questions à un agent IA. Les apprenants s'entraident aussi sur GitHub Discussions. Il n'y a pas de mentor : tout est pensé pour que tu avances seul.",
    },
    {
      q: "Est-ce que j'aurai un diplôme ?",
      a: "Non, et c'est assumé. Ta preuve de niveau est ton portfolio GitHub : six projets publics, des badges verts, et les rapports de correction. Un recruteur peut tout vérifier en quelques minutes.",
    },
    {
      q: "Combien de temps faut-il par semaine ?",
      a: "Environ 15 heures : 3 h de cours, 9 h de pratique, 1 h de QCM et 2 h de vérification. C'est indicatif : tu avances à ta vitesse, et tu peux faire une pause sans rien perdre.",
    },
    {
      q: "J'ai le droit d'utiliser ChatGPT, Claude ou Copilot ?",
      a: "Pas pendant l'étape 0 : tu dois d'abord apprendre à écrire et à lire du code seul. Dès l'étape 1, les assistants de code sont enseignés et autorisés. En contrepartie, l'examen oral vérifie que tu comprends ce que tu rends.",
    },
    {
      q: "Quand est-ce que ça commence ?",
      a: "La formation est en cours de rédaction, en open source. Les modules sont publiés au fur et à mesure dans le dépôt GitHub.",
    },
  ],
};

export const openSource = {
  eyebrow: "Open source",
  title: "Une formation construite en public.",
  text: "Les contenus sont sous licence CC BY-SA 4.0, le code sous licence MIT. Tu peux tout lire, tout réutiliser, signaler une erreur ou proposer une amélioration.",
  pendingRepo: "Le dépôt public arrive bientôt : les premiers modules de l'étape 0 sont en préparation.",
  withRepo: { primary: "Voir le dépôt GitHub", secondary: "Revoir le parcours" },
  withoutRepo: { primary: "Revoir le parcours", secondary: "Lire les questions fréquentes" },
};
