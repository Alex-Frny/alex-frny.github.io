// Illustration originale en SVG : architecture en ruine et épée dans les braises.
export default function EmberScene() {
  return <svg className="ember-scene" viewBox="0 0 600 680" fill="none" aria-hidden="true">
    <defs>
      <radialGradient id="ember-halo"><stop stopColor="var(--fire)" stopOpacity=".3" /><stop offset="1" stopColor="var(--fire)" stopOpacity="0" /></radialGradient>
      <linearGradient id="blade-metal" x1="300" y1="200" x2="330" y2="510" gradientUnits="userSpaceOnUse"><stop stopColor="#ece7da" /><stop offset=".45" stopColor="#8e8980" /><stop offset="1" stopColor="#38332f" /></linearGradient>
      <linearGradient id="ruin-stone" x1="100" y1="50" x2="500" y2="580" gradientUnits="userSpaceOnUse"><stop stopColor="var(--ruin)" stopOpacity=".35" /><stop offset="1" stopColor="var(--ruin)" stopOpacity=".03" /></linearGradient>
    </defs>
    <circle cx="310" cy="320" r="235" stroke="var(--ornament)" strokeOpacity=".09" />
    <circle cx="310" cy="320" r="220" stroke="var(--ornament)" strokeOpacity=".08" strokeDasharray="2 10" />
    <circle cx="310" cy="174" r="65" fill="var(--ornament)" opacity=".025" />
    <circle cx="310" cy="174" r="65" stroke="var(--ornament)" strokeOpacity=".3" />
    <circle cx="325" cy="159" r="58" fill="var(--scene-bg)" />
    <path d="M124 536V249C124 135 199 64 310 64c111 0 186 71 186 185v287h-33V249c0-96-59-152-153-152S157 153 157 249v287Z" fill="url(#ruin-stone)" />
    <path d="M143 515V249c0-103 65-168 167-168s167 65 167 168v266M109 537h70m262 0h70M117 504h52m282 0h52M129 252h30m-29 75h27m-27 75h27m305-150h29m-28 75h29m-29 75h29M178 146l21 16m224-16-21 16M248 79l10 30m103-30-10 30" stroke="var(--ornament)" strokeOpacity=".15" />
    <path d="m68 558 94-25h278l97 25M48 580h506M30 604h541M13 632h575" stroke="var(--ornament)" strokeOpacity=".12" />
    <ellipse cx="311" cy="529" rx="190" ry="108" fill="url(#ember-halo)" />
    <path d="m232 536 39-24 36 8 27-8 37 25-33 7-34-2-38 4Z" fill="#302923" stroke="var(--ornament)" strokeWidth=".8" />
    <g className="sword">
      <path d="m301 306 18-2 2 155-10 54-12-55Z" fill="url(#blade-metal)" />
      <path d="m310 311 1 190" stroke="#f1ede1" strokeOpacity=".65" />
      <path d="m265 304 7-10 32 3 11-2 36-8 8 10-39 9-17 2Z" fill="var(--metal-fill)" stroke="var(--ornament)" strokeWidth="1.5" />
      <path d="m302 242 12-1 3 54-12 2Z" fill="var(--metal-dark)" stroke="var(--ornament)" />
      <path d="m303 250 12 4m-12 5 12 4m-11 5 12 4m-11 5 12 4m-11 5 11 4" stroke="var(--ornament)" strokeWidth="2" />
      <path d="m300 235 9-13 10 12-9 10Z" fill="var(--ornament)" />
    </g>
    <g className="flame-core" fill="var(--fire)">
      <path d="M289 536c-21-24 7-33 0-59 23 18 10 27 20 39 0-22 17-24 16-44 28 35-5 44 9 65Z" opacity=".75" />
      <path d="M301 538c-10-15 4-23 3-34 16 11 5 21 14 34Z" fill="var(--flame-core)" />
    </g>
    <g className="ember-particles" fill="var(--fire)">
      <circle cx="264" cy="453" r="2" /><circle cx="345" cy="426" r="1.7" /><circle cx="278" cy="389" r="1" /><circle cx="360" cy="483" r="1.5" /><circle cx="236" cy="495" r="1" /><circle cx="330" cy="362" r="1.2" />
    </g>
    <path d="m96 333 7-7 7 7-7 7Zm413-94 5-5 5 5-5 5Z" stroke="var(--ornament)" strokeOpacity=".4" />
    <text x="310" y="661" textAnchor="middle" fill="var(--ornament)" opacity=".6" fontSize="9" letterSpacing="6">CHAQUE PROJET, UNE NOUVELLE QUÊTE</text>
  </svg>;
}
