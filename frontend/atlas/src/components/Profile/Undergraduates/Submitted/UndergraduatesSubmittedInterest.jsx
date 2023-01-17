import React, { useState } from 'react'
import '../../../Undergraduates/Results/undergraduatesResults.css'
import '../profileUndergraduates.css'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import GroupsIcon from '@mui/icons-material/Groups';
import MapIcon from '@mui/icons-material/Map';
import UndergraduatesResultFieldUniType from '../../../Undergraduates/Results/UndergraduatesResultFieldUniType';
import UndergraduatesResultStartDuration from '../../../Undergraduates/Results/UndergraduatesResultStartDuration';
import UndergraduatesResultEspaSalary from '../../../Undergraduates/Results/UndergraduatesResultEspaSalary';
import UndergraduatesResultDescription from '../../../Undergraduates/Results/UndergraduatesResultDescription';
import UndergraduatesSubmittedForm from './UndergraduatesSubmittedForm';

const UndergraduatesSubmittedInterest = (props) => {

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
        status,
        marks_name,
        answer
    } = props;

    const [open, setOpen] = useState(false);

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
                            <UndergraduatesSubmittedForm
                            interestId={interest_id}
                            status={status}
                            marksName={marks_name}
                            interestDescription={interest_description}
                            answer={answer}
                            />
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

export default UndergraduatesSubmittedInterest