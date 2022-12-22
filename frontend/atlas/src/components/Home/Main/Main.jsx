import React from 'react'
import './main.css'
import MainSearchBar from './MainSearchBar';

const Main = () => {

  return (
    <div className='main-container'>
        <div className='main-header-container'>
          <div className='main-title'>
            <h1>
              ΑΤΛΑΣ
            </h1>
          </div>
          <div className='main-subtitle'>
            <h2>
              Ξεκίνα την επαγγελματική σου σταδιοδρομία με ένα απλό βήμα!
            </h2>
          </div>
          <MainSearchBar/>
        </div>
        <div className='main-logo-container'>
          <img src={require('../../../assets/illustrations.png')} alt='sketch with a person thinking' draggable='false'/>
        </div>
    </div>
  )
}

export default Main
