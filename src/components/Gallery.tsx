'use client'

import { useState } from 'react'
import Image from 'next/image'

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const images = [
    { url: "/images/optimized/na-vecnosti-main.webp", description: "Hlavní pohled" },
    { url: "/images/optimized/loznice-cela-s.webp", description: "Hlavní ložnice" },
    { url: "/images/optimized/balkon-main.webp", description: "Balkon" },
    { url: "/images/optimized/zahrada-balkon.webp", description: "Zahrada s výhledem" },
    { url: "/images/optimized/druha-loznice-postel-v.webp", description: "Druhá ložnice" },
    { url: "/images/optimized/kuchyn-kreslo.webp", description: "Posezení v kuchyni" },
    { url: "/images/optimized/dvorek.webp", description: "Dvorek" }
  ]

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="font-serif text-4xl text-center mb-12">Galerie</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative aspect-[4/3] cursor-pointer overflow-hidden"
              onClick={() => setSelectedImage(index)}
            >
              <Image
                src={image.url}
                alt={image.description}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                style={{ objectFit: 'cover' }}
                className="transform transition-transform duration-500 hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>

      {selectedImage !== null && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative w-full max-w-4xl aspect-[4/3]">
            <Image
              src={images[selectedImage].url}
              alt={images[selectedImage].description}
              fill
              sizes="100vw"
              style={{ objectFit: 'contain' }}
            />
          </div>
        </div>
      )}
    </section>
  )
}

