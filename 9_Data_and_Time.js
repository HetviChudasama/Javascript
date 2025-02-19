// Dates 

let myDate = new Date()
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString());
console.log(myDate.toLocaleTimeString());
console.log(myDate.toTimeString());
console.log(myDate.toUTCString());
console.log(myDate.getTimezoneOffset());
console.log(myDate.getUTCDate());

console.log(typeof myDate); // output : Object 

let myCreateDate = new Date(2023, 0, 23);
console.log(myCreateDate.toDateString());  

let myCreatedDate = new Date(2023, 0, 23, 5, 3);
console.log(myCreatedDate.toLocaleDateString());
console.log(myCreatedDate.toDateString());

let newDate = new Date('2023-01-23');
console.log(newDate);

let myTimeStamp = Date.now()

console.log(myTimeStamp);  // output : 1739810203812
console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));

// let myDate = new Date()
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString());
console.log(myDate.toLocaleTimeString());
console.log(myDate.toTimeString());
console.log(myDate.toUTCString());
console.log(myDate.getTimezoneOffset());
console.log(myDate.getUTCDate());
console.log(myDate.getUTCDay());
console.log(myDate.getUTCFullYear());
console.log(myDate.getUTCHours());
console.log(myDate.getUTCMilliseconds());
console.log(myDate.getUTCMinutes());
console.log(myDate.getUTCMonth());
console.log(myDate.getUTCSeconds());
console.log(myDate.getDate());
console.log(myDate.getDay());
console.log(myDate.getFullYear());
console.log(myDate.getHours());
console.log(myDate.getMilliseconds());
console.log(myDate.getMinutes());
console.log(myDate.getMonth());
console.log(myDate.getSeconds());
console.log(myDate.getTime());
console.log(myDate.getMilliseconds());
console.log(myDate.setMilliseconds(500));
console.log(myDate.setSeconds(30));
console.log(myDate.setMinutes(30));
console.log(myDate.setHours(10));
console.log(myDate.setDate(15));
console.log(myDate.setMonth(5));
console.log(myDate.setFullYear(2025));
console.log(myDate.setUTCDate(15));
console.log(myDate.setUTCFullYear(2025));
console.log(myDate.setUTCHours(10));
console.log(myDate.setUTCMilliseconds(500));
console.log(myDate.setUTCMinutes(30));
console.log(myDate.setUTCMonth(5));
console.log(myDate.setUTCSeconds(30));


// Interesting Proeprty of the tolocalString()
newDate.toLocaleString('default',{
    weekday: 'long',
    year: 'numeric', 
    dateStyle : 'full',
    hour12: false,
    timeZone:'acccording'
})