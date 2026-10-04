const GROUPS = [
  {
    title: "Vasooli helps",
    items: [
      "Organise the bills for one treatment",
      "Flag missing evidence",
      "Prepare claim documents",
      "Track follow-up you have authorised",
    ],
  },
  {
    title: "You approve",
    items: [
      "Verify the facts",
      "Authorise submission",
      "Accept a settlement, or pursue a dispute",
    ],
  },
  {
    title: "Insurance Samadhan specialists help",
    items: [
      "Uncertain policy clauses",
      "Documents that do not agree",
      "Deductions that need a person",
    ],
  },
];

export function Responsibility() {
  return (
    <section id="decisions" className="scroll-mt-24 bg-ivory px-5 py-8 sm:px-8 sm:py-10" aria-labelledby="decisions-heading">
      <div className="mx-auto max-w-6xl">
        <p className="font-serif text-xl text-teal sm:text-2xl">Automate the chase, not invent the truth.</p>
        <h2 id="decisions-heading" className="mt-3 max-w-2xl font-serif text-3xl font-medium leading-tight tracking-tight text-teal sm:text-4xl">
          Vasooli handles the follow-up. You keep the decisions.
        </h2>
        <div className="mt-5 grid gap-3 lg:grid-cols-3">
          {GROUPS.map((group) => (
            <article key={group.title} className="rounded-[1.5rem] border border-line bg-paper p-5">
              <h3 className="font-serif text-2xl text-teal">{group.title}</h3>
              <ul className="mt-3 space-y-2">
                {group.items.map((item) => (
                  <li key={item} className="rounded-2xl bg-ivory px-3 py-2 text-ink">
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink">
          The insurer determines coverage and payment under the policy.
        </p>
      </div>
    </section>
  );
}
