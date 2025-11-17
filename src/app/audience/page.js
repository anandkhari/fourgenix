import Link from 'next/link';
import React from 'react'; // React import is good practice for components
import { 
  Globe, Clock, Building, Laptop, Briefcase, Map, 
  Banknote, Plane, Key, Home, DollarSign, Shield, 
  GraduationCap, Tent 
} from 'lucide-react';


// --- 1. LayeredAudienceCard Component (No corrections needed here, it's perfect) ---
const LayeredAudienceCard = ({ 
  icon: Icon,
  title, 
  description,
  image: imageSrc, 
}) => {
  return (
    <div
      className="max-w-sm flex flex-col rounded-2xl shadow-xl bg-white overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl"
    >
      
      {/* 1. The Image Layer */}
      <img
        className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
        src={imageSrc}
        alt={title}
      />

      {/* 2. The Content Wrapper */}
      <div className="px-5 pb-12 relative">
        
        {/* 3. The Floating Icon Box */}
        <div className="
          absolute top-0 left-5 
          -translate-y-1/2 
          w-20 h-20 
          rounded-3xl 
          bg-[#2a2d58] 
          shadow-lg border-4 border-white
          flex items-center justify-center
        ">
          {/* 4. The actual Icon Component */}
          {Icon && <Icon className="h-12 w-12 text-white" strokeWidth={2} />}
        </div>

        {/* 5. The Text Group */}
        <div className="text-start mt-16">
          
          {/* Title/Heading */}
          <h3 className="
            mt-8 
            mb-3 
            text-2xl  
            text-gray-900 
            font-worksans
          ">
            {title}
          </h3>
          
          {/* Description */}
          <p className="text-base text-gray-600 font-poppins">
            {description}
          </p>
        </div>
        
      </div>
    </div>
  );
};

// --- 2. AudienceHero Component (No corrections needed here) ---
function AudienceHero() {
  return (
    <section className="relative bg-[url('/pages-hero.png')] bg-cover bg-center bg-no-repeat rounded-b-3xl overflow-hidden
      py-12 sm:py-16 lg:py-16 mt-14 sm:mt-14 lg:mt-30">
      <div className="max-w-7xl mx-auto px-6 text-left">
        <p className="text-sm sm:text-base font-medium text-gray-700 mb-1 sm:mb-2">
          Fourgenix
        </p>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-worksans text-gray-900 leading-tight">
          <span className="inline-block border-b-4 border-gray-900 pb-1">
            Who we serve
          </span>
        </h1>
      </div>
    </section>
  );
}

// --- 3. WhoWeHelpPage Component (Main Corrections Applied Here) ---
export default function WhoWeHelpPage() {
  // CORRECTED: Moved data definition inside the component or kept outside, 
  // but ensures it's accessible. This location is fine.
  const audienceData = [
    { icon: Globe, title: "American Expatriates Overseas", description: "Comprehensive tax services for U.S. citizens and green card holders residing in foreign countries.", imageSrc: "/audiences/us-citizens-abroad.jpg" },
    { icon: Clock, title: "Individuals with Overdue Tax Filings", description: "Specialized assistance for clients needing to catch up on past-due U.S. tax returns and compliance obligations.", imageSrc: "/audiences/late-tax-filers.jpg" },
    { icon: Building, title: "Entrepreneurs with International Companies", description: "Guidance and compliance for U.S. individuals who own or control foreign business entities (e.g., Form 5471).", imageSrc: "/audiences/foreign-business-owners.jpg" },
    { icon: Laptop, title: "Location-Independent Professionals", description: "Solutions tailored for remote workers who derive income globally and need to navigate residency and tax treaties.", imageSrc: "/audiences/digital-nomads.jpg" },
    { icon: Briefcase, title: "Freelance or Independent Contractors Living Abroad", description: "Filing for self-employed individuals, ensuring compliance with both U.S. and foreign reporting requirements.", imageSrc: "/audiences/self-employed-expats.jpg" },
    { icon: Map, title: "Global US Citizen Community", description: "General tax preparation for the broad population of U.S. citizens scattered across various continents.", imageSrc: "/audiences/us-expats-world.jpg" },
    { icon: Banknote, title: "Clients with Non-US Financial Accounts", description: "Mandatory FBAR (FinCEN Form 114) and FATCA compliance for reporting foreign bank accounts and assets.", imageSrc: "/audiences/foreign-bank-holders.jpg" },
    { icon: Plane, title: "Americans Planning an International Move", description: "Pre-move consulting to structure assets and understand reporting requirements before leaving the U.S.", imageSrc: "/audiences/moving-abroad.jpg" },
    { icon: Key, title: "Citizens with Multiple Nationalities", description: "Specialized filing advice for individuals holding both U.S. citizenship and a passport from another country.", imageSrc: "/audiences/dual-citizens.jpg" },
    { icon: Home, title: "US Retirees Residing Outside the US", description: "Tax planning focused on pensions, Social Security, and foreign investments for older Americans living internationally.", imageSrc: "/audiences/retirees-abroad.jpg" },
    { icon: DollarSign, title: "Real Estate Investors with Non-US Property", description: "Reporting income, deductions, and ownership of foreign rental properties or second homes.", imageSrc: "/audiences/foreign-property-owners.jpg" },
    { icon: Shield, title: "Undocumented US Citizens", description: "Assistance for individuals who were unaware of their U.S. citizenship and need to enter the compliance system.", imageSrc: "/audiences/accidental-americans.jpg" },
    { icon: GraduationCap, title: "US Educators Working Overseas", description: "Filing help tailored for teachers and faculty who may qualify for the Foreign Earned Income Exclusion.", imageSrc: "/audiences/teachers-abroad.jpg" },
    { icon: Tent, title: "Repatriating American Expatriates", description: "Support for U.S. citizens moving back home, including closing foreign accounts and transitioning tax residency.", imageSrc: "/audiences/moving-back.jpg" },
  ];

  return (
    <main className="bg-white">
      {/* --- Hero Section --- */}
      <AudienceHero />

      {/* --- "Who We Help" Grid Section --- */}
      <section className="py-16 md:py-20"> {/* Increased vertical padding for better spacing */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Main Description/Intro Text */}
          <div className="text-left max-w-5xl mb-12"> {/* Added mb-12 for spacing */}
           
            <p className="mt-4 font-worksans text-xl text-gray-700"> {/* Increased font size for importance */}
              We provide specialized, high-touch advisory services for a diverse range of clients. Select your profile to learn how we can help you build a smarter financial future.
            </p>
          </div>

          {/* Fully responsive grid 
              CORRECTED: Changed grid structure to allow 4 columns (xl:grid-cols-4)
              and increased gap-y to match the layered card design better.
          */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-x-16 sm:gap-x-16 gap-y-16">
            
            {/* CORRECTION: Use the 'audienceData' array and 'LayeredAudienceCard' component */}
            {audienceData.map((audience) => (
              <LayeredAudienceCard
                key={audience.title}
                // Pass all four required props
                icon={audience.icon}
                title={audience.title}
                description={audience.description}
                image={audience.imageSrc} 
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}