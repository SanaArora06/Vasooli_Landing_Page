"use client";

import Image from "next/image";
import { useState } from "react";
import { PaperSheet, type SheetKind } from "@/components/papers";

const DOCUMENTS: { kind: SheetKind; title: string; detail: string; tilt: string }[] = [
  { kind: "diagnostic", title: "Diagnostic bill", detail: "The scan before admission", tilt: "-rotate-6" },
  { kind: "prescription", title: "Prescription", detail: "What was advised", tilt: "rotate-3" },
  { kind: "discharge", title: "Discharge summary", detail: "The hospital stay", tilt: "-rotate-2" },
  { kind: "pharmacy", title: "Pharmacy bill", detail: "Medicines after discharge", tilt: "rotate-6" },
  { kind: "letter", title: "Settlement letter", detail: "What was paid", tilt: "-rotate-3" },
];

const buttonPrimary =
  "inline-flex min-h-12 items-center justify-center rounded-full bg-teal px-5 py-3 text-center text-base font-semibold text-paper";
const buttonSecondary =
  "inline-flex min-h-12 items-center justify-center rounded-full border border-line bg-paper px-5 py-3 text-center text-base font-semibold text-ink hover:bg-ivory";

export function Hero() {
  const [organised, setOrganised] = useState(false);

  return (
    <section className="px-5 pb-6 pt-8 sm:px-8 sm:pt-12" aria-labelledby="hero-heading">
      <div className="mx-auto grid max-w-6xl items-center gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
        <div>
          <p className="text-sm font-semibold text-teal-mid">Vasooli · Inside Polifyx · With Insurance Samadhan</p>
          <h1 id="hero-heading" className="mt-3 font-serif text-5xl font-medium leading-[1.05] tracking-tight text-ink sm:text-6xl">
            Recovery is enough.
          </h1>
          <p className="mt-4 max-w-md text-lg leading-relaxed text-ink">
            Vasooli gathers the bills around a hospital stay. You approve what is sent.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <a href="#pilot" data-hero-cta className={buttonPrimary}>
              Join the pilot waitlist
            </a>
            <a href="#sample" className={buttonSecondary}>
              Explore a sample claim
            </a>
          </div>
          <p className="mt-4 text-sm text-ink-soft">In development. Joining the waitlist does not start a claim.</p>
        </div>
        <figure>
          <Image
            src="/photos/family-home.jpg"
            alt="A family laughing together on a sofa at home."
            width={1200}
            height={900}
            priority
            className="h-auto w-full rounded-[1.75rem] object-cover"
          />
        </figure>
      </div>

      <div className="mx-auto mt-8 max-w-6xl rounded-[1.75rem] border border-line bg-paper p-4 sm:p-5">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <p className="text-sm font-semibold text-ink">{organised ? "One claim journey" : "A folder of loose papers"}</p>
          <button
            type="button"
            className="inline-flex min-h-11 items-center rounded-full bg-teal px-4 py-2 text-sm font-semibold"
            aria-pressed={organised}
            onClick={() => setOrganised((value) => !value)}
          >
            {organised ? "Scatter them again" : "Organise into one claim journey"}
          </button>
        </div>
        <div
          className={`mt-4 ${
            organised ? "grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5" : "flex flex-wrap items-start justify-center gap-3"
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
        <p className="mt-3 text-xs text-ink-soft">Sample papers only. Arranging them does not mean they will be paid.</p>
      </div>
    </section>
  );
}
