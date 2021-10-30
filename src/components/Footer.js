import { ChevronDownIcon } from "@heroicons/react/solid";
import React, { useState } from "react";
const Footer = () => {
  const [isActive, setIsActive] = useState(false);
  const [istalentActive, setIstalentActive] = useState(false);
  const [iscompanyActive, setIscompanyActive] = useState(false);
  const [isresourceActive, setIsresourceActive] = useState(false);
  // const onClick = () => setIsActive(!isActive);



  const client = [
    { name: "How to hire" },
    { name: "Talent Marketplce" },
    { name: "project Catalog" },
    { name: "Talent Scout" },
    { name: "Enterprise" },
    { name: "Payroll Services" },
    { name: "Direct Contracts" },
    { name: "Hire Worldwide" },
    { name: "Hire in the USA" },
  ];
  const Talent = [
    { name: "How to find work" },
    { name: "Direct Contracts" },
    { name: "Find Freelance Jobs Worldwide" },
    { name: "Find Freelance Jobs in the USA" },
  ];
  const Resource = [
    { name: "Help & Support" },
    { name: "Success Stories" },
    { name: "Upwork Reviews" },
    { name: "Resources" },
    { name: "Blog" },
    { name: "Community" },
  ];
  const Company = [
    { name: "Aboout Us" },
    { name: "Leadership" },
    { name: "Investor Relations" },
    { name: "Careers" },
    { name: "Upwork Foundation" },
    { name: "Press" },
    { name: "Contact Us" },
  ];



  return (
    <>
      <footer className="pb-[15px] bg-footer mt-20 w-[100%] ">
        <div className="px-[15px] lg:max-w-[1170px] md:max-w-[750px] md:mx-auto lg:mx-auto sm:max-w-[462px] sm:mx-auto">
          <div className="md:flex md:justify-between md:border-b text-white">
            <div
              id=" Menu"
              className="py-5 bottom-[100%] border-b md:border-0 text-white text-sm font-normal"
            >
              <div className="flex justify-between">
                <div className="">
                  For Clients
                </div>
                <div className="flex md:hidden">
                  <ChevronDownIcon onClick={() => { setIsActive(!isActive) }} className={`h-4 w-4 cursor-pointer transition-all transform duration-500 ${isActive ? '-rotate-180' : ''}` } />
                </div>
              </div>
              <div className={`menu ${isActive ? 'visible opacity-100 transform translate-y-0' : 'hidden'} mt-[20px] md:flex md:flex-col`}>
                {client.map((item) => (
                  <div className="mb-[10px]">
                    <span className="text-sm">{item.name}</span>
                  </div>
                ))}
              </div>
            </div>
            <div
              id=" Menu"
              className="py-5 bottom-[100%] border-b md:border-0 text-white text-sm font-normal"
            >
              <div className="flex justify-between">
                <div className="">
                  For Talent
                </div>
                <div className="flex md:hidden">
                  <ChevronDownIcon onClick={() => { setIstalentActive(!istalentActive) }} className={`h-4 w-4 cursor-pointer transition-all transform duration-500 ${istalentActive ? '-rotate-180' : ''}` } />
                </div>
              </div>
              <div className={`menu ${istalentActive ? 'visible opacity-100 transform translate-y-0' : 'hidden'} mt-[20px] md:flex md:flex-col`}>
                {Talent.map((item) => (
                  <div className="mb-[10px]">
                    <span className="text-sm">{item.name}</span>
                  </div>
                ))}
              </div>
            </div>
            <div
              id=" Menu"
              className="py-5 bottom-[100%] border-b md:border-0 text-white text-sm font-normal"
            >
              <div className="flex justify-between">
                <div className="">
                  Resources
                </div>
                <div className="flex md:hidden">
                  <ChevronDownIcon onClick={() => { setIsresourceActive(!isresourceActive) }} className={`h-4 w-4 cursor-pointer transition-all transform duration-500 ${isresourceActive ? '-rotate-180' : ''}` }/>
                </div>
              </div>
              <div className={`menu ${isresourceActive ? 'visible opacity-100 transform translate-y-0' : 'hidden'} mt-[20px] md:flex md:flex-col`}>
                {Resource.map((item) => (
                  <div className="mb-[10px]">
                    <span className="text-sm">{item.name}</span>
                  </div>
                ))}
              </div>
            </div>
            <div
              id=" Menu"
              className="py-5 bottom-[100%] border-b md:border-0 text-white text-sm font-normal"
            >
              <div className="flex justify-between">
                <div className="">
                  Company
                </div>
                <div className="flex md:hidden">
                  <ChevronDownIcon onClick={() => { setIscompanyActive(!iscompanyActive) }} className={`h-4 w-4 cursor-pointer transition-all transform duration-500 ${iscompanyActive ? '-rotate-180' : ''}` } />
                </div>
              </div>
              <div className={`menu ${iscompanyActive ? 'visible opacity-100 transform translate-y-0' : 'hidden'} mt-[20px] md:flex md:flex-col`}>
                {Company.map((item) => (
                  <div className="mb-[10px]">
                    <span className="text-sm">{item.name}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          <div className="">
            <div className="md:flex md:border-b text-white md:mt-5 md:mb-[20px]">
              <div className="text-sm text-white md:flex md:justify-between">
                <div className="pt-5 pb-[10px] text-sm md:pt-0 md:mr-1">Follow us</div>
                <div className="flex">
                  <div className="mr-2">Facebook</div>
                  <div className="mr-2">Twitter</div>
                  <div className="mr-2">Youtube</div>
                </div>
              </div>

              <div className="text-sm text-white pb-5 md:justify-end md:ml-[307px] border-b md:border-0  md:flex md:mr-0">
                <div className="pt-5 pb-[10px] text-sm md:pt-0 md:mr-1 md:justify-end">Mobile app</div>
                <div className="flex">
                  <div className="mr-2">iOS</div>
                  <div className="mr-2">Android</div>
                </div>
              </div>
            </div>

            <div className="pt-5 text-white text-sm">
              <div className="mt-[10px]">
                <p>© 2015 - 2021 Upwork® Global Inc.</p>
              </div>
              <div className="flex mt-[10px]">
                <div className="pr-[5px] mr-5 mb-[10px]">Terms of Service</div>
                <div className="px-[5px] mr-5 mb-[10px]">Privacy Policy</div>
                <div className="px-[5px] mr-5 mb-[10px]">Accessibility</div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
  // }
}

export default Footer;
