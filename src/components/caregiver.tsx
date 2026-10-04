import Image from "next/image";

export function Caregiver() {
  return (
    <section id="family" className="scroll-mt-24 px-5 py-8 sm:px-8 sm:py-10" aria-labelledby="family-heading">
      <div className="mx-auto grid max-w-6xl items-center gap-6 lg:grid-cols-2">
        <Image
          src="/photos/parent-daughter.jpg"
          alt="A father and daughter smiling as they walk through a garden."
          width={1200}
          height={900}
          className="h-64 w-full rounded-[1.75rem] object-cover sm:h-72"
        />
        <div>
          <h2 id="family-heading" className="font-serif text-3xl font-medium leading-tight tracking-tight text-ink sm:text-4xl">
            Helping a parent or partner?
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-ink">
            You may be the one collecting bills, finding reports and calling for updates. Vasooli is being built for that work too, with the patient’s permission.
          </p>
          <a
            href="#pilot"
            className="mt-6 inline-flex min-h-12 items-center justify-center rounded-full bg-teal px-5 py-3 text-base font-semibold"
          >
            Join the pilot waitlist
          </a>
        </div>
      </div>
    </section>
  );
}
