/* 10. Values and Variables

let js = 'amazing';
console.log(40 + 80 + 23 - 10)

let firstName = "Jonas"
console.log(firstName)

*/

// --------------------------------------------------------------

/* 12. Data types

let javascriptIsFun = true
console.log(javascriptIsFun)

// console.log(typeof true)
console.log(typeof javascriptIsFun)
// console.log(typeof 23)
// console.log(typeof 'chungus')

javascriptIsFun = "YES"
console.log(typeof javascriptIsFun)

let year; // when declaring an empty variable, you are using the data type undefined
console.log(year)
console.log(typeof year)

year = 1991;
console.log(typeof year)

*/


// --------------------------------------------------------------

/* 13. let, const, var

let age = 30
age = 31

console.log(age)

const birthYear = 2000
birthYear = 2001
console.log (birthYear) // output is error, const can not be changed

*/

// --------------------------------------------------------------

/* 14. basic operators
const now = 2037;
const ageJonas = now - 1991
const ageChungus = now - 2022
console.log(ageJonas, ageChungus)

console.log(ageJonas * 2, ageJonas / 10, 2**3)

const firstName = 'jonas'
const lastName = 'schmit'
console.log(firstName + ' ' + lastName)

// assignment operators
let x = 10 + 5 // 15
x += 10 // x = x + 10 = 25
x *= 4 // x = x * 4 = 100
x++; // x = x +1 = 101
x-- // x = x - 1 = 100
console.log(x)



// comparison operators
console.log (ageJonas > ageChungus)
console.log (ageChungus >= 18)

const isFullAge = ageChungus >= 18

console.log (now - 1991 > now - 2018)

*/


// --------------------------------------------------------------

/* 15. operator precedence
let x, y;

x = y = 25 - 10 - 5 // x = y = 10
console.log (x, y)

const now = 2037;
const ageJonas = now - 1991
const ageChungus = now - 2018

// const averageAge = ageJonas + ageChungus / 2 (this will give incorrect answer because it divides first before adding)
// console.log (ageJonas, ageChungus, averageAge) (this will give incorrect answer because it divides first before adding)
const averageAge = (ageJonas + ageChungus) / 2
console.log (ageJonas, ageChungus, averageAge)

*/
