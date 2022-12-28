import React from 'react'
import '../../Global/Form/form.css'
import HalfDropdown from '../../Global/Form/HalfDropdown/HalfDropdown'

const CompaniesTypeMoney = (props) => {

    const {
            selectedType, 
            setSelectedType,
            selectedEspa,
            setSelectedEspa
        } = props;

    var title1 = 'Τύπος Απασχόλησης *';
    var title2 = 'Μισθοδοσία *';

    const internshipTypes = [
        {
            id: 1,
            title: 'Μερική Απασχόληση'
        },
        {
            id: 2,
            title: 'Πλήρης Απασχόληση'
        }
    ];

    const moneyType = [
        {
            id: 1,
            title: 'Χρηματοδότηση ΕΣΠΑ'
        },
        {
            id: 2,
            title: 'Χωρίς Χρηματοδότηση ΕΣΠΑ'
        }
    ];

  return (
    <div className="undergrad-comp-half-container">
        <HalfDropdown
        title={title1}
        options={internshipTypes}
        selectedTitle={selectedType}
        setSelectedTitle={setSelectedType}
        />
        <HalfDropdown
        title={title2}
        options={moneyType}
        selectedTitle={selectedEspa}
        setSelectedTitle={setSelectedEspa}
        />
    </div>
  )
}

export default CompaniesTypeMoney