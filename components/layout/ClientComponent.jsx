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
        docLink={
          "https://firebasestorage.googleapis.com/v0/b/universityvideos-b5351.appspot.com/o/d%C3%A9pliant%20Architecture%202024.pdf?alt=media&token=6a141ff0-0718-400e-a283-6f2cd745d8ef"
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
        docLink={
          "https://firebasestorage.googleapis.com/v0/b/universityvideos-b5351.appspot.com/o/Brochure%20departement%20informatique%20image%20(1).pdf?alt=media&token=ef6bfca7-87bc-4135-868c-9f3299b40ad7"
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
        docLink={
          "https://firebasestorage.googleapis.com/v0/b/universityvideos-b5351.appspot.com/o/D%C3%A9pliant_Math_ang_final1.pdf?alt=media&token=7be7724f-d45c-4583-9366-7494b0315222"
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
        docLink={
          "https://firebasestorage.googleapis.com/v0/b/universityvideos-b5351.appspot.com/o/D%C3%A9pliant%20ALGER%201-%20S.N.V.%202022-%202023%20-%20JPO%20Final%20(1).pdf?alt=media&token=404c9ea5-ca42-4957-a995-09798630e7f7"
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
          "https://firebasestorage.googleapis.com/v0/b/universityvideos-b5351.appspot.com/o/IMG_7735.MP4?alt=media&token=7f0fef0a-9827-4b4c-a58b-367d08d0b118"
        }
        docLink={
          "https://firebasestorage.googleapis.com/v0/b/universityvideos-b5351.appspot.com/o/D%C3%A9pliant___D%C3%A9partement%20SM%20(1).pdf?alt=media&token=9ec23614-f405-465d-93f0-2438c097f58d"
        }
      />
      <FooterSection />
    </>
  );
}
