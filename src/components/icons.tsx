type IconProps = { className?: string };

function Svg({
  size = 16,
  className = "",
  children,
}: {
  size?: number;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <svg
      viewBox="0 0 16 16"
      width={size}
      height={size}
      className={`inline-block shrink-0 ${className}`}
      aria-hidden="true"
      focusable="false"
    >
      {children}
    </svg>
  );
}

export function IconCheck({ className = "" }: IconProps) {
  return (
    <Svg className={className}>
      <circle cx="8" cy="8" r="7" fill="#E5F0E8" stroke="#143F3C" strokeWidth="1.2" />
      <path d="M4.6 8.2l2.1 2.1 4.6-4.8" fill="none" stroke="#143F3C" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </Svg>
  );
}

export function IconMissing({ className = "" }: IconProps) {
  return (
    <Svg className={className}>
      <rect x="1.5" y="2" width="10" height="12" rx="1.5" fill="#FBF8F3" stroke="#143F3C" strokeWidth="1.2" strokeDasharray="2 1.4" />
      <path d="M4 6.5h5M4 9h3" stroke="#143F3C" strokeWidth="1.1" strokeLinecap="round" />
      <circle cx="12" cy="12" r="3.2" fill="#F6E4D6" stroke="#143F3C" strokeWidth="1.1" />
      <path d="M12 10.6v1.8M12 13.6h.01" stroke="#143F3C" strokeWidth="1.2" strokeLinecap="round" />
    </Svg>
  );
}

export function IconPerson({ className = "" }: IconProps) {
  return (
    <Svg className={className}>
      <circle cx="8" cy="5" r="2.4" fill="#F6E4D6" stroke="#143F3C" strokeWidth="1.2" />
      <path d="M3.4 13.2c.7-2.4 2.3-3.5 4.6-3.5s3.9 1.1 4.6 3.5" fill="none" stroke="#143F3C" strokeWidth="1.2" strokeLinecap="round" />
    </Svg>
  );
}

export function IconLater({ className = "" }: IconProps) {
  return (
    <Svg className={className}>
      <circle cx="8" cy="8" r="6" fill="none" stroke="#143F3C" strokeWidth="1.2" strokeDasharray="2.2 1.6" />
      <path d="M8 5v3.2L10.2 10" fill="none" stroke="#143F3C" strokeWidth="1.2" strokeLinecap="round" />
    </Svg>
  );
}

export function IconConflict({ className = "" }: IconProps) {
  return (
    <Svg className={className}>
      <rect x="2" y="2.5" width="8" height="10" rx="1.4" fill="#FBF8F3" stroke="#143F3C" strokeWidth="1.1" />
      <rect x="6" y="4.5" width="8" height="10" rx="1.4" fill="#F6E4D6" stroke="#143F3C" strokeWidth="1.1" />
    </Svg>
  );
}

export function IconMenu({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 20 20" width="20" height="20" className={className} aria-hidden="true" focusable="false">
      <path d="M3.5 5.5h13M3.5 10h13M3.5 14.5h13" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

export function IconClose({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 20 20" width="20" height="20" className={className} aria-hidden="true" focusable="false">
      <path d="M5 5l10 10M15 5L5 15" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}
