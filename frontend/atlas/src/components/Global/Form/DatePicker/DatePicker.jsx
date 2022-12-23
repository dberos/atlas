import React, {useState} from 'react'
import './datePicker.css'
import moment from 'moment'

const DatePicker = (props) => {

    const [dateEntered,setDateEntered] = useState([]);

    const checkDate = (e) => {
        const date = e.target.value;
        // Allow only numbers and /
        setDateEntered(date.replace(/[^0-9/]/g, ''));
        const check = moment(date, 'DD/MM/YYYY', true).isValid();
        if(check) {
          props.setSelectedDate(date);
        }
    }

  return (
    <div className="date-picker-container">
        <div className="date-picker-title">
            <h1>
                Έναρξη έως
            </h1>
        </div>
        <div className="date-picker-input-container">
        <input type="text" placeholder='π.χ 31/01/2023' onChange={checkDate} value={dateEntered}/>
        <label>
          HH/MM/EEEE
        </label>
        </div>
    </div>
  )
}

export default DatePicker