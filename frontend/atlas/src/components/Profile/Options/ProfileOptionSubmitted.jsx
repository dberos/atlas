import React from 'react'
import './profileOptions.css'
import { Link } from "react-router-dom";

const ProfileOptionSubmitted = () => {
  return (
    <div className="profile-options-option-container">
        <div className="profile-options-option-header">
            <div className="profile-options-option-title">
                <Link>
                    Καταχωρημένες Θέσεις
                </Link>
            </div>
        </div>
        <div className="profile-options-option-image-container">
            <Link>
                <img 
                src={require("../../../assets/person-work.png")} 
                alt="sketch with a person working on its laptop" 
                />
            </Link>
        </div>
    </div>
  )
}

export default ProfileOptionSubmitted