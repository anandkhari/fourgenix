import Image from 'next/image';

export const ValuesBanner = () => {
  return (
    <section className="relative overflow-hidden bg-purple-50">
      {/* Top Gradient Border */}
      <div className="h-1 w-full bg-gradient-to-r from-orange-400 via-pink-500 to-blue-600" />

      {/* Background Sheen */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,white,transparent_70%)]" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-8xl px-6 lg:px-8"> 
        {/* ↓ reduced py from 24/32 to 10 for smaller height */}
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2">
          
          {/* Left Column: Image */}
        <div className="flex justify-center lg:justify-start">
  <Image
    src="/valuesbanner.png"
    alt="Our Values abstract graphic"
    width={600}
    height={400}
    className="max-w-none -ml-8 lg:-ml-20 h-[180px] w-auto object-contain"
  />
</div>


          {/* Right Column: Text */}
          <div className="flex flex-col">
            <h2 className="text-3xl font-semibold text-gray-900 sm:text-4xl">
              Our Values
            </h2>
            <p className="mt-3 text-lg font-light text-gray-800">
              We are passionate about nurturing the leaders of the future.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};
