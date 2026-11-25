---
id: "9.10"
titre: "IA de confiance"
parcours: "09-projets"
nature: projets
promesse: "Quatre missions que l'on confie à un expert avant de lancer un système d'IA : l'attaquer pour le sécuriser, lui poser des garde-fous en production, auditer ses biais, et le mettre en conformité avec la loi. Des prestations que les entreprises achètent."
question_saut: "Tu as déjà mené un audit de sécurité ou de biais complet, avec rapport et corrections vérifiées ?"
qcm: false
prerequis: ["3.5", "5.1", "5.2", "5.3"]
statut: brouillon
version: 1
mise_a_jour: 2026-11-25
---

# 9.10 — IA de confiance

## Extrait du programme

- **Exercice clé** : Livrer de bout en bout au moins un projet de la famille, avec un rapport que le client pourrait signer

## Objectifs vérifiables

| Id | À la fin, l'apprenant sait… | Évalué par |
| --- | --- | --- |
| O1 | Mener un test d'intrusion défensif d'une application LLM et faire vérifier les corrections. | projet 1 |
| O2 | Mettre en production des garde-fous mesurés, sans bloquer les usages légitimes. | projet 2 |
| O3 | Auditer les biais d'un système de décision et proposer des corrections mesurées. | projet 3 |
| O4 | Mettre un système d'IA en conformité avec les lois sur les données et l'IA. | projet 4 |

## Chapitres

| Chapitre | Titre | Exercices |
| --- | --- | --- |
| 1 | Le test d'intrusion de l'assistant d'une banque | 0 |
| 2 | Les garde-fous d'un assistant grand public | 0 |
| 3 | L'audit de biais d'un outil de recrutement | 0 |
| 4 | La mise en conformité d'une application de santé | 0 |

## Notions, dans l'ordre

| Chapitre | Id de la notion | Notion | Objectif |
| --- | --- | --- | --- |
| 1 | `perimetre-autorisation` | Le périmètre et l'autorisation écrite | O1 |
| 1 | `modele-menace-banque` | Le modèle de menace de l'assistant | O1 |
| 1 | `attaques-injection` | Les attaques par injection, directes et indirectes | O1 |
| 1 | `attaques-outils` | Abuser des outils et des permissions | O1 |
| 1 | `fuites-test` | Chercher les fuites : prompt système, données d'autres clients | O1 |
| 1 | `classer-vulnerabilites` | Classer les vulnérabilités par gravité | O1 |
| 1 | `rapport-intrusion` | Le rapport, et la vérification des corrections | O1 |
| 2 | `politique-contenus` | La politique : ce qui est permis, interdit, à orienter | O2 |
| 2 | `jeu-garde-fous` | Un jeu de tests : attaques et demandes légitimes | O2 |
| 2 | `couches-garde-fous` | Les couches : entrée, modèle, sortie, actions | O2 |
| 2 | `modele-garde-local` | Un modèle de garde local et rapide | O2 |
| 2 | `faux-positifs` | Mesurer les faux positifs : les utilisateurs bloqués à tort | O2 |
| 2 | `latence-garde-fous` | Le coût en latence de chaque couche | O2 |
| 2 | `surveiller-garde-fous` | Surveiller et faire évoluer les garde-fous | O2 |
| 3 | `decision-auditee` | La décision auditée et les personnes touchées | O3 |
| 3 | `donnees-audit` | Les données de l'audit : groupes, variables protégées, proxys | O3 |
| 3 | `mesurer-ecarts` | Mesurer les écarts entre groupes, et leur incertitude | O3 |
| 3 | `causes-ecarts` | Trouver les causes : données, modèle, seuil | O3 |
| 3 | `corriger-mesurer` | Corriger, puis mesurer ce que la correction coûte | O3 |
| 3 | `rapport-audit-biais` | Le rapport d'audit, lisible par la direction | O3 |
| 3 | `suivi-equite` | Le suivi de l'équité après l'audit | O3 |
| 4 | `cartographier-traitements` | Cartographier les traitements de données | O4 |
| 4 | `lois-applicables` | Les lois applicables : Cameroun, Sénégal, RGPD, AI Act | O4 |
| 4 | `analyse-impact` | L'analyse d'impact sur la protection des données | O4 |
| 4 | `hebergement-transferts` | L'hébergement et les transferts hors du pays | O4 |
| 4 | `droits-patients` | Les droits des patients, en pratique | O4 |
| 4 | `documentation-modele` | La documentation du modèle et du système | O4 |
| 4 | `plan-conformite` | Le plan de mise en conformité, priorisé | O4 |

## Comparatif des projets

| Projet | Le problème | L'approche | Le livrable | Qui l'achète |
| --- | --- | --- | --- | --- |
| Test d'intrusion | Des failles inconnues avant le lancement | Attaques défensives autorisées, classement, vérification | Rapport et corrections vérifiées | Banques, assurances, éditeurs |
| Garde-fous | Des abus sans bloquer les bons usages | Couches de défense mesurées | Garde-fous en production, tableau de bord | Toute application grand public |
| Audit de biais | Des décisions inégales entre groupes | Mesure, causes, corrections, suivi | Rapport d'audit | RH, crédit, administrations |
| Conformité | Des obligations légales mal connues | Cartographie, analyse d'impact, plan | Dossier de conformité | Santé, finance, secteur public |

## Les projets

### 1. Le test d'intrusion de l'assistant d'une banque

- **Le client** : une banque de Douala qui s'apprête à lancer un assistant capable de consulter les comptes et de préparer des virements.
- **Le problème** : la direction des risques refuse le lancement sans un test d'intrusion indépendant de l'assistant et de ses outils.
- **Pourquoi ce cas est différent** : on attaque pour défendre, dans un cadre autorisé par écrit. La valeur est dans la rigueur du classement et dans la vérification des corrections.
- **L'approche de l'expert** : fixer le périmètre et l'autorisation, construire le modèle de menace, tester les injections directes et indirectes, l'abus des outils et des permissions, chercher les fuites (prompt système, données d'autres clients), classer par gravité, puis rédiger le rapport et vérifier les corrections.
- **Alternatives écartées** : un scanner automatique seul (rate les failles propres aux outils et à la logique métier) ; tester en production sans autorisation (illégal et dangereux).
- **Ce qui se vend** : une prestation au forfait, avec un second passage de vérification. C'est un marché en croissance pour les profils qui savent à la fois l'IA et la sécurité.
- **Contraintes réelles** : environnement de test isolé avec des données fictives, confidentialité absolue du rapport, normes de sécurité bancaire.
- **L'imprévu** : une faille critique est trouvée en cours de mission ; il faut la signaler tout de suite, selon la procédure convenue.
- **C'est réussi quand** :
  - Le périmètre et l'autorisation sont écrits avant le premier test.
  - Chaque vulnérabilité est reproductible, classée et accompagnée d'une correction.
  - Les corrections sont vérifiées par un second passage.
- **À revoir** : `5.1/modele-menace`, `5.1/surface-attaque`, `5.1/injection-directe`, `5.1/injection-indirecte`, `5.1/outils-dangereux`, `5.1/fuite-prompt`, `5.1/tester-injection`, `5.1/cadres-securite-ia`
- **Pour ton portfolio** : un rapport d'intrusion anonymisé sur une application de démonstration, avec ses corrections vérifiées.

### 2. Les garde-fous d'un assistant grand public

- **Le client** : une application d'actualité et de services très utilisée au Sénégal, qui ajoute un assistant conversationnel ouvert à tous.
- **Le problème** : il faut empêcher les contenus dangereux, la désinformation électorale et les abus, sans bloquer les questions légitimes ; chaque refus injustifié fait fuir un utilisateur.
- **Pourquoi ce cas est différent** : le succès se mesure dans les deux sens : les attaques bloquées et les bons usages qui passent. Et chaque couche de défense coûte de la latence.
- **L'approche de l'expert** : écrire la politique (permis, interdit, à orienter), construire un jeu de tests qui mélange attaques et demandes légitimes, empiler des couches (entrée, modèle, sortie, actions), un modèle de garde local rapide, mesurer les faux positifs, mesurer la latence de chaque couche, et faire évoluer les garde-fous avec les incidents.
- **Alternatives écartées** : une liste de mots interdits (contournée et pleine de faux positifs) ; tout confier au prompt système (fragile face aux injections).
- **Ce qui se vend** : la possibilité même de lancer le produit, puis un service de maintenance des garde-fous.
- **Contraintes réelles** : messages en français et en wolof, périodes électorales sensibles, volume élevé.
- **L'imprévu** : une nouvelle forme de contournement circule sur les réseaux sociaux.
- **C'est réussi quand** :
  - Le taux d'attaques bloquées et le taux de faux positifs sont mesurés sur le même jeu de tests.
  - La latence ajoutée par les garde-fous est dans le budget.
  - Le nouveau contournement est ajouté au jeu de tests et corrigé.
- **À revoir** : `5.1/defenses-injection`, `5.1/modeles-garde`, `5.1/filtrer-sorties`, `5.1/contenus-dangereux`, `5.1/desinformation`, `3.5/evaluer-securite`, `4.8/budget-latence`, `3.9/biais-langues-eval`
- **Pour ton portfolio** : la politique, le jeu de tests, le tableau attaques bloquées contre faux positifs.

### 3. L'audit de biais d'un outil de recrutement

- **Le client** : un cabinet de recrutement d'Abidjan qui utilise un outil de présélection automatique des CV pour de grands employeurs.
- **Le problème** : un candidat se plaint d'avoir été écarté à cause de son nom ; un employeur exige un audit avant de renouveler le contrat.
- **Pourquoi ce cas est différent** : on ne construit rien au départ, on enquête. Les données de groupe sont souvent absentes, les écarts peuvent venir de proxys (quartier, école), et les définitions d'équité se contredisent.
- **L'approche de l'expert** : décrire la décision et les personnes touchées, reconstituer les groupes et repérer les proxys, mesurer les écarts avec leur incertitude, trouver les causes, corriger et mesurer ce que la correction coûte, rédiger un rapport lisible par la direction, et mettre en place un suivi.
- **Alternatives écartées** : retirer les variables sensibles et déclarer le modèle juste (les proxys gardent le biais) ; un audit sans recommandations chiffrées.
- **Ce qui se vend** : un audit au forfait, puis un suivi annuel. La demande grandit avec les lois sur l'IA et l'exigence des grands employeurs.
- **Contraintes réelles** : données personnelles des candidats, petits groupes, enjeux juridiques et de réputation.
- **L'imprévu** : la correction réduit l'écart entre groupes mais fait baisser la précision globale ; la direction doit trancher.
- **C'est réussi quand** :
  - Les écarts sont mesurés avec leur incertitude, groupes et proxys documentés.
  - Les causes sont établies, pas seulement les écarts constatés.
  - Le coût de chaque correction est chiffré pour que la direction choisisse.
- **À revoir** : `5.2/sources-biais`, `5.2/ecart-groupes`, `5.2/petits-groupes`, `5.2/definitions-equite`, `5.2/arbitrages-equite`, `5.2/audit-intersectionnel`, `5.2/suivre-equite`, `1.6/metriques-groupes`
- **Pour ton portfolio** : un rapport d'audit complet sur un jeu de données de démonstration.

### 4. La mise en conformité d'une application de santé

- **Le client** : une start-up de télémédecine de Yaoundé dont l'application aide à orienter les patients et stocke leurs symptômes, et qui veut aussi servir des patients au Sénégal et en Europe.
- **Le problème** : un investisseur demande un dossier de conformité avant d'entrer au capital. La start-up ne sait pas quelles lois s'appliquent, ni ce qu'elles exigent.
- **Pourquoi ce cas est différent** : le livrable est juridique et organisationnel autant que technique. Il faut traduire des textes de loi en exigences concrètes sur le code, l'hébergement et les processus.
- **L'approche de l'expert** : cartographier les traitements de données, identifier les lois applicables (loi camerounaise de 2024, loi sénégalaise, RGPD, AI Act pour les patients européens), mener l'analyse d'impact, décider de l'hébergement et des transferts, rendre effectifs les droits des patients, documenter le modèle et le système, et proposer un plan priorisé.
- **Alternatives écartées** : copier une politique de confidentialité type (ne correspond pas aux traitements réels) ; attendre un contrôle (risque de sanction et de perte de confiance).
- **Ce qui se vend** : une prestation de mise en conformité, puis un accompagnement. Les start-ups de santé, de finance et d'éducation en ont toutes besoin.
- **Contraintes réelles** : données de santé (sensibles partout), patients mineurs, hébergeurs locaux limités, lois récentes encore peu appliquées.
- **L'imprévu** : l'application ajoute un module de diagnostic automatique, qui peut la faire changer de catégorie de risque.
- **C'est réussi quand** :
  - Chaque traitement de données a une base légale, une durée de conservation et un responsable.
  - L'analyse d'impact est faite et ses mesures sont reliées au code.
  - Le plan de conformité est priorisé par risque et par coût.
- **À revoir** : `5.3/loi-cameroun`, `5.3/lois-afrique`, `5.3/rgpd`, `5.3/analyse-impact-donnees`, `5.3/transferts`, `5.3/haut-risque`, `5.3/registre-traitements`, `5.3/droits-personnes`
- **Pour ton portfolio** : un dossier de conformité complet sur une application de démonstration.

## Fil rouge et ancrage local

- **Situation** : quatre organisations (banque, application grand public, cabinet de recrutement, start-up de santé) qui ne peuvent pas lancer ou garder leur système d'IA sans preuve qu'il est sûr, juste et légal.

## Circuit

- [ ] 1. Fiche validée par le mainteneur
- [ ] 2. Données fictives réalistes et solution de référence
- [ ] 3. Énoncés des étapes
- [ ] 4. Tests et grilles
- [ ] 5. Relecture élève
- [ ] 6. Relecture expert
