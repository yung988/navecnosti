'use client'

import React from "react"
import { motion } from "framer-motion"
import { Clock, Ban, Info } from "lucide-react"

const rules = [
  "V tomto ubytování se nemohou konat rozlučky se svobodou a jiné podobné oslavy.",
  "Kouření je zakázáno.",
  "Večírky/akce nejsou povoleny.",
  "Domácí zvířata nejsou povolena."
]

export function RulesSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="max-w-5xl mx-auto px-4 py-16"
    >
      <h2 className="text-2xl font-light mb-8 text-center">Důležité informace</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white rounded-2xl p-6 shadow-lg">
          <div className="flex items-center gap-3 mb-4">
            <Clock className="h-5 w-5 text-stone-600" />
            <h3 className="font-medium">Check-in/Check-out</h3>
          </div>
          <div className="space-y-3">
            <div>
              <p className="text-sm text-stone-500">Check-in</p>
              <p className="text-stone-600">Od 16:00 do 20:00</p>
            </div>
            <div>
              <p className="text-sm text-stone-500">Check-out</p>
              <p className="text-stone-600">Od 7:00 do 10:00</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-lg">
          <div className="flex items-center gap-3 mb-4">
            <Ban className="h-5 w-5 text-stone-600" />
            <h3 className="font-medium">Pravidla ubytování</h3>
          </div>
          <ul className="space-y-2">
            {rules.map((rule, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="text-stone-400 mt-1">•</span>
                <span className="text-stone-600">{rule}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mt-8 flex items-center justify-center gap-2 text-stone-500"
      >
        <Info className="h-4 w-4" />
        <p className="text-sm">
          Podmínky zrušení rezervace a platby předem mohou být pro jednotlivé typy ubytování různé.
        </p>
      </motion.div>
    </motion.div>
  )
} 