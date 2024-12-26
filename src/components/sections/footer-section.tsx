'use client'

import React from "react"
import { Mail, Phone, Navigation, Home, Info, ImageIcon, Star, Map, Calendar } from "lucide-react"

const menuItems = [
  { icon: Home, label: 'Úvod', id: 'top' },
  { icon: Info, label: 'O ubytování', id: 'description' },
  { icon: ImageIcon, label: 'Galerie', id: 'gallery' },
  { icon: Star, label: 'Hodnocení', id: 'reviews' },
  { icon: Map, label: 'Okolí', id: 'nearby' },
  { icon: Calendar, label: 'Rezervace', id: 'booking' }
]

export function FooterSection() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="bg-stone-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Kontakt */}
          <div>
            <h3 className="text-xl font-serif mb-6">Kontakt</h3>
            <div className="space-y-4">
              <a 
                href="tel:+420605033166"
                className="flex items-center gap-2 hover:text-stone-300 transition-colors"
              >
                <Phone className="h-5 w-5" />
                <span>+420 605 033 166</span>
              </a>
              <a 
                href="mailto:petraklimesova21@seznam.cz"
                className="flex items-center gap-2 hover:text-stone-300 transition-colors"
              >
                <Mail className="h-5 w-5" />
                <span>petraklimesova21@seznam.cz</span>
              </a>
              <a 
                href="https://www.google.com/maps/search/?api=1&query=Biskupice-Pulkov+72"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-stone-300 transition-colors"
              >
                <Navigation className="h-5 w-5" />
                <span>Biskupice-Pulkov 72</span>
              </a>
            </div>
          </div>

          {/* Navigace */}
          <div>
            <h3 className="text-xl font-serif mb-6">Navigace</h3>
            <div className="grid grid-cols-2 gap-4">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="flex items-center gap-2 hover:text-stone-300 transition-colors text-left"
                >
                  <item.icon className="h-5 w-5" />
                  <span>{item.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* O nás */}
          <div>
            <h3 className="text-xl font-serif mb-6">O ubytování</h3>
            <p className="text-stone-300 leading-relaxed">
              Luxusní ubytování v klidné lokalitě Biskupic. Moderní apartmán nabízí veškerý 
              komfort pro váš dokonalý odpočinek v objetí přírody.
            </p>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-stone-700 text-center text-stone-400">
          <p>© {new Date().getFullYear()} Ubytování Na Věčnosti. Všechna práva vyhrazena.</p>
        </div>
      </div>
    </footer>
  )
} 