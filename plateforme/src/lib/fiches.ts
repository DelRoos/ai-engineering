import "server-only";
import fs from "node:fs";
import path from "node:path";
import { parse as parseYaml } from "yaml";
import { etapes, grandesSections } from "@/content/commencer";
import { ETAPES } from "./content";
import { slugify } from "./slug";

/**
 * Lecture des fiches de module (`<etape>/<NN-nom>/fiche.md`), au build.
 * La fiche est la source unique de la page d'un module : objectifs, chapitres, leçons, fil rouge, ressources.
 * Contrat : templates/fiche.md (tableaux « Chapitres » et « Notions, dans l'ordre »).
 * Une fiche mal remplie fait échouer le build, avec un message qui dit quoi corriger.
 */

export const REPO_ROOT = path.resolve(process.cwd(), "..");

export type Lecon = { id: string; title: string; objective: string };
export type Chapitre = {
  n: number;
  /** Fiche d'un projet, quand le module est une famille de grands projets (étape 7). */
  project?: Projet;
  /** Segment d'URL du chapitre, tiré de son titre : « Les listes » → « les-listes ». */
  slug: string;
  title: string;
  exercises: number;
  lessons: Lecon[];
};
export type Objectif = { id: string; text: string };
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
  hasQcm: boolean;
  qcm: { drawn: number; threshold: number };
  keyExercise: string;
  objectives: Objectif[];
  chapters: Chapitre[];
  exerciseCount: number;
  filRouge: string;
  prerequisites: Voisin[];
  resources: Ressource[];
  expert: Expert | null;
  /** « projets » : une famille de grands projets, où chaque chapitre est un projet et chaque leçon une étape. */
  nature: "module" | "projets";
  /** Tableau comparatif des projets de la famille. */
  comparison: { headers: string[]; rows: string[][] } | null;
};

/** Une leçon citée (« 3.4/citations »), résolue vers son module et son chapitre. */
export type LeconRef = {
  ref: string;
  moduleId: string;
  moduleTitle: string;
  moduleSlug: string;
  chapterN: number;
  chapterSlug: string;
  chapterTitle: string;
  lessonId: string;
  lessonTitle: string;
};

/** Un grand projet : du problème du client au résultat prouvé. */
export type Projet = {
  client: string;
  problem: string;
  difference: string;
  approach: string;
  rejected: string;
  business: string;
  constraints: string;
  unexpected: string;
  criteria: string[];
  /** Références brutes (« 3.4/citations »), résolues dans `review` après lecture de toutes les fiches. */
  reviewRefs: string[];
  review: LeconRef[];
  portfolio: string;
};

/** Épreuve de niveau expert : la tâche, les niveaux démontrés et le statut des méthodes enseignées. */
export type Expert = {
  task: string;
  levels: { level: string; proof: string }[];
  methods: { method: string; status: string; practice: string }[];
};

/** Typographie française : espace insécable avant « : ; ! ? » et à l'intérieur des guillemets. */
export function typo(text: string): string {
  return text
    .replace(/ ([:;!?»])/g, " $1")
    .replace(/« /g, "« ");
}

const capitalize = (t: string) => t.charAt(0).toUpperCase() + t.slice(1);

const FRONT_MATTER = /^---\r?\n([\s\S]*?)\r?\n---\r?\n?/;

export function sections(body: string): Map<string, string> {
  const map = new Map<string, string>();
  const parts = body.split(/^## /m).slice(1);
  for (const part of parts) {
    const nl = part.indexOf("\n");
    map.set(part.slice(0, nl).trim(), part.slice(nl + 1));
  }
  return map;
}

/** Lignes d'un tableau Markdown, sans l'en-tête ni le séparateur, cellules nettoyées. */
export function tableRows(section: string | undefined): string[][] {
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

/** Les lignes « - **Libellé** : texte », chacune avec ses sous-éléments indentés (« - … » ou « 1. … »). */
function labelled(section: string): { label: string; text: string; items: string[] }[] {
  const out: { label: string; text: string; items: string[] }[] = [];
  for (const line of section.split(/\r?\n/)) {
    const top = line.match(/^- \*\*(.+?)\*\* : ?(.*)$/);
    if (top) {
      out.push({ label: top[1].trim(), text: top[2].trim(), items: [] });
      continue;
    }
    const sub = line.match(/^\s+(?:-|\d+\.) (.+)$/);
    if (sub && out.length) out[out.length - 1].items.push(sub[1].trim());
  }
  return out;
}

/** Les projets d'une famille (section « Les projets »), rattachés à leur chapitre par leur numéro. */
function readProjets(section: string, chapters: Chapitre[], fail: (m: string) => never) {
  for (const part of section.split(/^### /m).slice(1)) {
    const nl = part.indexOf("\n");
    const head = part.slice(0, nl).match(/^(\d+)\. (.+)$/) ?? fail(`titre de projet illisible : « ${part.slice(0, nl)} » (attendu « 1. Titre »)`);
    const c = chapters.find((x) => x.n === Number(head[1])) ?? fail(`le projet ${head[1]} n'a pas de chapitre`);
    const fields = labelled(part.slice(nl + 1));
    const get = (label: string) =>
      fields.find((f) => f.label === label) ?? fail(`le projet ${head[1]} n'a pas de « ${label} »`);
    const text = (label: string) => capitalize(typo(get(label).text));
    c.project = {
      client: text("Le client"),
      problem: text("Le problème"),
      difference: text("Pourquoi ce cas est différent"),
      approach: text("L'approche de l'expert"),
      rejected: text("Alternatives écartées"),
      business: text("Ce qui se vend"),
      constraints: text("Contraintes réelles"),
      unexpected: text("L'imprévu"),
      criteria: get("C'est réussi quand").items.map(typo),
      reviewRefs: [...get("À revoir").text.matchAll(/(\d\.\d+)\/([a-z0-9-]+)/g)].map((m) => `${m[1]}/${m[2]}`),
      review: [],
      portfolio: text("Pour ton portfolio"),
    };
  }
  const missing = chapters.find((c) => !c.project);
  if (missing) fail(`le chapitre ${missing.n} n'a pas sa fiche dans « Les projets »`);
}

function bullet(section: string | undefined, label: string): string | null {
  const m = section?.match(new RegExp(`^- \\*\\*${label}\\*\\* : (.+)$`, "m"));
  return m ? m[1].trim() : null;
}

const toutesEtapes = [...etapes, ...grandesSections];
const allModules = toutesEtapes.flatMap((e) => e.modules.map((m) => ({ ...m, etape: e })));

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
  const etape = toutesEtapes.find((e) => e.n === etapeN) ?? fail(`étape ${etapeN} absente de content/commencer.ts`);

  // Chapitres et leçons
  const chapters: Chapitre[] = tableRows(s.get("Chapitres")).map(([n, title, exercises]) => ({
    n: Number(n),
    slug: slugify(title),
    title: typo(title),
    exercises: Number(exercises),
    lessons: [],
  }));
  if (chapters.length === 0) fail("tableau « Chapitres » vide ou absent");

  for (const [chap, lessonId, title, objective] of tableRows(s.get("Notions, dans l'ordre"))) {
    const c = chapters.find((x) => x.n === Number(chap)) ?? fail(`la notion « ${lessonId} » cite le chapitre ${chap}, absent du tableau des chapitres`);
    c.lessons.push({ id: lessonId, title: typo(title), objective: objective ?? "" });
  }
  for (const c of chapters) {
    if (c.lessons.length === 0) fail(`le chapitre ${c.n} n'a aucune notion`);
    if (c.lessons.length > 8) fail(`le chapitre ${c.n} a ${c.lessons.length} notions (8 au plus) : découpe-le en deux chapitres`);
    if (c.lessons.length < 5 && !id.startsWith("0.0")) fail(`le chapitre ${c.n} n'a que ${c.lessons.length} notions (5 au moins) : complète-le ou regroupe-le`);
    if (!Number.isFinite(c.exercises)) fail(`nombre d'exercices illisible au chapitre ${c.n}`);
  }
  const chapterSlugs = chapters.map((c) => c.slug);
  const dupChapter = chapterSlugs.find((x, i) => chapterSlugs.indexOf(x) !== i);
  if (dupChapter) fail(`deux chapitres ont le même titre (slug « ${dupChapter} »)`);
  const ids = chapters.flatMap((c) => c.lessons.map((l) => l.id));
  const dup = ids.find((x, i) => ids.indexOf(x) !== i);
  if (dup) fail(`identifiant de notion en double : « ${dup} »`);

  const objectives = tableRows(s.get("Objectifs vérifiables")).map((r) => ({ id: r[0], text: typo(r[1]) }));
  if (objectives.length === 0) fail("tableau « Objectifs vérifiables » vide");

  const resources: Ressource[] = tableRows(s.get("Ressources externes gratuites"))
    .map(([res, langue, type]) => {
      const link = res.match(/^\[(.+)\]\((https?:\/\/[^)]+)\)$/);
      return link ? { label: typo(link[1]), href: link[2], meta: [langue, type].filter(Boolean).join(", ") } : null;
    })
    .filter((r): r is Ressource => r !== null);

  const prerequisites: Voisin[] = (Array.isArray(data.prerequis) ? data.prerequis.map(String) : []).map((pid) => {
    const m = allModules.find((x) => x.id === pid) ?? fail(`prérequis « ${pid} » inconnu`);
    return { id: pid, title: typo(m.title), slug: null, kind: "module" };
  });

  const slug = path.basename(folder).replace(/^\d+-/, "");

  const nature = data.nature === "projets" ? "projets" : "module";
  let comparison: Fiche["comparison"] = null;
  if (nature === "projets") {
    readProjets(s.get("Les projets") ?? fail("section « Les projets » absente"), chapters, fail);
    const table = s.get("Comparatif des projets");
    if (table) {
      const head = table.split(/\r?\n/).find((l) => l.trim().startsWith("|"));
      comparison = {
        headers: (head ?? "").replace(/^\s*\||\|\s*$/g, "").split("|").map((c) => c.trim()),
        rows: tableRows(table).map((r) => r.map(typo)),
      };
    }
  }

  let expert: Expert | null = null;
  const epreuve = s.get("Épreuve de niveau expert");
  if (epreuve) {
    const [levelsPart, methodsPart] = epreuve.split("**Statut des méthodes enseignées**");
    const task = bullet(levelsPart.replace(/^\*\*Épreuve\*\* : /m, "- **Épreuve** : "), "Épreuve") ?? fail("« **Épreuve** : » absent de l'épreuve de niveau expert");
    expert = {
      task: typo(task),
      levels: tableRows(levelsPart).map(([level, proof]) => ({ level, proof: typo(proof) })),
      methods: tableRows(methodsPart).map(([method, status, practice]) => ({ method: typo(method), status: typo(status), practice: typo(practice) })),
    };
    if (expert.levels.length === 0) fail("tableau des niveaux démontrés vide dans l'épreuve de niveau expert");
  }

  return {
    id,
    slug,
    folder,
    etape: { n: etape.n, title: etape.title },
    title: typo(need("titre")),
    promise: typo(need("promesse")),
    skipQuestion: typo(need("question_saut")),
    status: (data.statut as Fiche["status"]) ?? "brouillon",
    hasQcm: data.qcm !== false,
    qcm: { drawn: 10, threshold: 80 },
    keyExercise: typo(bullet(s.get("Extrait du programme"), "Exercice clé") ?? fail("« Exercice clé » absent de l'extrait du programme")),
    objectives,
    chapters,
    exerciseCount: chapters.reduce((sum, c) => sum + c.exercises, 0),
    filRouge: capitalize(typo(bullet(s.get("Fil rouge et ancrage local"), "Situation") ?? fail("« Situation » absente du fil rouge"))),
    prerequisites,
    resources,
    expert,
    nature,
    comparison,
  };
}

let cache: Fiche[] | null = null;

/** Toutes les fiches du dépôt, dans l'ordre du parcours. */
export function getFiches(): Fiche[] {
  if (cache) return cache;
  const fiches: Fiche[] = [];
  // Les 7 étapes du parcours (0 à 6), puis les grandes sections : collecte (7), no code (8), grands projets (9).
  [...ETAPES.map((e) => e.dir), ...SECTIONS_DIRS].forEach((dir, n) => {
    const root = path.join(REPO_ROOT, dir);
    if (!fs.existsSync(root)) return;
    for (const d of fs.readdirSync(root, { withFileTypes: true }).filter((x) => x.isDirectory()).sort((a, b) => a.name.localeCompare(b.name))) {
      const file = path.join(root, d.name, "fiche.md");
      if (fs.existsSync(file)) fiches.push(readFiche(file, `${dir}/${d.name}`, n));
    }
  });
  const slugs = fiches.map((f) => f.slug);
  const dup = slugs.find((x, i) => slugs.indexOf(x) !== i);
  if (dup) throw new Error(`Deux modules ont le même slug « ${dup} » : renomme l'un des dossiers.`);
  // Prérequis : lien seulement si la fiche existe.
  for (const f of fiches) for (const p of f.prerequisites) p.slug = fiches.find((x) => x.id === p.id)?.slug ?? null;
  // Grands projets : chaque leçon citée doit exister ; elle est résolue vers son module et son chapitre.
  for (const f of fiches)
    for (const c of f.chapters)
      if (c.project) c.project.review = c.project.reviewRefs.map((ref) => resolveLecon(fiches, ref, `${f.folder}/fiche.md, projet ${c.n}`));
  cache = fiches;
  return fiches;
}

const SECTIONS_DIRS = ["07-collecte-automatisation", "08-automatisation-no-code", "09-projets"];

function resolveLecon(fiches: Fiche[], ref: string, where: string): LeconRef {
  const fail = (msg: string): never => {
    throw new Error(`${where} : ${msg}`);
  };
  const [moduleId, lessonId] = ref.split("/");
  const f = fiches.find((x) => x.id === moduleId) ?? fail(`la leçon « ${ref} » cite le module ${moduleId}, introuvable`);
  const c = f.chapters.find((x) => x.lessons.some((l) => l.id === lessonId)) ?? fail(`la leçon « ${ref} » n'existe pas dans le module ${moduleId}`);
  return {
    ref,
    moduleId,
    moduleTitle: f.title,
    moduleSlug: f.slug,
    chapterN: c.n,
    chapterSlug: c.slug,
    chapterTitle: c.title,
    lessonId,
    lessonTitle: c.lessons.find((l) => l.id === lessonId)!.title,
  };
}

/** Les grands projets qui appliquent les leçons d'un chapitre : le lien retour, de la leçon vers le projet. */
export function projectsUsingChapter(fiche: Fiche, chapitre: Chapitre) {
  const ids = new Set(chapitre.lessons.map((l) => `${fiche.id}/${l.id}`));
  return getFiches().flatMap((f) =>
    f.chapters
      .filter((c) => c.project?.review.some((l) => ids.has(l.ref)))
      .map((c) => ({ famille: f, chapitre: c, lessons: c.project!.review.filter((l) => ids.has(l.ref)) })),
  );
}

/** Les familles de grands projets (section 9). */
export function getFamilles(): Fiche[] {
  return getFiches().filter((f) => f.nature === "projets");
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
  const toVoisin = (m: (typeof allModules)[number]): Voisin => ({ id: m.id, title: typo(m.title), slug: slugOf(m.id), kind: "module" });
  const cur = allModules[i];
  const prevM = allModules[i - 1];
  const nextM = allModules[i + 1];
  const prev = prevM && prevM.etape.n === cur.etape.n ? toVoisin(prevM) : null;
  const next =
    nextM && nextM.etape.n === cur.etape.n
      ? toVoisin(nextM)
      : cur.etape.n > 6
        ? null
        : { id: `Projet ${cur.etape.n}`, title: typo(cur.etape.project), slug: null, kind: "projet" as const };
  return { prev, next };
}

/** Un chapitre d'un module, avec ses voisins dans le module. */
export function getChapitre(moduleSlug: string, chapitreSlug: string) {
  const fiche = getFiche(moduleSlug);
  const i = fiche?.chapters.findIndex((c) => c.slug === decodeURIComponent(chapitreSlug)) ?? -1;
  if (!fiche || i < 0) return undefined;
  return { fiche, chapitre: fiche.chapters[i], prev: fiche.chapters[i - 1] ?? null, next: fiche.chapters[i + 1] ?? null };
}

/** Objectifs travaillés par un chapitre (ceux de ses leçons), dans l'ordre de la fiche. */
export function chapterObjectives(fiche: Fiche, chapitre: Chapitre): Objectif[] {
  const ids = new Set(chapitre.lessons.flatMap((l) => l.objective.match(/O\d+/g) ?? []));
  return fiche.objectives.filter((o) => ids.has(o.id));
}
