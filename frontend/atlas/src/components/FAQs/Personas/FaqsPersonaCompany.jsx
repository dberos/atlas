import React from 'react'
import './faqsPersonas.css'
import { Link } from "react-router-dom";

const FaqsPersonaCompany = () => {
  return (
    <div className="faqs-personas-persona-container">
        <div className="faqs-personas-persona-header-container">
            <div className="faqs-personas-persona-title">
                <Link>
                    Εταιρείες
                </Link>
            </div>
        </div>
        <div className="faqs-personas-persona-image-container">
            <Link>
                <img 
                src={require('../../../assets/people-clock.png')} 
                alt="sketch of people talking" 
                />
            </Link>
        </div>
    </div>
  )
}

export default FaqsPersonaCompany