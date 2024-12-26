"use client"

import { useRef, useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { 
  Home as HomeIcon,
  Utensils as UtensilsIcon, 
  Shower as ShowerIcon,
  Bed as BedIcon,
  Tree as TreeIcon,
  Check as CheckIcon
} from "lucide-react"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

interface AmenitiesSectionProps {
  data: {
    facilities: {
      amenities: string[];
      kitchen: string[];
      bathroom: string[];
      bedroom: string[];
      outdoor: string[];
      internet: string;
      parking: string;
    };
  };
}

export function AmenitiesSection({ data }: AmenitiesSectionProps) {
  const amenityGroups = [
    {
      title: "Obecné vybavení",
      items: data.facilities.amenities,
      icon: HomeIcon,
    },
    {
      title: "Kuchyně",
      items: data.facilities.kitchen,
      icon: UtensilsIcon,
    },
    {
      title: "Koupelna",
      items: data.facilities.bathroom,
      icon: ShowerIcon,
    },
    {
      title: "Ložnice",
      items: data.facilities.bedroom,
      icon: BedIcon,
    },
    {
      title: "Venkovní prostor",
      items: data.facilities.outdoor,
      icon: TreeIcon,
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Vybavení</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {amenityGroups.map((group) => (
            <div key={group.title} className="space-y-4">
              <h3 className="text-xl font-semibold flex items-center gap-2">
                <group.icon className="w-5 h-5" />
                {group.title}
              </h3>
              <ul className="space-y-2">
                {group.items.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <CheckIcon className="w-4 h-4 text-green-500" />
                    {item}
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