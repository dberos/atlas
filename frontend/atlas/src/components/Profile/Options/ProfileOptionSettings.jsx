import React from 'react'
import './profileOptions.css'
import { Link } from "react-router-dom";

const ProfileOptionSettings = () => {
  return (
    <div className="profile-options-option-container">
        <div className="profile-options-option-header">
            <div className="profile-options-option-title">
                <Link
                to={'/profile/edit'}
                >
                    Επεξεργασία Στοιχείων
                </Link>
            </div>
        </div>
        <div className="profile-options-option-image-container">
            <Link
            to={'/profile/edit'}
            style={{alignItems: 'center'}}
            >
                <img 
                src={require("../../../assets/person-profile.png")} 
                alt="sketch with a person thinking of its profile card" 
                style={{height: '80%'}}
                />
            </Link>
        </div>
    </div>
  )
}

export default ProfileOptionSettings