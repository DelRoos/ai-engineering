# Glossaire de la formation

Ce glossaire fixe **comment chaque terme technique est écrit dans toute la formation** : en anglais ou en français, avec quel genre, et comment le prononcer. Il garantit qu'un même mot ne change pas d'un module à l'autre.

Règles d'usage : `docs/guide-pedagogique.md` § 3.1. En bref :

- **A — Terme anglais** : le mot du métier, gardé en anglais dans une phrase française (« fais un commit »).
- **B — Mot transparent** : le mot français, avec l'anglais entre parenthèses à la première apparition (« une fonction (*function*) »).

## Contribuer au glossaire

- Avant d'écrire un cours, vérifie ici chaque terme technique. S'il manque, **ajoute-le dans ce fichier en même temps que le cours**, dans la bonne section, par ordre alphabétique.
- Choisis la catégorie A si les développeurs francophones disent le mot en anglais au travail, dans les offres d'emploi ou en entretien. En cas de doute, choisis A : c'est l'objectif de la formation.
- La prononciation est une **approximation pour un francophone**, à donner seulement pour les mots souvent mal prononcés.
- Le module indique où le terme est défini pour la première fois.

Colonnes : **Terme** (avec son genre en français) · **Cat.** · **Se dit aussi** · **Définition courte** · **Prononciation** · **Module**.

## Le PC et son système

| Terme | Cat. | Se dit aussi | Définition courte | Prononciation | Module |
| --- | --- | --- | --- | --- | --- |
| 64 bits (un système, un processeur) | B | *64-bit*, x64 | Façon dont le processeur et le système traitent les données ; nécessaire pour la formation | — | 0.0 |
| build de Windows (le), numéro de build | A | — | Numéro précis de la version de Windows (par exemple 19045) : plus il est grand, plus Windows est récent. À ne pas confondre avec le *build* du code (ci-dessous) | « bild » | 0.0 |
| cœur (le) | B | *core* | Unité de calcul du processeur ; un processeur en a plusieurs | — | 0.0 |
| distribution (la) | B | *distribution*, *distro* | Variante de Linux (Ubuntu, Debian…) | « dis-tro » | 0.0 |
| processeur (le) | B | *processor*, *CPU* | Composant qui exécute les calculs du PC | « si-pi-you » | 0.0 |
| RAM (la) | A | mémoire vive | Mémoire qui garde les programmes ouverts ; elle se vide quand on éteint le PC | « ram » | 0.0 |
| système d'exploitation (le) | B | *operating system*, *OS* | Programme qui pilote le PC et lance les autres (Windows, macOS, Linux) | « o-èss » | 0.0 |
| terminal (le) | B | *terminal*, invite de commandes | Fenêtre où l'on tape des commandes au lieu de cliquer | — | 0.0 |
| virtualisation (la) | B | *virtualization* | Fonction du processeur qui permet de faire tourner un autre système dans le sien ; WSL en a besoin | — | 0.0 |
| WSL (le) | A | sous-système Windows pour Linux | Outil de Windows qui fait tourner Linux à l'intérieur de Windows | « dou-ble-vé-èss-èl » | 0.0 |

## Outils du développeur

| Terme | Cat. | Se dit aussi | Définition courte | Prononciation | Module |
| --- | --- | --- | --- | --- | --- |
| appel (l', m.) | B | *call* | Le fait de faire travailler une fonction en écrivant son nom suivi de parenthèses : `print("Bonjour")` | « kol » | 0.1 |
| bibliothèque (la) | B | *library* | Code écrit par d'autres, qu'on importe pour s'en servir | « laï-brè-ri » | 0.1 |
| branche (la) | B | *branch* | Version parallèle du code dans Git, pour travailler sans casser le reste | — | 0.2 |
| bug (le) | A | bogue | Erreur dans un programme | « beug » | 0.1 |
| build (le) | A | — | Étape qui prépare le code pour qu'il puisse être lancé ou livré. Pour le numéro de version de Windows, voir « build de Windows » | « bild » | 0.2 |
| code review (la) | A | revue de code | Relecture du code par une autre personne (ou par soi-même) avant de l'intégrer | « code ri-viou » | 0.2 |
| commit (le) | A | — | Enregistrement d'un ensemble de modifications dans Git, avec un message | — | 0.2 |
| debug (le), débugger | A | débogage, déboguer | Chercher et corriger un bug. « Débugger » est le seul verbe francisé admis | « di-beug » | 0.3 |
| dépôt (le) | B | *repository*, *repo* | Dossier suivi par Git, qui garde tout l'historique du code | « ri-po » | 0.2 |
| fonction (la) | B | *function* | Bloc de code nommé qu'on peut appeler plusieurs fois | — | 0.1 |
| fork (le) | A | — | Copie d'un dépôt dans ton propre compte, pour le modifier librement | — | 0.2 |
| framework (le) | A | cadriciel (rare) | Ensemble d'outils qui impose une structure pour construire une application | « frème-weurk » | 4.2 |
| interpréteur (l', m.) | B | *interpreter* | Programme qui lit ton code Python et exécute ses ordres un par un | — | 0.1 |
| issue (la) | A | ticket | Tâche, bug ou idée enregistré dans GitHub | « i-chou » | 0.2 |
| linter (le), lint (le) | A | — | Outil qui vérifie le style et repère des erreurs dans le code sans le lancer | — | 0.3 |
| liste (la) | B | *list* | Suite ordonnée de valeurs, en Python `[1, 2, 3]` | — | 0.1 |
| merge (le) | A | fusion | Intégration des modifications d'une branche dans une autre | « meurdj » | 0.2 |
| package (le) | A | paquet | Code réutilisable qu'on installe, par exemple avec `pip` | « pa-kidj » | 0.1 |
| programme (le) | B | *program* | Suite d'ordres écrits dans un langage de programmation, que l'ordinateur exécute | — | 0.1 |
| pull request (la) | A | PR | Demande d'intégrer ses modifications dans un dépôt, avec relecture | « poul ri-kouest » | 0.2 |
| push (le) | A | — | Envoi de ses commits vers le dépôt en ligne (« faire un push ») | « pouch » | 0.2 |
| README (le) | A | — | Fichier qui présente un projet : ce qu'il fait, comment l'installer, comment l'utiliser | « rid-mi » | 0.2 |
| script (le) | B | *script* | Programme enregistré dans un fichier (`.py` pour Python), qu'on lance d'un coup | « skript » | 0.1 |
| test (le) | B | *test* | Code qui vérifie automatiquement qu'un autre code fait ce qu'il doit faire | — | 0.3 |
| variable (la) | B | *variable* | Nom qui désigne une valeur gardée en mémoire | — | 0.1 |
| workflow (le) | A | flux de travail | Suite d'étapes automatisées ou habituelles pour accomplir une tâche | « weurk-flo » | 4.6 |

## Données et machine learning

| Terme | Cat. | Se dit aussi | Définition courte | Prononciation | Module |
| --- | --- | --- | --- | --- | --- |
| baseline (la) | A | modèle de référence | Solution simple à battre, pour savoir si un modèle apporte vraiment quelque chose | « béss-laïne » | 1.4 |
| batch (le) | A | lot | Petit groupe d'exemples traités ensemble pendant l'entraînement | « batch » | 2.2 |
| dataset (le) | A | jeu de données | Ensemble de données rangées pour une analyse ou un entraînement | « dé-ta-sète » | 0.5 |
| edge case (le) | A | cas limite | Situation rare ou extrême qui fait souvent planter un programme | « èdj kèss » | 0.3 |
| entraînement (l') | B | *training* | Étape où le modèle apprend à partir des données | « tré-ning » | 1.4 |
| epoch (l', f.) | A | — | Un passage complet sur toutes les données d'entraînement | « i-pok » | 2.2 |
| feature (la) | A | variable explicative | Information donnée au modèle pour faire sa prédiction (attention : en produit, *feature* veut dire « fonctionnalité ») | « fi-tcheur » | 1.4 |
| inférence (l') | B | *inference* | Utilisation d'un modèle déjà entraîné pour faire une prédiction | — | 2.2 |
| label (le) | A | étiquette | Bonne réponse associée à un exemple, que le modèle doit apprendre | « lé-beul » | 1.3 |
| learning rate (le) | A | taux d'apprentissage | Taille des pas que fait le modèle pour corriger ses erreurs | « leur-ning rét » | 2.1 |
| loss (la) | A | fonction de perte | Nombre qui mesure à quel point le modèle se trompe | « loss » | 2.1 |
| notebook (le) | A | — | Document (Jupyter) qui mélange code, résultats et texte | « nôt-bouk » | 1.2 |
| overfitting (l', m.) | A | surapprentissage | Le modèle apprend par cœur les données d'entraînement et se trompe sur les nouvelles | « o-veur-fi-ting » | 1.4 |
| pipeline (le) | A | chaîne de traitement | Suite d'étapes enchaînées automatiquement, des données brutes au résultat | « paï-p-laïne » | 1.7 |
| tenseur (le) | B | *tensor* | Tableau de nombres à plusieurs dimensions, l'objet de base de PyTorch | — | 2.2 |

## LLM et IA générative

| Terme | Cat. | Se dit aussi | Définition courte | Prononciation | Module |
| --- | --- | --- | --- | --- | --- |
| agent (l', m.) | B | *agent* | Programme qui utilise un LLM pour décider d'actions et appeler des outils | — | 3.6 |
| benchmark (le) | A | banc d'essai | Ensemble de tests standard pour comparer des modèles | « bèntch-mark » | 3.1 |
| embedding (l', m.) | A | plongement (rare) | Liste de nombres qui représente le sens d'un texte | « èm-bè-ding » | 2.4 |
| fine-tuning (le) | A | ajustement fin | Réentraîner un modèle existant sur des données d'un domaine précis | « faïne-tiou-ning » | 3.7 |
| LLM (le) | A | grand modèle de langage | *Large Language Model* : modèle entraîné sur d'énormes quantités de texte | « èl-èl-èm » | 3.1 |
| model card (la) | A | fiche du modèle | Document qui décrit un modèle : usage prévu, performances, limites | « mo-deul kard » | 2.5 |
| prompt (le) | A | consigne | Texte qu'on envoie à un LLM pour lui demander quelque chose | « prompte » | 3.2 |
| RAG (le) | A | — | *Retrieval-Augmented Generation* : le LLM répond en s'appuyant sur des documents retrouvés | « rag » | 3.4 |
| token (le) | A | jeton | Morceau de mot que le LLM lit et produit ; les coûts se comptent en tokens | « to-keun » | 3.1 |

## Production

| Terme | Cat. | Se dit aussi | Définition courte | Prononciation | Module |
| --- | --- | --- | --- | --- | --- |
| API (l', f.) | A | — | Moyen pour deux programmes de communiquer, souvent par HTTP | « a-pé-i » ou « é-pi-aï » | 0.5 |
| backend (le) | A | — | Partie d'une application qui tourne sur le serveur | « bak-ènd » | 4.2 |
| cache (le) | A | — | Mémoire où l'on garde un résultat pour ne pas le recalculer | « kache » | 4.8 |
| CI/CD (la) | A | intégration et déploiement continus | Automatisation des tests et de la mise en ligne à chaque modification | « si-aï si-di » | 4.6 |
| conteneur (le) | B | *container* | Paquet qui contient une application et tout ce qu'il lui faut pour tourner (Docker) | — | 4.3 |
| déploiement (le) | B | *deployment* | Mise en ligne d'une application pour de vrais utilisateurs | — | 4.4 |
| endpoint (le) | A | point d'accès | Adresse précise d'une API qui répond à un type de demande | « ènd-poïnte » | 4.2 |
| frontend (le) | A | — | Partie d'une application que voit l'utilisateur | « fronte-ènd » | 4.2 |
| log (le) | A | journal | Message enregistré par un programme pour garder la trace de ce qu'il fait | — | 4.7 |
| monitoring (le) | A | supervision | Surveillance continue d'un service en production | « mo-ni-to-ring » | 4.7 |
