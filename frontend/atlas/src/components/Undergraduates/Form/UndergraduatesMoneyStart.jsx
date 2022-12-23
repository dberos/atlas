import React from 'react'
import './undergraduatesForm.css'
import HalfDropdown from '../../Global/Form/HalfDropdown/HalfDropdown'
import DatePicker from '../../Global/Form/DatePicker/DatePicker'

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
    <div className="undergrad-half-container">
        <HalfDropdown
        title={title}
        options={options}
        selectedTitle={props.selectedEspa}
        setSelectedTitle={props.setSelectedEspa}
        />
        <DatePicker
        selectedDate={props.selectedDate}
        setSelectedDate={props.setSelectedDate}
        />
    </div>
  )
}

export default UndergraduatesMoneyStart