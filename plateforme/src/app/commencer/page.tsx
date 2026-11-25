import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Briefcase, Flag } from "lucide-react";
import { Toc } from "@/components/course/toc";
import { Footer } from "@/components/landing/footer";
import { Header } from "@/components/landing/header";
import { Container } from "@/components/ui";
import { consolidationAfter, etapes, intro } from "@/content/commencer";
import { site } from "@/content/site";
import { getFamilles, slugOf } from "@/lib/fiches";

export const metadata: Metadata = {
  title: `Par où commencer ? — ${site.name}`,
  description: "Tous les modules du parcours AI Engineer, dans l'ordre : 7 étapes, du premier code jusqu'au métier.",
};

const moduleCount = etapes.flatMap((e) => e.modules).filter((m) => m.id !== "C").length;

/** Tous les modules du parcours unique, dans l'ordre (docs/programme.md). */
export default function CommencerPage() {
  return (
    <>
      <a
        href="#contenu"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:rounded-full focus:bg-fg focus:px-4 focus:py-2 focus:text-sm focus:text-bg"
      >
        Aller au contenu
      </a>
      <Header page="commencer" />

      <main id="contenu" className="flex-1">
        {/* Titre */}
        <section className="relative isolate -mt-[4.5rem] pt-32 pb-12 sm:pt-40 sm:pb-16">
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
            <div className="bg-grid absolute inset-0" />
            <div className="absolute -top-64 left-1/3 h-[640px] w-[1100px] -translate-x-1/2 bg-[radial-gradient(closest-side,rgb(245_158_66/0.16),transparent)]" />
          </div>
          <Container>
            <h1 className="font-bold tracking-[-0.04em] text-fg" style={{ fontSize: "clamp(2.6rem, 6vw, 5rem)", lineHeight: 1 }}>
              {intro.title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-pretty text-fg-muted sm:text-xl">{intro.lead}</p>
            <ul className="mt-10 flex flex-wrap gap-x-10 gap-y-4">
              {[
                { value: etapes.length, unit: "étapes" },
                { value: moduleCount, unit: "modules" },
                { value: etapes.length, unit: "projets d'étape" },
                { value: getFamilles().reduce((n, f) => n + f.chapters.length, 0), unit: "grands projets" },
              ].map((f) => (
                <li key={f.unit} className="font-display">
                  <span className="text-4xl font-bold tracking-tight text-fg sm:text-5xl">{f.value}</span>
                  <span className="ml-2 text-fg-muted">{f.unit}</span>
                </li>
              ))}
            </ul>
            <p className="mt-8 inline-flex items-start gap-3 rounded-2xl border border-line-strong px-5 py-3 text-sm text-fg-muted">
              <span className="mt-1.5 size-2 shrink-0 rounded-full bg-accent" />
              {intro.status}
            </p>
          </Container>
        </section>

        {/* Tous les modules */}
        <section className="border-t border-line pb-24 sm:pb-32">
          <Container className="grid gap-10 lg:grid-cols-[13rem_minmax(0,1fr)] lg:gap-16">
            {/* Sommaire des étapes (grand écran) */}
            <aside className="hidden lg:block">
              <div className="sticky top-24 pt-14">
                <Toc
                  title="Le parcours"
                  items={[
                    ...etapes.map((e) => ({ id: `etape-${e.n}`, label: `${e.n}. ${e.title}` })),
                    { id: "grands-projets", label: "Les grands projets" },
                  ]}
                />
              </div>
            </aside>

            <ol className="min-w-0">
              {etapes.map((etape) => (
                <li key={etape.n}>
                  <section id={`etape-${etape.n}`} aria-labelledby={`titre-etape-${etape.n}`} className="scroll-mt-24 pt-14">
                    {/* Même colonne que les identifiants de modules : titres d'étape et de modules alignés */}
                    <header className="flex items-start gap-4 sm:gap-6">
                      <span
                        className="w-[3.25rem] shrink-0 font-display text-6xl leading-[0.85] font-bold text-accent sm:w-16 sm:text-7xl"
                        aria-hidden="true"
                      >
                        {etape.n}
                      </span>
                      <div className="min-w-0">
                        <p className="text-sm font-semibold text-fg-subtle">
                          Étape {etape.n}
                          <span className="mx-2 text-line-strong" aria-hidden="true">
                            /
                          </span>
                          {etape.modules.filter((x) => x.id !== "C").length} modules
                        </p>
                        <h2 id={`titre-etape-${etape.n}`} className="mt-1 text-3xl font-bold tracking-tight text-balance text-fg sm:text-4xl">
                          {etape.title}
                        </h2>
                        <p className="mt-3 flex gap-2.5 text-fg-muted">
                          <Flag className="mt-1 size-4 shrink-0 text-accent" aria-hidden="true" />
                          <span>
                            <span className="font-semibold text-fg">Projet&nbsp;: </span>
                            {etape.project}
                          </span>
                        </p>
                      </div>
                    </header>

                    <ol className="mt-8 border-t border-line">
                      {etape.modules.map((m) => (
                        <li
                          key={m.id}
                          className="grid grid-cols-[3.25rem_minmax(0,1fr)] gap-x-4 border-b border-line py-5 sm:grid-cols-[4rem_minmax(0,1fr)] sm:gap-x-6"
                        >
                          <span className="font-display text-lg font-bold text-accent-1 tabular-nums">{m.id}</span>
                          <div>
                            {slugOf(m.id) ? (
                              <h3 className="text-lg font-semibold">
                                <Link
                                  href={`/modules/${slugOf(m.id)}`}
                                  className="group inline-flex items-center gap-2 text-fg transition-colors duration-200 hover:text-accent-1"
                                >
                                  {m.title}
                                  <ArrowRight
                                    className="size-4 text-accent transition-transform duration-200 group-hover:translate-x-1"
                                    aria-hidden="true"
                                  />
                                </Link>
                              </h3>
                            ) : (
                              <h3 className="text-lg font-semibold text-fg">{m.title}</h3>
                            )}
                            <p className="mt-1 leading-relaxed text-fg-muted">{m.content}</p>
                          </div>
                        </li>
                      ))}
                    </ol>
                  </section>

                  {consolidationAfter.includes(etape.n) && (
                    <p className="mt-10 flex items-center gap-4 text-sm text-fg-subtle">
                      <span className="h-px flex-1 border-t border-dashed border-line-strong" aria-hidden="true" />
                      <span>
                        <span className="font-semibold text-fg-muted">Consolidation</span>&nbsp;: rattrapage, révisions, projet libre
                      </span>
                      <span className="h-px flex-1 border-t border-dashed border-line-strong" aria-hidden="true" />
                    </p>
                  )}
                </li>
              ))}
              <li>
                <GrandsProjets />
              </li>
            </ol>
          </Container>
        </section>
      </main>

      <Footer onLanding={false} />
    </>
  );
}

/** La section finale du parcours : les familles de grands projets, du problème du client au résultat prouvé. */
function GrandsProjets() {
  const familles = getFamilles();
  if (familles.length === 0) return null;
  return (
    <section id="grands-projets" aria-labelledby="titre-grands-projets" className="scroll-mt-24 pt-14">
      <header className="flex items-start gap-4 sm:gap-6">
        <span className="flex w-[3.25rem] shrink-0 justify-start text-accent sm:w-16" aria-hidden="true">
          <Briefcase className="size-12 sm:size-14" strokeWidth={1.5} />
        </span>
        <div className="min-w-0">
          <p className="text-sm font-semibold text-fg-subtle">
            Pour finir
            <span className="mx-2 text-line-strong" aria-hidden="true">
              /
            </span>
            {familles.length} familles
          </p>
          <h2 id="titre-grands-projets" className="mt-1 text-3xl font-bold tracking-tight text-balance text-fg sm:text-4xl">
            Les grands projets
          </h2>
          <p className="mt-3 text-fg-muted">
            Les projets que tu rencontreras dans ta carrière, rangés par familles. Chacun est réaliste au point de pouvoir se
            vendre, et se mène comme un expert, du client au résultat prouvé.
          </p>
        </div>
      </header>
      <ol className="mt-8 border-t border-line">
        {familles.map((f) => (
          <li
            key={f.id}
            className="grid grid-cols-[3.25rem_minmax(0,1fr)] gap-x-4 border-b border-line py-5 sm:grid-cols-[4rem_minmax(0,1fr)] sm:gap-x-6"
          >
            <span className="font-display text-lg font-bold text-accent-1 tabular-nums">{f.id}</span>
            <div>
              <h3 className="text-lg font-semibold">
                <Link
                  href={`/modules/${f.slug}`}
                  className="group inline-flex items-center gap-2 text-fg transition-colors duration-200 hover:text-accent-1"
                >
                  {f.title}
                  <ArrowRight className="size-4 text-accent transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
                </Link>
              </h3>
              <p className="mt-1 leading-relaxed text-fg-muted">
                {f.chapters.length} projets&nbsp;: {f.chapters.map((c) => c.title).join(" · ")}.
              </p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
