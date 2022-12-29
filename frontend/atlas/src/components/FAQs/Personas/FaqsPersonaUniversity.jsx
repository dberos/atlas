import React from 'react'
import './faqsPersonas.css'

const FaqsPersonaUniversity = () => {
  return (
    <div className="faqs-personas-persona-container">
        <div className="faqs-personas-persona-header-container">
            <div className="faqs-personas-persona-title">
                <p>
                    Πανεπιστήμια
                </p>
            </div>
        </div>
        <div className="faqs-personas-persona-image-container">
            <p>
                <img 
                src={require('../../../assets/person-desk.png')} 
                alt="sketch of a person multitasking" 
                />
            </p>
        </div>
    </div>
  )
}

export default FaqsPersonaUniversity