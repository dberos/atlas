import React, { useState, useEffect } from 'react'
import '../profileCompanies.css'
import SchoolIcon from '@mui/icons-material/School';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import axios from 'axios';
import { acceptInternship, acceptInterest, rejectInterest, answerAllInterests } from './internships';
import { useNavigate } from 'react-router-dom'

const CompaniesSubmittedInterest = (props) => {

    const {
        interestId,
        internshipId,
        undergraduateId,
        description,
        marksName
    } = props;

    let navigate = useNavigate();

    const [open, setOpen] = useState(false);
    const [userName, setUserName] = useState([]);
    const [userSurname, setUserSurname] = useState([]);
    const [userField, setUserField] = useState([]);
    const [userUniversity, setUserUniversity] = useState([]);
    const [isAccepted, setIsAccepted] = useState(false);
    const [answer, setAnswer] = useState([]);
    const [error, setError] = useState([]);

    useEffect(() => {
        const findUser = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/undergraduates/id=${undergraduateId}`);
                const data = response.data;
                setUserName(data.first_name);
                setUserSurname(data.last_name);
                setUserField(data.field);
                setUserUniversity(data.university);
            }
            catch(error) {
                console.error(error);
            }
        }
        findUser();
    }, [undergraduateId])

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(isAccepted) {
            setError('Ο ενδιαφερόμενος θα ειδοποιηθεί για την επιλογή του!');
            const user = {
                "id": internshipId,
                "undergraduate_id": undergraduateId
            };
            await acceptInternship(user);
            const interest = {
                "id": interestId
            };
            await acceptInterest(interest);
            // Reject all if not already
            await answerAllInterests(internshipId);
            // Navigate to submitted and don't allow go back
            navigate('/profile/companies/submitted', { replace: true });
        }
        else {
            setError('Ο ενδιαφερόμενος θα ειδοποιηθεί για την απόρριψή του');
            const interest = {
                "id": interestId,
                "answer": answer.length !== 0 ? answer : null
            }
            await rejectInterest(interest);
        }
    }

  return (
    <div className="profile-companies-candidates-candidate">
        <div className="profile-companies-candidates-candidate-header">
            <div className="profile-companies-candidates-candidate-header-name">
                <h1>
                    <span
                    style={{cursor: 'pointer'}}
                    onClick={() => setOpen(!open)}
                    >
                        {userName} {userSurname}
                    </span>
                </h1>
            </div>
            <div className="profile-companies-candidates-candidate-header-university">
                <div className="profile-companies-candidates-candidate-header-university-field">
                    <div className="profile-companies-candidate-header-university-icon">
                        <i>
                            <SchoolIcon/>
                        </i>
                    </div>
                    <h1>
                        {userField}
                    </h1>
                </div>
                <div className="profile-companies-candidates-candidate-header-university-uni">
                <div className="profile-companies-candidate-header-university-icon">
                        <i>
                            <AccountBalanceIcon/>
                        </i>
                    </div>
                    <h1>
                        {userUniversity}
                    </h1>
                </div>
            </div>
        </div>
        <div className="profile-companies-candidate-expand-container"
        style={{opacity: open && '1'}}
        >   
        {
            open &&
                <div className="profile-companies-candidate-expand">
                    {
                        marksName &&
                            <div className="profile-companies-candidate-pdf-container">
                                <div className="profile-companies-candidate-pdf-text">
                                    <p>
                                        {marksName}
                                    </p>
                                </div>
                                <div className="profile-companies-candidate-pdf-icon">
                                    <i
                                    onClick={() => window.open(`http://localhost:8080/interests/marks/${interestId}/${marksName}`)}
                                    >
                                        <PictureAsPdfIcon/>
                                    </i>
                                </div>
                            </div>
                    }
                    {
                        description &&
                            <div className="profile-companies-candidate-description">
                                <p>
                                    {description}
                                </p>
                            </div>
                    }
                    <form
                    onSubmit={handleSubmit}
                    >
                        <div className="profile-companies-candidate-answer">
                            <textarea
                            placeholder='Σε περίπτωση απόρριψης αναφέρετε προαιρετικά τον λόγο'
                            value={answer}
                            onChange={(e) => setAnswer(e.target.value)}
                            />
                        </div>
                        <div className="profile-companies-candidate-button-container">
                            {
                                error.length !== 0 ?
                                    <p>
                                        {error}
                                    </p> :
                                        <>
                                            <div className="profile-companies-candidate-button-secondary">
                                                <button>
                                                    Απόρριψη
                                                </button>
                                            </div>
                                            <div className="profile-companies-candidate-button-primary">
                                                <button
                                                onClick={() => setIsAccepted(true)}
                                                >
                                                    Αποδοχή
                                                </button>
                                            </div>
                                        </>
                            }
                        </div>
                    </form>
                </div>
        }
        </div>
        <div className="profile-companies-expand-icon">
            <i
            
            onClick={() => setOpen(!open)}>
                {
                    open ?
                        <ExpandLessIcon fontSize='large'/> :
                            <ExpandMoreIcon fontSize='large'/>
                }
            </i>
        </div>
    </div>
  )
}

export default CompaniesSubmittedInterest