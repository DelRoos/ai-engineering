import type { Module } from "./content";

/** Adresses des pages de cours : ouverture d'un chapitre, puis une page par leçon. */
export const chapterHref = (mod: Module, chapter: number) => `/cours/${mod.slug}/${chapter}`;
export const lessonHref = (mod: Module, chapter: number, lessonId: string) =>
  `/cours/${mod.slug}/${chapter}/${encodeURIComponent(lessonId)}`;

/** Sommaire du module pour la colonne de gauche. */
export function moduleNav(mod: Module) {
  return mod.chapters.map((c) => ({
    number: c.number,
    title: c.title,
    href: chapterHref(mod, c.number),
    lessons: c.lessons.map((l) => ({
      key: `${c.number}.${l.number}`,
      label: `Leçon ${c.number}.${l.number}`,
      title: l.title,
      href: lessonHref(mod, c.number, l.id),
    })),
  }));
}

export type Step = { href: string; label: string; title: string };

/** Ordre de lecture : ouverture du chapitre 1, ses leçons, ouverture du chapitre 2… */
export function readingOrder(mod: Module): Step[] {
  return mod.chapters.flatMap((c) => [
    ...(c.intro.trim() ? [{ href: chapterHref(mod, c.number), label: `Chapitre ${c.number}`, title: c.title }] : []),
    ...c.lessons.map((l) => ({
      href: lessonHref(mod, c.number, l.id),
      label: `Leçon ${c.number}.${l.number}`,
      title: l.title,
    })),
  ]);
}

/** Pages avant et après une page donnée dans l'ordre de lecture. */
export function neighbours(mod: Module, href: string): { prev?: Step; next?: Step } {
  const order = readingOrder(mod);
  const i = order.findIndex((s) => s.href === href);
  if (i < 0) return { next: order[0] };
  return { prev: order[i - 1], next: order[i + 1] };
}
