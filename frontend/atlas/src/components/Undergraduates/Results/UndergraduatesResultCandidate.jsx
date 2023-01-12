import React from 'react'
import './undergraduatesResults.css'
import AddCircleIcon from '@mui/icons-material/AddCircle';

const UndergraduatesResultCandidate = (props) => {

    const {
        fileName,
        setFileName,
        setFile,
        description,
        setDescription,
        setIsPublished
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
                    Ενδιαφέρεσαι;
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
                    id="hiddenInputID" 
                    onChange={handleChange}
                    />
                    <i> 
                        <AddCircleIcon 
                        fontSize='large' 
                        onClick={() => document.getElementById("hiddenInputID").click()}
                        />   
                    </i>
                </div>
            </div>
            <div className="undergraduates-results-result-candidate-description">
                <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder='Πες μας λίγα λόγια για εσένα'
                />
            </div>
            <div className="undergraduates-results-result-candidate-button">
                <div className="undergraduates-results-result-candidate-button-primary">
                    <button
                    onClick={() => setIsPublished(true)}
                    >
                        Ενδιαφέρομαι
                    </button>
                </div>
                <div className="undergraduates-results-result-candidate-button-secondary">
                    <button
                    onClick={() => setIsPublished(false)}
                    >
                        Προσωρινή Αποθήκευση
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default UndergraduatesResultCandidate