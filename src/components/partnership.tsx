import { InsuranceSamadhanLogo, VasooliLockup } from "@/components/logos";

export function Partnership() {
  return (
    <section id="partnership" className="scroll-mt-24 px-5 py-12 sm:px-8 sm:py-16" aria-labelledby="partner-heading">
      <div className="mx-auto max-w-6xl rounded-[2rem] bg-teal px-5 py-8 text-paper sm:px-8 sm:py-10">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-sun">With Insurance Samadhan</p>
        <h2 id="partner-heading" className="mt-2 max-w-2xl font-serif text-3xl font-medium leading-tight tracking-tight sm:text-4xl">
          One team for the follow-up, and for the moment it needs a person.
        </h2>
        <div className="mt-6 flex flex-wrap items-center gap-4 rounded-3xl bg-white/10 px-4 py-4">
          <VasooliLockup tone="paper" />
          <span className="text-sm font-semibold uppercase tracking-[0.14em] text-sun" aria-hidden="true">
            with
          </span>
          <InsuranceSamadhanLogo tone="paper" />
        </div>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-peach-soft">
          Vasooli is being built inside Polifyx. It takes the everyday chase. Insurance Samadhan brings the specialists who already resolve a claim when the letter is not the end of it.
        </p>
      </div>
    </section>
  );
}
