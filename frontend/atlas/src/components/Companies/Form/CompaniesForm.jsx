import React, { useEffect, useState } from 'react'
import '../../Global/Form/form.css'
import CompaniesInternshipTitle from './CompaniesInternshipTitle'
import { search_results } from '../../Home/Main/data'
import CompaniesSearchBar from './CompaniesSearchBar'
import CompaniesUniArea from './CompaniesUniArea'
import CompaniesStardDuration from './CompaniesStardDuration'
import CompaniesTypeMoney from './CompaniesTypeMoney'
import CompaniesSalaryDesc from './CompaniesSalaryDesc'
import CompaniesButton from './CompaniesButton'
import NavBarPopupLogin from '../../Global/NavBar/NavBarPopupLogin'

const CompaniesForm = () => {

    const [internshipTitle, setInternshipTitle] = useState([]);

    const [searchBarWord, setSearchBarWord] = useState([]);

    const [selectedUniversity, setSelectedUniversity] = useState([]);
    const [selectedArea, setSelectedArea] = useState([]);

    const [selectedDate, setSelectedDate] = useState([]);
    const [selectedDuration, setSelectedDuration] = useState([]);

    const [selectedType, setSelectedType] = useState([]);
    const [selectedEspa, setSelectedEspa] = useState([]);

    const [selectedSalary, setSelectedSalary] = useState([]);
    const [selectedDescription, setSelectedDescription] = useState([]);

    const [isPublished, setIsPublished] = useState(false);

    const [isDisabled, setIsDisabled] = useState(true);

    useEffect(() => {
        console.log(internshipTitle);
    }, [internshipTitle])

    useEffect(() => {
        console.log('searchBarWord ', searchBarWord);
        
        const checkWord = (obj) => {
          return obj.title === searchBarWord;
        }
        
        // Check if exists for errors
        console.log(search_results.some(checkWord));
        console.log(searchBarWord.length);
    }, [searchBarWord])

    useEffect(() => {
    console.log(selectedUniversity);
    }, [selectedUniversity])
    
    useEffect(() => {
    console.log(selectedArea);
    }, [selectedArea])

    useEffect(() => {
        console.log(selectedDate);
    }, [selectedDate])
    
      useEffect(() => {
        console.log(selectedDuration);
    }, [selectedDuration])

    useEffect(() => {
        console.log(selectedType);
    }, [selectedType])
    
      useEffect(() => {
        console.log(selectedEspa);
    }, [selectedEspa])

    useEffect(() => {
        console.log(selectedSalary);
    }, [selectedSalary])

    useEffect(() => {
        console.log(selectedDescription);
    }, [selectedDescription])

    useEffect(() => {
        isPublished ? console.log('Δημοσίευση') :
            console.log('Προσωρινή Αποθήκευση');
    }, [isPublished])

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
    


    const handleSubmit = (e) => {
        e.preventDefault();
        // Check for localstorage user
        // If not exists open login
        // If exists clear form and navigate to results
        setOpenLogin(true);
        console.log('submitted');
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
                />
                <CompaniesUniArea
                selectedUniversity={selectedUniversity}
                setSelectedUniversity={setSelectedUniversity}
                selectedArea={selectedArea}
                setSelectedArea={setSelectedArea}
                />
                <CompaniesStardDuration
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
          />
        }
    </div>
  )
}

export default CompaniesForm