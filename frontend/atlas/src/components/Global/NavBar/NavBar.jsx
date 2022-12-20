import React, {useState} from 'react'
import './navbar.css'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Undergraduates from './Undergraduates';
import Companies from './Companies';
import Universities from './Universities';
import Menu from './Menu'

const NavBar = () => {
    const [menu, setMenu] = useState(false);

  return (
    <div className='navbar-container'>
        <div className='navbar-logo-container'>
          <img src={require('../../../assets/logo.png')} alt='atlas logo' draggable='false'/>
        </div>
        <div className='navbar-wrapper'>
          <Undergraduates/>
          <Companies/>
          <Universities/>
          <div className='navbar-contact'>
            <p>
              Επικοινωνία
            </p>
          </div>
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
        </div>
        <div className='navbar-menu-icon'>
          <button onClick={() => setMenu(!menu)}>
            {
              menu ?
                <CloseIcon fontSize='large'/> :
                  <MenuIcon fontSize='large'/>
            }
          </button>
        </div>
        {menu && <Menu setMenu={setMenu}/>}
    </div>
  )
}

export default NavBar