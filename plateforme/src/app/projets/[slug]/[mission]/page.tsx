import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, BookOpen, Briefcase, Check, ChevronRight, FlaskConical, Package, Zap } from "lucide-react";
import { Footer } from "@/components/landing/footer";
import { Header } from "@/components/landing/header";
import { CopyCommand } from "@/components/module/copy-command";
import { LessonList } from "@/components/projet/lesson-links";
import { Container, cn } from "@/components/ui";
import { getMission, getProjets, type Mission } from "@/lib/projets";
import { site } from "@/content/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return getProjets().flatMap((p) => p.missions.map((m) => ({ slug: p.slug, mission: m.slug })));
}

export async function generateMetadata({ params }: PageProps<"/projets/[slug]/[mission]">): Promise<Metadata> {
  const { slug, mission } = await params;
  const found = getMission(slug, mission);
  if (!found) return { title: site.name };
  const { projet: p, mission: m } = found;
  return { title: `Mission ${m.n} : ${m.title} — ${p.id} ${p.family} — ${site.name}`, description: m.situation };
}

/** Page d'une mission : la situation, le livrable, les critères, la démarche conseillée, l'imprévu, les leçons et la vérification. */
export default async function MissionPage({ params }: PageProps<"/projets/[slug]/[mission]">) {
  const { slug, mission } = await params;
  const found = getMission(slug, mission);
  if (!found) notFound();
  const { projet: p, mission: m, prev, next } = found;
  const client = p.brief.find((b) => b.label === "Le client");
  const graded = /grille/i.test(m.verification);
  const tested = /test/i.test(m.verification);

  return (
    <>
      <a
        href="#contenu"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:rounded-full focus:bg-fg focus:px-4 focus:py-2 focus:text-sm focus:text-bg"
      >
        Aller au contenu
      </a>
      <Header page="projet" />

      <main id="contenu" className="flex-1">
        {/* ---------- En-tête de la mission ---------- */}
        <section className="relative isolate -mt-[4.5rem] pt-28 pb-12 sm:pt-36 sm:pb-16">
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
            <div className="bg-grid absolute inset-0" />
            <div className="absolute -top-64 left-1/4 h-[640px] w-[1100px] -translate-x-1/2 bg-[radial-gradient(closest-side,rgb(245_158_66/0.14),transparent)]" />
          </div>
          <Container>
            <nav aria-label="Fil d'Ariane" className="flex flex-wrap items-center gap-1.5 text-sm text-fg-subtle">
              <Link href="/projets" className="transition-colors duration-200 hover:text-fg">
                Projets
              </Link>
              <ChevronRight className="size-4" aria-hidden="true" />
              <Link href={`/projets/${p.slug}`} className="transition-colors duration-200 hover:text-fg">
                {p.id} {p.family}
              </Link>
              <ChevronRight className="size-4" aria-hidden="true" />
              <span className="text-fg-muted">Mission {m.n}</span>
            </nav>

            <div className="mt-8 flex items-start gap-5 sm:gap-7">
              <span
                aria-hidden="true"
                className="flex size-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-accent font-display text-3xl font-bold text-[#1a0d05] shadow-[0_12px_40px_-14px_rgb(245_158_66/0.7)] sm:size-20 sm:text-4xl"
              >
                {m.n}
              </span>
              <div className="min-w-0">
                <p className="text-sm font-semibold text-fg-subtle">
                  Mission {m.n} sur {p.missions.length}
                </p>
                <h1
                  className="mt-2 font-bold tracking-[-0.035em] text-balance text-fg"
                  style={{ fontSize: "clamp(2.2rem, 4.6vw, 3.75rem)", lineHeight: 1.02 }}
                >
                  {m.title}
                </h1>
              </div>
            </div>

            <p className="mt-8 max-w-3xl text-lg leading-relaxed text-pretty text-fg-muted sm:text-xl">{m.situation}</p>

            {p.status !== "publie" && (
              <p className="mt-8 inline-flex items-start gap-3 rounded-2xl border border-line-strong px-4 py-2.5 text-sm text-fg-muted">
                <span className="mt-1.5 size-2 shrink-0 rounded-full bg-accent" />
                L&apos;énoncé détaillé, les données et les tests de cette mission sont en préparation.
              </p>
            )}
          </Container>
        </section>

        {/* ---------- Corps ---------- */}
        <section className="border-t border-line pb-24 sm:pb-32">
          <Container className="grid gap-14 lg:grid-cols-[minmax(0,1fr)_20rem] lg:gap-16">
            <div className="min-w-0">
              {/* Le livrable */}
              <section aria-labelledby="titre-livrable" className="pt-14 sm:pt-20">
                <article className="rounded-3xl border border-accent/40 bg-accent/[0.05] p-6 sm:p-7">
                  <Package className="size-7 text-accent" strokeWidth={1.75} aria-hidden="true" />
                  <h2 id="titre-livrable" className="mt-5 text-xl font-bold text-fg">
                    Ce que tu livres
                  </h2>
                  <p className="mt-2 text-lg leading-relaxed text-fg">{m.deliverable.charAt(0).toUpperCase() + m.deliverable.slice(1)}</p>
                </article>
              </section>

              {/* Critères */}
              <section aria-labelledby="titre-criteres" className="pt-16 sm:pt-20">
                <h2 id="titre-criteres" className="text-2xl font-bold tracking-tight text-fg sm:text-3xl">
                  C&apos;est réussi quand
                </h2>
                <ul className="mt-6 space-y-4">
                  {m.criteria.map((c) => (
                    <li key={c} className="flex gap-3.5">
                      <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-success/15">
                        <Check className="size-3.5 text-success" strokeWidth={3} aria-hidden="true" />
                      </span>
                      <span className="leading-relaxed text-fg">{c}</span>
                    </li>
                  ))}
                </ul>
              </section>

              {/* Démarche */}
              {m.steps.length > 0 && (
                <section aria-labelledby="titre-etapes" className="pt-16 sm:pt-20">
                  <h2 id="titre-etapes" className="text-2xl font-bold tracking-tight text-fg sm:text-3xl">
                    Comment t&apos;y prendre
                  </h2>
                  <p className="mt-3 text-fg-muted">Une démarche conseillée, pas imposée. Avance étape par étape, et vérifie souvent.</p>
                  <ol className="mt-6 border-t border-line">
                    {m.steps.map((s, k) => (
                      <li
                        key={s}
                        className="grid grid-cols-[2.75rem_minmax(0,1fr)] items-baseline gap-x-3 border-b border-line py-4 sm:grid-cols-[3.5rem_minmax(0,1fr)] sm:gap-x-4"
                      >
                        <span className="font-display text-lg font-bold text-accent-1 tabular-nums">{k + 1}</span>
                        <span className="leading-relaxed text-fg">{s}</span>
                      </li>
                    ))}
                  </ol>
                </section>
              )}

              {/* Imprévu */}
              {m.change && (
                <section aria-labelledby="titre-imprevu" className="pt-16 sm:pt-20">
                  <div className="rounded-3xl border border-dashed border-accent/50 p-6 sm:p-7">
                    <h2 id="titre-imprevu" className="flex items-center gap-2.5 text-xl font-bold text-fg">
                      <Zap className="size-5 text-accent" aria-hidden="true" />
                      Ce qui va changer en cours de route
                    </h2>
                    <p className="mt-3 leading-relaxed text-fg-muted">{m.change}</p>
                    <p className="mt-3 text-sm leading-relaxed text-fg-subtle">
                      Comme chez un vrai client. Les tests de la mission rejouent cet imprévu&nbsp;: prévois-le dès le départ.
                    </p>
                  </div>
                </section>
              )}

              {/* Leçons */}
              <section aria-labelledby="titre-lecons" className="pt-16 sm:pt-20">
                <h2 id="titre-lecons" className="flex items-center gap-2.5 text-2xl font-bold tracking-tight text-fg sm:text-3xl">
                  <BookOpen className="size-6 text-accent" aria-hidden="true" />
                  Pour réussir, revois
                </h2>
                <p className="mt-3 text-fg-muted">Les leçons qui servent ici. Chacune s&apos;ouvre dans un nouvel onglet.</p>
                <div className="mt-6">
                  <LessonList lessons={m.lessons} />
                </div>
              </section>

              {/* Vérifier */}
              <section aria-labelledby="titre-verifier" className="pt-16 sm:pt-20">
                <article className="rounded-3xl border border-line bg-surface p-6 sm:p-7">
                  <FlaskConical className="size-7 text-accent" strokeWidth={1.75} aria-hidden="true" />
                  <h2 id="titre-verifier" className="mt-5 text-xl font-bold text-fg">
                    Vérifier ta mission
                  </h2>
                  <p className="mt-2 leading-relaxed text-fg-muted">
                    {tested && graded
                      ? "Les tests vérifient ce qui se mesure. La grille du projet guide l'agent correcteur pour le reste : rapport, choix, justifications."
                      : graded
                        ? "Ce livrable se juge avec la grille du projet : l'agent correcteur la suit et te dit quoi améliorer."
                        : "Des tests vérifient chaque critère et te disent lequel n'est pas encore rempli."}
                  </p>
                  {tested && (
                    <>
                      <p className="mt-5 mb-2 text-sm text-fg-subtle">Dans ton dépôt&nbsp;:</p>
                      <CopyCommand command={`python outils/check.py ${m.folder}`} />
                    </>
                  )}
                </article>
              </section>
            </div>

            {/* Colonne : le projet */}
            <aside className="lg:pt-20">
              <div className="space-y-4 lg:sticky lg:top-24">
                <nav aria-label="Missions du projet" className="rounded-3xl border border-line bg-surface p-5">
                  <Link
                    href={`/projets/${p.slug}`}
                    className="flex items-center gap-2 text-sm font-semibold text-fg transition-colors duration-200 hover:text-accent-1"
                  >
                    <span className="text-accent">{p.id}</span> {p.family}
                  </Link>
                  <ol className="mt-3 space-y-0.5">
                    {p.missions.map((x) => (
                      <li key={x.n}>
                        <MissionLink projetSlug={p.slug} mission={x} current={x.n === m.n} />
                      </li>
                    ))}
                  </ol>
                </nav>

                {client && (
                  <div className="rounded-3xl border border-line bg-surface p-5">
                    <p className="flex items-center gap-2 text-sm font-semibold text-fg">
                      <Briefcase className="size-4 text-accent" aria-hidden="true" />
                      Le client
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-fg-muted">{client.text}</p>
                    <Link href={`/projets/${p.slug}`} className="mt-3 inline-block text-sm font-semibold text-accent-1 hover:underline">
                      Relire le brief complet
                    </Link>
                  </div>
                )}
              </div>
            </aside>
          </Container>

          {/* Missions voisines */}
          <Container>
            <nav aria-label="Missions voisines" className="mt-20 grid gap-3 border-t border-line pt-10 sm:grid-cols-2">
              {prev ? <NeighbourLink projetSlug={p.slug} mission={prev} direction="prev" /> : <span className="hidden sm:block" />}
              {next ? (
                <NeighbourLink projetSlug={p.slug} mission={next} direction="next" />
              ) : (
                <Link
                  href={`/projets/${p.slug}#valider`}
                  className="group rounded-3xl border border-line bg-surface p-6 transition-[border-color,background-color,transform] duration-200 hover:border-accent/50 hover:bg-surface-2 motion-safe:hover:-translate-y-0.5 sm:text-right"
                >
                  <p className="text-sm text-fg-subtle">Dernière mission</p>
                  <p className="mt-2 text-xl font-bold text-fg group-hover:text-accent-1">Valider et publier le projet</p>
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

function MissionLink({ projetSlug, mission, current }: { projetSlug: string; mission: Mission; current: boolean }) {
  return (
    <Link
      href={`/projets/${projetSlug}/${mission.slug}`}
      aria-current={current ? "page" : undefined}
      className={cn(
        "flex gap-2.5 rounded-xl px-2.5 py-1.5 text-sm leading-snug transition-colors duration-200",
        current ? "bg-accent/12 font-semibold text-accent-1" : "text-fg-muted hover:bg-white/[0.04] hover:text-fg",
      )}
    >
      <span className="w-5 shrink-0 font-display font-bold tabular-nums">{mission.n}</span>
      <span>{mission.title}</span>
    </Link>
  );
}

function NeighbourLink({ projetSlug, mission, direction }: { projetSlug: string; mission: Mission; direction: "prev" | "next" }) {
  const next = direction === "next";
  return (
    <Link
      href={`/projets/${projetSlug}/${mission.slug}`}
      className={cn(
        "group rounded-3xl border border-line bg-surface p-6 transition-[border-color,background-color,transform] duration-200 hover:border-accent/50 hover:bg-surface-2 motion-safe:hover:-translate-y-0.5",
        next && "sm:text-right",
      )}
    >
      <p className={cn("flex items-center gap-1.5 text-sm text-fg-subtle", next && "sm:justify-end")}>
        {!next && <ArrowLeft className="size-4 transition-transform duration-200 group-hover:-translate-x-1" aria-hidden="true" />}
        {next ? "Mission suivante" : "Mission précédente"}
        {next && <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />}
      </p>
      <p className="mt-2 text-xl font-bold text-fg group-hover:text-accent-1">
        <span className="text-accent">{mission.n}.</span> {mission.title}
      </p>
    </Link>
  );
}
