import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Clock, Target } from "lucide-react";
import { CourseHeader } from "@/components/course/course-header";
import { ChapterList, MarkDone } from "@/components/course/progress";
import { Toc } from "@/components/course/toc";
import { cn } from "@/components/ui";
import { getAllModules, getModule } from "@/lib/content";
import { renderChapter } from "@/lib/mdx";
import { site } from "@/content/site";
import { DemoBanner } from "@/components/course/demo-banner";

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllModules().flatMap((m) => m.chapters.map((c) => ({ moduleId: m.slug, chapitre: String(c.number) })));
}

function find(moduleId: string, chapitre: string) {
  const mod = getModule(moduleId);
  const index = mod?.chapters.findIndex((c) => String(c.number) === chapitre) ?? -1;
  if (!mod || index < 0) return null;
  return { mod, chapter: mod.chapters[index], prev: mod.chapters[index - 1], next: mod.chapters[index + 1] };
}

export async function generateMetadata({ params }: PageProps<"/cours/[moduleId]/[chapitre]">): Promise<Metadata> {
  const { moduleId, chapitre } = await params;
  const found = find(moduleId, chapitre);
  return { title: found ? `${found.chapter.title} — ${site.name}` : site.name };
}

const statusLabel = { brouillon: "Brouillon", relu: "Relu", publie: null } as const;

export default async function ChapterPage({ params }: PageProps<"/cours/[moduleId]/[chapitre]">) {
  const { moduleId, chapitre } = await params;
  const found = find(moduleId, chapitre);
  if (!found) notFound();
  const { mod, chapter, prev, next } = found;

  const href = (n: number) => `/cours/${mod.slug}/${n}`;
  const chapters = mod.chapters.map((c) => ({ number: c.number, title: c.title, href: href(c.number) }));
  const content = await renderChapter(chapter.body);
  const status = statusLabel[chapter.status];

  return (
    <>
      <CourseHeader
        phaseLabel={mod.phaseLabel}
        moduleTitle={mod.title}
        moduleHref={`/cours/${mod.slug}`}
        position={`Chapitre ${chapter.number} sur ${mod.chapters.length}`}
      />

      <div className="mx-auto grid w-full max-w-[90rem] flex-1 gap-10 px-4 sm:px-6 lg:grid-cols-[15rem_minmax(0,1fr)] lg:px-8 xl:grid-cols-[15rem_minmax(0,1fr)_14rem]">
        {/* Sommaire du module */}
        <aside className="lg:sticky lg:top-16 lg:h-[calc(100dvh-4rem)] lg:overflow-y-auto lg:py-10">
          <details className="group mt-6 rounded-2xl border border-line bg-surface lg:hidden">
            <summary className="flex items-center justify-between px-4 py-3 text-sm font-semibold text-fg">
              Sommaire du module
              <span className="text-xs font-normal text-fg-subtle group-open:hidden">
                {chapter.number} / {mod.chapters.length}
              </span>
            </summary>
            <div className="border-t border-line p-2">
              <ChapterList moduleSlug={mod.slug} chapters={chapters} current={chapter.number} />
            </div>
          </details>
          <div className="hidden lg:block">
            <p className="px-3 text-sm font-semibold text-fg">{mod.title}</p>
            <div className="mt-4">
              <ChapterList moduleSlug={mod.slug} chapters={chapters} current={chapter.number} />
            </div>
          </div>
        </aside>

        {/* Le cours */}
        <main id="contenu" className="min-w-0 py-10 lg:py-14">
          <article className="mx-auto max-w-[44rem]">
            {mod.isDemo && <DemoBanner />}
            <header>
              <p className="text-sm font-semibold text-accent">Chapitre {chapter.number}</p>
              <h1 className="mt-3 text-4xl leading-[1.05] font-bold tracking-[-0.03em] text-balance text-fg sm:text-5xl">
                {chapter.title}
              </h1>
              <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-fg-muted">
                {chapter.duration && (
                  <li className="flex items-center gap-2">
                    <Clock className="size-4 text-fg-subtle" aria-hidden="true" />
                    Environ {chapter.duration}
                  </li>
                )}
                {chapter.objectives.length > 0 && (
                  <li className="flex items-center gap-2">
                    <Target className="size-4 text-fg-subtle" aria-hidden="true" />
                    {chapter.objectives.length} objectif{chapter.objectives.length > 1 ? "s" : ""}
                  </li>
                )}
                {status && (
                  <li className="rounded-full border border-line-strong px-2.5 py-0.5 text-xs text-fg-subtle">{status}</li>
                )}
              </ul>
            </header>

            <div className="cours mt-4">{content}</div>

            {/* Fin de chapitre */}
            <footer className="mt-16 border-t border-line pt-10">
              <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-fg-muted">Tu as fait les mini-exercices et relu le résumé ?</p>
                <MarkDone moduleSlug={mod.slug} number={chapter.number} />
              </div>

              <nav aria-label="Chapitres" className="mt-10 grid gap-3 sm:grid-cols-2">
                {prev ? (
                  <ChapterNav href={href(prev.number)} direction="prev" label={`Chapitre ${prev.number}`} title={prev.title} />
                ) : (
                  <span className="hidden sm:block" />
                )}
                {next ? (
                  <ChapterNav href={href(next.number)} direction="next" label={`Chapitre ${next.number}`} title={next.title} />
                ) : (
                  <div className="rounded-2xl border border-dashed border-line-strong p-5 sm:text-right">
                    <p className="text-sm text-fg-subtle">Fin du module</p>
                    <p className="mt-1 font-semibold text-fg">QCM et exercices du module</p>
                    <p className="mt-1 text-sm text-fg-muted">Les pages d&apos;exercices et de QCM sont en préparation.</p>
                  </div>
                )}
              </nav>
            </footer>
          </article>
        </main>

        {/* Dans ce chapitre */}
        <aside className="hidden xl:block">
          <div className="sticky top-16 py-14">
            <Toc items={chapter.toc} />
          </div>
        </aside>
      </div>
    </>
  );
}

function ChapterNav({
  href,
  direction,
  label,
  title,
}: {
  href: string;
  direction: "prev" | "next";
  label: string;
  title: string;
}) {
  const next = direction === "next";
  return (
    <a
      href={href}
      className={cn(
        "group rounded-2xl border border-line bg-surface p-5 transition-[border-color,background-color,transform] duration-200 hover:border-accent/50 hover:bg-surface-2 motion-safe:hover:-translate-y-0.5",
        next && "sm:text-right",
      )}
    >
      <p className={cn("flex items-center gap-1.5 text-sm text-fg-subtle", next && "sm:justify-end")}>
        {!next && <ArrowLeft className="size-4 transition-transform duration-200 group-hover:-translate-x-1" aria-hidden="true" />}
        {next ? "Suivant" : "Précédent"} : {label}
        {next && <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />}
      </p>
      <p className="mt-1 font-semibold text-fg group-hover:text-accent-1">{title}</p>
    </a>
  );
}
