"use client";

import { Check, CheckCircle2, Circle } from "lucide-react";
import { useEffect, useState, useSyncExternalStore } from "react";
import { cn } from "@/components/ui";

/**
 * Suivi des chapitres lus, dans le navigateur de l'apprenant (localStorage).
 * C'est une aide de confort : la vraie progression officielle sera celle de
 * outils/progression.py, dans le dépôt de l'apprenant.
 */

const EVENT = "fae-progress";
const key = (moduleSlug: string, n: number | string) => `fae:lu:${moduleSlug}:${n}`;

function readDone(moduleSlug: string, n: number | string): boolean {
  try {
    return window.localStorage.getItem(key(moduleSlug, n)) === "1";
  } catch {
    return false;
  }
}

function writeDone(moduleSlug: string, n: number | string, done: boolean) {
  try {
    if (done) window.localStorage.setItem(key(moduleSlug, n), "1");
    else window.localStorage.removeItem(key(moduleSlug, n));
  } catch {
    /* Stockage bloqué (navigation privée) : on ignore. */
  }
  window.dispatchEvent(new Event(EVENT));
}

function subscribe(callback: () => void) {
  window.addEventListener(EVENT, callback);
  window.addEventListener("storage", callback);
  return () => {
    window.removeEventListener(EVENT, callback);
    window.removeEventListener("storage", callback);
  };
}

function useDone(moduleSlug: string, n: number | string) {
  return useSyncExternalStore(
    subscribe,
    () => readDone(moduleSlug, n),
    () => false,
  );
}

/** Une leçon dans la barre latérale : « Leçon 1.2 », clé de suivi « 1.2 ». */
export type LessonLink = { key: string; label: string; title: string; href: string };
export type ModuleNavChapter = { number: number; title: string; href: string; lessons: LessonLink[] };

/**
 * Sommaire du module (colonne de gauche des pages de cours) : chaque chapitre et ses leçons.
 * La leçon ouverte est mise en avant ; les leçons terminées ont une coche.
 */
export function ModuleNav({
  moduleSlug,
  chapters,
  currentChapter,
  currentLesson,
}: {
  moduleSlug: string;
  chapters: ModuleNavChapter[];
  currentChapter: number;
  currentLesson?: string;
}) {
  return (
    <ol className="space-y-5">
      {chapters.map((c) => (
        <li key={c.number}>
          <a
            href={c.href}
            aria-current={c.number === currentChapter && !currentLesson ? "page" : undefined}
            className={cn(
              "block rounded-lg px-3 py-1.5 text-xs font-semibold tracking-wide uppercase transition-colors duration-200",
              c.number === currentChapter ? "text-accent-1" : "text-fg-subtle hover:text-fg",
            )}
          >
            Chapitre {c.number} · <span className="normal-case">{c.title}</span>
          </a>
          <ol className="mt-1 space-y-0.5">
            {c.lessons.map((l) => (
              <LessonItem key={l.key} moduleSlug={moduleSlug} lesson={l} active={l.key === currentLesson} />
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}

function LessonItem({ moduleSlug, lesson, active }: { moduleSlug: string; lesson: LessonLink; active: boolean }) {
  const done = useDone(moduleSlug, lesson.key);
  return (
    <li>
      <a
        href={lesson.href}
        aria-current={active ? "page" : undefined}
        className={cn(
          "flex items-start gap-3 rounded-xl px-3 py-2 text-sm transition-colors duration-200",
          active ? "bg-accent/12 text-fg" : "text-fg-muted hover:bg-white/[0.05] hover:text-fg",
        )}
      >
        {done ? (
          <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-success" aria-label="Terminée" />
        ) : (
          <Circle className={cn("mt-0.5 size-4 shrink-0", active ? "text-accent" : "text-fg-subtle")} aria-hidden="true" />
        )}
        <span>
          <span className="block text-xs text-fg-subtle">{lesson.label}</span>
          <span className={cn("font-medium", active && "text-fg")}>{lesson.title}</span>
        </span>
      </a>
    </li>
  );
}

/** Bouton de fin de leçon : marque la leçon comme terminée (ou annule). */
export function MarkDone({ moduleSlug, lessonKey }: { moduleSlug: string; lessonKey: string }) {
  const done = useDone(moduleSlug, lessonKey);
  const [justDone, setJustDone] = useState(false);

  useEffect(() => {
    if (!justDone) return;
    const t = setTimeout(() => setJustDone(false), 1200);
    return () => clearTimeout(t);
  }, [justDone]);

  return (
    <button
      type="button"
      onClick={() => {
        writeDone(moduleSlug, lessonKey, !done);
        if (!done) setJustDone(true);
      }}
      aria-pressed={done}
      className={cn(
        "inline-flex h-12 items-center gap-2.5 rounded-full px-6 text-sm font-semibold transition-[background-color,border-color,color,transform] duration-200 motion-safe:hover:-translate-y-0.5",
        done
          ? "border border-success/40 bg-success/10 text-success hover:bg-success/15"
          : "bg-gradient-accent text-[#1a0d05] shadow-[0_10px_30px_-12px_rgb(245_158_66/0.6)]",
        justDone && "motion-safe:animate-[pop_500ms_ease-out]",
      )}
    >
      {done ? <Check className="size-4" aria-hidden="true" /> : null}
      {done ? "Leçon terminée" : "J'ai terminé cette leçon"}
    </button>
  );
}
