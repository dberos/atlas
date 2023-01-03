import React, {useState} from 'react'
import './navbar.css'
import useCloseModal from '../../../hooks/useCloseModal';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

const NavBarRegisterType = (props) => {

    const {
        selectedDropdownOption,
        setSelectedDropdownOption
    } = props;

    const [openDropdown, setOpenDropdown] = useState(false);

    const handleDropdownSelect = (str) => {
        setSelectedDropdownOption(str);
        setOpenDropdown(false);
      }
    
      const dropdownOptions = [
        {
          id: 1,
          title: 'Είμαι Φοιτητής'
        },
        {
          id: 2,
          title: 'Είμαι Εταιρεία'
        }
    ];

    let dropdownRef = useCloseModal(() => {
        setOpenDropdown(false);
    })


  return (
    <div className="navbar-register-popup-input-container"
        style={{marginTop: '30px'}}
        >
        <div className="navbar-register-popup-dropdown-dropdown-container">
            <div className="navbar-register-popup-dropdown-dropdown-name">
            <p>
                {selectedDropdownOption}
            </p>
            </div>
            <div className="navbar-register-popup-dropdown-icon-container">
            <button
            type='button'
            onClick={() => setOpenDropdown(!openDropdown)}
            >
                {
                openDropdown ?
                    <ArrowRightIcon fontSize='large'/> :
                    <ArrowDropDownIcon fontSize='large'/>
                }
            </button>
            </div>
        </div>
        {
            openDropdown &&
            <div className="navbar-register-popup-dropdown-dropdown"
            ref={dropdownRef}
            >
                {
                dropdownOptions.map((value) => {
                    return(
                    <p 
                    key={value.id}
                    onClick={() => handleDropdownSelect(value.title)}
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

export default NavBarRegisterType