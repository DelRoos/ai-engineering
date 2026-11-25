import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ArrowUpRight, Briefcase, Check, ChevronRight, FlaskConical, MapPin } from "lucide-react";
import { Footer } from "@/components/landing/footer";
import { Header } from "@/components/landing/header";
import { CopyCommand } from "@/components/module/copy-command";
import { ProjetCorps } from "@/components/projet/projet-corps";
import { Container, cn } from "@/components/ui";
import { chapterObjectives, getChapitre, getFiches, projectsUsingChapter, type Chapitre } from "@/lib/fiches";
import { site } from "@/content/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return getFiches().flatMap((f) => f.chapters.map((c) => ({ slug: f.slug, chapitre: c.slug })));
}

export async function generateMetadata({ params }: PageProps<"/modules/[slug]/[chapitre]">): Promise<Metadata> {
  const { slug, chapitre } = await params;
  const found = getChapitre(slug, chapitre);
  if (!found) return { title: site.name };
  const { fiche, chapitre: c } = found;
  return {
    title: `${c.title} — ${fiche.id} ${fiche.title} — ${site.name}`,
    description: `Chapitre ${c.n} du module ${fiche.id} ${fiche.title} : ${c.lessons.map((l) => l.title).join(", ")}.`,
  };
}

const plural = (n: number, one: string, many: string) => (n > 1 ? many : one);

/** Page d'un chapitre : ses leçons dans l'ordre, ce qu'on saura faire, ses exercices, et sa place dans le module. */
export default async function ChapitrePage({ params }: PageProps<"/modules/[slug]/[chapitre]">) {
  const { slug, chapitre } = await params;
  const found = getChapitre(slug, chapitre);
  if (!found) notFound();
  const { fiche: m, chapitre: c, prev, next } = found;
  const objectives = chapterObjectives(m, c);
  const isProjet = m.nature === "projets";
  const applications = isProjet ? [] : projectsUsingChapter(m, c);

  return (
    <>
      <a
        href="#contenu"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:rounded-full focus:bg-fg focus:px-4 focus:py-2 focus:text-sm focus:text-bg"
      >
        Aller au contenu
      </a>
      <Header page="module" />

      <main id="contenu" className="flex-1">
        {/* ---------- En-tête du chapitre ---------- */}
        <section className="relative isolate -mt-[4.5rem] pt-28 pb-12 sm:pt-36 sm:pb-16">
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
            <div className="bg-grid absolute inset-0" />
            <div className="absolute -top-64 left-1/4 h-[640px] w-[1100px] -translate-x-1/2 bg-[radial-gradient(closest-side,rgb(245_158_66/0.14),transparent)]" />
          </div>
          <Container>
            <nav aria-label="Fil d'Ariane" className="flex flex-wrap items-center gap-1.5 text-sm text-fg-subtle">
              <Link href={isProjet ? "/projets" : "/commencer"} className="transition-colors duration-200 hover:text-fg">
                {isProjet ? "Les grands projets" : "Tous les modules"}
              </Link>
              <ChevronRight className="size-4" aria-hidden="true" />
              <Link href={`/modules/${m.slug}`} className="transition-colors duration-200 hover:text-fg">
                {isProjet ? "Famille" : "Module"} {m.id}&nbsp;: {m.title}
              </Link>
              <ChevronRight className="size-4" aria-hidden="true" />
              <span className="text-fg-muted">
                {isProjet ? "Projet" : "Chapitre"} {c.n}
              </span>
            </nav>

            <div className="mt-8 flex items-start gap-5 sm:gap-7">
              <span
                aria-hidden="true"
                className="flex size-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-accent font-display text-3xl font-bold text-[#1a0d05] shadow-[0_12px_40px_-14px_rgb(245_158_66/0.7)] sm:size-20 sm:text-4xl"
              >
                {c.n}
              </span>
              <div className="min-w-0">
                <p className="text-sm font-semibold text-fg-subtle">
                  {isProjet ? "Projet" : "Chapitre"} {c.n} sur {m.chapters.length}
                </p>
                <h1
                  className="mt-2 font-bold tracking-[-0.035em] text-balance text-fg"
                  style={{ fontSize: "clamp(2.2rem, 4.6vw, 3.75rem)", lineHeight: 1.02 }}
                >
                  {c.title}
                </h1>
              </div>
            </div>

            <ul className="mt-8 flex flex-wrap gap-x-8 gap-y-3 font-display">
              <li>
                <span className="text-3xl font-bold tracking-tight text-fg">{c.lessons.length}</span>
                <span className="ml-1.5 text-fg-muted">{isProjet ? "étapes" : "leçons"}</span>
              </li>
              {c.exercises > 0 && (
                <li>
                  <span className="text-3xl font-bold tracking-tight text-fg">{c.exercises}</span>
                  <span className="ml-1.5 text-fg-muted">
                    {m.hasQcm ? plural(c.exercises, "exercice", "exercices") : plural(c.exercises, "vérification", "vérifications")}
                  </span>
                </li>
              )}
            </ul>

            {m.status !== "publie" && (
              <p className="mt-8 inline-flex items-start gap-3 rounded-2xl border border-line-strong px-4 py-2.5 text-sm text-fg-muted">
                <span className="mt-1.5 size-2 shrink-0 rounded-full bg-accent" />
                {isProjet
                  ? "Le cahier des charges est fixé. Les énoncés détaillés, les données et les tests sont en préparation."
                  : "Les leçons de ce chapitre sont en cours de rédaction."}
              </p>
            )}
          </Container>
        </section>

        {/* ---------- Corps ---------- */}
        <section className="border-t border-line pb-24 sm:pb-32">
          <Container className="grid gap-14 lg:grid-cols-[minmax(0,1fr)_20rem] lg:gap-16">
            <div className="min-w-0">
              {isProjet ? (
                <ProjetCorps famille={m} projet={c} />
              ) : (
              <>
              {/* Les leçons */}
              <section aria-labelledby="titre-lecons" className="pt-14 sm:pt-20">
                <h2 id="titre-lecons" className="text-3xl font-bold tracking-tight text-fg sm:text-4xl">
                  Les leçons
                </h2>
                <p className="mt-3 text-fg-muted">Dans l&apos;ordre&nbsp;: chaque leçon s&apos;appuie sur la précédente.</p>
                <ol className="mt-8 border-t border-line">
                  {c.lessons.map((l, j) => (
                    <li
                      key={l.id}
                      id={l.id}
                      className="scroll-mt-24 grid grid-cols-[2.75rem_minmax(0,1fr)] items-baseline gap-x-3 border-b border-line py-5 sm:grid-cols-[3.5rem_minmax(0,1fr)] sm:gap-x-4"
                    >
                      <span className="font-display text-lg font-bold text-accent-1 tabular-nums">
                        {c.n}.{j + 1}
                      </span>
                      <span className="text-lg leading-snug text-fg">{l.title}</span>
                    </li>
                  ))}
                </ol>
              </section>

              {/* Ce que tu sauras faire */}
              {objectives.length > 0 && (
                <section aria-labelledby="titre-objectifs" className="pt-16 sm:pt-20">
                  <h2 id="titre-objectifs" className="text-2xl font-bold tracking-tight text-fg sm:text-3xl">
                    Ce que ce chapitre te fait travailler
                  </h2>
                  <ul className="mt-6 space-y-4">
                    {objectives.map((o) => (
                      <li key={o.id} className="flex gap-3.5">
                        <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-success/15">
                          <Check className="size-3.5 text-success" strokeWidth={3} aria-hidden="true" />
                        </span>
                        <span className="leading-relaxed text-fg">{o.text}</span>
                      </li>
                    ))}
                  </ul>
                </section>
              )}

              {/* Pratiquer */}
              {c.exercises > 0 && (
                <section aria-labelledby="titre-pratiquer" className="pt-16 sm:pt-20">
                  <article className="rounded-3xl border border-line bg-surface p-6 sm:p-7">
                    <FlaskConical className="size-7 text-accent" strokeWidth={1.75} aria-hidden="true" />
                    <h2 id="titre-pratiquer" className="mt-5 text-xl font-bold text-fg">
                      {m.hasQcm
                        ? `Puis ${c.exercises} ${plural(c.exercises, "exercice", "exercices")} sur ton PC`
                        : "Puis la vérification de ton installation"}
                    </h2>
                    <p className="mt-2 leading-relaxed text-fg-muted">
                      {m.hasQcm
                        ? "Ils sont corrigés automatiquement par des tests, et chacun a des indices à dévoiler un par un si tu bloques."
                        : "Une seule commande vérifie que tout est installé et te dit quoi corriger."}
                    </p>
                    <p className="mt-5 mb-2 text-sm text-fg-subtle">
                      {m.hasQcm ? "Pour vérifier tes exercices :" : "Pour lancer la vérification :"}
                    </p>
                    <CopyCommand command={`python outils/check.py ${m.folder}`} />
                  </article>
                </section>
              )}
              </>
              )}

              {/* À appliquer dans un projet */}
              {applications.length > 0 && (
                <section aria-labelledby="titre-appliquer" className="pt-16 sm:pt-20">
                  <h2 id="titre-appliquer" className="flex items-center gap-2.5 text-2xl font-bold tracking-tight text-fg sm:text-3xl">
                    <Briefcase className="size-6 text-accent" aria-hidden="true" />
                    À appliquer dans un projet
                  </h2>
                  <p className="mt-3 text-fg-muted">Ce que tu apprends ici sert dans ces grands projets.</p>
                  <ul className="mt-6 border-t border-line">
                    {applications.map(({ famille, chapitre: projet, lessons }) => (
                      <li key={`${famille.id}-${projet.n}`} className="border-b border-line">
                        <a
                          href={`/modules/${famille.slug}/${projet.slug}`}
                          target="_blank"
                          rel="noopener"
                          className="group flex items-start justify-between gap-4 py-4"
                        >
                          <span className="min-w-0">
                            <span className="block text-sm text-fg-subtle">
                              {famille.id} {famille.title}, projet {projet.n}
                            </span>
                            <span className="mt-0.5 block font-semibold text-fg group-hover:text-accent-1">{projet.title}</span>
                            <span className="mt-1 block text-sm text-fg-muted">
                              Avec&nbsp;: {lessons.map((l) => l.lessonTitle).join(" · ")}
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
                </section>
              )}
            </div>

            {/* Colonne : le module */}
            <aside className="lg:pt-20">
              <div className="space-y-4 lg:sticky lg:top-24">
                <nav aria-label={isProjet ? "Projets de la famille" : "Chapitres du module"} className="rounded-3xl border border-line bg-surface p-5">
                  <Link
                    href={`/modules/${m.slug}`}
                    className="group flex items-center gap-2 text-sm font-semibold text-fg transition-colors duration-200 hover:text-accent-1"
                  >
                    <span className="text-accent">{m.id}</span> {m.title}
                  </Link>
                  <ol className="mt-3 space-y-0.5">
                    {m.chapters.map((x) => (
                      <li key={x.n}>
                        <ChapterLink moduleSlug={m.slug} chapitre={x} current={x.n === c.n} />
                      </li>
                    ))}
                  </ol>
                </nav>

                <div className="rounded-3xl border border-line bg-surface p-5">
                  <p className="flex items-center gap-2 text-sm font-semibold text-fg">
                    <MapPin className="size-4 text-accent" aria-hidden="true" />
                    Le fil rouge
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-fg-muted">{m.filRouge}</p>
                </div>
              </div>
            </aside>
          </Container>

          {/* Chapitres voisins */}
          <Container>
            <nav aria-label="Chapitres voisins" className="mt-20 grid gap-3 border-t border-line pt-10 sm:grid-cols-2">
              {prev ? <NeighbourLink moduleSlug={m.slug} chapitre={prev} direction="prev" projet={isProjet} /> : <span className="hidden sm:block" />}
              {next ? (
                <NeighbourLink moduleSlug={m.slug} chapitre={next} direction="next" projet={isProjet} />
              ) : (
                <Link
                  href={`/modules/${m.slug}`}
                  className="group rounded-3xl border border-line bg-surface p-6 transition-[border-color,background-color,transform] duration-200 hover:border-accent/50 hover:bg-surface-2 motion-safe:hover:-translate-y-0.5 sm:text-right"
                >
                  <p className="text-sm text-fg-subtle">{isProjet ? "Dernier projet de la famille" : "Dernier chapitre du module"}</p>
                  <p className="mt-2 text-xl font-bold text-fg group-hover:text-accent-1">
                    {isProjet ? "Retour à la famille" : m.hasQcm ? "Le QCM et l'exercice clé" : "Retour au module"}
                  </p>
                </Link>
              )}
            </nav>
          </Container>
        </section>
      </main>

      <Footer onLanding={false} />
    </>
  );
}

function ChapterLink({ moduleSlug, chapitre, current }: { moduleSlug: string; chapitre: Chapitre; current: boolean }) {
  return (
    <Link
      href={`/modules/${moduleSlug}/${chapitre.slug}`}
      aria-current={current ? "page" : undefined}
      className={cn(
        "flex gap-2.5 rounded-xl px-2.5 py-1.5 text-sm leading-snug transition-colors duration-200",
        current ? "bg-accent/12 font-semibold text-accent-1" : "text-fg-muted hover:bg-white/[0.04] hover:text-fg",
      )}
    >
      <span className="w-5 shrink-0 font-display font-bold tabular-nums">{chapitre.n}</span>
      <span>{chapitre.title}</span>
    </Link>
  );
}

function NeighbourLink({
  moduleSlug,
  chapitre,
  direction,
  projet = false,
}: {
  moduleSlug: string;
  chapitre: Chapitre;
  direction: "prev" | "next";
  projet?: boolean;
}) {
  const next = direction === "next";
  return (
    <Link
      href={`/modules/${moduleSlug}/${chapitre.slug}`}
      className={cn(
        "group rounded-3xl border border-line bg-surface p-6 transition-[border-color,background-color,transform] duration-200 hover:border-accent/50 hover:bg-surface-2 motion-safe:hover:-translate-y-0.5",
        next && "sm:text-right",
      )}
    >
      <p className={cn("flex items-center gap-1.5 text-sm text-fg-subtle", next && "sm:justify-end")}>
        {!next && <ArrowLeft className="size-4 transition-transform duration-200 group-hover:-translate-x-1" aria-hidden="true" />}
        {projet ? (next ? "Projet suivant" : "Projet précédent") : next ? "Chapitre suivant" : "Chapitre précédent"}
        {next && <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />}
      </p>
      <p className="mt-2 text-xl font-bold text-fg group-hover:text-accent-1">
        <span className="text-accent">{chapitre.n}.</span> {chapitre.title}
      </p>
    </Link>
  );
}
