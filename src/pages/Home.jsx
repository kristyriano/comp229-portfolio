// Home page: welcome message, mission statement and links to the other pages
import { Link, useLocation } from 'react-router-dom'

function Home() {
  // When the contact form redirects here, it sends the visitor's name in location.state
  const location = useLocation()
  const senderFirstName = location.state?.senderFirstName

  return (
    <section className="home">
      {/* Confirmation shown only after the contact form was submitted */}
      {senderFirstName && (
        <p className="notice" role="status">
          Thank you, {senderFirstName}. Your message was received.
        </p>
      )}

      <div className="home-grid">
        <div>
          <p className="home-greeting">Hi, I'm Kristy Riano. Everything you dream of is possible!</p>
          <h1 className="home-title">Helping businesses grow with software built for them.</h1>

          <p className="home-mission">
            <strong>My mission:</strong> to drive growth through innovative solutions,
            empower others through education, and understand multicultural audiences.
          </p>

          <div className="button-row">
            <Link to="/about" className="button button-primary">
              Learn about me
            </Link>
            <Link to="/projects" className="button button-secondary">
              See my projects
            </Link>
          </div>
        </div>

        {/* Decorative hexagon that repeats the shape of the logo */}
        <svg className="home-shape" viewBox="0 0 100 100" aria-hidden="true">
          <polygon points="50,4 91,27 91,73 50,96 9,73 9,27" />
          <text x="50" y="66" textAnchor="middle">
            KR
          </text>
        </svg>
      </div>
    </section>
  )
}

export default Home
