import type { CSSProperties } from "react";
import { Building2, FileText, Globe, Landmark, Laptop, Rocket, Sprout, type LucideIcon } from "lucide-react";
import { metier } from "@/content/landing";
import { Section, SectionHeader } from "@/components/ui";

const exampleIcons: LucideIcon[] = [Sprout, Landmark, FileText];
const jobIcons: Record<string, LucideIcon> = { globe: Globe, laptop: Laptop, rocket: Rocket, building: Building2 };

export function Metier() {
  return (
    <Section id="metier">
      <SectionHeader size="xl" title={metier.title} intro={metier.intro} />

      {/* Exemples concrets : trois colonnes séparées par de fines lignes, sans cartes */}
      <h3 className="mt-16 text-xl font-bold text-fg sm:mt-20 sm:text-2xl">{metier.examplesTitle}</h3>
      <ul data-reveal className="mt-6 grid border-y border-line md:grid-cols-3">
        {metier.examples.map((ex, i) => {
          const Icon = exampleIcons[i];
          return (
            <li
              key={ex.place}
              className={"reveal-rise py-6 md:px-8 md:py-10 " + (i > 0 ? "border-t border-line md:border-t-0 md:border-l" : "md:pl-0")}
              style={{ "--delay": `${i * 120}ms` } as CSSProperties}
            >
              <div className="flex items-center gap-3 md:block">
                <Icon className="size-7 shrink-0 text-accent md:size-8" strokeWidth={1.5} aria-hidden="true" />
                <p className="text-sm text-fg-subtle md:mt-6">{ex.place}</p>
              </div>
              <p className="font-display mt-3 text-xl leading-snug font-semibold text-fg md:mt-2 md:text-2xl">{ex.text}</p>
            </li>
          );
        })}
      </ul>

      {/* Débouchés + compétences */}
      <div className="mt-16 grid gap-12 sm:mt-20 lg:grid-cols-[1fr_2fr] lg:gap-20">
        <div>
          <h3 className="text-xl font-bold text-fg sm:text-2xl">{metier.jobsTitle}</h3>
          <ul className="mt-6 space-y-4">
            {metier.jobs.map((job) => {
              const Icon = jobIcons[job.icon];
              return (
                <li key={job.text} className="flex items-start gap-3 text-fg-muted sm:text-lg">
                  <Icon className="mt-0.5 size-5 shrink-0 text-accent" strokeWidth={1.75} aria-hidden="true" />
                  {job.text}
                </li>
              );
            })}
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-bold text-fg sm:text-2xl">{metier.skillsTitle}</h3>
          {/* Mobile : titres seuls, en 2 colonnes. Tablette et plus : titre + description. */}
          <ul className="mt-6 grid grid-cols-2 gap-x-6 gap-y-3 sm:gap-x-10 sm:gap-y-6">
            {metier.skills.map((skill) => (
              <li key={skill.title} className="border-t border-line pt-3 sm:pt-4">
                <p className="font-semibold text-fg">{skill.title}</p>
                <p className="mt-1 hidden text-sm leading-relaxed text-fg-muted sm:block">{skill.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
