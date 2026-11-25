---
id: "PN"                      # P1, P2… unique, ne change plus une fois publié
titre: "Un … pour …"          # le produit et son client
famille: "…"                  # Assistant documentaire, Assistant opérationnel, Commercial virtuel, Studio de contenu…
promesse: "Tu construis … qui … pour …"
prerequis: ["3.4", "3.6"]     # modules à avoir suivis
statut: brouillon             # brouillon | relu | publie
version: 1
mise_a_jour: AAAA-MM-JJ
---

# PN — Titre

<!-- CONSIGNE : un grand projet se lit comme un module. Il mène l'apprenant du problème métier au résultat prouvé.
La plateforme lit ce fichier (plateforme/src/lib/projets.ts) : garde exactement les titres de section et les libellés en gras.
Contrat complet : docs/format-contenu.md § 5. -->

## Le brief client

<!-- CONSIGNE : un client fictif mais réaliste, ancré en Afrique francophone. Cinq lignes, dans cet ordre. -->

- **Le client** : qui, où, quelle taille, quelle activité.
- **Les utilisateurs** : qui utilisera le système, et dans quelles conditions (téléphone, langue, connexion).
- **Le problème** : ce qui coûte aujourd'hui (temps, erreurs, argent, confiance), chiffré si possible.
- **Le résultat attendu** : ce que le système fait quand le projet est réussi.
- **Hors périmètre** : ce que le système ne fait pas, et qui s'en charge.

## Indicateurs de réussite

<!-- CONSIGNE : des indicateurs métier (qui parlent au client) et techniques (qui parlent à l'équipe). Chacun mesurable sur les données fournies. -->

| Indicateur | Nature | Cible | Comment le mesurer |
| --- | --- | --- | --- |
| … | métier | … | … |
| … | technique | … | … |

## Compétences démontrées

<!-- CONSIGNE : chaque compétence renvoie aux leçons où elle s'apprend, sous la forme `module/id-de-la-leçon`. Une leçon introuvable fait échouer le build. -->

| Compétence | Leçons à revoir |
| --- | --- |
| … | `3.4/citations`, `3.6/garde-fous` |

## Missions

<!-- CONSIGNE : 6 à 10 missions, numérotées 1, 2, 3…, dans l'ordre où on les fait. Une mission = un livrable vérifiable.
La première fait comprendre le besoin, la dernière mesure et présente. Au moins deux missions contiennent un changement imprévu.
Le titre de la mission donne l'URL de sa page et le nom de son dossier : missions/NN-titre-en-slug/. -->

### 1. Comprendre le besoin

- **Situation** : ce qui arrive, du point de vue du client.
- **Livrable** : ce que l'apprenant produit, précisément.
- **Critères de réussite** :
  - Un critère vérifiable.
  - Un autre critère vérifiable.
- **Étapes conseillées** :
  1. Première étape.
  2. Deuxième étape.
- **Changement imprévu** : facultatif. Ce qui change en cours de route ; les tests le rejouent.
- **Leçons utiles** : `3.5/criteres-succes`, `4.9/exigences`
- **Vérification** : tests automatiques | grille | tests automatiques et grille

## Validation

| Contrôle | Comment | Règle |
| --- | --- | --- |
| Tests des missions | `python outils/check.py` sur chaque mission | Tous les tests passent |
| Indicateurs de réussite | Évaluation de la mission N, relancée par une commande | Cibles atteintes, ou écart expliqué |
| Correction par l'agent IA | `GRILLE.md` du projet | Au moins 14/20 |
| Examen oral avec l'IA | 5 à 10 questions sur ton code et tes choix | Au moins 70 % de réponses jugées correctes |

## Portfolio

- Un README en anglais : le problème, la démonstration, l'architecture en un schéma, les résultats chiffrés.
- …

## Données et ressources matérielles

- **Données fournies** : …
- **Modèle** : …
- **Machine** : PC de 8 Go de RAM, sans carte graphique.

## Circuit

- [ ] 1. Fiche validée par le mainteneur
- [ ] 2. Solution et tests
- [ ] 3. Énoncés des missions
- [ ] 4. Indices
- [ ] 5. Données
- [ ] 6. Grille
- [ ] 7. Relecture élève
- [ ] 8. Relecture expert
