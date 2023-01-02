import React from 'react'
import './navbar.css'
import NavBarPopupRegister from './NavBarPopupRegister';

const NavBarRegister = (props) => {

  const {
    openRegister,
    setOpenRegister,
    menuOpenRegister,
    setMenuOpenRegister
  } = props;

  return (
    <div className='navbar-register'
    onClick={() => setOpenRegister(true)}
    style={{backgroundColor: openRegister && '#112c5d'}}
    >
      <button
      type='button'
      >
          Εγγραφή
      </button>
      {
        openRegister &&
          <NavBarPopupRegister
          openRegister={openRegister}
          setOpenRegister={setOpenRegister}
          menuOpenRegister={menuOpenRegister}
          setMenuOpenRegister={setMenuOpenRegister}
          />
      }
    </div>
  )
}

export default NavBarRegister