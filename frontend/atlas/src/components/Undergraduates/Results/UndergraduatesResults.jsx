import React, { useEffect, useState } from 'react'
import './undergraduatesResults.css'
import UndergraduatesResult from './UndergraduatesResult'
import { useParams } from 'react-router-dom'
import { search_results } from '../../Home/Main/data'
import axios from 'axios'
import UndergraduatesResultsEmpty from './UndergraduatesResultsEmpty'

const UndergraduatesResults = () => {

  let params = useParams();

  const [internships, setInternships] = useState([]);

  useEffect(() => {
    const results = atob(params.name).split(',');
    console.log(results);
    const field = results[0] === '' ?
      null : search_results.find((value) => value.id === parseInt(results[0])).title;
    const university = results[1] === '' ?
      null : results[1] === '1' ? 'ΕΚΠΑ' : 'ΑΠΘ';
    const area = results[2] === '' ?
      null : results[2] === '1' ? 'Αθήνα' : 'Θεσσαλονίκη';
    const date = results[3];
    const duration = results[4] === '-1' ? -1 : results[4];
    const type = results[5] === '' ? null :
      results[5] === '1' ? 'Μερικής Απασχόλησης' : 'Πλήρης Απασχόλησης';
    const espa = results[6] === '' ? null :
      results[6] === '1' ? true : false;
    const obj = {
      "field": field,
      "university": university,
      "start_date": date,
      "area": area,
      "duration": duration === -1 ? -1 : parseInt(duration),
      "type": type,
      "espa": espa
    }
    const getResults = async () => {
      const response = await axios.post('http://localhost:8080/internships/search', obj);
      const data = response.data;
      console.log(data);
      const id = localStorage.getItem('id');
      const type = localStorage.getItem('type');
      if(id && type === 'undergraduate') {
        axios.get(`http://localhost:8080/interests/undergraduate_id=${id}`)
        .then((response) => {
          const undergraduateData = response.data;
          if(undergraduateData.length !== 0) {
            var arr = [];
            data.forEach((element) => {
              const find = undergraduateData.find((el) => el.internship_id === element.id);
              if(!find) {
                arr.push(element);
              }
            })
            setInternships(arr);
          }
          else {
            setInternships(data);
          }
        })
        .catch((error) => console.error(error));
      }
      else {
        setInternships(data);
      }
    }
    getResults();
  })

  return (
    <div className="undergraduates-results-container">
        <div className="undergraduates-results-wrapper">
            {
              internships.length !== 0 ? 
                internships.map((value) => {
                  return(
                    <UndergraduatesResult
                    key={value.id}
                    id={value.id}
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
                    />
                  )
                }) : 
                    <UndergraduatesResultsEmpty/>
            }
        </div>
    </div>
  )
}

export default UndergraduatesResults