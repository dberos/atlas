import React, { useState } from 'react'
import '../../Global/Form/form.css'
import UndergraduatesSearchBar from './UndergraduatesSearchBar'
import { search_results } from '../../Home/Main/data'
import UndergraduatesUniArea from './UndergraduatesUniArea'
import UndergraduatesButton from './UndergraduatesButton'
import UndergraduatesStartDuration from './UndergraduatesStartDuration'
import UndergraduatesTypeMoney from './UndergraduatesTypeMoney'
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

  const handleSubmit = async (e) => {
    e.preventDefault();

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
      selectedDate : '-1';
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