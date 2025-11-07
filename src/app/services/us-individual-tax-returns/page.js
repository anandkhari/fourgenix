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
        subtitle="U.S. Individual Tax Returns"
      />

      <ServiceIntroSection
        imageSrc="/us-individual-tax-hero.png"
        title="U.S. Individual Tax Returns"
        description="Filing an accurate U.S. individual tax return (Form 1040) is essential to comply with federal tax laws and claim all eligible credits and deductions. At FourGenix, we provide end-to-end preparation, filing, and advisory services for U.S. residents and citizens worldwide."
      />

      <ServiceListSection
        title="Our Comprehensive Services Include"
        items={[
          "Prepare Form 1040 and all related schedules (A, B, C, D, E, SE).",
          "Optimize deductions and credits including Child Tax Credit and Education Credits.",
          "File returns for individuals with foreign income, investments, or self-employment.",
          "Handle amended returns (Form 1040-X) and prior-year filings accurately.",
          "Provide representation and support during IRS audits or notices."
        ]}
      />

      <WhyItMattersSection 
        title="Why It Matters"
        content="The U.S. tax system can be complex, especially for individuals with multiple income sources. FourGenix ensures precision, compliance, and the maximum refund or minimal liability possible, giving you complete peace of mind."
      />
    </div>
  );
};

export default page;
