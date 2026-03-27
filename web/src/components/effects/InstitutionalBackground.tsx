import { useEffect, useRef } from 'react'
import createGlobe from 'cobe'

export function InstitutionalBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    let phi = 0
    let animId: number

    const globe = createGlobe(canvas, {
      devicePixelRatio: 2,
      width: 1200,
      height: 1200,
      phi: 0,
      theta: 0.25,
      dark: 1,
      diffuse: 1.2,
      mapSamples: 20000,
      mapBrightness: 4,
      baseColor: [0.15, 0.1, 0.25],
      markerColor: [1, 0.71, 0.02],
      glowColor: [0.18, 0.12, 0.3],
      markers: [],
    })

    const animate = () => {
      phi += 0.003
      globe.update({ phi })
      animId = requestAnimationFrame(animate)
    }
    animId = requestAnimationFrame(animate)

    return () => {
      cancelAnimationFrame(animId)
      globe.destroy()
    }
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-[#0c0919]" />

      <div className="absolute top-1/2 left-1/2 -translate-x-[35%] -translate-y-1/2 opacity-40">
        <canvas
          ref={canvasRef}
          style={{ width: 900, height: 900 }}
        />
      </div>

      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse 70% 70% at 50% 50%, transparent 30%, #0c0919 100%)',
        }}
      />
    </div>
  )
}
