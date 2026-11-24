<!-- CONSIGNE : 3 niveaux, du plus léger au plus précis (docs/guide-pedagogique.md § 6). Jamais le code complet. Chaque indice est utile seul. Supprime ce commentaire. -->

# Indices — La moyenne des ventes de Fatou

Lis un seul indice à la fois, puis réessaie.

<details>
<summary>Indice 1 — Une piste</summary>

Pour calculer une moyenne, de quelles deux informations as-tu besoin ? Python a une fonction toute prête pour chacune d'elles.

</details>

<details>
<summary>Indice 2 — La méthode</summary>

1. Vérifie d'abord si la liste est vide. Si oui, lève une `ValueError`.
2. Calcule la somme de tous les montants.
3. Compte le nombre de montants.
4. Divise la somme par ce nombre et renvoie le résultat.

</details>

<details>
<summary>Indice 3 — Presque la solution</summary>

```python
if len(sales) == 0:
    raise ValueError("...")
total = sum(...)
```

Il te reste une ligne à écrire.

</details>

<details>
<summary>Tu obtiens <code>ZeroDivisionError</code> ?</summary>

Tu divises par `len(sales)` alors que la liste est vide. Le test attend une `ValueError`, levée **avant** la division.

</details>
