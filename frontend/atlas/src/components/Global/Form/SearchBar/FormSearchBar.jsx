import React, {useState} from 'react'
import './formSearchBar.css'
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import { search_results } from '../../../Home/Main/data';
import useCloseModal from '../../../../hooks/useCloseModal';

const FormSearchBar = (props) => {

  const { title, setSearchBarWord, fieldPlaceholder } = props;

  const [search, setSearch] = useState(false);

  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered,setWordEntered] = useState(
    localStorage.getItem('searchBarWord') ?
            localStorage.getItem('searchBarWord') : []
  );

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
    
  // type='button' prevents form submit by clicking

  return (
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
    
  )
}

export default FormSearchBar