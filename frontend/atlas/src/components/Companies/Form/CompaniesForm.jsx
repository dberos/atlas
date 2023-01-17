import React, { useEffect, useState, useContext } from 'react'
import '../../Global/Form/form.css'
import CompaniesInternshipTitle from './CompaniesInternshipTitle'
import CompaniesSearchBar from './CompaniesSearchBar'
import CompaniesUniArea from './CompaniesUniArea'
import CompaniesStardDuration from './CompaniesStardDuration'
import CompaniesTypeMoney from './CompaniesTypeMoney'
import CompaniesSalaryDesc from './CompaniesSalaryDesc'
import CompaniesButton from './CompaniesButton'
import NavBarPopupLogin from '../../Global/NavBar/Login/NavBarPopupLogin'
import { IsLogged } from '../../Global/NavBar/Login/IsLogged'
import { addInternship } from './internship'

const CompaniesForm = () => {

    const [internshipTitle, setInternshipTitle] = useState(
        localStorage.getItem('internshipTitle') ?
            localStorage.getItem('internshipTitle') : []
    );

    const [searchBarWord, setSearchBarWord] = useState(
        localStorage.getItem('searchBarWord') ?
            localStorage.getItem('searchBarWord') : []
    );

    const [selectedUniversity, setSelectedUniversity] = useState(
        localStorage.getItem('selectedUniversity') ?
            localStorage.getItem('selectedUniversity') : []
    );
    const [selectedArea, setSelectedArea] = useState(
        localStorage.getItem('selectedArea') ?
            localStorage.getItem('selectedArea') : []
    );

    const [selectedDate, setSelectedDate] = useState(
        localStorage.getItem('selectedDate') ?
            localStorage.getItem('selectedDate') : []
    );
    const [selectedDuration, setSelectedDuration] = useState(
        localStorage.getItem('selectedDuration') ?
            localStorage.getItem('selectedDuration') : []
    );

    const [selectedType, setSelectedType] = useState(
        localStorage.getItem('selectedType') ?
            localStorage.getItem('selectedType') : []
    );
    const [selectedEspa, setSelectedEspa] = useState(
        localStorage.getItem('selectedEspa') ?
            localStorage.getItem('selectedEspa') : []
    );

    const [selectedSalary, setSelectedSalary] = useState(
        localStorage.getItem('selectedSalary') ?
            localStorage.getItem('selectedSalary') : []
    );
    const [selectedDescription, setSelectedDescription] = useState(
        localStorage.getItem('selectedDescription') ?
            localStorage.getItem('selectedDescription') : []
    );

    const [isPublished, setIsPublished] = useState(
        localStorage.getItem('isPublished') ?
            localStorage.getItem('isPublished') === 'false' ?
                false : true : false
    );

    const [isDisabled, setIsDisabled] = useState(
        localStorage.getItem('isDisabled') ?
            localStorage.getItem('isDisabled') === 'true' ?
                true : false : true
    );

    const [error, setError] = useState(
        localStorage.getItem('error') ? 
            localStorage.getItem('error') : []
    );

    var fieldPlaceholder = 'Για τι τομέα θα είναι η θέση;'
    var buttonPrimary = 'Δημοσίευση';
    var buttonSecondary = 'Προσωρινή <br/> Αποθήκευση';

    const { setLogged } = useContext(IsLogged);

    useEffect(() => {
        if(
            internshipTitle.length !== 0 &&
            searchBarWord.length !== 0 &&
            selectedUniversity.length !== 0 &&
            selectedArea.length !== 0 &&
            selectedDate.length !== 0 &&
            selectedDuration.length !== 0 &&
            selectedType.length !== 0 &&
            selectedEspa.length !== 0 &&
            selectedSalary.length !== 0 &&
            selectedDescription.length !== 0 
        ) {
            setIsDisabled(false);
        }
        else {
            setIsDisabled(true);
        }
    }, [internshipTitle, searchBarWord, selectedUniversity, 
        selectedArea, selectedDate, selectedDuration, 
        selectedType, selectedEspa, selectedSalary, 
        selectedDescription])

    const [menuOpenLogin, setMenuOpenLogin] = useState(false);
    const [openLogin, setOpenLogin] = useState(false);
    
    useEffect(() => {
        localStorage.removeItem('internshipTitle');
        localStorage.removeItem('searchBarWord');
        localStorage.removeItem('selectedUniversity');
        localStorage.removeItem('selectedArea');
        localStorage.removeItem('selectedDate');
        localStorage.removeItem('selectedDuration');
        localStorage.removeItem('selectedType');
        localStorage.removeItem('selectedEspa');
        localStorage.removeItem('selectedSalary');
        localStorage.removeItem('selectedDescription');
        localStorage.removeItem('isPublished');
        localStorage.removeItem('isDisabled');
        localStorage.removeItem('error');
    }, [])
    


    const handleSubmit = async (e) => {
        e.preventDefault();
        const user = localStorage.getItem('email');
        const type = localStorage.getItem('type');
        if(!user) {
            localStorage.setItem('internshipTitle', internshipTitle);
            localStorage.setItem('searchBarWord', searchBarWord);
            localStorage.setItem('selectedUniversity', selectedUniversity);
            localStorage.setItem('selectedArea', selectedArea);
            localStorage.setItem('selectedDate', selectedDate);
            localStorage.setItem('selectedDuration', selectedDuration);
            localStorage.setItem('selectedType', selectedType);
            localStorage.setItem('selectedEspa', selectedEspa);
            localStorage.setItem('selectedSalary', selectedSalary);
            localStorage.setItem('selectedDescription', selectedDescription);
            localStorage.setItem('isPublished', isPublished);
            localStorage.setItem('isDisabled', isDisabled);
            localStorage.setItem('error', error);
            setOpenLogin(true);
        }
        else if(type === 'undergraduate') {
            setError('Χρειάζεστε λογαριασμό εταιρείας για να συνεχίσετε');
        }
        else if(type === 'company') {
            const internship = {
                "title": internshipTitle,
                "field": searchBarWord,
                "university": selectedUniversity,
                "start_date": selectedDate,
                "area": selectedArea,
                "duration": selectedDuration === '3 Μήνες' ? 3 : 6,
                "type": selectedType,
                "espa": selectedEspa === 'Χρηματοδότηση ΕΣΠΑ' ? true : false,
                "salary": parseInt(selectedSalary),
                "description": selectedDescription,
                "submitted": isPublished,
                "company_id": localStorage.getItem('id')
            }
            await addInternship(internship);
            setError(isPublished ? 
                'Η θέση δημοσιεύτηκε με επιτυχία' :
                    'Η θέση αποθηκεύτηκε με επιτυχία');
        }
    }

  return (
    <div className="undergrad-comp-form-container">
        <div className="undergrad-comp-form-wrapper">
            <div className="undergrad-comp-form-title">
                <h1>
                    Δημοσίευσε νέα θέση Πρακτικής Άσκησης!
                </h1>
            </div>
            <form onSubmit={handleSubmit}>
                <CompaniesInternshipTitle
                setInternshipTitle={setInternshipTitle}
                />
                <CompaniesSearchBar
                setSearchBarWord={setSearchBarWord}
                fieldPlaceholder={fieldPlaceholder}
                />
                <CompaniesUniArea
                selectedUniversity={selectedUniversity}
                setSelectedUniversity={setSelectedUniversity}
                selectedArea={selectedArea}
                setSelectedArea={setSelectedArea}
                />
                <CompaniesStardDuration
                selectedDate={selectedDate}
                setSelectedDate={setSelectedDate}
                selectedDuration={selectedDuration}
                setSelectedDuration={setSelectedDuration}
                />
                <CompaniesTypeMoney
                selectedType={selectedType}
                setSelectedType={setSelectedType}
                selectedEspa={selectedEspa}
                setSelectedEspa={setSelectedEspa}
                />
                <CompaniesSalaryDesc
                selectedEspa={selectedEspa}
                setSelectedSalary={setSelectedSalary}
                setSelectedDescription={setSelectedDescription}
                />
                <CompaniesButton
                setIsPublished={setIsPublished}
                isDisabled={isDisabled}
                error={error}
                buttonPrimary={buttonPrimary}
                buttonSecondary={buttonSecondary}
                />
            </form>
        </div>
        {
            openLogin &&
                <NavBarPopupLogin
                openLogin={openLogin}
                setOpenLogin={setOpenLogin}
                menuOpenLogin={menuOpenLogin}
                setMenuOpenLogin={setMenuOpenLogin}
                setLogged={setLogged}
          />
        }
    </div>
  )
}

export default CompaniesForm