import React from 'react'
import '../../Global/Form/form.css'
import DateSelector from '../../Global/Form/DatePicker/DateSelector'
import HalfDropdown from '../../Global/Form/HalfDropdown/HalfDropdown'

const UndergraduatesStartDuration = (props) => {

    const {
            setSelectedDate,
            selectedDuration,
            setSelectedDuration
        } = props;

    var title1 = 'Έναρξη έως';
    var title2 = 'Διάρκεια Πρακτικής';

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
        setSelectedDate={setSelectedDate}
        />
        <HalfDropdown
        title={title2}
        options={durations}
        selectedTitle={selectedDuration}
        setSelectedTitle={setSelectedDuration}
        />
    </div>
  )
}

export default UndergraduatesStartDuration