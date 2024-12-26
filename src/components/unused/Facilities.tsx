import { Check } from 'lucide-react'

export function Facilities() {
  const amenities = [
    "Nekuřácké pokoje",
    "Wi-Fi zdarma",
    "Parkování zdarma",
    "Balkon",
    "Kuchyň",
    "Sprcha"
  ]

  return (
    <section className="bg-white p-6 rounded-lg shadow-md mb-8">
      <h2 className="text-2xl font-semibold mb-4">Vybavení</h2>
      <ul className="grid grid-cols-2 gap-2">
        {amenities.map((amenity, index) => (
          <li key={index} className="flex items-center">
            <Check className="w-5 h-5 text-green-500 mr-2" />
            <span>{amenity}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}

