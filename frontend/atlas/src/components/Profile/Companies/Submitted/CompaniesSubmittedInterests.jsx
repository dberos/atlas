import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import UndergraduatesResultsEmpty from '../../../Undergraduates/Results/UndergraduatesResultsEmpty';
import '../profileCompanies.css'
import CompaniesSubmittedInterest from './CompaniesSubmittedInterest';

const CompaniesSubmittedInterests = () => {

    let params = useParams();
    
    const [interests, setInterests] = useState([]);

    useEffect(() => {
        const findInterests = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/interests/internship_id=${params.internshipId}`);
                const data = response.data;
                setInterests(data);
            }
            catch(error) {
                console.error(error);
            }
            
        }
        findInterests();
    })

  return (
    <div className="profile-companies-candidates-container">
        <div className="profile-companies-candidates-wrapper">
            {
                interests.length !== 0 ?
                    interests.map((value) => {
                        return(
                            <CompaniesSubmittedInterest
                            key={value.id}
                            interestId={value.id}
                            internshipId={value.internship_id}
                            undergraduateId={value.undergraduate_id}
                            description={value?.description}
                            marksName={value?.marks_name}
                            />
                        )
                    }) :
                <UndergraduatesResultsEmpty/>
            }
            <div className="profile-companies-candidate-after"/>
        </div>
    </div>
  )
}

export default CompaniesSubmittedInterests