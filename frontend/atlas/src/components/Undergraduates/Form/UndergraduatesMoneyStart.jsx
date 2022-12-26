import React from 'react'
import '../../Global/Form/form.css'
import HalfDropdown from '../../Global/Form/HalfDropdown/HalfDropdown'
import DateSelector from '../../Global/Form/DatePicker/DateSelector'

const UndergraduatesMoneyStart = (props) => {

    var title = 'Μισθοδοσία';

    const options = [
        {
            id: 1,
            title: 'Όλες οι Χρηματοδοτήσεις'
        },
        {
            id: 2,
            title: 'Χρηματοδότηση ΕΣΠΑ'
        },
        {
            id: 3,
            title: 'Χωρίς Χρηματοδότηση ΕΣΠΑ'
        }
    ];

  return (
    <div className="undergrad-comp-half-container">
        <HalfDropdown
        title={title}
        options={options}
        selectedTitle={props.selectedEspa}
        setSelectedTitle={props.setSelectedEspa}
        />
        <DateSelector
        selectedDate={props.selectedDate}
        setSelectedDate={props.setSelectedDate}
        />
    </div>
  )
}

export default UndergraduatesMoneyStart