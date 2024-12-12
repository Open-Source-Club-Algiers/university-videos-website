import React from "react";
import Image from "next/image";

function HeroSection() {
  return (
    <section className="relative flex flex-col justify-between items-center w-full h-screen bg-gray-900 text-white">
      <div className="absolute inset-0">
        <Image
          src="/images/Hero.jpg"
          alt="Hero-Image"
          layout="fill"
          objectFit="cover"
          className="z-0 filter blur-[1px]"
          aria-label="Hero Section Image"
        />
      </div>

      <div className="relative z-10 flex items-center justify-between w-[90%] p-4 border-b border-white">
        <div className="flex items-center space-x-4">
          <div className="flex items-center justify-center max-h-[133px] max-w-[133px] rounded-full bg-transparent">
            <a href="http://sciences.univ-alger.dz/" target="_blank">
              <img
                src="/images/facLogo.jpg"
                alt="Logo"
                className="rounded-full"
              />
            </a>
          </div>
          <h4 className="text-lg font-semibold text-white">
            Faculty of sciences <br /> University of Algires 1
          </h4>
        </div>
      </div>
      <div className=" w-[90%] font-oleo font-bold text-60px md:text-80px z-10">
        Welcome to the Faculty of Sciences University of Algiers 1
      </div>
    </section>
  );
}

export default HeroSection;
