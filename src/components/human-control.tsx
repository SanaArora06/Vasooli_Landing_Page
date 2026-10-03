import { SpecialistScene } from "@/components/illustrations";
import { IconCheck, IconPerson } from "@/components/icons";

const CAN_HELP = [
  "Hold every bill against one episode, starting from the diagnostic bill",
  "Identify what is missing, and chase it only on routes you have allowed",
  "Prepare a claim packet in the shape the insurer asks for",
  "Follow up, and escalate only up to the rung you set",
  "Match a settlement to the claim, and name the clause behind each deduction",
];

const YOU_DECIDE = [
  "Any statement of fact about the patient’s condition",
  "Final submission",
  "Accepting a partial settlement",
  "Withdrawing a claim",
  "Filing an appeal",
];

const LIMITS = [
  { title: "Rupee ceiling", body: "How much Vasooli may pursue on a claim." },
  { title: "Escalation ceiling", body: "How far up a named ladder a follow-up may climb." },
  { title: "Family members", body: "Who it may act for, with the patient’s permission." },
];

export function HumanControl() {
  return (
    <section id="your-control" className="scroll-mt-48 bg-paper px-5 py-16 sm:px-8 sm:py-24" aria-labelledby="control-heading">
      <div className="mx-auto max-w-6xl">
        <p className="font-serif text-2xl leading-snug text-teal sm:text-3xl">
          Automate the chase. Keep consequential decisions with you.
        </p>
        <h2 id="control-heading" className="mt-4 max-w-3xl font-serif text-3xl font-medium leading-tight tracking-tight text-teal sm:text-4xl">
          It takes care of the follow-up. You keep the important decisions.
        </h2>
        <p className="mt-4 max-w-3xl text-lg leading-relaxed text-ink">
          The outcome this concept is accountable for: every rupee the policy actually allows is pursued before that policy’s filing window closes, or you are shown the clause that stopped it. The insurer still assesses the claim. Vasooli does not promise the payment.
        </p>
        <div className="mt-10 grid gap-4 lg:grid-cols-2">
          <article className="rounded-[1.75rem] border border-line bg-sage/70 p-5 sm:p-6">
            <h3 className="inline-flex items-center gap-2 font-serif text-2xl text-teal">
              <IconCheck className="h-6 w-6" /> Vasooli can help
            </h3>
            <ul className="mt-4 space-y-3">
              {CAN_HELP.map((item) => (
                <li key={item} className="flex items-start gap-3 rounded-2xl bg-paper/80 px-3 py-3 text-ink">
                  <IconCheck className="mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
          <article className="rounded-[1.75rem] border border-peach/40 bg-peach-soft/50 p-5 sm:p-6">
            <h3 className="inline-flex items-center gap-2 font-serif text-2xl text-teal">
              <IconPerson className="h-6 w-6" /> You verify or approve
            </h3>
            <ul className="mt-4 space-y-3">
              {YOU_DECIDE.map((item) => (
                <li key={item} className="flex items-start gap-3 rounded-2xl bg-paper px-3 py-3 text-ink">
                  <IconPerson className="mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>
        <div className="mt-4 grid gap-3 sm:grid-cols-3">
          {LIMITS.map((limit) => (
            <article key={limit.title} className="rounded-3xl border border-line bg-ivory px-4 py-4">
              <h3 className="font-serif text-xl text-teal">{limit.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink">{limit.body}</p>
            </article>
          ))}
        </div>
        <p className="mt-3 text-sm text-ink-soft">
          You set these once in the proposed setup. A partial settlement is deliberately not a limit Vasooli can accept for you.
        </p>
        <div className="mt-6 grid items-center gap-6 rounded-[1.75rem] border border-line bg-ivory p-4 sm:p-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
          <SpecialistScene />
          <div>
            <h3 className="font-serif text-2xl text-teal">A specialist, when the path is unclear</h3>
            <p className="mt-3 text-lg leading-relaxed text-ink">
              In the proposed service, an Insurance Samadhan specialist can be brought in when something is uncertain or a settlement is in dispute.
            </p>
            <p className="mt-3 text-ink-soft">
              That is part of the pilot model. It is not a guarantee of accuracy, approval, a particular recovery, or how quickly a settlement arrives.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
