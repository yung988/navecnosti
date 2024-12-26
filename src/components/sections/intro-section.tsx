'use client'

import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export function IntroSection() {
  return (
    <section className="py-32 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-7xl md:text-8xl mb-16 leading-tight">
            Místo, kde čas <br />plyne pomaleji
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <p className="text-xl leading-relaxed text-gray-600">
                Objevte kouzlo venkovského života v našem útulném apartmánu Na Věčnosti. 
                Obklopeni přírodním parkem Rokytná s jeho malebnými zákoutími a křišťálově 
                čistou řekou najdete skutečný klid. Pouhých 9 kilometrů od nás leží 
                Jevišovická přehrada, která v létě láká k osvěžujícímu koupání a 
                procházkám kolem historického zámku.
              </p>
            </div>
            <div>
              <p className="text-xl leading-relaxed text-gray-600">
                Z našeho apartmánu můžete podnikat výlety do okolí - navštivte barokní 
                Jaroměřice nad Rokytnou, impozantní přehradu Dalešice, nebo se vydejte 
                prozkoumat židovskou čtvrť v Třebíči. Znojmo s jeho románskou rotundou 
                je také na dosah, stejně jako oblíbená Vranovská pláž, kam dojedete 
                za pouhých 30 minut.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 