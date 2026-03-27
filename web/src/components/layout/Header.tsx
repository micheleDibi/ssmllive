import { motion } from 'framer-motion'
import { useClock } from '../../hooks/useClock'
import { useWeather } from '../../hooks/useWeather'

export function Header() {
  const { time, date } = useClock()
  const weather = useWeather()

  return (
    <div className="flex items-center justify-between shrink-0 pb-6 relative z-10">
      <motion.div
        initial={{ x: -30, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="flex items-center gap-5"
      >
        <img
          src="/assets/logos/ssml-logo-white.png"
          alt="SSML Lamezia Terme"
          className="h-12 w-auto drop-shadow-lg"
        />
      </motion.div>

      <motion.div
        initial={{ x: 30, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="flex items-center gap-8"
      >
        {/* Location + Weather */}
        {weather && (
          <>
            <div className="flex items-center gap-3">
              <span className="text-2xl">{weather.icon}</span>
              <div>
                <div className="text-sm font-semibold text-white/60">{weather.city}</div>
                <div className="text-sm text-white/35" style={{ marginTop: 2 }}>
                  {weather.temperature}°C — {weather.description}
                </div>
              </div>
            </div>
            <div className="h-8 w-px bg-white/10" />
          </>
        )}

        {/* Clock */}
        <div className="text-right">
          <div className="text-3xl font-bold tabular-nums gradient-text">{time}</div>
          <div className="text-sm text-white/40 capitalize mt-0.5">{date}</div>
        </div>
      </motion.div>
    </div>
  )
}
