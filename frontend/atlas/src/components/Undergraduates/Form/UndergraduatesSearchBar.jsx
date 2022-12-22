import React from 'react'
import './undergraduatesForm.css'
import FormSearchBar from '../../Global/Form/SearchBar/FormSearchBar'

const UndergraduatesSearchBar = (props) => {

    var title = 'Τομέας'

  return (
    <div className="undergraduates-search-bar-container">
        <FormSearchBar
        title={title}
        setSearchBarWord={props.setSearchBarWord}
        />
    </div>
  )
}

export default UndergraduatesSearchBar