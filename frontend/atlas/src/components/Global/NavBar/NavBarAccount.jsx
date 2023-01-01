import React from 'react'
import { useState } from 'react'
import './navbar.css'
import NavBarMyAtlas from './NavBarMyAtlas'
import NavBarLogin from './NavBarLogin'
import NavBarRegister from './NavBarRegister'

const NavBarAccount = () => {

    const [logged, setLogged] = useState(false);

  return (
    <div className='navbar-login-register-container'>
        {
            logged ?
                <NavBarMyAtlas/> :
                    <>
                        <NavBarLogin/>
                        <NavBarRegister/>
                    </>
        }
    </div>
  )
}

export default NavBarAccount