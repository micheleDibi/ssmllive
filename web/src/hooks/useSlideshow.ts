import { useState, useEffect, useCallback } from 'react'
import { slides } from '../config/content'

export function useSlideshow() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [progress] = useState(0)

  const currentSlide = slides[currentIndex]

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % slides.length)
  }, [])

  const goToPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length)
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

  // Auto-advance disabled for debugging
  // TODO: re-enable auto-advance for production

  return {
    currentIndex,
    currentSlideId: currentSlide.id,
    totalSlides: slides.length,
    progress,
  }
}
