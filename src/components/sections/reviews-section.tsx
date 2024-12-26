'use client'

import { useRef, useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Star } from "lucide-react"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

const reviews = [
  {
    author: "Alumont",
    nationality: "Česká republika",
    text: "Příjemná hostitelka, absolutní klid, příjemné prostředí, vybavená kuchyň. Doporučuji",
  },
  {
    author: "Dušana",
    nationality: "Česká republika",
    text: "Velmi milá majitelka, krásná příroda a málo turistů",
  },
  {
    author: "Pečenková",
    nationality: "Česká republika",
    text: "Prostorné pokoje, kuchyňka dostatečná. Paní majitelka velmi milá, ochotná. Možnost využití zahrady. Místo ubytování klidné.",
  },
  {
    author: "Kristýna",
    nationality: "Česká republika",
    text: "Naprostý klid. A hned na místě jsme pochopili, proč na věčnosti.",
  },
]

const ratings = [
  { name: "Personál", score: 9.6 },
  { name: "Zařízení", score: 9.0 },
  { name: "Čistota", score: 9.4 },
  { name: "Pohodlí", score: 9.4 },
  { name: "Poměr ceny a kvality", score: 9.4 },
  { name: "Lokalita", score: 9.4 },
  { name: "WiFi zdarma", score: 10 },
]

export function ReviewsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const headingRef = useRef<HTMLHeadingElement>(null)
  const textRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)
  const ratingsRef = useRef<HTMLDivElement>(null)

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

      // Animace hodnocení
      const ratingBars = ratingsRef.current?.querySelectorAll('.rating-bar')
      if (ratingBars) {
        gsap.from(ratingBars, {
          width: 0,
          duration: 1.5,
          stagger: 0.1,
          scrollTrigger: {
            trigger: ratingsRef.current,
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
      id="reviews"
    >
      <div className="container mx-auto px-4">
        {/* Nadpis */}
        <h2
          ref={headingRef}
          className="mb-16 text-center text-[clamp(2rem,5vw,3.5rem)] font-light leading-tight tracking-tight"
        >
          HODNOCENÍ
          <br />
          <span className="font-serif italic">našich hostů</span>
        </h2>

        {/* Text */}
        <div
          ref={textRef}
          className="mx-auto mb-16 max-w-3xl text-center text-xl font-light text-gray-700"
        >
          <p>
            Celkové hodnocení <span className="font-medium">9.1</span> z{" "}
            <span className="font-medium">13</span> recenzí
          </p>
        </div>

        <div className="grid gap-16 md:grid-cols-2">
          {/* Hodnocení */}
          <div ref={ratingsRef} className="space-y-6">
            <h3 className="font-serif text-2xl">Kategorie hodnocení</h3>
            <div className="space-y-4">
              {ratings.map((rating) => (
                <div key={rating.name} className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">{rating.name}</span>
                    <span className="font-medium">{rating.score}</span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-gray-100">
                    <div
                      className="rating-bar h-full rounded-full bg-black transition-all duration-1000"
                      style={{ width: `${(rating.score / 10) * 100}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recenze */}
          <div ref={cardsRef} className="space-y-6">
            <h3 className="font-serif text-2xl">Co říkají naši hosté</h3>
            {reviews.map((review) => (
              <div
                key={review.author}
                className="rounded-2xl bg-white p-6 shadow-sm transition-shadow duration-300 hover:shadow-lg"
              >
                <div className="mb-3 flex items-center gap-2">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span className="font-medium">{review.author}</span>
                  <span className="text-sm text-gray-500">• {review.nationality}</span>
                </div>
                <p className="text-gray-700">{review.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Dekorativní prvek */}
      <div className="absolute right-[20%] top-1/3 h-48 w-48 rounded-full bg-[#E9B7A4] opacity-20 blur-3xl" />
    </section>
  )
} 