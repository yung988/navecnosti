'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export function IntroSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const text1Ref = useRef<HTMLDivElement>(null)
  const text2Ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current || !titleRef.current || !text1Ref.current || !text2Ref.current) return

    gsap.set([titleRef.current, text1Ref.current, text2Ref.current], {
      opacity: 0,
      y: 50
    })

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top center+=100",
        end: "center center",
        scrub: 1,
        markers: process.env.NODE_ENV === 'development',
      }
    })

    tl.to(titleRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.5,
    })
    .to([text1Ref.current, text2Ref.current], {
      opacity: 1,
      y: 0,
      duration: 0.5,
      stagger: 0.2
    }, "-=0.3")

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  return (
    <section ref={sectionRef} className="py-32 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 ref={titleRef} className="font-serif text-7xl md:text-8xl mb-16 leading-tight">
            Místo, kde čas <br />plyne pomaleji
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div ref={text1Ref}>
              <p className="text-xl leading-relaxed text-gray-600">
                Objevte kouzlo venkovského života v našem útulném apartmánu Na Věčnosti. 
                Obklopeni přírodním parkem Rokytná s jeho malebnými zákoutími a křišťálově 
                čistou řekou najdete skutečný klid. Pouhých 9 kilometrů od nás leží 
                Jevišovická přehrada, která v létě láká k osvěžujícímu koupání a 
                procházkám kolem historického zámku.
              </p>
            </div>
            <div ref={text2Ref}>
              <p className="text-xl leading-relaxed text-gray-600">
                Z našeho apartmánu můžete podnikat výlety do okolí - navštivte barokní 
                Jaroměřice nad Rokytnou, impozantní přehradu Dalešice, nebo se vydejte 
                prozkoumat židovskou čtvrť v Třebíči. Znojmo s jeho románskou rotundou 
                je také na dosah, stejně jako oblíbená Vranovská pláž, kam dojedete za 
                pouhých 30 minut.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

