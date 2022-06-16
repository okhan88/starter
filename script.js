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
console.log (ageJonas, ageChungus, averageAge) // this will give the correct answer

*/



// --------------------------------------------------------------

// strings and template literals

/*

const firstName = 'jonas'
const job = 'teacher'
const birthYear = 1991
const year = 2037

const jonas = "I'm " + firstName + ", a " + (year - birthYear) + " years old " + job + "!"
console.log (jonas)

const jonasNew = `I'm ${firstName}, a ${(year - birthYear)} years old ${job}!`
console.log (jonasNew)

*/
// --------------------------------------------------------------

// taking decisions: if/else statements

/*
const age = 15
// const isOldEnough = age >= 18 

if(age >= 18) {
    console.log('Sarah can start driving license')
} else {
    const yearsLeft = 18 - age
    console.log(`you have ${yearsLeft} years left!`)
}

const birthYear = 2010
let century;

if(birthYear <= 2000) {
    century = 20
} else {
    century = 21
}

console.log(century)

*/

// --------------------------------------------------------------


// type conversion and coercion


//  // type conversion: strings to numbers
// const inputYear = "1991"
// console.log(Number(inputYear) + 18) // correct way
// console.log (inputYear + 18) // incorrect way

// // type conversion: numbers to string
// console.log(String(23))


// type coercion

// JS automatically converts numbers to string using the + operator, as in this case below. You do not have to turn 23 to a string
// console.log("I am " + 23 + " years old")

// // with the - operator, JS autmatically converts strings to numbers
// console.log('23' - '10' - 3) 
// console.log ('23' - '10' + 3)

// let n = '1' + 1; 
// n = n - 1;
// console.log (n)

// console.log (2+3+4+ '5') // 2+3+4 = 9, 9 concatenates with 5 (a string) to get 96

// console.log ('10' - '4' - '3' - 2 + '5')



// --------------------------------------------------------------

// truthy and falsy values

// console.log(Boolean(0))
// console.log(Boolean(undefined))
// console.log(Boolean('chungus'))
// console.log(Boolean({}))
// console.log(Boolean(''))
// // in practice, this conversion is not done really


// const money = 0
// if(money) {
//     console.log("Dont use it all") // JS is trying to convert any condition into a boolean. because money is 0, then the condition is false and so the else block is executed. If you change 0 to any other number, then the if block will be executed
// } else {
//     console.log ("you should get a job")
// }

// let height;
// if (height) {
//     console.log(' yay height is defined')
// } else {
//     console.log ('height is undefined')
// }
// // height is undefined here because it has no value, this is why the else block is executed


// --------------------------------------------------------------

// equality operators

// const age = 18
// if (age === 18) console.log(' you just became an adult')

// console.log (18 === '18')
// console.log (18 == '18')
// console.log (18 == 18)

// const favorite = prompt("what's your favorite number")
// console.log(favorite)
// console.log(typeof favorite)

// if (favorite == 23) {
//     console.log(' cool you are cool')
// } else if(favorite === "7") {
//     console.log(' 7 is cool')
// } else {
//     console.log ("your number is not 23 or 7")
// }

// if (favorite !== 23){
//     console.log ("why not 23")
// }


// --------------------------------------------------------------

// boolean logicical operators

// const hasDriversLicense = true // A
// const hasGoodVision = true //A

// console.log(hasDriversLicense && hasGoodVision)
// console.log(hasDriversLicense || hasGoodVision)
// console.log(!hasDriversLicense)

// const shouldDrive = hasDriversLicense && hasGoodVision

// // if (shouldDrive) {
// //     console.log ('sarah is able to drive')
// // } else {
// //     console.log ('someone else should drive')
// // }

// const isTired = true
// console.log(hasDriversLicense && hasGoodVision && isTired)

// if (hasDriversLicense && hasGoodVision && !isTired) {
//     console.log ('sarah is able to drive')
// } else {
//     console.log ('someone else should drive')
// }
