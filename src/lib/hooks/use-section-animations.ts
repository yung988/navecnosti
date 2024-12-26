'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

type AnimationType = 'fadeUp' | 'fadeIn' | 'slideIn' | 'scaleUp' | 'parallax'

interface UseSectionAnimationsOptions {
  type?: AnimationType
  delay?: number
  duration?: number
  start?: string
  end?: string
  scrub?: boolean | number
}

export function useSectionAnimations({
  type = 'fadeUp',
  delay = 0,
  duration = 1,
  start = 'top 80%',
  end = 'bottom 20%',
  scrub = false,
}: UseSectionAnimationsOptions = {}) {
  const sectionRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    const content = contentRef.current
    const image = imageRef.current
    if (!section || !content) return

    const ctx = gsap.context(() => {
      const baseConfig = {
        scrollTrigger: {
          trigger: section,
          start,
          end,
          scrub,
          toggleActions: scrub ? undefined : 'play none none reverse',
        },
      }

      switch (type) {
        case 'fadeUp':
          gsap.fromTo(
            content,
            { opacity: 0, y: 50 },
            {
              opacity: 1,
              y: 0,
              duration,
              delay,
              ease: 'power2.out',
              ...baseConfig,
            }
          )
          break

        case 'fadeIn':
          gsap.fromTo(
            content,
            { opacity: 0 },
            {
              opacity: 1,
              duration,
              delay,
              ease: 'power2.inOut',
              ...baseConfig,
            }
          )
          break

        case 'slideIn':
          gsap.fromTo(
            content,
            { x: -100, opacity: 0 },
            {
              x: 0,
              opacity: 1,
              duration,
              delay,
              ease: 'power2.out',
              ...baseConfig,
            }
          )
          break

        case 'scaleUp':
          gsap.fromTo(
            content,
            { scale: 0.8, opacity: 0 },
            {
              scale: 1,
              opacity: 1,
              duration,
              delay,
              ease: 'back.out(1.7)',
              ...baseConfig,
            }
          )
          break

        case 'parallax':
          if (image) {
            gsap.to(image, {
              y: '-20%',
              ease: 'none',
              scrollTrigger: {
                trigger: section,
                start: 'top bottom',
                end: 'bottom top',
                scrub: 1,
              },
            })
          }
          break
      }
    })

    return () => ctx.revert()
  }, [type, delay, duration, start, end, scrub])

  return { sectionRef, contentRef, imageRef }
} 