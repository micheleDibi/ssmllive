import { motion } from 'framer-motion'

const projects = [
  {
    title: 'LifeComp e FindYourGoal.it',
    description: 'Ricerca innovativa sulle competenze caratteriali (character skills) e non cognitive come predittori del successo professionale e della transizione scuola-lavoro in Calabria.',
    border: 'border-accent/15',
    bg: 'bg-accent/[0.03]',
  },
  {
    title: 'Mediazione Interculturale',
    description: 'Studi sulla mediazione linguistica interculturale e il ruolo del mediatore nelle dinamiche di internazionalizzazione delle imprese e delle istituzioni.',
    border: 'border-accent-blue/15',
    bg: 'bg-accent-blue/[0.03]',
  },
]

export function VResearchSlide() {
  return (
    <div className="flex flex-col h-full justify-center">
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-center"
        style={{ marginBottom: 36 }}
      >
        <div className="flex items-center justify-center gap-3" style={{ marginBottom: 16 }}>
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary/50" />
          <span className="text-xs font-semibold text-primary uppercase tracking-[0.3em]">Ricerca Scientifica</span>
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary/50" />
        </div>
        <h2 className="text-[40px] font-heading font-bold">
          Ricerca e <span className="gradient-text">Innovazione</span>
        </h2>
      </motion.div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 20, marginBottom: 36 }}>
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 + i * 0.15, duration: 0.5 }}
            className={`${project.bg} border ${project.border} rounded-2xl`}
            style={{ padding: '28px 28px' }}
          >
            <h3 className="text-xl font-heading font-bold text-white" style={{ marginBottom: 16 }}>{project.title}</h3>
            <p className="text-sm font-heading text-white/50 leading-[1.8]">{project.description}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
        className="flex items-center justify-center gap-5"
      >
        <span className="text-sm text-white/25">In collaborazione con</span>
        {['/assets/partners/fondazione.png', '/assets/partners/ersaf.png', '/assets/partners/enbas.png'].map((logo, i) => (
          <div key={i} className="w-12 h-12 bg-white rounded-lg flex items-center justify-center p-1.5">
            <img src={logo} alt="" className="w-full h-full object-contain" />
          </div>
        ))}
      </motion.div>
    </div>
  )
}
