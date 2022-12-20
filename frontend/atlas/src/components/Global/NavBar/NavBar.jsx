import React, {useState} from 'react'
import './navbar.css'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import NavBarUndergraduates from './NavBarUndergraduates';
import NavBarCompanies from './NavBarCompanies';
import NavBarUniversities from './NavBarUniversities';
import NavBarMenu from './NavBarMenu'
import NavBarAccount from './NavBarAccount';
import NavBarContact from './NavBarContact';

const NavBar = () => {
    const [menu, setMenu] = useState(false);

  return (
    <div className='navbar-container'>
        <div className='navbar-logo-container'>
          <img 
          src={require('../../../assets/logo.png')} 
          alt='atlas logo' 
          draggable='false'
          />
        </div>
        <div className='navbar-wrapper'>
          <NavBarUndergraduates/>
          <NavBarCompanies/>
          <NavBarUniversities/>
          <NavBarContact/>
          <NavBarAccount/>
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
        {menu && <NavBarMenu setMenu={setMenu}/>}
    </div>
  )
}

export default NavBar