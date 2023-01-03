import React from 'react'
import { useState } from 'react'
import './navbar.css'
import NavBarMyAtlas from './NavBarMyAtlas'
import NavBarLogin from './NavBarLogin'
import NavBarRegister from './Register/NavBarRegister'

const NavBarAccount = (props) => {

  const { 
    openLogin, 
    setOpenLogin,
    menuOpenLogin,
    setMenuOpenLogin,
    openRegister,
    setOpenRegister,
    menuOpenRegister,
    setMenuOpenRegister
   } = props;

  const [logged, setLogged] = useState(false);

  return (
    <div className='navbar-login-register-container'>
        {
            logged ?
                <NavBarMyAtlas/> :
                    <>
                        <NavBarLogin
                        openLogin={openLogin}
                        setOpenLogin={setOpenLogin}
                        menuOpenLogin={menuOpenLogin}
                        setMenuOpenLogin={setMenuOpenLogin}
                        />
                        <NavBarRegister
                        openRegister={openRegister}
                        setOpenRegister={setOpenRegister}
                        menuOpenRegister={menuOpenRegister}
                        setMenuOpenRegister={setMenuOpenRegister}
                        />
                    </>
        }
    </div>
  )
}

export default NavBarAccount