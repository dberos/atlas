import React from 'react'
import './navbar.css'

const NavBarRegisterEmail = (props) => {

    const {
        emailEntered,
        setEmailEntered
    } = props;

  return (
    <div className="navbar-register-popup-input-container">
        <input 
        type="text" 
        placeholder='Email *'
        value={emailEntered}
        onChange={(e) => setEmailEntered(e.target.value)}
        />
        {
            emailEntered.length !== 0 &&
            <label>
                Email *
            </label>
        }
    </div>
  )
}

export default NavBarRegisterEmail