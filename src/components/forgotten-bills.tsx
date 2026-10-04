export function ForgottenBills() {
  return (
    <section id="check" className="scroll-mt-24 h-full rounded-[1.75rem] border border-line bg-ivory px-5 py-6 sm:px-6" aria-labelledby="check-heading">
      <div>
        <h2 id="check-heading" className="max-w-xl font-serif text-3xl font-medium leading-tight tracking-tight text-teal sm:text-4xl">
          Start with one policy. And one bill.
        </h2>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-ink">
          The proposed starting point is simple: add your policy and one diagnostic, pharmacy or recovery bill. Vasooli checks whether it may belong to a reimbursement claim, identifies missing evidence and explains the next step.
        </p>
        <p className="mt-3 max-w-2xl text-base leading-relaxed text-ink">
          The initial check is planned to be complimentary. Any fee for continued support will be shown before you agree. Partner-funded access will be identified clearly.
        </p>
        <a
          href="#pilot"
          className="mt-6 inline-flex min-h-12 items-center justify-center rounded-full bg-teal px-5 py-3 text-base font-semibold text-paper hover:bg-teal-mid"
        >
          Get notified when the check opens
        </a>
      </div>
    </section>
  );
}
