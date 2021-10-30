import React, { useState } from "react";
import { Tab } from "@headlessui/react";

function HireSkill() {
  return (
    <>
      <section className="pb-[50px] pt-[45px] relative  lgmd:max-w-[1047px] md:max-w-[886px] mx-auto lg:max-w-[1162px]">
        <div className="px-[15px] sm:px-[30px] h-[114px]  lgmd:mb-8">
          <div className="mx-[-15px] h-[114px] px-[15px] ">
            <h2 className="text-black tracking-[0.6px] leading-none font-mirza text-[42px] lgmd:text-[62px] lgmd:font-medium lg:text-[72px]">
              Hire a pro
              <br />
              for any skill
            </h2>
          </div>
        </div>
        <Tabsection />
      </section>
    </>
  );
}

function Tabsection() {
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  const [categories] = useState({
    "Developement & IT": [
      {
        id: 1,
        image: "/images/it.webp",
        buttons: [
          { id: 1, name: "AR/VR Development" },
          { id: 2, name: "Automation Testing" },
          { id: 3, name: "Back-End Development" },
          { id: 4, name: "Business Applications Development" },
          { id: 5, name: "CMS Development" },
          { id: 6, name: "Cloud Engineering" },
          { id: 7, name: "Coding Tutoring" },
          { id: 8, name: "Database Administration" },
          { id: 9, name: "Database Development" },
        ],
      },
    ],

    "Design & Creative": [
      {
        id: 2,
        image: "/images/design.webp",
        buttons: [
          { id: 1, name: "2D Animation" },
          { id: 2, name: "2D Animation" },
          { id: 3, name: "AR/VR Design" },
          { id: 4, name: "Acting" },
          { id: 5, name: "Art Direction" },
          { id: 6, name: "Audio Editing" },
          { id: 7, name: "Audio Production" },
          { id: 8, name: "Brand Identity Design" },
          { id: 9, name: "Caricatures & Portraits" },
          { id: 10, name: "Cartoons & Comics" },
        ],
      },
    ],

    "Sales & Marketing": [
      {
        id: 3,
        image: "/images/sales.webp",
        buttons: [
          { id: 1, name: "Brand Strategy" },
          { id: 2, name: "Campaign Management" },
          { id: 3, name: "Community Management" },
          { id: 4, name: "Content Strategy" },
          { id: 5, name: "Digital Marketing" },
          { id: 6, name: "Email Marketing" },
          { id: 7, name: "Lead Generation" },
          { id: 8, name: "Market Research" },
          { id: 9, name: "Marketing Automation" },
        ],
      },
    ],

    "Writing & Translation": [
      {
        id: 4,
        image: "/images/writing.webp",
        buttons: [
          { id: 1, name: "Business Writing" },
          { id: 2, name: "Career Coaching" },
          { id: 3, name: "Content Writing" },
          { id: 4, name: "Copywriting" },
          { id: 5, name: "Creative Writing" },
          { id: 6, name: "Editing & Proofreading" },
          { id: 7, name: "Ghostwriting" },
          { id: 8, name: "Grant Writing" },
          { id: 9, name: "Language Localization" },
          { id: 10, name: "Language Tutoring" },
          { id: 11, name: "Legal Translation" },
        ],
      },
    ],

    "Admin & Customer Support": [
      {
        id: 5,
        image: "/images/admin.webp",
        buttons: [
          { id: 1, name: "Customer Service" },
          { id: 2, name: "Data Entry" },
          { id: 3, name: "Online Research" },
          { id: 4, name: "Order Processing" },
          { id: 5, name: "Project Management" },
          { id: 6, name: "Tech Support" },
          { id: 7, name: "Transcription" },
          { id: 8, name: "Virtual/Administrative Assistance" },
        ],
      },
    ],

    "Finance & Accounting": [
      {
        id: 6,
        image: "/images/finance.webp",
        buttons: [
          { id: 1, name: "Accounting" },
          { id: 1, name: "Bookkeeping" },
          { id: 1, name: "Business Analysis" },
          { id: 1, name: "Financial Analysis & Modeling" },
          { id: 1, name: "Financial Management/CFO" },
          { id: 1, name: "HR Administration" },
          { id: 1, name: "Instructional Design" },
          { id: 1, name: "Lifestyle Coaching" },
          { id: 1, name: "Management Consulting" },
        ],
      },
    ],
  });

  return (
    <Tab.Group>
      <div className="md:flex  md:max-w[750px] mx-auto md:mx-auto lgmd:mx-auto lg:mx-auto">
        <div className="p-[15px]">
          <Tab.List
        id="tab_list"
        className="flex w-full md:flex-col overflow-x-scroll mb-[30px] md:text-[24px] text-[24px]"
      >
        {Object.keys(categories).map((category) => (
          <Tab
            as="div"
            className={({ selected }) =>
              classNames(
                selected
                  ? `flex-shrink-0 inline-block w-[fit-content] cursor-pointer text-upwork hover:text-upwork4 font-semibold text-lg px-3 `
                  : `flex-shrink-0 inline-block w-[fit-content] cursor-pointer text-upwork3 text-lg px-3 font-semibold hover:text-upwork4 `
              )
            }
          >
            <div className="md:text-[24px] lgmd:text-[36px] lg:text-[42px] md:mb-[15px] lgmd:mb-[20px] lg:mb-[30px]">{category}</div>
          </Tab>
        ))}
      </Tab.List>
        </div>
      <div className="px-[15px] md:mt-[-120px] sm:mx-auto lgmd:w-[455px] sm:w-[462px] md:w-[345px] lg:w-[485px]">
        <Tab.Panels>
          {Object.values(categories).map((post, idx) => (
            <Tab.Panel key={idx}>
              {post.map((btn) => (
                <div className="" key={btn.id}>
                  <img
                    src={`${btn.image}`}
                    className="mb-[20px] rounded rounded-[8px]"
                  />
                  <div
                    key={btn.id}
                    className="flex flex-wrap h-[150px] overflow-y-hidden"
                  >
                    {btn.buttons &&
                      btn.buttons.map((btns) => (
                        <li className="list-none border border-upwork5 rounded-full text-base w-[fit-content] px-4 pt-0.5 flex-shrink-0 mb-[10px] mr-[10px] text-upwork5 text-[12px] font-semibold hover:bg-gray-100 cursor-pointer lgmd:text-[14px] lg:text-[15px]">
                          {btns.name}
                        </li>
                      ))}
                  </div>
                </div>
              ))}
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </div>
      </div>
    </Tab.Group>
  );
}

export default HireSkill;
