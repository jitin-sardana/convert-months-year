# convert-months-year

> This utility library provides multiple functionalities like covert number of months into years, convert years into number of months, number of days in a month of year, year is leap year or not etc.

[![NPM](https://img.shields.io/npm/v/convert-months-year.svg)](https://www.npmjs.com/package/convert-months-year) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save convert-months-year
```

## Usage

```bash
This library has below methods that returns number of months and years as Object.
```
- **getYearsFromMonth**
> This method accept the number of months and returns the years.

- **getMonthsFromYear**
> This method accept the number of years and returns the months.

- **daysInMonth**
> This method accept two arguments, first is month(MM) and second is year(YYYY) and returns the number of days.

- **isLeapYear**
> This method accept one arguments which is year(YYYY) and returns true or false.

> **This can be used with import or require**

```jsx
import YM from 'convert-months-year'

var YM = require('convert-months-year');

Usage of getYearsFromMonth

console.log(YM.getYearsFromMonth(10)); //Output: {years: 0, months: 10}
console.log(YM.getYearsFromMonth('10')); //Output: {years: 0, months: 10}
console.log(YM.getYearsFromMonth('15')); //Output: {years: 1, months: 3}
console.log(YM.getYearsFromMonth(15)); //Output: {years: 1, months: 3}

Usage of getMonthsFromYear

console.log(YM.getMonthsFromYear(2)); //Output : {months: 24}
console.log(YM.getMonthsFromYear('2')); //Output : {months: 24}
console.log(YM.getMonthsFromYear(1.5)); //Output : {months: 17}
console.log(YM.getMonthsFromYear('1.5')); //Output : {months: 17}

Usage of daysInMonth

console.log(YM.daysInMonth("02", "2016")) //Output : 29
console.log(YM.daysInMonth("02", "2017")) //Output : 28
console.log(YM.daysInMonth("01", "2019")) //Output : 31

Usage of isLeapYear

console.log(YM.isLeapYear("2019")); //Output : false
console.log(YM.isLeapYear("2020")); //Output : true

```

## License

MIT © [jitin-sardana](https://github.com/jitin-sardana)
