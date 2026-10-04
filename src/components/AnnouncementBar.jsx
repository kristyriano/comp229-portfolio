// AnnouncementBar: orange strip above the navbar that invites visitors to get in touch
import { Link } from 'react-router-dom'

function AnnouncementBar() {
  return (
    <div className="announcement">
      <p>Do you want your business to be found online?</p>
      <Link to="/contact" className="announcement-button">
        Let's talk
      </Link>
    </div>
  )
}

export default AnnouncementBar
