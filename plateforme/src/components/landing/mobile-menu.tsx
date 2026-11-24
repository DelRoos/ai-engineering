"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

type Item = { label: string; href: string };

/** Menu de navigation sur mobile, avec l'action principale en bas. */
export function MobileMenu({ items, ctaHref = "/commencer" }: { items: Item[]; ctaHref?: string | null }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls="menu-mobile"
        aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
        className="flex size-10 items-center justify-center rounded-full border border-line-strong text-fg transition-colors duration-200 hover:border-accent/60"
      >
        {open ? <X className="size-5" aria-hidden="true" /> : <Menu className="size-5" aria-hidden="true" />}
      </button>

      {open && (
        <nav
          id="menu-mobile"
          aria-label="Navigation mobile"
          className="absolute inset-x-0 top-16 rounded-3xl border border-line-strong bg-surface-2 px-5 pt-2 pb-5 shadow-2xl"
        >
          <ul className="divide-y divide-line">
            {items.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block py-3.5 text-base font-medium text-fg aria-[current]:text-accent-1"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          {ctaHref && (
            <a
              href={ctaHref}
              onClick={() => setOpen(false)}
              className="bg-gradient-accent mt-4 flex h-12 items-center justify-center rounded-full text-sm font-semibold text-[#1a0d05]"
            >
              Par où commencer ?
            </a>
          )}
        </nav>
      )}
    </div>
  );
}
