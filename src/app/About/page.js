"use client";

import AboutHero from "./components/AboutHero";
import AboutStory from "./components/AboutStory";
import MissionVision from "./components/MissionVision";
import CoreValues from "./components/CoreValues";
import GlobalPresence from "./components/GlobalPresence";
import CtaSection from "./components/CtaSection";

export default function AboutPage() {
  return (
    <main className="bg-white">
      <AboutHero />
      <AboutStory />
      <MissionVision />
 
    </main>
  );
}

  