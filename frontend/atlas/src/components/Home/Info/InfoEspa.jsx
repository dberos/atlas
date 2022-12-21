import React from 'react'
import './info.css'
import { Link } from "react-router-dom";

const InfoEspa = () => {
  return (
    <div className="info-item">
        <div className="info-item-title">
          <span>
            <Link to={'/undergraduates'}>
                Πρακτική Άσκηση μέσω ΕΣΠΑ
            </Link>
          </span>
        </div>
        <div className="info-item-subtitle">
            <h2>
              Εάν είσαι δικαιούχος χρηματοδότησης ΕΣΠΑ, αυτή η κατηγορία είναι για σένα!
            </h2>
        </div>
        <div className="info-image-container">
          <Link to={'/undergraduates'}>
            <img 
            src={require('../../../assets/people-chart.png')} 
            alt="sketch of people viewing results in a board" 
            draggable='false'
            />
          </Link>
        </div>
    </div>
  )
}

export default InfoEspa