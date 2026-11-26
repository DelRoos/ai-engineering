"""Fonctions partagées par les outils de la formation.

Lecture des fiches, des front matter, chemins du dépôt et format des rapports.
Bibliothèque standard et PyYAML seulement.
"""

from __future__ import annotations

import os
import re
import sys
import unicodedata
from dataclasses import dataclass, field
from pathlib import Path

import yaml

RACINE = Path(__file__).resolve().parent.parent

if hasattr(sys.stdout, "reconfigure"):
    sys.stdout.reconfigure(encoding="utf-8")
    sys.stderr.reconfigure(encoding="utf-8")


def dossier_fabrication() -> Path:
    """Dépôt séparé qui garde les traces de fabrication (sources, brouillons, sessions)."""
    env = os.environ.get("AI_ENGINEER_FABRICATION")
    return Path(env) if env else RACINE.parent / "ai-engineer-fabrication"


def slugify(texte: str) -> str:
    """Même règle que plateforme/src/lib/slug.ts."""
    texte = unicodedata.normalize("NFD", texte)
    texte = "".join(c for c in texte if not unicodedata.combining(c)).lower()
    return re.sub(r"[^a-z0-9]+", "-", texte).strip("-")


def lire_front_matter(texte: str) -> tuple[dict | None, str]:
    """Renvoie (front matter, corps). Front matter None s'il est absent."""
    m = re.match(r"^---\r?\n(.*?)\r?\n---\r?\n?", texte, re.S)
    if not m:
        return None, texte
    try:
        donnees = yaml.safe_load(m.group(1)) or {}
    except yaml.YAMLError as err:
        raise ValueError(f"front matter illisible : {err}") from err
    return donnees, texte[m.end():]


def section(texte: str, titre: str) -> str | None:
    """Contenu d'une section « ## titre » d'un fichier Markdown, sans les commentaires HTML."""
    m = re.search(r"^## " + re.escape(titre) + r"[^\n]*\n(.*?)(?=^## |\Z)", texte, re.M | re.S)
    if not m:
        return None
    return re.sub(r"<!--.*?-->", "", m.group(1), flags=re.S)


def lignes_tableau(sec: str | None) -> list[list[str]]:
    """Lignes d'un tableau Markdown, sans l'en-tête ni la ligne de séparation."""
    if not sec:
        return []
    lignes = []
    for ligne in sec.splitlines():
        ligne = ligne.strip()
        if ligne.startswith("|") and not re.match(r"^\|\s*:?-", ligne):
            lignes.append([c.strip() for c in ligne.strip("|").split("|")])
    return lignes[1:]


@dataclass
class Notion:
    chapitre: int
    id: str
    titre: str
    objectif: str


@dataclass
class Chapitre:
    numero: int
    titre: str
    exercices: int

    @property
    def slug(self) -> str:
        return f"{self.numero:02d}-{slugify(self.titre)}"


@dataclass
class Fiche:
    chemin: Path
    texte: str
    meta: dict
    objectifs: dict[str, str] = field(default_factory=dict)
    evaluations: dict[str, str] = field(default_factory=dict)
    chapitres: list[Chapitre] = field(default_factory=list)
    notions: list[Notion] = field(default_factory=list)

    @property
    def module(self) -> Path:
        return self.chemin.parent

    @property
    def id(self) -> str:
        return str(self.meta.get("id", "?"))

    @property
    def projets(self) -> bool:
        return self.meta.get("nature") == "projets"

    @property
    def relatif(self) -> str:
        return self.module.relative_to(RACINE).as_posix()

    def notion(self, notion_id: str) -> Notion:
        for n in self.notions:
            if n.id == notion_id:
                return n
        raise KeyError(f"la notion « {notion_id} » n'existe pas dans {self.relatif}/fiche.md")

    def chapitre(self, numero: int) -> Chapitre:
        for c in self.chapitres:
            if c.numero == numero:
                return c
        raise KeyError(f"le chapitre {numero} n'existe pas dans {self.relatif}/fiche.md")


def lire_fiche(chemin: Path) -> Fiche:
    texte = chemin.read_text(encoding="utf-8")
    meta, _ = lire_front_matter(texte)
    fiche = Fiche(chemin=chemin, texte=texte, meta=meta or {})
    for ligne in lignes_tableau(section(texte, "Objectifs vérifiables")):
        if len(ligne) >= 3:
            fiche.objectifs[ligne[0]] = ligne[1]
            fiche.evaluations[ligne[0]] = ligne[2]
    for ligne in lignes_tableau(section(texte, "Chapitres")):
        if len(ligne) >= 3 and ligne[0].isdigit():
            nb = int(ligne[2]) if ligne[2].isdigit() else 0
            fiche.chapitres.append(Chapitre(int(ligne[0]), ligne[1], nb))
    for ligne in lignes_tableau(section(texte, "Notions, dans l'ordre")):
        if len(ligne) >= 4 and ligne[0].isdigit():
            fiche.notions.append(Notion(int(ligne[0]), ligne[1].strip("`"), ligne[2], ligne[3]))
    return fiche


def trouver_module(argument: str) -> Path:
    """Accepte un chemin de module (« 00-fondations/00-preparer-son-pc ») ou un identifiant (« 0.0 »)."""
    chemin = Path(argument)
    if not chemin.is_absolute():
        chemin = RACINE / chemin
    if (chemin / "fiche.md").exists():
        return chemin.resolve()
    for fiche in RACINE.glob("[0-9][0-9]-*/*/fiche.md"):
        meta, _ = lire_front_matter(fiche.read_text(encoding="utf-8"))
        if meta and str(meta.get("id")) == argument:
            return fiche.parent
    raise SystemExit(f"Module introuvable : « {argument} ». Donne un chemin de module ou un identifiant comme 0.1.")


@dataclass
class Constat:
    gravite: str  # bloquant | alerte | info
    code: str
    message: str
    lieu: str = ""


@dataclass
class Rapport:
    titre: str
    constats: list[Constat] = field(default_factory=list)

    def ajouter(self, gravite: str, code: str, message: str, lieu: str = "") -> None:
        self.constats.append(Constat(gravite, code, message, lieu))

    def bloquant(self, code: str, message: str, lieu: str = "") -> None:
        self.ajouter("bloquant", code, message, lieu)

    def alerte(self, code: str, message: str, lieu: str = "") -> None:
        self.ajouter("alerte", code, message, lieu)

    def info(self, code: str, message: str, lieu: str = "") -> None:
        self.ajouter("info", code, message, lieu)

    def fusionner(self, autre: Rapport) -> None:
        self.constats.extend(autre.constats)

    @property
    def ok(self) -> bool:
        return not any(c.gravite == "bloquant" for c in self.constats)

    def compter(self, gravite: str) -> int:
        return sum(1 for c in self.constats if c.gravite == gravite)

    def en_dict(self) -> dict:
        return {
            "titre": self.titre,
            "resultat": "reussi" if self.ok else "echec",
            "bloquants": self.compter("bloquant"),
            "alertes": self.compter("alerte"),
            "constats": [
                {"gravite": c.gravite, "code": c.code, "message": c.message, "lieu": c.lieu}
                for c in self.constats
            ],
        }

    def afficher(self, details_info: bool = False) -> None:
        print(f"\n== {self.titre}")
        icones = {"bloquant": "✗", "alerte": "!", "info": "·"}
        for c in self.constats:
            if c.gravite == "info" and not details_info:
                continue
            lieu = f" [{c.lieu}]" if c.lieu else ""
            print(f"  {icones[c.gravite]} {c.gravite} {c.code}{lieu} : {c.message}")
        bilan = "RÉUSSI" if self.ok else "ÉCHEC"
        print(f"  → {bilan} : {self.compter('bloquant')} bloquant(s), {self.compter('alerte')} alerte(s)")


def ecrire_yaml(chemin: Path, donnees) -> None:
    chemin.parent.mkdir(parents=True, exist_ok=True)
    chemin.write_text(
        yaml.safe_dump(donnees, allow_unicode=True, sort_keys=False, width=100), encoding="utf-8"
    )


def lire_yaml(chemin: Path):
    return yaml.safe_load(chemin.read_text(encoding="utf-8"))
