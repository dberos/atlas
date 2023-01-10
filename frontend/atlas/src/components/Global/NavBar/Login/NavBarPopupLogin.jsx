import React, { useEffect, useState } from 'react'
import '../navbar.css'
import useCloseModal from '../../../../hooks/useCloseModal';
import { loginUser } from '../users';

const NavBarPopupLogin = (props) => {

    const { 
        openLogin, 
        setOpenLogin,
        menuOpenLogin,
        setMenuOpenLogin,
        setLogged
     } = props;

    const [email, setEmail] = useState([]);
    const [password, setPassword] = useState([]);
    const [error, setError] = useState([]);

    let ref = useCloseModal(() => {
        setOpenLogin(false);
        setMenuOpenLogin(false);
    })

    useEffect(() => {
        setEmail([]);
        setPassword([]);
        setError([]);
    }, [openLogin])

    useEffect(() => {
        setEmail([]);
        setPassword([]);
        setError([]);
    }, [menuOpenLogin])

    const handleSubmit = async (e) => {
        e.preventDefault();
        const user = {
            'email': email,
            'password': password
        }
        const data = await loginUser(user);
        if(data) {
            localStorage.setItem('id', data.id);
            localStorage.setItem('email', data.email);
            localStorage.setItem('type', data.type);
            setLogged(true);
            setOpenLogin(false);
            setMenuOpenLogin(false);
        }
        else {
            setError('Λάθος email ή κωδικός');
        }
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
                            {
                                error.length !== 0 &&
                                    <p>
                                        {error}
                                    </p>
                            }
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