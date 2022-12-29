import React from 'react'
import './footer.css'
import { Link } from "react-router-dom";

const FooterMusts = () => {
  return (
    <div className="footer-others">
        <div className="footer-others-title">
            <h1>
                Χρήσιμοι Σύνδεσμοι
            </h1>
        </div>
        <div className="footer-others-subtitle">
            <h2>
                Επικοινωνία
            </h2>
            <Link to={'/faqs'}>
                Συχνές Ερωτήσεις
            </Link>
        </div>
    </div>
  )
}

export default FooterMusts