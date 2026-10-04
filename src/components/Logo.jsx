// Logo: custom hexagon with the initials "KR", drawn with SVG so it stays sharp at any size
function Logo({ size = 44 }) {
  return (
    <svg
      className="logo"
      width={size}
      height={size}
      viewBox="0 0 100 100"
      role="img"
      aria-label="Kristy Riano logo"
    >
      <polygon className="logo-shape" points="50,4 91,27 91,73 50,96 9,73 9,27" />
      <text className="logo-initials" x="50" y="63" textAnchor="middle">
        KR
      </text>
    </svg>
  )
}

export default Logo
