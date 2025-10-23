import { Button } from "./ui/button";

export const HeroSection = () => {
  return (
    <section
      className="relative min-h-screen w-full bg-cover bg-center"
      style={{ backgroundImage: "url(hero.jpg)" }}
    >
    {/* 🔆 Subtle gradient overlay */}
<div className="absolute inset-0 bg-gradient-to-r from-white/80 to-white/5 backdrop-blur-[1px]"></div>


      {/* Hero Content */}
      <div className="relative  max-w-7xl ">
        <div className="relative z-50 pt-52 sm:pt-56">
          {/* 🧊 Glass box with asymmetric rounded corners */}
          <div className="max-w-3xl bg-white/40 px-16 py-12 backdrop-blur-lg rounded-r-[6rem]  border-[3px] border-white/30 rounded-l-none">

            <h1 className="mt-4 text-4xl heading-font tracking-wide text-[#1a1a1a] sm:text-6xl">
              Fourgenix Partners is a U.S.-based tax and advisory.
            </h1>

            <div className="mt-10">
              <Button variant="dark">Read More</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
