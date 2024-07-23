import Image from "next/image";
import React from "react";

function PresentationSection() {
  return (
    <section className=" bg-white relative z-0 h-full">
      <div className="bg-customBlue w-[90%] h-[152px] z-10 relative"></div>

      <div className="bg-black w-[90%] h-[640px] float-end z-20 translate-y-[-75px]">
        <div className="flex justify-center items-center bg-customGrey w-[75%] h-[67%] absolute z-20 bottom-0 left-0 ml-14 translate-y-[-75px] rounded-[30px]">
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
              href="#Département Architecture"
              className="bg-customGrey w-[100%] min-h-8 rounded-[10px] text-center"
            >
              Département Architecture
            </a>
            <a
              href="#Département Informatique"
              className="bg-customGrey w-[95%] min-h-8 rounded-[10px] text-center"
            >
              Département Informatique
            </a>
            <a
              href="#Département Sciences de Matière"
              className="bg-customGrey w-[95%] min-h-8 rounded-[10px] text-center"
            >
              Département Sciences de Matière
            </a>
            <a
              href="#Département Mathématique"
              className="bg-customGrey w-[95%] min-h-8 rounded-[10px] text-center"
            >
              Département Mathematics
            </a>
            <a
              href="#Département Sciences de la Nature et de la Vie"
              className="bg-customGrey w-[95%] min-h-8 rounded-[10px] text-center"
            >
              Département Sciences de la Nature et de la Vie
            </a>
          </div>
        </div>
        <div className="flex  justify-center items-center bg-customGrey w-[70%] md:w-[55%] h-[569px] ml-3 relative z-20 bottom-0 rounded-[30px]">
          <img
            alt="triangle"
            className="w-full h-full rounded-[30px]"
            src={"/images/Hero.png"}
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
