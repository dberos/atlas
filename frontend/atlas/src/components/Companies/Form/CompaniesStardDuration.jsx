import React from 'react'
import '../../Global/Form/form.css'
import DateSelector from '../../Global/Form/DatePicker/DateSelector'
import HalfDropdown from '../../Global/Form/HalfDropdown/HalfDropdown'


const CompaniesStardDuration = (props) => {

    var title1 = 'Έναρξη έως *';
    var title2 = 'Διάρκεια Πρακτικής *';

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

  return (
    <div className="undergrad-comp-half-container">
        <DateSelector
        title={title1}
        selectedDate={props.selectedDate}
        setSelectedDate={props.setSelectedDate}
        />
        <HalfDropdown
        title={title2}
        options={durations}
        selectedTitle={props.selectedDuration}
        setSelectedTitle={props.setSelectedDuration}
        />
    </div>
  )
}

export default CompaniesStardDuration