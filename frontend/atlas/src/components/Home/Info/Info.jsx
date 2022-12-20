import React from 'react'
import './info.css'

const Info = () => {
  return (
    <div className="info-container">
        <div className="info-wrapper">
            <div className="info-title">
              <h1>
                Τι προσφέρει ο ΑΤΛΑΣ;
              </h1>
            </div>
            <div className="info-items-container">
              <div className="info-item">
                <div className="info-item-title">
                  <h1>
                    Πρακτική Άσκηση μέσω ΕΣΠΑ
                  </h1>
                </div>
                <div className="info-item-subtitle">
                  <h2>
                    Εάν είσαι δικαιούχος χρηματοδότησης ΕΣΠΑ, αυτή η κατηγορία είναι για σένα!
                    {/* Εάν δεν είσαι δικαιούχος χρηματοδότησης ΕΣΠΑ, βρες τις εταιρείες που ψάχνουν άτομα σαν και εσένα */}
                  </h2>
                </div>
                <div className="info-image-container">
                  <img src={require('../../../assets/people-chart.png')} alt="" draggable='false'/>
                </div>
              </div>
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
                  <img src={require('../../../assets/people-graph.png')} style={{height: '95%'}} alt="" draggable='false'/>
                </div>
              </div>
              <div className="info-item">
                <div className="info-item-title">
                  <h1>
                    Όλες οι Πρακτικές Ασκήσεις
                  </h1>
                </div>
                <div className="info-item-subtitle">
                  <h2>
                    Μπορείς να δεις τις συνολικές Πρακτικές στον ΑΤΛΑΣ και να αποφασίσεις τι σου ταιριάζει!
                  </h2>
                </div>
                <div className="info-image-container">
                  <img src={require('../../../assets/people-desk.png')} alt="" draggable='false'/>
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Info