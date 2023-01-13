import React from 'react'
import './undergraduatesResults.css'

const UndergraduatesResultEspaSalary = (props) => {

    const {
        espa,
        salary
    } = props;

  return (
    <div className="undergraduates-results-result-espa-salary-container">
        <div className="undergraduates-results-result-espa-salary">
            <div className="undergraduates-results-result-expand-header">
                <h1>
                    Μισθοδοσία
                </h1>
            </div>
            <div className="undergraduates-results-result-expand-subheader">
                <h1>
                    {
                        espa ?
                            'Χρηματοδότηση ΕΣΠΑ' :
                                'Χωρίς Χρηματοδότηση ΕΣΠΑ'
                    }
                </h1>
            </div>
        </div>
        <div className="undergraduates-results-result-espa-salary">
            <div className="undergraduates-results-result-expand-header">
                <h1>
                    Μισθός
                </h1>
            </div>
            <div className="undergraduates-results-result-expand-subheader">
                <h1>
                    {salary} €
                </h1>
            </div>
        </div>
    </div>
  )
}

export default UndergraduatesResultEspaSalary