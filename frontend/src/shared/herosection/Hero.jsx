import React from "react";
import "./herosection-styles/hero.css";
import image from "../../assets/images/hero.png";

import { FiFacebook } from "react-icons/fi";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaTripadvisor } from "react-icons/fa";
import { BsListTask } from "react-icons/bs";
import { TbApps } from "react-icons/tb";

import "aos/dist/aos.css";
import Searchbar from "../Searchbar";

const Hero = () => {
  return (
    <section className="hero_section">
      <div className="overlay"></div>
      <img src={image} alt="" />

      <div className="hero_sectionContent container">
        <div className="textDiv">
          <span data-aos="fade-up" className="smallText">
            our Packages
          </span>

          <h1 data-aos="fade-up" className="hero_sectionTitle">
            Search your Holiday
          </h1>
        </div>

        <Searchbar />

        <div data-aos="fade-down" className="hero_sectionFooterIcons flex">
          <div className="rightIcons">
            <FiFacebook className="icon" />
            <AiOutlineInstagram className="icon" />
            <FaTripadvisor className="icon" />
          </div>
          <div className="leftIcons">
            <BsListTask className="icon" />
            <TbApps className="icon" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
