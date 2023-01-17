import React, { useState, useEffect } from 'react'
import './profileOptions.css'
import { Link } from "react-router-dom";

const ProfileOptionSaved = () => {

    const [type, setType] = useState([]);

    useEffect(() => {
        setType(localStorage.getItem('type'));
    }, [])

  return (
    <div className="profile-options-option-container">
        <div className="profile-options-option-header">
            <div className="profile-options-option-title">
                <Link 
                to={type === 'undergraduate' ? '/profile/undergraduates/saved' : '/profile/companies/saved'}
                >
                    {
                        type === 'undergraduate' ?
                            'Αποθηκευμένες Θέσεις' :
                                'Αποθηκευμένες Αγγελίες'
                    }
                </Link>
            </div>
        </div>
        <div className="profile-options-option-image-container">
            <Link
                to={type === 'undergraduate' ? '/profile/undergraduates/saved' : '/profile/companies/saved'}
            >
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