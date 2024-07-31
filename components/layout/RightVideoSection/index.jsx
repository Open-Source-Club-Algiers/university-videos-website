import Image from "next/image";
import React from "react";

function RightVideoSection({
  title,
  licenceSpecialite = null,
  masterSpecialite = null,
  videoLink = null,
  docLink = null,
  imgLink = null,
}) {
  return (
    <section
      id={title}
      className=" bg-black relative z-0  flex flex-col  justify-center items-center pb-5"
    >
      <div className="flex justify-center items-center w-[100%]">
        <h3 className="font-bold text-[26px] lg:text-[35px] text-white mt-6 mb-6">
          {title}
        </h3>
      </div>
      <div className="p-3  w-full lg:w-[80%] xl:w-[860px] lg:h-[550px] h-[760px]  md:mr-[13%] flex flex-col lg:flex-row justify-center items-center relative">
        <Image
          src={imgLink}
          alt="Background Image"
          layout="fill"
          objectFit="cover"
          className="z-0 filter blur-[4px]"
        />
        <div className="relative z-10 mt-4 lg:mt-0 flex justify-center items-center flex-col">
          <div className="flex flex-col items-start justify-between w-[90%] lg:translate-y-0 translate-y-[-30px]  ">
            {licenceSpecialite && (
              <p
                className={`lg:text-[21px] xl:text-[23px] font-bold ${
                  title === "Department of Computer Science"
                    ? "text-white"
                    : "text-black"
                }`}
              >
                Bachelor&apos;s Degree Specializations
              </p>
            )}

            <ul className="list-disc ml-5">
              {licenceSpecialite &&
                licenceSpecialite.map((specialite, index) => (
                  <li
                    key={index}
                    className={`ml-4  ${
                      title === "Department of Computer Science"
                        ? "text-white"
                        : "text-black"
                    }`}
                  >
                    {specialite}
                  </li>
                ))}
            </ul>
            {licenceSpecialite && masterSpecialite && (
              <hr className="my-4 w-full border-t-2 border-gray-300" />
            )}
            {masterSpecialite && (
              <>
                <p
                  className={`lg:text-[21px] font-bold xl:text-[22px] ${
                    title === "Department of Computer Science"
                      ? "text-white"
                      : "text-black"
                  }`}
                >
                  {" "}
                  Masters&apos;s Degree Specializations
                </p>
              </>
            )}

            <ul className="list-disc ml-5">
              {masterSpecialite &&
                masterSpecialite.map((specialite, index) => (
                  <li
                    key={index}
                    className={` ml-4  ${
                      title === "Department of Computer Science"
                        ? "text-white"
                        : "text-black"
                    }`}
                  >
                    {specialite}
                  </li>
                ))}
            </ul>
          </div>
        </div>
        <a
          target="_blank"
          href={docLink}
          className="lg:hidden block  text-blck px-4 py-2 text-customYellow "
        >
          <img
            className="w-[30px] h-[30px] bg-customYellow rounded-[5px] "
            alt="getFileicon"
            src="/images/fileIcon.png"
          />
          Download leaflet
        </a>
        <div className="lg:translate-x-[20%] xl:translate-x-[20%]  lg:max-h-[370px] h-[285px]     lg:w-[620px]  xl:w-[700px] rounded-[20px] flex justify-center items-center ">
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
            className="hidden lg:block lg:absolute left-0 bottom-[290px] right-0   text-customYellow px-4 py-2 "
          >
            <img
              className="w-[30px] h-[30px] rounded-[5px] bg-customYellow"
              alt="getFileicon"
              src="/images/fileIcon.png"
            />
            Download leaflet
          </a>
        </div>
      </div>
    </section>
  );
}

export default RightVideoSection;
