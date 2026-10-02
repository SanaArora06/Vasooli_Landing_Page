"use client";

import { useState } from "react";

const STAGES = [
  {
    id: "before",
    label: "Before hospitalisation",
    note: "The episode can open here, with the first diagnostic bill.",
    examples: ["Prescribed scans", "Diagnostic reports", "Bills"],
  },
  {
    id: "during",
    label: "Hospital stay",
    note: "Admission papers join the same episode. They do not replace what came before.",
    examples: ["Discharge summary", "Hospital documents"],
  },
  {
    id: "after",
    label: "Recovery",
    note: "Care after discharge can still belong with the episode, when the policy and evidence support it.",
    examples: ["Prescribed medicines", "Follow-up consultations", "Physiotherapy"],
  },
] as const;

export function PaperworkJourney() {
  const [active, setActive] = useState<(typeof STAGES)[number]["id"]>("before");

  return (
    <section className="scroll-mt-48 px-5 py-16 sm:px-8 sm:py-24" aria-labelledby="paperwork-heading">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-teal-mid">The paperwork around a stay</p>
          <h2 id="paperwork-heading" className="mt-3 font-serif text-3xl font-medium leading-tight tracking-tight text-teal sm:text-4xl">
            The hospital bill is only part of the paperwork.
          </h2>
          <p className="mt-4 text-lg text-ink">
            A reimbursement file often starts before admission and keeps growing after discharge. Vasooli keeps that whole episode together.
          </p>
        </div>

        <ol className="relative mt-10 grid gap-4 lg:grid-cols-3">
          <span className="pointer-events-none absolute left-0 right-0 top-8 hidden h-px bg-sage-deep lg:block" aria-hidden="true" />
          {STAGES.map((stage, index) => {
            const selected = active === stage.id;
            return (
              <li key={stage.id}>
                <button
                  type="button"
                  aria-pressed={selected}
                  onClick={() => setActive(stage.id)}
                  className={`flex h-full w-full flex-col rounded-3xl border bg-paper p-5 text-left shadow-[0_16px_40px_-32px_rgba(20,63,60,0.7)] ${
                    selected ? "border-teal" : "border-line"
                  }`}
                >
                  <span className="relative z-10 inline-flex h-8 w-8 items-center justify-center rounded-full bg-sage font-semibold text-teal">
                    {index + 1}
                    <span className="sr-only">.</span>
                  </span>
                  <span className="mt-4 font-serif text-2xl leading-tight text-teal">{stage.label}</span>
                  <span className="mt-3 text-sm font-medium text-ink-soft">{stage.note}</span>
                  <ul className="mt-4 space-y-2">
                    {stage.examples.map((example) => (
                      <li key={example} className="flex items-center gap-2 text-base text-ink">
                        <span className="h-1.5 w-1.5 rounded-full bg-teal" aria-hidden="true" />
                        {example}
                      </li>
                    ))}
                  </ul>
                </button>
              </li>
            );
          })}
        </ol>

        <div className="mt-6 rounded-3xl border border-line bg-sage/70 p-5 sm:p-6">
          <p className="max-w-3xl text-lg leading-relaxed text-ink">
            Some surrounding expenses may be reimbursable when your policy covers them and the required treatment link and evidence are established.
          </p>
          <p className="mt-3 text-base text-ink-soft">
            Vasooli does not decide whether a bill qualifies. There is no fixed window on this page, and not every bill is covered.
          </p>
        </div>
      </div>
    </section>
  );
}
