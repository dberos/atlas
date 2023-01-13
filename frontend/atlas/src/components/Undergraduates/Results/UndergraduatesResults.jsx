import React, { useEffect, useState } from 'react'
import './undergraduatesResults.css'
import UndergraduatesResult from './UndergraduatesResult'
import { useParams } from 'react-router-dom'
import { search_results } from '../../Home/Main/data'
import axios from 'axios'

const UndergraduatesResults = () => {

  let params = useParams();

  const [data, setData] = useState([]);

  useEffect(() => {
    const results = atob(params.name).split(',');
    console.log(results);
    const field = results[0] === '' ?
      null : search_results.find((value) => value.id === parseInt(field)).title;
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
      setData(data);
    }
    getResults();
  }, [params.name])

  return (
    <div className="undergraduates-results-container">
        <div className="undergraduates-results-wrapper">
            {
              data && data.map((value) => {
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
              })
            }
        </div>
    </div>
  )
}

export default UndergraduatesResults