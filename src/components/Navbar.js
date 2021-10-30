import React, { useEffect, useState } from "react";
import {
  MenuIcon,
  XIcon,
  SearchIcon,
  ChevronDownIcon,
} from "@heroicons/react/outline";
import Button from "./Buttons/Button";
// import { ReactComponent as logo } from "./upwork.svg";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);

  const stickyNav = () => {
    if (window.scrollY >= 30) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };
  window.addEventListener("scroll", stickyNav);

  function toggleSideMenu() {
    document.getElementById("sideMenu").classList.toggle("right-[100%]");
    document.getElementById("sideMenu").classList.toggle("right-0");
    document.querySelector("body").classList.toggle("overflow-hidden");
  }
  return (
    <>
      <nav
        id="nav"
        className={`sticky px-3 h-[56px] shadow-md right-0 left-0 top-0 z-[900] bg-white flex items-center`}
      >
        <div className="flex-shrink-0 w-full flex items-center">
          <div
            className="flex-grow-0 h-7 w-7 cursor-pointer"
            onClick={toggleSideMenu}
          >
            <MenuIcon className="h-full w-full text-gray-600" />
          </div>
          <div className="flex-grow flex items-center justify-between">
            <div className="inline-flex max-w-[120px] w-full px-2.5">
              <img src="/images/upwork.svg" className="h-8" alt="" />
            </div>
            <div className={`${sticky ? "hidden" : "flex"}`}>
              <button className="mx-2.5 text-gray-600 text-sm font-semibold hover:text-upwork">
                Log In
              </button>
              <button className="mx-2.5 text-gray-600 text-sm font-semibold hover:text-upwork">
                Sign Up
              </button>
            </div>
            <div className={`${!sticky ? "hidden" : "flex"}`}>
              <Button className="rounded-full bg-upwork text-white text-center py-1 hover:bg-upwork1 tracking-wide px-5">
                Sign Up
              </Button>
            </div>
          </div>
        </div>
        <Sidebar closeSideBar={toggleSideMenu} />
      </nav>
    </>
  );
};

function Sidebar(props) {
  const sidebarMenu = [
    { name: "Find Talent", icon: <ChevronDownIcon className="h-4 w-4" /> },
    { name: "Find Work", icon: <ChevronDownIcon className="h-4 w-4" /> },
    { name: "Why Upwork", icon: <ChevronDownIcon className="h-4 w-4" /> },
    { name: "Enterprise" },
  ];
  return (
    <div
      id="sideMenu"
      className="absolute top-0 right-[100%] bottom-0 bg-white z-[1000] h-screen w-full transition-all duration-300"
    >
      <div className="flex items-center px-3 h-[56px]">
        <div
          className="flex-grow-0 h-7 w-7 cursor-pointer"
          onClick={props.closeSideBar}
        >
          <XIcon className="h-full w-full text-gray-600" />
        </div>
        <div className="flex-grow flex items-center justify-between">
          <div className="inline-flex max-w-[120px] w-full px-2.5">
            <img src="/images/upwork.svg" className="h-8" alt="" />
          </div>
          <div className="flex">
            <button className="mx-2.5 text-gray-600 text-sm font-semibold hover:text-upwork">
              Log In
            </button>
          </div>
        </div>
      </div>
      <div className="py-3 px-3.5 relative">
        <input
          type="search"
          name=""
          id=""
          className="w-full py-[6px] pr-[10px] pl-[50px] font-semibold text-gray-700 rounded-full focus:outline-none border border-gray-400"
          placeholder="Search"
        />
        <div className="absolute flex items-center w-full left-3 top-3 bottom-3 w-[fit-content] z-10 ml-3">
          <SearchIcon className="h-4 w-4 pr-1" />
          <ChevronDownIcon className="h-4 w-4" />
        </div>
      </div>
      <div className="p-3">
        {sidebarMenu.map((items) => (
          <div className="py-2.5 my-2 cursor-pointer flex justify-between items-center">
            <h2 className="font-medium text-gray-600">{items.name}</h2>
            <span>{items.icon}</span>
          </div>
        ))}
      </div>
      <div className="absolute bottom-0 right-0 left-0 py-3 px-3.5 mb-2 font-sans tracking-wider">
        <button className="w-full rounded-full bg-upwork text-white font-semibold text-center py-2 hover:bg-upwork1">
          Sign Up
        </button>
      </div>
    </div>
  );
}

export default Navbar;
