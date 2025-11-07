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
        subtitle="International Business & Ownership Reporting"
      />

      <ServiceIntroSection
        imageSrc="/international-business-hero.jpg"
        title="International Business & Ownership Reporting"
        description="If you own, control, or hold an interest in a foreign company, trust, or partnership, you may be required to report your ownership to the IRS using forms like 5471, 8858, 8865, or 8938. These forms disclose foreign business operations, earnings, and relationships with U.S. taxpayers."
      />

      <ServiceListSection
        title="Our Comprehensive Services Include"
        items={[
          "Identify all relevant ownership structures and required reporting forms.",
          "Prepare and file Forms 5471, 8858, 8865, and 8938 accurately.",
          "Analyze business relationships to prevent omissions or duplication in reporting.",
          "Assist with transfer pricing documentation and related-party disclosures.",
          "Provide guidance on Subpart F income, GILTI, and foreign tax credits."
        ]}
      />

      <WhyItMattersSection 
        title="Why It Matters"
        content="Non-compliance with foreign ownership reporting can lead to penalties exceeding $10,000 per form and potential audits. FourGenix ensures your filings are accurate, timely, and IRS-compliant, safeguarding your international business interests."
      />
    </div>
  );
};

export default page;
