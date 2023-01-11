import React from 'react'
import './undergraduatesResults.css'
import UndergraduatesResult from './UndergraduatesResult'

const UndergraduatesResults = () => {

  var street = 'Εθνικής Αντιστάσεως';
  var streetNumber = '170';
  var town = 'Καισαριανή';
  var area = 'Αθήνα';

  return (
    <div className="undergraduates-results-container">
        <div className="undergraduates-results-wrapper">
            <UndergraduatesResult
            street={street}
            streetNumber={streetNumber}
            town={town}
            area={area}
            />
        </div>
    </div>
  )
}

export default UndergraduatesResults