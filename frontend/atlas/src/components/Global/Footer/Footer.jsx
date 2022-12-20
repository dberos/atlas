import React from 'react'
import './footer.css'
import FooterAbout from './FooterAbout'
import FooterAtlas from './FooterAtlas'
import FooterLegal from './FooterLegal'
import FooterMusts from './FooterMusts'

const Footer = () => {
  return (
    <div className="footer-container">
      <FooterAtlas/>
      <FooterMusts/>
      <FooterLegal/>
      <FooterAbout/>
    </div>
  )
}

export default Footer