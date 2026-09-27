function Spark({ x, y, s = 6 }: { x: number; y: number; s?: number }) {
  const a = s * 0.28
  return (
    <path
      d={`M${x} ${y - s} L${x + a} ${y - a} L${x + s} ${y} L${x + a} ${y + a} L${x} ${y + s} L${x - a} ${y + a} L${x - s} ${y} L${x - a} ${y - a} Z`}
      className="fill-gold"
    />
  )
}

export function PosterArch({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 760 760"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <g className="stroke-primary" strokeWidth="1.15">
        <path d="M380 48a332 332 0 0 0 0 664" />
        <path d="M380 98a282 282 0 0 0 0 564" />
        <path d="M380 154a226 226 0 0 0 0 452" />
        <path d="M48 380h90M622 380h90" />
      </g>

      <path d="M380 48a332 332 0 0 1 0 664V48Z" className="fill-primary" />

      <g stroke="white" strokeOpacity="0.45" strokeWidth="1">
        <path d="M380 98a282 282 0 0 1 0 564" />
        <path d="M380 154a226 226 0 0 1 0 452" />
        <path d="M520 180c70 80 86 190 40 290" />
        <path d="M560 240c40 70 36 150-8 220" />
      </g>

      <g className="stroke-gold" strokeWidth="1.15">
        <path d="M360 168 210 250" />
        <path d="M352 176 150 310" />
        <path d="M346 188 110 390" />
        <path d="M340 202 90 470" />
        <path d="M348 214 150 520" />
        <path d="M368 160 250 200" />
      </g>

      <circle
        cx="380"
        cy="168"
        r="34"
        className="fill-background stroke-primary"
        strokeWidth="1.2"
      />
      <circle cx="380" cy="168" r="10" className="fill-gold" />
      <circle
        cx="380"
        cy="168"
        r="20"
        className="stroke-gold"
        strokeWidth="0.8"
      />

      <Spark x={470} y={230} />
      <Spark x={560} y={280} s={5} />
      <Spark x={510} y={360} s={8} />
      <Spark x={610} y={420} s={4} />
      <Spark x={450} y={470} />
      <Spark x={580} y={520} s={6} />
      <Spark x={250} y={240} s={4} />

      <g className="fill-primary">
        <path d="M118 500c-22-4-46 8-52 20 14-1 24 3 30 11-6-16 6-24 22-29z" />
        <ellipse cx="148" cy="518" rx="32" ry="14" />
        <circle cx="180" cy="506" r="10" />
        <path d="M188 504h16l-14 6z" />
      </g>
      <path
        d="M132 512c4-32 28-48 44-36-8 10-16 26-14 40-12-1-22-1-30-4z"
        className="fill-background stroke-primary"
        strokeWidth="1.15"
      />
      <circle cx="184" cy="504" r="1.5" className="fill-background" />

      <circle
        cx="168"
        cy="468"
        r="13"
        className="stroke-primary"
        strokeWidth="1.15"
      />
      <path
        d="M168 450v-8M168 486v8M150 468h-8M186 468h8"
        className="stroke-gold"
        strokeWidth="1.15"
      />

      <rect x="214" y="560" width="64" height="42" className="fill-gold" />
      <rect
        x="222"
        y="568"
        width="48"
        height="26"
        className="stroke-background"
        strokeWidth="1"
      />

      <g
        className="fill-primary"
        fontFamily="Georgia, serif"
        fontSize="18"
      >
        <text x="372" y="36" textAnchor="middle">
          N
        </text>
        <text x="86" y="548" textAnchor="middle">
          S
        </text>
      </g>

      <g className="stroke-primary" strokeWidth="1">
        <circle cx="96" cy="210" r="16" />
        <path d="M96 188v-10M96 232v10M74 210H64M118 210h10" />
        <circle cx="250" cy="640" r="11" />
        <path d="M250 624v-8M250 656v8M234 640h-8M266 640h8" />
      </g>
    </svg>
  )
}
