---
id: "7.6"
titre: "Automatiser des tâches"
parcours: "07-collecte-automatisation"
promesse: "Automatiser en Python le travail répétitif d'un bureau : fichiers, Excel, PDF, courriels, messages, services en ligne, planification et RPA, avec des automatisations fiables qu'on peut confier à un client."
question_saut: "Tu as déjà livré à un client une automatisation planifiée, fiable et documentée ?"
qcm: true
prerequis: ["0.5", "0.3", "4.5"]
statut: brouillon
version: 1
mise_a_jour: 2026-11-25
---

# Fiche du module 7.6 — Automatiser des tâches

## Extrait du programme

- **Contenu** : fichiers, Excel, PDF, documents, courriels, WhatsApp et SMS, API Google et webhooks, paiements mobiles, planification, orchestration, RPA, fiabilité
- **Exercice clé** : Automatiser la chaîne mensuelle d'une PME : relevés, tableur, factures en PDF, envoi par courriel, relances et rapport

## Objectifs vérifiables

| Id | À la fin, l'apprenant sait… | Évalué par |
| --- | --- | --- |
| O1 | Automatiser le travail sur fichiers : Excel, PDF, Word, images. | ex01 à ex04, qcm |
| O2 | Envoyer et traiter des messages automatiquement : courriels, WhatsApp, SMS, notifications. | ex05 à ex08, qcm |
| O3 | Brancher des services en ligne par API, webhooks et OAuth. | ex09 à ex12, qcm |
| O4 | Planifier et enchaîner des tâches de façon relançable. | ex13 à ex15, qcm |
| O5 | Choisir la RPA quand rien d'autre n'est possible, en connaissant ses faiblesses. | ex16 à ex18, qcm |
| O6 | Rendre une automatisation fiable, documentée et mesurée. | ex19 à ex22, exercice clé (ex23), qcm |

## Chapitres

| Chapitre | Titre | Exercices |
| --- | --- | --- |
| 1 | Automatiser son poste | 4 |
| 2 | Communiquer automatiquement | 4 |
| 3 | Brancher les services | 4 |
| 4 | Planifier et enchaîner | 3 |
| 5 | La RPA | 3 |
| 6 | Fiabiliser une automatisation | 5 |

## Notions, dans l'ordre

| Chapitre | Id de la notion | Notion | Objectif |
| --- | --- | --- | --- |
| 1 | `reperer-taches` | Repérer les tâches qui valent la peine d'être automatisées | O1 |
| 1 | `fichiers-dossiers` | Fichiers et dossiers : renommer, trier, archiver | O1 |
| 1 | `excel-python` | Lire et écrire Excel avec openpyxl | O1 |
| 1 | `pdf-python` | Lire, découper et générer des PDF | O1 |
| 1 | `documents-word` | Générer des documents Word et des courriers | O1 |
| 1 | `images-lot` | Traiter des images par lots | O1 |
| 2 | `courriels-envoyer` | Envoyer des courriels proprement | O2 |
| 2 | `courriels-lire` | Lire une boîte et trier les courriels | O2 |
| 2 | `whatsapp-api` | L'API WhatsApp Business : messages et modèles | O2 |
| 2 | `sms-passerelle` | Les SMS par passerelle | O2 |
| 2 | `notifications-equipe` | Notifier une équipe : Telegram, Slack, Teams | O2 |
| 2 | `messages-personnalises` | Des messages personnalisés à partir d'un modèle | O2 |
| 3 | `api-google` | Google Sheets et Drive par API | O3 |
| 3 | `oauth-automatisation` | OAuth : autoriser un script sans partager son mot de passe | O3 |
| 3 | `webhooks-recevoir` | Recevoir des webhooks | O3 |
| 3 | `api-paiement-mobile` | Les API de paiement mobile : lire et rapprocher | O3 |
| 3 | `synchroniser-outils` | Synchroniser deux outils sans doublons | O3 |
| 3 | `quotas-api` | Les limites des API et leurs quotas | O3 |
| 4 | `cron` | cron et le planificateur de tâches de Windows | O4 |
| 4 | `idempotence-taches` | Une tâche qu'on peut relancer sans risque | O4 |
| 4 | `enchainer-taches` | Enchaîner des tâches qui dépendent les unes des autres | O4 |
| 4 | `prefect-taches` | Orchestrer avec Prefect | O4 |
| 4 | `arriere-plan` | Des files de tâches pour le travail en arrière-plan | O4 |
| 5 | `rpa-notions` | La RPA : automatiser une interface comme un humain | O5 |
| 5 | `applications-bureau` | Piloter des applications de bureau | O5 |
| 5 | `rpa-api-navigateur` | RPA, API ou navigateur : choisir | O5 |
| 5 | `faiblesses-rpa` | Les points faibles de la RPA | O5 |
| 5 | `rpa-ouverte` | Les outils ouverts de RPA | O5 |
| 6 | `erreurs-automatisation` | Gérer les erreurs : réessayer, alerter, s'arrêter | O6 |
| 6 | `journal-automatisation` | Journaliser chaque exécution | O6 |
| 6 | `secrets-automatisation` | Les secrets d'une automatisation | O6 |
| 6 | `tester-automatisation` | Tester une automatisation avant de la lancer pour de vrai | O6 |
| 6 | `documenter-automatisation` | Documenter pour la personne qui reprendra | O6 |
| 6 | `mesurer-gain` | Mesurer le temps gagné | O6 |

## Vocabulaire du module

| Terme | Catégorie (A anglais / B transparent) | Notion où il apparaît |
| --- | --- | --- |
| cron | A | `cron` |
| webhook | A | `webhooks-recevoir` |
| OAuth | A | `oauth-automatisation` |
| RPA (Robotic Process Automation) | A | `rpa-notions` |
| idempotent | B | `idempotence-taches` |

## Fil rouge et ancrage local

- **Situation** : La quincaillerie de Mme Ebogo à Yaoundé passe chaque fin de mois trois jours à produire factures, relances et tableaux. Tu automatises la chaîne entière.
- **Personnages** : Mme Ebogo, gérante ; Junior, son comptable.
- **Données utilisées** : des fichiers Excel, des modèles de factures et une boîte de courriels de test, tous fictifs, dans le dépôt.

## Exercices prévus

| Id | Titre | Objectif | Difficulté (1–3) | Livrable non testable ? |
| --- | --- | --- | --- | --- |
| 7.6-ex01 à ex04 | Automatiser son poste | O1 | 1 | non |
| 7.6-ex05 à ex08 | Communiquer automatiquement | O2 | 1 | non |
| 7.6-ex09 à ex12 | Brancher les services | O3 | 2 | non |
| 7.6-ex13 à ex15 | Planifier et enchaîner | O4 | 2 | non |
| 7.6-ex16 à ex18 | La RPA | O5 | 2–3 | non |
| 7.6-ex19 à ex22 | Fiabiliser une automatisation | O6 | 2–3 | non |
| 7.6-ex23 | Exercice clé : automatiser la chaîne mensuelle d'une PME : relevés, tableur, factures en PDF, envoi par courriel, relances et rapport | O6 | 3 | non |

## Ressources matérielles

- **RAM maximale** : moins de 500 Mo
- **Téléchargements** : quelques Mo
- **Temps de calcul le plus long** : quelques secondes
- **Dépendances nouvelles** : openpyxl, pypdf, reportlab, python-docx, prefect
- **API payante** : aucune (les API de messagerie ont un mode test gratuit)

## Point de contrôle sécurité et éthique

- Les secrets (mots de passe d'application, jetons) restent dans des variables d'environnement, jamais dans le code.
- Toute automatisation qui envoie des messages ou touche à l'argent a un mode test et un plafond.
- Les messages envoyés respectent le consentement des destinataires.

## Ressources externes gratuites

| Ressource | Langue | Type | Licence ou accès | Pourquoi |
| --- | --- | --- | --- | --- |
| [Automate the Boring Stuff with Python](https://automatetheboringstuff.com/) | anglais | livre en ligne | CC BY-NC-SA | Le classique de l'automatisation de bureau en Python. |
| [Documentation d'openpyxl](https://openpyxl.readthedocs.io/) | anglais | documentation | MIT | Lire et écrire des fichiers Excel. |
| [Documentation de Prefect](https://docs.prefect.io/) | anglais | documentation | Apache 2.0 | Orchestrer et planifier des tâches. |
| [API WhatsApp Business (Meta)](https://developers.facebook.com/docs/whatsapp/) | anglais | documentation | conditions de Meta | Envoyer des messages automatiques sur WhatsApp. |
| [API Google Sheets](https://developers.google.com/sheets/api) | anglais | documentation | conditions de Google | Lire et écrire des feuilles par programme. |

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
