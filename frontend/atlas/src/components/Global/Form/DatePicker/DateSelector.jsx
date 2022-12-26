import React, {useState} from 'react'
import './datePicker.css'
import moment from 'moment'
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import DatePicker, {registerLocale} from "react-datepicker";
/* 
npm i react-datepicker
npm i date-fns
*/
import "react-datepicker/dist/react-datepicker.css";
import el from 'date-fns/locale/el';
registerLocale('el', el)

const DateSelector = (props) => {

    const [startDate, setStartDate] = useState('');

    const checkDate = (date) => {
        // GB for DD format 
        const strDate = date?.toLocaleDateString('en-GB');
        
        setStartDate(date);
        const check = moment(strDate, 'DD/MM/YYYY', true).isValid();
        if(check) {
          props.setSelectedDate(strDate);
        }
    }

  return (
    <div className="date-picker-container">
        <div className="date-picker-title">
            <h1>
                {props.title}
            </h1>
        </div>
        <div className="date-picker-input-container">
          <DatePicker 
          selected={startDate} 
          onChange={(date) => checkDate(date)} 
          locale={el}
          placeholderText='ΗΗ/ΜΜ/ΕΕΕΕ'
          dateFormat='dd/MM/yyyy'
          />
          <div className="date-picker-button-container">
            <button type='button'>
              <CalendarTodayIcon/>
            </button>
          </div>
        </div>
    </div>
  )
}

export default DateSelector