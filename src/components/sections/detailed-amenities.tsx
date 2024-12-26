'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  Bed,
  Bath,
  Wifi,
  Tv,
  Coffee,
  UtensilsCrossed,
  Car,
  Trees,
  Dog,
  Baby,
  Gamepad2,
  Dumbbell,
} from 'lucide-react'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

const amenities = [
  {
    icon: Bed,
    title: "Ložnice",
    description: "1 velká manželská postel, 2 jednolůžkové postele, skříň nebo šatna, povlečení",
  },
  {
    icon: Bath,
    title: "Koupelna",
    description: "Sprcha, toaleta, fén, ručníky, toaletní papír",
  },
  {
    icon: Wifi,
    title: "Internet",
    description: "Bezdrátové internetové připojení je dostupné v celém hotelu zdarma",
  },
  {
    icon: UtensilsCrossed,
    title: "Kuchyně",
    description: "Jídelní stůl, varná deska, kuchyňské potřeby, rychlovarná konvice, mikrovlnná trouba, lednička",
  },
  {
    icon: Car,
    title: "Parkování",
    description: "Veřejné parkování je možné zdarma na přilehlém místě (rezervace není nutná)",
  },
  {
    icon: Trees,
    title: "Venkovní prostor",
    description: "Balkon s výhledem do zahrady",
  }
]

interface DetailedAmenitiesProps {
  data: {
    facilities: {
      amenities: string[];
      kitchen: string[];
      bathroom: string[];
      bedroom: string[];
      outdoor: string[];
    };
  };
}

export function DetailedAmenities({ data }: DetailedAmenitiesProps) {
  const sectionRef = useRef<HTMLElement>(null)
  const cardsRef = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animace nadpisu
      gsap.from("[data-title]", {
        opacity: 0,
        y: 50,
        duration: 1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top center+=100",
        },
      })

      // Animace karet s vybavením
      gsap.from(cardsRef.current.filter(Boolean), {
        opacity: 0,
        y: 50,
        stagger: {
          each: 0.1,
          grid: "auto",
          from: "start",
        },
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top center+=100",
          end: "bottom center",
        },
      })
    })

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="py-16"
      id="amenities"
    >
      <div className="w-full max-w-4xl mx-auto">
        <h2
          data-title
          className="mb-16 text-center text-3xl font-bold md:text-4xl lg:text-5xl"
        >
          Vybavení a služby
        </h2>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {amenities.map((amenity, index) => (
            <div
              key={amenity.title}
              ref={(el) => {
                cardsRef.current[index] = el
              }}
              className="rounded-2xl bg-gray-50 p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <amenity.icon className="mb-4 h-8 w-8 text-gray-900" />
              <h3 className="mb-2 text-xl font-semibold">{amenity.title}</h3>
              <p className="text-gray-600">{amenity.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 