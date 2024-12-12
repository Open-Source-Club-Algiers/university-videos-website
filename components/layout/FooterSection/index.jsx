import React from "react";

function FooterSection() {
  return (
    <section className=" mt-4 flex bg-customBlue flex-col justify-center items-center">
      <div className="w-full flex justify-center items-center">
        <h3 className="text-[25px] md:text-[30px] font-semibold">
          Scientific Clubs
        </h3>
      </div>
      <div className="h-[737px] flex flex-col  justify-around items-center">
        <div className="w-[90%] flex justify-center items-center">
          <h3 className="text-[15px] md:text-[27px] font-semibold text-center text-white">
            The faculty, in association with student organizations and
            scientific clubs, organizes and develops scientific, cultural, and
            sports activities.
          </h3>
        </div>
        <div className="w-[95%] flex justify-around items-center">
          {" "}
          <div className="flex items-center flex-col">
            <a
              target="_blank"
              href="https://linktr.ee/open.source.club?fbclid=PAZXh0bgNhZW0CMTEAAaYqTv7jdS-SBUpnQGYGjunC0oeMmZnd6dnNxvsXUfSG81MZ6WL3QddQr1I_aem_OUS31CPn0ND7MUV4PaSoiw"
            >
              <img
                alt="openSourceLogoIconm"
                className="rounded-[30px] w-[50px] md:w-[80px]"
                src={"/images/oscLogo.jpg"}
              />{" "}
            </a>
            <p className="text-white  md:text-auto  md:font-semibold">
              OPEN SOURCE
            </p>
          </div>{" "}
          <div className="flex items-center flex-col">
            <a
              target="_blank"
              href="https://linktr.ee/hopebudsclub?fbclid=PAZXh0bgNhZW0CMTEAAaYoOl3arBWmPsG4KQmIumBhMmfEYLqAwFWglfBTr2jQD6YKm0tp0BWitYk_aem_ftcF-Ha5BydyTnemBBq98g"
            >
              {" "}
              <img
                alt="facebookicon"
                className="rounded-[30px] w-[50px] md:w-[80px]"
                src={"/images/hbcLogo.jpg"}
              />{" "}
            </a>
            <p className="text-white  md:text-auto  md:font-semibold">
              HOPE BUDS CLUB
            </p>
          </div>{" "}
          <div className="flex items-center flex-col">
            <a
              target="_blank"
              href="https://linktr.ee/quantaclubdz?fbclid=PAZXh0bgNhZW0CMTEAAabQYQFK3ucMV1rQYVqn1ipSLARfv87Ja3eyDTfxAVTLSoy_4pl2dm_ykrU_aem_5QEsPnkEalLjdTRobsnM3A"
            >
              <img
                alt="facebookicon"
                className="rounded-[30px] w-[50px] md:w-[80px]"
                src={"/images/quantaLogo.jpg"}
              />{" "}
              <p className="text-white  md:text-auto  md:font-semibold">
                QUANTA CLUB
              </p>{" "}
            </a>
          </div>{" "}
          <div className="flex items-center flex-col">
            <a
              target="_blank"
              href="https://www.instagram.com/archibenevoles?igsh=MWxyMXpqOWNkNWp1Zw=="
            >
              <img
                alt="facebookicon"
                className="rounded-[30px] w-[50px] md:w-[80px]"
                src={"/images/archiLogo.png"}
              />{" "}
            </a>
            <p className="text-white  md:text-auto  md:font-semibold">
              ARCHI BÉNÉVOLES
            </p>
          </div>
        </div>
        <div className="w-[90%] h-[560px]">
          <video className="h-full w-full object-cover rounded-[20px]" controls>
            <source
              src={
                "https://firebasestorage.googleapis.com/v0/b/universityvideos-b5351.appspot.com/o/Untitled%20video%20-%20Made%20with%20Clipchamp%20(1).mp4?alt=media&token=65a838ab-548e-49f5-bfc2-a988d5b819e0"
              }
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
      <div className="w-full h-[437px] flex flex-col md:flex-row justify-start items-center bg-customBlue">
        <div className="w-3/4 flex justify-between p-6  flex-col">
          <h3 className="text-white font-semibold md:text-[30px] text-[20px]">
            Contact Us
          </h3>
          <h3 className="text-white font-semibold md:text-[30px] text-[20px]">
            sciences.univ-alger.dz <br />
            contact@univ-alger.dz <br /> +213 (0) 21 63 77 65 02
            <br />
            02 Didouche Mourad Street, Algiers.
          </h3>
        </div>
        <div className="flex md:flex-col flex-row justify-center items-center">
          <a
            target="_blank"
            href="https://www.instagram.com/faculty_of_sciences_algiers1?igsh=M3hjeTRzcmYwZnA2"
          >
            <img
              height={75}
              width={75}
              alt="instaIcon"
              className="m-4"
              src={"/images/instagramIcon.png"}
            />
          </a>
          <a
            target="_blank"
            href="https://www.facebook.com/FaculteDesSciences2015?mibextid=ZbWKwL"
          >
            <img
              alt="facebookicon"
              height={60}
              width={60}
              src={"/images/FacebookIcon.png"}
            />{" "}
          </a>
        </div>
      </div>
      <span className="font-extrabold text-orange-500">made by</span>
      <img alt="oscLogo" src="/images/oscLogo.png" />{" "}
    </section>
  );
}

export default FooterSection;
