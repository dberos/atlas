import React from 'react'
import './cta.css'
import Breadcrumb from '../Breadcrumb/Breadcrumb'

const CTA = (props) => {
  return (
    <div className="cta-container">
        <div className='cta-header-container'>
          <div className='cta-title'>
            <h1>
              {props.title}
            </h1>
          </div>
          <div className='cta-subtitle'>
            <h2>
              {props.subtitle}
            </h2>
          </div>
          <div className="cta-breadcrumb-container">
            <Breadcrumb
            links={props.links}
            />
          </div>
        </div>
        <div className='cta-logo-container'>
          <img src={require('../../../assets/chemistry.png')} 
          alt='sketch with two test tubes and a microscope' 
          draggable='false'
          />
        </div>
    </div>
  )
}

export default CTA