"use client";

import { useEffect, useId, useState } from "react";

const PATHS = [
  {
    href: "#how-it-works",
    title: "I’m the patient",
    body: "See how an episode moves from the first bill to a settlement, and which decisions stay with you.",
  },
  {
    href: "#family",
    title: "I’m helping family",
    body: "A family member can help organise documents, with the patient’s permission.",
  },
  {
    href: "#pilot",
    title: "I work with a hospital, employer or TPA",
    body: "Leave interest for the pilot. This does not create a partnership or a live integration.",
  },
];

export function StartGuide() {
  const panelId = useId();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <div className="fixed bottom-28 left-3 z-40 md:bottom-6 md:left-6">
      <div className="relative">
        {open ? (
          <div
            id={panelId}
            role="region"
            aria-label="Not sure where to start?"
            className="absolute bottom-full left-0 mb-2 w-[min(22rem,calc(100vw-1.5rem))] rounded-3xl border border-line bg-paper p-4 shadow-[0_18px_40px_-24px_rgba(20,63,60,0.45)]"
          >
            <p className="text-sm font-medium text-ink-soft">A short guide to this page. Not a chat, and not a claims assistant.</p>
            <ul className="mt-3 space-y-2">
              {PATHS.map((path) => (
                <li key={path.href}>
                  <a
                    href={path.href}
                    className="block rounded-2xl bg-ivory px-3 py-3 hover:bg-sage"
                    onClick={() => setOpen(false)}
                  >
                    <span className="block font-semibold text-teal">{path.title}</span>
                    <span className="mt-1 block text-sm leading-relaxed text-ink">{path.body}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ) : null}
        <button
          type="button"
          className="inline-flex min-h-11 items-center rounded-full border border-line bg-paper px-4 py-2 text-sm font-semibold text-teal shadow-[0_10px_24px_-18px_rgba(20,63,60,0.8)] hover:bg-sage"
          aria-expanded={open}
          aria-controls={panelId}
          onClick={() => setOpen((value) => !value)}
        >
          Not sure where to start?
        </button>
      </div>
    </div>
  );
}
