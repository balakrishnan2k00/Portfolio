export function BrandLogo({ className = '' }) {
  return (
    <svg
      className={`brand-logo ${className}`}
      viewBox="0 0 40 40"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="brand-gloss-fill" x1="20" y1="2" x2="20" y2="38" gradientUnits="userSpaceOnUse">
          <stop className="brand-logo__fill-top" offset="0%" />
          <stop className="brand-logo__fill-mid" offset="48%" />
          <stop className="brand-logo__fill-bottom" offset="100%" />
        </linearGradient>
        <linearGradient id="brand-gloss-shine" x1="20" y1="6" x2="20" y2="22" gradientUnits="userSpaceOnUse">
          <stop className="brand-logo__shine-a" offset="0%" />
          <stop className="brand-logo__shine-b" offset="100%" />
        </linearGradient>
      </defs>

      <rect
        className="brand-logo__bg"
        width="40"
        height="40"
        rx="11"
        fill="url(#brand-gloss-fill)"
      />
      <rect
        className="brand-logo__rim"
        x="1"
        y="1"
        width="38"
        height="38"
        rx="10"
        fill="none"
        strokeWidth="1"
      />
      <ellipse cx="20" cy="11" rx="13" ry="7" fill="url(#brand-gloss-shine)" />
      <text
        className="brand-logo__text"
        x="20"
        y="27"
        textAnchor="middle"
        fontFamily="'DM Sans', system-ui, sans-serif"
        fontSize="16"
        fontWeight="800"
        letterSpacing="-0.04em"
      >
        BA
      </text>
    </svg>
  )
}
