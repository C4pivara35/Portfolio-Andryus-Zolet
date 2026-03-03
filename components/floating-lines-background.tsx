"use client"

import { useEffect, useState } from "react"
import FloatingLines from "@/components/FloatingLines"

export function FloatingLinesBackground() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <div className="absolute inset-0 -z-10 bg-black" />
  }

  return (
    <div className="absolute inset-0 -z-10">
      <FloatingLines
        linesGradient={["#00ff00", "#00ffff", "#008080"]}
        animationSpeed={1}
        interactive
        bendRadius={5}
        bendStrength={-0.5}
        mouseDamping={0.05}
        parallax
        parallaxStrength={0.2}
      />
    </div>
  )
}
