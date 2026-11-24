import { Facts } from "@/components/landing/facts";
import { Faq } from "@/components/landing/faq";
import { Footer } from "@/components/landing/footer";
import { Header } from "@/components/landing/header";
import { Hero } from "@/components/landing/hero";
import { Metier } from "@/components/landing/metier";
import { Method } from "@/components/landing/method";
import { OpenSource } from "@/components/landing/open-source";
import { Parcours } from "@/components/landing/parcours";
import { Projects } from "@/components/landing/projects";
import { Proof } from "@/components/landing/proof";
import { Why } from "@/components/landing/why";

/**
 * Ordre : promesse → chiffres → le métier (pourquoi le devenir) → pourquoi ici
 * → comment on apprend → le parcours → les projets → la preuve
 * → objections → action finale. Les fonds alternent (base / raised).
 */
export default function Home() {
  return (
    <>
      <a
        href="#contenu"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:rounded-full focus:bg-fg focus:px-4 focus:py-2 focus:text-sm focus:text-bg"
      >
        Aller au contenu
      </a>
      <Header />
      <main id="contenu" className="flex-1">
        <Hero />
        <Facts />
        <Metier />
        <Why />
        <Method />
        <Parcours />
        <Projects />
        <Proof />
        <Faq />
        <OpenSource />
      </main>
      <Footer />
    </>
  );
}
