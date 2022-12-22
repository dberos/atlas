import React from 'react'
import './formSearchBar.css'
import FormSearchBar from './FormSearchBar'

const FormSearch = (props) => {
  return (
    <div className="form-search-bar-container">
        <div className="form-search-bar-title">
            <h1>
                {props.title}
            </h1>
        </div>
        <FormSearchBar
        setSearchBarWord={props.setSearchBarWord}
        />
    </div>
  )
}

export default FormSearch