import React from 'react'
import './personas.css'
import { Link } from "react-router-dom";

const PersonaCompany = () => {
  return (
    <div className="personas-persona-container"
    style={{borderImageSource: 'linear-gradient(270deg, rgba(190,117,15,1) 0%, rgba(33,57,103,1) 80%, rgba(19,37,83,1) 100%)'}}>
        <div className="personas-header-container">
            <div className="personas-title">
                <span>
                    <Link to={'/companies'}>
                        Θες να αναπτύξεις την επιχείρησή σου;
                    </Link>
                </span>
            </div>
            <div className="personas-subtitle">
                <h2>
                    Δημοσίευσε νέα θέση Πρακτικής Άσκησης και γνώρισε
                    τους Φοιτητές που ενδιαφέρονται!
                </h2>
            </div>
        </div>
        <div className="personas-image-container">
            <Link to={'/companies'}>
                <img 
                src={require('../../../assets/person-jump.png')} 
                alt="sketch of a person jumping happily" 
                draggable='false'
                />
            </Link>
        </div>
    </div>
  )
}

export default PersonaCompany