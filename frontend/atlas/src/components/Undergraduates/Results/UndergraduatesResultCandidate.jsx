import React, { useEffect, useState } from 'react'
import './undergraduatesResults.css'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import axios from 'axios';

const UndergraduatesResultCandidate = (props) => {

    const {
        id,
        fileName,
        setFileName,
        setFile,
        selectedDescription,
        setSelectedDescription,
        isPublished,
        setIsPublished,
        university
    } = props;

    const handleChange = (e) => {
        // If not cancel
        if(e.target.files[0]) {
            setFileName(e.target.files[0].name);
            setFile(e.target.files[0]);
        }
    }

    const [error, setError] = useState([]);
    const [undergraduateUniversity, setUndergraduateUniversity] = useState([]);
    const [isSent, setIsSent] = useState(false);

    const handlePublish = () => {
        setIsPublished(true);
        setIsSent(true);
    }

    const handleNotPublish = () => {
        setIsPublished(false);
        setIsSent(true);
    }

    useEffect(() => {
        const user = localStorage.getItem('email');
        if(user) {
            const type = localStorage.getItem('type');
            if(type === 'company') {
                setError('Αυτή η ενέργεια είναι μόνο για Φοιτητές');
            }
            else {
                const getUndergraduate = async () => {
                    try {
                        const response = await axios.get(`http://localhost:8080/undergraduates/id=${localStorage.getItem('id')}`);
                        const data = response.data;
                        setUndergraduateUniversity(data.university);
                    }
                    catch {
                        setError('Φαίνεται ότι κάτι πήγε στραβά');
                    }
                    
                }
                getUndergraduate();
                if(undergraduateUniversity !== university) {
                    if(university !== 'Όλα τα πανεπιστήμια') {
                        setError('Η θέση δεν προσφέρεται για το πανεπιστήμιο σου');
                    }
                    else {
                        const getInternship = async () => {
                            try {
                                const response = await axios.get(`http://localhost:8080/interests/internship_id=${id}`);
                                const data = response.data;
                                const find = data.find((value) => parseInt(value.undergraduate_id) === parseInt(localStorage.getItem('id')));
                                if(find !== undefined) {
                                    setError('Έχεις ήδη δηλώσει ενδιαφέρον για αυτή τη θέση');
                                }
                                else {
                                    setError([]);
                                }
                            }
                            catch {
                                setError('Φαίνεται ότι κάτι πήγε στραβά');
                            }
                            
                        }
                        getInternship();
                    }
                }
                else {
                    const getInternship = async () => {
                        try {
                            const response = await axios.get(`http://localhost:8080/interests/internship_id=${id}`);
                            const data = response.data;
                            const find = data.find((value) => parseInt(value.undergraduate_id) === parseInt(localStorage.getItem('id')));
                            if(find !== undefined) {
                                setError('Έχεις ήδη δηλώσει ενδιαφέρον για αυτή τη θέση');
                            }
                            else {
                                setError([]);
                            }
                        }
                        catch {
                            setError('Φαίνεται ότι κάτι πήγε στραβά');
                        }
                        
                    }
                    getInternship();
                }
            }
        }
        else {
            setError('Απαιτείται σύνδεση στο λογαρισμό σου για να δεις τις διαθέσιμες επιλογές');
        }
        
    }, [id, undergraduateUniversity, university])

    useEffect(() => {
        if(isSent) {
            if(isPublished) {
                setError('Το ενδιαφέρον καταχωρήθηκε με επιτυχία!');
            }
            else {
                setError('Το ενδιαφέρον αποθηκεύτηκε στο προφίλ σου!')
            }
        }
    }, [isSent, isPublished])

  return (
    <div className="undergraduates-results-result-candidate-container">
        <div className="undergraduates-results-result-candidate-wrapper">
            <div className="undergraduates-results-result-candidate-header">
                <h1>
                    Ενδιαφέρεσαι;
                </h1>
            </div>
            {   
                error.length === 0 ? 
                <>
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
                    value={selectedDescription}
                    onChange={(e) => setSelectedDescription(e.target.value)}
                    placeholder='Πες μας λίγα λόγια για εσένα'
                    />
                </div>
                <div className="undergraduates-results-result-candidate-button">
                    <div className="undergraduates-results-result-candidate-button-primary">
                        <button
                        onClick={handlePublish}
                        >
                            Ενδιαφέρομαι
                        </button>
                    </div>
                    <div className="undergraduates-results-result-candidate-button-secondary">
                        <button
                        onClick={handleNotPublish}
                        >
                            Προσωρινή Αποθήκευση
                        </button>
                    </div>
                </div> 
                </>
                :
                <div className="undergraduates-results-candidate-error">
                    <p
                    style={{color: error !== 'Απαιτείται σύνδεση στο λογαρισμό σου για να δεις τις διαθέσιμες επιλογές' ?
                        (error === 'Το ενδιαφέρον καταχωρήθηκε με επιτυχία!' || error === 'Το ενδιαφέρον αποθηκεύτηκε στο προφίλ σου!'
                        || error === 'Έχεις ήδη δηλώσει ενδιαφέρον για αυτή τη θέση') ? 'green' : 'red' : '#81AFDD'}}
                    >
                        {error}
                    </p>
                </div>
            }
        </div>
    </div>
  )
}

export default UndergraduatesResultCandidate