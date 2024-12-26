import { 
  Utensils, 
  Mountain, 
  Train, 
  Plane, 
  Navigation 
} from 'lucide-react'

interface NearbyAttractionsProps {
  data: {
    nearby: {
      places: Array<{
        name: string;
        type: string;
        distance: string;
      }>;
    };
  };
}

function getIconByType(type: string) {
  switch (type) {
    case "Restaurace":
      return Utensils;
    case "Lyžařské vleky":
      return Mountain;
    case "Veřejná doprava":
      return Train;
    case "Nejbližší letiště":
      return Plane;
    default:
      return Navigation;
  }
}

function getGoogleMapsUrl(placeName: string) {
  const baseUrl = "https://www.google.com/maps/search/?api=1";
  const query = encodeURIComponent(`${placeName}, Biskupice, Česká republika`);
  return `${baseUrl}&query=${query}`;
}

export function NearbyAttractions({ data }: NearbyAttractionsProps) {
  const places = data.nearby.places

  return (
    <section id="nearby" className="py-32 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="font-serif text-7xl md:text-8xl mb-16 text-center">V okolí</h2>
        
        <div className="max-w-6xl mx-auto grid gap-8">
          {places.map((place, index) => {
            const Icon = getIconByType(place.type)
            return (
              <a 
                key={index}
                href={getGoogleMapsUrl(place.name)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start space-x-6 p-6 bg-white rounded-lg hover:shadow-lg transition-all hover:-translate-y-1"
              >
                <Icon className="w-8 h-8 text-gray-400 flex-shrink-0" />
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-1">{place.name}</h3>
                  <p className="text-gray-600">{place.type}</p>
                </div>
                <div className="text-right flex items-center gap-2">
                  <span className="text-lg font-semibold">{place.distance}</span>
                  <Navigation className="w-4 h-4 text-gray-400" />
                </div>
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}

