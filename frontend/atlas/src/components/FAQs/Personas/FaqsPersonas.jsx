import React from 'react'
import './faqsPersonas.css'
import FaqsPersonaUndergraduate from './FaqsPersonaUndergraduate'
import FaqsPersonaCompany from './FaqsPersonaCompany'
import FaqsPersonaUniversity from './FaqsPersonaUniversity'

const FaqsPersonas = () => {
  return (
    <div className="faqs-personas-container">
        <div className="faqs-personas-wrapper">
            <FaqsPersonaUndergraduate/>
            <FaqsPersonaCompany/>
            <FaqsPersonaUniversity/>
            <div className="faqs-personas-after"/>
        </div>
    </div>
  )
}

export default FaqsPersonas