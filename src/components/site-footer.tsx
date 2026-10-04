import { InsuranceSamadhanLogo, VasooliLockup } from "@/components/logos";

export function SiteFooter() {
  return (
    <footer className="border-t border-line bg-white px-5 pb-10 pt-8 text-ink sm:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div>
          <div className="flex flex-wrap items-center gap-4">
            <VasooliLockup />
            <InsuranceSamadhanLogo />
          </div>
          <p className="mt-4 max-w-xl font-serif text-lg text-ink">Automate the chase, not invent the truth.</p>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-ink-soft">
            Vasooli is being developed inside Polifyx, with Insurance Samadhan. It cannot handle a live claim from this page. Coverage and payment depend on the policy, the evidence and the insurer.
          </p>
        </div>
        <a href="#top" className="text-sm font-semibold text-teal-mid underline underline-offset-4">
          Back to top
        </a>
      </div>
    </footer>
  );
}
