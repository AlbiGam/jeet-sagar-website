import { useLang } from '../context/LanguageContext'
import './CalendarSection.css'

const rounds = [
  { round: 1,  dateEn: '31 OCT 2026',  dateAr: '٣١ أكت ٢٠٢٦',  track: 'Bahrain International Karting Circuit', championship: 'BRMC', status: 'scheduled' },
  { round: 2,  dateEn: '12 DEC 2026',  dateAr: '١٢ ديس ٢٠٢٦',  track: 'Bahrain International Karting Circuit', championship: 'BRMC', status: 'scheduled' },
  { round: 3,  dateEn: '13 DEC 2026',  dateAr: '١٣ ديس ٢٠٢٦',  track: 'Bahrain International Karting Circuit', championship: 'BRMC', status: 'scheduled' },
  { round: 4,  dateEn: '16 JAN 2027',  dateAr: '١٦ يناير ٢٠٢٧', track: 'Bahrain International Karting Circuit', championship: 'BRMC', status: 'scheduled' },
  { round: 5,  dateEn: '30 JAN 2027',  dateAr: '٣٠ يناير ٢٠٢٧', track: 'Bahrain International Karting Circuit', championship: 'BRMC', status: 'scheduled' },
  { round: 6,  dateEn: '13 FEB 2027',  dateAr: '١٣ فبراير ٢٠٢٧', track: 'Bahrain International Karting Circuit', championship: 'BRMC', status: 'scheduled' },
  { round: 7,  dateEn: '14 FEB 2027',  dateAr: '١٤ فبراير ٢٠٢٧', track: 'Bahrain International Karting Circuit', championship: 'BRMC', status: 'scheduled' },
  { round: 8,  dateEn: '17 APR 2027',  dateAr: '١٧ أبريل ٢٠٢٧', track: 'Bahrain International Karting Circuit', championship: 'BRMC', status: 'scheduled' },
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

        <div className="calendar-list">
          {rounds.map(({ round, dateEn, dateAr, track, championship, status }) => (
            <div className="calendar-item" key={round}>
              <div className="calendar-item-left">
                <span className="calendar-item-date">{lang === 'ar' ? dateAr : dateEn}</span>
                <span className="calendar-item-track">{track}</span>
              </div>
              <div className="calendar-item-right">
                <span className={`calendar-status calendar-status--${status}`}>
                  {status === 'scheduled' ? (lang === 'ar' ? 'مجدول' : 'SCHEDULED') : (lang === 'ar' ? 'منتهي' : 'FINISHED')}
                </span>
                <span className="calendar-item-champ">{championship} R{round}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
