//Get time alg
let dayArr = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

let today = new Date();
let hours = today.getHours();
let minutes = today.getMinutes();
let seconds = today.getSeconds();
let day = today.getDay();

let total = console.log(`Today is ${dayArr[day]}.`);

let options = (hours >= 12) ? "PM" : "AM";

hours = (hours >= 12) ? hours - 12 : hours;

if (hours === 0 && options === "PM") {
  if (seconds === 0 && minutes === 0) {
    hours = 12;
    options = "It's Noon.";
  }
  else {
    hours = 12;
    options = "PM";
  }
}

if (hours === 0 && options === "AM") {
  if (seconds === 0 && seconds === 0) {
    hours = 12;
    options = "It's Midnight.";
  }
  else {
    hours = 12;
    options = "AM";
  }
}

console.log(`The current time is: ${hours}${options} : ${minutes} : ${seconds}s`);

//print current screen

function printScreen(){
  window.print();
}

//Get currrent Date

let currentDate = new Date();
let gDay = currentDate.getDay() + 3;
let gYear = currentDate.getFullYear();
let gMonth = currentDate.getMonth() + 1;

if (gDay < 10) {
  gDay = `0${gDay}`;
}
if (gMonth < 10) {
  gMonth = `0${gMonth}`;
}

console.log(`${gMonth}/${gDay}/${gYear}`);

//Pythagorean Theroem
function theroem() {
  return Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2))
}

let a = Math.pow(a,2);
let b = Math.pow(b,2);
let c = Math.pow(c,2);






