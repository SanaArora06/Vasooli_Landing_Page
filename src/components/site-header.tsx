"use client";

import { useEffect, useId, useState } from "react";
import { IconClose, IconMenu } from "@/components/icons";
import { VasooliWordmark } from "@/components/wordmark";

const LINKS = [
  { href: "#how-it-works", id: "how-it-works", label: "How it works" },
  { href: "#explore-a-claim", id: "explore-a-claim", label: "Explore a claim" },
  { href: "#your-control", id: "your-control", label: "Your control" },
  { href: "#faqs", id: "faqs", label: "FAQs" },
];

export function SiteHeader() {
  const menuId = useId();
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState<string | null>(null);

  useEffect(() => {
    const sections = LINKS.map((link) => document.getElementById(link.id)).filter(
      (section): section is HTMLElement => Boolean(section),
    );
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setCurrent(visible.target.id);
      },
      { rootMargin: "-20% 0px -60% 0px", threshold: [0.15, 0.4] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previous;
    };
  }, [open]);

  return (
    <header id="top" className="sticky top-0 z-50 border-b border-line/80 bg-ivory/92 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3 sm:px-8">
        <a href="#top" className="min-w-0 rounded-lg">
          <VasooliWordmark />
          <span className="mt-1.5 block max-w-[18rem] text-sm leading-snug text-ink-soft">
            A proposed service in Polifyx by Insurance Samadhan.
          </span>
          <span className="mt-2 inline-flex rounded-full border border-teal/15 bg-paper px-2.5 py-1 text-sm font-medium leading-none text-teal">
            Competition concept · Proposed pilot
          </span>
        </a>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              aria-current={current === link.id ? "location" : undefined}
              className={`rounded-full px-3 py-2 text-sm font-semibold text-teal hover:bg-sage ${
                current === link.id ? "bg-sage" : ""
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#pilot"
            className="ml-2 inline-flex min-h-11 items-center rounded-full bg-teal px-4 py-2 text-sm font-semibold text-paper hover:bg-teal-mid"
          >
            Join the pilot
          </a>
        </nav>

        <button
          type="button"
          className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-line bg-paper text-teal lg:hidden"
          aria-expanded={open}
          aria-controls={menuId}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <IconClose /> : <IconMenu />}
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
        </button>
      </div>

      {open ? (
        <nav id={menuId} aria-label="Primary" className="border-t border-line bg-ivory px-5 py-3 lg:hidden">
          <ul className="flex flex-col gap-1">
            {LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  aria-current={current === link.id ? "location" : undefined}
                  className="block rounded-2xl px-3 py-3 text-base font-semibold text-teal hover:bg-sage"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a
                href="#pilot"
                className="inline-flex w-full items-center justify-center rounded-full bg-teal px-4 py-3 text-base font-semibold text-paper"
                onClick={() => setOpen(false)}
              >
                Join the pilot
              </a>
            </li>
          </ul>
        </nav>
      ) : (
        <nav id={menuId} aria-label="Primary" hidden className="lg:hidden" />
      )}
    </header>
  );
}
