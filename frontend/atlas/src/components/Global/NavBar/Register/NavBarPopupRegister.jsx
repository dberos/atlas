import React, { useEffect, useState } from 'react'
import '../navbar.css'
import useCloseModal from '../../../../hooks/useCloseModal';
import NavBarRegisterType from './NavBarRegisterType';
import NavBarRegisterEmail from './NavBarRegisterEmail';
import NavBarRegisterName from './NavBarRegisterName';
import NavBarRegisterSurnameCity from './NavBarRegisterSurnameCity';
import NavBarRegisterUniversity from './NavBarRegisterUniversity';
import NavBarRegisterStreet from './NavBarRegisterStreet';
import NavBarRegisterTelephone from './NavBarRegisterTelephone';
import NavBarRegisterPassword from './NavBarRegisterPassword';
import { registerUser } from '../users';

const NavBarPopupRegister = (props) => {

    const {
        openRegister,
        setOpenRegister,
        menuOpenRegister,
        setMenuOpenRegister
    } = props;

  const [selectedDropdownOption, setSelectedDropdownOption] = useState('Είμαι Φοιτητής');
  const [selectedUniversityDropdownOption, setSelectedUniversityDropdownOption] = useState('ΕΚΠΑ');

  const [emailEntered, setEmailEntered] = useState([]);
  const [emailError, setEmailError] = useState([]);
  const [nameEntered, setNameEntered] = useState([]);
  const [surnameEntered, setSurnameEntered] = useState([]);
  const [telephoneEntered, setTelephoneEntered] = useState([]);
  const [passwordEntered, setPasswordEntered] = useState([]);
  const [confirmPasswordEntered, setConfirmPasswordEntered] = useState([]);
  const [passwordError, setPasswordError] = useState([]);

  const [companyNameEntered, setCompanyNameEntered] = useState([]);
  const [companyCityEntered, setCompanyCityEntered] = useState([]);
  const [companyStreetEntered, setCompanyStreetEntered] = useState([]);
  const [companyStreetNumberEntered, setCompanyStreetNumberEntered] = useState([]);

  const [isDisabled, setIsDisabled] = useState(true);

  const [successMessage, setSuccessMessage] = useState([]);

  useEffect(() => {
    setEmailEntered([]);
    setEmailError('Email *');
    setNameEntered([]);
    setSurnameEntered([]);
    setTelephoneEntered([]);
    setPasswordEntered([]);
    setConfirmPasswordEntered([]);
    setPasswordError('Επιβεβαίωση Κωδικού *');
    setCompanyNameEntered([]);
    setCompanyCityEntered([]);
    setCompanyStreetEntered([]);
    setCompanyStreetNumberEntered([]);
    setSuccessMessage([]);
  }, [openRegister])

  useEffect(() => {
    setEmailEntered([]);
    setEmailError('Email *');
    setNameEntered([]);
    setSurnameEntered([]);
    setTelephoneEntered([]);
    setPasswordEntered([]);
    setConfirmPasswordEntered([]);
    setPasswordError('Επιβεβαίωση Κωδικού *');
    setCompanyNameEntered([]);
    setCompanyCityEntered([]);
    setCompanyStreetEntered([]);
    setCompanyStreetNumberEntered([]);
    setSuccessMessage([]);
  }, [menuOpenRegister])

  useEffect(() => {
    setEmailEntered([]);
    setEmailError('Email *');
    setNameEntered([]);
    setSurnameEntered([]);
    setTelephoneEntered([]);
    setPasswordEntered([]);
    setConfirmPasswordEntered([]);
    setPasswordError('Επιβεβαίωση Κωδικού *');
    setCompanyNameEntered([]);
    setCompanyCityEntered([]);
    setCompanyStreetEntered([]);
    setCompanyStreetNumberEntered([]);
    setSuccessMessage([]);
  }, [selectedDropdownOption])

  useEffect(() => {
    if(selectedDropdownOption === 'Είμαι Φοιτητής') {
      if(
        emailEntered.length !== 0 &&
        emailError === 'Email *' &&
        nameEntered.length !== 0 &&
        passwordEntered.length !== 0 &&
        confirmPasswordEntered.length !== 0 &&
        passwordError === 'Επιβεβαίωση Κωδικού *'
      ) {
        setIsDisabled(false);
      }
      else {
        setIsDisabled(true);
      }
    }
  }, [selectedDropdownOption,
      emailEntered,
      emailError,
      nameEntered,
      surnameEntered,
      passwordEntered,
      passwordError,
      confirmPasswordEntered])

  useEffect(() => {
    if(selectedDropdownOption === 'Είμαι Εταιρεία') {
      if(
        emailEntered.length !== 0 &&
        emailError === 'Email *' &&
        companyNameEntered.length !== 0 &&
        companyCityEntered.length !== 0 &&
        companyStreetEntered.length !== 0 &&
        companyStreetNumberEntered.length !== 0 &&
        passwordEntered.length !== 0 &&
        confirmPasswordEntered.length !== 0  &&
        passwordError === 'Επιβεβαίωση Κωδικού *'
      ) {
        setIsDisabled(false);
      }
      else {
        setIsDisabled(true)
      }
    }
  }, [selectedDropdownOption,
      emailEntered,
      emailError,
      companyNameEntered,
      companyCityEntered,
      companyStreetEntered,
      companyStreetNumberEntered,
      passwordEntered,
      passwordError,
      confirmPasswordEntered])

  let ref = useCloseModal(() => {
    setOpenRegister(false);
    setMenuOpenRegister(false);
  })

  const validateUndergraduate = async () => {
    if(
      emailEntered.length !== 0 &&
      emailError === 'Email *' &&
      nameEntered.length !== 0 &&
      surnameEntered.length !== 0 &&
      passwordEntered.length !== 0 &&
      confirmPasswordEntered.length !== 0 &&
      passwordError === 'Επιβεβαίωση Κωδικού *'
    ) {
      const user = {
        email: emailEntered,
        password: passwordEntered,
        telephone: telephoneEntered.length !== 0 ?parseInt(telephoneEntered) : null,
        type: 'undergraduate',
        first_name: nameEntered,
        last_name: surnameEntered,
        university: selectedUniversityDropdownOption,
        marks: null

      }
      await registerUser(user);
      setSuccessMessage('Ο λογαριασμός δημιουργήθηκε με επιτυχία!');
    }
  }

  const validateCompany = async () => {
    if (
      emailEntered.length !== 0 &&
      emailError.length !== 0 &&
      companyNameEntered.length !==0 &&
      companyCityEntered.length !==0 &&
      companyStreetEntered.length !== 0 &&
      companyStreetNumberEntered.length !== 0 &&
      passwordEntered.length !== 0 &&
      confirmPasswordEntered.length !== 0 &&
      passwordError === 'Επιβεβαίωση Κωδικού *'
      ) {
        const user = {
          email: emailEntered,
          password: passwordEntered,
          telephone: telephoneEntered.length !== 0 ?parseInt(telephoneEntered) : null,
          type: 'company',
          name: companyNameEntered,
          town: companyCityEntered,
          street: companyStreetEntered,
          street_number: parseInt(companyStreetNumberEntered)
        }
        await registerUser(user);
        setSuccessMessage('Ο λογαριασμός δημιουργήθηκε με επιτυχία!');
      }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(selectedDropdownOption === 'Είμαι Φοιτητής') {
      validateUndergraduate();
    }
    else {
      validateCompany();
    }
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
              <NavBarRegisterType
              selectedDropdownOption={selectedDropdownOption}
              setSelectedDropdownOption={setSelectedDropdownOption}
              />
              <NavBarRegisterEmail
              emailEntered={emailEntered}
              setEmailEntered={setEmailEntered}
              emailError={emailError}
              setEmailError={setEmailError}
              />
              <NavBarRegisterName
              nameEntered={nameEntered}
              setNameEntered={setNameEntered}
              companyNameEntered={companyNameEntered}
              setCompanyNameEntered={setCompanyNameEntered}
              selectedDropdownOption={selectedDropdownOption}
              />
              <NavBarRegisterSurnameCity
              surnameEntered={surnameEntered}
              setSurnameEntered={setSurnameEntered}
              companyCityEntered={companyCityEntered}
              setCompanyCityEntered={setCompanyCityEntered}
              selectedDropdownOption={selectedDropdownOption}
              />
              {
                selectedDropdownOption === 'Είμαι Φοιτητής' ?
                  <NavBarRegisterUniversity
                  selectedUniversityDropdownOption={selectedUniversityDropdownOption}
                  setSelectedUniversityDropdownOption={setSelectedUniversityDropdownOption}
                  /> :
                <NavBarRegisterStreet
                companyStreetEntered={companyStreetEntered}
                setCompanyStreetEntered={setCompanyStreetEntered}
                companyStreetNumberEntered={companyStreetNumberEntered}
                setCompanyStreetNumberEntered={setCompanyStreetNumberEntered}
                />
              }

              <NavBarRegisterTelephone
              telephoneEntered={telephoneEntered}
              setTelephoneEntered={setTelephoneEntered}
              />
              <NavBarRegisterPassword
              passwordEntered={passwordEntered}
              setPasswordEntered={setPasswordEntered}
              confirmPasswordEntered={confirmPasswordEntered}
              setConfirmPasswordEntered={setConfirmPasswordEntered}
              passwordError={passwordError}
              setPasswordError={setPasswordError}
              />
              <div className="navbar-register-popup-button">
                
                {
                  successMessage.length !== 0 ?
                    <p>
                      {successMessage}
                    </p> :
                      <button
                      style={{backgroundColor: isDisabled && '#ADABA8',
                              cursor: isDisabled && 'not-allowed'}}
                      disabled={isDisabled && true}
                      >
                        Εγγραφή
                      </button>
                }
              </div>
            </form>
          </div>
        </div>
    </div>
  )
}

export default NavBarPopupRegister