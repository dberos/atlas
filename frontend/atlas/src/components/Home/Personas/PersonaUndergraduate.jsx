import React from 'react'
import './personas.css'
import { Link } from "react-router-dom";

const PersonaUndergraduate = () => {
  return (
    <div className="personas-persona-container">
        <div className="personas-header-container">
            <div className="personas-title">
                <span>
                    <Link to={'/undergraduates'}>
                        Θες περισσότερες επιλογές αναζήτησης;
                    </Link>
                </span>
            </div>
            <div className="personas-subtitle">
                <h2>
                    Προσάρμοσε τα αποτελέσματα στα μέτρα σου και βρες
                    την κατάλληλη θέση!
                </h2>
            </div>
        </div>
        <div className="personas-image-container">
            <Link to={'/undergraduates'}>
                <img 
                src={require('../../../assets/person-space.png')} 
                alt="sketch of a happy person viewing statistics" 
                draggable='false'
                />
            </Link>
        </div>
    </div>
  )
}

export default PersonaUndergraduate