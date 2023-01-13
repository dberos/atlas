import React, { useState } from 'react'
import './undergraduatesResults.css'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import GroupsIcon from '@mui/icons-material/Groups';
import MapIcon from '@mui/icons-material/Map';
import UndergraduatesResultFieldUniType from './UndergraduatesResultFieldUniType';
import UndergraduatesResultStartDuration from './UndergraduatesResultStartDuration';
import UndergraduatesResultEspaSalary from './UndergraduatesResultEspaSalary';
import UndergraduatesResultDescription from './UndergraduatesResultDescription';
import UndergraduatesResultCandidate from './UndergraduatesResultCandidate';
import { addInterest, addMarks } from './interests';

const UndergraduatesResult = (props) => {

    const {
        id,
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
    } = props;

    const [open, setOpen] = useState(false);
    const [fileName, setFileName] = useState([]);
    const [file, setFile] = useState(null);
    const [selectedDescription, setSelectedDescription] = useState([]);
    const [isPublished, setIsPublished] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const interest = {
            "undergraduate_id": localStorage.getItem('id'),
            "internship_id": id,
            "description": selectedDescription.length !== 0 ? selectedDescription : null,
            "status": isPublished ? "await" : null,
            "submitted": isPublished
        }
        const data = await addInterest(interest);
        if(file) {
            const marks = new FormData();
            marks.append('marks', file);
            await addMarks(data.id, marks);
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
                                <UndergraduatesResultCandidate
                                id={id}
                                fileName={fileName}
                                setFileName={setFileName}
                                setFile={setFile}
                                selectedDescription={selectedDescription}
                                setSelectedDescription={setSelectedDescription}
                                isPublished={isPublished}
                                setIsPublished={setIsPublished}
                                university={university}
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

export default UndergraduatesResult