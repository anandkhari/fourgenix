import React from "react";
import { HeroSection } from "../components/Hero";
import { AboutIntroSection } from "../components/AboutIntroSection";
import { WhyPartnerSection } from "../components/WhyPartnerSection";
import { ServicesSection } from "../components/ServicesSection";
import { FaqSection } from "../components/FaqSection";
import { ContactSection } from "../components/ContactSection";


const page = () => {
  return (
    <div>
      <HeroSection />
      <AboutIntroSection />
    
      <ServicesSection />
        <WhyPartnerSection />
      <FaqSection />
      <ContactSection />
    </div>
  );
};

export default page;
