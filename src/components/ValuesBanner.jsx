import Image from "next/image";

export const ValuesBanner = () => {
  return (
   <section className="hidden sm:block relative overflow-hidden bg-purple-50">
      {/* Top Gradient Border */}
      <div className="h-1 w-full bg-gradient-to-r from-orange-400 via-pink-500 to-blue-600" />

      {/* Background Sheen */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,white,transparent_70%)]" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
        {/* Force 2 columns even on mobile */}
        <div className="grid grid-cols-2 items-center gap-4 sm:gap-6 lg:gap-8">
          {/* Left Column: Image */}
          <div className="flex justify-center lg:justify-start">
            <Image
              src="/valuesbanner.png"
              alt="Our Values abstract graphic"
              width={600}
              height={400}
              className="w-[120px] h-[80px] sm:w-[180px] sm:h-[120px] md:w-[240px] md:h-[160px] lg:w-auto lg:h-auto object-contain -ml-2 sm:-ml-4 lg:-ml-20"
            />
          </div>

          {/* Right Column: Text */}
          <div className="flex flex-col text-center lg:text-left">
            <h2 className="text-[20px] leading-[30px] sm:text-3xl sm:leading-snug md:text-4xl md:leading-tight font-semibold text-gray-900">
              Tailored Solutions
            </h2>
            <p className="mt-1 text-[10px] leading-[14px] sm:text-[13px] sm:leading-[20px] md:text-xl md:leading-7 font-light text-gray-800">
              "Every client is unique, and our tax strategies and advisory
              services reflect that individuality."
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Gradient Border */}
      <div className="h-1 w-full bg-gradient-to-r from-orange-400 via-pink-500 to-blue-600" />
    </section>
  );
};
