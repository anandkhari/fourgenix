import Link from 'next/link';

// --- New Audience Card Component ---
const AudienceCard = ({ title, image }) => (
  <div className="group">
    <div className="overflow-hidden rounded-lg">
      <img
        src={image}
        alt={title}
        className="w-full h-56 sm:h-60 md:h-64 lg:h-56 object-cover transition-transform duration-300 group-hover:scale-105"
      />
    </div>
    <h3 className="mt-4 text-xl font-poppins font-medium text-gray-900 text-center">
      {title}
    </h3>
    <div className="mt-2 w-12 h-0.5 bg-brand mx-auto" />
  </div>
);

// --- Hero Section ---
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

export default function WhoWeHelpPage() {
  const services = [
    { title: "US Citizens Living Abroad", image: "/audiences/us-citizens-abroad.jpg" },
    { title: "Late Tax Filers", image: "/audiences/late-tax-filers.jpg" },
    { title: "Foreign Business Owners", image: "/audiences/foreign-business-owners.jpg" },
    { title: "Digital Nomads", image: "/audiences/digital-nomads.jpg" },
    { title: "Self-Employed Expats", image: "/audiences/self-employed-expats.jpg" },
    { title: "US Expats Around the World", image: "/audiences/us-expats-world.jpg" },
    { title: "Foreign Bank Account Holders", image: "/audiences/foreign-bank-holders.jpg" },
    { title: "US Citizens Considering Moving Abroad", image: "/audiences/moving-abroad.jpg" },
    { title: "Dual Citizens", image: "/audiences/dual-citizens.jpg" },
    { title: "Retirees Abroad", image: "/audiences/retirees-abroad.jpg" },
    { title: "Foreign Property Owners", image: "/audiences/foreign-property-owners.jpg" },
    { title: "Accidental Americans", image: "/audiences/accidental-americans.jpg" },
    { title: "American Teachers Abroad", image: "/audiences/teachers-abroad.jpg" },
    { title: "US Expats Moving Back to America", image: "/audiences/moving-back.jpg" },
  ];

  return (
    <main className="bg-white">
      {/* --- Hero Section --- */}
      <AudienceHero />

      {/* --- "Who We Help" Grid Section --- */}
      <section className="py-16 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-left max-w-5xl">
            <p className="mt-4 font-worksans text-3xl">
              We provide specialized, high-touch advisory services for a diverse range of clients. Select your profile to learn how we can help you build a smarter financial future.
            </p>
          </div>

          {/* Fully responsive grid */}
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3  gap-x-6 sm:gap-x-8 gap-y-12">
            {services.map((service) => (
              <AudienceCard
                key={service.title}
                title={service.title}
                image={service.image}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
