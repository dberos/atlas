import React from 'react'
import '../navbar.css'

const NavBarRegisterStreet = (props) => {

    const {
        companyStreetEntered,
        setCompanyStreetEntered,
        companyStreetNumberEntered,
        setCompanyStreetNumberEntered
    } = props;

    const handleStreetNumber = (e) => {
        const streetNumber = e.target.value;
        setCompanyStreetNumberEntered(streetNumber.replace(/[^0-9/]/g, ''));
    }

  return (
    <div className="navbar-register-popup-company-input">
        <div className="navbar-register-popup-company-input-street">
            <input 
            type="text" 
            placeholder='Οδός *'
            value={companyStreetEntered}
            onChange={(e) => setCompanyStreetEntered(e.target.value)}
            />
            {
            companyStreetEntered.length !== 0 &&
                <label>
                    Οδός *
                </label>
            }
        </div>
        <div className="navbar-register-popup-company-input-number">
            <input 
            type="text" 
            placeholder='Αριθμός *'
            value={companyStreetNumberEntered}
            onChange={handleStreetNumber}
            />
            {
                companyStreetNumberEntered.length !== 0 &&
                    <label>
                        Αριθμός *
                    </label>
            }
        </div>
    </div>
  )
}

export default NavBarRegisterStreet