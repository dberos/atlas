import axios from 'axios';
import React from 'react'
import '../navbar.css'

const NavBarRegisterEmail = (props) => {

    const {
        emailEntered,
        setEmailEntered,
        emailError,
        setEmailError
    } = props;

    const getEmail = async (email) => {
        const response = await axios.get(`http://localhost:8080/users/${email}`);
        return response.data;
    }
    
    const handleChange = async (e) => {
        const email = e.target.value;
        setEmailEntered(email);
        /* eslint-disable no-useless-escape */
        const emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if(email.length !== 0 ){
            const notExists = await getEmail(email);
            if(notExists) {
                if(email.match(emailFormat)) {
                    setEmailError('Email *');
                }
                else {
                    setEmailError('example@email.com');
                }
            }
            else {
                setEmailError('Το email χρησιμοποιείται ήδη');
            }
        }
        else {
            setEmailError('Email *');
        }
    }

  return (
    <div className="navbar-register-popup-input-container">
        <input 
        type="text" 
        placeholder='Email *'
        value={emailEntered}
        onChange={handleChange}
        style={{outline: emailError !== 'Email *' && '2px solid red'}}
        />
        {
            emailEntered.length !== 0 &&
            <label>
                {emailError}
            </label>
        }
    </div>
  )
}

export default NavBarRegisterEmail