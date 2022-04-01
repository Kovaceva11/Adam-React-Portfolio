import React from "react";
import Nav from './nav';
import Components from './index';

export default function Header() {
  return (
    <div>
        <Nav />
      
      <div className="bgimg-1" id="home">
      <div className="ak-display-middle" style={{whiteSpace:'nowrap'}}>
        <span className="ak-center ak-padding-large ak-black ak-xlarge ak-wide we-animate-opacity">Adam<span
            className="ak-hide-small"> </span> Kovacevich</span>
      </div>
      </div>
    
        <Components.AboutMe />
        <Components.Portfolio />
        <Components.Resume /> 
        <Components.Contact />
        <Components.Footer />        
      </div>
   
  );
}
