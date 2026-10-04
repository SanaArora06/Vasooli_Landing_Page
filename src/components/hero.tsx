"use client";

import { EpisodeBoard } from "@/components/episode";

const buttonPrimary =
  "inline-flex min-h-12 items-center justify-center rounded-full bg-teal px-5 py-3 text-center text-base font-semibold text-paper hover:bg-teal-mid";
const buttonSecondary =
  "inline-flex min-h-12 items-center justify-center rounded-full border border-teal/20 bg-paper px-5 py-3 text-center text-base font-semibold text-teal hover:bg-sage";

export function Hero() {
  return (
    <section className="px-5 pb-6 pt-8 sm:px-8 sm:pt-12" aria-labelledby="hero-heading">
      <div className="mx-auto grid max-w-6xl items-center gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.95fr)]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-teal-mid">
            In the works, with Insurance Samadhan
          </p>
          <h1
            id="hero-heading"
            className="mt-3 max-w-xl font-serif text-[2.15rem] font-medium leading-[1.12] tracking-tight text-teal sm:text-5xl"
          >
            Focus on <span className="underline decoration-sun decoration-[3px] underline-offset-[6px]">recovery</span>.
            Let Vasooli organise the reimbursement.
          </h1>
          <p className="mt-4 max-w-xl text-lg leading-relaxed text-ink">
            Vasooli is being built inside Polifyx to follow the bills from the first scan to the settlement letter. You keep the decisions.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <a href="#how-it-works" className={`${buttonPrimary} sm:min-w-44`}>
              See how it works
            </a>
            <a href="#pilot" data-hero-cta className={`${buttonSecondary} sm:min-w-44`}>
              Get in early
            </a>
          </div>
        </div>
        <EpisodeBoard />
      </div>
    </section>
  );
}
