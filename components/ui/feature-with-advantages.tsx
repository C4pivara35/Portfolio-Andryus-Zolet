import { Check } from "lucide-react"
import LogoLoop from "@/components/ui/LogoLoop"
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiPython,
  SiPostgresql,
  SiDocker,
  SiJavascript,
} from "react-icons/si"
import { FaJava } from "react-icons/fa"

const techLogos = [
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
  { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
  { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
  { node: <SiJavascript />, title: "JavaScript", href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
  { node: <SiNodedotjs />, title: "Node.js", href: "https://nodejs.org" },
  { node: <SiPython />, title: "Python", href: "https://www.python.org" },
  { node: <SiPostgresql />, title: "PostgreSQL", href: "https://www.postgresql.org" },
  { node: <SiDocker />, title: "Docker", href: "https://www.docker.com" },
  { node: <FaJava />, title: "Java", href: "https://www.java.com" },
]

function Feature() {
  return (
    <div className="w-full py-10 lg:py-0">
      <div className="container mx-auto px-4">
        <div className="flex gap-4 py-10 flex-col items-start lg:py-0">
          <div className="flex gap-2 flex-col">
            <h2 className="text-3xl md:text-5xl tracking-tighter lg:max-w-xl font-open-sans-custom text-white [text-shadow:_0_4px_20px_rgb(0_0_0_/_60%)]">
              Minhas Habilidades
            </h2>
            <p className="text-lg max-w-xl lg:max-w-xl leading-relaxed tracking-tight text-gray-300 font-open-sans-custom [text-shadow:_0_2px_10px_rgb(0_0_0_/_50%)]">
              Desenvolvedor Back-end focado em criar sistemas confiáveis, escaláveis e de alta performance.
            </p>
          </div>

          {/* Logo Loop */}
          <div className="w-full mt-4" style={{ height: "60px", position: "relative", overflow: "hidden" }}>
            <LogoLoop
              logos={techLogos}
              speed={50}
              direction="right"
              logoHeight={36}
              gap={48}
              hoverSpeed={10}
              scaleOnHover
              fadeOut
              fadeOutColor="transparent"
              ariaLabel="Technologies I work with"
              className="text-white"
            />
          </div>

          <div className="flex gap-10 pt-8 flex-col w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 items-start lg:grid-cols-3 gap-6 md:gap-10">
              <div className="flex flex-row gap-6 w-full items-start">
                <Check className="w-[1.05rem] h-[1.05rem] mt-2 text-white" strokeWidth={3} />
                <div className="flex flex-col gap-1">
                  <p className="text-white font-open-sans-custom">Java</p>
                  <p className="text-gray-300 text-sm font-open-sans-custom">
                    Desenvolvimento back-end robusto com Spring Boot, APIs REST e arquitetura orientada a objetos.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-[1.05rem] h-[1.05rem] mt-2 text-white" strokeWidth={3} />
                <div className="flex flex-col gap-1">
                  <p className="text-white font-open-sans-custom">React</p>
                  <p className="text-gray-300 text-sm font-open-sans-custom">
                    Interfaces orientadas a componentes com gerenciamento de estado e renderização eficiente.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-[1.05rem] h-[1.05rem] mt-2 text-white" strokeWidth={3} />
                <div className="flex flex-col gap-1">
                  <p className="text-white font-open-sans-custom">Tailwind CSS</p>
                  <p className="text-gray-300 text-sm font-open-sans-custom">
                    Estilização utility-first para layouts rápidos, consistentes e responsivos.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 w-full items-start">
                <Check className="w-[1.05rem] h-[1.05rem] mt-2 text-white" strokeWidth={3} />
                <div className="flex flex-col gap-1">
                  <p className="text-white font-open-sans-custom">TypeScript</p>
                  <p className="text-gray-300 text-sm font-open-sans-custom">
                    Tipagem estática completa para código mais seguro e fácil de manter.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-[1.05rem] h-[1.05rem] mt-2 text-white" strokeWidth={3} />
                <div className="flex flex-col gap-1">
                  <p className="text-white font-open-sans-custom">PostgreSQL</p>
                  <p className="text-gray-300 text-sm font-open-sans-custom">
                    Bancos de dados relacionais com modelagem eficiente, queries otimizadas e migrações de schema.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-[1.05rem] h-[1.05rem] mt-2 text-white" strokeWidth={3} />
                <div className="flex flex-col gap-1">
                  <p className="text-white font-open-sans-custom">Docker</p>
                  <p className="text-gray-300 text-sm font-open-sans-custom">
                    Conteinerização de aplicações para ambientes padronizados e deploys confiáveis.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export { Feature }
