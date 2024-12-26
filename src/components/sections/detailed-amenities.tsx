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
    title: "Pohodlné spaní",
    description: "Dvě ložnice s kvalitními matracemi a luxusním povlečením",
  },
  {
    icon: Bath,
    title: "Moderní koupelna",
    description: "Prostorná koupelna s vanou, sprchou a toaletou",
  },
  {
    icon: Wifi,
    title: "Rychlé Wi-Fi",
    description: "Vysokorychlostní internet v celém objektu",
  },
  {
    icon: Tv,
    title: "Smart TV",
    description: '65" televizor s Netflix a dalšími streamovacími službami',
  },
  {
    icon: Coffee,
    title: "Vybavená kuchyně",
    description: "Moderní spotřebiče včetně kávovaru a myčky",
  },
  {
    icon: UtensilsCrossed,
    title: "Venkovní grilování",
    description: "Plynový gril a posezení na zahradě",
  },
  {
    icon: Car,
    title: "Parkování",
    description: "Bezpečné parkování přímo u domu",
  },
  {
    icon: Trees,
    title: "Zahrada",
    description: "Rozlehlá zahrada s ovocnými stromy a bylinkami",
  },
  {
    icon: Dog,
    title: "Mazlíčci vítáni",
    description: "Rádi uvítáme vaše čtyřnohé přátele",
  },
  {
    icon: Baby,
    title: "Vhodné pro děti",
    description: "Dětská postýlka a vysoká židle k dispozici",
  },
  {
    icon: Gamepad2,
    title: "Herní vybavení",
    description: "Stolní hry a PlayStation pro zábavu",
  },
  {
    icon: Dumbbell,
    title: "Fitness",
    description: "Základní fitness vybavení pro cvičení",
  },
]

export function DetailedAmenities() {
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
      className="container mx-auto px-4 py-24 md:py-32"
      id="amenities"
    >
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
    </section>
  )
} 