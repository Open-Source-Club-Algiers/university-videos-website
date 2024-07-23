import Image from "next/image";
import React from "react";

function LeftVideoSection({ title, filiere, Specialite, videoLink = null }) {
  return (
    <section
      id={title}
      className=" bg-white relative z-0 mt-[130px] md:mt-[70px] flex flex-col justify-center items-center pb-5"
    >
      <div className="flex justify-center items-center w-[100%]">
        <h3 className="font-bold text-[26px] md:text-[35px] mt-6 mb-6">
          {title}
        </h3>
      </div>
      <div className="p-10 bg-black w-[95%] md:w-[80%] xl:w-[65%] h-[498px] ml-[13%] ">
        <div className=" bg-customGrey sm:h-[60%] h-[50%] md:h-[70%] w-[70%] md:w-[45%] rounded-[20px] absolute left-[20%] top-[22%] sm:top-[15%] md:top-auto md:left-[5%] bottom-12 flex justify-center items-center ">
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
        <div className="  relative translate-y-[40%] md:translate-y-0 md:float-right h-full flex justify-center items-center flex-col">
          <p className="md:text-[21px] xl:text-[27px] text-white">
            Carte des formations en Licence
          </p>
          <div className="flex flex-col items-start justify-between w-[90%]">
            <div className="w-[100%] flex flex-row items-start justify-around">
              <p className=" text-white">Filière</p>
              <p className=" text-white">Spécialité</p>
            </div>
            <div className=" w-[100%] flex flex-row items-center justify-around">
              {/* <p className=" text-white">{filiere}</p>
              <p className=" text-white">{Specialite}</p> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LeftVideoSection;
