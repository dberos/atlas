import React from 'react'
import './undergraduatesResults.css'

const UndergraduatesResultStartDuration = (props) => {

    const {
        startDate,
        duration
    } = props;

  return (
    <div className="undergraduates-results-result-start-duration-container">
        <div className="undergraduates-results-result-start-duration">
            <div className="undergraduates-results-result-expand-header">
                <h1>
                    Έναρξη έως
                </h1>
            </div>
            <div className="undergraduates-results-result-expand-subheader">
                <h1>
                    {startDate}
                </h1>
            </div>
        </div>
        <div className="undergraduates-results-result-start-duration">
            <div className="undergraduates-results-result-expand-header">
                <h1>
                    Διάρκεια
                </h1>
            </div>
            <div className="undergraduates-results-result-expand-subheader">
                <h1>
                    {
                        duration === 3 ?
                            '3 Μήνες' : '6 Μήνες'
                    }
                </h1>
            </div>
        </div>
    </div>
  )
}

export default UndergraduatesResultStartDuration