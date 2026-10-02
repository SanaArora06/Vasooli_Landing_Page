import { TextBrand, VasooliWordmark } from "@/components/wordmark";

export function SiteFooter() {
  return (
    <footer className="ink-surface bg-teal px-5 pb-40 pt-12 text-paper sm:px-8 md:pb-16 md:pt-16">
      <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)]">
        <div>
          <VasooliWordmark symbolClassName="h-9 w-9" tone="paper" />
          <p className="mt-3 max-w-md text-sm leading-relaxed text-sage">
            A proposed service in Polifyx by Insurance Samadhan.
          </p>
          <p className="mt-3 text-sm font-semibold text-peach-soft">Competition concept · Proposed pilot</p>
          <p className="mt-2 text-sm text-sage">Prepared for The Ken’s agent competition.</p>
          <div className="mt-6 flex flex-col gap-1">
            <TextBrand className="text-paper">Polifyx</TextBrand>
            <TextBrand className="text-paper">Insurance Samadhan</TextBrand>
          </div>
        </div>
        <div className="md:text-right">
          <a href="#top" className="inline-flex text-sm font-semibold text-peach-soft underline underline-offset-4">
            Back to top
          </a>
        </div>
      </div>
      <div className="mx-auto mt-8 max-w-6xl border-t border-white/15 pt-6">
        <p className="max-w-3xl text-sm leading-relaxed text-sage">
          Vasooli supports reimbursement preparation and follow-up. Coverage and payment depend on the policy, supporting evidence and insurer assessment.
        </p>
        <p className="mt-3 max-w-3xl font-serif text-lg text-paper">
          Automate the chase. Keep consequential decisions with you.
        </p>
      </div>
    </footer>
  );
}
