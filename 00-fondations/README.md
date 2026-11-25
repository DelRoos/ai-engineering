---
id: "etape-0"
titre: "Étape 0 — Fondations"
ordre: 0
statut: brouillon
---

# Étape 0 — Fondations

**Objectif** : amener un débutant complet à écrire du code Python propre, versionné et testé, avec les maths dont l'IA a vraiment besoin.

**Pour qui** : tout le monde commence ici. Aucune expérience en code n'est demandée. Si tu maîtrises déjà un module, passe son QCM et son exercice clé sur ton PC : s'ils sont réussis (80 % au QCM, tous les tests au vert), passe au module suivant.

**Matériel** : 4 Go de RAM suffisent pour toute l'étape 0.

> Les assistants de code IA (Copilot, Claude Code, Cursor…) sont **déconseillés** pendant l'étape 0 : tu dois d'abord apprendre à écrire et à lire du code seul. Ils sont enseignés dès le module 1.1.

## Modules

| Module | Dossier | Contenu | Exercice clé |
| --- | --- | --- | --- |
| 0.0 Préparer son PC | `00-preparer-son-pc/` | Installer Python, Git et VS Code (avec WSL sous Windows), cloner le dépôt de la formation, vérifier que tout fonctionne | Vérifier son installation : chaque outil répond avec la version attendue et le dépôt est cloné |
| 0.1 Python pour l'ingénieur | `01-python/` | Types, fonctions, classes, modules, fichiers, exceptions, environnements virtuels, typage, style PEP 8 | 84 exercices progressifs corrigés automatiquement |
| 0.2 Outils du développeur | `02-outils/` | Terminal Linux, Git et GitHub (branches, pull requests), VS Code, Markdown | Forker le dépôt de la formation, y pousser ses exercices et obtenir un premier badge vert |
| 0.3 Code de qualité | `03-qualite/` | Tests avec pytest, débogage, lisibilité, documentation, notions d'algorithmique | Couvrir un module existant à 80 % de tests |
| 0.4 Maths pour l'IA | `04-maths/` | Algèbre linéaire, dérivées et gradient, probabilités et statistiques, toujours avec NumPy | Coder une descente de gradient à la main |
| 0.5 Données et API | `05-donnees-api/` | JSON, CSV, appels HTTP, SQL de base | Récupérer des données d'une API publique et les stocker en SQLite |
| Projet 0 | `projet/` | Réalisation du projet 0 et examen oral avec l'IA | — |

## Projet 0 — Analyseur de données en ligne de commande

Un outil Python qui télécharge un jeu de données public (météo, prix du marché, population), le nettoie et produit un rapport de statistiques.

Critères : dépôt GitHub propre, README clair, tests automatisés, installation en une commande.

Le projet 0 peut être sauté si tous les modules de l'étape 0 l'ont été. Les projets des étapes 1 à 6, eux, ne se sautent pas : ce sont tes preuves de niveau.

## Anglais

Palier de l'étape 0 : savoir **lire** la documentation technique en anglais. Tes noms de variables sont en anglais, tes commentaires et ton README en français.

## État

Les fiches des modules 0.0 à 0.5 sont écrites (`fiche.md`, statut brouillon, à valider par le mainteneur) : objectifs, chapitres et leçons. Aucun cours n'est encore rédigé. La plateforme affiche chaque fiche sur la page du module (`/modules/<slug>`, le slug étant le nom du dossier sans son numéro).
