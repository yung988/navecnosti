'use client'

import Image from 'next/image'
import { useRef } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { 
  ChevronLeft, ChevronRight,
  Utensils, Coffee, Wifi, Car, Bath, Bed, 
  TreePine, Wind, ChefHat, Mountain,
  Clock, BedDouble, Home
} from 'lucide-react'

interface AccommodationSectionProps {
  data: {
    room_details: {
      type: string;
      size: string;
      capacity: number;
      bed_types: string[];
    };
    facilities: {
      amenities: string[];
      kitchen: string[];
      bathroom: string[];
      bedroom: string[];
      outdoor: string[];
    };
    policies: {
      check_in: string;
      check_out: string;
      rules: string[];
    };
    property_highlights: string[];
  };
  className?: string;
}

interface AmenityProps {
  icon: React.ElementType;
  title: string;
  items: string[];
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

export function AccommodationSection({ data, className }: AccommodationSectionProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  
  const images = [
    {
      src: '/images/optimized/loznice-postel-v.webp',
      alt: 'Ložnice s velkou postelí'
    },
    // ... zbytek obrázků ...
  ]

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

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = scrollContainerRef.current.clientWidth
      const newScrollLeft = direction === 'left' 
        ? scrollContainerRef.current.scrollLeft - scrollAmount
        : scrollContainerRef.current.scrollLeft + scrollAmount
      
      scrollContainerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
      })
    }
  }

  return (
    <section id="accommodation" className={`py-16 scroll-mt-24 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-7xl md:text-8xl mb-16 text-center">Ubytování</h2>

          {/* Galerie */}
          <Card className="mb-16 bg-white">
            <CardHeader className="space-y-2">
              <div className="flex justify-between items-start">
                <CardTitle className="text-2xl font-semibold">{data.room_details.type}</CardTitle>
                <Badge variant="outline" className="text-base font-normal">
                  {data.room_details.size}
                </Badge>
              </div>
              <div className="flex gap-2 flex-wrap">
                <Badge variant="secondary">{data.room_details.capacity} hosté</Badge>
                <Badge variant="secondary">2 ložnice</Badge>
                <Badge variant="secondary">1 koupelna</Badge>
              </div>
            </CardHeader>

            <div className="relative h-64 md:h-96 overflow-hidden">
              <button 
                onClick={() => scroll('left')}
                className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white/80 rounded-full p-2 shadow-lg hover:bg-white transition-colors"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button 
                onClick={() => scroll('right')}
                className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white/80 rounded-full p-2 shadow-lg hover:bg-white transition-colors"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              <div 
                ref={scrollContainerRef}
                className="flex gap-2 overflow-x-auto snap-x snap-mandatory hide-scrollbar h-full p-2"
              >
                {images.map((image, index) => (
                  <div 
                    key={index} 
                    className="flex-none w-[calc(33.333%-0.5rem)] h-full snap-center relative"
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover rounded-lg"
                      sizes="(max-width: 768px) 33vw, 266px"
                    />
                  </div>
                ))}
              </div>
            </div>
          </Card>

          {/* Highlights */}
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

          {/* Detailní vybavení */}
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

          {/* Časy a pravidla */}
          <Card className="mt-16 bg-white">
            <CardContent className="pt-6">
              <Tabs defaultValue="details" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="details">Detaily</TabsTrigger>
                  <TabsTrigger value="rules">Pravidla</TabsTrigger>
                  <TabsTrigger value="times">Časy</TabsTrigger>
                </TabsList>
                
                <TabsContent value="details" className="mt-4 space-y-4">
                  <div className="grid gap-4">
                    <div className="flex items-center gap-2">
                      <BedDouble className="h-5 w-5" />
                      <span>{data.room_details.bed_types.join(', ')}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Home className="h-5 w-5" />
                      <span>Celé ubytování jen pro vás</span>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="rules" className="mt-4 space-y-4">
                  <div className="grid gap-3">
                    {data.policies.rules.map((rule) => (
                      <div key={rule} className="flex items-center gap-2 text-destructive">
                        <span>{rule}</span>
                      </div>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="times" className="mt-4 space-y-4">
                  <div className="grid gap-4">
                    <div className="flex items-center gap-2">
                      <Clock className="h-5 w-5" />
                      <div>
                        <p className="font-medium">Check-in</p>
                        <p className="text-sm text-muted-foreground">{data.policies.check_in}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-5 w-5" />
                      <div>
                        <p className="font-medium">Check-out</p>
                        <p className="text-sm text-muted-foreground">{data.policies.check_out}</p>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
} 