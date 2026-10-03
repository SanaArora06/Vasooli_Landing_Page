import { TogetherScene } from "@/components/illustrations";

export function FamilySupport() {
  return (
    <section id="family" className="scroll-mt-48 px-5 py-16 sm:px-8 sm:py-24" aria-labelledby="family-heading">
      <div className="mx-auto grid max-w-6xl items-center gap-8 lg:grid-cols-2">
        <TogetherScene />
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-teal-mid">Family support</p>
          <h2 id="family-heading" className="mt-3 font-serif text-3xl font-medium leading-tight tracking-tight text-teal sm:text-4xl">
            Helping someone in your family? Start together.
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-ink">
            A spouse, parent, child or other family member can help organise bills and reports, with the patient’s permission.
          </p>
          <p className="mt-3 text-ink">
            In the proposed setup you name which family members Vasooli may act for. That list is one of the three limits, with the rupee ceiling and the escalation ceiling.
          </p>
          <p className="mt-3 text-ink">
            Assisted onboarding — sitting down together to start the episode — is a proposed pilot option. So is partner-sponsored access, for example through an employer or a hospital. These are not established nationwide services.
          </p>
          <a
            href="#pilot"
            className="mt-6 inline-flex min-h-12 items-center justify-center rounded-full bg-teal px-5 py-3 text-base font-semibold text-paper hover:bg-teal-mid"
          >
            Join the pilot
          </a>
        </div>
      </div>
    </section>
  );
}
