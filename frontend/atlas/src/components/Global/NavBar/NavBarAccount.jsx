import React from 'react'
import './navbar.css'
import NavBarMyAtlas from './NavBarMyAtlas'
import NavBarLogin from './Login/NavBarLogin'
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
    setMenuOpenRegister,
    logged,
    setLogged
   } = props;

  return (
    <div className='navbar-login-register-container'>
        {
            logged ?
                <NavBarMyAtlas
                setLogged={setLogged}
                setOpenLogin={setOpenLogin}
                setMenuOpenLogin={setMenuOpenLogin}
                /> :
                    <>
                        <NavBarLogin
                        openLogin={openLogin}
                        setOpenLogin={setOpenLogin}
                        menuOpenLogin={menuOpenLogin}
                        setMenuOpenLogin={setMenuOpenLogin}
                        setLogged={setLogged}
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