import React from "react";
import FindTalent from "./FindTalent";
import FindWork from "./FindWork";
import Footer from "./Footer";
import Herosection from "./Herosection";
import HireSkill from "./HireSkill";
import MarketPlace from "./MarketPlace";
// import Skills from "./Skills";
import Testimonial from "./Testimonial";
import DropDown from './DropDown';

const Landingpage = () => {
  return (
    <>
      <Herosection />
      <DropDown />
      <FindTalent />
      <HireSkill />
      <FindWork />
      <Testimonial />
      <MarketPlace />
      {/* <Skills /> */}
      <Footer />
    </>
  );
};

export default Landingpage;
