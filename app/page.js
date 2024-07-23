//* here call all the components of the website, NEVER USE "use client" here and try to not use it as much as possible

import LeftVideoSection from "@/components/layout/LeftVideoSection";
import HeroSection from "@/components/layout/HeroSection";
import PresentationSection from "@/components/layout/PresentationSection";
import RightVideoSection from "@/components/layout/RightVideoSection";
import FooterSection from "@/components/layout/FooterSection";
import ClientComponent from "@/components/layout/ClientComponent";

export default function Home() {


  return <div className="flex flex-col">
    <ClientComponent />
  </div>;
}
