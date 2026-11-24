---
id: "etape-1"
titre: "Étape 1 — Développement assisté par IA, données et machine learning classique"
ordre: 1
semaines: 10
statut: brouillon
---

# Étape 1 — Développement assisté par IA, données et machine learning classique (10 semaines)

**Objectif** : passer de données brutes à un modèle évalué honnêtement, et savoir expliquer ses résultats à un décideur non technique.

**Matériel** : 4 Go de RAM suffisent.

## Modules

| Module | Dossier | Semaines | Contenu | Exercice clé |
| --- | --- | --- | --- | --- |
| 1.1 Développement assisté par IA | `01-dev-assiste-ia/` | 1 | Assistants de code et options gratuites ou locales, décrire une tâche, relire et tester le code généré, limites et risques | Réaliser la même fonctionnalité avec et sans assistant, puis comparer temps, qualité et bugs |
| 1.2 Manipulation de données | `02-manipulation-donnees/` | 2–3 | pandas, nettoyage, valeurs manquantes, jointures, agrégations, visualisation | Analyse exploratoire complète d'un jeu de données réel et sale |
| 1.3 Données terrain : collecte et annotation | `03-donnees-terrain/` | 4 | KoboToolbox ou ODK, consentement et anonymisation, Label Studio, accord entre annotateurs, données synthétiques | Collecter et annoter seul au moins 200 exemples réels avec un protocole documenté |
| 1.4 Fondements du ML | `04-fondements-ml/` | 5 | Supervisé ou non, surapprentissage, biais/variance, découpage, fuite de données | Repérer et corriger 5 erreurs dans un notebook piégé |
| 1.5 Algorithmes essentiels | `05-algorithmes/` | 6–7 | Régressions, arbres, random forest, gradient boosting, k-means, PCA, recommandation | Régression linéaire codée de zéro, puis avec scikit-learn |
| 1.6 Évaluation et optimisation | `06-evaluation/` | 8 | Métriques, validation croisée, hyperparamètres, classes déséquilibrées | Choisir et justifier la bonne métrique pour 4 cas métier |
| 1.7 Feature engineering, pipelines et séries temporelles | `07-features-pipelines/` | 9 | Encodage, normalisation, pipelines scikit-learn, séries temporelles, SHAP | Pipeline reproductible de bout en bout |
| 1.8 Communiquer les résultats | `08-communiquer/` | 10 | Rapport d'analyse, tableau de bord Streamlit, présentation non technique | Vidéo de présentation de 5 minutes du projet 1 |

## Projet 1 — Modèle de prédiction à impact local (`projet/`)

Au choix : prédire les prix de produits agricoles sur un marché, ou évaluer le risque de crédit pour la microfinance. Une partie des données est collectée et annotée par l'apprenant (module 1.3).

- **Livrables** : protocole de collecte, notebook d'analyse, pipeline reproductible, application Streamlit en ligne (hébergement gratuit), rapport de 2 pages.
- **Critères** : métrique justifiée, absence de fuite de données, comparaison avec un modèle de référence simple.
- **Point de contrôle sécurité et éthique** : consentement et anonymisation des données collectées, aucun secret dans le dépôt Git, revue du code généré par l'assistant.

## Anglais

README et commentaires de code en anglais.

## État

Aucun module rédigé pour l'instant.
