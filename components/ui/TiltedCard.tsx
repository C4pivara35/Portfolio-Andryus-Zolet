"use client"

import { useRef, useState } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"

type TiltedCardProps = {
  imageSrc: string
  altText?: string
  captionText?: string
  containerHeight?: string
  containerWidth?: string
  imageHeight?: string
  imageWidth?: string
  rotateAmplitude?: number
  scaleOnHover?: number
  showMobileWarning?: boolean
  showTooltip?: boolean
  displayOverlayContent?: boolean
  overlayContent?: React.ReactNode
  className?: string
}

export default function TiltedCard({
  imageSrc,
  altText = "",
  captionText = "",
  containerHeight = "300px",
  containerWidth = "300px",
  imageHeight = "300px",
  imageWidth = "300px",
  rotateAmplitude = 14,
  scaleOnHover = 1.05,
  showMobileWarning = true,
  showTooltip = true,
  displayOverlayContent = false,
  overlayContent,
  className,
}: TiltedCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [rotateX, setRotateX] = useState(0)
  const [rotateY, setRotateY] = useState(0)
  const [scale, setScale] = useState(1)
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 })
  const [showTip, setShowTip] = useState(false)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current
    if (!card) return
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    setRotateX(((y - centerY) / centerY) * -rotateAmplitude)
    setRotateY(((x - centerX) / centerX) * rotateAmplitude)
    setTooltipPos({ x, y })
  }

  const handleMouseEnter = () => {
    setScale(scaleOnHover)
    setShowTip(true)
  }

  const handleMouseLeave = () => {
    setRotateX(0)
    setRotateY(0)
    setScale(1)
    setShowTip(false)
  }

  return (
    <figure
      className={cn("relative flex flex-col items-center max-w-full", className)}
      style={{ width: containerWidth }}
    >
      {showMobileWarning && (
        <p className="mb-2 text-xs text-gray-400 lg:hidden">
          Tilt effect visible on desktop
        </p>
      )}
      <div
        ref={cardRef}
        className="relative cursor-pointer"
        style={{
          width: containerWidth,
          height: containerHeight,
          perspective: "800px",
        }}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div
          className="relative w-full h-full rounded-xl overflow-hidden"
          style={{
            transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${scale})`,
            transition: "transform 0.1s ease-out",
            transformStyle: "preserve-3d",
          }}
        >
          <Image
            src={imageSrc}
            alt={altText}
            width={parseInt(imageWidth) || 300}
            height={parseInt(imageHeight) || 300}
            className="w-full h-full object-cover"
            unoptimized
          />
          {displayOverlayContent && overlayContent && (
            <div className="absolute inset-0">
              {overlayContent}
            </div>
          )}
          {showTooltip && showTip && (
            <div
              className="pointer-events-none absolute rounded bg-black/70 px-2 py-1 text-xs text-white"
              style={{ top: tooltipPos.y + 8, left: tooltipPos.x + 8 }}
            >
              {captionText}
            </div>
          )}
        </div>
      </div>
      {captionText && (
        <figcaption className="mt-2 text-center text-xs text-gray-400">
          {captionText}
        </figcaption>
      )}
    </figure>
  )
}
