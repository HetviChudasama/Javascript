// If statemenet :

if (hours < 18) {
  greeting = "Good day!";
}

// Else statement  :
if (hours < 18) {
  greeting = "Good day!";
} else {
  greeting = "Good evening!";
}

// Else if Statmenet :
// Note : Use the else if statement to specify a new condition if the first condition is false.

// Example :
// If tiem is less than 10:00 , create a "Good morning" greeting, if not , but time is less than 20:00 , create a "Good day" greeting , otherwise a "Good evening" :
let time = 23;

if (time < 10) {
  greeting = "Good morning";
} else if (time < 20) {
  greeting = "Good day!";
} else {
  greeting = "Good evening ";
}

// Switch Statement  :

// Note : Use the switch statement to select one of many code blocks to be executed.

// The Swtich expression is evaluated once.
// The value of the expression is compared with the values of each case.
// If there is a match , the associated block of code is executed .
// If there is no match , the default code block is executed.

switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
}

//   The break Keyword :

switch (new Date().getDay()) {
  case 6:
    Text = "Today is Saturday";
    break;
  case 0:
    Text = "Today is Sunday";
    break;

  default:
    Text = "Looking forward to the Weekend";
}

// result :Looking forward to the Weekend

// The default case does not have to be the last case in a swtich block :

switch (new Date().getDay()) {
  default:
    Text = "Looking forward to the Weekend";
    break;

  case 6:
    text = "Today is saturday!";
    break;

  case 0:
    text = "Today is Sunday";
    break;
}
