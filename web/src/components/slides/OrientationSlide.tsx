import { motion } from 'framer-motion'
import { institution } from '../../config/content'
import { AnimatedCounter } from '../ui/AnimatedCounter'

export function OrientationSlide() {
  return (
    <div className="flex h-full items-center" style={{ gap: 72 }}>
      {/* Left: Counter */}
      <motion.div
        initial={{ scale: 0.7, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.7, type: 'spring' }}
        className="w-[380px] shrink-0 flex flex-col items-center text-center"
      >
        <div className="gradient-text font-heading font-bold leading-none flex items-baseline justify-center">
          <AnimatedCounter target={institution.orientationCenters} duration={2500} />
          <span className="text-5xl ml-1">+</span>
        </div>

        <div className="h-0.5 w-16 bg-gradient-to-r from-primary to-transparent mx-auto" style={{ marginTop: 36, marginBottom: 28 }} />

        <p className="text-2xl text-white/60 font-heading">Poli di Orientamento</p>
        <p className="text-lg text-white/25" style={{ marginTop: 12 }}>in tutta Italia</p>
      </motion.div>

      {/* Right */}
      <div className="flex-1">
        <motion.div
          initial={{ x: 30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <div className="flex items-center gap-3" style={{ marginBottom: 28 }}>
            <div className="h-0.5 w-12 bg-primary" />
            <span className="text-xs font-semibold text-primary uppercase tracking-[0.3em]">Copertura Territoriale</span>
          </div>

          <h2 className="text-[48px] font-heading font-bold" style={{ marginBottom: 36 }}>
            Una Rete <span className="gradient-text">Nazionale</span>
          </h2>

          <p className="text-xl text-white/45 leading-[1.8] max-w-xl" style={{ marginBottom: 56 }}>
            Una capillare rete di poli di orientamento distribuiti su tutto il territorio
            italiano, dal Sud al Centro e Nord Italia, per offrire supporto informativo,
            amministrativo e orientamento agli studi universitari.
          </p>

          <div className="bg-white/[0.03] border border-white/8 rounded-2xl" style={{ padding: '24px 28px' }}>
            <p className="text-lg text-white/60 leading-[1.8]">
              Servizi di orientamento, supporto alle iscrizioni e informazioni
              sui percorsi formativi disponibili presso ogni centro.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
