import React, {useState, useRef} from 'react'
import './main.css'
import SearchIcon from '@mui/icons-material/Search';
import useCloseModal from '../../../hooks/useCloseModal';
import { search_results } from './data'
import CloseIcon from '@mui/icons-material/Close';
import SearchResults from './SearchResults';

const SearchBar = () => {

    const [filteredData, setFilteredData] = useState([]);
    const [wordEntered,setWordEntered] = useState([]);
    const [handleRef, setHandleRef] = useState(false);
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
        setHandleRef(false);
    }

    let ref = useCloseModal(() => {
        // If option is selected
        // Don't allow closeModal by clicking outside
        // But only clear input by button
        if(!handleRef) {
            clearInput();
        }
    });

    let inputRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        clearInput();
        // Disable focus after submit
        inputRef.current.blur();
        // IF NOT WORD SEARCH
        console.log(word);
        console.log('selected word: ', wordEntered);
    }

    return (
        <div className='main-search-container' ref={ref}>
            <form onSubmit={handleSubmit}>
                <div className='main-search-bar'>
                <input  type = 'text' placeholder='Τι τομέα ψάχνεις;' onChange={handleFilter} value={wordEntered} ref={inputRef}/>
                <div className='main-search-bar-icon'>
                    <button>
                    {
                        wordEntered.length === 0 ?
                            <SearchIcon fontSize='large' style={{cursor: 'default'}}/> :
                                <CloseIcon fontSize='large' onClick={() => clearInput()}/>
                    }
                    </button>
                </div>
                <div className='main-search-bar-search'>
                    <button onClick={handleSubmit}>
                        Αναζήτηση
                    </button>
                </div>
                </div>
            </form>
            <SearchResults
                setWordEntered={setWordEntered}
                setFilteredData={setFilteredData}
                setHandleRef={setHandleRef}
                inputRef={inputRef}
                clearInput={clearInput}
                filteredData={filteredData}
                word={word}
                wordEntered={wordEntered}
            />
        </div>
    )
}

export default SearchBar