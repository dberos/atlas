import React, { useEffect, useState} from 'react'
import './navbar.css'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import useCloseModal from '../../../hooks/useCloseModal';

const NavBar = () => {

    const [undergrad, setUndergrad] = useState(false);
    const [company, setCompany] = useState(false);
    const [university, setUniversity] = useState(false);
    const [menu, setMenu] = useState(false);

    let ref = useCloseModal(() => {
      setMenu(false);
    });

    let undergradRef = useCloseModal(() => {
      setUndergrad(false);
    })

    let companyRef = useCloseModal(() => {
      setCompany(false);
    })

    let universityRef = useCloseModal(() => {
      setUniversity(false);
    })

    useEffect(() => {
      if(undergrad) {
        document.getElementById('und').style = 'background-color: #031120';
      }
      else {
        document.getElementById('und').style = 'background-color: transparent';
      }
    }, [undergrad])

    useEffect(() => {
      if(company) {
        document.getElementById('comp').style = 'background-color: #031120';
      }
      else {
        document.getElementById('comp').style = 'background-color: transparent';
      }
    }, [company])

    useEffect(() => {
      if(university) {
        document.getElementById('uni').style = 'background-color: #031120';
      }
      else {
        document.getElementById('uni').style = 'background-color: transparent';
      }
    }, [university])

  return (
    <div className='navbar-container'>
        <div className='navbar-logo-container'>
          <img src={require('../../../assets/logo.png')} alt='atlas logo' draggable='false'/>
        </div>
        <div className='navbar-wrapper'>
          <div className='navbar-dropdown-container' id='und' ref={undergradRef}>
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
                  <p>
                    Προσαρμοσμένη Αναζήτηση
                  </p>
                  <p>
                    Θέσεις μέσω ΕΣΠΑ
                  </p>
                  <p>
                    Θέσεις χωρίς ΕΣΠΑ
                  </p>
                  <p>
                    Όλες οι Θέσεις
                  </p>
                  <p>
                    Συχνές Ερωτήσεις
                  </p>
                </div>
            }
          </div>
          <div className='navbar-dropdown-container' id='comp' ref={companyRef}>
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
                  <p>
                    Προσθήκη νέας Θέσης
                  </p>
                  <p>
                    Συχνές Ερωτήσεις
                  </p>
                </div>
            }
          </div>
          <div className='navbar-dropdown-container' id='uni' ref={universityRef}>
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
          <div className='navbar-contact'>
            <p>
              Επικοινωνία
            </p>
          </div>
          <div className='navbar-login-register-container'>
            <div className='navbar-login'>
              <button>
                Σύνδεση
              </button>
            </div>
            <div className='navbar-register'>
              <button>
                Εγγραφή
              </button>
            </div>
          </div>
        </div>
        <div className='navbar-menu-icon'>
          <button onClick={() => setMenu(!menu)}>
            {
              menu ?
                <CloseIcon fontSize='large'/> :
                  <MenuIcon fontSize='large'/>
            }
          </button>
        </div>
        {
          menu &&
            <div className='navbar-menu-container' ref={ref}>
              <div className='navbar-menu-dummy-div'/>
                <p>
                  Φοιτητές
                </p>
                <p>
                  Εταιρείες
                </p>
                <p>
                  Πανεπιστήμια
                </p>
                <p>
                  Επικοινωνία
                </p>
                <p>
                  Σύνδεση / Προφίλ
                </p>
                <p>
                  Εγγραφή / Αποσύνδεση
                </p>
              </div>
        }
    </div>
  )
}

export default NavBar