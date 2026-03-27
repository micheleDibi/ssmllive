import { useEffect, useRef } from 'react'

export function MeshGradientBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = 1920
    canvas.height = 1080

    const blobs = [
      { x: 300, y: 250, vx: 0.3, vy: 0.2, radius: 350, color: [255, 182, 6] },
      { x: 1600, y: 800, vx: -0.25, vy: -0.15, radius: 400, color: [68, 46, 102] },
      { x: 960, y: 540, vx: 0.15, vy: -0.3, radius: 300, color: [61, 177, 102] },
      { x: 200, y: 900, vx: 0.35, vy: -0.1, radius: 280, color: [45, 125, 210] },
      { x: 1700, y: 200, vx: -0.2, vy: 0.25, radius: 320, color: [130, 50, 180] },
    ]

    let animId: number
    let time = 0

    const draw = () => {
      time += 1
      ctx.fillStyle = '#0d0820'
      ctx.fillRect(0, 0, 1920, 1080)

      for (const blob of blobs) {
        blob.x += blob.vx + Math.sin(time * 0.008) * 0.5
        blob.y += blob.vy + Math.cos(time * 0.006) * 0.4

        // Bounce off edges
        if (blob.x < -200 || blob.x > 2120) blob.vx *= -1
        if (blob.y < -200 || blob.y > 1280) blob.vy *= -1

        const pulseRadius = blob.radius + Math.sin(time * 0.01 + blob.x * 0.001) * 40

        const gradient = ctx.createRadialGradient(
          blob.x, blob.y, 0,
          blob.x, blob.y, pulseRadius
        )
        const [r, g, b] = blob.color
        gradient.addColorStop(0, `rgba(${r}, ${g}, ${b}, 0.12)`)
        gradient.addColorStop(0.4, `rgba(${r}, ${g}, ${b}, 0.05)`)
        gradient.addColorStop(1, `rgba(${r}, ${g}, ${b}, 0)`)

        ctx.fillStyle = gradient
        ctx.beginPath()
        ctx.arc(blob.x, blob.y, pulseRadius, 0, Math.PI * 2)
        ctx.fill()
      }

      // Subtle grid overlay
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.015)'
      ctx.lineWidth = 0.5
      for (let x = 0; x < 1920; x += 120) {
        ctx.beginPath()
        ctx.moveTo(x, 0)
        ctx.lineTo(x, 1080)
        ctx.stroke()
      }
      for (let y = 0; y < 1080; y += 120) {
        ctx.beginPath()
        ctx.moveTo(0, y)
        ctx.lineTo(1920, y)
        ctx.stroke()
      }

      animId = requestAnimationFrame(draw)
    }

    draw()
    return () => cancelAnimationFrame(animId)
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
    />
  )
}
