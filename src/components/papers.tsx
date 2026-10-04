const SHEETS = {
  diagnostic: { kicker: "Bill", lines: ["Scan", "12 Mar", "₹4,800"] },
  prescription: { kicker: "Rx", lines: ["Medicines", "Named", "Signed"] },
  discharge: { kicker: "Summary", lines: ["Stay", "Diagnosis", "Advice"] },
  pharmacy: { kicker: "Pharmacy", lines: ["Medicines", "Bill", "Dated"] },
  letter: { kicker: "Letter", lines: ["Settlement", "Deduction", "Reason"] },
} as const;

export type SheetKind = keyof typeof SHEETS;

export function PaperSheet({
  kind,
  title,
  detail,
  className = "",
}: {
  kind: SheetKind;
  title: string;
  detail: string;
  className?: string;
}) {
  const sheet = SHEETS[kind];
  return (
    <article className={`w-[9.5rem] shrink-0 rounded-2xl border border-line bg-paper p-3 shadow-[0_12px_30px_-24px_rgba(20,63,60,0.8)] ${className}`}>
      <div className="rounded-xl border border-line bg-ivory px-2.5 py-2" aria-hidden="true">
        <div className="flex items-center justify-between gap-2">
          <span className="text-[0.65rem] font-semibold uppercase tracking-wide text-coral">{sheet.kicker}</span>
          <span className="h-2 w-6 rounded-full bg-sun/80" />
        </div>
        <div className="mt-2 space-y-1">
          {sheet.lines.map((line) => (
            <span key={line} className="block h-1.5 rounded-full bg-teal/15" style={{ width: `${60 + line.length * 4}%`, maxWidth: "100%" }} />
          ))}
        </div>
      </div>
      <h3 className="mt-2 text-sm font-semibold leading-tight text-teal">{title}</h3>
      <p className="mt-1 text-xs leading-snug text-ink-soft">{detail}</p>
    </article>
  );
}

export function CaregiverScene() {
  return (
    <svg viewBox="0 0 360 220" className="h-auto w-full" role="img" aria-label="A family member and a patient sitting together with a small stack of papers.">
      <rect width="360" height="220" rx="28" fill="#F8EBE3" />
      <rect x="28" y="28" width="304" height="164" rx="24" fill="#FBF8F3" />
      <rect x="118" y="132" width="124" height="10" rx="5" fill="#E3D9CB" />
      <rect x="146" y="108" width="68" height="28" rx="6" fill="#FFFDF9" stroke="#143F3C" strokeWidth="1.4" />
      <path d="M154 118h36M154 124h24" stroke="#143F3C" strokeWidth="1.3" strokeLinecap="round" />
      <circle cx="96" cy="92" r="16" fill="#E7C4A8" stroke="#143F3C" strokeWidth="1.4" />
      <path d="M74 148c4-22 14-32 22-32s18 10 22 32" fill="#1F5C55" stroke="#143F3C" strokeWidth="1.4" />
      <circle cx="250" cy="96" r="16" fill="#E7C4A8" stroke="#143F3C" strokeWidth="1.4" />
      <path d="M228 150c4-20 14-30 22-30s18 10 22 30" fill="#C96B45" stroke="#143F3C" strokeWidth="1.4" />
      <path d="M118 124c16 8 28 8 44 0" fill="none" stroke="#143F3C" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M214 128c-16 6-28 6-40 0" fill="none" stroke="#143F3C" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}
