import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'; 


export default function Contact() {
    return (
        <div className="ak-content ak-container ak-padding-64">
      <h3 className="ak-center">The Mountains called...</h3>
      <p className="ak-center"><em>I answered.</em></p>

      <div className="ak-row ak-padding-32 ak-section ak-card">
        
        <div className="ak-col m8 ak-panel">
          <br></br>
          <div className="ak-large ak-margin-bottom">
            <div className=" ak-hover-text-black ak-xlarge ak-margin-right"><FontAwesomeIcon icon={solid('location-dot')}/></div> Atlanta, US<br></br>
            <div className="ak-hover-text-black ak-xlarge ak-margin-right"><FontAwesomeIcon icon={solid('phone')}/></div> Phone: (269)-760-6886<br></br>
            <div className="ak-hover-text-black ak-xlarge ak-margin-right"><FontAwesomeIcon icon={solid('envelope')}/></div> Email: <a
              href="mailto: akovacevich11@gmail.com">akovacevich11@gmail.com</a><br></br>
          </div>
          <p>I can't wait to code <FontAwesomeIcon icon={solid('code')}/> for you. <FontAwesomeIcon icon={solid('heart')}/><br></br></p>
          <form action="mailto:akovacevich11@gmail.com" enctype="multipart/form-data" name="PortfolioContactForm">
            <div className="ak-row-padding" style={{margin: "0 -16px 8px -16px"}}>
              <div className="ak-half">
                <input className="ak-input ak-border" type="text" placeholder="Name" required name="Name"/>
              </div>
              <div className="ak-half">
                <input className="ak-input ak-border" type="text" placeholder="Email" required name="Email"/>
              </div>
            </div>
            <input className="ak-input ak-border" type="text" placeholder="Message" required name="Message"/>
            <button className="ak-button ak-black ak-right ak-section" type="submit" value="Submit">
            <FontAwesomeIcon icon={solid('jet-fighter')}/><br></br> SEND MESSAGE
            </button>
          </form>
        </div>
      </div>
      </div>
        

    );
}