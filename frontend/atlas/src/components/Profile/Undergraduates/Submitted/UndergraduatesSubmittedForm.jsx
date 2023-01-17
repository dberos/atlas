import React from 'react'
import '../profileUndergraduates.css'
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';

const UndergraduatesSubmittedForm = (props) => {

    const {
        interestId,
        status,
        marksName,
        interestDescription,
        answer
    } = props;

  return (
    <div className="profile-undergraduates-container">
        <div className="profile-undergraduates-wrapper">
            <div className="profile-undergraduates-header">
                <h1>
                    Η δήλωσή μου
                </h1>
            </div>
            {
                marksName &&
                    <div className="profile-undergraduates-pdf">
                        <div className="profile-undergraduates-pdf-text">
                            <p>
                                {marksName}
                            </p>
                        </div>
                        <div className="profile-undergraduates-pdf-icon">
                            <i
                            onClick={() => window.open(`http://localhost:8080/interests/marks/${interestId}/${marksName}`)}
                            >
                                <PictureAsPdfIcon/>
                            </i>
                        </div>
                    </div>
            }
            {
                interestDescription &&
                    <div className="profile-undergraduates-description">
                        <p>
                            {interestDescription}
                        </p>
                    </div>
            }
            <div className="profile-undergraduates-notification">
                <p
                style={{color: status === 'await' ? '#81AFDD' :
                            status === 'rejected' && 'red'}}
                >
                    {
                        status === 'await' ?
                            'Αναμένεται απάντηση από την Εταιρεία' :
                        status === 'accepted' ?
                            'Η αίτησή σου έχει γίνει δεκτή!' :
                            'Η αίτηση σου έχει απορριφθεί'
                    }
                </p>
            </div>
            {
                status === 'rejected' &&
                <div className="profile-undergraduates-description"
                style={{marginTop: '30px'}}
                >
                <p>
                    {answer}
                </p>
            </div>
            }
        </div>
        <div className="undergraduates-results-result-candidate-after" />
    </div>
  )
}

export default UndergraduatesSubmittedForm