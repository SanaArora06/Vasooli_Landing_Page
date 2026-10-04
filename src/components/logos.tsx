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
      <rect width="48" height="48" rx="13" fill="#B7E0C6" />
      <path
        d="M8 13.2c0-2.2 1.8-4 4-4h11.2l7 7v11.6c0 2.2-1.8 4-4 4H12c-2.2 0-4-1.8-4-4V13.2z"
        fill="#FFF8F1"
      />
      <path d="M23.2 9.2v5.2c0 1 .8 1.8 1.8 1.8H30.2" fill="#FAAA52" />
      <path
        d="M12.4 17.4h7.4M12.4 21.2h4.8"
        stroke="#3E8F6A"
        strokeWidth="1.9"
        strokeLinecap="round"
      />
      <path
        d="M12.4 27.4h3l1.5-3.1 2.5 6.2 1.7-3.1h2.8"
        fill="none"
        stroke="#F26F21"
        strokeWidth="1.9"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="35.7" cy="34.6" r="9.15" fill="#FFF8F1" />
      <circle cx="35.7" cy="34.6" r="7.55" fill="#F26F21" />
      <path
        d="M35.7 38.9c-3.15-2.05-5.35-4.15-5.35-6.15 0-1.55 1.2-2.7 2.7-2.7.95 0 1.75.5 2.65 1.5.9-1 1.7-1.5 2.65-1.5 1.5 0 2.7 1.15 2.7 2.7 0 2-2.2 4.1-5.35 6.15z"
        fill="#FFF8F1"
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
