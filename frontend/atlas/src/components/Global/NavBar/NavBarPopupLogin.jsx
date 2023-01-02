import React, { useEffect, useState } from 'react'
import './navbar.css'
import useCloseModal from '../../../hooks/useCloseModal';

const NavBarPopupLogin = (props) => {

    const { 
        openLogin, 
        setOpenLogin,
        menuOpenLogin,
        setMenuOpenLogin
     } = props;

    const [email, setEmail] = useState([]);
    const [password, setPassword] = useState([]);

    let ref = useCloseModal(() => {
        setOpenLogin(false);
        setMenuOpenLogin(false);
    })

    useEffect(() => {
        setEmail([]);
        setPassword([]);
    }, [openLogin])

    useEffect(() => {
        setEmail([]);
        setPassword([]);
    }, [menuOpenLogin])

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('submitted');
    }

  return (
    <div className="navbar-back">
        <div className="navbar-login-popup"
        ref={ref}
        >
            <div className="navbar-login-popup-wrapper">
                <div className="navbar-login-popup-header">
                    <h1>
                        Συνέχεια με τον λογαριασμό <br/> σου!
                    </h1>
                </div>
                <div className="navbar-login-popup-inputs">
                    <form onSubmit={handleSubmit}>
                        <div className="navbar-login-popup-inputs-input-container">
                            <h1>
                                Email
                            </h1>
                            <input 
                            type="text"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="navbar-login-popup-inputs-input-container">
                            <h1>
                            Κωδικός Πρόσβασης
                            </h1>
                            <input 
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            />
                            <p>
                            Λάθος όνομα χρήστη ή κωδικός
                            </p>
                        </div>
                        <div className="navbar-login-popup-button">
                            <button>
                            Σύνδεση
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default NavBarPopupLogin