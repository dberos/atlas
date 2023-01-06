import React from 'react'
import './profileOptions.css'

const ProfileOptionSettings = () => {
  return (
    <div className="profile-options-option-container">
        <div className="profile-options-option-header">
            <div className="profile-options-option-title">
                <p>
                    Επεξεργασία Στοιχείων
                </p>
            </div>
        </div>
        <div className="profile-options-option-image-container">
            <p
            style={{alignItems: 'center'}}
            >
                <img 
                src={require("../../../assets/person-profile.png")} 
                alt="sketch with a person thinking of its profile card" 
                style={{height: '80%'}}
                />
            </p>
        </div>
    </div>
  )
}

export default ProfileOptionSettings