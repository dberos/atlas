import React, { useState, useEffect } from 'react'
import '../../../Undergraduates/Results/undergraduatesResults.css'
import '../../../Global/Form/form.css'
import UndergraduatesResultsEmpty from '../../../Undergraduates/Results/UndergraduatesResultsEmpty'
import axios from 'axios'
import CompaniesSavedInternship from './CompaniesSavedInternship'

const CompaniesSaved = () => {

    const [internships, setInternships] = useState([]);

    useEffect(() => {
        const id = localStorage.getItem('id');
        const getInternships = async () => {
            const response = await axios.get(`http://localhost:8080/internships/saved/company_id=${id}`);
            const data = response.data;
            // console.log(data);
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
                            <CompaniesSavedInternship
                            key={value.id}
                            id={value.id}
                            title={value.title}
                            companyName={value.company.name}
                            street={value.company.street}
                            streetNumber={value.company.street_number}
                            town={value.company.town}
                            area={value.area}
                            field={value.field}
                            university={value.university}
                            startDate={value.start_date}
                            duration={value.duration}
                            type={value.type}
                            espa={value.espa}
                            salary={value.salary}
                            description={value.description}
                            />
                        )
                    }) :
                    <UndergraduatesResultsEmpty/>
            }
        </div>
    </div>
  )
}

export default CompaniesSaved