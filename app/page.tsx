"use client"

import { FloatingLinesBackground } from "@/components/floating-lines-background"
import { FloatingNavbar } from "@/components/floating-navbar"
import { Feature } from "@/components/ui/feature-with-advantages"
import { BentoPricing } from "@/components/ui/projects-card"
import { ContactCard } from "@/components/ui/contact-card"
import { AboutQuote } from "@/components/ui/about-quote"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { MailIcon, PhoneIcon, MapPinIcon, LinkedinIcon, GithubIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { useEffect, useRef } from "react"
import SplitText from "@/components/ui/SplitText"
import TextType from "@/components/ui/TextType"
import ProfileCard from "@/components/ProfileCard"

export default function Home() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const projectsSectionRef = useRef<HTMLDivElement>(null)
  const aboutSectionRef = useRef<HTMLDivElement>(null)
  const contactSectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current
    if (!scrollContainer) return

    const handleWheel = (e: WheelEvent) => {
      // Horizontal scroll layout is desktop-only
      if (window.innerWidth < 768) return
      const delta = e.deltaY
      const currentScroll = scrollContainer.scrollLeft
      const containerWidth = scrollContainer.offsetWidth
      const currentSection = Math.round(currentScroll / containerWidth)

      if (currentSection === 2 && aboutSectionRef.current) {
        const aboutSection = aboutSectionRef.current
        const isAtTop = aboutSection.scrollTop === 0
        const isAtBottom = aboutSection.scrollTop + aboutSection.clientHeight >= aboutSection.scrollHeight - 1

        if (delta > 0 && !isAtBottom) {
          return
        }

        if (delta < 0 && !isAtTop) {
          return
        }

        if (delta < 0 && isAtTop) {
          e.preventDefault()
          scrollContainer.scrollTo({
            left: 1 * containerWidth,
            behavior: "smooth",
          })
          return
        }

        if (delta > 0 && isAtBottom) {
          e.preventDefault()
          scrollContainer.scrollTo({
            left: 3 * containerWidth,
            behavior: "smooth",
          })
          return
        }
      }

      if (currentSection === 3 && projectsSectionRef.current) {
        const projectsSection = projectsSectionRef.current
        const isAtTop = projectsSection.scrollTop === 0
        const isAtBottom = projectsSection.scrollTop + projectsSection.clientHeight >= projectsSection.scrollHeight - 1

        if (delta > 0 && !isAtBottom) {
          return
        }

        if (delta < 0 && !isAtTop) {
          return
        }

        if (delta < 0 && isAtTop) {
          e.preventDefault()
          scrollContainer.scrollTo({
            left: 2 * containerWidth,
            behavior: "smooth",
          })
          return
        }

        if (delta > 0 && isAtBottom) {
          e.preventDefault()
          scrollContainer.scrollTo({
            left: 4 * containerWidth,
            behavior: "smooth",
          })
          return
        }
      }

      if (currentSection === 4 && contactSectionRef.current) {
        const contactSection = contactSectionRef.current
        const isAtTop = contactSection.scrollTop === 0
        const isAtBottom = contactSection.scrollTop + contactSection.clientHeight >= contactSection.scrollHeight - 1

        if (delta > 0 && !isAtBottom) {
          return
        }

        if (delta < 0 && !isAtTop) {
          return
        }

        if (delta < 0 && isAtTop) {
          e.preventDefault()
          scrollContainer.scrollTo({
            left: 3 * containerWidth,
            behavior: "smooth",
          })
          return
        }

        if (delta > 0 && isAtBottom) {
          e.preventDefault()
          return
        }
      }

      e.preventDefault()

      if (Math.abs(delta) > 10) {
        let targetSection = currentSection
        if (delta > 0) {
          targetSection = Math.min(currentSection + 1, 4)
        } else {
          targetSection = Math.max(currentSection - 1, 0)
        }

        scrollContainer.scrollTo({
          left: targetSection * containerWidth,
          behavior: "smooth",
        })
      }
    }

    scrollContainer.addEventListener("wheel", handleWheel, { passive: false })
    return () => scrollContainer.removeEventListener("wheel", handleWheel)
  }, [])

  return (
    <main className="relative h-screen overflow-hidden">
      <FloatingLinesBackground />

      <div className="fixed inset-0 z-[5] bg-black/50" />

      <FloatingNavbar />

      <div
        ref={scrollContainerRef}
        className="relative z-10 flex flex-col md:flex-row h-screen w-full overflow-y-auto md:overflow-y-hidden overflow-x-hidden md:overflow-x-auto scroll-smooth md:snap-x md:snap-mandatory"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        <style jsx>{`
          div::-webkit-scrollbar {
            display: none;
          }
        `}</style>

        <section id="home" className="flex min-h-screen md:min-h-0 md:min-w-full flex-none snap-start items-center justify-center px-4 py-20">
          <div className="mx-auto max-w-4xl">
            <div className="text-center px-0 leading-5">
              <h1 className="mb-8 text-balance text-5xl tracking-tight text-white [text-shadow:_0_4px_20px_rgb(0_0_0_/_60%)] md:text-6xl lg:text-8xl">
                <SplitText
                  text="Andryus Zolet"
                  className="text-5xl md:text-6xl lg:text-8xl tracking-tight text-white [text-shadow:_0_4px_20px_rgb(0_0_0_/_60%)] font-open-sans-custom"
                  delay={40}
                  duration={2}
                  ease="power3.out"
                  splitType="chars"
                  from={{ opacity: 0, y: 40 }}
                  to={{ opacity: 1, y: 0 }}
                  threshold={0.1}
                  rootMargin="0px"
                  textAlign="center"
                  tag="span"
                />
              </h1>

              <div className="mb-8 flex justify-center">
                <TextType
                  text={[
                    "whether you are a designer, a developer, or just curious...",
                    "take an idea, prompt it, and watch it come alive.",
                    "let's build something great together.",
                  ]}
                  as="p"
                  className="mx-auto max-w-2xl text-center text-gray-300 [text-shadow:_0_2px_10px_rgb(0_0_0_/_50%)] font-thin font-open-sans-custom tracking-wide text-xl"
                  typingSpeed={40}
                  deletingSpeed={20}
                  pauseDuration={2000}
                  showCursor
                  cursorCharacter="_"
                  cursorClassName="text-gray-300"
                  cursorBlinkDuration={0.5}
                  loop
                />
              </div>

            </div>
          </div>
        </section>

        <section id="skills" className="flex min-h-screen md:min-h-0 md:min-w-full flex-none snap-start flex-col items-center justify-center px-4 py-20 gap-12">
          <div className="mx-auto max-w-7xl w-full">
            <Feature />
          </div>
        </section>

        <section
          id="about"
          ref={aboutSectionRef}
          className="relative min-h-screen md:min-h-0 md:min-w-full flex-none snap-start md:overflow-y-auto px-4 pt-24 pb-20 [&::-webkit-scrollbar]:hidden"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          <div
            aria-hidden="true"
            className={cn(
              "absolute inset-0 z-0 size-full pointer-events-none",
              "bg-[radial-gradient(rgba(255,255,255,0.1)_1px,transparent_1px)]",
              "bg-[size:12px_12px]",
              "opacity-30",
            )}
          />

          <div className="relative z-10 mx-auto w-full max-w-7xl">
            {/* Title block — spans full width above both columns */}
            <div className="mb-10">
              <h1 className="text-4xl font-extrabold tracking-tight lg:text-6xl text-white [text-shadow:_0_4px_20px_rgb(0_0_0_/_60%)] font-open-sans-custom">
                About Me
              </h1>
            </div>

            <AboutQuote>
              <ProfileCard
                name="Andryus Zolet"
                title="Software Engineer"
                handle="andryuszolet"
                status="Online"
                contactText="Contact Me"
                avatarUrl="/images/avatar.svg"
                showUserInfo
                enableTilt={true}
                enableMobileTilt
                onContactClick={() => {
                  const el = document.getElementById('contact')
                  const scrollContainer = el?.closest('[class*="overflow-x-auto"]') as HTMLElement | null
                  if (scrollContainer) {
                    scrollContainer.scrollTo({ left: 4 * scrollContainer.offsetWidth, behavior: 'smooth' })
                  }
                }}
                behindGlowColor="hsla(143, 100%, 60%, 0.5)"
                behindGlowSize="50%"
                behindGlowEnabled
                miniAvatarUrl="/images/avatar.svg"
                innerGradient="linear-gradient(145deg,hsla(143, 40%, 35%, 0.65) 0%,hsla(160, 60%, 50%, 0.3) 100%)"
              />
            </AboutQuote>
          </div>
        </section>

        <section
          id="projects"
          ref={projectsSectionRef}
          className="relative min-h-screen md:min-h-0 md:min-w-full flex-none snap-start md:overflow-y-auto px-4 pt-24 pb-20 [&::-webkit-scrollbar]:hidden"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          <div
            aria-hidden="true"
            className={cn(
              "absolute inset-0 z-0 size-full pointer-events-none",
              "bg-[radial-gradient(rgba(255,255,255,0.1)_1px,transparent_1px)]",
              "bg-[size:12px_12px]",
              "opacity-30",
            )}
          />

          <div className="relative z-10 mx-auto w-full max-w-5xl">
            <div className="mx-auto mb-10 max-w-2xl text-center">
              <h1 className="text-4xl font-extrabold tracking-tight lg:text-6xl text-white [text-shadow:_0_4px_20px_rgb(0_0_0_/_60%)] font-open-sans-custom">
                Plans and Pricing
              </h1>
              <p className="text-gray-300 mt-4 text-sm md:text-base font-open-sans-custom [text-shadow:_0_2px_10px_rgb(0_0_0_/_50%)]">
                Choose the perfect plan for your needs. From individual creators to enterprise teams, we have flexible
                pricing options to help you succeed.
              </p>
            </div>
            <BentoPricing />
          </div>
        </section>

        <section
          id="contact"
          ref={contactSectionRef}
          className="relative min-h-screen md:min-h-0 md:min-w-full flex-none snap-start md:overflow-y-auto px-4 pt-24 pb-20"
        >
          <div
            aria-hidden="true"
            className={cn(
              "absolute inset-0 z-0 size-full pointer-events-none",
              "bg-[radial-gradient(rgba(255,255,255,0.1)_1px,transparent_1px)]",
              "bg-[size:12px_12px]",
              "opacity-30",
            )}
          />

          <div className="relative z-10 mx-auto w-full max-w-5xl mt-[5vh]">
            <ContactCard
              title="Get in touch"
              description="If you have any questions regarding our Services or need help, please fill out the form here. We do our best to respond within 1 business day."
              contactInfo={[
                {
                  icon: MailIcon,
                  label: "Email",
                  value: "contatoandryuszolet@gmail.com",
                  noTruncate: true,
                },
                {
                  icon: PhoneIcon,
                  label: "Phone",
                  value: "+55 41 99796-3268",
                },
                {
                  icon: MapPinIcon,
                  label: "Address",
                  value: "Curitiba, Paraná",
                },
                {
                  icon: LinkedinIcon,
                  label: "LinkedIn",
                  value: "linkedin.com/in/andryus-zolet",
                  href: "https://www.linkedin.com/in/andryuszolet",
                },
                {
                  icon: GithubIcon,
                  label: "GitHub",
                  value: "github.com",
                  href: "https://github.com/C4pivara35",
                },
              ]}
            >
              <form action="" className="w-full space-y-4">
                <div className="flex flex-col gap-2">
                  <Label className="text-white [text-shadow:_0_2px_6px_rgb(0_0_0_/_40%)] font-open-sans-custom">
                    Name
                  </Label>
                  <Input
                    type="text"
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 [text-shadow:_0_2px_6px_rgb(0_0_0_/_40%)]"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <Label className="text-white [text-shadow:_0_2px_6px_rgb(0_0_0_/_40%)] font-open-sans-custom">
                    Email
                  </Label>
                  <Input
                    type="email"
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 [text-shadow:_0_2px_6px_rgb(0_0_0_/_40%)]"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <Label className="text-white [text-shadow:_0_2px_6px_rgb(0_0_0_/_40%)] font-open-sans-custom">
                    Phone
                  </Label>
                  <Input
                    type="tel"
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 [text-shadow:_0_2px_6px_rgb(0_0_0_/_40%)]"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <Label className="text-white [text-shadow:_0_2px_6px_rgb(0_0_0_/_40%)] font-open-sans-custom">
                    Message
                  </Label>
                  <Textarea className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 [text-shadow:_0_2px_6px_rgb(0_0_0_/_40%)]" />
                </div>
                <Button
                  className="w-full bg-white text-black hover:bg-gray-100 [text-shadow:_0_1px_2px_rgb(0_0_0_/_10%)] font-open-sans-custom"
                  type="button"
                >
                  Submit
                </Button>
              </form>
            </ContactCard>
          </div>
        </section>
      </div>
    </main>
  )
}
