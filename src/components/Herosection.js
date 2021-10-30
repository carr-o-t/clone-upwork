import React, { useState, useEffect } from "react";
import Button from "./Buttons/Button";
import GlobeMobile from "../images/globe-mobile.webp";
import GlobeDesktop from "../images/globe-2x.webp";
const Herosection = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, [window.innerWidth]);

  var imageUrl = "";

  if (windowWidth >= 768 && windowWidth < 1200) {
    imageUrl = GlobeMobile;
  } else if (windowWidth >= 1200) {
    imageUrl = GlobeDesktop;
  }

  return (
    <div className="py-5 px-3.5 sm:max-w-[462px] lg:max-w-[1170px] md:max-w-[750px] sm:mx-auto sm:relative flex ">
      <div className="flex flex-col">
        <h2 className="text-6xl mb-[10px] md:text-[52px] font-sans lgmd:text-[65px] lgmd:max-w-[970px] md:tracking-tighter text-upwork font-medium  mt-4 lg:text-[80px] lg:font-semibold lg:mb-[30px]">
          Join the
          <br className="md:hidden lgmd:hidden" /> world's work
          <br className="md:hidden lgmd:hidden" /> marketplace
        </h2>
        <p className="pb-3 text-[#7f8879] text-xl font-semibold font-sans tracking-tight lg:text-2xl">
          Find great talent. Build your business. Take your career to the next
          level.
        </p>
        <div className="py-4">
          <Button>Find Talent</Button>
          <Button className="rounded-full text-upwork text-center py-2 hover:bg-gray-100 hover:text-upwork1 border border-upwork hover:border-upwork1 tracking-wide px-7 ml-5">
            Find Work
          </Button>
        </div>
        <TrustedDiv />
      </div>
      <div className="flex lg:ml-8">
        <div className=" md:w-[370px] md:h-[370px] lg:h-[440px] lg:w-[440px]">
          <img
            src={imageUrl !== "" ? imageUrl : null}
            alt=""
            className="w-full h-full"
          />
        </div>
      </div>
    </div>
  );
};

function TrustedDiv() {
  const company = [
    { logo: "/images/microsoft.svg" },
    { logo: "/images/airbnb.svg" },
    { logo: "/images/bissell.svg" },
    { logo: "/images/godaddy.svg" },
  ];
  return (
    <div className="py-4">
      <p className="text-subcol text-[16px]">Trusted by</p>
      <div className="mt-3 flex">
        {company.map((items) => (
          <img
            src={items.logo}
            alt=""
            className="h-7 mr-4 md:h-10 lg:h-10 md:mr-10 lg:mr-10"
          />
        ))}
      </div>
    </div>
  );
}

export default Herosection;
