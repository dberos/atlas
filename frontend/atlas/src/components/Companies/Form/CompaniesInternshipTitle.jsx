import React, {useState} from 'react'
import './companiesForm.css'

const CompaniesInternshipTitle = (props) => {

    const { setInternshipTitle } = props;

    const [wordEntered, setWordEntered] = useState(
        localStorage.getItem('internshipTitle') ?
            localStorage.getItem('internshipTitle') : []
    );

    const handleChange = (e) => {
        const word = e.target.value;
        setWordEntered(word);
        setInternshipTitle(word);
    }

  return (
    <div className="companies-form-internship-title-container">
        <div className="companies-form-internship-title-title">
            <h1>
                Τίτλος Θέσης *
            </h1>
        </div>
        <div className="companies-form-internship-input-container">
            <input 
            type="text" 
            placeholder='Πως θα λέγεται η θέση;'
            onChange={handleChange}
            value={wordEntered}
            />
            <label>
                π.χ Web Developer
            </label>
        </div>
    </div>
  )
}

export default CompaniesInternshipTitle