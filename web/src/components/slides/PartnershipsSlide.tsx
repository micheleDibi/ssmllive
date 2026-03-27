import { motion } from 'framer-motion'

const partners = [
  { name: 'MUR', desc: 'Ministero dell\'Università e della Ricerca', logo: '/assets/partners/mur.png' },
  { name: 'Erasmus+', desc: 'Programma ECHE 2021-2027', logo: '/assets/partners/erasmus-plus.svg' },
  { name: 'Fondazione per la Sussidiarietà', desc: 'Ricerca e formazione', logo: '/assets/partners/fondazione.png' },
  { name: 'ERSAF', desc: 'Ente di Ricerca Scientifica ed Alta Formazione', logo: '/assets/partners/ersaf.png' },
  { name: 'ENBAS', desc: 'Ente Nazionale Bilaterale', logo: '/assets/partners/enbas.png' },
  { name: 'ESAARCO', desc: 'Associazione Artigiani e Commercianti', logo: '/assets/partners/esaarco.png' },
]

export function PartnershipsSlide() {
  return (
    <div className="flex flex-col h-full justify-center items-center">
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-center"
        style={{ marginBottom: 56 }}
      >
        <div className="flex items-center justify-center gap-3" style={{ marginBottom: 24 }}>
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-primary/50" />
          <span className="text-xs font-semibold text-primary uppercase tracking-[0.3em]">Collaborazioni</span>
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-primary/50" />
        </div>
        <h2 className="text-[52px] font-heading font-bold">
          Partner e <span className="gradient-text">Accreditamenti</span>
        </h2>
      </motion.div>

      <div className="grid grid-cols-3 max-w-[1000px] w-full" style={{ gap: 24 }}>
        {partners.map((partner, i) => (
          <motion.div
            key={partner.name}
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
            className="bg-white/[0.03] border border-white/8 rounded-2xl flex flex-col items-center text-center"
            style={{ padding: '24px 24px' }}
          >
            <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center p-2" style={{ marginBottom: 16 }}>
              <img src={partner.logo} alt={partner.name} className="w-full h-full object-contain" />
            </div>
            <h3 className="text-base font-bold text-white" style={{ marginBottom: 8 }}>{partner.name}</h3>
            <p className="text-xs text-white/35 leading-[1.7]">{partner.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
