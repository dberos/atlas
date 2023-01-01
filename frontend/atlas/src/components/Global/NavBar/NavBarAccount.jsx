import React from 'react'
import { useState } from 'react'
import './navbar.css'
import NavBarMyAtlas from './NavBarMyAtlas'
import NavBarLogin from './NavBarLogin'
import NavBarRegister from './NavBarRegister'

const NavBarAccount = (props) => {

  const { openLogin, setOpenLogin } = props;

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
                        />
                        <NavBarRegister/>
                    </>
        }
    </div>
  )
}

export default NavBarAccount