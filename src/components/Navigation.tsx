'use client'

import { useState } from "react"
import { Menu, X } from "lucide-react"
import Link from "next/link"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const menuItems = [
    { label: "Ubytování", href: "#accommodation" },
    { label: "Vybavení", href: "#amenities" },
    { label: "Hodnocení", href: "#reviews" },
    { label: "Okolí", href: "#nearby" },
    { label: "Hostitel", href: "#host" },
    { label: "Pravidla", href: "#policies" },
    { label: "Kontakt", href: "#contact" }
  ]

  return (
    <header className="fixed left-0 right-0 top-0 z-50 bg-white/80 backdrop-blur-md border-b">
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between h-24">
          {/* Logo */}
          <Link href="/" className="block h-16 w-48">
            <div className="relative h-full w-full">
              <object
                data="/logos/logo_black.svg"
                type="image/svg+xml"
                className="h-full w-full"
                aria-label="Na Věčnosti"
              />
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2"
            aria-label="Menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="md:hidden py-4">
              <div className="flex flex-col gap-4">
                {menuItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          )}
        </nav>
      </div>
    </header>
  )
}
