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

export function ResearchSlide() {
  return (
    <div className="flex flex-col h-full justify-center">
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-center"
        style={{ marginBottom: 48 }}
      >
        <div className="flex items-center justify-center gap-3" style={{ marginBottom: 20 }}>
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-primary/50" />
          <span className="text-xs font-semibold text-primary uppercase tracking-[0.3em]">Ricerca Scientifica</span>
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-primary/50" />
        </div>
        <h2 className="text-[52px] font-heading font-bold">
          Ricerca e <span className="gradient-text">Innovazione</span>
        </h2>
      </motion.div>

      <div className="flex justify-center" style={{ gap: 32, marginBottom: 56 }}>
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 + i * 0.2, duration: 0.5 }}
            className={`flex-1 max-w-[520px] ${project.bg} border ${project.border} rounded-2xl`}
            style={{ padding: '32px 36px' }}
          >
            <h3 className="text-2xl font-heading font-bold text-white" style={{ marginBottom: 20 }}>{project.title}</h3>
            <p className="text-base font-heading text-white/50 leading-[1.8]">{project.description}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9 }}
        className="flex items-center justify-center gap-6"
      >
        <span className="text-sm text-white/25">In collaborazione con</span>
        {['/assets/partners/fondazione.png', '/assets/partners/ersaf.png', '/assets/partners/enbas.png'].map((logo, i) => (
          <div key={i} className="w-14 h-14 bg-white rounded-lg flex items-center justify-center p-2">
            <img src={logo} alt="" className="w-full h-full object-contain" />
          </div>
        ))}
      </motion.div>
    </div>
  )
}
