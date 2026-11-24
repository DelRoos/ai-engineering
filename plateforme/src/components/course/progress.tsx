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
const key = (moduleSlug: string, n: number) => `fae:lu:${moduleSlug}:${n}`;

function readDone(moduleSlug: string, n: number): boolean {
  try {
    return window.localStorage.getItem(key(moduleSlug, n)) === "1";
  } catch {
    return false;
  }
}

function writeDone(moduleSlug: string, n: number, done: boolean) {
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

function useDone(moduleSlug: string, n: number) {
  return useSyncExternalStore(
    subscribe,
    () => readDone(moduleSlug, n),
    () => false,
  );
}

type ChapterLink = { number: number; title: string; href: string };

/** Liste des chapitres (barre latérale), avec une coche pour ceux déjà terminés. */
export function ChapterList({ moduleSlug, chapters, current }: { moduleSlug: string; chapters: ChapterLink[]; current: number }) {
  return (
    <ol className="space-y-1">
      {chapters.map((c) => (
        <ChapterItem key={c.number} moduleSlug={moduleSlug} chapter={c} active={c.number === current} />
      ))}
    </ol>
  );
}

function ChapterItem({ moduleSlug, chapter, active }: { moduleSlug: string; chapter: ChapterLink; active: boolean }) {
  const done = useDone(moduleSlug, chapter.number);
  return (
    <li>
      <a
        href={chapter.href}
        aria-current={active ? "page" : undefined}
        className={cn(
          "flex items-start gap-3 rounded-xl px-3 py-2.5 text-sm transition-colors duration-200",
          active ? "bg-accent/12 text-fg" : "text-fg-muted hover:bg-white/[0.05] hover:text-fg",
        )}
      >
        {done ? (
          <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-success" aria-label="Terminé" />
        ) : (
          <Circle className={cn("mt-0.5 size-4 shrink-0", active ? "text-accent" : "text-fg-subtle")} aria-hidden="true" />
        )}
        <span>
          <span className="block text-xs text-fg-subtle">Chapitre {chapter.number}</span>
          <span className={cn("font-medium", active && "text-fg")}>{chapter.title}</span>
        </span>
      </a>
    </li>
  );
}

/** Bouton de fin de chapitre : marque le chapitre comme terminé (ou annule). */
export function MarkDone({ moduleSlug, number }: { moduleSlug: string; number: number }) {
  const done = useDone(moduleSlug, number);
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
        writeDone(moduleSlug, number, !done);
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
      {done ? "Chapitre terminé" : "J'ai terminé ce chapitre"}
    </button>
  );
}
