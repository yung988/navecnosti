"use client"

import { useRef, useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { 
  Utensils as RestaurantIcon,
  Ski as SkiIcon,
  Train as TrainIcon,
  Plane as PlaneIcon,
  MapPin as LocationIcon
} from "lucide-react"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

interface NearbySectionProps {
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
      return RestaurantIcon;
    case "Lyžařské vleky":
      return SkiIcon;
    case "Veřejná doprava":
      return TrainIcon;
    case "Nejbližší letiště":
      return PlaneIcon;
    default:
      return LocationIcon;
  }
}

export function NearbySection({ data }: NearbySectionProps) {
  const placesByType = data.nearby.places.reduce((acc, place) => {
    if (!acc[place.type]) {
      acc[place.type] = [];
    }
    acc[place.type].push(place);
    return acc;
  }, {} as Record<string, typeof data.nearby.places>);

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">V okolí</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(placesByType).map(([type, places]) => (
            <div key={type} className="space-y-4">
              <h3 className="text-xl font-semibold flex items-center gap-2">
                {React.createElement(getIconByType(type), { className: "w-5 h-5" })}
                {type}
              </h3>
              <ul className="space-y-3">
                {places.map((place) => (
                  <li key={place.name} className="flex items-center justify-between">
                    <span>{place.name}</span>
                    <span className="text-gray-500">{place.distance}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 