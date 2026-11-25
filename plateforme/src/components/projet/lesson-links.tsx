import { ArrowUpRight } from "lucide-react";
import type { LeconRef } from "@/lib/projets";

/** Lien vers la leçon, dans la page de son chapitre, ouverte dans un nouvel onglet. */
export const lessonHref = (l: LeconRef) => `/modules/${l.moduleSlug}/${l.chapterSlug}#${l.lessonId}`;

/** Les leçons à revoir, en petites étiquettes cliquables (module + titre de la leçon). */
export function LessonChips({ lessons }: { lessons: LeconRef[] }) {
  return (
    <ul className="flex flex-wrap gap-2">
      {lessons.map((l) => (
        <li key={l.ref}>
          <a
            href={lessonHref(l)}
            target="_blank"
            rel="noopener"
            className="group inline-flex items-baseline gap-1.5 rounded-full border border-line px-3 py-1 text-sm text-fg-muted transition-[border-color,color,background-color] duration-200 hover:border-accent/60 hover:bg-accent/[0.06] hover:text-fg"
          >
            <span className="font-display text-xs font-bold text-accent-1">{l.moduleId}</span>
            {l.lessonTitle}
            <span className="sr-only">(s&apos;ouvre dans un nouvel onglet)</span>
          </a>
        </li>
      ))}
    </ul>
  );
}

/** Les leçons à revoir, en liste détaillée : leçon, puis module et chapitre où la trouver. */
export function LessonList({ lessons }: { lessons: LeconRef[] }) {
  return (
    <ul className="border-t border-line">
      {lessons.map((l) => (
        <li key={l.ref} className="border-b border-line">
          <a
            href={lessonHref(l)}
            target="_blank"
            rel="noopener"
            className="group flex items-start justify-between gap-4 py-4 transition-colors duration-200"
          >
            <span className="min-w-0">
              <span className="block font-semibold text-fg group-hover:text-accent-1">{l.lessonTitle}</span>
              <span className="mt-1 block text-sm text-fg-subtle">
                Module {l.moduleId} {l.moduleTitle}, chapitre {l.chapterN}&nbsp;: {l.chapterTitle}
              </span>
            </span>
            <ArrowUpRight
              className="mt-1 size-4 shrink-0 text-fg-subtle transition-[transform,color] duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent"
              aria-hidden="true"
            />
            <span className="sr-only">(s&apos;ouvre dans un nouvel onglet)</span>
          </a>
        </li>
      ))}
    </ul>
  );
}
