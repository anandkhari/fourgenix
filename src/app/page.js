import React from 'react'
import { Header } from '@/components/Header'
import { HeroSection } from '@/components/Hero'
import { AboutIntroSection } from '@/components/AboutIntroSection'
import { HealthPartnerSection} from '@/components/HealthPartnerSection'
import { ValuesBanner } from '@/components/ValuesBanner'
import { ServicesSection } from '@/components/ServicesSection'
import { FaqSection } from '@/components/FaqSection'
import { ContactSection } from '@/components/ContactSection'
import { NewsletterForm } from '@/components/NewsletterForm'
import { Footer } from '@/components/Footer'

const page = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <AboutIntroSection />
      <HealthPartnerSection />
      <ValuesBanner />
       <ServicesSection />
      <FaqSection />
      <ContactSection />
      <Footer />
    </div>
  )
}

export default page
