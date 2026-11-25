---
id: "2.3"
titre: "Vision par ordinateur"
parcours: "02-deep-learning"
promesse: "Apprendre à une machine à voir : convolutions, réseaux convolutifs, augmentation de données et adaptation de modèles légers à tes propres images."
question_saut: "Tu fais déjà du transfer learning sur des images ?"
qcm: true
prerequis: ["2.2"]
statut: brouillon
version: 1
mise_a_jour: 2026-11-25
---

# Fiche du module 2.3 — Vision par ordinateur

## Extrait du programme

- **Contenu** : CNN, augmentation de données, transfer learning avec des modèles légers (MobileNet, EfficientNet-B0), notions de détection d'objets
- **Exercice clé** : Fine-tuning d'un modèle pré-entraîné sur 500 images, en moins de 30 minutes sur processeur

## Objectifs vérifiables

| Id | À la fin, l'apprenant sait… | Évalué par |
| --- | --- | --- |
| O1 | Expliquer comment une convolution extrait des motifs d'une image. | ex01 à ex04, qcm |
| O2 | Construire et entraîner un réseau convolutif. | ex05 à ex07, qcm |
| O3 | Augmenter et préparer un jeu d'images pour mieux généraliser. | ex08 à ex10, exercice clé (ex14), qcm |
| O4 | Adapter un modèle pré-entraîné léger à un nouveau problème. | ex11 à ex13, exercice clé (ex14), qcm |
| O5 | Évaluer un classifieur d'images et comprendre ses erreurs. | ex15 à ex16, qcm |
| O6 | Expliquer le principe de la détection d'objets et de la segmentation. | ex17 à ex19, qcm |

## Chapitres

| Chapitre | Titre | Exercices |
| --- | --- | --- |
| 1 | Les images comme données | 4 |
| 2 | Les réseaux convolutifs | 3 |
| 3 | Mieux généraliser | 3 |
| 4 | Partir d'un modèle existant | 4 |
| 5 | Évaluer et expliquer | 2 |
| 6 | Au-delà de la classification | 3 |

## Notions, dans l'ordre

| Chapitre | Id de la notion | Notion | Objectif |
| --- | --- | --- | --- |
| 1 | `images-tenseurs` | Une image, c'est un tableau de nombres | O1 |
| 1 | `convolution` | La convolution : un filtre qui glisse | O1 |
| 1 | `padding-stride` | Bords et pas : padding et stride | O1 |
| 1 | `canaux` | Plusieurs canaux : couleurs et cartes de caractéristiques | O1 |
| 1 | `pooling` | Réduire la taille : le pooling | O1 |
| 1 | `champ-recepteur` | Ce que voit un neurone : le champ récepteur | O1 |
| 2 | `cnn` | Ton premier réseau convolutif | O2 |
| 2 | `architectures-cnn` | Les grandes architectures, de LeNet à ResNet | O2 |
| 2 | `resnet` | Les connexions résiduelles (ResNet) | O2 |
| 2 | `batchnorm` | Stabiliser l'entraînement : la batch normalization | O2 |
| 2 | `vision-transformers` | Les Transformers pour la vision | O2 |
| 3 | `jeu-images` | Constituer et nettoyer un jeu d'images | O3 |
| 3 | `charger-images` | Charger un dossier d'images | O3 |
| 3 | `augmentation-images` | L'augmentation de données d'images | O3 |
| 3 | `etiquettes-bruitees` | Quand les étiquettes sont fausses | O3 |
| 4 | `transfer-learning` | Le transfer learning | O4 |
| 4 | `extraction-caracteristiques` | Utiliser un modèle comme extracteur de caractéristiques | O4 |
| 4 | `modeles-legers` | Les modèles légers : MobileNet et EfficientNet | O4 |
| 4 | `fine-tuning-vision` | Geler, puis dégeler : le fine-tuning | O4 |
| 4 | `embeddings-images` | Chercher des images semblables : les embeddings d'images | O4 |
| 5 | `erreurs-images` | Où le modèle se trompe : la matrice de confusion | O5 |
| 5 | `grad-cam` | Voir ce que regarde le modèle : Grad-CAM | O5 |
| 5 | `biais-images` | Les biais des jeux d'images | O5 |
| 6 | `detection-objets` | La détection d'objets : des boîtes et des classes | O6 |
| 6 | `yolo` | Un détecteur moderne : YOLO | O6 |
| 6 | `metriques-detection` | Mesurer un détecteur : IoU et mAP | O6 |
| 6 | `segmentation` | Notions de segmentation | O6 |

## Vocabulaire du module

| Terme | Catégorie (A anglais / B transparent) | Notion où il apparaît |
| --- | --- | --- |
| convolution, filtre (kernel) | A | `convolution` |
| pooling | A | `pooling` |
| CNN (réseau convolutif) | A | `cnn` |
| batch normalization | A | `batchnorm` |
| transfer learning, fine-tuning | A | `transfer-learning` |
| Grad-CAM | A | `grad-cam` |
| détection d'objets, boîte englobante (bounding box) | A | `detection-objets` |

## Fil rouge et ancrage local

- **Situation** : des producteurs de manioc près de Kisangani perdent une partie de leurs récoltes à cause de maladies des feuilles. Avec des photos prises au téléphone, ton modèle apprend à reconnaître la maladie.
- **Personnages** : Bienvenu, agronome d'une ONG, et les producteurs qui envoient leurs photos.
- **Données utilisées** : un jeu public de photos de feuilles de manioc (Cassava Leaf Disease ou iCassava, quelques centaines de Mo, licence TODO(vérifier)) ; un sous-ensemble de 500 images est fourni pour l'exercice clé.

## Exercices prévus

| Id | Titre | Objectif | Difficulté (1–3) | Livrable non testable ? |
| --- | --- | --- | --- | --- |
| 2.3-ex01 à ex04 | Les images comme données | O1 | 1 | non |
| 2.3-ex05 à ex07 | Les réseaux convolutifs | O2 | 1 | non |
| 2.3-ex08 à ex10 | Mieux généraliser | O3 | 2 | non |
| 2.3-ex11 à ex13 | Partir d'un modèle existant | O4 | 2 | non |
| 2.3-ex14 | Exercice clé : fine-tuning d'un modèle pré-entraîné sur 500 images, en moins de 30 minutes sur processeur | O3, O4 | 3 | non |
| 2.3-ex15 à ex16 | Évaluer et expliquer | O5 | 2–3 | non |
| 2.3-ex17 à ex19 | Au-delà de la classification | O6 | 2–3 | non |

## Ressources matérielles

- **RAM maximale** : 2 à 3 Go.
- **Téléchargements** : poids de MobileNet et EfficientNet-B0 (moins de 50 Mo) et le jeu d'images (taille TODO(vérifier)).
- **Temps de calcul le plus long** : moins de 30 minutes pour le fine-tuning de l'exercice clé sur 4 cœurs (contrainte de l'énoncé).
- **Dépendances nouvelles** : torchvision, pillow.
- **API payante** : aucune.

## Point de contrôle sécurité et éthique

Point de contrôle du projet 2 : performance mesurée séparément par région ou type de culture, limites du modèle écrites dans la model card.

## Ressources externes gratuites

| Ressource | Langue | Durée ou taille | Licence | Pourquoi |
| --- | --- | --- | --- | --- |
| [Practical Deep Learning for Coders (fast.ai)](https://course.fast.ai/) | anglais | cours complet | gratuit en ligne | Le transfer learning en vision, très concret. |
| [Notes du cours CS231n](https://cs231n.github.io/) | anglais | notes de cours | gratuit en ligne | Les réseaux convolutifs expliqués en profondeur. |

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

- TODO(vérifier) : licence et taille du jeu de photos de manioc retenu.
- TODO(vérifier) : vérifier que l'exercice clé tient en moins de 30 minutes sur la machine minimale.
- TODO(vérifier) : compléter le vocabulaire des notions ajoutées par la seconde passe d'audit (25/11/2026), en vérifiant chaque terme dans docs/glossaire.md.
