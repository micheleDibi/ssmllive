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

export function VExamsSlide() {
  return (
    <div className="flex flex-col h-full justify-center">
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        style={{ marginBottom: 32 }}
      >
        <div className="flex items-center gap-3" style={{ marginBottom: 16 }}>
          <div className="h-0.5 w-12 bg-primary" />
          <span className="text-xs font-semibold text-primary uppercase tracking-[0.3em]">A.A. 2024/25</span>
        </div>
        <h2 className="text-[40px] font-heading font-bold text-white leading-tight">
          Calendario <span className="gradient-text">Esami</span>
        </h2>
      </motion.div>

      <div className="grid grid-cols-2" style={{ gap: 10 }}>
        {sessions.map((session, i) => (
          <motion.div
            key={session.month}
            initial={{ y: 15, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 + i * 0.05 }}
            className={`rounded-lg border flex items-center justify-between ${
              session.extra ? 'bg-primary/[0.04] border-primary/15' : 'bg-white/[0.03] border-white/8'
            }`}
            style={{ padding: '14px 18px' }}
          >
            <div>
              <p className="text-sm font-semibold text-white">{session.month}</p>
              {session.extra && (
                <span className="text-[9px] text-primary/70 uppercase tracking-wider font-semibold">Straord.</span>
              )}
            </div>
            <p className="text-xs text-white/40">{session.dates}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="bg-white/[0.03] border border-white/8 rounded-xl"
        style={{ padding: '16px 20px', marginTop: 24, display: 'flex', flexDirection: 'column', gap: 10 }}
      >
        {[
          'Iscrizione online su corsi.ssmllameziaterme.it',
          'Iscrizione entro 5 giorni prima della sessione',
          'Max 3 esami per sessione — Max 1 al giorno',
        ].map((rule, i) => (
          <div key={i} className="flex items-center gap-3">
            <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
            <p className="text-xs text-white/40">{rule}</p>
          </div>
        ))}
      </motion.div>
    </div>
  )
}
