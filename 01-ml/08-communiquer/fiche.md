---
id: "1.8"
titre: "Communiquer les résultats"
parcours: "01-ml"
promesse: "Faire comprendre ton travail à ceux qui décident : un rapport court, un tableau de bord en ligne et une présentation de 5 minutes, sans jargon et sans cacher les limites."
question_saut: "Tu sais déjà présenter une analyse à des non-techniciens ?"
qcm: true
prerequis: ["1.7"]
statut: brouillon
version: 1
mise_a_jour: 2026-11-25
---

# Fiche du module 1.8 — Communiquer les résultats

## Extrait du programme

- **Contenu** : Rapport d'analyse, tableau de bord simple (Streamlit), présentation à un public non technique
- **Exercice clé** : Vidéo de présentation de 5 minutes du projet 1

## Objectifs vérifiables

| Id | À la fin, l'apprenant sait… | Évalué par |
| --- | --- | --- |
| O1 | Adapter son message au public : décideur, technicien, grand public. | ex01 à ex02, exercice clé (ex12), qcm |
| O2 | Construire un graphique qui transmet une seule idée. | ex03 à ex05, qcm |
| O3 | Écrire un rapport d'analyse de 2 pages, du problème à la recommandation. | ex01 à ex02, ex06 à ex07, qcm |
| O4 | Construire un tableau de bord Streamlit et le mettre en ligne gratuitement. | ex08 à ex09, qcm |
| O5 | Présenter l'incertitude et les limites d'un modèle. | ex06 à ex07, exercice clé (ex12), qcm |
| O6 | Présenter son travail en 5 minutes, en vidéo. | ex10 à ex11, exercice clé (ex12), qcm |

## Chapitres

| Chapitre | Titre | Exercices |
| --- | --- | --- |
| 1 | Penser à ton public | 2 |
| 2 | Montrer | 3 |
| 3 | Écrire | 2 |
| 4 | Un tableau de bord en ligne | 2 |
| 5 | Présenter | 3 |

## Notions, dans l'ordre

| Chapitre | Id de la notion | Notion | Objectif |
| --- | --- | --- | --- |
| 1 | `public` | Connaître son public | O1 |
| 1 | `raconter` | Raconter une analyse : du problème à la recommandation | O3 |
| 2 | `graphique-message` | Un graphique, une idée | O2 |
| 2 | `chiffres` | Présenter des chiffres : ordres de grandeur, arrondis, unités | O2 |
| 2 | `tableau-lisible` | Un tableau qui se lit en 5 secondes | O2 |
| 2 | `accessibilite` | Des graphiques lisibles par tous : couleurs et contrastes | O2 |
| 3 | `rapport` | Écrire un rapport de 2 pages | O3 |
| 3 | `incertitude` | Dire l'incertitude et les limites | O5 |
| 3 | `readme-anglais` | Écrire le README de ton projet en anglais | O3 |
| 4 | `streamlit` | Un tableau de bord avec Streamlit | O4 |
| 4 | `streamlit-interactif` | Rendre le tableau de bord interactif : filtres et cache | O4 |
| 4 | `deployer-streamlit` | Mettre une app Streamlit en ligne, gratuitement | O4 |
| 5 | `slides` | Un support de présentation simple | O6 |
| 5 | `presenter-video` | Préparer une présentation de 5 minutes | O6 |
| 5 | `se-filmer` | Te filmer et partager ta vidéo | O6 |
| 5 | `questions-difficiles` | Répondre aux questions difficiles | O6 |

## Vocabulaire du module

| Terme | Catégorie (A anglais / B transparent) | Notion où il apparaît |
| --- | --- | --- |
| storytelling | A | `raconter` |
| résumé pour décideur (executive summary) | A | `rapport` |
| tableau de bord (dashboard) | A | `streamlit` |
| widget | A | `streamlit` |
| déployer (deploy) | A | `deployer-streamlit` |
| intervalle, marge d'erreur | B | `incertitude` |
| pitch | A | `presenter-video` |
| ordre de grandeur | B | `chiffres` |
| accessibilité, daltonisme | B | `accessibilite` |
| README | A | `readme-anglais` |
| cache de Streamlit, filtre | A | `streamlit-interactif` |
| diapositive (slide) | A | `slides` |

## Fil rouge et ancrage local

- **Situation** : tu présentes ton propre projet 1 (prix agricoles ou risque de crédit). Exemple suivi tout au long du cours : Awa présente son modèle de prix du riz à la présidente d'une coopérative de femmes de Ziguinchor, qui n'a que 10 minutes et aucune formation technique.
- **Personnages** : Awa (persona apprenante), Mme Diatta, présidente de la coopérative.
- **Données utilisées** : les résultats du projet 1 de l'apprenant ; un jeu de résultats d'exemple est fourni pour les exercices.

## Exercices prévus

| Id | Titre | Objectif | Difficulté (1–3) | Livrable non testable ? |
| --- | --- | --- | --- | --- |
| 1.8-ex01 à ex02 | Penser à ton public | O1, O3 | 1 | oui → GRILLE.md |
| 1.8-ex03 à ex05 | Montrer | O2 | 2 | non |
| 1.8-ex06 à ex07 | Écrire | O3, O5 | 2 | oui → GRILLE.md |
| 1.8-ex08 à ex09 | Un tableau de bord en ligne | O4 | 2–3 | non |
| 1.8-ex10 à ex11 | Présenter | O6 | 2–3 | non |
| 1.8-ex12 | Exercice clé : vidéo de présentation de 5 minutes du projet 1 | O1, O5, O6 | 3 | oui → GRILLE.md |

## Ressources matérielles

- **RAM maximale** : moins de 1 Go.
- **Téléchargements** : streamlit, environ 100 Mo installés. TODO(vérifier). Un logiciel gratuit d'enregistrement d'écran (OBS Studio) ou le téléphone pour la vidéo.
- **Temps de calcul le plus long** : négligeable.
- **Dépendances nouvelles** : streamlit.
- **API payante** : aucune. Streamlit Community Cloud est gratuit avec un compte GitHub (conditions lues le 25/11/2026).

## Point de contrôle sécurité et éthique

- Une app mise en ligne est publique : aucune donnée personnelle ni aucun secret dedans (secrets de Streamlit, pas dans le code).
- Ne pas exagérer ce que le modèle sait faire : la notion `incertitude` est notée dans la grille de l'exercice clé.

## Ressources externes gratuites

| Ressource | Langue | Durée ou taille | Licence | Pourquoi |
| --- | --- | --- | --- | --- |
| [Documentation de Streamlit](https://docs.streamlit.io/) | anglais | référence | Apache 2.0 | Composants, mise en page et mise en ligne sur Community Cloud. |

## Circuit

- [ ] 1. Fiche validée par le mainteneur — date :
- [ ] 2. Solution et tests (passent sur solution, échouent sur starter) — date :
- [ ] 3. Cours — date :
- [ ] 4. Exercices (énoncés, indices, starters) — date :
- [ ] 5. QCM (valide contre le schéma) — date :
- [ ] 6. Grille — date :
- [ ] 7. Relecture élève — date :
- [ ] 8. Relecture expert — date :

## Journal des relectures

| Date | Étape | Fichier et ligne | Problème | Correction |
| --- | --- | --- | --- | --- |
| | | | | |

## Points à vérifier

- TODO(vérifier) : l'exercice clé porte sur le projet 1, réalisé après le module selon le programme ; préciser avec le mainteneur s'il se fait sur une version intermédiaire du projet ou en fin d'étape.
- TODO(vérifier) : limites de ressources de Streamlit Community Cloud (mémoire, mise en veille des apps).
