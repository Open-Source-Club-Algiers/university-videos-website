import React from "react";

function FooterSection() {
  return (
    <section className="flex flex-col justify-center items-center">
      <div className="w-full flex justify-center items-center">
        <h3 className="text-[25px] md:text-[30px] font-semibold">
          CLUB SCIENTIFIQUES
        </h3>
      </div>
      <div className="h-[437px] bg-customBlue flex flex-col justify-start items-center">
        <div className="w-[90%] flex justify-center items-center">
          <h3 className="text-[15px] md:text-[27px] font-semibold text-center">
            La faculté en association avec les organisations estudiantines et
            les clubs scientifiques organise et développe des activités
            scientifiques, culturelles et sportives.
          </h3>
        </div>
      </div>
      <div className="w-full h-[437px] flex flex-col justify-start items-center">
        <div className="w-[90%] flex justify-center items-center">
          <h3 className="text-[25px] md:text-[30px] font-semibold text-center">
            LES STATISTIQUES DE LA FACULTÉ
          </h3>
        </div>
      </div>
    </section>
  );
}

export default FooterSection;
