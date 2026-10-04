"use client";

import Image from "next/image";
import { SITUATIONS, useJourney } from "@/components/journey";

export function Situation() {
  const { stage, setStage } = useJourney();

  return (
    <section id="where" className="scroll-mt-24 bg-paper px-5 py-8 sm:px-8 sm:py-10" aria-labelledby="where-heading">
      <div className="mx-auto grid max-w-6xl items-start gap-6 lg:grid-cols-[minmax(0,16rem)_minmax(0,1fr)]">
        <Image
          src="/photos/couple-kitchen.jpg"
          alt="A couple laughing together while making tea at home."
          width={1200}
          height={900}
          className="h-56 w-full rounded-[1.5rem] object-cover lg:h-full lg:max-h-80"
        />
        <div>
        <h2 id="where-heading" className="font-serif text-3xl font-medium leading-tight tracking-tight text-ink sm:text-4xl">
          Where is your family in the process?
        </h2>
        <p className="mt-2 text-base leading-relaxed text-ink-soft">
          An illustrative preview. Choosing a stage does not upload anything, and it does not decide what your policy covers.
        </p>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
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
                <span className="block text-lg font-semibold text-ink">{item.label}</span>
              </button>
            );
          })}
        </div>
        <div className="mt-3 rounded-[1.5rem] border border-line bg-ivory px-4 py-4" aria-live="polite">
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
      </div>
    </section>
  );
}
