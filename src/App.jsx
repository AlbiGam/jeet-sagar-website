import { LanguageProvider } from './context/LanguageContext'
import Navigation from './components/Navigation'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import PartnersSection from './components/PartnersSection'
import CalendarSection from './components/CalendarSection'
import ContactSection from './components/ContactSection'
import './App.css'

function App() {
  return (
    <LanguageProvider>
      <div className="app">
        <Navigation />
        <HeroSection />
        <AboutSection />
        <PartnersSection />
        <CalendarSection />
        <ContactSection />
      </div>
    </LanguageProvider>
  )
}

export default App
