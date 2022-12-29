import React, {useState} from 'react'
import './navbar.css'
import useCloseModal from '../../../hooks/useCloseModal';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { Link } from "react-router-dom";

const NavBarCompanies = () => {
    const [company, setCompany] = useState(false);

    let companyRef = useCloseModal(() => {
        setCompany(false);
    })

  return (
    <div className='navbar-dropdown-container' ref={companyRef}
          style={{backgroundColor: company? '#031120': 'transparent'}}>
            <div className='navbar-dropdown-name'>
              <p onClick={() => setCompany(!company)}>
                  Εταιρείες
              </p>
            </div>
            <div className='navbar-dropdown-icon-container'>
              <button onClick={() => setCompany(!company)}>
                {
                  company ? 
                    <ArrowRightIcon/> :
                      <ArrowDropDownIcon/>
                }
                </button>
            </div>
            {
              company && 
                <div className='navbar-dropdown'>
                  <Link to={'/companies'} onClick={() => setCompany(false)}>
                    Προσθήκη νέας Θέσης
                  </Link>
                  <Link to={'/faqs/companies'} onClick={() => setCompany(false)}>
                    Συχνές Ερωτήσεις
                  </Link>
                </div>
            }
          </div>
  )
}

export default NavBarCompanies