import { Cpu, Globe, Wallet, WifiOff, type LucideIcon } from "lucide-react";
import { why } from "@/content/landing";
import { Section, SectionHeader } from "@/components/ui";

const icons: Record<string, LucideIcon> = {
  wallet: Wallet,
  cpu: Cpu,
  "wifi-off": WifiOff,
  globe: Globe,
};

/** Objection à gauche (en grand), réponse à droite. Des lignes, pas des cartes. */
export function Why() {
  return (
    <Section id="pourquoi" tone="raised">
      <SectionHeader title={why.title} intro={why.intro} />

      <ul className="mt-12 border-t border-line sm:mt-16">
        {why.items.map((item) => {
          const Icon = icons[item.icon];
          return (
            <li key={item.problem} className="grid gap-3 border-b border-line py-6 md:grid-cols-[1fr_1.1fr] md:gap-12 md:py-9">
              <h3 className="flex items-start gap-3.5 text-xl leading-snug font-semibold text-fg sm:text-2xl">
                <Icon className="mt-1 size-5 shrink-0 text-accent sm:size-6" strokeWidth={1.75} aria-hidden="true" />
                {item.problem}
              </h3>
              <p className="leading-relaxed text-fg-muted sm:text-lg md:pt-0.5">{item.answer}</p>
            </li>
          );
        })}
      </ul>

      {/* Configuration minimale, en un coup d'œil */}
      <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_3fr] lg:items-end">
        <div>
          <h3 className="text-xl font-bold text-fg">{why.specsTitle}</h3>
          <p className="mt-2 text-sm text-fg-subtle">{why.specsNote}</p>
        </div>
        <dl className="grid grid-cols-2 gap-x-6 gap-y-6 sm:grid-cols-3 lg:grid-cols-5">
          {why.specs.map((spec) => (
            <div key={spec.label} className="border-l-2 border-accent/60 pl-4">
              <dt className="text-sm text-fg-subtle">{spec.label}</dt>
              <dd className="font-display mt-1 text-xl font-semibold text-fg">{spec.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </Section>
  );
}
