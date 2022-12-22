import React, { useEffect, useState } from 'react'
import './undergraduatesForm.css'
import UndergraduatesSeachBar from './UndergraduatesSeachBar'
import { search_results } from '../../Home/Main/data'

const UndergraduatesForm = () => {

  const [searchBarWord, setSearchBarWord] = useState([]);
  const [searchBarError, setSearchBarError] = useState(false);

  const checkWord = (obj) => {
    return obj.title === searchBarWord;
  }

  useEffect(() => {
    console.log('searchBarWord ', searchBarWord);
    
    // Check if exists for errors
    console.log(search_results.some(checkWord));
    // setSearchBarError(search_results.some(checkWord));
    console.log(searchBarWord.length)
  }, [searchBarWord])

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
              <UndergraduatesSeachBar
              setSearchBarWord={setSearchBarWord}
              />
            </form>

        </div>
    </div>
  )
}

export default UndergraduatesForm