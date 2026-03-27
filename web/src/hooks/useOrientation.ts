import { useState, useEffect } from 'react'

export function useOrientation() {
  const [isPortrait, setIsPortrait] = useState(
    () => window.innerHeight > window.innerWidth
  )

  useEffect(() => {
    const mql = window.matchMedia('(orientation: portrait)')
    const handler = (e: MediaQueryListEvent) => setIsPortrait(e.matches)
    mql.addEventListener('change', handler)
    return () => mql.removeEventListener('change', handler)
  }, [])

  return isPortrait
}
