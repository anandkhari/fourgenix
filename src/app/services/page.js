// app/page.js
import React from "react";
import ServicesHero from './components/ServicesHero'
import TrustedTaxSection from "./components/TrustedTaxSection";
import ServicesSection from "./components/ServicesSection"

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#DCDEFF] text-foreground">
        <ServicesHero />
        <TrustedTaxSection />
        <ServicesSection />
    
    </div>
  );
}
