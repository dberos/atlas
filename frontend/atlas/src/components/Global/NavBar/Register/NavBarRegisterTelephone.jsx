import React from 'react'
import '../navbar.css'

const NavBarRegisterTelephone = (props) => {

    const {
        telephoneEntered,
        setTelephoneEntered
    } = props;

  return (
    <div className="navbar-register-popup-input-container">
        <input 
        type="text" 
        placeholder='Τηλέφωνο'
        value={telephoneEntered}
        onChange={(e) => setTelephoneEntered(e.target.value)}
        />
        {
            telephoneEntered.length !== 0 &&
            <label>
                Τηλέφωνο
            </label>
        }
    </div>
  )
}

export default NavBarRegisterTelephone