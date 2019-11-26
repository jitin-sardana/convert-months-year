import React, { Component } from 'react'
import YM from 'convert-months-year';

export default class App extends Component {
  componentDidMount(){
    console.log(YM.getYearsFromMonth(10)); //Output: {years: 0, months: 10}
    console.log(YM.getYearsFromMonth('10')); //Output: {years: 0, months: 10}
    console.log(YM.getYearsFromMonth('15')); //Output: {years: 1, months: 3}

    console.log(YM.getMonthsFromYear(2)); //Output : {months: 24}
    console.log(YM.getMonthsFromYear('2')); //Output : {months: 24}
    console.log(YM.getMonthsFromYear(1.5)); //Output : {months: 17}
    console.log(YM.getMonthsFromYear('1.5')); //Output : {months: 17}
  }
  render () {
    return (
      <div>
        
      </div>
    )
  }
}
