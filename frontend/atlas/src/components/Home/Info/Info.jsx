import React from 'react'
import './info.css'
import InfoAll from './InfoAll'
import InfoEspa from './InfoEspa'
import InfoNoEspa from './InfoNoEspa'

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
              <InfoEspa/>
              <InfoNoEspa/>
              <InfoAll/>
            </div>
        </div>
    </div>
  )
}

export default Info