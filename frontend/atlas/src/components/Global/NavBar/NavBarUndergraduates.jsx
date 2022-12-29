import React, {useState} from 'react'
import './navbar.css'
import useCloseModal from '../../../hooks/useCloseModal';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { Link } from "react-router-dom";

const NavBarUndergraduates = () => {
    const [undergrad, setUndergrad] = useState(false);

    let undergradRef = useCloseModal(() => {
        setUndergrad(false);
    })
    
  return (
    <div className='navbar-dropdown-container' ref={undergradRef}
          style={{backgroundColor: undergrad? '#031120': 'transparent'}}>
            <div className='navbar-dropdown-name'>
               <p onClick={() => setUndergrad(!undergrad)}>
                  Φοιτητές
               </p>
            </div>
            <div className='navbar-dropdown-icon-container'>
              <button onClick={() => setUndergrad(!undergrad)}>
                {
                  undergrad ? 
                    <ArrowRightIcon/> :
                      <ArrowDropDownIcon/>
                }
              </button>
            </div>
            {
              undergrad &&
                <div className='navbar-dropdown'>
                  <Link to={'/undergraduates'} onClick={() => setUndergrad(false)}>
                    Προσαρμοσμένη Αναζήτηση
                  </Link>
                  <p>
                    Θέσεις μέσω ΕΣΠΑ
                  </p>
                  <p>
                    Θέσεις χωρίς ΕΣΠΑ
                  </p>
                  <p>
                    Όλες οι Θέσεις
                  </p>
                  <Link to={'/faqs/undergraduates'} onClick={() => setUndergrad(false)}>
                    Συχνές Ερωτήσεις
                  </Link>
                </div>
            }
          </div>
  )
}

export default NavBarUndergraduates