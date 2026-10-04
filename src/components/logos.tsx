import Image from "next/image";

export function VasooliMark({
  className = "h-10 w-10",
  title,
}: {
  className?: string;
  title?: string;
}) {
  const labelled = Boolean(title);
  return (
    <svg
      viewBox="0 0 48 48"
      className={className}
      role={labelled ? "img" : undefined}
      aria-hidden={labelled ? undefined : true}
      aria-label={title}
      focusable="false"
    >
      <rect width="48" height="48" rx="14" fill="#2D64BC" />
      <circle cx="33" cy="14" r="6" fill="#FAAA52" />
      <path
        d="M9 27c6-8 12-10 18-8"
        fill="none"
        stroke="#8FD4F7"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <rect x="11" y="20" width="18" height="18" rx="3.5" fill="#FFFDF9" />
      <path d="M15 26.5h10M15 31h6" stroke="#222222" strokeWidth="1.7" strokeLinecap="round" />
      <circle cx="33.5" cy="33.5" r="8" fill="#F26F21" />
      <path
        d="M29.6 33.6l2.4 2.4 4.6-5"
        fill="none"
        stroke="#FFFDF9"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function VasooliLockup({
  markClassName = "h-10 w-10",
  tone = "ink",
}: {
  markClassName?: string;
  tone?: "ink" | "paper";
}) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${tone === "paper" ? "text-paper" : "text-teal"}`}>
      <VasooliMark className={markClassName} />
      <span className="font-serif text-[1.45rem] leading-none tracking-tight">Vasooli</span>
    </span>
  );
}

export function InsuranceSamadhanLogo({
  name = true,
  markClassName = "h-10 w-14",
  tone = "ink",
}: {
  name?: boolean;
  markClassName?: string;
  tone?: "ink" | "paper";
}) {
  return (
    <span className={`inline-flex items-center gap-2 ${tone === "paper" ? "text-paper" : "text-ink"}`}>
      <Image
        src="/brand/insurance-samadhan.png"
        alt={name ? "" : "Insurance Samadhan"}
        width={56}
        height={40}
        className={`${markClassName} object-contain`}
      />
      {name ? <span className="text-sm font-semibold leading-tight">Insurance Samadhan</span> : null}
    </span>
  );
}
