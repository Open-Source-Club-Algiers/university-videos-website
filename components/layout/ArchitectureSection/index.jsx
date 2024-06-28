import Image from "next/image";
import React from "react";

function ArchitectureSection() {
  return (
    <section className=" bg-white relative z-0 mt-[130px] md:mt-[70px] flex flex-col justify-center items-center pb-5">
      <div className="flex justify-center items-center w-[100%]">
        <h3 className="font-bold text-[26px] md:text-[35px] mt-6 mb-6">
          {" "}
          Département Architecture
        </h3>
      </div>
      <div className="p-10 bg-black w-[95%] md:w-[80%] xl:w-[65%] h-[498px] ml-[13%] ">
        <div className=" bg-customGrey sm:h-[60%] h-[50%] md:h-[70%] w-[70%] md:w-[40%] rounded-[20px] absolute left-[20%] top-[22%] sm:top-[15%] md:top-auto md:left-[5%] bottom-12 flex justify-center items-center ">
          <Image
            width={60}
            height={60}
            alt="run-icon"
            src="/images/gravity-ui_triangle-right.png"
          />
        </div>
        <div className="  relative translate-y-[40%] md:translate-y-0 md:float-right h-full flex justify-center items-center flex-col">
          <p className="md:text-[21px] xl:text-[27px] text-white">
            Carte des formations en Licence
          </p>
          <div className="flex flex-col items-start justify-between w-[90%]">
            <div className="w-[100%] flex flex-row items-start justify-around">
              <p className="">Filière</p>
              <p>Spécialité</p>
            </div>
            <div className=" w-[100%] flex flex-row items-center justify-around">
              <p>Architecture</p>
              <p>Architecture</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ArchitectureSection;
