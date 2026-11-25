---
id: "X.Y"
titre: "Titre du module (repris du programme)"
parcours: "0N-nom-de-l-etape"
promesse: "Une phrase : ce que l'apprenant saura faire à la fin. Affichée en haut de la page du module."
question_saut: "Tu maîtrises déjà … ?"   # affichée sur la page du module, à côté de la règle « sauter un module »
qcm: true                    # false si le module n'a pas de QCM (ex. 0.0)
prerequis: []                # identifiants de modules, ex. ["0.1", "0.3"]
statut: brouillon            # brouillon | relu | publie
version: 1
mise_a_jour: 2026-11-24
---

<!-- CONSIGNE : la fiche est l'étape 1 du circuit (AGENTS.md § 9). Elle doit être validée par le mainteneur avant d'écrire une seule ligne de solution, de test ou de cours. Supprime tous les commentaires CONSIGNE dans le fichier final. -->

# Fiche du module X.Y — Titre

## Extrait du programme

<!-- CONSIGNE : recopie mot pour mot la ligne du tableau de docs/programme.md (contenu et exercice clé). -->

- **Contenu** : …
- **Exercice clé** : …

## Objectifs vérifiables

<!-- CONSIGNE : 3 à 8 objectifs, autant que le module l'exige. Verbes d'action observables (guide pédagogique § 1.1). Chaque objectif est évalué au moins une fois. -->

| Id | À la fin, l'apprenant sait… | Évalué par |
| --- | --- | --- |
| O1 | … | ex01, qcm (2 questions au moins) |
| O2 | … | ex02, ex03, qcm |
| O3 | … | exercice clé (ex05), qcm |

## Chapitres

<!-- CONSIGNE : un chapitre = un thème cohérent (un fichier cours/NN-slug.mdx), avec autant de chapitres que le sujet l'exige. Aucune durée : c'est la connaissance qui décide du découpage, pas le temps. La plateforme lit ce tableau : garde ses colonnes. -->

| Chapitre | Titre | Exercices |
| --- | --- | --- |
| 1 | … | 5 |

## Notions, dans l'ordre

<!-- CONSIGNE : une notion = une leçon (explication, exemple, mini-exercice). Une idée nouvelle par notion, 8 notions au plus par chapitre : au-delà, crée un chapitre de plus. N'enlève jamais une notion utile pour gagner du temps. L'identifiant sert d'ancre et de lien avec le QCM : il ne change plus une fois publié. La plateforme lit ce tableau : garde ses colonnes. -->

| Chapitre | Id de la notion | Notion | Objectif |
| --- | --- | --- | --- |
| 1 | `…` | … | O1 |
| 1 | `…` | … | O2 |

## Vocabulaire du module

<!-- CONSIGNE : termes techniques introduits par ce module, avec leur catégorie (docs/guide-pedagogique.md § 3.1). Vérifie chaque terme dans docs/glossaire.md ; ajoute-y ceux qui manquent avant d'écrire le cours. -->

| Terme | Catégorie (A anglais / B transparent) | Notion où il apparaît |
| --- | --- | --- |
| … | A | `…` |

## Fil rouge et ancrage local

<!-- CONSIGNE : une situation concrète qui revient dans tout le cours. Pays, ville, métier, données réalistes. Varier par rapport aux modules voisins. -->

- **Situation** : …
- **Personnages** : …
- **Données utilisées** : … (source, licence, taille)

## Exercices prévus

<!-- CONSIGNE : pour valider la fiche, une ligne par chapitre suffit (X.Y-ex01 à ex05), plus une ligne pour l'exercice clé. Le détail exercice par exercice est écrit à l'étape 2 du circuit. Le total doit égaler la somme de la colonne « Exercices » du tableau des chapitres. -->

| Id | Titre | Objectif | Difficulté (1–3) | Livrable non testable ? |
| --- | --- | --- | --- | --- |
| X.Y-ex01 | … | O1 | 1 | non |
| X.Y-ex05 | Exercice clé : … | O3 | 3 | oui → GRILLE.md |

## Ressources matérielles

<!-- CONSIGNE : vérifier la compatibilité avec la machine minimale (AGENTS.md § 4). -->

- **RAM maximale** : …
- **Téléchargements** (modèles, données) : … Mo au total, une seule fois
- **Temps de calcul le plus long** : … sur un processeur 4 cœurs
- **Dépendances nouvelles** : … (taille installée)
- **API payante** : aucune / optionnelle (laquelle, budget maximum, date du prix, alternative locale)

## Point de contrôle sécurité et éthique

<!-- CONSIGNE : voir le tableau « Points de contrôle » de l'étape 5 dans le programme. Écrire « sans objet » si le module n'est pas concerné. -->

…

## Ressources externes gratuites

<!-- CONSIGNE : écris la ressource sous forme de lien Markdown [Nom](https://…). La plateforme affiche ce tableau sur la page du module. -->

| Ressource | Langue | Durée ou taille | Licence | Pourquoi |
| --- | --- | --- | --- | --- |
| … | anglais | … | … | … |

## Circuit

<!-- CONSIGNE : coche chaque étape quand son critère de fin (AGENTS.md § 9) est atteint. Ajoute la date. -->

- [ ] 1. Fiche validée par le mainteneur — date :
- [ ] 2. Solution et tests (passent sur solution, échouent sur starter) — date :
- [ ] 3. Cours — date :
- [ ] 4. Exercices (énoncés, indices, starters) — date :
- [ ] 5. QCM (valide contre le schéma) — date :
- [ ] 6. Grille — date : … / sans objet
- [ ] 7. Relecture élève — date :
- [ ] 8. Relecture expert — date :

## Journal des relectures

<!-- CONSIGNE : une ligne par problème trouvé, pour garder la trace et alimenter faq.md. -->

| Date | Étape | Fichier et ligne | Problème | Correction |
| --- | --- | --- | --- | --- |
| | | | | |

## Points à vérifier

<!-- CONSIGNE : liste des TODO(vérifier) restants (prix, versions, lois, chiffres). Vide avant le statut « relu ». -->

- …
