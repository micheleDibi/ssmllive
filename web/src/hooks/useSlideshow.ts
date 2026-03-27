import { useState, useEffect, useCallback, useRef } from 'react'
import { slides } from '../config/content'

export function useSlideshow() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [progress, setProgress] = useState(0)
  const timerRef = useRef<number | null>(null)
  const progressRef = useRef<number | null>(null)
  const startTimeRef = useRef(0)

  const currentSlide = slides[currentIndex]
  const duration = currentSlide.duration

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % slides.length)
    setProgress(0)
  }, [])

  const goToPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length)
    setProgress(0)
  }, [])

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') goToNext()
      if (e.key === 'ArrowLeft') goToPrev()
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [goToNext, goToPrev])

  // Auto-advance
  useEffect(() => {
    startTimeRef.current = Date.now()

    timerRef.current = window.setTimeout(goToNext, duration)

    const updateProgress = () => {
      const elapsed = Date.now() - startTimeRef.current
      setProgress(Math.min(elapsed / duration, 1))
      progressRef.current = requestAnimationFrame(updateProgress)
    }
    progressRef.current = requestAnimationFrame(updateProgress)

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current)
      if (progressRef.current) cancelAnimationFrame(progressRef.current)
    }
  }, [currentIndex, duration, goToNext])

  return {
    currentIndex,
    currentSlideId: currentSlide.id,
    totalSlides: slides.length,
    progress,
  }
}
