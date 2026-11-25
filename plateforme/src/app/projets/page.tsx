import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Flag } from "lucide-react";
import { Footer } from "@/components/landing/footer";
import { Header } from "@/components/landing/header";
import { Container } from "@/components/ui";
import { etapes } from "@/content/commencer";
import { site } from "@/content/site";
import { getFamilles } from "@/lib/fiches";

export const metadata: Metadata = {
  title: `Les projets — ${site.name}`,
  description:
    "Les grands projets de la formation AI Engineer : dix familles, des dizaines de projets réels à livrer pour ton portfolio, du problème du client au résultat prouvé.",
};

const demarche = [
  { label: "Comprendre", text: "Le client, son problème, ses contraintes réelles, et ce qui rend ce cas différent." },
  { label: "Choisir", text: "L'approche de l'expert, et les alternatives qu'il écarte, avec leurs raisons." },
  { label: "Construire", text: "Les étapes dans l'ordre, chacune vérifiable avant de passer à la suivante." },
  { label: "Encaisser l'imprévu", text: "Un changement en cours de route, rejoué par les tests." },
  { label: "Prouver et vendre", text: "Les critères de réussite, ce qui se vend, et ton portfolio." },
];

/** Tous les projets : les familles de grands projets (section finale du parcours), puis le projet de chaque étape. */
export default function ProjetsPage() {
  const familles = getFamilles();
  const projectCount = familles.reduce((s, f) => s + f.chapters.length, 0);
  return (
    <>
      <a
        href="#contenu"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:rounded-full focus:bg-fg focus:px-4 focus:py-2 focus:text-sm focus:text-bg"
      >
        Aller au contenu
      </a>
      <Header page="projets" />

      <main id="contenu" className="flex-1">
        <section className="relative isolate -mt-[4.5rem] pt-32 pb-12 sm:pt-40 sm:pb-16">
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
            <div className="bg-grid absolute inset-0" />
            <div className="absolute -top-64 left-1/3 h-[640px] w-[1100px] -translate-x-1/2 bg-[radial-gradient(closest-side,rgb(245_158_66/0.16),transparent)]" />
          </div>
          <Container>
            <h1 className="font-bold tracking-[-0.04em] text-fg" style={{ fontSize: "clamp(2.6rem, 6vw, 5rem)", lineHeight: 1 }}>
              Les projets que tu rencontreras dans ta carrière.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-pretty text-fg-muted sm:text-xl">
              Des projets réels, qu&apos;une entreprise pourrait acheter et utiliser demain, rangés par familles. Dans chaque
              famille, des problèmes différents qui se résolvent différemment. Tu les réalises comme un expert, et ils
              construisent ton portfolio.
            </p>
            <ul className="mt-10 flex flex-wrap gap-x-10 gap-y-4">
              {[
                { value: familles.length, unit: "familles" },
                { value: projectCount, unit: "projets" },
                { value: familles.reduce((s, f) => s + f.chapters.reduce((t, c) => t + c.lessons.length, 0), 0), unit: "étapes d'expert" },
              ].map((f) => (
                <li key={f.unit} className="font-display">
                  <span className="text-4xl font-bold tracking-tight text-fg sm:text-5xl">{f.value}</span>
                  <span className="ml-2 text-fg-muted">{f.unit}</span>
                </li>
              ))}
            </ul>
          </Container>
        </section>

        {/* La démarche */}
        <section aria-labelledby="titre-demarche" className="border-t border-line">
          <Container className="py-14 sm:py-20">
            <h2 id="titre-demarche" className="text-3xl font-bold tracking-tight text-fg sm:text-4xl">
              Chaque projet, de la même façon
            </h2>
            <ol className="mt-8 grid gap-px overflow-hidden rounded-3xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-5">
              {demarche.map((d, k) => (
                <li key={d.label} className="bg-surface p-5">
                  <p className="font-display text-sm font-bold text-accent-1">{k + 1}</p>
                  <p className="mt-2 text-lg font-bold text-fg">{d.label}</p>
                  <p className="mt-1.5 text-sm leading-relaxed text-fg-muted">{d.text}</p>
                </li>
              ))}
            </ol>
          </Container>
        </section>

        {/* Les familles */}
        <section id="grands-projets" aria-labelledby="titre-familles" className="scroll-mt-24 border-t border-line">
          <Container className="py-14 sm:py-20">
            <h2 id="titre-familles" className="text-3xl font-bold tracking-tight text-fg sm:text-4xl">
              Les familles de projets
            </h2>
            <p className="mt-3 max-w-2xl text-fg-muted">
              La section finale du parcours. Chaque famille dit quels modules elle demande, et chaque projet est indépendant.
              Pour un portfolio équilibré, livre des projets dans plusieurs familles.
            </p>
            <ol className="mt-10 grid gap-4 lg:grid-cols-2">
              {familles.map((f) => (
                <li key={f.id} className="flex flex-col rounded-3xl border border-line bg-surface p-6 sm:p-8">
                  <p className="flex items-baseline justify-between gap-4">
                    <span className="font-display text-3xl font-bold text-accent">{f.id}</span>
                    <span className="text-sm text-fg-subtle">Après {f.prerequisites.map((x) => x.id).join(", ")}</span>
                  </p>
                  <h3 className="mt-4 text-2xl font-bold tracking-tight text-fg">
                    <Link href={`/modules/${f.slug}`} className="transition-colors duration-200 hover:text-accent-1">
                      {f.title}
                    </Link>
                  </h3>
                  <p className="mt-3 leading-relaxed text-fg-muted">{f.promise}</p>
                  <ol className="mt-5 flex-1 border-t border-line">
                    {f.chapters.map((c) => (
                      <li key={c.n} className="border-b border-line last:border-b-0">
                        <a
                          href={`/modules/${f.slug}/${c.slug}`}
                          target="_blank"
                          rel="noopener"
                          className="group flex items-baseline gap-3 py-2.5 text-fg transition-colors duration-200 hover:text-accent-1"
                        >
                          <span className="w-5 shrink-0 font-display text-sm font-bold text-accent-1 tabular-nums">{c.n}</span>
                          <span className="min-w-0 flex-1">{c.title}</span>
                          <span className="sr-only">(s&apos;ouvre dans un nouvel onglet)</span>
                        </a>
                      </li>
                    ))}
                  </ol>
                  <Link
                    href={`/modules/${f.slug}`}
                    className="group mt-5 inline-flex items-center gap-2 text-sm font-semibold text-accent-1"
                  >
                    Comparer les projets de la famille
                    <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
                  </Link>
                </li>
              ))}
            </ol>
            <p className="mt-6 inline-flex items-start gap-3 rounded-2xl border border-line-strong px-5 py-3 text-sm text-fg-muted">
              <span className="mt-1.5 size-2 shrink-0 rounded-full bg-accent" />
              Les cahiers des charges sont fixés. Les énoncés détaillés, les données et les tests sont en préparation.
            </p>
          </Container>
        </section>

        {/* Les projets d'étape */}
        <section aria-labelledby="titre-etapes" className="border-t border-line pb-24 sm:pb-32">
          <Container className="pt-14 sm:pt-20">
            <h2 id="titre-etapes" className="text-3xl font-bold tracking-tight text-fg sm:text-4xl">
              Pendant le parcours : un projet par étape
            </h2>
            <p className="mt-3 max-w-2xl text-fg-muted">
              Avant les grands projets, chaque étape se termine par un projet qui assemble ses modules.
            </p>
            <ol className="mt-8 border-t border-line">
              {etapes.map((e) => (
                <li
                  key={e.n}
                  className="grid grid-cols-[3.25rem_minmax(0,1fr)] gap-x-4 border-b border-line py-5 sm:grid-cols-[4rem_minmax(0,1fr)] sm:gap-x-6"
                >
                  <span className="font-display text-3xl leading-none font-bold text-accent">{e.n}</span>
                  <div>
                    <p className="text-sm text-fg-subtle">Étape {e.n}&nbsp;: {e.title}</p>
                    <p className="mt-1 flex gap-2.5 text-lg font-semibold text-fg">
                      <Flag className="mt-1.5 size-4 shrink-0 text-accent" aria-hidden="true" />
                      {e.project}
                    </p>
                    <Link
                      href={`/commencer#etape-${e.n}`}
                      className="mt-2 inline-flex items-center gap-1.5 text-sm text-fg-muted transition-colors duration-200 hover:text-accent-1"
                    >
                      Les modules de l&apos;étape
                      <ArrowRight className="size-3.5" aria-hidden="true" />
                    </Link>
                  </div>
                </li>
              ))}
            </ol>
          </Container>
        </section>
      </main>

      <Footer onLanding={false} />
    </>
  );
}
