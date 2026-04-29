import { useLang } from '../context/LanguageContext'
import './AboutSection.css'

export default function AboutSection() {
  const { t } = useLang()
  const a = t.about

  return (
    <section className="about" id="about">
      <div className="about-container">
        <div className="about-content">
          <div className="about-label">{a.label}</div>
          <h2 className="about-title">{a.title}</h2>

          <div className="about-text">
            <p>{a.p1}</p>
            <p>{a.p2}</p>
            <p>{a.p3}</p>
            <p>{a.p4}</p>
            <p>{a.p5}</p>
          </div>
        </div>

        <aside className="about-card" aria-label="Driver profile summary">
          <img src="/main_page.jpeg" alt="Jeet Sagar karting" className="about-card-image" />
          <div className="about-card-body">
            <h3 className="about-card-name">JEET SAGAR</h3>
            <p className="about-card-meta">{a.meta}</p>

            <div className="about-stats">
              <div className="about-stat">
                <span className="about-stat-value">{a.stat1Value}</span>
                <span className="about-stat-label">{a.stat1Label}</span>
              </div>
              <div className="about-stat">
                <span className="about-stat-value">{a.stat2Value}</span>
                <span className="about-stat-label">{a.stat2Label}</span>
              </div>
              <div className="about-stat">
                <span className="about-stat-value">{a.stat3Value}</span>
                <span className="about-stat-label">{a.stat3Label}</span>
              </div>
              <div className="about-stat">
                <span className="about-stat-value">{a.stat4Value}</span>
                <span className="about-stat-label">{a.stat4Label}</span>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </section>
  )
}
