import { useLang } from '../context/LanguageContext'
import './Navigation.css'

export default function Navigation() {
  const { lang, toggleLang, t } = useLang()

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <img src={`${import.meta.env.BASE_URL}logo.jpeg`} alt="Jeet Sagar Logo" className="logo-image" />
        </div>

        <div className="navbar-menu">
          <a href="#about" className="nav-link">{t.nav.about}</a>
          <a href="#partners" className="nav-link">{t.nav.partners}</a>
          <a href="#calendar" className="nav-link">{t.nav.calendar}</a>
          <a href="#contact" className="nav-link">{t.nav.contact}</a>
        </div>

        <div className="navbar-right">
          <div className="language-selector">
            <button className="language-btn" onClick={toggleLang} aria-label="Toggle language">
              {lang === 'en' ? 'EN' : 'AR'}
            </button>
          </div>

          <div className="social-icons">
            <a href="https://www.instagram.com/jeet_sagar9?igsh=djc5b2RyZm9saGdk" className="social-link" title="Instagram" target="_blank" rel="noopener noreferrer">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <circle cx="17.5" cy="6.5" r="1.5"></circle>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}
