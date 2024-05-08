import React, { useState, useRef, useContext } from "react";

import "./navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { AiFillCloseCircle } from "react-icons/ai";
import { TbGridDots } from "react-icons/tb";
import { IoLogoElectron } from "react-icons/io5";

import { AuthContext } from "../../context/AuthContext";

const Header = () => {
  const [active, setActive] = useState("navBar");
  // Fuction to toggle navbar
  const showNav = () => {
    setActive("navBar activeNavbar");
  };
  // Function to remove navbar
  const removeNavbar = () => {
    setActive("navBar");
  };

  const headerRef = useRef(null);
  const navigate = useNavigate();
  const { user, dispatch } = useContext(AuthContext);

  const logout = () => {
    dispatch({ type: "LOGOUT" });
    navigate("/");
  };

  return (
    <section className="navBarSection">
      <header className="header flex">
        <div className="logoDiv">
          <Link to="/" className="logo flex">
            <h1>
              <IoLogoElectron className="iconmain" /> TourBuddy.
            </h1>
          </Link>
        </div>

        <div className={active}>
          <ul className="navLists flex">
            <li className="navItem">
              <Link to="/home" className="navLink">
                Home
              </Link>
            </li>

            <li className="navItem">
              <Link to="/tours" className="navLink">
                Tours
              </Link>
            </li>

            <li className="navItem">
              <Link to="/gallery" className="navLink">
                Gallery
              </Link>
            </li>

            {/* <li className="navItem">
            <a href="/login" className="navLink">Login</a>
          </li>
          <li className="navItem">
            <a href="/register" className="navLink">Register</a>
          </li> */}

            <li className="navItem">
              <Link to="/news" className="navLink">
                News
              </Link>
            </li>

            {/* <li className="navItem">
              <a href="/" className="navLink">
                Contact
              </a>
            </li> */}

            {user ? (
              <>
                <h5 className="user_name btn2">{user.username}</h5>
                <button className="btn_logout" onClick={logout}>
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link className="link" to="/login">
                  <button className="btn">Login</button>
                </Link>
                <Link className="link" to="/register">
                  <button className="btn">Register</button>
                </Link>
              </>
            )}
          </ul>

          <div onClick={removeNavbar} className="closeNavbar">
            <AiFillCloseCircle className="icon" />
          </div>
        </div>

        <div onClick={showNav} className="toggleNavbar">
          <TbGridDots className="icon" />   
        </div>
      </header>
    </section>
  );
};

export default Header;
