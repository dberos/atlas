import React, { useState, useEffect } from 'react'
import '../../../Undergraduates/Results/undergraduatesResults.css'
import '../profileCompanies.css'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import GroupsIcon from '@mui/icons-material/Groups';
import MapIcon from '@mui/icons-material/Map';
import UndergraduatesResultFieldUniType from '../../../Undergraduates/Results/UndergraduatesResultFieldUniType';
import UndergraduatesResultStartDuration from '../../../Undergraduates/Results/UndergraduatesResultStartDuration';
import UndergraduatesResultEspaSalary from '../../../Undergraduates/Results/UndergraduatesResultEspaSalary';
import UndergraduatesResultDescription from '../../../Undergraduates/Results/UndergraduatesResultDescription';

const CompaniesSubmittedInternship = (props) => {

    const {
        title,
        companyName,
        street,
        streetNumber,
        town,
        area,
        field,
        university,
        type,
        startDate,
        duration,
        espa,
        salary,
        description,
        undergraduate_id

    } = props;

    const [open, setOpen] = useState(false);
    const [error, setError] = useState([]);

    useEffect(() => {
        if(undergraduate_id) {
            setError('Έχετε ήδη επιλέξει Φοιτητή για αυτή τη θέση!');
        }
        else {
            setError('Δεν έχετε επιλέξει ακόμα Φοιτητή για αυτή τη θέση!');
        }
    }, [undergraduate_id])

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
                            <div className="profile-companies-notification-container">
                                <div className="profile-companies-notification-wrapper">
                                    <div className="profile-companies-notification-header">
                                        <h1>
                                            Υποψήφιοι
                                        </h1>
                                    </div>
                                    <div className="profile-companies-notification-notification">
                                        <p
                                        style={{color: error === 'Έχετε ήδη επιλέξει Φοιτητή για αυτή τη θέση!' && 'green'}}
                                        >
                                            {error}
                                        </p>
                                    </div>
                                    {
                                        error === 'Δεν έχετε επιλέξει ακόμα Φοιτητή για αυτή τη θέση!' &&
                                            <div className="profile-companies-notification-button">
                                                <button
                                                type='button'
                                                >
                                                    Προβολή <br/> Υποψηφίων
                                                </button>
                                            </div>
                                    }
                                </div>
                                <div className="profile-companies-notification-after"/>
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

export default CompaniesSubmittedInternship