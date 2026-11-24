import { Plus } from "lucide-react";
import { faq } from "@/content/landing";
import { Section, SectionHeader } from "@/components/ui";

/** FAQ : s'ouvre en douceur (navigateurs récents), fonctionne sans JavaScript. */
export function Faq() {
  return (
    <Section id="faq">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.7fr] lg:gap-20">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionHeader title={faq.title} />
        </div>

        <div className="border-t border-line">
          {faq.items.map((item) => (
            <details key={item.q} className="group border-b border-line">
              <summary className="flex items-center justify-between gap-6 py-6 text-left text-lg font-semibold text-fg transition-colors duration-200 hover:text-accent-1">
                {item.q}
                <span className="flex size-9 shrink-0 items-center justify-center rounded-full border border-line-strong transition-colors duration-200 group-open:border-accent group-open:bg-accent/10">
                  <Plus className="faq-icon size-4" aria-hidden="true" />
                </span>
              </summary>
              <p className="pr-14 pb-7 text-lg leading-relaxed text-fg-muted">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </Section>
  );
}
