'use client'

import React from "react"
import { motion } from "framer-motion"
import { User2, Languages, Sparkles } from "lucide-react"

export function DescriptionSection() {
  return (
    <section id="info" className="py-24">
      <div className="max-w-6xl mx-auto px-8">
        <h2 className="text-4xl font-light mb-12 text-center">O ubytování a hostiteli</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <div className="flex items-center gap-3 mb-4">
              <Sparkles className="h-5 w-5 text-stone-600" />
              <h3 className="font-medium">Popis ubytování</h3>
            </div>
            <div className="space-y-4 text-stone-600">
              <p>
                Na Věčnosti se může pochlubit výhledem do zahrady. Bazilika svatého Prokopa se nachází přibližně 26 km odtud. 
                V tomto apartmánu budete mít k dispozici bezplatné Wi-Fi a balkon.
              </p>
              <p>
                Tento apartmán má 2 ložnice a kuchyň s lednicí, mikrovlnnou troubou a varnou konvicí. 
                V tomto apartmánu jsou k dispozici ručníky a ložní prádlo.
              </p>
              <p>
                Židovská čtvrť se nachází 25 km od ubytování Na Věčnosti a Zámek Vranov nad Dyjí je 32 km od ubytování. 
                Letiště Brno Tuřany leží 70 km daleko.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <div className="flex items-center gap-3 mb-4">
              <User2 className="h-5 w-5 text-stone-600" />
              <h3 className="font-medium">O hostiteli Petra</h3>
            </div>
            <div className="space-y-4">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Languages className="h-4 w-4 text-stone-500" />
                  <p className="text-sm text-stone-500">
                    Jazyky: česky, německy, rusky, slovensky
                  </p>
                </div>
              </div>
              <div className="text-stone-600">
                <p className="mb-4">
                  Baví mě poznávat nové tváře, seznamovat se s lidmi. Miluji přírodu, procházky po okolí se svojí psicí. 
                  Je to francouzský buldoček, má ráda děti. Vyrábím přírodní mýdla a svíčky a nabízím možnost workshopů. 
                  Po dohodě i pro ubytované, jak dospělé tak děti.
                </p>
                <p>
                  V místě je pivovar Gajdoš. V okolí vesnice se nachází přírodní park Rokytná se svými krásnými zákoutími a řekou Rokytnou. 
                  Jevišovická přehrada je 9 km daleko, možnost letního koupání a návštěvy zámku.
                </p>
                <p className="mt-4">
                  V dosahu se nachází Jaroměřice n.R., přehrada Dalešice, Třebíč s židovským městem a Znojmo se svojí rotundou a jinými památkami.
                  Během půl hodinky můžete být i na Vranovské pláži.
                  Prostě pokud chcete široký záběr, a přitom se vracet do klidu, je to místo přesně pro vás.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 