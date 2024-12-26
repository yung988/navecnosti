import { Navigation } from '@/components/Navigation'
import { Hero } from '@/components/Hero'
import { IntroSection } from '@/components/sections/intro-section'
import { DetailedAmenities } from '@/components/sections/detailed-amenities'
import { AccommodationCard } from '@/components/sections/accommodation-card'
import { Reviews } from '@/components/Reviews'
import { NearbyAttractions } from '@/components/NearbyAttractions'
import { HostSection } from '@/components/sections/host-section'
import { Policies } from '@/components/Policies'
import { Contact } from '@/components/Contact'
import accommodationData from '../../na-vecnosti-data_20241226_160400.json'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <IntroSection />
      <AccommodationCard data={accommodationData} />
      <DetailedAmenities data={accommodationData} />
      <Reviews data={accommodationData} />
      <NearbyAttractions data={accommodationData} />
      <HostSection data={accommodationData} />
      <Policies data={accommodationData} />
      <Contact />
    </main>
  )
}

