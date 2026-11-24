import type { CSSProperties } from "react";
import { terminal } from "@/content/landing";

/**
 * Le moment orchestré du haut de page :
 * la commande se tape, les vérifications passent une à une, le badge s'allume.
 * Sans animation (option système ou navigateur ancien), tout est affiché d'emblée.
 */
export function Terminal() {
  const chars = terminal.command.length;
  const typeMs = 1100;
  const start = 500 + typeMs + 200;
  const step = 230;
  const resultAt = start + terminal.lines.length * step + 150;

  const v = (vars: Record<string, string | number>) => vars as CSSProperties;

  return (
    <figure className="anim-rise relative" style={v({ "--delay": "200ms" })}>
      <div aria-hidden="true" className="absolute -inset-8 -z-10 bg-[radial-gradient(closest-side,rgb(245_158_66/0.16),transparent)]" />
      <div className="ring-gradient overflow-hidden rounded-3xl bg-[#0c0c0f] shadow-[0_40px_100px_-30px_rgb(0_0_0/0.9)]">
        {/* Barre de titre */}
        <div className="flex items-center gap-2 border-b border-line px-5 py-3.5">
          <span className="size-3 rounded-full bg-[#ff5f57]/80" />
          <span className="size-3 rounded-full bg-[#febc2e]/80" />
          <span className="size-3 rounded-full bg-[#28c840]/80" />
          <span className="ml-3 truncate font-mono text-xs text-fg-subtle">{terminal.title}</span>
        </div>

        <div className="px-5 py-5 font-mono text-[13px] leading-6 sm:px-6 sm:text-sm sm:leading-7">
          {/* La commande se tape */}
          <p className="flex items-center text-fg">
            <span className="mr-2 text-accent">$</span>
            <span
              className="anim-type inline-block overflow-hidden whitespace-nowrap"
              style={v({ width: `${chars}ch`, "--chars": chars, "--type-duration": `${typeMs}ms`, "--delay": "500ms" })}
            >
              {terminal.command}
            </span>
          </p>

          {/* Les vérifications passent une à une */}
          <ul className="mt-3 space-y-0.5">
            {terminal.lines.map((line, i) => (
              <li
                key={line.label}
                className="anim-rise flex items-center justify-between gap-4"
                style={v({ "--delay": `${start + i * step}ms` })}
              >
                <span className="flex min-w-0 items-center gap-2.5 text-fg-muted">
                  <span className="text-success">✓</span>
                  <span className="truncate">{line.label}</span>
                </span>
                <span className="shrink-0 text-fg">{line.value}</span>
              </li>
            ))}
          </ul>

          {/* Le badge s'allume */}
          <p
            className="anim-pop mt-5 flex items-center gap-2.5 rounded-xl border border-success/30 bg-success/10 px-4 py-3 font-sans text-sm font-semibold text-success shadow-[0_0_40px_-10px_rgb(91_214_154/0.5)]"
            style={v({ "--delay": `${resultAt}ms` })}
          >
            <span className="size-2 rounded-full bg-success shadow-[0_0_12px_var(--success)]" />
            {terminal.result}
          </p>

        </div>
      </div>
      <figcaption className="mt-4 text-center text-sm text-fg-subtle">{terminal.caption}</figcaption>
    </figure>
  );
}
