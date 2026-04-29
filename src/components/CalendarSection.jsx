import { useLang } from '../context/LanguageContext'
import './CalendarSection.css'

const rounds = [
  { round: 1, en: '31 October 2026',  ar: '٣١ أكتوبر ٢٠٢٦' },
  { round: 2, en: '12 December 2026', ar: '١٢ ديسمبر ٢٠٢٦' },
  { round: 3, en: '13 December 2026', ar: '١٣ ديسمبر ٢٠٢٦' },
  { round: 4, en: '16 January 2027',  ar: '١٦ يناير ٢٠٢٧' },
  { round: 5, en: '30 January 2027',  ar: '٣٠ يناير ٢٠٢٧' },
  { round: 6, en: '13 February 2027', ar: '١٣ فبراير ٢٠٢٧' },
  { round: 7, en: '14 February 2027', ar: '١٤ فبراير ٢٠٢٧' },
  { round: 8, en: '17 April 2027',    ar: '١٧ أبريل ٢٠٢٧' },
]

export default function CalendarSection() {
  const { lang, t } = useLang()
  const c = t.calendar

  return (
    <section className="calendar" id="calendar">
      <div className="calendar-container">
        <div className="calendar-header">
          <div className="calendar-label">{c.label}</div>
          <h2 className="calendar-title">{c.title}</h2>
          <p className="calendar-subtitle">{c.subtitle}</p>
        </div>

        <div className="calendar-table">
          <div className="calendar-table-head">
            <span>{c.round}</span>
            <span>{c.date}</span>
          </div>
          {rounds.map(({ round, en, ar }) => (
            <div className="calendar-row" key={round}>
              <span className="calendar-round">
                <span className="round-badge">{String(round).padStart(2, '0')}</span>
              </span>
              <span className="calendar-day">{lang === 'ar' ? ar : en}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
