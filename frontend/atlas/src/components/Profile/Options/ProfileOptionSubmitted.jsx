import React, { useState, useEffect } from 'react'
import './profileOptions.css'
import { Link } from "react-router-dom";

const ProfileOptionSubmitted = () => {

    const [type, setType] = useState([]);

    useEffect(() => {
        setType(localStorage.getItem('type'));
    }, [])

  return (
    <div className="profile-options-option-container">
        <div className="profile-options-option-header">
            <div className="profile-options-option-title">
                <Link to={type === 'undergraduate' && '/profile/undergraduates/submitted'}>
                    Καταχωρημένες Θέσεις
                </Link>
            </div>
        </div>
        <div className="profile-options-option-image-container">
            <Link to={type === 'undergraduate' && '/profile/undergraduates/submitted'}>
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