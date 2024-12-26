import { Wifi, Car, CookingPotIcon as Kitchen, Bath, Users, Home } from 'lucide-react'

export function Features() {
  const features = [
    { icon: Home, title: "59 m²", description: "Prostorný apartmán" },
    { icon: Users, title: "Pro 4 osoby", description: "Ideální pro rodiny" },
    { icon: Kitchen, title: "Plně vybavená kuchyň", description: "Vše pro vaše pohodlí" },
    { icon: Wifi, title: "Wi-Fi zdarma", description: "Vysokorychlostní připojení" },
    { icon: Car, title: "Parkování zdarma", description: "Přímo u apartmánu" },
    { icon: Bath, title: "Moderní koupelna", description: "S veškerým vybavením" },
  ]

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div key={index} className="text-center">
                <Icon className="w-12 h-12 mx-auto mb-4 text-gray-700" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

