"use client";

import { useEffect } from "react";

/**
 * 1. Déclenche une seule fois les animations d'entrée : ajoute .is-in sur chaque
 *    [data-reveal] quand il apparaît à l'écran. L'animation se joue alors en entier,
 *    même si le visiteur s'arrête de défiler ou arrive par un lien du menu.
 * 2. Indique dans le menu la section en cours (aria-current).
 */
export function Reveal() {
  useEffect(() => {
    const root = document.documentElement;
    root.classList.add("reveal-ready");

    const reveal = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-in");
            reveal.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.3 },
    );
    document.querySelectorAll("[data-reveal]").forEach((el) => reveal.observe(el));

    const links = Array.from(document.querySelectorAll<HTMLAnchorElement>("a[data-nav]"));
    const sections = Array.from(new Set(links.map((l) => l.getAttribute("href"))))
      .filter((href): href is string => Boolean(href && /^#[\w-]+$/.test(href)))
      .map((href) => document.getElementById(href.slice(1)))
      .filter((s): s is HTMLElement => s !== null);
    const spy = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          for (const link of links) {
            if (link.getAttribute("href") === `#${entry.target.id}`) link.setAttribute("aria-current", "location");
            else link.removeAttribute("aria-current");
          }
        }
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    sections.forEach((s) => spy.observe(s));

    return () => {
      reveal.disconnect();
      spy.disconnect();
    };
  }, []);

  return null;
}
