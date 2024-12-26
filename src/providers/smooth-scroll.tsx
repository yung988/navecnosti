'use client'

import { useEffect } from 'react'
import Lenis from 'lenis'

interface SmoothScrollProviderProps {
  children: React.ReactNode
}

// Globální instance pro přístup z jiných komponent
let lenisInstance: Lenis | null = null

// Export helper funkce pro scroll
export function scrollTo(target: string | HTMLElement | number) {
  lenisInstance?.scrollTo(target)
}

export function SmoothScrollProvider({
  children,
}: SmoothScrollProviderProps) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 0.2,
      easing: (t: number) => t,
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      touchMultiplier: 2,
      wheelMultiplier: 2,
    })

    lenisInstance = lenis

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
      lenisInstance = null
    }
  }, [])

  return <>{children}</>
} 