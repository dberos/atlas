import React, { useState, useEffect } from 'react'
import axios from 'axios'
import '../../../Undergraduates/Results/undergraduatesResults.css'
import UndergraduatesResultsEmpty from '../../../Undergraduates/Results/UndergraduatesResultsEmpty'
import CompaniesSubmittedInternship from './CompaniesSubmittedInternship'

const CompaniesSubmitted = () => {

    const [internships, setInternships] = useState([]);

    useEffect(() => {
        const id = localStorage.getItem('id');
        const getInternships = async () => {
            const response = await axios.get(`http://localhost:8080/internships/submitted/company_id=${id}`);
            const data = response.data;
            setInternships(data);
        }
        getInternships();
    })

  return (
    <div className="undergraduates-results-container">
        <div className="undergraduates-results-wrapper">
            {
                internships.length !== 0 ?
                    internships.map((value) => {
                        return(
                            <CompaniesSubmittedInternship
                            key={value.id}
                            title={value.title}
                            companyName={value.company.name}
                            street={value.company.street}
                            streetNumber={value.company.street_number}
                            town={value.company.town}
                            area={value.area}
                            field={value.field}
                            university={value.university}
                            type={value.type}
                            startDate={value.start_date}
                            duration={value.duration}
                            espa={value.espa}
                            salary={value.salary}
                            description={value.description}
                            undergraduate_id={value.undergraduate?.id}
                            />
                        )
                    }) :
                    <UndergraduatesResultsEmpty/>
            }
        </div>
    </div>
  )
}

export default CompaniesSubmitted