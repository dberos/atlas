import React from 'react'
import './personas.css'

const Personas = () => {
  return (
    <div className="personas-container">
        <div className="personas-wrapper">
            <div className="personas-student-company">
                <div className="personas-persona-container">
                    <div className="personas-header-container">
                        <div className="personas-title">
                            <h1>
                                Θες περισσότερες επιλογές αναζήτησης;
                            </h1>
                        </div>
                        <div className="personas-subtitle">
                            <h2>
                                Προσάρμοσε τα αποτελέσματα στα μέτρα σου και βρες
                                την κατάλληλη θέση!
                            </h2>
                        </div>
                    </div>
                    <div className="personas-image-container">
                        <img src={require('../../../assets/person-space.png')} alt="" draggable='false'/>
                    </div>
                </div>
                <div className="personas-persona-container"
                    style={{borderImageSource: 'linear-gradient(270deg, rgba(190,117,15,1) 0%, rgba(33,57,103,1) 80%, rgba(19,37,83,1) 100%)'}}>
                    <div className="personas-header-container">
                        <div className="personas-title">
                            <h1>
                                Θες να αναπτύξεις την επιχείρησή σου;
                            </h1>
                        </div>
                        <div className="personas-subtitle">
                            <h2>
                                Δημοσίευσε νέα θέση Πρακτικής Άσκησης και γνώρισε
                                τους Φοιτητές που ενδιαφέρονται!
                            </h2>
                        </div>
                    </div>
                    <div className="personas-image-container">
                        <img src={require('../../../assets/person-jump.png')} alt="" draggable='false'/>
                    </div>
                </div>
            </div>
            <div className="personas-university-container">
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
            </div>
            <div className="personas-university-after"></div>
        </div>
    </div>
  )
}

export default Personas