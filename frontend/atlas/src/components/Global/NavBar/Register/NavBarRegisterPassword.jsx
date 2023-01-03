import React from 'react'
import '../navbar.css'

const NavBarRegisterPassword = (props) => {

    const {
        passwordEntered,
        setPasswordEntered,
        confirmPasswordEntered,
        setConfirmPasswordEntered
    } = props;

  return (
    <>
        <div className="navbar-register-popup-input-container">
            <input 
            type="password" 
            placeholder='Κωδικός Πρόσβασης *'
            value={passwordEntered}
            onChange={(e) => setPasswordEntered(e.target.value)}
            />
            {
                passwordEntered.length !== 0 &&
                <label>
                Κωδικός Πρόσβασης *
                </label>
            }
            </div>
            <div className="navbar-register-popup-input-container">
            <input 
            type="password" 
            placeholder='Επιβεβαίωση Κωδικού *'
            value={confirmPasswordEntered}
            onChange={(e) => setConfirmPasswordEntered(e.target.value)}
            />
            {
                confirmPasswordEntered.length !== 0 &&
                <label>
                Επιβεβαίωση Κωδικού *
                </label>
            }
        </div>
    </>
  )
}

export default NavBarRegisterPassword