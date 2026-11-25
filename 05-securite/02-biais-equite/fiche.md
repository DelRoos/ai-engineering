---
id: "5.2"
titre: "Biais, équité, fiabilité"
parcours: "05-securite"
promesse: "Construire des systèmes justes et fiables : mesurer les biais, les réduire, limiter les hallucinations et garder l'humain aux commandes."
question_saut: "Tu mesures déjà les biais et les hallucinations de tes modèles ?"
qcm: true
prerequis: ["1.6", "3.5"]
statut: brouillon
version: 1
mise_a_jour: 2026-11-25
---

# Fiche du module 5.2 — Biais, équité, fiabilité

## Extrait du programme

- **Contenu** : Mesurer les biais (genre, langue, région), hallucinations, explicabilité, supervision humaine
- **Exercice clé** : Mesurer les écarts de performance d'un modèle entre groupes

## Objectifs vérifiables

| Id | À la fin, l'apprenant sait… | Évalué par |
| --- | --- | --- |
| O1 | Mesurer les biais d'un modèle selon le genre, la langue et la région. | ex01 à ex02, ex03 à ex05, exercice clé (ex06), qcm |
| O2 | Choisir une définition de l'équité adaptée au cas. | ex03 à ex05, exercice clé (ex06), qcm |
| O3 | Réduire un biais mesuré, en connaissant les arbitrages. | exercice clé (ex06), ex07 à ex08, qcm |
| O4 | Mesurer et limiter les hallucinations. | ex09 à ex11, qcm |
| O5 | Expliquer une décision et organiser la supervision humaine et les recours. | ex12 à ex14, ex15 à ex16, qcm |

## Chapitres

| Chapitre | Titre | Exercices |
| --- | --- | --- |
| 1 | D'où viennent les biais | 2 |
| 2 | Mesurer | 4 |
| 3 | Corriger | 2 |
| 4 | La fiabilité | 3 |
| 5 | L'humain | 3 |
| 6 | Mesurer les impacts | 2 |

## Notions, dans l'ordre

| Chapitre | Id de la notion | Notion | Objectif |
| --- | --- | --- | --- |
| 1 | `sources-biais` | D'où viennent les biais | O1 |
| 1 | `biais-llm` | Les biais des LLM | O1 |
| 1 | `stereotypes` | Les stéréotypes dans les textes générés | O1 |
| 2 | `ecart-groupes` | Mesurer un écart entre groupes | O1 |
| 2 | `definitions-equite` | Les définitions de l'équité, et pourquoi elles se contredisent | O2 |
| 2 | `petits-groupes` | Mesurer quand un groupe est petit | O1 |
| 2 | `biais-langues` | Mesurer les écarts entre langues | O1 |
| 3 | `corriger-donnees` | Corriger les données | O3 |
| 3 | `corriger-modele` | Corriger le modèle ou le seuil | O3 |
| 3 | `arbitrages-equite` | Les arbitrages | O3 |
| 4 | `mesurer-hallucinations` | Mesurer les hallucinations | O4 |
| 4 | `limiter-hallucinations` | Limiter les hallucinations | O4 |
| 4 | `exprimer-incertitude` | Exprimer l'incertitude | O4 |
| 4 | `robustesse` | La robustesse : petites variations, grandes erreurs | O4 |
| 5 | `expliquer-personnes` | Expliquer une décision aux personnes concernées | O5 |
| 5 | `supervision-humaine` | La supervision humaine | O5 |
| 5 | `recours` | Le droit de contester une décision | O5 |
| 5 | `transparence` | Dire qu'on parle à une IA | O5 |
| 6 | `etude-impact` | L'étude d'impact d'un système d'IA | O5 |
| 6 | `impact-environnemental` | L'impact environnemental de l'IA | O5 |

## Vocabulaire du module

| Terme | Catégorie (A anglais / B transparent) | Notion où il apparaît |
| --- | --- | --- |
| biais (bias) | B | `sources-biais` |
| équité (fairness) | A | `definitions-equite` |
| parité démographique, égalité des chances | B | `definitions-equite` |
| groupe protégé | B | `ecart-groupes` |
| hallucination | B | `mesurer-hallucinations` |
| explicabilité | B | `expliquer-personnes` |
| supervision humaine (human oversight) | A | `supervision-humaine` |

## Fil rouge et ancrage local

- **Situation** : le modèle de crédit de la microfinance de Kinshasa (module 1.4) refuse plus souvent les femmes commerçantes, à dossier égal. Tu mesures l'écart, tu cherches pourquoi, et tu proposes une correction.
- **Personnages** : Grâce, analyste, et les clientes dont les prêts ont été refusés.
- **Données utilisées** : le jeu de prêts fictif du module 1.4, enrichi de variables de groupe (genre, langue, région) créées pour le cours.

## Exercices prévus

| Id | Titre | Objectif | Difficulté (1–3) | Livrable non testable ? |
| --- | --- | --- | --- | --- |
| 5.2-ex01 à ex02 | D'où viennent les biais | O1 | 1 | non |
| 5.2-ex03 à ex05 | Mesurer | O1, O2 | 1 | non |
| 5.2-ex06 | Exercice clé : mesurer les écarts de performance d'un modèle entre groupes | O1 à O3 | 3 | oui → GRILLE.md (analyse et recommandations) |
| 5.2-ex07 à ex08 | Corriger | O3 | 2 | non |
| 5.2-ex09 à ex11 | La fiabilité | O4 | 2 | non |
| 5.2-ex12 à ex14 | L'humain | O5 | 2–3 | non |
| 5.2-ex15 à ex16 | Mesurer les impacts | O5 | 2–3 | non |

## Ressources matérielles

- **RAM maximale** : moins de 2 Go.
- **Téléchargements** : fairlearn (quelques Mo).
- **Temps de calcul le plus long** : négligeable.
- **Dépendances nouvelles** : fairlearn.
- **API payante** : aucune.

## Point de contrôle sécurité et éthique

Les variables sensibles (genre, ethnie, religion) servent à mesurer les biais, pas à décider : leur collecte suit la loi (module 5.3).

## Ressources externes gratuites

| Ressource | Langue | Durée ou taille | Licence | Pourquoi |
| --- | --- | --- | --- | --- |
| [Fairlearn](https://fairlearn.org/) | anglais | référence | MIT | Mesurer et réduire les biais d'un modèle. |

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

- TODO(vérifier) : cadre légal de l'usage de variables sensibles pour mesurer les biais dans les pays visés.
- TODO(vérifier) : compléter le vocabulaire des notions ajoutées par la seconde passe d'audit (25/11/2026), en vérifiant chaque terme dans docs/glossaire.md.
