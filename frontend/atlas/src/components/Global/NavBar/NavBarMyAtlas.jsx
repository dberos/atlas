import React, { useState } from 'react'
import './navbar.css'
import useCloseModal from '../../../hooks/useCloseModal';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { Link } from "react-router-dom";

const NavBarMyAtlas = (props) => {

  const { 
    setLogged,
    setOpenLogin,
    setMenuOpenLogin,
   } = props;

  const [account, setAccount] = useState(false);

  let ref = useCloseModal(() => {
    setAccount(false);
  })

  const handleDisconnect = () => {
    localStorage.clear();
    setLogged(false);
    // Loggin was popping up after disconnect
    setOpenLogin(false);
    setMenuOpenLogin(false);
  }

  return (
    <div className="navbar-account-modal-container">
      <div className="navbar-dropdown-container" 
      style={{width: '60%'}}
      ref={ref}
      >
        <div className="navbar-dropdown-name">
          <p
          onClick={() => setAccount(!account)}
          >
            myΑΤΛΑΣ
          </p>
        </div>
        <div className='navbar-dropdown-icon-container'>
          <button onClick={() => setAccount(!account)}>
            {
              account ? 
                <ArrowRightIcon/> :
                  <ArrowDropDownIcon/>
            }
          </button>
        </div>
        {
          account &&
            <div className="navbar-dropdown">
              <Link to={"/profile"} onClick={() => setAccount(false)}>
                Προφίλ
              </Link>
              <p
              onClick={handleDisconnect}
              style={{cursor: 'pointer'}}
              >
                Αποσύνδεση
              </p>
          </div>
        }
      </div>
    </div>
  )
}

export default NavBarMyAtlas