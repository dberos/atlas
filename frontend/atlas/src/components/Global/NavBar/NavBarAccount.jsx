import React from 'react'
import './navbar.css'

const NavBarAccount = () => {
  return (
    <div className='navbar-login-register-container'>
        <div className='navbar-login'>
            <button>
                Σύνδεση
            </button>
        </div>
        <div className='navbar-register'>
            <button>
                Εγγραφή
            </button>
        </div>
        </div>
  )
}

export default NavBarAccount