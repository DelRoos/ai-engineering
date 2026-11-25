---
id: "0.1-ex03"
titre: "La moyenne des ventes de Fatou"
module: "0.1"
objectifs: [O2]
difficulte: 1
type: exercice
statut: brouillon
version: 1
mise_a_jour: 2026-11-24
---

<!-- CONSIGNE : règles dans docs/guide-pedagogique.md § 5. L'énoncé doit suffire, avec le cours, pour réussir sans ouvrir solution/. Cet exemple est complet : remplace son contenu en gardant les sections. Supprime les commentaires CONSIGNE. -->

# La moyenne des ventes de Fatou

**Objectif évalué** : O2 — calculer une statistique simple sur une liste.

## Contexte

Fatou vend des beignets au marché de Sandaga, à Dakar. Chaque soir, elle note le montant de ses ventes en FCFA. Elle veut connaître sa vente moyenne par jour pour prévoir ses achats de farine.

## Ce que tu dois faire

Ouvre le fichier `starter/exercice.py` et complète la fonction :

```python
def average_sales(sales: list[float]) -> float:
```

- `sales` est une liste de montants en FCFA (nombres positifs ou nuls).
- La fonction renvoie la moyenne de ces montants : la somme divisée par le nombre de jours.
- Si la liste est vide, la fonction lève une erreur `ValueError`, car une moyenne sur zéro jour n'a pas de sens.

## Exemples

```python
>>> average_sales([12500, 9800, 15000])
12433.333333333334
>>> average_sales([5000])
5000.0
>>> average_sales([])
ValueError: la liste des ventes est vide
```

## Vérifier ton travail

Depuis la racine du dépôt :

```bash
python outils/check.py 00-fondations/01-python/exercices/03-moyenne-ventes
```

Tous les tests doivent passer. Si un test échoue, lis son message : il te dit ce qui était attendu.

## Si tu bloques

Ouvre `indices.md` et lis **un seul indice à la fois**. N'ouvre le dossier `solution/` qu'après avoir réussi, pour comparer ta façon de faire.
