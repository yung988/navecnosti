import { motion } from "framer-motion"
import { Calendar } from "@/components/ui/calendar"
import { useState } from "react"
import { DateRange } from "react-day-picker"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"

export function BookingSection() {
  const [dateRange, setDateRange] = useState<DateRange | undefined>()

  const disabledDays = [{ before: new Date() }]

  return (
    <div id="booking" className="max-w-xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-white rounded-3xl shadow-lg p-8"
      >
        <h2 className="text-2xl font-light mb-6 text-center">Rezervace</h2>
        <div className="space-y-6">
          <Calendar
            mode="range"
            selected={dateRange}
            onSelect={setDateRange}
            disabled={disabledDays}
            numberOfMonths={2}
            className="rounded-lg mx-auto border"
          />

          {dateRange?.from && dateRange?.to && (
            <div className="space-y-4">
              <div className="text-sm text-gray-500 text-center">
                <p>Vybraný termín: {dateRange.from.toLocaleDateString('cs-CZ')} - {dateRange.to.toLocaleDateString('cs-CZ')}</p>
              </div>
              <a 
                href="tel:+420605033166"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "w-full text-center"
                )}
              >
                Zavolat a rezervovat pobyt
              </a>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  )
}