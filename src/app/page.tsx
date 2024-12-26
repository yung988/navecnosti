import { Navigation } from '@/components/Navigation'
import { Hero } from '@/components/Hero'
import { IntroSection } from '@/components/sections/intro-section'
import { DetailedAmenities } from '@/components/sections/detailed-amenities'
import { GallerySection } from '@/components/sections/gallery-section'
import { Reviews } from '@/components/Reviews'
import { NearbyAttractions } from '@/components/NearbyAttractions'
import { HostSection } from '@/components/sections/host-section'
import { Policies } from '@/components/Policies'
import { Contact } from '@/components/Contact'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <IntroSection />
      <GallerySection />
      <DetailedAmenities />
      <Reviews />
      <NearbyAttractions />
      <HostSection />
      <Policies />
      <Contact />
    </main>
  )
}

