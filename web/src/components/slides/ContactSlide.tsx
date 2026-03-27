import { motion } from 'framer-motion'
import { QRCodeSVG } from 'qrcode.react'
import { institution } from '../../config/content'

const contacts = [
  { label: 'Telefono', value: institution.phone },
  { label: 'Sito Web', value: institution.website },
  { label: 'Email', value: institution.email },
  { label: 'Indirizzo', value: institution.address },
  { label: 'Portale Studenti', value: institution.portal },
]

export function ContactSlide() {
  return (
    <div className="flex h-full items-center">
      <div className="w-full flex" style={{ gap: 64 }}>
        {/* Left: Title + Contacts */}
        <div className="flex-1">
          <motion.div
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3" style={{ marginBottom: 20 }}>
              <div className="h-0.5 w-12 bg-primary" />
              <span className="text-xs font-semibold text-primary uppercase tracking-[0.3em]">Contatti</span>
            </div>

            <h2 className="text-[52px] font-heading font-bold" style={{ marginBottom: 40 }}>
              <span className="gradient-text">Contattaci</span>
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {contacts.map((c, i) => (
                <motion.div
                  key={c.label}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="bg-white/[0.03] border border-white/8 rounded-xl flex items-center"
                  style={{ padding: '18px 24px', gap: 24 }}
                >
                  <span className="text-sm text-white/30 uppercase tracking-[0.15em] shrink-0" style={{ width: 130 }}>{c.label}</span>
                  <span className="text-lg text-white/80">{c.value}</span>
                </motion.div>
              ))}
            </div>

          </motion.div>
        </div>

        {/* Right: QR + Logo */}
        <motion.div
          initial={{ x: 30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="shrink-0 flex flex-col items-center justify-center"
          style={{ width: 280 }}
        >
          <div className="bg-white rounded-2xl shadow-lg" style={{ padding: 24, marginBottom: 16 }}>
            <QRCodeSVG
              value={`https://${institution.website}`}
              size={160}
              fgColor="#442e66"
              bgColor="#ffffff"
              level="H"
            />
          </div>
          <p className="text-sm text-white/30 text-center" style={{ marginBottom: 4 }}>Scansiona per</p>
          <p className="text-base font-semibold gradient-text text-center" style={{ marginBottom: 40 }}>{institution.website}</p>

          <img
            src="/assets/logos/ssml-logo-white.png"
            alt="SSML"
            className="w-48 h-auto opacity-50"
          />
        </motion.div>
      </div>
    </div>
  )
}
