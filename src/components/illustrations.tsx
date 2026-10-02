function SceneFrame({
  label,
  children,
  viewBox = "0 0 640 500",
}: {
  label: string;
  children: React.ReactNode;
  viewBox?: string;
}) {
  return (
    <svg viewBox={viewBox} role="img" aria-label={label} className="h-auto w-full">
      {children}
    </svg>
  );
}

export function FamilyScene() {
  return (
    <SceneFrame label="Illustration of a family at home. One person rests with a cushion while another organises documents at a table.">
      <rect width="640" height="500" rx="36" fill="#E7F1EA" />
      <ellipse cx="120" cy="70" rx="130" ry="70" fill="#FBF8F3" opacity="0.65" />
      <circle cx="548" cy="78" r="58" fill="#F6E4D6" />
      <rect x="48" y="36" width="132" height="92" rx="14" fill="#FBF8F3" />
      <path d="M114 36v92M48 82h132" stroke="#E3D9CB" strokeWidth="4" />
      <ellipse cx="330" cy="452" rx="250" ry="26" fill="#D7E6DC" />

      <g>
        <rect x="458" y="286" width="34" height="28" rx="6" fill="#C48662" />
        <ellipse cx="464" cy="250" rx="16" ry="28" fill="#6E9A7C" />
        <ellipse cx="488" cy="242" rx="18" ry="32" fill="#8FB59A" />
        <ellipse cx="474" cy="268" rx="14" ry="18" fill="#5E8A6C" />
      </g>

      <g>
        <rect x="56" y="268" width="250" height="112" rx="28" fill="#FBF8F3" />
        <rect x="56" y="214" width="34" height="150" rx="17" fill="#F3E6D8" />
        <rect x="272" y="214" width="34" height="150" rx="17" fill="#F3E6D8" />
        <rect x="86" y="292" width="210" height="62" rx="18" fill="#F7F1E8" />
      </g>

      <g>
        <path d="M150 292c8 36 28 58 62 64 8-28 4-58-8-78-18 4-38 8-54 14z" fill="#F0C9B0" />
        <rect x="168" y="236" width="78" height="92" rx="30" fill="#1E5C55" />
        <path d="M176 250c18-18 52-16 66 6 4 22-8 28-22 24-10-18-28-22-44-10z" fill="#E8B98A" />
        <circle cx="206" cy="196" r="30" fill="#E8B98A" />
        <path d="M180 190c6-28 48-34 58-8 2 8-8 16-16 12-8-10-22-12-30-4-6 6-12 4-12 0z" fill="#2A2420" />
        <path d="M194 198h.1M216 198h.1" stroke="#2A2420" strokeWidth="2.4" strokeLinecap="round" />
        <path d="M196 212c6 6 16 6 22 0" fill="none" stroke="#2A2420" strokeWidth="1.6" strokeLinecap="round" />
        <ellipse cx="188" cy="206" rx="5" ry="2.4" fill="#E7A27A" opacity="0.35" />
        <ellipse cx="248" cy="318" rx="46" ry="20" fill="#F6E4D6" />
        <path d="M214 300c28 8 58 6 78-8 6 16-2 28-22 32-28 6-52-2-64-16z" fill="#143F3C" />
      </g>

      <g>
        <rect x="392" y="300" width="168" height="16" rx="6" fill="#E2C7A8" />
        <rect x="404" y="316" width="12" height="58" rx="4" fill="#C9A27C" />
        <rect x="536" y="316" width="12" height="58" rx="4" fill="#C9A27C" />
        <rect x="418" y="268" width="46" height="32" rx="4" fill="#FFFcf7" stroke="#E3D9CB" />
        <path d="M426 278h30M426 286h22" stroke="#C5DBCF" strokeWidth="2" strokeLinecap="round" />
        <rect x="470" y="262" width="50" height="38" rx="4" fill="#FFFcf7" stroke="#143F3C" strokeWidth="1.4" />
        <path d="M478 274h34M478 282h24M478 290h16" stroke="#143F3C" strokeWidth="1.6" strokeLinecap="round" />
        <circle cx="508" cy="286" r="8" fill="#E5F0E8" stroke="#143F3C" strokeWidth="1.2" />
        <path d="M504.2 286.2l2.2 2.1 3.6-3.8" fill="none" stroke="#143F3C" strokeWidth="1.3" strokeLinecap="round" />
      </g>

      <g>
        <path d="M430 300c-6-46 8-78 28-86 22 18 24 52 16 86h-44z" fill="#F7F1E6" />
        <path d="M452 248c8 16 28 18 36 4-2 22-14 36-28 36s-22-12-8-40z" fill="#C07A49" />
        <circle cx="470" cy="214" r="28" fill="#C07A49" />
        <path d="M446 210c4-26 46-30 52-4-8 8-14 6-18-2-8-8-22-8-28 0-4 6-8 8-6 6z" fill="#241E1C" />
        <path d="M460 216h.1M482 216h.1" stroke="#241E1C" strokeWidth="2.2" strokeLinecap="round" />
        <path d="M462 228c5 5 13 5 18 0" fill="none" stroke="#241E1C" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M448 268c-16 8-22 28-16 42" fill="none" stroke="#C07A49" strokeWidth="10" strokeLinecap="round" />
      </g>

      <g>
        <circle cx="132" cy="168" r="22" fill="#D1956A" />
        <path d="M114 164c2-20 34-22 40-2-6 6-12 4-16-2-6-6-16-4-18 0-2 4-6 6-6 4z" fill="#3A312C" />
        <path d="M124 170h.1M140 170h.1" stroke="#3A312C" strokeWidth="2" strokeLinecap="round" />
        <path d="M124 180c4 4 12 4 16 0" fill="none" stroke="#3A312C" strokeWidth="1.4" strokeLinecap="round" />
        <path d="M112 196c8 22 28 28 42 18 2-18-8-32-22-36-12 2-20 8-20 18z" fill="#C5DBCF" />
        <rect x="118" y="214" width="22" height="16" rx="6" fill="#FBF8F3" stroke="#C9A27C" />
      </g>
    </SceneFrame>
  );
}

export function SpecialistScene() {
  return (
    <SceneFrame
      label="Illustration of a person meeting an Insurance Samadhan specialist, with documents on the table between them."
      viewBox="0 0 640 420"
    >
      <rect width="640" height="420" rx="36" fill="#F6E4D6" />
      <circle cx="86" cy="70" r="46" fill="#E7F1EA" />
      <rect x="470" y="36" width="120" height="86" rx="16" fill="#FBF8F3" />
      <path d="M530 36v86M470 78h120" stroke="#E3D9CB" strokeWidth="4" />
      <ellipse cx="320" cy="372" rx="220" ry="22" fill="#E7D3C0" />
      <rect x="150" y="250" width="340" height="18" rx="8" fill="#E2C7A8" />
      <rect x="176" y="268" width="14" height="62" rx="4" fill="#C9A27C" />
      <rect x="450" y="268" width="14" height="62" rx="4" fill="#C9A27C" />

      <g>
        <rect x="188" y="214" width="70" height="40" rx="6" fill="#FFFcf7" stroke="#143F3C" strokeWidth="1.4" />
        <path d="M200 228h46M200 238h32" stroke="#143F3C" strokeWidth="1.6" strokeLinecap="round" />
        <rect x="268" y="206" width="78" height="48" rx="6" fill="#FBF8F3" stroke="#1E5C55" strokeWidth="1.5" />
        <path d="M280 222h54M280 234h40M280 246h24" stroke="#1E5C55" strokeWidth="1.6" strokeLinecap="round" />
        <rect x="356" y="220" width="64" height="16" rx="8" fill="#E5F0E8" />
        <text x="368" y="232" fill="#143F3C" fontSize="10" fontFamily="Georgia, serif">
          Notes
        </text>
      </g>

      <g>
        <path d="M92 250c18 40 46 62 86 66 4-36-8-70-28-92-24 6-46 14-58 26z" fill="#1E5C55" />
        <circle cx="150" cy="168" r="32" fill="#E8B98A" />
        <path d="M122 164c8-30 52-34 62-4 0 10-10 16-18 10-8-12-26-12-34 0-6 8-12 6-10-6z" fill="#2A2420" />
        <path d="M138 170h.1M162 170h.1" stroke="#2A2420" strokeWidth="2.4" strokeLinecap="round" />
        <path d="M140 186c7 6 16 6 22 0" fill="none" stroke="#2A2420" strokeWidth="1.6" strokeLinecap="round" />
        <path d="M118 230c-8 20-4 46 16 58" fill="none" stroke="#E8B98A" strokeWidth="12" strokeLinecap="round" />
      </g>

      <g>
        <path d="M430 248c20 38 52 58 90 60-2-40-20-74-42-94-22 8-40 18-48 34z" fill="#FBF8F3" />
        <path d="M470 214c22 8 36 28 34 48" fill="none" stroke="#C5DBCF" strokeWidth="16" strokeLinecap="round" />
        <circle cx="492" cy="164" r="32" fill="#C07A49" />
        <path d="M466 158c6-28 50-32 58-2-8 10-16 6-20-4-8-10-24-8-30 2-4 8-10 8-8 4z" fill="#241E1C" />
        <path d="M480 166h.1M504 166h.1" stroke="#241E1C" strokeWidth="2.4" strokeLinecap="round" />
        <path d="M482 182c6 6 16 6 22 0" fill="none" stroke="#241E1C" strokeWidth="1.6" strokeLinecap="round" />
      </g>

      <g transform="translate(520 250)">
        <rect x="16" y="46" width="28" height="22" rx="5" fill="#C48662" />
        <ellipse cx="22" cy="28" rx="12" ry="20" fill="#6E9A7C" />
        <ellipse cx="40" cy="22" rx="14" ry="24" fill="#8FB59A" />
      </g>
    </SceneFrame>
  );
}

export function TogetherScene() {
  return (
    <SceneFrame
      label="Illustration of two family members sorting a shared folder of documents together."
      viewBox="0 0 640 420"
    >
      <rect width="640" height="420" rx="36" fill="#E7F1EA" />
      <circle cx="540" cy="80" r="54" fill="#F6E4D6" />
      <ellipse cx="300" cy="372" rx="210" ry="22" fill="#D7E6DC" />
      <rect x="168" y="268" width="300" height="16" rx="7" fill="#E2C7A8" />
      <rect x="196" y="284" width="12" height="54" rx="4" fill="#C9A27C" />
      <rect x="430" y="284" width="12" height="54" rx="4" fill="#C9A27C" />

      <g>
        <rect x="230" y="214" width="120" height="62" rx="10" fill="#FBF8F3" stroke="#143F3C" strokeWidth="1.6" />
        <path d="M248 236h84M248 250h64M248 264h40" stroke="#143F3C" strokeWidth="2" strokeLinecap="round" />
        <circle cx="328" cy="258" r="12" fill="#E5F0E8" stroke="#143F3C" strokeWidth="1.3" />
        <path d="M322 258.4l3.2 3.2 5.4-5.8" fill="none" stroke="#143F3C" strokeWidth="1.6" strokeLinecap="round" />
        <rect x="360" y="228" width="52" height="40" rx="6" fill="#F6E4D6" stroke="#143F3C" strokeDasharray="3 2" />
        <path d="M372 246h28" stroke="#143F3C" strokeWidth="1.6" strokeLinecap="round" />
      </g>

      <g>
        <path d="M86 268c16 34 40 52 74 56 2-30-10-58-26-78-20 4-38 12-48 22z" fill="#1E5C55" />
        <circle cx="140" cy="176" r="30" fill="#D1956A" />
        <path d="M114 170c6-26 46-30 54-4-6 8-14 6-18-2-8-10-24-8-30 2-4 6-8 6-6 4z" fill="#3A312C" />
        <path d="M128 178h.1M152 178h.1" stroke="#3A312C" strokeWidth="2.3" strokeLinecap="round" />
        <path d="M130 192c6 5 14 5 20 0" fill="none" stroke="#3A312C" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M108 246c-10 18-6 40 14 52" fill="none" stroke="#D1956A" strokeWidth="11" strokeLinecap="round" />
      </g>

      <g>
        <path d="M430 262c18 36 48 54 84 56-4-34-18-64-36-82-20 6-38 14-48 26z" fill="#F7F1E6" />
        <circle cx="500" cy="168" r="30" fill="#E8B98A" />
        <path d="M474 162c8-28 50-30 56-2-8 8-14 4-18-4-8-8-24-6-30 2-4 6-10 8-8 4z" fill="#2A2420" />
        <path d="M488 170h.1M512 170h.1" stroke="#2A2420" strokeWidth="2.3" strokeLinecap="round" />
        <path d="M490 184c6 5 14 5 20 0" fill="none" stroke="#2A2420" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M536 240c12 16 10 38-6 52" fill="none" stroke="#E8B98A" strokeWidth="11" strokeLinecap="round" />
      </g>
    </SceneFrame>
  );
}
