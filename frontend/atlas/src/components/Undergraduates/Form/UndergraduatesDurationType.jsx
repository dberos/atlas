import React from 'react'
import '../../Global/Form/form.css'
import HalfDropdown from '../../Global/Form/HalfDropdown/HalfDropdown'

const UndergraduatesDurationType = (props) => {

    var title1 = 'Διάρκεια Πρακτικής';
    var title2 = 'Τύπος Απασχόλησης';

    const durations = [
        {
            id: 1,
            title: 'Όλες οι διάρκειες'
        },
        {
            id: 2,
            title: '3 Μήνες'
        },
        {
            id: 3,
            title: '6 Μήνες'
        }
    ];

    const internshipTypes = [
        {
            id: 1,
            title: 'Όλοι οι τύποι'
        },
        {
            id: 2,
            title: 'Μερική Απασχόληση'
        },
        {
            id: 3,
            title: 'Πλήρης Απασχόληση'
        }
    ];

  return (
    <div className="undergrad-comp-half-container">
        <HalfDropdown
        title={title1}
        options={durations}
        selectedTitle={props.selectedDuration}
        setSelectedTitle={props.setSelectedDuration}
        />
        <HalfDropdown
        title={title2}
        options={internshipTypes}
        selectedTitle={props.selectedType}
        setSelectedTitle={props.setSelectedType}
        />
    </div>
  )
}

export default UndergraduatesDurationType