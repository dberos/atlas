import React from 'react'
import './companiesForm.css'

const CompaniesButton = (props) => {

  const {
          setIsPublished, 
          isDisabled
        } = props;

  return (
    <div className="companies-form-button-container">
        <div className="companies-form-button-primary">
            <button
            disabled={isDisabled ? true : false}
            onClick={() => setIsPublished(true)}
            style={{
              backgroundColor: isDisabled ? '#ADABA8' : '#be750f',
              cursor: isDisabled ? 'not-allowed' : 'pointer'
            }}
            >
                Δημοσίευση
            </button>
        </div>
        <div className="companies-form-button-secondary">
          <button 
          disabled={isDisabled ? true : false}
          onClick={() => setIsPublished(false)}
          style={{
            backgroundColor: isDisabled ? '#ADABA8' : '#112c5d',
            cursor: isDisabled ? 'not-allowed' : 'pointer'
          }}
          >
            Προσωρινή <br/> Αποθήκευση
          </button>
        </div>
    </div>
  )
}

export default CompaniesButton