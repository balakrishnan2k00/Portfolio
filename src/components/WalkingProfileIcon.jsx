export function WalkingProfileIcon({ className = '' }) {
  const headR = 7.5
  const headC = 2 * Math.PI * headR
  const headBand = headC * 0.72
  const headGap = headC - headBand

  return (
    <svg
      className={`profile-icon ${className}`}
      viewBox="0 0 40 40"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <g className="profile-icon__mark">
        <g className="profile-icon__head" transform="translate(20 11.5)">
          <circle
            className="profile-icon__ring-base"
            r={headR}
            fill="none"
            strokeWidth="3.5"
          />
          <g className="profile-icon__ring-spin">
            <circle
              className="profile-icon__ring-accent"
              r={headR}
              fill="none"
              strokeWidth="3.5"
              strokeLinecap="round"
              strokeDasharray={`${headBand} ${headGap}`}
              transform="rotate(-90)"
            />
          </g>
        </g>

        <g className="profile-icon__shoulders">
          <path
            className="profile-icon__arc-base"
            d="M 7 28.25 Q 20 19.25 33 28.25"
            fill="none"
            strokeWidth="3.5"
            strokeLinecap="round"
            pathLength="100"
          />
          <path
            className="profile-icon__arc-accent"
            d="M 7 28.25 Q 20 19.25 33 28.25"
            fill="none"
            strokeWidth="3.5"
            strokeLinecap="round"
            pathLength="100"
            strokeDasharray="46 54"
            strokeDashoffset="0"
          />
        </g>
      </g>
    </svg>
  )
}
