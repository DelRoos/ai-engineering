import type { CSSProperties } from "react";
import { facts } from "@/content/landing";
import { Container, cn } from "@/components/ui";

/** Chiffres clés : ils comptent jusqu'à leur valeur, une fois, quand ils entrent à l'écran. */
export function Facts() {
  return (
    <section aria-label="Chiffres clés" className="border-y border-line bg-surface">
      <Container>
        <ul data-reveal className="grid grid-cols-2 lg:grid-cols-4">
          {facts.map((fact, i) => {
            const n = Number(fact.value);
            return (
              <li
                key={fact.unit}
                className={cn(
                  "py-10 sm:py-14",
                  // Le contenu de la première colonne s'aligne sur le bord du reste de la page.
                  i % 2 === 0 ? "pr-4 sm:pr-8" : "border-l border-line pl-5 sm:pl-8",
                  i === 2 && "border-t border-line lg:border-t-0 lg:border-l lg:pl-8",
                  i === 3 && "border-t border-line lg:border-t-0",
                )}
              >
                <p className="font-display flex items-baseline gap-2 leading-none">
                  <span className="sr-only">{fact.value}</span>
                  <span
                    aria-hidden="true"
                    className={(n > 0 ? "count " : "") + "text-5xl font-bold tracking-[-0.04em] text-fg tabular-nums sm:text-7xl"}
                    style={{ "--to": n, "--delay": `${i * 120}ms` } as CSSProperties}
                  >
                    {n > 0 ? null : fact.value}
                  </span>
                  <span className="text-xl font-semibold text-accent sm:text-2xl">{fact.unit}</span>
                </p>
                <p className="mt-4 max-w-[16rem] text-sm leading-relaxed text-fg-muted sm:text-base">{fact.label}</p>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
