"use client"

import { useRef, useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Clock, Calendar, Ban, Dog } from "lucide-react"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

const policies = [
  {
    icon: Clock,
    title: "Check-in a Check-out",
    items: [
      "Check-in: 14:00 - 20:00",
      "Check-out: do 10:00",
      "Flexibilní časy po domluvě",
    ],
  },
  {
    icon: Calendar,
    title: "Rezervace",
    items: [
      "Minimální délka pobytu: 2 noci",
      "V hlavní sezóně minimálně 3 noci",
      "Záloha 50% při rezervaci",
    ],
  },
  {
    icon: Ban,
    title: "Pravidla",
    items: [
      "Nekuřácké prostory",
      "Zákaz večírků a akcí",
      "Noční klid od 22:00",
    ],
  },
  {
    icon: Dog,
    title: "Domácí mazlíčci",
    items: [
      "Malí psi jsou vítáni",
      "Poplatek 200 Kč/noc",
      "Nutné nahlásit předem",
    ],
  },
]

export function PoliciesSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const headingRef = useRef<HTMLHeadingElement>(null)
  const textRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animace nadpisu
      gsap.from(headingRef.current, {
        y: 100,
        opacity: 0,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top center+=100",
          end: "center center",
          scrub: 1,
        },
      })

      // Animace textu
      gsap.from(textRef.current, {
        y: 50,
        opacity: 0,
        scrollTrigger: {
          trigger: textRef.current,
          start: "top center+=100",
          end: "center center",
          scrub: 1,
        },
      })

      // Animace karet
      const cards = cardsRef.current?.children
      if (cards) {
        gsap.from(cards, {
          y: 100,
          opacity: 0,
          duration: 1,
          stagger: 0.2,
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top center+=100",
            end: "bottom center",
          },
        })
      }
    })

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[#FDF6F0] py-32"
      id="policies"
    >
      <div className="container mx-auto px-4">
        {/* Nadpis */}
        <h2
          ref={headingRef}
          className="mb-16 text-center text-[clamp(2rem,5vw,3.5rem)] font-light leading-tight tracking-tight"
        >
          PRAVIDLA
          <br />
          <span className="font-serif italic">a podmínky</span>
        </h2>

        {/* Text */}
        <div
          ref={textRef}
          className="mx-auto mb-24 max-w-3xl text-center text-xl font-light text-gray-700"
        >
          <p>
            Aby byl váš pobyt co nejpříjemnější, seznamte se prosím s našimi
            pravidly a podmínkami.
          </p>
        </div>

        {/* Karty */}
        <div
          ref={cardsRef}
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-4"
        >
          {policies.map((policy) => (
            <div
              key={policy.title}
              className="group rounded-2xl bg-white p-8 shadow-sm transition-shadow duration-300 hover:shadow-lg"
            >
              <policy.icon className="mb-6 h-8 w-8" />
              <h3 className="mb-4 font-serif text-2xl">{policy.title}</h3>
              <ul className="space-y-2 text-gray-700">
                {policy.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Dekorativní prvek */}
      <div className="absolute right-[20%] top-1/3 h-48 w-48 rounded-full bg-[#E9B7A4] opacity-20 blur-3xl" />
    </section>
  )
} 