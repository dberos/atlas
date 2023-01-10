import React from 'react'
import '../../Global/Form/form.css'
import FormSearchBar from '../../Global/Form/SearchBar/FormSearchBar'

const CompaniesSearchBar = (props) => {

  const { setSearchBarWord, fieldPlaceholder } = props;

    var title = 'Τομέας *';

  return (
    <div className="undergrad-comp-search-bar-container">
        <FormSearchBar
        title={title}
        setSearchBarWord={setSearchBarWord}
        fieldPlaceholder={fieldPlaceholder}
        />
    </div>
  )
}

export default CompaniesSearchBar