import type { ReactNode } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { ModuleNav, type ModuleNavChapter } from "@/components/course/progress";
import { Toc } from "@/components/course/toc";
import { cn } from "@/components/ui";
import type { TocItem } from "@/lib/content";
import type { Step } from "@/lib/course-nav";

/**
 * Mise en page des pages de cours : sommaire du module à gauche, contenu au centre,
 * sommaire de la page à droite (qui suit la lecture). Sur petit écran, les deux sommaires
 * sont des menus repliables en haut de la page.
 */
export function CourseLayout({
  moduleSlug,
  moduleTitle,
  nav,
  currentChapter,
  currentLesson,
  position,
  toc,
  tocTitle,
  children,
}: {
  moduleSlug: string;
  moduleTitle: string;
  nav: ModuleNavChapter[];
  currentChapter: number;
  currentLesson?: string;
  position: string;
  toc: TocItem[];
  tocTitle: string;
  children: ReactNode;
}) {
  return (
    <div className="mx-auto grid w-full max-w-[90rem] flex-1 gap-10 px-4 sm:px-6 lg:grid-cols-[16rem_minmax(0,1fr)] lg:px-8 xl:grid-cols-[16rem_minmax(0,1fr)_15rem]">
      {/* Sommaire du module */}
      <aside className="lg:sticky lg:top-16 lg:h-[calc(100dvh-4rem)] lg:overflow-y-auto lg:py-10">
        <details className="group mt-6 rounded-2xl border border-line bg-surface lg:hidden">
          <summary className="flex items-center justify-between px-4 py-3 text-sm font-semibold text-fg">
            Sommaire du module
            <span className="text-xs font-normal text-fg-subtle group-open:hidden">{position}</span>
          </summary>
          <div className="border-t border-line p-2">
            <ModuleNav moduleSlug={moduleSlug} chapters={nav} currentChapter={currentChapter} currentLesson={currentLesson} />
          </div>
        </details>
        <div className="hidden lg:block">
          <p className="px-3 text-sm font-semibold text-fg">{moduleTitle}</p>
          <div className="mt-4">
            <ModuleNav moduleSlug={moduleSlug} chapters={nav} currentChapter={currentChapter} currentLesson={currentLesson} />
          </div>
        </div>
      </aside>

      <main id="contenu" className="min-w-0 py-6 lg:py-14">
        {toc.length > 0 && (
          <details className="mx-auto mb-8 max-w-[44rem] rounded-2xl border border-line bg-surface xl:hidden">
            <summary className="px-4 py-3 text-sm font-semibold text-fg">{tocTitle}</summary>
            <ol className="space-y-1 border-t border-line p-3">
              {toc.map((item) => (
                <li key={item.id}>
                  <a href={`#${item.id}`} className="block rounded-lg px-2 py-1.5 text-sm text-fg-muted hover:text-fg">
                    {item.label}
                  </a>
                </li>
              ))}
            </ol>
          </details>
        )}
        <article className="mx-auto max-w-[44rem]">{children}</article>
      </main>

      {/* Sommaire de la page */}
      <aside className="hidden xl:block">
        <div className="sticky top-16 max-h-[calc(100dvh-4rem)] overflow-y-auto py-14">
          <Toc items={toc} title={tocTitle} />
        </div>
      </aside>
    </div>
  );
}

/** Boutons « Précédent » et « Suivant » en bas de page. */
export function StepNav({ prev, next, endLabel }: { prev?: Step; next?: Step; endLabel: ReactNode }) {
  return (
    <nav aria-label="Pages du cours" className="mt-10 grid gap-3 sm:grid-cols-2">
      {prev ? <StepLink step={prev} direction="prev" /> : <span className="hidden sm:block" />}
      {next ? <StepLink step={next} direction="next" /> : endLabel}
    </nav>
  );
}

function StepLink({ step, direction }: { step: Step; direction: "prev" | "next" }) {
  const next = direction === "next";
  return (
    <a
      href={step.href}
      className={cn(
        "group rounded-2xl border border-line bg-surface p-5 transition-[border-color,background-color,transform] duration-200 hover:border-accent/50 hover:bg-surface-2 motion-safe:hover:-translate-y-0.5",
        next && "sm:text-right",
      )}
    >
      <p className={cn("flex items-center gap-1.5 text-sm text-fg-subtle", next && "sm:justify-end")}>
        {!next && <ArrowLeft className="size-4 transition-transform duration-200 group-hover:-translate-x-1" aria-hidden="true" />}
        {next ? "Suivant" : "Précédent"} : {step.label}
        {next && <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />}
      </p>
      <p className="mt-1 font-semibold text-fg group-hover:text-accent-1">{step.title}</p>
    </a>
  );
}

/** Carte de fin de module, quand il n'y a plus de page suivante. */
export function EndOfModule() {
  return (
    <div className="rounded-2xl border border-dashed border-line-strong p-5 sm:text-right">
      <p className="text-sm text-fg-subtle">Fin du module</p>
      <p className="mt-1 font-semibold text-fg">QCM et exercices du module</p>
      <p className="mt-1 text-sm text-fg-muted">Les pages d&apos;exercices et de QCM sont en préparation.</p>
    </div>
  );
}
