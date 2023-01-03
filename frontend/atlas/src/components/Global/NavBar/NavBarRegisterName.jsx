import React from 'react'
import './navbar.css'

const NavBarRegisterName = (props) => {

    const {
        nameEntered,
        setNameEntered,
        companyNameEntered,
        setCompanyNameEntered,
        selectedDropdownOption
    } = props;

  return (
    <div className="navbar-register-popup-input-container">
        {
            selectedDropdownOption === 'Είμαι Φοιτητής' ?
            <>
                <input 
                type="text" 
                placeholder='Όνομα *'
                value={nameEntered}
                onChange={(e) => setNameEntered(e.target.value)}
                />
                {
                nameEntered.length !== 0 &&
                    <label>
                    Όνομα *
                    </label>
                }
            </> :
            <>
                <input 
                type="text" 
                placeholder='Επωνυμία *'
                value={companyNameEntered}
                onChange={(e) => setCompanyNameEntered(e.target.value)}
                />
                {
                companyNameEntered.length !== 0 &&
                    <label>
                    Επωνυμία *
                    </label>
                }
            </>
        }
    </div>
  )
}

export default NavBarRegisterName