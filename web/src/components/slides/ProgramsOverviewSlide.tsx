import { motion } from 'framer-motion'
import { programs } from '../../config/content'

export function ProgramsOverviewSlide() {
  return (
    <div className="flex flex-col h-full justify-center">
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-center"
        style={{ marginBottom: 64 }}
      >
        <div className="flex items-center justify-center gap-3" style={{ marginBottom: 24 }}>
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-primary/50" />
          <span className="text-xs font-semibold text-primary uppercase tracking-[0.3em]">Offerta Formativa</span>
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-primary/50" />
        </div>
        <h2 className="text-[52px] font-heading font-bold" style={{ marginBottom: 20 }}>
          I Nostri <span className="gradient-text">Corsi di Laurea</span>
        </h2>
        <p className="text-xl text-white/35">Classe L-12  —  Mediazione Linguistica  —  3 Anni / 180 CFU</p>
      </motion.div>

      <div className="flex justify-center" style={{ gap: 28 }}>
        {programs.map((prog, i) => (
          <motion.div
            key={prog.id}
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 + i * 0.12, duration: 0.5 }}
            className="flex-1 max-w-[260px] rounded-2xl bg-white/[0.03] border border-white/8 text-center"
            style={{ padding: '24px 24px' }}
          >
            <h3 className="text-lg font-bold text-white" style={{ marginBottom: 12 }}>{prog.shortName}</h3>
            <p className="text-sm text-white/35 leading-[1.8]">{prog.name}</p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
