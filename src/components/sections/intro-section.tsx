'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'
import { StarIcon } from '@heroicons/react/24/outline'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

interface IntroSectionProps {
  data: {
    accommodation_details: {
      name: string;
      description: string;
      rating: number;
      total_reviews: number;
    };
    photos: Array<{
      url: string;
      description: string;
    }>;
  };
}

export function IntroSection({ data }: IntroSectionProps) {
  const sectionRef = useRef<HTMLElement>(null)
  const textRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)
  const decorRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Zachováváme původní animace...
      const lines = textRef.current?.querySelectorAll('br')
      if (lines) {
        gsap.from(lines, {
          y: 100,
          opacity: 0,
          stagger: 0.1,
          duration: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top center+=100',
            end: 'center center',
            scrub: 1,
          },
        })
      }

      // Image parallax effect
      gsap.to(imageRef.current, {
        y: '-20%',
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      })

      // Decorative element animation
      gsap.to(decorRef.current, {
        scale: 1.5,
        opacity: 0.3,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top center',
          end: 'bottom center',
          scrub: true,
        },
      })
    })

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen overflow-hidden bg-[#FDF6F0]"
    >
      {/* Hero Image */}
      <div ref={imageRef} className="absolute inset-0">
        <Image
          src={data.photos[0].url}
          alt={data.photos[0].description}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 pt-32 pb-16">
        <div ref={textRef} className="max-w-2xl text-white">
          <h1 className="text-5xl font-bold mb-4">{data.accommodation_details.name}</h1>
          <div className="flex items-center gap-2 mb-4">
            <StarIcon className="w-5 h-5 text-yellow-400" />
            <span>{data.accommodation_details.rating.toFixed(1)}</span>
            <span>({data.accommodation_details.total_reviews} hodnocení)</span>
          </div>
          <p className="text-lg">{data.accommodation_details.description}</p>
        </div>
      </div>

      {/* Decorative element */}
      <div 
        ref={decorRef}
        className="absolute bottom-1/4 right-[20%] h-48 w-48 rounded-full bg-[#E9B7A4] opacity-20 blur-3xl transition-all will-change-transform" 
      />
    </section>
  )
} 