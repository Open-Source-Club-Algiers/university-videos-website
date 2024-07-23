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
        title={"Département Architecture"}
        filiere={"architecture"}
        Specialite={"Architecture"}
        videoLink={
          "https://firebasestorage.googleapis.com/v0/b/universityvideos-b5351.appspot.com/o/archiVideo.mp4?alt=media&token=5dcbc949-d4e9-4d92-931a-61f692be87d5"
        }
      />
      <RightVideoSection
        title={"Département Informatique"}
        filiere={"informatique"}
        Specialite={"informatique"}
        videoLink={
          "https://firebasestorage.googleapis.com/v0/b/universityvideos-b5351.appspot.com/o/csVideo.mp4?alt=media&token=b2fbdf63-9d73-4888-b86c-0ea645e3213d"
        }
      />
      <LeftVideoSection
        title={"Département Sciences de Matière"}
        filiere={"Département Sciences de Matière"}
        Specialite={"Département Sciences de Matière"}
        videoLink={
          "https://firebasestorage.googleapis.com/v0/b/universityvideos-b5351.appspot.com/o/smVideo.mp4?alt=media&token=013de706-731c-4ebc-a64b-827cd03f6e12"
        }
      />
      <RightVideoSection
        title={"Département Mathématique"}
        filiere={"Département Mathématique"}
        Specialite={"Département Mathématique"}
        videoLink={
          "https://firebasestorage.googleapis.com/v0/b/universityvideos-b5351.appspot.com/o/mathVideo.mp4?alt=media&token=40dfdfd3-5655-4061-8511-d19d93de80e9"
        }
      />
      <LeftVideoSection
        title={"Département Sciences de la Nature et de la Vie"}
        filiere={"snv"}
        Specialite={"snv"}
        videoLink={
          "https://firebasestorage.googleapis.com/v0/b/universityvideos-b5351.appspot.com/o/snvVideo.mp4?alt=media&token=35889916-d94f-4c70-99dd-65a8ba5ec49c"
        }
      />
      <FooterSection />
    </>
  );
}
