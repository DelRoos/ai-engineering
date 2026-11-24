"use client";

import { useEffect, useState } from "react";
import { cn } from "@/components/ui";

type Item = { id: string; label: string };

/**
 * Sommaire du chapitre (colonne de droite). La rubrique active est la dernière
 * dont le titre est passé au-dessus du premier quart de l'écran ; en bas de page,
 * c'est la dernière rubrique.
 */
export function Toc({ items, title = "Dans ce chapitre" }: { items: Item[]; title?: string }) {
  const [active, setActive] = useState<string | null>(items[0]?.id ?? null);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const line = window.innerHeight * 0.25;
      const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4;
      let current = items[0]?.id ?? null;
      for (const item of items) {
        const el = document.getElementById(item.id);
        if (el && el.getBoundingClientRect().top <= line) current = item.id;
      }
      if (atBottom && items.length > 0) current = items[items.length - 1].id;
      setActive(current);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [items]);

  if (items.length === 0) return null;

  return (
    <nav aria-label={title}>
      <p className="text-sm font-semibold text-fg">{title}</p>
      <ol className="mt-4 space-y-1 border-l border-line">
        {items.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              aria-current={active === item.id ? "location" : undefined}
              className={cn(
                "-ml-px block border-l-2 py-1.5 pl-4 text-sm leading-snug transition-colors duration-200",
                active === item.id
                  ? "border-accent font-medium text-fg"
                  : "border-transparent text-fg-subtle hover:border-line-strong hover:text-fg",
              )}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
