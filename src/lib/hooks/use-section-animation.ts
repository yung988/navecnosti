'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

interface UseSectionAnimationOptions {
  delay?: number
  y?: number
  duration?: number
}

export function useSectionAnimation({
  delay = 0,
  y = 50,
  duration = 1,
}: UseSectionAnimationOptions = {}) {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const animation = gsap.fromTo(
      section,
      {
        opacity: 0,
        y,
      },
      {
        opacity: 1,
        y: 0,
        duration,
        delay,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse',
        },
      }
    )

    return () => {
      animation.kill()
    }
  }, [delay, y, duration])

  return sectionRef
} 