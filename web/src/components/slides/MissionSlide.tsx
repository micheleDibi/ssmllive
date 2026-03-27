import { motion } from 'framer-motion'
import { institution } from '../../config/content'

const values = [
  {
    title: 'Eccellenza Linguistica',
    desc: 'Formazione di alto livello in mediazione linguistica, interpretariato e traduzione specialistica',
    color: 'border-primary/20 bg-primary/5',
  },
  {
    title: 'Internazionalità',
    desc: 'Programmi Erasmus+ e partnership con università e centri culturali internazionali',
    color: 'border-accent-blue/20 bg-accent-blue/5',
  },
  {
    title: 'Innovazione Didattica',
    desc: 'Ricerca sulle competenze caratteriali e metodologie didattiche all\'avanguardia',
    color: 'border-accent/20 bg-accent/5',
  },
]

export function MissionSlide() {
  return (
    <div className="flex h-full gap-20 items-center">
      <div className="flex-1 max-w-[560px]">
        <motion.div
          initial={{ x: -30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          <div className="flex items-center gap-3" style={{ marginBottom: 28 }}>
            <div className="h-px w-14 bg-primary" />
            <span className="text-xs font-semibold text-primary uppercase tracking-[0.3em]">Chi Siamo</span>
          </div>

          <h2 className="text-[52px] font-heading font-bold text-white leading-tight" style={{ marginBottom: 36 }}>
            La Nostra{' '}
            <span className="gradient-text">Missione</span>
          </h2>

          <p className="text-[20px] text-white/55 leading-[1.8] font-heading">
            Formiamo mediatori linguistici qualificati, capaci di operare come ponte
            tra culture, lingue e istituzioni nel panorama globale.
          </p>

          <p className="text-lg text-white/40 leading-[1.8] font-heading" style={{ marginTop: 28 }}>
            La nostra scuola, autorizzata dal Ministero dell'Università e della Ricerca,
            offre percorsi triennali con un approccio unico alla formazione linguistica.
          </p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="flex items-center gap-5"
            style={{ marginTop: 44 }}
          >
            <img src="/assets/partners/mur.png" alt="MUR" className="h-16" />
            <div className="h-6 w-px bg-white/10" />
            <span className="text-sm text-white/30">{institution.authorization}</span>
          </motion.div>
        </motion.div>
      </div>

      <div className="flex-1 flex flex-col" style={{ gap: 24 }}>
        {values.map((v, i) => (
          <motion.div
            key={v.title}
            initial={{ x: 40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 + i * 0.2, duration: 0.6 }}
            className={`rounded-2xl border ${v.color} backdrop-blur-sm`}
            style={{ padding: '24px 28px' }}
          >
            <h3 className="text-xl font-heading font-bold text-white" style={{ marginBottom: 10 }}>{v.title}</h3>
            <p className="text-base text-white/45 leading-[1.8] font-heading">{v.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
