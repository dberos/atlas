import React, { useEffect, useState } from 'react'
import './undergraduatesForm.css'
import UndergraduatesSearchBar from './UndergraduatesSearchBar'
import { search_results } from '../../Home/Main/data'
import UndergraduatesUniArea from './UndergraduatesUniArea'
import UndergraduatesMoneyStart from './UndergraduatesMoneyStart'

const UndergraduatesForm = () => {

  const [searchBarWord, setSearchBarWord] = useState([]);
  // const [searchBarError, setSearchBarError] = useState(false);

  const [selectedUniversity, setSelectedUniversity] = useState([]);
  const [selectedArea, setSelectedArea] = useState([]);

  const [selectedEspa, setSelectedEspa] = useState([]);
  const [selectedDate, setSelectedDate] = useState([]);

  useEffect(() => {
    console.log('searchBarWord ', searchBarWord);
    
    const checkWord = (obj) => {
      return obj.title === searchBarWord;
    }
    
    // Check if exists for errors
    console.log(search_results.some(checkWord));
    // setSearchBarError(search_results.some(checkWord));
    console.log(searchBarWord.length)
  }, [searchBarWord])

  useEffect(() => {
    console.log(selectedUniversity);
  }, [selectedUniversity])

  useEffect(() => {
    console.log(selectedArea);
  }, [selectedArea])

  useEffect(() => {
    console.log(selectedEspa);
  }, [selectedEspa])

  useEffect(() => {
    console.log(selectedDate);
  }, [selectedDate])

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('submitted');
  }

  return (
    <div className="undergrad-form-container">
        <div className="undergrad-form-wrapper">
            <div className="undergrad-form-title">
                <h1>
                    Αναζήτησε την θέση Πρακτικής που σου ταιριάζει!
                </h1>
            </div>
            <form onSubmit={handleSubmit}>
              <UndergraduatesSearchBar
              setSearchBarWord={setSearchBarWord}
              />
              <UndergraduatesUniArea
              selectedUniversity={selectedUniversity}
              setSelectedUniversity={setSelectedUniversity}
              selectedArea={selectedArea}
              setSelectedArea={setSelectedArea}
              />
              <UndergraduatesMoneyStart
              selectedEspa={selectedEspa}
              setSelectedEspa={setSelectedEspa}
              selectedDate={selectedDate}
              setSelectedDate={setSelectedDate}
              />
            </form>

        </div>
    </div>
  )
}

export default UndergraduatesForm