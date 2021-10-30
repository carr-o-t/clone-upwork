import React from "react";

function FindWork() {
  return (
    <>
      <section className="mb-[60px] bg-upwork6 sm:max-w-[462px] sm:mx-auto lgmd:max-w-[1000px] md:max-w-[782px] md:mx-auto sm:rounded-lg overflow-hidden lg:max-w-[1200px]">
        <div className="md:flex md:justify-between">
          <div className="md:w-[390px] lgmd:w-[500px] lg:w-[600px]">
            <img
              src="/images/find-great-work.webp"
              alt=""
              className="h-[375px] md:w-[390px] lgmd:w-full md:h-full w-full object-cover"
            />
          </div>
          <div className="p-[15px] md:w-[390px] lgmd:w-[500px] lg:w-[600px] lg:pl-[30px]">
            <div className="pb-[40px] text-white lgmd:pb-[100px]">
              <p className="mb-[20px] font-semibold text-[20px] lgmd:text-[24px] lgmd:mb-[30px]">
                For Talent
              </p>
              <h2 className="mb-[15px] text-[42px] font-semibold leading-[42px] lgmd:leading-[62px] lgmd:text-[62px] lgmd:mb-[30px] lg:text-[72px]">
                Find Great
                <br />
                work
              </h2>
              <div className="md:w-[359px] lg:w-[359px]">
                <span className="text-[16px] font-medium leading-[18px]">
                  Meet clients you’re excited to work with and take your career
                  or business to new heights.
                  {/* <br className="lg:block md:block" /> */}
                </span>
              </div>
            </div>
            {/* <div className="mt-[18px] mb-[10px]"> */}
            <hr className="text-white mt-[18px] mb-[10px]" />
            {/* </div> */}
            <div className="mx-[-15px] text-[15px] lgmd:text-[18px] leading-[18px] text-white grid grid-cols-2 lgmd:grid-cols-3">
              <div className="px-[15px] pb-[20px] lgmd:w-[158.328px] lg:w-[184.98px] ">
                <span className="font-semibold">
                  Find opportunities for every stage of your freelance career
                </span>
              </div>
              <div className="px-[15px] pb-[20px] lgmd:w-[158.328px] ">
                <span className="font-semibold">
                  Control when, where, and how you work
                </span>
              </div>
              <div className="px-[15px] pb-[20px] text-[15px] leading-[18px] text-white font-medium lgmd:w-[158.328px] lgmd:text-[18px]">
                <span className="">Explore different ways to earn</span>
              </div>
              <div className="pl-[15px] lg:mt-5 pr-[20px] pt-[5px] pb-[20px] col-span-2">
                <button className="text-center bg-white text-upwork7 px-[29px] py-2.5 rounded-full leading-[16px] font-semibold">
                  <span>Find Opportunities</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default FindWork;
