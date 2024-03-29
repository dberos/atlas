import React from 'react'
import '../../../Undergraduates/Results/undergraduatesResults.css'
import AddCircleIcon from '@mui/icons-material/AddCircle';

const UndergraduatesSavedForm = (props) => {

    const {
        interestID,
        fileName,
        setFileName,
        setFile,
        selectedDescription,
        setSelectedDescription,
        setIsSubmitted,
        error
    } = props;

    const handleChange = (e) => {
        // If not cancel
        if(e.target.files[0]) {
            setFileName(e.target.files[0].name);
            setFile(e.target.files[0]);
        }
    }

  return (
    <div className="undergraduates-results-result-candidate-container">
        <div className="undergraduates-results-result-candidate-wrapper">
            <div className="undergraduates-results-result-candidate-header">
                <h1>
                    Η αίτησή μου
                </h1>
            </div>
            <div className="undergraduates-results-result-candidate-pdf">
                <div className="undergraduates-results-result-candidate-pdf-text">
                    <p>
                        {
                            fileName.length !== 0 ?
                                fileName :
                                    'Προσθήκη βαθμολογίας'
                        }
                    </p>
                </div>
                <div className="undergraduates-results-result-candidate-pdf-button-container">
                    <input 
                    hidden 
                    type="file" 
                    accept='.pdf' 
                    id={"profileHiddenInputId"+interestID} 
                    onChange={handleChange}
                    />
                    <i> 
                        <AddCircleIcon 
                        fontSize='large' 
                        onClick={() => document.getElementById("profileHiddenInputId"+interestID).click()}
                        />   
                    </i>
                </div>
            </div>
            <div className="undergraduates-results-result-candidate-description">
                <textarea
                value={selectedDescription}
                onChange={(e) => setSelectedDescription(e.target.value)}
                placeholder='Πες μας λίγα λόγια για εσένα'
                />
            </div>
            {
                error.length === 0 ?
                    <div className="undergraduates-results-result-candidate-button">
                        <div className="undergraduates-results-result-candidate-button-primary">
                            <button
                            onClick={() => setIsSubmitted(true)}
                            >
                                Οριστική <br/> Υποβολή
                            </button>
                        </div>
                        <div className="undergraduates-results-result-candidate-button-secondary">
                            <button
                            >
                                Διαγραφή <br/> Αίτησης
                            </button>
                        </div>
                    </div> :
                        <div className="undergraduates-results-candidate-error">
                            <p
                            style={{color: 'green'}}
                            >
                                {error}
                            </p>
                        </div>
            }
            
        </div>
    </div>
  )
}

export default UndergraduatesSavedForm