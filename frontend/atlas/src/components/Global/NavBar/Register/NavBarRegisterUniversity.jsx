import React, {useState} from 'react'
import '../navbar.css'
import useCloseModal from '../../../../hooks/useCloseModal';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { search_results } from '../../../Home/Main/data'

const NavBarRegisterUniversity = (props) => {

    const {
        selectedFieldDropdownOption,
        setSelectedFieldDropdownOption,
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

    const [openFieldDropdown, setOpenFieldDropdown] = useState(false);
    const [openUniversityDropdown, setOpenUniversityDropdown] = useState(false);

    let fieldDropdownRef = useCloseModal(() => {
        setOpenFieldDropdown(false);
    })

    let universityDropdownRef = useCloseModal(() => {
        setOpenUniversityDropdown(false);
    })    

    const handleFieldDropdownSelect = (str) => {
        setSelectedFieldDropdownOption(str);
        setOpenFieldDropdown(false);
    }

    const handleUniversityDropdownSelect = (str) => {
        setSelectedUniversityDropdownOption(str);
        setOpenUniversityDropdown(false);
    }

  return (
    <div className="navbar-register-popup-university">
        <div className="navbar-register-popup-university-left">
            <div className="navbar-register-popup-university-left-dropdown-container">
                <div className="navbar-register-popup-university-left-dropdown-name">
                    {
                        selectedFieldDropdownOption === 'Τι σπουδάζεις; *' ?
                            <h1>
                                {selectedFieldDropdownOption}
                            </h1> :
                            <p>
                                {selectedFieldDropdownOption}
                            </p>
                    }
                </div>
                <div className="navbar-register-popup-university-left-dropdown-button">
                    <button
                    type='button'
                    onClick={() => setOpenFieldDropdown(!openFieldDropdown)}
                    >
                        {
                            openFieldDropdown ?
                                <ArrowRightIcon fontSize='large'/> :
                                    <ArrowDropDownIcon fontSize='large'/>
                        }
                    </button>
                </div>
            </div>
            {
                openFieldDropdown &&
                    <div className="navbar-register-popup-university-left-dropdown-dropdown"
                    ref={fieldDropdownRef}
                    >
                        {
                            search_results.map((value) => {
                                return(
                                    <div className="navbar-register-popup-university-left-dropdown-dropdown-dummy"
                                    key={value.id}
                                    >
                                    <p
                                    onClick={() => handleFieldDropdownSelect(value.title)}
                                    >
                                        {value.title}
                                    </p>
                                    </div>

                                )
                            })
                        }
                    </div>
            }
        </div>
        <div className="navbar-register-popup-university-right">
            <div className="navbar-register-popup-university-right-dropdown-container">
                <div className="navbar-register-popup-university-right-dropdown-name">
                    {
                        selectedUniversityDropdownOption === 'Που; *' ?
                            <h1>
                                {selectedUniversityDropdownOption}
                            </h1> :
                            <p>
                                {selectedUniversityDropdownOption}
                            </p>
                    }
                </div>
                <div className="navbar-register-popup-university-right-dropdown-button">
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
                    <div className="navbar-register-popup-university-right-dropdown-dropdown"
                    ref={universityDropdownRef}
                    >
                        {
                            universityDropdownOptions.map((value) => {
                                return(
                                    <div className="navbar-register-popup-university-right-dropdown-dropdown-dummy"
                                    key={value.id}
                                    >
                                    <p
                                    onClick={() => handleUniversityDropdownSelect(value.title)}
                                    >
                                        {value.title}
                                    </p>
                                    </div>
                                )
                            })
                        }
                    </div>
            }
        </div>
    </div>

    // <div className="navbar-register-popup-input-container">
    //     <div className="navbar-register-popup-dropdown-dropdown-container">
    //         <div className="navbar-register-popup-dropdown-dropdown-name">
    //         <p>
    //             {selectedUniversityDropdownOption}
    //         </p>
    //         </div>
    //         <div className="navbar-register-popup-dropdown-icon-container">
    //         <button
    //         type='button'
    //         onClick={() => setOpenUniversityDropdown(!openUniversityDropdown)}
    //         >
    //             {
    //             openUniversityDropdown ?
    //                 <ArrowRightIcon fontSize='large'/> :
    //                 <ArrowDropDownIcon fontSize='large'/>
    //             }
    //         </button>
    //         </div>
    //     </div>
    //     {
    //         openUniversityDropdown &&
    //         <div className="navbar-register-popup-dropdown-dropdown"
    //         ref={universityDropdownRef}
    //         >
    //             {
    //             universityDropdownOptions.map((value) => {
    //                 return(
    //                 <p 
    //                 key={value.id}
    //                 onClick={() => handleUniversityDropdownSelect(value.title)}
    //                 >
    //                     {value.title}
    //                 </p>
    //                 )
    //             })
    //             }
    //         </div>
    //     }
    // </div>
  )
}

export default NavBarRegisterUniversity