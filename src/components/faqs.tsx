"use client";

import { useId, useState } from "react";

const FAQS = [
  {
    question: "Can I use Vasooli today?",
    answer:
      "Vasooli is in the works inside Polifyx by Insurance Samadhan. The follow-up on this page is what is being built now. Leave your details if you want a note when a household can start. That note does not file a claim.",
  },
  {
    question: "Can we begin before the hospital stay?",
    answer:
      "Yes. The episode is meant to open on the diagnostic bill, before admission, and stay with you through recovery and the settlement letter.",
  },
  {
    question: "Will every bill be paid?",
    answer:
      "No. Vasooli pursues what that policy allows, and shows the clause when something is not allowed. The insurer still assesses the claim. A payment is not promised.",
  },
  {
    question: "Can I do this for a parent?",
    answer:
      "Yes. You name who Vasooli may act for, with the patient’s permission. That list sits with two other limits you set: a rupee ceiling, and how far a follow-up may go.",
  },
  {
    question: "What do I still decide?",
    answer:
      "Any fact about the patient’s condition, sending the claim, accepting a partial settlement, and withdrawing it. An appeal goes in only if you ask.",
  },
  {
    question: "What if a paper is missing?",
    answer:
      "You see the gap. Vasooli chases it only on the routes you allowed. A document counts as received only when it actually arrives.",
  },
  {
    question: "A smaller amount came in. Then what?",
    answer:
      "Vasooli lines the settlement up against the claim and names the clause behind each deduction. You accept it, or ask an Insurance Samadhan specialist to take it further.",
  },
  {
    question: "Will my phone keep buzzing?",
    answer:
      "No. The habit being built is one line back when you forward a bill. It asks twice: a consent card before filing, and a one-time code at submission. It never asks for the insurer password. The only extra note is seven days before a filing window closes, if allowed money is still unclaimed.",
  },
  {
    question: "We hold two policies.",
    answer:
      "Both sit beside the same episode. You choose which one is filed. Vasooli does not file both, and it does not choose for you.",
  },
  {
    question: "What will it cost?",
    answer:
      "The fee will be clear before anyone joins. This page does not quote a price, and it does not offer the full service for free.",
  },
];

export function Faqs() {
  const baseId = useId();
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faqs" className="scroll-mt-24 px-5 py-12 sm:px-8 sm:py-16" aria-labelledby="faq-heading">
      <div className="mx-auto max-w-3xl">
        <h2 id="faq-heading" className="font-serif text-3xl font-medium leading-tight tracking-tight text-teal sm:text-4xl">
          Questions families ask
        </h2>
        <div className="mt-6 divide-y divide-line rounded-[1.75rem] border border-line bg-paper">
          {FAQS.map((item, index) => {
            const expanded = open === index;
            const panelId = `${baseId}-panel-${index}`;
            const buttonId = `${baseId}-button-${index}`;
            return (
              <div key={item.question} className="px-4 py-1 sm:px-6">
                <h3>
                  <button
                    id={buttonId}
                    type="button"
                    className="flex w-full items-center justify-between gap-4 py-4 text-left text-lg font-semibold text-teal"
                    aria-expanded={expanded}
                    aria-controls={panelId}
                    onClick={() => setOpen(expanded ? null : index)}
                  >
                    <span>{item.question}</span>
                    <span aria-hidden="true" className="text-2xl leading-none text-coral">
                      {expanded ? "–" : "+"}
                    </span>
                  </button>
                </h3>
                <div id={panelId} role="region" aria-labelledby={buttonId} hidden={!expanded}>
                  <p className="pb-4 text-base leading-relaxed text-ink">{item.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
