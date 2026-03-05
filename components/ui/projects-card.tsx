"use client"

import TiltedCard from "@/components/ui/TiltedCard"

const projects = [
  {
    imageSrc: "https://raw.githubusercontent.com/AndryusZolet/DriveNow/main/Documentacao/Logo.png",
    altText: "DriveNow - Car Rental App",
    captionText: "DriveNow",
    comingSoon: false,
    href: "https://github.com/AndryusZolet/DriveNow",
  },
  {
    imageSrc: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80&blur=2",
    altText: "Em Breve",
    captionText: "Em Breve",
    comingSoon: true,
    href: "",
  },
  {
    imageSrc: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&q=80&blur=2",
    altText: "Em Breve",
    captionText: "Em Breve",
    comingSoon: true,
    href: "",
  },
]

export function BentoPricing() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8 lg:gap-12">
      {projects.map((project, i) => {
        const card = (
          <TiltedCard
            imageSrc={project.imageSrc}
            altText={project.altText}
            captionText={project.captionText}
            containerHeight="clamp(200px, 75vw, 300px)"
            containerWidth="clamp(200px, 75vw, 300px)"
            imageHeight="300px"
            imageWidth="300px"
            rotateAmplitude={7}
            scaleOnHover={1.05}
            showMobileWarning={false}
            showTooltip={false}
            displayOverlayContent
            overlayContent={
              project.comingSoon ? (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/60 backdrop-blur-sm">
                  <p className="text-white text-lg font-bold tracking-widest uppercase drop-shadow">
                    Em Breve
                  </p>
                </div>
              ) : (
                <div className="absolute inset-0 flex items-end p-3 bg-gradient-to-t from-black/60 to-transparent">
                  <p className="text-white text-sm font-semibold drop-shadow">
                    {project.captionText}
                  </p>
                </div>
              )
            }
          />
        )
        return project.href ? (
          <a key={i} href={project.href} target="_blank" rel="noopener noreferrer">
            {card}
          </a>
        ) : (
          <div key={i}>{card}</div>
        )
      })}
    </div>
  )
}
