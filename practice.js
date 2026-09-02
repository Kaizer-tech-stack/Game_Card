function myFunction() {
  document.getElementById("hello").innerHTML = "Paragraph Changed";
}

function sayHello() {
  return "Hello";
}
document.getElementById("demo").innerHTML = sayHello();

function myWorld() {
  return "WAZZUP";
}
document.getElementById("world").innerHTML = myWorld();

function add(a, b) {
  return a + b;
}
let result = add(5, 5);
document.getElementById("add").innerHTML = "The result is " + result;

function Name(name) {
  return "Hello " + name;
}
let greeting = Name("John");
document.getElementById("Name").innerHTML = greeting;

function toCelcius(fahrenheit) {
  return (5 / 9) * (fahrenheit - 32);
}
let value = toCelcius(77);
console.log(value);

function myName(fName, lName) {
  return fName + lName;
}
let fullname = myName("Cloud ", "Kaizer");
console.log(fullname);

function checkAge(Age) {
  if (Age >= 18) {
    return "You're Legal";
  } else {
    return "You're Not Legal";
  }
}
//let myAge = checkAge(21);
document.getElementById("age").innerHTML = checkAge(15);

const maxNumber = function () {
  let max = -Infinity;
  for (let i = 0; i < arguments.length; i++) {
    if (arguments[i] > max) {
      max = arguments[i];
    }
  }
  return max;
};
document.getElementById("maxNumber").innerHTML = maxNumber(25, 26, 40);

const sumNumber = function () {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
};
document.getElementById("sumAll").innerHTML = sumNumber(25, 26);

setTimeout(myfunction, 3000);

function myfunction() {
  Display("Hiaafafas!");
}

function Display(text) {
  let minusAll = document.getElementById("minusAll");
  minusAll.innerHTML += text;
}

setTimeout(displayNum, 5000);

function displayNum() {
  multiplyNum(5, 5);
}

function multiplyNum(a, b) {
  let multiply = document.getElementById("multiply");
  multiply.innerHTML = a * b;
}

setInterval(showInterval, 3000);

function showInterval() {
  const date = new Date();
  intervalTime(date.toLocaleTimeString());
}

function intervalTime(text) {
  let interval = document.getElementById("interval");
  interval.innerHTML = text;
}

setTimeout(message, 3000, "Hello", "Kaizer");

function message(greetings, names) {
  document.getElementById("intervalMessage").innerHTML =
    greetings + " " + names;
}
