import { IconCheck, IconMissing, IconPerson } from "@/components/icons";

export function PhonePreview() {
  return (
    <figure className="mx-auto w-full max-w-[250px]">
      <div className="rounded-[2rem] bg-teal p-2 shadow-[0_22px_40px_-28px_rgba(20,63,60,0.7)]">
        <div className="overflow-hidden rounded-[1.55rem] bg-paper">
          <div className="flex items-center justify-between border-b border-line px-4 py-3" aria-hidden="true">
            <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-teal">Polifyx</span>
            <span className="rounded-full bg-sage px-2 py-0.5 text-[11px] font-semibold text-teal">Sample</span>
          </div>
          <div className="space-y-3 px-4 py-4">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-ink-soft">Treatment episode</p>
              <p className="font-serif text-xl leading-tight text-teal">Knee care</p>
              <p className="text-sm text-ink-soft">Started from a diagnostic bill</p>
            </div>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start justify-between gap-3 rounded-2xl bg-sage/80 px-3 py-2">
                <span className="inline-flex items-center gap-2 font-medium text-teal">
                  <IconCheck />
                  Documents received
                </span>
                <span className="font-semibold text-teal">6 on file</span>
              </li>
              <li className="flex items-start justify-between gap-3 rounded-2xl border border-dashed border-teal/40 bg-peach-soft/50 px-3 py-2">
                <span className="inline-flex items-center gap-2 font-medium text-teal">
                  <IconMissing />
                  Missing report
                </span>
                <span className="text-right font-semibold text-teal">MRI report</span>
              </li>
            </ul>
            <div className="rounded-2xl border border-line bg-ivory px-3 py-2.5">
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-ink-soft">Next action</p>
              <p className="text-sm font-medium text-ink">Collect the MRI report from the centre</p>
            </div>
            <div className="rounded-2xl border border-peach/50 bg-peach-soft/70 px-3 py-2.5">
              <p className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-teal">
                <IconPerson />
                Needs your approval
              </p>
              <p className="mt-1 text-sm text-ink">Please confirm the procedure date before the packet is prepared.</p>
            </div>
          </div>
        </div>
      </div>
      <figcaption className="mt-3 text-center text-sm font-medium text-ink-soft">
        Illustrative Polifyx experience.
      </figcaption>
    </figure>
  );
}
