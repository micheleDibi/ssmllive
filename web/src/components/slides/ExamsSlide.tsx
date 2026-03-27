import { motion } from 'framer-motion'

const sessions = [
  { month: 'Ottobre', dates: '28 – 31 Ott 2024' },
  { month: 'Novembre', dates: '25 – 28 Nov 2024' },
  { month: 'Gennaio', dates: '7 – 10 Gen 2025' },
  { month: 'Febbraio', dates: '10 – 13 Feb 2025', extra: true },
  { month: 'Marzo', dates: '24 – 27 Mar 2025' },
  { month: 'Aprile', dates: '22 – 24 Apr 2025' },
  { month: 'Maggio', dates: '26 – 29 Mag 2025', extra: true },
  { month: 'Giugno', dates: '23 – 26 Giu 2025' },
  { month: 'Luglio', dates: '28 – 31 Lug 2025' },
  { month: 'Settembre', dates: '22 – 25 Set 2025' },
]

const rules = [
  'Iscrizione esclusivamente online su corsi.ssmllameziaterme.it',
  'Iscrizione entro 5 giorni prima della sessione',
  'Massimo 3 esami per sessione',
  'Massimo 1 esame al giorno',
]

export function ExamsSlide() {
  return (
    <div className="flex h-full items-center" style={{ gap: 56 }}>
      {/* Left: Info */}
      <div className="w-[380px] shrink-0">
        <motion.div
          initial={{ x: -30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3" style={{ marginBottom: 28 }}>
            <div className="h-0.5 w-12 bg-primary" />
            <span className="text-xs font-semibold text-primary uppercase tracking-[0.3em]">A.A. 2024/25</span>
          </div>

          <h2 className="text-[44px] font-heading font-bold text-white leading-tight" style={{ marginBottom: 20 }}>
            Calendario <span className="gradient-text">Esami</span>
          </h2>

          <p className="text-lg text-white/40 leading-[1.8]" style={{ marginBottom: 44 }}>
            Sessioni d'esame con modalità digitale a risposta multipla in sede.
            Le prove di competenza linguistica prevedono scritto e orale.
          </p>

          <div className="bg-white/[0.03] border border-white/8 rounded-2xl" style={{ padding: '20px 24px', display: 'flex', flexDirection: 'column', gap: 14 }}>
            {rules.map((rule, i) => (
              <motion.div
                key={i}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.5 + i * 0.1 }}
                className="flex items-center gap-3"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                <p className="text-sm text-white/45">{rule}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Right: Calendar grid */}
      <div className="flex-1">
        <motion.div
          initial={{ x: 30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="grid grid-cols-2"
          style={{ gap: 16 }}
        >
          {sessions.map((session, i) => (
            <motion.div
              key={session.month}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 + i * 0.06 }}
              className={`rounded-xl border ${
                session.extra
                  ? 'bg-primary/[0.04] border-primary/15'
                  : 'bg-white/[0.03] border-white/8'
              } flex items-center justify-between`}
              style={{ padding: '16px 24px' }}
            >
              <div>
                <p className="text-base font-semibold text-white" style={{ marginBottom: session.extra ? 6 : 0 }}>{session.month}</p>
                {session.extra && (
                  <span className="text-[10px] text-primary/70 uppercase tracking-wider font-semibold">Straordinaria</span>
                )}
              </div>
              <p className="text-sm text-white/45">{session.dates}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-sm text-white/25 text-right"
          style={{ marginTop: 24 }}
        >
          Sessione di laurea: Settembre 2025
        </motion.p>
      </div>
    </div>
  )
}
