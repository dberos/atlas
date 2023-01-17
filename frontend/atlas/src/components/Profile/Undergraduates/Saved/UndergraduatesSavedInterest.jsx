import React, { useState } from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import GroupsIcon from '@mui/icons-material/Groups';
import MapIcon from '@mui/icons-material/Map';
import UndergraduatesResultFieldUniType from '../../../Undergraduates/Results/UndergraduatesResultFieldUniType';
import UndergraduatesResultStartDuration from '../../../Undergraduates/Results/UndergraduatesResultStartDuration';
import UndergraduatesResultEspaSalary from '../../../Undergraduates/Results/UndergraduatesResultEspaSalary';
import UndergraduatesResultDescription from '../../../Undergraduates/Results/UndergraduatesResultDescription';
import axios from 'axios';
import { addMarks } from '../../../Undergraduates/Results/interests';
import UndergraduatesSavedForm from './UndergraduatesSavedForm';

const UndergraduatesSavedInterest = (props) => {

    const {
        interest_id,
        internship_id,
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
        marks,
        internships,
    } = props;

    const [open, setOpen] = useState(false);
    const [error, setError] = useState([]);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [file, setFile] = useState(marks ? marks : null);
    const [fileName, setFileName] = useState(marks_name ? marks_name : []);
    const [selectedDescription, setSelectedDescription] = useState(interest_description ?
        interest_description : []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(isSubmitted) {
            setError('Η αίτηση υποβλήθηκε με επιτυχία!');
            const interest = {
                "id": interest_id,
                "undergraduate_id": localStorage.getItem('id'),
                "internship_id": internship_id,
                "description": selectedDescription.length !== 0 ? selectedDescription : null,
                "marks_name": fileName.length !== 0 ? fileName : null,
                "status": "await",
                "submitted": true
            }
            try {
                const response = await axios.put('http://localhost:8080/interests', interest);
                const data = response.data;
                console.log(data);
            }
            catch(error) {
                console.error(error);
            }
            if(file && fileName !== marks_name) {
                const marks = new FormData();
                marks.append('marks', file);
                await addMarks(interest_id, marks);
            }
            // setInternships((current) => current.filter((curr) => curr.internship_id !== internship_id));
        }
        else {
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
                            // setInternships((current) => current.filter((curr) => curr.internship_id !== element.internship_id));
                        }
                    })
                })
            }
            catch(error) {
                console.error(error);
            }
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
                            <form
                            style={{width: '100%'}}
                            onSubmit={handleSubmit}
                            >
                                <UndergraduatesSavedForm
                                fileName={fileName}
                                setFileName={setFileName}
                                setFile={setFile}
                                selectedDescription={selectedDescription}
                                setSelectedDescription={setSelectedDescription}
                                setIsSubmitted={setIsSubmitted}
                                error={error}
                                />
                            </form>
                            <div className="undergraduates-results-result-candidate-after" />
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