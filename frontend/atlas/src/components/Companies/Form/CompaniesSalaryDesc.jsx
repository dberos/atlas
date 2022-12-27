import React, { useEffect, useState } from 'react'
import './companiesForm.css'

const CompaniesSalaryDesc = ({selectedEspa, setSelectedSalary, setSelectedDescription}) => {

    // Destructuring props for useEffect issues

    const [salary, setSalary] = useState([]);
    const [description, setDescription] = useState([]);
    const [isDisabled, setIsDisabled] = useState(true);

    useEffect(() => {
        if(selectedEspa[1] === 'ρ') {
            setSalary(250);
            setIsDisabled(true);
            setSelectedSalary('250');
        }
        if(selectedEspa[1] === 'ω') {
            setSalary([]);
            setIsDisabled(false);
            setSelectedSalary([]);
        }
        if(selectedEspa === []) {
            setSalary([]);
            setIsDisabled(true);
        }
    }, [selectedEspa, setSelectedSalary])

    const handleSalary = (e) => {
        const sal = e.target.value;
        // Only allow numbers
        setSalary(sal.replace(/[^0-9]/g, ''));
        setSelectedSalary(sal.replace(/[^0-9]/g, ''));
    }

    const handleDescription = (e) => {
        const desc = e.target.value;
        setDescription(desc);
        setSelectedDescription(desc);
    }

  return (
    <div className="companies-form-salary-desc-container">
        <div className="companies-form-salary-container">
            <div className="companies-form-salary-title">
                <h1>
                    Μισθός *
                </h1>
            </div>
            <div className="companies-form-salary-input">
                <input 
                type="text" 
                placeholder='€' 
                value={salary} 
                onChange={handleSalary}
                disabled={selectedEspa[1] === 'ω' ? false : true}
                style={{
                    backgroundColor: isDisabled ? '#ADABA8' : 'white'
                }}
                />
                <label>
                    π.χ 600
                </label>
            </div>
        </div>
        <div className="companies-form-desc-container">
            <div className="companies-form-desc-title">
                <h1>
                    Περιγραφή *
                </h1>
            </div>
            <div className="companies-form-desc-input">
                <textarea 
                type="text" 
                placeholder='Αναφέρετε επιπλέον πληροφορίες για την θέση'
                value={description}
                onChange={handleDescription}
                />
            </div>
        </div>
    </div>
  )
}

export default CompaniesSalaryDesc