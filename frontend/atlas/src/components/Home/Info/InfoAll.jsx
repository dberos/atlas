import React from 'react'
import './info.css'

const InfoAll = () => {
  return (
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
            <img 
              src={require('../../../assets/people-desk.png')} 
              alt="sketch with people sitting in a sofa and chatting" 
              draggable='false'
            />
        </div>
    </div>
  )
}

export default InfoAll