"""Extension pytest chargée par check.py : interdit le réseau pendant les tests (AGENTS.md § 10)."""

import socket

_connect = socket.socket.connect


def _refuser(self, adresse, *args, **kwargs):
    hote = adresse[0] if isinstance(adresse, tuple) else adresse
    if hote in ("127.0.0.1", "localhost", "::1"):
        return _connect(self, adresse, *args, **kwargs)
    raise RuntimeError(
        f"Accès réseau interdit pendant les tests (tentative vers {hote}). "
        "Les données doivent être dans le dépôt."
    )


def pytest_configure(config):
    socket.socket.connect = _refuser
