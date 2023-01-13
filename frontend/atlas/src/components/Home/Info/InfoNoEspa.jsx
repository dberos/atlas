import React, { useState, useEffect } from 'react'
import './info.css'
import { Link } from "react-router-dom";

const InfoNoEspa = () => {

  const [noEspa, setNoEspa] = useState([]);

  useEffect(() => {
    const results = [
      null,
      null,
      null,
      '00/00/0000',
      -1,
      null,
      2
    ];
    setNoEspa(results);
  }, [])

  return (
    <div className="info-item">
        <div className="info-item-title">
          <span>
            <Link to={`/undergraduates/results/${btoa(noEspa)}`}>
                Πρακτική Άσκηση χωρίς ΕΣΠΑ
            </Link>
          </span>
        </div>
        <div className="info-item-subtitle">
            <h2>
              Εάν δεν είσαι δικαιούχος χρηματοδότησης ΕΣΠΑ, βρες τις εταιρείες που ψάχνουν άτομα σαν και εσένα!
            </h2>
        </div>
        <div className="info-image-container">
          <Link to={`/undergraduates/results/${btoa(noEspa)}`}>
            <img 
            src={require('../../../assets/people-graph.png')} 
            style={{height: '93%'}} 
            alt="sketch of people viewing results 3d" 
            draggable='false'
            />
          </Link>
        </div>
    </div>
  )
}

export default InfoNoEspa