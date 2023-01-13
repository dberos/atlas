import React from 'react'
import './undergraduatesResults.css'

const UndergraduatesResultDescription = (props) => {

    const { description } = props;

  return (
    <div className="undergraduates-results-result-description-container">
        <div className="undergraduates-results-result-description">
            <div className="undergraduates-results-result-description-header">
                <h1>
                    Περιγραφή Θέσης
                </h1>
            </div>
            <div className="undergraduates-results-result-description-subheader">
                <h1>
                    {description}
                </h1>
            </div>
        </div>
    </div>
  )
}

export default UndergraduatesResultDescription