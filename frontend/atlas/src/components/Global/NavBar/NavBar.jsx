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
import { Link } from "react-router-dom";
import NavBarPopupLogin from './NavBarPopupLogin';

const NavBar = () => {
    const [menu, setMenu] = useState(false);
    const [openLogin, setOpenLogin] = useState(false);

    const [menuOpenLogin, setMenuOpenLogin] = useState(false);

  return (
    <div className='navbar-container'>
        <div className='navbar-logo-container'>
          <Link to={'/'}>
            <img 
            src={require('../../../assets/logo.png')} 
            alt='atlas logo' 
            draggable='false'
            />
          </Link>
        </div>
        <div className='navbar-wrapper'>
          <NavBarUndergraduates/>
          <NavBarCompanies/>
          <NavBarUniversities/>
          <NavBarContact/>
          <NavBarAccount
          openLogin={openLogin}
          setOpenLogin={setOpenLogin}
          menuOpenLogin={menuOpenLogin}
          setMenuOpenLogin={setMenuOpenLogin}
          />
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
        {
          menu && 
            <NavBarMenu 
            setMenu={setMenu}
            setMenuOpenLogin={setMenuOpenLogin}
            />
        }
        {
          menuOpenLogin &&
            <NavBarPopupLogin
            openLogin={openLogin}
            setOpenLogin={setOpenLogin}
            menuOpenLogin={menuOpenLogin}
            setMenuOpenLogin={setMenuOpenLogin}
          />
        }
    </div>
  )
}

export default NavBar