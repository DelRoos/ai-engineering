---
id: "etape-2"
titre: "Étape 2 — Deep learning"
ordre: 2
statut: brouillon
---

# Étape 2 — Deep learning

**Objectif** : comprendre les réseaux de neurones de l'intérieur et savoir entraîner, adapter et alléger un modèle avec PyTorch.

**Matériel** : 8 Go de RAM, aucun GPU. Tout s'entraîne sur processeur ; le GPU gratuit de Colab ou Kaggle est une option pour aller plus vite.

## Modules

| Module | Dossier | Contenu | Exercice clé |
| --- | --- | --- | --- |
| 2.1 Réseaux de neurones de zéro | `01-reseaux-de-zero/` | Perceptron, couches denses, activations, rétropropagation, fonctions de perte | Mini-réseau en NumPy pur, sans bibliothèque |
| 2.2 PyTorch | `02-pytorch/` | Tenseurs, autograd, Dataset et DataLoader, boucle d'entraînement, entraînement efficace sur processeur | Reproduire 2.1 en PyTorch et comparer |
| 2.3 Vision par ordinateur | `03-vision/` | CNN, augmentation de données, transfer learning (MobileNet, EfficientNet-B0), détection d'objets | Fine-tuning d'un modèle pré-entraîné sur 500 images, en moins de 30 minutes sur processeur |
| 2.4 Séquences et Transformers | `04-transformers/` | Embeddings, attention, architecture Transformer, tokenisation, Hugging Face | Coder un mini-Transformer qui génère du texte, entraîné sur processeur |
| 2.5 Entraîner efficacement | `05-entrainer-efficacement/` | Régularisation, taux d'apprentissage, MLflow en local, quantification, distillation, export ONNX | Réduire la taille d'un modèle de 4 fois en perdant moins de 2 points de précision |

## Projet 2 — Détection de maladies des plantes sur mobile (`projet/`)

Un classifieur d'images de feuilles (manioc, maïs, cacao) entraîné par transfer learning sur processeur en moins d'une heure, puis quantifié pour tourner hors ligne sur un smartphone d'entrée de gamme.

- **Livrables** : modèle publié sur Hugging Face, démo en ligne, fiche du modèle (model card).
- **Critères** : précision mesurée sur un jeu de test séparé, taille et temps d'inférence documentés.
- **Point de contrôle sécurité et éthique** : performance mesurée séparément par région ou type de culture, limites du modèle écrites dans la model card.

## Consolidation (après cette étape)

Rattrapage, révisions ou projet libre. Utilise-la pour terminer un projet en retard ou revoir les étapes 1 et 2.

## Anglais

README et commentaires de code en anglais.

## État

Aucun module rédigé pour l'instant.
