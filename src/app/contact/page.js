import ContactHero from "./components/ContactHero";
import ContactForm from "./components/ContactForm";
import ContactDetails from "./components/ContactDetails";
import Map from "./components/Maps";

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#DCDEFF] text-foreground">
      \{/* 1. Hero Section */}
      <ContactHero />
      {/* 2. Main Content Area (2-column grid) */}
     <section className="w-full bg-gray-50 px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24 py-12 sm:py-16 lg:py-24">
  <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-16 items-start">
    <ContactDetails />
    <ContactForm />
  </div>
</section>

      <Map />
   </div>  );
}
