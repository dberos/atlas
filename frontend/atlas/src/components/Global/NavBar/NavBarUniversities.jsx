import React, {useState} from 'react'
import './navbar.css'
import useCloseModal from '../../../hooks/useCloseModal';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

const NavBarUniversities = () => {
    const [university, setUniversity] = useState(false);

    let universityRef = useCloseModal(() => {
        setUniversity(false);
    })

  return (
    <div className='navbar-dropdown-container' ref={universityRef}
          style={{backgroundColor: university? '#031120': 'transparent'}}>
            <div className='navbar-dropdown-name'>
              <p onClick={() => setUniversity(!university)}>
                  Πανεπιστήμια
              </p>
            </div>
            <div className='navbar-dropdown-icon-container'>
              <button onClick={() => setUniversity(!university)}>
                {
                  university ? 
                    <ArrowRightIcon/> :
                      <ArrowDropDownIcon/>
                }
              </button>
            </div>
            {
              university && 
                <div className='navbar-dropdown'>
                <p>
                  Συνεργαζόμενα Πανεπιστήμια
                </p>
                <p>
                  Συχνές Ερωτήσεις
                </p>
                </div>
            }
          </div>
  )
}

export default NavBarUniversities