import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Check,
  ChevronDown,
  ChevronRight,
  Compass,
  FileCheck2,
  FlaskConical,
  ListChecks,
  MapPin,
  SkipForward,
  Target,
} from "lucide-react";
import { Footer } from "@/components/landing/footer";
import { Header } from "@/components/landing/header";
import { CopyCommand } from "@/components/module/copy-command";
import { ButtonLink, Container, cn } from "@/components/ui";
import { getFiche, getFiches, neighbours, type Voisin } from "@/lib/fiches";
import { site } from "@/content/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return getFiches().map((f) => ({ slug: f.slug }));
}

export async function generateMetadata({ params }: PageProps<"/modules/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const m = getFiche(slug);
  return { title: m ? `${m.id} ${m.title} — ${site.name}` : site.name, description: m?.promise };
}

const plural = (n: number, one: string, many: string) => (n > 1 ? many : one);

/** Page d'un module : ce qu'on y gagne, son programme (chapitres et leçons), comment pratiquer, où il se situe. */
export default async function ModulePage({ params }: PageProps<"/modules/[slug]">) {
  const { slug } = await params;
  const m = getFiche(slug);
  if (!m) notFound();

  const { prev, next } = neighbours(m.id);
  const totalLessons = m.chapters.reduce((s, c) => s + c.lessons.length, 0);
  const single = m.chapters.length === 1;

  const stats = [
    { value: String(m.chapters.length), unit: plural(m.chapters.length, "chapitre", "chapitres"), detail: "un thème chacun" },
    { value: String(totalLessons), unit: "leçons", detail: "explication, exemple, mini-exercice" },
    m.hasQcm
      ? { value: String(m.exerciseCount), unit: "exercices", detail: "corrigés par des tests" }
      : { value: String(m.exerciseCount), unit: plural(m.exerciseCount, "vérification", "vérifications"), detail: "automatique, en une commande" },
    m.hasQcm
      ? { value: String(m.qcm.threshold), unit: "% au QCM", detail: `${m.qcm.drawn} questions tirées` }
      : { value: "0", unit: "€", detail: "tous les outils sont gratuits" },
  ];

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
        {/* ---------- En-tête du module ---------- */}
        <section className="relative isolate -mt-[4.5rem] pt-28 pb-14 sm:pt-36 sm:pb-20">
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
            <div className="bg-grid absolute inset-0" />
            <div className="absolute -top-64 left-1/4 h-[640px] w-[1100px] -translate-x-1/2 bg-[radial-gradient(closest-side,rgb(245_158_66/0.16),transparent)]" />
          </div>
          <Container>
            <nav aria-label="Fil d'Ariane" className="flex flex-wrap items-center gap-1.5 text-sm text-fg-subtle">
              <Link href="/commencer" className="transition-colors duration-200 hover:text-fg">
                Tous les modules
              </Link>
              <ChevronRight className="size-4" aria-hidden="true" />
              <Link href={`/commencer#etape-${m.etape.n}`} className="transition-colors duration-200 hover:text-fg">
                Étape {m.etape.n}&nbsp;: {m.etape.title}
              </Link>
              <ChevronRight className="size-4" aria-hidden="true" />
              <span className="text-fg-muted">Module {m.id}</span>
            </nav>

            <div className="mt-8 grid gap-10 lg:grid-cols-[minmax(0,1fr)_22rem] lg:items-end lg:gap-16">
              <div>
                <p className="font-display text-7xl leading-none font-bold tracking-tight text-accent sm:text-8xl">{m.id}</p>
                <h1
                  className="mt-4 font-bold tracking-[-0.04em] text-balance text-fg"
                  style={{ fontSize: "clamp(2.4rem, 5vw, 4.25rem)", lineHeight: 1 }}
                >
                  {m.title}
                </h1>
                <p className="mt-6 max-w-2xl text-lg leading-relaxed text-pretty text-fg-muted sm:text-xl">{m.promise}</p>
                {m.status !== "publie" && (
                  <p className="mt-6 inline-flex items-start gap-3 rounded-2xl border border-line-strong px-4 py-2.5 text-sm text-fg-muted">
                    <span className="mt-1.5 size-2 shrink-0 rounded-full bg-accent" />
                    Le programme est fixé, les leçons sont en cours de rédaction.
                  </p>
                )}
                <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                  <ButtonLink
                    href={`/modules/${m.slug}/${m.chapters[0].slug}`}
                    target="_blank"
                    rel="noopener"
                    className="h-13 px-7 text-base"
                  >
                    Commencer le chapitre 1
                    <ArrowUpRight
                      className="size-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      aria-hidden="true"
                    />
                    <span className="sr-only">(s&apos;ouvre dans un nouvel onglet)</span>
                  </ButtonLink>
                  {!single && (
                    <ButtonLink href="#programme" variant="secondary" className="h-13 px-7 text-base">
                      Voir le programme
                    </ButtonLink>
                  )}
                </div>
              </div>

              {/* Chiffres du module */}
              <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-line bg-line">
                {stats.map((f) => (
                  <div key={f.detail} className="bg-surface p-5">
                    <dt className="sr-only">{f.unit || f.detail}</dt>
                    <dd>
                      <p className="font-display">
                        <span className="text-4xl font-bold tracking-tight text-fg">{f.value}</span>
                        {f.unit && <span className="ml-1.5 text-sm text-fg-muted">{f.unit}</span>}
                      </p>
                      <p className="mt-1 text-sm text-fg-subtle">{f.detail}</p>
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </Container>
        </section>

        {/* ---------- Corps : contenu + colonne de repères ---------- */}
        <section className="border-t border-line pb-24 sm:pb-32">
          <Container className="grid gap-14 lg:grid-cols-[minmax(0,1fr)_22rem] lg:gap-16">
            <div className="min-w-0">
              {/* Ce que tu sauras faire */}
              <section aria-labelledby="objectifs" className="pt-14 sm:pt-20">
                <h2 id="objectifs" className="text-3xl font-bold tracking-tight text-fg sm:text-4xl">
                  Ce que tu sauras faire
                </h2>
                <ul className="mt-8 grid gap-x-8 gap-y-5 sm:grid-cols-2">
                  {m.objectives.map((o) => (
                    <li key={o.id} className="flex gap-3.5">
                      <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-success/15">
                        <Check className="size-3.5 text-success" strokeWidth={3} aria-hidden="true" />
                      </span>
                      <span className="leading-relaxed text-fg">{o.text}</span>
                    </li>
                  ))}
                </ul>
              </section>

              {/* Programme : chapitres et leçons */}
              <section id="programme" aria-labelledby="titre-programme" className="scroll-mt-24 pt-16 sm:pt-24">
                <div className="flex flex-wrap items-end justify-between gap-4">
                  <h2 id="titre-programme" className="text-3xl font-bold tracking-tight text-fg sm:text-4xl">
                    Le programme
                  </h2>
                  <p className="text-sm text-fg-subtle">
                    {single
                      ? `${totalLessons} leçons, à suivre dans l'ordre.`
                      : "Ouvre un chapitre pour voir ses leçons."}
                  </p>
                </div>
                <ol className="relative mt-8">
                  {m.chapters.map((c, i) => {
                    const first = i === 0;
                    const last = i === m.chapters.length - 1;
                    return (
                      <li key={c.n} id={`chapitre-${c.n}`} className="relative flex scroll-mt-28 gap-2.5 sm:gap-6">
                        {/* Rail */}
                        <div className="flex flex-col items-center">
                          <span
                            className={cn(
                              "flex size-8 shrink-0 items-center justify-center rounded-full border-2 font-display text-sm font-bold sm:size-10 sm:text-base",
                              first
                                ? "border-accent bg-accent text-[#1a0d05] shadow-[0_0_0_5px_rgb(245_158_66/0.15)]"
                                : "border-line-strong bg-surface text-fg-muted",
                            )}
                          >
                            {c.n}
                          </span>
                          {!last && <span aria-hidden="true" className="w-0.5 flex-1 bg-line-strong" />}
                        </div>

                        {/* Carte du chapitre */}
                        <details
                          open={first}
                          className={cn(
                            "group/ch mb-4 min-w-0 flex-1 rounded-3xl border transition-[border-color,background-color] duration-200",
                            first
                              ? "border-accent/50 bg-accent/[0.06] open:border-accent/70"
                              : "border-line bg-surface hover:border-accent/50 open:border-line-strong open:bg-surface-2",
                          )}
                        >
                          <summary className="flex cursor-pointer list-none items-start justify-between gap-3 rounded-3xl p-4 sm:p-6 [&::-webkit-details-marker]:hidden">
                            <div className="min-w-0">
                              {first && (
                                <span className="mb-2 inline-block rounded-full bg-accent px-2.5 py-0.5 text-xs font-bold text-[#1a0d05]">
                                  Commence ici
                                </span>
                              )}
                              <h3 className="text-xl font-bold tracking-tight text-fg sm:text-2xl">
                                {!single && <span className="text-fg-subtle">Chapitre {c.n}. </span>}
                                {c.title}
                              </h3>
                              <p className="mt-3 flex flex-wrap gap-x-5 gap-y-1 text-sm text-fg-subtle">
                                <span className="flex items-center gap-1.5">
                                  <BookOpen className="size-4" aria-hidden="true" />
                                  {c.lessons.length} leçons
                                </span>
                                {c.exercises > 0 && (
                                  <span className="flex items-center gap-1.5">
                                    <FlaskConical className="size-4" aria-hidden="true" />
                                    {c.exercises}{" "}
                                    {m.hasQcm
                                      ? plural(c.exercises, "exercice", "exercices")
                                      : plural(c.exercises, "vérification", "vérifications")}
                                  </span>
                                )}
                              </p>
                            </div>
                            <span
                              aria-hidden="true"
                              className="mt-1 flex size-9 shrink-0 items-center justify-center rounded-full border border-line-strong text-fg-muted transition-[transform,color,border-color] duration-300 group-hover/ch:border-accent/60 group-hover/ch:text-accent group-open/ch:rotate-180"
                            >
                              <ChevronDown className="size-4" />
                            </span>
                          </summary>

                          <div className="px-4 pb-4 sm:px-6 sm:pb-6">
                            <ol className="border-t border-line">
                              {c.lessons.map((l, j) => (
                                <li
                                  key={l.id}
                                  className="grid grid-cols-[1.75rem_minmax(0,1fr)] items-baseline gap-x-2.5 border-b border-line py-3 last:border-b-0 sm:grid-cols-[2.25rem_minmax(0,1fr)] sm:gap-x-3"
                                >
                                  <span className="font-display text-sm font-bold text-accent-1 tabular-nums">
                                    {single ? j + 1 : `${c.n}.${j + 1}`}
                                  </span>
                                  <span className="text-fg">{l.title}</span>
                                </li>
                              ))}
                              {c.exercises > 0 && (
                                <li className="grid grid-cols-[1.75rem_minmax(0,1fr)] items-baseline gap-x-2.5 border-t border-line pt-3 sm:grid-cols-[2.25rem_minmax(0,1fr)] sm:gap-x-3">
                                  <FlaskConical className="size-4 translate-y-0.5 text-accent" aria-hidden="true" />
                                  <span className="text-fg-muted">
                                    {m.hasQcm
                                      ? `Puis ${c.exercises} ${plural(c.exercises, "exercice", "exercices")} sur ton PC, ${plural(c.exercises, "corrigé", "corrigés")} par des tests`
                                      : "Puis la vérification automatique de ton installation"}
                                  </span>
                                </li>
                              )}
                            </ol>
                            <a
                              href={`/modules/${m.slug}/${c.slug}`}
                              target="_blank"
                              rel="noopener"
                              className="group/open mt-5 inline-flex h-11 items-center gap-2 rounded-full border border-line-strong px-5 text-sm font-semibold text-fg transition-[border-color,background-color,color] duration-200 hover:border-accent/60 hover:bg-accent/[0.08] hover:text-accent-1"
                            >
                              Ouvrir le chapitre
                              <ArrowUpRight
                                className="size-4 transition-transform duration-200 group-hover/open:translate-x-0.5 group-hover/open:-translate-y-0.5"
                                aria-hidden="true"
                              />
                              <span className="sr-only">(s&apos;ouvre dans un nouvel onglet)</span>
                            </a>
                          </div>
                        </details>
                      </li>
                    );
                  })}
                </ol>
              </section>

              {/* Pratiquer */}
              <section aria-labelledby="titre-pratiquer" className="pt-16 sm:pt-24">
                <h2 id="titre-pratiquer" className="text-3xl font-bold tracking-tight text-fg sm:text-4xl">
                  Pratiquer sur ton PC
                </h2>
                <p className="mt-4 max-w-2xl leading-relaxed text-fg-muted">
                  {m.hasQcm
                    ? "Les exercices et le QCM se font dans le dépôt de la formation, sur ton ordinateur. Ils sont corrigés automatiquement."
                    : "À la fin du module, une seule commande vérifie que tout est bien installé. Elle te dit quoi corriger si quelque chose manque."}
                </p>
                <div className="mt-8 grid gap-4">
                  <article className="flex flex-col rounded-3xl border border-line bg-surface p-6 sm:p-7">
                    <FlaskConical className="size-7 text-accent" strokeWidth={1.75} aria-hidden="true" />
                    <h3 className="mt-5 text-xl font-bold text-fg">{m.hasQcm ? "Les exercices" : "La vérification"}</h3>
                    <p className="mt-2 flex-1 leading-relaxed text-fg-muted">
                      <span className="font-semibold text-fg">Exercice clé&nbsp;: </span>
                      {m.keyExercise}.{m.hasQcm && " Chaque exercice a des indices à dévoiler un par un si tu bloques."}
                    </p>
                    <p className="mt-5 mb-2 text-sm text-fg-subtle">
                      {m.hasQcm ? "Pour vérifier tes exercices :" : "Pour lancer la vérification :"}
                    </p>
                    <CopyCommand command={`python outils/check.py ${m.folder}`} />
                  </article>
                  {m.hasQcm && (
                    <article className="flex flex-col rounded-3xl border border-line bg-surface p-6 sm:p-7">
                      <FileCheck2 className="size-7 text-accent" strokeWidth={1.75} aria-hidden="true" />
                      <h3 className="mt-5 text-xl font-bold text-fg">Le QCM du module</h3>
                      <p className="mt-2 flex-1 leading-relaxed text-fg-muted">
                        {m.qcm.drawn} questions tirées au hasard. {m.qcm.threshold}&nbsp;% de bonnes réponses pour valider,
                        autant d&apos;essais que tu veux.
                      </p>
                      <p className="mt-5 mb-2 text-sm text-fg-subtle">Pour passer le QCM&nbsp;:</p>
                      <CopyCommand command={`python outils/qcm.py ${m.id}`} />
                    </article>
                  )}
                </div>
              </section>

              {/* Épreuve de niveau expert */}
              {m.expert && (
                <section aria-labelledby="titre-expert" className="pt-16 sm:pt-24">
                  <h2 id="titre-expert" className="text-3xl font-bold tracking-tight text-fg sm:text-4xl">
                    L&apos;épreuve de niveau expert
                  </h2>
                  <p className="mt-4 max-w-2xl leading-relaxed text-fg-muted">
                    Au-delà de l&apos;exercice clé, une épreuve ouverte pour prouver que tu maîtrises le sujet&nbsp;: pas seulement
                    l&apos;appliquer, mais diagnostiquer, comparer et choisir.
                  </p>
                  <article className="mt-8 rounded-3xl border border-line bg-surface p-6 sm:p-7">
                    <Target className="size-7 text-accent" strokeWidth={1.75} aria-hidden="true" />
                    <p className="mt-5 leading-relaxed text-fg">{m.expert.task}</p>
                    <h3 className="mt-6 text-sm font-semibold uppercase tracking-wide text-fg-subtle">Ce que l&apos;épreuve démontre</h3>
                    <dl className="mt-3 grid gap-3 sm:grid-cols-2">
                      {m.expert.levels.map((l) => (
                        <div key={l.level} className="rounded-2xl border border-line p-4">
                          <dt className="font-semibold text-fg">{l.level}</dt>
                          <dd className="mt-1 text-sm leading-relaxed text-fg-muted">{l.proof}</dd>
                        </div>
                      ))}
                    </dl>
                  </article>
                  {m.expert.methods.length > 0 && (
                    <div className="mt-8">
                      <h3 className="text-xl font-bold text-fg">Le statut des méthodes enseignées</h3>
                      <p className="mt-2 max-w-2xl text-sm leading-relaxed text-fg-muted">
                        Ton PC de 8&nbsp;Go fixe la taille des expériences, pas le niveau des connaissances. Une méthode coûteuse
                        s&apos;étudie par une expérience réduite et la lecture de résultats publiés.
                      </p>
                      <div className="mt-4 overflow-x-auto">
                        <table className="w-full min-w-[36rem] border-collapse text-left text-sm">
                          <thead>
                            <tr className="border-b border-line text-fg-subtle">
                              <th scope="col" className="py-3 pr-4 font-semibold">Méthode</th>
                              <th scope="col" className="py-3 pr-4 font-semibold">Statut</th>
                              <th scope="col" className="py-3 font-semibold">Pratique</th>
                            </tr>
                          </thead>
                          <tbody>
                            {m.expert.methods.map((x) => (
                              <tr key={x.method} className="border-b border-line align-top">
                                <td className="py-3 pr-4 font-medium text-fg">{x.method}</td>
                                <td className="py-3 pr-4 text-fg-muted">{x.status}</td>
                                <td className="py-3 text-fg-muted">{x.practice}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  )}
                </section>
              )}

              {/* Pour aller plus loin */}
              {m.resources.length > 0 && (
                <section aria-labelledby="titre-loin" className="pt-16 sm:pt-20">
                  <h2 id="titre-loin" className="text-2xl font-bold tracking-tight text-fg">
                    Pour aller plus loin
                  </h2>
                  <ul className="mt-5 border-t border-line">
                    {m.resources.map((r) => (
                      <li key={r.href} className="border-b border-line">
                        <a
                          href={r.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group flex items-center justify-between gap-4 py-4 transition-colors duration-200 hover:text-accent-1"
                        >
                          <span>
                            <span className="font-semibold text-fg group-hover:text-accent-1">{r.label}</span>
                            <span className="ml-2 text-sm text-fg-subtle">({r.meta})</span>
                          </span>
                          <ArrowRight
                            className="size-4 shrink-0 -rotate-45 text-fg-subtle transition-colors duration-200 group-hover:text-accent"
                            aria-hidden="true"
                          />
                        </a>
                      </li>
                    ))}
                  </ul>
                </section>
              )}
            </div>

            {/* Colonne de repères */}
            <aside className="lg:pt-20">
              <div className="space-y-4 lg:sticky lg:top-24">
                <div className="rounded-3xl border border-line bg-surface p-5">
                  <p className="flex items-center gap-2 text-sm font-semibold text-fg">
                    <ListChecks className="size-4 text-accent" aria-hidden="true" />
                    Avant ce module
                  </p>
                  {m.prerequisites.length === 0 ? (
                    <p className="mt-2 text-sm leading-relaxed text-fg-muted">
                      Rien. C&apos;est le point de départ du parcours&nbsp;: aucune expérience n&apos;est demandée.
                    </p>
                  ) : (
                    <ul className="mt-2 space-y-1.5">
                      {m.prerequisites.map((p) => (
                        <li key={p.id} className="leading-snug">
                          {p.slug ? (
                            <Link href={`/modules/${p.slug}`} className="text-fg-muted transition-colors duration-200 hover:text-accent-1">
                              {p.id} {p.title}
                            </Link>
                          ) : (
                            <span className="text-fg-muted">
                              {p.id} {p.title}
                            </span>
                          )}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                <div className="rounded-3xl border border-line bg-surface p-5">
                  <p className="flex items-center gap-2 text-sm font-semibold text-fg">
                    <MapPin className="size-4 text-accent" aria-hidden="true" />
                    Le fil rouge
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-fg-muted">{m.filRouge}</p>
                </div>

                <div className="rounded-3xl border border-dashed border-line-strong p-5">
                  <p className="flex items-center gap-2 text-sm font-semibold text-fg">
                    <SkipForward className="size-4 text-accent" aria-hidden="true" />
                    {m.skipQuestion}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-fg-muted">
                    {m.hasQcm
                      ? "Passe le QCM et l'exercice clé. S'ils sont réussis, passe directement au module suivant."
                      : "Lance la vérification. Si tout est au vert, passe directement au module suivant."}
                  </p>
                </div>

                <div className="rounded-3xl border border-line bg-surface p-5">
                  <p className="flex items-center gap-2 text-sm font-semibold text-fg">
                    <Compass className="size-4 text-accent" aria-hidden="true" />
                    À ton rythme
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-fg-muted">
                    Aucune durée imposée. Prends le temps de comprendre chaque leçon, et passe à la suite quand tes
                    exercices sont réussis.
                  </p>
                </div>
              </div>
            </aside>
          </Container>

          {/* Navigation entre modules */}
          <Container>
            <nav aria-label="Modules voisins" className="mt-20 grid gap-3 border-t border-line pt-10 sm:grid-cols-2">
              {prev ? <ModuleNav voisin={prev} direction="prev" /> : <span className="hidden sm:block" />}
              {next && <ModuleNav voisin={next} direction="next" />}
            </nav>
          </Container>
        </section>
      </main>

      <Footer onLanding={false} />
    </>
  );
}

function ModuleNav({ voisin, direction }: { voisin: Voisin; direction: "prev" | "next" }) {
  const next = direction === "next";
  const label = voisin.kind === "projet" ? "Pour finir l'étape" : next ? "Module suivant" : "Module précédent";
  if (!voisin.slug) {
    return (
      <div className={cn("rounded-3xl border border-dashed border-line-strong p-6", next && "sm:text-right")}>
        <p className="text-sm text-fg-subtle">{label}, page en préparation</p>
        <p className="mt-2 text-xl font-bold text-fg-muted">
          <span className="text-accent/80">{voisin.id}</span> {voisin.title}
        </p>
      </div>
    );
  }
  return (
    <Link
      href={`/modules/${voisin.slug}`}
      className={cn(
        "group rounded-3xl border border-line bg-surface p-6 transition-[border-color,background-color,transform] duration-200 hover:border-accent/50 hover:bg-surface-2 motion-safe:hover:-translate-y-0.5",
        next && "sm:text-right",
      )}
    >
      <p className={cn("flex items-center gap-1.5 text-sm text-fg-subtle", next && "sm:justify-end")}>
        {!next && <ArrowLeft className="size-4 transition-transform duration-200 group-hover:-translate-x-1" aria-hidden="true" />}
        {label}
        {next && <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />}
      </p>
      <p className="mt-2 text-xl font-bold text-fg group-hover:text-accent-1">
        <span className="text-accent">{voisin.id}</span> {voisin.title}
      </p>
    </Link>
  );
}
