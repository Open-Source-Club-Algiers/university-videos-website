"use client";

import HeroSection from "./HeroSection";
import PresentationSection from "./PresentationSection";
import LeftVideoSection from "./LeftVideoSection";
import FooterSection from "./FooterSection";
import RightVideoSection from "./RightVideoSection";

export default function ClientComponent() {
  return (
    <>
      <HeroSection />
      <PresentationSection />
      <LeftVideoSection
        title={"Departement of Architecture"}
        licenceSpecialite={[
          "Urban Habitats and Policies",
          " Architecture, Environment, and New Technology",
          "Architectural and Urban Heritage",
        ]}
        videoLink={
          "https://firebasestorage.googleapis.com/v0/b/universityvideos-b5351.appspot.com/o/archiVideo.mp4?alt=media&token=5dcbc949-d4e9-4d92-931a-61f692be87d5"
        }
      />
      <RightVideoSection
        title={"Department of Computer Science"}
        licenceSpecialite={[
          "Computer Systems ",
          " Information Systems and software engineering ",
        ]}
        masterSpecialite={[
          "Intelligent Computer Systems Engineering",
          "Data Science Analysis",
          "Networks and Embedded Systems",
        ]}
        videoLink={
          "https://firebasestorage.googleapis.com/v0/b/universityvideos-b5351.appspot.com/o/csVideo.mp4?alt=media&token=b2fbdf63-9d73-4888-b86c-0ea645e3213d"
        }
      />
      <LeftVideoSection
        title={"Department of Mathematics"}
        licenceSpecialite={["Fundamental Mathematics", " Applied Mathematics "]}
        masterSpecialite={[
          " Mathematical Analysis and Applications",
          "Operations Research",
        ]}
        videoLink={
          "https://firebasestorage.googleapis.com/v0/b/universityvideos-b5351.appspot.com/o/WhatsApp%20Video%202024-07-24%20at%2018.44.06_d46f7c17.mp4?alt=media&token=a086ea10-4319-4c40-bf41-d4e715e2ba7c"
        }
      />
      <RightVideoSection
        title={"Departement of Natural & Life Science"}
        licenceSpecialite={[
          "Ecology & Environnement",
          " Biochemistry ",
          "Microbiology",
          "Biotechnology & Health",
          "Food Quality, Safety, and Technology",
        ]}
        masterSpecialite={[
          "  Biodiversity & Environnement",
          "Applied Biochemistry",
          " Applied Microbilology",
          "Biotechnology & Molecular Pathology",
          "Biostatistics",
        ]}
        videoLink={
          "https://firebasestorage.googleapis.com/v0/b/universityvideos-b5351.appspot.com/o/snvVideo.mp4?alt=media&token=35889916-d94f-4c70-99dd-65a8ba5ec49c"
        }
      />
      <LeftVideoSection
        title={"Department of Material Sciences"}
        licenceSpecialite={[
          "Pharmaceutical Chemistry",
          " Analytical Chemistry",
          " Pharmaceutical chemistry",
          "Energy Physics",
          "Fundamental Physics",
        ]}
        masterSpecialite={[
          " Analytical chemistry",
          " Pharmaceutical chemistry",
          " Applied physics",
          "Energy physics and renewable energies",
        ]}
        videoLink={
          "https://firebasestorage.googleapis.com/v0/b/universityvideos-b5351.appspot.com/o/smVideo.mp4?alt=media&token=013de706-731c-4ebc-a64b-827cd03f6e12"
        }
      />
      <FooterSection />
    </>
  );
}
