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

      <div className="relative z-10 flex items-center justify-between w-[90%] p-4 border-b border-black">
        <div className="flex items-center space-x-4">
          <div className="flex items-center justify-center h-14 w-14 rounded-full bg-black">
            {/* <Image
              src="/images/logo.png"
              alt="Logo"
              width={57}
              height={52}
              className="rounded-full"
            /> */}
          </div>
          <h4 className="text-lg font-normal text-black">
            Université d’Alger 1 <br /> Faculté des sciences
          </h4>
        </div>
        <button className="p-2rounded-md hover:bg-gray-200">
          <Image
            width={44}
            height={44}
            src="/images/gravity-ui_bars.png"
            className="h-6 w-6 text-gray-900"
          />
        </button>
      </div>
      <div className="w-[90%] font-oleo font-bold text-60px md:text-80px z-10">
        Welcome to the Faculty of Sciences University of Algiers 1
      </div>
    </section>
  );
}

export default HeroSection;
