import { FamilyScene } from "@/components/illustrations";
import { PhonePreview } from "@/components/phone-preview";
import { IconPerson } from "@/components/icons";

const buttonPrimary =
  "inline-flex min-h-12 items-center justify-center rounded-full bg-teal px-5 py-3 text-center text-base font-semibold text-paper hover:bg-teal-mid";
const buttonSecondary =
  "inline-flex min-h-12 items-center justify-center rounded-full border border-teal/25 bg-paper px-5 py-3 text-center text-base font-semibold text-teal hover:bg-sage";

export function Hero() {
  return (
    <section className="px-5 pb-8 pt-10 sm:px-8 sm:pt-16 lg:pb-16" aria-labelledby="hero-heading">
      <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-8">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-teal-mid">
            Health reimbursement, held in one place
          </p>
          <h1
            id="hero-heading"
            className="mt-4 max-w-xl font-serif text-[2.15rem] font-medium leading-[1.12] tracking-tight text-teal sm:text-5xl lg:text-[3.35rem]"
          >
            Focus on <span className="underline decoration-peach decoration-[3px] underline-offset-[6px]">recovery</span>.
            Let Vasooli organise the reimbursement.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink">
            Bring your bills, documents and follow-ups together inside Polifyx—from your first diagnostic bill through settlement.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#pilot" className={`${buttonPrimary} sm:min-w-44`}>
              Join the pilot
            </a>
            <a href="#how-it-works" className={`${buttonSecondary} sm:min-w-44`}>
              See how Vasooli works
            </a>
          </div>
          <div className="mt-8 max-w-xl rounded-3xl border border-line bg-paper/80 p-4 shadow-[0_16px_40px_-32px_rgba(20,63,60,0.6)]">
            <p className="flex items-start gap-3 text-base leading-relaxed text-ink">
              <IconPerson className="mt-1 h-5 w-5 shrink-0" />
              <span>Your policy guides the assessment. You approve final submission and consequential decisions.</span>
            </p>
            <p className="mt-3 border-t border-line pt-3 font-serif text-lg leading-snug text-teal">
              Automate the chase. Keep consequential decisions with you.
            </p>
          </div>
        </div>
        <div className="relative">
          <FamilyScene />
          <div className="relative z-10 mx-auto -mt-20 w-[min(100%,250px)] sm:-mt-24">
            <PhonePreview />
          </div>
        </div>
      </div>
    </section>
  );
}
