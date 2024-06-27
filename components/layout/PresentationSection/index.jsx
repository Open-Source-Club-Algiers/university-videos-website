import Image from "next/image";
import React from "react";

function PresentationSection() {
  return (
    <section className="h-full w-full bg-white relative z-0">
      <div className="bg-customBlue w-[90%] h-[152px] z-10 relative"></div>

      <div className="bg-black w-[90%] h-[640px] float-end z-20 translate-y-[-75px]">
        <div className="flex justify-center items-center bg-customGrey w-[55%] h-[60%] absolute z-20 bottom-0 left-0 ml-14 translate-y-[-75px] rounded-[30px]">
          <Image
            alt="triangle"
            width={63}
            height={63}
            src={"/images/gravity-ui_triangle-right.png"}
          />
        </div>
      </div>
      <div className="w-[100%] flex flex-col md:flex-row-reverse justify-around items-center">
        <div className="flex flex-col justify-around p-14 items-center w-[90%] md:w-[40%] h-[390px]">
          <div className="bg-customGrey w-[95%] min-h-8 rounded-[10px] text-center">
            Département Architecture
          </div>
          <div className="bg-customGrey w-[95%] min-h-8 rounded-[10px] text-center">
            Département Informatique
          </div>
          <div className="bg-customGrey w-[95%] min-h-8 rounded-[10px] text-center">
            Département Sciences de Matière
          </div>
          <div className="bg-customGrey w-[95%] min-h-8 rounded-[10px] text-center">
            Département Sciences de la Nature et de la Vie
          </div>
        </div>
        <div className="flex justify-center items-center bg-customGrey w-[70%] md:w-[35%] h-[569px] relative z-20 bottom-0 rounded-[30px]">
          <Image
            alt="triangle"
            width={63}
            height={63}
            src={"/images/gravity-ui_triangle-right.png"}
          />
        </div>
      </div>
      <div className="w-[100%] h-[250px] bg-customBlue z-0 absolute md:bottom-[-100px] bottom-[-150px] left-0 ">
        <p className=" absolute right-[10%] bottom-9 text-start text-white text-inter font-medium  text-[12px] md:text-[15px] xl:text-[25px]">
          THE FACULTY OF SCIENCES IS PARTICULARLY <br />
          RESPONSIBLE FOR THE PROMOTION OF:
          <ul className="list-disc list-inside">
            <li>Fundamental sciences</li>
            <li>Support for development and social promotion</li>
            <li>Creation of a research platform</li>
          </ul>
        </p>
      </div>
    </section>
  );
}

export default PresentationSection;
