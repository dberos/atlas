import React from 'react'
import '../../Global/Form/form.css'
import HalfDropdown from '../../Global/Form/HalfDropdown/HalfDropdown'
import DateSelector from '../../Global/Form/DatePicker/DateSelector'

const UndergraduatesStartDuration = (props) => {

    var title = 'Διάρκεια Πρακτικής';

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
        selectedDate={props.selectedDate}
        setSelectedDate={props.setSelectedDate}
        />
        <HalfDropdown
        title={title}
        options={durations}
        selectedTitle={props.selectedDuration}
        setSelectedTitle={props.setSelectedDuration}
        />
    </div>
  )
}

export default UndergraduatesStartDuration