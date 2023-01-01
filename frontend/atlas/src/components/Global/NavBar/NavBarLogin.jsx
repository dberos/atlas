import React from 'react'
import './navbar.css'
import NavBarPopupLogin from './NavBarPopupLogin';

const NavBarLogin = (props) => {

  const { openLogin, setOpenLogin } = props;

  return (
    <div className='navbar-login'
    onClick={() => setOpenLogin(true)}
    style={{backgroundColor: openLogin && '#be750f'}} // Default color not hovered for mouse exiting screen
    >
      <button
      type='button'
      >
          Σύνδεση
      </button>
      {
        openLogin && 
          <NavBarPopupLogin
          openLogin={openLogin}
          setOpenLogin={setOpenLogin}
          />
      }
    </div>
  )
}

export default NavBarLogin