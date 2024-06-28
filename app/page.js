//* here call all the components of the website, NEVER USE "use client" here and try to not use it as much as possible

import LeftVideoSection from "@/components/layout/LeftVideoSection";
import HeroSection from "@/components/layout/HeroSection";
import PresentationSection from "@/components/layout/PresentationSection";
import RightVideoSection from "@/components/layout/RightVideoSection";

export default function Home() {
  return <div className="flex flex-col"><HeroSection />
    <PresentationSection />
    <LeftVideoSection title={"Département Architecture"} filiere={"architecture"} Specialite={"Architecture"} />
    <RightVideoSection title={"Département Informatique"} filiere={"informatique"} Specialite={"informatique"} />


  </div>;
}
