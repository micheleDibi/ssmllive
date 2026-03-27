import { institution } from '../../config/content'

const tickerItems = [
  institution.phone,
  institution.website,
  'Classe L-12 — Mediazione Linguistica',
  institution.address,
  '5 Indirizzi di Laurea Triennale',
  'Programma Erasmus+ 2021-2027',
  institution.enrollmentSpots + ' Posti Disponibili',
  institution.orientationCenters + '+ Poli di Orientamento in Italia',
  institution.email,
]

export function LiveTicker() {
  const sep = '\u00A0\u00A0\u00A0\u00A0\u2014\u00A0\u00A0\u00A0\u00A0'
  const text = tickerItems.join(sep)

  return (
    <div className="absolute bottom-8 left-0 right-0 overflow-hidden z-20">
      <div className="bg-white/[0.03] backdrop-blur-sm border-t border-b border-white/5 py-2.5">
        <div className="animate-ticker whitespace-nowrap">
          <span className="text-sm text-white/50 tracking-wide">
            {text}{sep}{text}
          </span>
        </div>
      </div>
    </div>
  )
}
