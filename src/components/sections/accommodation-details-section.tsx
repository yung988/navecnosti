'use client'

import React from "react"
import { Users, Maximize, Building2 } from "lucide-react"

export function AccommodationDetailsSection() {
  return (
    <div className="max-w-6xl mx-auto px-4">
      <div className="grid md:grid-cols-2 gap-24 py-24 border-t border-gray-200">
        <div>
          <h2 className="text-2xl mb-8">Vybavení ubytování</h2>
          <p className="text-gray-600 leading-relaxed mb-12">
            Apartmán je plně vybaven veškerým komfortem, který byste mohli potřebovat. 
            Kompletní vybavení zahrnuje podlahové vytápění pro vaše pohodlí a dvojitá 
            okna pro dokonalé tepelné i zvukové odizolování. S vlastním parkovacím 
            místem můžete pohodlně prozkoumat okolí Biskupic nebo se vydat na výlet 
            do nedalekých míst.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Apartmán se nachází v přízemí a nabízí dostatek parkovacích míst. 
            Upozorňujeme, že v objektu není povoleno ubytování se psy.
          </p>
        </div>

        <div className="space-y-16">
          <div>
            <h3 className="text-xl mb-4">Ložnice</h3>
            <div className="space-y-2">
              <p className="text-gray-600">1 velká manželská postel</p>
              <p className="text-gray-600">2 jednolůžkové postele</p>
            </div>
          </div>

          <div>
            <h3 className="text-xl mb-4">Koupelna</h3>
            <div className="space-y-2">
              <p className="text-gray-600">Koupelna se sprchovým koutem</p>
            </div>
          </div>

          <div>
            <h3 className="text-xl mb-4">Ostatní</h3>
            <div className="space-y-2">
              <p className="text-gray-600">Otevřený obývací prostor s kuchyní</p>
              <p className="text-gray-600">Velká venkovní terasa se zahradním nábytkem</p>
              <p className="text-gray-600">Ručníky a ložní prádlo v ceně</p>
              <p className="text-gray-600">Podlahové vytápění</p>
              <p className="text-gray-600">Zákaz vstupu se psy</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 