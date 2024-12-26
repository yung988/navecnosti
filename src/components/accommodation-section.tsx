'use client'

import Image from 'next/image'
import { useRef, useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { 
  ChevronLeft, ChevronRight,
  Utensils, Coffee, Wifi, Car, Bath, Bed, 
  TreePine, Wind, ChefHat, Mountain,
  Clock, BedDouble, Home, X
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
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  
  const images = [
    {
      src: '/images/optimized/na-vecnosti-main.webp',
      alt: 'Hlavní pohled na ubytování'
    },
    {
      src: '/images/optimized/loznice-postel-v.webp',
      alt: 'Velká ložnice s postelí'
    },
    {
      src: '/images/optimized/loznice-postel-v-okno.webp',
      alt: 'Velká ložnice s výhledem z okna'
    },
    {
      src: '/images/optimized/loznice-postel-v-front.webp',
      alt: 'Velká ložnice zepředu'
    },
    {
      src: '/images/optimized/loznice-okno.webp',
      alt: 'Výhled z ložnice'
    },
    {
      src: '/images/optimized/druha-loznice-postel-v.webp',
      alt: 'Druhá ložnice s postelí'
    },
    {
      src: '/images/optimized/druha-loznice-skrin.webp',
      alt: 'Druhá ložnice se skříní'
    },
    {
      src: '/images/optimized/druha-loznice-okno.webp',
      alt: 'Druhá ložnice s oknem'
    },
    {
      src: '/images/optimized/druha-loznice-kresilko-v.webp',
      alt: 'Druhá ložnice s křesílkem'
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
      alt: 'Koupelna se záchodem'
    },
    {
      src: '/images/optimized/koupelna-ommyvadlo-v.webp',
      alt: 'Koupelna s umyvadlem'
    },
    {
      src: '/images/optimized/balkon-main.webp',
      alt: 'Hlavní pohled na balkon'
    },
    {
      src: '/images/optimized/biskupice-balkon-v.webp',
      alt: 'Výhled z balkonu na Biskupice'
    },
    {
      src: '/images/optimized/zahrada-balkon.webp',
      alt: 'Výhled na zahradu z balkonu'
    },
    {
      src: '/images/optimized/dvorek.webp',
      alt: 'Pohled na dvorek'
    },
    {
      src: '/images/optimized/chodba-zidle-v.webp',
      alt: 'Chodba se židlemi'
    }
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
                    className="flex-none w-[calc(33.333%-0.5rem)] h-full snap-center relative cursor-pointer"
                    onClick={() => setSelectedImage(index)}
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover rounded-lg hover:opacity-90 transition-opacity"
                      sizes="(max-width: 768px) 33vw, 266px"
                    />
                  </div>
                ))}
              </div>
            </div>
          </Card>

          {/* Modal pro zvětšený obrázek */}
          {selectedImage !== null && (
            <div 
              className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center"
              onClick={() => setSelectedImage(null)}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
              >
                <X className="w-8 h-8" />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  setSelectedImage(selectedImage > 0 ? selectedImage - 1 : images.length - 1)
                }}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors"
              >
                <ChevronLeft className="w-8 h-8" />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  setSelectedImage(selectedImage < images.length - 1 ? selectedImage + 1 : 0)
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors"
              >
                <ChevronRight className="w-8 h-8" />
              </button>
              <div className="relative w-full max-w-6xl aspect-[4/3] mx-4" onClick={e => e.stopPropagation()}>
                <Image
                  src={images[selectedImage].src}
                  alt={images[selectedImage].alt}
                  fill
                  className="object-contain"
                  sizes="100vw"
                  priority
                />
                <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-lg bg-black/50 px-4 py-2 rounded-full">
                  {images[selectedImage].alt}
                </p>
              </div>
            </div>
          )}

          {/* Detaily a vybavení */}
          <Card className="mt-16 bg-white">
            <CardContent className="pt-6">
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
                  </div>
                </TabsContent>

                <TabsContent value="amenities" className="mt-4">
                  <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <ChefHat className="h-5 w-5" />
                        <h3 className="font-medium">Kuchyně</h3>
                      </div>
                      <ul className="space-y-2">
                        {data.facilities.kitchen.map((item, index) => (
                          <li key={index} className="flex items-center gap-2 text-gray-600">
                            <div className="w-1.5 h-1.5 bg-gray-300 rounded-full" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <Bath className="h-5 w-5" />
                        <h3 className="font-medium">Koupelna</h3>
                      </div>
                      <ul className="space-y-2">
                        {data.facilities.bathroom.map((item, index) => (
                          <li key={index} className="flex items-center gap-2 text-gray-600">
                            <div className="w-1.5 h-1.5 bg-gray-300 rounded-full" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <Bed className="h-5 w-5" />
                        <h3 className="font-medium">Ložnice</h3>
                      </div>
                      <ul className="space-y-2">
                        {data.facilities.bedroom.map((item, index) => (
                          <li key={index} className="flex items-center gap-2 text-gray-600">
                            <div className="w-1.5 h-1.5 bg-gray-300 rounded-full" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <TreePine className="h-5 w-5" />
                        <h3 className="font-medium">Venkovní prostory</h3>
                      </div>
                      <ul className="space-y-2">
                        {data.facilities.outdoor.map((item, index) => (
                          <li key={index} className="flex items-center gap-2 text-gray-600">
                            <div className="w-1.5 h-1.5 bg-gray-300 rounded-full" />
                            {item}
                          </li>
                        ))}
                      </ul>
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

          {/* Highlights */}
          <div className="flex flex-wrap justify-center gap-6 mt-16">
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
        </div>
      </div>
    </section>
  )
} 