import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowRight, Clock, Target } from "lucide-react";
import { CourseHeader } from "@/components/course/course-header";
import { CourseLayout, EndOfModule, StepNav } from "@/components/course/course-layout";
import { DemoBanner } from "@/components/course/demo-banner";
import { getAllModules, getModule } from "@/lib/content";
import { chapterHref, lessonHref, moduleNav, neighbours } from "@/lib/course-nav";
import { renderChapter } from "@/lib/mdx";
import { site } from "@/content/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllModules().flatMap((m) => m.chapters.map((c) => ({ moduleId: m.slug, chapitre: String(c.number) })));
}

function find(moduleId: string, chapitre: string) {
  const mod = getModule(moduleId);
  const chapter = mod?.chapters.find((c) => String(c.number) === chapitre);
  return mod && chapter ? { mod, chapter } : null;
}

export async function generateMetadata({ params }: PageProps<"/cours/[moduleId]/[chapitre]">): Promise<Metadata> {
  const { moduleId, chapitre } = await params;
  const found = find(moduleId, chapitre);
  return { title: found ? `${found.chapter.title} — ${site.name}` : site.name };
}

const statusLabel = { brouillon: "Brouillon", relu: "Relu", publie: null } as const;

/** Ouverture d'un chapitre : son cadre (objectifs, pourquoi) et la liste de ses leçons. */
export default async function ChapterPage({ params }: PageProps<"/cours/[moduleId]/[chapitre]">) {
  const { moduleId, chapitre } = await params;
  const found = find(moduleId, chapitre);
  if (!found) notFound();
  const { mod, chapter } = found;

  const here = chapterHref(mod, chapter.number);
  const { prev, next } = neighbours(mod, here);
  const firstLesson = chapter.lessons[0];
  const content = chapter.intro.trim() ? await renderChapter(chapter.intro) : null;
  const status = statusLabel[chapter.status];

  return (
    <>
      <CourseHeader
        phaseLabel={mod.phaseLabel}
        moduleTitle={mod.title}
        moduleHref={`/cours/${mod.slug}`}
        position={`Chapitre ${chapter.number} sur ${mod.chapters.length}`}
      />
      <CourseLayout
        moduleSlug={mod.slug}
        moduleTitle={mod.title}
        nav={moduleNav(mod)}
        currentChapter={chapter.number}
        position={`Chapitre ${chapter.number}`}
        toc={chapter.introToc}
        tocTitle="Dans ce chapitre"
      >
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
            {status && <li className="rounded-full border border-line-strong px-2.5 py-0.5 text-xs text-fg-subtle">{status}</li>}
          </ul>
        </header>

        {content && <div className="cours mt-4">{content}</div>}

        <section aria-labelledby="lecons" className="mt-12">
          <h2 id="lecons" className="text-xl font-bold text-fg">
            {chapter.lessons.length} leçon{chapter.lessons.length > 1 ? "s" : ""} dans ce chapitre
          </h2>
          <ol className="mt-5 space-y-3">
            {chapter.lessons.map((l) => (
              <li key={l.id}>
                <a
                  href={lessonHref(mod, chapter.number, l.id)}
                  className="group block rounded-2xl border border-line bg-surface p-5 transition-colors duration-200 hover:border-accent/50 hover:bg-surface-2"
                >
                  <p className="text-sm text-fg-subtle">
                    Leçon {chapter.number}.{l.number}
                  </p>
                  <p className="mt-1 font-semibold text-fg group-hover:text-accent-1">{l.title}</p>
                </a>
              </li>
            ))}
          </ol>
          {firstLesson && (
            <a
              href={lessonHref(mod, chapter.number, firstLesson.id)}
              className="shine bg-gradient-accent mt-8 inline-flex h-12 items-center gap-2 rounded-full px-6 text-sm font-semibold text-[#1a0d05]"
            >
              Commencer la leçon {chapter.number}.1
              <ArrowRight className="size-4" aria-hidden="true" />
            </a>
          )}
        </section>

        <footer className="mt-16 border-t border-line pt-10">
          <StepNav prev={prev} next={next} endLabel={<EndOfModule />} />
        </footer>
      </CourseLayout>
    </>
  );
}
