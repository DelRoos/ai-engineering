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
| O1 | Décider s'il faut fine-tuner ou non. | ex01 à ex02, qcm |
| O2 | Préparer un jeu de données d'entraînement de qualité. | ex03 à ex04, exercice clé (ex10), qcm |
| O3 | Fine-tuner un petit modèle avec LoRA ou QLoRA. | ex05 à ex07, exercice clé (ex10), qcm |
| O4 | Évaluer un modèle avant et après fine-tuning. | ex08 à ex09, exercice clé (ex10), qcm |
| O5 | Partager et utiliser le modèle obtenu. | ex11 à ex12, qcm |

## Chapitres

| Chapitre | Titre | Exercices |
| --- | --- | --- |
| 1 | Faut-il fine-tuner | 2 |
| 2 | Les données | 2 |
| 3 | LoRA et QLoRA | 3 |
| 4 | Évaluer | 3 |
| 5 | Utiliser le modèle | 2 |

## Notions, dans l'ordre

| Chapitre | Id de la notion | Notion | Objectif |
| --- | --- | --- | --- |
| 1 | `prompt-rag-finetune` | Prompt, RAG ou fine-tuning ? | O1 |
| 1 | `cout-finetune` | Ce que coûte un fine-tuning | O1 |
| 2 | `format-instructions` | Le format des données d'instruction | O2 |
| 2 | `qualite-donnees-ft` | Peu d'exemples, mais bons | O2 |
| 2 | `donnees-generees` | Générer des données avec un modèle, et les vérifier | O2 |
| 3 | `finetuning-complet` | Le fine-tuning complet, et pourquoi on l'évite | O3 |
| 3 | `lora` | LoRA : n'entraîner que de petites matrices | O3 |
| 3 | `qlora` | QLoRA : LoRA sur un modèle quantifié | O3 |
| 3 | `lancer-lora` | Lancer un fine-tuning LoRA sur processeur ou sur Colab | O3 |
| 3 | `reglages-ft` | Les réglages qui comptent | O3 |
| 4 | `avant-apres` | Comparer avant et après | O4 |
| 4 | `oubli` | L'oubli catastrophique | O4 |
| 5 | `fusionner-lora` | Fusionner l'adaptateur | O5 |
| 5 | `publier-modele` | Publier sur Hugging Face, avec sa fiche | O5 |
| 5 | `servir-local` | Servir le modèle en local | O5 |

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

## Fil rouge et ancrage local

- **Situation** : une radio communautaire de Parakou reçoit des communiqués officiels écrits dans un français difficile. Un petit modèle fine-tuné les reformule en français simple, prêts à être lus à l'antenne.
- **Personnages** : Rachidi, animateur de la radio, et ses auditeurs.
- **Données utilisées** : quelques centaines de paires « texte officiel, version simple » créées et relues pour le cours (licence CC BY-SA 4.0).

## Exercices prévus

| Id | Titre | Objectif | Difficulté (1–3) | Livrable non testable ? |
| --- | --- | --- | --- | --- |
| 3.7-ex01 à ex02 | Faut-il fine-tuner | O1 | 1–2 | non |
| 3.7-ex03 à ex04 | Les données | O2 | 2 | non |
| 3.7-ex05 à ex07 | LoRA et QLoRA | O3 | 2 | non |
| 3.7-ex08 à ex09 | Évaluer | O4 | 2 | non |
| 3.7-ex10 | Exercice clé : fine-tuner avec LoRA un très petit modèle ouvert pour un domaine précis | O2, O3, O4 | 3 | non |
| 3.7-ex11 à ex12 | Utiliser le modèle | O5 | 2–3 | non |

## Ressources matérielles

- **RAM maximale** : 4 à 8 Go sur processeur avec un modèle d'environ 0,5 milliard de paramètres, TODO(vérifier).
- **Téléchargements** : le modèle de base (environ 1 Go), peft et trl.
- **Temps de calcul le plus long** : 1 à 3 heures sur 4 cœurs, ou moins de 30 minutes sur le GPU gratuit de Colab, TODO(vérifier).
- **Dépendances nouvelles** : peft, trl, datasets, accelerate.
- **API payante** : aucune. Colab gratuit en option.

## Point de contrôle sécurité et éthique

Un modèle fine-tuné peut perdre les protections de son modèle de base : retester les refus et la sécurité après l'entraînement. Vérifier la licence du modèle de base avant de publier.

## Ressources externes gratuites

| Ressource | Langue | Durée ou taille | Licence | Pourquoi |
| --- | --- | --- | --- | --- |
| [Documentation de PEFT (Hugging Face)](https://huggingface.co/docs/peft) | anglais | référence | Apache 2.0 | LoRA et QLoRA, avec des exemples. |
| [Documentation de TRL (Hugging Face)](https://huggingface.co/docs/trl) | anglais | référence | Apache 2.0 | Entraîner un modèle sur des données d'instruction. |

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
