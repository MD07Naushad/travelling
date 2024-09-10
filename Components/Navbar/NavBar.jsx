import React, { useState } from "react";
import "./NavBar.css";
//Import icons
import { BiLogoMediumOld } from "react-icons/bi";
import { AiFillCloseCircle } from "react-icons/ai";
import { PiDotsNineBold } from "react-icons/pi";

const NavBar = () => {
  // State to track and update Navbar
  const [navBar, setNavBar] = useState("menu");
  // function to show navbar
  const showNavBar = () => {
    setNavBar("menu  showNavBar");
  };

  // function to Remove navbar
  const RemoveNavBar = () => {
    setNavBar("menu");
  };

  return (
    <div className="navBar">
      <div className="logoDiv">
        <BiLogoMediumOld className="icon" />
        <span>Ou-Trips</span>
      </div>
      <div className={navBar}>
        <ul>
          <li className="navList">Destinations</li>
          <li className="navList">About Us</li>
          <li className="navList">Testimonials</li>
          <li className="navList">Gallery</li>
        </ul>
        {/* Icons to Remove NavBar */}
        <AiFillCloseCircle className="icon  closeIcon" onClick={RemoveNavBar} />
      </div>
      <button className="signUpBtn  btn">
        {/* icon toggle  */}
        Sign Up
      </button>
      <PiDotsNineBold className="icon  menuIcon" onClick={showNavBar} />
    </div>
  );
};

export default NavBar;
