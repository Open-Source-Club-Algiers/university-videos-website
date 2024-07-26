import Image from "next/image";
import React from "react";

function RightVideoSection({
  title,
  licenceSpecialite = null,
  masterSpecialite = null,
  videoLink = null,
  docLink = null,
}) {
  return (
    <section
      id={title}
      className=" bg-black relative z-0  flex flex-col justify-center items-center pb-5"
    >
      <div className="flex justify-center items-center w-[100%]">
        <h3 className="font-bold text-[26px] lg:text-[35px] text-white mt-6 mb-6">
          {title}
        </h3>
      </div>
      <div className="p-10 bg-white w-[95%] lg:w-[80%] xl:w-[65%] lg:h-[450px] h-[750px]  mr-[13%] ">
        <div className=" bg-customGrey  h-[30%] lg:h-[310px] w-[70%] lg:w-[500px] rounded-[20px] absolute right-[20%] top-[22%] sm:top-[15%] lg:top-auto lg:right-[5%] bottom-12 flex justify-center items-center lg:translate-y-[-50px]">
          <video
            width="100%"
            height="100%"
            className="h-full w-full object-cover rounded-[20px]"
            controls
          >
            <source src={videoLink} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <a
            target="_blank"
            href={docLink}
            className="absolute  text-black lg:bottom-[300px] bottom-[270px] right-[0]  lg:left-0    px-4 py-2 "
          >
            <img
              className="w-[30px] h-[30px] rounded-[5px] bg-white"
              alt="getFileicon"
              src="/images/fileIcon.png"
            />
            Download leaflet
          </a>
        </div>

        <div className="  relative translate-y-[30%] lg:translate-y-0 lg:float-left h-full flex justify-center items-center flex-col">
          <div className="flex flex-col items-start justify-between w-[90%] lg:translate-y-0 translate-y-[-30px]  ">
            {licenceSpecialite && (
              <p className="lg:text-[21px] xl:text-[23px] font-bold text-black">
                Bachelor&apos;s Degree Specializations
              </p>
            )}

            <ul className="list-disc ml-5">
              {licenceSpecialite &&
                licenceSpecialite.map((specialite, index) => (
                  <li key={index} className="ml-4  text-black">
                    {specialite}
                  </li>
                ))}
            </ul>
            {licenceSpecialite && masterSpecialite && (
              <hr className="my-4 w-full border-t-2 border-gray-300" />
            )}
            {masterSpecialite && (
              <>
                <p className="lg:text-[21px] font-bold xl:text-[22px] text-black">
                  Masters&apos;s Degree Specializations
                </p>
              </>
            )}

            <ul className="list-disc ml-5">
              {masterSpecialite &&
                masterSpecialite.map((specialite, index) => (
                  <li key={index} className="ml-4  text-black">
                    {specialite}
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RightVideoSection;
