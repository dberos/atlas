import React from 'react'
import './companiesForm.css'

const CompaniesButton = (props) => {

  const {
          setIsPublished, 
          isDisabled,
          error
        } = props;

  return (
    <div className="companies-form-button-container"
    style={{justifyContent: error.length !== 0 && 'center',
            alignItems: error.length !== 0 && 'center'}}
    >
      {
        error.length !== 0 ?
          <p
          style={{color: error[0] === 'Η' && 'green'}}
          >
            {error}
          </p> :
          <>
            <div className="companies-form-button-primary">
            <button
            disabled={isDisabled}
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
            disabled={isDisabled}
            onClick={() => setIsPublished(false)}
            style={{
              backgroundColor: isDisabled ? '#ADABA8' : '#112c5d',
              cursor: isDisabled ? 'not-allowed' : 'pointer'
            }}
            >
              Προσωρινή <br/> Αποθήκευση
            </button>
          </div>
        </>
      }
        
    </div>
  )
}

export default CompaniesButton