import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro' 

import idghome1 from "../images/idghome1.png";
import longdoug from "../images/longdoug.JPG";
import pgw from "../images/pgw.png";
import passwordGenerator from "../images/password_generator.png";
import dayplanner from "../images/dayplanner.jpg";
import CheapDateScreen2 from "../images/CheapDateScreen2.png";
import employeeCMS from "../images/employeeCMS.png";
import notepad from "../images/notepad.png";
import teamprofilecreator from "../images/teamprofilecreator.png";
import countdowntimer from "../images/countdowntimer.png";

export default function Portfolio() {
    return (
        <div>
            
        <div className="bgimg-2 ak-display-container ak-opacity-min" id="portfolio">
          <div className="ak-display-middle">
            <span className="ak-xxlarge ak-text-white ak-wide">PORTFOLIO</span>
          </div>
        </div>
        <br></br>
    
        {/* <!--Portfolio of Work Completed--> */}
        <div className="ak-content ak-container ak-padding-32" id="portfolio">
          <div className="ak-row ak-card">
            <h3 className="ak-center ak-bold">My Awesome Projects</h3>
            <p className="ak-center">Below is a collection of my recent work. I hope you enjoy.</p>
          </div>
          
    
          {/* <!-- Portfolio Gallery Grid --> */}
          <div className="ak-row-padding ak-container ak-card">
            <div className="ak-col.m6 ak-center ak-padding-small">
              <a href="https://www.idgjets.com" target="_blank" rel="noreferrer"><img src={idghome1}
                  className="ak-round ak-image ak-opacity-min ak-hover-opacity" alt="IDG homepage" width="100%"/></a>
            </div>
    
            {/* <!--Second Paragraph To Side: About ME--> */}
            <div className="ak-col.m6 ak-padding-large ak-center">
              <h3>
                  My First Project
              </h3>
              <h4>
                I designed, created, and launched my current employer's website. Which I still manage today and can be
                viewed by clicking on the image above. Or the button below. Project was completed and launched in 2018.
              </h4>
              {/* <!-- <p>
                Disclaimer: I used a website editor to help create the template for the overall design of www.IDGjets.com, I
                started with a blank. I ended up having to use some code as the editor was not feature-rich enough to let me
                do certain things. Therefore I used it's developer tools to manually edit the code.
              </p> --> */}
            </div>
    
            <div className="ak-col m4 ak-padding-large ak-center" style={{whiteSpace: 'wrap'}}>
              <a href="https://www.idgjets.com" target="_blank" alt="www.idgjets.com" rel="noreferrer">
                <div
                  className="ak-center ak-padding-small ak-black ak-xlarge ak-wide ak-opacity-min ak-hover-opacity-off ak-align-middle">
                  <span className="ak-center ak-padding-small ak-black ak-xlarge ak-wide"> <FontAwesomeIcon icon={solid('rocket')}/><br></br>Deployed<span className="ak-hide-small"> </span></span>
                </div>
              </a>
            </div>
          </div>
          {/* <!-- Start of Portfolio Links and Images --> */}
          {/* <!-- Portfolio Grid --> */}
          <div className="ak-row-padding">
            <div className="ak-center ak-padding-64">
              <span className="ak-xlarge ak-border-dark-grey ak-padding-16">More of my apps!</span>
            </div>
    
            <div className="ak-third ak-margin-bottom">
              <div className="ak-card-4 ak-hover-opacity-off">
              <img src={longdoug} alt="placeholder" style={{width:'100%'}}/>
                <div className="ak-container">
                  <h3>Project App</h3>
                  <p className="ak-opacity">Shh. Its a secret.</p>
                  <p>This is my latest app build. However, it is still in the skunkworks laboratory... Not ready to be
                    unleashed. Click the buttons to view the apps Repo or Deployed version.</p>
                  <p><button className="ak-button1 ak-light-grey ak-block icon-bgPurpDonut"><FontAwesomeIcon size="xl" icon={solid('code')}/><br></br> View Github Repo</button></p>
                  <p><button className="ak-button1 icon-bgGreen ak-light-grey ak-block"><FontAwesomeIcon size="xl" icon={solid('rocket')}/><br></br> View Deployed</button></p>
                </div>                
              </div>
            </div>
    
            <div className="ak-third ak-margin-bottom">
              <div className="ak-card-4 ak-hover-opacity-off">
                <img src={pgw} alt="placeholder" style={{width:"100%"}}/>
                <div className="ak-container">
                  <h3>Planetary Grid Wireless</h3>
                  <p className="ak-opacity">M2M Communications and GPS Tracking System</p>
                  <p>Code/Deployment Details are under NDA. I helped invent an IoT device.</p>
                  <p><button className="ak-button1 ak-light-grey ak-block icon-bgPurpDonut"><FontAwesomeIcon size="xl" icon={solid('code')}/><br></br></button></p>
                  <p><button className="ak-button1 icon-bgGreen ak-light-grey ak-block"><FontAwesomeIcon size="xl" icon={solid('rocket')}/><br></br></button></p>
                </div>
              </div>
            </div>
    
            <div className="ak-third ak-margin-bottom">
              <div className="ak-card-4 ak-hover-opacity-off">
                <a href="https://github.com/Kovaceva11/Android-Countdown-TImer" target="_blank" rel="noreferrer"><img src={countdowntimer} alt="countdown timer app" style={{width:"100%"}}/></a>
                <div className="ak-container">
                  <h3>Count Down Timer App</h3>
                  <p className="ak-opacity">Android/Kotlin</p>
                  <p>This was my first Android App. Must have Android Emulator or Phone to install and deploy the app.</p>
                  <p><a href="https://github.com/Kovaceva11/Android-Countdown-TImer" target="_blank" rel="noreferrer"><button href="https://github.com/Kovaceva11/Android-Countdown-TImer" className="ak-button1 ak-light-grey ak-block icon-bgPurpDonut"><FontAwesomeIcon size="xl" icon={solid('code')}/></button></a></p>
                  <p><button className="ak-button1 ak-light-grey ak-block icon-bgGreen"><FontAwesomeIcon size="xl" icon={solid('rocket')}/></button></p>
                </div>
              </div>
            </div>
          </div>
    
          <div className="ak-row-padding">        
            <div className="ak-third ak-margin-bottom">
              <div className="ak-card-4 ak-hover-opacity-off">
                <a href="https://kovaceva11.github.io/Random-Password-Generator" target="_blank" rel="noreferrer"><img src={passwordGenerator} alt="password generator" style={{width:"100%"}}/></a>
                <div className="ak-container">
                  <h3>Password Generator</h3>
                  <p className="ak-opacity">Random Password Generator</p>
                  <p>Generates a random password between 8-128 characters. Includes Numbers, Letters and Special Characters.</p>
                  <p><a href="https://github.com/Kovaceva11/Random-Password-Generator" target="_blank" rel="noreferrer"><button className="ak-button1 ak-light-grey ak-block icon-bgPurpDonut"><FontAwesomeIcon size="xl" icon={solid('code')}/></button></a></p>
                  <p><a href="https://kovaceva11.github.io/Random-Password-Generator" target="_blank" rel="noreferrer"><button className="ak-button1 ak-light-grey ak-block icon-bgGreen"><FontAwesomeIcon size="xl" icon={solid('rocket')}/></button></a></p>
                </div>
              </div>
            </div>
    
            <div className="ak-third ak-margin-bottom">
              <div className="ak-card-4 ak-hover-opacity-off">
                <img src={dayplanner} alt="day planner" style={{width:"100%"}}/>
                <div className="ak-container">
                  <h3>Day Planner</h3>
                  <p className="ak-opacity">Day Planner</p>
                  <p>This is a simple JS application for scheduling your work day.</p>
                  <p><a href="https://github.com/Kovaceva11/Work-Day-Scheduler" target="_blank" rel="noreferrer"><button className="ak-button1 ak-light-grey ak-block icon-bgPurpDonut"><FontAwesomeIcon size="xl" icon={solid('code')}/></button></a></p>
                  <p><a href="https://kovaceva11.github.io/Work-Day-Scheduler/" target="_blank" rel="noreferrer"><button className="ak-button1 ak-light-grey ak-block icon-bgGreen"><FontAwesomeIcon size="xl" icon={solid('rocket')}/></button></a></p>
                </div>
              </div>
            </div>
    
            <div className="ak-third ak-margin-bottom">
              <div className="ak-card-4 ak-hover-opacity-off">
                <img src={CheapDateScreen2} alt="Cheap Date App" style={{width:"100%"}}/>
                <div className="ak-container">
                  <h3>CheapDate App</h3>
                  <p className="ak-opacity">A group project app build</p>
                  <p>The premier dating application for penny-pinching lovers. Designed for the budget minded bachelor or bachelorette. Generating the most fruitful, first-date ideas for even the most frugal lovers.</p>
                  <p><a href="https://github.com/Kovaceva11/CheapDate" target="_blank" rel="noreferrer"><button className="ak-button1 ak-light-grey ak-block icon-bgPurpDonut"><FontAwesomeIcon size="xl" icon={solid('code')}/></button></a></p>
                  <p><a href="https://kovaceva11.github.io/CheapDate/" target="_blank" rel="noreferrer"><button className="ak-button1 ak-light-grey ak-block icon-bgGreen"><FontAwesomeIcon size="xl" icon={solid('rocket')}/></button></a></p>
                </div>
              </div>
            </div>
    {/* <!-- Update --> */}
            <div className="ak-third ak-margin-bottom">
              <div className="ak-card-4 ak-hover-opacity-off">
                <img src={employeeCMS} alt="Employee CMS" style={{width:"100%"}}/>
                <div className="ak-container">
                  <h3>Employee CMS</h3>
                  <p className="ak-opacity">Content Management System</p>
                  <p>This is a Content Management System (CMS) which uses a command-line interface to manage a company's employee database. USES: Node.js, Inquirer and MySQL</p>
                  <p><a href="https://github.com/Kovaceva11/Employee-Tracker-CMS" target="_blank" rel="noreferrer"><button className="ak-button1 ak-light-grey ak-block icon-bgPurpDonut"><FontAwesomeIcon size="xl" icon={solid('code')}/></button></a></p>
                  <p><a href="https://github.com/Kovaceva11/Employee-Tracker-CMS" target="_blank" rel="noreferrer"><button className="ak-button1 ak-light-grey ak-block icon-bgGreen"><FontAwesomeIcon size="xl" icon={solid('rocket')}/></button></a></p>
                </div>
              </div>
            </div>   
           
            <div className="ak-third ak-margin-bottom">
              <div className="ak-card-4 ak-hover-opacity-off">
                <img src={notepad} alt="README Generator App" style={{width:"100%"}}/>
                <div className="ak-container">
                  <h3>Notepad Application</h3>
                  <p className="ak-opacity">Save your daily notes.</p>
                  <p>A simple application using Heroku, Express.JS, Javascript, HTML, CSS to create a Note Pad.</p>
                  <p><a href="https://github.com/Kovaceva11/Express.js-NOTE-TAKER" target="_blank" rel="noreferrer"><button className="ak-button1 ak-light-grey ak-block icon-bgPurpDonut"><FontAwesomeIcon size="xl" icon={solid('code')}/></button></a></p>
                  <p><a href="https://github.com/Kovaceva11/Express.js-NOTE-TAKER/blob/main/README.md" target="_blank" rel="noreferrer"><button className="ak-button1 ak-light-grey ak-block icon-bgGreen"><FontAwesomeIcon size="xl" icon={solid('rocket')}/></button></a></p>
                </div>
              </div>
            </div>
    
            <div className="ak-third ak-margin-bottom">
              <div className="ak-card-4 ak-hover-opacity-off">
                <img src={teamprofilecreator} alt="README Generator App" style={{width:"100%"}}/>
                <div className="ak-container">
                  <h3>Team Profile Generator</h3>
                  <p className="ak-opacity">Jest Testing</p>
                  <p>This is an application to generate a webpage using NodeJS, Javascript, Jest, Inquirer, HTML and CSS. Created with a Testing-First mentality and strong focus on Object Orientated Programming.</p>
                  <p><a href="https://github.com/Kovaceva11/Team-Profile-Creator" target="_blank" rel="noreferrer"><button className="ak-button1 ak-light-grey ak-block icon-bgPurpDonut"><FontAwesomeIcon size="xl" icon={solid('code')}/></button></a></p>
                  <p><a href="https://github.com/Kovaceva11/Team-Profile-Creator/blob/main/README.md" target="_blank" rel="noreferrer"><button className="ak-button1 ak-light-grey ak-block icon-bgGreen"><FontAwesomeIcon size="xl" icon={solid('rocket')}/></button></a></p>
                </div>
              </div>
            </div>
    {/* <!-- End Update --> */}
       
          </div>
        </div>
        <div className="bgimg-3 ak-display-container ak-opacity-min">
      <div className="ak-display-middle">
        <span className="ak-xxlarge ak-text-white ak-wide">Professional History</span>
      </div>
    </div>
        
        </div>
    );
}