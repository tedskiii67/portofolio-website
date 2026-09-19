import { useId } from "react";
import type { Project } from "../content";

const themes: Record<string, { kind: string; color: string; word: string }> = {
  "UX Research": { kind: "research", color: "#d7b6f5", word: "Understand." },
  "Data": { kind: "data", color: "#91dfcf", word: "Find the pattern." },
  "Software Development": { kind: "code", color: "#9bbdff", word: "Make it work." },
  "UI Design": { kind: "design", color: "#f0bad2", word: "Shape the experience." },
  "Product Strategy": { kind: "strategy", color: "#ead29b", word: "Find the direction." },
};

export function CategoryCover({ project }: { project: Project }) {
  const id = useId();
  const theme = themes[project.category] ?? themes["UI Design"];
  const variant = [...project.id].reduce((sum, char) => sum + char.charCodeAt(0), 0) % 3;
  return (
    <div className="project-visual category-cover" data-kind={theme.kind} aria-hidden="true">
      <svg className="category-art" viewBox="0 0 600 340" fill="none">
        <defs>
          <linearGradient id={`${id}-surface`} x1="130" y1="35" x2="470" y2="310" gradientUnits="userSpaceOnUse">
            <stop stopColor={theme.color} stopOpacity=".2" /><stop offset="1" stopColor={theme.color} stopOpacity=".025" />
          </linearGradient>
          <radialGradient id={`${id}-glow`}>
            <stop stopColor={theme.color} stopOpacity=".19" /><stop offset="1" stopColor={theme.color} stopOpacity="0" />
          </radialGradient>
          <pattern id={`${id}-grid`} width="24" height="24" patternUnits="userSpaceOnUse">
            <circle cx="1" cy="1" r="1" fill={theme.color} fillOpacity=".13" />
          </pattern>
        </defs>
        <rect width="600" height="340" fill={`url(#${id}-grid)`} />
        <ellipse cx="345" cy="155" rx="255" ry="195" fill={`url(#${id}-glow)`} />
        <g className="category-object">
          {theme.kind === "research" && <>
            <path d="M170 92C330 50 262 202 405 113M174 213C293 249 285 121 409 208" stroke={theme.color} strokeOpacity=".4" strokeDasharray="4 6" />
            <g transform={`translate(130 48) rotate(${-8 + variant * 2} 80 85)`}>
              <rect width="145" height="174" rx="14" fill="#e5ddec" />
              <circle cx="27" cy="28" r="7" fill="#8c6ca8" />
              <path d="M43 25H99M43 32H76" stroke="#8c6ca8" strokeWidth="3" strokeLinecap="round" />
              {[65, 79, 93, 125, 139].map((y, i) => <path key={y} d={`M22 ${y}H${i % 2 ? 90 : 120}`} stroke="#8c6ca8" strokeOpacity=".35" strokeWidth="5" strokeLinecap="round" />)}
            </g>
            <rect x="326" y="52" width="144" height="64" rx="12" fill={`url(#${id}-surface)`} stroke={theme.color} strokeOpacity=".45" />
            <text x="345" y="78" fill={theme.color} fontSize="12">Observe</text>
            <path d="M345 94H421" stroke={theme.color} strokeOpacity=".25" strokeWidth="4" strokeLinecap="round" />
            <rect x="351" y="148" width="142" height="65" rx="12" fill={`url(#${id}-surface)`} stroke={theme.color} strokeOpacity=".45" />
            <text x="370" y="175" fill={theme.color} fontSize="12">{variant === 0 ? "Ask why" : "Connect insights"}</text>
            <path d="M370 192H443" stroke={theme.color} strokeOpacity=".25" strokeWidth="4" strokeLinecap="round" />
            <circle cx="293" cy="143" r="25" fill="#292132" stroke={theme.color} />
            <path d="m283 143 7 7 13-14" stroke={theme.color} strokeWidth="2" />
          </>}
          {theme.kind === "data" && <>
            <g transform="translate(122 47) rotate(-4 170 85)">
              <rect width="342" height="173" rx="15" fill={`url(#${id}-surface)`} stroke={theme.color} strokeOpacity=".35" />
              {[43, 80, 117, 150].map(y => <path key={y} d={`M22 ${y}H320`} stroke={theme.color} strokeOpacity=".13" />)}
              {Array.from({ length: 11 }, (_, i) => {
                const h = 22 + ((i * 23 + variant * 31) % 85);
                return <rect key={i} x={25 + i * 27} y={150 - h} width="14" height={h} rx="4" fill={theme.color} fillOpacity={.17 + i * .045} />;
              })}
              <path d={variant === 0 ? "M25 114C64 130 90 50 132 79S203 30 238 52 292 22 320 34" : "M25 85C58 33 97 131 137 87S199 111 239 52 291 95 320 31"} stroke={theme.color} strokeWidth="3" strokeLinecap="round" />
            </g>
            <circle cx="459" cy="66" r="31" fill="#152e2c" stroke={theme.color} strokeOpacity=".6" />
            <path d="M459 45V66L475 75" stroke={theme.color} strokeWidth="3" strokeLinecap="round" />
            <circle cx="459" cy="66" r="21" stroke={theme.color} strokeOpacity=".2" strokeWidth="5" />
          </>}
          {theme.kind === "code" && <>
            <path d="M276 113H351V67H440M350 114V194H437" stroke={theme.color} strokeOpacity=".45" strokeWidth="2" />
            <g transform="translate(110 48) rotate(-5 115 82)">
              <rect width="242" height="170" rx="14" fill="#161e2c" stroke={theme.color} strokeOpacity=".45" />
              <path d="M0 29H242" stroke={theme.color} strokeOpacity=".2" />
              {[18, 30, 42].map(x => <circle key={x} cx={x} cy="15" r="3" fill={theme.color} fillOpacity=".6" />)}
              <text x="22" y="69" fill={theme.color} fontSize="23" fontFamily="monospace">&lt;{variant === 0 ? "build" : "app"} /&gt;</text>
              {[88, 107, 126, 145].map((y, i) => <path key={y} d={`M${i % 2 ? 39 : 23} ${y}H${i % 2 ? 173 : 202}`} stroke={theme.color} strokeWidth="5" strokeOpacity={i === 1 ? ".5" : ".2"} strokeLinecap="round" />)}
            </g>
            {[{ y: 42, label: project.stack[0] }, { y: 169, label: project.stack[1] }].map(({ y, label }) => <g key={y}>
              <rect x="392" y={y} width="121" height="52" rx="12" fill="#202b40" stroke={theme.color} strokeOpacity=".6" />
              <text x="452" y={y + 31} textAnchor="middle" fill={theme.color} fontSize="12">{label}</text>
            </g>)}
          </>}
          {theme.kind === "design" && <>
            <g transform="translate(146 46) rotate(-7 105 82)">
              <rect width="236" height="165" rx="14" fill={`url(#${id}-surface)`} stroke={theme.color} strokeOpacity=".45" />
              <rect x="17" y="18" width="202" height="29" rx="6" fill={theme.color} fillOpacity=".15" />
              <rect x="17" y="60" width="92" height="86" rx="7" fill={theme.color} fillOpacity=".4" />
              <path d="M125 69H205M125 83H190M125 97H201" stroke={theme.color} strokeOpacity=".3" strokeWidth="5" strokeLinecap="round" />
              <rect x="125" y="122" width="61" height="22" rx="5" fill={theme.color} fillOpacity=".6" />
            </g>
            <g transform="translate(362 55) rotate(9 42 84)">
              <rect width="86" height="168" rx="17" fill="#332331" stroke={theme.color} strokeOpacity=".65" />
              <rect x="25" y="8" width="36" height="5" rx="3" fill={theme.color} fillOpacity=".25" />
              <rect x="11" y="29" width="64" height="72" rx="9" fill={theme.color} fillOpacity=".35" />
              <path d="M14 117H65M14 128H51" stroke={theme.color} strokeWidth="4" strokeOpacity=".5" strokeLinecap="round" />
              <rect x="11" y="143" width="64" height="13" rx="5" fill={theme.color} fillOpacity=".65" />
            </g>
          </>}
          {theme.kind === "strategy" && <>
            <path d="M144 181C254 181 242 123 312 123S384 64 453 64" stroke={theme.color} strokeOpacity=".4" strokeWidth="2" strokeDasharray="5 7" />
            {[{x:112,y:142,label:"Discover"},{x:270,y:84,label:"Prioritize"},{x:417,y:31,label:"Validate"}].map(({x,y,label},i) => <g key={label}>
              <rect x={x} y={y} width="106" height="70" rx="12" fill={`url(#${id}-surface)`} stroke={theme.color} strokeOpacity=".5" />
              <circle cx={x + 22} cy={y + 23} r="8" fill={theme.color} fillOpacity=".4" />
              <text x={x + 18} y={y + 54} fill={theme.color} fontSize="12">{label}</text>
              <text x={x + 75} y={y + 27} fill={theme.color} fillOpacity=".55" fontSize="10">0{i + 1}</text>
            </g>)}
          </>}
        </g>
        <text x="32" y="294" fill={theme.color} fontSize="25" fontWeight="500" letterSpacing="-1">{theme.word}</text>
        <text x="33" y="318" fill={theme.color} fillOpacity=".5" fontSize="9" letterSpacing="1.8">ILLUSTRATIVE COVER</text>
      </svg>
    </div>
  );
}
