import React from 'react'
import './personas.css'

const PersonaUniversity = () => {
  return (
    <div className="personas-persona-university">
        <div className="personas-persona-university-header-container">
            <div className="personas-university-title">
                <h1>
                    Γραφείο Πρακτικής Πανεπιστημίου
                </h1>
            </div>
            <div className="personas-university-subtitle">
                <h2>
                    Διαχειριστείτε όλες τις ενδιάμεσες διαδικασίες του
                    τμήματός σας μέσω του προσωπικού σας λογαριασμού
                    στον ΑΤΛΑΣ!
                </h2>
            </div>
        </div>
        <div className="personas-university-button-container">
            <button>
                Μάθετε περισσότερα
            </button>
        </div>
    </div>
  )
}

export default PersonaUniversity