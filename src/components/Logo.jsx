// Logo: custom black and white microchip with the initials "KR".
// It is drawn with SVG so it stays sharp at any size.

// Position of the three connector pins on every side of the chip
const pinPositions = [36, 50, 64]

function Logo({ size = 44, className = 'logo' }) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 100 100"
      role="img"
      aria-label="Kristy Riano logo"
    >
      {/* Connector pins: one line and one dot per pin, on the four sides */}
      {pinPositions.map((pinPosition) => (
        <g key={pinPosition}>
          <path
            className="logo-pin"
            d={`M${pinPosition} 24V10M${pinPosition} 76v14M24 ${pinPosition}H10M76 ${pinPosition}h14`}
          />
          <circle className="logo-dot" cx={pinPosition} cy="8" r="3.5" />
          <circle className="logo-dot" cx={pinPosition} cy="92" r="3.5" />
          <circle className="logo-dot" cx="8" cy={pinPosition} r="3.5" />
          <circle className="logo-dot" cx="92" cy={pinPosition} r="3.5" />
        </g>
      ))}

      {/* Chip body with the initials */}
      <rect className="logo-body" x="22" y="22" width="56" height="56" rx="8" />
      <text className="logo-initials" x="50" y="60" textAnchor="middle">
        KR
      </text>
    </svg>
  )
}

export default Logo
