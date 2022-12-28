import React from 'react'
import '../../Global/Form/form.css'
import FormSearchBar from '../../Global/Form/SearchBar/FormSearchBar'

const UndergraduatesSearchBar = (props) => {

  const { setSearchBarWord } = props;

    var title = 'Τομέας';

  return (
    <div className="undergrad-comp-search-bar-container">
        <FormSearchBar
        title={title}
        setSearchBarWord={setSearchBarWord}
        />
    </div>
  )
}

export default UndergraduatesSearchBar