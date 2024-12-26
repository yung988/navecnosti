'use client'

import React from "react"
import { motion } from "framer-motion"
import { UtensilsCrossed, Bath, Bed as BedIcon, Trees, Wifi, Car } from "lucide-react"

const facilities = {
  kitchen: [
    "Jídelní stůl",
    "Varná deska",
    "Kuchyňské potřeby",
    "Rychlovarná konvice",
    "Mikrovlnná trouba",
    "Lednička",
    "Kuchyň"
  ],
  bathroom: [
    "Toaletní papír",
    "Ručníky",
    "Toaleta",
    "Fén",
    "Sprcha"
  ],
  bedroom: [
    "Povlečení",
    "Skříň nebo šatna"
  ],
  outdoor: [
    "Balkon",
    "Výhled do zahrady"
  ],
  internet: "Bezdrátové internetové připojení je dostupné v celém hotelu zdarma.",
  parking: "Veřejné parkování je možné zdarma na přilehlém místě (rezervace není nutná)."
}

interface FacilityGroupProps {
  title: string
  items: string[]
  icon: React.ElementType
}

function FacilityGroup({ title, items, icon: Icon }: FacilityGroupProps) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-lg">
      <div className="flex items-center gap-3 mb-4">
        <Icon className="h-5 w-5 text-stone-600" />
        <h3 className="font-medium">{title}</h3>
      </div>
      <ul className="space-y-2">
        {items.map((item, index) => (
          <li key={index} className="flex items-start gap-2">
            <span className="text-stone-400 mt-1">•</span>
            <span className="text-stone-600">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export function FacilitiesSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="max-w-5xl mx-auto px-4 py-16"
    >
      <h2 className="text-2xl font-light mb-8 text-center">Vybavení</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <FacilityGroup
          title="Kuchyně"
          items={facilities.kitchen}
          icon={UtensilsCrossed}
        />
        <FacilityGroup
          title="Koupelna"
          items={facilities.bathroom}
          icon={Bath}
        />
        <FacilityGroup
          title="Ložnice"
          items={facilities.bedroom}
          icon={BedIcon}
        />
        <FacilityGroup
          title="Venkovní prostor"
          items={facilities.outdoor}
          icon={Trees}
        />
        <div className="bg-white rounded-2xl p-6 shadow-lg">
          <div className="flex items-center gap-3 mb-4">
            <Wifi className="h-5 w-5 text-stone-600" />
            <h3 className="font-medium">Internet</h3>
          </div>
          <p className="text-stone-600">{facilities.internet}</p>
        </div>
        <div className="bg-white rounded-2xl p-6 shadow-lg">
          <div className="flex items-center gap-3 mb-4">
            <Car className="h-5 w-5 text-stone-600" />
            <h3 className="font-medium">Parkování</h3>
          </div>
          <p className="text-stone-600">{facilities.parking}</p>
        </div>
      </div>
    </motion.div>
  )
} 