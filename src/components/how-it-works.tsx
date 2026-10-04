"use client";

import { useEffect, useState } from "react";
import { MOMENTS, useEpisode } from "@/components/episode";

const STEPS = [
  {
    id: "open",
    title: "Open the episode",
    line: "Policy and first bill. Often a scan, before the hospital.",
    preview: "Terms are read. Nothing is treated as payable yet.",
  },
  {
    id: "papers",
    title: "Close the gaps",
    line: "Missing papers are chased only on routes you allow.",
    preview: "You can see what is in, and what is still out.",
  },
  {
    id: "approve",
    title: "You approve the send",
    line: "Facts and the final submission stay with you.",
    preview: "The packet waits. It is not filed until you say so.",
  },
  {
    id: "settle",
    title: "Read the settlement",
    line: "Each deduction is tied to a clause. You accept it, or ask for a person.",
    preview: "Insurance Samadhan can take a disputed cut from here.",
  },
] as const;

export function HowItWorks() {
  const { displayName, moment } = useEpisode();
  const scene = MOMENTS.find((item) => item.id === moment) ?? MOMENTS[1];
  const suggested = scene.id === "scan" ? 0 : scene.id === "letter" ? 3 : 1;
  const [override, setOverride] = useState<number | null>(null);
  const [playing, setPlaying] = useState(false);
  const step = override ?? suggested;

  useEffect(() => {
    if (!playing) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    const timer = window.setInterval(() => {
      setOverride((current) => ((current ?? suggested) + 1) % STEPS.length);
    }, 2600);
    return () => window.clearInterval(timer);
  }, [playing, suggested]);

  const active = STEPS[step] ?? STEPS[0];

  return (
    <section id="how-it-works" className="scroll-mt-24 bg-sky-soft px-5 py-12 sm:px-8 sm:py-16" aria-labelledby="how-heading">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-teal-mid">How it works</p>
            <h2 id="how-heading" className="mt-2 font-serif text-3xl font-medium tracking-tight text-teal sm:text-4xl">
              Four moves. You stay in the last ones.
            </h2>
          </div>
          <button
            type="button"
            className="inline-flex min-h-11 items-center rounded-full bg-teal px-4 py-2 text-sm font-semibold text-paper hover:bg-teal-mid"
            aria-pressed={playing}
            onClick={() => setPlaying((value) => !value)}
          >
            {playing ? "Pause" : "Play the episode"}
          </button>
        </div>

        <ol className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((item, index) => {
            const selected = index === step;
            return (
              <li key={item.id}>
                <button
                  type="button"
                  aria-pressed={selected}
                  onClick={() => {
                    setPlaying(false);
                    setOverride(index);
                  }}
                  className={`h-full w-full rounded-[1.4rem] border px-4 py-4 text-left ${
                    selected ? "border-teal bg-paper shadow-[0_16px_40px_-30px_rgba(14,77,115,0.7)]" : "border-line bg-paper/70 hover:bg-paper"
                  }`}
                >
                  <span className={`text-sm font-semibold ${selected ? "text-leaf" : "text-teal-mid"}`}>0{index + 1}</span>
                  <span className="mt-1 block font-serif text-xl leading-tight text-teal">{item.title}</span>
                  <span className="mt-2 block text-sm leading-relaxed text-ink">{item.line}</span>
                </button>
              </li>
            );
          })}
        </ol>

        <div key={active.id} className="motion-rise mt-4 rounded-[1.5rem] border border-line bg-paper p-5" aria-live="polite">
          <p className="text-sm font-semibold text-teal-mid">{displayName} episode · {active.title}</p>
          <p className="mt-2 font-serif text-2xl text-teal">{active.preview}</p>
          <p className="mt-2 text-sm text-ink-soft">Moves with the episode you set above. Still only a preview.</p>
        </div>
      </div>
    </section>
  );
}
