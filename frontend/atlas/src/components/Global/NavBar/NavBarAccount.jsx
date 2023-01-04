import React, { useEffect } from 'react'
import { useState } from 'react'
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
    setMenuOpenRegister
   } = props;

  const [logged, setLogged] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem('email');
    if(user) {
      setLogged(true);
    }
    else {
      setLogged(false);
    }
   }, [])

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