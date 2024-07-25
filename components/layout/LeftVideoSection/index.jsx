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
      className=" bg-white relative z-0 mt-[130px] md:mt-[70px] flex flex-col justify-center items-center pb-5"
    >
      <div className="flex justify-center items-center w-[100%]">
        <h3 className="font-bold text-[26px] md:text-[35px] mt-6 mb-6">
          {title}
        </h3>
      </div>
      <div className="p-10 bg-black w-[95%] md:w-[80%] xl:w-[65%] md:h-[500px] h-[700px] ml-[13%] ">
        <div className="   h-[30%] md:h-auto md:translate-y-[-60px] translate-y-[-20px] w-[70%] md:w-[45%] rounded-[20px] absolute left-[20%] top-[22%] sm:top-[15%] md:top-auto md:left-[5%] bottom-12 flex justify-center items-center ">
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
        <a
          target="_blank"
          href={docLink}
          className="absolute  top-[130px] left-0   text-white px-4 py-2 "
        >
          <img
            className="w-[30px] h-[30px] rounded-[5px] bg-white"
            alt="getFileicon"
            src="/images/fileIcon.png"
          />
        </a>
        <div className="  relative translate-y-[25%] md:translate-y-0 md:float-right h-full flex justify-center items-center flex-col">
          <div className="flex flex-col items-start justify-between w-[100%] xl:ml-[0%] ml-[20%]">
            {licenceSpecialite && (
              <p className="md:text-[21px] font-bold xl:text-[20px] text-white">
                Bachelor&apos;s Degree Specializations{" "}
              </p>
            )}
            {licenceSpecialite &&
              licenceSpecialite.map((specialite, index) => (
                <div key={index} className="ml-4 mt-1">
                  <p className=" text-white">{specialite}</p>
                </div>
              ))}
            {licenceSpecialite && masterSpecialite && (
              <hr className="my-4 w-full border-t-2 border-gray-300" />
            )}
            {masterSpecialite && (
              <p className="md:text-[21px] font-bold   xl:text-[20px] text-white">
                Masters&apos;s Degree Specializations{" "}
              </p>
            )}
            {masterSpecialite &&
              masterSpecialite.map((specialite, index) => (
                <div key={index} className="ml-4 mt-1">
                  <p className=" text-white">{specialite}</p>
                </div>
              ))}{" "}
          </div>
        </div>
      </div>
    </section>
  );
}

export default LeftVideoSection;
