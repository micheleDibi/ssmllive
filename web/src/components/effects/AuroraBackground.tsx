import { useEffect, useRef } from 'react'

export function AuroraBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = 1920
    canvas.height = 1080

    let time = 0
    let animId: number

    const draw = () => {
      time += 0.003
      ctx.clearRect(0, 0, 1920, 1080)

      // Aurora wave 1 - primary gold
      ctx.beginPath()
      ctx.moveTo(0, 1080)
      for (let x = 0; x <= 1920; x += 10) {
        const y = 600 + Math.sin(x * 0.003 + time) * 120 + Math.sin(x * 0.007 + time * 1.5) * 60
        ctx.lineTo(x, y)
      }
      ctx.lineTo(1920, 1080)
      ctx.closePath()
      const g1 = ctx.createLinearGradient(0, 500, 0, 1080)
      g1.addColorStop(0, 'rgba(255, 182, 6, 0.06)')
      g1.addColorStop(0.5, 'rgba(255, 182, 6, 0.02)')
      g1.addColorStop(1, 'transparent')
      ctx.fillStyle = g1
      ctx.fill()

      // Aurora wave 2 - secondary purple
      ctx.beginPath()
      ctx.moveTo(0, 1080)
      for (let x = 0; x <= 1920; x += 10) {
        const y = 700 + Math.sin(x * 0.004 + time * 0.7) * 100 + Math.cos(x * 0.006 + time * 1.2) * 50
        ctx.lineTo(x, y)
      }
      ctx.lineTo(1920, 1080)
      ctx.closePath()
      const g2 = ctx.createLinearGradient(0, 600, 0, 1080)
      g2.addColorStop(0, 'rgba(68, 46, 102, 0.08)')
      g2.addColorStop(1, 'transparent')
      ctx.fillStyle = g2
      ctx.fill()

      // Aurora wave 3 - accent green
      ctx.beginPath()
      ctx.moveTo(0, 0)
      for (let x = 0; x <= 1920; x += 10) {
        const y = 200 + Math.sin(x * 0.002 + time * 0.5) * 80 + Math.cos(x * 0.005 + time) * 40
        ctx.lineTo(x, y)
      }
      ctx.lineTo(1920, 0)
      ctx.closePath()
      const g3 = ctx.createLinearGradient(0, 0, 0, 300)
      g3.addColorStop(0, 'transparent')
      g3.addColorStop(1, 'rgba(61, 177, 102, 0.04)')
      ctx.fillStyle = g3
      ctx.fill()

      animId = requestAnimationFrame(draw)
    }

    draw()
    return () => cancelAnimationFrame(animId)
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
    />
  )
}
