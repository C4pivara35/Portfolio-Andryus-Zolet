"use client"

import { useEffect, useRef, useCallback } from "react"

interface FloatingLinesProps {
  linesGradient?: string[]
  animationSpeed?: number
  interactive?: boolean
  bendRadius?: number
  bendStrength?: number
  mouseDamping?: number
  parallax?: boolean
  parallaxStrength?: number
  lineCount?: number
  lineWidth?: number
  className?: string
}

interface Line {
  y: number
  phase: number
  speed: number
  amplitude: number
  frequency: number
  colorIndex: number
  opacity: number
  offsetY: number
}

export function FloatingLines({
  linesGradient = ["#00ff00", "#00ffff", "#008080"],
  animationSpeed = 1,
  interactive = true,
  bendRadius = 5,
  bendStrength = -0.5,
  mouseDamping = 0.05,
  parallax = true,
  parallaxStrength = 0.2,
  lineCount = 30,
  lineWidth = 1.2,
  className,
}: FloatingLinesProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animRef = useRef<number>(0)
  const timeRef = useRef<number>(0)
  const mouseRef = useRef({ x: 0.5, y: 0.5 })
  const smoothMouseRef = useRef({ x: 0.5, y: 0.5 })
  const linesRef = useRef<Line[]>([])

  const initLines = useCallback(
    (width: number, height: number) => {
      const lines: Line[] = []
      for (let i = 0; i < lineCount; i++) {
        lines.push({
          y: (i / (lineCount - 1)) * height,
          phase: Math.random() * Math.PI * 2,
          speed: (0.3 + Math.random() * 0.7) * animationSpeed,
          amplitude: 8 + Math.random() * 24,
          frequency: 0.003 + Math.random() * 0.006,
          colorIndex: i / (lineCount - 1),
          opacity: 0.2 + Math.random() * 0.6,
          offsetY: 0,
        })
      }
      linesRef.current = lines
    },
    [lineCount, animationSpeed]
  )

  const getGradientColor = useCallback(
    (t: number, alpha: number): string => {
      if (linesGradient.length === 0) return `rgba(255,255,255,${alpha})`
      if (linesGradient.length === 1) {
        const c = hexToRgb(linesGradient[0])
        return c ? `rgba(${c.r},${c.g},${c.b},${alpha})` : `rgba(255,255,255,${alpha})`
      }
      const scaled = t * (linesGradient.length - 1)
      const idx = Math.floor(scaled)
      const frac = scaled - idx
      const c1 = hexToRgb(linesGradient[Math.min(idx, linesGradient.length - 1)])
      const c2 = hexToRgb(linesGradient[Math.min(idx + 1, linesGradient.length - 1)])
      if (!c1 || !c2) return `rgba(255,255,255,${alpha})`
      const r = Math.round(c1.r + (c2.r - c1.r) * frac)
      const g = Math.round(c1.g + (c2.g - c1.g) * frac)
      const b = Math.round(c1.b + (c2.b - c1.b) * frac)
      return `rgba(${r},${g},${b},${alpha})`
    },
    [linesGradient]
  )

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
      initLines(canvas.width, canvas.height)
    }

    resize()
    const ro = new ResizeObserver(resize)
    ro.observe(canvas)

    const onMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      mouseRef.current = {
        x: (e.clientX - rect.left) / rect.width,
        y: (e.clientY - rect.top) / rect.height,
      }
    }

    if (interactive) {
      canvas.addEventListener("mousemove", onMouseMove)
    }

    const draw = (timestamp: number) => {
      const dt = timestamp - timeRef.current
      timeRef.current = timestamp

      // smooth mouse
      smoothMouseRef.current.x +=
        (mouseRef.current.x - smoothMouseRef.current.x) * mouseDamping
      smoothMouseRef.current.y +=
        (mouseRef.current.y - smoothMouseRef.current.y) * mouseDamping

      const W = canvas.width
      const H = canvas.height
      ctx.clearRect(0, 0, W, H)

      const sm = smoothMouseRef.current
      const parallaxOffsetX = parallax ? (sm.x - 0.5) * parallaxStrength * W * 0.15 : 0
      const parallaxOffsetY = parallax ? (sm.y - 0.5) * parallaxStrength * H * 0.15 : 0

      const t = timestamp * 0.001 * animationSpeed

      for (const line of linesRef.current) {
        const baseY = line.y + parallaxOffsetY
        const color = getGradientColor(line.colorIndex, line.opacity)

        ctx.beginPath()
        ctx.strokeStyle = color
        ctx.lineWidth = lineWidth

        const segments = Math.ceil(W / 8)
        for (let s = 0; s <= segments; s++) {
          const px = (s / segments) * W + parallaxOffsetX
          const nx = px / W // normalized x

          // base wave
          let py =
            baseY +
            Math.sin(nx * Math.PI * 2 * line.frequency * W + t * line.speed + line.phase) *
              line.amplitude

          // mouse bend
          if (interactive) {
            const mx = sm.x * W
            const my = sm.y * H
            const dist = Math.sqrt((px - mx) ** 2 + (py - my) ** 2)
            const influence = bendRadius * H * 0.1
            if (dist < influence) {
              const factor = (1 - dist / influence) * bendStrength * 40
              py += factor
            }
          }

          if (s === 0) ctx.moveTo(px, py)
          else ctx.lineTo(px, py)
        }

        ctx.stroke()
      }

      animRef.current = requestAnimationFrame(draw)
    }

    animRef.current = requestAnimationFrame(draw)

    return () => {
      cancelAnimationFrame(animRef.current)
      ro.disconnect()
      if (interactive) canvas.removeEventListener("mousemove", onMouseMove)
    }
  }, [
    initLines,
    getGradientColor,
    animationSpeed,
    interactive,
    bendRadius,
    bendStrength,
    mouseDamping,
    parallax,
    parallaxStrength,
    lineWidth,
  ])

  return (
    <canvas
      ref={canvasRef}
      className={className}
      style={{ width: "100%", height: "100%", display: "block" }}
    />
  )
}

function hexToRgb(hex: string): { r: number; g: number; b: number } | null {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null
}
