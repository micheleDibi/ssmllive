import { motion } from 'framer-motion'
import { QRCodeSVG } from 'qrcode.react'
import { institution } from '../../config/content'

export function CampusSlide() {
  return (
    <div className="flex h-full items-center">
      <div className="w-full flex gap-16">
        {/* Left: Title + Info */}
        <div className="flex-1">
          <motion.div
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3" style={{ marginBottom: 24 }}>
              <div className="h-0.5 w-12 bg-primary" />
              <span className="text-xs font-semibold text-primary uppercase tracking-[0.3em]">La Sede</span>
            </div>

            <h2 className="text-[52px] font-heading font-bold text-white leading-tight" style={{ marginBottom: 16 }}>
              Il Nostro <span className="gradient-text">Campus</span>
            </h2>

            <p className="text-2xl text-white/35" style={{ marginBottom: 40 }}>Lamezia Terme, Calabria</p>

            <div className="bg-white/[0.03] border border-white/8 rounded-2xl" style={{ padding: '20px 24px', marginBottom: 20 }}>
              <p className="text-sm text-white/40 uppercase tracking-[0.15em]" style={{ marginBottom: 6 }}>Indirizzo</p>
              <p className="text-xl text-white">{institution.address}</p>
            </div>

            <div className="flex gap-5" style={{ marginBottom: 20 }}>
              <div className="flex-1 bg-white/[0.03] border border-white/8 rounded-2xl" style={{ padding: '20px 24px' }}>
                <p className="text-sm text-white/40 uppercase tracking-[0.15em]" style={{ marginBottom: 6 }}>Telefono</p>
                <p className="text-lg text-white">{institution.phone}</p>
              </div>
              <div className="flex-1 bg-white/[0.03] border border-white/8 rounded-2xl" style={{ padding: '20px 24px' }}>
                <p className="text-sm text-white/40 uppercase tracking-[0.15em]" style={{ marginBottom: 6 }}>Email</p>
                <p className="text-lg text-white">{institution.email}</p>
              </div>
            </div>

            <div className="bg-white/[0.03] border border-white/8 rounded-2xl" style={{ padding: '20px 24px' }}>
              <p className="text-sm text-white/40 uppercase tracking-[0.15em]" style={{ marginBottom: 6 }}>Orario</p>
              <p className="text-lg text-white">Lun – Ven  9:00 – 13:00  /  14:00 – 17:00</p>
            </div>
          </motion.div>
        </div>

        {/* Right: QR + Website */}
        <motion.div
          initial={{ x: 30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="shrink-0 flex flex-col items-center justify-center"
          style={{ width: 260 }}
        >
          <div className="bg-white rounded-2xl shadow-lg" style={{ padding: 20, marginBottom: 16 }}>
            <QRCodeSVG value="https://maps.google.com/?q=Via+Po+56+Lamezia+Terme" size={140} fgColor="#442e66" />
          </div>
          <p className="text-sm text-white/30 text-center" style={{ marginBottom: 4 }}>Scansiona per</p>
          <p className="text-base font-semibold text-white/60 text-center">Google Maps</p>

          <div className="h-px w-16 bg-white/10" style={{ marginTop: 28, marginBottom: 28 }} />

          <div className="bg-white rounded-2xl shadow-lg" style={{ padding: 20, marginBottom: 16 }}>
            <QRCodeSVG value={`https://${institution.website}`} size={140} fgColor="#442e66" />
          </div>
          <p className="text-sm text-white/30 text-center" style={{ marginBottom: 4 }}>Scansiona per</p>
          <p className="text-base gradient-text font-semibold">{institution.website}</p>
        </motion.div>
      </div>
    </div>
  )
}
