import moment from 'moment';

const dateValidator = (date) => {
    switch(date.length) {
        case 0:
          return [];
        case 1:
          // Here and in 4, need this check to let me enter 0s
          return (date === '/' || parseInt(date) > 3) ? [] : date;
        case 2:
          return moment(date, 'DD', true).isValid() ? date : date.slice(0, date.length - 1);
        case 3:
          return moment(date, 'DD/', true).isValid() ? date : date.slice(0, date.length - 1);
        case 4:
          return (date[date.length - 1] === '/' ||  parseInt(date[date.length - 1]) > 1) ? date.slice(0, date.length - 1) : date;
        case 5:
          return moment(date, 'DD/MM', true).isValid() ? date : date.slice(0, date.length - 1);
        case 6:
          return moment(date, 'DD/MM/', true).isValid() ? date : date.slice(0, date.length - 1);
        case 7:
          return moment(date, 'DD/MM/Y', true).isValid() ? date : date.slice(0, date.length - 1);
        case 8:
            return moment(date, 'DD/MM/YY', true).isValid() ? date : date.slice(0, date.length - 1);
        case 9:
          return moment(date, 'DD/MM/YYY', true).isValid() ? date : date.slice(0, date.length - 1);
        case 10:
          return moment(date, 'DD/MM/YYYY', true).isValid() ? date : date.slice(0, date.length - 1)
        default:
          return date.slice(0, 10);
      }
}

export default dateValidator