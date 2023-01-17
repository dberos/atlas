import React, { useEffect, useState } from 'react'
import './info.css'
import { Link } from "react-router-dom";

const InfoAll = () => {

  const [all, setAll] = useState([]);

  useEffect(() => {
    const results = [
      null,
      null,
      null,
      '-1',
      -1,
      null,
      null
    ];
    setAll(results);
  }, [])

  return (
    <div className="info-item">
        <div className="info-item-title">
          <span>
            <Link to={`/undergraduates/results/${btoa(all)}`}>
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
          <Link to={`/undergraduates/results/${btoa(all)}`}>
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