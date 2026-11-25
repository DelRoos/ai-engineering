---
id: "2.2"
titre: "PyTorch"
parcours: "02-deep-learning"
promesse: "Passer du réseau écrit à la main au standard de l'industrie : tenseurs, gradients automatiques, chargement des données et boucle d'entraînement avec PyTorch."
question_saut: "Tu entraînes déjà des modèles avec PyTorch ?"
qcm: true
prerequis: ["2.1"]
statut: brouillon
version: 1
mise_a_jour: 2026-11-25
---

# Fiche du module 2.2 — PyTorch

## Extrait du programme

- **Contenu** : Tenseurs, autograd, Dataset et DataLoader, boucle d'entraînement, entraînement efficace sur processeur, GPU gratuit de Colab ou Kaggle en option
- **Exercice clé** : Reproduire 2.1 en PyTorch et comparer

## Objectifs vérifiables

| Id | À la fin, l'apprenant sait… | Évalué par |
| --- | --- | --- |
| O1 | Manipuler des tenseurs PyTorch. | ex01 à ex04, exercice clé (ex21), qcm |
| O2 | Calculer des gradients automatiquement et décrire un modèle avec nn.Module. | ex05 à ex09, exercice clé (ex21), qcm |
| O3 | Charger des données avec Dataset et DataLoader. | ex10 à ex12, exercice clé (ex21), qcm |
| O4 | Écrire une boucle d'entraînement et d'évaluation complète. | ex13 à ex17, exercice clé (ex21), qcm |
| O5 | Entraîner efficacement sur processeur, et utiliser un GPU gratuit en option. | ex01 à ex04, ex18 à ex20, exercice clé (ex21), qcm |

## Chapitres

| Chapitre | Titre | Exercices |
| --- | --- | --- |
| 1 | Les tenseurs | 4 |
| 2 | Les gradients automatiques | 5 |
| 3 | Les données | 3 |
| 4 | Entraîner et évaluer | 5 |
| 5 | Aller vite sur un petit PC | 4 |

## Notions, dans l'ordre

| Chapitre | Id de la notion | Notion | Objectif |
| --- | --- | --- | --- |
| 1 | `installer-pytorch` | Installer PyTorch en version processeur | O1 |
| 1 | `tenseurs` | Créer et manipuler des tenseurs | O1 |
| 1 | `formes-tenseurs` | Changer la forme d'un tenseur : view, reshape, permute | O1 |
| 1 | `indexer-tenseurs` | Indexer et découper des tenseurs | O1 |
| 1 | `tenseurs-numpy` | Passer de NumPy à PyTorch, et retour | O1 |
| 1 | `device` | Processeur ou GPU : le device | O5 |
| 2 | `autograd` | Les gradients automatiques : autograd | O2 |
| 2 | `graphe-autograd` | Ce qu'autograd retient : graphe, detach, no_grad | O2 |
| 2 | `nn-module` | Décrire un modèle avec nn.Module | O2 |
| 2 | `couches-pytorch` | Les couches toutes faites : Linear, Sequential et les autres | O2 |
| 2 | `parametres-pytorch` | Accéder aux paramètres d'un modèle | O2 |
| 2 | `pertes-pytorch` | Les fonctions de perte de PyTorch | O2 |
| 2 | `optimiseurs` | Les optimiseurs : SGD et Adam | O2 |
| 3 | `dataset` | Ta propre classe Dataset | O3 |
| 3 | `dataloader` | Des mini-batchs avec DataLoader | O3 |
| 3 | `transformations` | Transformer les données au chargement | O3 |
| 3 | `samplers` | Équilibrer les batchs : les samplers | O3 |
| 4 | `boucle-pytorch` | La boucle d'entraînement en PyTorch | O4 |
| 4 | `evaluation-pytorch` | Évaluer : model.eval et no_grad | O4 |
| 4 | `metriques-pytorch` | Calculer des métriques pendant l'entraînement | O4 |
| 4 | `sauvegarder-modele` | Sauvegarder et recharger un modèle | O4 |
| 4 | `checkpoints` | Reprendre un entraînement interrompu : les checkpoints | O4 |
| 4 | `early-stopping` | S'arrêter au bon moment : l'early stopping | O4 |
| 4 | `deboguer-formes` | Déboguer les erreurs de forme | O4 |
| 5 | `threads-cpu` | Tirer le meilleur du processeur | O5 |
| 5 | `profiler` | Trouver ce qui ralentit l'entraînement | O5 |
| 5 | `precision-mixte` | Calculer en demi-précision | O5 |
| 5 | `colab-kaggle` | Un GPU gratuit : Colab et Kaggle | O5 |

## Vocabulaire du module

| Terme | Catégorie (A anglais / B transparent) | Notion où il apparaît |
| --- | --- | --- |
| tenseur (tensor) | A | `tenseurs` |
| autograd | A | `autograd` |
| nn.Module | A | `nn-module` |
| optimiseur (optimizer), Adam | A | `optimiseurs` |
| Dataset, DataLoader, batch | A | `dataloader` |
| early stopping | A | `early-stopping` |
| device, CUDA | A | `device` |

## Fil rouge et ancrage local

- **Situation** : le réseau du module 2.1 lit les carnets de pesée de Garoua, mais il est lent et difficile à faire évoluer. Tu le réécris proprement avec PyTorch, puis tu l'entraînes sur un jeu plus grand.
- **Personnages** : Hadja, infirmière du centre de santé de Garoua.
- **Données utilisées** : MNIST (déjà téléchargé en 2.1) et Fashion-MNIST pour les exercices (environ 30 Mo, licence MIT, TODO(vérifier)).

## Exercices prévus

| Id | Titre | Objectif | Difficulté (1–3) | Livrable non testable ? |
| --- | --- | --- | --- | --- |
| 2.2-ex01 à ex04 | Les tenseurs | O1, O5 | 1 | non |
| 2.2-ex05 à ex09 | Les gradients automatiques | O2 | 2 | non |
| 2.2-ex10 à ex12 | Les données | O3 | 2 | non |
| 2.2-ex13 à ex17 | Entraîner et évaluer | O4 | 2–3 | non |
| 2.2-ex18 à ex20 | Aller vite sur un petit PC | O5 | 2–3 | non |
| 2.2-ex21 | Exercice clé : reproduire le réseau de 2.1 en PyTorch et comparer | O1 à O5 | 3 | non |

## Ressources matérielles

- **RAM maximale** : 1 à 2 Go.
- **Téléchargements** : PyTorch en version processeur, environ 200 Mo installés, TODO(vérifier).
- **Temps de calcul le plus long** : quelques minutes par entraînement sur 4 cœurs.
- **Dépendances nouvelles** : torch, torchvision (versions processeur).
- **API payante** : aucune. Colab et Kaggle sont gratuits et facultatifs.

## Point de contrôle sécurité et éthique

Ne jamais charger un modèle reçu d'une source inconnue avec torch.load sans précaution : le fichier peut exécuter du code (option weights_only).

## Ressources externes gratuites

| Ressource | Langue | Durée ou taille | Licence | Pourquoi |
| --- | --- | --- | --- | --- |
| [Tutoriels officiels de PyTorch](https://pytorch.org/tutorials/) | anglais | référence | BSD | Chaque brique du module, avec du code à exécuter. |
| [Learn PyTorch for Deep Learning](https://www.learnpytorch.io/) | anglais | livre en ligne | gratuit en ligne | Un cours complet, très progressif. |

## Circuit

- [ ] 1. Fiche validée par le mainteneur — date :
- [ ] 2. Solution et tests (passent sur solution, échouent sur starter) — date :
- [ ] 3. Cours — date :
- [ ] 4. Exercices (énoncés, indices, starters) — date :
- [ ] 5. QCM (valide contre le schéma) — date :
- [ ] 6. Grille — sans objet
- [ ] 7. Relecture élève — date :
- [ ] 8. Relecture expert — date :

## Journal des relectures

| Date | Étape | Fichier et ligne | Problème | Correction |
| --- | --- | --- | --- | --- |
| | | | | |

## Points à vérifier

- TODO(vérifier) : taille installée de PyTorch processeur et compatibilité avec la machine minimale.
- TODO(vérifier) : compléter le vocabulaire des notions ajoutées par la seconde passe d'audit (25/11/2026), en vérifiant chaque terme dans docs/glossaire.md.
