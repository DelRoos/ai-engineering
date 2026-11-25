---
id: "8.2"
titre: "n8n en profondeur"
parcours: "08-automatisation-no-code"
promesse: "Maîtriser n8n, la plateforme d'automatisation ouverte et auto-hébergeable : construire des workflows solides, les héberger toi-même, les sauvegarder, les versionner et les livrer à un client comme un professionnel."
question_saut: "Tu as déjà auto-hébergé n8n et livré à un client des workflows avec gestion d'erreurs et sauvegardes ?"
qcm: true
prerequis: ["8.1", "4.3"]
statut: brouillon
version: 1
mise_a_jour: 2026-11-25
---

# Fiche du module 8.2 — n8n en profondeur

## Extrait du programme

- **Contenu** : interface et données de n8n, expressions, nœuds essentiels (HTTP, Webhook, Code, If, Merge), sous-workflows, erreurs, lots, auto-hébergement Docker, PostgreSQL, HTTPS, mode file d'attente, sauvegardes, versionnage, licence
- **Exercice clé** : Un n8n auto-hébergé qui fait tourner trois workflows d'une PME, avec gestion d'erreurs, sauvegarde, mise à jour et documentation

## Objectifs vérifiables

| Id | À la fin, l'apprenant sait… | Évalué par |
| --- | --- | --- |
| O1 | Construire des workflows n8n en maîtrisant ses données et ses expressions. | ex01 à ex04, qcm |
| O2 | Utiliser les nœuds essentiels pour appeler, recevoir, aiguiller et transformer. | ex05 à ex08, qcm |
| O3 | Concevoir des workflows qui tiennent : découpage, erreurs, lots, validation humaine, rejeu. | ex09 à ex12, qcm |
| O4 | Auto-héberger n8n de façon fiable : Docker, base, HTTPS, montée en charge, sauvegardes, mises à jour. | ex13 à ex16, exercice clé (ex17), qcm |
| O5 | Travailler en professionnel : identifiants, versions, environnements, documentation, licence. | ex18 à ex20, qcm |

## Chapitres

| Chapitre | Titre | Exercices |
| --- | --- | --- |
| 1 | Démarrer avec n8n | 4 |
| 2 | Les nœuds essentiels | 4 |
| 3 | Des workflows qui tiennent | 4 |
| 4 | Auto-héberger n8n | 5 |
| 5 | Travailler en professionnel | 3 |

## Notions, dans l'ordre

| Chapitre | Id de la notion | Notion | Objectif |
| --- | --- | --- | --- |
| 1 | `pourquoi-n8n` | Pourquoi n8n : ouvert, gratuit, auto-hébergeable | O1 |
| 1 | `installer-n8n` | Installer n8n en local | O1 |
| 1 | `interface-n8n` | L'interface : nœuds, connexions, exécutions | O1 |
| 1 | `premier-workflow` | Un premier workflow de bout en bout | O1 |
| 1 | `donnees-n8n` | Les données dans n8n : éléments et JSON | O1 |
| 1 | `expressions-n8n` | Les expressions | O1 |
| 2 | `http-request-n8n` | Le nœud HTTP Request : appeler n'importe quelle API | O2 |
| 2 | `webhook-n8n` | Le nœud Webhook : recevoir des données | O2 |
| 2 | `code-n8n` | Le nœud Code : un peu de JavaScript ou de Python | O2 |
| 2 | `if-switch` | If et Switch : aiguiller | O2 |
| 2 | `merge-split` | Fusionner et découper les flux | O2 |
| 2 | `planifier-n8n` | Planifier un workflow | O2 |
| 3 | `sous-workflows` | Les sous-workflows : découper et réutiliser | O3 |
| 3 | `workflows-erreur` | Les workflows d'erreur | O3 |
| 3 | `lots-n8n` | Traiter de gros volumes par lots | O3 |
| 3 | `attente-humaine` | Attendre une réponse humaine | O3 |
| 3 | `idempotence-n8n` | Ne jamais traiter deux fois le même élément | O3 |
| 3 | `rejouer-execution` | Tester et rejouer une exécution | O3 |
| 4 | `n8n-docker` | n8n dans Docker | O4 |
| 4 | `base-n8n` | La base de n8n : SQLite ou PostgreSQL | O4 |
| 4 | `https-n8n` | Un nom de domaine et HTTPS | O4 |
| 4 | `mode-file-attente` | Le mode file d'attente pour monter en charge | O4 |
| 4 | `sauvegarder-n8n` | Sauvegarder et restaurer | O4 |
| 4 | `mettre-a-jour-n8n` | Mettre à jour sans casser | O4 |
| 5 | `identifiants-n8n` | Les identifiants et leur partage | O5 |
| 5 | `versionner-n8n` | Versionner les workflows avec Git | O5 |
| 5 | `environnements-n8n` | Un environnement de test, un de production | O5 |
| 5 | `documenter-workflow` | Documenter un workflow | O5 |
| 5 | `licence-n8n` | La licence de n8n : ce qu'on peut vendre, et ce qu'on ne peut pas | O5 |

## Vocabulaire du module

| Terme | Catégorie (A anglais / B transparent) | Notion où il apparaît |
| --- | --- | --- |
| nœud (node) | B | `interface-n8n` |
| expression (n8n) | B | `expressions-n8n` |
| sous-workflow | B | `sous-workflows` |
| mode file d'attente (queue mode) | B | `mode-file-attente` |
| auto-hébergement (self-hosting) | B | `pourquoi-n8n` |

## Fil rouge et ancrage local

- **Situation** : L'agence de voyages de Mme Agbeko a choisi ses trois premières automatisations. Tu les construis dans n8n, que tu héberges toi-même pour garder les données des clients.
- **Personnages** : Mme Agbeko ; Kossi, le conseiller le plus à l'aise avec l'informatique.
- **Données utilisées** : des API de démonstration servies en local et des données fictives de réservations.

## Exercices prévus

| Id | Titre | Objectif | Difficulté (1–3) | Livrable non testable ? |
| --- | --- | --- | --- | --- |
| 8.2-ex01 à ex04 | Démarrer avec n8n | O1 | 1 | non |
| 8.2-ex05 à ex08 | Les nœuds essentiels | O2 | 2 | non |
| 8.2-ex09 à ex12 | Des workflows qui tiennent | O3 | 2 | non |
| 8.2-ex13 à ex16 | Auto-héberger n8n | O4 | 2–3 | non |
| 8.2-ex17 | Exercice clé : un n8n auto-hébergé qui fait tourner trois workflows d'une PME, avec gestion d'erreurs, sauvegarde, mise à jour et documentation | O4 | 3 | non |
| 8.2-ex18 à ex20 | Travailler en professionnel | O5 | 2–3 | non |

## Ressources matérielles

- **RAM maximale** : moins de 2 Go (n8n et PostgreSQL dans Docker)
- **Téléchargements** : environ 1 Go d'images Docker
- **Temps de calcul le plus long** : quelques secondes par exécution
- **Dépendances nouvelles** : Docker, n8n, PostgreSQL
- **API payante** : aucune (version auto-hébergée gratuite)

## Point de contrôle sécurité et éthique

- La licence de n8n limite certains usages commerciaux : on la lit avant de vendre un service basé dessus.
- Les identifiants sont stockés dans n8n, chiffrés, jamais dans les workflows exportés.
- Une instance exposée sur Internet a HTTPS, des comptes protégés et des sauvegardes testées.

## Ressources externes gratuites

| Ressource | Langue | Type | Licence ou accès | Pourquoi |
| --- | --- | --- | --- | --- |
| [Documentation de n8n](https://docs.n8n.io/) | anglais | documentation | conditions de n8n | La référence : nœuds, expressions, hébergement. |
| [n8n, l'hébergement](https://docs.n8n.io/hosting/) | anglais | documentation | conditions de n8n | Docker, base de données, mode file d'attente. |
| [Le dépôt de n8n](https://github.com/n8n-io/n8n) | anglais | dépôt | Sustainable Use License | Le code, la licence et les nouveautés. |
| [Les modèles de workflows n8n](https://n8n.io/workflows/) | anglais | bibliothèque | accès libre | Des milliers d'exemples à étudier. |

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
