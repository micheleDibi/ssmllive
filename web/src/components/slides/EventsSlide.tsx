import { motion } from 'framer-motion'
import { news } from '../../config/content'
import { useClock } from '../../hooks/useClock'

export function EventsSlide() {
  const { date } = useClock()

  return (
    <div className="flex flex-col h-full justify-center">
      {/* Header */}
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="flex items-end justify-between"
        style={{ marginBottom: 40 }}
      >
        <div>
          <div className="flex items-center gap-3" style={{ marginBottom: 20 }}>
            <div className="h-0.5 w-12 bg-primary" />
            <span className="text-xs font-semibold text-primary uppercase tracking-[0.3em]">Notizie ed Eventi</span>
          </div>
          <h2 className="text-[52px] font-heading font-bold">
            Ultime <span className="gradient-text">Notizie</span>
          </h2>
        </div>
        <div className="flex items-center gap-4">
          <motion.div
            animate={{ opacity: [1, 0.4, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-2 h-2 rounded-full bg-red-500"
          />
          <span className="text-sm text-white/35 capitalize">{date}</span>
        </div>
      </motion.div>

      {/* News cards */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
        {news.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 + i * 0.15, duration: 0.5 }}
            className="bg-white/[0.03] border border-white/8 rounded-2xl flex items-center"
            style={{ padding: '24px 28px', gap: 28 }}
          >
            {/* Date block */}
            <div
              className={`shrink-0 w-20 h-20 rounded-xl flex flex-col items-center justify-center ${
                i === 0 ? 'bg-primary/10 border border-primary/20' : 'bg-white/[0.04] border border-white/8'
              }`}
            >
              <span className="text-2xl font-bold text-white/80">
                {new Date(item.date).toLocaleDateString('it-IT', { day: 'numeric' })}
              </span>
              <span className="text-xs text-white/40 uppercase" style={{ marginTop: 2 }}>
                {new Date(item.date).toLocaleDateString('it-IT', { month: 'short' })}
              </span>
              <span className="text-[10px] text-white/25" style={{ marginTop: 1 }}>
                {new Date(item.date).getFullYear()}
              </span>
            </div>

            {/* Content */}
            <div className="flex-1">
              <h3 className="text-xl font-heading font-bold text-white" style={{ marginBottom: 8 }}>{item.title}</h3>
              <p className="text-sm text-white/40 leading-[1.7]">{item.excerpt}</p>
            </div>

            {/* Badge */}
            {i === 0 && (
              <span className="shrink-0 px-3 py-1.5 rounded-lg text-[11px] font-bold bg-primary/15 text-primary uppercase tracking-wider">
                Nuovo
              </span>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  )
}
