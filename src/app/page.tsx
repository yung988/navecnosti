import { Navigation } from '@/components/Navigation'
import { Hero } from '@/components/Hero'
import { IntroSection } from '@/components/IntroSection'
import { AccommodationCard } from '@/components/accommodation-card'
import { Reviews } from '@/components/Reviews'
import { NearbyAttractions } from '@/components/NearbyAttractions'
import { HostSection } from '@/components/HostSection'
import { Policies } from '@/components/Policies'
import { Contact } from '@/components/Contact'
import accommodationData from '../../na-vecnosti-data_20241226_160400.json'
import { AccommodationSection } from '@/components/accommodation-section'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <IntroSection />
      <AccommodationSection data={accommodationData} className="bg-[#FDF6F0]" />
      <Reviews data={accommodationData} className="bg-[#FDF6F0]" />
      <NearbyAttractions data={accommodationData} />
      <HostSection />
      <Policies />
      <Contact />
    </main>
  )
}
