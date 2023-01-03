import React, {useState} from 'react'
import './navbar.css'
import useCloseModal from '../../../hooks/useCloseModal';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

const NavBarRegisterUniversity = (props) => {

    const {
        selectedUniversityDropdownOption,
        setSelectedUniversityDropdownOption
    } = props;

    const universityDropdownOptions = [
        {
          id: 1,
          title: 'ΕΚΠΑ'
        },
        {
          id: 2,
          title: 'ΑΠΘ'
        }
    ]

    const [openUniversityDropdown, setOpenUniversityDropdown] = useState(false);

    let universityDropdownRef = useCloseModal(() => {
        setOpenUniversityDropdown(false);
    })    

    const handleUniversityDropdownSelect = (str) => {
        setSelectedUniversityDropdownOption(str);
        setOpenUniversityDropdown(false);
    }

  return (
    <div className="navbar-register-popup-input-container">
        <div className="navbar-register-popup-dropdown-dropdown-container">
            <div className="navbar-register-popup-dropdown-dropdown-name">
            <p>
                {selectedUniversityDropdownOption}
            </p>
            </div>
            <div className="navbar-register-popup-dropdown-icon-container">
            <button
            type='button'
            onClick={() => setOpenUniversityDropdown(!openUniversityDropdown)}
            >
                {
                openUniversityDropdown ?
                    <ArrowRightIcon fontSize='large'/> :
                    <ArrowDropDownIcon fontSize='large'/>
                }
            </button>
            </div>
        </div>
        {
            openUniversityDropdown &&
            <div className="navbar-register-popup-dropdown-dropdown"
            ref={universityDropdownRef}
            >
                {
                universityDropdownOptions.map((value) => {
                    return(
                    <p 
                    key={value.id}
                    onClick={() => handleUniversityDropdownSelect(value.title)}
                    >
                        {value.title}
                    </p>
                    )
                })
                }
            </div>
        }
    </div>
  )
}

export default NavBarRegisterUniversity