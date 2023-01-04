import React from 'react'
import '../navbar.css'

const NavBarRegisterTelephone = (props) => {

    const {
        telephoneEntered,
        setTelephoneEntered
    } = props;

    const handleTelephone = (e) => {
        const telephone = e.target.value;
        setTelephoneEntered(telephone.replace(/[^0-9/]/g, ''));
    }

  return (
    <div className="navbar-register-popup-input-container">
        <input 
        type="text" 
        placeholder='Τηλέφωνο'
        value={telephoneEntered}
        onChange={handleTelephone}
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