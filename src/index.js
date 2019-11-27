module.exports = class {
  static getYearsFromMonth(value) {
    return {
      years:  parseInt(value, 10 ) > 12 ? value / 12 | 0 : 0,
      months:  parseInt(value, 10 ) > 12 ? value % 12 : parseInt(value, 10)
    }
  }
  static getMonthsFromYear(value) {
    return {
      months: typeof(value) === 'string' && value.indexOf('.') >= 0 ?
      parseInt(value.split('.')[0]*12, 10) + parseInt(value.split('.')[1], 10) :
      Number(value) === value && value % 1 !== 0 ?
      parseInt(value.toString().split('.')[0]*12, 10) + parseInt(value.toString().split('.')[1], 10) :
      value*12
    }
  }
  static daysInMonth(month, year) { 
    return new Date(year, month, 0).getDate(); 
  }
  static isLeapYear(year){
    return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
  }
  static getNumberOfWeekEnds(year, mon) {
    let saturdays = [];
    let sundays = [];
    const month = mon - 1;
    for (let i = 0; i <= new Date(year, month, 0).getDate(); i++) {    
        let date = new Date(year, month, i);
        if (date.getDay() == 6 && date.getMonth() === parseInt(month, 10)){
          saturdays.push(date);
        } else if (date.getDay() == 0 && date.getMonth() === parseInt(month, 10)) {
          sundays.push(date);    
        }
    };
  return {saturdays : saturdays.length, sundays: sundays.length, saturdaysDates: saturdays, sundaysDates: sundays }
  }
  static getRemainingDaysInMonth() {
    let date = new Date();
    let time = new Date(date.getTime());
    time.setMonth(date.getMonth() + 1);
    time.setDate(0);
    return (time.getDate() > date.getDate()) ? time.getDate() - date.getDate() : 0;
  }
  static getRemainingDaysInYear() {
    const today=new Date();
    const lastDayOfYear=new Date(today.getFullYear(), 11, 31);
    return Math.ceil((lastDayOfYear.getTime()-today.getTime())/(1000*60*60*24));
  }
}
