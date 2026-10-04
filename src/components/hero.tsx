"use client";

import { useState } from "react";
import { PaperSheet, type SheetKind } from "@/components/papers";

const DOCUMENTS: { kind: SheetKind; title: string; detail: string; tilt: string }[] = [
  { kind: "diagnostic", title: "Diagnostic bill", detail: "The scan before admission", tilt: "-rotate-6" },
  { kind: "prescription", title: "Prescription", detail: "What was advised", tilt: "rotate-3" },
  { kind: "discharge", title: "Discharge summary", detail: "The hospital stay, in one paper", tilt: "-rotate-2" },
  { kind: "pharmacy", title: "Pharmacy bill", detail: "Medicines after discharge", tilt: "rotate-6" },
  { kind: "letter", title: "Settlement letter", detail: "What was paid, and what was not", tilt: "-rotate-3" },
];

const buttonPrimary =
  "inline-flex min-h-12 items-center justify-center rounded-full bg-teal px-5 py-3 text-center text-base font-semibold text-paper hover:bg-teal-mid";
const buttonSecondary =
  "inline-flex min-h-12 items-center justify-center rounded-full border border-teal/25 bg-paper px-5 py-3 text-center text-base font-semibold text-teal hover:bg-sage";

export function Hero() {
  const [organised, setOrganised] = useState(false);

  return (
    <section className="px-5 pb-8 pt-8 sm:px-8 sm:pt-12" aria-labelledby="hero-heading">
      <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
        <div>
          <p className="text-sm font-semibold text-teal-mid">Vasooli · Inside Polifyx · With Insurance Samadhan</p>
          <h1 id="hero-heading" className="mt-3 max-w-xl font-serif text-[2.05rem] font-medium leading-[1.15] tracking-tight text-teal sm:text-5xl">
            Recovery is enough to manage. Your insurance paperwork shouldn’t be another burden.
          </h1>
          <p className="mt-4 max-w-xl text-lg leading-relaxed text-ink">
            From the first scan to the final settlement, Vasooli is being built to bring your bills together, flag missing documents and help follow up on reimbursement—with you approving the important decisions.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <a href="#pilot" data-hero-cta className={buttonPrimary}>
              Join the pilot waitlist
            </a>
            <a href="#sample" className={buttonSecondary}>
              Explore a sample claim
            </a>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-ink-soft">
            Currently in development. Registering interest does not start a claim.
          </p>
        </div>

        <div className="rounded-[1.75rem] border border-line bg-paper/80 p-4 sm:p-5">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <p className="text-sm font-semibold text-teal">{organised ? "One claim journey" : "A folder of loose papers"}</p>
            <button
              type="button"
              className="inline-flex min-h-11 items-center rounded-full bg-teal px-4 py-2 text-sm font-semibold text-paper hover:bg-teal-mid"
              aria-pressed={organised}
              onClick={() => setOrganised((value) => !value)}
            >
              {organised ? "Scatter them again" : "Organise into one claim journey"}
            </button>
          </div>
          <div
            className={`mt-4 ${
              organised
                ? "grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3"
                : "flex flex-wrap items-start justify-center gap-3"
            }`}
          >
            {DOCUMENTS.map((doc) => (
              <PaperSheet
                key={doc.kind}
                kind={doc.kind}
                title={doc.title}
                detail={doc.detail}
                className={`transition-transform duration-500 ${organised ? "rotate-0" : doc.tilt}`}
              />
            ))}
          </div>
          <p className="mt-4 text-xs leading-relaxed text-ink-soft">
            Sample papers only. Nothing here is uploaded, and arranging them does not mean they will be paid.
          </p>
        </div>
      </div>
    </section>
  );
}
