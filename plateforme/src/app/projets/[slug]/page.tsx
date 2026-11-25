import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Briefcase,
  Check,
  ChevronDown,
  ChevronRight,
  Compass,
  Database,
  ListChecks,
  Route,
  Send,
  ShieldCheck,
  Zap,
} from "lucide-react";
import { Footer } from "@/components/landing/footer";
import { Header } from "@/components/landing/header";
import { LessonChips } from "@/components/projet/lesson-links";
import { Rich } from "@/components/projet/rich";
import { ButtonLink, Container, cn } from "@/components/ui";
import { getProjet, getProjets, type Projet } from "@/lib/projets";
import { site } from "@/content/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return getProjets().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps<"/projets/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const p = getProjet(slug);
  return { title: p ? `${p.id} ${p.title} — ${site.name}` : site.name, description: p?.promise };
}

/** Les étapes de la démarche, communes à tous les projets : du problème métier au résultat prouvé. */
const demarche = [
  { label: "Comprendre", text: "le besoin du client, avant toute ligne de code" },
  { label: "Construire", text: "mission par mission, chacune vérifiée" },
  { label: "S'adapter", text: "aux changements imprévus, comme en vrai" },
  { label: "Mesurer", text: "avec les indicateurs du client" },
  { label: "Prouver", text: "par les tests, la grille, l'oral et le portfolio" },
];

/** Page d'un grand projet : le brief, ce qu'il faut prouver, les missions, la validation et le portfolio. */
export default async function ProjetPage({ params }: PageProps<"/projets/[slug]">) {
  const { slug } = await params;
  const p = getProjet(slug);
  if (!p) notFound();

  const all = getProjets();
  const i = all.findIndex((x) => x.slug === p.slug);
  const prev = all[i - 1] ?? null;
  const next = all[i + 1] ?? null;
  const lessonCount = new Set(p.missions.flatMap((m) => m.lessons.map((l) => l.ref))).size;
  const changes = p.missions.filter((m) => m.change).length;

  const stats = [
    { value: String(p.missions.length), unit: "missions", detail: "une page chacune" },
    { value: String(lessonCount), unit: "leçons", detail: "reliées aux missions" },
    { value: String(changes), unit: changes > 1 ? "imprévus" : "imprévu", detail: "à gérer en cours de route" },
    { value: String(p.indicators.length), unit: "indicateurs", detail: "fixés par le client" },
  ];

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
        {/* ---------- En-tête du projet ---------- */}
        <section className="relative isolate -mt-[4.5rem] pt-28 pb-14 sm:pt-36 sm:pb-20">
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
            <div className="bg-grid absolute inset-0" />
            <div className="absolute -top-64 left-1/4 h-[640px] w-[1100px] -translate-x-1/2 bg-[radial-gradient(closest-side,rgb(245_158_66/0.16),transparent)]" />
          </div>
          <Container>
            <nav aria-label="Fil d'Ariane" className="flex flex-wrap items-center gap-1.5 text-sm text-fg-subtle">
              <Link href="/projets" className="transition-colors duration-200 hover:text-fg">
                Projets
              </Link>
              <ChevronRight className="size-4" aria-hidden="true" />
              <Link href="/projets#grands-projets" className="transition-colors duration-200 hover:text-fg">
                Les grands projets
              </Link>
              <ChevronRight className="size-4" aria-hidden="true" />
              <span className="text-fg-muted">{p.family}</span>
            </nav>

            <div className="mt-8 grid gap-10 lg:grid-cols-[minmax(0,1fr)_22rem] lg:items-end lg:gap-16">
              <div>
                <p className="flex items-baseline gap-4">
                  <span className="font-display text-7xl leading-none font-bold tracking-tight text-accent sm:text-8xl">{p.id}</span>
                  <span className="text-sm font-semibold text-fg-subtle">{p.family}</span>
                </p>
                <h1
                  className="mt-4 font-bold tracking-[-0.04em] text-balance text-fg"
                  style={{ fontSize: "clamp(2.2rem, 4.6vw, 3.9rem)", lineHeight: 1.02 }}
                >
                  {p.title}
                </h1>
                <p className="mt-6 max-w-2xl text-lg leading-relaxed text-pretty text-fg-muted sm:text-xl">{p.promise}</p>
                {p.status !== "publie" && (
                  <p className="mt-6 inline-flex items-start gap-3 rounded-2xl border border-line-strong px-4 py-2.5 text-sm text-fg-muted">
                    <span className="mt-1.5 size-2 shrink-0 rounded-full bg-accent" />
                    Le cahier des charges est fixé, les énoncés, données et tests des missions sont en préparation.
                  </p>
                )}
                <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                  <ButtonLink
                    href={`/projets/${p.slug}/${p.missions[0].slug}`}
                    target="_blank"
                    rel="noopener"
                    className="h-13 px-7 text-base"
                  >
                    Commencer la mission 1
                    <ArrowUpRight
                      className="size-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      aria-hidden="true"
                    />
                    <span className="sr-only">(s&apos;ouvre dans un nouvel onglet)</span>
                  </ButtonLink>
                  <ButtonLink href="#missions" variant="secondary" className="h-13 px-7 text-base">
                    Voir les missions
                  </ButtonLink>
                </div>
              </div>

              <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-line bg-line">
                {stats.map((f) => (
                  <div key={f.detail} className="bg-surface p-5">
                    <dt className="sr-only">{f.unit}</dt>
                    <dd>
                      <p className="font-display">
                        <span className="text-4xl font-bold tracking-tight text-fg">{f.value}</span>
                        <span className="ml-1.5 text-sm text-fg-muted">{f.unit}</span>
                      </p>
                      <p className="mt-1 text-sm text-fg-subtle">{f.detail}</p>
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </Container>
        </section>

        {/* ---------- Corps ---------- */}
        <section className="border-t border-line pb-24 sm:pb-32">
          <Container className="grid gap-14 lg:grid-cols-[minmax(0,1fr)_22rem] lg:gap-16">
            <div className="min-w-0">
              {/* Le brief client */}
              <section aria-labelledby="titre-brief" className="pt-14 sm:pt-20">
                <h2 id="titre-brief" className="text-3xl font-bold tracking-tight text-fg sm:text-4xl">
                  Le brief du client
                </h2>
                <p className="mt-3 max-w-2xl text-fg-muted">
                  Tout part d&apos;un problème réel. Lis-le comme un professionnel&nbsp;: qui souffre de quoi, et à quoi
                  ressemblera le succès.
                </p>
                <dl className="mt-8 border-t border-line">
                  {p.brief.map((b) => (
                    <div key={b.label} className="grid gap-1 border-b border-line py-5 sm:grid-cols-[11rem_minmax(0,1fr)] sm:gap-6">
                      <dt className="font-semibold text-fg">{b.label}</dt>
                      <dd className="leading-relaxed text-fg-muted">{b.text}</dd>
                    </div>
                  ))}
                </dl>
              </section>

              {/* Indicateurs */}
              {p.indicators.length > 0 && (
                <section aria-labelledby="titre-indicateurs" className="pt-16 sm:pt-24">
                  <h2 id="titre-indicateurs" className="text-3xl font-bold tracking-tight text-fg sm:text-4xl">
                    Comment le client jugera ton travail
                  </h2>
                  <p className="mt-3 max-w-2xl text-fg-muted">
                    Des indicateurs métier, qui parlent au client, et des indicateurs techniques, qui parlent à l&apos;équipe.
                    Tu les mesures toi-même, sur les données fournies.
                  </p>
                  <div className="mt-8 overflow-x-auto">
                    <table className="w-full min-w-[40rem] border-collapse text-left text-sm">
                      <thead>
                        <tr className="border-b border-line text-fg-subtle">
                          <th scope="col" className="py-3 pr-4 font-semibold">Indicateur</th>
                          <th scope="col" className="py-3 pr-4 font-semibold">Cible</th>
                          <th scope="col" className="py-3 font-semibold">Comment le mesurer</th>
                        </tr>
                      </thead>
                      <tbody>
                        {p.indicators.map((x) => (
                          <tr key={x.name} className="border-b border-line align-top">
                            <td className="py-3.5 pr-4">
                              <span className="font-medium text-fg">{x.name}</span>
                              <span
                                className={cn(
                                  "ml-2 rounded-full px-2 py-0.5 text-xs font-semibold",
                                  x.nature === "métier" ? "bg-accent/12 text-accent-1" : "bg-white/[0.06] text-fg-muted",
                                )}
                              >
                                {x.nature}
                              </span>
                            </td>
                            <td className="py-3.5 pr-4 font-display font-bold whitespace-nowrap text-fg">{x.target}</td>
                            <td className="py-3.5 text-fg-muted">{x.how}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </section>
              )}

              {/* Compétences */}
              {p.skills.length > 0 && (
                <section aria-labelledby="titre-competences" className="pt-16 sm:pt-24">
                  <h2 id="titre-competences" className="text-3xl font-bold tracking-tight text-fg sm:text-4xl">
                    Ce que tu vas prouver
                  </h2>
                  <p className="mt-3 max-w-2xl text-fg-muted">
                    Chaque compétence renvoie aux leçons où tu l&apos;as apprise. Un doute&nbsp;? Ouvre la leçon avant de te
                    lancer.
                  </p>
                  <ul className="mt-8 space-y-6">
                    {p.skills.map((s) => (
                      <li key={s.skill} className="flex gap-3.5">
                        <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-success/15">
                          <Check className="size-3.5 text-success" strokeWidth={3} aria-hidden="true" />
                        </span>
                        <div className="min-w-0">
                          <p className="leading-relaxed font-semibold text-fg">{s.skill}</p>
                          <div className="mt-2.5">
                            <LessonChips lessons={s.lessons} />
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </section>
              )}

              {/* Missions */}
              <section id="missions" aria-labelledby="titre-missions" className="scroll-mt-24 pt-16 sm:pt-24">
                <div className="flex flex-wrap items-end justify-between gap-4">
                  <h2 id="titre-missions" className="text-3xl font-bold tracking-tight text-fg sm:text-4xl">
                    Les missions
                  </h2>
                  <p className="text-sm text-fg-subtle">Dans l&apos;ordre&nbsp;: chaque mission s&apos;appuie sur la précédente.</p>
                </div>
                <ol className="relative mt-8">
                  {p.missions.map((m, j) => {
                    const first = j === 0;
                    const last = j === p.missions.length - 1;
                    return (
                      <li key={m.n} id={`mission-${m.n}`} className="relative flex scroll-mt-28 gap-2.5 sm:gap-6">
                        <div className="flex flex-col items-center">
                          <span
                            className={cn(
                              "flex size-8 shrink-0 items-center justify-center rounded-full border-2 font-display text-sm font-bold sm:size-10 sm:text-base",
                              first
                                ? "border-accent bg-accent text-[#1a0d05] shadow-[0_0_0_5px_rgb(245_158_66/0.15)]"
                                : "border-line-strong bg-surface text-fg-muted",
                            )}
                          >
                            {m.n}
                          </span>
                          {!last && <span aria-hidden="true" className="w-0.5 flex-1 bg-line-strong" />}
                        </div>

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
                                <span className="text-fg-subtle">Mission {m.n}. </span>
                                {m.title}
                              </h3>
                              <p className="mt-3 flex flex-wrap gap-x-5 gap-y-1 text-sm text-fg-subtle">
                                <span className="flex items-center gap-1.5">
                                  <ListChecks className="size-4" aria-hidden="true" />
                                  {m.criteria.length} critères
                                </span>
                                {m.change && (
                                  <span className="flex items-center gap-1.5 text-accent-1">
                                    <Zap className="size-4" aria-hidden="true" />
                                    Un imprévu
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

                          <div className="space-y-4 px-4 pb-4 sm:px-6 sm:pb-6">
                            <p className="border-t border-line pt-4 leading-relaxed text-fg-muted">{m.situation}</p>
                            <p className="leading-relaxed text-fg">
                              <span className="font-semibold">Tu livres&nbsp;: </span>
                              {m.deliverable}
                            </p>
                            {m.change && (
                              <p className="flex gap-2.5 rounded-2xl border border-accent/30 bg-accent/[0.06] px-4 py-3 text-sm leading-relaxed text-fg-muted">
                                <Zap className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden="true" />
                                <span>
                                  <span className="font-semibold text-fg">Imprévu&nbsp;: </span>
                                  {m.change}
                                </span>
                              </p>
                            )}
                            <a
                              href={`/projets/${p.slug}/${m.slug}`}
                              target="_blank"
                              rel="noopener"
                              className="group/open inline-flex h-11 items-center gap-2 rounded-full border border-line-strong px-5 text-sm font-semibold text-fg transition-[border-color,background-color,color] duration-200 hover:border-accent/60 hover:bg-accent/[0.08] hover:text-accent-1"
                            >
                              Ouvrir la mission
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

              {/* Validation */}
              {p.validation.length > 0 && (
                <section id="valider" aria-labelledby="titre-valider" className="scroll-mt-24 pt-16 sm:pt-24">
                  <h2 id="titre-valider" className="text-3xl font-bold tracking-tight text-fg sm:text-4xl">
                    Valider ton projet
                  </h2>
                  <p className="mt-3 max-w-2xl text-fg-muted">
                    Personne ne te note à la main&nbsp;: des règles publiques, les mêmes pour tous. Le projet est validé quand
                    tous ces contrôles le sont.
                  </p>
                  <ol className="mt-8 grid gap-4 sm:grid-cols-2">
                    {p.validation.map((v, k) => (
                      <li key={v.check} className="rounded-3xl border border-line bg-surface p-6">
                        <p className="font-display text-sm font-bold text-accent-1">{k + 1}</p>
                        <h3 className="mt-2 text-lg font-bold text-fg">{v.check}</h3>
                        <p className="mt-2 text-sm leading-relaxed text-fg-muted">
                          <Rich text={v.how} />
                        </p>
                        <p className="mt-4 flex items-start gap-2 text-sm font-semibold text-fg">
                          <ShieldCheck className="mt-0.5 size-4 shrink-0 text-success" aria-hidden="true" />
                          {v.rule}
                        </p>
                      </li>
                    ))}
                  </ol>
                </section>
              )}

              {/* Portfolio */}
              {p.portfolio.length > 0 && (
                <section aria-labelledby="titre-portfolio" className="pt-16 sm:pt-24">
                  <h2 id="titre-portfolio" className="text-3xl font-bold tracking-tight text-fg sm:text-4xl">
                    Le montrer dans ton portfolio
                  </h2>
                  <p className="mt-3 max-w-2xl text-fg-muted">
                    Ton projet vit sur ton GitHub, pas ici. Voici ce qu&apos;un recruteur ou un client doit pouvoir y vérifier
                    en quelques minutes.
                  </p>
                  <ul className="mt-8 space-y-4">
                    {p.portfolio.map((x) => (
                      <li key={x} className="flex gap-3.5">
                        <Send className="mt-1 size-4 shrink-0 text-accent" aria-hidden="true" />
                        <span className="leading-relaxed text-fg">{x}</span>
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
                    Avant ce projet
                  </p>
                  <ul className="mt-2 space-y-1.5">
                    {p.prerequisites.map((x) => (
                      <li key={x.id} className="leading-snug">
                        <Link href={`/modules/${x.slug}`} className="text-sm text-fg-muted transition-colors duration-200 hover:text-accent-1">
                          {x.id} {x.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-3xl border border-line bg-surface p-5">
                  <p className="flex items-center gap-2 text-sm font-semibold text-fg">
                    <Route className="size-4 text-accent" aria-hidden="true" />
                    La démarche
                  </p>
                  <ol className="mt-3 space-y-2.5">
                    {demarche.map((d, k) => (
                      <li key={d.label} className="flex gap-2.5 text-sm leading-snug">
                        <span className="w-4 shrink-0 font-display font-bold text-accent-1 tabular-nums">{k + 1}</span>
                        <span className="text-fg-muted">
                          <span className="font-semibold text-fg">{d.label}</span> {d.text}
                        </span>
                      </li>
                    ))}
                  </ol>
                </div>

                {p.material.length > 0 && (
                  <div className="rounded-3xl border border-line bg-surface p-5">
                    <p className="flex items-center gap-2 text-sm font-semibold text-fg">
                      <Database className="size-4 text-accent" aria-hidden="true" />
                      Données et matériel
                    </p>
                    <dl className="mt-2 space-y-2.5">
                      {p.material.map((x) => (
                        <div key={x.label} className="text-sm leading-relaxed">
                          <dt className="font-semibold text-fg">{x.label}</dt>
                          <dd className="text-fg-muted">{x.text}</dd>
                        </div>
                      ))}
                    </dl>
                  </div>
                )}

                <div className="rounded-3xl border border-line bg-surface p-5">
                  <p className="flex items-center gap-2 text-sm font-semibold text-fg">
                    <Compass className="size-4 text-accent" aria-hidden="true" />
                    À ton rythme
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-fg-muted">
                    Aucune durée imposée. Le code, les tests et tes résultats restent dans ton dépôt, sur ton PC.
                  </p>
                </div>
              </div>
            </aside>
          </Container>

          {/* Projets voisins */}
          <Container>
            <nav aria-label="Projets voisins" className="mt-20 grid gap-3 border-t border-line pt-10 sm:grid-cols-2">
              {prev ? <ProjetNav projet={prev} direction="prev" /> : <span className="hidden sm:block" />}
              {next ? (
                <ProjetNav projet={next} direction="next" />
              ) : (
                <Link
                  href="/projets"
                  className="group rounded-3xl border border-line bg-surface p-6 transition-[border-color,background-color,transform] duration-200 hover:border-accent/50 hover:bg-surface-2 motion-safe:hover:-translate-y-0.5 sm:text-right"
                >
                  <p className="flex items-center gap-1.5 text-sm text-fg-subtle sm:justify-end">
                    <Briefcase className="size-4" aria-hidden="true" />
                    Dernier grand projet
                  </p>
                  <p className="mt-2 text-xl font-bold text-fg group-hover:text-accent-1">Tous les projets</p>
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

function ProjetNav({ projet, direction }: { projet: Projet; direction: "prev" | "next" }) {
  const next = direction === "next";
  return (
    <Link
      href={`/projets/${projet.slug}`}
      className={cn(
        "group rounded-3xl border border-line bg-surface p-6 transition-[border-color,background-color,transform] duration-200 hover:border-accent/50 hover:bg-surface-2 motion-safe:hover:-translate-y-0.5",
        next && "sm:text-right",
      )}
    >
      <p className={cn("flex items-center gap-1.5 text-sm text-fg-subtle", next && "sm:justify-end")}>
        {!next && <ArrowLeft className="size-4 transition-transform duration-200 group-hover:-translate-x-1" aria-hidden="true" />}
        {next ? "Projet suivant" : "Projet précédent"}
        {next && <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />}
      </p>
      <p className="mt-2 text-xl font-bold text-fg group-hover:text-accent-1">
        <span className="text-accent">{projet.id}</span> {projet.family}
      </p>
    </Link>
  );
}
