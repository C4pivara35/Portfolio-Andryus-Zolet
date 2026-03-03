"use client"
import { useState } from "react"
import { MenuIcon, XIcon } from "lucide-react"

export function FloatingNavbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    setMobileOpen(false)
    // On mobile (<md) the layout is vertical: use normal scrollIntoView
    // On desktop (md+) the layout is horizontal: scroll the snap container
    if (window.innerWidth < 768) {
      const section = document.getElementById(sectionId)
      if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "start" })
      }
    } else {
      const section = document.getElementById(sectionId)
      if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "start" })
      }
    }
  }

  const navLinks = [
    { id: "skills", label: "Skills" },
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ]

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 px-4 py-4">
      <div className="mx-auto max-w-7xl rounded-2xl border-2 border-white/10 bg-white/5 px-6 py-4 backdrop-blur-sm">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button onClick={() => scrollToSection("home")} className="cursor-pointer">
            <div className="flex items-center text-white [text-shadow:_0_2px_8px_rgb(0_0_0_/_40%)]">
              <svg
                height="1.8em"
                viewBox="0 0 56 24"
                width="3em"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
              >
                <text
                  x="0"
                  y="20"
                  fontFamily="inherit"
                  fontSize="22"
                  fontWeight="800"
                  letterSpacing="2"
                >AZ</text>
              </svg>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-sm font-open-sans-custom text-gray-300 transition-colors hover:text-white [text-shadow:_0_2px_6px_rgb(0_0_0_/_40%)]"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Hamburger button — mobile only */}
          <button
            className="flex items-center justify-center rounded-lg p-1.5 text-gray-300 transition-colors hover:text-white md:hidden"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <XIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile dropdown */}
        {mobileOpen && (
          <div className="mt-4 flex flex-col gap-1 border-t border-white/10 pt-4 md:hidden">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="rounded-lg px-3 py-2.5 text-left text-sm font-open-sans-custom text-gray-300 transition-colors hover:bg-white/10 hover:text-white"
              >
                {link.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}
