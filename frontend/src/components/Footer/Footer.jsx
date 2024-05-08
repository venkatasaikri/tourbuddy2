import React, { useEffect } from "react";
import "./footer.css";
import footer from "../../assets/images/footer.png";

import { FiChevronRight, FiSend } from "react-icons/fi";
import { MdTravelExplore } from "react-icons/md";
import {
  AiFillInstagram,
  AiFillYoutube,
  AiOutlineTwitter,
} from "react-icons/ai";
import { FaTripadvisor } from "react-icons/fa";

import Aos from "aos";
import "aos/dist/aos.css";

const Footer = () => {
  //react hooks for scroll animation
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section className="footer">
      <div className="videoDiv">
        <img src={footer} alt="" />
      </div>

      <div className="secContent container">
        <div className="contactDiv flex">
          <div data-aos="fade-up" className="text">
            <small>KEEP IN TOUCH</small>
            <h2>Travel with us</h2>
          </div>

          <div className="inputDiv flex">
            <input
              data-aos="fade-up"
              type="text"
              placeholder="Enter Email Address"
            />
            <button data-aos="fade-up" className="btn flex" type="submit">
              SEND <FiSend className="icon" />
            </button>
          </div>
        </div>

        <div className="footerCard flex">
          <div className="footerIntro flex">
            <div className="logoDiv">
              <a href="" className="logo flex">
                <MdTravelExplore className="icon" />
                Travel.
              </a>
            </div>

            <div data-aos="fade-up" className="footerParagraph">
              Travel sparks adventure and personal growth through diverse
              experiences, while tourism packages offer hassle-free, tailored
              adventures for every preference and budget, crafting enduring
              memories of exploration.
            </div>

            <div data-aos="fade-up" className="footerSocials flex">
              <AiOutlineTwitter className="icon" />
              <AiFillYoutube className="icon" />
              <AiFillInstagram className="icon" />
              <FaTripadvisor className="icon" />
            </div>
          </div>

          <div className="footerLinks grid">
            {/* Group one*/}
            <div data-aos="fade-left" className="linkGroup">
              <span className="groupTitle">Personalized Trips</span>

              <li className="footerList flex">
                <FiChevronRight className="icon" />
                24/7 support
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Private Guides
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Spotlights
              </li>
            </div>
            {/* Group two*/}
            <div data-aos="fade-left" className="linkGroup">
              <span className="groupTitle">Travel Help</span>

              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Coordination
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Arrangements
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Event Planning
              </li>
            </div>
            {/* Group Three*/}
            <div data-aos="fade-left" className="linkGroup">
              <span className="groupTitle">Services</span>

              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Bookings
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Rentcars
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Insurence
              </li>
            </div>
          </div>

          <div className="footerDiv flex">
            <small>BEST TRAVEL WEBSITE THEME</small>
            <small>&copy; DESIGN & DEVELOPED BY - ROHITH</small>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
