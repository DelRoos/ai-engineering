import type { CSSProperties } from "react";
import { ArrowDown } from "lucide-react";
import { hero } from "@/content/landing";
import { repoIsExternal } from "@/content/site";
import { ButtonLink, Container, GithubIcon, RepoLink } from "@/components/ui";
import { Terminal } from "./terminal";

const delay = (ms: number) => ({ "--delay": `${ms}ms` }) as CSSProperties;

/**
 * Titre à gauche, terminal à droite : le moment orchestré (le badge vert)
 * est visible dès le chargement, même sur un portable 1366 × 768.
 */
export function Hero() {
  const labels = repoIsExternal ? hero.withRepo : hero.withoutRepo;

  return (
    <section id="top" className="relative isolate -mt-[4.5rem] overflow-hidden pt-28 pb-20 sm:pt-32 lg:pb-28">
      {/* Fond : grille + halo chaud (dégradés simples, sans flou) */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="bg-grid absolute inset-0" />
        <div className="absolute -top-64 left-1/3 h-[720px] w-[1100px] -translate-x-1/2 bg-[radial-gradient(closest-side,rgb(245_158_66/0.18),transparent)]" />
        <div className="absolute top-40 -right-60 h-[560px] w-[680px] bg-[radial-gradient(closest-side,rgb(226_114_91/0.12),transparent)]" />
      </div>

      <Container className="grid items-center gap-14 lg:grid-cols-[1.08fr_1fr] lg:gap-12 xl:gap-16">
        <div>
          <p
            className="anim-rise inline-flex items-center gap-2 rounded-full border border-line-strong px-3.5 py-1.5 text-sm text-fg-muted"
            style={delay(0)}
          >
            <span className="size-1.5 rounded-full bg-success" />
            {hero.eyebrow}
          </p>

          {/* Titre : l'élément principal (LCP), affiché sans animation. */}
          <h1
            className="mt-7 font-bold tracking-[-0.045em]"
            style={{ fontSize: "clamp(2.4rem, 4.1vw, 4rem)", lineHeight: 0.98 }}
          >
            <span className="block text-fg sm:whitespace-nowrap">{hero.titleLine1}</span>
            <span className="text-gradient block">{hero.titleLine2[0]}</span>
            <span className="text-gradient block pb-1 text-balance">{hero.titleLine2[1]}</span>
          </h1>

          {/* Sans animation : selon l'écran, ce paragraphe peut être l'élément principal (LCP). */}
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-pretty text-fg-muted">{hero.subtitle}</p>

          <div className="anim-rise mt-8 flex flex-col gap-3 sm:flex-row" style={delay(150)}>
            {repoIsExternal ? (
              <RepoLink className="h-13 px-7 text-base">
                <GithubIcon className="size-4" />
                {labels.primary}
              </RepoLink>
            ) : (
              <ButtonLink href="#parcours" className="h-13 px-7 text-base">
                {labels.primary}
                <ArrowDown className="size-4 transition-transform duration-200 group-hover:translate-y-1" aria-hidden="true" />
              </ButtonLink>
            )}
            <ButtonLink href={repoIsExternal ? "#parcours" : "#metier"} variant="secondary" className="h-13 px-7 text-base">
              {labels.secondary}
            </ButtonLink>
          </div>
        </div>

        <Terminal />
      </Container>
    </section>
  );
}
