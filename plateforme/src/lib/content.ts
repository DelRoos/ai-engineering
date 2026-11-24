import "server-only";
import fs from "node:fs";
import path from "node:path";
import { parse as parseYaml } from "yaml";
import { slugify } from "./slug";

/**
 * Lecture du contenu de la formation, au build.
 * Source : les dossiers d'étape du dépôt (../00-fondations … ../06-capstone)
 * et le module de démonstration de la plateforme (./demo).
 * Format : docs/format-contenu.md.
 */

const PLATFORM_ROOT = process.cwd();
const REPO_ROOT = path.resolve(PLATFORM_ROOT, "..");
const DEMO_ROOT = path.join(PLATFORM_ROOT, "demo");

export const ETAPES = [
  { dir: "00-fondations", label: "Étape 0" },
  { dir: "01-ml", label: "Étape 1" },
  { dir: "02-deep-learning", label: "Étape 2" },
  { dir: "03-llm", label: "Étape 3" },
  { dir: "04-production", label: "Étape 4" },
  { dir: "05-securite", label: "Étape 5" },
  { dir: "06-capstone", label: "Étape 6" },
] as const;

export type Statut = "brouillon" | "relu" | "publie";

export type TocItem = { id: string; label: string };

export type Chapter = {
  moduleId: string;
  number: number;
  title: string;
  duration: string | null;
  objectives: string[];
  status: Statut;
  updatedAt: string | null;
  /** Corps MDX, sans le front matter. */
  body: string;
  toc: TocItem[];
};

export type Module = {
  id: string;
  /** Segment d'URL : « 0.1 » → « 0.1 », « demo » → « demo ». */
  slug: string;
  title: string;
  phaseLabel: string;
  isDemo: boolean;
  chapters: Chapter[];
};

const FRONT_MATTER = /^---\r?\n([\s\S]*?)\r?\n---\r?\n?/;

function readFrontMatter(source: string): { data: Record<string, unknown>; body: string } {
  const match = source.match(FRONT_MATTER);
  if (!match) return { data: {}, body: source };
  const data = (parseYaml(match[1]) ?? {}) as Record<string, unknown>;
  return { data, body: source.slice(match[0].length) };
}

/** Sommaire de droite : les notions, puis les titres « ## », le résumé et le vocabulaire, dans l'ordre du fichier. */
function buildToc(body: string): TocItem[] {
  const items: { index: number; item: TocItem }[] = [];
  for (const m of body.matchAll(/<Notion\s+id="([^"]+)"\s+titre="([^"]+)"/g)) {
    items.push({ index: m.index ?? 0, item: { id: m[1], label: m[2] } });
  }
  for (const m of body.matchAll(/^##\s+(.+)$/gm)) {
    const label = m[1].trim();
    items.push({ index: m.index ?? 0, item: { id: slugify(label), label } });
  }
  const resume = body.search(/<Resume>/);
  if (resume >= 0) items.push({ index: resume, item: { id: "resume", label: "Résumé" } });
  const vocab = body.search(/<Vocabulaire>/);
  if (vocab >= 0) items.push({ index: vocab, item: { id: "vocabulaire", label: "Vocabulaire" } });
  return items.sort((a, b) => a.index - b.index).map((x) => x.item);
}

function asString(v: unknown): string | null {
  if (v === undefined || v === null) return null;
  if (v instanceof Date) return v.toISOString().slice(0, 10);
  return String(v);
}

function readChapter(file: string, fallbackNumber: number): Chapter {
  const source = fs.readFileSync(file, "utf8");
  const { data, body } = readFrontMatter(source);
  return {
    moduleId: asString(data.id) ?? "",
    number: Number(data.chapitre ?? fallbackNumber),
    title: asString(data.titre) ?? path.basename(file, ".mdx"),
    duration: asString(data.duree_estimee),
    objectives: Array.isArray(data.objectifs) ? data.objectifs.map(String) : [],
    status: (asString(data.statut) as Statut) ?? "brouillon",
    updatedAt: asString(data.mise_a_jour),
    body,
    toc: buildToc(body),
  };
}

/** Un module = un dossier qui contient cours.mdx ou cours/*.mdx. */
function readModule(dir: string, phaseLabel: string, isDemo: boolean): Module | null {
  const single = path.join(dir, "cours.mdx");
  const multiDir = path.join(dir, "cours");
  let files: string[] = [];
  if (fs.existsSync(single)) files = [single];
  else if (fs.existsSync(multiDir))
    files = fs
      .readdirSync(multiDir)
      .filter((f) => f.endsWith(".mdx"))
      .sort()
      .map((f) => path.join(multiDir, f));
  if (files.length === 0) return null;

  const chapters = files.map((f, i) => readChapter(f, i + 1)).sort((a, b) => a.number - b.number);
  const fichePath = path.join(dir, "fiche.md");
  const fiche = fs.existsSync(fichePath) ? readFrontMatter(fs.readFileSync(fichePath, "utf8")).data : {};
  const id = asString(fiche.id) ?? chapters[0].moduleId;

  return {
    id,
    slug: id,
    title: asString(fiche.titre) ?? chapters[0].title,
    phaseLabel,
    isDemo,
    chapters,
  };
}

function listDirs(root: string): string[] {
  if (!fs.existsSync(root)) return [];
  return fs
    .readdirSync(root, { withFileTypes: true })
    .filter((d) => d.isDirectory())
    .map((d) => path.join(root, d.name))
    .sort();
}

let cache: Module[] | null = null;

export function getAllModules(): Module[] {
  if (cache) return cache;
  const modules: Module[] = [];
  for (const etape of ETAPES) {
    for (const dir of listDirs(path.join(REPO_ROOT, etape.dir))) {
      const m = readModule(dir, etape.label, false);
      if (m) modules.push(m);
    }
  }
  for (const dir of listDirs(DEMO_ROOT)) {
    const m = readModule(dir, "Démonstration", true);
    if (m) modules.push(m);
  }
  cache = modules;
  return modules;
}

export function getModule(slug: string): Module | undefined {
  return getAllModules().find((m) => m.slug === decodeURIComponent(slug));
}
