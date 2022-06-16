
// //  Values and Variables

// let country = "united states"
// let continent = "north america"
// let population = '300 million'

// console.log(country)
// console.log(continent)
// console.log(population)


// // data types

// let isIsland = false;
// let language = "english";

// console.log (typeof isIsland)
// console.log (typeof population)
// console.log (typeof country)
// console.log (typeof language)

// // testing this out

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

// -----------------------------------------------------------------

/* coding challenge 2

Use the BMI example from Challenge #1, and the code you already wrote, and
improve it.
Your tasks:
1. Print a nice output to the console, saying who has the higher BMI. The message
is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
BMI (28.3) is higher than John's (23.9)!"
Hint: Use an if/else statement


let massMark1 = 78
let heightMark1 = 1.69

let massJohn1 = 92
let heightJohn1 = 1.95

let bmiMark1 = (massMark1) / (heightMark1**2)
let bmiJohn1 = (massJohn1)/ (heightJohn1**2)

let markHigherBMI1 = bmiMark1 > bmiJohn1
// console.log(bmiMark1, bmiJohn1, markHigherBMI1)

if (bmiMark1 > bmiJohn1) {
    console.log(`Mark's BMI is higher than John's! Mark's BMI (${bmiMark1}) is higher than John's (${bmiJohn1})`)
} else {
    console.log("John's BMI is higher than Mark's!")
}


let massMark2 = 95
let heightMark2 = 1.88

let massJohn2 = 85
let heightJohn2 = 1.76

let bmiMark2 = (massMark2) / (heightMark2**2)
let bmiJohn2 = (massJohn2)/ (heightJohn2**2)

let markHigherBMI2 = bmiMark2 > bmiJohn2
// console.log(bmiMark2, bmiJohn2, markHigherBMI2)

if (bmiMark2 > bmiJohn2) {
    console.log(`Mark's BMI is higher than John's! Mark's BMI (${bmiMark2}) is higher than John's (${bmiJohn2})`)
} else {
    console.log("John's BMI is higher than Mark's!")
}

*/

// -----------------------------------------------------------------

/*

There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins a trophy!

Your tasks:

1. Calculate the average score for each team, using the test data below

2. Compare the team's average scores to determine the winner of the competition, and print it to the console. Don't forget that there can be a draw, so test for that as well (draw means they have the same average score)

3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. Hint: Use a logical operator to test for minimum score, as well as multiple else-if blocks �

4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy

Test data:
§ Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
§ Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
§ Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

*/

// const scoreDol = 96 + 108 + 89;
// const scoreKol = 88 + 91 + 110;

// let avgDol = scoreDol / 3
// let avgKol = scoreKol / 3

// console.log (avgDol, avgKol)

// if (avgDol > avgKol) {
//     console.log ("Dolphins are the winners!")
// } else {
//     console.log ("Koalas are the winners")
// }


// -----------------------------------------------------------------
