import Image from "next/image";
import React from "react";

function RightVideoSection({
  title,
  licenceSpecialite = null,
  masterSpecialite = null,
  videoLink = null,
}) {
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
      <div className="p-10 bg-white w-[95%] md:w-[80%] xl:w-[65%] md:h-[500px] h-[1250px]  mr-[13%] ">
        <div className=" bg-customGrey sm:h-[60%] h-[40%] md:h-[70%] w-[70%] md:w-[45%] rounded-[20px] absolute right-[20%] top-[22%] sm:top-[15%] md:top-auto md:right-[5%] bottom-12 flex justify-center items-center ">
          <video
            width="100%"
            height="100%"
            className="h-full w-full object-cover rounded-[20px]"
            controls
          >
            <source src={videoLink} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="  relative translate-y-[40%] md:translate-y-0 md:float-left h-full flex justify-center items-center flex-col">
          <div className="flex flex-col items-start justify-between w-[90%] md:translate-y-0 translate-y-[-30px]  ">
            {licenceSpecialite && (
              <p className="md:text-[21px] xl:text-[27px] font-bold text-black">
                Bachelor&apos;s Degree Specializations{" "}
              </p>
            )}

            {licenceSpecialite &&
              licenceSpecialite.map((specialite, index) => (
                <div key={index} className="ml-3">
                  <p className=" text-black">{specialite}</p>
                </div>
              ))}
            {masterSpecialite && (
              <p className="md:text-[21px] font-bold xl:text-[27px] text-black">
                Masters&apos;s Degree Specializations{" "}
              </p>
            )}

            {masterSpecialite &&
              masterSpecialite.map((specialite, index) => (
                <div key={index} className="ml-3">
                  <p className=" text-black">{specialite}</p>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default RightVideoSection;
