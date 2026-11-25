import "server-only";
import fs from "node:fs";
import path from "node:path";
import { parse as parseYaml } from "yaml";
import { getFiches, REPO_ROOT, sections, tableRows, typo, type Chapitre, type Fiche } from "./fiches";
import { slugify } from "./slug";

/**
 * Lecture des fiches de projet (`07-projets/<NN-nom>/fiche.md`), au build.
 * Un projet se lit comme un module : un brief client, des compétences reliées aux leçons,
 * des missions (l'équivalent des chapitres, une page chacune), la validation et le portfolio.
 * Contrat : templates/projet.md. Une fiche mal remplie, ou une leçon citée qui n'existe pas, fait échouer le build.
 */

export const PROJETS_DIR = "07-projets";

/** Une leçon citée par un projet (« 3.4/citations »), résolue vers son module et son chapitre. */
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

export type Mission = {
  n: number;
  slug: string;
  title: string;
  situation: string;
  deliverable: string;
  criteria: string[];
  steps: string[];
  change: string | null;
  lessons: LeconRef[];
  verification: string;
  /** Dossier de la mission dans le dépôt, pour la commande de vérification. */
  folder: string;
};

export type Projet = {
  id: string;
  slug: string;
  folder: string;
  title: string;
  family: string;
  promise: string;
  status: "brouillon" | "relu" | "publie";
  prerequisites: { id: string; title: string; slug: string }[];
  brief: { label: string; text: string }[];
  indicators: { name: string; nature: string; target: string; how: string }[];
  skills: { skill: string; lessons: LeconRef[] }[];
  missions: Mission[];
  validation: { check: string; how: string; rule: string }[];
  portfolio: string[];
  material: { label: string; text: string }[];
};

/** Les lignes « - **Libellé** : texte », chacune avec ses sous-éléments (« - … » ou « 1. … » indentés). */
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

const cap = (t: string) => t.charAt(0).toUpperCase() + t.slice(1);

const plainBullets = (section: string | undefined) =>
  (section ?? "")
    .split(/\r?\n/)
    .map((l) => l.match(/^- (.+)$/)?.[1])
    .filter((x): x is string => !!x)
    .map(typo);

let cache: Projet[] | null = null;

/** Tous les projets, dans l'ordre des dossiers. */
export function getProjets(): Projet[] {
  if (cache) return cache;
  const root = path.join(REPO_ROOT, PROJETS_DIR);
  if (!fs.existsSync(root)) return (cache = []);

  const fiches = getFiches();
  const resolve = (ref: string, fail: (m: string) => never): LeconRef => {
    const [moduleId, lessonId] = ref.split("/");
    const f = fiches.find((x) => x.id === moduleId) ?? fail(`la leçon « ${ref} » cite le module ${moduleId}, introuvable`);
    const c = f.chapters.find((x) => x.lessons.some((l) => l.id === lessonId)) ?? fail(`la leçon « ${ref} » n'existe pas dans le module ${moduleId}`);
    const l = c.lessons.find((x) => x.id === lessonId)!;
    return {
      ref,
      moduleId,
      moduleTitle: f.title,
      moduleSlug: f.slug,
      chapterN: c.n,
      chapterSlug: c.slug,
      chapterTitle: c.title,
      lessonId,
      lessonTitle: l.title,
    };
  };
  const refsIn = (text: string, fail: (m: string) => never) =>
    [...text.matchAll(/(\d\.\d+)\/([a-z0-9-]+)/g)].map((m) => resolve(`${m[1]}/${m[2]}`, fail));

  const projets: Projet[] = [];
  for (const d of fs.readdirSync(root, { withFileTypes: true }).filter((x) => x.isDirectory()).sort((a, b) => a.name.localeCompare(b.name))) {
    const folder = `${PROJETS_DIR}/${d.name}`;
    const file = path.join(root, d.name, "fiche.md");
    if (!fs.existsSync(file)) continue;
    const fail = (msg: string): never => {
      throw new Error(`${folder}/fiche.md : ${msg}`);
    };
    const source = fs.readFileSync(file, "utf8");
    const fm = source.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?/) ?? fail("front matter YAML manquant");
    const data = (parseYaml(fm[1]) ?? {}) as Record<string, unknown>;
    const need = (key: string) => {
      const v = data[key];
      if (v === undefined || v === null || v === "") fail(`champ « ${key} » manquant dans le front matter`);
      return String(v);
    };
    const s = sections(source.slice(fm[0].length));

    const brief = labelled(s.get("Le brief client") ?? "").map((b) => ({ label: b.label, text: cap(typo(b.text)) }));
    if (brief.length === 0) fail("section « Le brief client » vide ou absente");

    const missionsSection = s.get("Missions") ?? fail("section « Missions » absente");
    const missions: Mission[] = missionsSection
      .split(/^### /m)
      .slice(1)
      .map((part) => {
        const nl = part.indexOf("\n");
        const head = part.slice(0, nl).match(/^(\d+)\. (.+)$/) ?? fail(`titre de mission illisible : « ${part.slice(0, nl)} » (attendu « 1. Titre »)`);
        const fields = labelled(part.slice(nl + 1));
        const get = (label: string) => fields.find((f) => f.label === label);
        const required = (label: string) => get(label) ?? fail(`la mission ${head[1]} n'a pas de « ${label} »`);
        const title = head[2].trim();
        const slug = slugify(title);
        const n = Number(head[1]);
        return {
          n,
          slug,
          title: typo(title),
          situation: cap(typo(required("Situation").text)),
          deliverable: typo(required("Livrable").text),
          criteria: required("Critères de réussite").items.map(typo),
          steps: (get("Étapes conseillées")?.items ?? []).map(typo),
          change: get("Changement imprévu") ? cap(typo(get("Changement imprévu")!.text)) : null,
          lessons: refsIn(required("Leçons utiles").text, fail),
          verification: typo(required("Vérification").text),
          folder: `${folder}/missions/${String(n).padStart(2, "0")}-${slug}`,
        };
      });
    if (missions.length === 0) fail("aucune mission");
    missions.forEach((m, i) => {
      if (m.n !== i + 1) fail(`les missions doivent être numérotées 1, 2, 3… (trouvé ${m.n} en position ${i + 1})`);
      if (m.criteria.length === 0) fail(`la mission ${m.n} n'a aucun critère de réussite`);
    });

    const prerequisites = (Array.isArray(data.prerequis) ? data.prerequis.map(String) : []).map((pid) => {
      const f: Fiche = fiches.find((x) => x.id === pid) ?? fail(`prérequis « ${pid} » inconnu`);
      return { id: pid, title: f.title, slug: f.slug };
    });

    projets.push({
      id: need("id"),
      slug: d.name.replace(/^\d+-/, ""),
      folder,
      title: typo(need("titre")),
      family: typo(need("famille")),
      promise: typo(need("promesse")),
      status: (data.statut as Projet["status"]) ?? "brouillon",
      prerequisites,
      brief,
      indicators: tableRows(s.get("Indicateurs de réussite")).map(([name, nature, target, how]) => ({
        name: typo(name),
        nature,
        target: typo(target),
        how: typo(how),
      })),
      skills: tableRows(s.get("Compétences démontrées")).map(([skill, lessons]) => ({ skill: typo(skill), lessons: refsIn(lessons ?? "", fail) })),
      missions,
      validation: tableRows(s.get("Validation")).map(([check, how, rule]) => ({ check: typo(check), how: typo(how), rule: typo(rule) })),
      portfolio: plainBullets(s.get("Portfolio")),
      material: labelled(s.get("Données et ressources matérielles") ?? "").map((b) => ({ label: b.label, text: typo(b.text) })),
    });
  }
  const ids = projets.map((p) => p.id);
  const dup = ids.find((x, i) => ids.indexOf(x) !== i);
  if (dup) throw new Error(`Deux projets ont le même identifiant « ${dup} ».`);
  return (cache = projets);
}

export function getProjet(slug: string): Projet | undefined {
  return getProjets().find((p) => p.slug === decodeURIComponent(slug));
}

/** Une mission d'un projet, avec ses voisines. */
export function getMission(projetSlug: string, missionSlug: string) {
  const projet = getProjet(projetSlug);
  const i = projet?.missions.findIndex((m) => m.slug === decodeURIComponent(missionSlug)) ?? -1;
  if (!projet || i < 0) return undefined;
  return { projet, mission: projet.missions[i], prev: projet.missions[i - 1] ?? null, next: projet.missions[i + 1] ?? null };
}

/** Les missions de projet qui appliquent une leçon d'un chapitre donné : le lien retour, de la leçon vers le projet. */
export function missionsForChapter(fiche: Fiche, chapitre: Chapitre) {
  const ids = new Set(chapitre.lessons.map((l) => `${fiche.id}/${l.id}`));
  return getProjets().flatMap((p) =>
    p.missions
      .filter((m) => m.lessons.some((l) => ids.has(l.ref)))
      .map((m) => ({ projet: p, mission: m, lessons: m.lessons.filter((l) => ids.has(l.ref)) })),
  );
}
