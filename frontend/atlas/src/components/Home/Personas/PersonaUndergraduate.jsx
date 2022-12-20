import React from 'react'
import './personas.css'

const PersonaUndergraduate = () => {
  return (
    <div className="personas-persona-container">
        <div className="personas-header-container">
            <div className="personas-title">
                <h1>
                    Θες περισσότερες επιλογές αναζήτησης;
                </h1>
            </div>
            <div className="personas-subtitle">
                <h2>
                    Προσάρμοσε τα αποτελέσματα στα μέτρα σου και βρες
                    την κατάλληλη θέση!
                </h2>
            </div>
        </div>
        <div className="personas-image-container">
            <img 
            src={require('../../../assets/person-space.png')} 
            alt="sketch of a happy person viewing statistics" 
            draggable='false'
            />
        </div>
    </div>
  )
}

export default PersonaUndergraduate