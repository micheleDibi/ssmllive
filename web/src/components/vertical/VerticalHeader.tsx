import { motion } from 'framer-motion'
import { useClock } from '../../hooks/useClock'
import { useWeather } from '../../hooks/useWeather'

export function VerticalHeader() {
  const { time, date } = useClock()
  const weather = useWeather()

  return (
    <div className="shrink-0 relative z-10" style={{ paddingBottom: 24 }}>
      <div className="flex items-center justify-between">
        <motion.img
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          src="/assets/logos/ssml-logo-white.png"
          alt="SSML"
          className="h-10 w-auto drop-shadow-lg"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex items-center gap-6"
        >
          {weather && (
            <>
              <div className="flex items-center gap-2">
                <span className="text-xl">{weather.icon}</span>
                <div>
                  <span className="text-sm text-white/50">{weather.city}</span>
                  <span className="text-sm text-white/30 ml-2">{weather.temperature}°C</span>
                </div>
              </div>
              <div className="h-6 w-px bg-white/10" />
            </>
          )}
          <div className="text-right">
            <div className="text-2xl font-bold tabular-nums gradient-text">{time}</div>
            <div className="text-xs text-white/40 capitalize">{date}</div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
