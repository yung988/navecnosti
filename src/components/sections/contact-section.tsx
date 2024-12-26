"use client"

import { useRef, useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Phone, Mail, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const headingRef = useRef<HTMLHeadingElement>(null)
  const formRef = useRef<HTMLDivElement>(null)
  const mapRef = useRef<HTMLDivElement>(null)

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

      // Animace formuláře
      gsap.from(formRef.current, {
        x: -100,
        opacity: 0,
        scrollTrigger: {
          trigger: formRef.current,
          start: "top center+=100",
          end: "center center",
          scrub: 1,
        },
      })

      // Animace mapy
      gsap.from(mapRef.current, {
        x: 100,
        opacity: 0,
        scrollTrigger: {
          trigger: mapRef.current,
          start: "top center+=100",
          end: "center center",
          scrub: 1,
        },
      })
    })

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-white py-32"
      id="contact"
    >
      <div className="container mx-auto px-4">
        {/* Nadpis */}
        <h2
          ref={headingRef}
          className="mb-24 text-center text-[clamp(2rem,5vw,3.5rem)] font-light leading-tight tracking-tight"
        >
          POJĎME SI
          <br />
          <span className="font-serif italic">popovídat</span>
        </h2>

        <div className="grid gap-16 md:grid-cols-2">
          {/* Formulář */}
          <div ref={formRef} className="space-y-12">
            <div className="space-y-6">
              <h3 className="font-serif text-2xl">Kontaktujte nás</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5" />
                  <a
                    href="tel:+420777888999"
                    className="text-lg hover:underline"
                  >
                    +420 777 888 999
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5" />
                  <a
                    href="mailto:info@navecnosti.cz"
                    className="text-lg hover:underline"
                  >
                    info@navecnosti.cz
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5" />
                  <span className="text-lg">
                    Biskupice-Pulkov 72, 675 57
                  </span>
                </div>
              </div>
            </div>

            <form className="space-y-6">
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Vaše jméno"
                  className="w-full rounded-xl border border-gray-200 p-4"
                />
                <input
                  type="email"
                  placeholder="Váš email"
                  className="w-full rounded-xl border border-gray-200 p-4"
                />
                <textarea
                  placeholder="Vaše zpráva"
                  rows={4}
                  className="w-full rounded-xl border border-gray-200 p-4"
                />
              </div>
              <Button
                type="submit"
                className="w-full rounded-xl bg-black py-6 text-lg text-white hover:bg-black/90"
              >
                Odeslat zprávu
              </Button>
            </form>
          </div>

          {/* Mapa */}
          <div ref={mapRef} className="relative aspect-square overflow-hidden rounded-2xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2608.8862753751097!2d15.9144663!3d49.0391667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470d1b9d58d04c1d%3A0x7c2b551f7e52b9b0!2sBiskupice-Pulkov%2072%2C%20675%2057%20Biskupice-Pulkov!5e0!3m2!1scs!2scz!4v1624981234567!5m2!1scs!2scz"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>

      {/* Dekorativní prvek */}
      <div className="absolute left-[20%] top-1/3 h-48 w-48 rounded-full bg-[#E9B7A4] opacity-20 blur-3xl" />
    </section>
  )
} 