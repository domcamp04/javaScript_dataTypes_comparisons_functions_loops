console.log('My name is the DOM')

// Basics of JavaScript

/* 
    Multi line comment in JavaScript
    ----Variable Declaration in JavaScript---------
    Primitive Types: Strings, Numbers, Boolean, Undefined, Null
    Objects: Objects, Arrays, Functions
    Control Flow in JavaScript
*/

// Declaring a variable, its common practive to use camelCase when declaring in JavaScript
// Var is declaring a golbal variable that can be used anywhere in the scope
// -----------------------Primitive Types--------------------------------
var dom;
dom = 5;

var myName = 'Dominick';
console.log(myName + ' is real cool!');
console.log(typeof(myName))

var age;
console.log(age);

//  f string (formatted string) in js needs tick marks `` and has a special behavior to read what is inside ${}
console.log("My name is ${myName}")
console.log(`My name is ${myName}`)

//  Integer- console interprets numbers in blue

var myAge = 69;
console.log(myAge)
console.log(typeof(myAge))

//  Float- of same type as integer (number)
var pi = 3.14;

console.log(pi)
console.log(typeof(pi))

//  Booleans
var someBool = true;
var someOtherBool = false;
console.log(someBool, someOtherBool);
console.log(typeof(someBool))

//  Undefined
var something;
console.log(something)
console.log(typeof(something))

//  Null- null shows as type object. Billion dollar bug because they cant change it at this point
var someNull = null;

console.log(someNull);
console.log(typeof(someNull))

// -------------------------Object Types-------------------------------
//  Array-- special type of object where the key is ordered and numerically indexed- arrays can hold any datatype, objects, strings, integers, functions, even arrays!
var myArray = [1, 2, 3, 4, 5];

console.log(myArray);
console.log(typeof(myArray));

//  Arrays are indexible--index zero grabs the one in myArray above. Javascript is a zero index language
console.log(myArray[0])

//  Arrays have a length attribute/property console.log("INPUT or VARIABLE".length) will return the length of the array
console.log(myArray.length)

//  Objects are an unordered key value collection of data
var person = {
    first: 'Dominick',
    last: 'Campanile',
    languages: ['Python', 'JavaScript', 'SQL']
}

console.log(person);
console.log(typeof(person));

//  Bracket Notation---------accessing values in Objects- use backticks in parenthasees, ${varname/objectname['property/key']}-------bracket notation
console.log(`My last name is ${person['last']}`);
//  Dot Notation--------------dot notation to access value from an object. seems easier.
console.log(`My last name is ${person.last}`);
console.log(`My full name is ${person.first} ${person.last}`)
//  Dot Notation while using indexing
console.log(`Today we are learning ${person.languages[1]}`);

//  ------------------------------Let Keyword-------------------------------------------
//  Let limits the access to a variable to block scope
//  Block scope is delimited by {} rather than in Python through indent after func is defined

let myCity = 'Chicago';
let myDayofBirth = 'August 15th'

console.log(myCity);
console.log(typeof(myCity))

var adult = true;

if(adult){
    var mySchool = 'Illinois State';
    let color = 'Blue';
}
//  Both defined above only mySchool will show up in console because var is a globally defined variable but let can only be used within the scope of the {}
console.log(mySchool);
// console.log(color);



//  ----------------------------Const Keyword-----------------------------------
//  Similar to let being that they are both block scoped.
//  Needs value when declared
//  Can not be redefined

const myBirthday = true;
let ageOfPerson = 33;

if(myBirthday) {
    const myFavColor = 'Maroon';
    ageOfPerson = ageOfPerson + 1;  //  Ok because age is declared with 'let'
    // myBirthday = false;//   Error because declared with 'const'
};

// console.log(myFavColor); //not defined since it was declared in a code block, 'const' is not a global variable


const cities = ['Chicago', 'New York', 'Boston', 'Naples']

console.log(cities)

cities[2] = 'Denver'; // Can change the data inside using index

console.log(cities);

// cities = ['Austin', 'Peoria'] // Cannot redefine the const itself


//  JavaScript Hoisting
// when a var is declared anywhere in a scope it is treated as though its declared at the beginning of the scope but wont be assigned until it is read in order of when it came.

console.log(hoist); // variable is declared at the beginning of scope so it reads as undefined
var hoist;


console.log(hoisted); // variable is not assigned until it is read in order so this will still read undefined rather than 'hoisted'
var hoisted= 'hoisted'


console.clear()
//  -------------------------------Math Calculations and Operators-----------------------------
//  ---Addition
let sum = 5 + 5
console.log(sum);

sum += 5; // sum = sum + 5
console.log(sum)

sum++; //  Adds one to the variable. equivalent of sum = sum + 1
console.log(sum);

//  ---Subtraction
let diff = 5 - 5
console.log(diff); // 0

diff -= 5;
console.log(diff); // -5

diff--;
console.log(diff); //equivalent of diff = diff - 1

//  ---Multiplication
let prod = 5 * 5
console.log(prod) // 25

prod *= 5;
console.log(prod); // 125

//  ---Division
let quotient = 25 / 5;
console.log(quotient); // 5

quotient /= 5;
console.log(quotient); // 1

//  ---Exponents
let square = 5 ** 2;
console.log(square); // 25

square **= 2;
console.log(square); // 625

//  ---Modulo
let remainder = 19 % 4
console.log(remainder); // 3

remainder %= 2; //remainder = remainder % 2
console.log(remainder); // 1

//  ---Floor Division
let floor = Math.floor(10/3);
console.log(floor) // 3

//  ---Ceiling Division
let ceiling = Math.ceil(10/3);
console.log(ceiling) // 4

let myString = 'My age is ';
let myStringAge = '99';

let addedStrings = myString + myStringAge;
console.log(addedStrings); // 'My age is 99'

let crazyStuff = square + '4';
console.log(crazyStuff); // 6254, converts 625(square) into a string and adds it to string '4'. Essentially converts to '625' + '4' = '6254'

let notCrazyStuff = square + 4;
console.log(notCrazyStuff); // 629 

let moreCrazyStuff = 625 * '4';
console.log(moreCrazyStuff); // 2500. for multiplication it prefers to convert the string to an integer. addition/subtraction it converts number to string

console.clear()
//  ----------------------------JavaScript Comparisons-----------------------------------
//  Similar to Python comparison operators but not the same

//  == Allows for type conversion to happen before comparison and preference is numbers. -- loose comparison
console.log(5 == 5) // true
console.log(5 == 5.0) // true
console.log(5 == '5.0') // true
console.log(1 == '1'); // true

//  === Strict comparison not allowing type conversion. Essentially checks both the value and type.
console.log(5 === '5') // false


// Type conversion is allowed for greater/less than comparisons
console.log('10' > 5); // true

// Below is true. will use alphabetical variables when comparing. WATCH OUT!!!
let x = '10';
let y = '9';

console.log(x<y); // true because it it comparing alphabetically

//  The below is false even though the values and indexes are the same. The reason is because when comparing objects it is comparing the identity and storage of the object in memory, not the values.
let arr1 = [1, 2, 3, 4]
let arr2 = [1, 2, 3, 4]
console.log(arr1 == arr2); // false

let newArr = ['cat', 'dog', 'pig']
let newerArr = newArr;

console.log(newArr == newerArr); // true because it is comparing the same instance of Arr in memory.

// Greater Than(>), Greater Than or Equal To (>=), Less Than (<), Less Than or Equal To (<=)
// Equal allow type conversion(==), Equal no type conversion (===)
// Not equal conversion but allowing conversions (!=), not equal and not allowing conversion (!==)
//  ----------------------ways to log in the console-------------------------
console.log('hello');

console.warn('hello')

console.error('hello')

console.clear()
//  ----------------------------------------CONTROL FLOW----------------------------------------------
//  ---If statements
let newNumber = 70

console.log('Begin')
if (newNumber > 65){
    console.log('Senior')
} else if (newNumber > 30){
    console.log('Adult')
} else {
    console.log('Child')
}
console.log('End')


//  Ternary Operator- (condition) ? value if true : value if false
let ageGroup = (newNumber > 18) ? 'Senior' : 'adult'
console.log(ageGroup)

let ageGroup2 = (newNumber > 65) ? 'senior' : (newNumber > 30) ? 'Adult' : 'Child'
console.log(ageGroup2)

//  && is equal to and
if (newNumber > 18 && newNumber < 40) {
    console.log('Young Adult')
};
//  || is equal to or
if (newNumber > 18 || newNumber < 40) {
    console.log('Young Adult')
};

console.clear()
//  ---JavaScript loops: for, for ... in, for ... of, while, do while

//  for (counter; expression/condition; incrementation/decrementation){ code to execute each loop }

console.log('loop has started')

for (let i = 0; i <= 20; i++){
    console.log(i)
};
console.log('loop has ended')

console.log('loop has started')

for (let i = 20; i > 0; i--){
    console.log(i)
};

console.log('loop has ended')

// for...in
let teams = {
    mlb: 'cubs',
    nba: 'bulls',
    nfl: 'bears',
    nhl: 'blackhawks'
}

for (let abc in teams){
    console.log(abc)
    console.log(teams[abc])
}

// for...of
let planets = ['mars', 'jupiter', 'earth', 'mercury', 'saturn']

for (let p of planets){
    console.log(p);
}

// While loop
// while(condition){}
let num1 = 1

while (num1 < 25){
    console.log(num1)
    num1 +=5
}

// Do While Loop
// Do the first portion AT LEAST ONCE 
// If the while condition is still met, continue the while loop
// do {code to execute} while (condition)
let k = 0;
do {
    console.log(k)
    k++
} while (k < 10)


for (let p of planets){
    if (p == 'Earth'){
        console.log('Nice place to live... for now')
    } else {
        console.log('Inhabitable')
    }
}

console.clear()

//  ------------------------JavaScript User Defined Functions-----------------------------------
//  Regular Named Function
function addNums(){
    let num1 = 4;
    let num2 = 5;

    return num1 + num2;
}
console.log(addNums())

// Named Function with Parameters
function addNums2(num1, num2){
    return num1 + num2
}
console.log(addNums2(10,24))

console.log(`10 + 17 = ${addNums2(10,17)}`)

// Variable Named Function
let addNums3 = function(){
    let num1 = 10;
    let num2 = 20;

    return num1 + num2;
}
console.log(addNums3())

// Variable Named Functions with Parameters
let addNums4 = function (num1, num2){
    return num1 + num2;
}

console.log(addNums4(10,43));

// -------------------------------Arrow Functions----------------------------------
// Old Way
let multiplyNums = function(num1, num2){
    return num1 * num2
}
// Arrow Way
let multiplyNums2 = (num1, num2) => num1 * num2

let greetPerson = person => `Hello ${person}`

console.log(greetPerson('Dominick'));

let addNums10 = () => 5 + 19

// More than one line in arrow function will requre return and curly brackets
// Function to find max number in an array
let findMaxNums = (arr) => {
    let max = 0
    for (let num of arr) {
        if (num > max){
            max = num
        }
    }
    return max
}

