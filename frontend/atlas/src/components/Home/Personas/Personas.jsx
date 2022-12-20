import React from 'react'
import './personas.css'
import PersonaUndergraduate from './PersonaUndergraduate'
import PersonaCompany from './PersonaCompany'
import PersonaUniversity from './PersonaUniversity'

const Personas = () => {
  return (
    <div className="personas-container">
        <div className="personas-wrapper">
            <div className="personas-student-company">
                <PersonaUndergraduate/>
                <PersonaCompany/>
            </div>
            <div className="personas-university-container">
                <PersonaUniversity/>
            </div>
            <div className="personas-university-after"></div>
        </div>
    </div>
  )
}

export default Personas