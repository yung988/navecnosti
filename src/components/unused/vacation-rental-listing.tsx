'use client'

import { useState, useEffect, useRef } from "react"
import { Hero } from "@/components/Hero"
import { AmenitiesSection } from "./sections/amenities-section"
import { FloatingMenu } from "./floating-menu"
import { GallerySection } from "./sections/gallery-section"
import { ReviewsSection } from "./sections/reviews-section"
import { ContactSection } from "./sections/contact-section"
import { ContactDialog } from "./dialogs/contact-dialog"
import { ImageDialog } from "./dialogs/image-dialog"
import { motion } from "framer-motion"
import { AccommodationDetailsSection } from "./sections/accommodation-details-section"
import { NearbySection } from "./sections/nearby-section"
import { RulesSection } from "./sections/rules-section"
import { DescriptionSection } from "./sections/description-section"
import { FacilitiesSection } from "./sections/facilities-section"
import { FooterSection } from "./sections/footer-section"
import { Button } from "./ui/button"
import { Menu } from "lucide-react"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

interface GalleryImage {
  url: string
  alt: string
  category: string[]
}

const images: GalleryImage[] = [
  // Ložnice
  { 
    url: "/images/optimized/loznice-cela-s.webp",
    alt: "Hlavní ložnice",
    category: ["interior", "bedroom"]
  },
  { 
    url: "/images/optimized/loznice-postel-v.webp",
    alt: "Postel v hlavní ložnici",
    category: ["interior", "bedroom"]
  },
  { 
    url: "/images/optimized/druha-loznice-postel-v.webp",
    alt: "Druhá ložnice",
    category: ["interior", "bedroom"]
  },
  { 
    url: "/images/optimized/druha-loznice-kresilka.webp",
    alt: "Posezení v druhé ložnici",
    category: ["interior", "bedroom"]
  },
  
  // Koupelna
  { 
    url: "/images/optimized/koupelna.webp",
    alt: "Koupelna",
    category: ["interior", "bathroom"]
  },
  { 
    url: "/images/optimized/sprcha.webp",
    alt: "Sprchový kout",
    category: ["interior", "bathroom"]
  },
  { 
    url: "/images/optimized/koupelna-ommyvadlo-v.webp",
    alt: "Umyvadlo v koupelně",
    category: ["interior", "bathroom"]
  },

  // Kuchyň
  { 
    url: "/images/optimized/kuchyn-s.webp",
    alt: "Kuchyň",
    category: ["interior"]
  },
  { 
    url: "/images/optimized/kuchyn-linka.webp",
    alt: "Kuchyňská linka",
    category: ["interior"]
  },
  { 
    url: "/images/optimized/kuchyn-kreslo.webp",
    alt: "Posezení v kuchyni",
    category: ["interior"]
  },

  // Exteriér
  { 
    url: "/images/optimized/balkon-main.webp",
    alt: "Balkon",
    category: ["exterior"]
  },
  { 
    url: "/images/optimized/bis-s-balkon.webp",
    alt: "Pohled na balkon",
    category: ["exterior"]
  },
  { 
    url: "/images/optimized/zahrada-balkon.webp",
    alt: "Zahrada a balkon",
    category: ["exterior"]
  },
  { 
    url: "/images/optimized/dvorek.webp",
    alt: "Dvorek",
    category: ["exterior"]
  },
  { 
    url: "/images/optimized/posezeni-dole.webp",
    alt: "Venkovní posezení",
    category: ["exterior"]
  }
]

export default function VacationRentalListing() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0)
  const [showContactInfo, setShowContactInfo] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  const textRefs = useRef<(HTMLElement | null)[]>([])
  const imageRefs = useRef<(HTMLElement | null)[]>([])

  const setTextRef = (index: number) => (el: HTMLElement | null): void => {
    textRefs.current[index] = el
  }

  const setImageRef = (index: number) => (el: HTMLElement | null): void => {
    imageRefs.current[index] = el
  }

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  useEffect(() => {
    // Animace pro texty
    textRefs.current.forEach((element, index) => {
      if (!element) return

      gsap.fromTo(element,
        {
          opacity: 0,
          y: 60,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: element,
            start: "top bottom-=50",
            end: "bottom top",
            toggleActions: "play none none reverse",
          }
        }
      )
    })

    // Animace pro obrázky
    imageRefs.current.forEach((element, index) => {
      if (!element) return

      gsap.fromTo(element,
        {
          opacity: 0,
          scale: 0.9,
        },
        {
          opacity: 1,
          scale: 1,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: element,
            start: "top bottom-=50",
            end: "bottom top",
            toggleActions: "play none none reverse",
          }
        }
      )
    })

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  const handleImageSelect = (image: string) => {
    setSelectedImage(image)
    const index = images.findIndex(img => img.url === image)
    setCurrentImageIndex(index)
  }

  const handleNext = () => {
    if (currentImageIndex < images.length - 1) {
      setCurrentImageIndex(prev => prev + 1)
      setSelectedImage(images[currentImageIndex + 1].url)
    }
  }

  const handlePrevious = () => {
    if (currentImageIndex > 0) {
      setCurrentImageIndex(prev => prev - 1)
      setSelectedImage(images[currentImageIndex - 1].url)
    }
  }

  const handleClose = () => {
    setSelectedImage(null)
    setCurrentImageIndex(0)
  }

  return (
    <div className="relative min-h-screen bg-[#f8f7f4]">
      <nav className={cn(
        "fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-8 py-6 transition-all duration-500",
        isScrolled 
          ? "bg-white shadow-md" 
          : "bg-transparent"
      )}>
        <motion.a 
          href="#" 
          className={cn(
            "text-2xl tracking-wide transition-all duration-500",
            isScrolled 
              ? "text-gray-900 hover:text-gray-600" 
              : "text-white hover:text-gray-200"
          )}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          UBYTOVÁNÍ NA VĚČNOSTI
        </motion.a>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsMenuOpen(true)}
          className={cn(
            "w-14 h-14 rounded-full flex items-center justify-center transition-all duration-500",
            isScrolled 
              ? "bg-gray-100 hover:bg-gray-200" 
              : "bg-white/10 hover:bg-white/20 backdrop-blur-sm"
          )}
        >
          <Menu className={cn(
            "w-7 h-7 transition-colors duration-500",
            isScrolled ? "text-gray-900" : "text-white"
          )} />
        </motion.button>
      </nav>

      <FloatingMenu 
        isOpen={isMenuOpen}
        setIsOpen={setIsMenuOpen}
        showContactInfo={showContactInfo}
        setShowContactInfo={setShowContactInfo}
      />

      <section className="h-screen">
        <Hero />
      </section>

      <div className="max-w-6xl mx-auto px-8">
        <section className="py-24">
          <h2 
            ref={setTextRef(0)}
            className="text-4xl font-light leading-relaxed max-w-3xl"
          >
            Objevte klidné ubytování v malebné lokalitě Biskupic. 
            S naším útulným apartmánem víme, že najdete dokonalé místo pro váš pobyt.
          </h2>
        </section>

        <section className="grid md:grid-cols-2 gap-8 py-24">
          <div 
            ref={setImageRef(0)}
            className="relative aspect-[4/5]"
          >
            <Image
              src="/images/optimized/na-vecnosti-main.webp"
              alt="Exteriér ubytování"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div 
            ref={setImageRef(1)}
            className="relative aspect-[4/5]"
          >
            <Image
              src="/images/optimized/loznice-cela-s.webp"
              alt="Interiér ubytování"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <p 
            ref={setTextRef(1)}
            className="text-sm text-gray-500 mt-4 md:col-span-2"
          >
            Každý pokoj byl pečlivě zařízený, aby vám poskytl domácí atmosféru a zároveň 
            plně využil nádherný výhled na okolní krajinu.
          </p>
        </section>

        <section className="py-24">
          <div 
            ref={setImageRef(2)}
            className="relative aspect-[21/9]"
          >
            <Image
              src="/images/optimized/balkon-main.webp"
              alt="Výhled z balkonu"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
        </section>

        <section className="py-24">
          <h2 
            ref={setTextRef(2)}
            className="text-4xl font-light mb-12"
          >
            Prohlédněte si náš apartmán
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                image: "/images/optimized/loznice-postel-v.webp",
                title: "Hlavní ložnice",
                description: "Prostorná ložnice s manželskou postelí a výhledem do zahrady."
              },
              {
                image: "/images/optimized/druha-loznice-postel-v.webp",
                title: "Druhá ložnice",
                description: "Pohodlná ložnice se dvěma jednolůžkovými postelemi."
              },
              {
                image: "/images/optimized/koupelna.webp",
                title: "Koupelna",
                description: "Moderní koupelna s prostorným sprchovým koutem."
              },
              {
                image: "/images/optimized/kuchyn-s.webp",
                title: "Kuchyň",
                description: "Plně vybavená kuchyň s jídelním koutem."
              }
            ].map((room, index) => (
              <div 
                key={room.title}
                className="space-y-4"
                ref={setImageRef(3 + index)}
              >
                <div className="relative aspect-square">
                  <Image
                    src={room.image}
                    alt={room.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 25vw"
                    className="object-cover"
                  />
                </div>
                <h3 
                  ref={setTextRef(3 + index)}
                  className="text-2xl font-light"
                >
                  {room.title}
                </h3>
                <p 
                  ref={setTextRef(7 + index)}
                  className="text-gray-500"
                >
                  {room.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="grid md:grid-cols-2 gap-24 py-24">
          <div 
            ref={setImageRef(7)}
            className="relative aspect-square"
          >
            <Image
              src="/images/optimized/dvorek.webp"
              alt="Zimní pohled"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div>
            <p 
              ref={setTextRef(11)}
              className="text-sm text-gray-500 mb-4"
            >
              Zima na Věčnosti
            </p>
            <p 
              ref={setTextRef(12)}
              className="text-gray-500 leading-relaxed"
            >
              I v zimě má naše ubytování své kouzlo. Užijte si pohled na zasněženou krajinu 
              z pohodlí vyhřátého apartmánu nebo se vydejte prozkoumat okolní přírodu.
            </p>
          </div>
        </section>
      </div>

      <footer className="bg-white py-24">
        <div className="max-w-6xl mx-auto px-8">
          <div className="grid md:grid-cols-3 gap-16">
            <div>
              <h3 
                ref={setTextRef(13)}
                className="text-2xl font-light mb-4"
              >
                Kontakt
              </h3>
              <p 
                ref={setTextRef(14)}
                className="text-gray-500"
              >
                +420 605 033 166
              </p>
              <p 
                ref={setTextRef(15)}
                className="text-gray-500"
              >
                petraklimesova21@seznam.cz
              </p>
            </div>
            <div>
              <h3 
                ref={setTextRef(16)}
                className="text-2xl font-light mb-4"
              >
                Adresa
              </h3>
              <p 
                ref={setTextRef(17)}
                className="text-gray-500"
              >
                Biskupice-Pulkov 72
              </p>
            </div>
            <div>
              <h3 
                ref={setTextRef(18)}
                className="text-2xl font-light mb-4"
              >
                Sledujte nás
              </h3>
              <p 
                ref={setTextRef(19)}
                className="text-gray-500"
              >
                Instagram
              </p>
            </div>
          </div>
        </div>
      </footer>

      <ContactDialog
        open={showContactInfo}
        onOpenChange={setShowContactInfo}
      />

      <ImageDialog
        selectedImage={selectedImage}
        onClose={handleClose}
        onNext={handleNext}
        onPrevious={handlePrevious}
        hasNext={currentImageIndex < images.length - 1}
        hasPrevious={currentImageIndex > 0}
      />
    </div>
  )
}