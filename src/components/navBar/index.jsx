import React, { useState } from "react";
import { FaBars, FaReact } from "react-icons/fa";
import { Link } from "react-router-dom";
import { HiX, Hix } from "react-icons/hi";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import "./style.scss";

const Navbar = () => {
  const [toggleIcon, setToggleIcon] = useState(false);

  const handleToggleIcon = () => {
    setToggleIcon(!toggleIcon);
  };

  const handleScrollTo = (elementId) => {
    // Cuộn đến phần có id là elementId
    scroll.scrollTo(document.getElementById(elementId).offsetTop, {
      duration: 500,
      smooth: "easeInOutQuart",
    });
  };

  return (
    <div className="conttennav">
      <nav className="navbar" id="nav">
        <div className="navbar_container">
          <div className="navbar-logo" onClick={() => handleScrollTo("nav")}>
            <FaReact size={30} />
          </div>
        </div>
        <ul className={`navbar-menu ${toggleIcon ? "show" : ""}`}>
          <li className="navbar-menu-item">
            <ScrollLink
              to="nav"
              spy={true}
              smooth={true}
              duration={500}
              className="navbar-item-link"
              onClick={() => handleScrollTo("nav")}
            >
              Home
            </ScrollLink>
          </li>
          <li className="navbar-menu-item">
            <ScrollLink
              to="about"
              spy={true}
              smooth={true}
              duration={500}
              className="navbar-item-link"
              onClick={() => handleScrollTo("about")}
            >
              About
            </ScrollLink>
          </li>
          {/* -------------------------- */}
          <li className="navbar-menu-item">
            <ScrollLink
              to="work"
              spy={true}
              smooth={true}
              duration={500}
              className="navbar-item-link"
              onClick={() => handleScrollTo("work")}
            >
              Work
            </ScrollLink>
          </li>
          {/* -------------------------- */}
          <li className="navbar-menu-item">
            <ScrollLink
              to="skills"
              spy={true}
              smooth={true}
              duration={500}
              className="navbar-item-link"
              onClick={() => handleScrollTo("skills")}
            >
              Skills
            </ScrollLink>
          </li>
          {/* -------------------------- */}
          <li className="navbar-menu-item">
            <ScrollLink
              to="experiene"
              spy={true}
              smooth={true}
              duration={500}
              className="navbar-item-link"
              onClick={() => handleScrollTo("experiene")}
            >
              Experiene
            </ScrollLink>
          </li>
          {/* -------------------------- */}
          <li className="navbar-menu-item">
            <ScrollLink
              to="contact"
              spy={true}
              smooth={true}
              duration={500}
              className="navbar-item-link"
              onClick={() => handleScrollTo("contact")}
            >
              Contact
            </ScrollLink>
          </li>
          {/* -------------------------- */}

          {/* Thêm các liên kết khác tương tự cho các phần còn lại */}
        </ul>
        <div className="nav-icon" onClick={handleToggleIcon}>
          {toggleIcon ? <HiX size={30} /> : <FaBars size={30} />}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
