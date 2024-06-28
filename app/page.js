//* here call all the components of the website, NEVER USE "use client" here and try to not use it as much as possible

import LeftVideoSection from "@/components/layout/LeftVideoSection";
import HeroSection from "@/components/layout/HeroSection";
import PresentationSection from "@/components/layout/PresentationSection";
import RightVideoSection from "@/components/layout/RightVideoSection";
import FooterSection from "@/components/layout/FooterSection";

export default function Home() {
  return <div className="flex flex-col"><HeroSection />
    <PresentationSection />
    <LeftVideoSection title={"Département Architecture"} filiere={"architecture"} Specialite={"Architecture"} />
    <RightVideoSection title={"Département Informatique"} filiere={"informatique"} Specialite={"informatique"} />
    <LeftVideoSection title={"Département Sciences de Matière"} filiere={"Département Sciences de Matière"} Specialite={"Département Sciences de Matière"} />
    <RightVideoSection title={"Département Mathématique"} filiere={"Département Mathématique"} Specialite={"Département Mathématique"} />
    <LeftVideoSection title={"Département Sciences de la Nature et de la Vie"} filiere={"snv"} Specialite={"snv"} />
    <FooterSection />

  </div>;
}
