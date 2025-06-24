// Javascript Date Objects :
const d = new Date();
console.log(d);

const date = new Date("2022-10-25");
console.log(date);

// New Date(date string) creates a date object from a date string

const dat = new Date("Octomber 13, 2014 11:13:00");
console.log(dat);

// New Date (Year, Month ...) create a date object with a specified date and time.

const today = new Date(2018, 11, 224, 10, 33, 30, 0);
console.log(today);

// note: Note
// JavaScript counts months from 0 to 11:
// January = 0.
// December = 11.

// 6 numbers specify year, month, day, hour, minute, second:

const day = new Date(2018, 2, 24, 10, 24, 90);
console.log(day);

// new date (miliseconds):

const seconds = new Date(1000000000);
console.log(seconds);

const e = new Date(-100000000000);
console.log(e);

const f = new Date(24 * 60 * 60 * 1000);
console.log(f);

const h = new Date(86400000);

let j = h.toString();

console.log(j); //output :Fri Jan 02 1970 05:30:00 GMT+0530 (India Standard Time)
let k = h.toDateString();

console.log(k); //output : Fri Jan 02 1970
console.log(h);

// Note : The toISOString() method converts a date to a string using the ISO standard:
console.log(h.toISOString());
console.log(h.toUTCString());
console.log(Date()); //output : Tue Apr 29 2025 19:12:18 GMT+0530 (India Standard Time)

// Javascript Get Date Methods

// mehods : getFullyear(), getMonth(), getDate() , getDay(), getHours(), getMinutes(), getSeconds(), getMiliseconds(), getTime().

// Note: Note 1
// The get methods above return Local time.
// Universal time (UTC) is documented at the bottom of this page.

const datee = new Date("2021-03-25");
console.log(datee.getFullYear()); //output : 2021

console.log(datee.getMonth() + 1); //output : 03

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

let time = new Date("2025-04-29");
console.log(time.getMonth() + 1);

// Note: The getDate() method returns the day of a date as a number (1-31):
console.log(time.getDate()); //29
console.log(time.getHours()); //output : 5
console.log(time.getHours() + 4); // output : 9

// The getMinutes() Method :

console.log(time.getMinutes()); //output : 30
console.log(time.getSeconds()); //output : 0
console.log(time.getMilliseconds()); //output : 0
console.log(time.getDay()); //output : 2

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const de = new Date("2021-03-25");
let day1 = days[de.getDay()];
console.log(day1); //Thusrday

const dey = new Date("1970-01-01");
let t = dey.getTime();
console.log(t);

let ms = Date.now();
const minute = 1000 * 60;
const hour = minute * 60;
const dayy = hour * 24;
const year = dayy * 365;
console.log(ms / year);
console.log(time.getTimezoneOffset()); //output : -330

// Javascript Set Date Methods :
// Method	Description :

// setDate()	Set the day as a number (1-31)
// setFullYear()	Set the year (yyyy)
// setHours()	Set the hour (0-23)
// setMilliseconds()	Set the milliseconds (0-999)
// setMinutes()	Set the minutes (0-59)
// setMonth()	Set the month (0-11)
// setSeconds()	Set the seconds (0-59)
// setTime()	Set the time (milliseconds since January 1, 1970)

// the setFullYear() Method:

const setdate = new Date("januaray 01, 2025");
console.log(setdate.setFullYear(2020));
console.log(setdate.setFullYear(2020));
console.log(setdate.setFullYear(2020, 11, 3));

// 2. SetMonth() Method  :
let month = setdate.setMonth(11);
console.log(month);
console.log(setdate.setDate(15));
console.log(setdate.getDate() + 50);
console.log(setdate.getFullYear());
console.log(setdate.getHours());

// Note : Note
// If adding days shifts the month or year, the changes are handled automatically by the Date object.

// the setHours() method :

console.log(setdate.setHours(22));
console.log("the hours are : ", setdate.setHours(22, 10, 20));
console.log(setdate.setMinutes(30));
console.log("setting the seconds are :", setdate.setSeconds(30));

// Compares the Dates :

const todayy = new Date();
console.log(todayy);

const someday = new Date();
console.log(someday);

someday.setFullYear(2100, 0, 14);

if (someday > today) {
  console.log("Today is beefore January 14, 2100");
} else {
  console.log("Today is after January 14, 2100");
}
