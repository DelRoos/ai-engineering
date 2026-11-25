import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Flag, ListChecks, Zap } from "lucide-react";
import { Footer } from "@/components/landing/footer";
import { Header } from "@/components/landing/header";
import { Container } from "@/components/ui";
import { etapes } from "@/content/commencer";
import { site } from "@/content/site";
import { getProjets } from "@/lib/projets";

export const metadata: Metadata = {
  title: `Les projets — ${site.name}`,
  description:
    "Les projets de la formation AI Engineer : un projet par étape, puis quatre grands projets construits du problème métier au résultat prouvé.",
};

const demarche = [
  { label: "Comprendre", text: "Un brief client : qui souffre de quoi, et à quoi ressemble le succès." },
  { label: "Construire", text: "Des missions dans l'ordre, chacune avec son livrable et ses critères vérifiés." },
  { label: "S'adapter", text: "Des imprévus en cours de route : un besoin qui change, un outil qui tombe." },
  { label: "Mesurer", text: "Les indicateurs du client, mesurés par toi sur les données fournies." },
  { label: "Prouver", text: "Tests, grille de l'agent correcteur, oral, puis ton portfolio public." },
];

/** Tous les projets : les grands projets (section finale du parcours) et le projet de chaque étape. */
export default function ProjetsPage() {
  const projets = getProjets();
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
        {/* Titre */}
        <section className="relative isolate -mt-[4.5rem] pt-32 pb-12 sm:pt-40 sm:pb-16">
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
            <div className="bg-grid absolute inset-0" />
            <div className="absolute -top-64 left-1/3 h-[640px] w-[1100px] -translate-x-1/2 bg-[radial-gradient(closest-side,rgb(245_158_66/0.16),transparent)]" />
          </div>
          <Container>
            <h1 className="font-bold tracking-[-0.04em] text-fg" style={{ fontSize: "clamp(2.6rem, 6vw, 5rem)", lineHeight: 1 }}>
              Construire, mesurer, prouver.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-pretty text-fg-muted sm:text-xl">
              Un projet par étape pour appliquer ce que tu viens d&apos;apprendre. Puis, à la fin du parcours, de grands
              projets&nbsp;: des produits complets, construits comme chez un vrai client, du problème métier au résultat
              prouvé.
            </p>
            <ul className="mt-10 flex flex-wrap gap-x-10 gap-y-4">
              {[
                { value: etapes.length, unit: "projets d'étape" },
                { value: projets.length, unit: "grands projets" },
                { value: projets.reduce((s, p) => s + p.missions.length, 0), unit: "missions" },
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
              Comment se déroule un grand projet
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

        {/* Les grands projets */}
        <section id="grands-projets" aria-labelledby="titre-grands" className="scroll-mt-24 border-t border-line">
          <Container className="py-14 sm:py-20">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <h2 id="titre-grands" className="text-3xl font-bold tracking-tight text-fg sm:text-4xl">
                  Les grands projets
                </h2>
                <p className="mt-3 max-w-2xl text-fg-muted">
                  La section finale du parcours. Chaque projet est indépendant et dit quels modules il demande.
                </p>
              </div>
            </div>
            <ol className="mt-10 grid gap-4 lg:grid-cols-2">
              {projets.map((p) => (
                <li key={p.id}>
                  <Link
                    href={`/projets/${p.slug}`}
                    className="group flex h-full flex-col rounded-3xl border border-line bg-surface p-6 transition-[border-color,background-color,transform] duration-200 hover:border-accent/50 hover:bg-surface-2 motion-safe:hover:-translate-y-0.5 sm:p-8"
                  >
                    <p className="flex items-baseline justify-between gap-4">
                      <span className="font-display text-4xl font-bold text-accent">{p.id}</span>
                      <span className="text-sm font-semibold text-fg-subtle">{p.family}</span>
                    </p>
                    <h3 className="mt-5 text-2xl font-bold tracking-tight text-balance text-fg group-hover:text-accent-1">{p.title}</h3>
                    <p className="mt-3 flex-1 leading-relaxed text-fg-muted">{p.promise}</p>
                    <p className="mt-6 flex flex-wrap gap-x-5 gap-y-1 text-sm text-fg-subtle">
                      <span className="flex items-center gap-1.5">
                        <ListChecks className="size-4" aria-hidden="true" />
                        {p.missions.length} missions
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Zap className="size-4" aria-hidden="true" />
                        {p.missions.filter((m) => m.change).length} imprévus
                      </span>
                      <span>Après {p.prerequisites.map((x) => x.id).join(", ")}</span>
                    </p>
                    <p className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-accent-1">
                      Voir le projet
                      <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
                    </p>
                  </Link>
                </li>
              ))}
            </ol>
            <p className="mt-6 inline-flex items-start gap-3 rounded-2xl border border-line-strong px-5 py-3 text-sm text-fg-muted">
              <span className="mt-1.5 size-2 shrink-0 rounded-full bg-accent" />
              Les cahiers des charges sont fixés. Les énoncés détaillés, les données et les tests des missions sont en
              préparation.
            </p>
          </Container>
        </section>

        {/* Les projets d'étape */}
        <section aria-labelledby="titre-etapes" className="border-t border-line pb-24 sm:pb-32">
          <Container className="pt-14 sm:pt-20">
            <h2 id="titre-etapes" className="text-3xl font-bold tracking-tight text-fg sm:text-4xl">
              Un projet par étape
            </h2>
            <p className="mt-3 max-w-2xl text-fg-muted">
              Pendant le parcours, chaque étape se termine par un projet qui assemble ses modules. Son énoncé est en
              préparation.
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
