---
id: "8.5"
titre: "Les outils d'une PME"
parcours: "08-automatisation-no-code"
promesse: "Construire le système d'information d'une PME avec des outils no code : données, formulaires, clients, devis, factures, encaissements par mobile money, messages et service client, reliés par des automatisations."
question_saut: "Tu as déjà monté pour une entreprise un système complet en outils no code, de la commande à l'encaissement ?"
qcm: true
prerequis: ["8.1"]
statut: brouillon
version: 1
mise_a_jour: 2026-11-25
---

# Fiche du module 8.5 — Les outils d'une PME

## Extrait du programme

- **Contenu** : Google Workspace et Microsoft 365, Airtable, NocoDB, Baserow, formulaires (Tally, KoboToolbox), CRM, devis et factures, mobile money, relances, WhatsApp Business, SMS et USSD
- **Exercice clé** : Le système complet d'une PME en outils no code : clients, devis, factures, encaissements, relances, reliés par des automatisations

## Objectifs vérifiables

| Id | À la fin, l'apprenant sait… | Évalué par |
| --- | --- | --- |
| O1 | Utiliser les outils bureautiques en ligne comme socle d'automatisation, en connaissant leurs limites. | ex01 à ex03, qcm |
| O2 | Concevoir une base de données no code adaptée à une PME. | ex04 à ex06, qcm |
| O3 | Collecter des informations propres par des formulaires, y compris sur le terrain. | ex07 à ex09, qcm |
| O4 | Automatiser la vente : clients, devis, factures, encaissements, relances. | ex10 à ex12, exercice clé (ex13), qcm |
| O5 | Organiser la relation client par messagerie, sans spam. | ex14 à ex16, qcm |

## Chapitres

| Chapitre | Titre | Exercices |
| --- | --- | --- |
| 1 | Google Workspace et Microsoft 365 | 3 |
| 2 | Les bases no code | 3 |
| 3 | Collecter des informations | 3 |
| 4 | Vendre et encaisser | 4 |
| 5 | Parler aux clients | 3 |

## Notions, dans l'ordre

| Chapitre | Id de la notion | Notion | Objectif |
| --- | --- | --- | --- |
| 1 | `tableur-base` | Un tableur comme base de données : ce qui marche, ce qui casse | O1 |
| 1 | `google-forms` | Google Forms et ses réponses | O1 |
| 1 | `generer-documents-drive` | Générer des documents dans Drive | O1 |
| 1 | `agenda-rendez-vous` | Agenda et prise de rendez-vous | O1 |
| 1 | `equivalents-microsoft` | Les équivalents dans Microsoft 365 | O1 |
| 2 | `airtable` | Airtable : tables, vues, liens | O2 |
| 2 | `nocodb-baserow` | NocoDB et Baserow : les alternatives ouvertes | O2 |
| 2 | `modele-donnees-pme` | Concevoir le modèle de données d'une PME | O2 |
| 2 | `interfaces-equipes` | Des interfaces pour les équipes | O2 |
| 2 | `limites-bases-nocode` | Les limites : volume, droits, prix | O2 |
| 3 | `tally-formulaires` | Tally et les formulaires modernes | O3 |
| 3 | `kobotoolbox` | KoboToolbox : collecter sur le terrain, hors ligne | O3 |
| 3 | `formulaire-workflow` | Du formulaire au workflow | O3 |
| 3 | `formulaires-propres` | Des formulaires qui donnent des données propres | O3 |
| 3 | `consentement-formulaire` | Le consentement dans un formulaire | O3 |
| 4 | `crm-simple` | Un CRM simple pour une PME | O4 |
| 4 | `devis-factures` | Devis et factures automatiques | O4 |
| 4 | `encaisser-mobile-money` | Encaisser par mobile money | O4 |
| 4 | `relancer-impayes` | Relancer les impayés poliment | O4 |
| 4 | `export-comptable` | Exporter vers la comptabilité | O4 |
| 5 | `whatsapp-business` | WhatsApp Business et ses intégrations | O5 |
| 5 | `campagnes-sans-spam` | Des campagnes de messages, sans spam | O5 |
| 5 | `service-client-organise` | Un service client organisé | O5 |
| 5 | `avis-clients` | Recueillir les avis des clients | O5 |
| 5 | `sms-ussd-clients` | SMS et USSD pour ceux qui n'ont pas de smartphone | O5 |

## Vocabulaire du module

| Terme | Catégorie (A anglais / B transparent) | Notion où il apparaît |
| --- | --- | --- |
| CRM | A | `crm-simple` |
| base no code | B | `airtable` |
| USSD | A | `sms-ussd-clients` |
| mobile money | A | `encaisser-mobile-money` |

## Fil rouge et ancrage local

- **Situation** : Une entreprise de traiteur de Dakar gère ses commandes par cahier et par WhatsApp. Tu lui construis un système simple, fiable et peu coûteux.
- **Personnages** : Mme Sow, gérante du traiteur ; Pape, qui gère les livraisons.
- **Données utilisées** : des commandes, clients et factures fictifs.

## Exercices prévus

| Id | Titre | Objectif | Difficulté (1–3) | Livrable non testable ? |
| --- | --- | --- | --- | --- |
| 8.5-ex01 à ex03 | Google Workspace et Microsoft 365 | O1 | 1 | non |
| 8.5-ex04 à ex06 | Les bases no code | O2 | 2 | non |
| 8.5-ex07 à ex09 | Collecter des informations | O3 | 2 | non |
| 8.5-ex10 à ex12 | Vendre et encaisser | O4 | 2–3 | non |
| 8.5-ex13 | Exercice clé : le système complet d'une PME en outils no code : clients, devis, factures, encaissements, relances, reliés par des automatisations | O4 | 3 | non |
| 8.5-ex14 à ex16 | Parler aux clients | O5 | 2–3 | non |

## Ressources matérielles

- **RAM maximale** : moins de 2 Go (NocoDB dans Docker)
- **Téléchargements** : moins de 1 Go
- **Temps de calcul le plus long** : aucun
- **Dépendances nouvelles** : NocoDB ou Baserow, n8n
- **API payante** : aucune

## Point de contrôle sécurité et éthique

- Les données des clients restent sous le contrôle de l'entreprise : on note où elles sont stockées.
- Les campagnes de messages ne touchent que les clients qui l'ont accepté, avec une façon simple de se désinscrire.
- Aucun encaissement n'est déclenché sans validation ; les automatisations lisent et rapprochent les paiements.

## Ressources externes gratuites

| Ressource | Langue | Type | Licence ou accès | Pourquoi |
| --- | --- | --- | --- | --- |
| [Documentation de NocoDB](https://docs.nocodb.com/) | anglais | documentation | AGPL | Une base no code ouverte et auto-hébergeable. |
| [Baserow](https://baserow.io/docs) | anglais | documentation | MIT (cœur) | Une autre base no code ouverte. |
| [KoboToolbox](https://support.kobotoolbox.org/) | anglais | plateforme | gratuit pour les organisations humanitaires et de recherche | Collecter sur le terrain, même sans réseau. |
| [Tally](https://tally.so/help) | anglais | documentation | offre gratuite | Des formulaires modernes et gratuits. |

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
