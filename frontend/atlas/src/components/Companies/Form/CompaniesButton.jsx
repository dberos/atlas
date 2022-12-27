import React from 'react'
import './companiesForm.css'

const CompaniesButton = ({ setIsPublished }) => {
  return (
    <div className="companies-form-button-container">
        <div className="companies-form-button-primary">
            <button onClick={() => setIsPublished(true)}>
                Δημοσίευση
            </button>
        </div>
        <div className="companies-form-button-secondary">
          <button onClick={() => setIsPublished(false)}>
            Προσωρινή <br/> Αποθήκευση
          </button>
        </div>
    </div>
  )
}

export default CompaniesButton