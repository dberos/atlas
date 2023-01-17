import axios from 'axios';
import React, { useEffect, useState } from 'react'
import '../../../Undergraduates/Results/undergraduatesResults.css'
import UndergraduatesResultsEmpty from '../../../Undergraduates/Results/UndergraduatesResultsEmpty';
import UndergraduatesSavedInterest from './UndergraduatesSavedInterest';

const UndergraduatesSaved = () => {

    const [internships, setInternships] = useState([]);

    useEffect(() => {
        const id = localStorage.getItem('id');
        const getInterests = async () => {
            const response = await axios.get(`http://localhost:8080/interests/saved/undergraduate_id=${id}`);
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
                            <UndergraduatesSavedInterest
                            key={value.interest_id}
                            interest_id={value.interest_id}
                            internship_id={value.internship_id}
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
                            marks_name={value.marks_name}
                            marks={value.marks}
                            internships={internships}
                            setInternships={setInternships}
                            />
                        )
                    }) :
                    <UndergraduatesResultsEmpty/>
            }
        </div>
    </div>
  )
}

export default UndergraduatesSaved