'use client'

import { useState, useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Link from "next/link"
import { Menu, X } from "lucide-react"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const headerRef = useRef<HTMLElement>(null)
  const logoRef = useRef<HTMLDivElement>(null)
  const menuRef = useRef<HTMLDivElement>(null)
  const whiteLogoRef = useRef<HTMLObjectElement>(null)
  const blackLogoRef = useRef<HTMLObjectElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header background animation
      gsap.fromTo(headerRef.current,
        {
          backgroundColor: "rgba(0, 0, 0, 0.2)",
          backdropFilter: "blur(10px)",
        },
        {
          backgroundColor: "rgba(255, 255, 255, 0.95)",
          backdropFilter: "blur(10px)",
          scrollTrigger: {
            trigger: "body",
            start: "20px top",
            end: "50px top",
            scrub: true,
          },
        }
      )

      // Logo a menu barvy
      ScrollTrigger.create({
        trigger: "body",
        start: "20px top",
        end: "50px top",
        scrub: true,
        onUpdate: (self) => {
          // Okamžitá změna barev
          if (whiteLogoRef.current && blackLogoRef.current) {
            whiteLogoRef.current.style.opacity = (1 - self.progress).toString()
            blackLogoRef.current.style.opacity = self.progress.toString()
          }

          // Okamžitá změna barev menu
          const menuItems = menuRef.current?.querySelectorAll('a')
          if (menuItems) {
            menuItems.forEach(item => {
              item.style.color = self.progress > 0.5 ? '#1a1a1a' : '#ffffff'
            })
          }
        },
      })

      // Logo scale - jednodušší animace
      gsap.fromTo(logoRef.current,
        { scale: 1 },
        {
          scale: 0.95,
          scrollTrigger: {
            trigger: "body",
            start: "20px top",
            end: "50px top",
            scrub: true,
          },
        }
      )

      // Menu items - rychlejší animace
      const menuItems = menuRef.current?.querySelectorAll('a')
      if (menuItems) {
        gsap.from(menuItems, {
          opacity: 0,
          y: -5,
          duration: 0.2,
          stagger: 0.02,
          ease: "none",
        })
      }
    })

    return () => ctx.revert()
  }, [])

  // Mobile menu - rychlejší animace
  useEffect(() => {
    if (isOpen) {
      gsap.fromTo('.mobile-menu-item',
        {
          opacity: 0,
          y: 5,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.15,
          stagger: 0.02,
          ease: "none",
        }
      )
    }
  }, [isOpen])

  return (
    <header
      ref={headerRef}
      className="fixed left-0 right-0 top-0 z-50 flex h-24 items-center transition-none"
    >
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <div ref={logoRef} className="relative h-16 w-48 origin-left will-change-transform">
            <Link href="/" className="block h-full w-full">
              <div className="relative h-full w-full">
                {/* White logo */}
                <object
                  ref={whiteLogoRef}
                  data="/logos/logo_white.svg"
                  type="image/svg+xml"
                  className="absolute h-full w-full"
                  aria-label="Na Věčnosti - bílé logo"
                />
                {/* Black logo */}
                <object
                  ref={blackLogoRef}
                  data="/logos/logo_black.svg"
                  type="image/svg+xml"
                  className="absolute h-full w-full opacity-0"
                  aria-label="Na Věčnosti - černé logo"
                />
              </div>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div ref={menuRef} className="hidden items-center gap-8 md:flex">
            <Link
              href="#about"
              className="text-lg font-light tracking-wide text-white transition-none hover:text-gray-200"
            >
              O nás
            </Link>
            <Link
              href="#amenities"
              className="text-lg font-light tracking-wide text-white transition-none hover:text-gray-200"
            >
              Vybavení
            </Link>
            <Link
              href="#gallery"
              className="text-lg font-light tracking-wide text-white transition-none hover:text-gray-200"
            >
              Galerie
            </Link>
            <Link
              href="#nearby"
              className="text-lg font-light tracking-wide text-white transition-none hover:text-gray-200"
            >
              Okolí
            </Link>
            <Link
              href="#reviews"
              className="text-lg font-light tracking-wide text-white transition-none hover:text-gray-200"
            >
              Hodnocení
            </Link>
            <Link
              href="#contact"
              className="text-lg font-light tracking-wide text-white transition-none hover:text-gray-200"
            >
              Kontakt
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="z-50 p-2 text-white transition-none md:hidden"
            aria-label="Menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="fixed inset-0 bg-black/95 backdrop-blur-sm">
              <div className="flex h-full flex-col items-center justify-center gap-8">
                <Link
                  href="#about"
                  className="mobile-menu-item text-2xl font-light tracking-wide text-white transition-none hover:text-gray-200"
                  onClick={() => setIsOpen(false)}
                >
                  O nás
                </Link>
                <Link
                  href="#amenities"
                  className="mobile-menu-item text-2xl font-light tracking-wide text-white transition-none hover:text-gray-200"
                  onClick={() => setIsOpen(false)}
                >
                  Vybavení
                </Link>
                <Link
                  href="#gallery"
                  className="mobile-menu-item text-2xl font-light tracking-wide text-white transition-none hover:text-gray-200"
                  onClick={() => setIsOpen(false)}
                >
                  Galerie
                </Link>
                <Link
                  href="#nearby"
                  className="mobile-menu-item text-2xl font-light tracking-wide text-white transition-none hover:text-gray-200"
                  onClick={() => setIsOpen(false)}
                >
                  Okolí
                </Link>
                <Link
                  href="#reviews"
                  className="mobile-menu-item text-2xl font-light tracking-wide text-white transition-none hover:text-gray-200"
                  onClick={() => setIsOpen(false)}
                >
                  Hodnocení
                </Link>
                <Link
                  href="#contact"
                  className="mobile-menu-item text-2xl font-light tracking-wide text-white transition-none hover:text-gray-200"
                  onClick={() => setIsOpen(false)}
                >
                  Kontakt
                </Link>
              </div>
            </div>
          )}
        </nav>
      </div>
    </header>
  )
}
