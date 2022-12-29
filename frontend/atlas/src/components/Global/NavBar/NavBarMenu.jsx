import React from 'react'
import './navbar.css'
import useCloseModal from '../../../hooks/useCloseModal';
import { Link } from "react-router-dom";

const NavBarMenu = (props) => {

    const { setMenu } = props;

    let ref = useCloseModal(() => {
        setMenu(false);
    });

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
        <p style={{cursor: 'pointer'}}>
            Σύνδεση / Προφίλ
        </p>
        <p style={{cursor: 'pointer'}}>
            Εγγραφή / Αποσύνδεση
        </p>
        </div>
  )
}

export default NavBarMenu