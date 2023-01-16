import React, { useState } from 'react'
import '../../../Undergraduates/Results/undergraduatesResults.css'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import GroupsIcon from '@mui/icons-material/Groups';
import MapIcon from '@mui/icons-material/Map';
import UndergraduatesResultFieldUniType from '../../../Undergraduates/Results/UndergraduatesResultFieldUniType';
import UndergraduatesResultStartDuration from '../../../Undergraduates/Results/UndergraduatesResultStartDuration';
import UndergraduatesResultEspaSalary from '../../../Undergraduates/Results/UndergraduatesResultEspaSalary';
import UndergraduatesResultDescription from '../../../Undergraduates/Results/UndergraduatesResultDescription';
import './undergraduatesSaved.css'
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import axios from 'axios';

const UndergraduatesSavedInterest = (props) => {

    const {
        interest_id,
        area,
        companyName,
        town,
        street,
        streetNumber,
        description,
        duration,
        espa,
        field,
        salary,
        startDate,
        title,
        type,
        university,
        interest_description,
        marks_name,
        internships,
        setInternships
    } = props;

    const [open, setOpen] = useState(false);
    const [error, setError] = useState([]);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleDelete = async () => {
        setIsSubmitted(true);
        setError('Η αίτηση διαγράφηκε με επιτυχία!');
        try {
            await axios.delete(`http://localhost:8080/interests/id=${interest_id}`);
            const id = localStorage.getItem('id');
            internships.forEach((element) => {
                axios.get(`http://localhost:8080/interests/saved/undergraduate_id=${id}`)
                .then((response) => {
                    const data = response.data;
                    const find = data.find((el) => element.id === el.internship_id);
                    if(!find) {
                        // Remove from active internships in profile
                        setInternships((current) => current.filter((curr) => curr.internship_id !== element.internship_id));
                    }
                })
            })
        }
        catch(error) {
            console.error(error);
        }
    }

  return (
    <div className="undergraduates-results-result-container"
    style={{background: open && 'transparent'}}
    >
        <div className="undergraduates-results-result-wrapper">
            <div className="undergraduates-results-result-header">
                <h1>
                    <span
                    style={{cursor: 'pointer'}}
                    onClick={() => setOpen(!open)}
                    >
                        {title}
                    </span>
                </h1>
            </div>
            <div className="undergraduates-results-result-subheader">
                <div className="undergraduates-results-result-subheader-company">
                    <div className="undergraduates-results-result-icon">
                        <i>
                            <GroupsIcon fontSize='large'/>
                        </i>
                    </div>
                    <h1>
                        {companyName} 
                    </h1>
                </div>
                <div className="undergraduates-results-result-subheader-area">
                    <h1>
                        {street} {streetNumber}, {town}, {area}
                    </h1>
                    <div className="undergraduates-results-result-icon">
                        <i>
                            <MapIcon fontSize='large'/>
                        </i>
                    </div>
                </div>
            </div>
            <div className="undergraduates-results-result-expand-container"
            style={{opacity: open && '1'}}
            >
                {
                    open &&
                        <div className="undergraduates-results-result-expand">
                            <UndergraduatesResultFieldUniType
                            field={field}
                            university={university}
                            type={type}
                            />
                            <UndergraduatesResultStartDuration
                            startDate={startDate}
                            duration={duration}
                            />
                            <UndergraduatesResultEspaSalary
                            espa={espa}
                            salary={salary}
                            />
                            <UndergraduatesResultDescription
                            description={description}
                            />
                            <div className="undergraduates-saved-container">
                                <div className="undergraduates-saved-wrapper">
                                    <div className="undergraduates-saved-header">
                                        <h1>
                                            Η δήλωσή μου
                                        </h1>
                                    </div>
                                    {
                                        marks_name &&
                                            <div className="undergraduates-saved-pdf">
                                                <div className="undergraduates-saved-pdf-text">
                                                    <p>
                                                        {marks_name}
                                                    </p>
                                                </div>
                                                <div className="undergraduates-saved-pdf-icon">
                                                    <i
                                                    onClick={() => window.open(`http://localhost:8080/interests/marks/${parseInt(interest_id)}/${marks_name}`)}
                                                    >
                                                        <PictureAsPdfIcon/>
                                                    </i>
                                                </div>
                                            </div>
                                    }
                                    {
                                        interest_description && 
                                            <div className="undergraduates-saved-description">
                                                <p>
                                                    {interest_description}
                                                </p>
                                            </div>
                                    }
                                    {
                                        !isSubmitted ?
                                            <div className="undergraduates-saved-delete">
                                                <button
                                                type='button'
                                                onClick={handleDelete}
                                                >
                                                    Διαγραφή Αίτησης
                                                </button>
                                            </div> :
                                            <div className="undergraduates-saved-notification">
                                                <p>
                                                    {error}
                                                </p>
                                            </div>
                                    }
                                    
                                </div>
                            <div className="undergraduates-results-result-candidate-after" 
                            style={{marginTop: '15px'}}
                            />
                            </div>
                        </div>
                }
            </div>
        </div>
        <div className="undergraduates-results-result-button">
            <button
            type='button'
            onClick={() => setOpen(!open)}
            >
                {
                    open ? 
                        <ExpandLessIcon fontSize='large'/> :
                        <ExpandMoreIcon fontSize='large'/>
                }
            </button>
        </div>
    </div>
  )
}

export default UndergraduatesSavedInterest