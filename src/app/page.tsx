import { HeroSection } from '@/components/sections/HeroSection'
import { MissionSection } from '@/components/sections/MissionSection'
import { FeaturesSection } from '@/components/sections/FeaturesSection'
import { StatsSection } from '@/components/sections/StatsSection'
import { NewsletterSection } from '@/components/sections/NewsletterSection'

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <MissionSection />
      <FeaturesSection />
      <StatsSection />
      <NewsletterSection />
    </div>
  )
}