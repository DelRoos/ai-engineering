---
id: "3.7"
titre: "Fine-tuning"
parcours: "03-llm"
promesse: "Savoir quand adapter un modèle à ton domaine, et le faire à moindre coût avec LoRA, même sans carte graphique, puis prouver que le résultat est meilleur."
question_saut: "Tu as déjà fine-tuné un modèle avec LoRA ?"
qcm: true
prerequis: ["3.5", "2.5"]
statut: brouillon
version: 1
mise_a_jour: 2026-11-25
---

# Fiche du module 3.7 — Fine-tuning

## Extrait du programme

- **Contenu** : Quand fine-tuner (ou pas), LoRA et QLoRA, préparation des données, évaluation avant et après
- **Exercice clé** : Fine-tuner avec LoRA un très petit modèle ouvert (environ 0,5 milliard de paramètres) pour un domaine précis, sur processeur ou sur Colab gratuit

## Objectifs vérifiables

| Id | À la fin, l'apprenant sait… | Évalué par |
| --- | --- | --- |
| O1 | Décider s'il faut fine-tuner ou non. | ex01 à ex03, qcm |
| O2 | Préparer un jeu de données d'entraînement de qualité. | ex04 à ex06, exercice clé (ex30), qcm |
| O3 | Fine-tuner un petit modèle (SFT, LoRA, QLoRA, DoRA, distillation) et en régler les paramètres. | ex07 à ex09, ex10 à ex14, ex22 à ex24, exercice clé (ex30), qcm |
| O4 | Évaluer un modèle avant et après fine-tuning. | ex25 à ex29, exercice clé (ex30), qcm |
| O5 | Partager et utiliser le modèle obtenu. | ex22 à ex24, ex31 à ex33, qcm |
| O6 | Entraîner un modèle sur des préférences (DPO) ou des récompenses vérifiables (GRPO), et repérer le détournement de récompense. | ex15 à ex17, ex18 à ex21, qcm |
| O7 | Choisir l'intervention (prompt, RAG, SFT, préférences, RL, distillation) selon le problème, les données et le budget. | ex22 à ex24, qcm |

## Chapitres

| Chapitre | Titre | Exercices |
| --- | --- | --- |
| 1 | Faut-il fine-tuner | 3 |
| 2 | Les données | 3 |
| 3 | SFT et adaptation au domaine | 3 |
| 4 | LoRA et ses variantes | 5 |
| 5 | Apprendre des préférences | 3 |
| 6 | Les récompenses vérifiables | 4 |
| 7 | Distiller et fusionner | 3 |
| 8 | Évaluer | 6 |
| 9 | Utiliser le modèle | 3 |

## Notions, dans l'ordre

| Chapitre | Id de la notion | Notion | Objectif |
| --- | --- | --- | --- |
| 1 | `prompt-rag-finetune` | Prompt, RAG ou fine-tuning ? | O1 |
| 1 | `cout-finetune` | Ce que coûte un fine-tuning | O1 |
| 1 | `types-finetuning` | Instructions, préférences, classification : les sortes de fine-tuning | O1 |
| 1 | `ft-api-ou-local` | Fine-tuner par API ou en local | O1 |
| 1 | `cas-usage-ft` | Les cas où le fine-tuning gagne | O1 |
| 2 | `format-instructions` | Le format des données d'instruction | O2 |
| 2 | `gabarits-chat` | Les gabarits de conversation (chat templates) | O2 |
| 2 | `qualite-donnees-ft` | Peu d'exemples, mais bons | O2 |
| 2 | `nettoyer-dedoublonner` | Nettoyer et dédoublonner | O2 |
| 2 | `donnees-generees` | Générer des données avec un modèle, et les vérifier | O2 |
| 3 | `sft` | L'apprentissage supervisé sur des instructions (SFT) | O3 |
| 3 | `masquer-prompt` | N'apprendre que sur la réponse : masquer le prompt | O3 |
| 3 | `pre-entrainement-continu` | Continuer le pré-entraînement sur des textes du domaine | O3 |
| 3 | `melanger-donnees` | Mélanger données du domaine et données générales | O3 |
| 3 | `finetuning-complet` | Le fine-tuning complet, et pourquoi on l'évite | O3 |
| 4 | `lora` | LoRA : n'entraîner que de petites matrices | O3 |
| 4 | `qlora` | QLoRA : LoRA sur un modèle quantifié | O3 |
| 4 | `rang-modules` | Le rang et les modules ciblés | O3 |
| 4 | `initialisation-lora` | L'initialisation et le facteur d'échelle d'un adaptateur | O3 |
| 4 | `dora` | DoRA : séparer la direction et l'amplitude des poids | O3 |
| 4 | `lancer-lora` | Lancer un fine-tuning LoRA sur processeur ou sur Colab | O3 |
| 4 | `reglages-ft` | Les réglages qui comptent | O3 |
| 4 | `surapprentissage-ft` | Repérer le surapprentissage pendant le fine-tuning | O3 |
| 5 | `paires-preferences` | Des paires de réponses : préférée et rejetée | O6 |
| 5 | `dpo` | Apprendre des préférences : DPO | O6 |
| 5 | `qualite-preferences` | La qualité des préférences : bruit, longueur, désaccords | O6 |
| 5 | `conflits-objectifs` | Utile, sûr, concis : quand les objectifs se contredisent | O6 |
| 5 | `variantes-preferences` | Les variantes de DPO et ce qu'elles corrigent | O6 |
| 6 | `rl-recompenses` | Apprendre par récompenses : notions de RL pour les LLM | O6 |
| 6 | `construire-recompenses` | Construire une récompense vérifiable : tests, format, réponse exacte | O6 |
| 6 | `grpo` | GRPO : comparer les réponses d'un même groupe | O6 |
| 6 | `detournement-recompense` | Quand le modèle détourne la récompense | O6 |
| 6 | `biais-objectifs-grpo` | Les biais de l'objectif GRPO : ce que corrigent DAPO et Dr. GRPO | O6 |
| 6 | `rl-petit-budget` | Une expérience de RL à petit budget | O6 |
| 7 | `distiller-llm` | Distiller un grand modèle dans un petit | O3 |
| 7 | `distillation-on-policy` | Distiller sur les réponses de l'élève : la distillation on-policy (GKD) | O3 |
| 7 | `fusion-modeles` | Fusionner des modèles | O3 |
| 7 | `fusionner-lora` | Fusionner l'adaptateur | O5 |
| 7 | `choisir-intervention` | Choisir l'intervention : prompt, RAG, SFT, préférences, RL ou distillation | O7 |
| 8 | `avant-apres` | Comparer avant et après | O4 |
| 8 | `oubli` | L'oubli catastrophique | O4 |
| 8 | `jeu-eval-ft` | Un jeu d'évaluation propre au domaine | O4 |
| 8 | `comparer-base` | Comparer au modèle de base et au prompt | O4 |
| 8 | `contamination-eval` | Vérifier que le test n'a pas fui dans l'entraînement | O4 |
| 8 | `tester-securite-ft` | Retester les refus après l'entraînement | O4 |
| 8 | `compromis-ft` | Lire les compromis : qualité, oubli, coût | O4 |
| 9 | `publier-modele` | Publier sur Hugging Face, avec sa fiche | O5 |
| 9 | `convertir-gguf` | Convertir en GGUF pour un usage local | O5 |
| 9 | `servir-local` | Servir le modèle en local | O5 |
| 9 | `servir-adaptateurs` | Servir plusieurs adaptateurs sur un même modèle | O5 |
| 9 | `documenter-modele-ft` | Documenter le modèle fine-tuné | O5 |

## Vocabulaire du module

| Terme | Catégorie (A anglais / B transparent) | Notion où il apparaît |
| --- | --- | --- |
| fine-tuning | A | `prompt-rag-finetune` |
| données d'instruction | B | `format-instructions` |
| LoRA, adaptateur (adapter) | A | `lora` |
| QLoRA | A | `qlora` |
| rang (rank), alpha | A | `reglages-ft` |
| oubli catastrophique (catastrophic forgetting) | A | `oubli` |
| fusion (merge) | A | `fusionner-lora` |
| SFT (supervised fine-tuning) | A | `sft` |
| pré-entraînement continu | A | `pre-entrainement-continu` |
| rang (LoRA), modules ciblés | A | `rang-modules` |
| DoRA | A | `dora` |
| GRPO | A | `grpo` |
| récompense vérifiable | A | `construire-recompenses` |
| détournement de récompense (reward hacking) | A | `detournement-recompense` |
| DAPO, Dr. GRPO | A | `biais-objectifs-grpo` |
| distillation on-policy, GKD | A | `distillation-on-policy` |

## Fil rouge et ancrage local

- **Situation** : une radio communautaire de Parakou reçoit des communiqués officiels écrits dans un français difficile. Un petit modèle fine-tuné les reformule en français simple, prêts à être lus à l'antenne.
- **Personnages** : Rachidi, animateur de la radio, et ses auditeurs.
- **Données utilisées** : quelques centaines de paires « texte officiel, version simple » créées et relues pour le cours (licence CC BY-SA 4.0).

## Exercices prévus

| Id | Titre | Objectif | Difficulté (1–3) | Livrable non testable ? |
| --- | --- | --- | --- | --- |
| 3.7-ex01 à ex03 | Faut-il fine-tuner | O1 | 1 | non |
| 3.7-ex04 à ex06 | Les données | O2 | 1 | non |
| 3.7-ex07 à ex09 | SFT et adaptation au domaine | O3 | 1 | non |
| 3.7-ex10 à ex14 | LoRA et ses variantes | O3 | 2 | non |
| 3.7-ex15 à ex17 | Apprendre des préférences | O6 | 2 | non |
| 3.7-ex18 à ex21 | Les récompenses vérifiables | O6 | 2 | non |
| 3.7-ex22 à ex24 | Distiller et fusionner | O3, O5, O7 | 2–3 | non |
| 3.7-ex25 à ex29 | Évaluer | O4 | 2–3 | non |
| 3.7-ex30 | Exercice clé : fine-tuner avec LoRA un très petit modèle ouvert pour un domaine précis | O2, O3, O4 | 3 | non |
| 3.7-ex31 à ex33 | Utiliser le modèle | O5 | 2–3 | non |

## Épreuve de niveau expert

**Épreuve** : sur une même tâche vérifiable (extraire des montants, répondre à des calculs), comparer le modèle de base avec un prompt, un SFT avec LoRA et un GRPO sur une récompense par code, puis montrer ce que chaque intervention améliore, ce qu'elle fait oublier et ce qu'elle coûte.

| Niveau démontré | Preuve attendue |
| --- | --- |
| Implémenter | Le SFT et le GRPO sur un très petit modèle, relançables |
| Diagnostiquer | Les cas de détournement de récompense et d'oubli, montrés par des exemples |
| Comparer | Base, prompt, SFT, GRPO sur le même jeu d'évaluation sans fuite |
| Choisir | L'intervention retenue, justifiée par qualité, oubli et coût |

**Statut des méthodes enseignées**

| Méthode | Statut | Pratique |
| --- | --- | --- |
| SFT avec LoRA ou QLoRA | établie | autonome sur un très petit modèle (CPU ou Colab gratuit) |
| DoRA | établie | expérience réduite, comparée à LoRA |
| DPO | établie | expérience réduite, quelques centaines de paires |
| GRPO avec récompense vérifiable | établie, coûteuse | expérience réduite : très petit modèle, peu de pas, résultats documentés |
| DAPO, Dr. GRPO | récente | lecture critique et option activée dans l'expérience réduite |
| Distillation on-policy (GKD) | établie, coûteuse | expérience réduite entre deux très petits modèles |
| Pré-entraînement continu | coûteuse | analyse de résultats publiés, essai sur un petit corpus |

## Ressources matérielles

- **RAM maximale** : 4 à 8 Go sur processeur avec un modèle d'environ 0,5 milliard de paramètres, TODO(vérifier).
- **Téléchargements** : le modèle de base (environ 1 Go), peft et trl.
- **Temps de calcul le plus long** : 1 à 3 heures sur 4 cœurs, ou moins de 30 minutes sur le GPU gratuit de Colab, TODO(vérifier).
- **Dépendances nouvelles** : peft, trl, datasets, accelerate.
- **API payante** : aucune. Colab gratuit en option.

## Point de contrôle sécurité et éthique

Un modèle fine-tuné peut perdre les protections de son modèle de base : retester les refus et la sécurité après l'entraînement. Vérifier la licence du modèle de base avant de publier.

## Ressources externes gratuites

| Ressource | Langue | Type | Licence ou accès | Pourquoi |
| --- | --- | --- | --- | --- |
| [Documentation de PEFT](https://huggingface.co/docs/peft) | anglais | documentation | Apache 2.0 | LoRA et QLoRA, avec des exemples. |
| [Documentation de TRL](https://huggingface.co/docs/trl) | anglais | documentation | Apache 2.0 | Instructions, DPO et récompenses. |
| [Documentation d'Unsloth](https://docs.unsloth.ai/) | anglais | documentation | Apache 2.0 | Fine-tuner plus vite avec moins de mémoire. |
| [Le blog de Philipp Schmid](https://www.philschmid.de/) | anglais | blog | accès libre | Des tutoriels pas à pas de fine-tuning. |
| [DoRA: Weight-Decomposed Low-Rank Adaptation](https://arxiv.org/abs/2402.09353) | anglais | article | accès libre | Une variante de LoRA, et comment l'évaluer face à LoRA. |
| [Direct Preference Optimization](https://arxiv.org/abs/2305.18290) | anglais | article | accès libre | L'article de DPO. |
| [TRL, GRPO Trainer](https://huggingface.co/docs/trl/grpo_trainer) | anglais | documentation | Apache 2.0 | GRPO en pratique, avec ses options DAPO et Dr. GRPO. |
| [DAPO](https://arxiv.org/abs/2503.14476) | anglais | article | accès libre | Les corrections apportées à GRPO pour l'entraînement à grande échelle. |
| [Understanding R1-Zero-Like Training (Dr. GRPO)](https://arxiv.org/abs/2503.20783) | anglais | article | accès libre | Les biais de l'objectif GRPO, analysés et corrigés. |
| [TRL, GKD Trainer](https://huggingface.co/docs/trl/gkd_trainer) | anglais | documentation | Apache 2.0 | La distillation on-policy en pratique. |

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

- TODO(vérifier) : modèle de base recommandé (environ 0,5 milliard de paramètres, licence permissive) et temps réel sur la machine minimale.
- TODO(vérifier) : compléter le vocabulaire des notions ajoutées par la seconde passe d'audit (25/11/2026), en vérifiant chaque terme dans docs/glossaire.md.
