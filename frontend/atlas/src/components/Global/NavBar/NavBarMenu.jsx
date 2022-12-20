import React from 'react'
import './navbar.css'
import useCloseModal from '../../../hooks/useCloseModal';

const NavBarMenu = (props) => {
    let ref = useCloseModal(() => {
        props.setMenu(false);
    });

  return (
    <div className='navbar-menu-container' ref={ref}>
        <div className='navbar-menu-dummy-div'/>
        <p>
            Φοιτητές
        </p>
        <p>
            Εταιρείες
        </p>
        <p>
            Πανεπιστήμια
        </p>
        <p>
            Επικοινωνία
        </p>
        <p>
            Σύνδεση / Προφίλ
        </p>
        <p>
            Εγγραφή / Αποσύνδεση
        </p>
        </div>
  )
}

export default NavBarMenu