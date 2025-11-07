import React from "react";
import ServicesHero from "../components/ServicesHero";
import ServiceIntroSection from "../components/ServiceIntroSection";
import WhyItMattersSection from "../components/WhyItMattersSection";
import ServiceListSection from "../components/ServiceListSection";

const page = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#DCDEFF]">
      <ServicesHero
        title="Services"
        subtitle="Expat Tax Filing"
      />

      <ServiceIntroSection
        imageSrc="/expat-tax-hero.png"
        title="Expat Tax Filing"
        description="U.S. citizens and green card holders living abroad must still file U.S. tax returns, even if they pay taxes in another country. Expat tax filing involves unique rules for reporting foreign income, assets, and claiming exclusions or credits to avoid double taxation."
      />

 <ServiceListSection
   title="Our Comprehensive Services for U.S. Expats include"
  items={[
    "Prepare Form 1040 with all required international schedules and forms.",
    "Apply FEIE and FTC to minimize U.S. tax liability efficiently.",
    "File Forms 2555, 1116, and other expat-related schedules accurately.",
    "Assist with foreign housing deductions, dual-status, and complex returns.",
    "Manage tax equalization for expatriates working in multinational companies."
  ]}
/>



      <WhyItMattersSection 
        title="Why It Matters"
        content="With complex cross-border tax rules, even small reporting errors can lead to double taxation or IRS notices. FourGenix helps U.S. expats stay compliant while maximizing eligible benefits and minimizing tax burdens."
      />

   
    </div>
  );
};

export default page;
