import { ArrowUp, CircleHelp } from "lucide-react";
import { openSource } from "@/content/landing";
import { repoIsExternal } from "@/content/site";
import { ButtonLink, Container, GithubIcon, Logo, RepoLink } from "@/components/ui";

export function OpenSource() {
  const labels = repoIsExternal ? openSource.withRepo : openSource.withoutRepo;

  return (
    <section id="open-source" className="relative py-24 sm:py-32">
      <Container>
        <div className="ring-gradient relative isolate overflow-hidden rounded-[2.5rem] bg-surface px-6 py-20 text-center sm:px-16 sm:py-28">
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
            <div className="bg-grid absolute inset-0 opacity-70" />
            <div className="absolute -bottom-64 left-1/2 h-[560px] w-[980px] -translate-x-1/2 bg-[radial-gradient(closest-side,rgb(245_158_66/0.28),transparent)]" />
          </div>

          <Logo className="mx-auto size-14" id="logo-g-cta" />
          <h2
            className="mx-auto mt-10 max-w-3xl font-bold tracking-[-0.04em] text-balance text-fg"
            style={{ fontSize: "clamp(2.5rem, 5.5vw, 4.75rem)", lineHeight: 1 }}
          >
            {openSource.title}
          </h2>
          <p className="mx-auto mt-7 max-w-xl text-lg leading-relaxed text-pretty text-fg-muted sm:text-xl">{openSource.text}</p>

          {!repoIsExternal && (
            <p className="mx-auto mt-8 flex max-w-md items-start gap-3 rounded-2xl border border-line-strong px-5 py-3.5 text-left text-sm leading-relaxed text-fg-muted">
              <span className="mt-1.5 size-2 shrink-0 rounded-full bg-accent" />
              {openSource.pendingRepo}
            </p>
          )}

          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            {repoIsExternal ? (
              <RepoLink className="h-13 px-7 text-base">
                <GithubIcon className="size-4" />
                {labels.primary}
              </RepoLink>
            ) : (
              <ButtonLink href="#parcours" className="h-13 px-7 text-base">
                <ArrowUp className="size-4" aria-hidden="true" />
                {labels.primary}
              </ButtonLink>
            )}
            <ButtonLink href={repoIsExternal ? "#parcours" : "#faq"} variant="secondary" className="h-13 px-7 text-base">
              {!repoIsExternal && <CircleHelp className="size-4" aria-hidden="true" />}
              {labels.secondary}
            </ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
