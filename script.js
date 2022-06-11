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


// --------------------------------------------------------------

// coding challenge 1

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula:

BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter).

Your tasks:
1. Store Mark's and John's mass and height in variables

2. Calculate both their BMIs using the formula (you can even implement both
versions)

3. Create a Boolean variable 'markHigherBMI' containing information about
whether Mark has a higher BMI than John.

Test data:

§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
m tall.

§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
m tall.

*/

/*
let massMark1 = 78
let heightMark1 = 1.69

let massJohn1 = 92
let heightJohn1 = 1.95

let bmiMark1 = (massMark1) / (heightMark1**2)
console.log(bmiMark1)

let bmiJohn1 = (massJohn1)/ (heightJohn1**2)
console.log(bmiJohn1)

let markHigherBMI1 = bmiMark1 > bmiJohn1
console.log(markHigherBMI1)


let massMark2 = 95
let heightMark2 = 1.88

let massJohn2 = 85
let heightJohn2 = 1.76

let bmiMark2 = (massMark2) / (heightMark2**2)
console.log(bmiMark2)

let bmiJohn2 = (massJohn2)/ (heightJohn2**2)
console.log(bmiJohn2)

let markHigherBMI2 = bmiMark2 > bmiJohn2
console.log(markHigherBMI2)

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
/* coding challenge 2

Use the BMI example from Challenge #1, and the code you already wrote, and
improve it.
Your tasks:
1. Print a nice output to the console, saying who has the higher BMI. The message
is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
BMI (28.3) is higher than John's (23.9)!"
Hint: Use an if/else statement
*/