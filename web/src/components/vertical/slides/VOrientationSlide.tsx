import { motion } from 'framer-motion'
import { institution } from '../../../config/content'
import { AnimatedCounter } from '../../ui/AnimatedCounter'

export function VOrientationSlide() {
  return (
    <div className="flex flex-col h-full justify-center items-center text-center">
      <motion.div
        initial={{ scale: 0.7, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.7, type: 'spring' }}
        style={{ marginBottom: 24 }}
      >
        <div className="gradient-text font-heading font-bold leading-none flex items-baseline justify-center">
          <AnimatedCounter target={institution.orientationCenters} duration={2500} />
          <span className="text-5xl ml-1">+</span>
        </div>
      </motion.div>

      <div className="h-0.5 w-16 bg-gradient-to-r from-primary to-transparent mx-auto" style={{ marginBottom: 20 }} />

      <p className="text-2xl text-white/60 font-heading" style={{ marginBottom: 8 }}>Poli di Orientamento</p>
      <p className="text-base text-white/25" style={{ marginBottom: 48 }}>in tutta Italia</p>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="w-full text-left"
      >
        <div className="flex items-center gap-3" style={{ marginBottom: 20 }}>
          <div className="h-0.5 w-12 bg-primary" />
          <span className="text-xs font-semibold text-primary uppercase tracking-[0.3em]">Copertura Territoriale</span>
        </div>

        <h2 className="text-[40px] font-heading font-bold" style={{ marginBottom: 24 }}>
          Una Rete <span className="gradient-text">Nazionale</span>
        </h2>

        <p className="text-lg text-white/45 leading-[1.8]" style={{ marginBottom: 32 }}>
          Una capillare rete di poli di orientamento distribuiti su tutto il territorio
          italiano, per offrire supporto informativo, amministrativo e orientamento.
        </p>

        <div className="bg-white/[0.03] border border-white/8 rounded-2xl" style={{ padding: '20px 24px' }}>
          <p className="text-base text-white/60 leading-[1.7]">
            Servizi di orientamento, supporto alle iscrizioni e informazioni
            sui percorsi formativi disponibili presso ogni centro.
          </p>
        </div>
      </motion.div>
    </div>
  )
}
