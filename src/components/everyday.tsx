const THREAD = [
  {
    from: "You",
    body: "Diagnostic bill, ₹4,800. Knee scan.",
  },
  {
    from: "Vasooli",
    body: "Noted against the knee episode. Not filed. This policy’s window is still open.",
  },
  {
    from: "Vasooli",
    body: "Consent card: the packet is ready for your review. Nothing is submitted until you approve it.",
  },
  {
    from: "Vasooli",
    body: "One note you did not ask for: seven days left on this filing window. Allowed bills are still unclaimed.",
  },
];

const HABITS = [
  {
    title: "Set up once",
    body: "You connect a scoped inbox and a messaging number, then set the three limits. After that, the household does not reopen the policy document for every new bill.",
  },
  {
    title: "Two interruptions",
    body: "A consent card before filing, and a one-time code at submission. Vasooli never asks for the insurer password.",
  },
  {
    title: "One unprompted note",
    body: "Seven days before a filing window closes, if money the policy allows is still unclaimed, you get a single message. It does not keep writing through the week.",
  },
];

export function Everyday() {
  return (
    <section id="everyday" className="scroll-mt-48 px-5 py-16 sm:px-8 sm:py-24" aria-labelledby="everyday-heading">
      <div className="mx-auto max-w-6xl">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-teal-mid">Everyday use</p>
        <h2 id="everyday-heading" className="mt-3 max-w-3xl font-serif text-3xl font-medium leading-tight tracking-tight text-teal sm:text-4xl">
          Forward a bill. Get one line back.
        </h2>
        <p className="mt-4 max-w-3xl text-lg leading-relaxed text-ink">
          In the proposed pilot, the daily contact is a message thread the household already uses. This page does not place calls or send messages. The thread below is an illustration.
        </p>
        <div className="mt-10 grid items-start gap-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
          <div className="rounded-[1.75rem] border border-line bg-paper p-5 shadow-[0_18px_40px_-30px_rgba(20,63,60,0.65)]">
            <div className="flex items-center justify-between gap-3">
              <p className="font-semibold text-teal">Household thread</p>
              <p className="rounded-full bg-sage px-2.5 py-1 text-xs font-semibold uppercase tracking-wide text-teal">
                Illustrative
              </p>
            </div>
            <ol className="mt-4 space-y-3">
              {THREAD.map((line) => (
                <li
                  key={line.body}
                  className={
                    line.from === "You"
                      ? "ml-8 rounded-2xl rounded-br-md bg-sage px-3 py-3 text-sm text-ink"
                      : "mr-8 rounded-2xl rounded-bl-md border border-line bg-ivory px-3 py-3 text-sm text-ink"
                  }
                >
                  <p className="text-xs font-semibold uppercase tracking-wide text-teal">{line.from}</p>
                  <p className="mt-1 leading-relaxed">{line.body}</p>
                </li>
              ))}
            </ol>
            <p className="mt-4 text-sm text-ink-soft">No request was sent. This preview stays on this page.</p>
          </div>
          <div>
            <ul className="space-y-3">
              {HABITS.map((habit) => (
                <li key={habit.title} className="rounded-3xl border border-line bg-paper px-4 py-4">
                  <h3 className="font-serif text-xl text-teal">{habit.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink">{habit.body}</p>
                </li>
              ))}
            </ul>
            <div className="mt-3 rounded-3xl border border-line bg-ivory px-4 py-4">
              <h3 className="font-serif text-xl text-teal">A ledger, one line per claim</h3>
              <ul className="mt-3 space-y-2 text-sm text-ink">
                <li className="rounded-2xl bg-paper px-3 py-3">Knee episode — packet ready, waiting for your approval.</li>
                <li className="rounded-2xl bg-paper px-3 py-3">No second claim is open.</li>
              </ul>
              <p className="mt-3 text-sm leading-relaxed text-ink">
                If the household holds two policies, both are laid next to the episode. You approve which one is filed. Vasooli does not file both, and it does not choose for you.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
