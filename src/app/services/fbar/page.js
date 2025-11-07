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
        subtitle="FBAR (Foreign Bank Account Reporting)"
      />

      <ServiceIntroSection
        imageSrc="/fbar-hero.jpg"
        title="FBAR (Foreign Bank Account Reporting)"
        description="U.S. citizens, residents, and entities must report foreign financial accounts if their combined value exceeds $10,000 at any point during the year. The FBAR (FinCEN Form 114) is filed separately from your tax return to ensure compliance with the Bank Secrecy Act."
      />

      <ServiceListSection
        title="Our Comprehensive Services for FBAR Compliance Include"
        items={[
          "Determine whether you meet FBAR filing requirements accurately.",
          "Prepare and e-file your FinCEN Form 114 correctly and on time.",
          "Consolidate multiple foreign accounts into a single compliant report.",
          "Review prior-year filings for accuracy and file amendments if needed.",
          "Guide clients through delinquent FBAR or streamlined filing programs."
        ]}
      />

      <WhyItMattersSection 
        title="Why It Matters"
        content="Failure to file an FBAR can result in severe civil and criminal penalties. FourGenix ensures full compliance, minimizing your risk while helping you stay transparent with U.S. Treasury regulations."
      />
    </div>
  );
};

export default page;
