---
id: "2.5"
titre: "Entraîner efficacement"
parcours: "02-deep-learning"
promesse: "Entraîner mieux avec moins : régulariser, régler le taux d'apprentissage, suivre tes expériences, puis alléger un modèle pour qu'il tourne sur un téléphone."
question_saut: "Tu sais déjà quantifier et exporter un modèle ?"
qcm: true
prerequis: ["2.3"]
statut: brouillon
version: 1
mise_a_jour: 2026-11-25
---

# Fiche du module 2.5 — Entraîner efficacement

## Extrait du programme

- **Contenu** : Régularisation, taux d'apprentissage, suivi d'expériences en local (MLflow), quantification, distillation, export ONNX
- **Exercice clé** : Réduire la taille d'un modèle de 4 fois en perdant moins de 2 points de précision

## Objectifs vérifiables

| Id | À la fin, l'apprenant sait… | Évalué par |
| --- | --- | --- |
| O1 | Régulariser un réseau pour limiter le surapprentissage. | ex04 à ex06, qcm |
| O2 | Régler le taux d'apprentissage et son évolution. | ex01 à ex03, ex07 à ex09, qcm |
| O3 | Suivre et comparer ses expériences avec MLflow. | ex10 à ex12, qcm |
| O4 | Réduire un modèle par quantification, pruning et distillation. | ex13 à ex15, exercice clé (ex16), qcm |
| O5 | Exporter un modèle en ONNX et mesurer sa vitesse. | ex17 à ex19, qcm |

## Chapitres

| Chapitre | Titre | Exercices |
| --- | --- | --- |
| 1 | Bien optimiser | 3 |
| 2 | Régulariser | 3 |
| 3 | Le taux d'apprentissage | 3 |
| 4 | Suivre ses expériences | 3 |
| 5 | Alléger un modèle | 4 |
| 6 | Exporter | 3 |

## Notions, dans l'ordre

| Chapitre | Id de la notion | Notion | Objectif |
| --- | --- | --- | --- |
| 1 | `optimiseurs-avances` | Momentum, RMSProp, Adam et AdamW | O2 |
| 1 | `taille-batch` | L'effet de la taille des batchs | O2 |
| 1 | `clipping` | Couper les gradients trop grands | O2 |
| 1 | `diagnostiquer-optimisation` | Diagnostiquer un entraînement qui stagne | O2 |
| 1 | `recette-entrainement` | Une recette pour entraîner un réseau | O2 |
| 2 | `weight-decay` | Limiter les poids : le weight decay | O1 |
| 2 | `dropout` | Éteindre des neurones au hasard : le dropout | O1 |
| 2 | `donnees-regularisation` | Les données comme régularisation | O1 |
| 2 | `label-smoothing` | Adoucir les étiquettes : label smoothing | O1 |
| 2 | `arret-precoce-regularisation` | L'arrêt précoce comme régularisation | O1 |
| 3 | `lr-finder` | Trouver un bon taux d'apprentissage | O2 |
| 3 | `schedulers` | Faire évoluer le taux : les schedulers | O2 |
| 3 | `warmup` | Démarrer en douceur : le warmup | O2 |
| 3 | `cosinus-cycles` | Le taux en cosinus et les cycles | O2 |
| 3 | `taux-par-couche` | Des taux différents selon les couches | O2 |
| 4 | `mlflow` | Suivre tes expériences avec MLflow | O3 |
| 4 | `comparer-runs` | Comparer des entraînements honnêtement | O3 |
| 4 | `hyperparametres-dl` | Chercher les hyperparamètres d'un réseau | O3 |
| 4 | `reproductibilite-dl` | Rendre un entraînement reproductible | O3 |
| 4 | `journal-experiences` | Tenir un journal d'expériences | O3 |
| 5 | `taille-vitesse` | Mesurer la taille et la vitesse d'un modèle | O4 |
| 5 | `quantification` | La quantification : 32, 8 et 4 bits | O4 |
| 5 | `quantification-types` | Quantifier après ou pendant l'entraînement | O4 |
| 5 | `pruning` | Retirer les poids inutiles : le pruning | O4 |
| 5 | `distillation` | La distillation : un petit élève, un grand professeur | O4 |
| 6 | `onnx` | Exporter en ONNX | O5 |
| 6 | `onnxruntime` | Faire tourner un modèle avec ONNX Runtime | O5 |
| 6 | `formats-mobile` | Viser le téléphone : les formats mobiles | O5 |
| 6 | `mesurer-telephone` | Mesurer la vitesse sur un vrai téléphone | O5 |
| 6 | `model-card-dl` | Publier le modèle avec sa fiche | O5 |

## Vocabulaire du module

| Terme | Catégorie (A anglais / B transparent) | Notion où il apparaît |
| --- | --- | --- |
| régularisation, weight decay | A | `weight-decay` |
| dropout | A | `dropout` |
| taux d'apprentissage (learning rate), scheduler | A | `schedulers` |
| warmup | A | `warmup` |
| suivi d'expériences, MLflow | A | `mlflow` |
| quantification (quantization) | A | `quantification` |
| pruning | A | `pruning` |
| distillation | B | `distillation` |
| ONNX, inférence | A | `onnx` |

## Fil rouge et ancrage local

- **Situation** : le classifieur de maladies du manioc de Kisangani (module 2.3) est trop lourd pour les téléphones d'entrée de gamme des producteurs. Tu le rends 4 fois plus petit sans qu'il se trompe davantage.
- **Personnages** : Bienvenu, agronome, et les producteurs qui n'ont qu'un vieux smartphone.
- **Données utilisées** : le jeu de photos de manioc du module 2.3.

## Exercices prévus

| Id | Titre | Objectif | Difficulté (1–3) | Livrable non testable ? |
| --- | --- | --- | --- | --- |
| 2.5-ex01 à ex03 | Bien optimiser | O2 | 1 | non |
| 2.5-ex04 à ex06 | Régulariser | O1 | 1 | non |
| 2.5-ex07 à ex09 | Le taux d'apprentissage | O2 | 2 | non |
| 2.5-ex10 à ex12 | Suivre ses expériences | O3 | 2 | non |
| 2.5-ex13 à ex15 | Alléger un modèle | O4 | 2–3 | non |
| 2.5-ex16 | Exercice clé : réduire la taille d'un modèle de 4 fois en perdant moins de 2 points de précision | O4 | 3 | non |
| 2.5-ex17 à ex19 | Exporter | O5 | 2–3 | non |

## Ressources matérielles

- **RAM maximale** : 2 à 3 Go.
- **Téléchargements** : MLflow et ONNX Runtime (environ 150 Mo installés, TODO(vérifier)).
- **Temps de calcul le plus long** : quelques dizaines de minutes pour la distillation sur 4 cœurs, TODO(vérifier).
- **Dépendances nouvelles** : mlflow, onnx, onnxruntime.
- **API payante** : aucune.

## Point de contrôle sécurité et éthique

Un modèle allégé peut se tromper davantage sur certains groupes : mesurer la perte de précision par région ou type de culture, pas seulement en moyenne.

## Ressources externes gratuites

| Ressource | Langue | Type | Licence ou accès | Pourquoi |
| --- | --- | --- | --- | --- |
| [A Recipe for Training Neural Networks (Karpathy)](https://karpathy.github.io/2019/04/25/recipe/) | anglais | article | accès libre | Une méthode pour entraîner sans se perdre. |
| [Documentation de MLflow](https://mlflow.org/docs/latest/) | anglais | documentation | Apache 2.0 | Suivre et comparer ses expériences. |
| [Documentation d'ONNX Runtime](https://onnxruntime.ai/docs/) | anglais | documentation | MIT | Exporter et accélérer un modèle. |
| [Documentation d'Optimum (Hugging Face)](https://huggingface.co/docs/optimum) | anglais | documentation | Apache 2.0 | Quantifier et optimiser des modèles. |

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

- TODO(vérifier) : format mobile recommandé (TensorFlow Lite, ExecuTorch ou ONNX mobile) selon l'état des outils à la rédaction.
- TODO(vérifier) : compléter le vocabulaire des notions ajoutées par la seconde passe d'audit (25/11/2026), en vérifiant chaque terme dans docs/glossaire.md.
