import { useLang } from '../context/LanguageContext'
import './ContactSection.css'

export default function ContactSection() {
  const { t } = useLang()
  const c = t.contact

  return (
    <section className="contact" id="contact">
      <div className="contact-container">
        <p className="contact-label">{c.label}</p>
        <h2 className="contact-title">{c.title}</h2>
        <p className="contact-subtitle">{c.subtitle}</p>

        <div className="contact-cards">
          <a className="contact-card" href="mailto:jeetsgar44w109@gmail.com">
            <span className="contact-card-title">{c.email}</span>
            <span className="contact-card-value">jeetsgar44w109@gmail.com</span>
          </a>

          <a className="contact-card" href="tel:+97333413625">
            <span className="contact-card-title">{c.phone}</span>
            <span className="contact-card-value">+973 33413625</span>
          </a>
        </div>
      </div>
    </section>
  )
}
