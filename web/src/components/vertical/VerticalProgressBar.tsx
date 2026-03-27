import { slides } from '../../config/content'

interface Props {
  currentIndex: number
  progress: number
}

export function VerticalProgressBar({ currentIndex, progress }: Props) {
  return (
    <div className="absolute bottom-0 left-0 right-0 flex gap-1 px-[5%] pb-3 z-20">
      {slides.map((_, i) => (
        <div key={i} className="flex-1 h-1 rounded-full bg-white/10 overflow-hidden">
          <div
            className="h-full bg-primary rounded-full transition-all duration-100"
            style={{
              width: i < currentIndex ? '100%' : i === currentIndex ? `${progress * 100}%` : '0%',
            }}
          />
        </div>
      ))}
    </div>
  )
}
