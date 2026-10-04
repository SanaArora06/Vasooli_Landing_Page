"use client";

import { useState } from "react";

const STAGES = [
  {
    id: "before",
    label: "Before admission",
    when: "Consultations, scans and tests.",
    example: "A diagnostic centre bill for a scan ordered before the hospital stay.",
    evidence: "The advice that connects that scan to the treatment, and the dated bill.",
  },
  {
    id: "during",
    label: "During hospitalisation",
    when: "Cashless approval and hospital documents.",
    example: "The hospital bill may already be on cashless. The discharge summary still matters for everything around it.",
    evidence: "Discharge summary, the hospital papers, and the cashless approval if there is one.",
  },
  {
    id: "after",
    label: "After discharge",
    when: "Prescribed medicines, follow-up tests and recovery care.",
    example: "A pharmacy bill for medicines named when the patient went home.",
    evidence: "The prescription, the pharmacy bill, and a clear link to the same treatment.",
  },
  {
    id: "settlement",
    label: "At settlement",
    when: "Payment, deductions and questions.",
    example: "A letter that pays part of the claim and states a reason for the rest.",
    evidence: "The letter itself, the policy wording it relies on, and the documents already sent.",
  },
] as const;

export function Insight() {
  const [current, setCurrent] = useState<(typeof STAGES)[number]["id"]>("before");
  const stage = STAGES.find((item) => item.id === current) ?? STAGES[0];

  return (
    <section id="around" className="scroll-mt-24 bg-ivory px-5 py-8 sm:px-8 sm:py-10" aria-labelledby="insight-heading">
      <div className="mx-auto grid max-w-6xl items-start gap-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
        <div>
          <h2 id="insight-heading" className="max-w-xl font-serif text-3xl font-medium leading-tight tracking-tight text-teal sm:text-4xl">
            The hospital bill is settled. What about everything around it?
          </h2>
          <p className="mt-4 max-w-xl text-lg leading-relaxed text-ink">
            Some expenses before and after hospitalisation may be reimbursable under your policy. They still need the right documents, a connection to the treatment and submission within the applicable deadlines.
          </p>
          <ol className="mt-6 grid gap-2 sm:grid-cols-2">
            {STAGES.map((item, index) => {
              const selected = item.id === current;
              return (
                <li key={item.id}>
                  <button
                    type="button"
                    aria-pressed={selected}
                    onClick={() => setCurrent(item.id)}
                    className={`h-full w-full rounded-3xl border px-4 py-4 text-left ${
                      selected ? "border-teal bg-paper" : "border-line bg-paper/60 hover:bg-paper"
                    }`}
                  >
                    <span className="text-sm font-semibold text-coral">0{index + 1}</span>
                    <span className="mt-1 block font-semibold text-teal">{item.label}</span>
                    <span className="mt-1 block text-sm leading-relaxed text-ink">{item.when}</span>
                  </button>
                </li>
              );
            })}
          </ol>
        </div>
        <div className="rounded-[1.75rem] border border-line bg-paper p-5 sm:p-6" aria-live="polite">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-teal-mid">{stage.label}</p>
          <h3 className="mt-2 font-serif text-2xl text-teal">An example, not a promise of cover</h3>
          <p className="mt-3 text-base leading-relaxed text-ink">{stage.example}</p>
          <p className="mt-3 text-base leading-relaxed text-ink">
            <span className="font-semibold text-teal">Worth checking: </span>
            {stage.evidence}
          </p>
          <p className="mt-5 rounded-2xl bg-peach-soft px-4 py-3 text-sm leading-relaxed text-ink">
            Eligibility, time limits and payment depend on your policy and treatment. Every expense is not automatically covered.
          </p>
        </div>
      </div>
    </section>
  );
}
