import { InsuranceSamadhanLogo, VasooliLockup } from "@/components/logos";

export function Credibility() {
  return (
    <section id="credibility" className="scroll-mt-24 h-full" aria-labelledby="credibility-heading">
      <div className="h-full rounded-[1.75rem] border border-line bg-ivory px-5 py-6 sm:px-6">
        <h2 id="credibility-heading" className="font-serif text-3xl font-medium tracking-tight text-teal sm:text-4xl">
          Built with Insurance Samadhan.
        </h2>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-ink">
          Vasooli brings document organisation and reimbursement follow-up into Polifyx, with Insurance Samadhan specialists available when a case needs human review.
        </p>
        <div className="mt-6 flex flex-wrap items-center gap-5">
          <VasooliLockup />
          <InsuranceSamadhanLogo />
        </div>
      </div>
    </section>
  );
}
