import React from "react";
import toggle from "../js/toggle";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used


export default function Nav() {
    return (
      <nav>
        <div className="ak-top ak-card ak-right">
          <div className="ak-bar ak-right" id="navBar">
            <button
              onClick={toggle}
              title="Toggle Nav Menu"
              className="ak-bar-item ak-button ak-hover-skyblue ak-left ak-center"
            >
              <FontAwesomeIcon  className="ak-bar-item ak-button ak-hover-skyblue ak-left" size='lg' icon={solid('bars')}/>
            </button>
            <a href="#home" className="ak-bar-item ak-button">
              {" "}
              Home
            </a>
            <a
              href="#Resume"
              className="ak-bar-item ak-button ak-hide-small"
            >
              <i className="fa fa-file"></i> Resume
            </a>
            <a href="#contact" className="ak-bar-item ak-button ak-hide-small">
              <i className="fa fa-envelope"></i> Contact
            </a>
            <a href="#portfolio" className="ak-bar-item ak-button ak-hide-small">
              <i className="fas fa-microchip"></i>
              Portfolio
            </a>
            <a href="#about-me" className="ak-bar-item ak-button ak-hide-small">
              <i className="fa fa-user"></i> About Me
            </a>
          </div>
          <div id="navDrop" className="ak-bar-block ak-white ak-hide">
            <a
              href="#about-me"
              className="ak-bar-item ak-button"
              onClick={toggle}
            >
              ABOUT ME
            </a>
            <a
              href="#portfolio"
              className="ak-bar-item ak-button"
              onClick={toggle}
            >
              PORTFOLIO
            </a>
            <a
              href="#contact"
              className="ak-bar-item ak-button"
              onClick={toggle}
            >
              CONTACT
            </a>
            <a
              href="#Resume"
              className="ak-bar-item ak-button"
              onClick={toggle}
            >
              RESUME
            </a>
            <a
              href="#home"
              className="ak-bar-item ak-button"
              onClick={toggle}
            >
              HOME
            </a>
          </div>
        </div>     
              
      </nav>
    );
  }