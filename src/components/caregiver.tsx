import { CaregiverScene } from "@/components/papers";

export function Caregiver() {
  return (
    <section id="family" className="scroll-mt-24 px-5 py-14 sm:px-8 sm:py-20" aria-labelledby="family-heading">
      <div className="mx-auto grid max-w-6xl items-center gap-8 lg:grid-cols-2">
        <CaregiverScene />
        <div>
          <h2 id="family-heading" className="font-serif text-3xl font-medium leading-tight tracking-tight text-teal sm:text-4xl">
            Helping a parent or partner through treatment?
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-ink">
            You may be the one collecting bills, finding reports and calling for updates. Vasooli is being built for that work too, with the patient’s appropriate permission.
          </p>
          <p className="mt-3 text-base leading-relaxed text-ink-soft">
            Helping does not mean open access to someone else’s medical information.
          </p>
          <a
            href="#pilot"
            className="mt-6 inline-flex min-h-12 items-center justify-center rounded-full bg-teal px-5 py-3 text-base font-semibold text-paper hover:bg-teal-mid"
          >
            Join the pilot waitlist
          </a>
        </div>
      </div>
    </section>
  );
}
