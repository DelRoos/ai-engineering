import type { ComponentProps, ReactNode } from "react";
import { repoHref, repoIsExternal } from "@/content/site";

export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export function Container({ className, children }: { className?: string; children: ReactNode }) {
  return <div className={cn("mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8", className)}>{children}</div>;
}

/**
 * Section de page. `tone="raised"` donne un fond plus clair et des bordures,
 * pour alterner visiblement le rythme de la page.
 */
export function Section({
  id,
  tone = "base",
  className,
  children,
}: {
  id?: string;
  tone?: "base" | "raised";
  className?: string;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      className={cn("relative py-16 sm:py-24 lg:py-32", tone === "raised" && "border-y border-line bg-surface", className)}
    >
      <Container>{children}</Container>
    </section>
  );
}

/**
 * Titre de section. Deux tailles pour créer une vraie hiérarchie :
 * `xl` pour les sections clés, `md` pour les sections d'appui.
 */
export function SectionHeader({
  title,
  intro,
  align = "left",
  size = "md",
}: {
  title: ReactNode;
  intro?: string;
  align?: "left" | "center";
  size?: "md" | "xl";
}) {
  return (
    <div className={cn(size === "xl" ? "max-w-4xl" : "max-w-2xl", align === "center" && "mx-auto text-center")}>
      <h2
        className={cn(
          "font-bold tracking-[-0.03em] text-balance text-fg",
          size === "xl" ? "text-[2.5rem] leading-[1.02] sm:text-6xl lg:text-7xl" : "text-3xl leading-tight sm:text-4xl lg:text-5xl",
        )}
      >
        {title}
      </h2>
      {intro && (
        <p
          className={cn(
            "mt-5 leading-relaxed text-pretty text-fg-muted",
            size === "xl" ? "text-lg sm:text-xl" : "text-base sm:text-lg",
            align === "center" && "mx-auto max-w-2xl",
          )}
        >
          {intro}
        </p>
      )}
    </div>
  );
}

type ButtonProps = ComponentProps<"a"> & { variant?: "primary" | "secondary" };

export function ButtonLink({ variant = "primary", className, children, ...props }: ButtonProps) {
  return (
    <a
      className={cn(
        "group inline-flex h-12 items-center justify-center gap-2 rounded-full px-6 text-sm font-semibold transition-[transform,box-shadow,background-color,border-color,color,filter] duration-200 motion-safe:hover:-translate-y-0.5 active:translate-y-0",
        variant === "primary" &&
          "shine bg-gradient-accent text-[#1a0d05] shadow-[0_10px_30px_-12px_rgb(245_158_66/0.6)] hover:shadow-[0_16px_44px_-10px_rgb(245_158_66/0.85)] hover:brightness-110",
        variant === "secondary" &&
          "border border-line-strong text-fg hover:border-accent/60 hover:bg-accent/[0.08] hover:text-accent-1",
        className,
      )}
      {...props}
    >
      {children}
    </a>
  );
}

/** Lien vers le dépôt GitHub (s'ouvre dans un nouvel onglet). À n'utiliser que si repoIsExternal. */
export function RepoLink(props: Omit<ButtonProps, "href">) {
  return (
    <ButtonLink
      href={repoHref}
      {...(repoIsExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      {...props}
    />
  );
}

export function GithubIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
      <path d="M12 .5C5.65.5.5 5.65.5 12a11.5 11.5 0 0 0 7.86 10.92c.58.1.79-.25.79-.56v-2c-3.2.7-3.87-1.37-3.87-1.37-.53-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.68 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.41-2.7 5.38-5.26 5.67.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
    </svg>
  );
}

/** Logo : des marches qui montent vers un point, comme le parcours, des fondations au capstone. */
export function Logo({ className, id = "logo-g" }: { className?: string; id?: string }) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" className={className}>
      <defs>
        <linearGradient id={id} x1="0" y1="1" x2="1" y2="0">
          <stop offset="0" stopColor="#e2725b" />
          <stop offset="0.55" stopColor="#f59e42" />
          <stop offset="1" stopColor="#fde3a7" />
        </linearGradient>
      </defs>
      <path
        d="M4 27 H10.5 V20.5 H17 V14 H23.5 V9.5"
        fill="none"
        stroke={`url(#${id})`}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="23.5" cy="5" r="3" fill="#fde3a7" />
    </svg>
  );
}
