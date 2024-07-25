import Image from "next/image";
import React from "react";

function PresentationSection() {
  return (
    <section className=" bg-white relative z-0 h-full">
      <div className="bg-customBlue w-[90%] h-[152px] z-10 relative flex flex-row items-center md:justify-start justify-center md:pl-[10%]">
        <div>
          <h1 className="text-white font-bold md:text-[30px] text-[20px]">
            Dean of the Faculty
          </h1>
          <h1 className="text-white md:text-[30px] text-[20px]">
            Dr. MAHDJOUB Mohamed Malik
          </h1>
        </div>{" "}
      </div>

      <div className="bg-black  w-[90%] h-[640px] float-end z-20 translate-y-[-75px]">
        <div className=" flex justify-center items-center bg-customGrey w-[84%] h-[74%] absolute z-20 bottom-0 left-0 ml-14 translate-y-[-75px] rounded-[30px]">
          <video
            width="100%"
            height="100%"
            className="h-full w-full object-cover rounded-[20px]"
            controls
          >
            <source
              src={
                "https://firebasestorage.googleapis.com/v0/b/universityvideos-b5351.appspot.com/o/deanvideo.mp4?alt=media&token=ecd1ce7d-0d4a-4715-9e75-a2c950cb61d1"
              }
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
      <div className="w-[100%] flex flex-col md:flex-row-reverse justify-around items-center">
        <div className="w-[100%] flex flex-col md:flex-row-reverse justify-around items-center">
          <div className="flex flex-col justify-around p-14 items-center w-[90%] md:w-[70%] h-[390px]">
            <a
              href="#Departement of Architecture"
              className="bg-customGrey w-[95%] min-h-8 rounded-[10px] text-center hover:bg-orange-500"
            >
              Département Architecture
            </a>
            <a
              href="#Department of Computer Science"
              className="bg-customGrey w-[95%] min-h-8 rounded-[10px] text-center hover:bg-orange-500"
            >
              Département Informatique
            </a>
            <a
              href="#Department of Material Sciences"
              className="bg-customGrey w-[95%] min-h-8 rounded-[10px] text-center hover:bg-orange-500"
            >
              Département Sciences de Matière
            </a>
            <a
              href="#Department of Mathematics"
              className="bg-customGrey w-[95%] min-h-8 rounded-[10px] text-center hover:bg-orange-500"
            >
              Département Mathematics
            </a>
            <a
              href="#Departement of Natural & Life Science"
              className="bg-customGrey w-[95%] min-h-8 rounded-[10px] text-center hover:bg-orange-500"
            >
              Département Sciences de la Nature et de la Vie
            </a>
          </div>
        </div>
        <div className="flex  justify-center items-center bg-customGrey w-[70%] md:w-[55%] md:h-[569px] h-[400px]  ml-3 relative z-20 bottom-0 rounded-[30px]">
          <img
            alt="triangle"
            className="w-full h-full rounded-[30px]"
            src={"/images/facLogo.jpg"}
          />
        </div>
      </div>
      <div className="w-[100%] h-[250px] bg-customBlue z-0 absolute md:bottom-[-100px] bottom-[-150px] left-0 ">
        <div className="absolute right-[10%] bottom-9 text-start text-white text-inter font-medium text-[12px] md:text-[15px] xl:text-[25px]">
          THE FACULTY OF SCIENCES IS PARTICULARLY <br />
          RESPONSIBLE FOR THE PROMOTION OF:
          <ul className="list-disc list-inside">
            <li>Fundamental sciences</li>
            <li>Support for development and social promotion</li>
            <li>Creation of a research platform</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default PresentationSection;
