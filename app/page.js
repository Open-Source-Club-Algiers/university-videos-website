//* here call all the components of the website, NEVER USE "use client" here and try to not use it as much as possible

import ArchitectureSection from "@/components/layout/ArchitectureSection";
import HeroSection from "@/components/layout/HeroSection";
import InformatiqueSection from "@/components/layout/InformatiqueSection";
import PresentationSection from "@/components/layout/PresentationSection";

export default function Home() {
  return <div className="flex flex-col"><HeroSection />
    <PresentationSection />
    <ArchitectureSection />
    <InformatiqueSection /></div>;
}
