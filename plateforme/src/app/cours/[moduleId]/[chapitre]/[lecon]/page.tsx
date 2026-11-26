import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CourseHeader } from "@/components/course/course-header";
import { CourseLayout, EndOfModule, StepNav } from "@/components/course/course-layout";
import { DemoBanner } from "@/components/course/demo-banner";
import { MarkDone } from "@/components/course/progress";
import { getAllModules, getModule } from "@/lib/content";
import { lessonHref, moduleNav, neighbours } from "@/lib/course-nav";
import { renderChapter } from "@/lib/mdx";
import { site } from "@/content/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllModules().flatMap((m) =>
    m.chapters.flatMap((c) => c.lessons.map((l) => ({ moduleId: m.slug, chapitre: String(c.number), lecon: l.id }))),
  );
}

function find(moduleId: string, chapitre: string, lecon: string) {
  const mod = getModule(moduleId);
  const chapter = mod?.chapters.find((c) => String(c.number) === chapitre);
  const lesson = chapter?.lessons.find((l) => l.id === decodeURIComponent(lecon));
  return mod && chapter && lesson ? { mod, chapter, lesson } : null;
}

export async function generateMetadata({ params }: PageProps<"/cours/[moduleId]/[chapitre]/[lecon]">): Promise<Metadata> {
  const { moduleId, chapitre, lecon } = await params;
  const found = find(moduleId, chapitre, lecon);
  return { title: found ? `${found.lesson.title} — ${site.name}` : site.name };
}

const statusLabel = { brouillon: "Brouillon", relu: "Relue", publie: null } as const;

/** Page d'une leçon : la notion seule, ses sources, et son sommaire qui suit la lecture. */
export default async function LessonPage({ params }: PageProps<"/cours/[moduleId]/[chapitre]/[lecon]">) {
  const { moduleId, chapitre, lecon } = await params;
  const found = find(moduleId, chapitre, lecon);
  if (!found) notFound();
  const { mod, chapter, lesson } = found;

  const key = `${chapter.number}.${lesson.number}`;
  const { prev, next } = neighbours(mod, lessonHref(mod, chapter.number, lesson.id));
  const content = await renderChapter(lesson.body, { lesson: true });
  const status = statusLabel[chapter.status];

  return (
    <>
      <CourseHeader
        phaseLabel={mod.phaseLabel}
        moduleTitle={mod.title}
        moduleHref={`/cours/${mod.slug}`}
        position={`Leçon ${key} · chapitre ${chapter.number} sur ${mod.chapters.length}`}
      />
      <CourseLayout
        moduleSlug={mod.slug}
        moduleTitle={mod.title}
        nav={moduleNav(mod)}
        currentChapter={chapter.number}
        currentLesson={key}
        position={`Leçon ${key}`}
        toc={lesson.toc}
        tocTitle="Dans cette leçon"
      >
        {mod.isDemo && <DemoBanner />}
        <header>
          <p className="text-sm font-semibold text-accent">
            Leçon {key} · <span className="font-normal text-fg-subtle">{chapter.title}</span>
          </p>
          <h1 className="mt-3 text-4xl leading-[1.05] font-bold tracking-[-0.03em] text-balance text-fg sm:text-5xl">
            {lesson.title}
          </h1>
          {status && (
            <p className="mt-6">
              <span className="rounded-full border border-line-strong px-2.5 py-0.5 text-xs text-fg-subtle">{status}</span>
            </p>
          )}
        </header>

        <div className="cours mt-4">{content}</div>

        <footer className="mt-16 border-t border-line pt-10">
          <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-fg-muted">Tu as fait le mini-exercice ?</p>
            <MarkDone moduleSlug={mod.slug} lessonKey={key} />
          </div>
          <StepNav prev={prev} next={next} endLabel={<EndOfModule />} />
        </footer>
      </CourseLayout>
    </>
  );
}
