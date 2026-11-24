"""Solution de référence : la moyenne des ventes de Fatou.

N'ouvre ce fichier qu'après avoir réussi l'exercice, pour comparer.
"""


def average_sales(sales: list[float]) -> float:
    """Renvoie la vente moyenne par jour, en FCFA.

    Args:
        sales: montants des ventes de chaque jour, en FCFA.

    Returns:
        La moyenne des montants.

    Raises:
        ValueError: si la liste est vide.
    """
    if len(sales) == 0:
        raise ValueError("la liste des ventes est vide")
    return sum(sales) / len(sales)
