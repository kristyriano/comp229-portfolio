// Services page: the services offered, each with an image and a description
import services from '../data/services.js'

function Services() {
  return (
    <section className="page">
      <h1 className="page-title">How can I help you?</h1>
      <p className="page-intro">
        I combine tech expertise, digital marketing and AI solutions to create strategies
        that drive growth.
      </p>

      <ul className="service-list">
        {services.map((service) => (
          <li className="service" key={service.id}>
            <img className="service-image" src={service.image} alt={service.imageDescription} />
            <h2>{service.name}</h2>
            <p>{service.description}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Services
