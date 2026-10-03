"use client";

import { useId, useState } from "react";

const FAQS = [
  {
    question: "Is Vasooli part of Polifyx?",
    answer:
      "Vasooli is a proposed service inside Polifyx by Insurance Samadhan. This page introduces it and collects interest in a pilot. It is not a separate claims app, and it is not a live service.",
  },
  {
    question: "Can I start before hospitalisation?",
    answer:
      "Yes. The journey can begin with a diagnostic bill, before a hospital stay, and continue through recovery and settlement.",
  },
  {
    question: "Does every bill qualify?",
    answer:
      "No. Some surrounding expenses may be reimbursable when your policy covers them and the required treatment link and evidence are established. Your policy guides the assessment. Vasooli does not decide coverage.",
  },
  {
    question: "Can I help a family member?",
    answer:
      "A family member can help organise documents with the patient’s permission. Assisted onboarding is a proposed pilot option, not an established nationwide service.",
  },
  {
    question: "What will I need to approve?",
    answer:
      "You verify medical facts and factual contradictions, and you approve final submission. You also decide whether to accept a partial settlement, withdraw a claim, or appeal.",
  },
  {
    question: "What happens if a document is missing?",
    answer:
      "Vasooli names the gap and can chase it only on routes you have allowed. You can see what is present, what is missing, and why an action is proposed. A document is not treated as received until it actually is.",
  },
  {
    question: "What happens after a partial settlement?",
    answer:
      "Vasooli matches the settlement to the submitted claim and names the clause behind each deduction. Accepting that amount stays with you. In the proposed model, an Insurance Samadhan specialist can be brought in when there is uncertainty or a dispute.",
  },
  {
    question: "Will it message me all the time?",
    answer:
      "The proposed habit is quiet. You forward a bill and get one line back. Vasooli interrupts twice: a consent card before filing, and a one-time code at submission. It never asks for the insurer password. The only unprompted note is seven days before a filing window closes, if allowed money is still unclaimed. This page does not send those messages.",
  },
  {
    question: "What if we have two policies?",
    answer:
      "Both policies are laid next to the same episode. You approve which one is filed. Vasooli does not file both, and it does not choose for you.",
  },
  {
    question: "Is the pilot available now?",
    answer:
      "Not as a live service. This is a competition concept for a proposed pilot. The form records your interest. It does not enrol you, and it does not submit a claim.",
  },
  {
    question: "What will it cost?",
    answer:
      "Pilot scope and fees will be explained before participation. This page does not offer a free full-service product, and it does not quote a price.",
  },
];

export function Faqs() {
  const baseId = useId();
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faqs" className="scroll-mt-48 px-5 py-16 sm:px-8 sm:py-24" aria-labelledby="faq-heading">
      <div className="mx-auto max-w-3xl">
        <h2 id="faq-heading" className="font-serif text-3xl font-medium leading-tight tracking-tight text-teal sm:text-4xl">
          Questions families ask
        </h2>
        <div className="mt-8 divide-y divide-line rounded-[1.75rem] border border-line bg-paper">
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
                    <span aria-hidden="true" className="text-2xl leading-none text-peach">
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
