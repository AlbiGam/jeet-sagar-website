import { useLang } from '../context/LanguageContext'
import './HeroSection.css'

export default function HeroSection() {
  const { t } = useLang()

  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-image">
          <div className="image-placeholder">
            <img src="/main_page.jpeg" alt="Jeet Sagar - Karting Driver" />
          </div>
        </div>

        <div className="hero-content">
          <div className="hero-label">{t.hero.label}</div>

          <h1 className="hero-title">
            JEET<br />SAGAR
          </h1>

          <p className="hero-subtitle">{t.hero.subtitle}</p>

          <a className="cta-button" href="#about">
            {t.hero.cta}
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{marginInlineStart: '8px'}}>
              <polyline points="13 17 20 10 13 3"></polyline>
              <polyline points="20 10 0 10"></polyline>
            </svg>
          </a>

          <div className="hero-indicators">
            <div className="indicator active"></div>
            <div className="indicator"></div>
            <div className="indicator"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
