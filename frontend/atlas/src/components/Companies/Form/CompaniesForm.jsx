import React, { useEffect, useState } from 'react'
import '../../Global/Form/form.css'
import CompaniesInternshipTitle from './CompaniesInternshipTitle'
import { search_results } from '../../Home/Main/data'
import CompaniesSearchBar from './CompaniesSearchBar'
import CompaniesUniArea from './CompaniesUniArea'

const CompaniesForm = () => {

    const [internshipTitle, setInternshipTitle] = useState([]);

    const [searchBarWord, setSearchBarWord] = useState([]);

    const [selectedUniversity, setSelectedUniversity] = useState([]);
    const [selectedArea, setSelectedArea] = useState([]);

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
            </form>
        </div>
    </div>
  )
}

export default CompaniesForm