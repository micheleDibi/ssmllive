import { motion } from 'framer-motion'
import { news } from '../../../config/content'
import { useClock } from '../../../hooks/useClock'

export function VEventsSlide() {
  const { date } = useClock()

  return (
    <div className="flex flex-col h-full justify-center">
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        style={{ marginBottom: 32 }}
      >
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center gap-3" style={{ marginBottom: 16 }}>
              <div className="h-0.5 w-12 bg-primary" />
              <span className="text-xs font-semibold text-primary uppercase tracking-[0.3em]">Notizie ed Eventi</span>
            </div>
            <h2 className="text-[40px] font-heading font-bold">
              Ultime <span className="gradient-text">Notizie</span>
            </h2>
          </div>
          <div className="flex items-center gap-3">
            <motion.div
              animate={{ opacity: [1, 0.4, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-2 h-2 rounded-full bg-red-500"
            />
            <span className="text-xs text-white/35 capitalize">{date}</span>
          </div>
        </div>
      </motion.div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        {news.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 + i * 0.12, duration: 0.4 }}
            className="bg-white/[0.03] border border-white/8 rounded-xl"
            style={{ padding: '20px 24px' }}
          >
            <div className="flex items-center gap-4" style={{ marginBottom: 10 }}>
              <div className={`shrink-0 w-14 h-14 rounded-lg flex flex-col items-center justify-center ${
                i === 0 ? 'bg-primary/10 border border-primary/20' : 'bg-white/[0.04] border border-white/8'
              }`}>
                <span className="text-lg font-bold text-white/80">
                  {new Date(item.date).toLocaleDateString('it-IT', { day: 'numeric' })}
                </span>
                <span className="text-[10px] text-white/40 uppercase">
                  {new Date(item.date).toLocaleDateString('it-IT', { month: 'short' })}
                </span>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-heading font-bold text-white">{item.title}</h3>
              </div>
              {i === 0 && (
                <span className="shrink-0 px-2.5 py-1 rounded text-[10px] font-bold bg-primary/15 text-primary uppercase tracking-wider">
                  Nuovo
                </span>
              )}
            </div>
            <p className="text-sm text-white/40 leading-[1.7]">{item.excerpt}</p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
