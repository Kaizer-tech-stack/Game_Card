const addition = function (a, b) {
  return a + b;
};

const subtraction = function (a, b) {
  return a - b;
};

const multiply = function (a, b) {
  return a * b;
};

const division = function (a, b) {
  return a / b;
};

const remainder = function (a, b) {
  return a % b;
};

document.getElementById("add").innerHTML = addition(15, 4);
document.getElementById("subs").innerHTML = subtraction(15, 4);
document.getElementById("multi").innerHTML = multiply(15, 4);
document.getElementById("divide").innerHTML = division(15, 4);
document.getElementById("remain").innerHTML = remainder(15, 4);

const all = function (x, y, z) {
  return x + y * z;
};
document.getElementById("all").innerHTML = all(10, 3, 2);

const ex1 = function (a, b, c) {
  return a + b - c;
};
console.log(ex1(8, 5, 2));

const ex2 = function (a, b, c) {
  return a * b + c;
};
console.log(ex2(8, 5, 2));

const ex3 = function (a, b, c) {
  return (a + b) * c;
};
console.log(ex3(8, 5, 2));

const ex4 = function (a, b, c) {
  return a / c + b;
};
console.log(ex4(8, 5, 2));

function scores() {
  let score = 50;
  let add = score + 20;
  return add;
}
console.log(scores());

function scores2() {
  let score = 50;
  let multiply = score * 2;
  return multiply;
}
console.log(scores2());

function scores3() {
  let score = 50;
  let subtract = score - 30;
  return subtract;
}
console.log(scores3());

function ex5() {
  let price = 250;
  let quantity = 3;
  let discount = 50;

  let total = price * quantity - discount;
  return total;
}
console.log(ex5());

function ex6() {
  let a = 12;
  let b = 4;
  let c = 2;
  let d = 3;

  let calculate = ((a + b) * c) / d;
  return calculate;
}
console.log(ex6());

const student = {
  name: "Cloud",
  age: 20,
  course: "BSCS",
  year: 2,
};
console.log(student.name);
console.log(student.age);
console.log(student.course);
console.log(student.year);

const phone = {
  brand: "Apple",
  model: "iPhone 15",
  price: 45000,
};
console.log(phone.model);
phone.color = "Black";
console.log(phone.color);

const car = {
  brand: "Toyota",
  model: "Vios",
  year: 2025,
  displayInfo: function () {
    return this.brand + " " + this.model + " - " + this.year;
  },
};

console.log(car.displayInfo());

const account = {
  username: "cloud123",
  email: "cloud@gmail.com",
  balance: 5000,
  status: "Active",
};
console.log(account.balance);
account.balance = 7500;
console.log(account.balance);
console.log(account.status);

const student1 = {
  name: "Cloud",
  math: 90,
  science: 85,
  programming: 90,

  getAverage: function () {
    return (this.math + this.science + this.programming) / 3;
  },
};
console.log(student1.getAverage());

const date = new Date();
document.getElementById("date").innerHTML = date.getDay();
date.getDate();
