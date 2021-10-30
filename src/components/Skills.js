import React, { useState } from "react";
import { Tab } from "@headlessui/react";

function Skills() {
    return (
        <>
            <Tabsection />
        </>
    );
}

function Tabsection() {
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  const [categories] = useState({
    "Top skills": [
      {
        id: 1,
        buttons: [
          { id: 1, name: "Data Entry Specialists" },
          { id: 2, name: "Video Editors" },
          { id: 3, name: "Data Analyst" },
          { id: 4, name: "Shopify Developer" },
          { id: 5, name: "Ruby on Rails Developer" },
          { id: 6, name: "Android Developer" },
          { id: 7, name: "Bookkeeper" },
          { id: 8, name: "Content Writer" },
          { id: 9, name: "Copywriter" },
          { id: 10, name: "Database Administrator" },
          { id: 11, name: "Data Scientist" },
          { id: 12, name: "Front-End Developer" },
          { id: 13, name: "Game Developer" },
          { id: 14, name: "Graphic Developer" },
          { id: 15, name: "iOS Developer" },
          { id: 16, name: "JAVA Developer" },
        ],
      },
    ],

    "Trending skills": [
      {
        id: 2,
        buttons: [
          { id: 1, name: "Blockchain" },
          { id: 2, name: "Go Development" },
          { id: 3, name: "Node.js" },
          { id: 4, name: "Vue.js" },
          { id: 5, name: "HR Consulting" },
          { id: 6, name: "Microsoft Power BI" },
          { id: 7, name: "Instructional Design" },
          { id: 8, name: "React.js" },
          { id: 9, name: "Videographers" },
          { id: 10, name: "HTML5 Developer" },
          { id: 11, name: "Ghostwriters" },
          { id: 12, name: "Unity 3D Developers" },
          { id: 13, name: "Business Consultants" },
          { id: 14, name: "Coders" },
          { id: 15, name: "Marketing Consultants" },
          { id: 16, name: "Web Developers" },
        ],
      },
    ],

    "Top skills in US": [
      {
        id: 3,
        buttons: [
          { id: 1, name: "Graphic Designer in US" },
          { id: 2, name: "Web Designer in US" },
          { id: 3, name: "WordPress Developers in US" },
          { id: 4, name: "Writers in US" },
          { id: 5, name: "Curriculum Developer in US" },
          { id: 6, name: "Fashion Designer in US" },
          { id: 7, name: "WooCommerce Developers in US" },
          { id: 8, name: "d3.js Developers in US" },
          { id: 9, name: "SqaureSpace Developers in US" },
          { id: 10, name: "Ghostwriters in US" },
          { id: 11, name: "Shopify Developers in US" },
          { id: 12, name: "Technical Support Agents in US" },
          { id: 13, name: "Accountants in US" },
          { id: 14, name: "Virtual Assistants in US" },
          { id: 15, name: "Product Developers in US" },
          { id: 16, name: "CAD Designers in US" },
        ],
      },
    ],

    "Project Catalog": [
      {
        id: 4,
        buttons: [
          { id: 1, name: "Resume Writing Services" },
          { id: 2, name: "SEO Services" },
          { id: 3, name: "Translation" },
          { id: 4, name: "Virtual Assistant" },
          { id: 5, name: "Email Marketing" },
          { id: 6, name: "Web Design" },
          { id: 7, name: "Proofreading" },
          { id: 9, name: "Business Consulting" },
          { id: 10, name: "Logo Design" },
          { id: 11, name: "Architecture/Interior Design" },
          { id: 12, name: "Branding" },
          { id: 13, name: "Social Media Management" },
          { id: 14, name: "Video Editing" },
          { id: 15, name: "Lead Generation" },
          { id: 16, name: "Content Marketing" },
        ],
      },
    ],
  });

  return (
    <Tab.Group>
      <Tab.List
        id="tab_list"
        className="flex w-full overflow-x-scroll mb-[30px] text-[24px]"
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
            {category}
          </Tab>
        ))}
      </Tab.List>
      {/* <div className="px-[15px]"> */}
        <Tab.Panels>
          {Object.values(categories).map((post, idx) => (
            <Tab.Panel key={idx}>
              {post.map((btn) => (
                <div className="" key={btn.id}>
                  <div
                    key={btn.id}
                    className="flex flex-wrap h-[150px] overflow-y-hidden"
                  >
                    {btn.buttons &&
                      btn.buttons.map((btns) => (
                        <li className="list-none text-base w-[fit-content] px-4 pt-0.5 flex-shrink-0 text-upwork5 text-[12px] font-semibold hover:text-upwork4 cursor-pointer">
                          {btns.name}
                        </li>
                      ))}
                  </div>
                {/* </div> */}
              ))}
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </div>
    </Tab.Group>
  );
}

export default Skills;
