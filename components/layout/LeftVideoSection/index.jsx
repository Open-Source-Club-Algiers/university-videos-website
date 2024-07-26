import Image from "next/image";
import React from "react";

function LeftVideoSection({
  title,
  masterSpecialite = null,
  licenceSpecialite = null,
  videoLink = null,
  docLink = null,
}) {
  return (
    <section
      id={title}
      className=" bg-white relative z-0 mt-[130px] lg:mt-[70px] flex flex-col justify-center items-center pb-5"
    >
      <div className="flex justify-center items-center w-[90%]">
        <h3 className="font-bold text-[26px] lg:text-[35px] mt-6 mb-6">
          {title}
        </h3>
      </div>
      <div className="p-3 bg-black w-[95%] lg:w-[90%] xl:w-[930px] lg:h-[550px] h-[760px]  mr-[13%] flex flex-col lg:flex-row justify-center items-center  ">
        <div className="xl:translate-x-[-18%]  lg:translate-x-[-1%]  lg:max-h-[370px] h-[285px]    translate-y-[-20px]  lg:w-[520px]  xl:w-[700px] rounded-[20px]  flex justify-center items-center ">
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
            className="hidden lg:block lg:absolute  bottom-[290px] right-0   text-white px-4 py-2 "
          >
            <img
              className="w-[30px] h-[30px] rounded-[5px] bg-white"
              alt="getFileicon"
              src="/images/fileIcon.png"
            />
            Download leaflet
          </a>
        </div>
        <a
          target="_blank"
          href={docLink}
          className="lg:hidden block  text-white px-4 py-2 "
        >
          <img
            className="w-[30px] h-[30px] rounded-[5px] bg-white"
            alt="getFileicon"
            src="/images/fileIcon.png"
          />
          Download leaflet
        </a>

        <div className="  relative  lg:translate-y-[50px] lg:float-right flex justify-center items-center flex-col">
          <div className="flex flex-col items-start justify-between w-[100%] xl:ml-[0%] ml-[20%]">
            {licenceSpecialite && (
              <p className="lg:text-[21px] font-bold xl:text-[20px] text-white">
                Bachelor&apos;s Degree Specializations{" "}
              </p>
            )}
            <ul className="list-disc ml-5">
              {licenceSpecialite &&
                licenceSpecialite.map((specialite, index) => (
                  <li key={index} className="ml-4 mt-1 text-white">
                    {specialite}
                  </li>
                ))}
            </ul>
            {licenceSpecialite && masterSpecialite && (
              <hr className="my-4 w-full border-t-2 border-gray-300" />
            )}
            {masterSpecialite && (
              <p className="lg:text-[21px] font-bold   xl:text-[20px] text-white">
                Masters&apos;s Degree Specializations{" "}
              </p>
            )}{" "}
            <ul className="list-disc ml-5">
              {masterSpecialite &&
                masterSpecialite.map((specialite, index) => (
                  <li key={index} className="ml-4 mt-1 text-white">
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

export default LeftVideoSection;
