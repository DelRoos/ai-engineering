---
id: "3.10"
titre: "Multimodal, voix et génération d'images"
parcours: "03-llm"
promesse: "Sortir du texte : faire voir, écouter et parler l'IA, pour servir aussi les personnes qui lisent peu ou pas."
question_saut: "Tu as déjà construit un assistant vocal ?"
qcm: true
prerequis: ["3.4"]
statut: brouillon
version: 1
mise_a_jour: 2026-11-25
---

# Fiche du module 3.10 — Multimodal, voix et génération d'images

## Extrait du programme

- **Contenu** : Vision + texte, reconnaissance vocale (Whisper), synthèse vocale, modèles de diffusion pour la génération d'images, cas d'usage pour les populations peu alphabétisées
- **Exercice clé** : Assistant vocal simple en français ou en langue locale

## Objectifs vérifiables

| Id | À la fin, l'apprenant sait… | Évalué par |
| --- | --- | --- |
| O1 | Utiliser un modèle qui comprend à la fois les images et le texte. | ex01 à ex02, qcm |
| O2 | Transcrire la parole avec Whisper, en local. | ex03 à ex04, exercice clé (ex11), qcm |
| O3 | Synthétiser de la voix. | ex05 à ex06, exercice clé (ex11), qcm |
| O4 | Générer des images avec un modèle de diffusion en connaissant ses risques. | ex07 à ex08, qcm |
| O5 | Concevoir un service d'IA pour des personnes peu alphabétisées. | ex09 à ex10, exercice clé (ex11), qcm |

## Chapitres

| Chapitre | Titre | Exercices |
| --- | --- | --- |
| 1 | Voir et lire | 2 |
| 2 | Écouter | 2 |
| 3 | Parler | 2 |
| 4 | Créer des images | 2 |
| 5 | Pour tous | 3 |

## Notions, dans l'ordre

| Chapitre | Id de la notion | Notion | Objectif |
| --- | --- | --- | --- |
| 1 | `vlm` | Les modèles vision-langage | O1 |
| 1 | `lire-document-vlm` | Lire un document avec un modèle vision-langage | O1 |
| 1 | `questionner-image` | Décrire et questionner une image | O1 |
| 2 | `audio-numerique` | Le son numérique en bref | O2 |
| 2 | `whisper` | Transcrire avec Whisper | O2 |
| 2 | `whisper-local` | Whisper en local, sur processeur | O2 |
| 3 | `synthese-vocale` | La synthèse vocale | O3 |
| 3 | `voix-locales` | Des voix en langues locales | O3 |
| 4 | `diffusion` | Les modèles de diffusion | O4 |
| 4 | `generer-image` | Générer une image sur un petit PC | O4 |
| 4 | `risques-images` | Deepfakes, droits et consentement | O4 |
| 5 | `peu-alphabetises` | Concevoir pour les personnes peu alphabétisées | O5 |
| 5 | `assistant-vocal` | Un assistant vocal de bout en bout | O5 |
| 5 | `canaux-vocaux` | Atteindre les gens : téléphone, messagerie, appel | O5 |

## Vocabulaire du module

| Terme | Catégorie (A anglais / B transparent) | Notion où il apparaît |
| --- | --- | --- |
| multimodal | A | `vlm` |
| modèle vision-langage (VLM) | A | `vlm` |
| transcription, Whisper | A | `whisper` |
| synthèse vocale (TTS) | A | `synthese-vocale` |
| diffusion, débruitage | A | `diffusion` |
| deepfake | A | `risques-images` |

## Fil rouge et ancrage local

- **Situation** : au marché de Mopti, des vendeuses qui ne lisent pas veulent connaître les prix et la météo. Elles posent leur question à voix haute, en bambara ou en français, et l'assistant leur répond à voix haute.
- **Personnages** : Kadiatou, vendeuse de poisson séché, et sa fille qui l'aide avec le téléphone.
- **Données utilisées** : enregistrements de démonstration fournis avec consentement, et les données de prix et de météo des modules précédents.

## Exercices prévus

| Id | Titre | Objectif | Difficulté (1–3) | Livrable non testable ? |
| --- | --- | --- | --- | --- |
| 3.10-ex01 à ex02 | Voir et lire | O1 | 1–2 | non |
| 3.10-ex03 à ex04 | Écouter | O2 | 2 | non |
| 3.10-ex05 à ex06 | Parler | O3 | 2 | non |
| 3.10-ex07 à ex08 | Créer des images | O4 | 2 | non |
| 3.10-ex09 à ex10 | Pour tous | O5 | 2–3 | non |
| 3.10-ex11 | Exercice clé : un assistant vocal simple en français ou en langue locale | O2, O3, O5 | 3 | oui → GRILLE.md (test avec des utilisateurs) |

## Ressources matérielles

- **RAM maximale** : 4 à 8 Go.
- **Téléchargements** : Whisper small (environ 500 Mo), un modèle de synthèse vocale (100 à 500 Mo), un petit modèle de diffusion facultatif (2 Go et plus), TODO(vérifier).
- **Temps de calcul le plus long** : génération d'image très lente sur processeur (plusieurs minutes) : facultative, Colab en option, TODO(vérifier).
- **Dépendances nouvelles** : faster-whisper, une bibliothèque de synthèse vocale (Piper ou équivalent).
- **API payante** : aucune.

## Point de contrôle sécurité et éthique

Jamais de voix ou de visage d'une personne réelle sans son consentement. Les images générées sont signalées comme telles.

## Ressources externes gratuites

| Ressource | Langue | Durée ou taille | Licence | Pourquoi |
| --- | --- | --- | --- | --- |
| [Le cours audio de Hugging Face](https://huggingface.co/learn/audio-course) | anglais | cours | Apache 2.0 | Reconnaissance et synthèse vocales, pas à pas. |
| [Whisper](https://github.com/openai/whisper) | anglais | référence | MIT | Le modèle de transcription du module. |

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

- TODO(vérifier) : moteur de synthèse vocale recommandé et voix disponibles en langues africaines.
- TODO(vérifier) : modèle vision-langage assez petit pour la machine minimale.
