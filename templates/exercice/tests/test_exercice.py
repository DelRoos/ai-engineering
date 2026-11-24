"""Tests de l'exercice « La moyenne des ventes de Fatou ».

CONSIGNE (à supprimer) : chaque assertion a un message en français qui dit ce qui
était attendu, ce qui a été obtenu et, si possible, une piste. Utilise des valeurs
différentes de celles de l'énoncé, et teste les cas limites
(docs/guide-pedagogique.md § 5.1).
"""

import math

import pytest
from exercice import average_sales


def test_moyenne_de_plusieurs_jours():
    sales = [3000, 5000, 7000, 9000]
    result = average_sales(sales)
    assert math.isclose(result, 6000), (
        f"Pour {sales}, la moyenne attendue est 6000, tu as renvoyé {result}. "
        "As-tu bien divisé la somme par le nombre de jours ?"
    )


def test_moyenne_avec_decimales():
    sales = [1000, 1500]
    result = average_sales(sales)
    assert math.isclose(result, 1250), (
        f"Pour {sales}, la moyenne attendue est 1250, tu as renvoyé {result}."
    )


def test_un_seul_jour():
    result = average_sales([4200])
    assert math.isclose(result, 4200), (
        f"Avec un seul jour à 4200 FCFA, la moyenne est 4200, tu as renvoyé {result}."
    )


def test_jour_sans_vente():
    sales = [0, 0, 6000]
    result = average_sales(sales)
    assert math.isclose(result, 2000), (
        f"Pour {sales}, la moyenne attendue est 2000, tu as renvoyé {result}. "
        "Un jour sans vente compte quand même comme un jour."
    )


def test_ne_modifie_pas_la_liste():
    sales = [2500, 3500]
    average_sales(sales)
    assert sales == [2500, 3500], "Ta fonction ne doit pas modifier la liste reçue."


def test_liste_vide_leve_valueerror():
    with pytest.raises(ValueError):
        average_sales([])
