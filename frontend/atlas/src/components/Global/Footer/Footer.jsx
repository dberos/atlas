import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <div className="footer-container">
            <div className="footer-left">
                <div className="footer-left-title">
                    <h1>
                        ΑΤΛΑΣ
                    </h1>
                </div>
                <div className="footer-left-subtitle">
                    <h2>
                        Σύστημα Κεντρικής Υποστήριξης της Πρακτικής
                        Άσκησης Φοιτητών ΑΕΙ
                    </h2>
                </div>
                <div className="footer-left-copyright">
                    <p>
                        © ΕΑΜ 2022 - 2023 All Rights and Lefts reserved
                    </p>
                </div>
            </div>
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
                    <h2>
                        Συχνές Ερωτήσεις
                    </h2>
                </div>
            </div>
            <div className="footer-others">
                <div className="footer-others-title">
                    <h1>
                        Νομικά
                    </h1>
                </div>
                <div className="footer-others-subtitle">
                    <h2>
                        Πολιτική Απορρήτου
                    </h2>
                    <h2>
                        Όροι και Προϋποθέσεις
                    </h2>
                    <h2>
                        Cookies
                    </h2>
                </div>
            </div>
            <div className="footer-others">
                <div className="footer-others-title">
                    <h1>
                        Μάθετε για εμάς
                    </h1>
                </div>
                <div className="footer-others-subtitle">
                    <h2>
                        Νέα - Ανακοινώσεις
                    </h2>
                    <h2>
                        Συνεργαζόμενα Πανεπιστήμια
                    </h2>
                </div>
            </div>
    </div>
  )
}

export default Footer