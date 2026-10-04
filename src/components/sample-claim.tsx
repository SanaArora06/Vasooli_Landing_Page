"use client";

import { useState, type KeyboardEvent } from "react";

const STEPS = [
  {
    id: "together",
    label: "Bring it together",
    title: "Papers for one treatment, not a loose folder",
  },
  {
    id: "gap",
    label: "Find the gap",
    title: "One prescription is not in the folder yet",
  },
  {
    id: "next",
    label: "Know what happens next",
    title: "A draft can wait. A letter can be questioned.",
  },
] as const;

const MARKS = [
  { title: "Received", body: "A document is in hand. Here, the discharge summary and the pharmacy bill are." },
  { title: "A check, not a decision", body: "The pharmacy bill may belong with this treatment. That is not a promise it will be paid." },
  { title: "You approve", body: "Nothing is submitted until you confirm the facts and say it can go." },
  { title: "The insurer decides", body: "Coverage and payment are assessed by the insurer, under the policy." },
];

export function SampleClaim() {
  const [step, setStep] = useState(0);
  const [view, setView] = useState<"draft" | "letter">("draft");
  const active = STEPS[step] ?? STEPS[0];

  function onTabKey(event: KeyboardEvent<HTMLDivElement>) {
    if (event.key !== "ArrowRight" && event.key !== "ArrowLeft") return;
    event.preventDefault();
    const direction = event.key === "ArrowRight" ? 1 : -1;
    setStep((current) => (current + direction + STEPS.length) % STEPS.length);
  }

  return (
    <section id="sample" className="scroll-mt-24 px-5 py-14 sm:px-8 sm:py-20" aria-labelledby="sample-heading">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-coral">Sample only</p>
            <h2 id="sample-heading" className="mt-2 max-w-xl font-serif text-3xl font-medium leading-tight tracking-tight text-teal sm:text-4xl">
              From a folder of bills to a clear next step.
            </h2>
            <p className="mt-3 max-w-2xl text-base leading-relaxed text-ink">
              A daughter is helping her father after a planned hospital stay. The names are not real. Follow the folder, or jump to a step.
            </p>
          </div>
          <div className="flex gap-2">
            <button
              type="button"
              className="inline-flex min-h-11 items-center rounded-full border border-line bg-paper px-4 text-sm font-semibold text-teal hover:bg-sage"
              onClick={() => setStep(0)}
            >
              Replay
            </button>
            <button
              type="button"
              className="inline-flex min-h-11 items-center rounded-full bg-teal px-4 text-sm font-semibold text-paper hover:bg-teal-mid"
              onClick={() => setStep((current) => (current + 1) % STEPS.length)}
            >
              Next
            </button>
          </div>
        </div>

        <div role="tablist" aria-label="Sample claim steps" className="mt-6 grid gap-2 sm:grid-cols-3" onKeyDown={onTabKey}>
          {STEPS.map((item, index) => {
            const selected = index === step;
            return (
              <button
                key={item.id}
                id={`sample-tab-${item.id}`}
                type="button"
                role="tab"
                aria-selected={selected}
                aria-controls={`sample-panel-${item.id}`}
                tabIndex={selected ? 0 : -1}
                onClick={() => setStep(index)}
                className={`min-h-12 rounded-full px-4 py-2 text-sm font-semibold ${
                  selected ? "bg-teal text-paper" : "bg-paper text-teal hover:bg-sage"
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </div>

        <div
          role="tabpanel"
          id={`sample-panel-${active.id}`}
          aria-labelledby={`sample-tab-${active.id}`}
          className="mt-4 rounded-[1.75rem] border border-line bg-paper p-5 sm:p-6"
        >
          <h3 className="font-serif text-2xl text-teal">{active.title}</h3>
          {active.id === "together" ? (
            <ul className="mt-4 grid gap-2 sm:grid-cols-3">
              {[
                ["Before admission", "Diagnostic bill", "Received"],
                ["Hospital stay", "Discharge summary", "Received"],
                ["After discharge", "Pharmacy bill", "Received"],
              ].map(([when, doc, state]) => (
                <li key={when} className="rounded-2xl bg-ivory px-3 py-3">
                  <p className="text-xs font-semibold uppercase tracking-wide text-teal-mid">{when}</p>
                  <p className="mt-1 font-semibold text-teal">{doc}</p>
                  <p className="text-sm text-ink">{state}</p>
                </li>
              ))}
            </ul>
          ) : null}
          {active.id === "gap" ? (
            <div className="mt-4 max-w-2xl">
              <p className="text-base leading-relaxed text-ink">
                The pharmacy bill is here. The prescription from discharge is not. Without it, the link between those medicines and the treatment is incomplete.
              </p>
              <p className="mt-3 rounded-2xl bg-peach-soft px-4 py-3 text-base leading-relaxed text-ink">
                Please confirm whether you have that prescription, or ask the hospital for a copy. This is a request for you to check — not a decision that the bill will be reimbursed.
              </p>
            </div>
          ) : null}
          {active.id === "next" ? (
            <div className="mt-4">
              <div className="flex flex-wrap gap-2" role="group" aria-label="What the sample shows next">
                {(
                  [
                    ["draft", "Draft for your review"],
                    ["letter", "Settlement letter"],
                  ] as const
                ).map(([id, label]) => (
                  <button
                    key={id}
                    type="button"
                    aria-pressed={view === id}
                    onClick={() => setView(id)}
                    className={`min-h-10 rounded-full px-3 text-sm font-semibold ${
                      view === id ? "bg-sage text-teal" : "bg-ivory text-teal"
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </div>
              {view === "draft" ? (
                <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink">
                  A reimbursement draft is ready for the daughter to read with her father. It lists the bills in hand and the missing prescription. It is not submitted. She approves it only after the facts are right.
                </p>
              ) : (
                <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink">
                  A later letter pays part of the amount and states why the rest was not. She can accept that, or ask an Insurance Samadhan specialist to review the reason with the policy and the papers. The insurer still decides the payment.
                </p>
              )}
            </div>
          ) : null}
        </div>

        <ul className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
          {MARKS.map((mark) => (
            <li key={mark.title} className="rounded-2xl border border-line bg-ivory px-3 py-3">
              <p className="font-semibold text-teal">{mark.title}</p>
              <p className="mt-1 text-sm leading-relaxed text-ink">{mark.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
