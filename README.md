# convert-months-year

> 

[![NPM](https://img.shields.io/npm/v/convert-months-year.svg)](https://www.npmjs.com/package/convert-months-year) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save convert-months-year
```

## Usage

```bash
This library has below methods that returns number of months and years as Object.
```
- getYearsFromMonth
> This method accept the number of months and returns the years.

- getMonthsFromYear
> This method accept the number of years and returns the months.

- daysInMonth
> This method accept two arguments, first is month(MM) and second is year(YYYY) and returns the number of days.


```jsx
import YM from 'convert-months-year';

<h2>Usage of getYearsFromMonth</h2>

console.log(YM.getYearsFromMonth(10)); //Output: {years: 0, months: 10}
console.log(YM.getYearsFromMonth('10')); //Output: {years: 0, months: 10}
console.log(YM.getYearsFromMonth('15')); //Output: {years: 1, months: 3}
console.log(YM.getYearsFromMonth(15)); //Output: {years: 1, months: 3}

<h2>Usage of getMonthsFromYear</h2>

console.log(YM.getMonthsFromYear(2)); //Output : {months: 24}
console.log(YM.getMonthsFromYear('2')); //Output : {months: 24}
console.log(YM.getMonthsFromYear(1.5)); //Output : {months: 17}
console.log(YM.getMonthsFromYear('1.5')); //Output : {months: 17}

<h2>Usage of daysInMonth</h2>

console.log(YM.daysInMonth("02", "2016")) //Output : 29
console.log(YM.daysInMonth("02", "2017")) //Output : 28
console.log(YM.daysInMonth("01", "2019")) //Output : 31

```

## License

MIT © [jitin-sardana](https://github.com/jitin-sardana)
