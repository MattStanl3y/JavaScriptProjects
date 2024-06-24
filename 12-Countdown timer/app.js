const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];


// haven't implemented yet
const giveaway = document.querySelector(".giveaway");
const deadline = document.querySelector(".deadline");
const items = document.querySelector(".deadline-format h4");

// current time
let currDay = Date.getDay();
let currMonth = Date.getMonth();
let currYear = Date.getFullYear();

// giveaway date in object
const futureDate = new Date(currYear, currMonth, currDay + 10, 11, 30,0,0);

// giveaway date
const year = futureDate.getFullYear();
const month = futureDate.getMonth();
const day = futureDate.getDay();
const hour = futureDate.getHour();
const minute = futureDate.getMinutes();
const seconds = futureDate.getSeconds();


// haven't implemented yet






