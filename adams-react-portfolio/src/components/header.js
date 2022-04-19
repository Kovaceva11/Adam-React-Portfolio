import React from "react";
import Nav from './nav';
import Components from './index';

export default function Header() {
  return (
    <div>
        <Nav />     
        <Components.Hero />
        <Components.TechStack />
        <Components.AboutMe />        
        <Components.Portfolio />
        <Components.Resume /> 
        <Components.Contact />
        <Components.Footer />        
      </div>   
  );
}
