import React, { useState } from 'react'
import './navbar.css'
import useCloseModal from '../../../hooks/useCloseModal';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

const NavBarMyAtlas = () => {

  const [account, setAccount] = useState(false);

  let ref = useCloseModal(() => {
    setAccount(false);
  })

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
              <p>
                Προφίλ
              </p>
              <p>
                Αποσύνδεση
              </p>
          </div>
        }
      </div>
    </div>
  )
}

export default NavBarMyAtlas