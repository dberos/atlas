import React, { useState, useEffect } from 'react'
import '../../../Undergraduates/Results/undergraduatesResults.css'
import UndergraduatesResultsEmpty from '../../../Undergraduates/Results/UndergraduatesResultsEmpty'
import axios from 'axios'
import UndergraduatesSubmittedInterest from './UndergraduatesSubmittedInterest'

const UndergraduatesSubmitted = () => {

    const [internships, setInternships] = useState([]);

    useEffect(() => {
        const id = localStorage.getItem('id');
        const getInterests = async () => {
            const response = await axios.get(`http://localhost:8080/interests/submitted/undergraduate_id=${id}`);
            const data = response.data;
            data.forEach((element) => {
                axios.get(`http://localhost:8080/internships/id=${element.internship_id}`)
                .then((response) => {
                    const internship = { ...response.data };
                    internship['interest_id'] = element.id;
                    internship['status'] = element.status;
                    internship['interest_description'] = element.description;
                    internship['marks_name'] = element.marks_name;
                    internship['marks'] = element.marks;
                    internship['answer'] = element.answer;
                    const find = internships.find((el) => el.id === internship.id);
                    if(!find) {
                        setInternships([...internships, internship]);
                    }
                })
                .catch((error) => console.error(error));
            })
        }
        getInterests();
    })

  return (
    <div className="undergraduates-results-container">
        <div className="undergraduates-results-wrapper">
            {
                internships.length !== 0 ?
                    internships.map((value) => {
                        return(
                            <UndergraduatesSubmittedInterest
                            key={value.id}
                            interest_id={value.interest_id}
                            area={value.area}
                            companyName={value.company.name}
                            town={value.company.town}
                            street={value.company.street}
                            streetNumber={value.company.street_number}
                            description={value.description}
                            duration={value.duration}
                            espa={value.espa}
                            field={value.field}
                            salary={value.salary}
                            startDate={value.start_date}
                            title={value.title}
                            type={value.type}
                            university={value.university}
                            interest_description={value.interest_description}
                            status={value.status}
                            marks_name={value.marks_name}
                            answer={value.answer}
                            />
                        )
                    }) :
                    <UndergraduatesResultsEmpty/>
            }
        </div>
    </div>
  )
}

export default UndergraduatesSubmitted