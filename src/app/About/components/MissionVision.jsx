import { EyeIcon, RocketLaunchIcon } from "@heroicons/react/24/solid";

// A reusable card component for Mission and Vision
const InfoCard = ({ icon: Icon, title, text }) => {
  return (
    <div className="rounded-2xl bg-indigo-50 p-6 sm:p-8 md:p-12 h-full">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        
        {/* Left Column: Icon + Title */}
        <div className="md:col-span-1 flex flex-col gap-4 md:pr-6 md:border-r md:border-gray-300">
          <div className="flex h-16 w-16 md:h-20 md:w-20 items-center justify-center rounded-xl bg-gray-900 text-white">
            <Icon className="h-8 w-8 md:h-10 md:w-10" />
          </div>
          <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-worksans font-light text-gray-900 leading-tight">
            {title}
          </h3>
        </div>

        {/* Right Column: Text */}
        <div className="md:col-span-2 flex flex-col gap-4 body text-base sm:text-lg md:text-base lg:text-lg text-gray-700 md:pl-6">
          {text.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>

      </div>
    </div>
  );
};

// The main section component
const MissionVision = () => {
  const missionText = [
    "We deliver trusted, client-focused tax and financial solutions that simplify compliance and create real value for individuals and businesses. Our ethical, data-driven approach helps clients minimize risk and seize opportunities globally."
  ];

  const visionText = [
    "We aim to be a global leader in taxation and financial advisory, empowering individuals and businesses worldwide with simple, ethical, and future-ready financial solutions."
  ];

  return (
    <section className="bg-gray-50 py-12 sm:py-16 md:py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        
        {/* Tagline aligned to start */}
        <div className="text-left max-w-3xl">
          <h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-worksans font-light text-gray-900 leading-snug">
            Our Vision and Mission
          </h2>
        </div>

        <div className="mt-12 sm:mt-16 grid grid-cols-1 gap-8">
          <InfoCard icon={EyeIcon} title="Our Mission" text={missionText} />
          <InfoCard icon={RocketLaunchIcon} title="Our Vision" text={visionText} />
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
