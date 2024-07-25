import React from "react";
import Image from "next/image";

function HeroSection() {
  return (
    <section className="relative flex flex-col justify-between  items-center w-full h-screen bg-gray-900 text-white">
      <div className="absolute inset-0">
        <Image
          src="/images/Hero.png"
          alt="Hero-Image"
          layout="fill"
          objectFit="cover"
          className="z-0"
          aria-label="Hero Section Image"
        />
      </div>

      <div className="relative z-10 flex items-center justify-between w-[90%] p-4 border-b border-white">
        <div className="flex items-center space-x-4">
          <div className="flex items-center justify-center max-h-[133px] max-w-[133px] rounded-full bg-transparent">
            <img
              src="/images/facLogo.jpg"
              alt="Logo"
              className="rounded-full"
            />
          </div>
          <h4 className="text-lg font-normal text-white">
            Université d’Alger 1 <br /> Faculté des sciences
          </h4>
        </div>
      </div>
      <div className="w-[90%] font-oleo font-bold text-60px md:text-80px z-10">
        Welcome to the Faculty of Sciences University of Algiers 1
      </div>
    </section>
  );
}

export default HeroSection;
