import { Utensils, Coffee, Refrigerator, Wifi, Car, Bath, Bed, TreePine, Wind, Table, ChefHat, Mountain } from 'lucide-react'

interface AmenitiesSectionProps {
  data: {
    facilities: {
      amenities: string[];
      kitchen: string[];
      bathroom: string[];
      bedroom: string[];
      outdoor: string[];
    };
  };
  className?: string;
}

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

export function AmenitiesSection({ data, className }: AmenitiesSectionProps) {
  const amenities = [
    {
      icon: ChefHat,
      title: "Kuchyně",
      items: data.facilities.kitchen
    },
    {
      icon: Bath,
      title: "Koupelna",
      items: data.facilities.bathroom
    },
    {
      icon: Bed,
      title: "Ložnice",
      items: data.facilities.bedroom
    },
    {
      icon: TreePine,
      title: "Venkovní prostory",
      items: data.facilities.outdoor
    }
  ]

  const highlights = [
    { icon: Wifi, label: "Rychlé Wi-Fi připojení" },
    { icon: Car, label: "Bezplatné parkování" },
    { icon: Mountain, label: "Krásné výhledy" },
    { icon: Wind, label: "Čerstvý vzduch" }
  ]

  return (
    <section id="amenities" className={`py-32 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <h2 className="font-serif text-7xl md:text-8xl mb-6">Vybavení</h2>
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
      </div>
    </section>
  )
}