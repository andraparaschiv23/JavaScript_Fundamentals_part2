'use strict'; //this statement has to be the very first statement in the script(if any code behind, the strict mode will not be activated); use at the beginning of each script
//avoid to introduce bugs in the codes; forbit us to do certain things; creates some visible errors
//example of most visible changes strict mode introduce:
/*
let hasDriversLicense = false;
const passTest = true; //by default we should use const

if (passTest) hasDriverLicense = true;
if (hasDriversLicense) console.log('I can drive :D');
// const interface = 'Audio';
// const private = 534;

*//////////////////////////////////////////////////////////
/*
//Functions = simply a piece of code that can be reduced over and over again during the code. A function can hold one or more lines of code
function logger() {
  //we want to execute a logg many times in a programmer; now we can use it as many times as we want once defined.
  console.log('My name is Jonas');
}

//calling / running / invoking function
logger();
logger();
logger();

//we can also return data with a function; functions are like machine(we put food in the processor,it does something to the food, then the processor return the final food= ex the juice)

function fruitProcessor(apples, oranges) {
  console.log(apples, oranges);
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

//const appleJuice = fruitProcessor(5, 0);
console.log(fruitProcessor(5, 0));

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

const num = Number('23');

//Function declaration
function calcAge1(birthYear) {
  //parameter is like a local variable
  const age = 2022 - birthYear;
  return age;
}

const age1 = calcAge1(1991);


//an function expression produces a value
const calcAge2 = function (birthYear) {
  return 2022 - birthYear;
}
const age2 = calcAge2(1991);
console.log(age1, age2);

*/

/*
//Arrow function
// after => we write what we want to return; return is happening implicity
//when we have one parameter and we have only one line for return; becomes more complicated when have more complicated functions
const calcAge3 = birthYear => 2022 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

//calculate how many years one person has till retierment
const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retierment = 65 - age;
  // return retierment;
  return `${firstName} retieres in ${retierment} years`;
}

console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(1997, 'Andra'));
*/
/*
function cutFruitPisces(fruit) {
  return fruit * 4;
}

function fruitProcesso(apples, oranges) {
  const applePieces = cutFruitPisces(apples);
  const orangePieces = cutFruitPisces(oranges);
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

console.log(fruitProcesso(2, 3));
*/

/*
const calcAge = function (birthYeah) {
  return 2037 - birthYeah;
}


const yearsUntilRetirement = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retierment = 65 - age;
  if (retierment > 0) {
    return retierment;
  } else {
    return -1;
  }

  // return retierment;
  //return `${firstName} retieres in ${retierment} years`;
}

console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(1997, 'Andra'));
*/

/*
// code challange
const calcAverage = (score1, score2, score3) =>
  (score1 + score2 + score3) / 3;
const avgDolhins = calcAverage(44, 23, 71);
console.log(avgDolhins);
const avgKoalas = calcAverage(65, 54, 49);
console.log(avgKoalas);
// return `Team Dolphins has the avarage scrore ${average1}, while Team Koalas has the avarage score ${average2}`;

const checkWinner = function (avgDolhins, avgKoalas) {
  // const avgDolhins = calcAverage(44, 23, 71);
  //const avgKoalas = calcAverage(65, 54, 49);
  if (avgDolhins >= 2 * avgKoalas) {
    return `Dolhins win (${avgDolhins} vs. ${avgKoalas})`;
  }
  else if (avgKoalas >= 2 * avgDolhins) {
    return `Koalas win (${avgKoalas} vs. ${avgDolhins})`;
  } else {
    console.log('No team wins..');
  }
}
console.log(checkWinner(avgDolhins, avgKoalas));
console.log(checkWinner(calcAverage(85, 54, 41), calcAverage(23, 34, 27)));

*/

/*
//Arrays = like a big container in which we can throw values. we take data,store it, make somewthing and return
//data structures as arrays ; can store any type of data(strings, numbers)
const friend1 = 'Michael';
const firend2 = 'Steven';
const friend3 = 'Peter';

const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);
const years = new Array(1991, 1994, 2008, 2020); //new keyword
console.log(friends[0]); //arrays are zerro based = element0, element1,element2; so element at position 0 we write friends[0];
console.log(friends[2]);
console.log(friends.length); //we don't have to count how many elements are in an array
console.log(friends[friends.length - 1]); //friends.length it's not zerro based, so we have to decrese 1. expression is something that produces  a value.
friends[2] = 'Jay';
console.log(friends);
//not possible! friends =['Bob', 'Alice'];
const fristName = 'Jonas';
const jonas = [fristName, 'Schmedtmann', 2037 - 1991, 'teacher', friends];
console.log(jonas);

//Exercise
const calcAge = function (birthYear) {
  return 2022 - birthYear;
}
const years2 = [1990, 1967, 2002, 2010, 2018];
console.log(calcAge(years2));
const age1 = calcAge(years2[0]);
const age2 = calcAge(years2[2]);
const age3 = calcAge(years2[4]);
console.log(age1, age2, age3);

const ages = [calcAge(years2[0]), calcAge(years2[1]), calcAge(years[years2.length - 1])];
console.log(ages);
*/

/*
//Basic array operations
const friends = ['Michael', 'Steven', 'Peter'];
//friends.push('Jay'); //add element to the end of the array. Push is a function that we call dorectly on friends array
const newLength = friends.push('Jay');
//console.log(friends);
//console.log(newLength);


friends.unshift('John'); //add element to the beginning of the array
//console.log(friends);

//Remove elemnts
friends.pop(); //removes last element of the array
console.log(friends);
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift();//frist
console.log(friends);

console.log(friends.indexOf('Steven'));
console.log(friends.indexOf('Bob'));

friends.push(23);
console.log(friends.includes('Steven'));
console.log(friends.includes('Bob'));
console.log(friends);
console.log(friends.includes(23));

if (friends.includes('Steven')) {
  console.log('You have a friend called Staven');
}

*/
/*
//Coding Challange #2
const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}
const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const total = [bills[0] + calcTip(bills[0]), bills[1] + calcTip(bills[1]), bills[2] + calcTip(bills[2])];
console.log(bills);
console.log(tips);
console.log(total);
*/
/*
//Objects
//arrays as data structures till now
//objects are fundamental
//objects litarlly sintax is the one with {}
const jonasArray = ['Jonas', 'Schemann', 2037 - 1991, 'teacher', ['Michael', 'Peter', 'Steven']];
const jonas = {
  firstName: 'Jonas',
  lastName: 'Schmedtmann',
  age: 2037 - 1991,
  job: 'teacher',
  friends: ['Michael', 'Peter', 'Steven']
};
*/
/*
const jonas = {
  firstName: 'Jonas',
  lastName: 'Schmedtmann',
  age: 2037 - 1991,
  job: 'teacher',
  friends: ['Michael', 'Peter', 'Steven']
};
console.log(jonas);

console.log(jonas.lastName); // . is an operator that will go to this property and brings the value
console.log(jonas['lastName']);

const nameKey = 'Name';
console.log(jonas['first' + nameKey]);
console.log(jonas['last' + nameKey]);

//console.log(jonas.'last' + nameKey);

const interestedIn = prompt('What do you want to know about Jonas? Choose between firstName, lastBane, age, job and friends');
console.log(jonas[interestedIn]); //what we put between [] brackets get evaluated
console.log(jonas.interestedIn); // result is Undefined because joans doesn't have proparty interestedIn; replace it with variable for jonas

if (jonas[interestedIn]) {
  console.log(jonas[interestedIn]); //what we put between [] brackets get evaluated

} else {
  console.log('Wrong request! Choose between firstName, lastName, age,job and friends!');
}

jonas.location = 'Portugal';
jonas['twitter'] = '@jonasschmedtman';
console.log(jonas);
//Challage0
console.log(jonas.friends.length);
//Jonas has 3 friends and his best friend id called Michael
console.log(`${jonas.firstName}  has ${jonas.friends.length} friends and his best friend is called ${jonas.friends[0]}`);
*/
/*
const jonas = {
  firstName: 'Jonas',
  lastName: 'Schmedtmann',
  bithYear: '1991',
  job: 'teacher',
  friends: ['Michael', 'Peter', 'Steven'],
  hasDriversLicense: true,
  // calcAge: function (birthYear) {
  //   return 2037 - birthYear;
  // } //any function that is attached to an object is an method
  calcAge: function () {
    this.age = '2037' - this.birthYear;
    return this.age;
  },
  getSummary: function () {
    if (jonas.hasDriversLicense) {
      console.log(`${this.firstName} is a ${this.calcAge()} old teacher and he has a driver license `);
    } else {
      console.log(`${this.firstName} is a ${this.calcAge()} old teacher and he doesn't have a driver license `);
    }
  }
};
console.log(jonas.calcAge());
//Challange: method get summary should return string that sumarize data about jonas or another person data
//JOnas is a 46 years old teacher
//const hasDriverLicense = prompt("Introdu varsta ")

console.log(jonas.getSummary());

//console.log(jonas.calcAge(1997));

//method can be also a proparty
//calcAge proparty or method

*/
/*
//Coding challange #3
const mark = {
  fullName: "Mark Miller",
  mass: 90,
  height: 1.69,
  calcBMI: function () {
    this.BMI = this.mass / (this.height ** 2);
    return this.BMI;
  }
};
const john = {
  fullName: "John Smith",
  mass: 60,
  height: 1.95,
  calcBMI: function () {
    this.BMI = this.mass / (this.height ** 2);
    return this.BMI;
  }
};
mark.calcBMI();
john.calcBMI();
console.log(mark.BMI, john.BMI);
if (john.BMI > mark.BMI) {
  console.log(`${john.fullName}'s BMI (${john.BMI}) is higher than ${mark.fullName}'s BMI (${mark.BMI})`);
}
if (john.BMI < mark.BMI) {
  console.log(`${mark.fullName}'s BMI (${mark.BMI}) is higher than ${john.fullName}'s BMI (${john.BMI})`);
} else {
  console.log("They have the same BMI");
}
*/
/*
//Control structures: if, now we learn FOR
//loop = automate repetitive tasks
//when go to gym we lift wheight (10 repetitions)
// console.log('Lifting weights reptition 1');
// console.log('Lifting weights reptition 2');
// console.log('Lifting weights reptition 3');
// console.log('Lifting weights reptition 4');
// console.log('Lifting weights reptition 5');
// console.log('Lifting weights reptition 6');
// console.log('Lifting weights reptition 7');
// console.log('Lifting weights reptition 8');
// console.log('Lifting weights reptition 9');
// console.log('Lifting weights reptition 10');
//dont repeat yourself principal
//first part is the initial part of the encounter;
//second part -> a logical condition that is evaluated before each evaluation of the loop
//the for loop keep running while the second condition is true
//third part will update the encounter after each iteration
for (let rep = 1; rep <= 30; rep++) {
  console.log(`Lifting weights reptition ${rep}`);
}

//loop verify after each repetiton if the condition is still true
*/
/*
const jonasArray = [
  'Jonas',
  'Schadtmasn',
  2037 - 1991,
  'teacher',
  ['Michael', 'Peter', 'Steven'],
  true
];
const types = [];
//array is zero based
//reading for jonas array
for (let i = 0; i < jonasArray.length; i++) {
  console.log(jonasArray[i], typeof jonasArray[i]);
  //Filling types array
  // types[i] = typeof jonasArray[i];
  types.push(typeof jonasArray[i]);
}
console.log(types);

//array with birth years
const years = [1991, 2007, 1969, 2020];
//array that will be filled with ageds
const ages = [];
for (let i = 0; i < years.length; i++) {
  ages.push(2023 - years[i]); //elements we want to push in the empty array; years at the current position
}
console.log(ages);

//CONTINUE AND BREAK STATEMENT
//CONTINUE - to exit the current iteration of the loop
//break complete terminate the loop
console.log('----Only strings');
for (let i = 0; i < jonasArray.length; i++) {
  if (typeof jonasArray[i] !== 'string') continue; //only log strings to the console
  console.log(jonasArray[i], typeof jonasArray[i]);
}
//log no other elements after we found the number
console.log('----Break with number');
for (let i = 0; i < jonasArray.length; i++) {
  if (typeof jonasArray[i] == 'number') break; //only log strings to the console
  console.log(jonasArray[i], typeof jonasArray[i]);
}
*/
/*
const jonas = [
  'Jonas',
  'Schadtmasn',
  2037 - 1991,
  'teacher',
  ['Michael', 'Peter', 'Steven'],
];
for (let i = jonas.length - 1; i >= 0; i--) {
  console.log(jonas[i]);
}
//create a counter exercise
for (let exercise = 1; exercise <= 3; exercise++) {
  console.log(`---Starting exercise ${exercise}`);
  for (let rep = 1; rep < 6; rep++) {
    console.log(`Lifting weigt repetition ${rep}`);
  }
}
*/
// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`Lifitng wights repetition ${rep}`);
// }
/*
let rep = 1;
while (rep <= 10) {
  console.log(`Lifitng wights repetition ${rep}`);
  rep++;
}

//keep running the loop while the is to 6
let dice = Math.trunc(Math.random() * 6) + 1;
//console.log(dice);
while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (DICE === 6) console.log('sTOPED THE LLOPING');
}

*/

//Challange #4
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
let tips = [];
let totals = [];
const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}
//loop over bills array

for (let i = 0; i < bills.length; i++) {
  const tip = calcTip(bills[i]); //in each iteration we create a new one
  tips.push(tip);

  totals.push(tip + bills[i]);

}
console.log(bills, tips, totals);

let arr = [];
let avarage = 0;
const calcAvarage = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i]; //sum += sum[i];
  }
  return sum / arr.length;
}
console.log(calcAvarage(totals));
//calcAvarage([2, 3, 6]);

/*
///////////////////////////////////////
// Activating Strict Mode
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can drive :D');

// const interface = 'Audio';
// const private = 534;


///////////////////////////////////////
// Functions
function logger() {
  console.log('My name is Jonas');
}

// calling / running / invoking function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${ apples } apples and ${ oranges } oranges.`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

const num = Number('23');


///////////////////////////////////////
// Function Declarations vs. Expressions

// Function declaration
function calcAge1(birthYeah) {
  return 2037 - birthYeah;
}
const age1 = calcAge1(1991);

// Function expression
const calcAge2 = function (birthYeah) {
  return 2037 - birthYeah;
}
const age2 = calcAge2(1991);

console.log(age1, age2);


///////////////////////////////////////
// Arrow functions

const calcAge3 = birthYeah => 2037 - birthYeah;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYeah, firstName) => {
  const age = 2037 - birthYeah;
  const retirement = 65 - age;
  // return retirement;
  return `${ firstName } retires in ${ retirement } years`;
}

console.log(yearsUntilRetirement(1991, 'Jonas')); console.log(yearsUntilRetirement(1980, 'Bob'));


///////////////////////////////////////
// Functions Calling Other Functions
function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const juice = `Juice with ${ applePieces } piece of apple and ${ orangePieces } pieces of orange.`;
  return juice;
}
console.log(fruitProcessor(2, 3));
/*
const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retierment = 65 - age;
  // return retierment;
  return `${ firstName } retieres in ${ retierment } years`;
}

console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(1997, 'Andra'));
///////////////////////////////////////
// Reviewing Functions
const calcAge = function (birthYeah) {
  return 2037 - birthYeah;
}

const yearsUntilRetirement = function (birthYeah, firstName) {
  const age = calcAge(birthYeah);
  const retirement = 65 - age;

  if (retirement > 0) {
    console.log(`${ firstName } retires in ${ retirement } years`);
    return retirement;
  } else {
    console.log(`${ firstName } has already retired 🎉`);
    return -1;
  }
}

console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(1950, 'Mike'));
*/

///////////////////////////////////////
// Coding Challenge #1

/*
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).
A team ONLY wins if it has at least DOUBLE the average score of the other team. Otherwise, no team wins!

1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner to the console, together with the victory points, according to the rule above. Example: "Koalas win (30 vs. 13)".
4. Use the 'checkWinner' function to determine the winner for both DATA 1 and DATA 2.
5. Ignore draws this time.

TEST DATA 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
TEST DATA 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27

HINT: To calculate average of 3 values, add them all together and divide by 3
HINT: To check if number A is at least double number B, check for A >= 2 * B. Apply this to the team's average scores 😉

GOOD LUCK 😀
*/

/*
const calcAverage = (a, b, c) => (a + b + c) / 3;
console.log(calcAverage(3, 4, 5));

// Test 1
let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);
console.log(scoreDolphins, scoreKoalas);

const checkWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins win 🏆 (${ avgDolphins } vs.${ avgKoalas })`);
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas win 🏆 (${ avgKoalas } vs.${ avgDolphins })`);
  } else {
    console.log('No team wins...');
  }
}
checkWinner(scoreDolphins, scoreKoalas);

checkWinner(576, 111);

// Test 2
scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);
console.log(scoreDolphins, scoreKoalas);
checkWinner(scoreDolphins, scoreKoalas);


///////////////////////////////////////
// Introduction to Arrays
const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';

const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);

const y = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = 'Jay';
console.log(friends);
// friends = ['Bob', 'Alice']

const firstName = 'Jonas';
const jonas = [firstName, 'Schmedtmann', 2037 - 1991, 'teacher', friends];
console.log(jonas);
console.log(jonas.length);

// Exercise
const calcAge = function (birthYeah) {
  return 2037 - birthYeah;
}
const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
console.log(ages);


///////////////////////////////////////
// Basic Array Operations (Methods)
const friends = ['Michael', 'Steven', 'Peter'];

// Add elements
const newLength = friends.push('Jay');
console.log(friends);
console.log(newLength);

friends.unshift('John');
console.log(friends);

// Remove elements
friends.pop(); // Last
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift(); // First
console.log(friends);

console.log(friends.indexOf('Steven'));
console.log(friends.indexOf('Bob'));

friends.push(23);
console.log(friends.includes('Steven'));
console.log(friends.includes('Bob'));
console.log(friends.includes(23));

if (friends.includes('Steven')) {
  console.log('You have a friend called Steven');
}
*/

///////////////////////////////////////
// Coding Challenge #2

/*
Steven is still building his tip calculator, using the same rules as before: Tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.

1. Write a function 'calcTip' that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100.
2. And now let's use arrays! So create an array 'bills' containing the test data below.
3. Create an array 'tips' containing the tip value for each bill, calculated from the function you created before.
4. BONUS: Create an array 'total' containing the total values, so the bill + tip.

TEST DATA: 125, 555 and 44

HINT: Remember that an array needs a value in each position, and that value can actually be the returned value of a function! So you can just call a function as array values (so don't store the tip values in separate variables first, but right in the new array) 😉

GOOD LUCK 😀
*/

/*
const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}
// const calcTip = bill => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(bills, tips, totals);


///////////////////////////////////////
// Introduction to Objects
const jonasArray = [
  'Jonas',
  'Schmedtmann',
  2037 - 1991,
  'teacher',
  ['Michael', 'Peter', 'Steven']
];

const jonas = {
  firstName: 'Jonas',
  lastName: 'Schmedtmann',
  age: 2037 - 1991,
  job: 'teacher',
  friends: ['Michael', 'Peter', 'Steven']
};


///////////////////////////////////////
// Dot vs. Bracket Notation
const jonas = {
  firstName: 'Jonas',
  lastName: 'Schmedtmann',
  age: 2037 - 1991,
  job: 'teacher',
  friends: ['Michael', 'Peter', 'Steven']
};
console.log(jonas);

console.log(jonas.lastName);
console.log(jonas['lastName']);

const nameKey = 'Name';
console.log(jonas['first' + nameKey]);
console.log(jonas['last' + nameKey]);

// console.log(jonas.'last' + nameKey)

const interestedIn = prompt('What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends');

if (jonas[interestedIn]) {
  console.log(jonas[interestedIn]);
} else {
  console.log('Wrong request! Choose between firstName, lastName, age, job, and friends');
}

jonas.location = 'Portugal';
jonas['twitter'] = '@jonasschmedtman';
console.log(jonas);

// Challenge
// "Jonas has 3 friends, and his best friend is called Michael"
console.log(`${ jonas.firstName } has ${ jonas.friends.length } friends, and his best friend is called ${ jonas.friends[0] } `);


///////////////////////////////////////
// Object Methods

const jonas = {
  firstName: 'Jonas',
  lastName: 'Schmedtmann',
  birthYeah: 1991,
  job: 'teacher',
  friends: ['Michael', 'Peter', 'Steven'],
  hasDriversLicense: true,

  // calcAge: function (birthYeah) {
  //   return 2037 - birthYeah;
  // }

  // calcAge: function () {
  //   // console.log(this);
  //   return 2037 - this.birthYeah;
  // }

  calcAge: function () {
    this.age = 2037 - this.birthYeah;
    return this.age;
  },

  getSummary: function () {
    return `${ this.firstName } is a ${ this.calcAge() } -year old ${ jonas.job }, and he has ${ this.hasDriversLicense ? 'a' : 'no' } driver's license.`
  }
};

console.log(jonas.calcAge());

console.log(jonas.age);
console.log(jonas.age);
console.log(jonas.age);

// Challenge
// "Jonas is a 46-year old teacher, and he has a driver's license"
console.log(jonas.getSummary());
* /

///////////////////////////////////////
// Coding Challenge #3

/*
Let's go back to Mark and John comparing their BMIs! This time, let's use objects to implement the calculations! Remember: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter)

1. For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI (the same method on both objects). Store the BMI value to a property, and also return it from the method.
3. Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!"

TEST DATA: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.

GOOD LUCK 😀
*/

/*
const mark = {
  fullName: 'Mark Miller',
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  }
};

const john = {
  fullName: 'John Smith',
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  }
};

mark.calcBMI();
john.calcBMI();

console.log(mark.bmi, john.bmi);

// "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!"

if (mark.bmi > john.bmi) {
  console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s BMI (${john.bmi})`)
} else if (john.bmi > mark.bmi) {
  console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s BMI (${mark.bmi})`)
}


///////////////////////////////////////
// Iteration: The for Loop

// console.log('Lifting weights repetition 1 🏋️‍♀️');
// console.log('Lifting weights repetition 2 🏋️‍♀️');
// console.log('Lifting weights repetition 3 🏋️‍♀️');
// console.log('Lifting weights repetition 4 🏋️‍♀️');
// console.log('Lifting weights repetition 5 🏋️‍♀️');
// console.log('Lifting weights repetition 6 🏋️‍♀️');
// console.log('Lifting weights repetition 7 🏋️‍♀️');
// console.log('Lifting weights repetition 8 🏋️‍♀️');
// console.log('Lifting weights repetition 9 🏋️‍♀️');
// console.log('Lifting weights repetition 10 🏋️‍♀️');

// for loop keeps running while condition is TRUE
for (let rep = 1; rep <= 30; rep++) {
  console.log(`Lifting weights repetition ${rep} 🏋️‍♀️`);
}


///////////////////////////////////////
// Looping Arrays, Breaking and Continuing
const jonas = [
  'Jonas',
  'Schmedtmann',
  2037 - 1991,
  'teacher',
  ['Michael', 'Peter', 'Steven'],
  true
];
const types = [];

// console.log(jonas[0])
// console.log(jonas[1])
// ...
// console.log(jonas[4])
// jonas[5] does NOT exist

for (let i = 0; i < jonas.length; i++) {
  // Reading from jonas array
  console.log(jonas[i], typeof jonas[i]);

  // Filling types array
  // types[i] = typeof jonas[i];
  types.push(typeof jonas[i]);
}

console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
  ages.push(2037 - years[i]);
}
console.log(ages);

// continue and break
console.log('--- ONLY STRINGS ---')
for (let i = 0; i < jonas.length; i++) {
  if (typeof jonas[i] !== 'string') continue;

  console.log(jonas[i], typeof jonas[i]);
}

console.log('--- BREAK WITH NUMBER ---')
for (let i = 0; i < jonas.length; i++) {
  if (typeof jonas[i] === 'number') break;

  console.log(jonas[i], typeof jonas[i]);
}


///////////////////////////////////////
// Looping Backwards and Loops in Loops
const jonas = [
  'Jonas',
  'Schmedtmann',
  2037 - 1991,
  'teacher',
  ['Michael', 'Peter', 'Steven'],
  true
];

// 0, 1, ..., 4
// 4, 3, ..., 0

for (let i = jonas.length - 1; i >= 0; i--) {
  console.log(i, jonas[i]);
}

for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`-------- Starting exercise ${exercise}`);

  for (let rep = 1; rep < 6; rep++) {
    console.log(`Exercise ${exercise}: Lifting weight repetition ${rep} 🏋️‍♀️`);
  }
}


///////////////////////////////////////
// The while Loop
for (let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting weights repetition ${rep} 🏋️‍♀️`);
}

let rep = 1;
while (rep <= 10) {
  // console.log(`WHILE: Lifting weights repetition ${rep} 🏋️‍♀️`);
  rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) console.log('Loop is about to end...');
}
*/

///////////////////////////////////////
// Coding Challenge #4

/*
Let's improve Steven's tip calculator even more, this time using loops!

1. Create an array 'bills' containing all 10 test bill values
2. Create empty arrays for the tips and the totals ('tips' and 'totals')
3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate tips and total values (bill + tip) for every bill value in the bills array. Use a for loop to perform the 10 calculations!

TEST DATA: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52

HINT: Call calcTip in the loop and use the push method to add values to the tips and totals arrays 😉

4. BONUS: Write a function 'calcAverage' which takes an array called 'arr' as an argument. This function calculates the average of all numbers in the given array. This is a DIFFICULT challenge (we haven't done this before)! Here is how to solve it:
  4.1. First, you will need to add up all values in the array. To do the addition, start by creating a variable 'sum' that starts at 0. Then loop over the array using a for loop. In each iteration, add the current value to the 'sum' variable. This way, by the end of the loop, you have all values added together
  4.2. To calculate the average, divide the sum you calculated before by the length of the array (because that's the number of elements)
  4.3. Call the function with the 'totals' array

GOOD LUCK 😀
*/

/*
const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++) {
  const tip = calcTip(bills[i]);
  tips.push(tip);
  totals.push(tip + bills[i]);
}
console.log(bills, tips, totals);

const calcAverage = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    // sum = sum + arr[i];
    sum += arr[i];
  }
  return sum / arr.length;
}
console.log(calcAverage([2, 3, 7]));
console.log(calcAverage(totals));
console.log(calcAverage(tips));
*/
