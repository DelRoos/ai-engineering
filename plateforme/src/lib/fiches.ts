import "server-only";
import fs from "node:fs";
import path from "node:path";
import { parse as parseYaml } from "yaml";
import { etapes } from "@/content/commencer";
import { ETAPES } from "./content";

/**
 * Lecture des fiches de module (`<etape>/<NN-nom>/fiche.md`), au build.
 * La fiche est la source unique de la page d'un module : objectifs, chapitres, leçons, fil rouge, ressources.
 * Contrat : templates/fiche.md (tableaux « Chapitres » et « Notions, dans l'ordre »).
 * Une fiche mal remplie fait échouer le build, avec un message qui dit quoi corriger.
 */

const REPO_ROOT = path.resolve(process.cwd(), "..");

export type Lecon = { id: string; title: string; minutes: number };
export type Chapitre = { n: number; title: string; week: string; exercises: number; lessons: Lecon[] };
export type Ressource = { label: string; href: string; meta: string };
export type Voisin = { id: string; title: string; slug: string | null; kind: "module" | "projet" };

export type Fiche = {
  id: string;
  /** Segment d'URL : le nom du dossier sans son numéro (« 01-python » → « python »). */
  slug: string;
  /** Dossier dans le dépôt, depuis sa racine : « 00-fondations/01-python ». */
  folder: string;
  etape: { n: number; title: string };
  title: string;
  promise: string;
  skipQuestion: string;
  status: "brouillon" | "relu" | "publie";
  /** Nombre de semaines (0 pour un module à faire « avant la semaine 1 »). */
  weeks: number;
  weeksLabel: string;
  hasQcm: boolean;
  qcm: { drawn: number; threshold: number };
  keyExercise: string;
  objectives: string[];
  chapters: Chapitre[];
  exerciseCount: number;
  filRouge: string;
  prerequisites: Voisin[];
  resources: Ressource[];
};

/** Typographie française : espace insécable avant « : ; ! ? » et à l'intérieur des guillemets. */
export function typo(text: string): string {
  return text
    .replace(/ ([:;!?»])/g, " $1")
    .replace(/« /g, "« ");
}

/** Durée lisible : 145 → « 2 h 25 », 25 → « 25 min ». */
export function formatMinutes(total: number): string {
  const h = Math.floor(total / 60);
  const m = total % 60;
  if (h === 0) return `${m} min`;
  return m === 0 ? `${h} h` : `${h} h ${String(m).padStart(2, "0")}`;
}

export const chapterMinutes = (c: Chapitre) => c.lessons.reduce((s, l) => s + l.minutes, 0);

const FRONT_MATTER = /^---\r?\n([\s\S]*?)\r?\n---\r?\n?/;

function sections(body: string): Map<string, string> {
  const map = new Map<string, string>();
  const parts = body.split(/^## /m).slice(1);
  for (const part of parts) {
    const nl = part.indexOf("\n");
    map.set(part.slice(0, nl).trim(), part.slice(nl + 1));
  }
  return map;
}

/** Lignes d'un tableau Markdown, sans l'en-tête ni le séparateur, cellules nettoyées. */
function tableRows(section: string | undefined): string[][] {
  if (!section) return [];
  const lines = section
    .split(/\r?\n/)
    .map((l) => l.trim())
    .filter((l) => l.startsWith("|"));
  return lines
    .slice(2)
    .map((l) =>
      l
        .replace(/^\||\|$/g, "")
        .split("|")
        .map((c) => c.trim().replace(/^`|`$/g, "")),
    )
    .filter((cells) => cells.some((c) => c !== ""));
}

function bullet(section: string | undefined, label: string): string | null {
  const m = section?.match(new RegExp(`^- \\*\\*${label}\\*\\* : (.+)$`, "m"));
  return m ? m[1].trim() : null;
}

function weeksOf(semaines: string): { weeks: number; label: string } {
  const range = semaines.match(/^(\d+)\s*[–-]\s*(\d+)$/);
  if (range) {
    const [a, b] = [Number(range[1]), Number(range[2])];
    const weeks = b - a + 1;
    return { weeks, label: weeks === 2 ? `Semaines ${a} et ${b}` : `Semaines ${a} à ${b}` };
  }
  if (/^\d+$/.test(semaines)) return { weeks: 1, label: `Semaine ${semaines}` };
  return { weeks: 0, label: semaines.charAt(0).toUpperCase() + semaines.slice(1) };
}

const allModules = etapes.flatMap((e) => e.modules.map((m) => ({ ...m, etape: e })));

function readFiche(file: string, folder: string, etapeN: number): Fiche {
  const fail = (msg: string): never => {
    throw new Error(`${folder}/fiche.md : ${msg}`);
  };
  const source = fs.readFileSync(file, "utf8");
  const fm = source.match(FRONT_MATTER);
  if (!fm) fail("front matter YAML manquant");
  const data = (parseYaml(fm![1]) ?? {}) as Record<string, unknown>;
  const s = sections(source.slice(fm![0].length));

  const need = (key: string) => {
    const v = data[key];
    if (v === undefined || v === null || v === "") fail(`champ « ${key} » manquant dans le front matter`);
    return String(v);
  };

  const id = need("id");
  const etape = etapes.find((e) => e.n === etapeN) ?? fail(`étape ${etapeN} absente de content/commencer.ts`);

  // Chapitres et leçons
  const chapters: Chapitre[] = tableRows(s.get("Chapitres")).map(([n, title, week, exercises]) => ({
    n: Number(n),
    title: typo(title),
    week,
    exercises: Number(exercises),
    lessons: [],
  }));
  if (chapters.length === 0) fail("tableau « Chapitres » vide ou absent");

  for (const [chap, lessonId, title, duree] of tableRows(s.get("Notions, dans l'ordre"))) {
    const c = chapters.find((x) => x.n === Number(chap)) ?? fail(`la notion « ${lessonId} » cite le chapitre ${chap}, absent du tableau des chapitres`);
    const minutes = Number(duree?.match(/^(\d+)\s*min$/)?.[1]);
    if (!minutes) fail(`durée « ${duree} » illisible pour la notion « ${lessonId} » (attendu : « 25 min »)`);
    c.lessons.push({ id: lessonId, title: typo(title), minutes });
  }
  for (const c of chapters) {
    if (c.lessons.length === 0) fail(`le chapitre ${c.n} n'a aucune notion`);
    if (c.lessons.length > 8) fail(`le chapitre ${c.n} a ${c.lessons.length} notions (8 au plus)`);
    if (!Number.isFinite(c.exercises)) fail(`nombre d'exercices illisible au chapitre ${c.n}`);
  }
  const ids = chapters.flatMap((c) => c.lessons.map((l) => l.id));
  const dup = ids.find((x, i) => ids.indexOf(x) !== i);
  if (dup) fail(`identifiant de notion en double : « ${dup} »`);

  const objectives = tableRows(s.get("Objectifs vérifiables")).map((r) => typo(r[1]));
  if (objectives.length === 0) fail("tableau « Objectifs vérifiables » vide");

  const resources: Ressource[] = tableRows(s.get("Ressources externes gratuites"))
    .map(([res, langue, duree]) => {
      const link = res.match(/^\[(.+)\]\((https?:\/\/[^)]+)\)$/);
      return link ? { label: typo(link[1]), href: link[2], meta: [langue, duree].filter(Boolean).join(", ") } : null;
    })
    .filter((r): r is Ressource => r !== null);

  const prerequisites: Voisin[] = (Array.isArray(data.prerequis) ? data.prerequis.map(String) : []).map((pid) => {
    const m = allModules.find((x) => x.id === pid) ?? fail(`prérequis « ${pid} » inconnu`);
    return { id: pid, title: m.title, slug: null, kind: "module" };
  });

  const { weeks, label } = weeksOf(need("semaines"));
  const slug = path.basename(folder).replace(/^\d+-/, "");

  return {
    id,
    slug,
    folder,
    etape: { n: etape.n, title: etape.title },
    title: need("titre"),
    promise: typo(need("promesse")),
    skipQuestion: typo(need("question_saut")),
    status: (data.statut as Fiche["status"]) ?? "brouillon",
    weeks,
    weeksLabel: label,
    hasQcm: data.qcm !== false,
    qcm: { drawn: 10, threshold: 80 },
    keyExercise: typo(bullet(s.get("Extrait du programme"), "Exercice clé") ?? fail("« Exercice clé » absent de l'extrait du programme")),
    objectives,
    chapters,
    exerciseCount: chapters.reduce((sum, c) => sum + c.exercises, 0),
    filRouge: typo(bullet(s.get("Fil rouge et ancrage local"), "Situation") ?? fail("« Situation » absente du fil rouge")),
    prerequisites,
    resources,
  };
}

let cache: Fiche[] | null = null;

/** Toutes les fiches du dépôt, dans l'ordre du parcours. */
export function getFiches(): Fiche[] {
  if (cache) return cache;
  const fiches: Fiche[] = [];
  ETAPES.forEach((etape, n) => {
    const root = path.join(REPO_ROOT, etape.dir);
    if (!fs.existsSync(root)) return;
    for (const d of fs.readdirSync(root, { withFileTypes: true }).filter((x) => x.isDirectory()).sort((a, b) => a.name.localeCompare(b.name))) {
      const file = path.join(root, d.name, "fiche.md");
      if (fs.existsSync(file)) fiches.push(readFiche(file, `${etape.dir}/${d.name}`, n));
    }
  });
  const slugs = fiches.map((f) => f.slug);
  const dup = slugs.find((x, i) => slugs.indexOf(x) !== i);
  if (dup) throw new Error(`Deux modules ont le même slug « ${dup} » : renomme l'un des dossiers.`);
  // Prérequis : lien seulement si la fiche existe.
  for (const f of fiches) for (const p of f.prerequisites) p.slug = fiches.find((x) => x.id === p.id)?.slug ?? null;
  cache = fiches;
  return fiches;
}

export function getFiche(slug: string): Fiche | undefined {
  return getFiches().find((f) => f.slug === decodeURIComponent(slug));
}

/** Slug de la page d'un module, ou null si sa fiche n'existe pas encore. */
export function slugOf(id: string): string | null {
  return getFiches().find((f) => f.id === id)?.slug ?? null;
}

/** Module précédent et suivant dans le parcours. Après le dernier module d'une étape vient son projet. */
export function neighbours(id: string): { prev: Voisin | null; next: Voisin | null } {
  const i = allModules.findIndex((m) => m.id === id);
  const toVoisin = (m: (typeof allModules)[number]): Voisin => ({ id: m.id, title: m.title, slug: slugOf(m.id), kind: "module" });
  const cur = allModules[i];
  const prevM = allModules[i - 1];
  const nextM = allModules[i + 1];
  const prev = prevM && prevM.etape.n === cur.etape.n ? toVoisin(prevM) : null;
  const next =
    nextM && nextM.etape.n === cur.etape.n
      ? toVoisin(nextM)
      : { id: `Projet ${cur.etape.n}`, title: typo(cur.etape.project), slug: null, kind: "projet" as const };
  return { prev, next };
}
