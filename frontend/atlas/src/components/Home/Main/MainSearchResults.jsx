import React, {useEffect, useReducer, useRef} from 'react'
import useKeyPress from '../../../hooks/useKeyPress';
import useCloseModal from '../../../hooks/useCloseModal';

const MainSearchResults = (props) => {

    const arrowUpPressed = useKeyPress('ArrowUp');
    const arrowDownPressed = useKeyPress('ArrowDown');

    let ref = useCloseModal(() => {
        // After close, don't keep current cursor index
        state.selectedIndex = -1;
    });

    let resultsRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        props.clearInput();
        // Disable focus after submit
        props.inputRef.current.blur();
        // IF NOT props.word SEARCH
        console.log(props.word);
        console.log('selected word: ', props.wordEntered);
    }

    const initialState = { selectedIndex: -1 };

    const reducer = (state, action) => {
        switch (action.type) {
            case 'arrowUp':
                return {
                    selectedIndex:
                    state.selectedIndex !== -1 ? state.selectedIndex - 1 : -1,
                };
            case 'arrowDown':
                return {
                    selectedIndex:
                    state.selectedIndex !== props.filteredData.length - 1 ? state.selectedIndex + 1 : props.filteredData.length - 1,
                };
            case 'select':
                return { selectedIndex: action.payload };
            default:
                throw new Error();
        }
    }
    const [state, dispatch] = useReducer(reducer, initialState);


    useEffect(() => {
        if(arrowUpPressed) {
            dispatch({ type: 'arrowUp' });
            if(state.selectedIndex >= 1) {
                props.setWordEntered(props.filteredData[state.selectedIndex - 1].title);
            }
            else {
                props.setWordEntered(props.word);
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [arrowUpPressed]);

    useEffect(() => {
        if(arrowDownPressed) {
            dispatch({ type: 'arrowDown' });
            try {
                props.setWordEntered(props.filteredData[state.selectedIndex + 1].title);
            }
            catch {
                state.selectedIndex = -1;
                // If user didn't clean input
                if(props.filteredData.length) {
                    props.setWordEntered(props.filteredData[0].title);
                }
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [arrowDownPressed]);

    const handleMouseEnter = (i, str) => {
        dispatch({ type: 'select', payload: i })
        props.setWordEntered(str);
        props.inputRef.current.focus();
    }

  return (
    <div className='main-dummy-div' ref={ref}>
        {
            props.filteredData.length !== 0 && 
                <div className='main-search-results-container' ref={resultsRef}>
                    {
                    props.filteredData.map((value, i) => {
                        return(
                            <div className='main-search-results' 
                                id='results-id'
                                key={value.id} target="_blank" 
                                onMouseEnter={() => handleMouseEnter(i, value.title)}
                                onClick={handleSubmit}
                                style={{
                                    cursor: 'pointer',
                                    backgroundColor: i === state.selectedIndex ? '#052547' : 'inherit',
                                }}
                            >
                            {value.title}
                        </div>
                        )
                    })
                    }
                </div>
            }
    </div>
  )
}

export default MainSearchResults