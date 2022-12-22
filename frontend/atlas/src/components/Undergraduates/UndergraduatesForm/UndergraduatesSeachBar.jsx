import React from 'react'
import './undergraduatesForm.css'
import FormSearch from '../../Global/FormSearch/FormSearch'

const UndergraduatesSeachBar = (props) => {

    var title = 'Τομέας'

  return (
    <div className="undergraduates-search-bar-container">
        <FormSearch
        title={title}
        setSearchBarWord={props.setSearchBarWord}
        />
    </div>
  )
}

export default UndergraduatesSeachBar