import { slides } from '../../config/content'

interface ProgressBarProps {
  currentIndex: number
  progress: number
}

export function ProgressBar({ currentIndex, progress }: ProgressBarProps) {
  return (
    <div className="absolute bottom-0 left-0 right-0 z-30" style={{ padding: '0 5% 10px' }}>
      <div className="flex items-center" style={{ gap: 6 }}>
        {slides.map((_, i) => {
          const isActive = i === currentIndex
          const isDone = i < currentIndex

          return (
            <div
              key={i}
              className="relative overflow-hidden rounded-full"
              style={{
                flex: isActive ? 3 : 1,
                height: isActive ? 5 : 3,
                background: 'rgba(255,255,255,0.08)',
                transition: 'flex 0.5s ease, height 0.5s ease',
              }}
            >
              <div
                className="absolute inset-y-0 left-0 rounded-full"
                style={{
                  width: isDone ? '100%' : isActive ? `${progress * 100}%` : '0%',
                  background: isActive
                    ? 'linear-gradient(90deg, #ffb606, #ffd25e)'
                    : isDone
                    ? 'rgba(255, 182, 6, 0.6)'
                    : 'transparent',
                  boxShadow: isActive ? '0 0 8px rgba(255, 182, 6, 0.4)' : 'none',
                }}
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}
