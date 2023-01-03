import React, { useEffect, useState } from 'react'
import './navbar.css'
import useCloseModal from '../../../hooks/useCloseModal';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

const NavBarPopupRegister = (props) => {

    const {
        openRegister,
        setOpenRegister,
        menuOpenRegister,
        setMenuOpenRegister
    } = props;

    let ref = useCloseModal(() => {
      setOpenRegister(false);
      setMenuOpenRegister(false);
  })


  const [openDropdown, setOpenDropdown] = useState(false);
  const [selectedDropdownOption, setSelectedDropdownOption] = useState('Είμαι Φοιτητής');

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

  const [emailEntered, setEmailEntered] = useState([]);
  const [nameEntered, setNameEntered] = useState([]);
  const [surnameEntered, setSurnameEntered] = useState([]);
  const [telephoneEntered, setTelephoneEntered] = useState([]);
  const [passwordEntered, setPasswordEntered] = useState([]);
  const [confirmPasswordEntered, setConfirmPasswordEntered] = useState([]);

  const [companyNameEntered, setCompanyNameEntered] = useState([]);
  const [companyCityEntered, setCompanyCityEntered] = useState([]);
  const [companyStreetEntered, setCompanyStreetEntered] = useState([]);
  const [companyStreetNumberEntered, setCompanyStreetNumberEntered] = useState([]);

  const [isDisabled, setIsDisabled] = useState(true);

  useEffect(() => {
    setEmailEntered([]);
    setNameEntered([]);
    setSurnameEntered([]);
    setTelephoneEntered([]);
    setPasswordEntered([]);
    setConfirmPasswordEntered([]);
    setCompanyNameEntered([]);
    setCompanyCityEntered([]);
    setCompanyStreetEntered([]);
    setCompanyStreetNumberEntered([]);
  }, [openRegister])

  useEffect(() => {
    setEmailEntered([]);
    setNameEntered([]);
    setSurnameEntered([]);
    setTelephoneEntered([]);
    setPasswordEntered([]);
    setConfirmPasswordEntered([]);
    setCompanyNameEntered([]);
    setCompanyCityEntered([]);
    setCompanyStreetEntered([]);
    setCompanyStreetNumberEntered([]);
  }, [menuOpenRegister])

  useEffect(() => {
    if(selectedDropdownOption === 'Είμαι Φοιτητής') {
      if(
        emailEntered.length !== 0 &&
        nameEntered.length !== 0 &&
        surnameEntered.length !== 0 &&
        passwordEntered.length !== 0 &&
        confirmPasswordEntered.length !== 0
      ) {
        setIsDisabled(false);
      }
      else {
        setIsDisabled(true);
      }
    }
  }, [selectedDropdownOption,
      emailEntered,
      nameEntered,
      surnameEntered,
      passwordEntered,
      confirmPasswordEntered])

      useEffect(() => {
        if(selectedDropdownOption === 'Είμαι Εταιρεία') {
          if(
            emailEntered.length !== 0 &&
            companyNameEntered.length !== 0 &&
            companyCityEntered.length !== 0 &&
            companyStreetEntered.length !== 0 &&
            companyStreetNumberEntered.length !== 0 &&
            passwordEntered.length !== 0 &&
            confirmPasswordEntered.length !== 0 
          ) {
            setIsDisabled(false);
          }
          else {
            setIsDisabled(true)
          }
        }
      }, [selectedDropdownOption,
          emailEntered,
          companyNameEntered,
          companyCityEntered,
          companyStreetEntered,
          companyStreetNumberEntered,
          passwordEntered,
          confirmPasswordEntered])

  useEffect(() => {
    setEmailEntered([]);
    setNameEntered([]);
    setSurnameEntered([]);
    setTelephoneEntered([]);
    setPasswordEntered([]);
    setConfirmPasswordEntered([]);
    setCompanyNameEntered([]);
    setCompanyCityEntered([]);
    setCompanyStreetEntered([]);
    setCompanyStreetNumberEntered([]);
  }, [selectedDropdownOption])

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('submitted');
  }

  return (
    <div className="navbar-back">
        <div className="navbar-register-popup"
        ref={ref}
        >
          <div className="navbar-register-popup-wrapper">
            <div className="navbar-register-popup-header">
              <h1>
                Δημιουργία νέου λογαριασμού!
              </h1>
            </div>
            <form
            onSubmit={handleSubmit}
            >
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
              <div className="navbar-register-popup-input-container">
                <input 
                type="text" 
                placeholder='Email *'
                value={emailEntered}
                onChange={(e) => setEmailEntered(e.target.value)}
                />
                {
                  emailEntered.length !== 0 &&
                  <label>
                    Email *
                  </label>
                }
              </div>
              <div className="navbar-register-popup-input-container">
                {
                  selectedDropdownOption === 'Είμαι Φοιτητής' ?
                    <>
                      <input 
                      type="text" 
                      placeholder='Όνομα *'
                      value={nameEntered}
                      onChange={(e) => setNameEntered(e.target.value)}
                      />
                      {
                        nameEntered.length !== 0 &&
                          <label>
                            Όνομα *
                          </label>
                      }
                    </> :
                    <>
                      <input 
                      type="text" 
                      placeholder='Επωνυμία *'
                      value={companyNameEntered}
                      onChange={(e) => setCompanyNameEntered(e.target.value)}
                      />
                      {
                        companyNameEntered.length !== 0 &&
                          <label>
                            Επωνυμία *
                          </label>
                      }
                    </>
                }
              </div>
              <div className="navbar-register-popup-input-container">
                {
                  selectedDropdownOption === 'Είμαι Φοιτητής' ?
                    <>
                      <input 
                      type="text" 
                      placeholder='Επώνυμο *'
                      value={surnameEntered}
                      onChange={(e) => setSurnameEntered(e.target.value)}
                      />
                      {
                        surnameEntered.length !== 0 &&
                        <label>
                          Επώνυμο *
                        </label>
                      }
                    </> :
                    <>
                      <div className="navbar-register-popup-company-input">
                        <div className="navbar-register-popup-company-input-city">
                          <input 
                          type="text" 
                          placeholder='Πόλη *'
                          value={companyCityEntered}
                          onChange={(e) => setCompanyCityEntered(e.target.value)}
                          />
                          {
                            companyCityEntered.length !== 0 &&
                              <label>
                                Πόλη *
                              </label>
                          }
                        </div>
                        <div className="navbar-register-popup-company-input-street">
                          <input 
                          type="text" 
                          placeholder='Οδός *'
                          value={companyStreetEntered}
                          onChange={(e) => setCompanyStreetEntered(e.target.value)}
                          />
                          {
                            companyStreetEntered.length !== 0 &&
                              <label>
                                Οδός *
                              </label>
                          }
                        </div>
                        <div className="navbar-register-popup-company-input-number">
                          <input 
                          type="text" 
                          placeholder='Αριθμός *'
                          value={companyStreetNumberEntered}
                          onChange={(e) => setCompanyStreetNumberEntered(e.target.value)}
                          />
                          {
                            companyStreetNumberEntered.length !== 0 &&
                              <label>
                                Αριθμός *
                              </label>
                          }
                        </div>
                      </div>
                    </>
                }
              </div>
              <div className="navbar-register-popup-input-container">
                <input 
                type="text" 
                placeholder='Τηλέφωνο'
                value={telephoneEntered}
                onChange={(e) => setTelephoneEntered(e.target.value)}
                />
                {
                  telephoneEntered.length !== 0 &&
                  <label>
                    Τηλέφωνο
                  </label>
                }
              </div>
              <div className="navbar-register-popup-input-container">
                <input 
                type="password" 
                placeholder='Κωδικός Πρόσβασης *'
                value={passwordEntered}
                onChange={(e) => setPasswordEntered(e.target.value)}
                />
                {
                  passwordEntered.length !== 0 &&
                  <label>
                    Κωδικός Πρόσβασης *
                  </label>
                }
              </div>
              <div className="navbar-register-popup-input-container">
                <input 
                type="password" 
                placeholder='Επιβεβαίωση Κωδικού *'
                value={confirmPasswordEntered}
                onChange={(e) => setConfirmPasswordEntered(e.target.value)}
                />
                {
                  confirmPasswordEntered.length !== 0 &&
                  <label>
                    Επιβεβαίωση Κωδικού *
                  </label>
                }
              </div>
              <div className="navbar-register-popup-button">
                <button
                style={{backgroundColor: isDisabled && '#ADABA8',
                        cursor: isDisabled && 'not-allowed'}}
                disabled={isDisabled && true}
                >
                  Εγγραφή
                </button>
              </div>
            </form>
          </div>
        </div>
    </div>
  )
}

export default NavBarPopupRegister