import React, { useEffect, useState } from 'react'
import '../../Global/Form/form.css'
import UndergraduatesSearchBar from './UndergraduatesSearchBar'
import { search_results } from '../../Home/Main/data'
import UndergraduatesUniArea from './UndergraduatesUniArea'
import UndergraduatesButton from './UndergraduatesButton'
import UndergraduatesStartDuration from './UndergraduatesStartDuration'
import UndergraduatesTypeMoney from './UndergraduatesTypeMoney'
import { findResults } from './results'
import { useNavigate } from 'react-router-dom'

const UndergraduatesForm = () => {

  let navigate = useNavigate();

  const [searchBarWord, setSearchBarWord] = useState([]);

  const [selectedUniversity, setSelectedUniversity] = useState([]);
  const [selectedArea, setSelectedArea] = useState([]);
  
  const [selectedDate, setSelectedDate] = useState([]);
  const [selectedDuration, setSelectedDuration] = useState([]);

  const [selectedType, setSelectedType] = useState([]);
  const [selectedEspa, setSelectedEspa] = useState([]);

  var fieldPlaceholder = 'Τι τομέα ψάχνεις;';


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


  const handleSubmit = async (e) => {
    e.preventDefault();
    const arr = [];
    arr.push(searchBarWord.length !== 0 ? searchBarWord : null);
    arr.push(selectedUniversity.length !== 0 ? 
      selectedUniversity === 'Όλα τα πανεπιστήμια' ? null : 
        selectedUniversity : null);
    arr.push(selectedDate.length !== 0 ? selectedDate : '00/00/0000');
    arr.push(selectedArea.length !== 0 ? 
      selectedArea === 'Όλες οι περιοχές' ? null : 
        selectedArea : null);
    arr.push(selectedDuration.length !== 0 ? 
      selectedDuration === 'Όλες οι διάρκειες' ? -1 :
       selectedDuration === '3 Μήνες' ? 3 : 6 : -1);
    arr.push(selectedType.length !== 0 ? 
      selectedType === 'Όλοι οι τύποι' ? null : 
        selectedType : null);
    arr.push(selectedEspa.length !== 0 ? 
      selectedEspa === 'Όλες οι Χρηματοδοτήσεις' ? null : 
        selectedEspa === 'Χωρίς Χρηματοδότηση ΕΣΠΑ' ? false : true : null);

    const res = {
      "field": arr[0],
      "university": arr[1],
      "start_date": arr[2],
      "area": arr[3],
      "duration": arr[4],
      "type": arr[5],
      "espa": arr[6]
    }

    const data = await findResults(res);
    localStorage.setItem('results', JSON.stringify(data));
    localStorage.removeItem('results');
    console.log('submitted');

    const results = [];
    const field = searchBarWord.length !== 0 ? 
      search_results.find((value) => value.title === searchBarWord).id : 
        null;
    results.push(field);
    const univ = selectedUniversity.length !== 0 ?
      selectedUniversity === 'Όλα τα πανεπιστήμια' ? 
      null : selectedUniversity === 'ΕΚΠΑ' ? 1 : 2 : null;
    results.push(univ);
    const area = selectedArea.length !== 0 ? 
      selectedArea === 'Όλες οι περιοχές' ? null : 
        selectedArea === 'Αθήνα' ? 1 : 2 : null;
    results.push(area);
    const date = selectedDate.length !== 0 ?
      selectedDate : '00/00/0000';
    results.push(date);
    const duration = selectedDuration.length !== 0 ?
      selectedDuration === 'Όλες οι διάρκειες' ? 
        -1 : selectedDuration === '3 Μήνες' ? 3 : 6 : -1;
    results.push(duration);
    const type = selectedType.length !== 0 ?
      selectedType === 'Όλοι οι τύποι' ?
        null : selectedType === 'Μερικής Απασχόλησης' ? 1 : 2 : null;
    results.push(type);
  const espa = selectedEspa.length !== 0 ?
    selectedEspa === 'Όλες οι Χρηματοδοτήσεις' ?
      null : selectedEspa === 'Χρηματοδότηση ΕΣΠΑ' ? 1 : 2 : null;
  results.push(espa);


    navigate(`/undergraduates/results/${btoa(results)}`);
  }

  return (
    <div className="undergrad-comp-form-container">
        <div className="undergrad-comp-form-wrapper">
            <div className="undergrad-comp-form-title">
                <h1>
                    Αναζήτησε θέσεις Πρακτικής Άσκησης στον ΑΤΛΑΣ
                </h1>
            </div>
            <form onSubmit={handleSubmit}>
              <UndergraduatesSearchBar
              setSearchBarWord={setSearchBarWord}
              fieldPlaceholder={fieldPlaceholder}
              />
              <UndergraduatesUniArea
              selectedUniversity={selectedUniversity}
              setSelectedUniversity={setSelectedUniversity}
              selectedArea={selectedArea}
              setSelectedArea={setSelectedArea}
              />
              <UndergraduatesStartDuration
              selectedDate={selectedDate}
              setSelectedDate={setSelectedDate}
              selectedDuration={selectedDuration}
              setSelectedDuration={setSelectedDuration}
              />
              <UndergraduatesTypeMoney
              selectedType={selectedType}
              setSelectedType={setSelectedType}
              selectedEspa={selectedEspa}
              setSelectedEspa={setSelectedEspa}
              />
              <UndergraduatesButton/>
            </form>

        </div>
    </div>
  )
}

export default UndergraduatesForm