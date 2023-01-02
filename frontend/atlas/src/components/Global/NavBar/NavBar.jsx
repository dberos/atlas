import React, {useState, useEffect} from 'react'
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
    // Needed different for hamburger menu, can't update state when another component is rendered
    const [menuOpenLogin, setMenuOpenLogin] = useState(false);

    // Resizing to small and then back to large
    // If popup was open then it would be open again when large again
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    useEffect(() => {
      const handleResize = () => {
        setScreenWidth(window.innerWidth);
      }
      window.addEventListener('resize', handleResize);
      return () => {
        window.removeEventListener('resize', handleResize);
      }
    })

    useEffect(() => {
      if(screenWidth <= 850) {
        setOpenLogin(false);
      }
      if(screenWidth > 850) {
        setMenuOpenLogin(false);
      }
    }, [screenWidth])

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