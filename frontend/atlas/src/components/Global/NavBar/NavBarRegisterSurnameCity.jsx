import React from 'react'
import './navbar.css'

const NavBarRegisterSurnameCity = (props) => {

    const {
        surnameEntered,
        setSurnameEntered,
        companyCityEntered,
        setCompanyCityEntered,
        selectedDropdownOption
    } = props;

  return (
    <div className="navbar-register-popup-input-container">
        {
            selectedDropdownOption === 'Είμαι Φοιτητής' ?
            <>
                <input 
                type="text" 
                placeholder='Επώνυμο *'
                value={surnameEntered}
                onChange={(e) => setSurnameEntered(e.target.value)}
                />
                {
                surnameEntered.length !== 0 &&
                <label>
                    Επώνυμο *
                </label>
                }
            </> :
            <>
                <input 
                type="text" 
                placeholder='Πόλη *'
                value={companyCityEntered}
                onChange={(e) => setCompanyCityEntered(e.target.value)}
                />
                {
                companyCityEntered.length !== 0 &&
                    <label>
                    Πόλη *
                    </label>
                }
            </>
        }
    </div>
  )
}

export default NavBarRegisterSurnameCity