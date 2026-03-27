import { motion } from 'framer-motion'
import { institution } from '../../../config/content'

export function VWelcomeSlide() {
  return (
    <div className="flex flex-col h-full items-center justify-center text-center">
      <motion.div
        initial={{ scale: 0.6, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, type: 'spring', bounce: 0.25 }}
        className="relative"
        style={{ marginBottom: 48 }}
      >
        <motion.div
          animate={{ opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute inset-0 blur-[80px] bg-primary rounded-full scale-125"
        />
        <img
          src="/assets/logos/ssml-logo-white.png"
          alt="SSML"
          className="relative w-64 h-auto drop-shadow-2xl"
        />
      </motion.div>

      <motion.h1
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="text-[56px] font-heading font-bold text-white leading-[1.1]"
        style={{ marginBottom: 32 }}
      >
        {institution.fullName}
      </motion.h1>

      <motion.p
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="text-3xl font-heading gradient-text"
        style={{ marginBottom: 12 }}
      >
        Città di {institution.city}
      </motion.p>

      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        className="w-24 h-0.5 bg-gradient-to-r from-primary to-transparent"
        style={{ marginBottom: 32 }}
      />

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="text-xl text-white/35 italic font-heading"
        style={{ marginBottom: 48 }}
      >
        &ldquo;{institution.motto}&rdquo;
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3, duration: 0.6 }}
        className="flex items-center gap-8"
      >
        <img src="/assets/partners/mur.png" alt="MUR" className="h-14" />
        <div className="h-10 w-px bg-white/20" />
        <img src="/assets/partners/ersaf.png" alt="ERSAF" className="h-14" />
      </motion.div>
    </div>
  )
}
