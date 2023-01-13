import React from 'react'
import './undergraduatesResults.css'

const UndergraduatesResultFieldUniType = (props) => {

    const {
        field,
        university,
        type
    } = props;

  return (
    <div className="undergraduates-results-result-field-uni-type-container">
        <div className="undergraduates-results-result-field-uni-type">
            <div className="undergraduates-results-result-expand-header">
                <h1>
                    Τομέας
                </h1>
            </div>
            <div className="undergraduates-results-result-expand-subheader">
                <h1>
                    {field}
                </h1>
            </div>
        </div>
        <div className="undergraduates-results-result-field-uni-type">
            <div className="undergraduates-results-result-expand-header">
                <h1>
                    Προσφέρεται για
                </h1>
            </div>
            <div className="undergraduates-results-result-expand-subheader">
                <h1>
                    {university}
                </h1>
            </div>
        </div>
        <div className="undergraduates-results-result-field-uni-type">
            <div className="undergraduates-results-result-expand-header">
                <h1>
                    Τύπος Απασχόλησης
                </h1>
            </div>
            <div className="undergraduates-results-result-expand-subheader">
                <h1>
                    {type}
                </h1>
            </div>
        </div>
    </div>
  )
}

export default UndergraduatesResultFieldUniType