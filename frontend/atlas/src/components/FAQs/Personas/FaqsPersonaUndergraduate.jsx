import React from 'react'
import './faqsPersonas.css'
import { Link } from "react-router-dom";

const FaqsPersonaUndergraduate = () => {
  return (
    <div className="faqs-personas-persona-container">
        <div className="faqs-personas-persona-header-container">
            <div className="faqs-personas-persona-title">
                <Link to={'/faqs/undergraduates'}>
                    Φοιτητές
                </Link>
            </div>
        </div>
        <div className="faqs-personas-persona-image-container">
            <Link to={'/faqs/undergraduates'}>
                <img 
                src={require('../../../assets/people-coffee.png')} 
                alt="sketch with a student packing bag" 
                />
            </Link>
        </div>
    </div>
  )
}

export default FaqsPersonaUndergraduate