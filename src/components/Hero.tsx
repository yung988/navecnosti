'use client'

import Image from 'next/image'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Button } from "./ui/button"

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export function Hero() {
  const heroRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)
  const decorRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial animation timeline
      const tl = gsap.timeline({
        defaults: { ease: 'power3.out' }
      })

      // Get elements
      const heading = textRef.current?.querySelector('h1')
      const italicText = textRef.current?.querySelector('.font-serif')
      const paragraph = textRef.current?.querySelector('p')

      // Stagger text elements
      if (heading) {
        tl.from(heading, {
          y: 100,
          opacity: 0,
          duration: 1.2,
        })
      }

      if (italicText) {
        tl.from(italicText, {
          scale: 0.8,
          opacity: 0,
          duration: 0.8,
        }, '-=0.8')
      }

      if (paragraph) {
        tl.from(paragraph, {
          y: 30,
          opacity: 0,
          duration: 0.8,
        }, '-=0.4')
      }

      if (buttonRef.current) {
        tl.from(buttonRef.current, {
          scale: 0.8,
          opacity: 0,
          duration: 0.6,
        }, '-=0.4')
      }

      // Image reveal animation
      if (imageRef.current) {
        tl.from(imageRef.current, {
          clipPath: 'inset(100% 0 0 0)',
          duration: 1.5,
        }, '-=1.2')

        // Scroll-based parallax for the image
        gsap.to(imageRef.current, {
          y: '20%',
          ease: 'none',
          scrollTrigger: {
            trigger: heroRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: true,
          },
        })
      }

      // Decorative element animation
      if (decorRef.current) {
        tl.from(decorRef.current, {
          scale: 0,
          opacity: 0,
          duration: 1,
        }, '-=1')
      }

      // Fade out content on scroll
      if (textRef.current && decorRef.current) {
        gsap.to([textRef.current, decorRef.current], {
          opacity: 0,
          y: -50,
          scrollTrigger: {
            trigger: heroRef.current,
            start: 'top top',
            end: '25% top',
            scrub: true,
          },
        })
      }
    })

    return () => ctx.revert()
  }, [])

  return (
    <div ref={heroRef} className="relative min-h-screen w-full bg-[#FDF6F0] overflow-hidden">
      {/* Hlavní obrázek */}
      <div ref={imageRef} className="absolute right-0 top-0 h-screen w-1/2 will-change-transform">
        <Image
          src="/images/optimized/na-vecnosti-main.webp"
          alt="Na Věčnosti - Pohled na dům"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Textový obsah */}
      <div className="container relative z-10 mx-auto px-4">
        <div
          ref={textRef}
          className="flex min-h-screen flex-col justify-center py-24 will-change-transform"
        >
          <div className="max-w-4xl">
            <h1 className="mb-8 text-[clamp(2.5rem,8vw,5rem)] font-light leading-[1.1] tracking-tight">
              MÍSTO, KDE ČAS
              <br />
              <span className="font-serif italic">plyne pomaleji</span>
            </h1>
            
            <p className="mb-12 max-w-2xl text-xl font-light text-gray-700">
              Objevte kouzlo venkovského života v našem útulném apartmánu Na Věčnosti.
              Obklopeni přírodním parkem Rokytná s jeho malebnými zákoutími a křišťálově
              čistou řekou najdete skutečný klid.
            </p>

            <Button
              ref={buttonRef}
              variant="outline"
              size="lg"
              className="rounded-full border-2 border-black px-8 text-lg hover:bg-black hover:text-white transition-colors duration-300"
            >
              Rezervovat pobyt
            </Button>
          </div>
        </div>
      </div>

      {/* Dekorativní prvek */}
      <div 
        ref={decorRef}
        className="absolute left-[20%] top-1/3 h-48 w-48 rounded-full bg-[#E9B7A4] opacity-20 blur-3xl will-change-transform" 
      />
    </div>
  )
}
