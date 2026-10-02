"use client";

import { useId, useState } from "react";

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

  return (
    <div className="max-w-xl">
      <button
        type="button"
        className="inline-flex min-h-11 items-center rounded-full border border-line bg-paper px-4 py-2 text-sm font-semibold text-teal hover:bg-sage"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((value) => !value)}
      >
        Not sure where to start?
      </button>
      {open ? (
        <div id={panelId} role="region" aria-label="Not sure where to start?" className="mt-3 rounded-3xl border border-line bg-paper p-4">
          <p className="text-sm leading-relaxed text-ink-soft">A short guide to this page. Not a chat, and not a claims assistant.</p>
          <ul className="mt-3 space-y-2">
            {PATHS.map((path) => (
              <li key={path.href}>
                <a href={path.href} className="block rounded-2xl bg-ivory px-3 py-3 hover:bg-sage" onClick={() => setOpen(false)}>
                  <span className="block font-semibold text-teal">{path.title}</span>
                  <span className="mt-1 block text-sm leading-relaxed text-ink">{path.body}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
}
