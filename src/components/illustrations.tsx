function Face({ cx, cy, tone = "#2A2420" }: { cx: number; cy: number; tone?: string }) {
  return (
    <g>
      <circle cx={cx - 7} cy={cy} r="1.7" fill={tone} />
      <circle cx={cx + 7} cy={cy} r="1.7" fill={tone} />
      <path
        d={`M${cx - 7} ${cy + 8}c3.2 3.4 10.8 3.4 14 0`}
        fill="none"
        stroke={tone}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </g>
  );
}

function Seated({
  x,
  y,
  skin,
  hair,
  top,
  scale = 1,
  flip = false,
}: {
  x: number;
  y: number;
  skin: string;
  hair: string;
  top: string;
  scale?: number;
  flip?: boolean;
}) {
  const mirror = flip ? `translate(${x} ${y}) scale(${-scale} ${scale})` : `translate(${x} ${y}) scale(${scale})`;
  return (
    <g transform={mirror}>
      <rect x="8" y="78" width="54" height="10" rx="4" fill="#E2C7A8" />
      <rect x="12" y="86" width="8" height="28" rx="3" fill="#C9A27C" />
      <rect x="50" y="86" width="8" height="28" rx="3" fill="#C9A27C" />
      <rect x="16" y="86" width="14" height="36" rx="7" fill="#243633" />
      <rect x="36" y="86" width="14" height="36" rx="7" fill="#243633" />
      <rect x="12" y="56" width="52" height="40" rx="18" fill={top} />
      <rect x="28" y="46" width="14" height="14" rx="5" fill={skin} />
      <circle cx="35" cy="28" r="20" fill={skin} />
      <path d="M17 26c1-20 36-22 38 0-6 3-8-8-13-10-8-3-16 0-20 7-3 2-5 3-5 3z" fill={hair} />
      <Face cx={35} cy={30} />
      <path d="M58 64c14 6 24 4 30-2" fill="none" stroke={skin} strokeWidth="8" strokeLinecap="round" />
    </g>
  );
}

export function FamilyScene() {
  return (
    <svg viewBox="0 0 640 470" role="img" aria-label="Illustration of a family at home. One person rests on a sofa while two others sort documents at a table." className="h-auto w-full">
      <rect width="640" height="470" rx="36" fill="#E7F1EA" />
      <ellipse cx="150" cy="64" rx="120" ry="58" fill="#FBF8F3" opacity="0.7" />
      <circle cx="560" cy="78" r="48" fill="#F6E4D6" />
      <rect x="46" y="36" width="120" height="84" rx="14" fill="#FBF8F3" />
      <path d="M106 36v84M46 78h120" stroke="#E3D9CB" strokeWidth="4" />
      <ellipse cx="300" cy="430" rx="230" ry="22" fill="#D5E6DB" />

      <g>
        <rect x="78" y="248" width="250" height="108" rx="28" fill="#FBF8F3" />
        <rect x="78" y="198" width="28" height="140" rx="14" fill="#F3E6D8" />
        <rect x="300" y="198" width="28" height="140" rx="14" fill="#F3E6D8" />
      </g>

      <g transform="translate(108 214)">
        <ellipse cx="168" cy="78" rx="34" ry="16" fill="#F6E4D6" />
        <rect x="78" y="62" width="108" height="24" rx="12" fill="#1A3330" />
        <path d="M28 46c6 20 18 32 40 34 2-16-4-30-16-38 8-10 28-12 40-4 8 18 4 36-8 46H36c-16-6-24-20-22-38z" fill="#1E5C55" />
        <path d="M34 52c16 4 22 18 14 30" fill="#F0C9B0" />
        <rect x="22" y="48" width="16" height="14" rx="6" fill="#E8B98A" />
        <circle cx="24" cy="34" r="22" fill="#E8B98A" />
        <path d="M6 32c2-22 38-24 40 0-6 4-10-8-16-10-8-2-16 1-20 8-2 2-4 2-4 2z" fill="#2A2420" />
        <Face cx={24} cy={36} />
      </g>

      <g>
        <rect x="392" y="286" width="176" height="14" rx="6" fill="#E2C7A8" />
        <rect x="408" y="300" width="10" height="52" rx="4" fill="#C9A27C" />
        <rect x="542" y="300" width="10" height="52" rx="4" fill="#C9A27C" />
        <rect x="430" y="248" width="52" height="40" rx="6" fill="#FFFcf7" stroke="#143F3C" strokeWidth="1.4" />
        <path d="M440 262h32M440 272h22" stroke="#143F3C" strokeWidth="1.6" strokeLinecap="round" />
        <circle cx="468" cy="276" r="8" fill="#E5F0E8" stroke="#143F3C" strokeWidth="1.2" />
        <path d="M464 276.2l2.2 2.2 3.8-4" fill="none" stroke="#143F3C" strokeWidth="1.3" strokeLinecap="round" />
        <rect x="492" y="256" width="42" height="32" rx="5" fill="#F6E4D6" stroke="#143F3C" strokeDasharray="3 2" />
      </g>

      <Seated x={470} y={176} skin="#C07A49" hair="#241E1C" top="#F7F1E6" />
      <Seated x={150} y={150} skin="#D1956A" hair="#3A312C" top="#C5DBCF" scale={0.82} />

      <g transform="translate(548 168)">
        <rect x="8" y="62" width="26" height="20" rx="5" fill="#C48662" />
        <ellipse cx="14" cy="40" rx="12" ry="18" fill="#6E9A7C" />
        <ellipse cx="30" cy="34" rx="13" ry="22" fill="#8FB59A" />
      </g>
    </svg>
  );
}

export function SpecialistScene() {
  return (
    <svg viewBox="0 0 640 420" role="img" aria-label="Illustration of a person meeting an Insurance Samadhan specialist, with documents on the table between them." className="h-auto w-full">
      <rect width="640" height="420" rx="36" fill="#F6E4D6" />
      <circle cx="78" cy="70" r="40" fill="#E7F1EA" />
      <rect x="470" y="36" width="112" height="78" rx="14" fill="#FBF8F3" />
      <path d="M526 36v78M470 74h112" stroke="#E3D9CB" strokeWidth="4" />
      <ellipse cx="320" cy="372" rx="210" ry="20" fill="#E7D3C0" />
      <rect x="150" y="268" width="340" height="16" rx="7" fill="#E2C7A8" />
      <rect x="176" y="284" width="12" height="52" rx="4" fill="#C9A27C" />
      <rect x="452" y="284" width="12" height="52" rx="4" fill="#C9A27C" />
      <g>
        <rect x="250" y="214" width="78" height="54" rx="8" fill="#FFFcf7" stroke="#143F3C" strokeWidth="1.5" />
        <path d="M264 232h50M264 246h36M264 258h22" stroke="#143F3C" strokeWidth="1.7" strokeLinecap="round" />
        <rect x="338" y="228" width="58" height="22" rx="8" fill="#E5F0E8" />
      </g>
      <Seated x={150} y={150} skin="#E8B98A" hair="#2A2420" top="#1E5C55" />
      <Seated x={520} y={150} skin="#C07A49" hair="#241E1C" top="#FBF8F3" flip />
    </svg>
  );
}

export function TogetherScene() {
  return (
    <svg viewBox="0 0 640 420" role="img" aria-label="Illustration of two family members sorting a shared folder of documents together." className="h-auto w-full">
      <rect width="640" height="420" rx="36" fill="#E7F1EA" />
      <circle cx="540" cy="72" r="46" fill="#F6E4D6" />
      <ellipse cx="320" cy="372" rx="200" ry="20" fill="#D5E6DB" />
      <rect x="170" y="262" width="300" height="16" rx="7" fill="#E2C7A8" />
      <rect x="196" y="278" width="12" height="52" rx="4" fill="#C9A27C" />
      <rect x="432" y="278" width="12" height="52" rx="4" fill="#C9A27C" />
      <g>
        <rect x="246" y="206" width="110" height="58" rx="8" fill="#FBF8F3" stroke="#143F3C" strokeWidth="1.6" />
        <path d="M262 226h78M262 240h58M262 254h34" stroke="#143F3C" strokeWidth="1.8" strokeLinecap="round" />
        <circle cx="336" cy="248" r="11" fill="#E5F0E8" stroke="#143F3C" strokeWidth="1.3" />
        <path d="M330.5 248.2l3 3 5.2-5.6" fill="none" stroke="#143F3C" strokeWidth="1.5" strokeLinecap="round" />
        <rect x="366" y="220" width="46" height="36" rx="6" fill="#F6E4D6" stroke="#143F3C" strokeDasharray="3 2" />
      </g>
      <Seated x={150} y={150} skin="#D1956A" hair="#3A312C" top="#1E5C55" />
      <Seated x={500} y={150} skin="#E8B98A" hair="#2A2420" top="#F7F1E6" flip />
    </svg>
  );
}
