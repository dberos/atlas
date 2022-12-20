import React from 'react'
import './info.css'

const InfoNoEspa = () => {
  return (
    <div className="info-item">
        <div className="info-item-title">
            <h1>
              Πρακτική Άσκηση χωρίς ΕΣΠΑ
            </h1>
        </div>
        <div className="info-item-subtitle">
            <h2>
              Εάν δεν είσαι δικαιούχος χρηματοδότησης ΕΣΠΑ, βρες τις εταιρείες που ψάχνουν άτομα σαν και εσένα!
            </h2>
        </div>
        <div className="info-image-container">
            <img 
            src={require('../../../assets/people-graph.png')} 
            style={{height: '95%'}} 
            alt="sketch of people viewing results 3d" 
            draggable='false'
            />
        </div>
    </div>
  )
}

export default InfoNoEspa