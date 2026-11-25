---
id: "2.1"
titre: "Réseaux de neurones de zéro"
parcours: "02-deep-learning"
promesse: "Comprendre un réseau de neurones de l'intérieur en le construisant toi-même, sans bibliothèque : neurones, couches, perte et rétropropagation."
question_saut: "Tu sais déjà coder un réseau de neurones à la main ?"
qcm: true
prerequis: ["0.4", "1.5"]
statut: brouillon
version: 1
mise_a_jour: 2026-11-25
---

# Fiche du module 2.1 — Réseaux de neurones de zéro

## Extrait du programme

- **Contenu** : Perceptron, couches denses, fonctions d'activation, rétropropagation, fonctions de perte
- **Exercice clé** : Mini-réseau en NumPy pur, sans bibliothèque

## Objectifs vérifiables

| Id | À la fin, l'apprenant sait… | Évalué par |
| --- | --- | --- |
| O1 | Calculer la sortie d'un neurone et d'un perceptron. | ex01 à ex02, qcm |
| O2 | Construire un réseau à couches denses avec des fonctions d'activation. | ex03 à ex05, exercice clé (ex13), qcm |
| O3 | Choisir une fonction de perte adaptée au problème. | ex06 à ex07, exercice clé (ex13), qcm |
| O4 | Calculer les gradients d'un réseau par rétropropagation. | ex08 à ex09, exercice clé (ex13), qcm |
| O5 | Entraîner un mini-réseau et diagnostiquer son entraînement. | ex10 à ex12, exercice clé (ex13), qcm |

## Chapitres

| Chapitre | Titre | Exercices |
| --- | --- | --- |
| 1 | Du neurone au perceptron | 2 |
| 2 | Les réseaux à couches | 3 |
| 3 | Mesurer l'erreur | 2 |
| 4 | La rétropropagation | 2 |
| 5 | Entraîner le réseau | 4 |

## Notions, dans l'ordre

| Chapitre | Id de la notion | Notion | Objectif |
| --- | --- | --- | --- |
| 1 | `neurone` | Un neurone artificiel : poids, biais et somme | O1 |
| 1 | `perceptron` | Le perceptron : classer avec une droite | O1 |
| 1 | `limites-perceptron` | Ce que le perceptron ne sait pas faire : le XOR | O1 |
| 2 | `couches-denses` | Empiler des neurones : les couches denses | O2 |
| 2 | `activations` | Les fonctions d'activation : sigmoïde, tanh, ReLU | O2 |
| 2 | `propagation-avant` | Calculer une prédiction : la propagation avant | O2 |
| 2 | `softmax` | Des scores aux probabilités : softmax | O2 |
| 3 | `perte-regression` | La perte d'une régression : l'erreur quadratique | O3 |
| 3 | `entropie-croisee` | La perte d'une classification : l'entropie croisée | O3 |
| 4 | `graphe-calcul` | Le graphe de calcul | O4 |
| 4 | `retropropagation` | La rétropropagation, pas à pas | O4 |
| 4 | `verifier-gradient` | Vérifier un gradient numériquement | O4 |
| 5 | `boucle-entrainement` | La boucle d'entraînement | O5 |
| 5 | `initialisation` | Bien initialiser les poids | O5 |
| 5 | `diagnostiquer` | Lire les courbes d'entraînement | O5 |
| 5 | `gradients-instables` | Quand l'apprentissage s'arrête : gradients qui disparaissent ou explosent | O5 |

## Vocabulaire du module

| Terme | Catégorie (A anglais / B transparent) | Notion où il apparaît |
| --- | --- | --- |
| neurone, poids (weight), biais (bias) | A | `neurone` |
| perceptron | B | `perceptron` |
| couche dense (dense layer) | A | `couches-denses` |
| fonction d'activation, ReLU | A | `activations` |
| softmax | A | `softmax` |
| entropie croisée (cross-entropy) | A | `entropie-croisee` |
| rétropropagation (backpropagation) | A | `retropropagation` |
| époque (epoch) | A | `boucle-entrainement` |

## Fil rouge et ancrage local

- **Situation** : un centre de santé de Garoua numérise les carnets de pesée des enfants, remplis à la main. Ton réseau, écrit de zéro, apprend à lire les chiffres manuscrits.
- **Personnages** : Hadja, infirmière du centre, qui saisit les carnets le soir.
- **Données utilisées** : le jeu de chiffres manuscrits MNIST (70 000 images de 28 × 28 pixels, environ 11 Mo, licence CC BY-SA 3.0, TODO(vérifier)).

## Exercices prévus

| Id | Titre | Objectif | Difficulté (1–3) | Livrable non testable ? |
| --- | --- | --- | --- | --- |
| 2.1-ex01 à ex02 | Du neurone au perceptron | O1 | 1–2 | non |
| 2.1-ex03 à ex05 | Les réseaux à couches | O2 | 2 | non |
| 2.1-ex06 à ex07 | Mesurer l'erreur | O3 | 2 | non |
| 2.1-ex08 à ex09 | La rétropropagation | O4 | 2 | non |
| 2.1-ex10 à ex12 | Entraîner le réseau | O5 | 2–3 | non |
| 2.1-ex13 | Exercice clé : un mini-réseau en NumPy pur, sans bibliothèque | O2 à O5 | 3 | non |

## Ressources matérielles

- **RAM maximale** : moins de 1 Go.
- **Téléchargements** : MNIST, environ 11 Mo.
- **Temps de calcul le plus long** : quelques minutes pour entraîner le mini-réseau sur 4 cœurs, TODO(vérifier).
- **Dépendances nouvelles** : aucune (NumPy, déjà installé).
- **API payante** : aucune.

## Point de contrôle sécurité et éthique

Sans objet pour ce module. Les biais des modèles sont traités dès le projet 2 (performance mesurée par région).

## Ressources externes gratuites

| Ressource | Langue | Durée ou taille | Licence | Pourquoi |
| --- | --- | --- | --- | --- |
| [Neural Networks: Zero to Hero, par Andrej Karpathy](https://karpathy.ai/zero-to-hero.html) | anglais | série de vidéos | gratuit en ligne | Construire la rétropropagation à la main, pas à pas. |
| [Les réseaux de neurones en vidéos, par 3Blue1Brown](https://www.3blue1brown.com/topics/neural-networks) | anglais, sous-titres français | 4 vidéos | gratuit en ligne | Voir ce que calcule un réseau et ce que fait la rétropropagation. |
| [Dive into Deep Learning](https://d2l.ai/) | anglais | livre | CC BY-SA 4.0 | Le livre de référence du programme, avec du code exécutable. |

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

- TODO(vérifier) : licence exacte de MNIST et conditions de redistribution d'une copie dans le dépôt.
