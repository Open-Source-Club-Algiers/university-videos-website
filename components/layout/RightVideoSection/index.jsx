import Image from "next/image";
import React from "react";

function RightVideoSection({ title, filiere, Specialite, videoLink = null }) {
  return (
    <section
      id={title}
      className=" bg-black relative z-0  flex flex-col justify-center items-center pb-5"
    >
      <div className="flex justify-center items-center w-[100%]">
        <h3 className="font-bold text-[26px] md:text-[35px] text-white mt-6 mb-6">
          {title}
        </h3>
      </div>
      <div className="p-10 bg-white w-[95%] md:w-[80%] xl:w-[65%] h-[498px] mr-[13%] ">
        <div className=" bg-customGrey sm:h-[60%] h-[50%] md:h-[70%] w-[70%] md:w-[40%] rounded-[20px] absolute right-[20%] top-[22%] sm:top-[15%] md:top-auto md:right-[5%] bottom-12 flex justify-center items-center ">
          {videoLink ? (
            <video
              width="100%"
              height="100%"
              className="h-full w-full object-cover rounded-[20px]"
              controls
            >
              <source src={videoLink} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ) : (
            <Image
              width={60}
              height={60}
              alt="run-icon"
              src="/images/gravity-ui_triangle-right.png"
            />
          )}
        </div>
        <div className="  relative translate-y-[40%] md:translate-y-0 md:float-left h-full flex justify-center items-center flex-col">
          <p className="md:text-[21px] xl:text-[27px] text-black">
            Carte des formations en Licence
          </p>
          <div className="flex flex-col items-start justify-between w-[90%]">
            <div className="w-[100%] flex flex-row items-start justify-around">
              <p>Filière</p>
              <p>Spécialité</p>
            </div>
            <div className=" w-[100%] flex flex-row items-center justify-around">
              <p>{filiere}</p>
              <p>{Specialite}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RightVideoSection;
