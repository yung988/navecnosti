'use client'

import Image from 'next/image'
import { useRef } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { 
  Clock, 
  BedDouble, 
  Home, 
  Bath, 
  CookingPot as Kitchen, 
  Wifi, 
  Car, 
  Ban, 
  Coffee, 
  Utensils, 
  Wind,
  ChevronLeft,
  ChevronRight 
} from 'lucide-react'

interface AccommodationCardProps {
  data: {
    room_details: {
      type: string;
      size: string;
      capacity: number;
      bed_types: string[];
    };
    facilities: {
      kitchen: string[];
      bathroom: string[];
    };
    policies: {
      check_in: string;
      check_out: string;
      rules: string[];
    };
    property_highlights: string[];
  };
}

export function AccommodationCard({ data }: AccommodationCardProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  
  const images = [
    {
      src: '/images/optimized/loznice-postel-v.webp',
      alt: 'Ložnice s velkou postelí'
    },
    {
      src: '/images/optimized/loznice-postel-v-okno.webp',
      alt: 'Ložnice s výhledem'
    },
    {
      src: '/images/optimized/loznice-postel-s.webp',
      alt: 'Ložnice detail'
    },
    {
      src: '/images/optimized/druha-loznice-postel-v.webp',
      alt: 'Druhá ložnice'
    },
    {
      src: '/images/optimized/druha-loznice-kresilka.webp',
      alt: 'Posezení v ložnici'
    },
    {
      src: '/images/optimized/druha-loznice-okno.webp',
      alt: 'Výhled z ložnice'
    },
    {
      src: '/images/optimized/kuchyn-s.webp',
      alt: 'Kuchyň'
    },
    {
      src: '/images/optimized/kuchyn-linka.webp',
      alt: 'Kuchyňská linka'
    },
    {
      src: '/images/optimized/kuchyn-kreslo.webp',
      alt: 'Posezení v kuchyni'
    },
    {
      src: '/images/optimized/koupelna.webp',
      alt: 'Koupelna'
    },
    {
      src: '/images/optimized/koupelna-zachod.webp',
      alt: 'Toaleta'
    },
    {
      src: '/images/optimized/koupelna-ommyvadlo-v.webp',
      alt: 'Umyvadlo'
    },
    {
      src: '/images/optimized/balkon-main.webp',
      alt: 'Balkon'
    },
    {
      src: '/images/optimized/zahrada-balkon.webp',
      alt: 'Výhled do zahrady'
    },
    {
      src: '/images/optimized/dvorek.webp',
      alt: 'Dvorek'
    }
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
    <section className="py-16">
      <Card className="w-full max-w-6xl mx-auto bg-white">
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

        <CardContent className="space-y-6">
          <Tabs defaultValue="details" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="details">Detaily</TabsTrigger>
              <TabsTrigger value="amenities">Vybavení</TabsTrigger>
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
                <div className="flex items-center gap-2">
                  <Car className="h-5 w-5" />
                  <span>Parkování zdarma na místě</span>
                </div>
                <div className="flex items-center gap-2">
                  <Wifi className="h-5 w-5" />
                  <span>Wi-Fi zdarma v celém objektu</span>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="amenities" className="mt-4">
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-3">
                  <h3 className="font-medium">Kuchyň</h3>
                  <div className="grid gap-2">
                    {data.facilities.kitchen.map((item) => (
                      <div key={item} className="flex items-center gap-2">
                        <Kitchen className="h-4 w-4" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-3">
                  <h3 className="font-medium">Koupelna</h3>
                  <div className="grid gap-2">
                    {data.facilities.bathroom.map((item) => (
                      <div key={item} className="flex items-center gap-2">
                        <Bath className="h-4 w-4" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="rules" className="mt-4 space-y-4">
              <div className="grid gap-3">
                {data.policies.rules.map((rule) => (
                  <div key={rule} className="flex items-center gap-2 text-destructive">
                    <Ban className="h-5 w-5" />
                    <span>{rule}</span>
                  </div>
                ))}
                <div className="flex items-center gap-2">
                  <Wind className="h-5 w-5" />
                  <span>Balkon s výhledem do zahrady</span>
                </div>
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
                <Separator />
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

          <Separator />

          <div className="space-y-2">
            <h3 className="font-medium">Přednosti ubytování</h3>
            <div className="flex flex-wrap gap-2">
              {data.property_highlights.map((highlight) => (
                <Badge key={highlight} variant="outline">
                  {highlight}
                </Badge>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  )
} 