import type { CSSProperties } from "react";
import { BadgeCheck, ShieldCheck } from "lucide-react";
import { proof } from "@/content/landing";
import { GithubIcon, Section, SectionHeader } from "@/components/ui";

/** Aperçu illustratif d'un portfolio GitHub d'apprenant : les dépôts apparaissent un à un. */
function PortfolioPreview() {
  const rows = [
    { name: "prix-agricoles", score: "15/20", oral: "7/10" },
    { name: "maladies-manioc", score: "17/20", oral: "9/10" },
    { name: "assistant-rag", score: "16/20", oral: "8/10" },
  ];
  return (
    <figure className="ring-gradient relative overflow-hidden rounded-3xl bg-surface-2 p-6 sm:p-7">
      <div className="flex items-center gap-3">
        <div className="bg-gradient-accent flex size-11 items-center justify-center rounded-full font-bold text-[#1a0d05]">A</div>
        <div>
          <p className="font-semibold text-fg">awa-ngono</p>
          <p className="text-sm text-fg-subtle">Portfolio AI Engineer, Bafoussam</p>
        </div>
        <GithubIcon className="ml-auto size-6 text-fg-subtle" />
      </div>
      <ul data-reveal className="mt-6 space-y-2.5">
        {rows.map((row, i) => (
          <li
            key={row.name}
            className="reveal-rise flex flex-wrap items-center gap-x-4 gap-y-2 rounded-2xl border border-line bg-bg/70 px-4 py-3.5"
            style={{ "--delay": `${i * 180}ms` } as CSSProperties}
          >
            <span className="w-full font-mono text-sm text-fg sm:w-auto sm:flex-1">{row.name}</span>
            <span className="inline-flex items-center overflow-hidden rounded-md font-mono text-xs font-semibold">
              <span className="bg-[#555] px-2 py-0.5 text-white">tests</span>
              <span className="bg-[#3fb950] px-2 py-0.5 text-[#06210f]">passing</span>
            </span>
            <span className="text-sm text-fg-muted">IA {row.score}</span>
            <span className="text-sm text-fg-muted">oral {row.oral}</span>
          </li>
        ))}
      </ul>
      <figcaption className="mt-5 text-sm text-fg-subtle">Illustration&nbsp;: à quoi ressemble un portfolio vérifiable.</figcaption>
    </figure>
  );
}

export function Proof() {
  return (
    <Section id="validation" tone="raised">
      <div className="grid gap-16 lg:grid-cols-2 lg:items-start">
        <div>
          <SectionHeader title={proof.title} intro={proof.intro} />
          <ol className="relative mt-12 space-y-8 border-l border-line pl-8">
            {proof.steps.map((step, i) => (
              <li key={step.title} className="relative">
                <span className="absolute top-0 -left-[2.65rem] flex size-6 items-center justify-center rounded-full border border-success/40 bg-surface text-xs font-semibold text-success">
                  {i + 1}
                </span>
                <p className="text-lg font-semibold text-fg">{step.title}</p>
                <p className="mt-1 leading-relaxed text-fg-muted">{step.text}</p>
              </li>
            ))}
          </ol>
        </div>

        {/* Reste visible pendant qu'on lit les 4 étapes : plus de vide à droite. */}
        <div className="space-y-6 lg:sticky lg:top-28 lg:pt-4">
          <PortfolioPreview />
          <div className="flex gap-4 px-2">
            <ShieldCheck className="size-6 shrink-0 text-accent" strokeWidth={1.75} aria-hidden="true" />
            <p className="leading-relaxed text-fg-muted">{proof.honesty}</p>
          </div>
          <div className="flex gap-4 px-2">
            <BadgeCheck className="size-6 shrink-0 text-success" strokeWidth={1.75} aria-hidden="true" />
            <p className="leading-relaxed text-fg-muted">{proof.portfolioNote}</p>
          </div>
        </div>
      </div>
    </Section>
  );
}
