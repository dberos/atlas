import React, { useState, useEffect } from 'react'
import './info.css'
import { Link } from "react-router-dom";

const InfoEspa = () => {

  const [espa, setEspa] = useState([]);

  useEffect(() => {
    const results = [
      null,
      null,
      null,
      '00/00/0000',
      -1,
      null,
      1
    ];
    setEspa(results);
  }, [])

  return (
    <div className="info-item">
        <div className="info-item-title">
          <span>
            <Link to={`/undergraduates/results/${btoa(espa)}`}>
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
          <Link to={`/undergraduates/results/${btoa(espa)}`}>
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