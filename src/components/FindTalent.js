import React, { useState, useEffect } from "react";
import { ArrowRightIcon } from "@heroicons/react/outline";
import desktopTalent from "../images/find-talent.webp";
import mobileTalent from "../images/find-talent-mobile.webp";

function FindTalent() {
  const cards = [
    {
      id: false,
      title1: "Post a job ",
      title2: (
        <span>
          <br />
          and hire pros
        </span>
      ),
      subtitle: "Talent Marketplace",
      sup: "TM",
      icons: <ArrowRightIcon className="w-full hover:text-upwork" />,
    },
    {
      id: false,
      title1: "Browse and ",
      title2: (
        <span>
          <br /> buy projects
        </span>
      ),
      subtitle: "Project Catalog",
      sup: "TM",
      icons: <ArrowRightIcon className="w-full hover:text-upwork" />,
    },
    {
      id: true,
      title1: "Recruiters find you ",
      title2: (
        <span>
          {/* <br /> */}
          vetted pros
        </span>
      ),
      subtitle: "Talent Scout",
      sup: "TM",
      icons: <ArrowRightIcon className="w-full hover:text-upwork" />,
    },
  ];

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  const imageUrl = windowWidth >= 768 ? desktopTalent : mobileTalent;

  return (
    <>
      <section className=" p-[15px] my-3 overflow-hidden lg:max-w-[1170px]  sm:max-w-[462px] md:rounded-lg md:mx-auto md:max-w-[780px] sm:mx-auto sm:relative relative md:w-screen max-w-[470px] mx-auto md:px-0">
        <div
          className="absolute top-0 bottom-0 right-0 left-0 z-[-1] max-w-[970px] md:max-w-[780px] lg:max-w-[1170px] sm:rounded-lg"
          style={{
            background: "url('" + imageUrl + "') center top / cover no-repeat",
          }}
        ></div>
        <div className="md:px-[15px] max-w-[437.484px]">
          <p className="mt-[15px] mb-[100px] text-white font-semibold text-lg lg:text-2xl">
            For Clients
          </p>

          <h2 className="text-[42px] lg:text-[72px] text-white font-medium leading-none mb-5 lg:mb-[30px]">
            Find Talent
            <br />
            your way
          </h2>
          <p className="text-white text-base lg:text-lg leading-[21px] font-semibold tracking-wide mb-1.5">
            Work with the largest network of independent professionals and get
            things done—from quick turnarounds to big transformations.
          </p>
        </div>
        <div
          className="flex-grow-0 flex-shrink-0 sm:px-[15px]"
          style={{ flexBasis: "100%" }}
        >
          <div className="flex flex-wrap mx-[-15px] border border-transparent rounded-lg md:grid md:grid-cols-3 md:gap-5 md:mr-4 md:mx-auto md:relative">
            {cards.map((items) => (
              <div className="pt-[10px] px-[15px] sm:px-0 w-full md:mr-3 md:pt-[15px]">
                <button className="p-[15px] text-white  bg-upwork w-full rounded-lg border-0 flex justify-between md:flex-col hover:bg-white cursor-pointer hover:text-upwork">
                  {/* <div className=""> */}
                    <span className=" flex-grow font-semibold text-2xl leading-[26px] mt-[30px] md:mt-0 w-full text-left md:mb-5 ">
                    {items.title1}
                    {/* <br /> */}
                    {items.title2}
                  </span>
                  {/* </div> */}

                  <span className="w-full  text-xs font-medium flex mt-2.5 justify-end md:mt-8 md:justify-start">
                    <div
                      className={`w-full flex md:justify-start justify-end md:pt-0 pt-[56px] 
                      `}
                    >
                      <span className="text-[14px]">
                        {items.subtitle}
                        <sup>{items.sup}</sup>
                      </span>
                      <span className="w-4 ml-1.5">{items.icons}</span>
                    </div>
                  </span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default FindTalent;
