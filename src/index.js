export default class {
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
}
