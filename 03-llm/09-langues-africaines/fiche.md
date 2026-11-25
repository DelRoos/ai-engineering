---
id: "3.9"
titre: "Langues africaines peu dotées"
parcours: "03-llm"
promesse: "Faire parler l'IA dans les langues de chez nous : comprendre pourquoi les modèles échouent sur ces langues, trouver les ressources, améliorer un modèle et le mesurer avec des locuteurs."
question_saut: "Tu as déjà adapté un modèle à une langue africaine ?"
qcm: true
prerequis: ["3.7"]
statut: brouillon
version: 1
mise_a_jour: 2026-11-25
---

# Fiche du module 3.9 — Langues africaines peu dotées

## Extrait du programme

- **Contenu** : Pourquoi les modèles échouent sur ces langues, tokenisation, jeux de données existants (Masakhane, AfriSenti, MasakhaNER), traduction, reconnaissance vocale, fine-tuning avec peu de données, évaluation avec des locuteurs natifs
- **Exercice clé** : Améliorer et mesurer un modèle sur une langue locale (traduction, classification ou transcription)

## Objectifs vérifiables

| Id | À la fin, l'apprenant sait… | Évalué par |
| --- | --- | --- |
| O1 | Expliquer pourquoi les modèles échouent sur les langues peu dotées. | ex01 à ex03, qcm |
| O2 | Trouver et évaluer les jeux de données et modèles existants. | ex04 à ex06, exercice clé (ex17), qcm |
| O3 | Traduire, classer et analyser des textes en langue locale. | ex07 à ex09, qcm |
| O4 | Transcrire la parole en langue locale. | ex10 à ex11, qcm |
| O5 | Améliorer un modèle avec peu de données. | ex12 à ex14, exercice clé (ex17), qcm |
| O6 | Évaluer avec des métriques adaptées et des locuteurs natifs. | ex15 à ex16, exercice clé (ex17), qcm |

## Chapitres

| Chapitre | Titre | Exercices |
| --- | --- | --- |
| 1 | Le problème | 3 |
| 2 | Les ressources | 3 |
| 3 | Le texte | 3 |
| 4 | La parole | 2 |
| 5 | Avec peu de données | 3 |
| 6 | Évaluer | 3 |

## Notions, dans l'ordre

| Chapitre | Id de la notion | Notion | Objectif |
| --- | --- | --- | --- |
| 1 | `langues-peu-dotees` | Ce qu'est une langue peu dotée | O1 |
| 1 | `tokenisation-langues` | Ce que la tokenisation fait à ces langues | O1 |
| 1 | `ecritures` | Orthographes, alphabets et variantes | O1 |
| 1 | `alternance-codique` | Quand on mélange les langues : l'alternance codique | O1 |
| 2 | `masakhane` | La communauté Masakhane | O2 |
| 2 | `jeux-africains` | Les jeux de données : AfriSenti, MasakhaNER et les autres | O2 |
| 2 | `modeles-africains` | Les modèles multilingues qui couvrent l'Afrique | O2 |
| 2 | `identifier-langue` | Reconnaître la langue d'un texte | O2 |
| 3 | `normaliser-langue` | Normaliser l'orthographe et les accents | O3 |
| 3 | `traduction-langues` | Traduire vers et depuis une langue locale | O3 |
| 3 | `classification-langues` | Classer des textes : sentiment et sujets | O3 |
| 3 | `entites-langues` | Reconnaître les noms de personnes et de lieux | O3 |
| 4 | `reconnaissance-vocale` | La reconnaissance vocale | O4 |
| 4 | `whisper-langues` | Whisper et les langues africaines | O4 |
| 4 | `synthese-langues` | Faire parler une machine en langue locale | O4 |
| 5 | `peu-exemples` | Apprendre avec peu d'exemples | O5 |
| 5 | `retro-traduction` | Multiplier les données : la rétro-traduction | O5 |
| 5 | `adapter-langue` | Adapter un modèle à une langue locale | O5 |
| 5 | `collecte-communautaire` | Collecter des données avec la communauté | O5 |
| 5 | `souverainete-donnees` | À qui appartiennent les données d'une langue ? | O5 |
| 6 | `metriques-traduction` | Mesurer une traduction : BLEU et chrF | O6 |
| 6 | `wer-cer` | Mesurer une transcription : WER et CER | O6 |
| 6 | `locuteurs-natifs` | Évaluer avec des locuteurs natifs | O6 |

## Vocabulaire du module

| Terme | Catégorie (A anglais / B transparent) | Notion où il apparaît |
| --- | --- | --- |
| langue peu dotée (low-resource language) | A | `langues-peu-dotees` |
| corpus parallèle | B | `traduction-langues` |
| NER (reconnaissance d'entités nommées) | A | `entites-langues` |
| ASR (reconnaissance automatique de la parole) | A | `reconnaissance-vocale` |
| WER (taux d'erreur de mots) | A | `whisper-langues` |
| BLEU, chrF | A | `metriques-traduction` |
| locuteur natif | B | `locuteurs-natifs` |

## Fil rouge et ancrage local

- **Situation** : une ONG de Thiès veut que ses messages de prévention santé arrivent en wolof, à l'écrit et à l'oral. Les modèles du marché traduisent mal : tu en améliores un, et tu le fais juger par des locuteurs.
- **Personnages** : Ndèye, chargée de communication de l'ONG, et des habitants qui acceptent d'évaluer les traductions.
- **Données utilisées** : jeux publics de Masakhane, AfriSenti et MasakhaNER (licences variables, TODO(vérifier)), et les données collectées par l'apprenant avec consentement (module 1.3).

## Exercices prévus

| Id | Titre | Objectif | Difficulté (1–3) | Livrable non testable ? |
| --- | --- | --- | --- | --- |
| 3.9-ex01 à ex03 | Le problème | O1 | 1 | non |
| 3.9-ex04 à ex06 | Les ressources | O2 | 1 | non |
| 3.9-ex07 à ex09 | Le texte | O3 | 2 | non |
| 3.9-ex10 à ex11 | La parole | O4 | 2 | non |
| 3.9-ex12 à ex14 | Avec peu de données | O5 | 2–3 | non |
| 3.9-ex15 à ex16 | Évaluer | O6 | 2–3 | non |
| 3.9-ex17 | Exercice clé : améliorer et mesurer un modèle sur une langue locale | O2, O5, O6 | 3 | oui → GRILLE.md (protocole d'évaluation avec les locuteurs) |

## Ressources matérielles

- **RAM maximale** : 4 à 8 Go.
- **Téléchargements** : un modèle de traduction multilingue (environ 1 à 2 Go) et Whisper small (environ 500 Mo), TODO(vérifier).
- **Temps de calcul le plus long** : 1 à 3 heures pour l'adaptation sur processeur, ou Colab gratuit, TODO(vérifier).
- **Dépendances nouvelles** : transformers, peft, sacrebleu, openai-whisper ou faster-whisper.
- **API payante** : aucune.

## Point de contrôle sécurité et éthique

Respecter les communautés : consentement des locuteurs, crédit aux contributeurs, et licences des jeux de données. Une mauvaise traduction d'un message de santé peut faire du tort.

## Ressources externes gratuites

| Ressource | Langue | Durée ou taille | Licence | Pourquoi |
| --- | --- | --- | --- | --- |
| [Masakhane](https://www.masakhane.io/) | anglais | communauté | gratuit en ligne | La communauté de recherche sur les langues africaines. |
| [AfriSenti](https://github.com/afrisenti-semeval/afrisent-semeval-2023) | anglais | jeu de données | TODO(vérifier) | Des textes annotés en sentiment dans 14 langues africaines. |

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

- TODO(vérifier) : langues couvertes par les jeux publics, et choix des langues d'exemple du cours (wolof, fon, lingala, bambara…).
- TODO(vérifier) : licences des jeux AfriSenti et MasakhaNER.
- TODO(vérifier) : compléter le vocabulaire des notions ajoutées par la seconde passe d'audit (25/11/2026), en vérifiant chaque terme dans docs/glossaire.md.
