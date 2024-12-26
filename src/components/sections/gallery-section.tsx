'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

const images = [
  {
    url: "/images/optimized/loznice-cela-s.webp",
    alt: "Hlavní ložnice",
  },
  {
    url: "/images/optimized/loznice-postel-v.webp",
    alt: "Postel v hlavní ložnici",
  },
  {
    url: "/images/optimized/druha-loznice-postel-v.webp",
    alt: "Druhá ložnice",
  },
  {
    url: "/images/optimized/druha-loznice-kresilka.webp",
    alt: "Posezení v druhé ložnici",
  },
  {
    url: "/images/optimized/koupelna.webp",
    alt: "Koupelna",
  },
  {
    url: "/images/optimized/sprcha.webp",
    alt: "Sprchový kout",
  },
  {
    url: "/images/optimized/koupelna-ommyvadlo-v.webp",
    alt: "Umyvadlo v koupelně",
  },
  {
    url: "/images/optimized/kuchyn-s.webp",
    alt: "Kuchyň",
  },
]

export function GallerySection() {
  const sectionRef = useRef<HTMLElement>(null)
  const headingRef = useRef<HTMLHeadingElement>(null)
  const galleryRef = useRef<HTMLDivElement>(null)
  const decorRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading animation with split text effect
      const heading = headingRef.current
      if (heading) {
        const words = heading.textContent?.split(/\s+/) || []
        heading.innerHTML = words
          .map(word => `<span class="inline-block">${word}</span>`)
          .join(' ')
        
        gsap.from(heading.children, {
          y: 50,
          opacity: 0,
          duration: 1,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: heading,
            start: 'top 80%',
            end: 'bottom 20%',
          },
        })
      }

      // Gallery items stagger animation
      const galleryItems = galleryRef.current?.children
      if (galleryItems) {
        gsap.from(galleryItems, {
          y: 100,
          opacity: 0,
          duration: 1,
          stagger: {
            amount: 1,
            from: 'random',
          },
          ease: 'power3.out',
          scrollTrigger: {
            trigger: galleryRef.current,
            start: 'top 70%',
            end: 'bottom 20%',
          },
        })
      }

      // Decorative element animation
      if (decorRef.current) {
        gsap.to(decorRef.current, {
          scale: 1.5,
          opacity: 0.3,
          duration: 2,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top center',
            end: 'bottom center',
            scrub: true,
          },
        })
      }

      // Hover animations for gallery items
      const items = galleryRef.current?.children
      if (items) {
        Array.from(items).forEach((item) => {
          const image = item.querySelector('img')
          const overlay = item.querySelector('.overlay')
          const caption = item.querySelector('.caption')

          item.addEventListener('mouseenter', () => {
            gsap.to(image, {
              scale: 1.1,
              duration: 0.7,
              ease: 'power2.out',
            })
            gsap.to(overlay, {
              opacity: 0,
              duration: 0.3,
            })
            gsap.to(caption, {
              y: 0,
              opacity: 1,
              duration: 0.5,
              ease: 'power2.out',
            })
          })

          item.addEventListener('mouseleave', () => {
            gsap.to(image, {
              scale: 1,
              duration: 0.7,
              ease: 'power2.out',
            })
            gsap.to(overlay, {
              opacity: 0.2,
              duration: 0.3,
            })
            gsap.to(caption, {
              y: 20,
              opacity: 0,
              duration: 0.5,
              ease: 'power2.in',
            })
          })
        })
      }
    })

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-white py-32"
      id="gallery"
    >
      {/* Nadpis */}
      <div className="container mx-auto px-4">
        <h2
          ref={headingRef}
          className="mb-24 text-center text-[clamp(2rem,5vw,3.5rem)] font-light leading-tight tracking-tight"
        >
          PROSTOR PRO
          <br />
          <span className="font-serif italic">život</span>
        </h2>

        {/* Galerie */}
        <div
          ref={galleryRef}
          className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {images.map((image, index) => (
            <div
              key={image.url}
              className="group relative aspect-[4/5] overflow-hidden rounded-2xl will-change-transform"
            >
              <Image
                src={image.url}
                alt={image.alt}
                fill
                className="object-cover will-change-transform"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="overlay absolute inset-0 bg-black/20 transition-opacity duration-300" />
              <div className="caption absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 translate-y-4 opacity-0">
                <p className="font-serif text-xl text-white">{image.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dekorativní prvek */}
      <div 
        ref={decorRef}
        className="absolute right-[20%] top-1/3 h-48 w-48 rounded-full bg-[#E9B7A4] opacity-20 blur-3xl will-change-transform" 
      />
    </section>
  )
}