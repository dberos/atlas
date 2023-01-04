import React from 'react'
import '../navbar.css'

const NavBarRegisterPassword = (props) => {

    const {
        passwordEntered,
        setPasswordEntered,
        confirmPasswordEntered,
        setConfirmPasswordEntered,
        passwordError,
        setPasswordError
    } = props;

    const handlePassword = (e) => {
        const password = e.target.value;
        setPasswordEntered(password);
        if(confirmPasswordEntered.length === 0) {
            setPasswordError('Επιβεβαίωση Κωδικού *');
        }
        else if(confirmPasswordEntered.length !== 0 && confirmPasswordEntered !== password) {
            setPasswordError('Οι κωδικοί πρέπει να ταιριάζουν');
        }
        else {
            setPasswordError('Επιβεβαίωση Κωδικού *');
        }
    }

    const handleConfirmPassword = (e) => {
        const password = e.target.value;
        setConfirmPasswordEntered(password);
        if(password.length === 0) {
            setPasswordError('Επιβεβαίωση Κωδικού *');
        }
        else if(passwordEntered.length !== 0 && passwordEntered !== password) {
            setPasswordError('Οι κωδικοί πρέπει να ταιριάζουν');
        }
        else {
            setPasswordError('Επιβεβαίωση Κωδικού *');
        }
    }

  return (
    <>
        <div className="navbar-register-popup-input-container">
            <input 
            type="password" 
            placeholder='Κωδικός Πρόσβασης *'
            value={passwordEntered}
            onChange={handlePassword}
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
            onChange={handleConfirmPassword}
            style={{outline: passwordError !== 'Επιβεβαίωση Κωδικού *' && '2px solid red'}}
            />
            {
                confirmPasswordEntered.length !== 0 &&
                <label>
                    {passwordError}
                </label>
            }
        </div>
    </>
  )
}

export default NavBarRegisterPassword