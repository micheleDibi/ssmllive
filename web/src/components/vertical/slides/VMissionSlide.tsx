import { motion } from 'framer-motion'
import { institution } from '../../../config/content'

const values = [
  { title: 'Eccellenza Linguistica', desc: 'Formazione di alto livello in mediazione linguistica, interpretariato e traduzione specialistica', color: 'border-primary/20 bg-primary/5' },
  { title: 'Internazionalità', desc: 'Programmi Erasmus+ e partnership con università e centri culturali internazionali', color: 'border-accent-blue/20 bg-accent-blue/5' },
  { title: 'Innovazione Didattica', desc: 'Ricerca sulle competenze caratteriali e metodologie didattiche all\'avanguardia', color: 'border-accent/20 bg-accent/5' },
]

export function VMissionSlide() {
  return (
    <div className="flex flex-col h-full justify-center">
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        style={{ marginBottom: 32 }}
      >
        <div className="flex items-center gap-3" style={{ marginBottom: 20 }}>
          <div className="h-px w-14 bg-primary" />
          <span className="text-xs font-semibold text-primary uppercase tracking-[0.3em]">Chi Siamo</span>
        </div>

        <h2 className="text-[44px] font-heading font-bold text-white leading-tight" style={{ marginBottom: 24 }}>
          La Nostra <span className="gradient-text">Missione</span>
        </h2>

        <p className="text-lg text-white/55 leading-[1.8] font-heading">
          Formiamo mediatori linguistici qualificati, capaci di operare come ponte
          tra culture, lingue e istituzioni nel panorama globale.
        </p>
      </motion.div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 32 }}>
        {values.map((v, i) => (
          <motion.div
            key={v.title}
            initial={{ x: 30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 + i * 0.15, duration: 0.5 }}
            className={`rounded-2xl border ${v.color}`}
            style={{ padding: '20px 24px' }}
          >
            <h3 className="text-lg font-heading font-bold text-white" style={{ marginBottom: 8 }}>{v.title}</h3>
            <p className="text-sm text-white/45 leading-[1.7] font-heading">{v.desc}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9 }}
        className="flex items-center gap-4"
      >
        <img src="/assets/partners/mur.png" alt="MUR" className="h-12" />
        <div className="h-6 w-px bg-white/10" />
        <span className="text-sm text-white/30">{institution.authorization}</span>
      </motion.div>
    </div>
  )
}
