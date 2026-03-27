import { motion } from 'framer-motion'
import { QRCodeSVG } from 'qrcode.react'
import { institution } from '../../../config/content'

const contacts = [
  { label: 'Telefono', value: institution.phone },
  { label: 'Sito Web', value: institution.website },
  { label: 'Email', value: institution.email },
  { label: 'Indirizzo', value: institution.address },
  { label: 'Portale Studenti', value: institution.portal },
]

export function VContactSlide() {
  return (
    <div className="flex flex-col h-full justify-center">
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        style={{ marginBottom: 32 }}
      >
        <div className="flex items-center gap-3" style={{ marginBottom: 16 }}>
          <div className="h-0.5 w-12 bg-primary" />
          <span className="text-xs font-semibold text-primary uppercase tracking-[0.3em]">Contatti</span>
        </div>
        <h2 className="text-[44px] font-heading font-bold">
          <span className="gradient-text">Contattaci</span>
        </h2>
      </motion.div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 32 }}>
        {contacts.map((c, i) => (
          <motion.div
            key={c.label}
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.15 + i * 0.08 }}
            className="bg-white/[0.03] border border-white/8 rounded-xl flex items-center"
            style={{ padding: '14px 20px', gap: 20 }}
          >
            <span className="text-xs text-white/30 uppercase tracking-[0.15em] shrink-0" style={{ width: 110 }}>{c.label}</span>
            <span className="text-base text-white/80">{c.value}</span>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="flex flex-col items-center"
      >
        <div className="bg-white rounded-2xl shadow-lg" style={{ padding: 20, marginBottom: 12 }}>
          <QRCodeSVG
            value={`https://${institution.website}`}
            size={140}
            fgColor="#442e66"
            bgColor="#ffffff"
            level="H"
          />
        </div>
        <p className="text-xs text-white/30" style={{ marginBottom: 4 }}>Scansiona per</p>
        <p className="text-base font-semibold gradient-text" style={{ marginBottom: 24 }}>{institution.website}</p>

        <img src="/assets/logos/ssml-logo-white.png" alt="SSML" className="w-40 h-auto opacity-40" />
      </motion.div>
    </div>
  )
}
