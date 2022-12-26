import React, { useEffect, useState } from 'react'
import '../../Global/Form/form.css'
import CompaniesInternshipTitle from './CompaniesInternshipTitle'
import { search_results } from '../../Home/Main/data'
import CompaniesSearchBar from './CompaniesSearchBar'
import CompaniesUniArea from './CompaniesUniArea'
import CompaniesStardDuration from './CompaniesStardDuration'
import CompaniesTypeMoney from './CompaniesTypeMoney'

const CompaniesForm = () => {

    const [internshipTitle, setInternshipTitle] = useState([]);

    const [searchBarWord, setSearchBarWord] = useState([]);

    const [selectedUniversity, setSelectedUniversity] = useState([]);
    const [selectedArea, setSelectedArea] = useState([]);

    const [selectedDate, setSelectedDate] = useState([]);
    const [selectedDuration, setSelectedDuration] = useState([]);

    const [selectedType, setSelectedType] = useState([]);
    const [selectedEspa, setSelectedEspa] = useState([]);

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


    const handleSubmit = (e) => {
        e.preventDefault();
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
            </form>
        </div>
    </div>
  )
}

export default CompaniesForm