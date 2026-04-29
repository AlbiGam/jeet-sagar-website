import { useLang } from '../context/LanguageContext'
import './PartnersSection.css'

export default function PartnersSection() {
  const { t } = useLang()
  const p = t.partners

  return (
    <section className="partners" id="partners">
      <div className="partners-container">
        <div className="partners-intro">
          <p className="partners-kicker">{p.kicker}</p>
          <h2 className="partners-title">{p.title}</h2>
          <p className="partners-description">{p.description}</p>
        </div>

        <div className="partners-grid">
          <article className="partner-card">
            <div className="partner-logo-wrap">
              <img src={`${import.meta.env.BASE_URL}technical_partner.png`} alt="AiMotor logo" className="partner-logo" />
            </div>
            <div className="partner-body">
              <h3 className="partner-name">{p.aimotor.name}</h3>
              <p className="partner-role">{p.aimotor.role}</p>
              <p className="partner-copy">{p.aimotor.copy}</p>
            </div>
          </article>

          <article className="partner-card">
            <div className="partner-logo-wrap">
              <img src={`${import.meta.env.BASE_URL}main_sponor.jpeg`} alt="Al Majarah Jewellers logo" className="partner-logo" />
            </div>
            <div className="partner-body">
              <h3 className="partner-name">{p.almajarah.name}</h3>
              <p className="partner-role">{p.almajarah.role}</p>
              <p className="partner-copy">{p.almajarah.copy}</p>
            </div>
          </article>
        </div>

        <div className="partners-cta">
          <h3 className="partners-cta-title">{p.ctaTitle}</h3>
          <p className="partners-cta-text">{p.ctaText}</p>
        </div>
      </div>
    </section>
  )
}
