import { motion } from 'framer-motion'
import { programs } from '../../../config/content'

export function VProgramsOverviewSlide() {
  return (
    <div className="flex flex-col h-full justify-center">
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-center"
        style={{ marginBottom: 40 }}
      >
        <div className="flex items-center justify-center gap-3" style={{ marginBottom: 16 }}>
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary/50" />
          <span className="text-xs font-semibold text-primary uppercase tracking-[0.3em]">Offerta Formativa</span>
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary/50" />
        </div>
        <h2 className="text-[40px] font-heading font-bold" style={{ marginBottom: 12 }}>
          I Nostri <span className="gradient-text">Corsi di Laurea</span>
        </h2>
        <p className="text-base text-white/35">Classe L-12 — Mediazione Linguistica — 3 Anni / 180 CFU</p>
      </motion.div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        {programs.map((prog, i) => (
          <motion.div
            key={prog.id}
            initial={{ x: 30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 + i * 0.1, duration: 0.4 }}
            className="rounded-xl bg-white/[0.03] border border-white/8"
            style={{ padding: '18px 24px' }}
          >
            <h3 className="text-base font-bold text-white" style={{ marginBottom: 4 }}>{prog.shortName}</h3>
            <p className="text-sm text-white/35">{prog.name}</p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
