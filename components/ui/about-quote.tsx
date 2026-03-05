"use client"

import React from "react"
import DotPattern from "@/components/ui/dot-pattern"

export function AboutQuote({ children }: { children?: React.ReactNode }) {
  return (
    <div className="mx-auto mb-10 max-w-7xl px-6 md:mb-20 xl:px-0">
      <div className="relative flex flex-col items-center border-2 border-white/20 rounded-lg backdrop-blur-sm bg-white/5">
        <DotPattern width={5} height={5} />

        {/* Corner decorations */}
        <div className="absolute -left-1.5 -top-1.5 h-3 w-3 bg-white/80" />
        <div className="absolute -bottom-1.5 -left-1.5 h-3 w-3 bg-white/80" />
        <div className="absolute -right-1.5 -top-1.5 h-3 w-3 bg-white/80" />
        <div className="absolute -bottom-1.5 -right-1.5 h-3 w-3 bg-white/80" />

        <div className="relative z-20 w-full flex flex-col lg:flex-row items-center gap-8 py-4 md:py-6 md:px-10 xl:py-8 xl:px-12">
          {/* Text content */}
          <div className="flex-1 min-w-0">
            <h1 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold tracking-tight text-white [text-shadow:_0_4px_20px_rgb(0_0_0_/_60%)] mb-4 md:mb-6 font-open-sans-custom">
              Sobre Mim
            </h1>
            <div className="space-y-3 md:space-y-4">
              <p className="text-sm md:text-base lg:text-lg xl:text-xl text-white/90 [text-shadow:_0_2px_10px_rgb(0_0_0_/_50%)] font-open-sans-custom leading-relaxed">
                Sou engenheiro de software apaixonado por criar produtos digitais bonitos e funcionais. Com experiência em desenvolvimento full-stack, combino design e código para entregar interfaces limpas e profissionais.
              </p>
              <p className="text-sm md:text-base lg:text-lg xl:text-xl text-white/90 [text-shadow:_0_2px_10px_rgb(0_0_0_/_50%)] font-open-sans-custom leading-relaxed">
                Gosto de trabalhar com tecnologias modernas e estou sempre em busca de novos desafios que me permitam crescer e agregar valor a produtos e equipes.
              </p>
            </div>
          </div>

          {/* Right slot — e.g. ProfileCard */}
          {children && (
            <div className="flex-shrink-0 flex items-center justify-center w-full lg:w-auto">
              {children}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
