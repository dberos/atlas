import React, { useEffect, useState } from 'react'
import '../../Global/Form/form.css'
import CompaniesInternshipTitle from './CompaniesInternshipTitle'

const CompaniesForm = () => {

    const [internshipTitle, setInternshipTitle] = useState([]);

    useEffect(() => {
        console.log(internshipTitle);
    }, [internshipTitle])

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('submitted');
    }

  return (
    <div className="undergrad-comp-form-container">
        <div className="undergrad-comp-form-wrapper">
            <div className="undergrad-comp-form-title">
                <h1>
                    Δημοσίευσε νέα θέση Πρακτικής Άσκησης!
                </h1>
            </div>
            <form onSubmit={handleSubmit}>
                <CompaniesInternshipTitle
                setInternshipTitle={setInternshipTitle}
                />
            </form>
        </div>
    </div>
  )
}

export default CompaniesForm