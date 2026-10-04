"use client";

import { SITUATIONS, useJourney } from "@/components/journey";

export function Situation() {
  const { stage, setStage } = useJourney();

  return (
    <section id="where" className="scroll-mt-24 bg-paper px-5 py-14 sm:px-8 sm:py-20" aria-labelledby="where-heading">
      <div className="mx-auto max-w-6xl">
        <h2 id="where-heading" className="max-w-xl font-serif text-3xl font-medium leading-tight tracking-tight text-teal sm:text-4xl">
          Where is your family in the process?
        </h2>
        <p className="mt-3 max-w-2xl text-base leading-relaxed text-ink-soft">
          An illustrative preview. Choosing a stage does not upload anything, and it does not decide what your policy covers.
        </p>
        <div className="mt-6 grid gap-3 md:grid-cols-2">
          {SITUATIONS.map((item) => {
            const selected = stage === item.id;
            return (
              <button
                key={item.id}
                type="button"
                aria-pressed={selected}
                onClick={() => setStage(item.id)}
                className={`rounded-[1.5rem] border px-4 py-4 text-left ${
                  selected ? "border-teal bg-sage" : "border-line bg-ivory hover:bg-sage/60"
                }`}
              >
                <span className="block text-lg font-semibold text-teal">{item.label}</span>
              </button>
            );
          })}
        </div>
        <div className="mt-4 rounded-[1.5rem] border border-line bg-ivory px-4 py-4" aria-live="polite">
          {stage ? (
            <>
              <p className="text-base leading-relaxed text-ink">{SITUATIONS.find((item) => item.id === stage)?.help}</p>
              <a
                href="#pilot"
                className="mt-4 inline-flex min-h-12 items-center justify-center rounded-full bg-teal px-5 py-3 text-base font-semibold text-paper hover:bg-teal-mid"
              >
                Join the pilot waitlist
              </a>
            </>
          ) : (
            <p className="text-base text-ink-soft">Choose the line that sounds most like your week.</p>
          )}
        </div>
      </div>
    </section>
  );
}
