---
id: "8.1"
titre: "Penser une automatisation"
parcours: "08-automatisation-no-code"
promesse: "Voir les processus d'une organisation comme un professionnel de l'automatisation : les cartographier, les mesurer, choisir quoi automatiser, et concevoir des automatisations qui ne cassent pas, avant de toucher à un outil."
question_saut: "Tu sais déjà cartographier un processus, chiffrer ce qu'il coûte et décider quoi automatiser en premier ?"
qcm: true
prerequis: ["0.0"]
statut: brouillon
version: 1
mise_a_jour: 2026-11-25
---

# Fiche du module 8.1 — Penser une automatisation

## Extrait du programme

- **Contenu** : processus métier, déclencheurs et actions, données en JSON, conditions et boucles, erreurs et doublons, no code ou code, coût total, accès et données personnelles
- **Exercice clé** : Cartographier et chiffrer les processus d'une PME, puis choisir et justifier les trois automatisations à faire en premier

## Objectifs vérifiables

| Id | À la fin, l'apprenant sait… | Évalué par |
| --- | --- | --- |
| O1 | Cartographier et mesurer un processus métier avec les personnes qui le font. | ex01 à ex03, qcm |
| O2 | Décrire une automatisation avec ses déclencheurs, actions, données, conditions et boucles. | ex04 à ex07, qcm |
| O3 | Prévoir les erreurs, les doublons et les tests d'une automatisation. | ex08 à ex10, qcm |
| O4 | Choisir entre no code, low code et code, en chiffrant le coût total. | ex11 à ex13, exercice clé (ex14), qcm |
| O5 | Protéger les accès, les secrets et les données personnelles qui transitent. | ex15 à ex17, qcm |

## Chapitres

| Chapitre | Titre | Exercices |
| --- | --- | --- |
| 1 | Voir les processus | 3 |
| 2 | Les briques d'une automatisation | 4 |
| 3 | Quand ça casse | 3 |
| 4 | No code, low code ou code | 4 |
| 5 | Accès et données | 3 |

## Notions, dans l'ordre

| Chapitre | Id de la notion | Notion | Objectif |
| --- | --- | --- | --- |
| 1 | `processus-metier` | Qu'est-ce qu'un processus métier | O1 |
| 1 | `cartographier-processus` | Cartographier un processus avec les gens qui le font | O1 |
| 1 | `mesurer-processus` | Mesurer : temps, erreurs, volume, coût | O1 |
| 1 | `choisir-quoi-automatiser` | Choisir quoi automatiser en premier | O1 |
| 1 | `ce-qui-reste-humain` | Ce qui doit rester humain | O1 |
| 2 | `declencheurs` | Les déclencheurs : événement, horaire, webhook, manuel | O2 |
| 2 | `actions-connecteurs` | Les actions et les connecteurs | O2 |
| 2 | `donnees-flux` | Les données qui circulent : le JSON sans peur | O2 |
| 2 | `conditions-branches` | Conditions et branches | O2 |
| 2 | `boucles-lots` | Boucles et traitement par lots | O2 |
| 2 | `transformer-donnees-nocode` | Transformer les données : dates, textes, nombres | O2 |
| 3 | `erreurs-nocode` | Les erreurs : où elles arrivent et pourquoi | O3 |
| 3 | `reessayer-nocode` | Réessayer, contourner, alerter | O3 |
| 3 | `doublons-nocode` | Éviter les doublons et les envois en double | O3 |
| 3 | `tester-workflow` | Tester un workflow avec de fausses données | O3 |
| 3 | `surveiller-executions` | Surveiller les exécutions | O3 |
| 4 | `limites-nocode` | Les limites du no code : volume, logique, coût | O4 |
| 4 | `low-code` | Le low code : un peu de code là où il faut | O4 |
| 4 | `quand-coder` | Quand passer au code | O4 |
| 4 | `cout-total-nocode` | Le coût total : abonnements, exécutions, maintenance | O4 |
| 4 | `dependance-plateforme` | La dépendance à une plateforme | O4 |
| 5 | `comptes-acces` | Les comptes et les accès : qui connecte quoi | O5 |
| 5 | `secrets-nocode` | Les secrets dans une plateforme no code | O5 |
| 5 | `donnees-perso-nocode` | Les données personnelles qui transitent | O5 |
| 5 | `journaliser-nocode` | Garder une trace des traitements | O5 |
| 5 | `ou-passent-donnees` | Cloud ou auto-hébergé : où passent les données | O5 |

## Vocabulaire du module

| Terme | Catégorie (A anglais / B transparent) | Notion où il apparaît |
| --- | --- | --- |
| no code, low code | A | `limites-nocode` |
| déclencheur (trigger) | B | `declencheurs` |
| workflow | A | `actions-connecteurs` |
| webhook | A | `declencheurs` |
| connecteur | B | `actions-connecteurs` |

## Fil rouge et ancrage local

- **Situation** : Une agence de voyages de Lomé de 12 personnes croule sous les tâches répétitives : demandes par WhatsApp, devis, réservations, relances. Avant tout outil, tu comprends comment elle travaille.
- **Personnages** : Mme Agbeko, directrice de l'agence ; Kossi, Ama et Edem, conseillers.
- **Données utilisées** : des descriptions de processus, des exports de messages et des tableaux fictifs dans le dépôt.

## Exercices prévus

| Id | Titre | Objectif | Difficulté (1–3) | Livrable non testable ? |
| --- | --- | --- | --- | --- |
| 8.1-ex01 à ex03 | Voir les processus | O1 | 1 | non |
| 8.1-ex04 à ex07 | Les briques d'une automatisation | O2 | 2 | non |
| 8.1-ex08 à ex10 | Quand ça casse | O3 | 2 | non |
| 8.1-ex11 à ex13 | No code, low code ou code | O4 | 2–3 | non |
| 8.1-ex14 | Exercice clé : cartographier et chiffrer les processus d'une PME, puis choisir et justifier les trois automatisations à faire en premier | O4 | 3 | oui → GRILLE.md |
| 8.1-ex15 à ex17 | Accès et données | O5 | 2–3 | non |

## Ressources matérielles

- **RAM maximale** : moins de 200 Mo
- **Téléchargements** : aucun
- **Temps de calcul le plus long** : aucun
- **Dépendances nouvelles** : aucune
- **API payante** : aucune

## Point de contrôle sécurité et éthique

- On n'automatise jamais un traitement de données personnelles sans savoir où elles passent et pourquoi.
- Les identifiants des clients ne se partagent pas : chacun connecte ses propres comptes.

## Ressources externes gratuites

| Ressource | Langue | Type | Licence ou accès | Pourquoi |
| --- | --- | --- | --- | --- |
| [n8n, les concepts de base](https://docs.n8n.io/) | anglais | documentation | conditions de n8n | Une plateforme ouverte pour mettre ces concepts en pratique. |
| [BPMN (Object Management Group)](https://www.omg.org/bpmn/) | anglais | norme | libre | La notation standard pour dessiner les processus. |
| [draw.io](https://www.drawio.com/) | multilingue | outil | Apache 2.0 | Dessiner des processus gratuitement, même hors ligne. |

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

- Les versions des outils et les conditions d'utilisation des services cités, au moment de rédiger le cours.
