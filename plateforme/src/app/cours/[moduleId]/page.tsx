import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowRight, Clock } from "lucide-react";
import { CourseHeader } from "@/components/course/course-header";
import { DemoBanner } from "@/components/course/demo-banner";
import { ModuleNav } from "@/components/course/progress";
import { moduleNav, readingOrder } from "@/lib/course-nav";
import { getAllModules, getModule } from "@/lib/content";
import { site } from "@/content/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllModules().map((m) => ({ moduleId: m.slug }));
}

export async function generateMetadata({ params }: PageProps<"/cours/[moduleId]">): Promise<Metadata> {
  const { moduleId } = await params;
  const mod = getModule(moduleId);
  return { title: mod ? `${mod.title} — ${site.name}` : site.name };
}

/** Page d'un module : son sommaire et le bouton pour commencer. */
export default async function ModulePage({ params }: PageProps<"/cours/[moduleId]">) {
  const { moduleId } = await params;
  const mod = getModule(moduleId);
  if (!mod) notFound();

  const first = readingOrder(mod)[0];
  const lessons = mod.chapters.reduce((n, c) => n + c.lessons.length, 0);

  return (
    <>
      <CourseHeader phaseLabel={mod.phaseLabel} moduleTitle={mod.title} moduleHref={`/cours/${mod.slug}`} />
      <main id="contenu" className="mx-auto w-full max-w-3xl flex-1 px-4 py-16 sm:px-6 sm:py-24">
        {mod.isDemo && <DemoBanner />}
        <p className="text-sm font-semibold text-accent">{mod.phaseLabel}</p>
        <h1 className="mt-3 text-4xl leading-tight font-bold tracking-[-0.03em] text-fg sm:text-5xl">{mod.title}</h1>
        <p className="mt-4 flex items-center gap-2 text-fg-muted">
          <Clock className="size-4" aria-hidden="true" />
          {mod.chapters.length} chapitre{mod.chapters.length > 1 ? "s" : ""}, {lessons} leçon{lessons > 1 ? "s" : ""}
        </p>

        <div className="mt-10 rounded-3xl border border-line bg-surface p-3 sm:p-4">
          <ModuleNav moduleSlug={mod.slug} chapters={moduleNav(mod)} currentChapter={0} />
        </div>

        <a
          href={first.href}
          className="shine bg-gradient-accent mt-10 inline-flex h-13 items-center gap-2 rounded-full px-7 text-base font-semibold text-[#1a0d05] shadow-[0_10px_30px_-12px_rgb(245_158_66/0.6)] transition-[transform,box-shadow] duration-200 hover:shadow-[0_16px_44px_-10px_rgb(245_158_66/0.85)] motion-safe:hover:-translate-y-0.5"
        >
          Commencer
          <ArrowRight className="size-4" aria-hidden="true" />
        </a>
      </main>
    </>
  );
}
