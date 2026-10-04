import Image from "next/image";

const buttonPrimary =
  "inline-flex min-h-12 items-center justify-center rounded-full bg-teal px-5 py-3 text-center text-base font-semibold text-paper";
const buttonSecondary =
  "inline-flex min-h-12 items-center justify-center rounded-full border border-line bg-white px-5 py-3 text-center text-base font-semibold text-ink hover:bg-ivory";

export function Hero() {
  return (
    <section className="bg-white px-5 pb-10 pt-8 sm:px-8 sm:pt-14" aria-labelledby="hero-heading">
      <div className="mx-auto grid max-w-6xl items-center gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-12">
        <div>
          <p className="text-sm font-semibold text-teal-mid">Vasooli · Inside Polifyx · With Insurance Samadhan</p>
          <h1 id="hero-heading" className="mt-3 font-serif text-5xl font-medium leading-[1.05] tracking-tight text-ink sm:text-6xl">
            Recovery is enough.
          </h1>
          <p className="mt-4 max-w-md text-lg leading-relaxed text-ink">
            Vasooli gathers the bills around a hospital stay. You approve what is sent.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <a href="#pilot" data-hero-cta className={buttonPrimary}>
              Join the pilot waitlist
            </a>
            <a href="#sample" className={buttonSecondary}>
              Explore a sample claim
            </a>
          </div>
          <p className="mt-4 text-sm text-ink-soft">In development. Joining the waitlist does not start a claim.</p>
        </div>
        <figure>
          <Image
            src="/photos/family-home.jpg"
            alt="A family laughing together on a sofa at home."
            width={1200}
            height={900}
            priority
            className="h-auto w-full rounded-[1.75rem] object-cover shadow-[0_20px_40px_-28px_rgba(34,34,34,0.45)]"
          />
        </figure>
      </div>
    </section>
  );
}
