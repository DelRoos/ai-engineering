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
| O1 | Utiliser un modèle qui comprend à la fois les images et le texte. | ex01 à ex03, qcm |
| O2 | Transcrire la parole avec Whisper, en local. | ex07 à ex09, exercice clé (ex25), qcm |
| O3 | Synthétiser de la voix. | ex10 à ex12, exercice clé (ex25), qcm |
| O4 | Générer des images avec un modèle de diffusion en connaissant ses risques. | ex17 à ex21, qcm |
| O5 | Concevoir un service d'IA pour des personnes peu alphabétisées. | ex22 à ex24, exercice clé (ex25), qcm |
| O6 | Traiter des vidéos et des documents visuels, et évaluer un système multimodal sur ses propres données. | ex04 à ex06, qcm |
| O7 | Comparer une architecture vocale en cascade et un modèle intégré sur la latence, la qualité, le coût et le contrôle. | ex13 à ex16, qcm |

## Chapitres

| Chapitre | Titre | Exercices |
| --- | --- | --- |
| 1 | Voir et lire | 3 |
| 2 | Le temps et les documents | 3 |
| 3 | Écouter | 3 |
| 4 | Parler | 3 |
| 5 | Les architectures vocales | 4 |
| 6 | Créer des images | 5 |
| 7 | Pour tous | 4 |

## Notions, dans l'ordre

| Chapitre | Id de la notion | Notion | Objectif |
| --- | --- | --- | --- |
| 1 | `vlm` | Les modèles vision-langage | O1 |
| 1 | `clip` | Relier images et textes : CLIP | O1 |
| 1 | `lire-document-vlm` | Lire un document avec un modèle vision-langage | O1 |
| 1 | `questionner-image` | Décrire et questionner une image | O1 |
| 1 | `graphiques-tableaux` | Lire des graphiques et des tableaux | O1 |
| 2 | `comprehension-temporelle` | Ce que la vidéo ajoute : l'ordre et la durée | O6 |
| 2 | `video-modeles` | Donner une vidéo à un modèle : échantillonner les images et le son | O6 |
| 2 | `recherche-visuelle-docs` | Chercher dans des pages de documents par l'image | O6 |
| 2 | `adapter-multimodal` | Adapter un modèle vision-langage à ses documents | O6 |
| 2 | `evaluer-multimodal` | Évaluer un système multimodal : jeux, métriques, erreurs typiques | O6 |
| 3 | `audio-numerique` | Le son numérique en bref | O2 |
| 3 | `nettoyer-audio` | Préparer un enregistrement : bruit, silences, découpage | O2 |
| 3 | `whisper` | Transcrire avec Whisper | O2 |
| 3 | `whisper-local` | Whisper en local, sur processeur | O2 |
| 3 | `diarisation` | Qui parle quand ? La diarisation | O2 |
| 4 | `synthese-vocale` | La synthèse vocale | O3 |
| 4 | `voix-locales` | Des voix en langues locales | O3 |
| 4 | `voix-temps-reel` | Répondre vite : la voix en temps réel | O3 |
| 4 | `cloner-voix` | Cloner une voix : possibilités et interdits | O3 |
| 4 | `evaluer-voix` | Évaluer une voix de synthèse | O3 |
| 5 | `cascade-vocale` | La cascade : transcrire, raisonner, synthétiser | O7 |
| 5 | `modele-vocal-integre` | Un seul modèle qui écoute et qui parle | O7 |
| 5 | `streaming-vocal` | Le streaming : commencer à répondre avant la fin de la phrase | O7 |
| 5 | `tours-de-parole` | Tours de parole, interruptions et latence perçue | O7 |
| 5 | `cas-qwen-omni` | Un modèle omni en détail : Qwen3.5-Omni | O7 |
| 5 | `choisir-architecture-vocale` | Cascade ou modèle intégré : langue, coût, contrôle | O7 |
| 6 | `diffusion` | Les modèles de diffusion | O4 |
| 6 | `transformers-diffusion` | Des transformers à la place du U-Net : les DiT | O4 |
| 6 | `rectified-flow` | Des trajectoires plus droites : le rectified flow | O4 |
| 6 | `generer-image` | Générer une image sur un petit PC | O4 |
| 6 | `prompts-images` | Bien décrire une image à générer | O4 |
| 6 | `modifier-image` | Modifier une image existante | O4 |
| 6 | `risques-images` | Deepfakes, droits et consentement | O4 |
| 7 | `peu-alphabetises` | Concevoir pour les personnes peu alphabétisées | O5 |
| 7 | `assistant-vocal` | Un assistant vocal de bout en bout | O5 |
| 7 | `canaux-vocaux` | Atteindre les gens : téléphone, messagerie, appel | O5 |
| 7 | `tester-terrain` | Tester avec les utilisateurs sur le terrain | O5 |
| 7 | `accessibilite-handicap` | Pour les personnes en situation de handicap | O5 |

## Vocabulaire du module

| Terme | Catégorie (A anglais / B transparent) | Notion où il apparaît |
| --- | --- | --- |
| multimodal | A | `vlm` |
| modèle vision-langage (VLM) | A | `vlm` |
| transcription, Whisper | A | `whisper` |
| synthèse vocale (TTS) | A | `synthese-vocale` |
| diffusion, débruitage | A | `diffusion` |
| deepfake | A | `risques-images` |
| cascade vocale (ASR, LLM, TTS) | A | `cascade-vocale` |
| modèle omni (omni-modal) | A | `modele-vocal-integre` |
| tour de parole, interruption (barge-in) | A | `tours-de-parole` |
| DiT (Diffusion Transformer) | A | `transformers-diffusion` |
| rectified flow | A | `rectified-flow` |

## Fil rouge et ancrage local

- **Situation** : au marché de Mopti, des vendeuses qui ne lisent pas veulent connaître les prix et la météo. Elles posent leur question à voix haute, en bambara ou en français, et l'assistant leur répond à voix haute.
- **Personnages** : Kadiatou, vendeuse de poisson séché, et sa fille qui l'aide avec le téléphone.
- **Données utilisées** : enregistrements de démonstration fournis avec consentement, et les données de prix et de météo des modules précédents.

## Exercices prévus

| Id | Titre | Objectif | Difficulté (1–3) | Livrable non testable ? |
| --- | --- | --- | --- | --- |
| 3.10-ex01 à ex03 | Voir et lire | O1 | 1 | non |
| 3.10-ex04 à ex06 | Le temps et les documents | O6 | 1 | non |
| 3.10-ex07 à ex09 | Écouter | O2 | 2 | non |
| 3.10-ex10 à ex12 | Parler | O3 | 2 | non |
| 3.10-ex13 à ex16 | Les architectures vocales | O7 | 2–3 | non |
| 3.10-ex17 à ex21 | Créer des images | O4 | 2–3 | non |
| 3.10-ex22 à ex24 | Pour tous | O5 | 2–3 | non |
| 3.10-ex25 | Exercice clé : un assistant vocal simple en français ou en langue locale | O2, O3, O5 | 3 | oui → GRILLE.md (test avec des utilisateurs) |

## Épreuve de niveau expert

**Épreuve** : construire deux assistants vocaux pour la même tâche, une cascade locale (Whisper, petit LLM, Piper) et un modèle intégré par API, puis mesurer la latence perçue, la qualité des réponses, le comportement aux interruptions et le coût par conversation, en français et dans une langue locale.

| Niveau démontré | Preuve attendue |
| --- | --- |
| Implémenter | La cascade locale en streaming, relançable |
| Diagnostiquer | Où se perd le temps et où naissent les erreurs, étape par étape |
| Comparer | Les deux architectures sur les mêmes conversations enregistrées |
| Choisir | L'architecture retenue selon la langue, le réseau et le budget |

**Statut des méthodes enseignées**

| Méthode | Statut | Pratique |
| --- | --- | --- |
| Cascade Whisper, LLM, synthèse vocale | établie | autonome, en local |
| Modèles omni intégrés | récente | usage par API gratuite ou analyse de résultats publiés |
| Recherche visuelle dans les documents | établie, coûteuse en mémoire | expérience réduite sur quelques pages |
| Adapter un modèle vision-langage | coûteuse | expérience réduite sur un très petit modèle, Colab gratuit |
| DiT, rectified flow | établie | génération avec un petit modèle, sans entraînement |

## Ressources matérielles

- **RAM maximale** : 4 à 8 Go.
- **Téléchargements** : Whisper small (environ 500 Mo), un modèle de synthèse vocale (100 à 500 Mo), un petit modèle de diffusion facultatif (2 Go et plus), TODO(vérifier).
- **Temps de calcul le plus long** : génération d'image très lente sur processeur (plusieurs minutes) : facultative, Colab en option, TODO(vérifier).
- **Dépendances nouvelles** : faster-whisper, une bibliothèque de synthèse vocale (Piper ou équivalent).
- **API payante** : aucune.

## Point de contrôle sécurité et éthique

Jamais de voix ou de visage d'une personne réelle sans son consentement. Les images générées sont signalées comme telles.

## Ressources externes gratuites

| Ressource | Langue | Type | Licence ou accès | Pourquoi |
| --- | --- | --- | --- | --- |
| [Le cours audio de Hugging Face](https://huggingface.co/learn/audio-course) | anglais | cours | Apache 2.0 | Reconnaissance et synthèse vocales. |
| [Le cours de diffusion de Hugging Face](https://huggingface.co/learn/diffusion-course) | anglais | cours | Apache 2.0 | Comprendre et utiliser les modèles de diffusion. |
| [Whisper](https://github.com/openai/whisper) | anglais | documentation | MIT | Le modèle de transcription du module. |
| [Piper](https://github.com/rhasspy/piper) | anglais | documentation | MIT | Une synthèse vocale légère, en local. |
| [Qwen3.5-Omni Technical Report](https://arxiv.org/abs/2604.15804) | anglais | article | accès libre | Un modèle qui écoute, voit et parle, décrit en détail. |
| [ColPali](https://arxiv.org/abs/2407.01449) | anglais | article | accès libre | Chercher dans des pages par leur image. |
| [Scaling Rectified Flow Transformers](https://arxiv.org/abs/2403.03206) | anglais | article | accès libre | Le rectified flow et les transformers de diffusion. |

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
- TODO(vérifier) : compléter le vocabulaire des notions ajoutées par la seconde passe d'audit (25/11/2026), en vérifiant chaque terme dans docs/glossaire.md.
