import React from 'react'
import '../navbar.css'
import NavBarPopupLogin from './NavBarPopupLogin';

const NavBarLogin = (props) => {

  const { 
    openLogin, 
    setOpenLogin,
    menuOpenLogin,
    setMenuOpenLogin,
    setLogged
   } = props;

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
          menuOpenLogin={menuOpenLogin}
          setMenuOpenLogin={setMenuOpenLogin}
          setLogged={setLogged}
          />
      }
    </div>
  )
}

export default NavBarLogin