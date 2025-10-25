import { Button } from "./ui/button";

export const HeroSection = () => {
  return (
<section
  className="relative max-h-screen md:min-h-screen w-full mt-15 md:mt-0 bg-[length:200%_auto] mb-20 md:mb-0 sm:bg-cover bg-center bg-no-repeat"
  style={{ backgroundImage: "url(hero.jpg)" }}
>

      {/* 🔆 Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/80 to-white/5 backdrop-blur-[1px]"></div>

      {/* Hero Content */}
     <div className="relative max-w-7xl mr-10 ">
  <div className="relative z-50  pt-72 sm:pt-56 md:pt-64">
    {/* 🧊 Glass box with asymmetric rounded corners */}
    <div
      className="
        max-w-3xl 
        bg-white/60 
        backdrop-blur-md 
        border border-white/30 
        
        /* Mobile defaults */
        px-6 py-4  rounded-xl 

        /* Larger screens (desktop) */
        md:px-16 md:py-12 
        md:rounded-r-[6rem] md:rounded-l-none
      "
    >
      <h1 className="mt-4 text-3xl sm:text-4xl md:text-6xl tracking-wide text-[#1a1a1a] leading-tight">
        Fourgenix Partners is a U.S.-based tax and advisory.
      </h1>

      <div className="mt-6 -mb-10 md:mt-10">
        <Button variant="dark">Read More</Button>
      </div>
    </div>
  </div>
</div>

    </section>
  );
};
