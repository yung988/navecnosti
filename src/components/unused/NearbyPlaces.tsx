import { MapPin } from 'lucide-react'

export function NearbyPlaces() {
  const places = [
    { name: "Restaurace U Sucheho Certa", type: "Restaurace", distance: "7 km" },
    { name: "Pizzerie U Alči", type: "Restaurace", distance: "7 km" },
    { name: "Restaurace Radnice", type: "Restaurace", distance: "14 km" },
    { name: "Letiště Brno Tuřany", type: "Nejbližší letiště", distance: "70 km" }
  ]

  return (
    <section className="bg-white p-6 rounded-lg shadow-md mb-8">
      <h2 className="text-2xl font-semibold mb-4">V okolí</h2>
      <ul className="space-y-2">
        {places.map((place, index) => (
          <li key={index} className="flex items-start">
            <MapPin className="w-5 h-5 mr-2 mt-1 flex-shrink-0" />
            <div>
              <p className="font-semibold">{place.name}</p>
              <p className="text-sm text-gray-600">{place.type} • {place.distance}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}

