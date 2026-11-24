import type { CSSProperties } from "react";
import { method } from "@/content/landing";
import { Section, SectionHeader } from "@/components/ui";

const vars = (v: Record<string, string>) => v as CSSProperties;

/** Durée du tracé de la ligne. La pastille n s'allume quand la ligne l'atteint. */
const LINE_MS = 1200;
const STEPS = method.steps.length;
const stepDelay = (i: number) => `${Math.round((i / (STEPS - 1)) * LINE_MS)}ms`;

/**
 * Les 5 étapes. Quand la liste apparaît, la ligne se dessine à vitesse constante
 * et chaque pastille s'allume au moment où la ligne l'atteint (même horloge).
 * Grand écran : frise horizontale. Mobile : frise verticale compacte.
 */
export function Method() {
  return (
    <Section id="methode">
      <SectionHeader title={method.title} intro={method.intro} align="center" size="xl" />

      <ol data-reveal className="relative mt-14 grid gap-8 sm:mt-20 lg:grid-cols-5 lg:gap-6">
        {/* Frise horizontale (grand écran) : rail gris + ligne ambre */}
        <div
          aria-hidden="true"
          className="absolute top-7 left-7 hidden h-0.5 bg-line-strong lg:block"
          style={{ right: "calc((100% - 6rem) / 5 - 1.75rem)" }}
        />
        <div
          aria-hidden="true"
          className="reveal-draw bg-gradient-accent absolute top-7 left-7 hidden h-0.5 lg:block"
          style={{ right: "calc((100% - 6rem) / 5 - 1.75rem)", ...vars({ "--dur": `${LINE_MS}ms`, "--ease": "linear" }) }}
        />
        {/* Frise verticale (mobile) */}
        <div aria-hidden="true" className="absolute top-6 bottom-6 left-6 w-0.5 bg-line-strong lg:hidden" />
        <div
          aria-hidden="true"
          className="reveal-draw-y bg-gradient-accent absolute top-6 bottom-6 left-6 w-0.5 lg:hidden"
          style={vars({ "--dur": `${LINE_MS}ms`, "--ease": "linear" })}
        />

        {method.steps.map((step, i) => (
          <li key={step.title} className="relative flex gap-5 lg:block">
            <span
              className="reveal-light relative z-10 flex size-12 shrink-0 items-center justify-center rounded-full border-2 border-accent bg-surface-2 font-display text-lg font-bold text-accent-1 shadow-[0_0_30px_-4px_rgb(245_158_66/0.6)] lg:size-14 lg:text-xl"
              style={vars({ "--delay": stepDelay(i) })}
            >
              {i + 1}
            </span>
            <div className="pt-1.5 lg:pt-0">
              <h3 className="text-lg font-bold text-fg lg:mt-6 lg:text-xl">{step.title}</h3>
              <p className="mt-2 leading-relaxed text-fg-muted lg:mt-3">{step.text}</p>
              <code className="mt-3 inline-block rounded-md border border-line bg-black/40 px-2.5 py-1 font-mono text-xs whitespace-nowrap text-fg-muted lg:mt-5">
                {step.code}
              </code>
            </div>
          </li>
        ))}
      </ol>

      {/* Répartition 70 / 20 / 10 : la barre se remplit une fois, de gauche à droite */}
      <div data-reveal className="mt-16 border-t border-line pt-10 sm:mt-24 sm:pt-12">
        <div className="grid gap-8 lg:grid-cols-[1fr_2fr] lg:items-center lg:gap-10">
          <h3 className="text-xl font-bold text-fg sm:text-2xl">Comment ton temps est réparti</h3>
          <div>
            <div className="flex h-4 gap-1.5" role="img" aria-label="70 % de pratique, 20 % de théorie ciblée, 10 % d'auto-évaluation">
              <div className="reveal-draw bg-gradient-accent rounded-full" style={{ width: "70%", ...vars({ "--dur": "800ms" }) }} />
              <div className="reveal-draw rounded-full bg-accent-3/70" style={{ width: "20%", ...vars({ "--dur": "400ms", "--delay": "700ms" }) }} />
              <div className="reveal-draw rounded-full bg-success/70" style={{ width: "10%", ...vars({ "--dur": "300ms", "--delay": "1000ms" }) }} />
            </div>
            <ul className="mt-6 grid grid-cols-3 gap-4 sm:gap-6">
              {method.split.map((part, i) => (
                <li key={part.label}>
                  <p className="font-display text-3xl font-bold text-fg sm:text-4xl">
                    {part.value}
                    <span className={"ml-1 text-lg sm:text-xl " + ["text-accent", "text-accent-3", "text-success"][i]}>%</span>
                  </p>
                  <p className="mt-1 text-sm font-semibold text-fg sm:text-base">{part.label}</p>
                  <p className="hidden text-sm text-fg-muted sm:block">{part.detail}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
}
