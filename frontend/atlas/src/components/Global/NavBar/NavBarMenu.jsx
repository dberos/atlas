import React, { useEffect, useState } from 'react'
import './navbar.css'
import useCloseModal from '../../../hooks/useCloseModal';
import { Link } from "react-router-dom";

const NavBarMenu = (props) => {

    const {
        setMenu,
        setMenuOpenLogin,
        setMenuOpenRegister,
        setLogged
    } = props;

    const [loginOption, setLoginOption] = useState('Σύνδεση');
    const [registerOption, setRegisterOption] = useState('Εγγραφή');

    let ref = useCloseModal(() => {
        setMenu(false);
    });

    const handleLoginClick = () => {
        // setMenu(false);
        // setMenuOpenLogin(true);
        const email = localStorage.getItem('email');
        if(email) {
            console.log('logged in');
        }
        else {
            setMenu(false);
            setMenuOpenLogin(true);
        }
    }

    const handleRegisterClick = () => {
        
        const email = localStorage.getItem('email');
        if(email) {
            setMenu(false);
            setMenuOpenRegister(false);
            setMenuOpenRegister(false);
            setLogged(false);
            localStorage.clear();
        }
        else {
            setMenu(false);
            setMenuOpenRegister(true);
        }
    }

    useEffect(() => {
        const email = localStorage.getItem('email');
        if(email) {
            setLoginOption('Προφίλ');
            setRegisterOption('Αποσύνδεση');
        }
    }, [])

  return (
    <div className='navbar-menu-container' ref={ref}>
        <div className='navbar-menu-dummy-div'/>
        <Link to={'/undergraduates'} onClick={() => setMenu(false)}>
            Φοιτητές
        </Link>
        <Link to={'/companies'} onClick={() => setMenu(false)}>
            Εταιρείες
        </Link>
        <p>
            Πανεπιστήμια
        </p>
        <p>
            Επικοινωνία
        </p>
        <p 
        style={{cursor: 'pointer'}} 
        onClick={handleLoginClick}
        >
            {loginOption}
        </p>
        <p style={{cursor: 'pointer'}}
        onClick={handleRegisterClick}>
            {registerOption}
        </p>
        </div>
  )
}

export default NavBarMenu