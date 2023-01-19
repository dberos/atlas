import React, {useState, useRef} from 'react'
import './main.css'
import SearchIcon from '@mui/icons-material/Search';
import useCloseModal from '../../../hooks/useCloseModal';
import { search_results } from './data'
import CloseIcon from '@mui/icons-material/Close';
import MainSearchResults from './MainSearchResults';
import { useNavigate } from 'react-router-dom';

const MainSearchBar = () => {

    let navigate = useNavigate();

    const [filteredData, setFilteredData] = useState([]);
    const [wordEntered,setWordEntered] = useState([]);
    const [word, setWord] = useState([]);

    const handleFilter = (event) => {
        const searchWord = event.target.value;
        setWord(searchWord);
        setWordEntered(searchWord);
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
    }

    let ref = useCloseModal(() => {
        clearInput();
    });

    let inputRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        clearInput();
        // Disable focus after submit
        inputRef.current.blur();

        if(wordEntered !== word && wordEntered.length !== 0) {
            const fieldID = search_results.find((value) => value.title === wordEntered).id
            const results = [
                fieldID,
                null,
                null,
                '-1',
                -1,
                null,
                null
            ];
            navigate(`/undergraduates/results/${btoa(results)}`);
        }
    }

    return (
        <div className='main-search-container'>
            <form onSubmit={handleSubmit}>
                <div className='main-search-bar' 
                ref={ref}
                style={{borderRadius: filteredData.length !== 0 && '4px 4px 0 0'}}
                >
                    <input  type = 'text' placeholder='Τι τομέα ψάχνεις;' onChange={handleFilter} value={wordEntered} ref={inputRef}/>
                    <div className='main-search-bar-icon'>
                        <button type='button'>
                        {
                            wordEntered.length === 0 ?
                                <SearchIcon fontSize='large' style={{cursor: 'default'}}/> :
                                    <CloseIcon fontSize='large' onClick={() => clearInput()}/>
                        }
                        </button>
                    </div>
                    <div className='main-search-bar-search'
                    style={{borderRadius: filteredData.length !== 0 && '4px 4px 0 0'}}
                    >
                        <button onClick={handleSubmit}>
                            Αναζήτηση
                        </button>
                    </div>
                </div>
            </form>
            <MainSearchResults
                setWordEntered={setWordEntered}
                inputRef={inputRef}
                filteredData={filteredData}
                word={word}
                handleSubmit={handleSubmit}
            />
        </div>
    )
}

export default MainSearchBar