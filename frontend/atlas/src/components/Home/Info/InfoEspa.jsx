import React from 'react'
import './info.css'

const InfoEspa = () => {
  return (
    <div className="info-item">
        <div className="info-item-title">
            <h1>
              Πρακτική Άσκηση μέσω ΕΣΠΑ
            </h1>
        </div>
        <div className="info-item-subtitle">
            <h2>
              Εάν είσαι δικαιούχος χρηματοδότησης ΕΣΠΑ, αυτή η κατηγορία είναι για σένα!
            </h2>
        </div>
        <div className="info-image-container">
            <img 
            src={require('../../../assets/people-chart.png')} 
            alt="sketch of people viewing results in a board" 
            draggable='false'
            />
        </div>
    </div>
  )
}

export default InfoEspa