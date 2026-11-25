# Parcours utilisateur de la plateforme

Ce document décrit ce que vit une personne qui découvre la formation, de la première visite jusqu'à son portfolio. **Chaque écran de la plateforme doit servir une étape de ce parcours.** Un écran qui ne sert aucune étape n'est pas construit.

Statut : **brouillon, à valider par le mainteneur** (24/11/2026).

---

## 1. Le modèle : la plateforme partage, le dépôt fait pratiquer

| | La plateforme (site web) | Le dépôt cloné (PC de l'apprenant) |
| --- | --- | --- |
| Rôle | Partager la connaissance : lire, comprendre, s'orienter | Pratiquer : coder, tester, valider, garder ses preuves |
| Contient | Cours, énoncés, indices, guides, programme, glossaire | Les mêmes contenus + starters, tests, outils (`check.py`, `qcm.py`, `progression.py`) |
| Compte, suivi, tableau de bord | **Aucun** | La progression vit dans le dépôt de l'apprenant (`progression.py`) |
| Connexion | Nécessaire pour consulter | Inutile une fois le dépôt cloné et les données téléchargées |

Conséquences pour la conception :

- **Chaque écran dit lui-même « où tu es » et « quoi faire ensuite »**, par son contexte (fil d'Ariane, étape suivante), puisque la plateforme ne connaît pas l'apprenant.
- **Chaque écran de pratique renvoie vers le dépôt** avec la commande exacte à lancer (`python outils/check.py …`).
- **Tout ce qui est sur la plateforme existe dans le dépôt**, lisible hors ligne.

---

## 2. Les personnes

| Profil | Qui | Ce qu'elle cherche | Ce qui peut la faire abandonner |
| --- | --- | --- | --- |
| **Awa, la débutante** | 19 ans, Bafoussam, bac scientifique, jamais codé. PC de 8 Go, Windows, forfait mobile limité | Un chemin clair, guidé, rassurant, du premier jour au métier | L'installation (WSL, Git), un premier test qui échoue sans explication, le découragement vers la semaine 3, l'anglais |
| **Ibrahim, le développeur** | 26 ans, Abidjan, développeur web depuis 3 ans | Passer à l'IA sans perdre de temps sur ce qu'il sait déjà | Un contenu trop lent pour lui, ne pas savoir où entrer, ne pas voir le niveau final |
| **Grâce, la lectrice ponctuelle** | Ingénieure à Kinshasa, ne suit pas toute la formation | Lire un sujet précis (RAG, évaluation, langues africaines) et repartir | Ne pas trouver le sujet, devoir tout lire depuis le début |

Profils secondaires, hors plateforme : le **recruteur** (il vérifie le portfolio sur le GitHub de l'apprenant) et le **contributeur** (il passe par le dépôt et `AGENTS.md`).

---

## 3. Le parcours, étape par étape

### Étape 1 — Découvrir

- **Awa et Ibrahim** arrivent par un lien partagé (WhatsApp, LinkedIn, un ami). Question : « C'est quoi ? C'est sérieux ? C'est pour moi ? »
- **Ressenti visé** : « C'est gratuit, ça marche sur mon PC, c'est fait pour moi. »
- **Écran** : **Landing** (existe).
- **Sortie** : « Par où commencer ? »

### Étape 2 — S'orienter

- **Décision du mainteneur (24/11/2026)** : **un seul parcours, du débutant à l'expert**, en 7 étapes (0 à 6). Pas de Prépa séparée, pas de test d'entrée. Celui qui maîtrise déjà un module passe son QCM et son exercice clé : s'ils sont réussis, il passe au module suivant.
- **Awa** : « Je n'ai jamais codé, je peux quand même ? » **Ibrahim** : « Je dois tout refaire ? »
- **Écran** : **Par où commencer** (`/commencer`) — tous les modules du parcours, dans l'ordre, étape par étape, avec la règle pour sauter un module. Pas d'auto-évaluation ni de calcul de point de départ (essayés puis retirés à la demande du mainteneur).
- **Sortie** : « Préparer mon PC ».

### Étape 3 — Préparer son PC (moment critique)

- **Awa** doit installer WSL, Python, Git, VS Code, puis cloner le dépôt. C'est l'étape où l'on perd le plus de débutants.
- **Module 0.0 « Préparer son PC »** (décision du 24/11/2026 : c'est un module de l'étape 0, rédigé via le circuit de production, pas une page à part) — un guide par système (Windows + WSL, Linux, macOS), une étape par écran ou par bloc, avec ce que tu dois voir à l'écran après chaque commande, les erreurs fréquentes, la taille des téléchargements. Dernière étape : une commande qui vérifie que tout est prêt.
- **Ressenti visé** : « Je n'ai jamais été perdue, et ça a marché. »
- **Sortie** : « Commencer le module 0.1 ».

### Étape 4 — Se repérer dans le programme

- **Tous** : « Qu'est-ce qui m'attend ? Où est tel sujet ? » **Grâce** arrive souvent directement ici, ou par la recherche.
- **Écran** : **Programme** — la carte des 7 étapes (0 à 6), avec leurs modules, projets et durées. Sans suivi : c'est une carte, pas un tableau de bord.
- **Écran** : **Module** — l'entrée d'un module : ce que tu vas savoir faire, les chapitres, les exercices, le QCM, le temps estimé, le module suivant.
- **Sortie** : un chapitre.

### Étape 5 — Apprendre (à son rythme)

- **Awa** lit, souvent sur téléphone, parfois hors ligne dans le dépôt. Elle fait les mini-exercices.
- **Écran** : **Chapitre** — la lecture. *Page existante mise de côté : à reprendre après validation de sa maquette.*
- **Sortie** : « Faire les exercices ».

### Étape 6 — Pratiquer

- **Awa** code dans le dépôt, lance les tests, bloque, cherche un indice.
- **Écran** : **Exercice** — l'énoncé, la commande pour vérifier, les indices dévoilés un par un, les erreurs fréquentes. La solution n'est pas sur la plateforme (elle est dans le dépôt, à ouvrir après avoir réussi).
- **Risque** : test en échec incompréhensible → abandon. → Les messages des tests et les indices doivent répondre aux erreurs les plus probables.

### Étape 7 — Vérifier sa compréhension

- **Écran** : **QCM** — à définir (voir question ouverte n° 2).

### Étape 8 — Construire le projet d'étape

- **Écran** : **Projet** — l'énoncé, les livrables, les étapes conseillées, les critères de validation, la grille de l'agent correcteur.

### Étape 9 — Prouver

- **Écran** : **Validation par l'IA** — guide pour installer l'agent correcteur (gratuit en local, ou API à bas coût), lancer la correction avec la grille, passer l'examen oral. Une page de guide, la même pour tous les projets.

### Étape 10 — Montrer son travail

- **Écran** : **Portfolio** — guide pour publier son portfolio sur son propre GitHub (le recruteur vérifie là-bas, pas sur la plateforme).

### Transversal — Être aidé, comprendre un mot

- **Écran** : **Glossaire** — les termes du métier, leur sens, leur prononciation (`docs/glossaire.md`).
- **Écran** : **Je bloque** — que faire quand on est bloqué, sans mentor : indices, FAQ du module, agent IA (avec des exemples de questions à poser), GitHub Discussions.

---

## 4. Liste des écrans, dans l'ordre du parcours

| Priorité | Écran | Étape | État |
| --- | --- | --- | --- |
| — | Landing | 1 | Existe |
| 1 | Par où commencer (tous les modules du parcours unique) | 2 | Fait (24/11/2026) |
| 2 | Module 0.0 « Préparer son PC » (un cours, affiché par la page Chapitre) | 3 | Fiche à rédiger |
| 3 | Programme | 4 | Couvert par « Par où commencer », qui liste déjà tous les modules |
| 4 | Module | 4 | À concevoir |
| 5 | Chapitre | 5 | Existe, mis de côté, à revoir |
| 6 | Exercice | 6 | À concevoir |
| 7 | QCM | 7 | À concevoir (question ouverte) |
| 8 | Projet | 8 | À concevoir |
| 9 | Validation par l'IA | 9 | À concevoir |
| 10 | Portfolio | 10 | À concevoir |
| 11 | Glossaire | Transversal | À concevoir |
| 12 | Je bloque | Transversal | À concevoir |

Méthode pour chaque écran : maquette simple (structure et contenu) → validation → maquette visuelle → validation → code → test réel dans le navigateur (survols, mobile, accessibilité).

---

## 5. Questions ouvertes

1. **La page Chapitre** : qu'est-ce qui ne va pas (visuel, organisation en trois colonnes, quantité de texte, autre) ?
2. **Le QCM** : interactif sur la plateforme (on répond en ligne, résultat affiché, rien n'est enregistré), ou seulement dans le terminal avec `outils/qcm.py` (la plateforme montre alors comment le lancer) ?
3. **La lectrice ponctuelle (Grâce)** : faut-il une recherche sur la plateforme dès le départ ?
