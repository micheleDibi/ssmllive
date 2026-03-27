import { motion } from 'framer-motion'
import type { Program } from '../../types/content'

const programImages: Record<string, string> = {
  international: '/assets/images/campus-students.jpg',
  security: '/assets/images/competenze.jpeg',
  business: '/assets/images/campus-students.jpg',
  marketing: '/assets/images/competenze.jpeg',
  tourism: '/assets/images/campus-students.jpg',
}

const languages = ['Inglese', 'Francese', 'Spagnolo', 'Tedesco', 'Cinese', 'Russo']

export function ProgramSlide({ program }: { program: Program }) {
  return (
    <div className="flex h-full items-center" style={{ gap: 56 }}>
      {/* Left: Content */}
      <div className="flex-1">
        <motion.div
          initial={{ x: -30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3" style={{ marginBottom: 28 }}>
            <div className="h-0.5 w-12 rounded-full bg-primary" />
            <span className="text-xs font-semibold text-white/30 uppercase tracking-[0.2em]">Indirizzo</span>
          </div>

          <h2 className="text-[42px] font-heading font-bold text-white leading-[1.15]" style={{ marginBottom: 32 }}>
            {program.name}
          </h2>

          <p className="text-xl text-white/50 leading-[1.8] max-w-2xl" style={{ marginBottom: 36 }}>
            {program.description}
          </p>

          <div className="flex items-center gap-5" style={{ marginBottom: 40 }}>
            <div className="px-6 py-2.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-semibold">
              Classe L-12
            </div>
            <div className="px-5 py-2.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-medium">
              3 Anni — 180 CFU
            </div>
          </div>

          <div style={{ marginBottom: 40 }}>
            <h3 className="text-xs font-semibold text-white/25 uppercase tracking-[0.2em]" style={{ marginBottom: 20 }}>Sbocchi Professionali</h3>
            <div className="flex gap-4 flex-wrap">
              {program.careers.map((career) => (
                <span key={career} className="px-5 py-3 rounded-xl bg-white/[0.04] border border-white/8 text-white/70 text-sm">
                  {career}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xs font-semibold text-white/25 uppercase tracking-[0.2em]" style={{ marginBottom: 20 }}>Lingue Disponibili</h3>
            <div className="flex" style={{ gap: 24 }}>
              {languages.map((lang, i) => (
                <span
                  key={lang}
                  className={`text-sm ${i === 0 ? 'text-primary font-semibold' : 'text-white/45'}`}
                >
                  {lang}{i === 0 ? ' (obb.)' : ''}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Right: Image */}
      <motion.div
        initial={{ x: 30, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.7 }}
        className="w-[360px] shrink-0 h-[80%] rounded-2xl overflow-hidden relative"
      >
        <motion.img
          src={programImages[program.id]}
          alt=""
          className="w-full h-full object-cover"
          initial={{ scale: 1 }}
          animate={{ scale: 1.05 }}
          transition={{ duration: 10, ease: 'linear' }}
        />
        <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#0c0919]/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0c0919]/60 via-transparent to-[#0c0919]/30" />
      </motion.div>
    </div>
  )
}
