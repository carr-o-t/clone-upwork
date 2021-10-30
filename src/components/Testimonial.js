import React from "react";

function Testimonial() {
  return (
    <>
      <section className="my-4 px-[15px] sm:px-[30px] sm:mx-auto md:relative md:max-w-3xl sm:max-w-md lgmd:max-w-[976px]">
        <div className="md:flex lgmd:justify-between">
          <div className=" lgmd:w-[565.83px]">
            <div className="mb-7 font-serif text-[42px] leading-none font-medium tracking-tight lgmd:text-[62px] lgmd:mb-[100px]">
              What they're <br /> saying
            </div>
            <div className="flex py-8 md:ml-[120px] lgmd:ml-[161.672px] md:flex-col">
              <div className="rounded-lg overflow-hidden flex-shrink-0 mr-8">
                <img
                  src="/images/cara.webp"
                  alt=""
                  className="w-24 rounded-lg md:h-72 md:w-[219px] lgmd:w-[293.312px] lgmd:h-[383.141px]"
                />
              </div>
              <div className="flex-grow md:w-[282.48px]">
                <div className="w-full flex flex-col">
                  <blockquote className="text-upwork font-semibold -mr-3 text-lg leading-none font-sans md:mt-[30px] md:mb-[10px] lgmd:text-[26px]">
                    “The freelance talent we work with are more productive than
                    we ever thought possible.”
                  </blockquote>
                  <span className="border-b border-gray-800 w-[99%] ml-auto mt-3 mb-0.5 lgmd:mt-[15px] lgmd:mb-[30px]"></span>
                  <div className="leading-none ">
                    <span className="block text-sm font-medium lgmd:text-[16px]">
                      Cara Bedford
                    </span>
                    <span className="text-upwork5 text-sm font-medium -mt-1 lgmd:text-[16px]">
                      Director of Strategic Marketing, CompuVision
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <div className="md:flex-col"> */}
          <div className="flex py-6 md:flex-col  md:py-0 md:ml-4 md:px-[15px]">
            <div className="rounded-lg overflow-hidden flex-shrink-0 mr-8">
              <img
                src="/images/sam.webp"
                alt=""
                className="w-24 rounded-lg md:h-72 md:w-[219px]  lgmd:w-[293.312px] lgmd:h-[383.141px]"
              />
            </div>
            <div className="flex-grows lgmd:w-[374.156px] ">
              <div className="w-full flex flex-col">
                <blockquote className="text-upwork font-semibold -mr-3 text-lg leading-none font-sans md:mt-[30px] md:mb-[10px] lgmd:text-[26px]">
                  “My relationship with Cara & CompuVision keeps on growing. The
                  projects get larger and more technical every year.”
                </blockquote>
                <span className="border-b border-gray-800 w-[99%] ml-auto mt-3 lgmd:mt-[15px] lgmd:mb-[30px] mb-0.5"></span>
                <div className="">
                  <span className="block text-sm font-medium lgmd:text-[16px]">
                    Sam Crockett
                  </span>
                  <span className="text-upwork5 text-sm font-medium lgmd:text-[16px] -mt-1">
                    Independent Web Developer
                  </span>
                  {/* </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Testimonial;
