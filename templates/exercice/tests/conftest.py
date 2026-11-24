"""Choisit le dossier à tester : starter/ (par défaut) ou solution/.

La variable d'environnement CHECK_TARGET vaut « starter » ou « solution ».
La CI teste « solution » pour vérifier que l'exercice est juste.
"""

import os
import sys
from pathlib import Path

TARGET = os.environ.get("CHECK_TARGET", "starter")
if TARGET not in {"starter", "solution"}:
    raise ValueError(f"CHECK_TARGET doit valoir 'starter' ou 'solution', pas {TARGET!r}")

sys.path.insert(0, str(Path(__file__).resolve().parent.parent / TARGET))
