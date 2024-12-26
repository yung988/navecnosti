import { MapPin } from 'lucide-react'

export function NearbyAttractions() {
  const places = [
    {
      name: "Restaurace U Sucheho Certa",
      type: "Restaurace",
      distance: "7 km"
    },
    {
      name: "Pizzerie U Alči",
      type: "Restaurace",
      distance: "7 km"
    },
    {
      name: "Restaurace Radnice",
      type: "Restaurace",
      distance: "14 km"
    },
    {
      name: "Lyžařský vlek MLV 75",
      type: "Lyžařské vleky",
      distance: "38 km"
    },
    {
      name: "Letiště Brno Tuřany",
      type: "Nejbližší letiště",
      distance: "70 km"
    }
  ]

  return (
    <section id="nearby" className="py-32 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="font-serif text-7xl md:text-8xl mb-16 text-center">V okolí</h2>
        
        <div className="max-w-4xl mx-auto grid gap-8">
          {places.map((place, index) => (
            <div 
              key={index}
              className="flex items-start space-x-6 p-6 bg-white rounded-lg hover:shadow-lg transition-shadow"
            >
              <MapPin className="w-8 h-8 text-gray-400 flex-shrink-0" />
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-1">{place.name}</h3>
                <p className="text-gray-600">{place.type}</p>
              </div>
              <div className="text-right">
                <span className="text-lg font-semibold">{place.distance}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

