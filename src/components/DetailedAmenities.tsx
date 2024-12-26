import { Utensils, Coffee, Refrigerator, Wifi, Car, Bath, Bed, TreePine, ShowerHeadIcon as Shower, Wind, Table, ChefHat, Sandwich, Waves, DoorOpen, Mountain } from 'lucide-react'

interface AmenityProps {
  icon: React.ElementType
  title: string
  items: string[]
}

function AmenitySection({ icon: Icon, title, items }: AmenityProps) {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-center gap-4 mb-6">
        <div className="p-3 bg-gray-50 rounded-xl">
          <Icon className="w-6 h-6 text-gray-700" />
        </div>
        <h3 className="text-xl font-medium">{title}</h3>
      </div>
      <ul className="space-y-3">
        {items.map((item, index) => (
          <li key={index} className="flex items-center gap-3 text-gray-600">
            <div className="w-1.5 h-1.5 bg-gray-300 rounded-full" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}

export function DetailedAmenities() {
  const amenities = [
    {
      icon: ChefHat,
      title: "Kuchyně",
      items: [
        "Prostorná kuchyňská linka",
        "Moderní varná deska",
        "Kompletní kuchyňské vybavení",
        "Rychlovarná konvice",
        "Mikrovlnná trouba",
        "Velká lednička",
        "Jídelní stůl pro společné chvíle"
      ]
    },
    {
      icon: Bath,
      title: "Koupelna",
      items: [
        "Prostorná sprcha",
        "Kvalitní ručníky",
        "Fén na vlasy",
        "Základní hygienické potřeby",
        "Čisté prostředí"
      ]
    },
    {
      icon: Bed,
      title: "Ložnice",
      items: [
        "Pohodlné postele",
        "Kvalitní povlečení",
        "Prostorná šatní skříň",
        "Klidné prostředí pro odpočinek"
      ]
    },
    {
      icon: TreePine,
      title: "Venkovní prostory",
      items: [
        "Soukromý balkon",
        "Nádherný výhled do zahrady",
        "Posezení v přírodě",
        "Klidné okolí"
      ]
    }
  ]

  const highlights = [
    { icon: Wifi, label: "Rychlé Wi-Fi připojení" },
    { icon: Car, label: "Bezplatné parkování" },
    { icon: Mountain, label: "Krásné výhledy" },
    { icon: Wind, label: "Čerstvý vzduch" }
  ]

  return (
    <section id="amenities" className="py-32 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl mb-6">Vše pro váš komfort</h2>
          <p className="text-gray-600 text-lg">
            Apartmán je vybaven vším potřebným pro váš pohodlný pobyt. Užijte si plně vybavenou kuchyň, 
            pohodlné ložnice a krásný výhled do okolní přírody.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6 mb-16">
          {highlights.map((item, index) => {
            const Icon = item.icon
            return (
              <div 
                key={index}
                className="flex items-center gap-3 bg-white px-6 py-3 rounded-full shadow-sm"
              >
                <Icon className="w-5 h-5 text-gray-700" />
                <span className="text-gray-600">{item.label}</span>
              </div>
            )
          })}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {amenities.map((amenity, index) => (
            <AmenitySection
              key={index}
              icon={amenity.icon}
              title={amenity.title}
              items={amenity.items}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

