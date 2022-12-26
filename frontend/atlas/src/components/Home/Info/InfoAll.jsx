import React from 'react'
import './info.css'
import { Link } from "react-router-dom";

const InfoAll = () => {
  return (
    <div className="info-item">
        <div className="info-item-title">
          <span>
            <Link>
                Όλες οι Πρακτικές Ασκήσεις
            </Link>
          </span>
        </div>
        <div className="info-item-subtitle">
            <h2>
              Μπορείς να δεις τις συνολικές Πρακτικές στον ΑΤΛΑΣ και να αποφασίσεις τι σου ταιριάζει!
            </h2>
        </div>
        <div className="info-image-container">
          <Link>
            <img 
              src={require('../../../assets/people-desk.png')} 
              alt="sketch with people sitting in a sofa and chatting" 
              draggable='false'
            />
          </Link>
        </div>
    </div>
  )
}

export default InfoAll