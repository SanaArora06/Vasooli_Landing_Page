import { InsuranceSamadhanLogo } from "@/components/logos";

const POINTS = [
  {
    title: "A practice families already use",
    body: "Insurance Samadhan sits with people when a claim stalls. Vasooli is being built on that work.",
  },
  {
    title: "The window is watched from day one",
    body: "The episode starts at the diagnostic bill, so the filing deadline is not a surprise at the end.",
  },
  {
    title: "The last word stays yours",
    body: "You approve the send and any partial settlement. A specialist steps in when a clause needs a person.",
  },
];

export function Credibility() {
  return (
    <section id="credibility" className="scroll-mt-24 px-5 py-12 sm:px-8 sm:py-16" aria-labelledby="credibility-heading">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-teal-mid">Credibility</p>
            <h2 id="credibility-heading" className="mt-2 font-serif text-3xl font-medium tracking-tight text-teal sm:text-4xl">
              Built where the hard cases already go.
            </h2>
          </div>
          <InsuranceSamadhanLogo />
        </div>
        <ul className="mt-8 grid gap-3 md:grid-cols-3">
          {POINTS.map((point, index) => (
            <li key={point.title} className="rounded-[1.5rem] border border-line bg-paper p-5">
              <p className="font-serif text-3xl text-sun" aria-hidden="true">
                0{index + 1}
              </p>
              <h3 className="mt-2 font-serif text-2xl leading-tight text-teal">{point.title}</h3>
              <p className="mt-2 text-base leading-relaxed text-ink">{point.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
