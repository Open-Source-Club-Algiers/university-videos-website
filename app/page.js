//* here call all the components of the website, NEVER USE "use client" here and try to not use it as much as possible

import HeroSection from "@/components/layout/HeroSection";
import PresentationSection from "@/components/layout/PresentationSection";

export default function Home() {
  return <div><HeroSection />
    <PresentationSection /></div>;
}
