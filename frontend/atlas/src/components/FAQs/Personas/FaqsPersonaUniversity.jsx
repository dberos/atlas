import React from 'react'
import './faqsPersonas.css'
import { Link } from "react-router-dom";

const FaqsPersonaUniversity = () => {
  return (
    <div className="faqs-personas-persona-container">
        <div className="faqs-personas-persona-header-container">
            <div className="faqs-personas-persona-title">
                <Link>
                    Πανεπιστήμια
                </Link>
            </div>
        </div>
        <div className="faqs-personas-persona-image-container">
            <Link>
                <img 
                src={require('../../../assets/person-desk.png')} 
                alt="sketch of a person multitasking" 
                />
            </Link>
        </div>
    </div>
  )
}

export default FaqsPersonaUniversity