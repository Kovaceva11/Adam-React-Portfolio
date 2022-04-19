import React from "react";
import profilepic from "../images/profilepic.JPG";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { brands } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used



export default function AboutMe() {
  return (
    <div className="ak-content ak-container ak-padding-64" id="about-me">
      <div className="ak-row ak-card">
        <h3 className="ak-center ak-bold">About Me</h3>
        <p className="ak-center ak-bold">
          <em>Ascending to new heights and crushing coding cruxes.</em>
        </p>
      </div>

      <p>
        I am a Full-Stack Web Developer and Software Engineer.
        From Front-End to Back-End; I am coding my very own beautiful, fully
        responsive websites and mobile applications. My goal is to become a
        Full-Stack Web Developer with a heavy focus on iOS and Android mobile
        application development. I eagerly look forward to helping you deploy
        the perfect applications to help your business succeed.
      </p>

      <div className="ak-row ak-card">
        <div className="ak-col m6 ak-center ak-padding-large">
          <p>
            <b>
              <i className="fa fa-user ak-margin-right"></i>Adam Kovacevich
            </b>
          </p>
          <p>Age 32</p>
          <p>Atlanta, Georgia</p>
          <img
            src={profilepic}
            className="ak-round ak-image ak-opacity ak-hover-opacity-off"
            alt="profile pic"
            width="500"
            height="333"
          ></img>
        </div>
        <div className="ak-col m6 ak-padding-large ak-hide-small">
          <p>
            Welcome to my website. I am excited you are here to learn more about
            me and what drives my continued success. Born on January 31st, 1989
            in Seoul, South Korea and later adopted by a loving family from
            Southwest Michigan. I grew up in a small farming town and quickly
            fell in love with the outdoors. Everything from camping and
            backpacking to hunting, fishing and rock-climbing. As an adventurer
            and a pilot, I have developed a very unique skill-set which helps
            propel my life, both professionally and personally. I utilize
            dedication, discipline, integrity and excellence; in all I do.
          </p>
        </div>
        <div className="ak-col.m6 ak-padding-large ak-center">
          <h4>
            "You have no idea what you're capable of until you try."
            <p>-unknown</p>
          </h4>
        </div>
      </div>
      <p>
        10 years... A decade of experience within many facets of the Business
        Aviation industry. I have worked in everything from sales, marketing and
        business development to starting my own companies. I have worked in
        numerous successful start-ups to get them on the{" "}
        <em>"take-off-roll"</em>, and even some who have failed. The lessons I
        have learned and the knowledge I have gained from these experiences
        helps lead my career goals and personal drive.
      </p>

      <h2 className="ak-xlarge ak-center ak-padding-64 ak-card">
        Full-Stack Proficiencies
      </h2>
      <p className="ak-wide">
      <FontAwesomeIcon size='xl' icon={brands('html5')}/> HTML
      </p>
      <div className="ak-light-skyblue">
        <div
          className="ak-container ak-padding-small ak-dark-skyblue ak-center"
          style={{ width: '100%' }}
        >
          100%
        </div>
      </div>
      <p className="ak-wide">
      <FontAwesomeIcon size='xl' icon={brands('css3')}/> CSS
      </p>
      <div className="ak-light-skyblue">
        <div
          className="ak-container ak-padding-small ak-dark-skyblue ak-center"
          style={{ width: '100%' }}
        >
          100%
        </div>
      </div>
      <p className="ak-wide">
      <FontAwesomeIcon size='xl' icon={brands('JS')}/> Javascript
      </p>
      <div className="ak-light-skyblue">
        <div
          className="ak-container ak-padding-small ak-dark-skyblue ak-center"
          style={{ width: '95%' }}
        >
          95%
        </div>
      </div>
      <p className="ak-wide">
      <FontAwesomeIcon size='xl' icon={brands('react')}/> React.js
      </p>
      <div className="ak-light-skyblue">
        <div
          className="ak-container ak-padding-small ak-dark-skyblue ak-center"
          style={{ width: '75%' }}
        >
          75%
        </div>
      </div>
      <p className="ak-wide">
      <FontAwesomeIcon size='xl' icon={brands('node-js')}/> Node.js
      </p>
      <div className="ak-light-skyblue">
        <div
          className="ak-container ak-padding-small ak-dark-skyblue ak-center"
          style={{ width: '100%' }}
        >
          100%
        </div>
      </div>
      <p className="ak-wide">
      <FontAwesomeIcon size='xl' icon={brands('swift')}/> Swift
      </p>
      <div className="ak-light-skyblue">
        <div
          className="ak-container ak-padding-small ak-dark-skyblue ak-center"
          style={{ width: '5%' }}
        >
          5%
        </div>
      </div>
      <p className="ak-wide">
      <FontAwesomeIcon size='xl' icon={brands('android')}/> Kotlin
      </p>
      <div className="ak-light-skyblue">
        <div
          className="ak-container ak-padding-small ak-dark-skyblue ak-center"
          style={{ width: '5%' }}
        >
          5%
        </div>
      </div>
    </div>
  );
}
