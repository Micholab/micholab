var a;
var b;
console.log(a);
a = 7;
b = a;
console.log(b);
var a = 9;
console.log(a);

let x = 8;
let y = 3;
let z = x % y;
console.log(z);

var myStr = "FirstLine\n\t\\SecondLine\nThirdLine";
console.log(myStr);

var myStr = "This is my first sentence ";
myStr += "This is my second sentence";
console.log(myStr);

// using the number methods
var yo = 7.894;
var op = yo.toFixed(2);
console.log(op);

var ko = 7.894;
var ou = ko.toPrecision(5);
console.log(ou);

var ourName = "beauty";
var myStr = "My name is " + ourName + " and I am Well";
console.log(myStr);

var word = "awesome";
var myStr = "Freecodecamp is ";
myStr += word;
console.log(word);

var adjective = " an enormous task";
var myStr = "Learning code is";
myStr += adjective;
console.log(myStr);

var firstName = "0";
var firstNameLength = "lovebird";
firstName = firstNameLength.length;
console.log(firstName);

var firstLetter = "0";
var lastName = "Lovebird";
firstLetter = lastName[0];
console.log(firstLetter);

var firstLetter = "0";
var lastName = "Michael";
firstLetter = lastName[2];
console.log(firstLetter);

var firstLetter = 0;
var LastName = "Micholab";
firstLetter = LastName[LastName.length - 1];
console.log(firstLetter);

function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
  var result = "";
  result +=
    "The " +
    myAdjective +
    " " +
    myNoun +
    " " +
    myVerb +
    " to the store" +
    " " +
    myAdverb;
  return result;
}
console.log(wordBlanks("dog", "big", "ran", "quickly"));
console.log(wordBlanks("bike", "slow", "flew", "slowly"));
// Array explanation
var myArray = ["Glory", 50];
// nested arrays
var array = [
  ["Michael", 40],
  ["game", 30],
];

var ourArray = [50, 60, 70];
var ourData = ourArray[0];
console.log(ourData);

var myArray = [45, 20, 40];
myArray[1] = 50;
console.log(myArray);

var myStr = "I Hate coding";
myStr = "I Love coding";
console.log(myStr);

var myArray = [
  [4, 6, 7],
  [6, 7, 8],
  [10, 22, 10],
  [[34, 23, 1], 45, 23],
];
var myData = myArray[3][2];
console.log(myData);

var ourArray = ["Stimpson", "J", "Cat "];
ourArray += ["happy", "Joy", "mma"];
console.log(ourArray);

var ourArray = ["Stimpson", "J", "Cat"];
ourArray.push(["happy", "Joy"]);
console.log(ourArray);

// pop function
var ourArray = [
  [2, 3, 3],
  [3, 7, 5],
];
var removeOneArray = ourArray.pop();
console.log(removeOneArray);

// shift function
var ourArray = [
  [2, 3, 3],
  [3, 7, 5],
];
var removeOneArray = ourArray.shift();
console.log(removeOneArray);

// unshift function
var ourArray = [
  [3, 4, 5],
  [5, 7, 6],
];
ourArray.unshift("happy");
console.log(ourArray);

// reusable functions
function ReusableFunction() {
  console.log("hello world");
}
ReusableFunction();

function reusableFunction2() {
  console.log("Hi James");
}
reusableFunction2();

function addition(a, b) {
  console.log(a + b);
  return a + b;
}
// addition(5, 7);
console.log(addition(5, 7));

// inputing values in functions
// function kill(a, b) {
//   var wel = a + b;
//   return wel;
// }
// const full = kill(5, 7) + 560;
// console.log(full);

// variable scope outside and inside a function
var myGlobal = 10;

function fun1() {
  oopsGlobal = 5;
}

function fun2() {
  var output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += "oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}
fun1();
fun2();

function scope() {
  var myVar = 5;
  console.log(myVar);
}
scope();
// console.log(myVar);

// local variable with higher specificity than global variable
var outerwear = "T-shirt";
function myOutfit() {
  var outerwear = "sweater";
  return outerwear;
}
// myOutfit();
console.log(myOutfit());
console.log(outerwear);

// returning a value from function
function minusSeven(num) {
  return num - 7;
}
console.log(minusSeven(10));

function timesFive(num) {
  console.log(num + 5);
  return num * 5;
}
timesFive(4);
console.log(timesFive(2));

// assigning the value of return
// variable to be the same as
// an external varaible

var int = 0;

function operation(num) {
  return (num + 3) / 4;
}
console.log(operation(5));
int = operation(5);
console.log(int);

// pushing a varaible to an
// array and removing the value
function nextInLine(arr, Item) {
  arr.push(Item);
  return arr.shift();
}
var testArr = [1, 2, 3, 4, 5];

console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));

// BOOLEANS

var myStr;
function welcomeToBooleans() {
  if (typeof myStr != "undefined") {
    return false;
  } else return true;
}
console.log(welcomeToBooleans());

// if statement
function trueOrFalse(wasThatTrue) {
  if (wasThatTrue) {
    return "yes, that was true";
  }
  return "no, it is not true";
}
console.log(trueOrFalse());

// if statement 2nd example
function ageCount(age) {
  if (age < 10) {
    console.log("you are underage");
  } else console.log("your are above");
}

ageCount(9);

// // if statement 3rd example
function ageCount(age) {
  if (age < 10) {
    return "you are qualified";
  } else if (age === 40) {
    return "you are ok sha";
  } else return "you are not qualified";
}
console.log(ageCount(70));

// more conditional statement continuation
function compare(a, b) {
  if (a == b) {
    return "equal";
  }
  return "Not equal";
}
console.log(compare(10, "10"));

function result(val) {
  if (val !== 7) {
    return "it is wrong";
  } else return "it is ok sha......";
}
console.log(result("7"));

function compare3(myVar) {
  if (myVar >= 5) {
    return "it is ok";
  }
  return "less than 10";
}
console.log(compare3(2));

// using greater and less than
// properties in a function at the same time
function mystr(val) {
  if (val <= 50 && val >= 30) {
    return "it is appropriate";
  } else return "it is not appropriate";
}
console.log(mystr(70));

// using the OR statement in
// the IF statement in the conditional statement
function orInIf(val) {
  if (val < 10 || val > 20) {
    return "correct";
  } else return "wrong";
}
console.log(orInIf(10));

// note: order matters
//  a lot in the use of
//   conditional statement because when a first condition is
// meet the computer does not check for the other conditions

// using the conditional statement to create an assignment
var compliment = ["very poor", "poor", "good", "verygood", "excellent"];
function data(exam, test) {
  if (exam >= test + 40) {
    return "good";
  } else if (exam >= test + 50) {
    return "verygood";
  } else if (exam >= test + 60) {
    return "excellent";
  } else if (exam <= test + 30) {
    return compliment[1];
  } else if (exam <= test + 20) {
    return "very poor";
  } else if (test == exam - 20) {
    return "retake exam";
  }
}
console.log(data(50, 30));

function data(clear) {
  return clear + 10;
}
console.log(data(20));

// switch statement'
function caseInSwitch(val) {
  var answer = "";
  switch (val) {
    case 1:
      answer = "beta";
      break;
    case 2:
      answer = "gamma";
      break;
    case 3:
      answer = 5 + 5;
      break;
    case 4:
      answer = "delta";
  }
  return answer;
}
console.log(caseInSwitch(3));

// switch statement assessment
function change(val) {
  var score = "";
  switch (val) {
    case 1:
      score = 5;
      break;
    case 2:
      score = 10;
      break;
    case 3:
      score = 15 + 15;
      break;
    case 3:
      score = total;
      break;

    default:
      score = 0;
      break;
  }
  return score;
}
console.log(change(4));

// assessment 3/switch statement
function switchstat(val) {
  var int = 0;
  switch (val) {
    case 1:
      int = 20;
      break;
    case 2:
      int = 30;
      break;
    case 3:
      int = (30 + 30) * 2;
      break;
    default:
      int = "total";
      break;
  }
  return int;
}
console.log(switchstat(4));

// switch statement without an immediate break
function data(val) {
  var intel = "";
  switch (val) {
    case 1:
    case 2:
    case 3:
      intel = "high";
      break;
    case 4:
    case 5:
    case 6:
      intel = "low";
      break;
    case 8:
    case 7:
    case 9:
      intel = "mid";
      break;
  }
  return intel;
}
console.log(data(2));
// NOTE THE SWITCH STATEMENT
// CAN ALSO BE AS A REPLACEMENT
// FOR THE ELSE IF STATEMENT

// use the boolean feature
// without the use of the if statement
function isLess(a, b) {
  return a < b;
}
console.log(isLess(10, 15));

// using the switch statement
// to create a card game
function cc(card) {
  var count = 0;
  switch (card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count++;
      break;
    case "k":
    case "j":
    case "a":
    case "q":
      count--;
      break;
  }
  var holdbet = "bet";
  if (count < 0) {
    holdbet = "hold";
  }
  return count + " " + holdbet;
}
// cc(2);
// cc(3);
// cc(7);
// cc("k");
// cc("j");
// cc("a");
// cc("q");
console.log(cc("k"));

// building objects
var object = {
  name: "micholab",
  legs: 3,
  tails: "none",
  friends: ["Javascript"],
};
// accessing an object
// via diffrent methods
var nameValue = object.hat;
var legsValue = object.legs;
// the dot notation
var objects = {
  name: "Javascript",
  "a program": "web ",
};
var nameValue = object["name"];
var legsValue = object.legs["a program"];
// the bracket notation accessing methods
var objects3 = {
  "a program": "Javascript",
  "a software": "Graphics Package",
};
var dataOne = "a program";
var aProgramValue = objects3[dataOne];

// changing the data in the object
var myData = {
  "my dataOne": "Micholab",
  "my dataTwo": "Technology",
  "my dataThree": "Digitals",
};
var myInfo = "my dataOne";
myData[myInfo] = "Coding";
console.log(myData);

// deleting a property from an objects
var myData = {
  "my dataOne": "Micholab",
  "my dataTwo": "Technology",
  "my dataThree": "Digitals",
};
delete myData["my dataOne"];
console.log(myData);

// using objects instead of switch statement
function score(val) {
  var result = "";

  var lookUp = {
    "my dataOne": "Micholab",
    "my dataTwo": "Technology",
    "my dataThree": "Digitals",
  };
  result = lookUp[val];
  return result;
}
console.log(score("my dataOne"));

// // using the  object list in a function
// var object = {
//   list1: "micholab",
//   list2: "technology",
//   list3: "digitals",
// };

// function data(checkProp) {
//   if (object.hasOwnProperty(checkProp)) {
//     return object[checkProp];
//   } else {
//     return "not found";
//   }
// }
// console.log(data("list1"));

var myObj = {
  gift: "pony",
  pet: "kitten",
  bed: "sleigh",
};

function checkObj(checkProp) {
  if (myObj.hasOwnProperty(checkProp)) {
    return myObj[checkProp];
  } else {
    return "Not Found";
  }
}
console.log(checkObj("gift"));

// accessing objects stalked in objects
var myStorage = {
  car: {
    inside: {
      "glove box": "maps",
      "passenger seat": "crumbs",
      "data One": {
        "store one": "data One",
      },
    },
    outside: {
      trunk: "jack",
    },
  },
};

console.log(myStorage.car.inside["glove box"]);

// assessment on accessing objects stalked in objects
var Storage = {
  store: {
    "data One": "Info One",
    "data Two": "info Two",
  },
  "Store Two": {
    "data Sec Two": "Info Sec Two",
  },
};
var select = "data Sec Two";
console.log(Storage.store["data One"]);
console.log(Storage["Store Two"]["data Sec Two"]);

// coding challenge on updates object collections
var collection = {
  2548: {
    album: "let it shine",
    artist: "Bon jovi",
    tracks: ["Let it rock", "you give love a bad name"],
  },
  2468: {
    album: "1999",
    artist: "Prince",
    tracks: ["1999", "Little red Corvette"],
  },
};
var collectionCopy = JSON.parse(JSON.stringify(collection));
function updateRecords(Id, Prop, Value) {
  if (Value === "let it shine") {
    delete collection[Prop][Value];
  } else if (collection[Prop] === "tracks") {
    collection[Prop][Value] = collection[Prop][Value] || [];
    collection[Id][Prop].push(value);
  } else {
    collection[Id][Prop] = Value;
  }
  return collection;
}
console.log(updateRecords("2548", "tracks", "ok"));

// THE WHILE LOOPS
var myArray = [];

var i = 0;
while (i < 5) {
  myArray.push(i);
  i++;
}

// iterate with  for loops
var myArray = [];

function card(val) {
  for (var i = 0; i < 5; i++) {
    myArray.push(i);
  }
  return myArray;
}
console.log(card(2));

// iterate with a for loops
// and incrementing to get
//  a even number and a odd numbers
var myArray = [];
function dataTwo(val) {
  for (var i = 0; i < 8; i += 2) {
    myArray.push(i);
  }
  return myArray;
}
console.log(dataTwo(3));

// for odd numbers
var myCard = [];
function dataThree(val) {
  for (var b = 11; b > -1; b -= 2) {
    myCard.push(b);
  }
  return myCard;
}
console.log(dataThree(3));
// using the for loop to carry out sequence operation
// addition operation
var ourArr = [9, 10, 11, 12];
var ourTotal = 0;

for (let i = 0; i < ourArr.length - 1; i++) {
  ourTotal += ourArr[i];
}
console.log(ourTotal);

// sequence multiplcation operation with for loop
// function multiplyAll(arr) {
//   var product = 1;

//   for (var i = 0; i < arr.length; i++) {
//     for (var j = 0; j < arr[i].length; j++) {
//       product *= arr[i][j];
//     }
//   }
//   return product;
// }
// var product = multiplyAll([
//   [1, 2],
//   [3, 4],
//   [5, 6, 7],
// ]);
// console.log(product);

// ITERATE THE DO WHILE LOOPS
// while loop
var myArray = [];
var i = 0;

while (i < 7) {
  myArray.push(i);
  i++;
}
console.log(i, myArray);

// do while loop
var myArray = [];
var i = 10;

do {
  myArray.push(i);
  i++;
} while (i < 5);
console.log(i, myArray);

// simple challenge with a for, if loop
var contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0994372684",
    likes: ["pizza", "coding", "brownie points"],
  },
  {
    firstName: "harry",
    lastName: "potter",
    number: "09943726834",
    likes: ["hogwarts", "magic", "hagrid "],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0494372684",
    likes: ["intriguing cases", "violin"],
  },
  {
    firstName: "kristian",
    lastName: "vos",
    number: "unknown",
    likes: ["Javascript", "gaming", "foxes"],
  },
];

function lookUpProfile(name, prop) {
  for (var i = 0; i < contacts.length; i++) {
    if (contacts[i].firstname === name) {
      return contacts[i][prop] || "no such property";
    }
  }
  return "no such contacts";
}
var data = lookUpProfile("Sherlock", "hello");
console.log(data);

// creating a random Fraction with javascript
// using the Math function in JS
function randomFraction() {
  return Math.random();
}
console.log(randomFraction());

var randomNumberBetween0and19 = Math.floor(Math.random() * 20);
function randomWholeNum() {
  return Math.floor(Math.random() * 20);
}
console.log(randomWholeNum());

// using the Math.floor function to create a operation
function mathex() {
  return Math.floor(Math.random());
}
console.log(mathex());

// using the Maths to create a particular range
function ourRandomRange(ourMin, OurMax) {
  return Math.floor(Math.random() * (OurMax - ourMin + 1)) + ourMin;
}
console.log(ourRandomRange(2, 5));

// using the parse int function to
// convert a string to the integer
function convertStr(Str) {
  return parseInt(Str);
}
console.log(convertStr("56"));

// converting a string to a int with
// a parseInt function with the use
//  of a radix(that is the base of the
// number in the string)
function convertToInteger(str) {
  return parseInt(str, 2);
}
console.log(convertToInteger("101"));

// using the ternary operator
// NOTE: ternary operator is simply another alternative for the  if statement
function checkEqual(a, b) {
  return a === b ? true : false;
}
console.log(checkEqual(1, 2));

function checkSign(num) {
  return num > 0 ? "positive" : num < 0 ? "negative" : "zero";
}
console.log(checkSign(45));

// showing the diffrence between
// the var keyword and let keywords

// the main difference between the
//  var and let keywords is that
//   let is more specific, that is
// let works in a specific block of
//  code than var

// another difference between the
// let keyword and the var keywords
function checkScope() {
  "use strict";
  let i = "function scope";
  if (true) {
    let i = "block scope";
    console.log("This Scope is " + i);
  }
  console.log("This scope is " + i);
  return i;
}
checkScope();

// another example of the let keywords using the for loops
function printManyTimes(str) {
  "use strict";
  var sentence = str + "is cool";
  sentence = str + " is amazing";
  for (let i = 0; i < str.length; i += 2) {
    console.log(sentence);
  }
  return sentence;
}
printManyTimes("freecodecamp");

// NOTE: if you declare a variable with a
// // const you can not reassign it again
// though we can reassign a const
// but we can edit it or mutate it
const s = [5, 7, 2];
function editInPlace() {
  "use strict";

  s[0] = 2;
  s[1] = 5;
  s[2] = 7;
  return s;
}
console.log(editInPlace());
// freezing an object in a read only keyword
// function freezeObj() {
//   "use strict";
//   const MATH_CONSTANTS = {
//     PI: 3.14,
//   };
//   Object.freeze(MATH_CONSTANTS);

//   try {
//     MATHS_CONSTANTS.PI = 99;
//   } catch (ex) {
//     console.log(ex);
//   }
//   return MATHS_CONSTANTS.PI;
// }
// const PI = freezeObj();

// assessment on Object.freeze function
// when using it in a const keywords
function freezeObj() {
  "use strict";
  const MATH_CONSTANTS = {
    PI: 3.14,
  };
  // Object.freeze(MATH_CONSTANTS);
  MATH_CONSTANTS.PI = 99;
  return MATH_CONSTANTS;
}
console.log(freezeObj());

// using arrow to write anonymous function
var MaGic = function () {
  return new Date();
};
// instead of this do below
// if returning one value
const magic = () => new Date();

// adding argument to anonymous function
var myconcat = function (arr1, arr2) {
  return arr1.concat(arr2);
};
console.log(myconcat([1, 2], [3, 4, 5]));
// using the arrows for the anonymous function instead
const Concat = (arr1, arr2) => arr1.concat(arr2);
console.log(Concat([4, 5], [3, 5]));

// using the arrow function in the high order function
// const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];

// const squarelist = (arr) => {
//   const squaredIntegers = arr
//     .filter((num) => Number.isInteger(num) && num > 0)
//     .map((x) => x * x);
// };
// const squaredIntegers = squarelist(realNumberArray);
// console.log(squaredIntegers);

// explaining constructor function
// to create an object for us
var myCar = {
  maxSpeed: 50,
  driver: "Netninja",
  number: 70,
  drive: function (speed, time) {
    console.log(speed + time);
  },
  logDriver: function () {
    console.log("driver name is " + this.driver);
  },
  example: function () {
    console.log("driver card number is " + this.number);
  },
};
console.log(myCar.drive());

var Car = function (objectOne, objectTwo, objectThree) {
  this.maxSpeed = objectOne;
  this.driver = objectTwo;
  this.number = objectThree;
  this.drive = function (speed, time) {
    console.log(speed + time);
  };
  this.logDriver = function () {
    console.log("driver name is " + this.driver);
  };
  this.example = function () {
    console.log("driver card number is " + this.number);
  };
};
var myCar = new Car(70, "ninja man", 80);
var myCar2 = new Car(70, "super man", 90);
var myCar3 = new Car(70, "bat man", 100);
var myCar4 = new Car(70, "action man", 120);

myCar.drive(30, 5);
myCar2.logDriver();
myCar3.example();

// simple assessment of the constructor function
var info = {
  dataOne: 50,
  dataTwo: 70,
  dataThree: "Micholab",
  dataFour: function (speed, time) {
    console.log(speed + time);
  },
  dataFive: function () {
    console.log("that programmer name is " + this.dataThree);
  },
};
console.log(info["dataFive"]());

var info = function (selOne, selTwo, selThree) {
  this.dataOne = selOne;
  this.dataTwo = selTwo;
  this.dataThree = selThree;
  this.dataFour = function (speed, time) {
    console.log(speed + time);
  };
  this.dataFive = function () {
    console.log("that programmer name is " + this.dataThree);
  };
};

var infoTwo = new info(70, 100, "J zee");

console.log(infoTwo.dataFour(50, 150));
console.log(infoTwo.dataFive());
console.log(infoTwo.dataOne);

// using the date function
let myDate = Date();
console.log(myDate);

let pastDate = new Date(1945, 11, 17, 10, 30, 15);
console.log(pastDate);
console.log(pastDate.getMonth());
console.log(pastDate.getFullYear());
console.log(pastDate.getDate());
console.log(pastDate.getDay());
// you can also use the if statement to compare the date

// N:B
const speak = function (name) {
  console.log(`good day ${name}`);
};
speak("bola");

// LEARNING THE ARROW FUNCTIONS
const calcArea = (radius) => {
  return 3.14 * radius ** 2;
};
console.log(calcArea(5));

// USING THE CALLBACK FUNCTIONS
let people = ["mario", "luigi", "ruy", "micholab", "shaun"];

const logPerson = (person, index) => {
  console.log(`${index} - hello ${person}`);
};
people.forEach(logPerson);

// arranging a array either alphabetically or
// numerically with the use of the sort function
var myArray = [2, 300, 400, 50, 70];

var mainStorage = myArray.sort(function store(a, b) {
  return b - a;
  a - b;
});
console.log(mainStorage);

// EXPLAINING THE DOCUMENT OBJECT MODEL(DOM)
