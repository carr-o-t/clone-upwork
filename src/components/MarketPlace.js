import React from "react";
import { StarIcon } from "@heroicons/react/solid";

const MarketPlace = () => {
  return (
    <>
      <section className="sm:px-[15px] max-w-[462px] md:max-w-[780px] sm:mx-auto mx-auto md:px-0 lgmd:max-w-[1000px] lg:max-w-[1238px]">
        <div className="bg-upwork  sm:rounded-lg overflow-hidden md:justify-between flex flex-col md:flex-row md:flex-grow lgmd:max-w-[1000px] lg:max-w-[1238px]">
          <div className=" text-white p-[15px] md:px-[30px] flex-shrink-0 flex flex-col justify-between lgmd:w-[500px] lg:w-[600px] md:w-[390px]">
            <div className="text-[42px] lgmd:mt-5 lgmd:mb-[100px] font-serif py-2 font-medium leading-none mb-24 lgmd:text-[62px] lg:text-[72px]">
              We're the <br />
              world's work
              <br /> marketplace
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="border-t border-white lgmd:w-[205px]">
                <div className="md:mt-2">
                   <span className="text-[12px] lgmd:text-[17px] leading-none font-semibold">
                  A winner of G2 Crowd’s
                </span>
               </div>
                <p className="font-lg lgmd:text-[26px]  font-semibold">
                  2021 Best Software
                  <br className="md:hidden" /> Awards
                </p>
                <img src="/images/o2.svg" alt="" className="my-4 h-8" />
              </div>
              <div className="border-t border-white flex flex-col justify-between items-baseline">
                <div className="">
                  <div className="md:mt-2">
                    <span className="text-[12px] lgmd:text-[17px] font-semibold">
                    107,951 reviews
                  </span>
                  </div>
                  <p className="lgmd:text-[26px] font-lg font-semibold">
                    4.8
                    <StarIcon className="ml-2 h-4 inline" />
                    <StarIcon className="h-4 inline" />
                    <StarIcon className="h-4 inline" />
                    <StarIcon className="h-4 inline" />
                    <StarIcon className="h-4 inline" />
                  </p>
                </div>
                <img
                  src="/images/logo-clearlyrated.svg"
                  alt=""
                  className="mb-5 h-10"
                />
              </div>
            </div>
          </div>
          <div className="w-full h-full mt-4 sm:h-[375px] md:mt-0 md:w-[390px] md:h-[413px] lgmd:h-[586px] lgmd:w-[500px] lg:w-[600px]">
            <img
              src="/images/clearly-rated.webp"
              alt=""
              className=" h-full md:h-full md:w-full w-[100%] object-cover"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default MarketPlace;
