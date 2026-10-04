"use client";

import { useId, useState } from "react";

const FAQS = [
  {
    question: "Is Vasooli available today?",
    answer:
      "Not as a live service. Vasooli is being developed inside Polifyx, with Insurance Samadhan. Joining the waitlist does not start a claim, and this page cannot handle one today.",
  },
  {
    question: "Can I start before hospitalisation?",
    answer:
      "Yes. The claim journey can begin with a diagnostic bill, before admission, and continue through the stay, recovery and settlement.",
  },
  {
    question: "Does this work if the hospitalisation was cashless?",
    answer:
      "Cashless can settle the hospital bill and still leave scans, medicines and follow-up care to be claimed. Those need their own documents and a link to the treatment. Cover depends on the policy.",
  },
  {
    question: "Will every bill be reimbursed?",
    answer:
      "No. Vasooli can organise what may belong in a claim and explain a deduction. The insurer assesses coverage and payment. A payment is not guaranteed.",
  },
  {
    question: "Can I manage this for a parent or partner?",
    answer:
      "Yes, with the patient’s appropriate permission. Vasooli is being built for the person who collects the papers. It does not open someone else’s medical information to anyone who asks.",
  },
  {
    question: "What do I have to approve?",
    answer:
      "You verify the facts, authorise submission, and decide whether to accept a settlement or pursue a dispute. A claim is not sent without you.",
  },
  {
    question: "What happens if documents are missing?",
    answer:
      "Vasooli flags the gap and why it may matter, and asks you to confirm or provide the paper. A document counts as received only when it is actually in hand.",
  },
  {
    question: "Can you help with partial payment or rejection?",
    answer:
      "The letter can be read against the policy and the documents you have. An Insurance Samadhan specialist can help where a clause is uncertain or a deduction is disputed. That does not guarantee a reversal or a recovery.",
  },
  {
    question: "What if we have two policies?",
    answer:
      "Each policy is looked at on its own terms. Which one to claim on depends on both policies and the treatment. The same expense is not reimbursed twice.",
  },
  {
    question: "What will it cost?",
    answer:
      "The first check — one policy and one bill — is planned to be complimentary. Any later fee is shown before you agree. Partner-funded access will be named. This page does not quote a price.",
  },
];

export function Faqs() {
  const baseId = useId();
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faqs" className="scroll-mt-24 bg-ivory px-5 py-8 sm:px-8 sm:py-10" aria-labelledby="faq-heading">
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
