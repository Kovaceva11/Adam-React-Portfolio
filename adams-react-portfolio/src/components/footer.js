import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, brands } from '@fortawesome/fontawesome-svg-core/import.macro' 

export default function Footer() {
    return (
        <footer>
        <div className="ak-row ak-center ak-dark-skyblue ak-padding-16 ak-card">
      <div className="ak-third ak-section">
        <a href="https://github.com/Kovaceva11" target="_blank" className="ak-xlarge ak-hover-opacity" rel="noreferrer"><FontAwesomeIcon icon={brands('github')}/></a><br></br>
        Github Portfolio
      </div>
      <div className="ak-third ak-section">
        <a href="https://www.linkedin.com/in/AdamKovacevich1" target="_blank" className="ak-xlarge ak-hover-opacity" rel="noreferrer"><FontAwesomeIcon icon={brands('linkedin')}/></a><br></br>
        LinkedIn
      </div>
      <div className="ak-third ak-section">
        <a href="https://www.instagram.com/kovaceva11/" target="_blank" className="ak-xlarge ak-hover-opacity" rel="noreferrer"><FontAwesomeIcon icon={brands('instagram')}/></a><br></br>
        @kovaceva11
      </div>
    </div>
        <div className="ak-center ak-black ak-padding-64 ak-opacity-min ak-hover-opacity-off">
      <a href="#home" className="ak-button ak-light-skyblue"><FontAwesomeIcon icon={solid('arrow-up')}/>To the top</a>
      <p className="ak-center">copyright 2021 Adam Kovacevich. Created with love, blood, sweat and tears.</p>
    </div>
    </footer>
    );
}