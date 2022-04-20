import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { brands, solid } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used

import falcon from '../images/Flacon7x.jpg';
import AdamResume from '../images/Adam_Kovacevich-Resume2022.pdf';

export default function Resume() {
    return (
<div className="ak-light-grey" id="Resume">


{/* <!-- Page Container --> */}
<div className="ak-content ak-margin-top" style={{maxWidth: '1400px'}}>

{/* <!-- The Grid --> */}
<div className="ak-row-padding">

{/* <!-- Left Column --> */}
<div className="ak-third">

  <div className="ak-white ak-text-grey ak-card-4">
    <div className="ak-display-container">
      <img src={falcon} style={{width:"100%"}} alt="Avatar" />
      <div className="ak-display-bottomleft ak-container ak-text-black">
        <h2>Adam Kovacevich</h2>
        
      </div>
    </div>
    <div className="ak-container">
      <p><i className="fa fa-briefcase fa-fw ak-margin-right ak-large ak-text-grey"></i>Full-Stack Developer</p>
      <p><i className="fa fa-home fa-fw ak-margin-right ak-large ak-text-grey"></i>Atlanta, GA</p>
      <p><i className="fa fa-envelope fa-fw ak-margin-right ak-large ak-text-grey"></i>akovacevich11@gmail.com</p>
      <p><i className="fa fa-phone fa-fw ak-margin-right ak-large ak-text-grey"></i>(269)-760-6886</p>
      <p><a href={AdamResume} download="" target="_blank" rel="noreferrer"><button className="ak-center ak-button ak-green ak-block"><i className="fas fa-file-pdf fa-fw"></i>Download My Resume <FontAwesomeIcon size='xl' icon={solid('file-pdf')}/></button></a></p>
      
      
      <p className="ak-large"><b><i className="fas fa-cogs fa-2x fa-fw ak-margin-right ak-text-skyblue"></i>Technologies</b></p>
      
      <p className="ak-wide"><FontAwesomeIcon size='xl' icon={brands('html5')}/> HTML</p>
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
      <FontAwesomeIcon size='xl' icon={solid('database')}/> MongoDB
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
      <FontAwesomeIcon size='xl' icon={solid('database')}/> mySQL
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
      <FontAwesomeIcon size='xl' icon={solid('server')}/> Apollo GraphQL
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
      
      <p className="ak-large ak-text-theme"><b><i className="fa fa-globe fa-2x fa-fw ak-margin-right ak-text-skyblue"></i>Languages</b></p>
      
      <p>English</p>
      <div className="ak-light-grey ak-round-xlarge">
        <div className="ak-round-xlarge ak-skyblue" style={{height:'24px', width:'55%'}}></div>
      </div>
      <p>French</p>
      <div className="ak-light-grey ak-round-xlarge">
        <div className="ak-round-xlarge ak-skyblue" style={{height:'24px', width:'55%'}}></div>
      </div><br></br>          
      
    </div>
  </div>

{/* <!-- End Left Column --> */}
</div>

{/* <!-- Right Column --> */}
<div className="ak-twothird">

  <div className="ak-container ak-card ak-white ak-margin-bottom">
    <h2 className="ak-text-grey ak-padding-16"><i className="fa fa-suitcase fa-fw ak-margin-right ak-xxlarge ak-text-skyblue"></i>Career Experience</h2>
    <div className="ak-container">
      <h5 className="ak-opacity ak-text-grey"><b>Business Development/ Interior Development Group, Inc.</b></h5>
      <h6 className="ak-text-skyblue"><i className="fa fa-calendar fa-fw ak-margin-right"></i>Dec 2017 - <span className="ak-tag ak-skyblue ak-round">Current</span></h6>
      <p>My roles at this company includes management of sales, marketing and business development activities. Additionally, I assist in the design, engineering and fabrication of aircraft interior components and fixtures. Manage new aircraft projects across multiple departments. My customers include high-net-worth individuals, and owners/founders of Fortune 100 and Fortune 500 companies.</p>
      <p>I also designed and created the company's website.</p>
      
    </div>
    <div className="ak-container">
      <h5 className="ak-opacity ak-text-grey"><b>Deputy Chief Technical Officer/ Planetary Grid Wireless, LLC.</b></h5>
      <h6 className="ak-text-skyblue"><i className="fa fa-calendar fa-fw ak-margin-right"></i>Jan 2012 - <span className="ak-tag ak-skyblue ak-round">Current</span></h6>
      <p>Assisted with the design, engineering and development of a Machine-2-Machine wireless communications device. This GPS asset management device connects with the Iridium Satellite Network and Other celluar networks to track a number of customizable variables + remote control and access of on-board systems.</p>
      
    </div>
    <div className="ak-container">
      <h5 className="ak-opacity ak-text-grey"><b>Director of Business Development / CharterPad</b></h5>
      <h6 className="ak-text-skyblue"><i className="fa fa-calendar fa-fw ak-margin-right"></i>Mar 2016 - June 2016</h6>
      <p>Generated partnerships and new customer accounts with a nationwide network of FAA Part-135 Air Carriers. Assisted with the integration of vendor aircraft scheduling software, Rockwell Collins FOS and other software to CharterPad's software suite and database. This helped increase CharterPad's product offering by enabling access to hundreds of additional flights.</p>
      
    </div>
    <div className="ak-container">
        <h5 className="ak-opacity ak-text-grey"><b>VP Sales and Business Development/ BizjetMobile, LLC.</b></h5>
        <h6 className="ak-text-skyblue"><i className="fa fa-calendar fa-fw ak-margin-right"></i>Aug 2013 - Mar 2016</h6>
        <p>Managed sales and business development of BizjetMobile hardware and software solutions. Project Manager for the CHiiMP and Grrilla in-flight connectivity systems. Tasked with helping BizjetMobile enter the in-flight entertainment and wireless communications marketplace for the Business Aviation Industry. Successfully negotiated over $3M in hardware sales and satellite communications data contracts. Strategically assisted with growing the business from Start-Up phase to becoming a profitable company.</p>
      </div>
  </div>

  <div className="ak-container ak-card ak-white">
    <h2 className="ak-text-grey ak-padding-16"><i className="fa fa-certificate fa-fw ak-margin-right ak-xxlarge ak-text-skyblue"></i>Education</h2>
    <div className="ak-container">
      <h5 className="ak-opacity ak-text-grey"><b>Georgia-Tech</b></h5>
      <h6 className="ak-text-skyblue"><i className="fa fa-calendar fa-fw ak-margin-right"></i>Oct 2021 - <span className="ak-tag ak-skyblue ak-round">Current</span></h6>
      <p>Full-Stack Web Development</p>
      
    </div>
    <div className="ak-container">
      <h5 className="ak-opacity ak-text-grey"><b>Embry Riddle Aeronautical University</b></h5>
      <h6 className="ak-text-skyblue"><i className="fa fa-calendar fa-fw ak-margin-right"></i>2010 - 2011</h6>
      <p>Aviation Administration</p>
      
    </div>
    <div className="ak-container">
      <h5 className="ak-opacity ak-text-grey"><b>Western Michigan University - College of Aviation</b></h5>
      <h6 className="ak-text-skyblue"><i className="fa fa-calendar fa-fw ak-margin-right"></i>2007 - 2010</h6>
      <p>Aviation Flight Science and Business Administration</p>
    </div>
  </div>

{/* <!-- End Right Column --> */}
</div>

{/* <!-- End Grid --> */}
</div>

{/* <!-- End Page Container --> */}
</div>
</div>
    );
}