---
id: "4.4"
titre: "Déploiement cloud"
parcours: "04-production"
promesse: "Mettre ton service en ligne pour de vrai, et pour 0 € : comprendre le cloud, déployer, sécuriser, et comparer les coûts avant de payer quoi que ce soit."
question_saut: "Tu as déjà déployé un service en ligne en maîtrisant ses coûts ?"
qcm: true
prerequis: ["4.3"]
statut: brouillon
version: 1
mise_a_jour: 2026-11-25
---

# Fiche du module 4.4 — Déploiement cloud

## Extrait du programme

- **Contenu** : Offres gratuites ou peu chères (Render, Fly.io, Hugging Face Spaces), notions AWS / GCP / Azure, GPU à la demande, serverless
- **Exercice clé** : Déployer le même service sur 2 plateformes et comparer les coûts

## Objectifs vérifiables

| Id | À la fin, l'apprenant sait… | Évalué par |
| --- | --- | --- |
| O1 | Expliquer les modèles du cloud et leurs coûts. | ex01 à ex03, qcm |
| O2 | Déployer un service sur une offre gratuite. | ex04 à ex06, exercice clé (ex19), qcm |
| O3 | Configurer un domaine, HTTPS, des secrets et un retour arrière en production. | ex07 à ex09, exercice clé (ex19), qcm |
| O4 | Connaître AWS, GCP et Azure, le serverless et le GPU à la demande. | ex10 à ex12, ex13 à ex15, qcm |
| O5 | Comparer le coût et la performance de plusieurs plateformes. | ex16 à ex18, exercice clé (ex19), qcm |

## Chapitres

| Chapitre | Titre | Exercices |
| --- | --- | --- |
| 1 | Le cloud | 3 |
| 2 | Déployer gratuitement | 3 |
| 3 | En production | 3 |
| 4 | Les grands clouds | 3 |
| 5 | L'infrastructure en code | 3 |
| 6 | Comparer et maîtriser | 4 |

## Notions, dans l'ordre

| Chapitre | Id de la notion | Notion | Objectif |
| --- | --- | --- | --- |
| 1 | `cloud` | Le cloud, simplement | O1 |
| 1 | `iaas-paas` | IaaS et PaaS : louer une machine ou une plateforme | O1 |
| 1 | `facture-cloud` | Lire une facture de cloud | O1 |
| 1 | `pieges-gratuit` | Les pièges des offres gratuites | O1 |
| 1 | `regions-latence` | Choisir une région proche des utilisateurs | O1 |
| 2 | `render` | Déployer sur Render | O2 |
| 2 | `flyio` | Déployer sur Fly.io | O2 |
| 2 | `hf-spaces` | Déployer sur Hugging Face Spaces | O2 |
| 2 | `demarrage-froid` | Le démarrage à froid, et comment le limiter | O2 |
| 2 | `deployer-github` | Déployer automatiquement depuis GitHub | O2 |
| 3 | `domaine-https` | Un nom de domaine et HTTPS | O3 |
| 3 | `secrets-prod` | Les secrets en production | O3 |
| 3 | `bases-gerees` | Une base de données gérée | O3 |
| 3 | `stockage-cloud` | Stocker des fichiers : le stockage d'objets | O3 |
| 3 | `retour-arriere` | Revenir à la version précédente | O3 |
| 4 | `grands-clouds` | AWS, GCP, Azure : l'essentiel | O4 |
| 4 | `iam` | Qui a le droit de faire quoi : IAM | O4 |
| 4 | `gpu-location` | Louer un GPU à l'heure | O4 |
| 4 | `serverless` | Le serverless | O4 |
| 4 | `localisation-donnees` | Où sont tes données ? Localisation et souveraineté | O4 |
| 5 | `iac` | Décrire son infrastructure en code : notions de Terraform | O4 |
| 5 | `cdn` | Servir vite au loin : le CDN | O4 |
| 5 | `terraform-premier` | Un premier fichier Terraform | O4 |
| 5 | `etat-terraform` | L'état de l'infrastructure | O4 |
| 5 | `environnements-iac` | Plusieurs environnements avec le même code | O4 |
| 6 | `comparer-plateformes` | Comparer deux plateformes | O5 |
| 6 | `estimer-couts` | Estimer un coût avant de déployer | O5 |
| 6 | `budget-alertes` | Fixer un budget et des alertes | O5 |
| 6 | `optimiser-couts-cloud` | Réduire une facture de cloud | O5 |
| 6 | `sortir-fournisseur` | Ne pas rester prisonnier d'un fournisseur | O5 |

## Vocabulaire du module

| Terme | Catégorie (A anglais / B transparent) | Notion où il apparaît |
| --- | --- | --- |
| cloud, région | A | `cloud` |
| IaaS, PaaS | A | `iaas-paas` |
| serverless | A | `serverless` |
| déploiement (deploy) | A | `render` |
| HTTPS, certificat, DNS | A | `domaine-https` |
| retour arrière (rollback) | A | `retour-arriere` |
| souveraineté des données | B | `localisation-donnees` |

## Fil rouge et ancrage local

- **Situation** : l'association de Bafoussam n'a aucun budget : son assistant juridique doit être en ligne pour 0 € par mois, rester joignable, et ne jamais envoyer de facture surprise.
- **Personnages** : Awa, bénévole, et le trésorier de l'association, très attentif aux dépenses.
- **Données utilisées** : l'assistant du projet 3 de l'apprenant, conteneurisé en 4.3.

## Exercices prévus

| Id | Titre | Objectif | Difficulté (1–3) | Livrable non testable ? |
| --- | --- | --- | --- | --- |
| 4.4-ex01 à ex03 | Le cloud | O1 | 1 | non |
| 4.4-ex04 à ex06 | Déployer gratuitement | O2 | 1 | non |
| 4.4-ex07 à ex09 | En production | O3 | 2 | non |
| 4.4-ex10 à ex12 | Les grands clouds | O4 | 2 | non |
| 4.4-ex13 à ex15 | L'infrastructure en code | O4 | 2–3 | non |
| 4.4-ex16 à ex18 | Comparer et maîtriser | O5 | 2–3 | non |
| 4.4-ex19 | Exercice clé : déployer le même service sur 2 plateformes et comparer les coûts | O2, O3, O5 | 3 | oui → GRILLE.md (rapport de comparaison) |

## Ressources matérielles

- **RAM maximale** : selon l'offre gratuite choisie.
- **Téléchargements** : les outils en ligne de commande des plateformes (quelques dizaines de Mo).
- **Temps de calcul le plus long** : négligeable.
- **Dépendances nouvelles** : aucune nouvelle dépendance Python.
- **API payante** : aucune obligatoire. Les offres gratuites changent souvent : conditions et limites datées à la rédaction, TODO(vérifier). Aucune carte bancaire exigée dans les exercices obligatoires.

## Point de contrôle sécurité et éthique

Point de contrôle du projet 4 : localisation des données conforme à la loi, secrets hors du code, alertes de budget activées.

## Ressources externes gratuites

| Ressource | Langue | Type | Licence ou accès | Pourquoi |
| --- | --- | --- | --- | --- |
| [Documentation de Hugging Face Spaces](https://huggingface.co/docs/hub/spaces) | anglais | documentation | accès libre | Héberger gratuitement une démo d'IA. |
| [Documentation de Render](https://render.com/docs) | anglais | documentation | accès libre | Déployer un service depuis GitHub. |
| [Documentation de Fly.io](https://fly.io/docs/) | anglais | documentation | accès libre | Déployer des conteneurs près des utilisateurs. |
| [Tutoriels Terraform](https://developer.hashicorp.com/terraform/tutorials) | anglais | tutoriels | accès libre | Décrire son infrastructure en code. |

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

- TODO(vérifier) : offres gratuites de Render, Fly.io et Hugging Face Spaces (limites, carte bancaire exigée ou non) à vérifier et dater.
- TODO(vérifier) : localisation des serveurs et lois sur les données des pays visés.
- TODO(vérifier) : compléter le vocabulaire des notions ajoutées par la seconde passe d'audit (25/11/2026), en vérifiant chaque terme dans docs/glossaire.md.
