import React, { useState, useEffect } from 'react'
import '../../../Undergraduates/Results/undergraduatesResults.css'
import '../../../Global/Form/form.css'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import GroupsIcon from '@mui/icons-material/Groups';
import MapIcon from '@mui/icons-material/Map';
import CompaniesUniArea from '../../../Companies/Form/CompaniesUniArea';
import CompaniesStardDuration from '../../../Companies/Form/CompaniesStardDuration';
import useCloseModal from '../../../../hooks/useCloseModal';
import '../../../Global/Form/SearchBar/formSearchBar.css'
import { search_results } from '../../../Home/Main/data';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close'
import HalfDropdown from '../../../Global/Form/HalfDropdown/HalfDropdown';
import CompaniesButton from '../../../Companies/Form/CompaniesButton';
import axios from 'axios';

const CompaniesSavedInternship = (props) => {

    const {
        id,
        title,
        companyName,
        street,
        streetNumber,
        town,
        area,
        field,
        university,
        startDate,
        duration,
        type,
        espa,
        salary,
        description
    } = props;


    const [open, setOpen] = useState(false);

    const [internshipTitle, setInternshipTitle] = useState(title);

    const [searchBarWord, setSearchBarWord] = useState(field);

    const [selectedUniversity, setSelectedUniversity] = useState(university);
    const [selectedArea, setSelectedArea] = useState(area);

    const [selectedDate, setSelectedDate] = useState(startDate);
    const [selectedDuration, setSelectedDuration] = useState(duration === 3 ? '3 Μήνες' : '6 Μήνες');

    const [selectedType, setSelectedType] = useState(type);
    const [selectedEspa, setSelectedEspa] = useState(!espa ? 'Χωρίς Χρηματοδότηση ΕΣΠΑ' : 'Χρηματοδότηση ΕΣΠΑ');

    const [selectedSalary, setSelectedSalary] = useState(salary);
    const [selectedDescription, setSelectedDescription] = useState(description);

    const [isPublished, setIsPublished] = useState(false);

    const [isDisabled, setIsDisabled] = useState(false);

    const [error, setError] = useState([]);
    

    var fieldPlaceholder = 'Για τι τομέα θα είναι η θέση;'

    const handleSubmit = async (e) => {
        e.preventDefault();

        if(isPublished) {
            setError('Η Αγγελία δημοσιεύτηκε με επιτυχία!');
            const internship = {
                "id": id,
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
                "submitted": true,
                "company_id": localStorage.getItem('id')
            }
            const response = await axios.put('http://localhost:8080/internships', internship);
            const data = response.data;
            console.log(data);
        }
        else {
            setError('Η Αγγελία διαγράφηκε με επιτυχία');
            await axios.delete(`http://localhost:8080/internships/id=${id}`);
        }
    }

    const [search, setSearch] = useState(false);

  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState(field);

  const checkWord = (obj) => {
      return obj.title === wordEntered;
    }

  let ref = useCloseModal(() => {
    if(wordEntered.length !== 0) {
      if(!search_results.some(checkWord)) {
        clearInput();
      }
      else {
        readySearch(wordEntered);
      }
    }
    
  })

  const handleFilter = (event) => {
      const searchWord = event.target.value;
      setWordEntered(searchWord);
      setSearch(true);
      setSearchBarWord(searchWord);
      const new_filter = search_results.filter((value) => {
          return value.title.toLowerCase().includes(searchWord.toLowerCase());
      })
      if(searchWord === "" || searchWord === " ") {
          setFilteredData([]);
      }
      else {
          const strAscending = [...new_filter].sort((a, b) =>
          a.title > b.title ? 1 : -1,
      );
          setFilteredData(strAscending.slice(0, 4))
      }
  }


  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
    setSearchBarWord("");
    setSearch(false);
  }

  const readySearch = (str) => {
    setWordEntered(str);
    setFilteredData([]);
    setSearch(false);
    setSearchBarWord(str);
  }

    var titleType = 'Τύπος Απασχόλησης *';
    var titleMoney = 'Μισθοδοσία *';

    const internshipTypes = [
        {
            id: 1,
            title: 'Μερική Απασχόληση'
        },
        {
            id: 2,
            title: 'Πλήρης Απασχόληση'
        }
    ];

    const moneyType = [
        {
            id: 1,
            title: 'Χρηματοδότηση ΕΣΠΑ'
        },
        {
            id: 2,
            title: 'Χωρίς Χρηματοδότηση ΕΣΠΑ'
        }
    ];

    const [isDisabledSalary, setIsDisabledSalary] = useState(true);

    useEffect(() => {
        if(selectedEspa[1] === 'ρ') {
            setIsDisabledSalary(true);
            setSelectedSalary('250');
        }
        if(selectedEspa[1] === 'ω') {
            setIsDisabledSalary(false);
            setSelectedSalary([]);
        }
        if(selectedEspa === []) {
            setIsDisabledSalary(true);
        }
    }, [selectedEspa, setSelectedSalary])

    useEffect(() => {
        setSelectedSalary(selectedSalary);
    }, [selectedSalary, setSelectedSalary])


    const handleSalary = (e) => {
        const sal = e.target.value;
        // Only allow numbers
        setSelectedSalary(sal.replace(/[^0-9]/g, ''));
    }

    const handleDescription = (e) => {
        const desc = e.target.value;
        setSelectedDescription(desc);
    }


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

    var buttonPrimary = 'Οριστική<br/> Υποβολή';
    var buttonSecondary = 'Διαγραφή<br/> Αγγελίας';

  return (
    <div className="undergraduates-results-result-container"
    style={{background: open && 'transparent'}}
    >
        <div className="undergraduates-results-result-wrapper">
            <div className="undergraduates-results-result-header">
                <h1>
                    <span
                    style={{cursor: 'pointer'}}
                    onClick={() => setOpen(!open)}
                    >
                        {title}
                    </span>
                </h1>
            </div>
            <div className="undergraduates-results-result-subheader">
                <div className="undergraduates-results-result-subheader-company">
                    <div className="undergraduates-results-result-icon">
                        <i>
                            <GroupsIcon fontSize='large'/>
                        </i>
                    </div>
                    <h1>
                        {companyName} 
                    </h1>
                </div>
                <div className="undergraduates-results-result-subheader-area">
                    <h1>
                        {street} {streetNumber}, {town}, {area}
                    </h1>
                    <div className="undergraduates-results-result-icon">
                        <i>
                            <MapIcon fontSize='large'/>
                        </i>
                    </div>
                </div>
            </div>
            <div className="undergraduates-results-result-expand-container"
            style={{opacity: open && '1'}}
            >
                {
                    open &&
                        <div className="undergraduates-results-result-expand">
                            <form 
                            style={{width: '100%'}}
                            onSubmit={handleSubmit}
                            >
                                <div className="companies-form-internship-title-container">
                                    <div className="companies-form-internship-title-title">
                                        <h1>
                                            Τίτλος Θέσης *
                                        </h1>
                                    </div>
                                    <div className="companies-form-internship-input-container">
                                        <input 
                                        type="text" 
                                        placeholder='Πως θα λέγεται η θέση;'
                                        onChange={(e) => setInternshipTitle(e.target.value)}
                                        value={internshipTitle}
                                        />
                                        <label>
                                            π.χ Web Developer
                                        </label>
                                    </div>
                                </div>
                                <div className="undergrad-comp-search-bar-container">
                                <div className="form-search-bar-container">
                                    <div className="form-search-bar-title">
                                        <h1>
                                            {title}
                                        </h1>
                                    </div>
                                    <div className="form-search-bar" ref={ref}>
                                        <input type="text" placeholder={fieldPlaceholder} onChange={handleFilter} value={wordEntered}/>
                                        <label>
                                        π.χ Πληροφορική
                                        </label>
                                        <div className="form-search-bar-icon-container">
                                        <div className="form-search-bar-icon">
                                            <button type='button' onClick={() => setSearch(!search)}>
                                            {
                                                wordEntered.length !== 0 && search ?
                                                <CloseIcon fontSize='large' onClick={() => clearInput()}/> :
                                                    <SearchIcon fontSize='large' style={{cursor: 'default'}}/>
                                            }
                                            </button>
                                        </div>
                                        </div>
                                        {
                                        filteredData.length !== 0 && 
                                            <div className="form-search-results-container">
                                            {
                                                filteredData.map((value) => {
                                                return(
                                                    <div className="form-search-results" key={value.id} target="_blank" onClick={() => readySearch(value.title)}>
                                                    {value.title}
                                                    </div>
                                                )
                                                })
                                            }
                                            </div>
                                        }
                                    </div>
                                    </div>
                                </div>
                                
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
                                <div className="undergrad-comp-half-container">
                                <HalfDropdown
                                    title={titleType}
                                    options={internshipTypes}
                                    selectedTitle={selectedType}
                                    setSelectedTitle={setSelectedType}
                                    />
                                    <HalfDropdown
                                    title={titleMoney}
                                    options={moneyType}
                                    selectedTitle={selectedEspa}
                                    setSelectedTitle={setSelectedEspa}
                                    />
                                </div>
                                <div className="companies-form-salary-desc-container">
                                <div className="companies-form-salary-container">
                                    <div className="companies-form-salary-title">
                                        <h1>
                                            Μισθός *
                                        </h1>
                                    </div>
                                    <div className="companies-form-salary-input">
                                        <input 
                                        type="text" 
                                        placeholder='€' 
                                        value={selectedSalary} 
                                        onChange={handleSalary}
                                        disabled={selectedEspa[1] === 'ω' ? false : true}
                                        style={{
                                            backgroundColor: isDisabledSalary ? '#ADABA8' : 'white',
                                            cursor: isDisabledSalary ? 'not-allowed' : 'unset'
                                        }}
                                        />
                                        <label>
                                            π.χ 600
                                        </label>
                                    </div>
                                </div>
                                <div className="companies-form-desc-container">
                                    <div className="companies-form-desc-title">
                                        <h1>
                                            Περιγραφή *
                                        </h1>
                                    </div>
                                    <div className="companies-form-desc-input">
                                        <textarea 
                                        type="text" 
                                        placeholder='Αναφέρετε επιπλέον πληροφορίες για την θέση'
                                        value={selectedDescription}
                                        onChange={handleDescription}
                                        />
                                    </div>
                                </div>
                            </div>
                            {
                                error.length === 0 ?
                                        <CompaniesButton
                                        setIsPublished={setIsPublished}
                                        isDisabled={isDisabled}
                                        error={error}
                                        buttonPrimary={buttonPrimary}
                                        buttonSecondary={buttonSecondary}
                                        /> :
                                        <div className="undergraduates-results-candidate-error">
                                            <p
                                            style={{color: 'green'}}
                                            >
                                                {error}
                                            </p>
                                        </div>
                            }
                            </form>
                        </div>
                }
            </div>
        </div>
        <div className="undergraduates-results-result-button">
            <button
            type='button'
            onClick={() => setOpen(!open)}
            >
                {
                    open ? 
                        <ExpandLessIcon fontSize='large'/> :
                            <ExpandMoreIcon fontSize='large'/>
                }
            </button>
        </div>
    </div>
  )
}

export default CompaniesSavedInternship