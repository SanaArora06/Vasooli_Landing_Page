export function VasooliSymbol({
  className = "h-9 w-9",
  tone = "ink",
}: {
  className?: string;
  tone?: "ink" | "paper";
}) {
  const ink = tone === "paper" ? "#F6E4D6" : "#143F3C";
  return (
    <svg viewBox="0 0 36 36" className={className} aria-hidden="true" focusable="false">
      <rect x="3" y="3" width="22" height="28" rx="4" fill="#FBF8F3" stroke={ink} strokeWidth="1.6" />
      <path d="M8 11h12M8 16h12M8 21h7" stroke="#143F3C" strokeWidth="1.6" strokeLinecap="round" />
      <circle cx="25.5" cy="25.5" r="8" fill="#E5F0E8" stroke={ink} strokeWidth="1.6" />
      <path
        d="M21.7 25.6l2.3 2.3 4.3-4.6"
        fill="none"
        stroke="#143F3C"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function VasooliWordmark({
  symbolClassName = "h-9 w-9",
  tone = "ink",
}: {
  symbolClassName?: string;
  tone?: "ink" | "paper";
}) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${tone === "paper" ? "text-paper" : "text-teal"}`}>
      <VasooliSymbol className={symbolClassName} tone={tone} />
      <span className="font-serif text-[1.45rem] leading-none tracking-tight">Vasooli</span>
    </span>
  );
}

export function TextBrand({
  children,
  className = "",
}: {
  children: string;
  className?: string;
}) {
  return (
    <span className={`font-serif text-lg leading-tight tracking-tight ${className}`}>{children}</span>
  );
}
