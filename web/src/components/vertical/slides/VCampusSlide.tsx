import { motion } from 'framer-motion'
import { QRCodeSVG } from 'qrcode.react'
import { institution } from '../../../config/content'

export function VCampusSlide() {
  return (
    <div className="flex flex-col h-full justify-center">
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center gap-3" style={{ marginBottom: 20 }}>
          <div className="h-0.5 w-12 bg-primary" />
          <span className="text-xs font-semibold text-primary uppercase tracking-[0.3em]">La Sede</span>
        </div>

        <h2 className="text-[44px] font-heading font-bold text-white leading-tight" style={{ marginBottom: 12 }}>
          Il Nostro <span className="gradient-text">Campus</span>
        </h2>

        <p className="text-xl text-white/35" style={{ marginBottom: 32 }}>Lamezia Terme, Calabria</p>
      </motion.div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 14, marginBottom: 32 }}>
        <div className="bg-white/[0.03] border border-white/8 rounded-xl" style={{ padding: '16px 20px' }}>
          <p className="text-xs text-white/40 uppercase tracking-[0.15em]" style={{ marginBottom: 4 }}>Indirizzo</p>
          <p className="text-lg text-white">{institution.address}</p>
        </div>

        <div className="flex gap-4">
          <div className="flex-1 bg-white/[0.03] border border-white/8 rounded-xl" style={{ padding: '16px 20px' }}>
            <p className="text-xs text-white/40 uppercase tracking-[0.15em]" style={{ marginBottom: 4 }}>Telefono</p>
            <p className="text-base text-white">{institution.phone}</p>
          </div>
          <div className="flex-1 bg-white/[0.03] border border-white/8 rounded-xl" style={{ padding: '16px 20px' }}>
            <p className="text-xs text-white/40 uppercase tracking-[0.15em]" style={{ marginBottom: 4 }}>Email</p>
            <p className="text-base text-white">{institution.email}</p>
          </div>
        </div>

        <div className="bg-white/[0.03] border border-white/8 rounded-xl" style={{ padding: '16px 20px' }}>
          <p className="text-xs text-white/40 uppercase tracking-[0.15em]" style={{ marginBottom: 4 }}>Orario</p>
          <p className="text-base text-white">Lun – Ven  9:00 – 13:00 / 14:00 – 17:00</p>
        </div>
      </div>

      <div className="flex gap-6 justify-center">
        <div className="flex flex-col items-center">
          <div className="bg-white rounded-xl p-3" style={{ marginBottom: 8 }}>
            <QRCodeSVG value="https://maps.google.com/?q=Via+Po+56+Lamezia+Terme" size={100} fgColor="#442e66" />
          </div>
          <p className="text-xs text-white/30">Google Maps</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="bg-white rounded-xl p-3" style={{ marginBottom: 8 }}>
            <QRCodeSVG value={`https://${institution.website}`} size={100} fgColor="#442e66" />
          </div>
          <p className="text-xs gradient-text font-semibold">{institution.website}</p>
        </div>
      </div>
    </div>
  )
}
