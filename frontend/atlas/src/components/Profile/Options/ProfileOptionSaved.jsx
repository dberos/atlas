import React from 'react'
import './profileOptions.css'
import { Link } from "react-router-dom";

const ProfileOptionSaved = () => {
  return (
    <div className="profile-options-option-container">
        <div className="profile-options-option-header">
            <div className="profile-options-option-title">
                <Link>
                    Αποθηκευμένες Θέσεις
                </Link>
            </div>
        </div>
        <div className="profile-options-option-image-container">
            <Link>
                <img 
                src={require("../../../assets/person-thinking.png")} 
                alt="sketch with a person thinking on its laptop" 
                />
            </Link>
        </div>
    </div>
  )
}

export default ProfileOptionSaved